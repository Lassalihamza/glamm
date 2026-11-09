import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { assets } from '../data/assets.ts';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PillarsProps {
  onNavigate: (tab: string, category?: string) => void;
}

export const Pillars: React.FC<PillarsProps> = ({ onNavigate }) => {
  const { lang, isRTL } = useLanguage();
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const pillarsData = [
    {
      id: 'coiffure',
      title: 'COIFFURE',
      tagline: {
        fr: 'Balayages Lumineux & Haute Coiffure',
        ar: 'بالياج مضيء وتصفيف شعر احترافي',
      },
      description: {
        fr: 'L\'art du cheveu magnifié : balayages fondus signature, brushings glamour hollywoodiens et soins capillaires réparateurs profonds.',
        ar: 'خبرة متفوقة لإبراز بريق شعركِ بتقنيات البالياج المذاب، السيشوار الناعم وعلاجات الكيراتين والبوتوكس المكثفة.',
      },
      image: assets.balayageWaves,
      gradient:
        'linear-gradient(to top, #141112 32%, rgba(26, 20, 22, 0.78) 65%, rgba(26, 20, 22, 0.35) 100%)',
      category: 'coiffure',
      emblem: '✦',
    },
    {
      id: 'esthetique',
      title: 'ESTHÉTIQUE',
      tagline: {
        fr: 'Hydrafacial & Pureté de la Peau',
        ar: 'هيدرا فيشل ونقاء البشرة',
      },
      description: {
        fr: 'Nettoyage de peau en profondeur, protocole Hydrafacial régénérant (4 500 DA), cils à cils et épilations délicates pour un teint immaculé.',
        ar: 'تنظيف مسام متكامل، تقنية هيدرا فيشل لتجديد نضارة البشرة، تركيب رموش دقيق وإزالة شعر الجسم باحترافية.',
      },
      image: assets.perfumeTray,
      gradient:
        'linear-gradient(to top, #1A1417 32%, rgba(32, 22, 26, 0.78) 65%, rgba(32, 22, 26, 0.35) 100%)',
      category: 'esthetique',
      emblem: '❖',
    },
    {
      id: 'mariee',
      title: 'GLAMOUR',
      tagline: {
        fr: 'Onglerie & Pack Mariée "Bride to Be"',
        ar: 'فن الأظافر وباقة العروس الملكية',
      },
      description: {
        fr: 'Mise en beauté de cérémonie : poses d\'ongles gel et nail art, maquillage haute définition make-up artist et accompagnement complet de la mariée.',
        ar: 'خدمات المناسبات الفاخرة: تزيين وتركيب الأظافر، مكياج سهرات سينمائي، ومرافقة متكاملة لإطلالة عروس تخطف القلوب.',
      },
      image: assets.copperPedicure,
      gradient:
        'linear-gradient(to top, #161214 32%, rgba(28, 20, 24, 0.78) 65%, rgba(28, 20, 24, 0.35) 100%)',
      category: 'mariee',
      emblem: '✧',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#ECDCCE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#C59B72]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C59B72] font-semibold">
              {lang === 'fr' ? 'L\'EXCELLENCE SOUAD GLAM BEAUTY' : 'ركائز التميز والفخامة'}
            </span>
            <span className="w-5 h-px bg-[#C59B72]" />
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-[#1C1917] font-normal leading-tight [text-wrap:balance]">
            {lang === 'fr'
              ? 'Trois Univers Dédiés à Votre Rayonnement'
              : 'ثلاثة عوالم متكاملة لجمالكِ وتألقكِ'}
          </h2>

          <p className="text-xs sm:text-sm text-[#786C68] font-body mt-3 leading-relaxed max-w-xl mx-auto">
            {lang === 'fr'
              ? 'Découvrez nos trois espaces signatures à Valmascort pour une expérience de beauté sur mesure et inoubliable.'
              : 'اكتشفي مساحاتنا المتخصصة في فالمسكور لتجربة دلال وعناية استثنائية تناسب ذوقكِ الرفيع.'}
          </p>
        </div>

        {/* Mobile Swipe Notice */}
        <div className="flex sm:hidden items-center justify-between text-[11px] text-[#A87F45] mb-3 px-1">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#C59B72]" />
            <span>{lang === 'fr' ? 'Glisser pour explorer les univers' : 'اسحبي لاكتشاف العوالم الثلاثة'}</span>
          </span>
          <div className="flex items-center gap-1.5">
            {pillarsData.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  activeMobileIndex === i ? 'bg-[#C59B72] w-3' : 'bg-[#ECDCCE]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Carousel / Responsive Grid */}
        <div
          onScroll={(e) => {
            const el = e.currentTarget;
            const scrollLeft = Math.abs(el.scrollLeft);
            const cardWidth = el.offsetWidth * 0.82;
            const idx = Math.min(2, Math.max(0, Math.round(scrollLeft / (cardWidth || 1))));
            setActiveMobileIndex(idx);
          }}
          className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-3"
        >
          {pillarsData.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => onNavigate('services', pillar.category)}
              className="w-[84vw] max-w-[320px] sm:w-auto shrink-0 snap-center rounded-t-[120px] rounded-b-[28px] overflow-hidden min-h-[460px] sm:min-h-[520px] p-6 sm:p-8 flex flex-col justify-between relative border border-[#C59B72]/35 shadow-lg active:scale-99 transition-transform cursor-pointer group"
            >
              {/* Photographic Background */}
              <img
                src={pillar.image}
                alt={pillar.title}
                loading="lazy"
                width={320}
                height={520}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Tinted Luxury Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{ background: pillar.gradient }}
              />

              {/* Top Talisman Emblem */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-9 h-9 rounded-full border border-[#C59B72]/50 bg-[#121212]/80 flex items-center justify-center text-[#C59B72] shadow-xs">
                  <span className="text-xs font-serif">{pillar.emblem}</span>
                </div>

                <span className="text-[10px] tracking-[0.2em] uppercase text-[#FDFBF7] bg-[#121212]/60 px-3 py-1 rounded-full border border-[#FDFBF7]/15">
                  {lang === 'fr' ? 'Institut' : 'المعهد'}
                </span>
              </div>

              {/* Bottom Details & Direct Navigation */}
              <div className="relative z-10 pt-12">
                <h3 className="font-heading text-3xl sm:text-4xl font-light text-[#FDFBF7] tracking-[0.2em] mb-1">
                  {pillar.title}
                </h3>

                <div className="text-xs font-medium text-[#C59B72] tracking-wide mb-2 flex items-center gap-1.5">
                  <span className="inline-block w-2.5 h-px bg-[#C59B72]" />
                  <span>{pillar.tagline[lang]}</span>
                </div>

                <p className="text-xs text-[#D8D0C5] font-body leading-relaxed line-clamp-3 mb-4">
                  {pillar.description[lang]}
                </p>

                <div className="pt-3 border-t border-[#FDFBF7]/20 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#FDFBF7] group-hover:text-[#C59B72] transition-colors min-h-[44px]">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C59B72]" />
                    <span>
                      {lang === 'fr' ? "Explorer cet univers" : 'استكشفي هذا العالم'}
                    </span>
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
