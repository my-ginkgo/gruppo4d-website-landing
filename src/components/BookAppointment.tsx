import { motion } from "framer-motion";
import { Calendar, Code, Cpu, Terminal } from "lucide-react";
import { useInView } from "react-intersection-observer";

const BookAppointment = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openCalendly = () => {
    // Replace this URL with your actual Cal.com or Calendly URL
    const bookingUrl = "https://outlook.office365.com/book/AppuntamentoInformativo@gruppo4d.com/";
    window.open(bookingUrl, "_blank");
  };

  return (
    <section ref={ref} className="py-12 bg-gray-50 dark:bg-gray-900 relative overflow-hidden" id="book-appointment">
      {/* Tech Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 via-transparent to-gray-50/90 dark:from-gray-900/90 dark:to-gray-900/90" />
      </div>

      {/* Floating Tech Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.1 } : {}}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden">
        <Terminal className="absolute top-10 left-[10%] w-12 h-12 text-primary/20 dark:text-primary-light/20" />
        <Code className="absolute bottom-10 right-[15%] w-16 h-16 text-primary/20 dark:text-primary-light/20" />
        <Cpu className="absolute top-1/2 right-[10%] w-10 h-10 text-primary/20 dark:text-primary-light/20" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 rounded-full bg-primary dark:bg-primary-light animate-pulse" />
                <h2 className="text-2xl font-bold dark:text-white uppercase brand">Prenota una Consulenza</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Trasforma la tua idea in realtà con i nostri esperti</p>
            </div>

            <motion.button
              onClick={openCalendly}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative group px-6 py-3 bg-primary hover:bg-primary-light dark:bg-primary-light dark:hover:bg-primary text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:animate-[shine_1s_ease-in-out]" />
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Prenota Ora</span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookAppointment;
