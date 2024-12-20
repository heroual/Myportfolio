import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import SectionTransition from './components/SectionTransition.tsx';

// Sections
import HeroSection from './components/HeroSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import JourneySection from './components/JourneySection.tsx';
import ProjectsSection from './components/ProjectsSection.tsx';
import ContactSection from './components/ContactSection.tsx';

function App() {
  const particlesConfig = {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#00FFFF" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00FFFF",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  };

  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <div className="bg-hero-dark min-h-screen relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />
      <AnimatePresence mode="wait">
        <motion.div className="relative z-10">
          <SectionTransition>
            <HeroSection />
          </SectionTransition>
          
          <SectionTransition>
            <AboutSection />
          </SectionTransition>
          
          <SectionTransition>
            <JourneySection />
          </SectionTransition>
          
          <SectionTransition>
            <ProjectsSection />
          </SectionTransition>
          
          <SectionTransition>
            <ContactSection />
          </SectionTransition>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
