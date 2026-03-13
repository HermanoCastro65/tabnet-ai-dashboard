from fastapi.testclient import TestClient  # type: ignore

from app.main import app

client = TestClient(app)


def test_dataset_preview_returns_data():

    csv_content = """age,city,income
25,Rio,3000
30,SaoPaulo,4500
35,Rio,5200
"""

    upload = client.post(
        "/api/upload",
        files={"file": ("data.csv", csv_content, "text/csv")},
    )

    dataset_id = upload.json()["dataset_id"]

    response = client.get(f"/api/dataset/{dataset_id}/preview")

    assert response.status_code == 200

    data = response.json()

    assert data["dataset_id"] == dataset_id
    assert len(data["preview"]) > 0
    assert "columns" in data
