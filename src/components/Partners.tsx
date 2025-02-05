import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    {
      name: "Addiction",
      logo: "https://www.addiction.it/wp-content/themes/addiction-theme/assets/images/logo-text.png",
    },
    {
      name: "O2Up",
      logo: "https://o2up.it/wp-content/uploads/2024/08/logo-o2up.png",
    },
    {
      name: "DataSmart Italia",
      logo: "https://www.datasmartitalia.it/wp-content/uploads/logo-datasmartitalia.svg",
    },
    {
      name: "Gammastudio",
      logo: "https://www.gammastudiosrl.com/themes/default/assets/img/main-logo.svg",
    },
    {
      name: "AD Consulting",
      logo: "https://adcgroup.com/wp-content/uploads/2022/05/cropped-ADconsulting_logo_white-256.png",
    },
    {
      name: "BIOS",
      logo: "https://www.biosmanagement.com/templates/img/logo_biosmanagement.png",
    },
    {
      name: "Kaiti Expansion",
      logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/jrznjox96bupafoemj5r",
    },
    {
      name: "Retex",
      logo: "https://webmagazine.unitn.it/fileswebmagazine/styles/immagine_testata_evento_normal_new_270x270/public/images/nodi/retexlogo.jpg?itok=HSBUpStZ",
    },
    {
      name: "Re2n",
      logo: "https://www.re2n.com/landing/re2n_logo/re2n_logo.png",
    },
    {
      name: "Reggiana Calcio",
      logo: "https://reggianacalcio.it/wp-content/uploads/2024/08/Logo-600x600-1.png",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900" id="partners">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-16 text-center dark:text-white">I Nostri Partner</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-primary/5 dark:bg-primary-light/5 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="w-full h-32 flex items-center justify-center mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">
                    {partner.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;