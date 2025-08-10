import React from 'react';
import { Link } from 'react-router-dom';

export default function SafeSecure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="p-6">
        <Link 
          to="/"
          className="inline-flex items-center text-white hover:text-green-400 transition-colors group"
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
            <div className="inline-flex p-6 bg-green-500/20 rounded-full mb-8">
              <span className="text-6xl text-green-400">🛡️</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Safe & 
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Secure
              </span>
            </h1>
            <p className="text-2xl text-gray-200 mb-8">
              Your privacy and safety are our absolute top priorities
            </p>
            <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-xl text-green-200 font-semibold">
                🔒 We will NOT under ANY circumstance share, sell, or distribute your personal data
              </p>
            </div>
          </div>

          {/* Security Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <span className="text-5xl text-green-400 mb-6 block">🔒</span>
              <h3 className="text-2xl font-bold text-white mb-4">End-to-End Encryption</h3>
              <p className="text-gray-300 leading-relaxed">
                All your conversations are encrypted with military-grade security. Even we can't read your messages - only you have the key.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <span className="text-5xl text-green-400 mb-6 block">👁️</span>
              <h3 className="text-2xl font-bold text-white mb-4">Zero Data Collection</h3>
              <p className="text-gray-300 leading-relaxed">
                We don't track, store, or analyze your personal conversations. Your mental health journey stays completely private.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <span className="text-5xl text-green-400 mb-6 block">🖥️</span>
              <h3 className="text-2xl font-bold text-white mb-4">Secure Infrastructure</h3>
              <p className="text-gray-300 leading-relaxed">
                Our infrastructure is built with security as a top priority, using industry-standard protection measures.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <span className="text-5xl text-green-400 mb-6 block">✅</span>
              <h3 className="text-2xl font-bold text-white mb-4">Anonymous by Design</h3>
              <p className="text-gray-300 leading-relaxed">
                You can use YourAngel completely anonymously. No real names, no personal identifiers required.
              </p>
            </div>
          </div>

          {/* Privacy Promise */}
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-3xl p-12 text-center">
            <div className="text-6xl text-green-400 mx-auto mb-6">📄</div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Privacy Promise</h2>
            <div className="space-y-4 text-lg text-green-200 max-w-2xl mx-auto">
              <p>✅ We will NEVER sell your data to third parties</p>
              <p>✅ We will NEVER share your conversations with anyone</p>
              <p>✅ We will NEVER use your data for advertising</p>
              <p>✅ We will NEVER store unnecessary personal information</p>
              <p>✅ You can delete your data at any time</p>
            </div>
            <div className="mt-8">
              <Link 
                to="/"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform"
              >
                Get Early Access
                <span className="ml-2 text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}