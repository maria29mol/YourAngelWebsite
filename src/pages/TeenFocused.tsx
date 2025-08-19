import React from 'react';
import { ArrowLeft, MessageCircle, Users, Lightbulb, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TeenFocused() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/40 via-pink-900 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, pink 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-3 mb-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-white font-medium group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex p-8 bg-pink-500/20 rounded-full mb-8 animate-pulse">
            <Heart className="w-16 h-16 text-pink-400" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
            Teen
            <span className="block bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
              Focused
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Built by teens, for teens. We understand your world, your language, and the unique 
            challenges you face in today's society.
          </p>
        </div>

        {/* Teen Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-pink-400/30">
            <MessageCircle className="w-16 h-16 text-pink-400 mb-8" />
            <h3 className="text-3xl font-bold text-white mb-6">Speaks Your Language</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              No clinical jargon or adult-centric advice. We communicate in a way that feels natural and relatable to you. Real talk, no BS.
            </p>
          </div>

          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-pink-400/30" style={{animationDelay: '0.5s'}}>
            <Users className="w-16 h-16 text-pink-400 mb-8" />
            <h3 className="text-3xl font-bold text-white mb-6">Understands Teen Issues</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              From academic pressure to social anxiety, body image to identity questions - we get what you're going through because we've been there too.
            </p>
          </div>

          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-pink-400/30" style={{animationDelay: '1s'}}>
            <Lightbulb className="w-16 h-16 text-pink-400 mb-8" />
            <h3 className="text-3xl font-bold text-white mb-6">Age-Appropriate Solutions</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Strategies and coping mechanisms designed specifically for teenage brains and teenage lives. Solutions that actually work for your reality.
            </p>
          </div>

          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-pink-400/30" style={{animationDelay: '1.5s'}}>
            <Shield className="w-16 h-16 text-pink-400 mb-8" />
            <h3 className="text-3xl font-bold text-white mb-6">Safe Space</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              A judgment-free environment where you can be completely honest about your feelings and experiences. No shame, no judgment, just support.
            </p>
          </div>
        </div>

        {/* Teen Promise */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm border border-pink-400/30 rounded-3xl p-16 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Finally, mental health support that gets you
            </h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              We know being a teenager today is harder than ever. Social media pressure, academic stress, 
              uncertain futures - YourAngel understands it all and is here to help you navigate it.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-6 px-16 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl text-xl"
            >
              Join Our Teen Community
              <Heart className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}