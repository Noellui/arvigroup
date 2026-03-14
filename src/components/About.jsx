import React from 'react';
import '../styles/About.css';
import useScrollAnimation from './useScrollAnimation';
import useCounter from './useCounter';

const reviews = [
  {
    text: "Aarvi provides great service. The team is professional, easy to work with, and they get the job done right.",
    author: "Anil Shah",
  },
  {
    text: "Aarvi provides exceptional expertise and integrity, serving as a reliable partner for my financial growth.",
    author: "Bharat R Shah",
  },
  {
    text: "Aarvi is a beacon of trustworthiness and expertise. I wholeheartedly recommend them to anyone seeking not just financial advice, but a true partner in building and safeguarding their wealth.",
    author: "Kirti R Patel",
  },
  {
    text: "If you're seeking a partner to navigate the complexities of wealth management, I wholeheartedly recommend Aarvi. Their integrity, expertise, and personalized approach make them a standout choice.",
    author: "Mukesh Saraff",
  },
];

const StatItem = ({ value, label, suffix = '' }) => {
  const { count, ref } = useCounter(value);
  return (
    <div className="stat-item" ref={ref}>
      <h3><span className="stat-number">{count}</span>{suffix}</h3>
      <p>{label}</p>
    </div>
  );
};

const About = () => {
  const itemsRef = useScrollAnimation();

  return (
    <section id="about" className="about-section">

      <div className="about-tag fade-up" ref={(el) => (itemsRef.current[0] = el)}>Who We Are</div>
      <h2 className="about-heading fade-up" ref={(el) => (itemsRef.current[1] = el)}>
        About Aarvi Data Analytics Services
      </h2>
      <p className="about-intro fade-up" ref={(el) => (itemsRef.current[2] = el)}>
        Founded in 2015, Aarvi Data Analytics Services was built on the principle that wealth is
        preserved through clarity and grown through discipline. For over a decade, we have navigated
        the complexities of the financial landscape for more than 700 families and individuals.
        We do not chase trends; we analyse data to build enduring legacies.
      </p>

      <div className="about-cards">
        <div className="about-card fade-left" ref={(el) => (itemsRef.current[3] = el)}>
          <div className="about-card-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To be the essential partner in your financial life. We build your financial future on a
            foundation of complete transparency and strategic, customized distribution methods.
            Every recommendation we make is focused on strengthening your financial stability for the long term.
          </p>
        </div>
        <div className="about-card fade-right" ref={(el) => (itemsRef.current[4] = el)}>
          <div className="about-card-icon">🔭</div>
          <h3>Our Vision</h3>
          <p>
            We aspire to a future where every client experiences total financial clarity. Our goal is
            to provide a foundation so robust that it transforms every life goal into an achievable
            reality, ensuring you have the enduring stability needed to navigate an ever-changing world.
          </p>
        </div>
      </div>

      <div className="about-stats">
        <StatItem value={700} suffix="+" label="Private Clients & Families" />
        <StatItem value={10} suffix="+" label="Years of Experience" />
        <div className="stat-item">
          <h3>250Cr+</h3>
          <p>Assets Under Management</p>
        </div>
      </div>

      {/* Reviews in own padded wrapper so no invisible fade-up gap */}
      <div className="reviews-section">
        <div className="about-tag fade-up" ref={(el) => (itemsRef.current[5] = el)}>
          What Our Clients Say
        </div>
        <h2 className="about-heading fade-up" ref={(el) => (itemsRef.current[6] = el)}>
          Client Reviews
        </h2>
        <div className="reviews-grid">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="review-bubble fade-up"
              ref={(el) => (itemsRef.current[7 + i] = el)}
            >
              <div className="review-quote">❝</div>
              <p className="review-text">{review.text}</p>
              <div className="review-author">— {review.author}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;