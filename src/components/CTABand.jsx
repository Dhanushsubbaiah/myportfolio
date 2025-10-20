import React from 'react';

export default function CTABand() {
  return (
    <section id="collaborate" aria-label="Get in touch" className="relative z-10 px-4 py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-black/5 dark:border-white/10">
        <div className="relative p-8 md:p-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(800px_300px_at_10%_-20%,white,transparent)]" />
          <div className="relative flex flex-col items-center justify-center gap-6 text-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold">Let’s build something great</h3>
              <p className="mt-2 text-white/90 max-w-xl">I’m available for collaborative projects, freelance work, and internships. Tell me about your idea.</p>
            </div>
            <a href="mailto:dhanushsubbaiah59@gmail.com" className="inline-flex items-center rounded-full bg-white text-blue-700 px-6 py-3 font-semibold shadow hover:bg-white/90 transition-colors">
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
