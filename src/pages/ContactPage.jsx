// src/pages/ContactPage.jsx
import { useState } from 'react';
import '../App.css';

function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert('Please fill all fields!');
      return;
    }
    alert('✅ Your message has been sent! We will get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">📧 Contact Us</h1>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-card">
              <span className="info-icon">📍</span>
              <h4>Address</h4>
              <p>123 Education Street,<br />Lahore, Pakistan</p>
            </div>
            <div className="info-card">
              <span className="info-icon">📞</span>
              <h4>Phone</h4>
              <p>+92 300 1234567</p>
            </div>
            <div className="info-card">
              <span className="info-icon">📧</span>
              <h4>Email</h4>
              <p>info@studentportal.com</p>
            </div>
            <div className="info-card">
              <span className="info-icon">🕐</span>
              <h4>Working Hours</h4>
              <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send us a message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={contactForm.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={contactForm.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  value={contactForm.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="btn-submit">
                📤 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;