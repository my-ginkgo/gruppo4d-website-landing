import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useRef } from "react";
import { wrap } from "./ease";

/**
 * Infinite band whose speed, direction and skew follow scroll velocity:
 * scroll faster and the type accelerates and leans, scroll back and it reverses.
 */
export function Marquee({ items, speed = 3, reverse = false, outline = false, className = "" }: { items: string[]; speed?: number; reverse?: boolean; outline?: boolean; className?: string }) {
  const reduce = useReducedMotion();
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const skewX = useTransform(velocity, [-3000, 0, 3000], reduce ? [0, 0, 0] : [9, 0, -9]);
  const x = useTransform(base, v => `${wrap(-50, 0, v)}%`);
  const direction = useRef(reverse ? 1 : -1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const f = factor.get();
    if (f < 0) direction.current = reverse ? -1 : 1;
    else if (f > 0) direction.current = reverse ? 1 : -1;
    const move = direction.current * speed * (delta / 1000) * (1 + Math.abs(f));
    base.set(base.get() + move);
  });

  const run = [...items, ...items];
  return <div className={`marquee ${outline ? "marquee--outline" : ""} ${className}`} aria-hidden="true">
    <motion.div className="marquee__track" style={{ x, skewX }}>
      {[0, 1].map(copy => <div className="marquee__run" key={copy}>
        {run.map((item, i) => <span className="marquee__item" key={i}>{item}<i className="marquee__mark" /></span>)}
      </div>)}
    </motion.div>
  </div>;
}
