import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactMe.css';

const ContactMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <section className="contact-me" id="contact-me">
      <h1 data-aos="fade-up">Contact Me</h1>
      <form>
        <div className="form-group" data-aos="fade-up" data-aos-delay="100">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group" data-aos="fade-up" data-aos-delay="200">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group" data-aos="fade-up" data-aos-delay="300">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" data-aos="fade-up" data-aos-delay="400">Send Message</button>
      </form>
    </section>
  );
};

export default ContactMe;
