import json

from app.core.config import DEFAULT_PREVIEW_LIMIT
from app.data.dataset_store import dataset_store
from app.processing.csv_loader import load_csv_dataset
from app.processing.statistics import compute_basic_statistics


def handle_dataset_upload(file):

    dataframe, metadata = load_csv_dataset(file)

    dataset_id = dataset_store.save(dataframe)

    stats = compute_basic_statistics(dataframe)

    return {
        "dataset_id": dataset_id,
        "metadata": metadata,
        **stats,
    }


def get_dataset_preview(dataset_id, limit=DEFAULT_PREVIEW_LIMIT):

    dataframe = dataset_store.get(dataset_id)

    if dataframe is None:
        return None

    preview_df = dataframe.head(limit)

    preview = json.loads(preview_df.to_json(orient="records"))

    return {
        "dataset_id": dataset_id,
        "columns": list(dataframe.columns),
        "preview": preview,
    }