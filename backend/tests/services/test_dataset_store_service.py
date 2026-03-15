import pandas as pd  # type: ignore

from app.data.dataset_store import DatasetStore


def create_dataframe():

    return pd.DataFrame(
        {
            "age": [20, 30, 40],
            "city": ["Rio", "SP", "BH"],
        }
    )


def test_dataset_store_saves_dataframe():

    store = DatasetStore()

    df = create_dataframe()

    dataset_id = store.save(df)

    assert dataset_id is not None
    assert isinstance(dataset_id, str)


def test_dataset_store_retrieves_saved_dataframe():

    store = DatasetStore()

    df = create_dataframe()

    dataset_id = store.save(df)

    retrieved = store.get(dataset_id)

    assert retrieved is not None
    assert retrieved.equals(df)


def test_dataset_store_returns_none_for_unknown_dataset():

    store = DatasetStore()

    result = store.get("non-existent-id")

    assert result is None