import React, { useState, useEffect } from 'react';

export default function EarlySignupPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup or made cookie choice
    const hasSeenPopup = localStorage.getItem('hasSeenEarlySignupPopup');
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    // Show popup 2 seconds after cookie consent is given and if not seen before
    if (cookieConsent && !hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasSeenEarlySignupPopup', 'true');
    setShowPopup(false);
  };

  const handleSignup = () => {
    localStorage.setItem('hasSeenEarlySignupPopup', 'true');
    setShowPopup(false);
    
    // Scroll to early access section
    const element = document.getElementById('early-access');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      ></div>
      
      {/* Popup Container */}
      <div className="relative max-w-md w-full animate-[popupSlideIn_0.5s_ease-out]">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
        
        {/* Main popup */}
        <div className="relative bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
          >
            <span className="text-white/60 group-hover:text-white text-lg">×</span>
          </button>

          {/* Sparkle animation */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-glitter"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              >
                <div className="w-1 h-1 bg-white rounded-full shadow-lg"></div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="text-center relative z-10">
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="YourAngel Logo" 
                  className="h-16 w-auto transition-all duration-500"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.8)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.6))'
                  }}
                />
                {/* Rotating ring around logo */}
                <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-purple-400/30 via-pink-400/30 to-blue-400/30 animate-spin opacity-60" style={{animationDuration: '8s'}}></div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-3xl font-black text-white mb-4 leading-tight">
              🎉 Early Access is 
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
                Now Open!
              </span>
            </h3>

            {/* Description */}
            <p className="text-gray-200 mb-6 leading-relaxed">
              Be among the first to experience YourAngel and help shape the future of teen mental health support.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center gap-3 text-sm text-gray-300">
                <span className="text-green-400">✨</span>
                <span>Skip the waitlist - Get instant access</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-300">
                <span className="text-blue-400">🚀</span>
                <span>Exclusive beta tester status</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-300">
                <span className="text-purple-400">💝</span>
                <span>VIP early adopter perks</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleSignup}
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold py-4 px-6 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center group"
              >
                Get Early Access Now
                <span className="ml-2 text-xl group-hover:translate-x-1 transition-transform">🚀</span>
              </button>
              
              <button
                onClick={handleClose}
                className="w-full text-gray-300 hover:text-white font-medium py-2 px-6 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add keyframes for popup animation
const style = document.createElement('style');
style.textContent = `
  @keyframes popupSlideIn {
    0% {
      opacity: 0;
      transform: scale(0.8) translateY(20px);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;
document.head.appendChild(style);