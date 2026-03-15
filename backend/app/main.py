from fastapi import FastAPI  # type: ignore
from fastapi.middleware.cors import CORSMiddleware  # type: ignore

from app.api.routes.dataset_routes import router as dataset_router
from app.api.routes.upload_routes import router as upload_router

app = FastAPI(title="TabNet AI Dashboard API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload_router, prefix="/api")
app.include_router(dataset_router, prefix="/api")