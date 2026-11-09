import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { Sparkles, Droplet } from 'lucide-react';

export const ScentRitual: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedScentId, setSelectedScentId] = useState<string>('rose');

  const scentsExtended = [
    {
      id: 'rose',
      name: { fr: 'Pétales de Rose Glam', ar: 'بتلات الورد الفاخر' },
      tag: { fr: 'Délicat & Romantique', ar: 'ناعم وأنثوي' },
      dropColor: '#E8B4B8',
      activeBg: 'bg-[#1C1618] text-[#FDFBF7] border-[#E8B4B8] shadow-md',
      inactiveBg: 'bg-white text-[#1C1917] border-[#C59B72]/25 hover:border-[#E8B4B8]/60',
      notes: {
        fr: 'Douceur soyeuse et subtile des pétales de rose fraîchement distillés, riche en vertus antioxydantes qui subliment le grain de peau et ravivent l\'éclat féminin.',
        ar: 'نعومة حريرية مستخلصة من أندر بتلات الورد النقي، غنية بمضادات الأكسدة لتجديد خلايا البشرة وإبراز إشراقة أنثوية ساحرة.',
      },
      benefit: {
        fr: 'Hydratation délicate & éclat satiné pour la mariée',
        ar: 'ترطيب حريري فائق للبشرة ولمعان نضر يليق بالعروس',
      },
    },
    {
      id: 'amber',
      name: { fr: 'Ambre Doré Précieux', ar: 'عنبر ذهبي ملكي' },
      tag: { fr: 'Chaleureux & Enveloppant', ar: 'دافئ ومهدئ' },
      dropColor: '#C59B72',
      activeBg: 'bg-[#181415] text-[#FDFBF7] border-[#C59B72] shadow-md',
      inactiveBg: 'bg-white text-[#1C1917] border-[#C59B72]/25 hover:border-[#C59B72]/60',
      notes: {
        fr: 'Notes chaudes, boisées et résineuses qui enveloppent le corps d\'un voile protecteur, dénouent les tensions et apaisent l\'esprit.',
        ar: 'نفحات راتنجية دافئة وخشبية تحيط الجسد بلمسة مريحة، تساعد على إذابة التشنجات العضلية واستعادة السكينة.',
      },
      benefit: {
        fr: 'Relaxation profonde & réconfort immédiat',
        ar: 'استرخاء عميق وإحساس فوري بالدفء والراحة',
      },
    },
    {
      id: 'oud',
      name: { fr: 'Musc Blanc & Soie', ar: 'مسك أبيض وحرير' },
      tag: { fr: 'Noble & Velouté', ar: 'أصيل وفاخر' },
      dropColor: '#C5B5A5',
      activeBg: 'bg-[#1A1718] text-[#FDFBF7] border-[#C59B72] shadow-md',
      inactiveBg: 'bg-white text-[#1C1917] border-[#C59B72]/25 hover:border-[#C59B72]/60',
      notes: {
        fr: 'Alliance majestueuse de musc pur velouté et de touches soyeuses, offrant un voyage olfactif envoûtant et raffiné.',
        ar: 'تآلف ملكي بين المسك الأبيض النقي واللمسات الحريرية، يمنحكِ تجربة استرخاء شرقية مهيبة وعميقة الأثر.',
      },
      benefit: {
        fr: 'Voile poudré soyeux & sensation de bien-être',
        ar: 'نعومة مخملية وصفاء ذهني يعيد لكِ التوازن',
      },
    },
    {
      id: 'orange',
      name: { fr: 'Fleur d\'Oranger Solaire', ar: 'زهر البرتقال المنعش' },
      tag: { fr: 'Frais & Lumineux', ar: 'منعش ومجدد' },
      dropColor: '#E0A868',
      activeBg: 'bg-[#1C1814] text-[#FDFBF7] border-[#E0A868] shadow-md',
      inactiveBg: 'bg-white text-[#1C1917] border-[#C59B72]/25 hover:border-[#E0A868]/60',
      notes: {
        fr: 'Senteur hespéridée solaire emblématique du terroir méditerranéen, apportant une fraîcheur joyeuse et une énergie pétillante.',
        ar: 'نفحات حمضية مبهجة مستوحاة من البحر الأبيض المتوسط، تطلق شحنة من الحيوية والنشاط والإيجابية.',
      },
      benefit: {
        fr: 'Vitalité méditerranéenne & éveil sensoriel tonifiant',
        ar: 'انتعاش متوسطي يوقظ الحواس ويبعث على البهجة',
      },
    },
  ];

  const activeScent =
    scentsExtended.find((s) => s.id === selectedScentId) || scentsExtended[0];

  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#ECDCCE] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#C59B72]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C59B72] font-semibold">
              {t(CONTENT.sensoryRitual.eyebrow)}
            </span>
            <span className="w-5 h-px bg-[#C59B72]" />
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-[#1C1917] font-normal leading-tight italic">
            {t(CONTENT.sensoryRitual.title)}
          </h2>

          <p className="text-xs sm:text-sm text-[#786C68] font-body mt-2.5 leading-relaxed max-w-xl mx-auto">
            {t(CONTENT.sensoryRitual.subtitle)}
          </p>
        </div>

        {/* Tray Container */}
        <div className="rounded-[28px] sm:rounded-[40px] border border-[#C59B72]/35 bg-gradient-to-b from-[#FFFDF9] to-[#F8F2EC] p-5 sm:p-10 shadow-lg relative overflow-hidden">
          
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#A87F45] font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B72]" />
              <span>{t(CONTENT.sensoryRitual.interactiveHint)}</span>
            </span>
          </div>

          {/* 4 Fragrance Flacons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 relative z-10 mb-8">
            {scentsExtended.map((scent) => {
              const isSelected = scent.id === selectedScentId;

              return (
                <button
                  key={scent.id}
                  type="button"
                  onClick={() => setSelectedScentId(scent.id)}
                  className={`min-h-[170px] sm:min-h-[200px] rounded-t-full rounded-b-2xl border p-4 sm:p-6 flex flex-col items-center justify-between transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B72] active:scale-98 cursor-pointer ${
                    isSelected ? scent.activeBg : scent.inactiveBg
                  }`}
                  aria-pressed={isSelected}
                >
                  {/* Flacon Cap & Neck */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3.5 h-1.5 rounded-t-xs mb-1 border transition-colors ${
                        isSelected
                          ? 'bg-[#C59B72] border-[#C59B72]'
                          : 'bg-[#C59B72]/40 border-[#C59B72]/60'
                      }`}
                    />
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#C59B72]/20' : 'bg-[#FDFBF7]'
                      }`}
                    >
                      <Droplet
                        className="w-5 h-5"
                        style={{ color: scent.dropColor }}
                      />
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <div className="text-center mt-3">
                    <h3 className="font-heading text-base sm:text-lg font-medium tracking-wide">
                      {scent.name[lang]}
                    </h3>
                    <span
                      className={`text-[10px] block mt-0.5 tracking-wide font-sans ${
                        isSelected ? 'text-[#C59B72]' : 'text-[#786C68]'
                      }`}
                    >
                      {scent.tag[lang]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Scent Profile Showcase */}
          <div className="relative z-10 pt-6 border-t border-[#C59B72]/25 bg-white/80 rounded-2xl p-5 sm:p-6 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
              
              <div className="md:col-span-5 text-center md:text-start space-y-1.5">
                <span className="inline-block text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold text-[#A87F45] bg-[#C59B72]/15 px-3 py-0.5 rounded-full border border-[#C59B72]/30">
                  {lang === 'fr'
                    ? 'PROFIL OLFACTIF CHOISI'
                    : 'الزيت العطري المختار'}
                </span>
                <h4 className="font-heading text-2xl sm:text-3xl text-[#121212] font-normal">
                  {activeScent.name[lang]}
                </h4>
                <p className="text-xs font-semibold text-[#C59B72] tracking-wide">
                  ✦ {activeScent.benefit[lang]}
                </p>
              </div>

              <div className="md:col-span-7 space-y-2 border-t md:border-t-0 md:border-s border-[#C59B72]/20 pt-3 md:pt-0 md:ps-6">
                <p className="text-xs sm:text-sm text-[#786C68] leading-relaxed font-body">
                  {activeScent.notes[lang]}
                </p>
                <div className="text-[10px] sm:text-[11px] text-[#A87F45] font-medium">
                  ✦ {lang === 'fr'
                    ? 'Synergies exclusives incluses lors de vos soins à l\'institut Souad Glam Beauty'
                    : 'تركيبات حصرية متضمنة في جلسات العناية بمعهد سعاد غلام بيوتي'}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
