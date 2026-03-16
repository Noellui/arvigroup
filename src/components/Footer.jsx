import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Brand replaced with disclosure */}
        <div className="footer-brand">
          <p className="footer-disclosure-inline-title">Commission Disclosure</p>
          <p className="footer-disclosure-inline-text">
            Investments in Mutual Funds are subject to Market Risks. Please read all scheme-related
            documents carefully before investing. Aarvi Data Analytics Services Pvt Ltd advises all
            existing and prospective investors to evaluate Exit loads and Total Expense Ratio (TER)
            structures prior to finalizing any investment decision. Mutual Fund Schemes do not assure
            or guarantee any returns, and past performance is not necessarily indicative of future
            results. There is no certainty that the investment objectives of any recommended scheme
            will be achieved. We exclusively offer <strong>Regular Plans</strong> for Mutual Fund
            Schemes and receive a trailing commission on client investments; a comprehensive disclosure
            is provided at the time of transaction or upon request.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li onClick={() => scrollTo('hero')}>Home</li>
            <li onClick={() => scrollTo('about')}>About Us</li>
            <li onClick={() => scrollTo('services')}>Services</li>
            <li onClick={() => scrollTo('contact')}>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Market Securities</li>
            <li>Fixed Income & Safety</li>
            <li>Risk Mitigation</li>
            <li>Data-Driven Insights</li>
            <li>SIF</li>
            <li>NRI Services</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>Aarvi_ms@yahoo.co.in</li>
            <li>+91 9825279602</li>
            <li style={{ fontStyle: 'italic' }}>Thaltej, Ahmedabad</li>
            <li style={{ fontStyle: 'italic' }}>Gujarat – 380059</li>
          </ul>
        </div>
      </div>

      {/* ARN bar */}
      <div className="footer-arn-bar">
        <span>AMFI Registered Mutual Fund Distributor</span>
        <span className="footer-arn-dot">·</span>
        <span>ARN – 106777</span>
        <span className="footer-arn-dot">·</span>
        <span>Date of initial Registration: October 20, 2015</span>
        <span className="footer-arn-dot">·</span>
        <span>Validity of ARN-106777 extends to October 19, 2027</span>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          © 2025 Aarvi Data Analytics Services Pvt. Ltd. All rights reserved.
          &nbsp;|&nbsp;
          <a href="https://www.sebi.gov.in" target="_blank" rel="noreferrer" className="footer-link">SID/SAI/KIM</a>
          &nbsp;|&nbsp;
        </span>
        <span className="footer-grievance">
          Grievance Officer: Mansi Shah &nbsp;|&nbsp; Aarvi_ms@yahoo.co.in &nbsp;|&nbsp; +91 9825279602
        </span>
      </div>
    </footer>
  );
};

export default Footer;