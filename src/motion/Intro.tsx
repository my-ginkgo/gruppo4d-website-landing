import { animate, AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE, EASE_IN_OUT } from "./ease";

const KEY = "g4d-intro-seen";
const seen = () => { try { return sessionStorage.getItem(KEY) === "1"; } catch { return false; } };

/**
 * Opening title: a counter assembles the four dimensions, then two curtains
 * (ink, then red) lift off the hero. Runs once per session, skippable with any click or key.
 */
export function Intro({ onReveal }: { onReveal: () => void }) {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(() => !seen());
  const counter = useRef<HTMLSpanElement>(null);
  const [step, setStep] = useState(0);
  const instant = useRef(!show || !!reduce);

  useEffect(() => {
    if (instant.current) { setShow(false); return; }
    document.documentElement.style.overflow = "hidden";
    const finish = () => {
      controls.stop();
      try { sessionStorage.setItem(KEY, "1"); } catch { /* storage unavailable */ }
      setShow(false);
    };
    const controls = animate(0, 100, {
      duration: 1.9, ease: [0.65, 0, 0.35, 1],
      onUpdate: v => { if (counter.current) counter.current.textContent = String(Math.round(v)).padStart(3, "0"); setStep(Math.min(4, Math.floor(v / 25))); },
      onComplete: finish,
    });
    window.addEventListener("pointerdown", finish);
    window.addEventListener("keydown", finish);
    return () => {
      controls.stop();
      document.documentElement.style.overflow = "";
      window.removeEventListener("pointerdown", finish);
      window.removeEventListener("keydown", finish);
    };
  }, []);

  // Start the hero choreography while the curtains are still lifting.
  useEffect(() => {
    if (show) return;
    document.documentElement.style.overflow = "";
    const timer = window.setTimeout(onReveal, instant.current ? 0 : 420);
    return () => clearTimeout(timer);
  }, [show, onReveal]);

  const panel = { exit: { clipPath: "inset(0% 0% 100% 0%)", transition: { duration: 1, ease: EASE_IN_OUT } } };
  return <AnimatePresence>
    {show && !reduce && <motion.div className="intro" key="intro" exit="exit" variants={{ exit: { transition: { staggerChildren: 0.14, staggerDirection: -1 } } }} aria-hidden="true">
      <motion.div className="intro__panel intro__panel--red" style={{ clipPath: "inset(0% 0% 0% 0%)" }} variants={panel} />
      <motion.div className="intro__panel intro__panel--ink" style={{ clipPath: "inset(0% 0% 0% 0%)" }} variants={panel}>
        <motion.div className="intro__content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40, transition: { duration: 0.5, ease: EASE } }} transition={{ duration: 0.7, ease: EASE }}>
          <div className="intro__mark">
            {[0, 1, 2, 3].map(i => <motion.i key={i} initial={false} animate={{ scale: step > i ? 1 : 0.35, backgroundColor: step > i ? "#a52236" : "rgba(240,238,232,0.14)", rotate: step > i ? 0 : 45 }} transition={{ type: "spring", stiffness: 380, damping: 18 }} />)}
          </div>
          <p className="intro__title">La complessità<br />prende <em>forma.</em></p>
          <div className="intro__meta"><span>Gruppo 4D<br />Digital Innovation Partner</span><span className="intro__count" ref={counter}>000</span></div>
          <div className="intro__bar"><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.9, ease: [0.65, 0, 0.35, 1] }} /></div>
        </motion.div>
      </motion.div>
    </motion.div>}
  </AnimatePresence>;
}
