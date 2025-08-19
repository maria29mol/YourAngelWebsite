import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, X, User } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  gradient: string;
  content: string;
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Loneliness in the Age of Connection: Why it happens and how to address it',
    excerpt: 'In an age where you can reach and connect with millions of people all over the world, why do we feel like we are further isolated?',
    date: 'January 15, 2025',
    readTime: '8 min read',
    author: 'YourAngel Team',
    category: 'Mental Health',
    gradient: 'from-purple-500/20 via-pink-500/20 to-blue-500/20',
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <p class="text-xl text-gray-300 leading-relaxed mb-8">In an age where you can reach and connect with millions of people all over the world, why do we feel like we are further isolated?</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">In this post, we'll explore what the loneliness epidemic really is, why it's happening, and what YOU can do about it.</p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">What is the "Loneliness Epidemic"?</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6">The loneliness epidemic is a trend of loneliness and social isolation experienced by people around the world. Said to have begun in the 2010s, it quickly became worse due to the isolating effects of social distancing, stay-at-home orders, and deaths during the recent COVID-19 pandemic. Individualism, technology and social media, economic inequality, lack of support, and lack of a college degree are also factors that are often credited for the increase.</p>

        <p class="text-gray-300 leading-relaxed mb-6">Although many blame the pandemic, the concept itself began to gain attention in the 2000s with researchers indicating rising rates of social isolation. <em>Bowling Alone</em>, written from Robert D. Putnam's 2000 study, was one of the first to see loneliness as an epidemic. He analyzed and took note of how decreased participation in civic life and community groups was weakening social bonds in the United States.</p>

        <p class="text-gray-300 leading-relaxed mb-6">Holt-Lunstad, Smith, and Layton's systematic review and meta-analysis in 2010 stated that the "modern way of life in industrialized countries" is drastically decreasing the quality of social relationships, somewhat due to people no longer living in close proximity with their extended families. Further review shows that the number of Americans reporting no close confidants had tripled. Over time, news did not get better — but it did get more attention.</p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Why is this happening?</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6">We mentioned technology, social media, and economic inequality, but is that really true?</p>

        <p class="text-gray-300 leading-relaxed mb-6">A study done by MCC researchers found a strong correlation between loneliness and mental health concerns. Of all adults surveyed, <strong class="text-purple-400">81% of adults who were lonely also said they suffered from anxiety or depression</strong> compared to the 29% who said they were less lonely. The report highlighted loneliness, anxiety, and depression in a complex interaction between troubled feelings all feeding into each other.</p>

        <p class="text-gray-300 leading-relaxed mb-6">According to a Harvard GSE study, technology was the leading cause of loneliness, with <strong class="text-pink-400">73% of people selecting technology as contributing to loneliness in America</strong>. Followed closely by insufficient time with family, which 66% chose. Other common reasons included overworking (busy or tired), mental health challenges that harm relationships with others, and living in a society that is too individualistic, which ranged around 60%. Around 50% of people surveyed selected religious or spiritual life, changing nature of work, and too much focus on one's own feelings as factors that influenced their loneliness.</p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">What can YOU do about it?</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6">More than three-quarters of people surveyed gave these solutions to loneliness:</p>

        <ul class="list-disc list-inside text-gray-300 leading-relaxed mb-8 space-y-2">
          <li><strong class="text-blue-400">Reach out to family or friends</strong></li>
          <li><strong class="text-green-400">Learn to love myself</strong></li>
          <li><strong class="text-yellow-400">Learn to be more forgiving of others</strong></li>
          <li><strong class="text-purple-400">Find ways to help others</strong></li>
        </ul>

        <p class="text-gray-300 leading-relaxed mb-6">Among recommendations, the researchers at MCC emphasized the need to promote a culture that cares and serves others.</p>

        <blockquote class="border-l-4 border-purple-400 pl-6 my-8 bg-purple-500/10 p-6 rounded-r-lg">
          <p class="text-purple-200 italic text-lg">"Collective service can provide important connections that relieve loneliness, cultivate meaning and purpose and mitigate mental health challenges."</p>
        </blockquote>

        <p class="text-gray-300 leading-relaxed mb-6">Public and private leaders were also urged to build up social infrastructure in order to aid people in developing meaningful relationships with others.</p>

        <p class="text-gray-300 leading-relaxed mb-6">If there is something you get from this blog, I want you to actively build social connections, engage in hobbies, and practice self-care. This includes joining clubs, volunteering, strengthening existing relationships, and even talking to strangers. Additionally, focusing on personal well-being through activities like exercise, healthy eating, and mindful practices can significantly improve mood and reduce feelings of isolation.</p>

        <div class="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-2xl p-8 my-12 text-center">
          <h3 class="text-2xl font-bold text-white mb-4">JUMP AT NEW OPPORTUNITIES EVEN WHEN YOU THINK YOU "CAN'T"!</h3>
          <p class="text-3xl font-black text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">BECAUSE YOU CAN.</p>
        </div>
      </div>
    `
  },
  // Placeholder articles for the grid
  {
    id: '2',
    title: 'Managing Academic Stress: A Teen\'s Guide to Success',
    excerpt: 'School pressure getting to you? Learn practical strategies to handle academic stress while maintaining your mental health.',
    date: 'January 10, 2025',
    readTime: '6 min read',
    author: 'YourAngel Team',
    category: 'Academic Wellness',
    gradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
    content: '<div class="prose prose-lg prose-invert max-w-none"><p class="text-xl text-gray-300">Coming soon...</p></div>'
  },
  {
    id: '3',
    title: 'Social Media and Mental Health: Finding Balance',
    excerpt: 'How to use social media mindfully and protect your mental health in the digital age.',
    date: 'January 5, 2025',
    readTime: '7 min read',
    author: 'YourAngel Team',
    category: 'Digital Wellness',
    gradient: 'from-green-500/20 via-emerald-500/20 to-cyan-500/20',
    content: '<div class="prose prose-lg prose-invert max-w-none"><p class="text-xl text-gray-300">Coming soon...</p></div>'
  },
  {
    id: '4',
    title: 'Building Healthy Relationships as a Teenager',
    excerpt: 'Navigate friendships, family relationships, and romantic connections with confidence and authenticity.',
    date: 'December 28, 2024',
    readTime: '9 min read',
    author: 'YourAngel Team',
    category: 'Relationships',
    gradient: 'from-pink-500/20 via-rose-500/20 to-red-500/20',
    content: '<div class="prose prose-lg prose-invert max-w-none"><p class="text-xl text-gray-300">Coming soon...</p></div>'
  },
  {
    id: '5',
    title: 'Understanding Anxiety: What Every Teen Should Know',
    excerpt: 'Demystify anxiety, learn to recognize the signs, and discover effective coping strategies.',
    date: 'December 20, 2024',
    readTime: '8 min read',
    author: 'YourAngel Team',
    category: 'Mental Health',
    gradient: 'from-yellow-500/20 via-orange-500/20 to-red-500/20',
    content: '<div class="prose prose-lg prose-invert max-w-none"><p class="text-xl text-gray-300">Coming soon...</p></div>'
  },
  {
    id: '6',
    title: 'Self-Care Isn\'t Selfish: A Teen\'s Self-Care Guide',
    excerpt: 'Learn why self-care is essential and discover practical ways to prioritize your wellbeing.',
    date: 'December 15, 2024',
    readTime: '5 min read',
    author: 'YourAngel Team',
    category: 'Self-Care',
    gradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20',
    content: '<div class="prose prose-lg prose-invert max-w-none"><p class="text-xl text-gray-300">Coming soon...</p></div>'
  }
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-black via-gray-900 to-purple-900/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, purple 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex p-6 bg-purple-500/20 rounded-full mb-8">
            <span className="text-6xl text-purple-400">📝</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Our 
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real talk about mental health, written by teens for teens. No fluff, just honest insights and practical advice.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={article.id}
              onClick={() => openArticle(article)}
              className="group cursor-pointer glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-400/30"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Category Badge */}
              <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${article.gradient} border border-white/20 mb-6`}>
                <span className="text-white font-medium text-sm">{article.category}</span>
              </div>

              {/* Article Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-3">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Article Meta */}
              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 font-medium">{article.author}</span>
                </div>
                
                {/* Read More Arrow */}
                <div className="flex items-center gap-2 text-purple-400 group-hover:text-pink-400 transition-colors">
                  <span className="font-medium">Read</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-lg"
            onClick={closeArticle}
          ></div>
          
          {/* Modal Container */}
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden animate-[popupSlideIn_0.5s_ease-out]">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
            
            {/* Main modal */}
            <div className="relative bg-gradient-to-br from-gray-900/95 via-purple-900/95 to-indigo-900/95 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="sticky top-0 bg-gray-900/90 backdrop-blur-lg border-b border-white/10 p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${selectedArticle.gradient} border border-white/20`}>
                    <span className="text-white font-medium text-sm">{selectedArticle.category}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{selectedArticle.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={closeArticle}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
                >
                  <X className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-8">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  {selectedArticle.title}
                </h1>

                {/* Author */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{selectedArticle.author}</div>
                    <div className="text-gray-400 text-sm">Mental Health Advocate</div>
                  </div>
                </div>

                {/* Article Content */}
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />

                {/* Call to Action */}
                <div className="mt-12 p-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Need Support Right Now?</h3>
                  <p className="text-gray-200 mb-6">YourAngel is here for you 24/7. Get the help you deserve.</p>
                  <button 
                    onClick={() => {
                      closeArticle();
                      const element = document.getElementById('early-access');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
                  >
                    Get Early Access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}