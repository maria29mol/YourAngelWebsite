import React from 'react';

export default function TeenFocused() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-900/40 via-pink-900 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, pink 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex p-6 bg-pink-500/20 rounded-full mb-8">
            <span className="text-6xl text-pink-400">💖</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Teen
            <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Focused
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Built by teens, for teens. We understand your world, your language, and the unique 
            challenges you face in today's society.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-pink-400/30">
            <span className="text-5xl text-pink-400 mb-6 block">💬</span>
            <h3 className="text-2xl font-bold text-white mb-4">Speaks Your Language</h3>
            <p className="text-gray-300 leading-relaxed">
              No clinical jargon or adult-centric advice. We communicate in a way that feels natural and relatable to you.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-pink-400/30">
            <span className="text-5xl text-pink-400 mb-6 block">👥</span>
            <h3 className="text-2xl font-bold text-white mb-4">Understands Teen Issues</h3>
            <p className="text-gray-300 leading-relaxed">
              From academic pressure to social anxiety, body image to identity questions - we get what you're going through.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-pink-400/30">
            <span className="text-5xl text-pink-400 mb-6 block">💡</span>
            <h3 className="text-2xl font-bold text-white mb-4">Age-Appropriate Solutions</h3>
            <p className="text-gray-300 leading-relaxed">
              Strategies and coping mechanisms designed specifically for teenage brains and teenage lives.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-pink-400/30">
            <span className="text-5xl text-pink-400 mb-6 block">🛡️</span>
            <h3 className="text-2xl font-bold text-white mb-4">Safe Space</h3>
            <p className="text-gray-300 leading-relaxed">
              A judgment-free environment where you can be completely honest about your feelings and experiences.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm border border-pink-400/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Finally, mental health support that gets you
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              We know being a teenager today is harder than ever. Social media pressure, academic stress, 
              uncertain futures - YourAngel understands it all and is here to help you navigate it.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('early-access');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-4 px-12 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              Join Our Teen Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}