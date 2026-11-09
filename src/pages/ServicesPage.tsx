import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { ServiceItem } from '../data/content.ts';
import { ServicesList } from '../components/ServicesList.tsx';
import { LotusWaveDivider } from '../components/LotusWaveDivider.tsx';

interface ServicesPageProps {
  initialCategory?: string;
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialCategory,
  onSelectService,
  onBookService,
}) => {
  const { lang } = useLanguage();

  return (
    <div className="w-full py-16 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#C59B72]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#C59B72] font-semibold">
              {lang === 'fr' ? 'CARTE DES SOINS & PRESTATIONS' : 'قائمة الخدمات والباقات'}
            </span>
            <span className="w-6 h-px bg-[#C59B72]" />
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] font-normal leading-tight [text-wrap:balance]">
            {lang === 'fr'
              ? 'Prestations & Tarifs de l\'Institut'
              : 'خدمات وأسعار معهد التجميل'}
          </h1>

          <p className="text-xs sm:text-sm text-[#786C68] leading-relaxed max-w-xl mx-auto font-body mt-4">
            {lang === 'fr'
              ? 'Retrouvez nos soins stars à l\'affiche (Hydrafacial 4 500 DA, Soin des pieds 2 500 DA, Pack ongles 5 000 DA, Épilation 5 000 DA). Les autres prestations affichent [PRIX] et sont personnalisées lors de votre consultation.'
              : 'اكتشفي خدماتنا المميزة المعلنة في المعهد، وتُحدد تفاصيل وأسعار الباقات الأخرى بدقة عند حجز موعدكِ.'}
          </p>
        </div>

        {/* Dynamic Services List */}
        <ServicesList
          initialCategory={initialCategory}
          onSelectService={onSelectService}
          onBookService={onBookService}
        />

      </div>

      <LotusWaveDivider className="py-8" />
    </div>
  );
};
