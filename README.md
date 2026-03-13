# TabNet AI Dashboard

Minimal setup for development.

## Tech Setup

The project uses a **monorepo structure** with two main components:

### Backend

The backend is built with **Python + FastAPI** for data processing and AI analysis.

Required tools:

- Python 3.11+
- pip
- virtualenv (via `python -m venv`)

Main libraries installed:

- **FastAPI** – API framework
- **Uvicorn** – ASGI server
- **Pandas** – data processing
- **Scikit-learn** – machine learning
- **Pytest** – backend testing

### Frontend

The frontend is built with **Next.js + TypeScript**.

Required tools:

- Node.js
- Yarn

Main libraries installed:

- **Next.js** – React framework
- **TypeScript** – static typing
- **Recharts** – data visualization
- **PapaParse** – CSV parsing
- **Jest** – frontend testing

## Clone

git clone https://github.com/HermanoCastro65/tabnet-ai-dashboard.git

cd tabnet-ai-dashboard

## Backend

```shel
cd backend
python -m venv venv
.\venv\Scripts\Activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```


API: http://localhost:8000  
Docs: http://localhost:8000/docs

## Frontend

```shel
cd frontend
yarn install
yarn dev
```

Frontend: http://localhost:3000

## Tests

Backend:

```shel
pytest
```

Frontend:

```shel
yarn test
```



