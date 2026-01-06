export default function Page(){
  return (
    <div className="card">
      <div className="kicker">API</div>
      <h1 className="h1" style={{fontSize:34}}>API conventions</h1>
      <div className="hr" />
      <div className="code">{`Authorization: Bearer <idToken>\nX-Workspace-Id: <workspaceId>`}</div>
      <div className="hr" />
      <div className="code">{`POST /auth/signup\nPOST /auth/confirm\nPOST /auth/login`}</div>
    </div>
  );
}
