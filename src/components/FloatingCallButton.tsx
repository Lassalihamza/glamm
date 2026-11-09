import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { CONTENT } from '../data/content.ts';
import { useLanguage } from '../context/LanguageContext.tsx';

export const FloatingCallButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-20 end-4 md:bottom-6 md:end-6 z-30 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div
          role="tooltip"
          className="bg-[#141112]/95 backdrop-blur-md text-[#FDFBF7] border border-[#C59B72]/40 shadow-xl px-3.5 py-1.5 rounded-2xl text-xs font-sans whitespace-nowrap pointer-events-none"
        >
          <span className="text-[#C59B72] font-semibold mr-1.5 rtl:ml-1.5 rtl:mr-0">✦</span>
          <span dir="ltr" className="inline-block font-semibold">
            {CONTENT.brand.phoneFormatted}
          </span>
          <span className="text-[#E8B4B8] text-[10px] block text-center mt-0.5">
            {t(CONTENT.nav.callUs)}
          </span>
        </div>
      )}

      {/* Button */}
      <a
        href={`tel:${CONTENT.brand.phoneRaw}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="w-12 h-12 md:w-13 md:h-13 rounded-full bg-[#141112] text-[#C59B72] border-2 border-[#C59B72] shadow-xl flex items-center justify-center transition-transform active:scale-95 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B72]"
        aria-label={`Appeler Souad Glam Beauty au ${CONTENT.brand.phoneFormatted}`}
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
};
