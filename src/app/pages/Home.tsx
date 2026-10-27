import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Check, Quote, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const servicesImages = [
  'https://images.unsplash.com/photo-1609009630912-f16dcf3e03a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
  'https://images.unsplash.com/photo-1762392050946-685f2dec9da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
  'https://images.unsplash.com/photo-1700882304335-34d47c682a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
  'https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
];

const content = {
  SRB: {
    heroPlatform: '',
    heroTitle1: 'Zaslužujete',
    heroTitle2: 'život bez',
    heroTitlePain: 'Bola',
    heroTitle3: 'Počnite danas',
    heroDesc: 'Niste sami. Uz stručno vođen, individualizovan pristup pomažemo vam da pronađete uzrok bola i trajno ga rešite.',
    heroBookingNote: 'Neophodno je zakazivanje termina pre dolaska.',
    heroCta: 'Zakaži konsultacije',
    heroSub: '',
    ticker: ['Oslobađanje od bola', 'Oporavak od povreda', 'Mobilnost i držanje', 'Izgradnja snage', 'Prevencija bola', 'Stručno vođenje'],
    aboutTag: 'O nama',
    aboutTitle: 'Stručna nega za vaš oporavak',
    aboutDesc1: 'Brave Recovery Center kombinuje kliničku stručnost sa personalizovanom terapijom pokretom kako bi vam pomogao da prevaziđete bol, vratite mobilnost i izgradite trajnu snagu.',
    aboutDesc2: 'Naš pristup zasnovan na dokazima osigurava da dobijete najviši standard nege, prilagođen vašim jedinstvenim ciljevima oporavka.',
    aboutPoints: ['Sertifikovani fizioterapeuti', 'Personalizovani planovi lečenja', 'Dokazane metode oporavka', 'Kontinuirana podrška i vođenje'],
    processTag: 'Proces',
    processTitle: 'Kako funkcioniše',
    processSteps: [
      { num: '1', title: 'Zakažite konsultacije', desc: 'Zakažite konsultacije sa našim fizioterapeutom.' },
      { num: '2', title: 'Dobijte svoj plan', desc: 'Preuzmite personalizovani program oporavka prilagođen vašim specifičnim potrebama.' },
      { num: '3', title: 'Započnite oporavak', desc: 'Započnite svoje vođeno putovanje ka oporavku uz stalnu podršku i praćenje napretka.' },
    ],
    servicesTag: 'Šta nudimo',
    servicesTitle: 'Naše Usluge',
    servicesDesc: 'Sveobuhvatna rešenja za fizioterapiju dizajnirana da odgovore na vaše jedinstvene potrebe oporavka.',
    servicesCta: 'Pogledaj sve usluge',
    services: [
      { title: 'Dry Needling', desc: 'Precizna tehnika opuštanja mišića pomoću tankih igala — efikasna za hronični bol.', img: servicesImages[0] },
      { title: 'Cupping Terapija', desc: 'Drevna tehnika za poboljšanje cirkulacije i smanjenje napetosti mišića.', img: servicesImages[1] },
      { title: 'Terapeutska Masaža', desc: 'Ciljana manipulacija mekih tkiva za ublažavanje bola i poboljšanje oporavka.', img: servicesImages[2] },
      { title: 'Kineziterapija', desc: 'Vođene vežbe za vraćanje pune amplitude pokreta, fleksibilnosti i snage.', img: servicesImages[3] },
    ],
    readMore: 'Pročitaj više',
    testimonialsTag: 'Iskustva',
    testimonialsTitle: 'Šta kažu naši pacijenti',
    ctaReady: 'Spremni da započnete oporavak?',
    ctaSub: 'Napravite prvi korak ka životu bez bola. Zakažite konsultacije danas.',
    ctaBtn: 'Zakaži konsultacije',
  },
  ENG: {
    heroPlatform: '',
    heroTitle1: 'You Deserve',
    heroTitle2: 'a Life Without',
    heroTitlePain: 'Pain',
    heroTitle3: 'Start Today',
    heroDesc: 'You are not alone. Through an expert-led, individualized approach we help you find the root cause of your pain and resolve it for good.',
    heroBookingNote: 'Appointment required before visiting.',
    heroCta: 'Book consultation',
    heroSub: '',
    ticker: ['Back Pain Relief', 'Injury Recovery', 'Mobility & Posture', 'Strength Building', 'Pain Prevention', 'Expert Guidance'],
    aboutTag: 'About Us',
    aboutTitle: 'Expert Care for Your Recovery',
    aboutDesc1: 'Brave Recovery Center combines clinical expertise with personalized movement therapy to help you overcome pain, restore mobility, and build lasting strength.',
    aboutDesc2: 'Our evidence-based approach ensures you receive the highest standard of care, tailored to your unique recovery goals.',
    aboutPoints: ['Certified physiotherapy professionals', 'Personalized treatment plans', 'Proven recovery methods', 'Ongoing support & guidance'],
    processTag: 'Process',
    processTitle: 'How It Works',
    processSteps: [
      { num: '1', title: 'Book Consultation', desc: 'Book a consultation with our physiotherapist.' },
      { num: '2', title: 'Get Your Plan', desc: 'Receive a personalized recovery program tailored to your specific needs.' },
      { num: '3', title: 'Start Recovery', desc: 'Begin your guided treatment journey with ongoing support and progress tracking.' },
    ],
    servicesTag: 'What We Offer',
    servicesTitle: 'Our Services',
    servicesDesc: 'Comprehensive physiotherapy solutions designed to address your unique recovery needs.',
    servicesCta: 'View All Services',
    services: [
      { title: 'Dry Needling', desc: 'Precise muscle relaxation technique using fine needles — effective for chronic pain.', img: servicesImages[0] },
      { title: 'Cupping Therapy', desc: 'Ancient technique to improve circulation and reduce muscle tension.', img: servicesImages[1] },
      { title: 'Therapeutic Massage', desc: 'Targeted manipulation of soft tissues to relieve pain and enhance recovery.', img: servicesImages[2] },
      { title: 'Kinesiotherapy', desc: 'Guided exercises to restore full range of motion, flexibility, and strength.', img: servicesImages[3] },
    ],
    readMore: 'Read more',
    testimonialsTag: 'Testimonials',
    testimonialsTitle: 'What Our Patients Say',
    ctaReady: 'Ready to Start Your Recovery?',
    ctaSub: 'Take the first step towards a pain-free life. Book a consultation today.',
    ctaBtn: 'Book consultation',
  },
};

const testimonialsData = [
  { name: 'M. J.', quote: 'Bio sam skeptičan, ali personalizovani program i neverovatna podrška napravili su ogromnu razliku. Jači sam nego pre povrede.', rating: 5 },
];

export default function Home() {
  const { lang } = useLanguage();
  const t = content[lang];
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('up')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => setActiveTestimonial((p) => (p + 1) % testimonialsData.length);
  const prevTestimonial = () => setActiveTestimonial((p) => (p - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <div className="bg-[#F0F0F0] dark:bg-[#111] transition-colors duration-300">

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-end px-6 lg:px-[52px] pb-20 relative overflow-hidden pt-32">
        {/* BRAVE glow background */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Montserrat'] text-[clamp(10rem,22vw,22rem)] font-black whitespace-nowrap tracking-[-0.05em] pointer-events-none select-none leading-none z-0 text-[#4B7876]/[0.07] dark:text-[#4B7876]/[0.11]"
        >
          BRAVE
        </div>
        {/* Radial ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none select-none z-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(75,120,118,0.08) 0%, rgba(75,120,118,0.03) 45%, transparent 75%)' }}
        />

        <div className="relative z-10 max-w-[1200px] w-full mx-auto">
          <h1 className="font-['Montserrat'] text-[clamp(3.4rem,7vw,7.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-[#181818] dark:text-[#ebebeb] mb-8 max-w-[900px]">
            {t.heroTitle1}
            <br />
            {t.heroTitle2} <em className="italic text-[#4B7876]">{t.heroTitlePain}</em>
            <br />
            {t.heroTitle3}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-10 mt-[52px]">
            <div>
              <p className="text-[1.05rem] text-[#444] dark:text-[#888] leading-[1.75] max-w-[420px] font-light mb-4">
                {t.heroDesc}
              </p>
              <p className="text-[0.8rem] text-[#4B7876] font-semibold tracking-wide">
                {t.heroBookingNote}
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-3">
              <Link
                to="/contact"
                className="bg-[#181818] dark:bg-[#ebebeb] text-white dark:text-[#111] font-['Montserrat'] font-extrabold text-[0.82rem] tracking-[0.14em] uppercase px-11 py-[20px] rounded-full transition-all duration-300 shadow-[0_8px_30px_rgba(24,24,24,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] whitespace-nowrap inline-block hover:bg-[#4B7876] dark:hover:bg-[#4B7876] dark:hover:text-white hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(75,120,118,0.25)]"
              >
                {t.heroCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE TICKER ── */}
      <div className="bg-white dark:bg-[#1a1a1a] border-y border-gray-200 dark:border-[#2a2a2a] overflow-hidden py-5 whitespace-nowrap transition-colors duration-300">
        <div className="inline-flex animate-[marquee_18s_linear_infinite]">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="inline-flex">
              {t.ticker.map((item, idx) => (
                <span
                  key={idx}
                  className="font-['Montserrat'] text-[0.72rem] font-bold tracking-[0.2em] uppercase text-[#333] dark:text-[#c5c5c5] px-10 flex items-center gap-5 after:content-['✦'] after:text-[#4B7876]/50 after:text-[0.6rem]"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="py-[120px] px-6 lg:px-[52px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6">
              <span className="block w-8 h-[1.5px] bg-current" />
              {t.aboutTag}
            </div>
            <h2 className="font-['Montserrat'] text-[clamp(2.2rem,4vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#181818] dark:text-[#ebebeb] mb-8">
              {t.aboutTitle.split(' ').map((word, i, arr) =>
                i === arr.length - 1
                  ? <em key={i} className="italic text-[#4B7876]">{word}</em>
                  : `${word} `
              )}
            </h2>
            <p className="text-[1.05rem] text-[#444] dark:text-[#888] leading-[1.85] mb-5 font-light">{t.aboutDesc1}</p>
            <p className="text-[1.05rem] text-[#444] dark:text-[#888] leading-[1.85] mb-10 font-light">{t.aboutDesc2}</p>
          </div>

          <div className="reveal-right bg-white dark:bg-[#1a1a1a] p-10 rounded-[24px] border border-[#ddd] dark:border-[#252525] shadow-[0_20px_60px_rgba(24,24,24,0.04)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-colors duration-300">
            <div className="flex flex-col gap-5">
              {t.aboutPoints.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-[#F8F9FA] dark:bg-[#141414] p-4 rounded-[12px]">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-[#1f1f1f] border border-[#ddd] dark:border-[#2a2a2a] grid place-items-center text-[#4B7876] flex-shrink-0 shadow-sm">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-[0.95rem] text-[#181818] dark:text-[#c5c5c5] font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-white dark:bg-[#0e0e0e] py-[120px] px-6 lg:px-[52px] border-y border-[#e8e8e8] dark:border-[#1f1f1f] transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal text-center mb-[80px]">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6">
              <span className="block w-8 h-[1.5px] bg-current" />
              {t.processTag}
              <span className="block w-8 h-[1.5px] bg-current" />
            </div>
            <h2 className="font-['Montserrat'] text-[clamp(2.2rem,4vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#181818] dark:text-[#ebebeb]">
              {t.processTitle.split(' ').map((word, i, arr) =>
                i === arr.length - 1
                  ? <em key={i} className="italic text-[#4B7876]">{word}</em>
                  : `${word} `
              )}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-[52px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-[1px] bg-gradient-to-r from-[#4B7876]/20 via-[#4B7876]/40 to-[#4B7876]/20 pointer-events-none" />

            {t.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="reveal bg-[#F5F5F5] dark:bg-[#141414] rounded-[28px] p-10 border border-[#e8e8e8] dark:border-[#222] relative overflow-hidden flex flex-col group hover:bg-white dark:hover:bg-[#1a1a1a] hover:border-[#ddd] dark:hover:border-[#2a2a2a] hover:shadow-[0_24px_64px_rgba(24,24,24,0.08)] dark:hover:shadow-[0_24px_64px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-400"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="relative z-10 flex items-center justify-between mb-10">
                  <div className="w-[52px] h-[52px] rounded-2xl bg-white dark:bg-[#1f1f1f] border border-[#ddd] dark:border-[#2a2a2a] shadow-[0_2px_12px_rgba(24,24,24,0.06)] dark:shadow-none flex items-center justify-center group-hover:bg-[#4B7876] group-hover:border-[#4B7876] group-hover:shadow-[0_8px_24px_rgba(75,120,118,0.25)] transition-all duration-400">
                    <span className="font-['Montserrat'] text-[1.1rem] font-black text-[#4B7876] group-hover:text-white transition-colors duration-400 leading-none">
                      {step.num}
                    </span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#4B7876]/20 group-hover:bg-[#4B7876]/40 transition-colors duration-400" />
                </div>

                <div className="absolute top-6 right-7 font-['Montserrat'] text-[5rem] font-black text-[#181818]/[0.04] dark:text-white/[0.04] leading-none tracking-[-0.05em] pointer-events-none select-none group-hover:text-[#4B7876]/[0.08] transition-colors duration-400">
                  {step.num}
                </div>

                <div className="relative z-10">
                  <div className="font-['Montserrat'] text-[1.15rem] font-extrabold text-[#181818] dark:text-[#ebebeb] mb-3 tracking-[-0.02em]">
                    {step.title}
                  </div>
                  <div className="text-[0.92rem] text-[#555] dark:text-[#777] leading-[1.8] font-light">
                    {step.desc}
                  </div>
                </div>

                <div className="mt-8 h-[2px] w-0 bg-gradient-to-r from-[#4B7876] to-[#4B7876]/40 rounded-full group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-[120px] px-6 lg:px-[52px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal flex justify-between items-end mb-[72px] gap-10 flex-wrap">
            <div>
              <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6">
                <span className="block w-8 h-[1.5px] bg-current" />
                {t.servicesTag}
              </div>
              <h2 className="font-['Montserrat'] text-[clamp(2.2rem,4vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#181818] dark:text-[#ebebeb]">
                {t.servicesTitle}
              </h2>
              <p className="text-[1.05rem] text-[#444] dark:text-[#888] max-w-[500px] leading-[1.75] mt-5 font-light">
                {t.servicesDesc}
              </p>
            </div>
            <Link
              to="/services"
              className="text-[0.78rem] font-bold tracking-[0.1em] uppercase text-[#4B7876] border-b border-[rgba(75,120,118,0.4)] pb-[2px] transition-all duration-250 hover:border-[#4B7876] flex items-center gap-2"
            >
              {t.servicesCta}
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.map((service, idx) => (
              <div
                key={idx}
                className="reveal group bg-white dark:bg-[#1a1a1a] rounded-[20px] overflow-hidden border border-[#e5e5e5] dark:border-[#252525] flex flex-col hover:shadow-[0_24px_60px_rgba(24,24,24,0.09)] dark:hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)] hover:border-[#d5d5d5] dark:hover:border-[#2a2a2a] transition-all duration-400"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-[#f0f0f0] dark:bg-[#141414]">
                  <ImageWithFallback
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-['Montserrat'] text-[1.15rem] font-extrabold text-[#181818] dark:text-[#ebebeb] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[0.9rem] text-[#444] dark:text-[#777] leading-[1.6] flex-1 font-light">
                    {service.desc}
                  </p>
                  <Link
                    to={`/services`}
                    className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[#4B7876] mt-6 transition-[gap] duration-250 hover:gap-3"
                  >
                    {t.readMore}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white dark:bg-[#0e0e0e] py-[120px] px-6 lg:px-[52px] border-t border-[#e8e8e8] dark:border-[#1f1f1f] transition-colors duration-300">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="reveal mb-12">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6">
              <span className="block w-8 h-[1.5px] bg-current" />
              {t.testimonialsTag}
              <span className="block w-8 h-[1.5px] bg-current" />
            </div>
            <h2 className="font-['Montserrat'] text-[clamp(2rem,3.5vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#181818] dark:text-[#ebebeb]">
              {t.testimonialsTitle}
            </h2>
          </div>

          <div className="reveal relative bg-[#F7F7F7] dark:bg-[#141414] rounded-[32px] p-10 lg:p-16 border border-[#e5e5e5] dark:border-[#222] shadow-[0_20px_50px_rgba(24,24,24,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-colors duration-300">
            <Quote className="w-12 h-12 text-[#4B7876]/20 mx-auto mb-8" />

            <div className="min-h-[160px] flex items-center justify-center flex-col">
              <p className="text-[1.2rem] lg:text-[1.4rem] text-[#333] dark:text-[#c5c5c5] leading-[1.7] italic mb-8 font-light max-w-[700px]">
                "{testimonialsData[activeTestimonial].quote}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#181818] dark:bg-[#2a2a2a] grid place-items-center text-white font-bold font-['Montserrat'] shadow-md">
                  {testimonialsData[activeTestimonial].name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-['Montserrat'] text-[1rem] font-bold text-[#181818] dark:text-[#ebebeb]">
                    {testimonialsData[activeTestimonial].name}
                  </div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonialsData[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#4B7876] text-[#4B7876]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 lg:-mx-6 pointer-events-none">
              <button
                type="button"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white dark:bg-[#1f1f1f] border border-[#ddd] dark:border-[#2a2a2a] shadow-md flex items-center justify-center text-[#333] dark:text-[#aaa] hover:text-[#4B7876] pointer-events-auto transition-all hover:scale-105 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white dark:bg-[#1f1f1f] border border-[#ddd] dark:border-[#2a2a2a] shadow-md flex items-center justify-center text-[#333] dark:text-[#aaa] hover:text-[#4B7876] pointer-events-auto transition-all hover:scale-105 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-10">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeTestimonial === idx ? 'bg-[#4B7876] w-8' : 'bg-[#ccc] dark:bg-[#333] w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#181818] dark:bg-[#0a0a0a] py-[120px] px-6 lg:px-[52px] transition-colors duration-300">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="reveal">
            <h2 className="font-['Montserrat'] text-[clamp(2.2rem,4vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white mb-6">
              {t.ctaReady}
            </h2>
            <p className="text-[1.1rem] text-[rgba(240,240,240,0.55)] mb-10 max-w-[500px] mx-auto font-light leading-relaxed">
              {t.ctaSub}
            </p>
            <Link
              to="/contact"
              className="bg-[#4B7876] text-white font-['Montserrat'] font-extrabold text-[0.9rem] tracking-[0.15em] uppercase px-12 py-[22px] rounded-full transition-all duration-300 shadow-[0_8px_40px_rgba(75,120,118,0.3)] whitespace-nowrap inline-block hover:bg-white hover:text-[#181818] hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(255,255,255,0.12)]"
            >
              {t.ctaBtn}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}