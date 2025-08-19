import React from 'react';

export default function AIExpert() {
  return (
    <section id="ai-expert" className="py-24 bg-gradient-to-b from-purple-900/40 via-purple-900 to-blue-900/40 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, purple 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex p-6 bg-purple-500/20 rounded-full mb-8">
            <span className="text-6xl text-purple-400">✨</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            AI 
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Expert
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our AI is trained specifically on teen mental health data, incorporating evidence-based 
            therapeutic approaches to provide you with expert-level support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-400/30">
            <span className="text-5xl text-purple-400 mb-6 block">🧠</span>
            <h3 className="text-2xl font-bold text-white mb-4">Teen-Specialized Training</h3>
            <p className="text-gray-300 leading-relaxed">
              Our AI is specially trained to understand teen-specific mental health challenges and the unique experiences you face.
            </p>
          </div>

          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-400/30" style={{animationDelay: '0.5s'}}>
            <span className="text-5xl text-purple-400 mb-6 block">📖</span>
            <h3 className="text-2xl font-bold text-white mb-4">Evidence-Based Approaches</h3>
            <p className="text-gray-300 leading-relaxed">
              Incorporates proven therapeutic approaches and wellness techniques tailored for teenagers.
            </p>
          </div>

          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-400/30" style={{animationDelay: '1s'}}>
            <span className="text-5xl text-purple-400 mb-6 block">🎯</span>
            <h3 className="text-2xl font-bold text-white mb-4">Personalized Support</h3>
            <p className="text-gray-300 leading-relaxed">
              Adapts to your communication style, learns your preferences, and provides increasingly personalized guidance.
            </p>
          </div>

          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-400/30" style={{animationDelay: '1.5s'}}>
            <span className="text-5xl text-purple-400 mb-6 block">⚡</span>
            <h3 className="text-2xl font-bold text-white mb-4">Instant Response</h3>
            <p className="text-gray-300 leading-relaxed">
              Get immediate support when you need it most. No waiting rooms, no appointments - just instant, intelligent help.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Like having a therapist in your pocket, available 24/7
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              YourAngel combines the latest in AI technology with proven therapeutic methods to give you 
              professional-level mental health support whenever you need it.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('early-access');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-12 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              Experience AI Support
            </button>
          </div>
        </div>
      </div>
      
      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-pink-900/40 pointer-events-none"></div>
    </section>
  );
}