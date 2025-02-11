import { Briefcase, Cloud, Code, Database, LineChart, Users } from "lucide-react";

export const caseStudies = [
  {
    id: "ecommerce-b2b",
    title: "Piattaforma E-commerce B2B",
    description:
      "Sviluppo di una piattaforma e-commerce B2B per la gestione degli ordini e del catalogo prodotti, integrata con il gestionale aziendale.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "API REST"],
    challenge: `
      <p>Il cliente necessitava di una piattaforma B2B moderna e scalabile per gestire il proprio catalogo prodotti e gli ordini dei rivenditori. Le sfide principali includevano:</p>
      <ul>
        <li>Integrazione con il sistema gestionale esistente</li>
        <li>Gestione di un catalogo con oltre 10.000 prodotti</li>
        <li>Implementazione di un sistema di prezzi personalizzati per cliente</li>
        <li>Necessità di supportare dispositivi mobili e desktop</li>
      </ul>
    `,
    solution: `
      <p>Abbiamo sviluppato una soluzione completa che include:</p>
      <ul>
        <li>Frontend React con interfaccia responsive e performante</li>
        <li>Backend Node.js con API RESTful</li>
        <li>Sistema di cache avanzato per ottimizzare le performance</li>
        <li>Integrazione automatica con il gestionale tramite API</li>
        <li>Dashboard amministrativa per la gestione del catalogo</li>
      </ul>
    `,
    results: `
      <p>L'implementazione della piattaforma ha portato a risultati significativi:</p>
      <ul>
        <li>Riduzione del 60% dei tempi di gestione degli ordini</li>
        <li>Aumento del 40% degli ordini online</li>
        <li>Miglioramento della soddisfazione dei clienti</li>
        <li>Riduzione degli errori di inserimento ordini del 90%</li>
      </ul>
    `,
    technologies: [
      {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Node.js",
        logo: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
    ],
    demoUrl: "https://demo-ecommerce.gruppo4d.com",
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
      <ul>
        <li>Dati provenienti da multiple fonti non integrate</li>
        <li>Necessità di report automatizzati e personalizzabili</li>
        <li>Richiesta di accesso mobile ai dati</li>
        <li>Sicurezza e privacy dei dati sensibili</li>
      </ul>
    `,
    solution: `
      <p>Abbiamo implementato una soluzione completa di Business Intelligence:</p>
      <ul>
        <li>Dashboard interattiva con KPI in tempo reale</li>
        <li>Sistema di ETL automatizzato</li>
        <li>Report personalizzati per diversi reparti</li>
        <li>Accesso sicuro e multipiattaforma</li>
      </ul>
    `,
    results: `
      <p>L'implementazione ha portato a significativi miglioramenti:</p>
      <ul>
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
      <ul>
        <li>Tracciamento in tempo reale delle merci</li>
        <li>Ottimizzazione delle scorte</li>
        <li>Riduzione degli errori di picking</li>
        <li>Integrazione con sistemi esistenti</li>
      </ul>
    `,
    solution: `
      <p>Abbiamo sviluppato un sistema completo che include:</p>
      <ul>
        <li>Sensori IoT per il tracciamento</li>
        <li>App mobile per operatori</li>
        <li>Sistema di ottimizzazione AI-driven</li>
        <li>Dashboard di controllo in tempo reale</li>
      </ul>
    `,
    results: `
      <p>L'implementazione ha portato a risultati eccezionali:</p>
      <ul>
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
      <ul>
        <li>Integrazione di sistemi legacy</li>
        <li>Automazione del processo di vendita</li>
        <li>Gestione complessa dei lead</li>
        <li>Reporting avanzato</li>
      </ul>
    `,
    solution: `
      <p>Abbiamo implementato una soluzione CRM completa:</p>
      <ul>
        <li>Customizzazione Salesforce</li>
        <li>Integrazione con sistemi esistenti</li>
        <li>Automazione dei workflow</li>
        <li>Dashboard personalizzate</li>
      </ul>
    `,
    results: `
      <p>I risultati hanno superato le aspettative:</p>
      <ul>
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
      <ul>
        <li>Migrazione senza interruzioni di servizio</li>
        <li>Ottimizzazione dei costi</li>
        <li>Scalabilità automatica</li>
        <li>Sicurezza avanzata</li>
      </ul>
    `,
    solution: `
      <p>Abbiamo implementato una strategia di migrazione completa:</p>
      <ul>
        <li>Architettura microservizi</li>
        <li>Container orchestration</li>
        <li>CI/CD automation</li>
        <li>Monitoring avanzato</li>
      </ul>
    `,
    results: `
      <p>La migrazione ha portato benefici significativi:</p>
      <ul>
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
      <ul>
        <li>Resistenza al cambiamento</li>
        <li>Processi obsoleti</li>
        <li>Formazione del personale</li>
        <li>Integrazione tecnologica</li>
      </ul>
    `,
    solution: `
      <p>Abbiamo sviluppato un piano di trasformazione completo:</p>
      <ul>
        <li>Roadmap strategica</li>
        <li>Reingegnerizzazione dei processi</li>
        <li>Programma di formazione</li>
        <li>Implementazione tecnologica</li>
      </ul>
    `,
    results: `
      <p>La trasformazione ha portato risultati tangibili:</p>
      <ul>
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
