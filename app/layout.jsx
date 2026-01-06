import "./globals.css";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://kontracthub.com"),
  title: "KontractHub — Real Estate Transaction Platform",
  description: "Contract upload, EMD tracking, contingency handling, closing docs (ALTA), and audit-ready compliance.",
  openGraph: {
    title: "KontractHub",
    description: "The operating system for real estate transactions",
    type: "website",
    url: "https://kontracthub.com",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "KontractHub" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KontractHub",
    description: "Compliance-first real estate transaction platform",
    images: ["/og.png"],
  },
};

function NavLink({ href, children }) {
  return <Link href={href}>{children}</Link>;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="nav">
          <div className="container nav-inner">
            <div className="logo">
              <span aria-hidden="true">⚡</span>
              <Link href="/">KontractHub</Link>
              <span className="badge">Compliance-first</span>
            </div>
            <div className="links">
              <NavLink href="/product">Product</NavLink>
              <NavLink href="/features">Features</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/compliance">Compliance</NavLink>
              <NavLink href="/brokers">For Brokers</NavLink>
              <NavLink href="/docs">Docs</NavLink>
              <NavLink href="/investors">Investors</NavLink>
              <NavLink href="/roadmap">Roadmap</NavLink>
              <NavLink href="/demo"><span className="btn btn-primary">Request Demo</span></NavLink>
            </div>
          </div>
        </div>

        <main>{children}</main>
      </body>
    </html>
  );
}
