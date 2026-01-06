export const metadata = { title: "Demo Request Sent — KontractHub" };
export default function Page(){
  return (
    <div className="container">
      <section className="section"><div className="card">
        <div className="kicker">Thank you</div>
        <h1 className="h1" style={{fontSize:38}}>Request received</h1>
        <p className="sub">We’ll follow up shortly. In the meantime, explore the product and docs.</p>
        <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
          <a className="btn btn-primary" href="/product">Product</a>
          <a className="btn" href="/docs">Docs</a>
          <a className="btn" href="/pricing">Pricing</a>
        </div>
      </div></section>
    </div>
  );
}
