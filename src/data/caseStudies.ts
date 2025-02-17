import { Briefcase, Cloud, Database, GaugeCircle, LineChart, Users } from "lucide-react";

export const caseStudies = [
  {
    id: "sports-data-analysis",
    title: "Analisi Dati Sportivi",
    description:
      "Sviluppo di un portale per l'analisi automatica dei dati raccolti dai test metabolici su atleti, con l'obiettivo di velocizzare la creazione di report personalizzati e comparativi tra i giocatori.",
    icon: GaugeCircle,
    image: "https://o2up.it/wp-content/uploads/2024/08/testata-home-o2up-1.jpg",
    tags: ["Angular", "Node.js", "Firebase", "MongoDB", "PostgreSQL"],
    challenge: `
    <p>Il cliente, O2Up, aveva l'esigenza di sviluppare un sistema che permettesse:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Creazione automatizzata di report per singoli atleti basati su test metabolici effettuati sul campo.</li>
      <li>Comparazione dei dati tra i giocatori di un team con report avanzati</li>
      <li>Confronti con diverse popolazioni di atleti presenti a database</li>
      <li>Gestione avanzata di permessi e autorizzazioni nel rispetto della privacy degli atleti e dei team</li>
    </ul>
  `,
    solution: `
    <p>Per rispondere a queste esigenze, abbiamo implementato una soluzione che include:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Un frontend Angular per un'interfaccia utente interattiva e intuitiva</li>
      <li>Backend Node.js per gestire la logica di business e le API</li>
      <li>Utilizzo di Firebase per l'autenticazione e lo storage dei file</li>
      <li>Database MongoDB per archiviare dati raccolti dai dispositivi sul campo</li>
      <li>PostgreSQL per gestire dati relazionali e avere la possibilità di effettuare query di confronto e analitica</li>
    </ul>
  `,
    results: `
    <p>Grazie all'implementazione del portale, il cliente ha ottenuto:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Maggiore efficienza nella creazione di report, riducendo i tempi di elaborazione e consegna</li>
      <li>Upgrade del servizio offerto al cliente da una soluzione statica (PDF) ad una piattaforma interattiva</li>
      <li>Aumento della capacità di analisi comparativa tra atleti</li>
      <li>Miglioramento significativo nella gestione delle informazioni e nella velocità di accesso ai dati</li>
    </ul>
  `,
    technologies: [
      {
        name: "Angular",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
      },
      {
        name: "Node.js",
        logo: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Firebase",
        logo: "https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_28dp.png",
      },
      {
        name: "MongoDB",
        logo: "https://www.mongodb.com/assets/images/global/favicon.ico",
      },
      {
        name: "PostgreSQL",
        logo: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
    ],
    demoUrl: "https://o2up.gruppo4d.com",
  },
  {
    id: "bi-dashboard",
    title: "Business Intelligence Dashboard",
    description:
      "Dashboard interattiva per l'analisi delle performance aziendali con KPI personalizzati e report automatizzati.",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    tags: ["Power BI", "SQL", "Data Analysis", "Azure"],
    challenge: `
      <p>L'azienda aveva bisogno di una soluzione per monitorare le performance in tempo reale e prendere decisioni basate sui dati. Le sfide includevano:</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Dati provenienti da multiple fonti non integrate</li>
        <li>Necessità di report automatizzati e personalizzabili</li>
        <li>Richiesta di accesso mobile ai dati</li>
        <li>Sicurezza e privacy dei dati sensibili</li>
      </ul>
    `,
    solution: `
      <p>Abbiamo implementato una soluzione completa di Business Intelligence:</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Dashboard interattiva con KPI in tempo reale</li>
        <li>Sistema di ETL automatizzato</li>
        <li>Report personalizzati per diversi reparti</li>
        <li>Accesso sicuro e multipiattaforma</li>
      </ul>
    `,
    results: `
      <p>L'implementazione ha portato a significativi miglioramenti:</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Riduzione del 75% del tempo per la generazione di report</li>
        <li>Aumento del 30% nell'efficienza decisionale</li>
        <li>ROI positivo in soli 6 mesi</li>
        <li>Maggiore accuratezza nelle previsioni di business</li>
      </ul>
    `,
    technologies: [
      {
        name: "Power BI",
        logo: "https://vectorseek.com/wp-content/uploads/2023/09/Power-BI-Microsoft-Logo-Vector.svg-.png",
      },
      {
        name: "Azure",
        logo: "https://azure.microsoft.com/svghandler/azure-logo?width=600&height=315",
      },
      {
        name: "SQL Server",
        logo: "https://user-images.githubusercontent.com/4249331/52232852-e2c4f780-28bd-11e9-835d-1e3cf3e43888.png",
      },
    ],
    demoUrl: "https://demo-bi.gruppo4d.com",
  },
  {
    id: "warehouse-management",
    title: "Sistema di Gestione Magazzino",
    description:
      "Sistema integrato per la gestione del magazzino con tracciamento in tempo reale e ottimizzazione delle scorte.",
    icon: Database,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80",
    tags: ["IoT", "Cloud", "Mobile App", "Automation"],
    challenge: `
      <p>Il cliente necessitava di modernizzare la gestione del magazzino. Le sfide principali erano:</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Tracciamento in tempo reale delle merci</li>
        <li>Ottimizzazione delle scorte</li>
        <li>Riduzione degli errori di picking</li>
        <li>Integrazione con sistemi esistenti</li>
      </ul>
    `,
    solution: `
      <p>Abbiamo sviluppato un sistema completo che include:</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Sensori IoT per il tracciamento</li>
        <li>App mobile per operatori</li>
        <li>Sistema di ottimizzazione AI-driven</li>
        <li>Dashboard di controllo in tempo reale</li>
      </ul>
    `,
    results: `
      <p>L'implementazione ha portato a risultati eccezionali:</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Riduzione del 40% dei tempi di picking</li>
        <li>Diminuzione del 30% delle scorte</li>
        <li>Eliminazione quasi totale degli errori</li>
        <li>ROI raggiunto in 12 mesi</li>
      </ul>
    `,
    technologies: [
      {
        name: "React Native",
        logo: "https://reactnative.dev/img/header_logo.svg",
      },
      {
        name: "AWS IoT",
        logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
      },
      {
        name: "TensorFlow",
        logo: "https://www.tensorflow.org/images/tf_logo_social.png",
      },
    ],
    demoUrl: "https://demo-wms.gruppo4d.com",
  },
  {
    id: "crm-integration",
    title: "Integrazione CRM Enterprise",
    description:
      "Sviluppo di un sistema CRM personalizzato con integrazione multipiattaforma e automazione dei processi di vendita.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    tags: ["Salesforce", "API", "Automation", "Integration"],
    challenge: `
      <p>L'azienda necessitava di unificare i propri processi di vendita. Le sfide includevano:</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Integrazione di sistemi legacy</li>
        <li>Automazione del processo di vendita</li>
        <li>Gestione complessa dei lead</li>
        <li>Reporting avanzato</li>
      </ul>
    `,
    solution: `
      <p>Abbiamo implementato una soluzione CRM completa:</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Customizzazione Salesforce</li>
        <li>Integrazione con sistemi esistenti</li>
        <li>Automazione dei workflow</li>
        <li>Dashboard personalizzate</li>
      </ul>
    `,
    results: `
      <p>I risultati hanno superato le aspettative:</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Aumento del 50% nella conversione dei lead</li>
        <li>Riduzione del 60% nei tempi di gestione</li>
        <li>Miglioramento del 40% nel forecast</li>
        <li>Maggiore soddisfazione del team vendite</li>
      </ul>
    `,
    technologies: [
      {
        name: "Salesforce",
        logo: "https://cdn.freebiesupply.com/logos/large/2x/salesforce-2-logo-png-transparent.png",
      },
      {
        name: "MuleSoft",
        logo: "https://cabinetm-beta.s3.amazonaws.com/00000158-63a1-659b-e887-4ae6d749b713.png",
      },
      {
        name: "Heroku",
        logo: "https://www.herokucdn.com/favicon.ico",
      },
    ],
    demoUrl: "https://demo-crm.gruppo4d.com",
  },
  {
    id: "cloud-migration",
    title: "Migrazione Cloud Infrastructure",
    description:
      "Progetto di migrazione dell'infrastruttura IT legacy verso soluzioni cloud native con ottimizzazione dei costi e delle performance.",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    tags: ["AWS", "DevOps", "Microservices", "Docker"],
    challenge: `
      <p>Il cliente necessitava di modernizzare la propria infrastruttura IT. Le sfide erano:</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Migrazione senza interruzioni di servizio</li>
        <li>Ottimizzazione dei costi</li>
        <li>Scalabilità automatica</li>
        <li>Sicurezza avanzata</li>
      </ul>
    `,
    solution: `
      <p>Abbiamo implementato una strategia di migrazione completa:</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Architettura microservizi</li>
        <li>Container orchestration</li>
        <li>CI/CD automation</li>
        <li>Monitoring avanzato</li>
      </ul>
    `,
    results: `
      <p>La migrazione ha portato benefici significativi:</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Riduzione del 40% dei costi operativi</li>
        <li>Aumento del 99.99% dell'uptime</li>
        <li>Scalabilità automatica efficiente</li>
        <li>Maggiore sicurezza e compliance</li>
      </ul>
    `,
    technologies: [
      {
        name: "AWS",
        logo: "https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico",
      },
      {
        name: "Docker",
        logo: "https://docker-compose.net/img/docker.png",
      },
      {
        name: "Kubernetes",
        logo: "https://cdn2.iconfinder.com/data/icons/mixd/512/20_kubernetes-512.png",
      },
    ],
    demoUrl: "https://demo-cloud.gruppo4d.com",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Strategy",
    description: "Consulenza strategica per la trasformazione digitale di un'azienda manifatturiera tradizionale.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80",
    tags: ["Strategy", "Innovation", "Process", "Change"],
    challenge: `
      <p>L'azienda necessitava di una trasformazione digitale completa. Le sfide erano:</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Resistenza al cambiamento</li>
        <li>Processi obsoleti</li>
        <li>Formazione del personale</li>
        <li>Integrazione tecnologica</li>
      </ul>
    `,
    solution: `
      <p>Abbiamo sviluppato un piano di trasformazione completo:</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Roadmap strategica</li>
        <li>Reingegnerizzazione dei processi</li>
        <li>Programma di formazione</li>
        <li>Implementazione tecnologica</li>
      </ul>
    `,
    results: `
      <p>La trasformazione ha portato risultati tangibili:</p>
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li>Aumento del 35% della produttività</li>
        <li>Riduzione del 45% dei costi operativi</li>
        <li>Miglioramento della customer experience</li>
        <li>Cultura aziendale più innovativa</li>
      </ul>
    `,
    technologies: [
      {
        name: "Microsoft 365",
        logo: "https://www.microsoft.com/favicon.ico",
      },
      {
        name: "Power Platform",
        logo: "https://easi.its.utoronto.ca/wp-content/uploads/2023/01/PowerAutomate-2020-icon-1024x1024-1.png",
      },
      {
        name: "Teams",
        logo: "https://teams.microsoft.com/favicon.ico",
      },
    ],
    demoUrl: "https://demo-transformation.gruppo4d.com",
  },
];
