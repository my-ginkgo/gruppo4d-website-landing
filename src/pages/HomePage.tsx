import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, ExternalLink, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogoBlack } from "../components/Logo";
import { caseStudies } from "../data/caseStudies";
import { teamMembers } from "../data/team";

const EASE = [0.22, 1, 0.36, 1] as const;
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

function FormationGraphic({ compact = false }: { compact?: boolean }) {
  const reduce = useReducedMotion();
  const nodes = [[16, 18], [48, 9], [84, 20], [91, 53], [76, 86], [42, 93], [11, 72], [31, 39], [67, 37], [56, 67]];
  return <div className={`formation ${compact ? "formation--compact" : ""}`} aria-hidden="true">
    <svg viewBox="0 0 100 100" role="presentation">
      <g className="formation__grid">{[20, 40, 60, 80].map(n => <path key={`v${n}`} d={`M${n} 0V100`} />)}{[20, 40, 60, 80].map(n => <path key={`h${n}`} d={`M0 ${n}H100`} />)}</g>
      <motion.g initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: reduce ? 0 : 0.08 } } }}>
        {nodes.map(([x, y], index) => <motion.path key={index} d={`M${x} ${y} L50 50`} variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }} transition={{ duration: reduce ? 0 : 0.9, ease: EASE }} className="formation__line" />)}
        {nodes.map(([x, y], index) => <motion.circle key={`n${index}`} cx={x} cy={y} r={index % 3 === 0 ? 1.7 : 1.05} variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1 } }} className="formation__node" />)}
      </motion.g>
      <motion.g className="formation__core" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: reduce ? 0 : 0.8, duration: 0.8, ease: EASE }}>
        <circle cx="50" cy="50" r="14" /><path d="M50 36A14 14 0 0 1 64 50M64 50A14 14 0 0 1 50 64M50 64A14 14 0 0 1 36 50M36 50A14 14 0 0 1 50 36" /><text x="50" y="53.3" textAnchor="middle">4D</text>
      </motion.g>
    </svg>
    <span className="formation__label formation__label--a">dati</span><span className="formation__label formation__label--b">sistemi</span><span className="formation__label formation__label--c">persone</span><span className="formation__label formation__label--d">processi</span>
  </div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 32); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  const links = [["#competenze", "Competenze"], ["#noeva", "NOEVA"], ["#progetti", "Progetti"], ["#persone", "Persone"]];
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <a className="skip-link" href="#main">Vai al contenuto</a>
    <div className="shell site-header__inner"><a href="#top" aria-label="Gruppo 4D, home"><LogoBlack className="site-logo" /></a><nav className="site-nav" aria-label="Navigazione principale">{links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav><a className="button button--small" href="#contatti">Parliamone <ArrowRight size={16} /></a><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Chiudi menu" : "Apri menu"}>{open ? <X /> : <Menu />}</button></div>
    <AnimatePresence>{open && <motion.nav id="mobile-menu" className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>{links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a href="#contatti" onClick={() => setOpen(false)}>Avvia un progetto</a></motion.nav>}</AnimatePresence>
  </header>;
}

function HomePage() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.18], [0, reduce ? 0 : 90]);
  const featured = caseStudies.slice(0, 3);
  const people = Object.values(teamMembers);
  return <div className="site" id="top">
    <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} /><Header />
    <main id="main">
      <section className="hero shell">
        <motion.div className="hero__copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: reduce ? 0 : 0.12 } } }}><motion.p className="eyebrow" variants={reveal}><span /> Digital Innovation Partner · Reggio Emilia</motion.p><motion.h1 variants={reveal}>La complessità<br />prende <em>forma.</em></motion.h1><motion.p className="hero__lead" variants={reveal}>Progettiamo software, dati e intelligenza artificiale come parti di un unico sistema: concreto, leggibile, pronto a lavorare.</motion.p><motion.div className="hero__actions" variants={reveal}><a className="button" href="#contatti">Raccontaci il progetto <ArrowRight size={18} /></a><a className="text-link" href="#competenze">Esplora il sistema <ArrowDown size={17} /></a></motion.div></motion.div>
        <motion.div className="hero__visual" style={{ y: heroY }}><FormationGraphic /></motion.div><div className="hero__index" aria-hidden="true"><span>01</span><span>Forma</span><span>4 dimensioni</span></div>
      </section>
      <section className="statement section shell" id="chi-siamo"><motion.div className="statement__lead" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={reveal}><p className="section-index">01 / Chi siamo</p><h2>La tecnologia funziona quando smette di essere un insieme di pezzi.</h2></motion.div><motion.div className="statement__body" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={reveal}><p>Gruppo 4D affianca le aziende nella trasformazione digitale. Uniamo visione tecnica e comprensione dei processi per dare continuità a dati, strumenti e persone.</p><dl className="facts"><div><dt>2023</dt><dd>Fondazione a Reggio Emilia</dd></div><div><dt>4</dt><dd>Competenze che lavorano insieme</dd></div></dl></motion.div></section>
      <section className="capabilities section" id="competenze"><div className="shell"><div className="section-heading"><p className="section-index">02 / Il sistema</p><h2>Non quattro servizi.<br /><em>Un’unica regia.</em></h2><p>Ogni competenza entra nel progetto nel momento in cui serve e resta connessa alle altre.</p></div><div className="capability-map"><div className="capability-map__axis" aria-hidden="true"><span>strategia</span><span>esecuzione</span></div>{services.map((service, index) => <motion.article key={service.index} className={`capability capability--${index + 1}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={reveal}><span>{service.index}</span><h3>{service.title}</h3><p>{service.text}</p></motion.article>)}<div className="capability-map__core"><span>4D</span><small>integrazione</small></div></div></div></section>
      <section className="noeva section" id="noeva"><div className="shell noeva__grid"><motion.div className="noeva__copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}><p className="section-index">03 / Prodotto</p><p className="noeva__wordmark">NOEVA<sup>®</sup></p><h2>La conoscenza aziendale diventa azione.</h2><p>La piattaforma AI enterprise di Gruppo 4D orchestra agenti, workflow e knowledge base. Le persone restano in controllo, ogni passaggio resta verificabile.</p><ul><li>Agenti AI e workflow orchestrati</li><li>Email, WhatsApp, web e API</li><li>Supervisione umana e audit</li><li>Dati in Europa, conformità GDPR</li></ul><a className="button button--light" href="https://noeva.ai" target="_blank" rel="noreferrer">Scopri NOEVA <ExternalLink size={17} /></a></motion.div><motion.div className="noeva__demo" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.85, ease: EASE }}><p>Flusso illustrativo</p><div className="flow"><span>Richiesta</span><i>01</i><span>Contesto</span><i>02</i><span>Azione</span></div><div className="flow-panel"><div><small>canale</small><strong>email · API</strong></div><div><small>conoscenza</small><strong>fonti aziendali</strong></div><div><small>controllo</small><strong>approvazione umana</strong></div></div><FormationGraphic compact /></motion.div></div></section>
      <section className="method section shell" id="metodo"><div className="section-heading section-heading--split"><div><p className="section-index">04 / Metodo</p><h2>Dal problema<br />al sistema vivo.</h2></div><p>Una traiettoria chiara, con punti di verifica prima di ogni passaggio decisivo.</p></div><ol className="method__list">{method.map(([n, title, text]) => <motion.li key={n} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.7 }} variants={reveal}><span>{n}</span><h3>{title}</h3><p>{text}</p></motion.li>)}</ol></section>
      <section className="work section" id="progetti"><div className="shell"><div className="section-heading section-heading--split"><div><p className="section-index">05 / Progetti</p><h2>La forma finale<br />è quella che serve.</h2></div><p>Software, dati e processi applicati a contesti aziendali reali.</p></div><div className="work__list">{featured.map((study, index) => <motion.article className="project" key={study.id} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal}><Link to={`/case-studies/${study.id}`} className="project__image"><img src={study.image} alt="" loading="lazy" /><span>0{index + 1}</span></Link><div className="project__copy"><div className="project__tags">{study.tags.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div><h3>{study.title}</h3><p>{study.description}</p><Link className="text-link" to={`/case-studies/${study.id}`}>Leggi il progetto <ArrowRight size={17} /></Link></div></motion.article>)}</div><Link className="button button--outline" to="/case-studies">Tutti i case study <ArrowRight size={17} /></Link></div></section>
      <section className="people section shell" id="persone"><div className="section-heading"><p className="section-index">06 / Persone</p><h2>La tecnologia è<br /><em>una relazione.</em></h2><p>Competenze diverse, responsabilità condivisa, un confronto diretto in ogni fase del lavoro.</p></div><div className="people__grid">{people.map((person, index) => <motion.article className={`person person--${index + 1}`} key={person.id} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={reveal}><Link to={`/profile/${person.id}`}><div className="person__image"><img src={person.image} alt={`Ritratto di ${person.name}`} loading="lazy" /><span>0{index + 1}</span></div><h3>{person.name}</h3><p>{person.role}</p></Link></motion.article>)}</div></section>
      <section className="contact section" id="contatti"><div className="shell contact__inner"><div><p className="section-index">07 / Contatto</p><h2>Quale complessità<br />possiamo mettere<br /><em>in ordine?</em></h2></div><div className="contact__action"><p>Partiamo dal contesto, non da una soluzione preconfezionata. Raccontaci cosa deve cambiare.</p><a className="contact__mail" href="mailto:info@gruppo4d.com">info@gruppo4d.com <ArrowRight /></a><a className="button button--light" href={bookingUrl} target="_blank" rel="noreferrer">Prenota una call <ExternalLink size={17} /></a></div></div></section>
    </main>
    <footer className="footer"><div className="shell footer__top"><LogoBlack className="site-logo" /><p>Digital Innovation Partner<br />Reggio Emilia</p><nav><a href="#competenze">Competenze</a><a href="#noeva">NOEVA</a><a href="#progetti">Progetti</a><a href="#contatti">Contatti</a></nav></div><div className="shell footer__bottom"><span>4D Srl · P.IVA 03000790356</span><span>Via Brigata Reggio, 32 · 42124 Reggio Emilia</span><a href="https://gruppo4d.com/privacy/">Privacy</a><a href="https://gruppo4d.com/cookie-policy/">Cookie</a><span>© {new Date().getFullYear()}</span></div></footer>
  </div>;
}
export default HomePage;
