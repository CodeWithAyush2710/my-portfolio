"use client";

import { useEffect, useRef } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';

export default function Modal({ isOpen, onClose, project }) {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleEscape);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    if (!isOpen || !project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className="bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-xl w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200 border border-white/10"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 rounded-full transition-colors z-10 text-zinc-500 dark:text-zinc-300"
                >
                    <X size={20} />
                </button>

                <div className="max-h-[85vh] overflow-y-auto">
                    <div className="relative h-64 md:h-80 w-full">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                            <h2 className="text-3xl font-bold text-white shadow-sm">{project.title}</h2>
                        </div>
                    </div>

                    <div className="p-8 space-y-6">
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
                            >
                                <Github size={20} /> View Source
                            </a>
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
                                >
                                    <ExternalLink size={20} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
