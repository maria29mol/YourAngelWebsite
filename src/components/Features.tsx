import React from 'react';
import { MessageCircle, Mic, Brain, Clock, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: "Text & Voice Support",
    description: "Chat or talk - whatever feels comfortable. Our AI adapts to your preferred communication style.",
    color: "from-blue-400 to-cyan-400"
  },
  {
    icon: Brain,
    title: "AI Mental Health Expert",
    description: "Trained on teen-specific mental health data with evidence-based therapeutic approaches.",
    color: "from-purple-400 to-pink-400"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Crisis doesn't wait for business hours. Neither do we. Always here when you need support.",
    color: "from-green-400 to-emerald-400"
  },
  {
    icon: Zap,
    title: "2-Click Access",
    description: "Open app, tap help. That's it. No lengthy forms or waiting rooms when you're in crisis.",
    color: "from-yellow-400 to-orange-400"
  },
  {
    icon: Users,
    title: "Teen-Focused",
    description: "Built by teens, for teens. We understand your world, your language, and your struggles.",
    color: "from-indigo-400 to-purple-400"
  },
  {
    icon: Brain,
    title: "Multiple Issues",
    description: "Anxiety, stress, sleep, eating, academic pressure - we're equipped to help with it all.",
    color: "from-pink-400 to-rose-400"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Why <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">YourAngel</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another mental health app. We're your digital guardian angel, 
            designed specifically for the unique challenges teens face today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-white/20"
            >
              {/* Logo watermark */}
              <div className="absolute top-4 right-4 opacity-10">
                <img 
                  src="/logo.png" 
                  alt="YourAngel Logo" 
                 className="h-8 w-auto opacity-30 filter drop-shadow-lg"
                 style={{
                   filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))'
                 }}
                />
              </div>
              
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}