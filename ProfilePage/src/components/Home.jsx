import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const options = {
      strings: [
        "a Coder",
        "a Developer",
        "an AI Enthusiast",
        "a Tech Enthusiast",
        "a Problem Solver",
        "a Quick Learner",
      ],
      typeSpeed: 65,
      backSpeed: 65,
      loop: true,
    };

    const typed = new Typed(".typing", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home-section" id="Home">
      <div className="container">
        <div className="intro">
          <h1>Varsha Mishra</h1>
          <h2>
            Hi, I'm <span className="typing"></span>
          </h2>
          <p>
            Diving deep into the realms of coding and artificial intelligence, I'm on a quest to unravel complex puzzles and pioneer advancements in technology. Driven to forge new paths in the tech landscape and excited to shape the future through groundbreaking solutions. Let's embark on a journey of discovery and transformation together!
          </p>
          <a href="mailto:vm0222912@gmail.com" className="btn btn-primary">Download Resume</a>
        </div>
        <div className="profile-photo">
          <img src="https://profile-gold-delta.vercel.app/vyg.jpg" alt="Varsha Mishra" />
          <div className="social-icons">
            <a href="https://github.com/Varshamishra56" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/varsha-mishra-b23729252"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
