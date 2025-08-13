import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, Lock, UserCheck, FileText, Clock } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-green-500/20 rounded-full mb-6">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Privacy Policy &
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Terms
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Your privacy and safety are our absolute priorities. Here's exactly how we protect you.
          </p>
          <div className="mt-6 text-sm text-gray-400">
            Last updated: August 10, 2024
          </div>
        </div>

        {/* Quick Summary */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-400/30 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Eye className="w-6 h-6 text-green-400" />
            TL;DR - The Important Stuff
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-green-200">We will NEVER sell your data to anyone</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-green-200">Your conversations are encrypted and private</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-green-200">You can delete your data anytime</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-green-200">We only collect what's necessary for the service</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-green-200">No tracking, no ads, no hidden agenda</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-green-200">Designed specifically for teen safety</p>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Policy Sections */}
        <div className="space-y-12">
          {/* Data Collection */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <UserCheck className="w-8 h-8 text-purple-400" />
              What Information We Collect
            </h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Account Information</h3>
                <p className="leading-relaxed">
                  When you sign up for early access, we collect your email address, country, age, gender, and main concerns. 
                  This helps us understand our users and improve our service for teenagers specifically.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Usage Data</h3>
                <p className="leading-relaxed">
                  We collect basic usage statistics (like how often you use the app) to improve our service. 
                  We do NOT read, store, or analyze the content of your conversations with YourAngel.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Technical Information</h3>
                <p className="leading-relaxed">
                  Basic technical data like your device type and app version to ensure YourAngel works properly on your device.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Data */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8 text-blue-400" />
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>To provide and improve YourAngel's mental health support services</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>To send you important updates about the service (you can opt out anytime)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>To understand how to better serve teenagers' mental health needs</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>To ensure the safety and security of our platform</p>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-green-400" />
              How We Protect Your Data
            </h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Encryption</h3>
                <p className="leading-relaxed">
                  All your conversations are encrypted using industry-standard security measures. 
                  Even our team cannot read your private conversations with YourAngel.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Secure Storage</h3>
                <p className="leading-relaxed">
                  Your data is stored on secure servers with multiple layers of protection and regular security audits.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Access Controls</h3>
                <p className="leading-relaxed">
                  Only authorized personnel have access to necessary data, and all access is logged and monitored.
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-pink-400" />
              Your Rights & Control
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p><strong className="text-white">Access:</strong> You can request a copy of all data we have about you</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p><strong className="text-white">Correction:</strong> You can update or correct your information anytime</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p><strong className="text-white">Deletion:</strong> You can delete your account and all associated data</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p><strong className="text-white">Portability:</strong> You can export your data in a readable format</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p><strong className="text-white">Opt-out:</strong> You can unsubscribe from communications anytime</p>
              </div>
            </div>
          </section>

          {/* Terms of Service */}
          <section className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-yellow-400" />
              Terms of Service
            </h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Service Description</h3>
                <p className="leading-relaxed">
                  YourAngel provides AI-powered mental health support specifically designed for teenagers. 
                  Our service is not a replacement for professional medical care or emergency services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Age Requirements</h3>
                <p className="leading-relaxed">
                  YourAngel is designed for users aged 13-19. Users under 18 should have parental awareness of their use of mental health support services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Emergency Situations</h3>
                <p className="leading-relaxed">
                  If you're in immediate danger, please contact emergency services (911, 988 Suicide & Crisis Lifeline, or your local emergency number) immediately. 
                  YourAngel is not designed for emergency situations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Acceptable Use</h3>
                <p className="leading-relaxed">
                  Please use YourAngel respectfully and for its intended purpose of mental health support. 
                  Misuse of the service may result in account suspension.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Questions About Privacy?</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              We're committed to transparency. If you have any questions about how we handle your data, 
              please don't hesitate to reach out.
            </p>
            <div className="space-y-4">
              <p className="text-white">
                <strong>Email:</strong> yourangelbuisness@gmail.com
              </p>
              <p className="text-gray-300 text-sm">
                We typically respond within 24 hours
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            to="/"
            className="inline-flex items-center text-white hover:text-purple-400 transition-colors group"
          >
            <span className="mr-2 text-xl group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}