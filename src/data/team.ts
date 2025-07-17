export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

export const teamMembers: Record<string, TeamMember> = {
  stefanodenti: {
    id: "stefanodenti",
    name: "Stefano Denti",
    role: "Co-Founder & CTO",
    image: "/stefano.jpeg",
    bio: "Con una brillante carriera nel settore tecnologico, ha guidato il team di sviluppo in numerose trasformazioni di successo e ottimizzazioni di processi. La sua abilità tecnica e la grande passione sono un pilastro fondamentale per la crescita dell'azienda",
    expertise: ["Digital Strategy", "Business Development", "Cloud Architecture", "DevOps", "Software Engineering"],
    email: "stefano.denti@gruppo4d.com",
    phone: "+39 3662803495",
    linkedin: "https://www.linkedin.com/in/stefano-denti-8574bbbb/i",
    location: "Reggio Emilia, Italia",
  },
  alessandrodosi: {
    id: "alessandrodosi",
    name: "Alessandro Dosi",
    role: "Founder & CEO",
    image: "/alessandro.jpeg",
    bio: "Solution Architect con oltre 20 anni di esperienza nell’analisi dei dati e dei processi aziendali. Unisce competenze tecniche ad un approccio umano e collaborativo per costruire soluzioni innovative che generano risultati tangibili per i propri clienti.",
    expertise: [
      "Innovazione e Trasformazione Digitale",
      "Sviluppo di Partnership e Networking Strategico",
      "Data Analysis",
    ],
    email: "alessandro.dosi@gruppo4d.com",
    phone: "+39 348 3032164",
    linkedin: "https://www.linkedin.com/in/alessandro-dosi-39b3151/",
    location: "Reggio Emilia, Italia",
  },
  simonedenti: {
    id: "simonedenti",
    name: "Simone Denti",
    role: "Co-founder & COO",
    image: "/simone.jpeg",
    bio: "Possiede una vasta esperienza nel settore dell'analisi dei dati e nella consulenza gestionale. La sua attenzione ai dettagli e la capacità di identificare le esigenze dei clienti ci consentono di offrire soluzioni personalizzate di alta qualità.",
    expertise: [
      "Project Management",
      "Software Architecture",
      "Data Analysis",
      "Cloud Architecture",
      "Data Warehouse Consulting",
    ],
    email: "simone.denti@gruppo4d.com",
    phone: "+39 349 5356406",
    linkedin: "https://www.linkedin.com/in/simone-denti/",
    location: "Reggio Emilia, Italia",
  },
};
