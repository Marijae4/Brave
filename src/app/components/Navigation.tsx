import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const links = {
    SRB: [
      { label: 'O nama', to: '/about' },
      { label: 'Usluge', to: '/services' },
      { label: 'Cenovnik', to: '/pricing' },
      { label: 'Kontakt', to: '/contact' },
    ],
    ENG: [
      { label: 'About', to: '/about' },
      { label: 'Services', to: '/services' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Contact', to: '/contact' },
    ],
  };

  const cta = lang === 'SRB' ? 'Zakaži konsultacije' : 'Book Consultation';
  const isActive = (to: string) => location.pathname === to;

  return (
    <>
      {/* ── MAIN NAV BAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-[52px] transition-all duration-500 ${
          scrolled ? 'h-[68px]' : 'h-[84px]'
        } ${
          scrolled
            ? isDark
              ? 'bg-[rgba(10,10,10,0.92)] backdrop-blur-[28px] border-b border-[rgba(255,255,255,0.07)] shadow-[0_2px_24px_rgba(0,0,0,0.5)]'
              : 'bg-[rgba(255,255,255,0.88)] backdrop-blur-[28px] border-b border-[rgba(0,0,0,0.08)] shadow-[0_2px_24px_rgba(0,0,0,0.06)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 cursor-pointer" aria-label="BRAVE Recovery Center – Početna">
          <span className="font-['Montserrat'] font-black text-[1.15rem] tracking-tight text-[#181818] dark:text-[#ebebeb]">
            BRAVE{' '}
            <span className="text-[#4B7876] font-medium italic">Recovery</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-7 list-none m-0 p-0">
          {links[lang].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`text-[0.73rem] font-semibold tracking-[0.08em] uppercase relative pb-[4px] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#4B7876] after:transition-[width] after:duration-300 after:ease-out ${
                  isActive(item.to)
                    ? 'text-[#4B7876] after:w-full'
                    : 'text-[#333] dark:text-[#c5c5c5] hover:text-[#4B7876] dark:hover:text-[#4B7876] after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Controls */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Language Pill Toggle */}
          <div
            role="group"
            aria-label="Odabir jezika / Language selection"
            className="flex items-center rounded-full bg-[#e8e8e8] dark:bg-[#1e1e1e] border border-[#d0d0d0] dark:border-[#2e2e2e] p-[3px]"
          >
            {(['SRB', 'ENG'] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                aria-label={l === 'SRB' ? 'Srpski jezik' : 'English language'}
                className={`px-[10px] py-[5px] rounded-full text-[0.6rem] font-black tracking-[0.12em] uppercase transition-all duration-200 leading-none cursor-pointer ${
                  lang === l
                    ? 'bg-white dark:bg-[#303030] text-[#181818] dark:text-[#ebebeb] shadow-sm'
                    : 'bg-transparent text-[#555] dark:text-[#666] hover:text-[#181818] dark:hover:text-[#aaa]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Uključi svetli mod' : 'Uključi tamni mod'}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#e8e8e8] dark:bg-[#1e1e1e] border border-[#d0d0d0] dark:border-[#2e2e2e] text-[#444] dark:text-[#aaa] hover:bg-white dark:hover:bg-[#2a2a2a] hover:border-[#bbb] dark:hover:border-[#3a3a3a] hover:text-[#181818] dark:hover:text-[#ebebeb] transition-all duration-200 cursor-pointer"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* CTA */}
          <Link
            to="/contact"
            className="ml-1 font-['Montserrat'] font-bold text-[0.72rem] tracking-[0.08em] uppercase px-6 py-[11px] rounded-full bg-[#181818] dark:bg-[#ebebeb] text-white dark:text-[#111] hover:bg-[#4B7876] dark:hover:bg-[#4B7876] dark:hover:text-white hover:shadow-[0_8px_20px_rgba(75,120,118,0.3)] transition-all duration-250 whitespace-nowrap"
          >
            {cta}
          </Link>
        </div>

        {/* Mobile Hamburger — always z-[60] so it stays on top of overlay */}
        <button
          type="button"
          className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 rounded-lg cursor-pointer z-[60] relative"
          style={{ background: 'transparent', border: 'none' }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Zatvori meni' : 'Otvori meni'}
          aria-expanded={mobileOpen}
        >
          <span
            className="block w-[22px] h-[2px] rounded-full transition-all duration-300 bg-[#181818] dark:bg-[#ebebeb]"
            style={{ transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
          />
          <span
            className="block w-[22px] h-[2px] rounded-full transition-all duration-300 bg-[#181818] dark:bg-[#ebebeb]"
            style={{ opacity: mobileOpen ? 0 : 1, transform: mobileOpen ? 'scaleX(0)' : 'none' }}
          />
          <span
            className="block w-[22px] h-[2px] rounded-full transition-all duration-300 bg-[#181818] dark:bg-[#ebebeb]"
            style={{ transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
          />
        </button>
      </nav>

      {/* ── MOBILE OVERLAY — z-[55] so it's below the nav bar (z-50 nav will show on top) ── */}
      {/* Note: nav bar is z-50, hamburger is z-[60]. Overlay is z-[45] so nav logo is NOT visible above overlay */}
      {/* Actually: we make overlay z-[55], and nav bar just shows hamburger on top at z-[60] */}
      <div
        aria-hidden={!mobileOpen}
        className={`lg:hidden fixed inset-0 z-[55] flex flex-col transition-all duration-400 ${
          mobileOpen
            ? 'opacity-100 visible pointer-events-auto'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{
          background: isDark ? 'rgba(8,8,8,0.97)' : 'rgba(245,245,245,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        {/* Overlay top bar — mimic nav height, show logo */}
        <div className="flex items-center justify-between px-6 h-[84px] flex-shrink-0">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="font-['Montserrat'] font-black text-[1.1rem] tracking-tight text-[#181818] dark:text-[#ebebeb]"
          >
            BRAVE <span className="text-[#4B7876] font-medium italic">Recovery</span>
          </Link>
          {/* Spacer so logo doesn't overlap hamburger */}
          <div className="w-10" />
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-center gap-3 py-5 border-b border-[#e0e0e0] dark:border-[#222] mx-6">
          {/* Language toggle */}
          <div
            role="group"
            aria-label="Odabir jezika"
            className="flex items-center rounded-full bg-[#e0e0e0] dark:bg-[#1e1e1e] border border-[#ccc] dark:border-[#2e2e2e] p-[3px]"
          >
            {(['SRB', 'ENG'] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-[12px] py-[7px] rounded-full text-[0.62rem] font-black tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                  lang === l
                    ? 'bg-white dark:bg-[#303030] text-[#181818] dark:text-[#ebebeb] shadow-sm'
                    : 'bg-transparent text-[#555] dark:text-[#666]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Svetli mod' : 'Tamni mod'}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-[#e0e0e0] dark:bg-[#1e1e1e] border border-[#ccc] dark:border-[#2e2e2e] text-[#444] dark:text-[#aaa] transition-all cursor-pointer"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col justify-center items-center gap-4 px-6">
          {links[lang].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={`font-['Montserrat'] text-[1.6rem] font-extrabold uppercase tracking-wide transition-colors duration-200 ${
                isActive(item.to)
                  ? 'text-[#4B7876]'
                  : 'text-[#181818] dark:text-[#ebebeb] hover:text-[#4B7876] dark:hover:text-[#4B7876]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="px-6 pb-10 pt-4 border-t border-[#e0e0e0] dark:border-[#222]">
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-[#181818] dark:bg-[#ebebeb] text-white dark:text-[#111] font-['Montserrat'] font-bold text-[0.82rem] tracking-[0.1em] uppercase py-4 rounded-full hover:bg-[#4B7876] dark:hover:bg-[#4B7876] dark:hover:text-white transition-colors duration-250"
          >
            {cta}
          </Link>
        </div>
      </div>
    </>
  );
}
