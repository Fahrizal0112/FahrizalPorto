import React, { useState, useEffect } from 'react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canSendEmail, setCanSendEmail] = useState(true);
  const [timeUntilNextEmail, setTimeUntilNextEmail] = useState('');

  useEffect(() => {
    checkEmailTimeout();
    const interval = setInterval(checkEmailTimeout, 1000);
    return () => clearInterval(interval);
  }, []);

  const checkEmailTimeout = () => {
    const lastEmailTime = localStorage.getItem('lastEmailTime');
    if (lastEmailTime) {
      const nextEmailTime = new Date(parseInt(lastEmailTime) + 24 * 60 * 60 * 1000); // 24 jam
      const now = new Date();
      
      if (now < nextEmailTime) {
        setCanSendEmail(false);
        const timeLeft = nextEmailTime - now;
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        setTimeUntilNextEmail(`${hours} jam ${minutes} menit`);
      } else {
        setCanSendEmail(true);
        localStorage.removeItem('lastEmailTime');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSendEmail) {
      alert(`Mohon tunggu ${timeUntilNextEmail} untuk mengirim email lagi.`);
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceID = 'service_ahzwo8f';
      const templateID = 'template_giy5u7n';
      const userID = 'iJymSKnpDAJb-SWEg';

      await emailjs.send(serviceID, templateID, formData, userID);
      
      // Animasi sukses
      const form = e.target;
      form.classList.add('success');
      setTimeout(() => form.classList.remove('success'), 2000);

      alert('Email berhasil dikirim!');
      setFormData({ from_name: '', email: '', message: '' });
      localStorage.setItem('lastEmailTime', new Date().getTime().toString());
      setCanSendEmail(false);
    } catch (error) {
      alert('Gagal mengirim email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section animate__animated animate__fadeIn">
      <div className="contact-container" data-aos="fade-up">
        <h1 className="section-title">
          <span className="text-white">Get </span>
          <span className="text-orange">In Touch</span>
        </h1>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>muchamad.fachrizal12@gmail.com</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <h3>Phone</h3>
              <p></p>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Location</h3>
              <p></p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-left">
            <div className="form-group">
              <label htmlFor="from_name">
                <i className="fas fa-user"></i> Your Name
              </label>
              <input 
                type="text" 
                id="from_name" 
                name="from_name" 
                value={formData.from_name} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i> Your Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <i className="fas fa-comment"></i> Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`submit-button ${!canSendEmail ? 'disabled' : ''}`}
              disabled={isSubmitting || !canSendEmail}
            >
              {isSubmitting ? (
                <span className="loading-spinner">
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </span>
              ) : !canSendEmail ? (
                `Tunggu ${timeUntilNextEmail}`
              ) : (
                <><i className="fas fa-paper-plane"></i> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
