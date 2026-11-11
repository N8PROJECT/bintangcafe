import Link from "next/link";
import { site } from "@/lib/data";
import { Button, Icon, Reveal, SectionHeading, Stagger, StaggerItem } from "../ui";

export default function Visit() {
  return (
    <section id="visit" className="alt section" aria-labelledby="visit-title">
      <div className="container visit">
        <div>
          <SectionHeading id="visit-title" align="left" eyebrow="Visit Us" title="Drop by Bintang Cafe in Victoria Park"
            description="Enjoy a little taste of Indonesia in Perth." />
          <Stagger className="info">
            <StaggerItem className="info-row"><Icon name="pin" /><div><h3>Address</h3><address style={{ fontStyle: "normal" }}>{site.address}</address></div></StaggerItem>
            <StaggerItem className="info-row"><Icon name="clock" /><div><h3>Opening hours</h3>
              {site.hours.length ? <ul>{site.hours.map((h) => <li key={h.day}>{h.day}: {h.time}</li>)}</ul> : <p>Open 6 days a week. Full hours coming soon.</p>}</div></StaggerItem>
            {site.phone && <StaggerItem className="info-row"><Icon name="phone" /><div><h3>Phone</h3><Link href={`tel:${site.phone}`}>{site.phone}</Link></div></StaggerItem>}
            <StaggerItem className="info-row"><Icon name="ig" /><div><h3>Follow</h3><Link href={site.instagram} target="_blank" rel="noopener noreferrer">@_bintangcafe</Link></div></StaggerItem>
          </Stagger>
          <Reveal><Button href={site.mapsHref} external>Get Directions</Button></Reveal>
        </div>
        <Reveal x={40} y={0} className="mapbox">
          <iframe title="Map showing Bintang Cafe in Victoria Park, Perth" src={site.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </Reveal>
      </div>
    </section>
  );
}
