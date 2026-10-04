import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const LINES = [
  "richiesta ricevuta · email cliente",
  "recupero contesto da 3 fonti aziendali",
  "bozza di risposta pronta · in attesa di approvazione",
  "approvato da operatore · azione eseguita ✓",
];

/** Terminal-style status line that types, holds and replaces the steps of an agent run. */
export function AgentLog() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(reduce ? LINES[0].length : 0);

  useEffect(() => {
    if (reduce || !inView) return;
    const full = LINES[line].length;
    const timer = window.setTimeout(() => {
      if (chars < full) setChars(c => c + 1);
      else { setLine(l => (l + 1) % LINES.length); setChars(0); }
    }, chars < full ? 26 + Math.random() * 30 : 1500);
    return () => clearTimeout(timer);
  }, [chars, line, inView, reduce]);

  return <div ref={ref} className="agent-log" aria-hidden="true">
    <span className="agent-log__step">{String(line + 1).padStart(2, "0")}/{String(LINES.length).padStart(2, "0")}</span>
    <span className="agent-log__text">{LINES[line].slice(0, chars)}<i className="agent-log__caret" /></span>
  </div>;
}
