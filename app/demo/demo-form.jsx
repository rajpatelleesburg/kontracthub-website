"use client";
import { useState } from "react";
const inp={padding:12,borderRadius:12,border:"1px solid var(--border)",background:"rgba(16,26,51,.75)",color:"var(--text)"};
export default function DemoForm(){
  const [sending,setSending]=useState(false);
  async function onSubmit(e){
    e.preventDefault();
    setSending(true);
    const form=new FormData(e.currentTarget);
    const res=await fetch("/api/demo",{method:"POST",body:form});
    const data=await res.json().catch(()=>({}));
    setSending(false);
    if(res.ok){ window.location.href="/demo/thanks"; }
    else{ console.error(data); alert(data?.error || "Unable to submit. Please try again."); }
  }
  return (
    <form onSubmit={onSubmit} style={{display:"grid", gap:10, maxWidth:520}}>
      <input name="name" placeholder="Name" style={inp}/>
      <input name="email" placeholder="Email" required style={inp}/>
      <input name="brokerage" placeholder="Brokerage (optional)" style={inp}/>
      <textarea name="message" placeholder="What would you like to see?" rows="4" style={inp}/>
      <button className="btn btn-primary" type="submit" disabled={sending}>{sending?"Sending...":"Request demo"}</button>
      <div className="small">We’ll respond by email. Internal teams can receive Slack notifications.</div>
    </form>
  );
}
