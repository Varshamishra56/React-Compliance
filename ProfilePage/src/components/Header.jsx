import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <nav>
      <div className="logo">Developer X</div>
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#eduexp">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact-me">Contact-me</a></li>
        <button type="button" id="Resume-Download">
          <a href="https://profile-gold-delta.vercel.app/VarshaResume.html" target="_blank">Resume</a>
        </button>
      </ul>
    </nav>
  </header>
);

export default Header;
