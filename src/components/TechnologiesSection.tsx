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
  return (
    <section className="py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Technologies & Skills
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-hero-dark-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-hero-dark-700/50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className={`text-${tech.color} flex-shrink-0`}>
                  {tech.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-300 mb-3">{tech.description}</p>
                  <div className="w-full bg-hero-dark-900 rounded-full h-2">
                    <motion.div
                      className={`bg-${tech.color} h-2 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechnologiesSection;
