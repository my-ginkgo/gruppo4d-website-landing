import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, Linkedin, Calendar, MapPin, Phone } from 'lucide-react';
import Logo from '../components/Logo';
import ThemeToggle from '../components/ThemeToggle';

const teamMembers = {
  marco: {
    name: "Marco Rossi",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    bio: "Esperto di trasformazione digitale con oltre 15 anni di esperienza nel settore IT. Specializzato in strategia aziendale e innovazione tecnologica.",
    expertise: ["Digital Strategy", "Business Development", "Enterprise Architecture"],
    email: "marco.rossi@gruppo4d.com",
    phone: "+39 123 456 7890",
    linkedin: "https://linkedin.com/in/marco-rossi",
    location: "Reggio Emilia, Italia"
  },
  luca: {
    name: "Luca Bianchi",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
    bio: "Innovatore tecnologico con background in computer science. Appassionato di cloud computing e architetture software scalabili.",
    expertise: ["Cloud Architecture", "DevOps", "Software Engineering"],
    email: "luca.bianchi@gruppo4d.com",
    phone: "+39 123 456 7891",
    linkedin: "https://linkedin.com/in/luca-bianchi",
    location: "Reggio Emilia, Italia"
  },
  andrea: {
    name: "Andrea Verdi",
    role: "Head of Business Development",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    bio: "Esperto di sviluppo business con focus su soluzioni enterprise. Specializzato in analisi di mercato e gestione delle relazioni con i clienti.",
    expertise: ["Business Strategy", "Enterprise Sales", "Project Management"],
    email: "andrea.verdi@gruppo4d.com",
    phone: "+39 123 456 7892",
    linkedin: "https://linkedin.com/in/andrea-verdi",
    location: "Reggio Emilia, Italia"
  }
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
    const bookingUrl = 'https://cal.com/your-username';
    window.open(bookingUrl, '_blank');
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
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
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
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{member.email}</span>
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                >
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
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              <div className="mt-8">
                <button
                  onClick={openCalendly}
                  className="w-full md:w-auto px-6 py-3 bg-primary hover:bg-primary-light dark:bg-primary-light dark:hover:bg-primary text-white rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
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