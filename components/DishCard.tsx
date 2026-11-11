"use client";
import { motion } from "framer-motion";
import { categories, type Dish } from "@/lib/data";
import { ImageFrame, VIEWPORT } from "./ui";

export default function DishCard({ d, i = 0 }: { d: Dish; i?: number }) {
  return (
    <motion.li layout className="dish" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.45, delay: Math.min(i, 7) * 0.06 }}>
      <ImageFrame src={d.image} alt={d.alt} sizes="(min-width:1000px) 25vw, (min-width:600px) 50vw, 100vw" />
      <div className="dish-b">
        <span className="cat">{categories.find((c) => c.id === d.category)?.label}</span>
        <div className="dish-top"><h3 className="h3">{d.name}</h3>{d.price && <span className="price">{d.price}</span>}</div>
        {d.description && <p>{d.description}</p>}
      </div>
    </motion.li>
  );
}
