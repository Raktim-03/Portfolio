import { FaPercentage } from "react-icons/fa";

export const personalInfo = {
  name: "Raktim Ranjan Handique",
  title: "Full Stack Developer | AI/ML Enthusiast | CSE Student",
  description:
    "Computer Science student at Tezpur University building scalable web applications and AI-driven solutions for real-world problems.",

     education: [
    {
      degree: "B.Tech Computer Science and Engineering",
      institution: "Tezpur University",
      year: "2023 - Present",
      cgpa: "7.04 (up to 5th semester)"
      
    },
    {
      degree: "Class 12 (Higher Secondary)",
      institution: "Salt Brook Academy, Dibruagarh",
      year: "2020-22",
      percentage : "86.4%"
    },
    {
      degree: "Schooling",
      institution: "Shankardev Shishu Niketan, Bordoloni",
      year: "2008-20",
      percentage : "95.6%"
    }
  ]
};

export const projects = [
  {
    title: "AI-Powered Chatbot for IOCL Queries",
    description:
      "Built an AI chatbot using FastAPI and NLP (NLTK) to automate internal query handling.",
    stack: ["Python", "FastAPI", "NLTK", "JavaScript"],
    github: "https://github.com/Raktim-03/IOCL_Chatbot.git"
  },
  {
    title: "K-Means Image Segmentation Web App",
    description:
      "Developed a Streamlit app for image segmentation using K-Means clustering.",
    stack: ["Python", "Streamlit", "Scikit-learn"],
    github: "https://github.com/Raktim-03/KMeans-image-segmentation.git",
    live: "https://kmeans-image-segmentation-app.streamlit.app/"
  },
  {
    title: "Attendance Manager Web App",
    description:
      "Created a responsive attendance tracker with real-time calculations using localStorage.",
    stack: ["JavaScript", "HTML", "CSS","LocalStorage"],
    github: "https://github.com/Raktim-03/Attendance-Manager.git",
    live: "https://raktim-03.github.io/Attendance-Manager/"
  },
  {
      title: "JPMC SDE Job Simulation", 
    description:
      "Built a Spring Boot microservice integrating Apache Kafka for real-time transaction processing.",
    stack: ["Java", "SpringBoot", "Kafka","Maven","H2"], 
    github: "https://github.com/Raktim-03/forage-midas.git",
 
  }

];

export const skills = {
  languages: ["C", "C++", "Python", "JavaScript"],
  frontend: ["React", "HTML5", "CSS3"],
  backend: ["Node.js", "Express"],
  databases: ["MongoDB", "MySQL"],
  tools: ["Git", "GitHub"],
  ai_ml: ["NumPy", "Matplotlib", "NLP (NLTK)"],
  others: ["Flutter", "Streamlit",]
};

export const experience = [
  {
    role: "AI Chatbot Developer (Winter Intern)",
    company: "Indian Oil Corporation Limited (IOCL), Guwahati",
    duration: "Jan 2026 (1 month)",
    points: [
      "Developed an NLP-based chatbot using Flask and NLTK",
      "Automated internal query handling system",
      "Improved response efficiency and usability"
    ],
    certificate: "/iocl.pdf" 
  },
  {
    role: "Software Engineering Job Simulation",
    company: "JPMorgan Chase & Co.",
    duration: "March 2026",
    points: [
      "Completed real-world software engineering tasks",
      "Worked on problem-solving and system design scenarios",
      "Gained practical exposure to industry-level workflows"
    ],
    certificate: "/jpmc.pdf" 
  }
];