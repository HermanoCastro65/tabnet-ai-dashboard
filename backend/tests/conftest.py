import pytest  # type: ignore
from fastapi.testclient import TestClient  # type: ignore

from app.main import app


@pytest.fixture
def client():
    return TestClient(app)


@pytest.fixture
def sample_csv():

    return """age,city,income
25,Rio,3000
30,SaoPaulo,4500
35,Rio,5200
"""