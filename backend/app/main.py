from fastapi import FastAPI  # type: ignore

from app.api.routes.dataset import router as dataset_router
from app.api.routes.upload import router as upload_router

app = FastAPI(title="TabNet AI Dashboard API")

app.include_router(upload_router, prefix="/api")
app.include_router(dataset_router, prefix="/api")
