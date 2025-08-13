import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Heart, MessageCircle, Share2 } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "5 Signs You Might Need Mental Health Support (And That's Totally Okay)",
    excerpt: "Mental health isn't always obvious. Here are some signs that it might be time to reach out for support - and why that's actually a sign of strength.",
    author: "YourAngel Team",
    date: "2024-08-08",
    readTime: "4 min read",
    category: "Mental Health",
    image: "https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 234,
    comments: 18
  },
  {
    id: 2,
    title: "How AI is Revolutionizing Teen Mental Health Support",
    excerpt: "Discover how artificial intelligence is making mental health support more accessible, personalized, and effective for teenagers worldwide.",
    author: "Dr. Sarah Chen",
    date: "2024-08-05",
    readTime: "6 min read",
    category: "Technology",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 189,
    comments: 25
  },
  {
    id: 3,
    title: "Breaking the Stigma: Why Gen Z is Leading Mental Health Conversations",
    excerpt: "Your generation is changing how we talk about mental health. Here's why that matters and how you can be part of the movement.",
    author: "Alex Rivera",
    date: "2024-08-02",
    readTime: "5 min read",
    category: "Social Impact",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 312,
    comments: 42
  },
  {
    id: 4,
    title: "Anxiety at School: Practical Tips That Actually Work",
    excerpt: "From test anxiety to social situations, here are evidence-based strategies to help you manage anxiety in school settings.",
    author: "YourAngel Team",
    date: "2024-07-30",
    readTime: "7 min read",
    category: "Coping Strategies",
    image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 456,
    comments: 67
  },
  {
    id: 5,
    title: "The Science Behind Why Talking Helps (Even to an AI)",
    excerpt: "Ever wonder why just talking about your problems makes you feel better? Here's the fascinating science behind it.",
    author: "Dr. Michael Torres",
    date: "2024-07-28",
    readTime: "5 min read",
    category: "Science",
    image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 278,
    comments: 31
  },
  {
    id: 6,
    title: "Building Resilience: Your Mental Health Toolkit",
    excerpt: "Practical tools and techniques you can use every day to build emotional resilience and maintain good mental health.",
    author: "YourAngel Team",
    date: "2024-07-25",
    readTime: "8 min read",
    category: "Wellness",
    image: "https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 389,
    comments: 54
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-purple-500/20 rounded-full mb-6">
            <span className="text-4xl">📝</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            YourAngel
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Mental health insights, tips, and stories written for teens, by people who care about your wellbeing.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-gray-400 text-sm">{blogPosts[0].category}</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article 
              key={post.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Heart size={14} />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={14} />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-12 max-w-2xl mx-auto">
            <div className="text-4xl mb-4">💌</div>
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-200 mb-8">
              Get the latest mental health insights and YourAngel updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-purple-400"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl hover:scale-105 transition-transform font-medium">
                Subscribe
              </button>
            </div>
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