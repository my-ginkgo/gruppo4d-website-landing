import { AnimatePresence, HTMLMotionProps, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { PointerEvent, ReactNode, useEffect, useState } from "react";
import { finePointer } from "./ease";

/**
 * Two-part cursor: a precise dot plus a lagging ring that reacts to what it hovers.
 * Elements can ask for a label with `data-cursor="Apri"`.
 */
export function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<{ hover: boolean; label: string | null; down: boolean; hidden: boolean }>({ hover: false, label: null, down: false, hidden: true });
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 });

  useEffect(() => { setEnabled(!reduce && finePointer()); }, [reduce]);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-cursor");
    const move = (e: globalThis.PointerEvent) => { x.set(e.clientX); y.set(e.clientY); setState(s => (s.hidden ? { ...s, hidden: false } : s)); };
    const over = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-cursor], a, button");
      const label = el?.dataset.cursor ?? null;
      setState(s => (s.hover === !!el && s.label === label ? s : { ...s, hover: !!el, label }));
    };
    const down = () => setState(s => ({ ...s, down: true }));
    const up = () => setState(s => ({ ...s, down: false }));
    const leave = () => setState(s => ({ ...s, hidden: true }));
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;
  const ringScale = state.label ? 0 : state.hover ? 1.9 : 1;
  return <div className={`cursor ${state.hidden ? "is-hidden" : ""}`} aria-hidden="true">
    <motion.div className="cursor__ring" style={{ x: rx, y: ry }} animate={{ scale: state.down ? ringScale * 0.82 : ringScale }} transition={{ type: "spring", stiffness: 300, damping: 22 }} />
    <motion.div className="cursor__dot" style={{ x, y }} animate={{ scale: state.label ? 0 : state.hover ? 0.4 : 1 }} />
    <AnimatePresence>
      {state.label && <motion.div key={state.label} className="cursor__label" style={{ x: rx, y: ry }} initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0, rotate: 30 }} transition={{ type: "spring", stiffness: 340, damping: 24 }}><span>{state.label}</span></motion.div>}
    </AnimatePresence>
  </div>;
}

/** Anchor that leans towards the pointer, with its label travelling a little further than the frame. */
export function MagneticLink({ children, strength = 0.32, ...props }: Omit<HTMLMotionProps<"a">, "children"> & { children: ReactNode; strength?: number }) {
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 220, damping: 16, mass: 0.5 });
  const y = useSpring(0, { stiffness: 220, damping: 16, mass: 0.5 });
  const ix = useSpring(0, { stiffness: 220, damping: 16, mass: 0.5 });
  const iy = useSpring(0, { stiffness: 220, damping: 16, mass: 0.5 });
  const move = (e: PointerEvent<HTMLAnchorElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * strength); y.set(dy * strength); ix.set(dx * strength * 0.45); iy.set(dy * strength * 0.45);
  };
  const reset = () => { x.set(0); y.set(0); ix.set(0); iy.set(0); };
  return <motion.a {...props} style={{ x, y }} onPointerMove={move} onPointerLeave={reset}>
    <motion.span className="magnetic__inner" style={{ x: ix, y: iy }}>{children}</motion.span>
  </motion.a>;
}

