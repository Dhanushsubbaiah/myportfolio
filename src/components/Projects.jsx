import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-4 py-16 scroll-mt-24">
      <h3 className="text-3xl font-extrabold text-center mb-12 text-blue-400">Projects</h3>
      <div className="grid gap-8 items-stretch sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 + i * 0.05 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
