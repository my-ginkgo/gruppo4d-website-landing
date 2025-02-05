import { motion } from 'framer-motion';
import { Eye, Globe } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Vision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden" id="vision">
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 0.1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="absolute -left-48 top-0 w-96 h-full"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to right, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, black, transparent)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block p-3 bg-primary/10 dark:bg-primary-light/10 rounded-full mb-4"
            >
              <Eye className="w-8 h-8 text-primary dark:text-primary-light" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4 dark:text-white">La Nostra Vision</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
Immaginiamo un mondo in cui tecnologia e dati siano il motore del progresso aziendale.
            </p>
          </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="col-span-2 bg-gradient-to-br from-primary/5 to-primary-light/5 dark:from-primary/10 dark:to-primary-light/10 p-8 rounded-2xl"
            >
              <blockquote className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/10 dark:bg-primary-light/10 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary dark:text-primary-light" />
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-200 italic pl-10 mb-6">
                  "La tecnologia e i dati stanno ridefinendo il modo in cui facciamo business. Le aziende che abbracciano questa trasformazione sono destinate a guidare il mercato del futuro."
                </p>
                <footer className="text-right">
                  <cite className="block text-primary dark:text-primary-light font-medium not-italic">
                    Ginni Rometty, CEO di IBM
                  </cite>
                </footer>
              </blockquote>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <LineChart className="w-8 h-8 text-primary dark:text-primary-light mb-4" />
                <h3 className="text-lg font-bold mb-2 dark:text-white">Crescita Sostenibile</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Promuoviamo uno sviluppo tecnologico che rispetta l'ambiente e le persone.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <Network className="w-8 h-8 text-primary dark:text-primary-light mb-4" />
                <h3 className="text-lg font-bold mb-2 dark:text-white">Innovazione Connessa</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creiamo ecosistemi digitali che connettono persone, processi e tecnologie.
                </p>
              </div>
            </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;