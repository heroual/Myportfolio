import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, AnimationControls } from 'framer-motion';

export const useScrollAnimation = (threshold = 0.3) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start('visible');
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

  return { ref, controls, inView };
};

export const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

export const heroTransitionVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

export const energyWaveVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

export const powerPulseVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: [0, 1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const createSuperTransition = (controls: AnimationControls) => {
  return {
    onEnter: async () => {
      await controls.start({
        scale: [1, 1.05, 1],
        opacity: [0, 1],
        transition: { duration: 0.8, ease: "easeOut" },
      });
    },
    onLeave: async () => {
      await controls.start({
        scale: [1, 0.95],
        opacity: 0,
        transition: { duration: 0.4, ease: "easeIn" },
      });
    },
  };
};
