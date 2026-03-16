import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css';
import useScrollAnimation from './useScrollAnimation';

const Contact = () => {
  const itemsRef = useScrollAnimation();
  const [state, handleSubmit] = useForm("xeerkovr");

  return (
    <section id="contact" className="contact-section">
      <div className="contact-tag fade-up" ref={(el) => (itemsRef.current[0] = el)}>
        Get In Touch
      </div>
      <h2 className="contact-heading fade-up" ref={(el) => (itemsRef.current[1] = el)}>
        Contact Us
      </h2>
      <p className="contact-intro fade-up" ref={(el) => (itemsRef.current[2] = el)}>
        Have a question or want to schedule a meeting? We'd love to hear from you.
      </p>
      <div className="contact-wrapper">
        <div className="contact-info fade-left" ref={(el) => (itemsRef.current[3] = el)}>
          <div className="contact-info-item">
            <div>
              <h4>Registered Office</h4>
              <p>
                <a 
                  href="https://www.google.com/maps/search/408,+Times+Square+Arcade-1,+Near+Ravija+Plaza,+Opposite+Rambag,+Thaltej,+Shilaj,+Ahmedabad,+Gujarat+380059" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', fontStyle: 'italic' }}
                  className="address-link"
                >
                  408, Times Square Arcade-1, Near Ravija Plaza,<br />
                  Opposite Rambag, Thaltej, Shilaj,<br />
                  Ahmedabad, Gujarat – 380059
                </a>
              </p>
            </div>
          </div>
          <div className="contact-info-item">
            <div>
              <h4>Phone</h4>
              <p>+91 9825279602 (Mansi Shah)</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div>
              <h4>Email</h4>
              <p>Aarvi_ms@yahoo.co.in</p>
            </div>
          </div>
          <div className="contact-info-item">
            <div>
              <h4>Working Hours</h4>
              <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper fade-right" ref={(el) => (itemsRef.current[4] = el)}>
          {state.succeeded ? (
            <div className="form-success-box">
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" name="name" placeholder="Your name" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" type="tel" name="phone" placeholder="+91 XXXXXXXXXX" required />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" placeholder="your@email.com" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="Market Securities & SIP">Market Securities & SIP</option>
                  <option value="Fixed Income & Bonds">Fixed Income & Bonds</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Portfolio Review">Portfolio Review</option>
                  <option value="NRI Services">NRI Services</option>
                  <option value="SIF">SIF</option>
                  <option value="Other">Other</option>
                </select>
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button type="submit" className="contact-submit" disabled={state.submitting}>
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;