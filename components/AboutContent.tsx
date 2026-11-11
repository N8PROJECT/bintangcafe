"use client";
import { story, values } from "@/lib/data";
import { Button, ImageFrame, Reveal, SectionHeading, Stagger, StaggerItem, Star } from "./ui";

export default function AboutContent() {
  return (
    <>
      <section className="section alt" aria-labelledby="a-story">
        <div className="container about-split">
          <Reveal x={-40} y={0}><ImageFrame src={story.image} alt={story.imageAlt} sizes="(min-width:900px) 40vw, 90vw" /></Reveal>
          <div>
            <SectionHeading id="a-story" align="left" eyebrow="Our Story" title="Indonesian comfort food, made for the neighbourhood" />
            <Reveal>
              <p className="lead">Bintang Cafe brings Indonesian comfort food and familiar flavours to the Victoria Park community.</p>
              <p className="lead" style={{ marginTop: 12 }}>Come in for breakfast, lunch and something delicious.</p>
              {/* TODO(owner): add approved story — founders, how it started, where the recipes come from. Nothing invented here. */}
            </Reveal>
            <Reveal delay={0.1} style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 24 }}><Star /><span className="script">A taste of Bali in Perth.</span></Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="a-values">
        <div className="container">
          <SectionHeading id="a-values" eyebrow="What We’re About" title="A warm place to enjoy authentic flavours" />
          <Stagger className="values">
            {values.map((v) => <StaggerItem key={v.script} className="value"><span className="script">{v.script}</span><p>{v.text}</p></StaggerItem>)}
          </Stagger>
        </div>
      </section>

      <section className="section alt" aria-labelledby="a-table">
        <div className="container about-split rev">
          <div>
            <SectionHeading id="a-table" align="left" eyebrow="On the Table" title="Breakfast, lunch and something delicious"
              description="Soups, rice dishes, snacks and traditional treats — recognisable Indonesian favourites, served in generous portions." />
            <Reveal><Button href="/menu">Explore Our Menu</Button></Reveal>
          </div>
          <Reveal x={40} y={0}><ImageFrame src="/images/about-table.jpg" alt="Dishes served on a wooden table at Bintang Cafe" sizes="(min-width:900px) 40vw, 90vw" /></Reveal>
        </div>
      </section>

      <section className="section cta-band" aria-labelledby="a-cta">
        <div className="container">
          <SectionHeading id="a-cta" title="Come say hello in Victoria Park" description="Drop by Bintang Cafe and enjoy a little taste of Indonesia in Perth." />
          <Reveal className="btns" style={{ justifyContent: "center" }}><Button href="/#visit">Get Directions</Button><Button href="/menu" variant="secondary">View Menu</Button></Reveal>
        </div>
      </section>
    </>
  );
}
