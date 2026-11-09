import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { Logo } from './Logo.tsx';
import { Phone, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onReplayIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onReplayIntro,
}) => {
  const { lang, toggleLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t(CONTENT.nav.home) },
    { id: 'services', label: t(CONTENT.nav.services) },
    { id: 'gallery', label: t(CONTENT.nav.gallery) },
    { id: 'about', label: t(CONTENT.nav.about) },
    { id: 'contact', label: t(CONTENT.nav.contact) },
  ];

  return (
    <header
      className={`sticky top-0 z-30 w-full transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#121212]/95 border-b border-[#C59B72]/25 shadow-md py-2 sm:py-2.5 backdrop-blur-md'
          : 'bg-[#121212]/90 border-b border-[#FDFBF7]/10 py-2 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo Column */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center text-start group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B72] rounded-lg p-1 min-h-[44px]"
            aria-label="Souad Glam Beauty"
          >
            <Logo variant="mark" size="sm" className="sm:hidden" />
            <div className="hidden sm:flex items-center gap-2.5">
              <Logo variant="mark" size="md" />
              <div className="flex flex-col text-start">
                <span className="font-heading text-lg font-medium tracking-[0.16em] text-[#FDFBF7] leading-none uppercase">
                  SOUAD GLAM BEAUTY
                </span>
                <span className="font-body text-[8.5px] font-semibold tracking-[0.25em] text-[#C59B72] leading-tight uppercase mt-1">
                  INSTITUT DE BEAUTÉ
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Links (Hidden on mobile) */}
          <nav
            aria-label="Navigation principale"
            className="hidden md:flex items-center p-1 bg-[#1A1718]/80 border border-[#C59B72]/25 rounded-full"
          >
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => onNavigate(link.id)}
                  className={`min-h-[38px] px-3.5 lg:px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B72] ${
                    isActive
                      ? 'bg-[#C59B72] text-[#121212] font-semibold shadow-xs'
                      : 'text-[#FDFBF7] hover:text-[#E8B4B8] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Items: Intro replay, Language switch, Phone call, Book CTA */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Replay Intro Button */}
            <button
              type="button"
              onClick={onReplayIntro}
              className="min-h-[44px] min-w-[44px] sm:min-w-0 inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs text-[#C59B72] hover:text-[#FDFBF7] bg-[#1A1718] hover:bg-[#242021] border border-[#C59B72]/40 transition-colors shadow-xs"
              title={t(CONTENT.nav.replayIntro)}
              aria-label={t(CONTENT.nav.replayIntro)}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C59B72]" />
              <span className="hidden sm:inline font-medium text-[11px]">{t(CONTENT.nav.replayIntro)}</span>
            </button>

            {/* Bilingual Switcher */}
            <button
              type="button"
              onClick={toggleLang}
              className="min-h-[44px] px-3 py-1.5 rounded-full text-xs text-[#FDFBF7] hover:text-[#E8B4B8] bg-[#1A1718]/80 border border-[#C59B72]/30 hover:border-[#C59B72] transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B72]"
              title="Changer de langue / تغيير اللغة"
              aria-label={`Changer de langue vers ${lang === 'fr' ? 'Arabe' : 'Français'}`}
            >
              <Globe className="w-3.5 h-3.5 text-[#C59B72]" />
              <span className="font-semibold text-xs tracking-wide">
                {lang === 'fr' ? 'العربية' : 'Français'}
              </span>
            </button>

            {/* Quick Call on mobile */}
            <a
              href={`tel:${CONTENT.brand.phoneRaw}`}
              className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-[#1A1718] border border-[#C59B72]/40 text-[#C59B72] hover:bg-[#252021] transition-colors"
              aria-label={`Appeler Souad Glam Beauty au ${CONTENT.brand.phoneFormatted}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Primary Booking CTA (Desktop only) */}
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="hidden md:inline-flex items-center justify-center min-h-[40px] px-5 py-2 text-xs font-semibold tracking-widest uppercase bg-[#C59B72] hover:bg-[#d8ae85] text-[#121212] rounded-full transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B72] whitespace-nowrap"
            >
              {t(CONTENT.nav.bookCta)}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
