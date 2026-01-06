export const metadata = { title: "Compliance — KontractHub" };
const terms = [["RESPA", "Real Estate Settlement Procedures Act. U.S. law governing settlement practices, disclosures, and prohibitions on kickbacks in certain transactions."], ["ALTA", "American Land Title Association. Often refers to the ALTA settlement statement and title-related standards used in closings."], ["EMD", "Earnest Money Deposit. Good-faith deposit due under contract terms; track required/due/collected/waived with proof."], ["Contingency", "A contract condition that must be satisfied or waived by a deadline (inspection/appraisal/financing/HOA, etc.)."], ["CD", "Closing Disclosure. Standardized disclosure summarizing final loan terms and closing costs (where applicable)."], ["Audit Trail", "Timestamped record of actions (who/what/when) supporting reviews, disputes, and regulatory requests."], ["Compliance Packet", "The finalized set of required documents (contract/addenda, EMD proof, contingency evidence, closing docs like ALTA/CD)."]];
export default function Page(){
  return (
    <div className="container">
      <section className="section"><div className="card">
        <div className="kicker">Compliance glossary</div>
        <h1 className="h1" style={{fontSize:38}}>A shared language for transaction operations</h1>
        <p className="sub">Useful for onboarding, demos, and training. (Not legal advice.)</p>
      </div></section>
      <section className="section"><div className="card">
        <table className="table">
          <thead><tr><th>Term</th><th>Meaning</th></tr></thead>
          <tbody>
            {terms.map(([t,d])=>(
              <tr key={t}><td><strong>{t}</strong></td><td className="small" style={{color:"var(--muted)"}}>{d}</td></tr>
            ))}
          </tbody>
        </table>
      </div></section>
    </div>
  );
}
