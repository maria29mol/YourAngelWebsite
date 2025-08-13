import React from 'react';

export default function SafeSecure() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-green-900/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, green 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex p-6 bg-green-500/20 rounded-full mb-8">
            <span className="text-6xl text-green-400">🛡️</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Safe & 
            <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Secure
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your privacy and safety are our absolute top priorities. We use military-grade encryption 
            and never share your data with anyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-green-400/30">
            <span className="text-5xl text-green-400 mb-6 block">🔒</span>
            <h3 className="text-2xl font-bold text-white mb-4">End-to-End Encryption</h3>
            <p className="text-gray-300 leading-relaxed">
              All your conversations are encrypted with military-grade security. Even we can't read your messages - only you have the key.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-green-400/30">
            <span className="text-5xl text-green-400 mb-6 block">👁️</span>
            <h3 className="text-2xl font-bold text-white mb-4">Zero Data Collection</h3>
            <p className="text-gray-300 leading-relaxed">
              We don't track, store, or analyze your personal conversations. Your mental health journey stays completely private.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-green-400/30">
            <span className="text-5xl text-green-400 mb-6 block">🖥️</span>
            <h3 className="text-2xl font-bold text-white mb-4">Secure Infrastructure</h3>
            <p className="text-gray-300 leading-relaxed">
              Built on secure data centers with 24/7 monitoring and HIPAA-compliant infrastructure for maximum protection.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-green-400/30">
            <span className="text-5xl text-green-400 mb-6 block">✅</span>
            <h3 className="text-2xl font-bold text-white mb-4">Anonymous by Design</h3>
            <p className="text-gray-300 leading-relaxed">
              You can use YourAngel completely anonymously. No real names, no personal identifiers required.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your data will NOT be shared under ANY circumstance
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              We believe mental health support should be completely private. That's why we've built YourAngel 
              with privacy-first architecture that makes it impossible for us to access your conversations.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('early-access');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 px-12 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              Get Secure Access
            </button>
          </div>
        </div>
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-purple-900/40 pointer-events-none"></div>
    </section>
  );
}