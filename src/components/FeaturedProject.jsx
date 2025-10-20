import React from 'react';

export default function FeaturedProject({ project }) {
  if (!project) return null;
  return (
    <div className="col-span-full md:col-span-2 lg:col-span-3 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-xl">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
        <div className="flex-1">
          <h4 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
            {project.title}
          </h4>
          <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech?.map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-white text-sm font-semibold shadow hover:bg-blue-700 transition-colors">
                GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 px-5 py-2.5 text-sm font-semibold hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Live Demo
              </a>
            )}
          </div>
        </div>
        <div className="w-full md:w-64 h-40 md:h-44 rounded-xl overflow-hidden border border-black/5 dark:border-white/10">
          <img src={new URL('../assets/featured-visual.svg', import.meta.url).toString()} alt="Project visual" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
