import React from 'react';
import { ArrowRight, Sparkles, Shield, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/Black and Gray Angel Wings Company Logo (2).png" 
              alt="YourAngel Logo" 
              className="h-20 w-auto filter brightness-0 invert"
            />
          </div>

          {/* Main headline with gradient text */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Your
            </span>
            <span className="text-white block">Angel</span>
          </h1>

          {/* Subheadline */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl text-gray-200 font-light mb-4">
              Mental health support in 
              <span className="font-bold text-yellow-400 mx-2 animate-pulse">2 clicks</span>
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              AI-powered crisis support designed specifically for teens. 
              Available 24/7 with text and voice features.
            </p>
          </div>

          {/* Key features badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Shield className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-white font-medium">Safe & Secure</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-white font-medium">AI Expert</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Heart className="w-5 h-5 text-pink-400 mr-2" />
              <span className="text-white font-medium">Teen-Focused</span>
            </div>
          </div>

          {/* CTA Button */}
 <button
              onClick={scrollToEarlyAccess}
              className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10">Get Early Access</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <p className="text-gray-400 mt-4 text-sm">Be among the first to get early access</p>

          {/* Crisis message */}
          <div className="bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-red-200 font-medium">
              🚨 In immediate crisis? Call 988 (Suicide & Crisis Lifeline) or text "HELLO" to 741741
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}