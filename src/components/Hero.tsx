import React from 'react';

const scrollToEarlyAccess = () => {
  const element = document.getElementById('early-access');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Trendy gradient mesh */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Sparkle effects */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className={`rounded-full ${
              i % 3 === 0 ? 'w-2 h-2 bg-purple-400/30' :
              i % 3 === 1 ? 'w-1 h-1 bg-pink-400/40' :
              'w-3 h-3 bg-blue-400/20'
            }`}></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Enhanced Logo */}
          <div className="mb-8 flex justify-center group">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="YourAngel Logo" 
                className="h-24 w-auto transition-all duration-500 group-hover:scale-110"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.8)) drop-shadow(0 0 60px rgba(236, 72, 153, 0.6)) drop-shadow(0 0 90px rgba(59, 130, 246, 0.4))'
                }}
              />
              {/* Glowing ring around logo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-purple-400/30 via-pink-400/30 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin" style={{animationDuration: '8s'}}></div>
            </div>
          </div>

          {/* Main headline with gradient text */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="text-white block relative">
              Your
            </span>
            <span className="text-white block relative">
              Angel
            </span>
          </h1>

          {/* Subheadline */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl text-gray-200 font-light mb-4">
              Mental health support in 
              <span className="font-bold text-yellow-400 mx-2 animate-pulse relative">
                2 clicks
                <div className="absolute inset-0 bg-yellow-400/20 blur-lg animate-pulse"></div>
              </span>
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              AI-powered crisis support designed specifically for teens. 
              Available 24/7 with text and voice features.
            </p>
          </div>

          {/* Key features badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/30 hover:scale-105 transition-all duration-300 cursor-pointer group animate-pulse hover:animate-none">
              <span className="text-green-400 mr-2">🛡️</span>
              <span className="text-white font-medium group-hover:text-green-400 transition-colors">Safe & Secure</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer group animate-pulse hover:animate-none">
              <span className="text-purple-400 mr-2">✨</span>
              <span className="text-white font-medium group-hover:text-purple-400 transition-colors">AI Expert</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-400/30 hover:scale-105 transition-all duration-300 cursor-pointer group animate-pulse hover:animate-none">
              <span className="text-pink-400 mr-2">💖</span>
              <span className="text-white font-medium group-hover:text-pink-400 transition-colors">Teen-Focused</span>
            </div>
          </div>

          {/* Privacy Assurance Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-blue-400 mr-2">🔒</span>
              <span className="text-white font-medium">Your data will NOT be shared under ANY circumstance</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <button
              onClick={scrollToEarlyAccess}
              className="group relative inline-flex items-center justify-center px-16 py-8 text-2xl font-black text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full hover:scale-110 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 animate-pulse hover:animate-none border-2 border-white/20 hover:border-white/40"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <span className="relative z-10">
              Get Early Access
              </span>
              <span className="relative z-10 ml-4 text-3xl group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300">🚀</span>
            </button>
            <div className="text-gray-400 mt-6 text-base text-center font-medium">Be among the first to get early access</div>
          </div>

          {/* Social Proof Section */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {/* Survey Responses */}
              <div className="text-center group">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 animate-shimmer">
                  <div className="text-3xl font-black text-green-400 mb-2 group-hover:scale-110 transition-transform">+200</div>
                  <div className="text-white font-semibold mb-1">Survey Responses</div>
                  <div className="text-green-300 text-xs opacity-80">in just one week</div>
                </div>
              </div>

              {/* Followers */}
              <div className="text-center group">
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 animate-shimmer" style={{animationDelay: '0.5s'}}>
                  <div className="text-3xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform">+100</div>
                  <div className="text-white font-semibold">Followers</div>
                </div>
              </div>

              {/* Early Registrants */}
              <div className="text-center group">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 animate-shimmer" style={{animationDelay: '1s'}}>
                  <div className="text-3xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform">+50</div>
                  <div className="text-white font-semibold">Early Registrants</div>
                </div>
              </div>

              {/* HUVTSP Alumni */}
              <div className="text-center group">
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30 animate-shimmer" style={{animationDelay: '1.5s'}}>
                  <div className="text-2xl font-black text-yellow-400 mb-2 group-hover:scale-110 transition-transform">🎓</div>
                  <div className="text-white font-semibold text-sm">HUVTSP Alumni</div>
                  <div className="text-yellow-300 text-xs opacity-80">Harvard Program</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => {
        const featuresSection = document.querySelector('#features');
        if (featuresSection) {
          featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Gradient transition overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
    </section>
  );
}