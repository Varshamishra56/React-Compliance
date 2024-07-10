import React from 'react';
import './About.css';

const About = () => (
  <section className="specialisation" id="about">
    <h1>My <span>Specialisation</span></h1>
    <div className="services">
      <div className="service">
        <div className="icon">&#128187;</div>
        <h2>WEB DESIGN</h2>
        <p>
          Creating visually stunning and user-friendly websites tailored to
          meet client needs. Specializing in responsive design to ensure
          seamless user experiences across all devices.
        </p>
      </div>
      <div className="service">
        <div className="icon">&#128241;</div>
        <h2>Machine Learning Models</h2>
        <p>
          Developing robust machine learning models to analyze complex data
          and deliver predictive insights. Specializing in enhancing model
          accuracy and optimizing performance for real-world applications.
        </p>
      </div>
      <div className="service">
        <div className="icon">&#128142;</div>
        <h2>Data Analysis</h2>
        <p>
          Transforming raw data into actionable insights through meticulous
          analysis. Specializing in identifying trends, uncovering patterns,
          and driving data-driven decision-making.
        </p>
      </div>
    </div>
  </section>
);

export default About;
