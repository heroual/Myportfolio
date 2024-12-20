import React from 'react';
import { motion } from 'framer-motion';

interface SectionTransitionProps {
  children: React.ReactNode;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ children }) => {
  return (
    <div className="relative">
      {/* Energy Wave Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <svg
          className="w-full h-full absolute top-0 left-0"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,100 C320,150 420,0 740,100 C1060,200 1360,50 1440,100 V200 H0 Z"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: [0, 0.3, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              },
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 189, 255, 0.5)" />
              <stop offset="50%" stopColor="rgba(184, 41, 255, 0.5)" />
              <stop offset="100%" stopColor="rgba(0, 189, 255, 0.5)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Power Pulse Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-gradient-to-r from-hero-blue-500/5 to-hero-accent-purple/5 rounded-full"
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: {
                scale: [1, 1.2, 1],
                opacity: [0, 0.2, 0],
                transition: {
                  duration: 2,
                  delay: i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              },
            }}
          />
        ))}
      </motion.div>

      {/* Content with Hero Transition */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          },
        }}
      >
        {children}
      </motion.div>

      {/* Hero Power Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-hero-blue-500/20 to-transparent"
            style={{ top: `${20 * i}%` }}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionTransition;
