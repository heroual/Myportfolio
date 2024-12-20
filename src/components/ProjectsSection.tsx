import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, ChartBarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: "STickets - Plateforme SAV Intelligente",
    description: "Une plateforme nouvelle génération pour la gestion des interventions techniques SAV, combinant IA, analyses en temps réel et interface intuitive. Amélioration significative des KPIs avec 50% de réduction du temps de résolution et 95% de satisfaction client.",
    images: [
      "/projects/STICKET.PNG",
      "/projects/stickets-dashboard.png",
      "/projects/stickets-timeline.png",
      "/projects/stickets-analytics.png"
    ],
    technologies: ["Firebase", "REST API", "AI/ML", "Cloud Functions", "Analytics"],
    features: [
      "Plan d'Action Intelligent avec IA",
      "Timeline Annuelle Interactive",
      "Gestion des Équipements",
      "Analyse Prédictive",
      "Dashboard en temps réel"
    ],
    metrics: [
      { label: "Réduction délais", value: "50%" },
      { label: "Satisfaction client", value: "95%" },
      { label: "Efficacité opérationnelle", value: "95%" }
    ],
    githubUrl: "https://github.com/yourusername/stickets",
    liveUrl: "#"
  },
  {
    title: "Network Insight Pro",
    description: "Une application web sophistiquée de surveillance et d'analyse réseau offrant des diagnostics en temps réel, des analyses de sécurité et une surveillance des performances via une interface web intuitive.",
    images: [
      "/projects/network-insight/dashboard.png",
      "/projects/network-insight/security.png",
      "/projects/network-insight/performance.png",
      "/projects/network-insight/devices.png"
    ],
    technologies: [
      "Python 3.8+",
      "Flask",
      "psutil",
      "Nmap",
      "Scapy",
      "HTML5",
      "CSS3",
      "RESTful API"
    ],
    features: [
      "Tableau de bord en temps réel pour la surveillance réseau",
      "Analyse de sécurité réseau et détection de vulnérabilités",
      "Surveillance des performances et tests de vitesse",
      "Gestion et visualisation des appareils connectés"
    ],
    technicalHighlights: [
      "Intégration de multiples bibliothèques réseau bas niveau",
      "Pipeline de traitement de données asynchrone",
      "Architecture modulaire avec séparation MVC",
      "Gestion sécurisée des opérations système"
    ],
    metrics: [
      { label: "Performance", value: "98%" },
      { label: "Sécurité", value: "100%" },
      { label: "Fiabilité", value: "99%" }
    ],
    githubUrl: "https://github.com/yourusername/network-insight-pro",
    liveUrl: "https://network-insight-pro.demo"
  },
  {
    title: "BrightSmile - Application Web pour Clinique Dentaire",
    description: "Une application web moderne pour la gestion des cliniques dentaires, intégrant la gestion des rendez-vous, des traitements et des paiements. Système d'authentification basé sur les rôles avec interfaces distinctes pour médecins et patients.",
    images: [
      "/projects/brightsmile-dashboard.png",
      "/projects/brightsmile-appointments.png",
      "/projects/brightsmile-patients.png",
      "/projects/brightsmile-treatments.png"
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "TailwindCSS",
      "Firebase",
      "Vite",
      "React Router",
      "Shadcn/UI"
    ],
    features: [
      "Authentification basée sur les rôles",
      "Portail médecin avec gestion des traitements",
      "Système de paiement sécurisé",
      "Interface responsive moderne",
      "Gestion des dossiers patients",
      "Notifications temps réel"
    ],
    technicalHighlights: [
      "Architecture modulaire",
      "Sécurité Firebase",
      "TypeScript & ESLint",
      "Hooks personnalisés",
      "Tests automatisés"
    ],
    metrics: [
      { label: "Satisfaction utilisateur", value: "98%" },
      { label: "Performance", value: "95%" },
      { label: "Sécurité", value: "100%" }
    ],
    githubUrl: "https://github.com/yourusername/brightsmile",
    liveUrl: "#"
  }
];

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-64 overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="Project screenshot"
          className="w-full h-full object-cover transition-transform duration-500 
                   group-hover:scale-110"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-hero-dark to-transparent opacity-60"></div>
          
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-hero-accent-purple w-4'
                    : 'bg-hero-blue-500/50 hover:bg-hero-blue-500'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prevImage}
              className="p-2 rounded-full bg-hero-dark/80 text-hero-blue-500 hover:text-hero-accent-purple
                       transform hover:scale-110 transition-all"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="p-2 rounded-full bg-hero-dark/80 text-hero-blue-500 hover:text-hero-accent-purple
                       transform hover:scale-110 transition-all"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-hero-dark relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-hero-blue-500 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg">
            Showcasing my technical expertise and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative flex flex-col h-full"
            >
              <div className="relative overflow-hidden rounded-lg border border-hero-blue-500/30 
                           transition-all duration-300 hover:border-hero-blue-500 hover:shadow-glow
                           flex flex-col h-full bg-hero-dark-800">
                {/* Project Images Gallery - Fixed Height */}
                <div className="h-[300px]">
                  <ImageGallery images={project.images} />
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-hero-blue-500 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {project.features && (
                    <div className="mb-4">
                      <h4 className="text-hero-blue-500 font-semibold mb-2">Fonctionnalités Clés:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.slice(0, 6).map((feature, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-center">
                            <ChartBarIcon className="w-4 h-4 mr-2 text-hero-accent-purple flex-shrink-0" />
                            <span className="line-clamp-2">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.technicalHighlights && (
                    <div className="mb-4">
                      <h4 className="text-hero-blue-500 font-semibold mb-2">Points Techniques Clés:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.technicalHighlights.slice(0, 4).map((highlight, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-center">
                            <ChartBarIcon className="w-4 h-4 mr-2 text-hero-accent-purple flex-shrink-0" />
                            <span className="line-clamp-2">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-hero-accent-purple text-xl font-bold">
                            {metric.value}
                          </div>
                          <div className="text-gray-400 text-sm line-clamp-1">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-hero-blue-500/10 text-hero-blue-500
                                 rounded-full border border-hero-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-hero-blue-500 hover:text-hero-accent-purple transition-colors"
                    >
                      <CodeBracketIcon className="w-5 h-5 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-hero-blue-500 hover:text-hero-accent-purple transition-colors"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-hero-blue-500/0 via-hero-blue-500/5 to-hero-accent-purple/0 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
