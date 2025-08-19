import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SafeSecure from './pages/SafeSecure';
import AIExpert from './pages/AIExpert';
import TeenFocused from './pages/TeenFocused';
import CookieConsent from './components/CookieConsent';
import EarlySignupPopup from './components/EarlySignupPopup';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/safe-secure" element={<SafeSecure />} />
        <Route path="/ai-expert" element={<AIExpert />} />
        <Route path="/teen-focused" element={<TeenFocused />} />
      </Routes>
      <CookieConsent />
      <EarlySignupPopup />
    </div>
  );
}

export default App;