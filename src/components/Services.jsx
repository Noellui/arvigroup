import React from 'react';
import '../styles/Services.css';
import useScrollAnimation from './useScrollAnimation';

const services = [
  {
    icon: '📈',
    title: 'Market Securities',
    description:
      'Sophisticated Mutual Fund distribution and SIP management tailored to build long-term, systematic wealth compounding for every client.',
  },
  {
    icon: '🏦',
    title: 'Fixed Income & Safety',
    description:
      'Corporate Fixed Deposits and Government/Private Bonds for capital preservation — stable, predictable returns with minimal risk.',
  },
  {
    icon: '🛡️',
    title: 'Risk Mitigation',
    description:
      'Comprehensive Insurance solutions including Life & Health coverage to protect your family legacy against unforeseen financial risks.',
  },
  {
    icon: '📊',
    title: 'Data-Driven Insights',
    description:
      'Leveraging our analytical roots to provide objective, data-led portfolio reviews that optimize risk-return balance and ensure goal alignment.',
  },
  {
    icon: '🌟',
    title: 'SIF',
    description:
      'Specialised Investment Fund solutions designed for high-conviction strategies and sophisticated investors seeking targeted exposure.',
  },
  {
    icon: '🌍',
    title: 'NRI Services',
    description:
      'Specialised investment solutions for Non-Resident Indians looking to invest and manage wealth back home with ease and compliance.',
  },
];

const Services = () => {
  const itemsRef = useScrollAnimation();

  return (
    <section id="services" className="services-section">
      <div className="services-tag fade-up" ref={(el) => (itemsRef.current[0] = el)}>
        What We Offer
      </div>
      <h2 className="services-heading fade-up" ref={(el) => (itemsRef.current[1] = el)}>
        Our Services
      </h2>
      <p className="services-intro fade-up" ref={(el) => (itemsRef.current[2] = el)}>
        Our investment planning process integrates all aspects of your financial life —
        data-driven precision meets traditional wealth stewardship to address your
        unique wealth management requirements.
      </p>
      <div className="services-grid">
        {services.map((service, i) => (
          <div
            key={i}
            className="service-card fade-up"
            ref={(el) => (itemsRef.current[3 + i] = el)}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="how-we-work fade-up" ref={(el) => (itemsRef.current[10] = el)}>
        <h2 className="hww-heading">How We Work With You</h2>
        <p className="hww-sub">
          We assess your needs, analyse your data, and build a precision plan around you.
        </p>
        <div className="hww-steps">
          {[
            { step: '01', label: 'Schedule a Meeting' },
            { step: '02', label: 'Understand Your Needs' },
            { step: '03', label: 'Data Analysis & Planning' },
            { step: '04', label: 'Invest' },
            { step: '05', label: 'Periodic Review' },
          ].map((item, i) => (
            <div key={i} className="hww-step">
              <div className="hww-step-number">{item.step}</div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;