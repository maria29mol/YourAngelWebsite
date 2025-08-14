import React, { useState } from 'react';
import { supabase, type EarlyAccessUser } from '../lib/supabase';

const countries = [
  // Major Powers & G7
  'United States', 'China', 'Japan', 'Germany', 'United Kingdom', 'France', 'Italy', 'Canada',
  
  // Major Economies & G20
  'India', 'Brazil', 'Russia', 'South Korea', 'Australia', 'Mexico', 'Indonesia', 'Turkey',
  'Saudi Arabia', 'Argentina', 'South Africa', 'Spain', 'Netherlands', 'Switzerland',
  
  // European Union Countries
  'Poland', 'Belgium', 'Ireland', 'Austria', 'Sweden', 'Norway', 'Denmark', 'Finland',
  'Portugal', 'Greece', 'Czech Republic', 'Romania', 'Hungary', 'Bulgaria', 'Croatia',
  'Slovakia', 'Slovenia', 'Lithuania', 'Latvia', 'Estonia', 'Luxembourg', 'Malta', 'Cyprus',
  
  // Major Asian Countries
  'Thailand', 'Singapore', 'Malaysia', 'Philippines', 'Vietnam', 'Bangladesh', 'Pakistan',
  'Sri Lanka', 'Myanmar', 'Cambodia', 'Laos', 'Nepal', 'Bhutan', 'Maldives',
  
  // Middle East & North Africa
  'United Arab Emirates', 'Israel', 'Iran', 'Iraq', 'Egypt', 'Morocco', 'Algeria',
  'Tunisia', 'Libya', 'Jordan', 'Lebanon', 'Syria', 'Yemen', 'Oman', 'Qatar',
  'Bahrain', 'Kuwait', 'Afghanistan',
  
  // Sub-Saharan Africa
  'Nigeria', 'Ethiopia', 'Kenya', 'Uganda', 'Tanzania', 'Ghana', 'Mozambique',
  'Madagascar', 'Cameroon', 'Angola', 'Zambia', 'Zimbabwe', 'Botswana', 'Namibia',
  'Malawi', 'Rwanda', 'Burundi', 'Democratic Republic of Congo', 'Republic of Congo',
  'Gabon', 'Equatorial Guinea', 'Central African Republic', 'Chad', 'Sudan',
  'South Sudan', 'Eritrea', 'Djibouti', 'Somalia', 'Senegal', 'Mali', 'Burkina Faso',
  'Niger', 'Guinea', 'Sierra Leone', 'Liberia', 'Ivory Coast', 'Togo', 'Benin',
  'Mauritania', 'Gambia', 'Guinea-Bissau', 'Cape Verde', 'Sao Tome and Principe',
  'Comoros', 'Mauritius', 'Seychelles', 'Lesotho', 'Eswatini',
  
  // Latin America & Caribbean
  'Colombia', 'Chile', 'Peru', 'Venezuela', 'Ecuador', 'Bolivia', 'Paraguay', 'Uruguay',
  'Guyana', 'Suriname', 'French Guiana', 'Cuba', 'Dominican Republic', 'Haiti',
  'Jamaica', 'Trinidad and Tobago', 'Barbados', 'Saint Lucia', 'Grenada',
  'Saint Vincent and the Grenadines', 'Antigua and Barbuda', 'Dominica',
  'Saint Kitts and Nevis', 'Bahamas', 'Belize', 'Costa Rica', 'Panama',
  'Nicaragua', 'Honduras', 'El Salvador', 'Guatemala',
  
  // Central Asia & Caucasus
  'Kazakhstan', 'Uzbekistan', 'Turkmenistan', 'Kyrgyzstan', 'Tajikistan',
  'Georgia', 'Armenia', 'Azerbaijan',
  
  // Eastern Europe (Non-EU)
  'Ukraine', 'Belarus', 'Moldova', 'Serbia', 'Bosnia and Herzegovina',
  'Montenegro', 'North Macedonia', 'Albania', 'Kosovo',
  
  // Pacific Islands
  'New Zealand', 'Papua New Guinea', 'Fiji', 'Solomon Islands', 'Vanuatu',
  'Samoa', 'Tonga', 'Kiribati', 'Tuvalu', 'Nauru', 'Palau', 'Marshall Islands',
  'Micronesia',
  
  // Other
  'Mongolia', 'Iceland', 'Andorra', 'Monaco', 'Liechtenstein', 'San Marino',
  'Vatican City', 'Other'
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
    age: 0,
    gender: '',
    main_pain_point: '',
    how_did_you_hear: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'age') {
      // Only allow numbers for age field
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: parseInt(numericValue) || 0
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    setError(''); // Clear error when user starts typing
  };

  const validateForm = () => {
    if (!formData.email || !formData.country || !formData.gender || !formData.main_pain_point || !formData.how_did_you_hear) {
      setError('Please fill in all required fields');
      return false;
    }
    if (formData.age < 13 || formData.age > 19) {
    }
    if (formData.age < 1 || formData.age > 150) {
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
        age: 0,
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
            <div className="text-6xl mx-auto mb-6 animate-pulse">✨</div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Join the Elite &
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-relaxed py-2">
                Get VIP Access
              </span>
            </h2>
            <p className="text-2xl text-gray-200 mb-4">
              Be part of the founding 1,000 members
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Only 1,000 founding member spots available. Get exclusive access, special perks, and help shape the future of teen mental health.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mb-12">
              <div className="max-w-2xl mx-auto space-y-6">
                {/* Email */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400">📧</span>
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
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400">🌍</span>
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
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400">📅</span>
                    <input
                      type="text"
                      name="age"
                      value={formData.age || ''}
                      onChange={handleInputChange}
                      placeholder="Enter your age *"
                      className="w-full pl-14 pr-6 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400">👤</span>
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
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400">💖</span>
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
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400">📻</span>
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
                  {!isLoading && <span className="ml-3 text-2xl group-hover:translate-x-1 transition-transform">→</span>}
                </button>

                <p className="text-gray-400 text-sm text-center">
                  * Required fields. <strong className="text-white">We will NOT under ANY circumstance share your data.</strong>
                </p>
              </div>
            </form>
          ) : (
            <div className="mb-12 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="text-5xl text-green-400 mx-auto mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-2">You're on the list! 🎉</h3>
              <p className="text-green-200">
                Thank you for joining our early access program. We'll notify you as soon as YourAngel is ready!
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Founding Member</h3>
              <p className="text-gray-300">Be one of the first 1,000 exclusive users</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-4">💝</div>
              <h3 className="text-xl font-bold text-white mb-2">VIP Treatment</h3>
              <p className="text-gray-300">Exclusive perks, priority support, and special recognition</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">Shape the Future</h3>
              <p className="text-gray-300">Help us build the perfect mental health app for teens</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}