import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import SafeSecure from './components/SafeSecure';
import AIExpert from './components/AIExpert';
import TeenFocused from './components/TeenFocused';
import Blog from './components/Blog';
import Privacy from './components/Privacy';
import CrisisSupport from './components/CrisisSupport';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/crisis-support" element={<CrisisSupport />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </div>
  );
}

export default App;