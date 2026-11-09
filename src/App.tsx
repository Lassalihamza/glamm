import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { PreviewRibbon } from './components/PreviewRibbon.tsx';
import { Navbar } from './components/Navbar.tsx';
import { BottomTabBar } from './components/BottomTabBar.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingCallButton } from './components/FloatingCallButton.tsx';
import { IntroSplash } from './components/IntroSplash.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { GalleryPage } from './pages/GalleryPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactConcierge } from './components/ContactConcierge.tsx';
import { ServiceDetailDrawer } from './components/ServiceDetailDrawer.tsx';
import { ServiceItem } from './data/content.ts';

function MainApp() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [activeDrawerService, setActiveDrawerService] = useState<ServiceItem | null>(null);

  // Play the 2.0s branded intro splash screen on initial load
  const [showIntro, setShowIntro] = useState<boolean>(true);

  // URL Hash Synchronization
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'services', 'gallery', 'about', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (tab: string, categoryOrPrefill?: string) => {
    setCurrentTab(tab);
    window.location.hash = `#${tab}`;
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (tab === 'services' && categoryOrPrefill) {
      setSelectedCategory(categoryOrPrefill);
    } else if (tab === 'contact' && categoryOrPrefill) {
      setPrefilledService(categoryOrPrefill);
    }
  };

  const handleBookServiceFromDrawer = (serviceName: string) => {
    navigateTo('contact', serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1C1917] font-body relative overflow-x-hidden selection:bg-[#E8B4B8]/30 selection:text-[#121212]">
      {/* 2-SECOND BRANDED INTRO SPLASH */}
      <AnimatePresence>
        {showIntro && (
          <IntroSplash onDismiss={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Floating Demo Notice Pill */}
      <PreviewRibbon />

      {/* Slim Sticky Header */}
      <Navbar
        currentTab={currentTab}
        onNavigate={(tab) => navigateTo(tab)}
        onReplayIntro={() => setShowIntro(true)}
      />

      {/* Main Page Content with smooth lightweight transition and padding for mobile bottom bar */}
      <main className="flex-1 w-full pb-20 md:pb-0" id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full"
          >
            {currentTab === 'home' && (
              <HomePage
                onNavigate={(tab, prefill) => navigateTo(tab, prefill)}
                onOpenServiceDetail={(service) => setActiveDrawerService(service)}
              />
            )}

            {currentTab === 'services' && (
              <ServicesPage
                initialCategory={selectedCategory}
                onSelectService={(service) => setActiveDrawerService(service)}
                onBookService={(name) => navigateTo('contact', name)}
              />
            )}

            {currentTab === 'gallery' && <GalleryPage />}

            {currentTab === 'about' && <AboutPage />}

            {currentTab === 'contact' && (
              <ContactConcierge prefilledService={prefilledService} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Luxury Organic Footer */}
      <Footer onNavigate={(tab) => navigateTo(tab)} />

      {/* Persistent Mobile Bottom Navigation Bar (Phone-first with highlighted Booking action) */}
      <BottomTabBar
        currentTab={currentTab}
        onNavigate={(tab) => navigateTo(tab)}
      />

      {/* Floating Call Button */}
      <FloatingCallButton />

      {/* Global Service Detail Drawer (Bottom Sheet on mobile, slide-over on desktop) */}
      <ServiceDetailDrawer
        service={activeDrawerService}
        onClose={() => setActiveDrawerService(null)}
        onSelectForBooking={handleBookServiceFromDrawer}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
