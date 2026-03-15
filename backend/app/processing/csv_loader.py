import io
import re

import pandas as pd  # type: ignore


def parse_title(lines):

    metadata = {}

    if not lines:
        return metadata

    title = lines[0].strip()

    if title:

        metadata["title"] = title

        if "-" in title:
            indicator, location = title.split("-", 1)
            metadata["indicator"] = indicator.strip()
            metadata["location"] = location.strip()

    return metadata


def parse_query_fields(lines):

    metadata = {}

    for line in lines:

        if ":" in line:

            key, value = line.split(":", 1)

            key = key.strip()
            value = value.strip()

            if key and value and len(key) < 60 and len(value) < 120:
                metadata[key] = value

    return metadata


def parse_structure(lines):

    structure = {}

    for line in lines:

        if " por " in line and " e " in line:

            structure["description"] = line.strip()

            metric, rest = line.split(" por ", 1)

            structure["metric"] = metric.strip()

            axes = rest.split(" e ")

            if len(axes) == 2:
                structure["row_dimension"] = axes[0].strip()
                structure["column_dimension"] = axes[1].strip()

            break

    return structure


def extract_metadata(lines):

    metadata = {}

    metadata.update(parse_title(lines))
    metadata.update(parse_query_fields(lines))
    metadata.update(parse_structure(lines))

    return metadata


def detect_table_start(lines):

    for index, line in enumerate(lines):

        if ":" in line:
            continue

        tokens = re.split(r"\s{2,}|\t|;", line.strip())

        if len(tokens) >= 2:

            if "Fonte" in line:
                continue

            return index

    return None


def remove_tabnet_footer(df):

    first_column = df.columns[0]

    stop_patterns = [
        r"^Fonte",
        r"^Nota",
        r"^\-",
    ]

    mask = df[first_column].astype(str).str.contains(
        "|".join(stop_patterns),
        case=False,
        regex=True,
        na=False,
    )

    if mask.any():

        first_index = mask.idxmax()

        df = df.loc[: first_index - 1]

    return df


def load_csv_dataset(file):

    raw = file.file.read()

    try:
        text = raw.decode("utf-8")
    except UnicodeDecodeError:
        text = raw.decode("latin1")

    lines = text.splitlines()

    metadata = extract_metadata(lines[:120])

    header_index = detect_table_start(lines)

    if header_index is None:

        buffer = io.StringIO(text)

        df = pd.read_csv(buffer, sep=None, engine="python")

    else:

        table_text = "\n".join(lines[header_index:])

        buffer = io.StringIO(table_text)

        df = pd.read_csv(
            buffer,
            sep=r"\s{2,}|\t|;",
            engine="python",
            on_bad_lines="skip",
        )

    df.columns = df.columns.str.replace('"', "").str.strip()

    df = df.replace('"', "", regex=True)

    df = df.replace("-", pd.NA)

    if len(df.columns) > 1:

        for col in df.columns[1:]:
            df[col] = pd.to_numeric(df[col], errors="coerce")

    df = remove_tabnet_footer(df)

    return df, metadata