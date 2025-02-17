import {
  BarChart,
  BookCheck,
  Briefcase,
  Cloud,
  Database,
  DollarSign,
  FolderSync,
  GaugeCircle,
  LineChart,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

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
    id: "dwh-kpi-analysis-igea",
    title: "DWH & Analisi dei KPI nel Settore Medicale",
    description:
      "Implementazione di un sistema di Business Intelligence per integrare diverse fonti di dati eterogenei e monitorare le performance aziendali in tempo reale.",
    icon: BarChart,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    tags: ["Business Intelligence", "ETL", "Dashboard", "Machine Learning"],
    challenge: `
    <p>L'azienda necessitava di superare diverse sfide:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Integrazione di dati su sistemi eterogeni per una visione chiara delle performance aziendali.</li>
      <li>Automatizzazione dell'analisi dei dati, precedentemente manuale e soggetta a errori.</li>
      <li>Creazione di un sistema centralizzato per il monitoraggio dei KPI strategici.</li>
      <li>Implementazione di profilazioni di accesso per una distribuzione sicura dei dati.</li>
    </ul>
  `,
    solution: `
    <p>Abbiamo sviluppato una soluzione completa di Business Intelligence che include:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Aggregazione e normalizzazione dei dati da diversi sistemi aziendali.</li>
      <li>Dashboard dinamiche e report interattivi, personalizzati per vari reparti.</li>
      <li>Utilizzo di strumenti di ETL per aggiornamenti automatici e affidabili dei dati.</li>
      <li>Analisi predittive e modelli di machine learning per prevedere i trend di mercato.</li>
    </ul>
  `,
    results: `
    <p>I risultati ottenuti sono stati significativi:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Riduzione dell'85% dei tempi di preparazione dei report.</li>
      <li>Miglioramento dell'agilità decisionale grazie all'accesso a dati aggiornati.</li>
      <li>Oltre 60 agenti utilizzano quotidianamente il portale per monitorare i propri risultati.</li>
      <li>Aumento dell'efficienza operativa e riduzione dei costi di gestione del 18%.</li>
      <li>Oltre 30 KPI monitorati quotidianamente dal marketing per supportare la rete commerciale.</li>
    </ul>
  `,
    technologies: [
      {
        name: "Business Intelligence Tools",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Business_Intelligence_Logo.svg",
      },
      {
        name: "ETL Tools",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/ETL_Logo.svg",
      },
    ],
    demoUrl: "https://demo-dwh-kpi-igea.gruppo4d.com",
  },
  {
    id: "powerbi-training-delcon",
    title: "Formazione Power BI nell'Industria del Sangue",
    description:
      "Realizzazione di un percorso formativo su Power BI per rendere autonomi i reparti aziendali nel migliorare le proprie capacità di analisi e decision-making.",
    icon: BookCheck,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Power BI", "Data Warehouse", "Formazione"],
    challenge: `
    <p>DELCON affrontava diverse sfide:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Dipendenza dal reparto IT per l'analisi dei dati, causando ritardi decisionali.</li>
      <li>Competenze limitate su Power BI tra il personale aziendale.</li>
    </ul>
  `,
    solution: `
    <p>Abbiamo progettato un corso di formazione specifico che include:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Sessioni teoriche e pratiche su Power BI e struttura del Data Warehouse aziendale.</li>
      <li>Esercizi pratici su dataset reali per ogni area aziendale.</li>
      <li>Identificazione di key users in ogni reparto per supportare l'adozione dello strumento.</li>
    </ul>
  `,
    results: `
    <p>I risultati della formazione sono stati notevoli:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Riduzione del 69% del tempo necessario per generare report.</li>
      <li>Ogni reparto ora dispone di dashboard personalizzate per monitorare KPI specifici.</li>
      <li>Riduzione dell'80% della dipendenza dal reparto IT per l'analisi dei dati.</li>
      <li>Formazione di 15 key users capaci di supportare i colleghi nell'uso di Power BI.</li>
    </ul>
  `,
    technologies: [
      {
        name: "Power BI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microsoft_Power_BI_Logo.svg",
      },
    ],
    demoUrl: "https://demo-powerbi-training-delcon.gruppo4d.com",
  },
  {
    id: "dwh-middleware-api-retex",
    title: "Integrazione di Data Warehouse e Middleware API per RETEX",
    description:
      "Sviluppo di un'architettura integrata con middleware API per migliorare l'analisi dati, l'automazione e l'interoperabilità dei sistemi aziendali nel settore retail.",
    icon: RefreshCw,
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&q=80",
    tags: ["Middleware", "API", "Data Warehouse", "SAP", "PAPRIKA", "SYSID"],
    challenge: `
    <p>RETEX affrontava diverse sfide critiche:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Integrazione complessa tra sistemi diversificati come SAP, PAPRIKA e SYSID.</li>
      <li>Mancanza di un Data Warehouse centralizzato per una visione unificata dei dati.</li>
      <li>Processi di integrazione manuali e inefficaci, ad alto rischio di errori.</li>
      <li>Necessità di un middleware avanzato per facilitare la comunicazione tra piattaforme.</li>
    </ul>
  `,
    solution: `
    <p>La soluzione implementata comprendeva:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Sviluppo di un Data Warehouse centralizzato per normalizzare e storicizzare i dati.</li>
      <li>Implementazione di un middleware API-driven con servizi API REST e SOAP.</li>
      <li>Orchestrazione dei flussi di dati per garantire l'interoperabilità e la coerenza dei dati.</li>
      <li>Ottimizzazione del sistema per scalabilità, alte prestazioni e sicurezza.</li>
    </ul>
  `,
    results: `
    <p>I risultati ottenuti sono stati notevoli:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Riduzione del 67% nei tempi di estrazione e consolidamento dei dati.</li>
      <li>Comunicazione fluida tra i sistemi, riducendo i costi IT del 78%.</li>
      <li>Miglioramento della velocità e affidabilità delle analisi con report in tempo reale.</li>
      <li>Migliorata la scalabilità e la governance dei dati, facilitando integrazioni future.</li>
    </ul>
  `,
    technologies: [
      {
        name: "Talend",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Talend-logo.svg",
      },
      {
        name: "SAP",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
      },
    ],
    demoUrl: "https://demo-retex-dwh-middleware.gruppo4d.com",
  },
  {
    id: "fashion-luxury-management-danjhon",
    title: "Gestione della Supply Chain nel Fashion & Luxury per DANJHON",
    description:
      "Implementazione di un sistema avanzato di gestione della supply chain per ottimizzare la distribuzione dei prodotti nel settore Fashion & Luxury.",
    icon: TrendingUp,
    image:
      "https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Supply Chain Management", "ERP", "WMS", "Replenishment"],
    challenge: `
    <p>DANJHON affrontava diverse sfide operative:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Gestione inefficiente della prima allocazione e dei riassortimenti nei negozi.</li>
      <li>Difficoltà nel prevedere la domanda e ottimizzare la disponibilità dei prodotti.</li>
      <li>Movimentazione inefficiente della merce tra hub logistici e negozi.</li>
    </ul>
  `,
    solution: `
    <p>Abbiamo implementato una piattaforma unificata che include:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Algoritmi di ottimizzazione per la gestione della prima allocazione e dei riassortimenti.</li>
      <li>Sviluppo di un motore di replenishment dinamico basato sulle vendite giornaliere.</li>
      <li>Integrazione con i sistemi ERP e WMS per migliorare la tracciabilità e l'efficienza logistica.</li>
      <li>Dashboard di monitoraggio per il controllo dei KPI e della distribuzione dei prodotti.</li>
    </ul>
  `,
    results: `
    <p>I risultati raggiunti includono:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Riduzione del 30% nelle rotture di stock nei negozi.</li>
      <li>Aumento del 40% nella velocità di riassortimento, migliorando l'efficienza operativa.</li>
      <li>Riduzione dei costi logistici del 12%, con trasferimenti più efficienti tra magazzini.</li>
      <li>Controllo completo su stock, vendite e performance logistica migliorato notevolmente.</li>
    </ul>
  `,
    technologies: [
      {
        name: "ERP Systems",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/ERP_logo.svg",
      },
      {
        name: "WMS Solutions",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Warehouse_Management_System_Logo.svg",
      },
    ],
    demoUrl: "https://demo-fashion-luxury-management-danjhon.gruppo4d.com",
  },
  {
    id: "bigquery-to-sqlserver-acciai",
    title: "Integrazione Dati da BigQuery a SQL Server per ACCIAI",
    description:
      "Ottimizzazione del processo ETL per trasferire dati giornalieri di vasta portata da Google BigQuery a SQL Server, migliorando efficienza e affidabilità.",
    icon: Database,
    image:
      "https://plus.unsplash.com/premium_photo-1677612031010-5424f4ea90ff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["ETL", "BigQuery", "SQL Server", "Data Integration"],
    challenge: `
    <p>ACCIAI affrontava sfide significative nella gestione dei dati:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Estrazione, trasformazione e caricamento di oltre 200 milioni di righe giornaliere.</li>
      <li>Necessità di completare il processo entro una finestra temporale di 6 ore.</li>
      <li>Scalabilità del sistema per gestire picchi di dati senza impattare le prestazioni.</li>
    </ul>
  `,
    solution: `
    <p>La soluzione implementata ha incluso:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Parallelizzazione del trasferimento dei dati per ottimizzare la velocità di download.</li>
      <li>Controllo accurato dei processi di estrazione, trasferimento e caricamento.</li>
      <li>Implementazione di query di checksum per assicurare la correttezza dei dati trasferiti.</li>
      <li>Monitoraggio continuo delle prestazioni e gestione proattiva degli errori.</li>
    </ul>
  `,
    results: `
    <p>I risultati conseguiti hanno portato a miglioramenti sostanziali:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Elaborazione e caricamento di 200 milioni di righe completati in soli 2 ore.</li>
      <li>Aumento dell'affidabilità dei dati, con controlli automatici per dati mancanti o duplicati.</li>
      <li>Scalabilità del sistema assicurata, pronta a gestire volumi maggiori senza problemi.</li>
    </ul>
  `,
    technologies: [
      {
        name: "Google BigQuery",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Google_BigQuery_Logo.svg",
      },
      {
        name: "Microsoft SQL Server",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Microsoft_SQL_Server_logo.svg",
      },
    ],
    demoUrl: "https://demo-bigquery-sqlserver-acciai.gruppo4d.com",
  },
  {
    id: "dwh-powerbi-sync-errea",
    title: "Sincronizzazione DWH e PowerBI da NAV a BC per ERREA’",
    description:
      "Migrazione e sincronizzazione dei dati tra Microsoft Dynamics NAV e Business Central per garantire la continuità delle operazioni di Business Intelligence.",
    icon: FolderSync,
    image:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["DWH", "PowerBI", "Data Migration", "Business Central", "NAV"],
    challenge: `
    <p>ERREA' doveva affrontare diverse difficoltà nella migrazione dei dati:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Differenze nelle strutture dati tra Microsoft Dynamics NAV e Business Central.</li>
      <li>Rischio di perdita di informazioni o incongruenze nei dati storici durante la migrazione.</li>
      <li>Necessità di mantenere la continuità nei dati per analisi di vendite, supply chain e performance finanziarie.</li>
    </ul>
  `,
    solution: `
    <p>Abbiamo sviluppato un sistema di sincronizzazione avanzato che include:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Mappatura e normalizzazione delle differenze tra i dati di NAV e BC.</li>
      <li>Modifica della modellazione dei dati per integrare sia i dati storici di NAV che quelli nuovi di BC.</li>
      <li>Automazione delle trasformazioni SQL per uniformare le metriche tra i due ERP.</li>
      <li>Creazione di un motore di trasformazione dati (ETL) adattato al nuovo schema di BC.</li>
    </ul>
  `,
    results: `
    <p>La sincronizzazione ha portato a risultati importanti:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Completa migrazione dei dati senza perdite, garantendo l'allineamento perfetto tra NAV e BC.</li>
      <li>Continuità operativa per la BI senza interruzioni nell'accesso ai dati.</li>
      <li>Riduzione del 50% dei tempi di aggiornamento dei dati, con una pipeline ottimizzata.</li>
      <li>Miglioramento della qualità e affidabilità delle analisi, con un DWH aggiornato e scalabile.</li>
    </ul>
  `,
    technologies: [
      {
        name: "Microsoft Dynamics NAV",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Microsoft_Dynamics_NAV_logo.svg",
      },
      {
        name: "Microsoft Dynamics 365 Business Central",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Microsoft_Dynamics_365_logo.svg",
      },
    ],
    demoUrl: "https://demo-dwh-powerbi-sync-errea.gruppo4d.com",
  },
  {
    id: "economic-analysis-gi-tessil",
    title: "Analisi Economica Dettagliata per Prodotto per GI.TESSIL",
    description:
      "Implementazione di un sistema avanzato per l'analisi economica dettagliata per prodotto, trasformando i dati aggregati in conti economici precisi per ogni singolo articolo.",
    icon: DollarSign,
    image:
      "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Data Analysis", "Cost Accounting", "Power BI", "NAV"],
    challenge: `
    <p>GI.TESSIL si trovava di fronte a diverse sfide analitiche:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Necessità di disaggregare i dati contabili e di produzione a livello di singolo prodotto.</li>
      <li>Difficoltà nel calcolare la redditività effettiva dei prodotti a causa della mancanza di attribuzione diretta dei costi di produzione, logistica e distribuzione.</li>
      <li>Limitazioni nel prevedere le vendite e confrontare i risultati con le previsioni per ottimizzare la produzione.</li>
      <li>Esigenza di un modello robusto per la distribuzione dei costi fissi e variabili su prodotti specifici.</li>
    </ul>
  `,
    solution: `
    <p>Per affrontare queste sfide, abbiamo implementato una soluzione che include:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Definizione di driver di ribaltamento dei costi per attribuire con precisione i costi fissi e variabili a ciascun prodotto.</li>
      <li>Normalizzazione dei dati estratti da NAV per integrarli con una nuova struttura di analisi economica.</li>
      <li>Implementazione di misure DAX avanzate per calcolare margini, costi diretti e indiretti, e profittabilità per singolo articolo.</li>
      <li>Sviluppo di dashboard interattive e tabelle dinamiche per il monitoraggio dei KPI e l'analisi economica dettagliata.</li>
    </ul>
  `,
    results: `
    <p>Il sistema ha portato a risultati significativi per GI.TESSIL:</p>
    <ul style="list-style-type: disc; padding-left: 20px;">
      <li>Analisi dettagliata della marginalità per prodotto, migliorando la precisione nelle decisioni sui prezzi e sulle strategie produttive.</li>
      <li>Maggiore efficienza nella gestione dei costi, con una visione più chiara dei costi fissi e variabili.</li>
      <li>Miglioramento del 20% nell'accuratezza delle previsioni di vendita, consentendo una gestione più efficace delle scorte e della produzione.</li>
      <li>Riduzione dell'80% dei tempi di elaborazione dei report per il controllo di gestione, grazie all'automazione del flusso dati tra NAV e Power BI.</li>
    </ul>
  `,
    technologies: [
      {
        name: "Microsoft Dynamics NAV",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Microsoft_Dynamics_NAV_logo.svg",
      },
      {
        name: "Microsoft Power BI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Microsoft_Power_BI_Logo.svg",
      },
    ],
    demoUrl: "https://demo-economic-analysis-gi-tessil.gruppo4d.com",
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
