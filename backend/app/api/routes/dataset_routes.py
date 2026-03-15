from typing import Optional

from fastapi import APIRouter, HTTPException  # type: ignore

from app.services.dataset_service import get_dataset_preview
from app.types.dataset_types import DatasetPreviewResponse

router = APIRouter()


@router.get("/dataset/{dataset_id}/preview")
def dataset_preview(dataset_id: str) -> DatasetPreviewResponse:

    preview: Optional[DatasetPreviewResponse] = get_dataset_preview(dataset_id)

    if preview is None:
        raise HTTPException(status_code=404, detail="Dataset not found")

    return preview