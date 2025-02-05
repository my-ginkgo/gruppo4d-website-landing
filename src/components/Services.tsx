import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, LineChart, Server, Briefcase, Users, Rocket, Activity } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 dark:bg-primary/5 rounded-full" />
        <Icon className="w-12 h-12 text-primary dark:text-primary-light mb-4 relative z-10" />
      </div>
      <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      category: "DEVELOPMENT",
      items: [
        {
          icon: Code,
          title: "Web & Mobile Development",
          description: "Progettiamo applicazioni web e mobile intuitive e performanti, dal concept alla messa in produzione."
        },
        {
          icon: Database,
          title: "API & Backend Development",
          description: "Creiamo infrastrutture scalabili e API efficienti per connettere le tue piattaforme."
        },
        {
          icon: Cloud,
          title: "DevOps & Cloud Solutions",
          description: "Automatizziamo i processi di sviluppo con pipeline CI/CD e gestiamo infrastrutture cloud."
        }
      ]
    },
    {
      category: "CONSULTANCY",
      items: [
        {
          icon: LineChart,
          title: "Business Intelligence & Data Analytics",
          description: "Ti aiutiamo a trasformare i dati in strumenti decisionali strategici."
        },
        {
          icon: Server,
          title: "Cloud Strategy & Integration",
          description: "Offriamo consulenza per ottimizzare le tue infrastrutture e integrare sistemi cloud."
        },
        {
          icon: Briefcase,
          title: "Strategic IT Advisory",
          description: "Ti guidiamo nella trasformazione digitale con soluzioni innovative."
        }
      ]
    },
    {
      category: "PROJECT MANAGEMENT",
      items: [
        {
          icon: Users,
          title: "Team Management & Coordination",
          description: "Coordiniamo team multidisciplinari per garantire efficienza operativa."
        },
        {
          icon: Rocket,
          title: "Delivery & Deployment",
          description: "Supervisioniamo il ciclo di vita del progetto per risultati di successo."
        },
        {
          icon: Activity,
          title: "Quality Assurance & Monitoring",
          description: "Monitoriamo ogni fase del progetto per garantire la qualità delle soluzioni."
        }
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden" id="services">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gray-50/95 dark:bg-gray-900/95 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4 text-center dark:text-white"
        >
          I Nostri Servizi
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16"
        >
          Competenza, innovazione e supporto per ogni esigenza tecnologica.
        </motion.p>
        
        {services.map((category, categoryIndex) => (
          <div key={category.category} className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center text-primary dark:text-primary-light">
              {category.category}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {category.items.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={0.2 * (categoryIndex * 3 + index)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;