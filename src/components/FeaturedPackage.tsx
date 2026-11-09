import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { PhoneCall, ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedPackageProps {
  onNavigate: (tab: string, prefillService?: string) => void;
}

export const FeaturedPackage: React.FC<FeaturedPackageProps> = ({
  onNavigate,
}) => {
  const { lang, t, isRTL } = useLanguage();

  const ritualSteps = [
    {
      step: 1,
      title: {
        fr: 'Diagnostic Cutané & Nettoyage Doux',
        ar: 'تشخيص البشرة وتنظيف أولي لطيف',
      },
      desc: {
        fr: 'Analyse sur mesure de votre type de peau suivie d\'un démaquillage haute tolérance pour préparer l\'épiderme.',
        ar: 'فحص مخصص لطبيعة بشرتكِ يتبعه تنظيف عميق ولطيف لإعداد المسام لاستقبال العلاج.',
      },
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 0 0 18" />
        </svg>
      ),
    },
    {
      step: 2,
      title: {
        fr: 'Hydrafacial & Extraction des Impuretés',
        ar: 'هيدرا فيشل وشفط الشوائب اللطيف',
      },
      desc: {
        fr: 'Aspiration indolore par vortex des comédons, élimination des peaux mortes et désincrustation des pores.',
        ar: 'تقنية الشفط المائي المبتكرة لتنقية المسام والتخلص من الرؤوس السوداء بدون تهيج أو ألم.',
      },
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
    },
    {
      step: 3,
      title: {
        fr: 'Infusion de Sérums Antioxydants & Acide Hyaluronique',
        ar: 'ضخ السيرومات الغنية ومضادات الأكسدة',
      },
      desc: {
        fr: 'Pénétration profonde de peptides et vitamines nourrissantes pour repulper et revitaliser le derme.',
        ar: 'ترطيب عميق بحمض الهيالورونيك ومضادات الأكسدة لمنح البشرة امتلاءً ونضارة ساحرة.',
      },
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
          <path d="M12 2v6" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l4.24 4.24" />
          <path d="M14.83 14.83l4.24 4.24" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      step: 4,
      title: {
        fr: 'Masque Apaisant & Modelage Visage Éclat',
        ar: 'قناع مهدئ ومساج نضارة للوجه',
      },
      desc: {
        fr: 'Application d\'un masque lissant avec modelage décongestionnant pour sceller l\'hydratation et le bien-être.',
        ar: 'وضع قناع مغذٍ مع تدليك تصريفي مهدئ للوجه لتثبيت النضارة ومنحكِ استرخاءً تاماً.',
      },
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
          <path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9Z" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#121212] text-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Canvas */}
        <div className="bg-[#181415] border border-[#C59B72]/35 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Header Badge & Title */}
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase bg-[#C59B72]/20 text-[#C59B72] px-3.5 py-1 rounded-full border border-[#C59B72]/40 shadow-xs">
                    <Sparkles className="w-3 h-3 text-[#C59B72]" />
                    <span>{t(CONTENT.featuredPackage.badge)}</span>
                  </span>
                  <span className="text-xs text-[#E8B4B8] tracking-wide font-medium">
                    {t(CONTENT.featuredPackage.priceNote)}
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-light text-[#FDFBF7] tracking-wide leading-tight [text-wrap:balance]">
                  {t(CONTENT.featuredPackage.title)}
                </h2>

                <p className="text-xs sm:text-sm text-[#D8D0C5] font-body leading-relaxed mt-2 max-w-xl">
                  {t(CONTENT.featuredPackage.subtitle)}
                </p>
              </div>

              {/* Steps Timeline */}
              <div className="relative pt-1 pb-1">
                <div
                  className={`absolute top-4 bottom-4 w-px bg-gradient-to-b from-[#C59B72] via-[#E8B4B8]/40 to-transparent ${
                    isRTL ? 'right-4 sm:right-5' : 'left-4 sm:left-5'
                  }`}
                />

                <div className="space-y-5 sm:space-y-6 relative">
                  {ritualSteps.map((stepItem) => (
                    <div
                      key={stepItem.step}
                      className="flex items-start gap-3 sm:gap-4 relative"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1A1617] border border-[#C59B72] flex items-center justify-center shrink-0 text-[#C59B72] shadow-sm z-10">
                        {stepItem.icon}
                      </div>

                      <div className="pt-0.5">
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#C59B72] font-semibold block">
                          {lang === 'fr'
                            ? `Étape 0${stepItem.step}`
                            : `المرحلة 0${stepItem.step}`}
                        </span>
                        <h4 className="text-xs sm:text-sm font-medium text-[#FDFBF7] mt-0.5">
                          {stepItem.title[lang]}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#D8D0C5] mt-0.5 leading-relaxed font-body">
                          {stepItem.desc[lang]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('contact', 'Hydrafacial (4 500 DA)')
                  }
                  className="min-h-[48px] px-7 py-3.5 bg-[#C59B72] hover:bg-[#d8ae85] text-[#121212] text-xs font-bold tracking-widest uppercase rounded-full shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  <span>
                    {lang === 'fr'
                      ? 'RÉSERVER CE SOIN'
                      : 'حجز هذه الجلسة'}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                    }`}
                  />
                </button>

                <a
                  href={`tel:${CONTENT.brand.phoneRaw}`}
                  className="min-h-[48px] px-5 py-3.5 rounded-full border border-[#C59B72]/40 hover:border-[#C59B72] text-[#FDFBF7] text-xs font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                  aria-label={`Appeler Souad Glam Beauty: ${CONTENT.brand.phoneFormatted}`}
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#C59B72]" />
                  <span dir="ltr" className="inline-block font-semibold">
                    {CONTENT.brand.phoneFormatted}
                  </span>
                </a>
              </div>
            </div>

            {/* Price Medallion */}
            <div className="lg:col-span-5 flex justify-center mt-2 lg:mt-0">
              <div className="w-full max-w-[340px] bg-[#1E191A] border border-[#C59B72]/50 rounded-t-full rounded-b-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden">
                <div className="mb-3 px-3.5 py-1 rounded-full border border-[#C59B72]/40 bg-[#121212] text-[#C59B72] text-[10px] font-semibold tracking-widest uppercase">
                  {lang === 'fr'
                    ? 'OFFRE PROMO EN COURS'
                    : 'عرض ترويجي معلن بالصالون'}
                </div>

                <div className="my-1">
                  <span
                    dir="ltr"
                    className="font-heading text-4xl sm:text-5xl text-[#C59B72] font-light tracking-tight inline-block"
                  >
                    {CONTENT.featuredPackage.price}
                  </span>
                </div>

                <p className="text-[11px] text-[#E8B4B8] mt-1 leading-snug">
                  {lang === 'fr'
                    ? 'Tarif officiel affiché (Remise -20% appliquée)'
                    : 'السعر الرسمي المعلن بالصالون مع تخفيض 20%'}
                </p>

                <div className="w-full h-px bg-[#C59B72]/25 my-5" />

                <div className="text-[11px] sm:text-xs text-[#FDFBF7]/90 space-y-2 text-start w-full px-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#C59B72]">◆</span>
                    <span>
                      {lang === 'fr'
                        ? 'Désincrustation douce sous vide'
                        : 'تنظيف عميق للمسام بالشفط المائي'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#C59B72]">◆</span>
                    <span>
                      {lang === 'fr'
                        ? 'Infusion d\'actifs repulpants & éclat'
                        : 'ضخ سيرومات الهيالورونيك والفيتامينات'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#C59B72]">◆</span>
                    <span>
                      {lang === 'fr'
                        ? 'Masque apaisant & modelage visage'
                        : 'قناع مهدئ وتدليك تصريفي للوجه'}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onNavigate('contact', 'Hydrafacial (4 500 DA)')
                  }
                  className="w-full min-h-[46px] mt-6 py-3 bg-[#C59B72] hover:bg-[#d8ae85] text-[#121212] text-xs font-bold tracking-widest uppercase rounded-full shadow-md transition-transform active:scale-98"
                >
                  {lang === 'fr' ? 'RÉSERVER CE FORFAIT →' : 'حجز هذه الباقة ←'}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
