export default function ValueProps({ mode }) {
  if (mode === "investor") {
    return (
      <>
        <h1 className="h1">Compliance-first infrastructure for real estate transactions</h1>
        <p className="sub">
          KontractHub is a vertical SaaS platform managing contracts, EMD, contingencies,
          and closing packets with auditability built in.
        </p>
        <ul className="list">
          <li>High-retention workflow SaaS</li>
          <li>Compliance as a product feature</li>
          <li>Brokerage-safe, multi-tenant architecture</li>
        </ul>
      </>
    );
  }

  return (
    <>
      <h1 className="h1">Run every transaction the right way—every time</h1>
      <p className="sub">
        KontractHub gives brokers complete visibility into contracts, EMD,
        contingencies, and closing documents—without spreadsheets or guesswork.
      </p>
      <ul className="list">
        <li>No missed EMD or contingency deadlines</li>
        <li>Clean, review-ready ALTA closing packets</li>
        <li>Built-in audit trails</li>
      </ul>
    </>
  );
}
