import { motion } from 'framer-motion';
import { Brain, Heart, Leaf, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const PhilosophyCard = ({ icon: Icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-light/20 dark:from-primary/10 dark:to-primary-light/10 rounded-2xl blur-xl transition-all duration-300 group-hover:scale-110" />
      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Icon className="w-24 h-24 text-primary dark:text-primary-light" />
        </div>
        <Icon className="w-12 h-12 text-primary dark:text-primary-light mb-4" />
        <h3 className="text-2xl font-bold mb-4 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 relative z-10">{description}</p>
      </div>
    </motion.div>
  );
};

const Philosophy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const philosophies = [
    {
      icon: Heart,
      title: "Etica",
      description: "Operiamo con trasparenza e integrità, costruendo relazioni basate sulla fiducia e il rispetto reciproco."
    },
    {
      icon: Brain,
      title: "Innovazione",
      description: "Abbracciamo il cambiamento e promuoviamo soluzioni creative per affrontare le sfide tecnologiche."
    },
    {
      icon: Users,
      title: "Collaborazione",
      description: "Crediamo nel potere del lavoro di squadra e nella condivisione delle conoscenze."
    },
    {
      icon: Leaf,
      title: "Sostenibilità",
      description: "Sviluppiamo soluzioni che promuovono l'efficienza e la crescita sostenibile delle imprese."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden" id="philosophy">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-64 -top-64 w-96 h-96 bg-primary/5 dark:bg-primary-light/5 rounded-full blur-3xl" />
        <div className="absolute -right-64 -bottom-64 w-96 h-96 bg-primary/5 dark:bg-primary-light/5 rounded-full blur-3xl" />
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
            <Heart className="w-8 h-8 text-primary dark:text-primary-light" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 dark:text-white">La Nostra Filosofia</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I principi che guidano ogni nostra azione e decisione
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {philosophies.map((philosophy, index) => (
            <PhilosophyCard key={index} {...philosophy} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;