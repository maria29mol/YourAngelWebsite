import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Brain, Shield, Zap, Smartphone, Heart } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Open YourAngel",
    description: "Launch the app whenever you need support - day or night",
    icon: Smartphone,
    color: "from-blue-400 to-cyan-400"
  },
  {
    number: "02", 
    title: "Choose Your Mode",
    description: "Text chat or voice conversation - whatever feels comfortable",
    icon: MessageCircle,
    color: "from-purple-400 to-pink-400"
  },
  {
    number: "03",
    title: "Share What's On Your Mind",
    description: "Tell YourAngel what you're going through - no judgment, just support",
    icon: Heart,
    color: "from-pink-400 to-rose-400"
  },
  {
    number: "04",
    title: "Get Personalized Support",
    description: "Receive tailored guidance, coping strategies, and emotional support",
    icon: Brain,
    color: "from-green-400 to-emerald-400"
  }
];

const features = [
  {
    icon: Zap,
    title: "Instant Access",
    description: "No appointments, no waiting rooms. Support when you need it most.",
    color: "text-yellow-400"
  },
  {
    icon: Shield,
    title: "Completely Private",
    description: "Your conversations are encrypted and never shared with anyone.",
    color: "text-green-400"
  },
  {
    icon: Brain,
    title: "AI That Understands",
    description: "Trained specifically on teen mental health and your generation's challenges.",
    color: "text-purple-400"
  },
  {
    icon: Heart,
    title: "Always Caring",
    description: "Consistent, patient, and understanding support that's always available.",
    color: "text-pink-400"
  }
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-blue-500/20 rounded-full mb-6">
            <Zap className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            How It
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Works
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Getting mental health support shouldn't be complicated. With YourAngel, help is just 2 clicks away.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Simple Steps to Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative mb-8">
                    <div className={`inline-flex p-6 rounded-3xl bg-gradient-to-r ${step.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Demo Section */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            See YourAngel in Action
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/50 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">YourAngel Chat</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-purple-500 text-white px-4 py-2 rounded-2xl rounded-br-sm max-w-xs">
                    Hey, I'm feeling really anxious about my math test tomorrow 😰
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-2xl rounded-bl-sm max-w-xs">
                    I hear you - test anxiety is really tough. Let's work through this together. What specifically about the test is making you feel most anxious? 💙
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-purple-500 text-white px-4 py-2 rounded-2xl rounded-br-sm max-w-xs">
                    I studied but I keep thinking I'll forget everything
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-2xl rounded-bl-sm max-w-xs">
                    That's such a common worry! Your brain is actually really good at remembering what you've studied. Want to try a quick breathing exercise to calm those nerves? ✨
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-300 text-sm">
              Real conversation example - YourAngel provides personalized, empathetic support
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why YourAngel Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Availability */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center mb-20">
          <div className="text-6xl mb-6">🌙</div>
          <h2 className="text-3xl font-bold text-white mb-6">
            Available When You Need It Most
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Mental health challenges don't follow a schedule. That's why YourAngel is available 24/7, 
            365 days a year - including weekends, holidays, and those tough 3am moments.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-500/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">🌅</div>
              <h4 className="text-lg font-bold text-white mb-2">Morning Support</h4>
              <p className="text-purple-200 text-sm">Start your day with confidence</p>
            </div>
            <div className="bg-purple-500/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">🌞</div>
              <h4 className="text-lg font-bold text-white mb-2">Daytime Help</h4>
              <p className="text-purple-200 text-sm">Navigate school and social challenges</p>
            </div>
            <div className="bg-purple-500/10 rounded-2xl p-6">
              <div className="text-3xl mb-3">🌙</div>
              <h4 className="text-lg font-bold text-white mb-2">Nighttime Care</h4>
              <p className="text-purple-200 text-sm">Find peace when sleep won't come</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Try YourAngel?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of teens who are already finding their path to better mental health with YourAngel.
            </p>
            <Link 
              to="/"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform"
            >
              Get Early Access
              <span className="ml-2 text-xl">→</span>
            </Link>
          </div>
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