import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SafeSecure from './components/SafeSecure';
import AIExpert from './components/AIExpert';
import TeenFocused from './components/TeenFocused';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import EarlySignupPopup from './components/EarlySignupPopup';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <SafeSecure />
      <AIExpert />
      <TeenFocused />
      <Stats />
      <CTA />
      <Footer />
      <CookieConsent />
      <EarlySignupPopup />
    </div>
  );
}

export default App;