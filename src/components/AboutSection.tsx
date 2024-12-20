import React from 'react';
import { motion } from 'framer-motion';
import {
  BeakerIcon,
  CodeBracketIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  CommandLineIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

interface Achievement {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    year: '2024',
    title: 'Full-Stack Development Mastery',
    description: 'Architected and deployed scalable web applications using cutting-edge technologies.',
    icon: <CodeBracketIcon className="w-6 h-6" />,
  },
  {
    year: '2023',
    title: 'AI Integration Specialist',
    description: 'Implemented advanced AI solutions in production environments.',
    icon: <CpuChipIcon className="w-6 h-6" />,
  },
  {
    year: '2022',
    title: 'Cloud Architecture Excellence',
    description: 'Designed robust cloud infrastructure for enterprise applications.',
    icon: <CommandLineIcon className="w-6 h-6" />,
  },
];

const skills = [
  {
    category: 'Frontend Development',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    icon: <CodeBracketIcon className="w-6 h-6" />,
    color: 'hero-blue-400',
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    icon: <BeakerIcon className="w-6 h-6" />,
    color: 'hero-accent-purple',
  },
  {
    category: 'DevOps & Cloud',
    items: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    color: 'hero-green-400',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-50"></div>
      <div className="absolute inset-0 bg-hero-grid bg-[size:30px_30px] opacity-20"></div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-40 right-20 w-72 h-72 bg-hero-accent-purple/10 rounded-full blur-3xl"
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

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="hero-text-gradient">Origin Story</span>
          </h2>
          <p className="text-xl text-hero-blue-200 max-w-3xl mx-auto">
            A passionate developer on a mission to transform ideas into extraordinary digital experiences.
            Combining technical expertise with creative problem-solving to build the future of web technology.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-border">
              <div className="hero-border-content">
                <h3 className="text-2xl font-bold mb-8 text-hero-blue-400">
                  Journey Milestones
                </h3>
                <div className="space-y-8">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.year}
                      className="relative pl-8 border-l-2 border-hero-blue-500/30"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-hero-dark-lighter rounded-full border-2 border-hero-blue-500 flex items-center justify-center">
                        <motion.div
                          className="w-2 h-2 bg-hero-blue-500 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-hero-accent-purple font-cyber">{achievement.year}</span>
                        <span className="text-hero-blue-400">{achievement.icon}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                      <p className="text-hero-blue-200">{achievement.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="hero-border">
              <div className="hero-border-content">
                <h3 className="text-2xl font-bold mb-8 text-hero-blue-400">
                  Power Stack
                </h3>
                <div className="space-y-8">
                  {skills.map((skillGroup, groupIndex) => (
                    <motion.div
                      key={skillGroup.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + groupIndex * 0.1 }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-${skillGroup.color}`}>{skillGroup.icon}</span>
                        <h4 className="text-xl font-bold text-white">{skillGroup.category}</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            className="hero-skill-badge"
                            whileHover={{
                              scale: 1.05,
                              transition: { duration: 0.2 }
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 + groupIndex * 0.1 + skillIndex * 0.05 }}
                          >
                            <div className="w-full">
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-cyber text-sm">{skill}</span>
                                <span className={`text-${skillGroup.color} text-xs`}>
                                  <LightBulbIcon className="w-4 h-4" />
                                </span>
                              </div>
                              <div className="hero-progress-bar">
                                <motion.div
                                  className="hero-progress-fill"
                                  initial={{ width: "0%" }}
                                  animate={{ width: "90%" }}
                                  transition={{ duration: 1, delay: 0.8 + groupIndex * 0.1 + skillIndex * 0.05 }}
                                />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              className="mt-8 hero-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-hero-blue-500/10 rounded-lg">
                  <LightBulbIcon className="w-6 h-6 text-hero-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-hero-blue-300 mb-2">Always Learning</h4>
                  <p className="text-hero-blue-200">
                    Constantly exploring new technologies and methodologies to stay at the forefront of web development.
                    Committed to crafting exceptional digital experiences that push the boundaries of what's possible.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
