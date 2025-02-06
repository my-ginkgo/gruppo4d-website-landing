import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Rocket, Target, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";

const StatCard = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative overflow-hidden group">
    <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 dark:bg-primary-light/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
    <Icon className="w-10 h-10 text-primary dark:text-primary-light mb-4 relative z-10" />
    <h3 className="text-3xl font-bold mb-2 dark:text-white relative z-10">{value}</h3>
    <p className="text-gray-600 dark:text-gray-300 relative z-10">{label}</p>
  </motion.div>
);

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const stats = [
    { icon: Users, value: "40+", label: "Clienti Soddisfatti", delay: 0.2 },
    { icon: Rocket, value: "60+", label: "Progetti Completati", delay: 0.4 },
    { icon: Target, value: "95%", label: "Tasso di Fidelizzazione", delay: 0.6 },
    { icon: Building2, value: "1", label: "Sedi Operative", delay: 0.8 },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden" id="about">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-64 -top-64 w-96 h-96 bg-primary/5 dark:bg-primary-light/5 rounded-full blur-3xl" />
        <div className="absolute -right-64 -bottom-64 w-96 h-96 bg-primary/5 dark:bg-primary-light/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block p-3 bg-primary/10 dark:bg-primary-light/10 rounded-full mb-4">
              <Building2 className="w-8 h-8 text-primary dark:text-primary-light" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4 dark:text-white uppercase brand">Chi Siamo</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-12">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Operiamo nel settore dell'innovazione e della trasformazione digitale, posizionandoci come{" "}
              <strong>DIGITAL INNOVATION PARTNER</strong> per i nostri clienti.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Fondata a <strong>Reggio Emilia</strong> nel <b>2023</b>, Gruppo4D si distingue per la capacità di
              trasformare i dati in valore, supportando decisioni strategiche e favorendo una crescita sostenibile.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
