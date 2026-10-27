import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { BodyMap } from '../components/BodyMap';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const serviceImages = [
  'https://images.unsplash.com/photo-1643237131522-bbf79b062ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'https://images.unsplash.com/photo-1731514836024-614e2bab04c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'https://images.unsplash.com/photo-1620924721217-93fd71e354ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'https://images.unsplash.com/photo-1579854602908-ce7e7c29f4fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
  'https://images.unsplash.com/photo-1765783801254-53b95d5694ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
];

const content = {
  SRB: {
    heroTag: 'Naše usluge',
    heroTitle: 'Svaka terapija — sa razlogom',
    heroDesc: 'Svaki tretman koji nudimo zasnovan je na kliničkim dokazima i prilagođen vašim individualnim potrebama. Nema generičkih protokola — samo precizna nega.',
    mapTag: 'Interaktivna mapa bola',
    mapTitle: 'Gde vas boli?',
    mapDesc: 'Kliknite na deo tela na dijagramu da vidite koje terapije primenjujemo za tu oblast i kako pomažu u lečenju.',
    servicesTag: 'Tretmani',
    servicesTitle: 'Naši tretmani',
    services: [
      {
        num: '01',
        title: 'Fizikalna terapija',
        badge: 'Struje · Ultrazvuk · Laser',
        desc: 'Primenjujemo sve vrste elektroterapijskih struja, ultrazvuk i laser za smanjenje bola, upale i ubrzanje zarastanja tkiva.',
        features: ['Hronični i akutni bol', 'Upale mekih tkiva', 'Postoperativni oporavak', 'Mišićno-skeletni poremećaji'],
        duration: '30–45 min',
        img: serviceImages[5],
      },
      {
        num: '02',
        title: 'Kineziterapija',
        badge: 'Dugoročni rezultati',
        desc: 'Individualno kreiran program vežbi koji obnavlja snagu, mobilnost i stabilnost. Radimo zajedno u klinici sa nastavkom home programa.',
        features: ['Core stabilizacija', 'Propriocepcija', 'Funkcionalni oporavak', 'Prevencija repovreda'],
        duration: '45–60 min',
        img: serviceImages[4],
      },
      {
        num: '03',
        title: 'Dry Needling',
        badge: 'Efikasno za bol',
        desc: 'Precizna tehnika kojom se tankim iglama tretiraju trigger tačke u mišićima. Odmah smanjuje napetost i bol, poboljšava cirkulaciju i ubrzava oporavak.',
        features: ['Hronični mišićni bol', 'Sportske povrede', 'Miofascijalni sindrom', 'Cervikalni i lumbalni bol'],
        duration: '30–45 min',
        img: serviceImages[0],
      },
      {
        num: '04',
        title: 'Cupping terapija',
        badge: 'Duboko opuštanje',
        desc: 'Vakuumski kupovi deluju na duboke slojeve mekih tkiva, poboljšavaju limfnu drenažu i smanjuju upalu. Vidljivi rezultati već posle prvog tretmana.',
        features: ['Napetost gornje leđa', 'Sportski oporavak', 'Limfna cirkulacija', 'Smanjena mobilnost'],
        duration: '30–45 min',
        img: serviceImages[2],
      },
      {
        num: '05',
        title: 'Sportska i terapeutska masaža',
        badge: 'Relaksacija i oporavak',
        desc: 'Ciljana manipulacija mekih tkiva za ublažavanje bola, opuštanje napetih mišića i ubrzanje oporavka — prilagođena svakom klijentu.',
        features: ['Mišićna napetost', 'Sportski oporavak', 'Cirkulacija', 'Stres i zamor'],
        duration: '45–75 min',
        img: serviceImages[1],
      },
      {
        num: '06',
        title: 'Individualni treninzi',
        badge: 'Personalizovano',
        desc: 'Treninzi kreirani prema vašim ciljevima — od povratka formi posle povrede do poboljšanja sportskih performansi i prevencije.',
        features: ['Postoperativna priprema', 'Snaga i stabilnost', 'Sportske performanse', 'Rekreativci i sportisti'],
        duration: '60 min',
        img: serviceImages[3],
      },
      {
        num: '07',
        title: 'Kineziotejping',
        badge: 'Podrška 24/7',
        desc: 'Elastični trak koji pruža podršku mišićima i zglobovima, smanjuje edem i bol, i omogućava pun opseg pokreta tokom oporavka i sporta.',
        features: ['Sportske povrede', 'Edem i otok', 'Posturalna korekcija', 'Prevencija repovreda'],
        duration: '15–20 min',
        img: serviceImages[3],
      },
      {
        num: '08',
        title: 'Pre/postoperativna rehabilitacija',
        badge: 'Kompleksna nega',
        desc: 'Strukturisan program pripreme za operaciju i oporavka posle zahvata — terapija, vežbe i praćenje napretka u jednom.',
        features: ['Priprema za operaciju', 'Postoperativni oporavak', 'Vraćanje mobilnosti', 'Povrede skočnog zgloba'],
        duration: 'Po planu',
        img: serviceImages[5],
      },
    ],
    ctaTitle: 'Niste sigurni koja terapija vam treba?',
    ctaDesc: 'Zakažite konsultacije i zajedno ćemo proceniti vaše stanje i preporučiti optimalan pristup.',
    ctaBtn: 'Zakaži konsultacije',
  },
  ENG: {
    heroTag: 'Our Services',
    heroTitle: 'Every therapy — for a reason',
    heroDesc: 'Every treatment we offer is evidence-based and tailored to your individual needs. No generic protocols — just precise care.',
    mapTag: 'Interactive pain map',
    mapTitle: 'Where does it hurt?',
    mapDesc: 'Click on a body part on the diagram to see which therapies we apply to that area and how they help in treatment.',
    servicesTag: 'Treatments',
    servicesTitle: 'Our Treatments',
    services: [
      {
        num: '01',
        title: 'Physical Therapy',
        badge: 'Currents · US · Laser',
        desc: 'We apply all types of electrotherapy currents, ultrasound and laser to reduce pain, inflammation and accelerate tissue healing.',
        features: ['Chronic and acute pain', 'Soft tissue inflammation', 'Post-operative recovery', 'Musculoskeletal disorders'],
        duration: '30–45 min',
        img: serviceImages[5],
      },
      {
        num: '02',
        title: 'Exercise Therapy',
        badge: 'Long-term results',
        desc: 'An individually designed exercise program that restores strength, mobility and stability. We work together in the clinic with a home program to continue.',
        features: ['Core stabilization', 'Proprioception', 'Functional recovery', 'Injury prevention'],
        duration: '45–60 min',
        img: serviceImages[4],
      },
      {
        num: '03',
        title: 'Dry Needling',
        badge: 'Effective for pain',
        desc: 'A precise technique using thin needles to treat trigger points in muscles. Immediately reduces tension and pain, improves circulation and accelerates recovery.',
        features: ['Chronic muscle pain', 'Sports injuries', 'Myofascial syndrome', 'Cervical and lumbar pain'],
        duration: '30–45 min',
        img: serviceImages[0],
      },
      {
        num: '04',
        title: 'Cupping Therapy',
        badge: 'Deep relaxation',
        desc: 'Vacuum cups act on deep layers of soft tissue, improve lymphatic drainage and reduce inflammation. Visible results after the first treatment.',
        features: ['Upper back tension', 'Sports recovery', 'Lymphatic circulation', 'Reduced mobility'],
        duration: '30–45 min',
        img: serviceImages[2],
      },
      {
        num: '05',
        title: 'Sports & Therapeutic Massage',
        badge: 'Relaxation & recovery',
        desc: 'Targeted manipulation of soft tissues to relieve pain, release tight muscles and accelerate recovery — tailored to each client.',
        features: ['Muscle tension', 'Sports recovery', 'Circulation', 'Stress and fatigue'],
        duration: '45–75 min',
        img: serviceImages[1],
      },
      {
        num: '06',
        title: 'Individual Training',
        badge: 'Personalized',
        desc: 'Training sessions designed to your goals — from return to form after injury to improving sports performance and prevention.',
        features: ['Post-op preparation', 'Strength & stability', 'Sports performance', 'Recreational & athletes'],
        duration: '60 min',
        img: serviceImages[3],
      },
      {
        num: '07',
        title: 'Kinesio Taping',
        badge: '24/7 support',
        desc: 'Elastic tape that supports muscles and joints, reduces edema and pain, and allows full range of motion during recovery and sport.',
        features: ['Sports injuries', 'Edema and swelling', 'Postural correction', 'Re-injury prevention'],
        duration: '15–20 min',
        img: serviceImages[3],
      },
      {
        num: '08',
        title: 'Pre/Post-op Rehabilitation',
        badge: 'Comprehensive care',
        desc: 'A structured program of preparation for surgery and recovery after the procedure — therapy, exercises and progress monitoring in one.',
        features: ['Surgical preparation', 'Post-operative recovery', 'Restoring mobility', 'Ankle injuries'],
        duration: 'Per plan',
        img: serviceImages[5],
      },
    ],
    ctaTitle: 'Not sure which therapy you need?',
    ctaDesc: 'Book a consultation and together we will assess your condition and recommend the optimal approach.',
    ctaBtn: 'Book consultation',
  },
};

export default function Services() {
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
      <section className="min-h-[56vh] bg-[#181818] dark:bg-[#0a0a0a] flex flex-col justify-center px-6 lg:px-[52px] py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[length:28px_28px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(75,120,118,0.15)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10 reveal">
          <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6">
            <span className="block w-8 h-[1.5px] bg-current" />
            {t.heroTag}
          </div>
          <h1 className="font-['Montserrat'] text-[clamp(2.8rem,5.5vw,5rem)] font-black leading-[1.05] tracking-[-0.04em] text-white mb-6 max-w-[720px]">
            {t.heroTitle.split('—')[0]}
            <span className="text-[#4B7876]">—</span>
            {t.heroTitle.split('—')[1]}
          </h1>
          <p className="text-[1.05rem] text-[rgba(235,235,235,0.6)] leading-[1.75] max-w-[520px] font-light">
            {t.heroDesc}
          </p>

        </div>
      </section>

      {/* ── INTERACTIVE BODY MAP ── */}
      <section className="py-[110px] px-6 lg:px-[52px] bg-[#F0F0F0] dark:bg-[#111]">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal text-center mb-[60px]">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-5">
              <span className="block w-8 h-[1.5px] bg-current" />
              {t.mapTag}
              <span className="block w-8 h-[1.5px] bg-current" />
            </div>
            <h2 className="font-['Montserrat'] text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-[-0.03em] text-[#181818] dark:text-[#ebebeb] mb-4">
              {t.mapTitle}
            </h2>
            <p className="text-[1rem] text-[#555] dark:text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              {t.mapDesc}
            </p>
          </div>

          <div className="reveal">
            <BodyMap />
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-[110px] px-6 lg:px-[52px] bg-white dark:bg-[#0e0e0e] border-t border-[#e8e8e8] dark:border-[#1a1a1a] transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal mb-[72px]">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-5">
              <span className="block w-8 h-[1.5px] bg-current" />
              {t.servicesTag}
            </div>
            <h2 className="font-['Montserrat'] text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-[-0.03em] text-[#181818] dark:text-[#ebebeb]">
              {t.servicesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((svc, idx) => (
              <div
                key={svc.num}
                className="reveal group bg-[#F7F7F7] dark:bg-[#161616] rounded-[24px] overflow-hidden border border-[#e8e8e8] dark:border-[#222] hover:border-[#d5d5d5] dark:hover:border-[#2a2a2a] hover:shadow-[0_24px_60px_rgba(24,24,24,0.09)] dark:hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-400 flex flex-col"
                style={{ transitionDelay: `${idx * 0.06}s` }}
              >
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <ImageWithFallback
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818]/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[0.6rem] font-black tracking-widest uppercase text-[#4B7876] bg-white/90 dark:bg-[#1a1a1a]/90 px-3 py-1.5 rounded-full">
                      {svc.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-['Montserrat'] text-[2rem] font-black text-white/20">{svc.num}</span>
                    <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                      <Clock size={11} />
                      <span className="text-[0.65rem] font-bold">{svc.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="font-['Montserrat'] text-[1.15rem] font-extrabold text-[#181818] dark:text-[#ebebeb] mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-[0.9rem] text-[#444] dark:text-[#777] leading-[1.7] flex-1 font-light mb-5">
                    {svc.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {svc.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#4B7876]/10 flex items-center justify-center flex-shrink-0">
                          <Zap size={9} className="text-[#4B7876]" />
                        </div>
                        <span className="text-[0.82rem] text-[#333] dark:text-[#c5c5c5]">{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.1em] uppercase text-[#4B7876] border-b border-[#4B7876]/30 pb-[2px] hover:border-[#4B7876] transition-all duration-200 hover:gap-3 self-start"
                  >
                    {lang === 'SRB' ? 'Zakaži tretman' : 'Book treatment'}
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-[100px] px-6 lg:px-[52px] bg-[#181818] dark:bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.025)_1px,transparent_0)] bg-[length:28px_28px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(75,120,118,0.18)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-[700px] mx-auto text-center relative z-10 reveal">
          <div className="w-14 h-14 rounded-2xl bg-[#4B7876]/15 border border-[#4B7876]/30 grid place-items-center mx-auto mb-8">
            <Shield className="text-[#4B7876]" size={22} />
          </div>
          <h2 className="font-['Montserrat'] text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-white tracking-[-0.03em] mb-5">
            {t.ctaTitle}
          </h2>
          <p className="text-[1rem] text-[rgba(235,235,235,0.6)] leading-[1.75] mb-10 font-light">
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
