"use client";
import { useMemo, useState } from "react";
function getTier(agents){
  if (agents <= 1) return { name:"Solo", price:5, note:"Individual agent plan." };
  if (agents <= 10) return { name:"Org — Very Small", price:25, note:"Up to 10 agents." };
  if (agents <= 25) return { name:"Org — Small", price:50, note:"Up to 25 agents." };
  if (agents <= 50) return { name:"Org — Medium", price:75, note:"Up to 50 agents." };
  return { name:"Org — Large", price:100, note:"50+ agents." };
}
export default function PricingCalculator(){
  const [agents,setAgents]=useState(10);
  const tier=useMemo(()=>getTier(agents),[agents]);
  const promo = agents <= 100 ? "Promo: first 100 agents can be free for 12 months (subject to eligibility)." : null;
  return (
    <div className="card">
      <div className="kicker">Pricing calculator</div>
      <h2 className="h2">Estimate your monthly cost</h2>
      <p className="p">Adjust agent count to see the recommended tier.</p>
      <div style={{display:"grid", gap:12, marginTop:14}}>
        <div style={{display:"flex", justifyContent:"space-between", gap:10, flexWrap:"wrap"}}>
          <div><div className="small">Agents</div><div style={{fontSize:28,fontWeight:800}}>{agents}</div></div>
          <div><div className="small">Recommended tier</div><div style={{fontSize:20,fontWeight:800}}>{tier.name}</div><div className="small">{tier.note}</div></div>
          <div><div className="small">Estimated monthly</div><div style={{fontSize:28,fontWeight:800}}>${tier.price}</div><div className="small">Billed monthly</div></div>
        </div>
        <input type="range" min="1" max="200" value={agents} onChange={(e)=>setAgents(parseInt(e.target.value,10))} />
        <div className="small" style={{color: promo ? "var(--ok)" : "var(--muted)"}}>{promo || "Talk to us for enterprise/custom terms."}</div>
      </div>
    </div>
  );
}
