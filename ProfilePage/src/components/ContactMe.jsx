import React from 'react';
import './ContactMe.css';

const ContactMe = () => (
  <section className="contact-me" id="contact-me">
    <h1>Contact Me</h1>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default ContactMe;
