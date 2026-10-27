import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const blogImages = [
  'https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'https://images.unsplash.com/photo-1643237131522-bbf79b062ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'https://images.unsplash.com/photo-1731514836024-614e2bab04c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'https://images.unsplash.com/photo-1765783801254-53b95d5694ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'https://images.unsplash.com/photo-1579854602908-ce7e7c29f4fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'https://images.unsplash.com/photo-1620924721217-93fd71e354ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
];

const content = {
  SRB: {
    heroTag: 'Blog i edukacija',
    heroTitle: 'Znanje koje lečí',
    heroDesc: 'Stručni tekstovi, saveti i edukativni sadržaj koji vam pomaže da bolje razumete svoje telo i preduzmete akciju.',
    categories: ['Sve', 'Oporavak', 'Prevencija', 'Vežbanje', 'Ishrana', 'Postura'],
    featuredTag: 'Istaknuto',
    featured: {
      category: 'Oporavak',
      title: '5 esencijalnih vežbi za olakšanje bola u donjem delu leđa',
      excerpt: 'Otkrijte vežbe zasnovane na dokazima koje mogu pomoći u smanjenju hroničnog bola u leđima i poboljšanju stabilnosti kičme. Program koji primenjujemo u klinici — sada dostupan i za kućnu upotrebu.',
      date: '15. mart 2026.',
      readTime: '6 min čitanja',
      img: blogImages[0],
      author: 'Dr. Ana Petrović',
    },
    posts: [
      {
        category: 'Prevencija',
        title: 'Kako sprečiti povrede pri trčanju',
        excerpt: 'Stručni saveti o pravilnoj tehnici trčanja, snažnom treningu i strategijama oporavka.',
        date: '10. mart 2026.',
        readTime: '5 min',
        img: blogImages[4],
        author: 'Marko Jovanović',
      },
      {
        category: 'Postura',
        title: 'Sindrom "text neck" — moderna epidemija',
        excerpt: 'Sve više pacijenata ima bol u vratu zbog korišćenja telefona. Evo šta je to i kako se leči.',
        date: '5. mart 2026.',
        readTime: '4 min',
        img: blogImages[1],
        author: 'Dr. Ana Petrović',
      },
      {
        category: 'Oporavak',
        title: 'Dry Needling vs. akupunktura — razlika',
        excerpt: 'Mnogi mešaju ove dve metode. Objašnjavamo šta je dry needling, kako funkcioniše i za koga je idealan.',
        date: '28. feb 2026.',
        readTime: '7 min',
        img: blogImages[2],
        author: 'Jelena Nikolić',
      },
      {
        category: 'Vežbanje',
        title: 'Core vežbe koje fizioterapeuti preporučuju',
        excerpt: 'Zaboravite trbušnjake — evo koje vežbe zaista jačaju mišiće stabilizatore kičme.',
        date: '20. feb 2026.',
        readTime: '5 min',
        img: blogImages[3],
        author: 'Marko Jovanović',
      },
      {
        category: 'Prevencija',
        title: 'Ergonomija radnog mesta — kompletan vodič',
        excerpt: 'Kako podesiti monitor, stolicu i tastaturu da smanjite rizik od nastanka bolova.',
        date: '12. feb 2026.',
        readTime: '8 min',
        img: blogImages[5],
        author: 'Dr. Ana Petrović',
      },
    ],
    readMore: 'Čitaj više',
    newsletterTitle: 'Prijavite se na newsletter',
    newsletterDesc: 'Jednom mesečno — stručni saveti, novi tekstovi i ekskluzivni popusti za pretplatnike.',
    newsletterPlaceholder: 'Vaša email adresa',
    newsletterBtn: 'Prijavite se',
    newsletterNote: 'Bez spama. Odjava jednim klikom.',
  },
  ENG: {
    heroTag: 'Blog & Education',
    heroTitle: 'Knowledge that heals',
    heroDesc: 'Expert articles, tips and educational content that helps you better understand your body and take action.',
    categories: ['All', 'Recovery', 'Prevention', 'Exercise', 'Nutrition', 'Posture'],
    featuredTag: 'Featured',
    featured: {
      category: 'Recovery',
      title: '5 Essential Exercises for Lower Back Pain Relief',
      excerpt: 'Discover evidence-based exercises that can help reduce chronic lower back pain and improve spinal stability. The program we use in the clinic — now available for home use.',
      date: 'March 15, 2026',
      readTime: '6 min read',
      img: blogImages[0],
      author: 'Dr. Ana Petrović',
    },
    posts: [
      {
        category: 'Prevention',
        title: 'How to Prevent Running Injuries',
        excerpt: 'Expert tips on proper running form, strength training, and recovery strategies to stay injury-free.',
        date: 'March 10, 2026',
        readTime: '5 min',
        img: blogImages[4],
        author: 'Marko Jovanović',
      },
      {
        category: 'Posture',
        title: '"Text Neck" Syndrome — The Modern Epidemic',
        excerpt: 'More and more patients have neck pain from phone use. Here is what it is and how it is treated.',
        date: 'March 5, 2026',
        readTime: '4 min',
        img: blogImages[1],
        author: 'Dr. Ana Petrović',
      },
      {
        category: 'Recovery',
        title: 'Dry Needling vs. Acupuncture — The Difference',
        excerpt: 'Many confuse these two methods. We explain what dry needling is, how it works and who it is ideal for.',
        date: 'Feb 28, 2026',
        readTime: '7 min',
        img: blogImages[2],
        author: 'Jelena Nikolić',
      },
      {
        category: 'Exercise',
        title: 'Core Exercises Physiotherapists Recommend',
        excerpt: 'Forget sit-ups — here are the exercises that truly strengthen spinal stabilizer muscles.',
        date: 'Feb 20, 2026',
        readTime: '5 min',
        img: blogImages[3],
        author: 'Marko Jovanović',
      },
      {
        category: 'Prevention',
        title: 'Workplace Ergonomics — The Complete Guide',
        excerpt: 'How to adjust your monitor, chair and keyboard to reduce the risk of pain.',
        date: 'Feb 12, 2026',
        readTime: '8 min',
        img: blogImages[5],
        author: 'Dr. Ana Petrović',
      },
    ],
    readMore: 'Read more',
    newsletterTitle: 'Subscribe to newsletter',
    newsletterDesc: 'Once a month — expert tips, new articles and exclusive discounts for subscribers.',
    newsletterPlaceholder: 'Your email address',
    newsletterBtn: 'Subscribe',
    newsletterNote: 'No spam. Unsubscribe with one click.',
  },
};

const categoryColors: Record<string, string> = {
  Oporavak: '#4B7876', Recovery: '#4B7876',
  Prevencija: '#6B9896', Prevention: '#6B9896',
  Vežbanje: '#8BABA9', Exercise: '#8BABA9',
  Postura: '#555', Posture: '#555',
  Ishrana: '#4B7876', Nutrition: '#4B7876',
};

export default function Blog() {
  const { lang } = useLanguage();
  const t = content[lang];

  const [activeCategory, setActiveCategory] = useState('Sve');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveCategory(t.categories[0]);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('up')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="bg-[#F0F0F0] dark:bg-[#111] pt-[84px] transition-colors duration-300">
      {/* ── HERO ── */}
      <section className="min-h-[46vh] bg-[#181818] dark:bg-[#0a0a0a] flex flex-col justify-center px-6 lg:px-[52px] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.025)_1px,transparent_0)] bg-[length:28px_28px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[radial-gradient(circle,rgba(75,120,118,0.15)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10 reveal">
          <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6">
            <span className="block w-8 h-[1.5px] bg-current" />
            {t.heroTag}
          </div>
          <h1 className="font-['Montserrat'] text-[clamp(2.4rem,5vw,4.4rem)] font-black leading-[1.05] tracking-[-0.04em] text-white mb-5 max-w-[600px]">
            {t.heroTitle}
          </h1>
          <p className="text-[1.05rem] text-[rgba(235,235,235,0.55)] leading-[1.75] max-w-[480px] font-light">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <div className="sticky top-[68px] z-30 bg-[#F0F0F0]/90 dark:bg-[#111]/90 backdrop-blur-[16px] border-b border-[#e0e0e0] dark:border-[#1f1f1f] px-6 lg:px-[52px] py-3.5">
        <div className="max-w-[1200px] mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
          {t.categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-[0.68rem] font-black tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#181818] dark:bg-[#ebebeb] text-white dark:text-[#111]'
                  : 'bg-white dark:bg-[#1a1a1a] border border-[#e0e0e0] dark:border-[#272727] text-[#444] dark:text-[#888] hover:border-[#ccc] dark:hover:border-[#333]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="py-[80px] px-6 lg:px-[52px]">
        <div className="max-w-[1200px] mx-auto">
          {/* ── FEATURED ── */}
          <div className="reveal mb-12">
            <Link
              to="/blog/featured"
              className="group grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-[#161616] rounded-[28px] overflow-hidden border border-[#e5e5e5] dark:border-[#222] hover:shadow-[0_32px_80px_rgba(24,24,24,0.1)] dark:hover:shadow-[0_32px_80px_rgba(0,0,0,0.5)] hover:border-[#d5d5d5] dark:hover:border-[#2a2a2a] transition-all duration-400"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden">
                <ImageWithFallback
                  src={t.featured.img}
                  alt={t.featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#181818]/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="text-[0.6rem] font-black tracking-widest uppercase text-white bg-[#4B7876] px-3 py-1.5 rounded-full">
                    {t.featuredTag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col justify-center">
                <span
                  className="inline-block text-[0.65rem] font-black tracking-widest uppercase mb-4"
                  style={{ color: categoryColors[t.featured.category] || '#4B7876' }}
                >
                  {t.featured.category}
                </span>
                <h2 className="font-['Montserrat'] text-[1.5rem] lg:text-[1.8rem] font-extrabold text-[#181818] dark:text-[#ebebeb] leading-[1.2] tracking-[-0.02em] mb-4 group-hover:text-[#4B7876] transition-colors duration-250">
                  {t.featured.title}
                </h2>
                <p className="text-[0.92rem] text-[#444] dark:text-[#777] leading-[1.75] mb-6 font-light">
                  {t.featured.excerpt}
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-[#555] dark:text-[#555]">
                      <Calendar size={13} />
                      <span className="text-[0.72rem] font-medium">{t.featured.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#555] dark:text-[#555]">
                      <Clock size={13} />
                      <span className="text-[0.72rem] font-medium">{t.featured.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[0.75rem] font-bold tracking-widest uppercase text-[#4B7876] group-hover:gap-3 transition-all duration-200">
                    {t.readMore}
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* ── POSTS GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.posts.map((post, i) => (
              <Link
                key={post.title}
                to={`/blog/${i + 1}`}
                className="reveal group bg-white dark:bg-[#161616] rounded-[24px] overflow-hidden border border-[#e5e5e5] dark:border-[#222] hover:shadow-[0_24px_60px_rgba(24,24,24,0.09)] dark:hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)] hover:border-[#d5d5d5] dark:hover:border-[#2a2a2a] hover:-translate-y-1 transition-all duration-400 flex flex-col"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-[0.58rem] font-black tracking-widest uppercase text-white px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: categoryColors[post.category] || '#4B7876' }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-['Montserrat'] text-[1rem] font-extrabold text-[#181818] dark:text-[#ebebeb] leading-[1.35] mb-3 group-hover:text-[#4B7876] transition-colors duration-250 tracking-[-0.01em]">
                    {post.title}
                  </h3>
                  <p className="text-[0.85rem] text-[#444] dark:text-[#777] leading-[1.7] flex-1 font-light mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#f0f0f0] dark:border-[#1f1f1f]">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 text-[#666] dark:text-[#555]">
                        <Clock size={12} />
                        <span className="text-[0.7rem] font-medium">{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[0.68rem] font-bold tracking-widest uppercase text-[#4B7876] group-hover:gap-2.5 transition-all duration-200">
                      {t.readMore}
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── NEWSLETTER ── */}
      <section className="py-[90px] px-6 lg:px-[52px] bg-[#181818] dark:bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.025)_1px,transparent_0)] bg-[length:28px_28px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse,rgba(75,120,118,0.2)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-[580px] mx-auto text-center relative z-10 reveal">
          <h2 className="font-['Montserrat'] text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold text-white tracking-[-0.03em] mb-4">
            {t.newsletterTitle}
          </h2>
          <p className="text-[1rem] text-[rgba(235,235,235,0.55)] leading-[1.75] mb-8 font-light">
            {t.newsletterDesc}
          </p>

          {subscribed ? (
            <div className="bg-[#4B7876]/15 border border-[#4B7876]/30 rounded-2xl px-8 py-6 text-[#4B7876]">
              <div className="text-[1.1rem] font-semibold">✓ {lang === 'SRB' ? 'Uspešno ste prijavljeni!' : 'Successfully subscribed!'}</div>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletterPlaceholder}
                required
                className="flex-1 bg-white/8 border border-white/15 rounded-full px-6 py-4 text-[0.92rem] text-white placeholder-[rgba(255,255,255,0.35)] focus:outline-none focus:border-[#4B7876] transition-colors duration-200"
              />
              <button
                type="submit"
                className="flex-shrink-0 bg-[#4B7876] text-white font-['Montserrat'] font-bold text-[0.78rem] tracking-[0.1em] uppercase px-8 py-4 rounded-full hover:bg-[#3a6462] hover:shadow-[0_12px_32px_rgba(75,120,118,0.5)] transition-all duration-250 cursor-pointer whitespace-nowrap"
              >
                {t.newsletterBtn}
              </button>
            </form>
          )}

          <p className="text-[0.72rem] text-[rgba(255,255,255,0.3)] mt-4">{t.newsletterNote}</p>
        </div>
      </section>
    </div>
  );
}
