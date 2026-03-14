import React, { useState, useEffect } from 'react';
import '../styles/Services.css';
import useScrollAnimation from './useScrollAnimation';
import TiltCard from './TiltCard';

const services = [
  {
    title: 'Market Securities',
    description:
      'Sophisticated Mutual Fund distribution and SIP management tailored to build long-term, systematic wealth compounding for every client.',
    fullDetails: 'We leverage deep market research to select high-conviction mutual funds and design structured SIPs. Our goal is to ensure your portfolio efficiently compounds over time while mitigating downside volatility. We provide periodic rebalancing based on market cycles and your shifting financial horizons, ensuring that your core investments remain aligned with your long-term wealth objectives.',
  },
  {
    title: 'Fixed Income & Safety',
    description:
      'Corporate Fixed Deposits and Government/Private Bonds for capital preservation — stable, predictable returns with minimal risk.',
    fullDetails: 'For investors seeking capital preservation, we curate a portfolio of high-grade Corporate Fixed Deposits, Government Bonds, and top-tier Private Bonds. This approach locks in predictable, secure returns that act as a stabilizing anchor for your broader portfolio, shielding your wealth during periods of high equity market turbulence.',
  },
  {
    title: 'Risk Mitigation',
    description:
      'Comprehensive Insurance solutions including Life & Health coverage to protect your family legacy against unforeseen financial risks.',
    fullDetails: 'Wealth creation means nothing without wealth protection. We conduct a thorough analysis of your human life value and health contingencies to recommend optimal Term Life and Comprehensive Health insurance covers. This mathematically ensures that your family\'s financial legacy remains completely insulated against unforeseen medical emergencies or tragedies.',
  },
  {
    title: 'Data-Driven Insights',
    description:
      'Leveraging our analytical roots to provide objective, data-led portfolio reviews that optimize risk-return balance and ensure goal alignment.',
    fullDetails: 'Embracing our "Aarvi Data Analytics" heritage, we utilize advanced quantitative tools to break down your existing investments. We strip away emotional bias and analyze overlapping allocations, hidden fees, and true risk metrics to restructure your portfolio into a highly optimized, objective powerhouse.',
  },
  {
    title: 'SIF',
    description:
      'Specialised Investment Fund solutions designed for high-conviction strategies and sophisticated investors seeking targeted exposure.',
    fullDetails: 'Our SIF (Specialised Investment Fund) offerings unlock access to exclusive, alternative, and high-growth asset classes typically reserved for institutional investors. This includes bespoke thematic structures and private market exposures designed to significantly generate alpha for high-net-worth clients.',
  },
  {
    title: 'NRI Services',
    description:
      'Specialised investment solutions for Non-Resident Indians looking to invest and manage wealth back home with ease and compliance.',
    fullDetails: 'Managing cross-border wealth involves complex taxation and compliance hurdles. We provide end-to-end, hassle-free portfolio management specifically engineered for Non-Resident Indians. From NRE/NRO account routing to tax-efficient repatriation strategies, we make investing in India completely frictionless.',
  },
];

const Services = () => {
  const itemsRef = useScrollAnimation();
  const [selectedService, setSelectedService] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService]);

  const closeModal = () => setSelectedService(null);

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
          <TiltCard
            key={i}
            className="service-card fade-up clickable"
            ref={(el) => (itemsRef.current[3 + i] = el)}
          >
            <div onClick={() => setSelectedService(service)} style={{ width: '100%', height: '100%' }}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-learn-more">Learn More <span>→</span></div>
            </div>
          </TiltCard>
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

      {/* Modal Overlay */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={closeModal}>
          <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="service-modal-close" onClick={closeModal}>×</button>
            <h3 className="service-modal-title">{selectedService.title}</h3>
            <div className="service-modal-divider"></div>
            <p className="service-modal-details">{selectedService.fullDetails}</p>
            <button className="service-modal-cta" onClick={closeModal}>Got it</button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Services;