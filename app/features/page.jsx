export const metadata = { title: "Features — KontractHub" };
const feats = [
  ["Contract Upload & Structuring","Standardized, property-based organization for every packet."],
  ["EMD Collection Tracking","Required / due / collected / waived with timestamps."],
  ["Contingency Management","Inspection, appraisal, financing, HOA—due dates + proof."],
  ["Closing Packet + ALTA","Final docs, ALTA, CD, addenda—versioned & locked."],
  ["Audit Trails","Who did what, when—supporting reviews and disputes."],
  ["Broker Oversight","Visibility across all transactions with consistent enforcement."],
];
export default function Page(){
  return (
    <div className="container">
      <section className="section"><div className="card"><div className="kicker">Features</div>
      <h1 className="h1" style={{fontSize:38}}>Built for transaction ops + compliance</h1>
      <p className="sub">A single system of record for contracts, money, deadlines, and closing documentation.</p></div></section>
      <section className="section"><div className="grid3">
        {feats.map(([t,d])=>(
          <div className="card" key={t}><h3 className="h3">{t}</h3><p className="p">{d}</p></div>
        ))}
      </div></section>
      <section className="section"><div className="split">
        <div className="card">
          <div className="kicker">Screenshots</div><h2 className="h2">Sample UI</h2>
          <div className="hr" />
          <div style={{display:"grid", gap:10}}>
            <img src="/screenshots/agent-dashboard.png" alt="Agent dashboard" style={{width:"100%", borderRadius:14, border:"1px solid var(--border)"}} />
            <img src="/screenshots/closing-packet.png" alt="Closing packet" style={{width:"100%", borderRadius:14, border:"1px solid var(--border)"}} />
          </div>
        </div>
        <div className="card">
          <div className="kicker">Diagrams</div><h2 className="h2">Explain it fast</h2>
          <div className="hr" />
          <div style={{display:"grid", gap:10}}>
            <img src="/diagrams/architecture.svg" alt="Architecture" style={{width:"100%", borderRadius:14, border:"1px solid var(--border)"}} />
            <img src="/diagrams/lifecycle.svg" alt="Lifecycle" style={{width:"100%", borderRadius:14, border:"1px solid var(--border)"}} />
          </div>
        </div>
      </div></section>
    </div>
  );
}
