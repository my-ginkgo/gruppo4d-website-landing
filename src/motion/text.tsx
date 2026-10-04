import { animate, motion, MotionValue, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { EASE } from "./ease";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/·<>+*";
const scramble = (text: string, settled: number) =>
  text.split("").map((c, i) => (i < settled || c === " " ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])).join("");

/** Mono label that decodes itself, left to right, the first time it enters the viewport. */
export function Scramble({ text, delay = 0, duration = 0.9, start = true }: { text: string; delay?: number; duration?: number; start?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [out, setOut] = useState(() => (reduce ? text : scramble(text, 0)));
  useEffect(() => {
    if (reduce) return setOut(text);
    if (!inView || !start) return;
    let raf = 0;
    const t0 = performance.now() + delay * 1000;
    const tick = (now: number) => {
      const p = Math.max(0, (now - t0) / (duration * 1000));
      const settled = Math.floor(p * text.length);
      setOut(settled >= text.length ? text : scramble(text, settled));
      if (settled < text.length) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, start, reduce, text, delay, duration]);
  return <span ref={ref} aria-label={text}><span aria-hidden="true">{out}</span></span>;
}

export type Line = (string | { em: string })[];

/** Headline whose words rise out of a mask, line by line. Words wrapped in { em } get the serif accent. */
export function SplitHeading({ lines, as = "h2", className, play, delay = 0, inViewOnce = true }: { lines: Line[]; as?: "h1" | "h2" | "h3"; className?: string; play?: boolean; delay?: number; inViewOnce?: boolean }) {
  const reduce = useReducedMotion();
  const Tag = { h1: motion.h1, h2: motion.h2, h3: motion.h3 }[as];
  let i = 0;
  const word = (content: ReactNode, key: string, em = false) => {
    const index = i++;
    return <span className="split__mask" key={key}>
      <motion.span className="split__word" variants={{ hidden: { y: "105%", rotate: 5 }, visible: { y: "0%", rotate: 0, transition: { duration: reduce ? 0 : 1.05, ease: EASE, delay: reduce ? 0 : delay + index * 0.07 } } }}>
        {em ? <em>{content}</em> : content}
      </motion.span>
    </span>;
  };
  const control = play === undefined ? { initial: "hidden", whileInView: "visible", viewport: { once: inViewOnce, amount: 0.5 } } : { initial: "hidden", animate: play ? "visible" : "hidden" };
  return <Tag className={`split ${className ?? ""}`} {...control}>
    {lines.map((line, l) => <Fragment key={l}>
      {line.flatMap((part, p) => typeof part === "string"
        ? part.split(" ").filter(Boolean).map((w, k) => <Fragment key={`${l}-${p}-${k}`}>{word(w, `${l}-${p}-${k}`)}{" "}</Fragment>)
        : [<Fragment key={`${l}-${p}`}>{word(part.em, `${l}-${p}`, true)}{" "}</Fragment>])}
      {l < lines.length - 1 && <br />}
    </Fragment>)}
  </Tag>;
}

function ScrollWord({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.13, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return <><motion.span className="scroll-word" style={{ opacity, y }}>{children}</motion.span>{" "}</>;
}

/** Paragraph that "ink-fills" word by word, scrubbed by scroll position. */
export function ScrollText({ text, className, as = "h2" }: { text: string; className?: string; as?: "h2" | "p" }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.88", "end 0.42"] });
  const words = text.split(" ");
  const Tag = as;
  return <Tag ref={ref} className={className} aria-label={reduce ? undefined : text}>
    {reduce ? text : <span aria-hidden="true">{words.map((w, i) => <ScrollWord key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>{w}</ScrollWord>)}</span>}
  </Tag>;
}

/** Number that counts up from `from` when it scrolls into view. */
export function Counter({ to, from = 0, duration = 1.8 }: { to: number; from?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();
  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || reduce) return;
    const controls = animate(from, to, { duration, ease: EASE, onUpdate: v => { el.textContent = String(Math.round(v)); } });
    return () => controls.stop();
  }, [inView, reduce, from, to, duration]);
  return <span ref={ref} className="counter">{reduce ? to : from}</span>;
}
