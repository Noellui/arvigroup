import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketTicker from './components/MarketTicker';
import About from './components/About';
import Leadership from './components/Leadership';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommissionDisclosure from './components/CommissionDisclosure';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import './App.css';
import './styles/Animations.css';
import './styles/DarkMode.css';
import './styles/SectionContrast.css';

// Inline styles for the fade overlay
const overlayStyle = {
  position: 'fixed',
  inset: 0,
  background: '#0d1f3c',
  zIndex: 99999,
  pointerEvents: 'none',
  transition: 'opacity 0.35s ease',
};

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [page, setPage] = useState('home');
  const [pendingScroll, setPendingScroll] = useState(null);
  const [fadeOpacity, setFadeOpacity] = useState(0);

  const navigateTo = (sectionId) => {
    if (page !== 'home') {
      // 1. Fade in the overlay
      setFadeOpacity(1);

      setTimeout(() => {
        // 2. While hidden: jump to top and switch page
        window.scrollTo({ top: 0, behavior: 'instant' });
        setPage('home');
        setPendingScroll(sectionId);

        // 3. Fade out overlay
        setTimeout(() => setFadeOpacity(0), 50);
      }, 350); // wait for fade-in to complete
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (page === 'home' && pendingScroll) {
      const t = setTimeout(() => {
        document.getElementById(pendingScroll)?.scrollIntoView({ behavior: 'smooth' });
        setPendingScroll(null);
      }, 150);
      return () => clearTimeout(t);
    }
  }, [page, pendingScroll]);

  if (!splashDone) {
    return <SplashScreen onDone={() => setSplashDone(true)} />;
  }

  if (page === 'disclosure') {
    return (
      <>
        <div style={{ ...overlayStyle, opacity: fadeOpacity }} />
        <Navbar navigateTo={navigateTo} />
        <CommissionDisclosure onBack={() => {
          setFadeOpacity(1);
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
            setPage('home');
            setTimeout(() => setFadeOpacity(0), 50);
          }, 350);
        }} />
        <ScrollToTop />
      </>
    );
  }

  return (
    <div>
      <div style={{ ...overlayStyle, opacity: fadeOpacity }} />
      <Navbar navigateTo={navigateTo} />
      <Hero />
      <MarketTicker />
      <About />
      <Leadership />
      <Services />
      <Contact />
      <Footer onShowDisclosure={() => {
        setFadeOpacity(1);
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          setPage('disclosure');
          setTimeout(() => setFadeOpacity(0), 50);
        }, 350);
      }} />
      <ScrollToTop />
    </div>
  );
}

export default App;