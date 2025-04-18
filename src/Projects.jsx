import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "TechnoWizzard",
      description: "The site you're on right now — built with React, Vite, and Vanta.js.",
      link: "/", // Local route
      internal: true,
    },
    {
      title: "Home Lab setup",
      description: "Detailed walkthrough of my current homelab setup",
      link: "/homelab", // Local route
      internal: true,
    },
    {
      title: "RetroMetro",
      description: "E-commerce website for retro video games and merchandise",
      link: "/retrometro", // Local route
      internal: true,
    },
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <p className="subtitle">A showcase of my work in web development & creative tech.</p>
      <div className="projects-grid">
        {projects.map((project, idx) =>
          project.internal ? (
            <Link
              key={idx}
              className="project-card"
              to={project.link}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Link>
          ) : (
            <a
              key={idx}
              className="project-card"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
