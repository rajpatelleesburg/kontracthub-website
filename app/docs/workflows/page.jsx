export default function Page(){
  return (
    <div className="card">
      <div className="kicker">Workflows</div>
      <h1 className="h1" style={{fontSize:34}}>Transaction lifecycle</h1>
      <div className="hr" />
      <img src="/diagrams/lifecycle.svg" alt="Lifecycle diagram" style={{width:"100%", borderRadius:14, border:"1px solid var(--border)"}} />
    </div>
  );
}
