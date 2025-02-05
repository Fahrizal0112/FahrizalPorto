import React, { useState, useEffect } from "react";
import "animate.css";
import emailjs from "emailjs-com";
import "./Style/Contact.css";
import { sha256 } from "crypto-js";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canSendEmail, setCanSendEmail] = useState(true);
  const [timeUntilNextEmail, setTimeUntilNextEmail] = useState("");
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    checkEmailTimeout();
    checkAttempts();
    const interval = setInterval(checkEmailTimeout, 1000);
    return () => clearInterval(interval);
  }, []);

  const checkAttempts = () => {
    const savedAttempts = localStorage.getItem("emailAttempts");
    const lastAttemptDate = localStorage.getItem("lastAttemptDate");

    if (savedAttempts && lastAttemptDate) {
      const today = new Date().toDateString();
      if (today === lastAttemptDate) {
        setAttempts(parseInt(savedAttempts));
        if (parseInt(savedAttempts) >= 3) {
          setCanSendEmail(false);
          setTimeUntilNextEmail("besok");
        }
      } else {
        localStorage.setItem("emailAttempts", "0");
        localStorage.setItem("lastAttemptDate", today);
        setAttempts(0);
      }
    }
  };

  const generateEmailHash = (email) => {
    return sha256(email.toLowerCase().trim()).toString();
  };

  const checkEmailTimeout = () => {
    const lastEmailTime = localStorage.getItem("lastEmailTime");
    const emailHash = localStorage.getItem("emailHash");
    const currentEmailHash = formData.email
      ? generateEmailHash(formData.email)
      : null;

    if (lastEmailTime && emailHash === currentEmailHash) {
      const nextEmailTime = new Date(
        parseInt(lastEmailTime) + 24 * 60 * 60 * 1000
      );
      const now = new Date();

      if (now < nextEmailTime) {
        setCanSendEmail(false);
        const timeLeft = nextEmailTime - now;
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        setTimeUntilNextEmail(`${hours} jam ${minutes} menit`);
      } else {
        setCanSendEmail(true);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    try {
      const currentAttempts = parseInt(
        localStorage.getItem("emailAttempts") || "0"
      );
      if (currentAttempts >= 3) {
        alert(
          "Anda telah mencapai batas pengiriman email untuk hari ini. Silakan coba lagi besok."
        );
        return;
      }

      const lastEmailTime = localStorage.getItem("lastEmailTime");
      const emailHash = localStorage.getItem("emailHash");
      const currentEmailHash = generateEmailHash(formData.email);

      if (lastEmailTime && emailHash === currentEmailHash) {
        const nextEmailTime = new Date(
          parseInt(lastEmailTime) + 24 * 60 * 60 * 1000
        );
        const now = new Date();

        if (now < nextEmailTime) {
          const timeLeft = nextEmailTime - now;
          const hours = Math.floor(timeLeft / (1000 * 60 * 60));
          const minutes = Math.floor(
            (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
          );
          alert(
            `Mohon tunggu ${hours} jam ${minutes} menit untuk mengirim email lagi.`
          );
          return;
        }
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert("Format email tidak valid");
        return;
      }

      setIsSubmitting(true);

      const serviceID = "service_ahzwo8f";
      const templateID = "template_giy5u7n";
      const userID = "iJymSKnpDAJb-SWEg";

      const response = await emailjs.send(
        serviceID,
        templateID,
        formData,
        userID
      );

      if (response.status === 200) {
        const newAttempts = currentAttempts + 1;
        localStorage.setItem("emailAttempts", newAttempts.toString());
        localStorage.setItem("lastAttemptDate", new Date().toDateString());

        localStorage.setItem("emailHash", currentEmailHash);
        localStorage.setItem("lastEmailTime", new Date().getTime().toString());

        const form = e.target;
        form.classList.add("success");
        setTimeout(() => form.classList.remove("success"), 2000);

        setFormData({ from_name: "", email: "", message: "" });
        setCanSendEmail(false);
        alert("Email berhasil dikirim!");
      } else {
        throw new Error("Gagal mengirim email");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Gagal mengirim email. Silakan coba lagi nanti.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="contact-section animate__animated animate__fadeIn"
    >
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

          <form
            onSubmit={handleSubmit}
            className="contact-form"
            data-aos="fade-left"
          >
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
              className={`submit-button ${!canSendEmail ? "disabled" : ""}`}
              disabled={isSubmitting || !canSendEmail}
            >
              {isSubmitting ? (
                <span className="loading-spinner">
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </span>
              ) : !canSendEmail ? (
                `Tunggu ${timeUntilNextEmail}`
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
