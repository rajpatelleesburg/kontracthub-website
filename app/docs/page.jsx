export default function Page(){
  return (
    <div className="card">
      <div className="kicker">Documentation</div>
      <h1 className="h1" style={{fontSize:34}}>KontractHub docs</h1>
      <p className="p">Hybrid marketing + docs site: use docs for onboarding, implementation, and operating guidelines.</p>
      <div className="hr" />
      <ul className="list">
        <li><strong>Getting started</strong>: local run + demo form notifications.</li>
        <li><strong>Workflows</strong>: contracts → EMD → contingencies → closing packet + ALTA.</li>
        <li><strong>API</strong>: endpoints and workspace header conventions.</li>
        <li><strong>Deploy</strong>: Slack + email configuration.</li>
      </ul>
    </div>
  );
}
