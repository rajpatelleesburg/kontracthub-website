export default function Page(){
  return (
    <div className="card">
      <div className="kicker">Deploy</div>
      <h1 className="h1" style={{fontSize:34}}>Environment variables</h1>
      <div className="hr" />
      <h2 className="h2">Slack</h2>
      <div className="code">{`SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...`}</div>
      <div className="hr" />
      <h2 className="h2">Email (SMTP)</h2>
      <div className="code">{`SMTP_HOST=smtp.yourprovider.com\nSMTP_PORT=587\nSMTP_USER=your_user\nSMTP_PASS=your_pass\nMAIL_FROM=demo@kontracthub.com\nDEMO_TO_EMAIL=you@yourdomain.com`}</div>
    </div>
  );
}
