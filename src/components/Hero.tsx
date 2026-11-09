import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT, ServiceItem } from '../data/content.ts';
import { assets } from '../data/assets.ts';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: string, prefillService?: string) => void;
  onOpenServiceDetail: (service: ServiceItem) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onOpenServiceDetail,
}) => {
  const { lang, t, isRTL } = useLanguage();
  const [videoFailed, setVideoFailed] = useState(false);
  const [archImgError, setArchImgError] = useState(false);

  const hydraService = CONTENT.services.find(
    (s) => s.id === 'hydra-facial'
  );

  return (
    <section className="min-h-[88vh] sm:min-h-[92vh] flex items-center relative isolate overflow-hidden bg-[#121212] text-[#FDFBF7] py-10 sm:py-16 px-4 sm:px-6 lg:px-12">
      {/* 1. Base Canvas */}
      <div className="absolute inset-0 bg-[#121212] -z-30" />

      {/* 2. Media Layer: Background Video */}
      {!videoFailed ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
          className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none opacity-20"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
      ) : null}

      {/* 3. High-Key Beauty Backdrop */}
      <div
        className="absolute inset-0 w-full h-full -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${assets.balayageWaves || assets.heroBackdrop})`,
          opacity: videoFailed ? 0.25 : 0.15,
        }}
      />

      {/* 4. Ambient Rose Gold & Champagne Aura */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(circle at 75% 45%, rgba(232, 180, 184, 0.12) 0%, rgba(197, 155, 114, 0.12) 40%, transparent 70%)',
        }}
      />

      {/* 5. Gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/75 via-[#121212]/50 to-[#121212]/90 -z-10 pointer-events-none" />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-start">
            
            {/* Location & Feminine Sanctum Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-sans tracking-widest uppercase bg-[#1A1718]/90 text-[#C59B72] border border-[#C59B72]/40 font-semibold shadow-xs">
                <span>✦</span>
                <span>{t(CONTENT.hero.locationBadge)}</span>
              </span>
              <span className="text-xs text-[#E8B4B8] font-sans tracking-wide">
                {t(CONTENT.hero.womenOnly)}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-heading text-[clamp(2.2rem,6vw+0.5rem,3.85rem)] font-normal text-[#FDFBF7] leading-[1.12] tracking-wide [text-wrap:balance]">
              {t(CONTENT.hero.title)}
            </h1>

            {/* Salon Bio Summary */}
            <p className="text-xs sm:text-sm md:text-base text-[#D8D0C5] font-body leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t(CONTENT.hero.description)}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="min-h-[48px] px-7 py-3.5 bg-[#C59B72] hover:bg-[#d8ae85] text-[#121212] text-xs font-bold tracking-widest uppercase rounded-full shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-2 group whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>
                  {lang === 'fr'
                    ? 'PRENDRE RENDEZ-VOUS'
                    : 'طلب موعد بالصالون'}
                </span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                  }`}
                />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => {
                  if (hydraService) {
                    onOpenServiceDetail(hydraService);
                  } else {
                    onNavigate('services');
                  }
                }}
                className="min-h-[48px] px-5 py-3.5 border border-[#C59B72]/50 text-[#FDFBF7] hover:bg-[#C59B72]/15 rounded-full text-xs font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C59B72]" />
                <span>{t(CONTENT.hero.ctaSecondary)}</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-[#FDFBF7]/15 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#D8D0C5]">
              <span className="flex items-center gap-1.5">
                <span className="text-[#C59B72]">✦</span>
                {lang === 'fr' ? 'Coiffure & Balayage' : 'تصفيف وبالياج'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#C59B72]">✦</span>
                {lang === 'fr' ? 'Hydrafacial & Soins Visage' : 'هيدرا فيشل وعناية بالبشرة'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#C59B72]">✦</span>
                {lang === 'fr' ? 'Packs Mariée "Bride to be"' : 'باقات العروس المتكاملة'}
              </span>
              <a
                href={`tel:${CONTENT.brand.phoneRaw}`}
                className="min-h-[44px] flex items-center gap-1.5 hover:text-[#FDFBF7] transition-colors"
                aria-label={`Téléphone: ${CONTENT.brand.phoneFormatted}`}
              >
                <span className="text-[#C59B72]">✦</span>
                <PhoneCall className="w-3.5 h-3.5 text-[#C59B72]" />
                <span dir="ltr" className="inline-block font-semibold text-[#FDFBF7]">
                  {CONTENT.brand.phoneFormatted}
                </span>
              </a>
            </div>
          </div>

          {/* Visual Column: Sculptural Beauty Arch */}
          <div className="lg:col-span-5 flex justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              <div className="relative aspect-[4/5] w-full rounded-t-full rounded-b-3xl overflow-hidden border border-[#C59B72]/40 shadow-2xl bg-[#1A1617]">
                <img
                  src={!archImgError ? assets.balayageWaves : assets.heroBackdrop}
                  alt="Souad Glam Beauty Institut"
                  width={400}
                  height={500}
                  loading="eager"
                  className="w-full h-full object-cover"
                  onError={() => setArchImgError(true)}
                  referrerPolicy="no-referrer"
                />

                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/30 to-transparent pointer-events-none" />

                {/* Floating Badge at base of arch */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-2xl bg-[#141112]/95 border border-[#C59B72]/40 shadow-lg text-center">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#C59B72] block mb-0.5">
                    {lang === 'fr'
                      ? 'SOIN VEDETTE À VALMASCORT'
                      : 'الخدمة الأكثر طلباً في فالمسكور'}
                  </span>
                  <span className="font-heading text-base sm:text-lg text-[#FDFBF7] font-normal block">
                    {t(CONTENT.hero.floatingBadge)}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
