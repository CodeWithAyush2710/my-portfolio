import { Code, Server, Briefcase, GraduationCap, Award, Users } from 'lucide-react';

export const user = {
    name: "Ayush Srivastava",
    title: "Software Developer",
    summary: "B.Tech student in Information Technology with strong foundations in programming and data structures. Builds scalable systems and intelligent applications, and enjoys applying AI and automation to solve meaningful real-world problems.",
    email: "sriayush2710@gmail.com",
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
        role: "Software Developer Intern",
        company: "Swatrixsoft",
        period: "August 2025 - September 2025",
        description: [
            "Contributed to developing and optimizing backend APIs using Node.js and Express.js for internal SaaS platforms.",
            "Collaborated with frontend teams to integrate responsive React.js components and ensure API scalability.",
            "Enhanced data storage and retrieval efficiency by optimizing MongoDB queries and schema design.",
        ],
        icon: <Briefcase />
    },
    {
        role: "Frontend Developer Trainee",
        company: "IBM (CSR-BOX)",
        period: "June 2024 - August 2024",
        description: [
            "Collaborated with the Frontend Team to develop and enhance key features of the website using HTML, CSS, JavaScript, and ReactJs.",
            "Contributed to the development of a sustainable model aimed at creating a network, improving community engagement.",
        ],
        icon: <Briefcase />
    },

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
        title: "Talent-IQ-Master",
        description: "A collaborative technical interview platform using React.js and Node.js, featuring a custom VSCode-powered editor (Monaco) for real-time coding. Integrated Stream SDK to enable low-latency 1-on-1 video conferencing, screen sharing, and synchronized chat, replicating a professional interview environment.",
        tech: "React.js, Node.js, Express.js, Stream SDK, MongoDB, Tailwind CSS",
        image: "/Talent-IQ_master.png",
        liveUrl: "https://talent-iq-master.vercel.app/",
        githubUrl: "https://github.com/CodeWithAyush2710/talent-IQ-master"
    },
    {
        title: "Research-Hub-AI",
        description: "A Research Paper Analyzer using Python and an AI multi-agent framework (AutoGen) to automate the analysis and summarization of research papers from the arXiv API.",
        tech: "Python, AutoGen, arXiv API",
        image: "/Research-Hub-AI.png",
        liveUrl: "https://research-hub-ai.vercel.app/",
        githubUrl: "https://github.com/CodeWithAyush2710/Research-Hub-AI/"
    },
    {
        title: "Synaptic-AI",
        description: "An AI-powered suite of tools for tasks such as cold email generation and code review. Implemented a responsive frontend with React and a robust Node.js backend, integrating Google Gemini's AI services.",
        tech: "React.js, Node.js, Express.js, Google Gemini API",
        image: "/Synaptic-AI.png",
        liveUrl: "https://synaptics-ai-frontend.vercel.app/",
        githubUrl: "https://github.com/CodeWithAyush2710/Synaptics-AI/"
    },
    {
        title: "Resilient-Large-File-Uploader",
        description: "This project implements a robust, resumable file upload system designed to handle large files (ZIP archives) with resilience against network interruptions.",
        tech: "React.js, Node.js, Express.js, PostgreSQL, Docker",
        image: "/File-Uploader.png",
        liveUrl: null,
        githubUrl: "https://github.com/CodeWithAyush2710/Resilient-Large-File-Uploader/"
    },
    {
        title: "Promptify",
        description: "A full-stack web application for efficient AI prompt management using Next.js, React, and Tailwind CSS. Implemented robust CRUD functionalities for prompts, powered by MongoDB and secured with Google Authentication.",
        tech: "Next.js, React.js, Tailwind CSS, MongoDB, Google Auth",
        image: "/Promptify.png",
        liveUrl: "https://promptify-kohl.vercel.app/",
        githubUrl: "https://github.com/CodeWithAyush2710/promptify/"
    },
];

// export const achievements = [
//     {
//         title: "Girl-Script Summer of Code (GSSOC) 2024",
//         description: "Actively contributed to enhancing open-source projects.",
//         icon: <Award />
//     },
//     {
//         title: "BVP-GDSC Hackathon 2024",
//         description: "Participated in the hackathon, developing innovative solutions.",
//         icon: <Award />
//     }
// ];

// export const responsibilities = [
//     {
//         role: "Vice-head, Content Writing",
//         organization: "BVP-Horizon",
//         period: "Oct 2023 - June 2025",
//         description: "Managing and organizing events while leading a team of 10-15 members.",
//         icon: <Users />
//     },
//     {
//         role: "Executive, Outreach Department",
//         organization: "BVP-Code Chef",
//         period: "Oct 2023 - June 2025",
//         description: "Responsible for event publicity and community engagement.",
//         icon: <Users />
//     }
// ];
