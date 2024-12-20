import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import SuperheroAvatar from './SuperheroAvatar.tsx';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-70"></div>
      <div className="absolute inset-0 bg-hero-grid bg-[size:30px_30px] opacity-40"></div>
      
      {/* Animated Background Lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-hero-blue-500/20 to-transparent"
          style={{ top: `${20 * i}%` }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-48 h-48 bg-hero-blue-500/20 rounded-full blur-[100px]"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 bg-hero-accent-purple/20 rounded-full blur-[120px]"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="text-center md:text-left md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-hero-blue-500 to-hero-accent-purple text-transparent bg-clip-text"
              >
                SALAH-EDDINE ELHEROUAL
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-300 mb-8"
              >
                Ingénieur d'État en Informatique & Expert en Télécommunications
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center items-center space-x-6 text-gray-300"
              >
                <a
                  href="mailto:elheroual@gmail.com"
                  className="flex items-center text-hero-blue-200 hover:text-hero-accent-purple transition-colors"
                >
                  <EnvelopeIcon className="w-6 h-6 mr-2" />
                  elheroual@gmail.com
                </a>
                <span className="flex items-center">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  0697342443
                </span>
                <span className="flex items-center">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  TAROUDANT, MOROCCO
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Superhero Avatar */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <SuperheroAvatar />
          </motion.div>
        </div>

        {/* Enhanced Tech Stack Badges */}
        <motion.div
          className="mt-20 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind'].map((tech, index) => (
            <motion.div
              key={tech}
              className="hero-skill-badge group"
              whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.8 + index * 0.1,
                rotate: { duration: 0.2, repeat: 3 }
              }}
            >
              <span className="text-hero-blue-400 font-cyber group-hover:text-hero-accent-purple transition-colors">
                #
              </span>
              {tech}
              <motion.div
                className="absolute inset-0 rounded-lg bg-hero-blue-500/10"
                animate={{
                  opacity: [0, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
