import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { Home, Sparkles, Image as ImageIcon, Heart, Calendar } from 'lucide-react';

interface BottomTabBarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  currentTab,
  onNavigate,
}) => {
  const { t } = useLanguage();

  const tabs = [
    {
      id: 'home',
      label: t(CONTENT.nav.home),
      icon: Home,
    },
    {
      id: 'services',
      label: t(CONTENT.nav.services),
      icon: Sparkles,
    },
    {
      id: 'gallery',
      label: t(CONTENT.nav.gallery),
      icon: ImageIcon,
    },
    {
      id: 'about',
      label: t(CONTENT.nav.about),
      icon: Heart,
    },
    {
      id: 'contact',
      label: t(CONTENT.nav.bookCta),
      icon: Calendar,
      isBooking: true,
    },
  ];

  return (
    <nav
      aria-label="Navigation principale mobile"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#121212]/98 border-t border-[#C59B72]/25 shadow-[0_-8px_24px_rgba(0,0,0,0.45)] pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1.5 px-2 select-none backdrop-blur-md"
    >
      <div className="flex items-center justify-around gap-1 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          const Icon = tab.icon;

          if (tab.isBooking) {
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onNavigate(tab.id)}
                className={`relative flex flex-col items-center justify-center min-w-[56px] min-h-[48px] px-2 py-1 rounded-2xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B72] active:scale-95 ${
                  isActive
                    ? 'bg-[#C59B72] text-[#121212] font-bold shadow-md shadow-[#C59B72]/20'
                    : 'bg-[#C59B72]/15 text-[#C59B72] border border-[#C59B72]/40 hover:bg-[#C59B72]/25'
                }`}
                aria-current={isActive ? 'page' : undefined}
                aria-label={tab.label}
              >
                <div className="relative">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold tracking-tight mt-0.5 whitespace-nowrap max-w-[70px] truncate">
                  {tab.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onNavigate(tab.id)}
              className={`relative flex flex-col items-center justify-center flex-1 min-h-[48px] px-1 py-1 rounded-xl transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B72] active:scale-95 ${
                isActive
                  ? 'text-[#C59B72]'
                  : 'text-[#A89F99] hover:text-[#FDFBF7]'
              }`}
              aria-current={isActive ? 'page' : undefined}
              aria-label={tab.label}
            >
              {isActive && (
                <span className="absolute top-0 w-6 h-0.5 rounded-full bg-[#C59B72]" />
              )}
              <Icon className={`w-4 h-4 mb-0.5 transition-transform ${isActive ? 'scale-110' : ''}`} />
              <span className={`text-[10px] tracking-tight leading-none whitespace-nowrap max-w-[62px] truncate ${isActive ? 'font-semibold text-[#FDFBF7]' : 'font-normal'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
