import io

import pandas as pd  # type: ignore


def load_csv(file):

    raw = file.file.read()

    try:
        text = raw.decode("utf-8")
    except UnicodeDecodeError:
        text = raw.decode("latin1")

    if "Cap I" not in text:

        buffer = io.StringIO(text)

        df = pd.read_csv(buffer, sep=None, engine="python")

    else:

        lines = text.splitlines()

        header_index = None

        for i, line in enumerate(lines):
            if "Cap I" in line:
                header_index = i
                break

        table_text = "\n".join(lines[header_index:])

        buffer = io.StringIO(table_text)

        df = pd.read_csv(
            buffer,
            sep=r"\s{2,}|\t|;",
            engine="python",
            on_bad_lines="skip",
        )

    # ------------------------
    # LIMPEZA DOS DADOS
    # ------------------------

    # remover aspas das colunas
    df.columns = df.columns.str.replace('"', "").str.strip()

    # remover aspas dos valores
    df = df.replace('"', "", regex=True)

    # transformar "-" em NaN
    df = df.replace("-", pd.NA)

    # converter colunas numéricas
    for col in df.columns[1:]:
        df[col] = pd.to_numeric(df[col], errors="coerce")

    print("\n========== CSV CLEANED ==========")
    print(df.head())
    print("=================================\n")

    return df
