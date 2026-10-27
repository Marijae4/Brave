import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const content = {
  SRB: {
    heroTag: 'Cenovnik',
    heroTitle: 'Transparentne cene, jasni rezultati',
    heroDesc: 'Bez skrivenih troškova. Bez nepotrebnih tretmana. Plaćate samo ono što vam zaista treba.',
    singleTag: 'Pojedinačne usluge',
    singleTitle: 'Cenovnik',
    packageTag: 'Paketi usluga',
    packageTitle: 'Paketi usluga',
    currency: 'RSD',
    singles: [
      {
        name: 'Sportska masaža',
        variants: [
          { label: '45 min', price: '3.500' },
          { label: '75 min', price: '4.500' },
        ],
      },
      {
        name: 'Terapeutska masaža',
        variants: [
          { label: '30 min', price: '3.000' },
          { label: '60 min', price: '4.000' },
        ],
      },
      {
        name: 'Kineziterapija',
        variants: [
          { label: '1 termin', price: '2.500' },
        ],
      },
      {
        name: 'Fizikalna terapija (struje + ultrazvuk + laser)',
        variants: [
          { label: '1 tretman', price: '2.500' },
          { label: '10 tretmana', price: '20.000' },
        ],
      },
      {
        name: 'Dry needling',
        variants: [
          { label: '1 tretman', price: '3.000' },
        ],
      },
      {
        name: 'Cupping',
        variants: [
          { label: '1 tretman', price: '3.000' },
        ],
      },
      {
        name: 'Individualni treninzi',
        variants: [
          { label: '1 termin', price: '2.500' },
          { label: '12 termina', price: '25.000' },
          { label: '48 termina', price: '95.000' },
        ],
      },
      {
        name: 'Kineziotejping',
        variants: [
          { label: '1 tretman', price: '1.000' },
        ],
      },
    ],
    packages: [
      {
        name: 'Fizikalna terapija + Kineziterapija',
        variants: [
          { label: '1 tretman', price: '3.500' },
          { label: '10 tretmana', price: '30.000' },
        ],
      },
      {
        name: 'Dry needling + Cupping',
        variants: [
          { label: '1 tretman', price: '4.500' },
        ],
      },
      {
        name: 'Pre/postoperativna rehabilitacija — terapija + vežbe',
        sub: true,
        variants: [
          { label: '3x nedeljno (12 termina)', price: '42.000' },
          { label: '4x nedeljno (16 termina)', price: '56.000' },
          { label: '5x nedeljno (20 termina)', price: '70.000' },
        ],
      },
      {
        name: 'Pre/postoperativna rehabilitacija — samo vežbe',
        sub: true,
        variants: [
          { label: '3x nedeljno (12 termina)', price: '36.000' },
          { label: '4x nedeljno (16 termina)', price: '48.000' },
          { label: '5x nedeljno (20 termina)', price: '60.000' },
        ],
      },
    ],
    faqTag: 'FAQ',
    faqTitle: 'Često postavljana pitanja',
    faqs: [
      {
        q: 'Da li je potrebno zakazivanje termina?',
        a: 'Da, neophodno je zakazati termin pre dolaska. Možete nas kontaktirati telefonom ili putem kontakt forme na sajtu.',
      },
      {
        q: 'Da li mi treba uput lekara?',
        a: 'Nije potreban uput za zakazivanje. Možete direktno zakazati konsultacije. Ipak, ako imate medicinsku dokumentaciju (snimke, nalaze), preporučujemo da je donesete.',
      },
      {
        q: 'Koliko traje tretman?',
        a: 'Zavisi od vrste tretmana — od 15–20 minuta za kineziotejping do 45–75 minuta za masaže i kombinovane terapije. Tačno trajanje dogovaramo pri zakazivanju.',
      },
      {
        q: 'Koje načine plaćanja prihvatate?',
        a: 'Prihvatamo gotovinu i plaćanje karticama. Račun se izdaje na zahtev.',
      },
    ],
    ctaTitle: 'Imate pitanje o cenama?',
    ctaDesc: 'Kontaktirajte nas i zajedno ćemo pronaći pravo rešenje za vaše potrebe i budžet.',
    ctaBtn: 'Zakaži konsultacije',
  },
  ENG: {
    heroTag: 'Pricing',
    heroTitle: 'Transparent pricing, clear results',
    heroDesc: 'No hidden costs. No unnecessary treatments. You pay only for what you truly need.',
    singleTag: 'Individual services',
    singleTitle: 'Price list',
    packageTag: 'Service packages',
    packageTitle: 'Service packages',
    currency: 'RSD',
    singles: [
      {
        name: 'Sports massage',
        variants: [
          { label: '45 min', price: '3,500' },
          { label: '75 min', price: '4,500' },
        ],
      },
      {
        name: 'Therapeutic massage',
        variants: [
          { label: '30 min', price: '3,000' },
          { label: '60 min', price: '4,000' },
        ],
      },
      {
        name: 'Exercise therapy',
        variants: [
          { label: '1 session', price: '2,500' },
        ],
      },
      {
        name: 'Physical therapy (currents + ultrasound + laser)',
        variants: [
          { label: '1 session', price: '2,500' },
          { label: '10 sessions', price: '20,000' },
        ],
      },
      {
        name: 'Dry needling',
        variants: [
          { label: '1 session', price: '3,000' },
        ],
      },
      {
        name: 'Cupping',
        variants: [
          { label: '1 session', price: '3,000' },
        ],
      },
      {
        name: 'Individual training',
        variants: [
          { label: '1 session', price: '2,500' },
          { label: '12 sessions', price: '25,000' },
          { label: '48 sessions', price: '95,000' },
        ],
      },
      {
        name: 'Kinesio taping',
        variants: [
          { label: '1 session', price: '1,000' },
        ],
      },
    ],
    packages: [
      {
        name: 'Physical therapy + Exercise therapy',
        variants: [
          { label: '1 session', price: '3,500' },
          { label: '10 sessions', price: '30,000' },
        ],
      },
      {
        name: 'Dry needling + Cupping',
        variants: [
          { label: '1 session', price: '4,500' },
        ],
      },
      {
        name: 'Pre/post-op rehabilitation — therapy + exercises',
        sub: true,
        variants: [
          { label: '3x weekly (12 sessions)', price: '42,000' },
          { label: '4x weekly (16 sessions)', price: '56,000' },
          { label: '5x weekly (20 sessions)', price: '70,000' },
        ],
      },
      {
        name: 'Pre/post-op rehabilitation — exercises only',
        sub: true,
        variants: [
          { label: '3x weekly (12 sessions)', price: '36,000' },
          { label: '4x weekly (16 sessions)', price: '48,000' },
          { label: '5x weekly (20 sessions)', price: '60,000' },
        ],
      },
    ],
    faqTag: 'FAQ',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: 'Is an appointment required?',
        a: 'Yes, an appointment is required before visiting. You can contact us by phone or through the contact form on the website.',
      },
      {
        q: 'Do I need a doctor\'s referral?',
        a: 'No referral is required to book. You can directly schedule a consultation. However, if you have medical documentation (scans, reports), we recommend bringing it.',
      },
      {
        q: 'How long does a session take?',
        a: 'It depends on the type of treatment — from 15–20 minutes for kinesio taping to 45–75 minutes for massages and combined therapies. Exact duration is agreed upon when booking.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept cash and card payments. An invoice is issued upon request.',
      },
    ],
    ctaTitle: 'Have a question about pricing?',
    ctaDesc: 'Contact us and together we will find the right solution for your needs and budget.',
    ctaBtn: 'Book consultation',
  },
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8e8e8] dark:border-[#1f1f1f]">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
      >
        <span className="text-[0.95rem] font-semibold text-[#181818] dark:text-[#ebebeb]">{q}</span>
        <ChevronDown
          size={18}
          className={`text-[#4B7876] flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[300px] pb-5' : 'max-h-0'}`}>
        <p className="text-[0.92rem] text-[#444] dark:text-[#777] leading-[1.8] font-light">{a}</p>
      </div>
    </div>
  );
}

export default function Pricing() {
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
      <section className="min-h-[46vh] bg-[#181818] dark:bg-[#0a0a0a] flex flex-col justify-center px-6 lg:px-[52px] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.025)_1px,transparent_0)] bg-[length:28px_28px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(circle,rgba(75,120,118,0.15)_0%,transparent_65%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10 reveal">
          <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6">
            <span className="block w-8 h-[1.5px] bg-current" />
            {t.heroTag}
          </div>
          <h1 className="font-['Montserrat'] text-[clamp(2.4rem,5vw,4.4rem)] font-black leading-[1.05] tracking-[-0.04em] text-white mb-5 max-w-[680px]">
            {t.heroTitle}
          </h1>
          <p className="text-[1.05rem] text-[rgba(235,235,235,0.55)] leading-[1.75] max-w-[460px] font-light">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* ── INDIVIDUAL SERVICES ── */}
      <section className="py-[100px] px-6 lg:px-[52px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal mb-[52px]">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-5">
              <span className="block w-8 h-[1.5px] bg-current" />
              {t.singleTag}
            </div>
            <h2 className="font-['Montserrat'] text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold tracking-[-0.03em] text-[#181818] dark:text-[#ebebeb]">
              {t.singleTitle}
            </h2>
          </div>

          <div className="reveal bg-white dark:bg-[#161616] rounded-[28px] border border-[#e8e8e8] dark:border-[#222] overflow-hidden shadow-[0_8px_40px_rgba(24,24,24,0.04)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
            {t.singles.map((item, i) => (
              <div
                key={item.name}
                className={`px-6 lg:px-9 py-5 ${i < t.singles.length - 1 ? 'border-b border-[#f0f0f0] dark:border-[#1e1e1e]' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="font-medium text-[0.95rem] text-[#181818] dark:text-[#ebebeb]">{item.name}</div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 sm:justify-end">
                    {item.variants.map((v) => (
                      <div key={v.label} className="flex items-center gap-2 min-w-[160px] sm:min-w-0 justify-between sm:justify-end">
                        <span className="text-[0.78rem] text-[#666] dark:text-[#555]">{v.label}</span>
                        <span className="font-['Montserrat'] font-black text-[1rem] text-[#181818] dark:text-[#ebebeb]">
                          {v.price} <span className="text-[0.65rem] font-bold text-[#888]">RSD</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="py-[80px] px-6 lg:px-[52px] bg-white dark:bg-[#0e0e0e] border-t border-[#e8e8e8] dark:border-[#1a1a1a] transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal mb-[52px]">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-5">
              <span className="block w-8 h-[1.5px] bg-current" />
              {t.packageTag}
            </div>
            <h2 className="font-['Montserrat'] text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold tracking-[-0.03em] text-[#181818] dark:text-[#ebebeb]">
              {t.packageTitle}
            </h2>
          </div>

          <div className="reveal bg-[#F7F7F7] dark:bg-[#141414] rounded-[28px] border border-[#e8e8e8] dark:border-[#222] overflow-hidden shadow-[0_8px_40px_rgba(24,24,24,0.04)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
            {t.packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`px-6 lg:px-9 py-5 ${i < t.packages.length - 1 ? 'border-b border-[#ebebeb] dark:border-[#1e1e1e]' : ''} ${pkg.sub ? 'pl-8 lg:pl-14 bg-[#F0F0F0] dark:bg-[#111]' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className={`font-medium text-[0.95rem] text-[#181818] dark:text-[#ebebeb] ${pkg.sub ? 'text-[0.88rem] text-[#444] dark:text-[#888]' : ''}`}>
                    {pkg.name}
                  </div>
                  <div className="flex flex-col gap-1.5 sm:items-end">
                    {pkg.variants.map((v) => (
                      <div key={v.label} className="flex items-center gap-3 min-w-[220px] sm:min-w-0 justify-between sm:justify-end">
                        <span className="text-[0.78rem] text-[#666] dark:text-[#555]">{v.label}</span>
                        <span className="font-['Montserrat'] font-black text-[1rem] text-[#181818] dark:text-[#ebebeb]">
                          {v.price} <span className="text-[0.65rem] font-bold text-[#888]">RSD</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-[100px] px-6 lg:px-[52px]">
        <div className="max-w-[760px] mx-auto">
          <div className="reveal mb-[48px]">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-5">
              <span className="block w-8 h-[1.5px] bg-current" />
              {t.faqTag}
            </div>
            <h2 className="font-['Montserrat'] text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold tracking-[-0.03em] text-[#181818] dark:text-[#ebebeb]">
              {t.faqTitle}
            </h2>
          </div>
          <div className="reveal">
            {t.faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-[90px] px-6 lg:px-[52px] bg-[#181818] dark:bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.025)_1px,transparent_0)] bg-[length:28px_28px]" />
        <div className="max-w-[700px] mx-auto text-center relative z-10 reveal">
          <h2 className="font-['Montserrat'] text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold text-white tracking-[-0.03em] mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-[1rem] text-[rgba(235,235,235,0.55)] leading-[1.75] mb-9 font-light">
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
