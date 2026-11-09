import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT, ServiceItem } from '../data/content.ts';
import { assets } from '../data/assets.ts';
import { ArrowRight, Sparkles, PhoneCall, Tag } from 'lucide-react';

interface ServicesListProps {
  initialCategory?: string;
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceName: string) => void;
}

export const ServicesList: React.FC<ServicesListProps> = ({
  initialCategory,
  onSelectService,
  onBookService,
}) => {
  const { lang, t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>(
    initialCategory || 'all'
  );

  const categories = [
    { id: 'all', label: lang === 'fr' ? 'Tout' : 'الكل' },
    ...CONTENT.categories.map((c) => ({
      id: c.id,
      label: t(c.name),
    })),
  ];

  const filteredServices =
    activeCategory === 'all'
      ? CONTENT.services
      : CONTENT.services.filter((s) => s.categoryId === activeCategory);

  const getServiceAsset = (id: string) => {
    switch (id) {
      case 'hydra-facial':
        return assets.perfumeTray;
      case 'coiffure-brushing':
      case 'soin-capillaire':
        return assets.balayageWaves;
      case 'soin-pedicure':
      case 'pack-ongles-mains-pieds':
      case 'pose-ongles':
        return assets.copperPedicure;
      case 'pack-mariee-bride-to-be':
      case 'maquillage-makeup-artist':
        return assets.hairBalayage;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Category Pill Switcher */}
      <div className="flex items-center overflow-x-auto scrollbar-none snap-x gap-1.5 p-1.5 rounded-full bg-[#F5EBE6] border border-[#ECDCCE] shadow-xs mb-8 sm:mb-14 max-w-4xl mx-auto -mx-2 px-2 sm:mx-auto">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`snap-center shrink-0 min-h-[44px] px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B72] ${
                isActive
                  ? 'bg-[#121212] text-[#FDFBF7] font-semibold shadow-xs'
                  : 'text-[#786C68] hover:text-[#1C1917]'
              }`}
              aria-pressed={isActive}
            >
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Services List Flow */}
      <div className="space-y-6 sm:space-y-10">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, index) => {
            const isHydra = service.id === 'hydra-facial';
            const isPedicure = service.id === 'soin-pedicure' || service.id === 'pack-ongles-mains-pieds';
            const isBridal = service.id === 'pack-mariee-bride-to-be';
            const servicePhoto = getServiceAsset(service.id);

            // 1. Featured Spotlight: Hydrafacial (4 500 DA - Promo -20%)
            if (isHydra) {
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.2) }}
                  onClick={() => onSelectService(service)}
                  className="rounded-[28px] sm:rounded-[36px] bg-[#141112] text-[#FDFBF7] border border-[#C59B72]/45 p-5 sm:p-10 shadow-xl relative overflow-hidden cursor-pointer hover:border-[#C59B72] transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    
                    {/* Visual Archway */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="relative w-full max-w-[320px] aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-t-full sm:rounded-b-2xl overflow-hidden border border-[#C59B72]/40 bg-[#1A1617]">
                        <img
                          src={servicePhoto || assets.balayageWaves}
                          alt="Soin Hydrafacial"
                          width={320}
                          height={320}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/85 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="absolute top-3 start-3 px-3 py-1 rounded-full bg-[#1A1617]/90 border border-[#C59B72]/40 text-[#C59B72] text-[10px] font-semibold tracking-wider uppercase">
                          {lang === 'fr' ? 'SOIN VEDETTE • PROMO -20%' : 'الخدمة الأكثر طلباً'}
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#C59B72] font-semibold bg-[#C59B72]/15 px-3 py-0.5 rounded-full border border-[#C59B72]/30">
                          {lang === 'fr' ? 'SOINS DU VISAGE' : 'العناية بالبشرة'}
                        </span>
                        
                        <div className="text-end">
                          <span
                            dir="ltr"
                            className="font-heading text-3xl sm:text-4xl font-light text-[#C59B72] tracking-tight block"
                          >
                            4 500 DA
                          </span>
                        </div>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl text-[#FDFBF7] font-normal leading-tight">
                        {t(service.name)}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#D8D0C5] font-body leading-relaxed">
                        {t(service.fullDesc)}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {service.highlights?.map((hl, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#D8D0C5] bg-[#201A1C]/70 p-2 rounded-xl border border-[#C59B72]/20">
                            <span className="text-[#C59B72] text-xs">✦</span>
                            <span>{t(hl)}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-[#C59B72]/20">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B72] flex items-center gap-1.5">
                          <span>{lang === 'fr' ? 'Voir le détail du soin' : 'استعراض تفاصيل الخدمة'}</span>
                          <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onBookService('Hydrafacial (4 500 DA)');
                          }}
                          className="min-h-[44px] px-5 py-2.5 bg-[#C59B72] hover:bg-[#d8ae85] text-[#121212] text-xs font-bold tracking-wider uppercase rounded-full shadow-md transition-transform active:scale-98"
                        >
                          {lang === 'fr' ? 'Réserver ce soin' : 'حجز هذه الجلسة'}
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            }

            // 2. Pedicure & Nail Care Highlights
            if (isPedicure) {
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.2) }}
                  onClick={() => onSelectService(service)}
                  className="rounded-3xl bg-[#FFFDF9] border border-[#ECDCCE] p-5 sm:p-7 shadow-xs relative overflow-hidden cursor-pointer hover:border-[#C59B72] transition-colors"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    
                    <div className="sm:col-span-5 relative">
                      <div className="aspect-[4/3] sm:aspect-auto sm:h-56 w-full rounded-2xl overflow-hidden border border-[#ECDCCE] bg-[#F8F2EC] relative">
                        <img
                          src={servicePhoto || assets.copperPedicure}
                          alt={t(service.name)}
                          width={300}
                          height={220}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-2.5 start-2.5 px-3 py-0.5 rounded-full bg-[#121212]/85 text-[#FDFBF7] text-[9px] sm:text-[10px] tracking-wider uppercase">
                          {service.id === 'soin-pedicure'
                            ? (lang === 'fr' ? '2 500 DA (à partir de)' : '2500 د.ج (ابتداءً من)')
                            : (lang === 'fr' ? '5 000 DA (à partir de)' : '5000 د.ج (ابتداءً من)')}
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-7 space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#A87F45] font-semibold bg-[#C59B72]/15 px-3 py-0.5 rounded-full border border-[#C59B72]/30">
                          {lang === 'fr' ? 'ONGLERIE & PIEDS' : 'الأظافر والقدمين'}
                        </span>
                        
                        <span className="text-[12px] font-semibold text-[#C59B72] font-mono">
                          {t(service.priceDisplay)}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl text-[#1C1917] font-normal leading-tight">
                        {t(service.name)}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#786C68] font-body leading-relaxed">
                        {t(service.shortDesc)}
                      </p>

                      <div className="pt-2 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#C59B72] min-h-[44px]">
                        <span>{lang === 'fr' ? 'Détails & Réservation →' : 'تفاصيل وحجز ←'}</span>
                        <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            }

            // 3. Bridal Pack Spotlight
            if (isBridal) {
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.2) }}
                  onClick={() => onSelectService(service)}
                  className="rounded-3xl bg-gradient-to-r from-[#1C1719] via-[#141012] to-[#1C1719] text-[#FDFBF7] border-2 border-[#C59B72]/60 p-6 sm:p-10 shadow-xl relative overflow-hidden cursor-pointer hover:border-[#C59B72] transition-colors"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                    <div className="space-y-2.5 max-w-2xl">
                      <div className="inline-flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#C59B72]" />
                        <span className="text-[11px] uppercase tracking-wider text-[#C59B72] font-semibold">
                          {lang === 'fr' ? 'ESPACE MARIÉE "BRIDE TO BE"' : 'باقة العروس الملكية'}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl text-[#FDFBF7] font-normal">
                        {t(service.name)}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#D8D0C5] font-body leading-relaxed">
                        {t(service.fullDesc)}
                      </p>

                      <div className="pt-0.5 text-[11px] text-[#E8B4B8] italic">
                        {lang === 'fr'
                          ? '✦ Coiffure, maquillage haute définition, onglerie et soins visage personnalisés'
                          : '✦ تسريحة ومكياج فخم وعناية متكاملة خاصة بيومكِ الكبير'}
                      </div>
                    </div>

                    <div className="w-full md:w-auto shrink-0 flex flex-col items-stretch sm:items-center gap-2.5 pt-2 md:pt-0">
                      <span className="px-3.5 py-1 rounded-full bg-[#121212] border border-[#C59B72]/40 text-[#C59B72] text-xs font-semibold text-center">
                        {lang === 'fr' ? 'Sur Devis & Réservation' : 'حسب الحجز والاستشارة'}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookService('Pack Mariée "Bride to be"');
                        }}
                        className="min-h-[46px] px-6 py-2.5 bg-[#C59B72] hover:bg-[#d8ae85] text-[#121212] text-xs font-bold tracking-wider uppercase rounded-full shadow-md transition-transform active:scale-98"
                      >
                        {lang === 'fr' ? 'Contacter pour Mariée' : 'استفسار باقة العروس'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // 4. Standard Service Card
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.2) }}
                onClick={() => onSelectService(service)}
                className="rounded-3xl bg-[#FFFDF9] border border-[#ECDCCE] p-5 sm:p-7 shadow-xs relative overflow-hidden cursor-pointer hover:border-[#C59B72] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#A87F45] font-semibold bg-[#C59B72]/15 px-3 py-0.5 rounded-full border border-[#C59B72]/30">
                      {service.categoryId.toUpperCase()}
                    </span>
                    
                    <span className="text-xs text-[#786C68] font-mono italic">
                      {t(service.priceDisplay)}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl text-[#1C1917] font-normal leading-tight">
                    {t(service.name)}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#786C68] font-body leading-relaxed">
                    {t(service.shortDesc)}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#C59B72] min-h-[44px]">
                    <span>{lang === 'fr' ? 'Détails & Réservation →' : 'تفاصيل وحجز ←'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Transparent Disclosure Policy */}
      <div className="mt-12 sm:mt-16 bg-[#FFFDF9] border border-[#ECDCCE] rounded-3xl p-6 sm:p-8 text-center max-w-xl mx-auto shadow-xs">
        <Tag className="w-5 h-5 text-[#C59B72] mx-auto mb-2" />
        <h4 className="font-heading text-xl text-[#1C1917] mb-1.5 font-normal">
          {lang === 'fr'
            ? 'Tarifs & Devis Personnalisés'
            : 'الاستفسار عن الأسعار والباقات'}
        </h4>
        <p className="text-xs text-[#786C68] leading-relaxed mb-4 font-body">
          {lang === 'fr'
            ? 'Pour toute question sur nos prestations ou un devis pour votre événement, contactez directement l\'institut Souad Glam Beauty au 05 58 54 14 75.'
            : 'لأي استفسار عن خدماتنا أو طلب باقة مخصصة لمناسبتكِ، يسعدنا تواصلكِ المباشر معنا على 05 58 54 14 75.'}
        </p>
        <a
          href={`tel:${CONTENT.brand.phoneRaw}`}
          className="min-h-[44px] inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#121212] hover:bg-[#201B1C] text-[#C59B72] text-xs font-semibold tracking-wider uppercase transition-colors shadow-xs"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span dir="ltr">{CONTENT.brand.phoneFormatted}</span>
        </a>
      </div>
    </div>
  );
};
