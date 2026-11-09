import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface AnyaImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | 'auto';
  vignetteType?:
    | 'hammam-arch'
    | 'brass-incense'
    | 'copper-pedicure'
    | 'perfume-tray'
    | 'balayage-waves'
    | 'triptych-pillars'
    | 'zellige-fountain'
    | 'tea-hospitality'
    | 'hair-waves'
    | 'hydrafacial'
    | 'nail-art'
    | 'bridal-glam';
  slotLabel?: {
    fr: string;
    ar: string;
  };
  title?: string;
  isCover?: boolean;
}

export const AnyaImage: React.FC<AnyaImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = '4/3',
  vignetteType = 'hair-waves',
  slotLabel,
  title,
  isCover = true,
}) => {
  const { t } = useLanguage();
  const [loadFailed, setLoadFailed] = useState(false);

  const aspectStyles = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/4': 'aspect-[3/4]',
    'auto': '',
  };

  const renderBespokeVignette = () => {
    switch (vignetteType) {
      case 'hydrafacial':
        return (
          <svg
            className="w-20 h-20 text-[#C59B72] mb-3"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="38" stroke="#C59B72" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
            <circle cx="50" cy="50" r="28" stroke="#E8B4B8" strokeWidth="1.5" fill="#1C1618" />
            <path d="M50 32 C46 38 42 44 42 50 C42 56 46 60 50 60 C54 60 58 56 58 50 C58 44 54 38 50 32 Z" fill="#C59B72" opacity="0.85" />
            <path d="M50 22 L50 26" stroke="#C59B72" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M50 74 L50 78" stroke="#C59B72" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22 50 L26 50" stroke="#C59B72" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M74 50 L78 50" stroke="#C59B72" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );

      case 'nail-art':
      case 'copper-pedicure':
        return (
          <svg
            className="w-20 h-20 text-[#C59B72] mb-3"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="50" cy="65" rx="38" ry="16" stroke="#C59B72" strokeWidth="1.8" fill="#181415" />
            <ellipse cx="50" cy="63" rx="32" ry="12" stroke="#E8B4B8" strokeWidth="1.2" />
            <circle cx="44" cy="61" r="3" fill="#E8B4B8" opacity="0.9" />
            <circle cx="56" cy="63" r="2.5" fill="#C59B72" opacity="0.9" />
            <path d="M50 24 C45 32 45 40 50 48 C55 40 55 32 50 24 Z" fill="#C59B72" opacity="0.75" />
          </svg>
        );

      case 'bridal-glam':
        return (
          <svg
            className="w-20 h-20 text-[#C59B72] mb-3"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Crown Motif */}
            <path d="M30 65 L30 45 L40 52 L50 36 L60 52 L70 45 L70 65 Z" stroke="#C59B72" strokeWidth="1.8" fill="#1A1516" />
            <circle cx="30" cy="42" r="2" fill="#E8B4B8" />
            <circle cx="50" cy="33" r="2.5" fill="#C59B72" />
            <circle cx="70" cy="42" r="2" fill="#E8B4B8" />
            <line x1="28" y1="68" x2="72" y2="68" stroke="#C59B72" strokeWidth="1.5" />
          </svg>
        );

      case 'hair-waves':
      case 'balayage-waves':
      default:
        return (
          <svg
            className="w-20 h-20 text-[#C59B72] mb-3"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="38" stroke="#C59B72" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
            <path d="M32 26 C46 36 36 64 48 84" stroke="#C59B72" strokeWidth="2" strokeLinecap="round" />
            <path d="M44 24 C56 36 48 64 60 84" stroke="#E8B4B8" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
            <path d="M54 26 C68 38 58 66 70 84" stroke="#C59B72" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
          </svg>
        );
    }
  };

  if (loadFailed || !src) {
    return (
      <div
        className={`relative w-full ${aspectStyles[aspectRatio]} bg-gradient-to-br from-[#181516] via-[#121212] to-[#20181A] rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-[#C59B72]/30 overflow-hidden shadow-inner ${className}`}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C59B72_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute w-44 h-44 rounded-full bg-[radial-gradient(circle,rgba(232,180,184,0.15)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-xs space-y-2">
          {renderBespokeVignette()}

          {title && (
            <h4 className="font-heading text-lg sm:text-xl font-normal text-[#FDFBF7] tracking-wide line-clamp-1">
              {title}
            </h4>
          )}

          {slotLabel && (
            <div className="bg-[#181516]/90 border border-[#C59B72]/40 px-3.5 py-1 rounded-full text-[11px] text-[#FDFBF7] font-sans shadow-md">
              <span className="text-[#C59B72] font-semibold mr-1 rtl:ml-1 rtl:mr-0">✦</span>
              {t(slotLabel)}
            </div>
          )}

          <p className="text-[10px] text-[#E8B4B8] font-sans tracking-widest uppercase mt-1">
            SOUAD GLAM BEAUTY • VALMASCORT
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${aspectStyles[aspectRatio]} bg-[#F8F2EC] rounded-2xl ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full transition-transform duration-700 ease-out ${
          isCover ? 'object-cover' : 'object-contain'
        }`}
        onError={() => setLoadFailed(true)}
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    </div>
  );
};
