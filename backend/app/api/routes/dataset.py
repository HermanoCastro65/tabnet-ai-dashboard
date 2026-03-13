from fastapi import APIRouter, HTTPException  # type: ignore

from app.services.dataset_service import get_dataset_preview

router = APIRouter()


@router.get("/dataset/{dataset_id}/preview")
def dataset_preview(dataset_id: str):

    data = get_dataset_preview(dataset_id)

    if data is None:
        raise HTTPException(status_code=404, detail="Dataset not found")

    return data
