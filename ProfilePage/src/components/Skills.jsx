import React from 'react';
import './Skills.css';

const Skills = () => (
  <section id="skills">
    <h1>My <span>Skills</span></h1>
    <div className="skills-container">
      <div className="skill">
        <i className="fas fa-code"></i>
        <h2>Programming Languages</h2>
        <p>R, C, C++, Python, HTML, CSS</p>
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
      <div className="skill">
        <i className="fas fa-toolbox"></i>
        <h2>DevOps Tools</h2>
        <p>Docker, Kubernetes, Jenkins</p>
      </div>
      <div className="skill">
        <i className="fas fa-code-branch"></i>
        <h2>Version Control</h2>
        <p>Git</p>
      </div>
      <div className="skill">
        <i className="fas fa-chart-line"></i>
        <h2>Data Analysis</h2>
        <p>Pandas, NumPy, Matplotlib</p>
      </div>
    </div>
  </section>
);

export default Skills;
