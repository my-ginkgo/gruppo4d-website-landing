import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, LineChart } from 'lucide-react';
import { LogoWhite } from './Logo';

const Hero = () => {
  const floatingIcons = [
    { Icon: Code, delay: 0.2, x: -100, y: -50 },
    { Icon: Database, delay: 0.4, x: 100, y: 50 },
    { Icon: LineChart, delay: 0.6, x: -50, y: 100 },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-105 transform"
        style={{
          transform: 'translate3d(0, 0, 0)',
        }}
        src="/hero.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x, y }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            x: [x, 0, 0, x * -1],
            y: [y, 0, 0, y * -1],
          }}
          transition={{
            duration: 20,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute z-10"
          style={{
            left: `${50 + (index * 20)}%`,
            top: `${30 + (index * 15)}%`,
          }}
        >
          <Icon className="w-16 h-16 text-primary/30" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 h-full container mx-auto px-4">
        <div className="h-full flex items-center">
          <div className="w-full max-w-4xl">            
            <LogoWhite className=" mb-8 text-white" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="max-w-2xl"
            >
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Dove l'innovazione incontra il futuro del business digitale
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="group flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full transition-all duration-300"
                >
                  <span>Inizia il tuo progetto</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a
                  href="#services"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  Scopri i nostri servizi
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-0.5 h-16 bg-gradient-to-b from-white to-transparent" />
          <span className="text-white/60 text-sm mt-2">Scorri per esplorare</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;