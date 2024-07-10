import React from 'react';
import './Home.css';

const Home = () => (
  <section className="my-intro" id="Home">
    <div className="container">
      <div className="myhome">
        <h1>VARSHA MISHRA</h1>
        <h2 className="intro">
          Hi I'm <span className="typing" style={{ color: 'green' }}></span>
        </h2>
        <p data-aos="fade-up">
          Diving deep into the realms of coding and artificial intelligence,
          I'm on a quest to unravel complex puzzles and pioneer advancements
          in technology. I'm driven to forge new paths in the tech landscape
          and excited to shape the future through groundbreaking solutions.
          Let's embark on a journey of discovery and transformation together!
        </p>
      </div>
    </div>
    <div className="myphoto">
      <img src="https://profile-gold-delta.vercel.app/vyg.jpg" alt="varshaimage" />
      <div className="icons">
        <a href="https://github.com/Varshamishra56" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        <a href="www.linkedin.com/in/varsha-mishra-b23729252"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
    </div>
  </section>
);

export default Home;
