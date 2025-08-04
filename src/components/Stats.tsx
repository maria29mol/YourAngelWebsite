import React from 'react';
import { TrendingUp, Users, Heart, Zap } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: "1 in 5",
    label: "Teens experience mental health issues",
    color: "text-blue-400"
  },
  {
    icon: TrendingUp,
    number: "70%",
    label: "Don't receive adequate help",
    color: "text-purple-400"
  },
  {
    icon: Heart,
    number: "24/7",
    label: "YourAngel is always available",
    color: "text-pink-400"
  },
  {
    icon: Zap,
    number: "2 Clicks",
    label: "To get the help you need",
    color: "text-yellow-400"
  }
];

export default function Stats() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, purple 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            The Mental Health Crisis is 
            <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Real
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            But so is our solution. We're here to change these statistics, one teen at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-110 transition-transform duration-300"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-6 bg-white/5 rounded-full border border-white/10 group-hover:border-white/30 transition-colors">
                  <stat.icon className={`w-12 h-12 ${stat.color}`} />
                </div>
              </div>
              <div className={`text-5xl md:text-6xl font-black mb-4 ${stat.color}`}>
                {stat.number}
              </div>
              <p className="text-gray-300 text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Together, we can reshape global mental healthcare
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              YourAngel isn't just an app - it's a movement to ensure no teen suffers in silence.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-12 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl">
              Join the Movement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}