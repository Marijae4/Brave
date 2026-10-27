import { Link } from "react-router";
import { Instagram, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const content = {
  SRB: {
    desc: 'Klinička fizioterapija i programi oporavka dizajnirani za trajne rezultate.',
    linksTag: 'Brzi linkovi',
    resourcesTag: 'Resursi',
    connectTag: 'Povežite se',
    links: [
      { label: 'Početna', to: '/' },
      { label: 'O nama', to: '/about' },
      { label: 'Usluge', to: '/services' },
    ],
    resources: [
      { label: 'Cenovnik', to: '/pricing' },
      { label: 'Kontakt', to: '/contact' },
    ],
    rights: 'Sva prava zadržana.',
    privacy: 'Politika privatnosti',
    terms: 'Uslovi korišćenja',
  },
  ENG: {
    desc: 'Clinical physiotherapy and recovery programs designed for lasting results.',
    linksTag: 'Quick Links',
    resourcesTag: 'Resources',
    connectTag: 'Connect',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Services', to: '/services' },
    ],
    resources: [
      { label: 'Pricing', to: '/pricing' },
      { label: 'Contact', to: '/contact' },
    ],
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },
};

export function Footer() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <footer className="relative bg-white dark:bg-[#0e0e0e] text-[#181818] dark:text-[#ebebeb] border-t border-gray-200 dark:border-[#1f1f1f] transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-[52px] py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-['Montserrat'] font-black text-xl tracking-tight text-[#181818] dark:text-[#ebebeb]">
                BRAVE <span className="text-[#4B7876] font-medium italic">Recovery</span>
              </span>
            </Link>
            <p className="text-sm text-[#555] dark:text-[#888] leading-relaxed font-light">
              {t.desc}
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-[#555] dark:text-[#555]">
              {t.linksTag}
            </h4>
            <ul className="space-y-3 text-sm">
              {t.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="text-[#333] dark:text-[#aaa] hover:text-[#4B7876] dark:hover:text-[#4B7876] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-[#555] dark:text-[#555]">
              {t.resourcesTag}
            </h4>
            <ul className="space-y-3 text-sm">
              {t.resources.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="text-[#333] dark:text-[#aaa] hover:text-[#4B7876] dark:hover:text-[#4B7876] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-[#555] dark:text-[#555]">
              {t.connectTag}
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] flex items-center justify-center hover:bg-white dark:hover:bg-[#222] hover:border-[#4B7876] hover:text-[#4B7876] dark:hover:text-[#4B7876] transition-all text-[#555] dark:text-[#777]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:zdravlje@brave-recovery.rs"
                className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] flex items-center justify-center hover:bg-white dark:hover:bg-[#222] hover:border-[#4B7876] hover:text-[#4B7876] dark:hover:text-[#4B7876] transition-all text-[#555] dark:text-[#777]"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e0e0e0] dark:border-[#1f1f1f] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#555] dark:text-[#555]">
          <p>&copy; {new Date().getFullYear()} Brave Recovery Center. {t.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#4B7876] transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-[#4B7876] transition-colors">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}