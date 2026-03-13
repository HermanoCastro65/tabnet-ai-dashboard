from fastapi.testclient import TestClient  # type: ignore

from app.main import app

client = TestClient(app)


def test_upload_returns_dataset_id():
    csv_content = """age,city,income
25,Rio,3000
30,SaoPaulo,4500
35,Rio,5200
"""

    response = client.post(
        "/api/upload",
        files={"file": ("test.csv", csv_content, "text/csv")},
    )

    assert response.status_code == 200

    data = response.json()

    assert "dataset_id" in data
    assert "rows" in data
    assert "columns" in data

    assert data["rows"] == 3
    assert data["columns"] == 3
