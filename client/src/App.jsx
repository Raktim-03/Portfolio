const sampleProjects = [
  {
    title: "Project One",
    description: "A scalable web app with clean architecture and smooth UX.",
    stack: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Project Two",
    description: "Data-driven dashboard with reusable components and API integration.",
    stack: ["Express", "Charting", "JWT"]
  }
];

export default function App() {
  return (
    <div className="page">
      <header className="hero glass">
        <p className="eyebrow">Available for work</p>
        <h1>Your Name — Full-Stack MERN Developer</h1>
        <p>
          I build delightful, high-performance digital products with modern design and robust backend systems.
        </p>
        <div className="actions">
          <button>Download Resume</button>
          <button className="secondary">Contact Me</button>
        </div>
      </header>

      <section className="section glass">
        <h2>About</h2>
        <p>
          Replace this text with your professional summary. Highlight your expertise, years of experience,
          and what kind of products you love building.
        </p>
      </section>

      <section className="section">
        <h2>Featured Projects</h2>
        <div className="grid">
          {sampleProjects.map((project) => (
            <article key={project.title} className="card glass">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section glass">
        <h2>Skills</h2>
        <p>React • Node.js • Express • MongoDB • TypeScript • Docker • CI/CD</p>
      </section>

      <footer className="section footer">
        <h2>Let’s build something great.</h2>
        <p>email@example.com • linkedin.com/in/username • github.com/username</p>
      </footer>
    </div>
  );
}
