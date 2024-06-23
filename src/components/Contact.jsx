import React, { useState } from 'react';
import 'animate.css';
import emailjs from 'emailjs-com';
import './Style/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    to_name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_ahzwo8f';
    const templateID = 'template_giy5u7n';
    const userID = 'iJymSKnpDAJb-SWEg'; // Masukkan User ID EmailJS Anda di sini

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert('Email sent successfully!');
        setFormData({ from_name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('Failed to send email.');
      });
  };

  return (
    <section id="contact" className="contact">
      <h1 className="text-5xl font-bold">
        <span className="text-white">Get </span>
        <span className="text-orange">In Touch</span>
      </h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="from_name">Your Name:</label>
          <input type="text" id="from_name" name="from_name" value={formData.from_name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </section>
  );
};

export default Contact;
