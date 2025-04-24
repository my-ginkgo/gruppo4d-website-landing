import { Calendar, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Logo from "../components/Logo";
import ThemeToggle from "../components/ThemeToggle";

const teamMembers = {
  stefanodenti: {
    name: "Stefano Denti",
    role: "Co-Founder & CTO",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQE5t5naK_zRlw/profile-displayphoto-shrink_400_400/B4EZT_up2RHMAg-/0/1739457208177?e=1750896000&v=beta&t=WUmLCcE72pyiQbC1B-BxGeo6S2uwGSRkK2E5la5NrnQ",
    bio: "Con una brillante carriera nel settore tecnologico, ha guidato il team di sviluppo in numerose trasformazioni di successo e ottimizzazioni di processi. La sua abilità tecnica e la grande passione sono un pilastro fondamentale per la crescita dell'azienda",
    expertise: ["Digital Strategy", "Business Development", "Cloud Architecture", "DevOps", "Software Engineering"],
    email: "stefano.denti@gruppo4d.com",
    phone: "+39 3662803495",
    linkedin: "https://www.linkedin.com/in/stefano-denti-8574bbbb/i",
    location: "Reggio Emilia, Italia",
  },
  alessandrodosi: {
    name: "Alessandro Dosi",
    role: "Founder & CEO",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFV76cM9DH1pw/profile-displayphoto-shrink_800_800/B4DZT_yBcHHAAg-/0/1739458091288?e=1750896000&v=beta&t=v-y5PKOG7PBHfx9k3rvX7WOcwLp4uvava5jj3cTzD5Y",
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
    name: "Simone Denti",
    role: "Co-founder & COO",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQELPzd4M82kVw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663692972201?e=1750896000&v=beta&t=TBMJqurgQc23nry6azDA-gczZH2qbVFsT4fMSGDvw_4",
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

const ProfilePage = () => {
  const { id } = useParams();
  const member = teamMembers[id as keyof typeof teamMembers];

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-300">Profilo non trovato</p>
      </div>
    );
  }

  const openCalendly = () => {
    // Replace with actual booking URL
    const bookingUrl = "https://outlook.office365.com/book/AppuntamentoInformativo@gruppo4d.com/";
    window.open(bookingUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="h-12">
              <Logo className="h-full w-auto" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Profile Card */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/3">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 dark:from-primary/10 dark:to-primary-light/10" />
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2 dark:text-white">{member.name}</h1>
                <p className="text-primary dark:text-primary-light font-medium">{member.role}</p>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">{member.bio}</p>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3 dark:text-white">Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>{member.email}</span>
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>{member.phone}</span>
                </a>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>{member.location}</span>
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              <div className="mt-8">
                <button
                  onClick={openCalendly}
                  className="w-full md:w-auto px-6 py-3 bg-primary hover:bg-primary-light dark:bg-primary-light dark:hover:bg-primary text-white rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>Prenota un Appuntamento</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
