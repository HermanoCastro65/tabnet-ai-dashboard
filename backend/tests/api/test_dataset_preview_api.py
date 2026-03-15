def test_dataset_preview_returns_data(client, sample_csv):

    upload = client.post(
        "/api/upload",
        files={"file": ("dataset.csv", sample_csv, "text/csv")},
    )

    dataset_id = upload.json()["dataset_id"]

    response = client.get(f"/api/dataset/{dataset_id}/preview")

    assert response.status_code == 200

    data = response.json()

    assert data["dataset_id"] == dataset_id
    assert "columns" in data
    assert "preview" in data

    assert len(data["preview"]) > 0
    assert len(data["columns"]) == 3


def test_dataset_preview_respects_limit(client, sample_csv):

    upload = client.post(
        "/api/upload",
        files={"file": ("dataset.csv", sample_csv, "text/csv")},
    )

    dataset_id = upload.json()["dataset_id"]

    response = client.get(f"/api/dataset/{dataset_id}/preview")

    data = response.json()

    assert len(data["preview"]) <= 50


def test_dataset_preview_invalid_dataset_returns_404(client):

    response = client.get("/api/dataset/invalid-id/preview")

    assert response.status_code == 404