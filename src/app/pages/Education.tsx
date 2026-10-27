import { useState } from 'react';
import { BookOpen, Download, Clock, Tag, ArrowRight, Search } from 'lucide-react';

export default function Education() {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const topics = [
    { id: 'all', label: 'All Topics' },
    { id: 'pain', label: 'Pain Management' },
    { id: 'recovery', label: 'Recovery Tips' },
    { id: 'prevention', label: 'Prevention' },
    { id: 'anatomy', label: 'Anatomy' },
    { id: 'exercise', label: 'Exercise Science' },
  ];

  const resources = [
    {
      id: 1,
      title: 'Understanding Chronic Back Pain: Causes and Solutions',
      topic: 'pain',
      type: 'Guide',
      readTime: '8 min read',
      downloadable: true,
      excerpt: 'Comprehensive guide to understanding the root causes of chronic back pain and evidence-based treatment approaches.',
      tags: ['Back Pain', 'Chronic Pain', 'Treatment'],
    },
    {
      id: 2,
      title: 'Post-Surgery Recovery: What to Expect',
      topic: 'recovery',
      type: 'Article',
      readTime: '6 min read',
      downloadable: false,
      excerpt: 'A detailed timeline of post-surgical recovery, including milestones, common challenges, and how to optimize healing.',
      tags: ['Surgery', 'Recovery', 'Timeline'],
    },
    {
      id: 3,
      title: 'Ergonomics 101: Preventing Workplace Injuries',
      topic: 'prevention',
      type: 'Guide',
      readTime: '10 min read',
      downloadable: true,
      excerpt: 'Learn how to set up your workspace correctly to prevent repetitive strain injuries and musculoskeletal disorders.',
      tags: ['Ergonomics', 'Prevention', 'Workplace'],
    },
    {
      id: 4,
      title: 'The Science of Muscle Recovery',
      topic: 'exercise',
      type: 'Research',
      readTime: '12 min read',
      downloadable: true,
      excerpt: 'Evidence-based insights into muscle recovery mechanisms and optimal strategies for post-exercise healing.',
      tags: ['Muscle', 'Recovery', 'Science'],
    },
    {
      id: 5,
      title: 'Knee Anatomy: Understanding Your Joint',
      topic: 'anatomy',
      type: 'Guide',
      readTime: '7 min read',
      downloadable: true,
      excerpt: 'Detailed overview of knee anatomy, common injuries, and why understanding structure helps prevention and recovery.',
      tags: ['Knee', 'Anatomy', 'Education'],
    },
    {
      id: 6,
      title: 'Managing Pain Without Medication',
      topic: 'pain',
      type: 'Article',
      readTime: '9 min read',
      downloadable: false,
      excerpt: 'Explore non-pharmaceutical pain management techniques including manual therapy, exercise, and lifestyle modifications.',
      tags: ['Pain Management', 'Natural', 'Alternative'],
    },
    {
      id: 7,
      title: 'Preventing Sports Injuries: A Complete Guide',
      topic: 'prevention',
      type: 'Guide',
      readTime: '11 min read',
      downloadable: true,
      excerpt: 'Comprehensive strategies for athletes to prevent common sports injuries through proper warm-up, conditioning, and technique.',
      tags: ['Sports', 'Prevention', 'Athletes'],
    },
    {
      id: 8,
      title: 'Recovery Nutrition: Fueling Your Healing',
      topic: 'recovery',
      type: 'Article',
      readTime: '8 min read',
      downloadable: false,
      excerpt: 'Nutritional guidelines to support tissue repair, reduce inflammation, and optimize your recovery process.',
      tags: ['Nutrition', 'Recovery', 'Diet'],
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesTopic = selectedTopic === 'all' || resource.topic === selectedTopic;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTopic && matchesSearch;
  });

  return (
    <div className="bg-[#F0F0F0] dark:bg-[#111] min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-[#181818] dark:bg-[#0a0a0a] py-[120px] px-6 lg:px-[52px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(75,120,118,0.15),transparent)]" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6">
            <span className="block w-8 h-[1.5px] bg-current" />
            Knowledge Center
          </div>
          <h1 className="font-['Montserrat'] text-[clamp(3rem,6vw,5.5rem)] font-black leading-[1] tracking-[-0.04em] text-white mb-6">
            Education & <em className="italic text-[#4B7876]">Resources</em>
          </h1>
          <p className="text-[1.1rem] text-[rgba(240,240,240,0.6)] leading-[1.75] max-w-[700px]">
            Evidence-based articles, guides, and resources to empower your recovery journey with knowledge and understanding.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-white border-b border-[rgba(24,24,24,0.08)] sticky top-[72px] z-40">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-[52px] py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-[400px] w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999] w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-[rgba(24,24,24,0.1)] rounded-[8px] text-[0.9rem] focus:outline-none focus:border-[#4B7876] transition-colors"
              />
            </div>

            {/* Topic Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`px-4 py-2 rounded-[6px] text-[0.8rem] font-bold uppercase tracking-wide transition-all ${
                    selectedTopic === topic.id
                      ? 'bg-[#4B7876] text-white'
                      : 'bg-[rgba(75,120,118,0.08)] text-[#666] hover:bg-[rgba(75,120,118,0.15)]'
                  }`}
                >
                  {topic.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-[100px] px-6 lg:px-[52px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-[0.9rem] text-[#666]">
              Showing <strong>{filteredResources.length}</strong> resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="group bg-white rounded-[10px] p-8 border border-[rgba(24,24,24,0.08)] hover:border-[#4B7876] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(24,24,24,0.1)] cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#4B7876]" />
                    <span className="text-[0.75rem] font-bold uppercase tracking-wide text-[#4B7876]">
                      {resource.type}
                    </span>
                  </div>
                  {resource.downloadable && (
                    <div className="w-8 h-8 rounded-[6px] bg-[rgba(75,120,118,0.1)] flex items-center justify-center group-hover:bg-[#4B7876] transition-colors">
                      <Download className="w-4 h-4 text-[#4B7876] group-hover:text-white transition-colors" />
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-['Montserrat'] text-[1.3rem] font-extrabold text-[#181818] mb-3 group-hover:text-[#4B7876] transition-colors leading-[1.2]">
                  {resource.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[0.9rem] text-[#666] leading-[1.7] mb-4">
                  {resource.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {resource.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 bg-[rgba(75,120,118,0.08)] px-3 py-1 rounded-[6px]"
                    >
                      <Tag className="w-3 h-3 text-[#4B7876]" />
                      <span className="text-[0.7rem] text-[#666] font-medium">{tag}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-[rgba(24,24,24,0.06)]">
                  <div className="flex items-center gap-2 text-[0.75rem] text-[#999]">
                    <Clock className="w-3 h-3" />
                    {resource.readTime}
                  </div>
                  <div className="flex items-center gap-2 text-[0.75rem] font-bold uppercase text-[#4B7876] tracking-wide group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[1rem] text-[#999] mb-2">No resources found</p>
              <p className="text-[0.85rem] text-[#ccc]">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Topics */}
      <section className="bg-[#181818] py-[100px] px-6 lg:px-[52px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-white mb-4">
              Popular <em className="italic text-[#4B7876]">Topics</em>
            </h2>
            <p className="text-[1rem] text-[rgba(240,240,240,0.5)]">
              Explore our most requested educational resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💊', title: 'Pain Science', count: '12 articles' },
              { icon: '🏃', title: 'Exercise Therapy', count: '18 guides' },
              { icon: '🧠', title: 'Mental Health', count: '8 resources' },
              { icon: '🔬', title: 'Research Updates', count: '15 studies' },
            ].map((topic, idx) => (
              <div
                key={idx}
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[10px] p-8 text-center hover:border-[#4B7876] transition-all duration-300 cursor-pointer group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {topic.icon}
                </div>
                <h3 className="font-['Montserrat'] text-[1.2rem] font-bold text-white mb-2">
                  {topic.title}
                </h3>
                <p className="text-[0.8rem] text-[rgba(240,240,240,0.4)]">
                  {topic.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-white py-[100px] px-6 lg:px-[52px]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="font-['Montserrat'] text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#181818] mb-5">
            Stay <em className="italic text-[#4B7876]">Informed</em>
          </h2>
          <p className="text-[1rem] text-[#666] mb-10 leading-[1.7]">
            Get the latest research, recovery tips, and expert insights delivered to your inbox monthly.
          </p>
          <a
            href="/newsletter"
            className="inline-block bg-[#4B7876] text-white font-['Montserrat'] font-extrabold text-[0.82rem] tracking-[0.14em] uppercase px-11 py-[18px] rounded-full transition-all duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_8px_40px_rgba(75,120,118,0.35)] hover:bg-[#181818] hover:-translate-y-[3px] hover:shadow-[0_16px_50px_rgba(75,120,118,0.2)]"
          >
            Subscribe Now
          </a>
        </div>
      </section>
    </div>
  );
}