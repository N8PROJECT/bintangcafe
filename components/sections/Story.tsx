import { story } from "@/lib/data";
import { Button, ImageFrame, Reveal, SectionHeading, Star, Terrace } from "../ui";

export default function Story() {
  return (
    <section className="alt section" aria-labelledby="story-title">
      <div className="container story">
        <Reveal x={-40} y={0}><ImageFrame src={story.image} alt={story.imageAlt} /></Reveal>
        <div>
          <SectionHeading id="story-title" align="left" eyebrow={story.eyebrow} title={story.title} />
          <Reveal>{story.text.map((t) => <p key={t} className="lead">{t}</p>)}</Reveal>
          <Reveal delay={0.1} style={{ marginTop: 24 }}><Button href="/about" variant="secondary">Read Our Story</Button></Reveal>
          <Reveal delay={0.15} style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 24 }}><Star /><span className="script">A taste of Bali in Perth.</span></Reveal>
        </div>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}><Terrace /></div>
    </section>
  );
}
