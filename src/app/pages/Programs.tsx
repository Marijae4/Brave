import { useState } from 'react';
import { Play, Clock, TrendingUp, Filter, Search, CheckCircle } from 'lucide-react';

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'back', label: 'Back Pain' },
    { id: 'mobility', label: 'Mobility' },
    { id: 'strength', label: 'Strength' },
    { id: 'posture', label: 'Posture' },
    { id: 'recovery', label: 'Post-Surgery' },
  ];

  const videos = [
    {
      id: 1,
      title: 'Lower Back Pain Relief Routine',
      category: 'back',
      duration: '12 min',
      level: 'Beginner',
      views: '2.4k',
      thumbnail: 'back-pain',
      description: 'Gentle exercises to reduce lower back pain and improve spinal mobility.',
    },
    {
      id: 2,
      title: 'Shoulder Mobility & Strength',
      category: 'mobility',
      duration: '15 min',
      level: 'Intermediate',
      views: '1.8k',
      thumbnail: 'shoulder',
      description: 'Comprehensive shoulder routine for improved range of motion and stability.',
    },
    {
      id: 3,
      title: 'Core Strengthening Fundamentals',
      category: 'strength',
      duration: '18 min',
      level: 'Beginner',
      views: '3.1k',
      thumbnail: 'core',
      description: 'Build a strong foundation with these essential core exercises.',
    },
    {
      id: 4,
      title: 'Posture Correction Program',
      category: 'posture',
      duration: '20 min',
      level: 'All Levels',
      views: '2.9k',
      thumbnail: 'posture',
      description: 'Correct poor posture habits with targeted exercises and stretches.',
    },
    {
      id: 5,
      title: 'Post-Surgical Knee Recovery',
      category: 'recovery',
      duration: '14 min',
      level: 'Beginner',
      views: '1.5k',
      thumbnail: 'knee',
      description: 'Safe and effective exercises for knee rehabilitation after surgery.',
    },
    {
      id: 6,
      title: 'Full Body Mobility Flow',
      category: 'mobility',
      duration: '25 min',
      level: 'Intermediate',
      views: '2.2k',
      thumbnail: 'full-body',
      description: 'Complete mobility routine targeting all major joints and muscle groups.',
    },
    {
      id: 7,
      title: 'Neck & Shoulder Tension Release',
      category: 'back',
      duration: '10 min',
      level: 'All Levels',
      views: '3.5k',
      thumbnail: 'neck',
      description: 'Quick relief for neck and shoulder tension from desk work.',
    },
    {
      id: 8,
      title: 'Advanced Core & Stability',
      category: 'strength',
      duration: '22 min',
      level: 'Advanced',
      views: '1.2k',
      thumbnail: 'advanced-core',
      description: 'Challenge your core with advanced stabilization exercises.',
    },
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F0F0F0] dark:bg-[#111] min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-[#181818] dark:bg-[#0a0a0a] py-[120px] px-6 lg:px-[52px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(75,120,118,0.15),transparent)]" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6">
            <span className="block w-8 h-[1.5px] bg-current" />
            Exercise Library
          </div>
          <h1 className="font-['Montserrat'] text-[clamp(3rem,6vw,5.5rem)] font-black leading-[1] tracking-[-0.04em] text-white mb-6">
            Guided Exercise <em className="italic text-[#4B7876]">Videos</em>
          </h1>
          <p className="text-[1.1rem] text-[rgba(240,240,240,0.6)] leading-[1.75] max-w-[700px]">
            Expert-led video programs designed to help you recover from pain, build strength, and improve mobility—all from the comfort of your home.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="bg-white border-b border-[rgba(24,24,24,0.08)] sticky top-[72px] z-40">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-[52px] py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-[400px] w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999] w-5 h-5" />
              <input
                type="text"
                placeholder="Search exercises..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-[rgba(24,24,24,0.1)] rounded-[8px] text-[0.9rem] focus:outline-none focus:border-[#4B7876] transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="text-[#666] w-4 h-4" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-[6px] text-[0.8rem] font-bold uppercase tracking-wide transition-all ${
                    selectedCategory === category.id
                      ? 'bg-[#4B7876] text-white'
                      : 'bg-[rgba(75,120,118,0.08)] text-[#666] hover:bg-[rgba(75,120,118,0.15)]'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-[100px] px-6 lg:px-[52px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-[0.9rem] text-[#666]">
              Showing <strong>{filteredVideos.length}</strong> programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="group bg-white rounded-[10px] overflow-hidden border border-[rgba(24,24,24,0.08)] hover:border-[#4B7876] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(24,24,24,0.1)] hover:-translate-y-2 cursor-pointer"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-[#4B7876] to-[#2d4a49] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[rgba(255,255,255,0.95)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-7 h-7 text-[#4B7876] ml-1" fill="#4B7876" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm px-3 py-1 rounded-[6px] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-white" />
                    <span className="text-[0.75rem] text-white font-bold">{video.duration}</span>
                  </div>

                  {/* Level Badge */}
                  <div className="absolute top-3 left-3 bg-[rgba(255,255,255,0.95)] backdrop-blur-sm px-3 py-1 rounded-[6px]">
                    <span className="text-[0.7rem] text-[#4B7876] font-bold uppercase tracking-wide">
                      {video.level}
                    </span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="font-['Montserrat'] text-[1.1rem] font-extrabold text-[#181818] mb-2 group-hover:text-[#4B7876] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-[0.85rem] text-[#666] leading-[1.6] mb-4">
                    {video.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(24,24,24,0.06)]">
                    <div className="flex items-center gap-2 text-[0.75rem] text-[#999]">
                      <TrendingUp className="w-3 h-3" />
                      {video.views} views
                    </div>
                    <div className="text-[0.75rem] font-bold uppercase text-[#4B7876] tracking-wide">
                      Watch Now
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[1rem] text-[#999] mb-2">No programs found</p>
              <p className="text-[0.85rem] text-[#ccc]">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#181818] py-[100px] px-6 lg:px-[52px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-white mb-4">
              Why Our <em className="italic text-[#4B7876]">Programs</em> Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎓',
                title: 'Expert Guidance',
                desc: 'Every video is created and demonstrated by certified physiotherapy professionals.',
              },
              {
                icon: '📊',
                title: 'Progressive Training',
                desc: 'Programs designed to gradually build strength and mobility at your own pace.',
              },
              {
                icon: '✅',
                title: 'Proven Results',
                desc: 'Evidence-based exercises that have helped thousands achieve their recovery goals.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[10px] p-8 text-center"
              >
                <div className="text-5xl mb-5">{feature.icon}</div>
                <h3 className="font-['Montserrat'] text-[1.2rem] font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[0.9rem] text-[rgba(240,240,240,0.5)] leading-[1.7]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}