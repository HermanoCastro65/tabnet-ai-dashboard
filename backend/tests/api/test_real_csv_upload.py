import pathlib

from fastapi.testclient import TestClient  # type: ignore

from app.main import app

client = TestClient(app)


def test_real_csv_upload():

    path = pathlib.Path("tests/fixtures/data_set (1).csv")

    with open(path, "rb") as f:

        response = client.post(
            "/api/upload",
            files={"file": ("dataset.csv", f, "text/csv")},
        )

    assert response.status_code == 200

    data = response.json()

    assert "dataset_id" in data
    assert data["rows"] > 0
