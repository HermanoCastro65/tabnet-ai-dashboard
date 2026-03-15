from typing import Any, Dict, List

from typing_extensions import TypedDict  # type: ignore


class DatasetStatistics(TypedDict):
    rows: int
    columns: int


class DatasetPreviewResponse(TypedDict):
    dataset_id: str
    columns: List[str]
    preview: List[Dict[str, Any]]


class DatasetUploadResponse(DatasetStatistics):
    dataset_id: str
    metadata: Dict[str, Any]