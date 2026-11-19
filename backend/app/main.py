from datetime import datetime, timezone
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(
    title="TRACE AI API",
    description="Graph intelligence API for synthetic financial-crime investigation data.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://trace-rouge-one.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Transaction(BaseModel):
    source: str
    destination: str
    amount: float
    timestamp: datetime
    currency: str = "INR"

@app.get("/")
def root():
    return {"name": "TRACE AI API", "status": "online", "docs": "/docs"}

@app.get("/api/health")
def health():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}

@app.get("/api/dashboard")
def dashboard():
    return {
        "active_alerts": 24,
        "high_risk_nodes": 17,
        "suspicious_paths": 43,
        "open_cases": 9,
        "data_mode": "synthetic",
    }

@app.get("/api/alerts")
def alerts():
    return [
        {"id": "ALR-1042", "pattern": "Multi-hop layering", "risk": 92, "status": "Critical"},
        {"id": "ALR-0987", "pattern": "Rapid movement", "risk": 86, "status": "Review"},
        {"id": "ALR-0941", "pattern": "Circular flow", "risk": 79, "status": "Review"},
        {"id": "ALR-0912", "pattern": "Unusual velocity", "risk": 71, "status": "New"},
    ]

@app.post("/api/analyze")
def analyze(transaction: Transaction):
    # Demo-only heuristic. Replace with the actual graph/risk engine.
    risk = min(100, round(transaction.amount / 10000))
    return {
        "risk_score": risk,
        "classification": "review" if risk >= 60 else "normal",
        "explanation": [
            "Demo heuristic only",
            "Use synthetic data in development",
        ],
    }
