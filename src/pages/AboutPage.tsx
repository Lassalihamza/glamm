import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { ASSETS } from '../data/assets.ts';
import { Logo } from '../components/Logo.tsx';
import { LotusWaveDivider } from '../components/LotusWaveDivider.tsx';
import { Heart, Instagram, Sparkles, Scissors, Eye } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="w-full py-12 sm:py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C59B72] font-semibold">
            {lang === 'fr' ? 'Notre Histoire & Philosophie' : 'قصتنا ورؤيتنا'}
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl text-[#1C1917] mt-2 mb-3 font-normal [text-wrap:balance]">
            {t(CONTENT.aboutPage.title)}
          </h1>
          <p className="text-xs sm:text-sm text-[#786C68] leading-relaxed max-w-xl mx-auto font-body">
            {t(CONTENT.aboutPage.tagline)}
          </p>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-20">
          
          {/* Visual Archway */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-md">
              <div className="relative aspect-[4/5] sm:h-[460px] overflow-hidden rounded-t-[140px] rounded-b-3xl border border-[#C59B72]/40 shadow-xl bg-[#1A1617]">
                <img
                  src={ASSETS.balayageWaves}
                  alt={lang === 'fr' ? 'Institut Souad Glam Beauty' : 'معهد سعاد غلام بيوتي'}
                  width={380}
                  height={460}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-[#121212]/10 pointer-events-none" />
                
                <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-[#C59B72]/40 bg-[#141112]/95 p-4 shadow-lg">
                  <Logo variant="mark" size="sm" className="h-10 w-10 shrink-0" />
                  <p className="text-[11px] leading-snug text-[#FDFBF7] font-body">
                    {lang === 'fr'
                      ? 'Institut de Beauté • Valmascort [VILLE: à confirmer]'
                      : 'معهد تجميل • فالمسكور [المدينة: للتأكيد]'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Story */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <h2 className="font-heading text-2xl sm:text-4xl italic text-[#1C1917] font-light leading-tight [text-wrap:balance]">
              {lang === 'fr'
                ? 'L’Excellence de la Beauté & du Soin Féminin'
                : 'فن إبراز الجمال والأناقة النسائية'}
            </h2>

            <p className="text-xs sm:text-sm text-[#786C68] leading-relaxed font-body">
              {t(CONTENT.aboutPage.storyP1)}
            </p>

            <p className="text-xs sm:text-sm text-[#786C68] leading-relaxed font-body">
              {t(CONTENT.aboutPage.storyP2)}
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#ECDCCE] text-center">
                <Scissors className="w-5 h-5 text-[#C59B72] mx-auto mb-1.5" />
                <h3 className="font-heading text-base text-[#121212] font-semibold">
                  {lang === 'fr' ? 'Art Capillaire' : 'تصفيف الشعر'}
                </h3>
                <p className="text-[11px] text-[#786C68] mt-1 leading-snug">
                  {lang === 'fr'
                    ? 'Balayages fondus, brushings glamour & soins profonds.'
                    : 'بالياج احترافي، سيشوار وعلاجات مكثفة للشعر.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#ECDCCE] text-center">
                <Sparkles className="w-5 h-5 text-[#C59B72] mx-auto mb-1.5" />
                <h3 className="font-heading text-base text-[#121212] font-semibold">
                  {lang === 'fr' ? 'Hydrafacial & Soins' : 'هيدرا فيشل ونضارة'}
                </h3>
                <p className="text-[11px] text-[#786C68] mt-1 leading-snug">
                  {lang === 'fr'
                    ? 'Nettoyage profond, soin Hydrafacial (4 500 DA) & éclat.'
                    : 'تنظيف مسام، هيدرا فيشل 4500 د.ج ونضارة فورية.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#ECDCCE] text-center">
                <Eye className="w-5 h-5 text-[#C59B72] mx-auto mb-1.5" />
                <h3 className="font-heading text-base text-[#121212] font-semibold">
                  {lang === 'fr' ? 'Onglerie & Mariée' : 'الأظافر والعرائس'}
                </h3>
                <p className="text-[11px] text-[#786C68] mt-1 leading-snug">
                  {lang === 'fr'
                    ? 'Pose d\'ongles minutieuse, cils & pack "Bride to be".'
                    : 'فن تركيب الأظافر، رموش وباقة العروس الملكية.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CLIENT REVIEWS */}
        <section className="relative overflow-hidden rounded-[28px] sm:rounded-3xl bg-[#141112] p-6 sm:p-12 text-[#FDFBF7]">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#C59B72]">
              {t(CONTENT.aboutPage.avisStoryLabel)}
            </span>
            <h3 className="mt-2 font-heading text-2xl sm:text-4xl font-normal">
              {t(CONTENT.aboutPage.avisHeading)}
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-[#D8D0C5] font-body">
              {t(CONTENT.aboutPage.avisDescription)}
            </p>

            {/* Testimonial Cards */}
            <div className="mt-6 flex sm:grid sm:grid-cols-3 gap-3.5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0 pb-2">
              <article className="w-[82vw] max-w-[280px] sm:w-auto shrink-0 snap-center flex min-h-52 flex-col items-center justify-center rounded-t-full rounded-b-2xl border border-[#C59B72]/30 bg-gradient-to-b from-[#1E181A] to-[#121011] p-6 text-center shadow-md">
                <Heart className="mb-3 h-7 w-7 fill-[#C59B72] text-[#C59B72]" />
                <p className="font-heading text-xl text-[#FDFBF7]">{t(CONTENT.aboutPage.avisStoryLabel)}</p>
                <span className="mt-2 text-xs text-[#E8B4B8]">@souad_glam_beauty_</span>
              </article>
              <article className="w-[82vw] max-w-[280px] sm:w-auto shrink-0 snap-center flex min-h-52 flex-col items-center justify-center rounded-t-full rounded-b-2xl border border-[#C59B72]/30 bg-gradient-to-b from-[#1E181A] to-[#121011] p-6 text-center shadow-md">
                <span className="mb-3 text-2xl text-[#C59B72]">✦</span>
                <p className="font-heading text-lg leading-relaxed text-[#FDFBF7]">« {t(CONTENT.aboutPage.avisHammam)} »</p>
              </article>
              <article className="w-[82vw] max-w-[280px] sm:w-auto shrink-0 snap-center flex min-h-52 flex-col items-center justify-center rounded-t-full rounded-b-2xl border border-[#C59B72]/30 bg-gradient-to-b from-[#1E181A] to-[#121011] p-6 text-center shadow-md">
                <span className="mb-3 text-2xl text-[#C59B72]">✦</span>
                <p className="font-heading text-lg leading-relaxed text-[#FDFBF7]">« {t(CONTENT.aboutPage.avisHair)} »</p>
              </article>
            </div>

            <p className="mt-5 text-[11px] text-[#D8D0C5]">{t(CONTENT.aboutPage.avisNotice)}</p>
            <a
              href={CONTENT.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#C59B72]/70 bg-[#C59B72] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#121212] shadow-lg transition-transform active:scale-98 min-h-[44px]"
            >
              <Instagram className="h-4 w-4" />
              <span>{t(CONTENT.aboutPage.instagramCallout)} ↗</span>
            </a>
          </div>
        </section>
      </div>

      <LotusWaveDivider className="py-8" />
    </div>
  );
};
