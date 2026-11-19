import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const stats = [
  ["Active Alerts", "24", "Needs review"],
  ["High-Risk Nodes", "17", "Across 8 networks"],
  ["Suspicious Paths", "43", "Multi-hop patterns"],
  ["Cases Open", "09", "Investigator queue"]
];

function App() {
  return (
    <main className="app">
      <nav className="nav">
        <div className="brand"><span className="dot" /> TRACE <b>AI</b></div>
        <div className="navlinks">
          <a href="#dashboard">Dashboard</a>
          <a href="#network">Network</a>
          <a href="#alerts">Alerts</a>
          <a href="#cases">Cases</a>
        </div>
        <button className="ghost">Investigator</button>
      </nav>

      <section className="hero">
        <div>
          <p className="eyebrow">GRAPH INTELLIGENCE PLATFORM</p>
          <h1>Uncover the hidden<br /><span>networks</span> behind financial crime.</h1>
          <p className="lead">
            TRACE AI connects fragmented transaction signals into explainable
            investigation paths, helping investigators find suspicious multi-hop
            activity faster.
          </p>
          <div className="actions">
            <a className="primary" href="#dashboard">Open Dashboard</a>
            <a className="secondary" href="#network">Explore Network →</a>
          </div>
        </div>
        <div className="orb">
          <div className="ring ring1"></div>
          <div className="ring ring2"></div>
          <div className="node center">TRACE</div>
          <div className="node n1">A17</div><div className="node n2">B42</div>
          <div className="node n3">C09</div><div className="node n4">D31</div>
          <div className="line l1"></div><div className="line l2"></div>
          <div className="line l3"></div><div className="line l4"></div>
        </div>
      </section>

      <section id="dashboard" className="section">
        <div className="section-head">
          <div><p className="eyebrow">LIVE OVERVIEW</p><h2>Investigation Dashboard</h2></div>
          <span className="status">● Synthetic Demo Data</span>
        </div>
        <div className="stats">
          {stats.map(([label, value, sub]) => (
            <article className="card" key={label}>
              <span>{label}</span><strong>{value}</strong><small>{sub}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="network" className="section grid2">
        <div className="panel">
          <p className="eyebrow">NETWORK ANALYSIS</p>
          <h2>Highest-Risk Path</h2>
          <div className="path">
            {["ACC-1042", "ACC-771", "ACC-093", "ACC-811"].map((x, i) =>
              <React.Fragment key={x}>
                <div className="pathnode"><b>{x}</b><small>{i === 0 ? "Origin" : i === 3 ? "Destination" : "Intermediary"}</small></div>
                {i < 3 && <span className="arrow">→</span>}
              </React.Fragment>
            )}
          </div>
          <div className="risk"><span>Risk score</span><b>92 / 100</b></div>
        </div>
        <div className="panel">
          <p className="eyebrow">WHY FLAGGED</p>
          <h2>Explainable Signals</h2>
          <ul className="signals">
            <li>Rapid pass-through within 18 minutes</li>
            <li>Four-hop transaction chain</li>
            <li>Unusual transaction velocity</li>
            <li>Repeated intermediary account</li>
          </ul>
          <button className="primary full">Open Investigation</button>
        </div>
      </section>

      <section id="alerts" className="section">
        <div className="section-head"><div><p className="eyebrow">PRIORITY QUEUE</p><h2>Recent Alerts</h2></div></div>
        <div className="table">
          <div className="tr th"><span>Alert</span><span>Pattern</span><span>Risk</span><span>Status</span></div>
          {[
            ["ALR-1042", "Multi-hop layering", "92", "Critical"],
            ["ALR-0987", "Rapid movement", "86", "Review"],
            ["ALR-0941", "Circular flow", "79", "Review"],
            ["ALR-0912", "Unusual velocity", "71", "New"]
          ].map(r => <div className="tr" key={r[0]}><span>{r[0]}</span><span>{r[1]}</span><b>{r[2]}</b><span className="badge">{r[3]}</span></div>)}
        </div>
      </section>

      <footer>
        <div>TRACE <b>AI</b> · Graph Intelligence</div>
        <div>Prototype for research & demonstration · Synthetic data only</div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);