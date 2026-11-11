"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { hero } from "@/lib/data";
import { Button, Reveal, Terrace } from "../ui";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);   // scrubs both directions
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const textO = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  useEffect(() => {
    const v = video.current; if (!v) return;
    if (reduce) { v.pause(); return; }       // respect reduced motion
    v.play().catch(() => {});
  }, [reduce]);
  // pause when the hero is off-screen to save battery/bandwidth
  useEffect(() => {
    const v = video.current, el = ref.current; if (!v || !el) return;
    const io = new IntersectionObserver(([e]) => { if (reduce) return; if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); });
    io.observe(el); return () => io.disconnect();
  }, [reduce]);

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <motion.div className="hero-media" style={{ scale }}>
        <video ref={video} className="hero-video" muted loop playsInline preload="metadata" poster={hero.video.poster}
          aria-label={hero.videoLabel}>
          <source src={hero.video.webm} type="video/webm" />
          <source src={hero.video.mp4} type="video/mp4" />
        </video>
      </motion.div>
      <div className="hero-ov" />
      <motion.div className="container hero-c" style={{ y: textY, opacity: textO }}>
        <Reveal><p className="eyebrow">{hero.eyebrow}</p></Reveal>
        <Reveal delay={0.05}><p className="script">{hero.script}</p></Reveal>
        <Reveal as="h1" delay={0.12} className="h1" id="hero-title">{hero.headline}</Reveal>
        <Reveal as="p" delay={0.2} className="lead">{hero.text}</Reveal>
        <Reveal delay={0.28} className="btns"><Button href="/menu">Explore Our Menu</Button><Button href="/#visit" variant="secondary">Find Us</Button></Reveal>
        <Reveal delay={0.36}><p className="loc">Victoria Park, Perth</p></Reveal>
      </motion.div>
      <div className="hero-terrace" aria-hidden="true"><Terrace /></div>
    </section>
  );
}
