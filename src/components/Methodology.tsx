import { motion } from 'framer-motion';
import { Code, Cpu, Database, GitBranch } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const MethodologyStep = ({ icon: Icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 dark:bg-primary-light/20 rounded-full blur-xl" />
            <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-primary-light dark:from-primary-light dark:to-primary rounded-full flex items-center justify-center">
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
      {index < 3 && (
        <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent dark:from-primary-light" />
      )}
    </motion.div>
  );
};

const Methodology = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: Code,
      title: "Analisi e Progettazione",
      description: "Studio approfondito delle esigenze e definizione di soluzioni tecnologiche innovative e personalizzate."
    },
    {
      icon: Database,
      title: "Sviluppo Iterativo",
      description: "Implementazione agile con cicli di sviluppo rapidi e feedback continuo per massimizzare l'efficacia."
    },
    {
      icon: Cpu,
      title: "Integrazione e Test",
      description: "Verifica rigorosa delle funzionalità e ottimizzazione delle performance in ambiente reale."
    },
    {
      icon: GitBranch,
      title: "Deployment e Monitoraggio",
      description: "Rilascio controllato e monitoraggio continuo per garantire stabilità e performance ottimali."
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900" id="methodology">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block p-3 bg-primary/10 dark:bg-primary-light/10 rounded-full mb-4"
            >
              <GitBranch className="w-8 h-8 text-primary dark:text-primary-light" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4 dark:text-white">La Nostra Metodologia</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
Accompagniamo le aziende, dall’analisi dei bisogni al miglioramento continuo.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <MethodologyStep key={index} {...step} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;