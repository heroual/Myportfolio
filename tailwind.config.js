/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hero: {
          // Electric blue shades
          blue: {
            50: '#e6f9ff',
            100: '#b3edff',
            200: '#80e1ff',
            300: '#4dd5ff',
            400: '#1ac9ff',
            500: '#00bdff',
            600: '#0097cc',
            700: '#007199',
            800: '#004b66',
            900: '#002533'
          },
          // Neon green shades
          green: {
            50: '#e6fff2',
            100: '#b3ffdb',
            200: '#80ffc4',
            300: '#4dffad',
            400: '#1aff96',
            500: '#00ff80',
            600: '#00cc66',
            700: '#00994d',
            800: '#006633',
            900: '#00331a'
          },
          // Dark theme colors
          dark: {
            DEFAULT: '#0a0d1f',
            lighter: '#151933',
            darker: '#050814'
          },
          // Accent colors
          accent: {
            purple: '#b829ff',
            pink: '#ff29b8',
            cyan: '#29ffed'
          }
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(0, 189, 255, 0.15) 0%, rgba(184, 41, 255, 0.15) 100%)',
        'hero-glow': 'radial-gradient(circle at center, rgba(0, 189, 255, 0.2) 0%, transparent 70%)',
        'hero-grid': 'linear-gradient(rgba(0, 189, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 189, 255, 0.1) 1px, transparent 1px)',
        'hero-card': 'linear-gradient(135deg, rgba(26, 201, 255, 0.1) 0%, rgba(184, 41, 255, 0.1) 100%)',
        'hero-border': 'linear-gradient(90deg, #00bdff, #b829ff)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'border-flow': 'border-flow 4s linear infinite',
        'background-pan': 'background-pan 3s linear infinite',
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
        'power-pulse': 'power-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 189, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 189, 255, 0.8)' }
        },
        'border-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'background-pan': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '-200% center' }
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        'power-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' }
        }
      },
      boxShadow: {
        'hero': '0 0 20px rgba(0, 189, 255, 0.5)',
        'hero-hover': '0 0 30px rgba(0, 189, 255, 0.8)',
        'hero-button': '0 0 15px rgba(0, 189, 255, 0.3)',
        'hero-card': '0 8px 32px rgba(0, 189, 255, 0.15)',
      },
      dropShadow: {
        'hero': '0 0 10px rgba(0, 189, 255, 0.5)',
        'hero-text': '0 0 8px rgba(0, 189, 255, 0.3)',
      },
      backdropBlur: {
        'hero': '10px',
      },
      borderWidth: {
        'hero': '2px',
      },
      fontFamily: {
        'hero': ['Orbitron', 'sans-serif'],
        'cyber': ['Share Tech Mono', 'monospace'],
      },
      gridTemplateColumns: {
        'hero-skills': 'repeat(auto-fit, minmax(120px, 1fr))',
      },
      transitionProperty: {
        'glow': 'box-shadow, transform, opacity',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
