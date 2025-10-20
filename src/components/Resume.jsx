import React from 'react';
import resume from '../data/resume';

function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h3 className="text-2xl font-extrabold mb-4 text-blue-500">{title}</h3>
      {children}
    </section>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="relative z-10 px-4 py-16 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        {/* Education */}
        <Section title="Education">
          <div className="grid gap-4">
            {resume.education.map((e, idx) => (
              <div key={idx} className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">{e.school}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">{e.degree} {e.gpa ? `(GPA: ${e.gpa})` : ''}</p>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{e.end}{e.location ? ` • ${e.location}` : ''}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <div className="grid gap-4">
            {resume.experience.map((x, idx) => (
              <div key={idx} className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <p className="font-semibold text-neutral-900 dark:text-white">{x.role} • {x.company}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{x.start} – {x.end}</p>
                </div>
                <ul className="mt-3 list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
                  {x.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <div className="grid gap-4">
            {resume.projects.map((p, idx) => (
              <div key={idx} className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <p className="font-semibold text-neutral-900 dark:text-white">{p.name}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{p.dates}</p>
                </div>
                <ul className="mt-3 list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="grid gap-4 md:grid-cols-2">
            {resume.skills.map((s, idx) => (
              <div key={idx} className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur p-4 md:p-6">
                <p className="font-semibold mb-2">{s.category}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((k) => (
                    <span key={k} className="px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100">{k}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          <ul className="list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
            {resume.certifications.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </Section>

        {/* Publications */}
        <Section title="Publications">
          <ul className="list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
            {resume.publications.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </Section>
      </div>
    </section>
  );
}

