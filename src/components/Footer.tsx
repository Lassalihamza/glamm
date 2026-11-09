import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { MapPin, Phone, Instagram, ExternalLink, Clock } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#100D0E] text-[#FDFBF7] pt-16 pb-12 px-6 md:px-16 border-t border-[#C59B72]/20 relative overflow-hidden">
      {/* Background Subtle Ambient Candlelight Glow */}
      <div className="absolute bottom-0 start-1/2 -translate-x-1/2 w-[650px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(197,155,114,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Top Subtle Accent: Center delicate botanical lotus SVG divider */}
      <div className="w-8 h-8 text-[#C59B72]/50 mx-auto mb-12 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-[#C59B72]/60" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5 C17 14 17 21 20 27 C23 21 23 14 20 5 Z" fill="currentColor" />
          <path d="M20 27 C13 22 9 17 12 10 C18 15 19 21 20 27 Z" fill="currentColor" fillOpacity="0.8" />
          <path d="M20 27 C27 22 31 17 28 10 C22 15 21 21 20 27 Z" fill="currentColor" fillOpacity="0.8" />
          <path d="M7 31 C15 29 25 29 33 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 4-COLUMN RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1 — Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <Logo variant="full" size="md" className="h-16 w-auto max-w-[220px]" />
            </div>

            {/* Bio Summary */}
            <p className="text-sm text-[#A89F99] leading-relaxed max-w-sm font-body">
              {t(CONTENT.brand.tagline)}
            </p>

            {/* Instagram Social Pill */}
            <div className="pt-1">
              <a
                href={CONTENT.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C59B72]/40 hover:border-[#C59B72] bg-[#181415]/80 text-xs text-[#C59B72] hover:text-[#FDFBF7] transition-all shadow-xs"
              >
                <Instagram className="w-3.5 h-3.5 shrink-0" />
                <span dir="ltr" className="font-semibold">{CONTENT.brand.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#C59B72] uppercase font-sans">
              {lang === 'fr' ? 'NAVIGATION' : 'التنقل'}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D8D0C5]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#C59B72] hover:underline underline-offset-4 transition-colors text-start"
                >
                  {t(CONTENT.nav.home)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#C59B72] hover:underline underline-offset-4 transition-colors text-start"
                >
                  {t(CONTENT.nav.services)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#C59B72] hover:underline underline-offset-4 transition-colors text-start"
                >
                  {t(CONTENT.nav.gallery)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#C59B72] hover:underline underline-offset-4 transition-colors text-start"
                >
                  {t(CONTENT.nav.about)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#C59B72] hover:underline underline-offset-4 transition-colors text-start"
                >
                  {t(CONTENT.nav.contact)}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 — Coordonnées & Accès */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#C59B72] uppercase font-sans">
              {lang === 'fr' ? 'COORDONNÉES & ACCÈS' : 'العنوان والاتصال'}
            </h4>
            
            <div className="space-y-3 text-sm text-[#D8D0C5]">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59B72] shrink-0 mt-1" />
                <span className="leading-snug">{t(CONTENT.brand.address)}</span>
              </div>

              {/* Direct Maps Link */}
              <div>
                <a
                  href={CONTENT.brand.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C59B72] hover:underline"
                >
                  <span>{t(CONTENT.contactPage.openMapsBtn)}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>

              {/* Phone */}
              <div className="pt-1">
                <a
                  href={`tel:${CONTENT.brand.phoneRaw}`}
                  className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-mono text-[#FDFBF7] hover:text-[#C59B72] transition-colors"
                >
                  <span className="text-[#C59B72]">📞</span>
                  <span dir="ltr" className="font-semibold tracking-wider">
                    {CONTENT.brand.phoneFormatted}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4 — Horaires & Information */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#C59B72] uppercase font-sans">
              {lang === 'fr' ? "HORAIRES D'OUVERTURE" : 'ساعات العمل'}
            </h4>
            
            <div className="space-y-3 text-sm text-[#D8D0C5]">
              {/* Hours Badge */}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C59B72] shrink-0" />
                <span className="inline-block px-3 py-1 rounded-full bg-[#181415] border border-[#C59B72]/40 text-[#C59B72] text-xs font-semibold tracking-wide shadow-xs">
                  {t(CONTENT.brand.openingHoursPlaceholder)}
                </span>
              </div>

              {/* Booking Note */}
              <p className="text-xs text-[#A89F99] leading-relaxed font-body">
                {lang === 'fr'
                  ? 'Contactez l\'institut au 05 58 54 14 75 pour connaître les créneaux disponibles de la semaine.'
                  : 'يرجى الاتصال بالصالون على 05 58 54 14 75 لمعرفة المواعيد المتاحة لهذا الأسبوع.'}
              </p>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-[#FDFBF7]/10 my-8" />

        {/* Sub-bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#8E8880]">
          {/* Left: Disclaimer */}
          <p className="font-sans font-medium text-[#D8D0C5] text-center md:text-start leading-relaxed">
            {t(CONTENT.brand.footerDisclaimer)}
          </p>

          {/* Right: Copyright */}
          <p className="text-[#8E8880] text-center md:text-end whitespace-nowrap">
            © 2026 SOUAD GLAM BEAUTY • Valmascort, Algérie
          </p>
        </div>

      </div>
    </footer>
  );
};
