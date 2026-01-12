import { education, experience, achievements, responsibilities } from '@/lib/data';
import { Briefcase, GraduationCap, Award, Users } from 'lucide-react';

export default function Works() {
    return (
        <div className="space-y-20 max-w-4xl mx-auto">

            {/* Experience Section */}
            <section>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
                    <Briefcase className="text-teal-600 dark:text-teal-400" /> Experience
                </h2>
                <div className="space-y-12 border-l-2 border-gray-200 dark:border-gray-800 ml-3 pl-8 relative">
                    {experience.map((job, index) => (
                        <div key={index} className="relative">
                            <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900 border-4 border-white dark:border-gray-950 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400"></div>
                            </span>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.role}</h3>
                                    <span className="text-sm font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 w-fit mt-2 md:mt-0">
                                        {job.period}
                                    </span>
                                </div>
                                <p className="text-lg text-teal-600 dark:text-teal-400 font-medium mb-3">{job.company}</p>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
                                    {job.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
                    <GraduationCap className="text-teal-600 dark:text-teal-400" /> Education
                </h2>
                <div className="grid gap-6">
                    {education.map((edu, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between md:items-center">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
                                <p className="text-teal-600 dark:text-teal-400 font-medium">{edu.degree}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{edu.details}</p>
                            </div>
                            <span className="text-sm font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 w-fit mt-4 md:mt-0">
                                {edu.period}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Achievements */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                        <Award className="text-teal-600 dark:text-teal-400" /> Achievements
                    </h2>
                    <div className="space-y-4">
                        {achievements.map((item, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700">
                                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Responsibilities */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
                        <Users className="text-teal-600 dark:text-teal-400" /> Responsibilities
                    </h2>
                    <div className="space-y-4">
                        {responsibilities.map((item, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-gray-900 dark:text-white">{item.role}</h3>
                                    <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{item.period}</span>
                                </div>
                                <p className="text-teal-600 dark:text-teal-400 text-sm font-medium mb-2">{item.organization}</p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        </div>
    );
}
