import React from 'react';
import '../styles/Footer.css';

const Footer = ({ onShowDisclosure }) => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <h4 className="footer-col-title">About Us</h4>
          <p className="footer-about-text">
            Aarvi Data Analytics Services Pvt Ltd was established in 2015 with the vision to create
            a milestone in financial distribution. We serve 700+ families and individuals through
            data-driven precision and traditional wealth stewardship.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Footer Menu</h4>
          <ul>
            <li onClick={() => scrollTo('hero')}><span className="footer-arrow">›</span> Home</li>
            <li onClick={() => scrollTo('about')}><span className="footer-arrow">›</span> About Us</li>
            <li onClick={() => scrollTo('leadership')}><span className="footer-arrow">›</span> Leadership</li>
            <li onClick={() => scrollTo('services')}><span className="footer-arrow">›</span> Services</li>
            <li onClick={() => scrollTo('contact')}><span className="footer-arrow">›</span> Contact Us</li>
            <li onClick={onShowDisclosure} className="footer-disclosure-link">
              <span className="footer-arrow">›</span> Commission Disclosures
            </li>
          </ul>
        </div>

        <div className="footer-col footer-contact-col">
          <h4 className="footer-col-title">Contact Info</h4>
          <div className="footer-contact-item">
            <div className="footer-contact-icon">📍</div>
            <p>408, Times Square Arcade-1, Near Ravija Plaza,<br />Opposite Rambag, Thaltej, Shilaj,<br />Ahmedabad, Gujarat – 380059</p>
          </div>
          <div className="footer-contact-item">
            <div className="footer-contact-icon">✉️</div>
            <p>Aarvi_ms@yahoo.co.in</p>
          </div>
          <div className="footer-contact-item">
            <div className="footer-contact-icon">📞</div>
            <p>+91 9825279602 (Mansi Shah)</p>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-disclosure">

        {/* AMFI heading */}
        <p className="footer-amfi-heading">
          Aarvi Data Analytics Services Pvt. Ltd. is an AMFI Registered Mutual Fund Distributor
        </p>

        {/* ARN details */}
        <p className="footer-arn-detail">ARN – 106777 &nbsp;|&nbsp; Date of Initial Registration: October 20, 2015 &nbsp;|&nbsp; Valid Until: 3 Nov 2027</p>

        {/* Links row */}
        <p className="footer-links-row">
          <a href="https://www.sebi.gov.in/filings/mutual-funds.html" target="_blank" rel="noreferrer" className="footer-sid-link">SID / SAI / KIM</a>
          <span className="footer-link-divider">&nbsp;|&nbsp;</span>
          <a href="https://www.amfiindia.com/Themes/Theme1/downloads/RevisedCodeofConductforMutualFundDistributors-April2022.pdf" target="_blank" rel="noreferrer" className="footer-sid-link">Code of Conduct</a>
        </p>

        <div className="footer-disclosure-divider" />

        {/* Disclaimer paragraphs */}
        <p className="footer-disclosure-body">
          <strong>Disclaimer:</strong> Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
          Scheme NAVs may fluctuate based on market factors, and past performance is not indicative of future results. No dividends are guaranteed.
        </p>

        <p className="footer-disclosure-body">
          Aarvi Data Analytics Services Pvt. Ltd. (ARN – 106777) makes no warranties and accepts no liability for any damages or losses
          arising from the use of this website. As an AMFI-registered Mutual Fund Distributor (not a SEBI-registered Investment Adviser),
          we deal exclusively in Regular Plans and earn trailing commissions. Content provided is for general information, not personalized
          financial advice. Website terms and conditions apply.
        </p>

        <div className="footer-disclosure-divider" />

        {/* Grievance & copyright */}
        <p className="footer-disclosure-body footer-grievance">
          Grievance Officer: Mansi Shah &nbsp;|&nbsp; aarvi_ms@yahoo.co.in &nbsp;|&nbsp; +91 9825279602
        </p>
        <p className="footer-disclosure-body footer-copy">
          © 2026 Aarvi Data Analytics Services Pvt. Ltd. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;