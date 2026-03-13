from fastapi import APIRouter, File, UploadFile  # type: ignore

from app.services.dataset_service import process_dataset

router = APIRouter()


@router.post("/upload")
async def upload_dataset(file: UploadFile = File(...)):
    return process_dataset(file)
