import { motion } from "framer-motion";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { caseStudies } from "../data/caseStudies";

const CaseStudyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    navigate("/case-studies");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <main className="pt-20">
        {/* Navigation Bar */}
        <div className="sticky top-20 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <Link
                  to="/case-studies"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-primary/10 dark:hover:bg-primary-light/10 transition-all duration-300 group">
                  <ChevronLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                  Case Studies
                </Link>
              </div>
              {study.demoUrl && (
                <a
                  href={study.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 bg-primary hover:bg-primary-light dark:bg-primary-light dark:hover:bg-primary text-white rounded-full transition-colors duration-300 group">
                  <span className="mr-2">Demo</span>
                  <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <div className="absolute inset-0">
            <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30" />
          </div>

          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm mb-6">
                <study.icon className="w-8 h-8 text-primary-light" />
              </span>
              <h1 className="text-5xl font-bold text-white mb-4">{study.title}</h1>
              <p className="text-xl text-gray-300 max-w-2xl mb-6">{study.description}</p>
              <div className="flex flex-wrap gap-3">
                {study.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 text-sm bg-white/10 backdrop-blur-sm rounded-full text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16">
                <h2 className="text-3xl font-bold mb-6 dark:text-white">La Sfida</h2>
                <div
                  className="prose dark:prose-invert max-w-none dark:text-white"
                  dangerouslySetInnerHTML={{ __html: study.challenge }}
                />
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16">
                <h2 className="text-3xl font-bold mb-6 dark:text-white">La Soluzione</h2>
                <div
                  className="prose dark:prose-invert max-w-none dark:text-white"
                  dangerouslySetInnerHTML={{ __html: study.solution }}
                />
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16">
                <h2 className="text-3xl font-bold mb-6 dark:text-white">I Risultati</h2>
                <div
                  className="prose dark:prose-invert max-w-none dark:text-white"
                  dangerouslySetInnerHTML={{ __html: study.results }}
                />
              </motion.div>

              {/* Technologies */}
              {study.technologies && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-16">
                  <h2 className="text-3xl font-bold mb-6 dark:text-white">Tecnologie Utilizzate</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {study.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <img src={tech.logo} alt={tech.name} className="w-8 h-8 object-contain mr-3" />
                        <span className="font-medium dark:text-white">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Demo Link */}
              {study.demoUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center">
                  <a
                    href={study.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-light dark:bg-primary-light dark:hover:bg-primary text-white rounded-full transition-colors duration-300 group">
                    <span className="mr-2">Visita il progetto</span>
                    <ExternalLink className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetailPage;
