import { motion } from 'framer-motion';
import { Globe, Linkedin, Mail, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ContactForm from './ContactForm';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden" id="contact">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gray-50/90 dark:bg-gray-900/90 z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-center dark:text-white">KEEP IN TOUCH</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16">
            Siamo qui per trasformare le tue idee in realtà
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 dark:text-white">Le nostre sedi</h3>
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-primary dark:text-primary-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white">Sede legale</h4>
                      <p className="text-gray-600 dark:text-gray-300">Via Brigata Reggio 32, 42124 Reggio Emilia</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-primary dark:text-primary-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white">Sede operativa</h4>
                      <p className="text-gray-600 dark:text-gray-300">Via Salvatore Viganò 2, 42124 Reggio Emilia</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 dark:text-white">Contatti digitali</h3>
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center space-x-4"
                  >
                    <Globe className="w-6 h-6 text-primary dark:text-primary-light" />
                    <a href="https://www.gruppo4d.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                      www.gruppo4d.com
                    </a>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center space-x-4"
                  >
                    <Mail className="w-6 h-6 text-primary dark:text-primary-light" />
                    <a href="mailto:info@gruppo4d.com" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                      info@gruppo4d.com
                    </a>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex items-center space-x-4"
                  >
                    <Linkedin className="w-6 h-6 text-primary dark:text-primary-light" />
                    <a href="https://www.linkedin.com/company/4dsrl" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                      LinkedIn
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary dark:focus:ring-primary-light focus:border-primary dark:focus:border-primary-light dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary dark:focus:ring-primary-light focus:border-primary dark:focus:border-primary-light dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary dark:focus:ring-primary-light focus:border-primary dark:focus:border-primary-light dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-light dark:bg-primary-light dark:hover:bg-primary text-white px-8 py-3 rounded-md transition-colors duration-300"
              >
                Invia Messaggio
              </button>
            </motion.form> */}

            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;