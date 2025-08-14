import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import EarlySignupPopup from './components/EarlySignupPopup';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <CTA />
      <Footer />
      <CookieConsent />
      <EarlySignupPopup />
    </div>
  );
}

export default App;