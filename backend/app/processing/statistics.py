import pandas as pd  # type: ignore

from app.types.dataset_types import DatasetStatistics


def compute_basic_statistics(dataframe: pd.DataFrame) -> DatasetStatistics:

    return {
        "rows": int(len(dataframe)),
        "columns": int(len(dataframe.columns)),
    }