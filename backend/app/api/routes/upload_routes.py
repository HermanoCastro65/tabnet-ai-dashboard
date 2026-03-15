from fastapi import APIRouter, File, UploadFile  # type: ignore

from app.services.dataset_service import handle_dataset_upload

router = APIRouter()


@router.post("/upload")
async def upload_dataset(file: UploadFile = File(...)):
    return handle_dataset_upload(file)