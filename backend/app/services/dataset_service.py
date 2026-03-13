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
