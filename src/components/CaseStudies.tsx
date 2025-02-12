import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Take only the first 3 case studies for the landing page
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
      id="case-studies">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5 dark:from-primary/2 dark:to-primary-light/2" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 dark:bg-primary-light/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light/10 dark:bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          {/* <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl mb-6">
            <Briefcase className="w-12 h-12 text-primary dark:text-primary-light" />
          </motion.div> */}
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light dark:from-primary-light dark:to-primary uppercase brand">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Esplora i progetti che hanno trasformato le sfide dei nostri clienti in successi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredCaseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-500">
              <Link to={`/case-studies/${study.id}`}>
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 dark:bg-primary-light/20 mb-4">
                    <study.icon className="w-6 h-6 text-primary dark:text-primary-light" />
                  </span>
                  <h3 className="text-2xl font-bold mb-2 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{study.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-light dark:bg-primary-light dark:hover:bg-primary text-white rounded-full transition-colors duration-300 group">
            <span className="mr-2">Vedi tutti i case studies</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CaseStudies;
