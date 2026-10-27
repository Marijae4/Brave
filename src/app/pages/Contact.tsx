import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const content = {
  SRB: {
    heroTag: 'Kontakt',
    heroTitle: 'Počnite razgovor',
    heroDesc: 'Zakažite konsultacije ili postavite pitanje. Tu smo za vas. Neophodno je zakazivanje termina pre dolaska.',
    formTag: 'Zakažite termin',
    formTitle: 'Pošaljite poruku',
    firstNameLabel: 'Ime',
    lastNameLabel: 'Prezime',
    emailLabel: 'Email adresa',
    phoneLabel: 'Telefon (opciono)',
    serviceLabel: 'Usluga koja vas zanima',
    serviceOptions: [
      'Konsultacije',
      'Fizikalna terapija',
      'Kineziterapija',
      'Individualni trening',
      'Masaža',
      'Dry needling',
      'Cupping',
    ],
    messageLabel: 'Kratko opišite vaš problem ili pitanje',
    messagePlaceholder: 'Npr. Boli me donja leđa već 3 meseca, posebno ujutru...',
    submitBtn: 'Pošalji poruku',
    successMsg: 'Poruka uspešno poslata! Javimo se u roku od 24h.',
    infoTag: 'Informacije',
    workingHours: [
      { day: 'Ponedeljak – Subota', time: '08:00 – 21:00' },
      { day: 'Nedelja', time: 'Neradan dan' },
    ],
    mapNote: 'Kneza Višeslava 134, Beograd 11000',
    privacy: 'Vaši podaci su zaštićeni i neće biti deljeni sa trećim licima.',
  },
  ENG: {
    heroTag: 'Contact',
    heroTitle: 'Start the conversation',
    heroDesc: 'Book a consultation or ask a question. We\'re here for you. Appointment required before visiting.',
    formTag: 'Book an appointment',
    formTitle: 'Send a message',
    firstNameLabel: 'First name',
    lastNameLabel: 'Last name',
    emailLabel: 'Email address',
    phoneLabel: 'Phone (optional)',
    serviceLabel: 'Service you\'re interested in',
    serviceOptions: [
      'Consultation',
      'Physical therapy',
      'Exercise therapy',
      'Individual training',
      'Massage',
      'Dry needling',
      'Cupping',
    ],
    messageLabel: 'Briefly describe your problem or question',
    messagePlaceholder: 'E.g. I\'ve had lower back pain for 3 months, especially in the mornings...',
    submitBtn: 'Send message',
    successMsg: 'Message sent successfully! We\'ll get back to you within 24h.',
    infoTag: 'Information',
    workingHours: [
      { day: 'Monday – Saturday', time: '08:00 – 21:00' },
      { day: 'Sunday', time: 'Closed' },
    ],
    mapNote: 'Kneza Višeslava 134, Beograd 11000',
    privacy: 'Your data is protected and will not be shared with third parties.',
  },
};

export default function Contact() {
  const { lang } = useLanguage();
  const t = content[lang];

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('up')),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
    }, 1200);
  };

  const inputCls = `w-full bg-[#F5F5F5] dark:bg-[#1a1a1a] border border-[#e0e0e0] dark:border-[#272727] rounded-xl px-5 py-3.5 text-[0.95rem] text-[#181818] dark:text-[#ebebeb] placeholder-[#888] dark:placeholder-[#444] focus:outline-none focus:border-[#4B7876] dark:focus:border-[#4B7876] transition-colors duration-200`;
  const labelCls = `block text-[0.72rem] font-black tracking-[0.1em] uppercase text-[#444] dark:text-[#666] mb-2`;

  return (
    <div className="bg-[#F0F0F0] dark:bg-[#111] pt-[84px] transition-colors duration-300">
      {/* ── HERO ── */}
      <section className="min-h-[42vh] bg-[#181818] dark:bg-[#0a0a0a] flex flex-col justify-center px-6 lg:px-[52px] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.025)_1px,transparent_0)] bg-[length:28px_28px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(circle,rgba(75,120,118,0.15)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10 reveal">
          <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-6">
            <span className="block w-8 h-[1.5px] bg-current" />
            {t.heroTag}
          </div>
          <h1 className="font-['Montserrat'] text-[clamp(2.4rem,5vw,4.4rem)] font-black leading-[1.05] tracking-[-0.04em] text-white mb-5 max-w-[560px]">
            {t.heroTitle}
          </h1>
          <p className="text-[1.05rem] text-[rgba(235,235,235,0.55)] leading-[1.75] max-w-[440px] font-light">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-[100px] px-6 lg:px-[52px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          {/* ── FORM ── */}
          <div className="reveal-left">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-5">
              <span className="block w-8 h-[1.5px] bg-current" />
              {t.formTag}
            </div>
            <h2 className="font-['Montserrat'] text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold tracking-[-0.03em] text-[#181818] dark:text-[#ebebeb] mb-8">
              {t.formTitle}
            </h2>

            {submitted ? (
              <div className="bg-white dark:bg-[#161616] rounded-[28px] border border-[#4B7876]/30 p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#4B7876] flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="text-white rotate-[-45deg]" size={24} />
                </div>
                <h3 className="font-['Montserrat'] text-[1.4rem] font-extrabold text-[#181818] dark:text-[#ebebeb] mb-3">
                  {t.successMsg}
                </h3>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[0.78rem] font-bold tracking-widest uppercase text-[#4B7876] cursor-pointer hover:underline"
                >
                  {lang === 'SRB' ? 'Nova poruka' : 'New message'}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-[#161616] rounded-[28px] border border-[#e8e8e8] dark:border-[#222] p-8 shadow-[0_12px_40px_rgba(24,24,24,0.04)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              >
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelCls}>{t.firstNameLabel}</label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Ime"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>{t.lastNameLabel}</label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Prezime"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelCls}>{t.emailLabel}</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="email@primer.com"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>{t.phoneLabel}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+381 60..."
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="mb-4">
                  <label className={labelCls}>{t.serviceLabel}</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputCls} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>{lang === 'SRB' ? 'Izaberite uslugu...' : 'Select a service...'}</option>
                    {t.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className={labelCls}>{t.messageLabel}</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder={t.messagePlaceholder}
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <p className="text-[0.72rem] text-[#666] dark:text-[#555] mb-5">{t.privacy}</p>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#181818] dark:bg-[#ebebeb] text-white dark:text-[#111] font-['Montserrat'] font-bold text-[0.82rem] tracking-[0.1em] uppercase py-4 rounded-full hover:bg-[#4B7876] dark:hover:bg-[#4B7876] dark:hover:text-white disabled:opacity-60 transition-all duration-250 cursor-pointer flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {t.submitBtn}
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── INFO ── */}
          <div className="reveal-right space-y-5">
            <div className="inline-flex items-center gap-3 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#4B7876] mb-1">
              <span className="block w-8 h-[1.5px] bg-current" />
              {t.infoTag}
            </div>

            {/* Contact cards */}
            {[
              {
                icon: Phone,
                label: lang === 'SRB' ? 'Telefon' : 'Phone',
                val: '+381 (0)65 893 7337',
                href: 'tel:+381658937337',
              },
              {
                icon: Mail,
                label: 'Email',
                val: 'zdravlje@brave-recovery.rs',
                href: 'mailto:zdravlje@brave-recovery.rs',
              },
              {
                icon: MapPin,
                label: lang === 'SRB' ? 'Adresa' : 'Address',
                val: 'Kneza Višeslava 134, Beograd 11000',
                href: 'https://maps.google.com/?q=Kneza+Vi%C5%A1eslava+134,+Beograd',
              },
            ].map(({ icon: Icon, label, val, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 bg-white dark:bg-[#161616] rounded-2xl p-5 border border-[#e8e8e8] dark:border-[#222] hover:border-[#4B7876]/30 dark:hover:border-[#4B7876]/20 hover:shadow-[0_8px_24px_rgba(24,24,24,0.06)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-250 group no-underline"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4B7876]/8 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4B7876] transition-colors duration-250">
                  <Icon size={17} className="text-[#4B7876] group-hover:text-white transition-colors duration-250" />
                </div>
                <div>
                  <div className="text-[0.65rem] font-black tracking-widest uppercase text-[#666] dark:text-[#555] mb-1">{label}</div>
                  <div className="text-[0.92rem] text-[#181818] dark:text-[#ebebeb] font-medium">{val}</div>
                </div>
              </a>
            ))}

            {/* Working hours */}
            <div className="bg-white dark:bg-[#161616] rounded-2xl p-5 border border-[#e8e8e8] dark:border-[#222]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#4B7876]/8 flex items-center justify-center flex-shrink-0">
                  <Clock size={17} className="text-[#4B7876]" />
                </div>
                <div className="text-[0.65rem] font-black tracking-widest uppercase text-[#666] dark:text-[#555]">
                  {lang === 'SRB' ? 'Radno vreme' : 'Working hours'}
                </div>
              </div>
              <div className="space-y-2.5 pl-[52px]">
                {t.workingHours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span className="text-[0.82rem] text-[#444] dark:text-[#777]">{h.day}</span>
                    <span className={`text-[0.82rem] font-semibold ${h.time === 'Neradan dan' || h.time === 'Closed' ? 'text-[#bbb] dark:text-[#444]' : 'text-[#181818] dark:text-[#ebebeb]'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden h-[220px] border border-[#e0e0e0] dark:border-[#222]">
              <iframe
                title="Brave Recovery Center"
                src="https://maps.google.com/maps?q=Kneza+Vi%C5%A1eslava+134,+Beograd&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-11 h-11 rounded-full bg-white dark:bg-[#161616] border border-[#e8e8e8] dark:border-[#222] flex items-center justify-center text-[#444] dark:text-[#777] hover:bg-[#4B7876] hover:border-[#4B7876] hover:text-white dark:hover:bg-[#4B7876] dark:hover:border-[#4B7876] dark:hover:text-white transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
