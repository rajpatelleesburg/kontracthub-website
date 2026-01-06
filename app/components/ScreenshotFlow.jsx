export default function ScreenshotFlow() {
  return (
    <div className="section">
      <div className="card">
        <div className="kicker">Transaction lifecycle</div>
        <h2 className="h2">From contract to closing</h2>
        <p className="p">Each deal moves through a structured, auditable flow.</p>

        <div className="hr" />

        <h3 className="h3">1) Transaction Detail — Risk & Deadlines</h3>
        <p className="p">Single source of truth for EMD, contingencies, and documents.</p>
        <img src="/screenshots/transaction-detail.png" style={{width:"100%", borderRadius:14, border:"1px solid var(--border)"}} />

        <div className="hr" />

        <h3 className="h3">2) Agent Dashboard — Active Deals</h3>
        <p className="p">See what needs attention today.</p>
        <img src="/screenshots/agent-dashboard.png" style={{width:"100%", borderRadius:14, border:"1px solid var(--border)"}} />

        <div className="hr" />

        <h3 className="h3">3) Closing Packet — Final & Locked</h3>
        <p className="p">ALTA and final documents preserved for audits.</p>
        <img src="/screenshots/closing-packet.png" style={{width:"100%", borderRadius:14, border:"1px solid var(--border)"}} />

        <p className="small" style={{marginTop:12}}>Compliance by design.</p>
      </div>
    </div>
  );
}
