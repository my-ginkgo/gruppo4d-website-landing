import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { clamp, easeInOutCubic, easeOutExpo, lerp } from "./ease";

/**
 * "La complessità prende forma" as a living diagram.
 * Particles start as a drifting, over-connected tangle; when `play` turns on they
 * settle into orbits around the 4D core, spokes draw in and data pulses travel inwards.
 * The pointer pushes particles aside like a hand through iron filings.
 * Everything is drawn in a 100×100 unit space and scaled to the canvas.
 */
const NODES: [number, number][] = [[16, 18], [48, 9], [84, 20], [91, 53], [76, 86], [42, 93], [11, 72], [31, 39], [67, 37], [56, 67]];
const RINGS = [21, 29, 37, 45];
const PALETTE = {
  ink: { node: "23,21,18", line: "165,34,54", grid: "23,21,18", core: "#a52236", coreText: "#f0eee8" },
  light: { node: "247,242,233", line: "247,242,233", grid: "247,242,233", core: "#a52236", coreText: "#f7f2e9" },
};

type Particle = { sx: number; sy: number; fx: number; fy: number; ph: number; tx: number; ty: number; ring: number; angle: number; size: number; delay: number; ox: number; oy: number; x: number; y: number; f: number; primary: boolean };

const seeded = (seed: number) => () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };

function build(compact: boolean): Particle[] {
  const rand = seeded(compact ? 7 : 4);
  const base = (tx: number, ty: number, extra: Partial<Particle>): Particle => ({
    sx: 8 + rand() * 84, sy: 8 + rand() * 84, fx: 0.25 + rand() * 0.5, fy: 0.25 + rand() * 0.5, ph: rand() * Math.PI * 2,
    tx, ty, ring: -1, angle: 0, size: 0.5, delay: rand() * 0.55, ox: 0, oy: 0, x: 0, y: 0, f: 0, primary: false, ...extra,
  });
  const nodes = NODES.map(([x, y], i) => base(x, y, { primary: true, size: i % 3 === 0 ? 1.7 : 1.05, delay: 0.15 + i * 0.05 }));
  const dust: Particle[] = [];
  const perRing = compact ? [7, 9, 10, 0] : [10, 14, 18, 22];
  RINGS.forEach((r, ring) => {
    for (let k = 0; k < perRing[ring]; k++) {
      const angle = (k / perRing[ring]) * Math.PI * 2 + ring * 0.4 + rand() * 0.18;
      dust.push(base(50 + Math.cos(angle) * r, 50 + Math.sin(angle) * r, { ring, angle, size: 0.32 + rand() * 0.38, delay: 0.25 + ring * 0.12 + rand() * 0.5 }));
    }
  });
  return [...nodes, ...dust];
}

export function FormationField({ play, tone = "ink", compact = false, labels = !compact }: { play: boolean; tone?: "ink" | "light"; compact?: boolean; labels?: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playRef = useRef(play);
  const reduce = useReducedMotion();
  useEffect(() => { playRef.current = play; }, [play]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !wrap || !ctx) return;
    const colors = PALETTE[tone];
    const particles = build(compact);
    const pulses: { node: number; t0: number }[] = [];
    const ripples: number[] = [];
    const mouse = { x: -999, y: -999, active: false };
    let size = 0, dpr = 1, time = 0, playAt = -1, lastPulse = 0, raf = 0, last = 0, visible = true;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = rect.width;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      if (reduce) draw(1);
    };

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mouse.active = x > -15 && x < 115 && y > -15 && y < 115;
      mouse.x = x; mouse.y = y;
    };
    const onLeave = () => { mouse.active = false; };

    function draw(dt: number) {
      const s = (size / 100) * dpr;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.setTransform(s, 0, 0, s, 0, 0);
      const px = 1 / s; // one device pixel in units
      const formedAt = reduce ? -100 : playAt < 0 ? Infinity : playAt + 0.85;
      const tf = time - formedAt; // seconds since formation began
      const global = reduce ? 1 : clamp(tf / 2.4);

      // grid + crosshair
      ctx!.strokeStyle = `rgba(${colors.grid},${0.12})`;
      ctx!.lineWidth = px;
      ctx!.beginPath();
      for (const n of [20, 40, 60, 80]) { ctx!.moveTo(n, 0); ctx!.lineTo(n, 100); ctx!.moveTo(0, n); ctx!.lineTo(100, n); }
      ctx!.stroke();

      // particle positions
      for (const p of particles) {
        p.f = reduce ? 1 : easeInOutCubic(clamp((tf - p.delay) / 1.9));
        const wanderX = p.sx + Math.sin(time * p.fx + p.ph) * 7;
        const wanderY = p.sy + Math.cos(time * p.fy + p.ph * 1.3) * 7;
        let tx = p.tx, ty = p.ty;
        if (p.ring >= 0) {
          const omega = (p.ring % 2 ? 0.045 : -0.03) * (reduce ? 0 : 1);
          const r = RINGS[p.ring] + Math.sin(time * 0.8 + p.angle * 3) * 0.6;
          tx = 50 + Math.cos(p.angle + time * omega) * r;
          ty = 50 + Math.sin(p.angle + time * omega) * r;
        } else if (!reduce) {
          tx += Math.sin(time * 0.6 + p.ph) * 0.5; ty += Math.cos(time * 0.5 + p.ph) * 0.5;
        }
        // pointer repulsion with spring return
        let pushX = 0, pushY = 0;
        if (mouse.active && !reduce) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy) || 1, R = 17;
          if (d < R) { const k = Math.pow(1 - d / R, 2) * 9; pushX = (dx / d) * k; pushY = (dy / d) * k; }
        }
        const ease = 1 - Math.pow(0.0008, dt);
        p.ox += (pushX - p.ox) * ease; p.oy += (pushY - p.oy) * ease;
        p.x = lerp(wanderX, tx, p.f) + p.ox;
        p.y = lerp(wanderY, ty, p.f) + p.oy;
      }

      // links: a dense tangle that dissolves into a light constellation
      ctx!.lineWidth = px;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          const f = Math.min(a.f, b.f);
          let alpha = 0;
          if (d < 17) alpha += (1 - d / 17) * 0.42 * (1 - f);
          if (d < 9 && !a.primary && !b.primary) alpha += (1 - d / 9) * 0.2 * f;
          if (mouse.active && d < 14) {
            const md = Math.hypot((a.x + b.x) / 2 - mouse.x, (a.y + b.y) / 2 - mouse.y);
            if (md < 20) alpha += (1 - md / 20) * (1 - d / 14) * 0.55;
          }
          if (alpha < 0.01) continue;
          ctx!.strokeStyle = `rgba(${f > 0.5 ? colors.line : colors.grid},${alpha})`;
          ctx!.beginPath(); ctx!.moveTo(a.x, a.y); ctx!.lineTo(b.x, b.y); ctx!.stroke();
        }
      }

      // orbit guides
      if (global > 0) {
        ctx!.save();
        ctx!.setLineDash([0.6, 1.6]);
        RINGS.slice(0, compact ? 3 : 4).forEach((r, i) => {
          ctx!.lineDashOffset = time * (i % 2 ? 1.2 : -0.9);
          ctx!.strokeStyle = `rgba(${colors.grid},${0.16 * global})`;
          ctx!.beginPath(); ctx!.arc(50, 50, r, 0, Math.PI * 2); ctx!.stroke();
        });
        ctx!.restore();
      }

      // spokes, drawn from the node towards the core
      ctx!.lineWidth = 1.6 * px;
      ctx!.strokeStyle = `rgba(${colors.line},0.95)`;
      particles.forEach((p, i) => {
        if (!p.primary) return;
        const k = reduce ? 1 : easeOutExpo(clamp((tf - 0.9 - i * 0.07) / 1.1));
        if (k <= 0) return;
        ctx!.beginPath(); ctx!.moveTo(p.x, p.y); ctx!.lineTo(lerp(p.x, 50, k), lerp(p.y, 50, k)); ctx!.stroke();
      });

      // data pulses travelling to the core, each ending in a ripple
      if (!reduce && tf > 2.2 && time - lastPulse > 0.55) {
        lastPulse = time;
        pulses.push({ node: Math.floor(Math.random() * NODES.length), t0: time });
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const k = (time - pulses[i].t0) / 1.15;
        if (k >= 1) { pulses.splice(i, 1); ripples.push(time); continue; }
        const n = particles[pulses[i].node], e = easeInOutCubic(k);
        const x = lerp(n.x, 50, e), y = lerp(n.y, 50, e);
        const glow = ctx!.createRadialGradient(x, y, 0, x, y, 3.2);
        glow.addColorStop(0, `rgba(${colors.line},0.55)`); glow.addColorStop(1, `rgba(${colors.line},0)`);
        ctx!.fillStyle = glow; ctx!.beginPath(); ctx!.arc(x, y, 3.2, 0, Math.PI * 2); ctx!.fill();
        ctx!.fillStyle = tone === "ink" ? colors.core : "#fff";
        ctx!.beginPath(); ctx!.arc(x, y, 0.75, 0, Math.PI * 2); ctx!.fill();
      }
      for (let i = ripples.length - 1; i >= 0; i--) {
        const k = (time - ripples[i]) / 1.4;
        if (k >= 1) { ripples.splice(i, 1); continue; }
        ctx!.strokeStyle = `rgba(${colors.line},${(1 - k) * 0.5})`;
        ctx!.lineWidth = px * 1.2;
        ctx!.beginPath(); ctx!.arc(50, 50, 14 + easeOutExpo(k) * 16, 0, Math.PI * 2); ctx!.stroke();
      }

      // particles
      for (const p of particles) {
        const alpha = p.primary ? 1 : 0.45 + 0.45 * p.f;
        ctx!.fillStyle = `rgba(${colors.node},${alpha})`;
        ctx!.beginPath(); ctx!.arc(p.x, p.y, p.size * (p.primary ? 1 : 0.8 + 0.2 * p.f), 0, Math.PI * 2); ctx!.fill();
        if (p.primary && p.size > 1.5) {
          ctx!.strokeStyle = `rgba(${colors.node},${0.35 * p.f})`; ctx!.lineWidth = px;
          ctx!.beginPath(); ctx!.arc(p.x, p.y, 3 + Math.sin(time * 2 + p.ph), 0, Math.PI * 2); ctx!.stroke();
        }
      }

      // core
      const c = reduce ? 1 : easeOutExpo(clamp((tf - 0.7) / 1.2));
      if (c > 0) {
        const r = 14 * (0.6 + 0.4 * c) * (1 + (reduce ? 0 : Math.sin(time * 1.6) * 0.012));
        ctx!.save();
        ctx!.globalAlpha = c;
        ctx!.fillStyle = colors.core;
        ctx!.beginPath(); ctx!.arc(50, 50, r, 0, Math.PI * 2); ctx!.fill();
        // rotating index ring: four ticks, one per dimension
        ctx!.translate(50, 50); ctx!.rotate(time * 0.25);
        ctx!.strokeStyle = `rgba(${colors.node},0.6)`; ctx!.lineWidth = px * 1.2;
        ctx!.beginPath(); ctx!.arc(0, 0, r + 3, 0, Math.PI * 2); ctx!.stroke();
        ctx!.fillStyle = `rgba(${colors.node},1)`;
        for (let q = 0; q < 4; q++) { ctx!.rotate(Math.PI / 2); ctx!.fillRect(-0.45, -(r + 3) - 0.45, 0.9, 0.9); }
        ctx!.restore();
        ctx!.save();
        ctx!.globalAlpha = c;
        ctx!.fillStyle = colors.coreText;
        ctx!.font = `600 6.4px "DM Mono", monospace`;
        ctx!.textAlign = "center"; ctx!.textBaseline = "middle";
        ctx!.fillText("4D", 50, 50.6);
        ctx!.restore();
      }
    }

    const frame = (now: number) => {
      const dt = Math.min(0.05, last ? (now - last) / 1000 : 0.016);
      last = now;
      time += dt;
      if (playRef.current && playAt < 0) playAt = time;
      draw(dt);
      wrap.style.setProperty("--formed", String(playAt < 0 ? 0 : clamp((time - playAt - 2.2) / 0.8)));
      raf = visible ? requestAnimationFrame(frame) : 0;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();
    if (reduce) { wrap.style.setProperty("--formed", "1"); return () => ro.disconnect(); }

    let onScreen = true;
    const wake = () => {
      visible = onScreen && !document.hidden;
      if (visible && !raf) { last = 0; raf = requestAnimationFrame(frame); }
    };
    const io = new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; wake(); });
    io.observe(wrap);
    document.addEventListener("visibilitychange", wake);
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect(); io.disconnect();
      document.removeEventListener("visibilitychange", wake);
      window.removeEventListener("pointermove", onPointer);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [tone, compact, reduce]);

  return <div ref={wrapRef} className={`formation ${compact ? "formation--compact" : ""}`} aria-hidden="true">
    <canvas ref={canvasRef} />
    {labels && <>
      <span className="formation__label formation__label--a">dati</span>
      <span className="formation__label formation__label--b">sistemi</span>
      <span className="formation__label formation__label--c">persone</span>
      <span className="formation__label formation__label--d">processi</span>
    </>}
  </div>;
}
