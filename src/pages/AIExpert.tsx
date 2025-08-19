import React from 'react';
import { ArrowLeft, Brain, BookOpen, Target, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIExpert() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/40 via-purple-900 to-blue-900/40 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, purple 2px, transparent 2px)`,
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
          <div className="inline-flex p-8 bg-purple-500/20 rounded-full mb-8 animate-pulse">
            <Sparkles className="w-16 h-16 text-purple-400" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
            AI 
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift">
              Expert
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our AI is trained specifically on teen mental health data, incorporating evidence-based 
            therapeutic approaches to provide you with expert-level support.
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-400/30">
            <Brain className="w-16 h-16 text-purple-400 mb-8" />
            <h3 className="text-3xl font-bold text-white mb-6">Teen-Specialized Training</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Our AI is specially trained to understand teen-specific mental health challenges and the unique experiences you face. It speaks your language and understands your world.
            </p>
          </div>

          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-400/30" style={{animationDelay: '0.5s'}}>
            <BookOpen className="w-16 h-16 text-purple-400 mb-8" />
            <h3 className="text-3xl font-bold text-white mb-6">Evidence-Based Approaches</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Incorporates proven therapeutic approaches and wellness techniques tailored for teenagers. Based on real research and clinical best practices.
            </p>
          </div>

          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-400/30" style={{animationDelay: '1s'}}>
            <Target className="w-16 h-16 text-purple-400 mb-8" />
            <h3 className="text-3xl font-bold text-white mb-6">Personalized Support</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Adapts to your communication style, learns your preferences, and provides increasingly personalized guidance. Gets better at helping you over time.
            </p>
          </div>

          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-400/30" style={{animationDelay: '1.5s'}}>
            <Zap className="w-16 h-16 text-purple-400 mb-8" />
            <h3 className="text-3xl font-bold text-white mb-6">Instant Response</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Get immediate support when you need it most. No waiting rooms, no appointments - just instant, intelligent help available 24/7.
            </p>
          </div>
        </div>

        {/* AI Promise */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-16 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Like having a therapist in your pocket, available 24/7
            </h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              YourAngel combines the latest in AI technology with proven therapeutic methods to give you 
              professional-level mental health support whenever you need it.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-6 px-16 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl text-xl"
            >
              Experience AI Support
              <Sparkles className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}