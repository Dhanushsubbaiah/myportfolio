import React from 'react';
import { motion } from 'framer-motion';
import heroVisual from '../assets/hero-visual.svg';

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 px-4 min-h-screen flex items-center scroll-mt-24 snap-start">
      {/* Animated subtle background accents */}
      <motion.div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-blue-500/20"
        initial={{ opacity: 0.4, x: -30, y: -20 }}
        animate={{ opacity: 0.6, x: [ -30, -10, -30 ], y: [ -20, 0, -20 ] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl bg-blue-400/20"
        initial={{ opacity: 0.4, x: 30, y: 20 }}
        animate={{ opacity: 0.6, x: [ 30, 10, 30 ], y: [ 20, 0, 20 ] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        <div className="text-center md:text-left">
          <motion.p
            className="text-sm font-semibold tracking-widest text-blue-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            👋 Hello, I’m
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Dhanush K J
          </motion.h1>
          <motion.h2
            className="mt-2 text-xl md:text-2xl font-semibold text-neutral-600 dark:text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Software Developer • AI | Blockchain | Cloud | Security
          </motion.h2>
          <motion.p
            className="mt-5 text-base md:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl md:max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            I build fast, scalable, and secure applications that bridge AI, blockchain, and cloud technologies.
            Currently, I’m a Software Developer Intern at ReplyQuick.AI, where I design and implement animated React
            dashboards and RESTful APIs for AI‑driven voice and SMS tools.
          </motion.p>

          <motion.div
            className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 transition-colors">
              View Projects
            </a>
            <a href="/resume.html" className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/20 px-6 py-3 font-semibold hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Resume
            </a>
            <a href="https://github.com/Dhanushsubbaiah" aria-label="GitHub" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 dark:border-white/20 text-neutral-600 hover:text-neutral-900 hover:bg-black/5 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.86 3.15 8.98 7.51 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.69-1.3-3.69-1.3-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.69-1.48-2.43-.28-4.99-1.22-4.99-5.43 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.42.1-2.96 0 0 .92-.3 3.02 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.54.22 2.68.11 2.96.7.77 1.13 1.76 1.13 2.96 0 4.22-2.57 5.15-5.01 5.43.39.34.73 1.01.73 2.05 0 1.48-.01 2.67-.01 3.03 0 .29.2.64.76.53 4.36-1.45 7.5-5.57 7.5-10.43C23.02 5.24 18.27.5 12 .5Z" clipRule="evenodd"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/dhanush-subbaiah/" aria-label="LinkedIn" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 dark:border-white/20 text-neutral-600 hover:text-neutral-900 hover:bg-black/5 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM14.5 9A4.5 4.5 0 0 0 10 13.5V21h4v-6.5a2 2 0 1 1 4 0V21h4v-7.5A4.5 4.5 0 0 0 17.5 9Z"/></svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative h-72 md:h-96"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#3b82f61a,#3b82f60d,transparent)] rounded-full blur-3xl"></div>
          <div className="relative h-full w-full flex items-center justify-center">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-2 ring-black/5 dark:ring-white/10 shadow-2xl bg-gradient-to-br from-white to-blue-50 dark:from-neutral-900 dark:to-neutral-800">
              <img
                src="/profile.png"
                alt="Dhanush portrait"
                loading="eager"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/profile.jpg';
                  e.currentTarget.addEventListener('error', () => { e.currentTarget.src = heroVisual; }, { once: true });
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_30%,transparent,rgba(0,0,0,0.25))]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
