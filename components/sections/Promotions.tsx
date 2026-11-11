import { promos } from "@/lib/data";
import { Button, ImageFrame, SectionHeading, Stagger, StaggerItem } from "../ui";

export default function Promotions() {
  return (
    <section className="alt section" aria-labelledby="promo-title">
      <div className="container">
        <SectionHeading id="promo-title" eyebrow="Specials" title="What's on at Bintang" />
        <Stagger className="promos">
          {promos.map((p) => (
            <StaggerItem key={p.id} as="article" className="promo">
              <ImageFrame src={p.image} alt={p.alt} />
              <div className="promo-b">
                <span className="cat">{p.label}</span><h3 className="h3" style={{ fontSize: 28 }}>{p.title}</h3><p>{p.text}</p>
                <Button href={p.href} variant="secondary" external>{p.cta}</Button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
