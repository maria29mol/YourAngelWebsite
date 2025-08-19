import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    date: 'August 13, 2025',
    readTime: '4 min read',
    author: 'Siddarth Maddur',
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
  {
    id: '2',
    title: 'Under the GPA: How Academic Pressure Shapes Teen Mental Health — and What You Can Do',
    excerpt: 'You\'ve been sitting at your desk for hours, forcing yourself to study for an important test that\'ll determine your entire future. Sounds familiar?',
    date: 'August 19, 2025',
    readTime: '3 min read',
    author: 'Linda Pham',
    category: 'Academic Stress',
    gradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
    content: `
      <div class="prose prose-lg prose-invert max-w-none">
        <p class="text-xl text-gray-300 leading-relaxed mb-8">You've been sitting at your desk for hours, forcing yourself to study for an important test that'll determine your entire future. Sounds familiar? How did that scenario make you feel? If it is anything like the growing pressures of academic stress hitting teens across the world, your thoughts were overwhelmed and probably filled with anxiety.</p>
        
        <p class="text-gray-300 leading-relaxed mb-6">Here, we'll be exploring how academic pressure seeps into teens' and students' lives, why it's so commonly normalized, and effective ways to manage academic stress.</p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Understanding Academic Pressure</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6">We often treat academic pressure like it's just "part of school life." But the truth? It's much deeper — and much more damaging.</p>

        <p class="text-gray-300 leading-relaxed mb-6">A comprehensive review of <strong class="text-red-400">52 studies</strong> found a strong link between academic pressure and mental health issues in adolescents, including depression, anxiety, and suicidal thoughts. Notably, <strong class="text-orange-400">48 of these studies</strong> reported a positive association between academic pressure and at least one mental health outcome.</p>

        <p class="text-gray-300 leading-relaxed mb-6">In places where academics are stressed in society and often an indicator or a pathway to a successful job, the consequences for students' mental health under this oppressive environment become worse, often fatal. In South Korea, a society known for its emphasis on education, the intense academic pressure has been linked to high suicide rates among students aged 10–19 years old. Studies indicate that <strong class="text-blue-400">46% of high school students in Seoul experience depression</strong> due to academic stress, leading to suicidal ideation and attempts. While this example is extreme, similar patterns show up in schools everywhere, maybe even in yours.</p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Why Is This a Prevalent Issue?</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6">As we move into the future, where education becomes increasingly accessible and necessary, it also becomes more competitive. College admissions are tougher than ever. More students are taking AP/IB classes, extracurricular leadership roles, and volunteer work just to stand out. For example, yesterday's <strong class="text-purple-400">12% Harvard acceptance</strong> is today's <strong class="text-pink-400">4%</strong> — making elite college dreams that much harder.</p>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Tips to Manage Academic Pressure</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6">Although it can be overwhelming and stressful, there are also many coping strategies and tips to get through school while maintaining good mental health. Here are some ways:</p>

        <div class="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-6 my-8">
          <h3 class="text-xl font-bold text-white mb-4">1. Break down big goals or tasks into smaller, more manageable pieces</h3>
          <p class="text-green-200">Instead of focusing on "I need an A this semester," focus on "I'll finish this one assignment today."</p>
        </div>

        <div class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl p-6 my-8">
          <h3 class="text-xl font-bold text-white mb-4">2. Learn to say "no."</h3>
          <p class="text-purple-200">You can't join every club, take every AP, or say yes to everything. Overcommitment is a major predictor of academic stress.</p>
        </div>

        <div class="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-2xl p-6 my-8">
          <h3 class="text-xl font-bold text-white mb-4">3. Build a supporting community around you.</h3>
          <p class="text-blue-200">Being able to talk to someone — to friends, parents, or counselors — when you feel pressure building. Outside support is crucial; you can't keep everything to yourself.</p>
        </div>

        <h2 class="text-3xl font-bold text-white mt-12 mb-6">Takeaways</h2>
        
        <p class="text-gray-300 leading-relaxed mb-6">Academic pressure is real, but it doesn't define your worth. By recognizing stress, taking small actionable steps, and reaching out for support, you can manage pressure without letting it consume your life. Start with just one of these strategies today — your mind (and your GPA) will thank you.</p>

        <div class="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl p-8 my-12 text-center">
          <h3 class="text-2xl font-bold text-white mb-4">Remember: You are more than your grades!</h3>
          <p class="text-2xl font-black text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">Your worth isn't measured by your GPA.</p>
        </div>
      </div>
    `
  }
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900/20 relative overflow-hidden flex items-center justify-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, purple 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Loading content */}
        <div className="relative z-10 text-center">
          {/* Animated logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="YourAngel Logo" 
                className="h-20 w-auto animate-pulse"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.8)) drop-shadow(0 0 60px rgba(236, 72, 153, 0.6))'
                }}
              />
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-purple-400/30 via-pink-400/30 to-blue-400/30 animate-spin opacity-60" style={{animationDuration: '3s'}}></div>
            </div>
          </div>

          {/* Loading text */}
          <h2 className="text-3xl font-bold text-white mb-4">
            Loading 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ml-2">
              Blog
            </span>
          </h2>
          <p className="text-gray-300 mb-8">Preparing amazing content for you...</p>

          {/* Loading dots */}
          <div className="flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, purple 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-3 mb-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 hover:bg-white/20 hover:scale-105 transition-all duration-300 text-white font-medium group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex p-8 bg-purple-500/20 rounded-full mb-8 animate-pulse">
            <span className="text-6xl text-purple-400">📝</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">
            Our 
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift"
                  style={{lineHeight: '1.2', paddingTop: '0.05em', paddingBottom: '0.15em', marginTop: '-0.2em'}}>
              Blog
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real talk about mental health, written by teens for teens. No fluff, just honest insights and practical advice.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

          {/* Placeholder cards for future articles */}
          {[...Array(5)].map((_, index) => (
            <div 
              key={`placeholder-${index}`}
              className="glitter-container magic-glow animate-float-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 opacity-50"
              style={{animationDelay: `${(index + 1) * 0.2}s`}}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-500/20 to-gray-600/20 border border-white/20 mb-6">
                <span className="text-gray-400 font-medium text-sm">Coming Soon</span>
              </div>
              
              <div className="h-16 bg-gray-600/20 rounded-lg mb-4"></div>
              <div className="h-20 bg-gray-600/10 rounded-lg mb-6"></div>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>TBD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>-- min read</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-600/20 rounded-full"></div>
                  <span className="text-gray-500 font-medium">Author TBD</span>
                </div>
              </div>
            </div>
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
                  <Link 
                    to="/"
                    onClick={() => {
                      closeArticle();
                      setTimeout(() => {
                        const element = document.getElementById('early-access');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
                  >
                    Get Early Access
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}