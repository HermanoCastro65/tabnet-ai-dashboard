import pandas as pd  # type: ignore


def load_csv(file):

    df = pd.read_csv(file.file)

    return df
