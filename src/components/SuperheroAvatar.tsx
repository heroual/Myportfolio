import React from 'react';
import { motion } from 'framer-motion';

const SuperheroAvatar: React.FC = () => {
  return (
    <motion.div
      className="relative w-64 h-64 md:w-96 md:h-96"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Cape Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-hero-accent-purple to-hero-blue-500 rounded-full blur-2xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Power Aura */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-hero-blue-500/30 to-hero-accent-purple/30 rounded-full blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Energy Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border-2 border-hero-blue-400/30 rounded-full"
          initial={{ scale: 0.8 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Hero Symbol */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-hero-blue-400 to-hero-accent-purple 
                      mask-hexagon shadow-hero flex items-center justify-center transform -rotate-45">
          <span className="text-4xl md:text-5xl font-hero font-bold text-white transform rotate-45">S</span>
        </div>
      </motion.div>

      {/* Power Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-hero-blue-400 rounded-full"
          style={{
            left: '50%',
            top: '50%',
          }}
          animate={{
            x: [0, Math.cos(i * 30 * Math.PI / 180) * 100],
            y: [0, Math.sin(i * 30 * Math.PI / 180) * 100],
            opacity: [1, 0],
            scale: [1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeOut"
          }}
        />
      ))}
    </motion.div>
  );
};

export default SuperheroAvatar;
