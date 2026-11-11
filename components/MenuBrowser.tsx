"use client";
import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { categories, dishes, usedCategories } from "@/lib/data";
import DishCard from "./DishCard";
import { Button, Icon } from "./ui";

const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

export default function MenuBrowser() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const count = (id: string) => (id === "all" ? dishes.length : dishes.filter((d) => d.category === id).length);
  const list = useMemo(() => {
    const n = norm(q);
    return dishes.filter((d) => (cat === "all" || d.category === cat) &&
      (!n || norm(`${d.name} ${d.description ?? ""} ${categories.find((c) => c.id === d.category)?.label}`).includes(n)));
  }, [q, cat]);
  const reset = () => { setQ(""); setCat("all"); };

  return (
    <section className="section" style={{ paddingTop: 24 }} aria-label="Menu">
      <div className="container">
        <div className="toolbar" role="search">
          <div className="search">
            <label htmlFor="menu-search" className="sr">Search the menu</label>
            <Icon name="search" />
            <input id="menu-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search dishes, e.g. soto" autoComplete="off" />
            {q && <button className="clear" onClick={() => setQ("")} aria-label="Clear search">×</button>}
          </div>
          <div className="chips" role="group" aria-label="Filter by category">
            {usedCategories.map((c) => (
              <button key={c.id} className="chip" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>{c.label} <small>{count(c.id)}</small></button>
            ))}
          </div>
        </div>
        <p className="count" role="status" aria-live="polite">{list.length} {list.length === 1 ? "dish" : "dishes"}{q && ` for “${q}”`}</p>

        {list.length === 0 ? (
          <div className="empty"><p>We couldn’t find a dish matching that. Try another word or category.</p><button className="btn btn-secondary" onClick={reset}>Clear filters</button></div>
        ) : (
          <ul className="menu-grid">
            <AnimatePresence initial={false}>{list.map((d, i) => <DishCard key={d.id} d={d} i={i} />)}</AnimatePresence>
          </ul>
        )}
        <p className="note">Menu items, availability and prices may change — please check with the café.</p>
        <div style={{ textAlign: "center", marginTop: 32 }}><Button href="/#visit" variant="secondary">Find Us</Button></div>
      </div>
    </section>
  );
}
