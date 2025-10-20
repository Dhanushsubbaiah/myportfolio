import React from 'react';

const tech = [
  { key: 'react', label: 'React', color: '#61dafb', text: 'R' },
  { key: 'vite', label: 'Vite', color: '#9468ff', text: 'V' },
  { key: 'tailwind', label: 'Tailwind CSS', color: '#38bdf8', text: 'TW' },
  { key: 'framer', label: 'Framer Motion', color: '#a855f7', text: 'FM' },
  { key: 'canvas', label: 'Canvas', color: '#0ea5e9', text: 'CV' },
];

function MonoIcon({ color = '#3b82f6', text = '' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill={color} fillOpacity="0.85" />
      <text x="12" y="16" fontSize="10" fontFamily="Inter, system-ui, Arial" textAnchor="middle" fill="#0a0a0a" fontWeight="700">{text}</text>
    </svg>
  );
}

export default function TrustStrip() {
  return (
    <section aria-label="Tools & Tech" className="relative z-10 px-4 py-10">
      <div className="max-w-6xl mx-auto rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
        <div className="px-6 py-6">
          <p className="text-center text-xs font-semibold tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
            BUILT WITH
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tech.map((t) => (
              <span key={t.key} className="px-3 py-1 rounded-full text-xs bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10 inline-flex items-center gap-2">
                <MonoIcon color={t.color} text={t.text} />
                <span>{t.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );}
