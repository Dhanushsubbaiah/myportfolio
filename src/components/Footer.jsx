import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 text-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-neutral-600 dark:text-white/80">Made with ❤️ © {new Date().getFullYear()} Dhanush</div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Dhanushsubbaiah" aria-label="GitHub" className="text-neutral-600 hover:text-neutral-900 dark:text-white/70 dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.86 3.15 8.98 7.51 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.69-1.3-3.69-1.3-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.69-1.48-2.43-.28-4.99-1.22-4.99-5.43 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.42.1-2.96 0 0 .92-.3 3.02 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.54.22 2.68.11 2.96.7.77 1.13 1.76 1.13 2.96 0 4.22-2.57 5.15-5.01 5.43.39.34.73 1.01.73 2.05 0 1.48-.01 2.67-.01 3.03 0 .29.2.64.76.53 4.36-1.45 7.5-5.57 7.5-10.43C23.02 5.24 18.27.5 12 .5Z" clipRule="evenodd"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/dhanush-subbaiah/" aria-label="LinkedIn" className="text-neutral-600 hover:text-neutral-900 dark:text-white/70 dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM14.5 9A4.5 4.5 0 0 0 10 13.5V21h4v-6.5a2 2 0 1 1 4 0V21h4v-7.5A4.5 4.5 0 0 0 17.5 9Z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
