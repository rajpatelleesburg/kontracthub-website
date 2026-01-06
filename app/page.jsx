"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <section className="container">
        {/* HERO + SINGLE PRODUCT SHOT */}
        <div
          className="card"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 20,
            padding: 22,
          }}
        >
          {/* LEFT — VALUE */}
          <div>
            <div className="kicker">Compliance-first brokerage platform</div>
            <h1 className="h1" style={{ marginBottom: 10 }}>
              The operating system<br />for real estate transactions
            </h1>
            <p className="sub" style={{ marginBottom: 14 }}>
              KontractHub replaces spreadsheets, email chains, and shared drives
              with one system to manage contracts, EMD, contingencies,
              and closing documents — end to end.
            </p>

            <ul className="list" style={{ marginBottom: 14 }}>
              <li>Track EMD and contingency deadlines automatically</li>
              <li>Maintain audit-ready closing packets (including ALTA)</li>
              <li>Enforce brokerage standards without micromanagement</li>
            </ul>

            <div style={{ display: "flex", gap: 10 }}>
              <Link href="/demo" className="btn btn-primary">Request Demo</Link>
              <Link href="/product" className="btn">How it works</Link>
            </div>
          </div>

          {/* RIGHT — SINGLE FILLED SCREENSHOT */}
          <div>
            <img
              src="/screenshots/transaction-detail.png"
              alt="Transaction detail — EMD, contingencies, and documents"
              style={{
                width: "100%",
                borderRadius: 12,
                border: "1px solid var(--border)",
              }}
            />
            <div className="small" style={{ marginTop: 6 }}>
              Transaction detail — EMD, contingencies, and documents in one view
            </div>
          </div>
        </div>

        {/* COMPACT VALUE STRIP */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 12,
            marginTop: 14,
          }}
        >
          <div className="card">
            <h3 className="h3">For Brokers</h3>
            <p className="p">Reduce compliance risk across every deal.</p>
          </div>
          <div className="card">
            <h3 className="h3">For Agents</h3>
            <p className="p">One place to upload contracts and stay ahead.</p>
          </div>
          <div className="card">
            <h3 className="h3">For Compliance</h3>
            <p className="p">Audit-ready records without scrambling.</p>
          </div>
        </div>

        {/* INLINE FOOTER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 12,
            fontSize: 13,
            color: "var(--muted)",
          }}
        >
          <div>
            <strong>KontractHub</strong> — The operating system for real estate transactions.
          </div>
          <div>© 2026 KontractHub</div>
        </div>
      </section>
    </main>
  );
}
