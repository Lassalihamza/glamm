import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { LotusWaveDivider } from './LotusWaveDivider.tsx';
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  ExternalLink,
  Instagram,
  MapPin,
  MessageSquare,
  Phone,
  User,
  X,
  ChevronRight,
  ChevronLeft,
  Sparkles,
} from 'lucide-react';

interface ContactConciergeProps {
  prefilledService?: string;
}

const serviceOptionIds = [
  'hydra-facial',
  'soin-pedicure',
  'pack-ongles-mains-pieds',
  'epilation-corps-complet',
  'coiffure-brushing',
  'soin-capillaire',
  'pose-ongles',
  'cils-a-cils',
  'nettoyage-de-peau',
  'maquillage-makeup-artist',
  'pack-mariee-bride-to-be',
];

const fieldClassName =
  'w-full min-h-[48px] rounded-xl border border-[#ECDCCE] bg-[#FFFDF9] px-4 py-3 text-sm text-[#1C1917] transition-colors placeholder:text-[#A89F99] focus:border-[#C59B72] focus:outline-none focus:ring-1 focus:ring-[#C59B72]';

export const ContactConcierge: React.FC<ContactConciergeProps> = ({ prefilledService = '' }) => {
  const { lang, t, isRTL } = useLanguage();
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [serviceName, setServiceName] = useState(prefilledService);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [stepError, setStepError] = useState('');

  useEffect(() => {
    if (prefilledService) {
      setServiceName(prefilledService);
    }
  }, [prefilledService]);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceName) {
      setStepError(lang === 'fr' ? 'Veuillez choisir une prestation.' : 'يرجى اختيار الخدمة المطلوبة.');
      return;
    }
    if (!preferredDate) {
      setStepError(lang === 'fr' ? 'Veuillez choisir une date.' : 'يرجى اختيار التاريخ.');
      return;
    }
    setStepError('');
    setCurrentStep(2);
  };

  const handleSubmitFinal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) {
      setStepError(lang === 'fr' ? 'Veuillez renseigner votre nom et votre numéro.' : 'يرجى إدخال الاسم ورقم الهاتف.');
      return;
    }
    setStepError('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setClientName('');
    setClientPhone('');
    setPreferredDate('');
    setNotes('');
  };

  const selectedService = CONTENT.services.find(
    (service) => t(service.name) === serviceName || service.name.fr === serviceName || service.name.ar === serviceName,
  );

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="w-full overflow-hidden bg-[#FDFBF7] pt-12 sm:pt-20">
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="mx-auto mb-8 sm:mb-12 max-w-2xl text-center">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#C59B72]">
            {lang === 'fr' ? 'Réservation & Renseignements' : 'حجز واستفسار'}
          </span>
          <h1 className="mt-1.5 font-heading text-3xl sm:text-5xl font-light text-[#1C1917] leading-tight">
            {t(CONTENT.contactPage.title)}
          </h1>
          <p className="mx-auto mt-2.5 max-w-xl text-xs sm:text-sm leading-relaxed text-[#786C68] font-body">
            {t(CONTENT.contactPage.subtitle)}
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          
          {/* Reservation Card with Stepped Flow */}
          <section className="order-1 lg:order-2 flex flex-col justify-between rounded-[28px] sm:rounded-[32px] border border-[#ECDCCE] bg-white p-5 sm:p-8 lg:p-10 shadow-sm lg:col-span-7">
            <div>
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ECDCCE] bg-[#F8F2EC] px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#A87F45]">
                <AlertCircle className="h-3.5 w-3.5 shrink-0 text-[#C59B72]" />
                <span>{t(CONTENT.brand.demoBadge)}</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl italic text-[#1C1917]">
                {t(CONTENT.contactPage.form.title)}
              </h2>
              <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#786C68] font-body">
                {t(CONTENT.contactPage.formIntro)}
              </p>

              {/* Step Flow Progress Indicator */}
              <div className="mt-5 mb-6 p-3 rounded-2xl bg-[#F8F2EC] border border-[#ECDCCE]">
                <div className="flex items-center justify-between text-xs font-semibold text-[#1C1917] mb-2">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C59B72]" />
                    <span>
                      {currentStep === 1
                        ? (lang === 'fr' ? 'Étape 1 : Prestation & Date' : 'المرحلة 1: الخدمة والتاريخ')
                        : (lang === 'fr' ? 'Étape 2 : Vos Coordonnées' : 'المرحلة 2: معلومات الاتصال')}
                    </span>
                  </span>
                  <span className="text-[11px] text-[#A87F45] font-mono">
                    {currentStep} / 2
                  </span>
                </div>
                {/* Visual Step Bar */}
                <div className="w-full h-1.5 bg-[#ECDCCE] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C59B72] transition-all duration-300 ease-out"
                    style={{ width: currentStep === 1 ? '50%' : '100%' }}
                  />
                </div>
              </div>

              {stepError && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                  {stepError}
                </div>
              )}

              {/* STEP 1: SERVICE & DATE */}
              {currentStep === 1 && (
                <form onSubmit={handleNextStep} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#49443D] mb-1.5">
                      {t(CONTENT.contactPage.form.serviceLabel)} *
                    </label>
                    <select
                      required
                      value={serviceName}
                      onChange={(e) => setServiceName(e.target.value)}
                      className={fieldClassName}
                    >
                      <option value="">
                        {lang === 'fr' ? '-- Choisir une prestation --' : '-- اختاري الخدمة المطلوبة --'}
                      </option>
                      {CONTENT.services
                        .filter((service) => serviceOptionIds.includes(service.id))
                        .map((service) => (
                          <option key={service.id} value={t(service.name)}>
                            {t(service.name)}
                            {!service.isPriceMissing ? ` (${t(service.priceDisplay)})` : ''}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#49443D] mb-1.5">
                      {t(CONTENT.contactPage.form.dateLabel)} *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute start-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#C59B72] pointer-events-none" />
                      <input
                        required
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className={`${fieldClassName} ps-11`}
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full min-h-[48px] rounded-full bg-[#121212] hover:bg-[#221D1E] text-[#FDFBF7] py-3.5 px-6 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-transform active:scale-98"
                    >
                      <span>{lang === 'fr' ? 'Continuer vers vos coordonnées' : 'المتابعة إلى بيانات الاتصال'}</span>
                      <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 2: CLIENT DETAILS & NOTES */}
              {currentStep === 2 && (
                <form onSubmit={handleSubmitFinal} className="space-y-4">
                  {/* Selected service recap pill */}
                  <div className="p-3 rounded-xl bg-[#F8F2EC] border border-[#ECDCCE] flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-[#A87F45] block font-semibold uppercase">
                        {lang === 'fr' ? 'Prestation choisie :' : 'الخدمة المختارة:'}
                      </span>
                      <span className="font-medium text-[#1C1917]">{serviceName}</span>
                      <span className="text-[11px] text-[#786C68] block mt-0.5 font-mono">📅 {preferredDate}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-[11px] text-[#C59B72] font-semibold underline underline-offset-2 min-h-[36px] px-2"
                    >
                      {lang === 'fr' ? 'Modifier' : 'تعديل'}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#49443D] mb-1.5">
                        {t(CONTENT.contactPage.form.nameLabel)} *
                      </label>
                      <div className="relative">
                        <User className="absolute start-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#C59B72] pointer-events-none" />
                        <input
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder={t(CONTENT.contactPage.form.namePlaceholder)}
                          className={`${fieldClassName} ps-11`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#49443D] mb-1.5">
                        {t(CONTENT.contactPage.form.phoneLabel)} *
                      </label>
                      <div className="relative">
                        <Phone className="absolute start-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#C59B72] pointer-events-none" />
                        <input
                          required
                          type="tel"
                          dir="ltr"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder={t(CONTENT.contactPage.form.phonePlaceholder)}
                          className={`${fieldClassName} ps-11 text-start`}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#49443D] mb-1.5">
                      {t(CONTENT.contactPage.form.notesLabel)}
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute start-3.5 top-3.5 h-4 w-4 text-[#C59B72] pointer-events-none" />
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder={t(CONTENT.contactPage.notesPlaceholder)}
                        className={`${fieldClassName} resize-y ps-11`}
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="min-h-[48px] px-5 py-3 rounded-full border border-[#ECDCCE] text-xs font-medium text-[#786C68] hover:text-[#1C1917] flex items-center justify-center gap-1.5 order-2 sm:order-1"
                    >
                      <ChevronLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                      <span>{lang === 'fr' ? 'Étape précédente' : 'الرجوع'}</span>
                    </button>

                    <button
                      type="submit"
                      className="flex-1 min-h-[48px] rounded-full bg-[#C59B72] hover:bg-[#d8ae85] text-[#121212] py-3.5 px-6 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-98 order-1 sm:order-2"
                    >
                      <span>{t(CONTENT.contactPage.form.submitBtn)}</span>
                      <CheckCircle className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* Contact Details Card */}
          <aside className="order-2 lg:order-1 relative flex flex-col overflow-hidden rounded-[28px] sm:rounded-[32px] border border-[#C59B72]/35 bg-gradient-to-br from-[#161214] to-[#100D0E] p-6 sm:p-8 text-[#FDFBF7] shadow-xl lg:col-span-5">
            <div>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#C59B72]">
                {lang === 'fr' ? 'Votre Institut de Beauté' : 'معهد التجميل الخاص بكِ'}
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl text-[#FDFBF7]">
                {lang === 'fr' ? 'Souad Glam Beauty' : 'سعاد غلام بيوتي'}
              </h2>
            </div>

            <div className="mt-6 flex flex-col gap-5">
              {/* Direct Phone & WhatsApp */}
              <div className="flex gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C59B72]/45 bg-[#C59B72]/10 text-[#C59B72]">
                  <Phone className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-lg">{t(CONTENT.contactPage.phoneCardTitle)}</h3>
                  <a
                    href={`tel:${CONTENT.brand.phoneRaw}`}
                    className="mt-0.5 inline-block font-mono text-xl tracking-wider text-[#C59B72] hover:text-[#d8ae85] transition-colors"
                  >
                    <span dir="ltr">05 58 54 14 75</span>
                  </a>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <a
                      href={`tel:${CONTENT.brand.phoneRaw}`}
                      className="min-h-[44px] inline-flex items-center gap-1.5 rounded-full border border-[#C59B72]/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#FDFBF7] hover:bg-[#C59B72]/15 transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#C59B72]" />
                      <span>{t(CONTENT.contactPage.callAction)}</span>
                    </a>
                    <a
                      href={`https://wa.me/213558541475`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#25D366] hover:bg-[#25D366]/30 transition-colors"
                    >
                      <span>WhatsApp Direct ↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Address & Google Maps */}
              <div className="flex gap-3.5 border-t border-white/10 pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C59B72]/45 bg-[#C59B72]/10 text-[#C59B72]">
                  <MapPin className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-lg">{t(CONTENT.contactPage.addressCardTitle)}</h3>
                  <p className="mt-0.5 text-xs sm:text-sm leading-relaxed text-[#D8D0C5]">
                    {t(CONTENT.brand.address)}
                  </p>
                  <div className="mt-2">
                    <a
                      href={CONTENT.brand.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center gap-1.5 rounded-full border border-[#C59B72]/50 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#FDFBF7] hover:bg-[#C59B72]/15 transition-colors"
                    >
                      <span>{t(CONTENT.contactPage.mapAction)}</span>
                      <ExternalLink className="h-3.5 w-3.5 text-[#C59B72]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3.5 border-t border-white/10 pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C59B72]/45 bg-[#C59B72]/10 text-[#C59B72]">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-heading text-lg">{t(CONTENT.contactPage.hoursCardTitle)}</h3>
                  <p className="mt-0.5 text-xs font-semibold text-[#E8B4B8]">
                    {t(CONTENT.contactPage.hoursNotice)}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#D8D0C5] font-body">
                    {t(CONTENT.contactPage.hoursDescription)}
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex gap-3.5 border-t border-white/10 pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C59B72]/45 bg-[#C59B72]/10 text-[#C59B72]">
                  <Instagram className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-heading text-lg">{lang === 'fr' ? 'Réseaux Sociaux' : 'إنستغرام'}</h3>
                  <a
                    href={CONTENT.brand.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="mt-0.5 inline-block text-xs sm:text-sm text-[#D8D0C5] hover:text-[#C59B72] transition-colors"
                  >
                    {CONTENT.brand.instagramHandle} ↗
                  </a>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </section>

      {/* Confirmation Modal */}
      {isSubmitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#070607]/85 p-4 backdrop-blur-xs"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) handleReset();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-confirmation-title"
            className="relative w-full max-w-md rounded-3xl border border-[#C59B72]/50 bg-[#161214] p-6 text-[#FDFBF7] shadow-2xl"
          >
            <button
              type="button"
              onClick={handleReset}
              aria-label={lang === 'fr' ? 'Fermer' : 'إغلاق'}
              className="absolute end-4 top-4 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full p-2 text-[#D8D0C5] hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#C59B72]/50 bg-[#C59B72]/15 text-[#C59B72]">
                <CheckCircle className="h-6 w-6" />
              </span>
              <h2 id="booking-confirmation-title" className="mt-3 font-heading text-2xl text-[#FDFBF7]">
                {t(CONTENT.contactPage.form.confirmationTitle)}
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#D8D0C5] font-body">
                {t(CONTENT.contactPage.form.confirmationBody)}
              </p>
            </div>
            
            <dl className="mt-5 space-y-2.5 rounded-2xl border border-white/10 bg-[#121011] p-4 text-xs">
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-[#A89F99]">{lang === 'fr' ? 'Nom :' : 'الاسم:'}</dt>
                <dd className="font-semibold text-white">{clientName}</dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-[#A89F99]">{lang === 'fr' ? 'Téléphone :' : 'الهاتف:'}</dt>
                <dd dir="ltr" className="font-semibold text-white">{clientPhone}</dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-[#A89F99]">{lang === 'fr' ? 'Prestation :' : 'الخدمة:'}</dt>
                <dd className="font-semibold text-[#C59B72]">{selectedService ? t(selectedService.name) : serviceName}</dd>
              </div>
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-[#A89F99]">{lang === 'fr' ? 'Date :' : 'التاريخ:'}</dt>
                <dd className="font-semibold text-white">{preferredDate}</dd>
              </div>
              {notes.trim() && (
                <div className="flex flex-wrap gap-x-2">
                  <dt className="text-[#A89F99]">{lang === 'fr' ? 'Détails :' : 'ملاحظات:'}</dt>
                  <dd className="font-medium text-white/90">{notes}</dd>
                </div>
              )}
            </dl>

            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <a
                href={`tel:${CONTENT.brand.phoneRaw}`}
                className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-full bg-[#C59B72] px-4 py-3 text-xs font-bold uppercase tracking-wide text-[#121212] hover:bg-[#d8ae85] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{lang === 'fr' ? 'Appeler le salon' : 'اتصلي بالصالون'}</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="min-h-[48px] rounded-full border border-white/20 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#FDFBF7] hover:bg-white/10 transition-colors"
              >
                {t(CONTENT.contactPage.form.closeBtn)}
              </button>
            </div>
          </section>
        </div>
      )}

      <LotusWaveDivider className="py-8" />
    </div>
  );
};