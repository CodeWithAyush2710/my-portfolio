import { Code, Server, Briefcase, GraduationCap, Award, Users } from 'lucide-react';

export const user = {
    name: "Ayush Srivastava",
    title: "Full Stack Developer",
    summary: "Highly motivated B.Tech. student in Information Technology with a strong foundation in C++ and Data Structures & Algorithms (DSA). Proficient in front-end technologies with hands-on experience in ReactJS, HTML, CSS, and JavaScript, gained through a Frontend Developer internship. Eager to leverage emerging technologies to contribute to innovative projects.",
    email: "sriayush2710@gmail.com",
    phone: "9838303889",
    location: "New Delhi, India",
    social: {
        linkedin: "https://www.linkedin.com/in/ayush-srivastava-114b58215/",
        github: "https://github.com/CodeWithAyush2710",
        leetcode: "https://leetcode.com/u/ayush_sri_india/"
    },
    profilePicture: "/profile.jpg",
};

export const skills = [
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

export const experience = [
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

export const education = [
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

export const projects = [
    {
        title: "Promptify",
        description: "A full-stack web application using Next.js, React, and Tailwind CSS for efficient AI prompt management. Implemented robust CRUD functionalities for prompts, powered by MongoDB and secured with Google Authentication.",
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Promptify",
        liveUrl: "#",
        githubUrl: "https://github.com/CodeWithAyush2710/promptify"
    },
    {
        title: "Synaptic-AI",
        description: "An AI-powered suite of tools for tasks such as cold email generation and code review. Implemented a responsive frontend with React and a robust Node.js backend, integrating Google Gemini's AI services.",
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Synaptic-AI",
        liveUrl: null,
        githubUrl: "https://github.com/CodeWithAyush2710/Synaptics-AI"
    },
    {
        title: "Research-Paper-Analyzer",
        description: "Developed a Research Paper Analyzer using Python and an AI multi-agent framework (AutoGen) to automate the analysis and summarization of research papers from the arXiv API. Deployed with Streamlit.",
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Analyzer",
        liveUrl: null,
        githubUrl: "https://github.com/CodeWithAyush2710/Financial_Agentic_AI"
    },
];

export const achievements = [
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

export const responsibilities = [
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
