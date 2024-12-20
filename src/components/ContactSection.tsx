import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-hero-dark relative">
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      <div className="absolute inset-0 bg-hero-grid bg-[size:30px_30px] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-hero-blue-500 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-hero-blue-200 max-w-2xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {/* Email Contact */}
            <a
              href="mailto:elheroual@gmail.com"
              className="group flex flex-col items-center p-8 rounded-lg border border-hero-blue-500/30 
                       bg-hero-dark-800 hover:border-hero-blue-500 transition-all duration-300
                       hover:shadow-glow"
            >
              <div className="w-16 h-16 rounded-full bg-hero-blue-500/10 flex items-center justify-center mb-4
                            group-hover:bg-hero-blue-500/20 transition-colors">
                <EnvelopeIcon className="w-8 h-8 text-hero-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-hero-blue-500 mb-2">Email</h3>
              <p className="text-hero-blue-200 group-hover:text-hero-accent-purple transition-colors">
                elheroual@gmail.com
              </p>
            </a>

            {/* Location */}
            <div className="flex flex-col items-center p-8 rounded-lg border border-hero-blue-500/30 
                          bg-hero-dark-800 hover:border-hero-blue-500 transition-all duration-300
                          hover:shadow-glow group">
              <div className="w-16 h-16 rounded-full bg-hero-blue-500/10 flex items-center justify-center mb-4
                            group-hover:bg-hero-blue-500/20 transition-colors">
                <MapPinIcon className="w-8 h-8 text-hero-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-hero-blue-500 mb-2">Location</h3>
              <p className="text-hero-blue-200 group-hover:text-hero-accent-purple transition-colors">
                TAROUDANT, MOROCCO
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-hero-dark-800 border border-hero-blue-500/30 rounded-lg p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-hero-blue-300 font-cyber mb-2" htmlFor="name">
                    {'<name>'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-hero-dark border border-hero-blue-500/30 rounded-lg px-4 py-3 text-white 
                             focus:border-hero-accent-purple focus:ring-1 focus:ring-hero-accent-purple
                             transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-hero-blue-300 font-cyber mb-2" htmlFor="email">
                    {'<email>'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-hero-dark border border-hero-blue-500/30 rounded-lg px-4 py-3 text-white 
                             focus:border-hero-accent-purple focus:ring-1 focus:ring-hero-accent-purple
                             transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-hero-blue-300 font-cyber mb-2" htmlFor="subject">
                  {'<subject>'}
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-hero-dark border border-hero-blue-500/30 rounded-lg px-4 py-3 text-white 
                           focus:border-hero-accent-purple focus:ring-1 focus:ring-hero-accent-purple
                           transition-colors duration-300"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-hero-blue-300 font-cyber mb-2" htmlFor="message">
                  {'<message>'}
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full bg-hero-dark border border-hero-blue-500/30 rounded-lg px-4 py-3 text-white 
                           focus:border-hero-accent-purple focus:ring-1 focus:ring-hero-accent-purple
                           transition-colors duration-300 resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="hero-button inline-flex items-center group"
                >
                  <EnvelopeIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

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
    </section>
  );
};

export default ContactSection;
