import { motion } from 'framer-motion';
import { Compass, Lightbulb, Rocket, Target } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const MissionPoint = ({ icon: Icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-light/10 dark:from-primary/5 dark:to-primary-light/5 rounded-xl blur-lg transition-all duration-300 group-hover:scale-110" />
      <div className="relative flex items-center space-x-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 dark:bg-primary-light/20 rounded-full blur-md" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary-light dark:from-primary-light dark:to-primary rounded-full flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Mission = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const points = [
    {
      icon: Rocket,
      title: "Innovazione Continua",
      description: "Sviluppiamo soluzioni all'avanguardia per anticipare le esigenze del mercato."
    },
    {
      icon: Lightbulb,
      title: "Trasformazione Digitale",
      description: "Guidiamo le aziende nel processo di evoluzione tecnologica e culturale."
    },
    {
      icon: Target,
      title: "Valore Strategico",
      description: "Trasformiamo i dati in insights strategici per decisioni informate."
    },
    {
      icon: Compass,
      title: "Supporto Costante",
      description: "Accompagniamo i clienti in ogni fase del loro percorso digitale."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden" id="mission">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 0.5, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent dark:from-primary-light/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 0.5, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent dark:from-primary-light/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block p-3 bg-primary/10 dark:bg-primary-light/10 rounded-full mb-4"
          >
            <Target className="w-8 h-8 text-primary dark:text-primary-light" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 dark:text-white">La Nostra Missione</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
Accompagniamo i nostri clienti nel percorso di trasformazione digitale, combinando innovazione e analisi dei dati per creare valore strategico. 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <MissionPoint key={index} {...point} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;