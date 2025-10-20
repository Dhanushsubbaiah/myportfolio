import React, { useEffect, useState } from 'react';
import Resume from './components/Resume';
import InteractiveBackground from './components/InteractiveBackground';

export default function ResumePage() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') return true;
    if (stored === 'light') return false;
    return false;
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
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-3 focus:py-2 focus:rounded-md">Skip to content</a>
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-700 font-sans relative overflow-hidden">
        <InteractiveBackground />

        <nav className="sticky top-0 z-20 w-full px-6 py-4 flex items-center justify-between bg-white/70 dark:bg-neutral-900/60 backdrop-blur border-b border-black/5 dark:border-white/10">
          <a href="/" className="text-xl md:text-2xl font-extrabold tracking-tight">Dhanush K J</a>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400">Home</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-blue-600 text-white hover:rotate-180 transition-transform"
              title="Toggle Theme"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zm10.48 14.32l1.79 1.79 1.79-1.79-1.79-1.79-1.79 1.79zM12 5.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0-3.5h-1v3h1V2zm0 17h-1v3h1v-3zM4 11H1v1h3v-1zm20 0h-3v1h3v-1zM4.22 18.36l-1.79 1.79 1.41 1.41 1.79-1.79-1.41-1.41zM19.78 5.64l1.79-1.79-1.41-1.41-1.79 1.79 1.41 1.41z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M21.64 13a1 1 0 00-1.05-.14A8 8 0 0111.18 3.4a1 1 0 00-1.26-1.26A10 10 0 1022 14.09a1 1 0 00-.36-1.09z"/></svg>
              )}
            </button>
          </div>
        </nav>

        <main id="main" className="relative">
          <section className="px-4 py-12">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Resume</h1>
              <p className="text-neutral-600 dark:text-neutral-300">Education, Experience, Projects, Skills, Certifications, Publications</p>
            </div>
          </section>

          <Resume />

          <section className="px-4 pb-20 -mt-8">
            <div className="max-w-5xl mx-auto flex justify-end">
              <a
                href="https://drive.google.com/uc?export=download&id=1hQANPWhJP9eSj3-AGv6GfjuZolKjQNM7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 active:scale-[0.98] transition-all"
                title="Download PDF resume"
                role="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 3a1 1 0 011 1v8.59l2.3-2.3a1 1 0 111.4 1.42l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.42L11 12.59V4a1 1 0 011-1z"/><path d="M5 20a2 2 0 002 2h10a2 2 0 002-2v-3a1 1 0 10-2 0v3H7v-3a1 1 0 10-2 0v3z"/></svg>
                Download PDF
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
