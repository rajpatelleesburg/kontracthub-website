import PricingCalculator from "./pricing-calculator";
export const metadata = { title: "Pricing — KontractHub" };
export default function Page(){
  return (
    <div className="container">
      <section className="section"><div className="card">
        <div className="kicker">Pricing</div>
        <h1 className="h1" style={{fontSize:38}}>Simple pricing that scales</h1>
        <p className="sub">Estimate by agent count and align with your brokerage needs.</p>
      </div></section>
      <section className="section"><PricingCalculator /></section>
    </div>
  );
}
