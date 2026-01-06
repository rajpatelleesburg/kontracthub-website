import Link from "next/link";
export default function Page() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-grid">
          <div className="card">
            <div className="kicker">Brokerage Operations Platform</div>
            <h1 className="h1">The operating system for real estate transactions</h1>
            <p className="sub">
              KontractHub manages the full transaction lifecycle—contract upload, <strong>EMD tracking</strong>, <strong>contingency handling</strong>,
              and <strong>final closing documents</strong> (including <strong>ALTA settlement statements</strong>)—with audit trails and compliance readiness.
            </p>
            <div style={{display:"flex", gap:10, flexWrap:"wrap"}} id="get-started">
              <Link className="btn btn-primary" href="/demo">Request a demo</Link>
              <Link className="btn" href="/product">Explore product</Link>
              <Link className="btn" href="/docs">Read docs</Link>
            </div>
            <div className="pillrow">
              <span className="pill">Contract Upload</span><span className="pill">EMD Collection</span><span className="pill">Contingencies</span>
              <span className="pill">Closing Packet + ALTA</span><span className="pill">Audit + Compliance</span>
            </div>
          </div>
          <div className="card">
            <div className="kicker">Screenshots</div>
            <h2 className="h2">What it looks like</h2>
            <p className="p">Sample UI screenshots (placeholders). Replace with real product captures anytime.</p>
            <div className="hr" />
            <div style={{display:"grid", gap:10}}>
              <img src="/screenshots/agent-dashboard.png" alt="Agent dashboard screenshot" style={{width:"100%", borderRadius:14, border:"1px solid var(--border)"}} />
              <img src="/screenshots/transaction-detail.png" alt="Transaction detail screenshot" style={{width:"100%", borderRadius:14, border:"1px solid var(--border)"}} />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card">
            <div className="kicker">Architecture</div>
            <h2 className="h2">Built for auditability</h2>
            <p className="p">Mobile/web clients call your API; Lambdas enforce rules; data is isolated by workspace.</p>
            <div className="hr" />
            <img src="/diagrams/architecture.svg" alt="KontractHub architecture diagram" style={{width:"100%", borderRadius:14, border:"1px solid var(--border)", background:"rgba(16,26,51,.35)"}} />
          </div>
        </div>
      </section>
    </div>
  );
}
