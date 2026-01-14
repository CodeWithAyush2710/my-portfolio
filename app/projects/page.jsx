"use client";

import { projects, skills } from '@/lib/data';
import { Github, ExternalLink, Code, Info } from 'lucide-react';
import { useState } from 'react';
import Modal from '@/components/Modal';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="space-y-20 max-w-6xl mx-auto">

            {/* Skills Section */}
            <section className="text-center">
                <h2 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white">Technical Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2 px-4 py-2 glass glass-hover rounded-lg transition-all group cursor-default">
                            <span className="text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">{skill.icon}</span>
                            <span className="text-zinc-700 dark:text-zinc-200 font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Grid */}
            <section>
                <h2 className="text-3xl font-bold mb-10 text-zinc-900 dark:text-white flex items-center gap-3">
                    <Code className="text-cyan-600 dark:text-cyan-400" /> <span className="text-gradient">Featured Projects</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group glass glass-hover rounded-2xl overflow-hidden cursor-pointer flex flex-col"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="p-2 bg-white rounded-full hover:bg-teal-500 hover:text-white transition-colors"
                                        title="View Code"
                                    >
                                        <Github size={20} />
                                    </a>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="p-2 bg-white rounded-full hover:bg-teal-500 hover:text-white transition-colors"
                                            title="Live Demo"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-300 text-sm line-clamp-3 mb-4 leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-zinc-500/10">
                                    <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">Full Stack</span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedProject(project);
                                        }}
                                        className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-cyan-500 flex items-center gap-1"
                                    >
                                        Learn more <Info size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </div>
    );
}
