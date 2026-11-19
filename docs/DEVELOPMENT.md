# Development Guide

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Backend

```bash
cd backend
python -m venv .venv
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Environment

Use `.env.example` files as templates. Never commit secrets.

## Data

Only use synthetic/anonymized data during development unless appropriate legal, security, and privacy controls have been established.
