"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties, type ReactNode } from "react";
import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

/** once:false → animations replay every time an element scrolls in/out, not just on load. */
export const VIEWPORT = { once: false, amount: 0.2 } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  x = 0,
  y = 28,
  className,
  as = "div",
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: "div" | "p" | "h1" | "h2";
} & Omit<HTMLMotionProps<"div">, "children">) {
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </M>
  );
}
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}
export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  const M = motion[as] as typeof motion.div;
  return (
    <M className={className} variants={item}>
      {children}
    </M>
  );
}

/** Photo frame with warm fallback until real photography is added to /public/images. */
export function ImageFrame({
  src,
  alt,
  className = "",
  sizes = "(min-width:900px) 40vw, 90vw",
  priority,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  style?: CSSProperties;
}) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`frame ${className}`} style={style}>
      {ok && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setOk(false)}
        />
      )}
    </div>
  );
}

/** Uses the ORIGINAL logo asset (never retyped/redrawn). Drop it at /public/images/logo.png (or .svg). */
export function Logo({
  light = false,
  large = false,
}: {
  light?: boolean;
  large?: boolean;
}) {
  const [ok, setOk] = useState(true);
  return (
    <span className={`logo ${large ? "logo-lg" : ""}`}>
      {ok && (
        <Image
          src={light ? "/images/logo-light.png" : "/images/logo.png"}
          alt="Bintang Cafe"
          fill
          sizes="88px"
          onError={() => setOk(false)}
        />
      )}
    </span>
  );
}

export function Button({
  href,
  variant = "primary",
  children,
  external,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <motion.span
      style={{ display: "inline-block" }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      <Link
        href={href}
        className={`btn btn-${variant}`}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    </motion.span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  id: string;
}) {
  return (
    <Stagger className={`sectionhead ${align === "center" ? "center" : ""}`}>
      {eyebrow && (
        <StaggerItem>
          <p className="eyebrow">{eyebrow}</p>
        </StaggerItem>
      )}
      <StaggerItem>
        <h2 id={id} className="h2">
          {title}
        </h2>
      </StaggerItem>
      {description && (
        <StaggerItem>
          <p className="lead">{description}</p>
        </StaggerItem>
      )}
    </Stagger>
  );
}

/** Subtle rice-terrace contour line — a quiet nod to Bali, kept low-contrast. */
export function Terrace() {
  return (
    <svg
      className="terrace"
      viewBox="0 0 1200 36"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 10c150-12 300 8 450 0s300-12 450-2 220 8 300 2M0 22c150-10 300 8 450 0s300-10 450 0 220 6 300 0M0 33c150-8 300 6 450 0s300-8 450 0 220 4 300 0" />
    </svg>
  );
}
export const Star = () => (
  <svg
    className="star"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="m12 2 2.9 6.9 7.1.6-5.4 4.7 1.7 7.3L12 17.8 5.7 21.5l1.7-7.3L2 9.5l7.1-.6z" />
  </svg>
);
const I: Record<string, ReactNode> = {
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.800 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  ig: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.500" cy="6.500" r=".8" />
    </>
  ),
};
export const Icon = ({ name }: { name: keyof typeof I }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {I[name]}
  </svg>
);

export function TempleBackdrop({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const o = tone === "dark" ? 0.28 : 1; // di background coklat gelap dibuat lebih pudar
  const vp = { once: false, amount: 0.05 } as const;
  const t = { duration: 0.9, ease: EASE };
  return (
    <div className="temple" aria-hidden="true">
      <div className="temple-in">
        <motion.span
          className="temple-side l"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: o, x: 0 }}
          viewport={vp}
          transition={t}
        />
        <motion.span
          className="temple-side r"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: o, x: 0 }}
          viewport={vp}
          transition={t}
        />
      </div>
    </div>
  );
}
