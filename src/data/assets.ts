/**
 * Central asset registry for SOUAD GLAM BEAUTY — Institut de Beauté
 */

export interface GalleryAsset {
  id: string;
  category: 'coiffure' | 'soins' | 'onglerie' | 'maquillage' | 'ambiance';
  src: string;
  vignetteType: 'hair-waves' | 'hydrafacial' | 'nail-art' | 'perfume-tray' | 'bridal-glam' | 'lashes';
}

export const assets = {
  // Brand Logos
  logo: '/assets/aistudio/SGB_Luxury_Beauty_Institute_Logo_25960371.png',
  logoTransparent: '/assets/aistudio/SGB_Luxury_Beauty_Institute_Logo_25960371.png',
  logoMonogram: '/assets/aistudio/SGB_Luxury_Beauty_Monogram_Logo_f085c3c0.png',

  // Hero & Visual Highlights
  heroMedia: '/assets/hero-bg.mp4',
  heroVideo: '/assets/hero-bg.mp4',
  heroBackdrop: '/assets/balayage-waves.jpg',
  heroArch: '/assets/balayage-waves.jpg',

  // Service Photography
  balayageWaves: '/assets/balayage-waves.jpg',
  hairBalayage: '/assets/hair-balayage.jpg',
  perfumeTray: '/assets/perfume-tray.jpg',
  copperPedicure: '/assets/copper-pedicure.jpg',
  hydrafacialSkin: '/assets/hammam-marble.jpg',
};

export const ASSETS = {
  ...assets,
  gallery: [
    {
      id: 'gallery-balayage-sunlight',
      category: 'coiffure',
      src: '/assets/balayage-waves.jpg',
      vignetteType: 'hair-waves',
    },
    {
      id: 'gallery-hair-styling',
      category: 'coiffure',
      src: '/assets/hair-balayage.jpg',
      vignetteType: 'hair-waves',
    },
    {
      id: 'gallery-pedicure-care',
      category: 'onglerie',
      src: '/assets/copper-pedicure.jpg',
      vignetteType: 'nail-art',
    },
    {
      id: 'gallery-fragrance-tray',
      category: 'ambiance',
      src: '/assets/perfume-tray.jpg',
      vignetteType: 'perfume-tray',
    },
    {
      id: 'gallery-skin-hydrafacial',
      category: 'soins',
      src: '/assets/hammam-marble.jpg',
      vignetteType: 'hydrafacial',
    },
    {
      id: 'gallery-bridal-atmosphere',
      category: 'maquillage',
      src: '/assets/balayage-waves.jpg',
      vignetteType: 'bridal-glam',
    },
  ] as GalleryAsset[],
};
