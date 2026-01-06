import DemoForm from "./demo-form";
export const metadata = { title: "Request a Demo — KontractHub" };
export default function Page(){
  return (
    <div className="container">
      <section className="section"><div className="card">
        <div className="kicker">Request a demo</div>
        <h1 className="h1" style={{fontSize:38}}>See KontractHub in action</h1>
        <p className="sub">Submit your info. The form can notify both email and Slack.</p>
        <DemoForm />
        <div className="hr" />
        <div className="small">
          Configure notifications via env vars: <code>SLACK_WEBHOOK_URL</code>, <code>SMTP_HOST</code>, <code>SMTP_USER</code>, <code>SMTP_PASS</code>, <code>DEMO_TO_EMAIL</code>.
          See <a href="/docs/deploy" style={{textDecoration:"underline"}}>Docs → Deploy</a>.
        </div>
      </div></section>
    </div>
  );
}
