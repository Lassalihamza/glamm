import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { assets } from '../data/assets.ts';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

interface PromoBannerProps {
  onNavigate: (tab: string, prefillCategoryOrService?: string) => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onNavigate }) => {
  const { lang, t, isRTL } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-[#121212] text-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Screen Card */}
        <div className="rounded-[28px] sm:rounded-3xl bg-gradient-to-br from-[#1C1819] to-[#121011] border border-[#C59B72]/35 p-5 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center shadow-xl">
          
          {/* Visual Frame */}
          <div className="md:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-80 relative shadow-md border border-[#C59B72]/40 bg-[#1A1617] group">
              {!imgError ? (
                <img
                  src={assets.balayageWaves}
                  alt="Souad Glam Beauty Soin Signature"
                  width={400}
                  height={320}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={() => setImgError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#1C1819] to-[#121212] text-center">
                  <span className="font-heading text-lg text-[#FDFBF7]">Hydrafacial Haute Performance</span>
                  <span className="text-[10px] tracking-widest text-[#C59B72] uppercase mt-1">4 500 DA • Promotion -20%</span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#121011]/80 via-transparent to-transparent pointer-events-none" />

              {/* -20% OFF Badge */}
              <div className="absolute top-3 start-3 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#141112]/95 border-2 border-[#C59B72] flex flex-col items-center justify-center text-center shadow-lg z-10">
                <span className="font-heading text-base sm:text-lg font-bold text-[#C59B72] leading-none">
                  -20%
                </span>
                <span className="text-[8px] sm:text-[9px] font-sans font-semibold tracking-widest text-[#E8B4B8] uppercase mt-0.5">
                  PROMO
                </span>
              </div>

              {/* Corner Badge */}
              <div className="absolute bottom-3 end-3 px-3 py-1 rounded-full bg-[#121212]/90 border border-[#C59B72]/35 text-[9px] sm:text-[10px] text-[#FDFBF7] tracking-wider uppercase font-medium">
                {lang === 'fr' ? 'À partir de 4 500 DA' : 'ابتداءً من 4500 د.ج'}
              </div>
            </div>
          </div>

          {/* Offer Details */}
          <div className="md:col-span-7 space-y-4">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#C59B72] bg-[#C59B72]/15 px-3 py-1 rounded-full border border-[#C59B72]/35">
                <Sparkles className="w-3 h-3 text-[#C59B72]" />
                <span>
                  {lang === 'fr'
                    ? 'OFFRE PROMO À VALMASCORT'
                    : 'عرض ترويجي في فالمسكور'}
                </span>
              </span>

              <span className="text-xs text-[#E8B4B8] font-medium">
                {lang === 'fr'
                  ? 'Tarif officiel : 4 500 DA'
                  : 'السعر الرسمي: 4500 د.ج'}
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#FDFBF7] font-light leading-tight tracking-wide [text-wrap:balance]">
              {lang === 'fr'
                ? 'Hydrafacial Régénérant — Teint Parfait & Éclat Immédiat'
                : 'جلسة هيدرا فيشل المتطورة — نضارة فورية وإشراقة ساحرة'}
            </h3>

            <p className="text-xs sm:text-sm text-[#D8D0C5] font-body leading-relaxed max-w-xl">
              {t(CONTENT.promoBanner.description)}
            </p>

            <div className="pt-1 border-t border-[#FDFBF7]/15 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#D8D0C5]">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#C59B72] shrink-0" />
                <span>{lang === 'fr' ? 'Extraction douce indolore' : 'إزالة لطيفة للشوائب'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#C59B72] shrink-0" />
                <span>{lang === 'fr' ? 'Infusion d\'acide hyaluronique' : 'ترطيب عميق بالهيالورونيك'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#C59B72] shrink-0" />
                <span>{lang === 'fr' ? 'Coup d\'éclat instantané' : 'نضارة ونعومة فورية'}</span>
              </span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onNavigate('contact', 'Hydrafacial (4 500 DA)')}
                className="min-h-[48px] px-7 py-3 bg-[#C59B72] hover:bg-[#d8ae85] text-[#121212] text-xs font-bold tracking-widest uppercase rounded-full shadow-md transition-transform active:scale-98 flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>
                  {lang === 'fr'
                    ? 'RÉSERVER CE SOIN (4 500 DA)'
                    : 'حجز الجلسة (4500 د.ج)'}
                </span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                  }`}
                />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('services', 'esthetique')}
                className="min-h-[48px] px-5 py-3 rounded-full border border-[#C59B72]/40 hover:border-[#C59B72] text-[#FDFBF7] text-xs font-medium tracking-wider uppercase transition-colors text-center"
              >
                {lang === 'fr'
                  ? 'VOIR TOUS LES SOINS VISAGE'
                  : 'استكشاف خدمات العناية بالبشرة'}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
