import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    title: "Maroc Telecom",
    period: "Depuis Juillet 2017",
    role: "Surveillant des travaux & Technicien d'installation",
    icon: <BriefcaseIcon className="w-8 h-8" />,
    description: "Expert en installation et maintenance des services de télécommunication",
    responsibilities: [
      "Relève des dérangements Fixe, ADSL, Fibre Optique, VPN ADSL, VPN LL et MARNIS",
      "Mise en place et configuration des Routeurs, VPN, ONT et Firewall",
      "Étude du réseau de desserte en fibre optique"
    ],
    projects: [
      "VPLS de la Gendarmerie Royal",
      "Interconnexion des Bureaux d'État Civil du Ministère de l'intérieur via VPN ADSL et VPN 4G"
    ]
  },
  {
    title: "PFE Génie informatique",
    period: "2022",
    role: "Projet de Fin d'Études",
    icon: <BriefcaseIcon className="w-8 h-8" />,
    description: "Conception et implémentation d'une solution NAC (Network Access Control) basée sur Cisco ISE avec intégration d'une autorité de certification",
    responsibilities: [
      "Configuration et déploiement de Cisco ISE pour le contrôle d'accès réseau",
      "Mise en place d'une PKI (Public Key Infrastructure) avec serveur CA",
      "Implémentation de l'authentification par certificats pour les endpoints",
      "Configuration des politiques de sécurité et de conformité"
    ],
    technicalHighlights: [
      "Architecture Cisco ISE multi-nœuds",
      "Intégration avec Active Directory",
      "Gestion des certificats numériques",
      "Profils d'autorisation personnalisés"
    ],
    skills: [
      "Cisco ISE",
      "PKI",
      "Network Security",
      "Certificate Authority",
      "802.1X",
      "RADIUS"
    ]
  }
];

const education = [
  {
    school: "École Polytechnique d'Agadir",
    period: "2019 - 2022",
    degree: "Diplôme d'Ingénieur d'État",
    field: "Génie Informatique",
    icon: <AcademicCapIcon className="w-8 h-8" />
  },
  {
    school: "ISTA TAROUDANT",
    period: "2014 - 2016",
    degree: "Technicien Spécialisé",
    field: "Réseaux Informatiques",
    icon: <AcademicCapIcon className="w-8 h-8" />
  },
  {
    school: "Lycée IBN SOULAIMAN ROUDANI",
    period: "2012 - 2013",
    degree: "Baccalauréat",
    field: "Sciences Physiques",
    icon: <AcademicCapIcon className="w-8 h-8" />
  }
];

const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-20 bg-hero-dark relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      <div className="absolute inset-0 bg-hero-grid bg-[size:30px_30px] opacity-10"></div>

      {/* Animated Lines */}
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

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="hero-text-gradient">Journey Milestones</span>
          </h2>
          <p className="text-xl text-hero-blue-200 max-w-3xl mx-auto">
            A chronicle of my professional evolution and educational achievements
          </p>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-hero-blue-500 mb-8 text-center">
            Expérience Professionnelle
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-hero-dark-800 rounded-lg p-8 border border-hero-blue-500/30 
                               hover:border-hero-blue-500 transition-all duration-300 hover:shadow-glow h-full
                               relative overflow-hidden">
                  {/* Glowing Corner */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-hero-accent-purple/20 rounded-full blur-xl
                                group-hover:bg-hero-accent-purple/30 transition-all duration-300"></div>

                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-hero-blue-500/10 rounded-lg mr-4 
                                  group-hover:bg-hero-blue-500/20 transition-colors">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-hero-blue-500">{exp.title}</h3>
                      <p className="text-hero-accent-purple">{exp.period}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-hero-blue-300 mb-2">{exp.role}</h4>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>

                    {exp.responsibilities && (
                      <div>
                        <h4 className="text-hero-blue-300 font-semibold mb-3">Responsabilités:</h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start text-gray-300 group/item">
                              <ChartBarIcon className="w-5 h-5 text-hero-accent-purple mr-3 mt-1 flex-shrink-0
                                                     group-hover/item:text-hero-blue-500 transition-colors" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.projects && (
                      <div>
                        <h4 className="text-hero-blue-300 font-semibold mb-3">Projets Clés:</h4>
                        <ul className="space-y-3">
                          {exp.projects.map((project, i) => (
                            <li key={i} className="flex items-start text-gray-300 group/item">
                              <ChartBarIcon className="w-5 h-5 text-hero-accent-purple mr-3 mt-1 flex-shrink-0
                                                     group-hover/item:text-hero-blue-500 transition-colors" />
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.technicalHighlights && (
                      <div>
                        <h4 className="text-hero-blue-300 font-semibold mb-3">Points Techniques Clés:</h4>
                        <ul className="space-y-3">
                          {exp.technicalHighlights.map((highlight, i) => (
                            <li key={i} className="flex items-start text-gray-300 group/item">
                              <ChartBarIcon className="w-5 h-5 text-hero-accent-purple mr-3 mt-1 flex-shrink-0
                                                     group-hover/item:text-hero-blue-500 transition-colors" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {exp.skills && (
                      <div>
                        <h4 className="text-hero-blue-300 font-semibold mb-3">Compétences:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-sm bg-hero-blue-500/10 text-hero-blue-500
                                       rounded-full border border-hero-blue-500/30 hover:border-hero-blue-500
                                       hover:bg-hero-blue-500/20 transition-all duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-hero-blue-500 mb-8 text-center">
            Formation
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-hero-dark-800 rounded-lg p-8 border border-hero-blue-500/30 
                               hover:border-hero-blue-500 transition-all duration-300 hover:shadow-glow h-full
                               relative overflow-hidden">
                  {/* Glowing Corner */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-hero-accent-purple/20 rounded-full blur-xl
                                group-hover:bg-hero-accent-purple/30 transition-all duration-300"></div>

                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-hero-blue-500/10 rounded-lg mr-4
                                  group-hover:bg-hero-blue-500/20 transition-colors">
                      {edu.icon}
                    </div>
                    <div>
                      <p className="text-hero-accent-purple">{edu.period}</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-hero-blue-500 mb-3">{edu.school}</h3>
                  <p className="text-hero-blue-300 font-semibold mb-2">{edu.degree}</p>
                  <p className="text-gray-300">{edu.field}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
