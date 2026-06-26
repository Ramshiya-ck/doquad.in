import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Why Custom ERP/CRM Solutions are Crucial for Growing Businesses',
      excerpt: 'Learn how tailored business software can streamline workflows, centralize operations, and drive growth compared to off-the-shelf software.',
      category: 'Enterprise',
      date: 'Jun 24, 2026',
      readTime: '6 min read',
      gradientClass: 'from-blue-500 to-indigo-600',
    },
    {
      id: 2,
      title: '10 Web Design and UX Trends to Dominating the Digital Space in 2026',
      excerpt: 'Discover the latest visual styles, animation trends, and interaction behaviors that make websites feel premium and conversion-focused.',
      category: 'Design',
      date: 'Jun 18, 2026',
      readTime: '4 min read',
      gradientClass: 'from-emerald-500 to-teal-600',
    },
    {
      id: 3,
      title: 'The Future of E-Commerce: Headless Architecture & Mobile-First Shops',
      excerpt: 'Explore why modern online storefronts are decoupling their frontends from databases to deliver lightning-fast loading speeds.',
      category: 'E-Commerce',
      date: 'Jun 10, 2026',
      readTime: '5 min read',
      gradientClass: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            Our Blog & Insights
          </span>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-slate-900 mt-3 tracking-tight">
            Stay Ahead with Latest Tech Insights
          </h2>
          <p className="text-slate-500 text-[16px] md:text-lg mt-4 leading-relaxed">
            Discover articles, guides, and trends to help your business leverage digital technology successfully.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-slate-50/60 border border-slate-100 rounded-[2.5rem] overflow-hidden flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(15,95,253,0.04)] hover:-translate-y-1.5 transition-all duration-300 group h-full"
            >
              {/* Card Banner */}
              <div className={`h-48 bg-gradient-to-br ${post.gradientClass} relative p-6 flex flex-col justify-between text-white overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 opacity-30 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="self-start text-[11px] font-extrabold uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {post.category}
                </span>
                
                <div className="absolute right-[-10%] bottom-[-10%] w-32 h-32 bg-white/10 rounded-full filter blur-xl opacity-50 group-hover:scale-110 transition-transform duration-500" />
                
                <h4 className="font-extrabold text-lg leading-snug tracking-tight z-10">
                  {post.category} Focus
                </h4>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow justify-between text-left">
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-800 mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 text-[14px] leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <a
                  href="#blog"
                  className="text-primary font-bold text-[14px] inline-flex items-center gap-1.5 group/link cursor-pointer hover:text-primary-dark transition-colors self-start mt-auto"
                >
                  Read Full Article
                  <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
