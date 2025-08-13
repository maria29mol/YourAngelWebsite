import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Shield, Brain, Heart, MessageCircle, Sparkles } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Shield, label: 'Safe & Secure', path: '/safe-secure' },
    { icon: Brain, label: 'AI Expert', path: '/ai-expert' },
    { icon: Heart, label: 'Teen Focused', path: '/teen-focused' },
    { icon: MessageCircle, label: 'Crisis Support', path: '/crisis-support' },
    { icon: Sparkles, label: 'How It Works', path: '/how-it-works' },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src="/logo.png" 
                  alt="YourAngel Logo" 
                  className="h-10 w-auto transition-all duration-300 group-hover:scale-110"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.6)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.4))'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                YourAngel
              </span>
            </Link>

            {/* Desktop Menu - Right Side */}
            <div className="hidden lg:flex items-center gap-8">
              <Link 
                to="/blog" 
                className="text-white hover:text-purple-400 transition-colors font-medium"
              >
                Blog
              </Link>
              <Link 
                to="/privacy" 
                className="text-white hover:text-purple-400 transition-colors font-medium"
              >
                Privacy & Terms
              </Link>
              <button
                onClick={() => {
                  const element = document.getElementById('early-access');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform font-medium"
              >
                Get Early Access
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-purple-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Side Navigation Menu */}
      <div className={`fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-white/10 z-40 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-8 pt-24">
          <div className="mb-8">
            <h3 className="text-white font-bold text-lg mb-2">Navigate</h3>
            <p className="text-gray-400 text-sm">Explore YourAngel's features</p>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-white' 
                      : 'hover:bg-white/5 text-gray-300 hover:text-white'
                  }`}
                >
                  <Icon size={20} className={`transition-colors ${
                    isActive ? 'text-purple-400' : 'group-hover:text-purple-400'
                  }`} />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-12 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-400/20">
            <div className="text-center">
              <div className="text-3xl mb-3">✨</div>
              <h4 className="text-white font-bold mb-2">Ready to start?</h4>
              <p className="text-gray-300 text-sm mb-4">Join thousands of teens finding their light</p>
              <button
                onClick={() => {
                  setIsOpen(false);
                  const element = document.getElementById('early-access');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl hover:scale-105 transition-transform font-medium"
              >
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}