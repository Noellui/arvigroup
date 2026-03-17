import React, { useEffect, useRef } from 'react';
import '../styles/MarketTicker.css';

const MarketTicker = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Avoid duplicate scripts on re-render
        if (containerRef.current && containerRef.current.children.length > 0) return;

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbols: [
                { proName: 'FOREXCOM:NSXUSD', title: 'NASDAQ' },
                { proName: 'FOREXCOM:UKXGBP', title: 'FTSE' },
                { proName: 'INDEX:NKY', title: 'Nikkei' },
                { proName: 'TVC:DXY', title: 'USD Index' },
                { proName: 'TVC:GOLD', title: 'Gold' },
                { proName: 'TVC:USOIL', title: 'Crude Oil' },
                { proName: 'FX:EURUSD', title: 'EUR/USD' },
                { proName: 'FX:USDINR', title: 'USD/INR' },
                { proName: 'BSE:SENSEX', title: 'SENSEX' },
                { proName: 'NSE:NIFTY50', title: 'NIFTY 50' },
            ],
            showSymbolLogo: false,
            isTransparent: true,
            displayMode: 'adaptive',
            colorTheme: 'dark',
            locale: 'en',
        });

        containerRef.current.appendChild(script);
    }, []);

    return (
        <div className="market-ticker-wrapper">
            <div className="tradingview-widget-container" ref={containerRef}>
                <div className="tradingview-widget-container__widget" />
            </div>
        </div>
    );
};

export default MarketTicker;