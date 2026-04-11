import { personalInfo, projects, skills, experience } from "./data/portfoliodata";

import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiCplusplus, SiC, SiGithub } from "react-icons/si";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function App() {
const skillIcons = {
  Python: <FaPython />,
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  Git: <FaGitAlt />,
  GitHub: <SiGithub />,
  C: <SiC />,
  "C++": <SiCplusplus />,
};

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_a8id0va",
    "template_k2j6y19",
    form.current,
    "0hIzkk_X0VhaApbMG"
  )
  .then(() => {
    alert("Message sent successfully");
  })
  .catch((error) => {
    console.log(error);
    alert("Failed to send ❌");
  });

  e.target.reset();
};

return (
  <div className="page">

<header className="hero glass">
  <div className="hero-content">
    
    <div className="hero-text">
      <p className="eyebrow">Available for work</p>
      <h1>Raktim Ranjan Handique</h1>
      <p>
        Full Stack Developer | AI/ML Enthusiast | Building Scalable Web Applications
      </p>

      <div className="actions">
        <a href="/Resume.pdf" className="btn">
          <button>Download Resume</button>
        </a>

        <a href="mailto:raktimrhandique@gmail.com" className="btn">
          <button>Contact Me</button>
        </a>
      </div>
    </div>

    <div className="hero-image">
      <img src="/profile.png" alt="Raktim" />
    </div>

  </div>
</header>

<section className="section glass">
  <h2>About</h2>
  <p>
    Computer Science student at{" "}
    <a 
      href="https://www.tezu.ernet.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="link"
    >
      Tezpur University
    </a>{" "}
    building scalable web applications and AI-driven solutions for real-world problems.
  </p>

  <div className="education">
    <h3>Education</h3>

    <div className="edu-cards">
      {personalInfo.education.map((edu, index) => (
        <div key={index} className="edu-card">
          <h4>{edu.degree}</h4>
          <p>{edu.institution}</p>
          <span>{edu.year}</span>

          {edu.cgpa && (
            <p className="edu-extra">CGPA: {edu.cgpa}</p>
          )}

          {edu.percentage && (
            <p className="edu-extra">Percentage: {edu.percentage}</p>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

<section className="section">
  <h2>Featured Projects</h2>
  <div className="grid">
    {projects.map((project) => (
      <article key={project.title} className="card glass">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" className="btn small">
              GitHub
            </a>
          )}

          {project.live && (
            <a href={project.live} target="_blank" className="btn small">
              Live
            </a>
          )}
        </div>
      </article>
    ))}
  </div>
</section>

<section className="section glass">
  <h2>Experience</h2>

  <div className="exp-cards">
    {experience.map((exp, index) => (
      <div key={index} className="exp-card">
        <h3>{exp.role}</h3>
        <p className="company">{exp.company}</p>
        <span className="duration">{exp.duration}</span>

        <ul>
          {exp.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        {exp.certificate && (
          <a href={exp.certificate} target="_blank" className="btn small">
            View Certificate
          </a>
        )}
      </div>
    ))}
  </div>
</section>

<section className="section glass">
  <h2>Skills</h2>

  <div className="skills-container">

    <div>
      <h3>Languages</h3>
      <p>
        {skills.languages.map((skill) => (
          <span key={skill}>
            {skillIcons[skill]}
            {skill}
          </span>
        ))}
      </p>
    </div>

    <div>
      <h3>Frontend</h3>
      <p>
        {skills.frontend.map((skill) => (
          <span key={skill}>
            {skillIcons[skill]}
            {skill}
          </span>
        ))}
      </p>
    </div>

    <div>
      <h3>Backend</h3>
      <p>
        {skills.backend.map((skill) => (
          <span key={skill}>
            {skillIcons[skill]}
            {skill}
          </span>
        ))}
      </p>
    </div>

    <div>
      <h3>Databases</h3>
      <p>
        {skills.databases.map((skill) => (
          <span key={skill}>
            {skillIcons[skill]}
            {skill}
          </span>
        ))}
      </p>
    </div>

    <div>
      <h3>Tools</h3>
      <p>
        {skills.tools.map((skill) => (
          <span key={skill}>
            {skillIcons[skill]}
            {skill}
          </span>
        ))}
      </p>
    </div>

    <div>
      <h3>AI / ML</h3>
      <p>
        {skills.ai_ml.map((skill) => (
          <span key={skill}>
            {skillIcons[skill]}
            {skill}
          </span>
        ))}
      </p>
    </div>

    <div>
      <h3>Others</h3>
      <p>
        {skills.others.map((skill) => (
          <span key={skill}>
            {skillIcons[skill]}
            {skill}
          </span>
        ))}
      </p>
    </div>

  </div>
</section>

<section className="section glass">
  <h2>Contact Me</h2>

  <div className="contact-container">

    <div className="contact-info">
      <p>
        <strong>Phone:</strong>{" "}
        <a href="tel:+917099541522">+91 70995 41522</a>
      </p>

      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:raktimrhandique@gmail.com">
          raktimrhandique@gmail.com
        </a>
      </p>

      <p>
        <strong>Address:</strong>{" "}
        <a 
          href="https://www.google.com/maps?q=Tezpur+University"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tezpur University, Napaam 784028(Assam)
        </a>
      </p>

      <div className="social-links">
        <a href="https://github.com/Raktim-03" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/raktimhandique" target="_blank">LinkedIn</a>
        <a href="https://www.instagram.com/raktim__mmm/" target="_blank">Instagram</a>
      </div>
    </div>

    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>

  </div>
</section>

<footer className="section footer">
  <h2>Let’s build something great.</h2>

  <p>
    raktimrhandique@gmail.com • 
    linkedin.com/in/raktimhandique • 
    github.com/Raktim-03
  </p>

  <p className="copyright">
    © {new Date().getFullYear()} Raktim Ranjan Handique. All rights reserved.
  </p>
</footer>

  </div>
);
}