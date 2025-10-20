import React from 'react';

export default function Header({ darkMode, onToggle }) {
  return (
    <nav className="sticky top-0 z-20 w-full px-6 py-4 flex items-center justify-between bg-white/70 dark:bg-neutral-900/60 backdrop-blur border-b border-black/5 dark:border-white/10">
      <a href="#hero" className="text-xl md:text-2xl font-extrabold tracking-tight">Dhanush Kortikere Jagadish</a>
      <div className="flex items-center gap-6">
        <a href="#about" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
        <a href="#projects" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
        <a href="/resume.html" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400">Resume</a>
        <a href="#collaborate" className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        <button
          onClick={onToggle}
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
  );
}

