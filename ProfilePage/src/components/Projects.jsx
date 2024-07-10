import React from 'react';
import './Projects.css';

const Projects = () => (
  <section className="projects" id="projects">
    <h1>Projects</h1>
    <div className="project-list">
      <div className="project">
        <h3>Project 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.</p>
        <a href="#">View Project</a>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.</p>
        <a href="#">View Project</a>
      </div>
      <div className="project">
        <h3>Project 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.</p>
        <a href="#">View Project</a>
      </div>
    </div>
  </section>
);

export default Projects;
