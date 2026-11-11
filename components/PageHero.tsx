"use client";
import { Reveal, Terrace } from "./ui";

export default function PageHero({ eyebrow, script, title, text }: { eyebrow: string; script?: string; title: string; text?: string }) {
  return (
    <section className="pagehero">
      <div className="container">
        <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>
        {script && <Reveal delay={0.05}><p className="script">{script}</p></Reveal>}
        <Reveal as="h1" delay={0.1} className="h1">{title}</Reveal>
        {text && <Reveal as="p" delay={0.18} className="lead">{text}</Reveal>}
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}><Terrace /></div>
    </section>
  );
}
