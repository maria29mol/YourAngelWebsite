import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Globe, Clock, Heart, Shield } from 'lucide-react';

const crisisResources = [
  {
    name: "988 Suicide & Crisis Lifeline",
    number: "988",
    description: "24/7 free and confidential support for people in distress",
    availability: "24/7",
    methods: ["Phone", "Chat", "Text"],
    country: "USA"
  },
  {
    name: "Crisis Text Line",
    number: "Text HOME to 741741",
    description: "Free, 24/7 support for those in crisis",
    availability: "24/7",
    methods: ["Text"],
    country: "USA, Canada, UK"
  },
  {
    name: "National Child Abuse Hotline",
    number: "1-800-4-A-CHILD (1-800-422-4453)",
    description: "Professional crisis counselors available 24/7",
    availability: "24/7",
    methods: ["Phone"],
    country: "USA"
  },
  {
    name: "LGBTQ National Hotline",
    number: "1-888-843-4564",
    description: "Confidential support for LGBTQ+ youth and adults",
    availability: "Mon-Fri 4pm-12am ET, Sat 12pm-5pm ET",
    methods: ["Phone"],
    country: "USA"
  },
  {
    name: "International Association for Suicide Prevention",
    number: "Visit iasp.info/resources",
    description: "Crisis centers worldwide directory",
    availability: "Varies by location",
    methods: ["Phone", "Chat"],
    country: "International"
  }
];

export default function CrisisSupport() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-red-500/20 rounded-full mb-6">
            <Phone className="w-8 h-8 text-red-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Crisis
            <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Support
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            If you're in immediate danger or having thoughts of self-harm, please reach out for help right now.
          </p>
          
          {/* Emergency Alert */}
          <div className="bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-3xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-red-400" />
              <h2 className="text-2xl font-bold text-white">Emergency? Call Now</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div className="bg-red-500/10 rounded-2xl p-6">
                <div className="text-4xl mb-3">🚨</div>
                <h3 className="text-xl font-bold text-white mb-2">Immediate Danger</h3>
                <p className="text-red-200 mb-4">Call emergency services</p>
                <a 
                  href="tel:911" 
                  className="inline-block bg-red-500 text-white font-bold py-3 px-8 rounded-full hover:bg-red-600 transition-colors"
                >
                  Call 911
                </a>
              </div>
              <div className="bg-red-500/10 rounded-2xl p-6">
                <div className="text-4xl mb-3">💭</div>
                <h3 className="text-xl font-bold text-white mb-2">Suicidal Thoughts</h3>
                <p className="text-red-200 mb-4">24/7 crisis support</p>
                <a 
                  href="tel:988" 
                  className="inline-block bg-red-500 text-white font-bold py-3 px-8 rounded-full hover:bg-red-600 transition-colors"
                >
                  Call 988
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Crisis Support Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {crisisResources.map((resource, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-red-500/20 rounded-full">
                    <Phone className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{resource.name}</h3>
                    <p className="text-red-300 font-mono text-lg mb-2">{resource.number}</p>
                    <p className="text-gray-300 text-sm">{resource.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{resource.availability}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MessageCircle className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{resource.methods.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">{resource.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning Signs */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-3xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Warning Signs to Watch For
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">In Yourself</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Thoughts of death or suicide</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Feeling hopeless or trapped</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Extreme mood swings</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Withdrawing from friends and family</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Giving away possessions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">In Friends</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Talking about wanting to die</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sudden changes in behavior</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Increased substance use</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Saying goodbye unexpectedly</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Loss of interest in activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Help */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            How to Help a Friend in Crisis
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 bg-green-500/20 rounded-full mb-4">
                <Heart className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Listen</h3>
              <p className="text-gray-300">
                Take them seriously. Don't judge or try to fix everything. Just be there and listen.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-blue-500/20 rounded-full mb-4">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
              <p className="text-gray-300">
                Help them connect with professional support. Offer to call together or stay with them.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-purple-500/20 rounded-full mb-4">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Follow Up</h3>
              <p className="text-gray-300">
                Check in regularly. Let them know you care and that they're not alone in this.
              </p>
            </div>
          </div>
        </div>

        {/* YourAngel Support */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            YourAngel is Here for You
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            While YourAngel isn't designed for crisis situations, we're here to support you through 
            everyday mental health challenges. Get early access to have a supportive AI companion 
            available 24/7.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform"
          >
            Get Early Access to YourAngel
            <span className="ml-2 text-xl">→</span>
          </Link>
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