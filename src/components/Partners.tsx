import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../hooks/useTheme";

const Partners = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { isDark } = useTheme();

  const partners = [
    {
      name: "Addiction",
      logoLight:
        "https://media.licdn.com/dms/image/v2/C4E0BAQF8r1NS0IfqZw/company-logo_200_200/company-logo_200_200/0/1631380690301/addiction_cml_logo?e=1746662400&v=beta&t=QNY8qAulnWJCCXY5wiJpJ5DqcvGdEmELXQ0shExRklE",
      logoDark: "https://www.addiction.it/wp-content/themes/addiction-theme/assets/images/logo-text.png",
      url: "https://www.addiction.it",
    },
    {
      name: "O2Up",
      logoLight: "https://o2up.it/wp-content/uploads/2024/08/logo-o2up.png",
      logoDark: "https://o2up.it/wp-content/uploads/2024/08/logo-o2up.png",
      url: "https://o2up.it",
    },
    {
      name: "DataSmart Italia",
      logoLight: "https://www.datasmartitalia.it/wp-content/uploads/2019/10/logo-esteso-color.svg",
      logoDark: "https://www.datasmartitalia.it/wp-content/uploads/2019/09/light-grif.svg",
      url: "https://www.datasmartitalia.it",
    },
    {
      name: "Gammastudio",
      logoLight: "https://www.gammastudiosrl.com/themes/default/assets/img/main-logo.svg",
      logoDark: "https://www.gammastudiosrl.com/themes/default/assets/img/main-logo-white.svg",
      url: "https://www.gammastudiosrl.com",
    },
    {
      name: "AD Consulting",
      logoLight: "https://adcgroup.com/wp-content/uploads/2022/05/cropped-ADconsulting_logo_white-256.png",
      logoDark: "https://adcgroup.com/wp-content/uploads/2022/05/cropped-ADconsulting_logo_white-256.png",
      url: "https://adcgroup.com",
    },
    {
      name: "BIOS",
      logoLight: "https://www.biosmanagement.com/templates/img/logo_biosmanagement.png",
      logoDark:
        "https://media.licdn.com/dms/image/v2/C4E0BAQEaFT1dTDvX1Q/company-logo_200_200/company-logo_200_200/0/1630652011253/biosmanagement_logo?e=1746662400&v=beta&t=KZUr961zRyTNkYuK0Wvh2ZGYybTVVoz3GDRIbwBpuUc",
      url: "https://www.biosmanagement.com",
    },
    {
      name: "Kaiti Expansion",
      logoLight:
        "https://media.licdn.com/dms/image/v2/C560BAQFfJxhXGGirLA/company-logo_200_200/company-logo_200_200/0/1630617726711/kaiti_expansion_srl_logo?e=1746662400&v=beta&t=wplYp-AWy3POeS34q0fzpRZ_ND7t0E145vJ_LoMtqBk",
      logoDark:
        "https://media.licdn.com/dms/image/v2/C560BAQFfJxhXGGirLA/company-logo_200_200/company-logo_200_200/0/1630617726711/kaiti_expansion_srl_logo?e=1746662400&v=beta&t=wplYp-AWy3POeS34q0fzpRZ_ND7t0E145vJ_LoMtqBk",
      url: "https://www.kaitiexpansion.com",
    },
    {
      name: "Retex",
      logoLight:
        "https://webmagazine.unitn.it/fileswebmagazine/styles/immagine_testata_evento_normal_new_270x270/public/images/nodi/retexlogo.jpg?itok=HSBUpStZ",
      logoDark:
        "https://webmagazine.unitn.it/fileswebmagazine/styles/immagine_testata_evento_normal_new_270x270/public/images/nodi/retexlogo.jpg?itok=HSBUpStZ",
      url: "https://www.retexspa.com",
    },
    {
      name: "Re2n",
      logoLight: "https://www.re2n.com/landing/re2n_logo/re2n_logo.png",
      logoDark: "https://www.re2n.com/landing/re2n_logo/re2n_logo.png",
      url: "https://www.re2n.com",
    },
    {
      name: "Reggiana Calcio",
      logoLight: "https://reggianacalcio.it/wp-content/uploads/2024/08/Logo-600x600-1.png",
      logoDark: "https://reggianacalcio.it/wp-content/uploads/2024/08/Logo-600x600-1.png",
      url: "https://reggianacalcio.it",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900" id="partners">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}>
          <h2 className="text-4xl font-bold mb-16 text-center dark:text-white">I Nostri Partner</h2>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <motion.a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="relative w-full aspect-[3/2]">
                  <img
                    src={isDark ? partner.logoDark : partner.logoLight}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-95"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {/* Gradient overlay background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-light/90 dark:from-primary-light/90 dark:via-primary/80 dark:to-primary/90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                  {/* Text content */}
                  <div className="relative transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <p className="text-white font-medium text-center px-4 text-lg">{partner.name}</p>
                    <div className="mt-2 w-12 h-0.5 bg-white/50 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
