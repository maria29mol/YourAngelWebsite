import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle, Sparkles } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Submitting email:', email);
    
    // Send email to Formspree
fetch('https://formspree.io/f/mjkoenad', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email }),
})
  .then(async (response) => {
    const data = await response.json();
    console.log('Response status:', response.status);
    console.log('Response data:', data);

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      alert('Formspree error: ' + (data?.error || 'Unknown error'));
    }
  })
  .catch((error) => {
    console.error('Network error:', error);
    alert('Network error — see console.');
  });
  };

  return (
    <section
  id="early-access"
  className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden"
>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Be the First to Find Your
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Light Path
              </span>
            </h2>
            <p className="text-2xl text-gray-200 mb-4">
              Be the first to experience YourAngel
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get exclusive early access, 
              help shape the future of teen mental health, and never feel alone again.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mb-12">
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for early access"
                    className="w-full pl-14 pr-6 py-6 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold py-6 px-12 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center"
                >
                  Get Early Access
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          ) : (
            <div className="mb-12 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">You're on the list! 🎉</h3>
              <p className="text-green-200">
                We'll notify you as soon as YourAngel is ready. Check your email for confirmation.
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Early Access</h3>
              <p className="text-gray-300">Be the first to try YourAngel before public launch</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-4">💝</div>
              <h3 className="text-xl font-bold text-white mb-2">Free Forever</h3>
              <p className="text-gray-300">Early adopters get lifetime free access to premium features</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Shape the Future</h3>
              <p className="text-gray-300">Your feedback will directly influence YourAngel's development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}