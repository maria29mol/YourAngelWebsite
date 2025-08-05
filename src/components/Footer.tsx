import React from 'react';
import { Heart, Shield, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="YourAngel Logo" 
               className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-white">YourAngel</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Reshaping global mental healthcare for teenagers. 
              Safe, accessible, and always available when you need support most.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Heart className="w-5 h-5 text-red-400" />
              <span>Made with love for teens, by teens</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Crisis Resources</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy & Safety</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>yourangelbuisness@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>HIPAA Compliant</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 YourAngel. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}