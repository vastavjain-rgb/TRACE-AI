# TRACE AI Architecture

## Components

### Frontend
React + Vite dashboard for:
- Investigation dashboard
- Risk metrics
- Graph visualization
- Alerts
- Case workflow

### Backend
FastAPI REST API for:
- Data ingestion
- Graph queries
- Risk analysis
- Alert generation
- Investigation APIs

### Future data layer
Potential components:
- PostgreSQL for application data
- Graph database for network relationships
- Redis for caching/queues
- Object storage for investigation artifacts

## Graph model

Nodes may represent accounts, customers, entities, merchants or wallets.

Edges may represent transfers, payments, ownership, shared identifiers or other relationships.

Every alert should expose the evidence and reasoning behind the risk signal.
