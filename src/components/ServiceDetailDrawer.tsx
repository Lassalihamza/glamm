import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT, ServiceItem } from '../data/content.ts';
import { X, Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServiceDetailDrawerProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForBooking: (serviceName: string) => void;
}

export const ServiceDetailDrawer: React.FC<ServiceDetailDrawerProps> = ({
  service,
  onClose,
  onSelectForBooking,
}) => {
  const { lang, t, isRTL } = useLanguage();

  // Close on Escape key
  useEffect(() => {
    if (!service) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  const category = CONTENT.categories.find((c) => c.id === service.categoryId);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 overflow-hidden flex items-end sm:items-stretch justify-center sm:justify-end"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Bottom Sheet on Mobile / Slide-Over on Desktop */}
        <motion.div
          initial={{ y: '100%', opacity: 0.9 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0.9 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 w-full sm:max-w-md max-h-[88vh] sm:max-h-full bg-[#FDFBF7] text-[#1C1917] shadow-2xl flex flex-col justify-between rounded-t-[28px] sm:rounded-t-none sm:rounded-s-3xl rtl:sm:rounded-s-none rtl:sm:rounded-e-3xl overflow-hidden border-t sm:border-t-0 sm:border-s border-[#C59B72]/35"
        >
          {/* Mobile Drag Indicator Handle */}
          <div className="sm:hidden pt-3 pb-1 flex justify-center bg-[#141112]">
            <div className="w-12 h-1 rounded-full bg-[#E8B4B8]/30" />
          </div>

          {/* Top Bar Header */}
          <div className="px-5 py-4 sm:px-6 sm:py-6 bg-[#141112] text-[#FDFBF7] flex items-center justify-between border-b border-[#C59B72]/20">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C59B72] font-semibold bg-[#C59B72]/20 px-3 py-0.5 rounded-full border border-[#C59B72]/30">
                {category ? t(category.badge) : 'SOUAD GLAM BEAUTY'}
              </span>
              <h3
                id="drawer-title"
                className="font-heading text-xl sm:text-2xl text-[#FDFBF7] font-normal tracking-wide mt-1.5"
              >
                {t(service.name)}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-full text-[#E8B4B8] hover:text-[#FDFBF7] bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B72]"
              aria-label={t(CONTENT.drawer.close)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body (Scrollable) */}
          <div className="p-5 sm:p-6 space-y-5 flex-1 overflow-y-auto overscroll-contain">
            {/* Price & Status Row */}
            <div className="flex items-center justify-between p-4 bg-[#F8F2EC] border border-[#ECDCCE] rounded-2xl">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#786C68] block">
                  {lang === 'fr' ? 'Tarification' : 'سعر الخدمة'}
                </span>
                <span
                  dir="ltr"
                  className="text-2xl font-heading font-semibold text-[#121212] inline-block"
                >
                  {t(service.priceDisplay)}
                </span>
              </div>

              {service.isPromo && service.promoBadge && (
                <span className="bg-[#121212] text-[#C59B72] border border-[#C59B72] px-3 py-1 text-xs font-semibold tracking-wider rounded-full">
                  {t(service.promoBadge)}
                </span>
              )}

              {service.isPriceMissing && (
                <span className="text-xs text-[#786C68] italic max-w-[140px] text-end leading-snug">
                  {lang === 'fr'
                    ? 'Tarif précisé lors de la prise de contact'
                    : 'يُحدد السعر عند الاستفسار'}
                </span>
              )}
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <h4 className="text-xs uppercase tracking-widest text-[#121212] font-semibold">
                {t(CONTENT.drawer.detailsTitle)}
              </h4>
              <p className="text-xs sm:text-sm text-[#786C68] leading-relaxed font-body">
                {t(service.fullDesc)}
              </p>
            </div>

            {/* Highlights */}
            {service.highlights && service.highlights.length > 0 && (
              <div className="space-y-2.5 pt-1">
                <h4 className="text-xs uppercase tracking-widest text-[#121212] font-semibold">
                  {t(CONTENT.drawer.highlightsTitle)}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#786C68]">
                  {service.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#C59B72]/20 text-[#C59B72] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{t(hl)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Comfort note */}
            <div className="p-4 bg-white border border-[#ECDCCE] rounded-2xl space-y-1.5">
              <div className="flex items-center gap-2 text-[#121212]">
                <Sparkles className="w-4 h-4 text-[#C59B72]" />
                <h5 className="text-xs uppercase tracking-wider font-semibold">
                  {t(CONTENT.drawer.sensoryTitle)}
                </h5>
              </div>
              <p className="text-xs text-[#786C68] leading-relaxed">
                {lang === 'fr'
                  ? 'Un espace intime et climatisé, ambiance douce et produits de haute qualité sélectionnés pour votre bien-être.'
                  : 'فضاء هادئ ومكيف، أجواء مريحة ومستحضرات تجميل راقية تم اختيارها بعناية لراحتكِ.'}
              </p>
            </div>

            {/* Location Notice */}
            <div className="text-[11px] text-[#A87F45] flex items-center gap-2 pt-1 pb-2">
              <ShieldCheck className="w-4 h-4 text-[#C59B72] shrink-0" />
              <span>
                {lang === 'fr'
                  ? 'Institut réservé aux femmes à Valmascort [VILLE: à confirmer]'
                  : 'معهد تجميل مخصص للنساء في فالمسكور [المدينة: للتأكيد]'}
              </span>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="p-4 sm:p-5 bg-[#F8F2EC] border-t border-[#ECDCCE] flex flex-col gap-2 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <button
              type="button"
              onClick={() => {
                onSelectForBooking(t(service.name));
                onClose();
              }}
              className="w-full min-h-[48px] px-6 py-3 bg-[#C59B72] hover:bg-[#d8ae85] text-[#121212] text-xs font-bold tracking-widest uppercase rounded-full transition-transform active:scale-98 shadow-md flex items-center justify-center gap-2"
            >
              <span>{t(CONTENT.drawer.selectForBooking)}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
            <p className="text-[10px] text-center text-[#786C68]">
              {lang === 'fr'
                ? 'Transmet cette prestation directement vers le formulaire de contact'
                : 'يملأ هذه الخدمة مباشرة في استمارة الموعد'}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
