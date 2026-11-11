import { gallery } from "@/lib/data";
import { ImageFrame, SectionHeading, Stagger, StaggerItem, Terrace } from "../ui";

export default function Gallery() {
  return (
    <section id="gallery" className="section" aria-labelledby="gal-title">
      <div className="container">
        <SectionHeading id="gal-title" eyebrow="Gallery" title="Fresh from our kitchen" />
        <Stagger className="gal">
          {gallery.map((g) => <StaggerItem key={g.src}><ImageFrame src={g.src} alt={g.alt} sizes="(min-width:900px) 33vw, 50vw" style={{ aspectRatio: "1" }} /></StaggerItem>)}
        </Stagger>
      </div>
    </section>
  );
}
