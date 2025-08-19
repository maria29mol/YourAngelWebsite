import React, { useState } from 'react';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'more') {
      // Scroll to bottom of page
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Menu Button - Top Left */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="group flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl px-6 py-3 hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
            >
              <Menu className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <span className="text-white font-semibold group-hover:text-purple-200 transition-colors">Menu</span>
            </button>

            {/* Logo - Center */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <img 
                src="/logo.png" 
                alt="YourAngel Logo" 
                className="h-10 w-auto transition-all duration-300 hover:scale-110"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.6)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.4))'
                }}
              />
            </div>

            {/* Auth Buttons - Top Right */}
            <div className="flex items-center gap-3">
              <button className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3 hover:bg-white/20 hover:border-blue-400/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
                <LogIn className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-white font-medium group-hover:text-blue-200 transition-colors">Log In</span>
              </button>
              
              <button className="group flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 border border-pink-400/30 rounded-2xl px-5 py-3 hover:from-pink-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/40">
                <UserPlus className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-lg"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu Container */}
          <div className="relative max-w-md w-full animate-[popupSlideIn_0.4s_ease-out]">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
            
            {/* Main menu */}
            <div className="relative bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              {/* Close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
              >
                <X className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              </button>

              {/* Menu Title */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black text-white mb-2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Menu
                  </span>
                </h3>
                <p className="text-gray-300">Navigate YourAngel</p>
              </div>

              {/* Menu Items */}
              <div className="space-y-3">
                {[
                  { label: 'Our Mission', id: 'mission' },
                  { label: 'Our Values', id: 'values' },
                  { label: 'About the Team', id: 'team' },
                  { label: 'Blog', id: 'blog' },
                  { label: 'Achievements', id: 'achievements' },
                  { label: 'More', id: 'more' }
                ].map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/30 rounded-2xl p-4 text-white hover:text-purple-200 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}