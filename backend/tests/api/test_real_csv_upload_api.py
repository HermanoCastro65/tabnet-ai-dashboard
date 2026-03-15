import pathlib


def test_real_csv_upload(client):

    path = pathlib.Path("tests/fixtures/data_set (1).csv")

    with open(path, "rb") as file:

        response = client.post(
            "/api/upload",
            files={"file": ("dataset.csv", file, "text/csv")},
        )

    assert response.status_code == 200

    data = response.json()

    assert "dataset_id" in data
    assert "rows" in data
    assert "columns" in data

    assert data["rows"] > 0
    assert data["columns"] > 0