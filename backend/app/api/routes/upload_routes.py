from fastapi import APIRouter, File, UploadFile  # type: ignore

from app.services.dataset_service import handle_dataset_upload
from app.types.dataset_types import DatasetUploadResponse

router = APIRouter()


@router.post("/upload")
async def upload_dataset(file: UploadFile = File(...)) -> DatasetUploadResponse:

    return handle_dataset_upload(file)