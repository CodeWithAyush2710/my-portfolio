import { projects, skills } from '@/lib/data';
import { Github, ExternalLink, Code } from 'lucide-react';

export default function Projects() {
    return (
        <div className="space-y-20 max-w-6xl mx-auto">

            {/* Skills Section */}
            <section className="text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Technical Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 transition-colors group cursor-default">
                            <span className="text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">{skill.icon}</span>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Grid */}
            <section>
                <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white flex items-center gap-3">
                    <Code className="text-teal-600 dark:text-teal-400" /> Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-teal-500 hover:text-white transition-colors" title="View Code">
                                        <Github size={20} />
                                    </a>
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-teal-500 hover:text-white transition-colors" title="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">Full Stack</span>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 flex items-center gap-1">
                                        Learn more <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
