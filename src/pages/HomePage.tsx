import React from 'react';
import { ServiceItem } from '../data/content.ts';
import { Hero } from '../components/Hero.tsx';
import { Pillars } from '../components/Pillars.tsx';
import { FeaturedPackage } from '../components/FeaturedPackage.tsx';
import { ScentRitual } from '../components/ScentRitual.tsx';
import { PromoBanner } from '../components/PromoBanner.tsx';
import { LotusWaveDivider } from '../components/LotusWaveDivider.tsx';

interface HomePageProps {
  onNavigate: (tab: string, prefillService?: string) => void;
  onOpenServiceDetail: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenServiceDetail,
}) => {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. HERO SECTION WITH BACKGROUND VIDEO SUPPORT & HAMMAM ARCHWAY */}
      <Hero
        onNavigate={onNavigate}
        onOpenServiceDetail={onOpenServiceDetail}
      />

      {/* 2. THE 3 SANCTUARY PILLARS (EDITORIAL PHOTOGRAPHIC ARCHES) */}
      <Pillars onNavigate={onNavigate} />

      {/* 3. SCULPTED BESPOKE SPA INVITATION CARD (ÉVASION BIEN-ÊTRE — 3000 DA) */}
      <FeaturedPackage onNavigate={onNavigate} />

      {/* 4. TACTILE HAMMERED BRASS TRAY PERFUME RITUAL */}
      <ScentRitual />

      {/* 5. EDITORIAL BALAYAGE -50% SPOTLIGHT */}
      <PromoBanner onNavigate={onNavigate} />

      {/* Lotus Wave Transition Divider */}
      <LotusWaveDivider className="py-8" />
    </div>
  );
};
