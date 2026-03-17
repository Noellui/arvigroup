import React, { useState } from 'react';
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

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [page, setPage] = useState('home');

  if (!splashDone) {
    return <SplashScreen onDone={() => setSplashDone(true)} />;
  }

  if (page === 'disclosure') {
    return (
      <>
        <Navbar />
        <CommissionDisclosure onBack={() => { setPage('home'); window.scrollTo({ top: 0 }); }} />
        <ScrollToTop />
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <MarketTicker />
      <About />
      <Leadership />
      <Services />
      <Contact />
      <Footer onShowDisclosure={() => { setPage('disclosure'); window.scrollTo({ top: 0 }); }} />
      <ScrollToTop />
    </div>
  );
}

export default App;