import React, { memo, useMemo } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css';
import useScrollAnimation from './useScrollAnimation';

// Map is memoized so it never re-renders on parent state changes
const OfficeMap = memo(() => (
  <iframe
    title="Aarvi Office Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2876299328473!2d72.49856687616261!3d23.04991427915463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84bab9fd71cf%3A0xa2faff5944f8f0d!2sAarvi%20Data%20analytics%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1773777705357!5m2!1sen!2sin"
    width="100%"
    height="340"
    style={{ border: 0, borderRadius: '16px', display: 'block' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
));

OfficeMap.displayName = 'OfficeMap';

const Contact = () => {
  const itemsRef = useScrollAnimation();
  const [state, handleSubmit] = useForm("xeerkovr");

  // Memoize the map wrapper so the ref callback doesn't cause re-renders
  const mapSection = useMemo(() => (
    <div className="contact-map">
      <OfficeMap />
    </div>
  ), []);

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

      {/* Memoized map — never re-renders */}
      <div className="fade-up" ref={(el) => (itemsRef.current[5] = el)}>
        {mapSection}
      </div>
    </section>
  );
};

export default Contact;