"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { nav } from "@/lib/data";
import { Button, Logo } from "./ui";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // correct state if the page loads already scrolled (refresh / anchor jump)
  useEffect(() => setScrolled(window.scrollY > 24), []);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
    setHidden(y > (scrollY.getPrevious() ?? 0) && y > 160 && !open);
  });

  const glass = scrolled || open;
  // white text only while the transparent bar sits over the dark home-page video
  const onDark = pathname === "/" && !glass;

  return (
    <motion.header
      className={`header ${glass ? "is-glass" : "is-clear"} ${onDark ? "on-dark" : ""}`}
      animate={{ y: hidden ? "-110%" : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="container header-in">
        <Link href="/" aria-label="Bintang Cafe home">
          <Logo />
        </Link>
        <nav className="nav-desktop" aria-label="Primary">
          {nav.map((n) => (
            <Link key={n.label} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="header-cta">
          <Button href="/menu">View Menu</Button>
        </div>
        <button
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-nav"
            className="drawer"
            aria-label="Mobile"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {nav.map((n, i) => (
                <motion.li
                  key={n.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link href={n.href} onClick={() => setOpen(false)}>
                    {n.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
