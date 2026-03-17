import React, { useEffect, useState } from 'react';
import '../styles/SplashScreen.css';

const SplashScreen = ({ onDone }) => {
    const [hiding, setHiding] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHiding(true);
            setTimeout(onDone, 700);
        }, 2200);
        return () => clearTimeout(timer);
    }, [onDone]);

    return (
        <div className={`splash ${hiding ? 'splash-hide' : ''}`}>
            <div className="splash-content">
                <img
                    src="/images/logo and Amfi registration.png"
                    alt="Aarvi Data Analytics Services"
                    className="splash-logo"
                />
                <div className="splash-bar">
                    <div className="splash-bar-fill" />
                </div>
                <p className="splash-tagline">Data-Driven Wealth. Enduring Legacies.</p>
            </div>
        </div>
    );
};

export default SplashScreen;