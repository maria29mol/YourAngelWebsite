import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Server, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SafeSecure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, green 2px, transparent 2px)`,
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
          <div className="inline-flex p-8 bg-green-500/20 rounded-full mb-8 animate-pulse">
            <Shield className="w-16 h-16 text-green-400" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8">
            Safe & 
            <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient-shift">
              Secure
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your privacy and safety are our absolute top priorities. We use industry-leading security 
            measures and never share your data with anyone.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-green-400/30">
            <Lock className="w-16 h-16 text-green-400 mb-8" />
            <h3 className="text-3xl font-bold text-white mb-6">End-to-End Encryption</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              All your conversations are encrypted with strong security measures. Even we can't read your messages - only you have the key. Your mental health conversations stay completely private.
            </p>
          </div>

          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-green-400/30" style={{animationDelay: '0.5s'}}>
            <Eye className="w-16 h-16 text-green-400 mb-8" />
            <h3 className="text-3xl font-bold text-white mb-6">Zero Data Collection</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              We don't track, store, or analyze your personal conversations. Your mental health journey stays completely private. No data mining, no profiling, no surveillance.
            </p>
          </div>

          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-green-400/30" style={{animationDelay: '1s'}}>
            <Server className="w-16 h-16 text-green-400 mb-8" />
            <h3 className="text-3xl font-bold text-white mb-6">Secure Infrastructure</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Our infrastructure is built with security as a top priority, using industry-standard protection measures. Multiple layers of security protect your data at all times.
            </p>
          </div>

          <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-green-400/30" style={{animationDelay: '1.5s'}}>
            <CheckCircle className="w-16 h-16 text-green-400 mb-8" />
            <h3 className="text-3xl font-bold text-white mb-6">Anonymous by Design</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              You can use YourAngel completely anonymously. No real names, no personal identifiers required. Your privacy is built into every aspect of our platform.
            </p>
          </div>
        </div>

        {/* Privacy Promise */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-3xl p-16 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Your data will NOT be shared under ANY circumstance
            </h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              We believe mental health support should be completely private. That's why we've built YourAngel 
              with privacy-first architecture that makes it impossible for us to access your conversations.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-6 px-16 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl text-xl"
            >
              Get Secure Access
              <Shield className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}