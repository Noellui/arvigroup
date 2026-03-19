import React, { useEffect } from 'react';
import '../styles/CommissionDisclosure.css';

const CommissionDisclosure = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="disclosure-page">
            <button className="disclosure-back" onClick={onBack}>
                ← Back to Home
            </button>

            <div className="disclosure-inner">
                <div className="disclosure-tag">Transparency &amp; Compliance</div>
                <h1 className="disclosure-heading">Commission Disclosures</h1>

                <div className="disclosure-card">
                    <p>
                        Risk Factors – Investments in Mutual Funds are subject to Market Risks. Read all
                        scheme-related documents carefully before investing. Mutual Fund Schemes do not assure or
                        guarantee any returns. Past performances of any Mutual Fund Scheme may or may not be
                        sustained in the future. There is no guarantee that the investment objective of any
                        suggested scheme shall be achieved. All existing and prospective investors are advised to
                        check and evaluate the Exit loads and other cost structures (TER) applicable at the time of
                        making the investment before finalizing any investment decision for Mutual Funds schemes. We
                        deal in Regular Plans only for Mutual Fund Schemes and earn a Trailing Commission on client
                        investments. Disclosure of commission earnings is made to clients at the time of investments.
                    </p>
                </div>

                <div className="disclosure-arn-box">
                    <div className="disclosure-arn-item">
                        <span className="disclosure-arn-label">AMFI Registration</span>
                        <span className="disclosure-arn-value">ARN – 106777</span>
                    </div>
                    <div className="disclosure-arn-item">
                        <span className="disclosure-arn-label">Initial Registration</span>
                        <span className="disclosure-arn-value">October 20, 2015</span>
                    </div>
                    <div className="disclosure-arn-item">
                        <span className="disclosure-arn-label">ARN Valid Until</span>
                        <span className="disclosure-arn-value">3 Nov 2027</span>
                    </div>
                    <div className="disclosure-arn-item">
                        <span className="disclosure-arn-label">Grievance Officer</span>
                        <span className="disclosure-arn-value">Mansi Shah</span>
                    </div>
                </div>


                <p className="disclosure-footer-note">
                    Grievance Officer: Mansi Shah &nbsp;|&nbsp; aarvi_ms@yahoo.co.in &nbsp;|&nbsp; +91 9825279602
                </p>
            </div>
        </div>
    );
};

export default CommissionDisclosure;