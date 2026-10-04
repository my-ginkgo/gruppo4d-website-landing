import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { EASE_IN_OUT } from "./ease";

/**
 * Image that is unveiled by a clip-path wipe and then drifts inside its frame
 * while the page scrolls (the frame stays put, the picture moves: classic parallax window).
 * Visibility is observed on the unclipped frame: a fully clipped element never reports as intersecting.
 */
export function ParallaxMedia({ src, alt = "", depth = 9, from = "bottom", children }: { src: string; alt?: string; depth?: number; from?: "bottom" | "left" | "right"; children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const shown = useInView(ref, { once: true, amount: 0.25 }) || !!reduce;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : [`-${depth}%`, `${depth}%`]);
  const hidden = { bottom: "inset(100% 0% 0% 0%)", left: "inset(0% 100% 0% 0%)", right: "inset(0% 0% 0% 100%)" }[from];
  return <div ref={ref} className="media">
    <motion.div className="media__clip" initial={false} animate={{ clipPath: shown ? "inset(0% 0% 0% 0%)" : hidden }} transition={{ duration: reduce ? 0 : 1.3, ease: EASE_IN_OUT }}>
      <motion.div className="media__inner" style={{ y }} initial={false} animate={{ scale: shown ? 1 : 1.35 }} transition={{ duration: reduce ? 0 : 1.8, ease: EASE_IN_OUT }}>
        <img src={src} alt={alt} loading="lazy" />
      </motion.div>
    </motion.div>
    {children}
  </div>;
}
