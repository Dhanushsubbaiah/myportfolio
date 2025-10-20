import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import CTABand from './components/CTABand';
import InteractiveBackground from './components/InteractiveBackground';
import TrustStrip from './components/TrustStrip';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false; // light mode default
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') return true;
    if (stored === 'light') return false;
    return false; // default to light if not set
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-emerald-500 focus:text-white focus:px-3 focus:py-2 focus:rounded-md">Skip to content</a>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-700 font-sans relative overflow-hidden">
        {/* Interactive background */}
        <InteractiveBackground />
        {/* Light-mode bottom tint to avoid blending to white */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-blue-50/70 to-transparent dark:from-transparent" />

        {/* Header */}
        <Header darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />

        <main id="main" className="snap-y snap-proximity">
          {/* Hero */}
          <Hero />

          {/* About */}
          <About />


          {/* Projects */}
          <Projects />

          {/* Built With */}
          <TrustStrip />

          {/* Collaborate CTA */}
          <CTABand />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
