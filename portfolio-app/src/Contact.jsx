

import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    setSuccess("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <span className="text-gray">Get in touch</span>
      <h1>Contact Me</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Connect</h2>
          <p>If you have a project or questions, feel free to contact me.</p>

          <div className="contact-item">
            <div>
              <h3>Email</h3>
              <p>shivkate123@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div>
              <h3>Phone</h3>
              <p>+91 9076293525</p>
            </div>
          </div>

          <div className="contact-item">
            <div>
              <h3>Location</h3>
              <p>Mumbai, Maharashtra, India</p>
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <Link to="/" className="btn">
              Back to Home
            </Link>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

          {success && <p id="successMessage">{success}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;