
import { Mail, Github, Linkedin, Smartphone, Code, Server, Briefcase, GraduationCap, Award, Users } from 'lucide-react';

// Main App Component
export default function Portfolio() {
  const user = {
    name: "Ayush Srivastava",
    title: "Full Stack Developer",
    summary: "Highly motivated B.Tech. student in Information Technology with a strong foundation in C++ and Data Structures & Algorithms (DSA). Proficient in front-end technologies with hands-on experience in ReactJS, HTML, CSS, and JavaScript, gained through a Frontend Developer internship. Eager to leverage emerging technologies to contribute to innovative projects.",
    email: "sriayush2710@gmail.com",
    phone: "9838303889",
    location: "New Delhi, India",
    social: {
      linkedin: "https://linkedin.com/in/your-profile", // Replace with your actual LinkedIn
      github: "https://github.com/your-username", // Replace with your actual GitHub
      leetcode: "https://leetcode.com/your-username/" // Replace with your actual Leetcode
    },
    profilePicture: "https://placehold.co/400x400/1a1a1a/ffffff?text=AS",
  };

  const skills = [
    { name: "C++", icon: <Code size={20} /> },
    { name: "JavaScript", icon: <Code size={20} /> },
    { name: "React.js", icon: <Code size={20} /> },
    { name: "Next.js", icon: <Code size={20} /> },
    { name: "Node.js", icon: <Server size={20} /> },
    { name: "Express.js", icon: <Server size={20} /> },
    { name: "MongoDB", icon: <Server size={20} /> },
    { name: "MySQL", icon: <Server size={20} /> },
    { name: "HTML", icon: <Code size={20} /> },
    { name: "CSS", icon: <Code size={20} /> },
    { name: "Tailwind CSS", icon: <Code size={20} /> },
    { name: "Git", icon: <Code size={20} /> },
    { name: "Data Structures & Algorithms", icon: <Code size={20} /> },
    { name: "OOP's", icon: <Code size={20} /> },
  ];

  const experience = [
    {
      role: "Frontend Developer Intern",
      company: "IBM (CSR-BOX)",
      period: "June 2024 - August 2024",
      description: [
        "Collaborated with the Frontend Team to develop and enhance key features of the website using HTML, CSS, JavaScript, and ReactJs.",
        "Contributed to the development of a sustainable model aimed at creating a network, improving community engagement.",
      ],
      icon: <Briefcase />
    }
  ];

  const education = [
     {
      institution: "Bharati Vidyapeeth's College of Engineering (GGSIPU), New Delhi",
      degree: "B.Tech in Information Technology",
      period: "2022 - 2026 (Ongoing)",
      details: "CGPA: 8.34",
      icon: <GraduationCap />
    },
    {
      institution: "B.B.S. International School, Prayagraj, India",
      degree: "Higher Secondary (Class XII)",
      period: "2020 - 2021",
      details: "Percentage: 83.2%",
      icon: <GraduationCap />
    },
  ];

  const projects = [
    {
      title: "Promptify",
      description: "A full-stack web application using Next.js, React, and Tailwind CSS for efficient AI prompt management. Implemented robust CRUD functionalities for prompts, powered by MongoDB and secured with Google Authentication.",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Promptify",
      liveUrl: "#", // Add your live URL
      githubUrl: "#" // Add your GitHub URL
    },
    {
      title: "Synaptic-AI",
      description: "An AI-powered suite of tools for tasks such as cold email generation and code review. Implemented a responsive frontend with React and a robust Node.js backend, integrating Google Gemini's AI services.",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Synaptic-AI",
      liveUrl: null,
      githubUrl: "#" // Add your GitHub URL
    },
    {
      title: "Research-Paper-Analyzer",
      description: "Developed a Research Paper Analyzer using Python and an AI multi-agent framework (AutoGen) to automate the analysis and summarization of research papers from the arXiv API. Deployed with Streamlit.",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Analyzer",
      liveUrl: null,
      githubUrl: "#" // Add your GitHub URL
    },
  ];
  
  const achievements = [
    {
      title: "Girl-Script Summer of Code (GSSOC) 2024",
      description: "Actively contributed to enhancing open-source projects.",
      icon: <Award />
    },
    {
      title: "BVP-GDSC Hackathon 2024",
      description: "Participated in the hackathon, developing innovative solutions.",
      icon: <Award />
    }
  ];

  const responsibilities = [
      {
          role: "Vice-head, Content Writing",
          organization: "BVP-Horizon",
          period: "Oct 2023 - June 2025",
          description: "Managing and organizing events while leading a team of 10-15 members.",
          icon: <Users />
      },
      {
          role: "Executive, Outreach Department",
          organization: "BVP-Code Chef",
          period: "Oct 2023 - June 2025",
          description: "Responsible for event publicity and community engagement.",
          icon: <Users />
      }
  ];


  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed">
      {/* Header & Hero Section */}
      <header className="bg-gray-900 sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-700">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
              <a href="#" className="text-2xl font-bold text-white tracking-wider">{user.name}</a>
              <div className="hidden md:flex space-x-6">
                  <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
                  <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
                  <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
                  <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
                  <a href="#contact" className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-2 px-4 rounded-lg transition-colors">Contact</a>
              </div>
          </nav>
      </header>
      
      <main className="container mx-auto px-6 py-12 md:py-20">
        <section id="hero" className="flex flex-col md:flex-row items-center justify-between min-h-[70vh]">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-teal-400">{user.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-6">{user.title}</p>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">{user.summary}</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href={user.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors"><Github size={28} /></a>
              <a href={user.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors"><Linkedin size={28} /></a>
              <a href={`mailto:${user.email}`} className="text-gray-400 hover:text-teal-400 transition-colors"><Mail size={28} /></a>
              <a href={user.social.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors"><Code size={28} /></a>
            </div>
          </div>
          <div className="md:w-1/3">
            <img src={user.profilePicture} alt={user.name} className="rounded-full border-4 border-teal-500 shadow-lg w-64 h-64 md:w-80 md:h-80 mx-auto object-cover"/>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
            <div className="grid md:grid-cols-5 gap-10 items-start">
                <div className="md:col-span-3 bg-gray-800 p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Education</h3>
                    <div className="relative border-l-2 border-teal-500 pl-6 space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-[34px] top-1.5 h-4 w-4 rounded-full bg-teal-500"></div>
                                <p className="font-bold text-white">{edu.institution}</p>
                                <p className="text-gray-400">{edu.degree}</p>
                                <p className="text-sm text-gray-500">{edu.period}</p>
                                <p className="text-sm text-gray-300">{edu.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-teal-400 flex items-center"><Award className="mr-2"/> Achievements</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                             {achievements.map((item, index) => <li key={index}><b>{item.title}:</b> {item.description}</li>)}
                        </ul>
                    </div>
                     <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-teal-400 flex items-center"><Users className="mr-2"/> Responsibilities</h3>
                        <ul className="space-y-4 text-gray-300">
                            {responsibilities.map((item, index) => (
                                <li key={index}>
                                    <p className="font-bold">{item.role} @ {item.organization}</p>
                                    <p className="text-sm text-gray-500">{item.period}</p>
                                    <p className="text-sm">{item.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Work Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-teal-500 pl-10">
              {experience.map((job, index) => (
                <div key={index} className="mb-12 relative">
                  <div className="absolute -left-[48px] top-0 bg-gray-800 p-2 rounded-full border-2 border-teal-500">{job.icon}</div>
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-teal-400">{job.role}</h3>
                    <p className="text-lg text-gray-400 mb-2">{job.company}</p>
                    <p className="text-sm text-gray-500 mb-4">{job.period}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {job.description.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-teal-400">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm h-24 overflow-y-auto">{project.description}</p>
                  <div className="flex space-x-4">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors text-sm">Live Demo</a>}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors text-sm">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills & Expertise</h2>
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center bg-gray-800 text-gray-300 py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 hover:text-teal-400 transition-colors">
                {skill.icon}
                <span className="ml-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <a href={`mailto:${user.email}`} className="inline-block bg-teal-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-teal-600 transition-transform transform hover:scale-105">
                Say Hello
            </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700">
          <div className="container mx-auto px-6 py-6 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} {user.name}. All rights reserved.</p>
               <div className="flex justify-center space-x-4 mt-4">
                  <a href={user.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors"><Github size={20} /></a>
                  <a href={user.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors"><Linkedin size={20} /></a>
                  <a href={`mailto:${user.email}`} className="hover:text-teal-400 transition-colors"><Mail size={20} /></a>
                  <a href={`tel:${user.phone}`} className="hover:text-teal-400 transition-colors"><Smartphone size={20} /></a>
               </div>
          </div>
      </footer>
    </div>
  );
}
