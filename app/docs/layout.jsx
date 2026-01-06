import Link from "next/link";
export const metadata = { title: "Docs — KontractHub" };

const items = [
  { href: "/docs", label: "Overview" },
  { href: "/docs/getting-started", label: "Getting started" },
  { href: "/docs/workflows", label: "Workflows" },
  { href: "/docs/api", label: "API" },
  { href: "/docs/security", label: "Security" },
  { href: "/docs/deploy", label: "Deploy" },
  { href: "/docs/glossary", label: "Glossary" },
];

export default function DocsLayout({ children }) {
  return (
    <div className="container section">
      <div className="docShell">
        <div className="card sidebar">
          <div className="kicker">Docs</div>
          <div style={{marginTop:10}}>
            {items.map((i) => (<Link key={i.href} href={i.href}>{i.label}</Link>))}
          </div>
          <div className="hr" />
          <div className="small">Marketing pages: <a href="/product" style={{textDecoration:"underline"}}>/product</a>, <a href="/pricing" style={{textDecoration:"underline"}}>/pricing</a></div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
