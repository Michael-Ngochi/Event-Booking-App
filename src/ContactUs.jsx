import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    alert("Your message has been sent!");
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
      Reach out to us for inquiries, support, or to request a custom quote for premium event services.
      </p>

      {isSubmitted && (
        <div className="success-message">
          <p>Thank you for your message! We will get back to you soon.</p>
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="contact-input"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="contact-input"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Your Message"
          className="contact-textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>

      <div className="contact-info">
        <p className="contact-info-item">
          <strong>Email:</strong> support@eventify.com
        </p>
        <p className="contact-info-item">
          <strong>Phone:</strong> +254 7123456 <br /> 
        </p>
        <p className="contact-info-item">
          <strong>Location:</strong>  Mikizini Street, Nairobi, Kenya
        </p>
      </div>

      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img
            src="/assets/icons/facebook.png"
            alt="Facebook"
            className="icon-img"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <img
            src="/assets/icons/twitter.png"
            alt="Twitter"
            className="icon-img"
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img
            src="/assets/icons/instagram.png"
            alt="Instagram"
            className="icon-img"
          />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <img
            src="/assets/icons/linkedin.png"
            alt="LinkedIn"
            className="icon-img"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
