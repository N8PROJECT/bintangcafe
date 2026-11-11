"use client";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { dishes, usedCategories as categories } from "@/lib/data";
import DishCard from "../DishCard";
import { Button, Reveal, SectionHeading } from "../ui";

export default function SignatureMenu() {
  const [active, setActive] = useState<string>("all");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const list = dishes.filter((d) => active === "all" || d.category === active);
  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = e.key === "ArrowRight" ? (i + 1) % categories.length : e.key === "ArrowLeft" ? (i + categories.length - 1) % categories.length : -1;
    if (n >= 0) { setActive(categories[n].id); refs.current[n]?.focus(); }
  };
  return (
    <section id="menu" className="section" aria-labelledby="menu-title">
      <div className="container">
        <SectionHeading id="menu-title" eyebrow="Signature Menu" title="Discover our Indonesian favourites"
          description="From traditional Indonesian favourites to satisfying breakfast specials, discover something delicious on our menu." />
        <Reveal><div role="tablist" aria-label="Menu categories" className="tabs">
          {categories.map((c, i) => (
            <button key={c.id} ref={(el) => { refs.current[i] = el; }} role="tab" id={`tab-${c.id}`} aria-selected={active === c.id} aria-controls="menu-panel"
              tabIndex={active === c.id ? 0 : -1} className="tab" onClick={() => setActive(c.id)} onKeyDown={(e) => onKey(e, i)}>{c.label}</button>))}
        </div></Reveal>
        <div role="tabpanel" id="menu-panel" aria-labelledby={`tab-${active}`}>
          <ul key={active} className="menu-grid">
            <AnimatePresence initial={false}>
              {list.map((d, i) => <DishCard key={d.id} d={d} i={i} />)}
            </AnimatePresence>
          </ul>
        </div>
        <Reveal className="center" style={{ marginTop: 48, textAlign: "center" }}><Button href="/menu" variant="primary">View Full Menu</Button></Reveal>
      </div>
    </section>
  );
}
