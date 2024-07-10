import React from 'react';
import './Skills.css';

const Skills = () => (
  <section id="skills">
    <h1>My <span>Skills</span></h1>
    <div className="container">
      <div className="skill">
        <i className="fas fa-code"></i>
        <h2>Programming Languages</h2>
        <p>C++, Java, Python, JavaScript</p>
      </div>
      <div className="skill">
        <i className="fas fa-database"></i>
        <h2>Database Management</h2>
        <p>MySQL, PostgreSQL, MongoDB</p>
      </div>
      <div className="skill">
        <i className="fas fa-brain"></i>
        <h2>Machine Learning</h2>
        <p>Scikit-learn, TensorFlow, Keras, PyTorch</p>
      </div>
      <div className="skill">
        <i className="fas fa-laptop-code"></i>
        <h2>Web Development</h2>
        <p>HTML, CSS, JavaScript, React, Node.js</p>
      </div>
    </div>
  </section>
);

export default Skills;
