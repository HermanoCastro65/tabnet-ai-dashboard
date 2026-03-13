import io
import re

import pandas as pd  # type: ignore


def extract_metadata(lines):

    metadata = {}

    # -------------------------
    # título da pesquisa
    # -------------------------

    if lines:
        title = lines[0].strip()
        if title:
            metadata["title"] = title

            # tentar extrair local do título
            if "-" in title:
                parts = title.split("-", 1)
                metadata["indicator"] = parts[0].strip()
                metadata["location"] = parts[1].strip()

    # -------------------------
    # query fields (filtros)
    # -------------------------

    for line in lines:

        if ":" in line:

            key, value = line.split(":", 1)

            key = key.strip()
            value = value.strip()

            if key and value and len(key) < 60:

                # evitar capturar textos grandes
                if len(value) < 120:
                    metadata[key] = value

    return metadata


def detect_table_start(lines):

    for i, line in enumerate(lines):

        if ":" in line:
            continue

        tokens = re.split(r"\s{2,}|\t|;", line.strip())

        if len(tokens) >= 3:

            if "Óbitos" in line and "por" in line:
                continue

            return i

    return None


def load_csv(file):

    raw = file.file.read()

    try:
        text = raw.decode("utf-8")
    except UnicodeDecodeError:
        text = raw.decode("latin1")

    lines = text.splitlines()

    metadata = extract_metadata(lines[:100])

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

    for col in df.columns[1:]:
        df[col] = pd.to_numeric(df[col], errors="coerce")

    return df, metadata