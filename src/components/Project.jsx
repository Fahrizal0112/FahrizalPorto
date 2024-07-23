import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Project.css';
import 'animate.css';

const projects = [
  {
    id: 1,
    title: 'IOT Fish Feeder',
    link: '/project/1.'
  },
  {
    id: 2,
    title: 'Notetify',
    link: '/project/2'
  },
  {
    id: 3,
    title: 'Fitmate',
    link: '/project/3'
  },
  {
    id: 4,
    title: 'Parkol',
    link: '/project/4'
  },
];

const Project = () => {
  return (
    <section id="project" className="project animate__animated animate__fadeIn">
      <h1 className="text-5xl font-bold">
        <span className="text-white">My </span>
        <span className="text-orange">Project</span>
      </h1>
      <br></br>
      <div className="project-container">
        {projects.map(project => (
          <Link to={project.link} key={project.id} className="project-box">
            <div className="project-content">
              <h2 className="project-title font-bold">{project.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Project;
