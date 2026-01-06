export const metadata = {
  title: "Features — KontractHub",
};

export default function FeaturesPage() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <section className="container">
        {/* FEATURES HEADER */}
        <div className="card" style={{ padding: 22 }}>
          <div className="kicker">Features</div>
          <h1 className="h1" style={{ marginBottom: 10 }}>
            Built for transaction ops + compliance
          </h1>
          <p className="sub">
            A single system of record for contracts, money, deadlines,
            and closing documentation.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
            marginTop: 14,
          }}
        >
          <div className="card">
            <h3 className="h3">Contract Upload & Structuring</h3>
            <p className="p">
              Standardized, property-based organization for every packet.
            </p>
          </div>

          <div className="card">
            <h3 className="h3">EMD Collection Tracking</h3>
            <p className="p">
              Required / due / collected / waived with timestamps.
            </p>
          </div>

          <div className="card">
            <h3 className="h3">Contingency Management</h3>
            <p className="p">
              Inspection, appraisal, financing, HOA — due dates + proof.
            </p>
          </div>

          <div className="card">
            <h3 className="h3">Closing Packet + ALTA</h3>
            <p className="p">
              Final docs, ALTA, CD, addenda — versioned and locked.
            </p>
          </div>

          <div className="card">
            <h3 className="h3">Audit Trails</h3>
            <p className="p">
              Who did what, when — supporting reviews and disputes.
            </p>
          </div>

          <div className="card">
            <h3 className="h3">Broker Oversight</h3>
            <p className="p">
              Visibility across all transactions with consistent enforcement.
            </p>
          </div>
        </div>

        {/* SINGLE SCREENSHOT */}
        <div className="card" style={{ marginTop: 14 }}>
          <img
            src="/screenshots/agent-dashboard.png"
            alt="Agent dashboard"
            style={{
              width: "100%",
              borderRadius: 12,
              border: "1px solid var(--border)",
            }}
          />
          <div className="small" style={{ marginTop: 6 }}>
            Agent dashboard — active deals and attention required
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
