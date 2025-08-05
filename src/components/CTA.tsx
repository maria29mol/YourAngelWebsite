import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle, Sparkles, User, Globe, Calendar, Heart, Radio } from 'lucide-react';
import { supabase, type EarlyAccessUser } from '../lib/supabase';

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 
  'Spain', 'Italy', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Finland',
  'Japan', 'South Korea', 'Singapore', 'New Zealand', 'Ireland', 'Belgium',
  'Switzerland', 'Austria', 'Portugal', 'Other'
];

const genders = [
  'Female', 'Male', 'Non-binary', 'Prefer not to say', 'Other'
];

const painPoints = [
  'Anxiety', 'Depression', 'Stress', 'Sleep issues', 'Academic pressure',
  'Social anxiety', 'Body image', 'Family issues', 'Relationship problems',
  'Identity questions', 'Bullying', 'Eating concerns', 'Other'
];

const hearAboutUs = [
  'Instagram', 'TikTok', 'LinkedIn', 'Harvard & Harvard programs', 
  'Friends or Family', 'Other'
];

export default function CTA() {
  const [formData, setFormData] = useState<EarlyAccessUser>({
    email: '',
    country: '',
    age: 16,
    gender: '',
    main_pain_point: '',
    how_did_you_hear: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) || 16 : value
    }));
    setError(''); // Clear error when user starts typing
  };

  const validateForm = () => {
    if (!formData.email || !formData.country || !formData.gender || !formData.main_pain_point || !formData.how_did_you_hear) {
      setError('Please fill in all required fields');
      return false;
    }
    if (formData.age < 13 || formData.age > 19) {
    if (formData.age < 1 || formData.age > 120) {
      setError('Please enter a valid age');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      const { error: supabaseError } = await supabase
        .from('early_access_users')
        .insert([formData]);

      if (supabaseError) {
        if (supabaseError.code === '23505') { // Unique constraint violation
          setError('This email is already registered for early access');
        } else {
          setError('Failed to submit form. Please try again.');
        }
        return;
      }

      setIsSubmitted(true);
      setFormData({
        email: '',
        country: '',
        age: 16,
        gender: '',
        main_pain_point: '',
        how_did_you_hear: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Network error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
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
              <div className="max-w-2xl mx-auto space-y-6">
                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address *"
                    className="w-full pl-14 pr-6 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all"
                    required
                    disabled={isLoading}
                  />
                </div>

                {/* Country and Age Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full pl-14 pr-6 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all appearance-none"
                      required
                      disabled={isLoading}
                    >
                      <option value="" className="bg-gray-800">Select your country *</option>
                      {countries.map(country => (
                        <option key={country} value={country} className="bg-gray-800">{country}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      min="1"
                      max="120"
                      placeholder="Enter your age *"
                      className="w-full pl-14 pr-6 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full pl-14 pr-6 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all appearance-none"
                    required
                    disabled={isLoading}
                  >
                    <option value="" className="bg-gray-800">Select your gender *</option>
                    {genders.map(gender => (
                      <option key={gender} value={gender} className="bg-gray-800">{gender}</option>
                    ))}
                  </select>
                </div>

                {/* Main Pain Point (Required) */}
                <div className="relative">
                  <Heart className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <select
                    name="main_pain_point"
                    value={formData.main_pain_point}
                    onChange={handleInputChange}
                    className="w-full pl-14 pr-6 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all appearance-none"
                    required
                    disabled={isLoading}
                  >
                    <option value="" className="bg-gray-800">What's your main concern? *</option>
                    {painPoints.map(point => (
                      <option key={point} value={point} className="bg-gray-800">{point}</option>
                    ))}
                  </select>
                </div>

                {/* How did you hear about us */}
                <div className="relative">
                  <Radio className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <select
                    name="how_did_you_hear"
                    value={formData.how_did_you_hear}
                    onChange={handleInputChange}
                    className="w-full pl-14 pr-6 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all appearance-none"
                    required
                    disabled={isLoading}
                  >
                    <option value="" className="bg-gray-800">How did you hear about us? *</option>
                    {hearAboutUs.map(source => (
                      <option key={source} value={source} className="bg-gray-800">{source}</option>
                    ))}
                  </select>
                </div>
                {/* Error Message */}
                {error && (
                  <div className="bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-2xl p-4">
                    <p className="text-red-200 text-center">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold py-6 px-12 rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? 'Submitting...' : 'Get Early Access'}
                  {!isLoading && <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />}
                </button>

                <p className="text-gray-400 text-sm text-center">
                  * Required fields. We respect your privacy and will never share your data.
                </p>
              </div>
            </form>
          ) : (
            <div className="mb-12 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">You're on the list! 🎉</h3>
              <p className="text-green-200">
                Thank you for joining our early access program. We'll notify you as soon as YourAngel is ready!
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