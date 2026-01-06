export const metadata = { title: "Product — KontractHub" };
export default function Page() {
  return (
    <div className="container">
      <section className="section">
        <div className="card">
          <div className="kicker">Product</div>
          <h1 className="h1" style={{fontSize:38}}>End-to-end transaction lifecycle</h1>
          <p className="sub">Contract intake → EMD → contingencies → closing packet (ALTA) → audit readiness.</p>
          <div className="hr" />
          <img src="/diagrams/lifecycle.svg" alt="Lifecycle diagram" style={{width:"100%", borderRadius:14, border:"1px solid var(--border)"}} />
        </div>
      </section>
    </div>
  );
}
