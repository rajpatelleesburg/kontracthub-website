export default function Page(){
  return (
    <div className="card">
      <div className="kicker">Security</div>
      <h1 className="h1" style={{fontSize:34}}>Auditability & access</h1>
      <ul className="list">
        <li>Role-based access (Agent/Admin/Broker)</li>
        <li>Timestamped event logs</li>
        <li>Document history for closing packets (ALTA, CD, addenda)</li>
      </ul>
    </div>
  );
}
