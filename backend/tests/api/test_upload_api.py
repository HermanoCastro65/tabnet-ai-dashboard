def test_upload_returns_dataset_metadata(client, sample_csv):

    response = client.post(
        "/api/upload",
        files={"file": ("dataset.csv", sample_csv, "text/csv")},
    )

    assert response.status_code == 200

    data = response.json()

    assert "dataset_id" in data
    assert "rows" in data
    assert "columns" in data
    assert "metadata" in data

    assert data["rows"] == 3
    assert data["columns"] == 3


def test_upload_creates_unique_dataset_ids(client, sample_csv):

    response1 = client.post(
        "/api/upload",
        files={"file": ("dataset.csv", sample_csv, "text/csv")},
    )

    response2 = client.post(
        "/api/upload",
        files={"file": ("dataset.csv", sample_csv, "text/csv")},
    )

    id1 = response1.json()["dataset_id"]
    id2 = response2.json()["dataset_id"]

    assert id1 != id2