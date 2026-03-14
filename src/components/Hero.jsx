import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const slides = [
  {
    title: "Your Partner in Financial Clarity and Growth",
    subtitle: "Data-driven precision meets traditional wealth stewardship — serving 700+ families since 2015.",
    image: "/slide1.jpg",
  },
  {
    title: "Invest Smart. Build an Enduring Legacy.",
    subtitle: "Mutual Funds, SIP, Fixed Income, Insurance & Portfolio Insights — all under one roof.",
    image: "/slide2.jpg",
  },
  {
    title: "Where Every Decision is Data-Driven.",
    subtitle: "Our boardroom is where strategy meets discipline — tailored for your financial future.",
    image: "/slide3.jpg",
  },
  {
    title: "Your Goals. Our Data. Your Future.",
    subtitle: "We don't chase trends. We analyse data to build wealth that lasts generations.",
    image: "/slide4.jpg",
  },
];

const AnimatedTitle = ({ title }) => {
  const words = title.split(' ');
  return (
    <h1 className="hero-title">
      {words.map((word, i) => (
        <span
          key={i}
          className="word"
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          {word}{i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </h1>
  );
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setKey((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-bg ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
      <div className="hero-overlay" />
      <div className="hero-content" key={key}>
        <AnimatedTitle title={slides[current].title} />
        <p className="hero-subtitle">{slides[current].subtitle}</p>
        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule a Meeting
          </button>
          <button
            className="btn-secondary"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="hero-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => { setCurrent(i); setKey((p) => p + 1); }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;