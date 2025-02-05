import React from "react";
import { Link } from "react-router-dom";
import "./Style/Project.css";
import "animate.css";

const projects = [
  {
    id: 1,
    title: "IOT Fish Feeder",
    link: "/project/1",
    category: "IoT & ML",
  },
  {
    id: 2,
    title: "Notetify",
    link: "/project/2",
    category: "Web App",
  },
  {
    id: 3,
    title: "Fitmate",
    link: "/project/3",
    category: "Mobile & ML",
  },
  {
    id: 4,
    title: "Parkol",
    link: "/project/4",
    category: "IoT",
  },
  {
    id: 5,
    title: "FinGoal",
    link: "/project/5",
    category: "Mobile & ML",
  },
];

const Project = () => {
  return (
    <section id="project" className="project animate__animated animate__fadeIn">
      <h1 className="section-title" data-aos="fade-down">
        <span className="text-white">My </span>
        <span className="text-orange">Projects</span>
      </h1>

      <div className="project-container">
        {projects.map((project, index) => (
          <Link
            to={project.link}
            key={project.id}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h2 className="project-title">{project.title}</h2>
              <div className="project-hover">
                <span>View Details →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Project;
