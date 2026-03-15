from __future__ import annotations

import uuid
from typing import Dict, Optional

import pandas as pd  # type: ignore


class DatasetStore:

    def __init__(self) -> None:
        self._datasets: Dict[str, pd.DataFrame] = {}

    def save(self, dataframe: pd.DataFrame) -> str:

        dataset_id: str = str(uuid.uuid4())

        self._datasets[dataset_id] = dataframe

        return dataset_id

    def get(self, dataset_id: str) -> Optional[pd.DataFrame]:

        return self._datasets.get(dataset_id)


dataset_store = DatasetStore()