import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import SafeSecure from './components/SafeSecure';
import AIExpert from './components/AIExpert';
import TeenFocused from './components/TeenFocused';
import SafeSecure from './components/SafeSecure';
import AIExpert from './components/AIExpert';
import TeenFocused from './components/TeenFocused';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Stats />
            <CTA />
            <Footer />
            <CookieConsent />
          </>
        } />
        <Route path="/safe-secure" element={<SafeSecure />} />
        <Route path="/ai-expert" element={<AIExpert />} />
        <Route path="/teen-focused" element={<TeenFocused />} />
      </Routes>
    </div>
  );
}

export default App;