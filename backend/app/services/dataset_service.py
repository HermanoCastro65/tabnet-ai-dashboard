from app.data_processing.loader import load_csv
from app.data_processing.statistics import basic_statistics
from app.storage.dataset_store import dataset_store


def process_dataset(file):
    df = load_csv(file)

    dataset_id = dataset_store.save(df)

    stats = basic_statistics(df)

    return {
        "dataset_id": dataset_id,
        **stats,
    }


def get_dataset_preview(dataset_id, limit=5):
    df = dataset_store.get(dataset_id)

    if df is None:
        return None

    return {
        "dataset_id": dataset_id,
        "columns": list(df.columns),
        "preview": df.head(limit).to_dict(orient="records"),
    }
