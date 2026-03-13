import io

import pandas as pd  # type: ignore


def load_csv(file):

    raw = file.file.read()

    # detectar encoding
    try:
        text = raw.decode("utf-8")
    except UnicodeDecodeError:
        text = raw.decode("latin1")

    buffer = io.StringIO(text)

    # tentar leitura automática
    try:
        df = pd.read_csv(buffer, sep=None, engine="python")
    except Exception:
        buffer.seek(0)
        df = pd.read_csv(
            buffer,
            sep=";",
            engine="python",
            on_bad_lines="skip",
        )

    return df
