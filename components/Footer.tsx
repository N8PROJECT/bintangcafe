import Link from "next/link";
import { nav, site } from "@/lib/data";
import { Logo, Reveal, Stagger, StaggerItem } from "./ui";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Stagger className="f-grid">
          <StaggerItem>
            <Logo light large />
            <p style={{ marginTop: 16, maxWidth: "32ch" }}>A taste of Indonesia in Perth.</p>
          </StaggerItem>
          <StaggerItem><h3>Explore</h3><ul>{nav.map((n) => <li key={n.label}><Link href={n.href}>{n.label}</Link></li>)}</ul></StaggerItem>
          <StaggerItem>
            <h3>Find us</h3><address style={{ fontStyle: "normal" }}>{site.address}</address>
            <Link href={site.mapsHref} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Get directions</Link>
          </StaggerItem>
          <StaggerItem>
            <h3>Hours</h3>
            {site.hours.length ? <ul>{site.hours.map((h) => <li key={h.day}>{h.day} · {h.time}</li>)}</ul> : <p>Opening hours coming soon.</p>}
            <p style={{ marginTop: 12 }}><Link href={site.instagram} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>@_bintangcafe on Instagram</Link></p>
          </StaggerItem>
        </Stagger>
        <Reveal className="f-bottom" y={12}>© {new Date().getFullYear()} Bintang Cafe. All rights reserved.</Reveal>
      </div>
    </footer>
  );
}
