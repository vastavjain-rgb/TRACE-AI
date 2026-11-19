# TRACE AI Backend

FastAPI backend starter for TRACE AI.

## Run locally

```bash
cd backend
python -m venv .venv
```

Windows:

```powershell
.venv\Scripts\activate
```

macOS/Linux:

```bash
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start API:

```bash
uvicorn app.main:app --reload --port 8000
```

API docs:

```text
http://localhost:8000/docs
```

## Current endpoints

- `GET /`
- `GET /api/health`
- `GET /api/dashboard`
- `GET /api/alerts`
- `POST /api/analyze`

The current implementation is intentionally a demo backend. Replace the heuristic with the actual graph, risk-scoring, and detection pipeline when integrating the production prototype.
