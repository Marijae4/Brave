import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Award, Heart, Users, Target, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const clinicImg = 'https://images.unsplash.com/photo-1759987383760-327efaf5522a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080';
const team = [
  {
    name: 'Radomir Tadić',
    role: { SRB: 'Fizioterapeut — osnivač', ENG: 'Physiotherapist — Founder' },
    spec: { SRB: 'Sportska medicina i rehabilitacija', ENG: 'Sports medicine and rehabilitation' },
    img: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    exp: '7+',
  },
];

const content = {
  SRB: {
    heroTag: 'O nama',
    heroTitle: 'Posvećeni vašem oporavku',
    heroDesc: 'BRAVE Recovery Center je osnovan sa jednom misijom: da svakom pacijentu pruži fizioterapiju zasnovanu na dokazima, sa toplinom i posvećenošću koja daje rezultate.',
    storyTag: 'Naša priča',
    storyTitle: 'Zašto smo drugačiji',
    storyP1: 'U Brejv Rikaveri Centru verujemo da svaki bol ima svoj uzrok, a svaka osoba svoju priču. Zato radu pristupamo holistički — ne posmatramo samo simptom, već celo telo, navike i obrasce pokreta. Cilj nam nije kratkoročno ublažavanje bola, već razumevanje njegovog uzroka i temelj za dugoročno zdravlje i bolji kvalitet života.',
    storyP2: 'Centar je osnovao fizioterapeut sa više od sedam godina iskustva u sportskoj medicini i rehabilitaciji, dugogodišnji član futsal reprezentacije Srbije, koji je iskustvo gradio kroz rad u klubovima Prve lige i Superlige Srbije, ali i sa rekreativcima i opštom populacijom. Otud pristup u kome nema univerzalnih rešenja — već isključivo individualno vođen proces oporavka, prilagođen svakom klijentu.',
    storyP3: 'Namenjen je profesionalnim sportistima, rekreativcima, osobama sa hroničnim i akutnim bolom, kao i onima u postoperativnom oporavku ili pripremi za zahvat.',
    storyPoints: [
      'Holistički pristup — telo, navike, obrasci pokreta',
      'Individualno vođen proces oporavka',
      'Iskustvo iz profesionalnog i rekreativnog sporta',
      'Specijalizacija za sportsku medicinu i rehabilitaciju',
    ],
    valuesTag: 'Naše vrednosti',
    valuesTitle: 'Na čemu gradimo',
    values: [
      { icon: Target, title: 'Preciznost', desc: 'Svaka intervencija ima jasan cilj i merljiv ishod. Pratimo napredak na svakom koraku.' },
      { icon: Heart, title: 'Empatija', desc: 'Bol je individualan. Svaki klijent zaslužuje da bude saslušan i razumljen.' },
      { icon: Award, title: 'Znanje', desc: 'Kontinuirana edukacija i primena isključivo dokazanih, naučno utemeljenih metoda.' },
      { icon: Users, title: 'Partnerstvo', desc: 'Oporavak je zajednički put — centar je tu da vas vodi, podrži i prati na svakom koraku.' },
    ],
    teamTag: 'Osnivač',
    teamTitle: 'Upoznajte osnivača',
    teamDesc: 'Fizioterapeut sa bogatim iskustvom u sportskoj medicini, rehabilitaciji i radu sa klijentima svih profila.',
    expLabel: 'god. iskustva',
    ctaTitle: 'Vaš oporavak počinje ovde',
    ctaDesc: 'Zakažite inicijalnu procenu i upoznajte naš tim lično. Bez obaveza.',
    ctaBtn: 'Zakaži procenu',
  },
  ENG: {
    heroTag: 'About us',
    heroTitle: 'Dedicated to your recovery',
    heroDesc: 'BRAVE Recovery Center was founded with a single mission: to provide every patient with evidence-based physiotherapy, with the warmth and dedication that delivers results.',
    storyTag: 'Our story',
    storyTitle: 'Why we are different',
    storyP1: 'At Brave Recovery Center we believe every pain has a cause, and every person has their own story. That is why we approach our work holistically — we look not just at the symptom, but at the whole body, habits and movement patterns. Our goal is not short-term pain relief, but understanding its root cause and building a foundation for long-term health and a better quality of life.',
    storyP2: 'The center was founded by a physiotherapist with over seven years of experience in sports medicine and rehabilitation, a longtime member of the Serbia futsal national team, who built his expertise through work with clubs in the First and Super League of Serbia, as well as with recreational athletes and the general population. Hence an approach with no universal solutions — only an individually guided recovery process, tailored to each client.',
    storyP3: 'It is designed for professional athletes, recreational athletes, people with chronic and acute pain, as well as those in post-operative recovery or preparing for a procedure.',
    storyPoints: [
      'Holistic approach — body, habits, movement patterns',
      'Individually guided recovery process',
      'Experience from professional and recreational sport',
      'Specialization in sports medicine and rehabilitation',
    ],
    valuesTag: 'Our values',
    valuesTitle: 'What we build on',
    values: [
      { icon: Target, title: 'Precision', desc: 'Every intervention has a clear goal and measurable outcome. We track progress at every step.' },
      { icon: Heart, title: 'Empathy', desc: 'Pain is individual. Every client deserves to be heard and understood.' },
      { icon: Award, title: 'Knowledge', desc: 'Continuous education and application of only proven, scientifically grounded methods.' },
      { icon: Users, title: 'Partnership', desc: 'Recovery is a shared journey — the center is here to guide, support and accompany you at every step.' },
    ],
    teamTag: 'Founder',
    teamTitle: 'Meet the founder',
    teamDesc: 'A physiotherapist with extensive experience in sports medicine, rehabilitation, and work with clients of all profiles.',
    expLabel: 'yrs experience',
    ctaTitle: 'Your recovery starts here',
    ctaDesc: 'Schedule an initial assessment and meet our team in person. No obligation.',
    ctaBtn: 'Book assessment',
  },
};


export default function About() {
  const { lang } = useLanguage();
  const t = content[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('up')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  return (
    <div className="bg-[#F0F0F0] dark:bg-[#111] pt-[84px] transition-colors duration-300">
      {/* ── HERO ── */}
      <section className="min-h-[60vh] bg-[#181818] dark:bg-[#0a0a0a] flex flex-col justify-end px-6 lg:px-[52px] pb-20 pt-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.025)_1px,transparent_0)] bg-[length:28px_28px]" />
        <div className="absolute top-[-80px] left-[-80px] w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(75,120,118,0.18)_0%,transparent_65%)] pointer-events-none" />

        {/* Clinic image strip */}
        <div className="absolute right-0 top-0 bottom-0 w-[40%] lg:w-[45%] overflow-hidden opacity-30 lg:opacity-40 pointer-events-none">
          <img src={clinicImg} alt="BRAVE klinika" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#181818] via-[rgba(24,24,24,0.6)] to-transparent" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10 reveal">
          <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6">
            <span className="block w-8 h-[1.5px] bg-current" />
            {t.heroTag}
          </div>
          <h1 className="font-['Montserrat'] text-[clamp(2.8rem,6vw,5rem)] font-black leading-[1.05] tracking-[-0.04em] text-white mb-6 max-w-[640px]">
            {t.heroTitle}
          </h1>
          <p className="text-[1.05rem] text-[rgba(235,235,235,0.55)] leading-[1.75] max-w-[480px] font-light">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-[120px] px-6 lg:px-[52px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6">
              <span className="block w-8 h-[1.5px] bg-current" />
              {t.storyTag}
            </div>
            <h2 className="font-['Montserrat'] text-[clamp(2rem,3.8vw,3.4rem)] font-extrabold tracking-[-0.03em] text-[#181818] dark:text-[#ebebeb] mb-6">
              {t.storyTitle}
            </h2>
            <p className="text-[1rem] text-[#444] dark:text-[#888] leading-[1.85] mb-5 font-light">{t.storyP1}</p>
            <p className="text-[1rem] text-[#444] dark:text-[#888] leading-[1.85] mb-5 font-light">{t.storyP2}</p>
            <p className="text-[1rem] text-[#444] dark:text-[#888] leading-[1.85] mb-8 font-light">{t.storyP3}</p>
            <div className="space-y-3">
              {t.storyPoints.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle size={17} className="text-[#4B7876] mt-[3px] flex-shrink-0" />
                  <span className="text-[0.95rem] text-[#333] dark:text-[#c5c5c5] font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="reveal-right relative">
            <div className="rounded-[28px] overflow-hidden aspect-[4/5] shadow-[0_32px_80px_rgba(24,24,24,0.12)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
              <ImageWithFallback src={clinicImg} alt="Klinika" className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#1a1a1a] rounded-2xl p-5 shadow-[0_16px_48px_rgba(24,24,24,0.1)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.4)] border border-[#e8e8e8] dark:border-[#252525]">
              <div className="font-['Montserrat'] text-[1.8rem] font-black text-[#181818] dark:text-[#ebebeb]">2018</div>
              <div className="text-[0.68rem] font-bold tracking-widest uppercase text-[#555] dark:text-[#555]">
                {lang === 'SRB' ? 'Godina osnivanja' : 'Founded'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-[120px] px-6 lg:px-[52px] bg-white dark:bg-[#0e0e0e] border-y border-[#e8e8e8] dark:border-[#1a1a1a] transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal text-center mb-[72px]">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-5">
              <span className="block w-8 h-[1.5px] bg-current" />
              {t.valuesTag}
              <span className="block w-8 h-[1.5px] bg-current" />
            </div>
            <h2 className="font-['Montserrat'] text-[clamp(2rem,3.8vw,3.4rem)] font-extrabold tracking-[-0.03em] text-[#181818] dark:text-[#ebebeb]">
              {t.valuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="reveal group bg-[#F7F7F7] dark:bg-[#141414] rounded-[24px] p-8 border border-[#e8e8e8] dark:border-[#222] hover:bg-white dark:hover:bg-[#1a1a1a] hover:shadow-[0_20px_60px_rgba(24,24,24,0.08)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-[#ddd] dark:hover:border-[#2a2a2a] hover:-translate-y-1 transition-all duration-400"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1e1e1e] border border-[#ddd] dark:border-[#2a2a2a] flex items-center justify-center mb-6 group-hover:bg-[#4B7876] group-hover:border-[#4B7876] transition-all duration-400 shadow-sm">
                    <Icon size={20} className="text-[#4B7876] group-hover:text-white transition-colors duration-400" />
                  </div>
                  <h3 className="font-['Montserrat'] text-[1.05rem] font-extrabold text-[#181818] dark:text-[#ebebeb] mb-3">
                    {v.title}
                  </h3>
                  <p className="text-[0.88rem] text-[#555] dark:text-[#666] leading-[1.75] font-light">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-[120px] px-6 lg:px-[52px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal mb-[72px]">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-5">
              <span className="block w-8 h-[1.5px] bg-current" />
              {t.teamTag}
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
              <h2 className="font-['Montserrat'] text-[clamp(2rem,3.8vw,3.4rem)] font-extrabold tracking-[-0.03em] text-[#181818] dark:text-[#ebebeb]">
                {t.teamTitle}
              </h2>
              <p className="text-[0.95rem] text-[#555] dark:text-[#666] max-w-[380px] leading-[1.7] font-light">
                {t.teamDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[380px]">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="reveal group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative rounded-[28px] overflow-hidden aspect-[3/4] mb-6 shadow-[0_16px_48px_rgba(24,24,24,0.08)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
                  <ImageWithFallback
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(24,24,24,0.65)] via-transparent to-transparent" />

                  {/* Experience badge */}
                  <div className="absolute top-5 right-5 bg-white/95 dark:bg-[#181818]/95 rounded-full px-3 py-1.5 flex items-center gap-1.5">
                    <span className="font-['Montserrat'] text-[0.88rem] font-black text-[#4B7876]">{member.exp}</span>
                    <span className="text-[0.62rem] font-bold text-[#555] dark:text-[#555]">{t.expLabel}</span>
                  </div>
                </div>

                <h3 className="font-['Montserrat'] text-[1.15rem] font-extrabold text-[#181818] dark:text-[#ebebeb] mb-1">
                  {member.name}
                </h3>
                <p className="text-[0.82rem] text-[#4B7876] font-semibold mb-2">{member.role[lang]}</p>
                <p className="text-[0.8rem] text-[#555] dark:text-[#666]">{member.spec[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-[100px] px-6 lg:px-[52px] bg-[#181818] dark:bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.025)_1px,transparent_0)] bg-[length:28px_28px]" />
        <div className="max-w-[700px] mx-auto text-center relative z-10 reveal">
          <h2 className="font-['Montserrat'] text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-white tracking-[-0.03em] mb-5">
            {t.ctaTitle}
          </h2>
          <p className="text-[1rem] text-[rgba(235,235,235,0.55)] leading-[1.75] mb-10 font-light">
            {t.ctaDesc}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#4B7876] text-white font-['Montserrat'] font-bold text-[0.82rem] tracking-[0.1em] uppercase px-9 py-4 rounded-full hover:bg-[#3a6462] hover:shadow-[0_12px_40px_rgba(75,120,118,0.5)] transition-all duration-300"
          >
            {t.ctaBtn}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}