import React from 'react';
import { motion } from 'framer-motion';
import {
  CommandLineIcon,
  CpuChipIcon,
  CloudIcon,
  CodeBracketIcon,
  ServerIcon,
  CubeIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';

interface Technology {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  category: string;
  proficiency: number;
}

const technologies: Technology[] = [
  {
    name: 'React',
    icon: <CodeBracketIcon className="w-8 h-8" />,
    description: 'Building dynamic user interfaces with modern React and hooks',
    color: 'hero-blue-400',
    category: 'Frontend',
    proficiency: 95,
  },
  {
    name: 'Node.js',
    icon: <ServerIcon className="w-8 h-8" />,
    description: 'Server-side JavaScript for scalable applications',
    color: 'hero-green-400',
    category: 'Backend',
    proficiency: 90,
  },
  {
    name: 'TypeScript',
    icon: <CubeIcon className="w-8 h-8" />,
    description: 'Type-safe development for robust applications',
    color: 'hero-accent-purple',
    category: 'Languages',
    proficiency: 92,
  },
  {
    name: 'AWS',
    icon: <CloudIcon className="w-8 h-8" />,
    description: 'Cloud infrastructure and serverless architecture',
    color: 'hero-orange-400',
    category: 'Cloud',
    proficiency: 88,
  },
  {
    name: 'Next.js',
    icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
    description: 'Full-stack React framework for production',
    color: 'hero-blue-500',
    category: 'Frontend',
    proficiency: 94,
  },
  {
    name: 'MongoDB',
    icon: <CircleStackIcon className="w-8 h-8" />,
    description: 'NoSQL database for flexible data storage',
    color: 'hero-green-500',
    category: 'Database',
    proficiency: 89,
  },
  {
    name: 'Docker',
    icon: <CpuChipIcon className="w-8 h-8" />,
    description: 'Containerization for consistent deployments',
    color: 'hero-blue-300',
    category: 'DevOps',
    proficiency: 87,
  },
  {
    name: 'Python',
    icon: <CommandLineIcon className="w-8 h-8" />,
    description: 'Versatile language for backend and AI',
    color: 'hero-yellow-400',
    category: 'Languages',
    proficiency: 91,
  },
];

const TechnologiesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-40"></div>
      <div className="absolute inset-0 bg-hero-grid bg-[size:30px_30px] opacity-20"></div>

      {/* Animated Background Lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-hero-blue-500/30 to-transparent"
          style={{ top: `${30 * i}%` }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-left max-w-2xl mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text-gradient">Tech Arsenal</span>
          </h2>
          <p className="text-xl text-hero-blue-200">
            Equipped with cutting-edge technologies and tools to build extraordinary digital experiences
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-hero-blue-500/20 to-hero-accent-purple/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="hero-border relative">
                <div className="hero-border-content">
                  {/* Tech Icon */}
                  <div className="mb-4">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-${tech.color}/10 flex items-center justify-center
                                border border-${tech.color}/30`}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -10, 10, 0],
                      }}
                    >
                      <span className={`text-${tech.color}`}>{tech.icon}</span>
                    </motion.div>
                  </div>

                  {/* Tech Info */}
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    {tech.name}
                    <span className={`text-${tech.color} text-sm font-cyber`}>
                      {tech.category}
                    </span>
                  </h3>
                  
                  <p className="text-hero-blue-200 text-sm mb-4">
                    {tech.description}
                  </p>

                  {/* Proficiency Bar */}
                  <div className="relative">
                    <div className="hero-progress-bar">
                      <motion.div
                        className="hero-progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <motion.span
                      className={`absolute -top-6 text-${tech.color} text-sm font-cyber`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {tech.proficiency}%
                    </motion.span>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{
                      background: [
                        `radial-gradient(circle at center, ${tech.color}10 0%, transparent 0%)`,
                        `radial-gradient(circle at center, ${tech.color}10 100%, transparent 100%)`,
                      ],
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Decorative Elements */}
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-hero-accent-purple/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default TechnologiesSection;
