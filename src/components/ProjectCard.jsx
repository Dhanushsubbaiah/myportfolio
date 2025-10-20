import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="h-full bg-white dark:bg-white/5 text-gray-900 dark:text-gray-100 rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500 flex flex-col justify-between border border-black/5 dark:border-white/10 backdrop-blur">
      <div>
        <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h4>
        <p className="text-sm mb-2 text-gray-700 dark:text-gray-300">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-100 text-xs rounded-full">{tech}</span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex gap-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.86 3.15 8.98 7.51 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.69-1.3-3.69-1.3-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.69-1.48-2.43-.28-4.99-1.22-4.99-5.43 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.42.1-2.96 0 0 .92-.3 3.02 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.54.22 2.68.11 2.96.7.77 1.13 1.76 1.13 2.96 0 4.22-2.57 5.15-5.01 5.43.39.34.73 1.01.73 2.05 0 1.48-.01 2.67-.01 3.03 0 .29.2.64.76.53 4.36-1.45 7.5-5.57 7.5-10.43C23.02 5.24 18.27.5 12 .5Z" clipRule="evenodd"/></svg>
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 text-sm hover:underline">Live Demo</a>
        )}
      </div>
    </div>
  );
}
