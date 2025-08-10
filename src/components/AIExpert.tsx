import React from 'react';
import { Link } from 'react-router-dom';

export default function AIExpert() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="p-6">
        <Link 
          to="/"
          className="inline-flex items-center text-white hover:text-purple-400 transition-colors group"
        >
          <span className="mr-2 text-xl group-hover:-translate-x-1 transition-transform">←</span>
          Back to Home
        </Link>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex p-6 bg-purple-500/20 rounded-full mb-8">
              <span className="text-6xl text-purple-400">✨</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              AI 
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Expert
              </span>
            </h1>
            <p className="text-2xl text-gray-200 mb-8">
              Advanced AI trained specifically for teen mental health
            </p>
            <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-xl text-purple-200 font-semibold">
                🧠 Powered by cutting-edge AI with deep understanding of teenage psychology
              </p>
            </div>
          </div>

          {/* AI Capabilities */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <span className="text-5xl text-purple-400 mb-6 block">🧠</span>
              <h3 className="text-2xl font-bold text-white mb-4">Teen-Specialized Training</h3>
              <p className="text-gray-300 leading-relaxed">
                Our AI is specially trained to understand teen-specific mental health challenges and the unique experiences you face.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <span className="text-5xl text-purple-400 mb-6 block">📖</span>
              <h3 className="text-2xl font-bold text-white mb-4">Evidence-Based Approaches</h3>
              <p className="text-gray-300 leading-relaxed">
                Incorporates proven therapeutic approaches and wellness techniques tailored for teenagers.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <span className="text-5xl text-purple-400 mb-6 block">🎯</span>
              <h3 className="text-2xl font-bold text-white mb-4">Personalized Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Adapts to your communication style, learns your preferences, and provides increasingly personalized guidance.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <span className="text-5xl text-purple-400 mb-6 block">⚡</span>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Response</h3>
              <p className="text-gray-300 leading-relaxed">
                Get immediate support when you need it most. No waiting rooms, no appointments - just instant, intelligent help.
              </p>
            </div>
          </div>

          {/* What Makes Our AI Different */}
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">What Makes Our AI Different</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Understands Teen Language</h4>
                    <p className="text-purple-200">Speaks your language, gets your references, understands your world.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Crisis Recognition</h4>
                    <p className="text-purple-200">Trained to identify crisis situations and provide immediate, appropriate support.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Emotional Intelligence</h4>
                    <p className="text-purple-200">Recognizes emotional nuances and responds with appropriate empathy and support.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Continuous Learning</h4>
                    <p className="text-purple-200">Constantly improving through interactions while maintaining your privacy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              to="/"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform"
            >
              Experience AI Support
            <span className="ml-2 text-xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}