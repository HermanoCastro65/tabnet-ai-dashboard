import pandas as pd  # type: ignore

from app.data.dataset_store import DatasetStore


def test_store_and_retrieve_dataset():
    store = DatasetStore()

    df = pd.DataFrame({
        "a": [1, 2, 3]
    })

    dataset_id = store.save(df)

    retrieved = store.get(dataset_id)

    assert retrieved.equals(df)
