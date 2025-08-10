import React from 'react';
import { Link } from 'react-router-dom';

export default function TeenFocused() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="p-6">
        <Link 
          to="/"
          className="inline-flex items-center text-white hover:text-pink-400 transition-colors group"
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
            <div className="inline-flex p-6 bg-pink-500/20 rounded-full mb-8">
              <span className="text-6xl text-pink-400">💖</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Teen
              <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Focused
              </span>
            </h1>
            <p className="text-2xl text-gray-200 mb-8">
              Built by teens, for teens - we understand your world
            </p>
            <div className="bg-pink-500/20 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-xl text-pink-200 font-semibold">
                💝 Created with deep understanding of teenage experiences and challenges
              </p>
            </div>
          </div>

          {/* Why Teen-Focused Matters */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-pink-400/30">
              <span className="text-5xl text-pink-400 mb-6 block">💬</span>
              <h3 className="text-2xl font-bold text-white mb-4">Speaks Your Language</h3>
              <p className="text-gray-300 leading-relaxed">
                No clinical jargon or adult-centric advice. We communicate in a way that feels natural and relatable to you.
              </p>
            </div>

            <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-pink-400/30" style={{animationDelay: '0.5s'}}>
              <span className="text-5xl text-pink-400 mb-6 block">👥</span>
              <h3 className="text-2xl font-bold text-white mb-4">Understands Teen Issues</h3>
              <p className="text-gray-300 leading-relaxed">
                From academic pressure to social anxiety, body image to identity questions - we get what you're going through.
              </p>
            </div>

            <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-pink-400/30" style={{animationDelay: '1s'}}>
              <span className="text-5xl text-pink-400 mb-6 block">💡</span>
              <h3 className="text-2xl font-bold text-white mb-4">Age-Appropriate Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                Strategies and coping mechanisms designed specifically for teenage brains and teenage lives.
              </p>
            </div>

            <div className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-pink-400/30" style={{animationDelay: '1.5s'}}>
              <span className="text-5xl text-pink-400 mb-6 block">🛡️</span>
              <h3 className="text-2xl font-bold text-white mb-4">Safe Space</h3>
              <p className="text-gray-300 leading-relaxed">
                A judgment-free environment where you can be completely honest about your feelings and experiences.
              </p>
            </div>
          </div>

          {/* Teen-Specific Features */}
          <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm border border-pink-400/30 rounded-3xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Designed for Your Generation</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-2xl text-pink-400 flex-shrink-0">⭐</span>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Social Media Awareness</h4>
                  <p className="text-pink-200">Understands the impact of social media on mental health and provides relevant guidance.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl text-pink-400 flex-shrink-0">⭐</span>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Academic Pressure Support</h4>
                  <p className="text-pink-200">Specialized help for school stress, exam anxiety, and college preparation worries.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl text-pink-400 flex-shrink-0">⭐</span>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Identity & Self-Discovery</h4>
                  <p className="text-pink-200">Support for questions about identity, sexuality, relationships, and finding your place in the world.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl text-pink-400 flex-shrink-0">⭐</span>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Family & Peer Relationships</h4>
                  <p className="text-pink-200">Navigate complex relationships with parents, friends, and romantic interests.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl text-pink-400 flex-shrink-0">⭐</span>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Future Anxiety</h4>
                  <p className="text-pink-200">Help with worries about the future, career choices, and life after high school.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Teen Advisory Board */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 mb-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Built With Real Teen Input</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Our teen advisory board ensures YourAngel truly understands and addresses the real challenges you face every day.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-pink-500/10 rounded-2xl p-6">
                <div className="text-4xl mb-4">👥</div>
                <h4 className="text-lg font-bold text-white mb-2">Teen Advisory Board</h4>
                <p className="text-pink-200">Real teens guiding our development</p>
              </div>
              <div className="bg-pink-500/10 rounded-2xl p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-lg font-bold text-white mb-2">User Testing</h4>
                <p className="text-pink-200">Continuous feedback from teen users</p>
              </div>
              <div className="bg-pink-500/10 rounded-2xl p-6">
                <div className="text-4xl mb-4">💡</div>
                <h4 className="text-lg font-bold text-white mb-2">Feature Requests</h4>
                <p className="text-pink-200">Your ideas shape our roadmap</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              to="/"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform"
            >
              Join Our Teen Community
              <span className="ml-2 text-xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}