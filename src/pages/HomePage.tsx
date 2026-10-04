import { AnimatePresence, motion, useInView, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, ExternalLink, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogoBlack } from "../components/Logo";
import { caseStudies } from "../data/caseStudies";
import { teamMembers } from "../data/team";
import { AgentLog } from "../motion/AgentLog";
import { EASE, spotlight } from "../motion/ease";
import { FormationField } from "../motion/FormationField";
import { Intro } from "../motion/Intro";
import { Marquee } from "../motion/Marquee";
import { Cursor, MagneticLink } from "../motion/pointer";
import { ParallaxMedia } from "../motion/reveal";
import { Counter, Scramble, ScrollText, SplitHeading } from "../motion/text";

const bookingUrl = "https://outlook.office365.com/book/AppuntamentoInformativo@gruppo4d.com/";
const services = [
  { index: "01", title: "Sviluppo software", text: "Applicazioni web e mobile, API, backend e infrastrutture cloud costruite intorno ai processi reali." },
  { index: "02", title: "Dati e consulenza", text: "Business Intelligence, data analytics e integrazioni che trasformano informazioni disperse in decisioni." },
  { index: "03", title: "Project management", text: "Coordinamento, qualità, delivery e monitoraggio per portare ogni progetto dalla strategia all’adozione." },
  { index: "04", title: "Intelligenza artificiale", text: "Agenti AI, sistemi RAG, MCP e automazioni progettati per lavorare nei flussi aziendali." },
];
const method = [
  ["01", "Comprendere", "Obiettivi, persone, dati e vincoli prima della tecnologia."],
  ["02", "Dare forma", "Architettura e prototipo rendono la soluzione concreta e verificabile."],
  ["03", "Costruire", "Sviluppo iterativo, integrazione e test con feedback continuo."],
  ["04", "Evolvere", "Rilascio controllato, monitoraggio e miglioramento nel tempo."],
];
const reveal = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.78, ease: EASE } } };
const stagger = (gap = 0.1, delay = 0) => ({ hidden: {}, visible: { transition: { staggerChildren: gap, delayChildren: delay } } });
const inView = { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.35 } } as const;
// capability cards grow out of the 4D core: each one starts nudged towards the centre of the map
const fromCore = [[40, 40], [-40, 40], [40, -40], [-40, -40]];

function Roll({ children }: { children: string }) {
  return <span className="roll" data-text={children}><span>{children}</span></span>;
}

function Header({ ready }: { ready: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", latest => {
    setScrolled(latest > 32);
    setHidden(latest > (scrollY.getPrevious() ?? 0) && latest > 240);
  });
  const links = [["#competenze", "Competenze"], ["#noeva", "NOEVA"], ["#progetti", "Progetti"], ["#persone", "Persone"]];
  return <motion.header className={`site-header ${scrolled ? "is-scrolled" : ""}`} initial={{ y: "-100%" }} animate={{ y: !ready || (hidden && !open) ? "-100%" : "0%" }} transition={{ duration: ready && !hidden ? 0.7 : 0.45, ease: EASE, delay: ready && !scrolled ? 0.5 : 0 }}>
    <a className="skip-link" href="#main">Vai al contenuto</a>
    <div className="shell site-header__inner">
      <a href="#top" aria-label="Gruppo 4D, home"><LogoBlack className="site-logo" /></a>
      <nav className="site-nav" aria-label="Navigazione principale">{links.map(([href, label]) => <a key={href} href={href}><Roll>{label}</Roll></a>)}</nav>
      <MagneticLink className="button button--small site-header__cta" href="#contatti" strength={0.25}>Parliamone <ArrowRight size={16} /></MagneticLink>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Chiudi menu" : "Apri menu"}>{open ? <X /> : <Menu />}</button>
    </div>
    <AnimatePresence>{open && <motion.nav id="mobile-menu" className="mobile-nav" initial={{ clipPath: "inset(0% 0% 100% 0%)" }} animate={{ clipPath: "inset(0% 0% 0% 0%)" }} exit={{ clipPath: "inset(0% 0% 100% 0%)" }} transition={{ duration: 0.5, ease: EASE }}>
      <motion.div initial="hidden" animate="visible" variants={stagger(0.06, 0.15)}>
        {[...links, ["#contatti", "Avvia un progetto"]].map(([href, label]) => <motion.a key={href} href={href} onClick={() => setOpen(false)} variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } } }}>{label}</motion.a>)}
      </motion.div>
    </motion.nav>}</AnimatePresence>
  </motion.header>;
}

function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 220]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.82]);
  const visualRotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -14]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0]);
  const play = ready ? "visible" : "hidden";
  return <section ref={ref} className="hero shell">
    <motion.div className="hero__copy" style={{ y: copyY, opacity: copyOpacity }}>
      <motion.p className="eyebrow" initial="hidden" animate={play} variants={reveal}><motion.span className="eyebrow__dot" animate={reduce ? undefined : { rotate: [0, 90, 90, 180], scale: [1, 1.4, 1, 1] }} transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.6, ease: EASE }} /> <Scramble text="Digital Innovation Partner · Reggio Emilia" start={ready} delay={0.2} /></motion.p>
      <SplitHeading as="h1" play={ready} delay={0.15} lines={[["La complessità"], ["prende", { em: "forma." }]]} />
      <motion.p className="hero__lead" initial="hidden" animate={play} variants={{ hidden: { opacity: 0, y: 24, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: EASE, delay: 0.75 } } }}>Progettiamo software, dati e intelligenza artificiale come parti di un unico sistema: concreto, leggibile, pronto a lavorare.</motion.p>
      <motion.div className="hero__actions" initial="hidden" animate={play} variants={stagger(0.12, 0.95)}>
        <motion.div variants={reveal}><MagneticLink className="button" href="#contatti">Raccontaci il progetto <ArrowRight size={18} /></MagneticLink></motion.div>
        <motion.a variants={reveal} className="text-link" href="#competenze">Esplora il sistema <ArrowDown size={17} className="bob" /></motion.a>
      </motion.div>
    </motion.div>
    <motion.div className="hero__visual" style={{ y: visualY, scale: visualScale, rotate: visualRotate }} initial={{ opacity: 0 }} animate={{ opacity: ready ? 1 : 0 }} transition={{ duration: 1.2 }}><FormationField play={ready} /></motion.div>
    <motion.div className="hero__index" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: ready ? 1 : 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
      <span><Scramble text="01" start={ready} delay={0.9} /></span>
      <span><Scramble text="Forma" start={ready} delay={1} /></span>
      <span className="hero__scroll"><i /> <Scramble text="Scorri · 4 dimensioni" start={ready} delay={1.1} /></span>
    </motion.div>
  </section>;
}

function Statement() {
  return <section className="statement section shell" id="chi-siamo">
    <div className="statement__lead"><p className="section-index"><Scramble text="01 / Chi siamo" /></p><ScrollText text="La tecnologia funziona quando smette di essere un insieme di pezzi." /></div>
    <motion.div className="statement__body" {...inView} variants={stagger(0.12)}>
      <motion.p variants={reveal}>Gruppo 4D affianca le aziende nella trasformazione digitale. Uniamo visione tecnica e comprensione dei processi per dare continuità a dati, strumenti e persone.</motion.p>
      <motion.dl className="facts" variants={reveal}>
        <div><dt><Counter from={1990} to={2023} duration={2.2} /></dt><dd>Fondazione a Reggio Emilia</dd></div>
        <div><dt><Counter to={4} duration={1.4} /></dt><dd>Competenze che lavorano insieme</dd></div>
      </motion.dl>
    </motion.div>
  </section>;
}

function Capabilities() {
  const reduce = useReducedMotion();
  return <section className="capabilities section" id="competenze"><div className="shell">
    <div className="section-heading"><p className="section-index"><Scramble text="02 / Il sistema" /></p><SplitHeading lines={[["Non quattro servizi."], [{ em: "Un’unica regia." }]]} /><motion.p {...inView} variants={reveal}>Ogni competenza entra nel progetto nel momento in cui serve e resta connessa alle altre.</motion.p></div>
    <motion.div className="capability-map" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={stagger(0.12, 0.35)}>
      <div className="capability-map__axis" aria-hidden="true"><span>strategia</span><span>esecuzione</span></div>
      {services.map((service, index) => <motion.article key={service.index} className={`capability capability--${index + 1}`} onPointerMove={spotlight}
        variants={{ hidden: { opacity: 0, x: reduce ? 0 : fromCore[index][0], y: reduce ? 0 : fromCore[index][1], scale: reduce ? 1 : 0.94 }, visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 1.1, ease: EASE } } }}>
        <span className="capability__index">{service.index}</span><h3>{service.title}</h3><p>{service.text}</p><ArrowUpRight className="capability__arrow" size={22} aria-hidden="true" />
      </motion.article>)}
      <motion.div className="capability-map__core" variants={{ hidden: { scale: 0, rotate: -90 }, visible: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 140, damping: 14 } } }}>
        <svg className="core-ring" viewBox="0 0 200 200" aria-hidden="true"><defs><path id="core-circle" d="M100,100 m-86,0 a86,86 0 1,1 172,0 a86,86 0 1,1 -172,0" /></defs><text><textPath href="#core-circle">software · dati · project management · intelligenza artificiale · </textPath></text></svg>
        <i className="core-pulse" /><i className="core-pulse core-pulse--late" />
        <span>4D</span><small>integrazione</small>
      </motion.div>
    </motion.div>
  </div></section>;
}

function Noeva() {
  const demo = useRef<HTMLDivElement>(null);
  const demoInView = useInView(demo, { once: true, amount: 0.35 });
  const reduce = useReducedMotion();
  return <section className="noeva section" id="noeva" onPointerMove={spotlight}><div className="shell noeva__grid">
    <motion.div className="noeva__copy" {...inView} variants={stagger(0.1)}>
      <p className="section-index"><Scramble text="03 / Prodotto" /></p>
      <motion.p className="noeva__wordmark" aria-label="NOEVA" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}>
        {"NOEVA".split("").map((l, i) => <motion.span key={i} aria-hidden="true" variants={{ hidden: { opacity: 0, y: reduce ? 0 : -18, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } } }}>{l}</motion.span>)}<sup>®</sup>
      </motion.p>
      <SplitHeading lines={[["La conoscenza aziendale diventa azione."]]} />
      <motion.p variants={reveal}>La piattaforma AI enterprise di Gruppo 4D orchestra agenti, workflow e knowledge base. Le persone restano in controllo, ogni passaggio resta verificabile.</motion.p>
      <motion.ul variants={stagger(0.08)}>{["Agenti AI e workflow orchestrati", "Email, WhatsApp, web e API", "Supervisione umana e audit", "Dati in Europa, conformità GDPR"].map(item => <motion.li key={item} variants={reveal}>{item}</motion.li>)}</motion.ul>
      <motion.div variants={reveal}><MagneticLink className="button button--light" href="https://noeva.ai" target="_blank" rel="noreferrer" data-cursor="Visita">Scopri NOEVA <ExternalLink size={17} /></MagneticLink></motion.div>
    </motion.div>
    <motion.div ref={demo} className="noeva__demo" initial={{ opacity: 0, clipPath: reduce ? "inset(0%)" : "inset(12% 12% 12% 12%)" }} whileInView={{ opacity: 1, clipPath: "inset(0%)" }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.2, ease: EASE }}>
      <p><span className="live-dot" /> Flusso illustrativo</p>
      <div className="flow"><span>Richiesta</span><i>01</i><span>Contesto</span><i>02</i><span>Azione</span><b className="flow__packet" aria-hidden="true" /></div>
      <FormationField compact tone="light" play={demoInView} />
      <div className="flow-panel"><AgentLog /><div><small>canale</small><strong>email · API</strong></div><div><small>conoscenza</small><strong>fonti aziendali</strong></div><div><small>controllo</small><strong>approvazione umana</strong></div></div>
    </motion.div>
  </div></section>;
}

function Method() {
  return <section className="method section shell" id="metodo">
    <div className="section-heading section-heading--split"><div><p className="section-index"><Scramble text="04 / Metodo" /></p><SplitHeading lines={[["Dal problema"], ["al sistema vivo."]]} /></div><motion.p {...inView} variants={reveal}>Una traiettoria chiara, con punti di verifica prima di ogni passaggio decisivo.</motion.p></div>
    <ol className="method__list">{method.map(([n, title, text]) => <motion.li key={n} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }} variants={stagger(0.08)}>
      <motion.i className="method__rule" variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.2, ease: EASE } } }} aria-hidden="true" />
      <motion.span variants={reveal}><Scramble text={n} /></motion.span><motion.h3 variants={reveal}>{title}</motion.h3><motion.p variants={reveal}>{text}</motion.p>
    </motion.li>)}</ol>
  </section>;
}

function Work() {
  const navigate = useNavigate();
  const featured = caseStudies.slice(0, 3);
  return <section className="work section" id="progetti"><div className="shell">
    <div className="section-heading section-heading--split"><div><p className="section-index"><Scramble text="05 / Progetti" /></p><SplitHeading lines={[["La forma finale"], ["è quella che serve."]]} /></div><motion.p {...inView} variants={reveal}>Software, dati e processi applicati a contesti aziendali reali.</motion.p></div>
    <div className="work__list">{featured.map((study, index) => <article className="project" key={study.id}>
      <Link to={`/case-studies/${study.id}`} className="project__image" data-cursor="Apri" aria-label={study.title}>
        <ParallaxMedia src={study.image} from={index % 2 ? "left" : "right"}><span>0{index + 1}</span></ParallaxMedia>
      </Link>
      <motion.div className="project__copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger(0.09, 0.2)}>
        <motion.div className="project__tags" variants={stagger(0.05)}>{study.tags.slice(0, 3).map(tag => <motion.span key={tag} variants={reveal}>{tag}</motion.span>)}</motion.div>
        <SplitHeading as="h3" lines={[[study.title]]} delay={0.15} />
        <motion.p variants={reveal}>{study.description}</motion.p>
        <motion.div variants={reveal}><Link className="text-link" to={`/case-studies/${study.id}`}>Leggi il progetto <ArrowRight size={17} /></Link></motion.div>
      </motion.div>
    </article>)}</div>
    <MagneticLink className="button button--outline" href="/case-studies" onClick={e => { e.preventDefault(); navigate("/case-studies"); }}>Tutti i case study <ArrowRight size={17} /></MagneticLink>
  </div></section>;
}

function People() {
  const grid = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: grid, offset: ["start end", "end start"] });
  const drift = [useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]), useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -130]), useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80])];
  const people = Object.values(teamMembers);
  return <section className="people section shell" id="persone">
    <div className="section-heading"><p className="section-index"><Scramble text="06 / Persone" /></p><SplitHeading lines={[["La tecnologia è"], [{ em: "una relazione." }]]} /><motion.p {...inView} variants={reveal}>Competenze diverse, responsabilità condivisa, un confronto diretto in ogni fase del lavoro.</motion.p></div>
    <div ref={grid} className="people__grid">{people.map((person, index) => <motion.article className={`person person--${index + 1}`} key={person.id} style={{ y: drift[index % drift.length] }}>
      <Link to={`/profile/${person.id}`} data-cursor="Profilo">
        <div className="person__image"><ParallaxMedia src={person.image} alt={`Ritratto di ${person.name}`} depth={6}><span>0{index + 1}</span></ParallaxMedia></div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} variants={stagger(0.08, 0.3)}><motion.h3 variants={reveal}>{person.name}</motion.h3><motion.p variants={reveal}>{person.role}</motion.p></motion.div>
      </Link>
    </motion.article>)}</div>
  </section>;
}

function Contact() {
  return <section className="contact section" id="contatti" onPointerMove={spotlight}>
    <div className="shell contact__inner">
      <div><p className="section-index"><Scramble text="07 / Contatto" /></p><SplitHeading lines={[["Quale complessità"], ["possiamo mettere"], [{ em: "in ordine?" }]]} /></div>
      <motion.div className="contact__action" {...inView} variants={stagger(0.12, 0.3)}>
        <motion.p variants={reveal}>Partiamo dal contesto, non da una soluzione preconfezionata. Raccontaci cosa deve cambiare.</motion.p>
        <motion.a variants={reveal} className="contact__mail" href="mailto:info@gruppo4d.com" data-cursor="Scrivi">info@gruppo4d.com <ArrowRight /></motion.a>
        <motion.div variants={reveal}><MagneticLink className="button button--light" href={bookingUrl} target="_blank" rel="noreferrer" data-cursor="Prenota">Prenota una call <ExternalLink size={17} /></MagneticLink></motion.div>
      </motion.div>
    </div>
    <Marquee className="contact__marquee" outline speed={2} items={["Parliamone", "Mettiamo in ordine", "Diamo forma"]} />
  </section>;
}

function HomePage() {
  const [ready, setReady] = useState(false);
  const onReveal = useCallback(() => setReady(true), []);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  useEffect(() => { document.documentElement.classList.toggle("is-ready", ready); }, [ready]);
  return <div className="site" id="top">
    <Intro onReveal={onReveal} /><Cursor />
    <motion.div className="scroll-progress" style={{ scaleX: progress }} /><Header ready={ready} />
    <main id="main">
      <Hero ready={ready} />
      <div className="kinetic-band"><Marquee items={services.map(s => s.title)} speed={2.4} /><Marquee items={["Un unico sistema", "Quattro dimensioni", "Una sola regia"]} speed={1.8} reverse outline /></div>
      <Statement /><Capabilities /><Noeva /><Method /><Work /><People /><Contact />
    </main>
    <footer className="footer"><div className="shell footer__top"><LogoBlack className="site-logo" /><p>Digital Innovation Partner<br />Reggio Emilia</p><nav><a href="#competenze"><Roll>Competenze</Roll></a><a href="#noeva"><Roll>NOEVA</Roll></a><a href="#progetti"><Roll>Progetti</Roll></a><a href="#contatti"><Roll>Contatti</Roll></a></nav></div><div className="shell footer__bottom"><span>4D Srl · P.IVA 03000790356</span><span>Via Brigata Reggio, 32 · 42124 Reggio Emilia</span><a href="https://gruppo4d.com/privacy/">Privacy</a><a href="https://gruppo4d.com/cookie-policy/">Cookie</a><span>© {new Date().getFullYear()}</span></div></footer>
  </div>;
}
export default HomePage;
