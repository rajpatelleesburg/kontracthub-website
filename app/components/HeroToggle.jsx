"use client";
import { useState } from "react";

export default function HeroToggle({ onChange }) {
  const [mode, setMode] = useState("broker");

  function select(m) {
    setMode(m);
    onChange(m);
  }

  return (
    <div style={{display:"inline-flex", gap:6, border:"1px solid var(--border)", borderRadius:999, padding:4}}>
      <button onClick={() => select("broker")} className={`btn ${mode==="broker" ? "btn-primary":""}`}>For Brokers</button>
      <button onClick={() => select("investor")} className={`btn ${mode==="investor" ? "btn-primary":""}`}>For Investors</button>
    </div>
  );
}
