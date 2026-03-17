import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Leadership from './components/Leadership';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommissionDisclosure from './components/CommissionDisclosure';
import './App.css';
import './styles/Animations.css';
import './styles/DarkMode.css';
import './styles/SectionContrast.css';

function App() {
  const [page, setPage] = useState('home');

  if (page === 'disclosure') {
    return (
      <>
        <Navbar />
        <CommissionDisclosure onBack={() => setPage('home')} />
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Leadership />
      <Services />
      <Contact />
      <Footer onShowDisclosure={() => setPage('disclosure')} />
    </div>
  );
}

export default App;