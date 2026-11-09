export type Language = 'fr' | 'ar';

export interface LocalizedString {
  fr: string;
  ar: string;
}

export type ServiceCategoryId = 'coiffure' | 'esthetique' | 'onglerie' | 'epilation' | 'mariee';

export interface ServiceItem {
  id: string;
  categoryId: ServiceCategoryId;
  name: LocalizedString;
  shortDesc: LocalizedString;
  fullDesc: LocalizedString;
  priceDisplay: LocalizedString;
  isPriceMissing: boolean;
  isPromo?: boolean;
  promoBadge?: LocalizedString;
  highlights?: LocalizedString[];
  sensoryNotes?: LocalizedString[];
}

export interface ServiceCategory {
  id: ServiceCategoryId;
  name: LocalizedString;
  badge: LocalizedString;
  themeColor: string;
}

export const CONTENT = {
  brand: {
    name: 'SOUAD GLAM BEAUTY',
    shortName: 'Souad Glam Beauty',
    subtitle: 'I N S T I T U T • D E • B E A U T É',
    instagramHandle: '@souad_glam_beauty_',
    instagramUrl: 'https://www.instagram.com/souad_glam_beauty_/',
    mapsUrl: 'https://maps.app.goo.gl/dVSqS2M3gHk9Smd8',
    phoneRaw: '0558541475',
    phoneFormatted: '05 58 54 14 75',
    address: {
      fr: '[ADRESSE], Valmascort [VILLE: à confirmer]',
      ar: '[العنوان]، فالمسكور [المدينة: للتأكيد]',
    },
    openingHoursPlaceholder: {
      fr: '[HORAIRES]',
      ar: '[ساعات العمل: ستُحدد]',
    },
    tagline: {
      fr: 'Institut de Beauté à Valmascort — Coiffure, Soins du Visage, Onglerie, Maquillage & Pack Mariée.',
      ar: 'معهد تجميل في فالمسكور — تصفيف الشعر، العناية بالبشرة، الأظافر، المكياج وباقات العروس.',
    },
    previewRibbon: {
      fr: 'Aperçu de démonstration — Souad Glam Beauty',
      ar: 'معاينة تجريبية — سعاد غلام بيوتي',
    },
    footerDisclaimer: {
      fr: 'Maquette officielle pour SOUAD GLAM BEAUTY — Institut de Beauté, Valmascort',
      ar: 'تصميم رسمي لمعهد التجميل SOUAD GLAM BEAUTY — فالمسكور',
    },
    demoBadge: {
      fr: 'Formulaire de réservation — Contact direct au 05 58 54 14 75',
      ar: 'نموذج طلب الموعد — تواصل مباشر على 05 58 54 14 75',
    },
    missingDataBadge: {
      fr: '[à confirmer]',
      ar: '[قيد التأكيد]',
    },
  },

  nav: {
    home: { fr: 'Accueil', ar: 'الرئيسية' },
    services: { fr: 'Carte des Soins', ar: 'قائمة الخدمات' },
    gallery: { fr: 'Portfolio', ar: 'المعرض' },
    about: { fr: 'L\'Institut', ar: 'عن المعهد' },
    contact: { fr: 'Contact & RDV', ar: 'حجز وتواصل' },
    bookCta: { fr: 'Prendre RDV', ar: 'احجزي موعدك' },
    callUs: { fr: 'Appeler l\'institut', ar: 'اتصلي بالمعهد' },
    replayIntro: { fr: '✨ Intro', ar: '✨ البداية' },
    switchLang: { fr: 'العربية', ar: 'Français' },
  },

  splash: {
    taglineTop: {
      fr: 'Institut de Beauté & Espace Mariée',
      ar: 'معهد التجميل وفضاء العروس المتألقة',
    },
    cityLabel: {
      fr: 'Valmascort [VILLE: à confirmer]',
      ar: 'فالمسكور [المدينة: للتأكيد]',
    },
    bio: {
      fr: 'Coiffure, soin capillaire, hydrafacial, onglerie et maquillage professionnel dans un cadre raffiné et chaleureux.',
      ar: 'تصفيف الشعر، العناية العميقة، هيدرا فيشل، تركيب الأظافر ومكياج احترافي في أجواء راقية.',
    },
    enterCta: {
      fr: 'Entrer dans l\'univers Souad Glam Beauty',
      ar: 'ادخلي عالم سعاد غلام بيوتي',
    },
    skipBtn: {
      fr: 'Passer l\'intro',
      ar: 'تخطي',
    },
    langSelectLabel: {
      fr: 'Choisir la langue',
      ar: 'اختيار اللغة',
    },
  },

  hero: {
    locationBadge: {
      fr: 'Valmascort [VILLE: à confirmer]',
      ar: 'فالمسكور [المدينة: للتأكيد]',
    },
    womenOnly: {
      fr: 'Institut de Beauté dédié aux femmes & futures mariées',
      ar: 'معهد تجميل مخصص للسيدات والعرائس',
    },
    title: {
      fr: 'L\'Élégance & le Savoir-Faire Beauté à Valmascort',
      ar: 'الأناقة والإتقان في عالم الجمال بفالمسكور',
    },
    description: {
      fr: 'Sublimez votre beauté naturelle avec nos soins experts : Hydrafacial régénérant, coiffure et balayages couture, pose d\'ongles minutieuse, maquillage make-up artist et notre pack d\'exception "Bride to be".',
      ar: 'تألقي بأبهى إطلالة مع خدماتنا المتخصصة: جلسات هيدرا فيشل لنضارة البشرة، تصفيف وبالياج احترافي، تركيب أظافر فائق الدقة، مكياج سهرات وباقة العروس الملكية.',
    },
    ctaPrimary: {
      fr: 'Prendre Rendez-vous',
      ar: 'طلب موعد بالصالون',
    },
    ctaSecondary: {
      fr: 'Hydrafacial Éclat (4 500 DA)',
      ar: 'جلسة هيدرا فيشل (4500 د.ج)',
    },
    floatingBadge: {
      fr: 'Hydrafacial Promo • 4 500 DA',
      ar: 'عرض هيدرا فيشل • 4500 د.ج',
    },
  },

  pillarsSection: {
    eyebrow: {
      fr: 'L\'Excellence Souad Glam Beauty',
      ar: 'ركائز التميز',
    },
    title: {
      fr: 'Trois Univers Dédiés à Votre Rayonnement',
      ar: 'ثلاثة عوالم متكاملة لجمالكِ وتألقكِ',
    },
    subtitle: {
      fr: 'L\'alliance parfaite entre haute expertise esthétique, créativité capillaire et mise en beauté de cérémonie.',
      ar: 'انسجام تام بين الدقة العالية في العناية بالبشرة، إبداع تصفيف الشعر، وتألق مكياج المناسبات.',
    },
  },

  pillars: [
    {
      id: 'coiffure',
      title: 'COIFFURE',
      color: '#121212',
      textColor: '#FDFBF7',
      badge: { fr: 'Haute Coiffure & Soins', ar: 'تصفيف وعناية' },
      description: {
        fr: 'Balayages lumineux fondus, coupes sur mesure, brushings glamour et soins capillaires réparateurs profonds.',
        ar: 'أحدث صيحات البالياج بتدرجات طبيعية، قصات مميزة، سيشوار راقٍ وعلاجات مغذية للشعر.',
      },
    },
    {
      id: 'esthetique',
      title: 'ESTHÉTIQUE',
      color: '#E8B4B8',
      textColor: '#1C1917',
      badge: { fr: 'Hydrafacial & Peau Nette', ar: 'عناية ونضارة' },
      description: {
        fr: 'Nettoyage de peau médicalisé, Hydrafacial haute performance, cils à cils raffinés et épilations soignées.',
        ar: 'تنظيف عميق للمسام، جلسات هيدرا فيشل المتطورة، تركيب الرموش شعرة بشعرة وإزالة الشعر باحترافية.',
      },
    },
    {
      id: 'mariee',
      title: 'GLAMOUR',
      color: '#C59B72',
      textColor: '#1C1917',
      badge: { fr: 'Mariée & Make-Up Artist', ar: 'مكياج وعروس' },
      description: {
        fr: 'Maquillage signature événementiel, pose d\'ongles artistique et prise en charge personnalisée pour le grand jour.',
        ar: 'مكياج احترافي للعرائس والمناسبات، فن تزيين وتركيب الأظافر، ومرافقة متكاملة ليومكِ المميز.',
      },
    },
  ],

  featuredPackage: {
    badge: {
      fr: 'Soin Star à l\'Affiche',
      ar: 'الخدمة الأكثر طلباً في المعهد',
    },
    title: {
      fr: 'Soin Signature Hydrafacial',
      ar: 'جلسة هيدرا فيشل الملكية (Hydrafacial)',
    },
    price: '4 500 DA',
    priceNote: {
      fr: 'Tarif promotionnel affiché (-20% de remise)',
      ar: 'سعر ترويجي معلن بتخفيض 20%',
    },
    subtitle: {
      fr: 'Le rituel de pointe pour nettoyer, exfolier, extraire et infuser des actifs repulpants pour un teint éclatant.',
      ar: 'البروتوكول المتكامل لتنقية البشرة وإزالة الشوائب بعمق مع ترطيب مكثف لنضارة فورية.',
    },
    inclusions: [
      {
        step: '01',
        title: {
          fr: 'Diagnostic Cutané & Nettoyage Doux',
          ar: 'تشخيص البشرة وتنظيف أولي لطيف',
        },
        desc: {
          fr: 'Analyse personnalisée des besoins de votre épiderme suivie d\'un démaquillage haute tolérance.',
          ar: 'تحليل دقيق لنوع البشرة واحتياجاتها مع تنظيف لطيف لتحضير المسام.',
        },
      },
      {
        step: '02',
        title: {
          fr: 'Hydrafacial & Extraction des Impuretés',
          ar: 'هيدرا فيشل وشفط الشوائب اللطيف',
        },
        desc: {
          fr: 'Aspiration indolore des comédons, désincrustation des pores et élimination des cellules mortes.',
          ar: 'تقنية الشفط المائي المبتكرة لتنقية المسام والتخلص من الرؤوس السوداء بدون تهيج.',
        },
      },
      {
        step: '03',
        title: {
          fr: 'Infusion de Sérums Antioxydants',
          ar: 'ضخ السيرومات الغنية ومضادات الأكسدة',
        },
        desc: {
          fr: 'Diffusion sous pression d\'acide hyaluronique et de vitamines pour repulper la peau.',
          ar: 'ترطيب عميق بحمض الهيالورونيك والفيتامينات لمنح البشرة امتلاءً ونعومة حريرية.',
        },
      },
      {
        step: '04',
        title: {
          fr: 'Masque Apaisant & Modelage Visage',
          ar: 'قناع مهدئ ومساج نضارة للوجه',
        },
        desc: {
          fr: 'Application d\'un masque illuminateur avec massage drainant relaxant pour sceller l\'éclat.',
          ar: 'وضع قناع مغذٍ مع تدليك تصريفي مهدئ لتثبيت النضارة والاسترخاء.',
        },
      },
    ],
    cta: {
      fr: 'Réserver mon soin Hydrafacial (4 500 DA)',
      ar: 'حجز جلسة هيدرا فيشل (4500 د.ج)',
    },
  },

  promoBanner: {
    tag: {
      fr: 'Offre Spéciale en Cours',
      ar: 'عرض ترويجي حصري',
    },
    badgePromo: {
      fr: 'Promotion -20%',
      ar: 'تخفيض 20%',
    },
    title: {
      fr: 'Hydrafacial Haute Performance à 4 500 DA',
      ar: 'جلسة هيدرا فيشل المتطورة بسعر 4500 د.ج',
    },
    description: {
      fr: 'Profitez de notre tarif exceptionnel à partir de 4 500 DA pour un nettoyage de peau profond et un coup d\'éclat instantané.',
      ar: 'استفيدي من العرض الترويجي الحصري ابتداءً من 4500 د.ج للحصول على بشرة نقية ومشرقة كالحرير.',
    },
    basePriceLabel: {
      fr: 'Tarif officiel de l\'institut',
      ar: 'السعر المعلن في المعهد',
    },
    cta: {
      fr: 'Profiter de l\'offre Hydrafacial',
      ar: 'الاستفادة من العرض الآن',
    },
  },

  sensoryRitual: {
    eyebrow: {
      fr: 'L\'Expérience Sensorielle de l\'Institut',
      ar: 'تجربة الحواس الراقية',
    },
    title: {
      fr: '"Une touche délicate et personnalisée pour chaque cliente"',
      ar: '"لمسة خاصة من العناية المترفة لكل زائرة"',
    },
    subtitle: {
      fr: 'Pour accompagner vos soins et modelages, découvrez nos synergies d\'huiles précieuses et d\'arômes délicats.',
      ar: 'لمرافقة جلسات العناية والراحة، اختاري عطركِ المفضل من مجموعتنا الخاصة بالزيوت الطبيعية.',
    },
    interactiveHint: {
      fr: 'Explorez nos univers aromatiques :',
      ar: 'استكشفي النفحات العطرية المخصصة:',
    },
    scents: [
      {
        id: 'rose',
        color: '#E8B4B8',
        name: { fr: 'Pétales de Rose Glam', ar: 'بتلات الورد' },
        tag: { fr: 'Délicat & Romantique', ar: 'ناعم وأنثوي' },
        notes: {
          fr: 'Notes florales subtiles qui apaisent l\'épiderme et évoquent la féminité et l\'élégance de la mariée.',
          ar: 'نفحات زهرية رقيقة تعيد التوازن للبشرة وتمنح إحساساً أنثوياً مترفاً.',
        },
      },
      {
        id: 'amber',
        color: '#C59B72',
        name: { fr: 'Ambre Doré Précieux', ar: 'عنبر ذهبي' },
        tag: { fr: 'Chaleureux & Enveloppant', ar: 'دافئ ومهدئ' },
        notes: {
          fr: 'Accords chauds et réconfortants qui dénouent les tensions et procurent une relaxation totale.',
          ar: 'مزيج عنبري دافئ يساعد على الاسترخاء التام وتجديد الطاقة الحيوية.',
        },
      },
      {
        id: 'oud',
        color: '#8A5D3B',
        name: { fr: 'Musc Blanc & Soie', ar: 'مسك أبيض حريري' },
        tag: { fr: 'Noble & Velouté', ar: 'راقي وحريري' },
        notes: {
          fr: 'Senteur poudrée et veloutée laissant un voile satiné sur la peau après chaque rituel.',
          ar: 'عبير المسك الأبيض الصافي يترك أثراً مخملياً ناعماً على الجسم.',
        },
      },
      {
        id: 'orange',
        color: '#E0A868',
        name: { fr: 'Fleur d\'Oranger Solaire', ar: 'زهر البرتقال' },
        tag: { fr: 'Frais & Lumineux', ar: 'منعش ومجدد' },
        notes: {
          fr: 'Fraîcheur méditerranéenne vivifiante qui apporte une sensation d\'énergie et de renouveau.',
          ar: 'انتعاش متوسطي نقي يوقظ الحواس ويبعث على الحيوية والبهجة.',
        },
      },
    ],
  },

  categories: [
    {
      id: 'coiffure',
      name: { fr: 'Coiffure & Soins Capillaires', ar: 'تصفيف الشعر والعناية' },
      badge: { fr: 'Coiffure & Soin', ar: 'تصفيف وعناية' },
      themeColor: '#121212',
    },
    {
      id: 'esthetique',
      name: { fr: 'Soins Visage & Regard', ar: 'العناية بالوجه والرموش' },
      badge: { fr: 'Visage & Regard', ar: 'وجه ورموش' },
      themeColor: '#E8B4B8',
    },
    {
      id: 'onglerie',
      name: { fr: 'Onglerie & Soin des Pieds', ar: 'الأظافر والعناية بالقدمين' },
      badge: { fr: 'Mains & Pieds', ar: 'أظافر وقدمين' },
      themeColor: '#C59B72',
    },
    {
      id: 'epilation',
      name: { fr: 'Épilation & Douceur', ar: 'إزالة الشعر' },
      badge: { fr: 'Épilation', ar: 'إزالة الشعر' },
      themeColor: '#121212',
    },
    {
      id: 'mariee',
      name: { fr: 'Maquillage & Pack Mariée', ar: 'المكياج وباقة العروس' },
      badge: { fr: 'Mariée & Glamour', ar: 'عروس ومكياج' },
      themeColor: '#C59B72',
    },
  ] as ServiceCategory[],

  services: [
    {
      id: 'hydra-facial',
      categoryId: 'esthetique',
      name: {
        fr: 'Hydrafacial (Promotion -20%)',
        ar: 'جلسة هيدرا فيشل (تخفيض 20%)',
      },
      shortDesc: {
        fr: 'Nettoyage profond, extraction douce des comédons et infusion d\'actifs repulpants.',
        ar: 'تنظيف عميق، إزالة الشوائب بلطف وضخ سيرومات الترطيب المكثف.',
      },
      fullDesc: {
        fr: 'Le soin star de l\'institut Souad Glam Beauty : un protocole complet combinant exfoliation douce, désincrustation des pores sous vide et infusion de sérums antioxydants et d\'acide hyaluronique pour un teint net, lissé et éclatant.',
        ar: 'الجلسة الأكثر طلباً في المعهد: بروتوكول علاجي متقدم يجمع بين تقشير البشرة اللطيف وتنقية المسام وضخ العناصر المغذية لمنحكِ إشراقة مذهلة.',
      },
      priceDisplay: {
        fr: '4 500 DA (à partir de)',
        ar: '4500 د.ج (ابتداءً من)',
      },
      isPriceMissing: false,
      isPromo: true,
      promoBadge: {
        fr: '-20% PROMO',
        ar: 'خصم 20%',
      },
      highlights: [
        { fr: 'Nettoyage en profondeur des pores', ar: 'تنقية عميقة وشاملة للمسام' },
        { fr: 'Extraction douce sans rougeurs', ar: 'إزالة الشوائب بدون احمرار' },
        { fr: 'Infusion d\'acide hyaluronique repulpant', ar: 'ترطيب بحمض الهيالورونيك' },
        { fr: 'Éclat immédiat du teint', ar: 'نضارة فورية وملحوظة للبشرة' },
      ],
      sensoryNotes: [
        { fr: 'Sensation de fraîcheur et pureté immédiate', ar: 'إحساس فوري بالانتعاش والنقاء' },
      ],
    },
    {
      id: 'soin-pedicure',
      categoryId: 'onglerie',
      name: {
        fr: 'Soin des Pieds Complet',
        ar: 'جلسة عناية متكاملة بالقدمين',
      },
      shortDesc: {
        fr: 'Bain relaxant, gommage, traitement des callosités et mise en beauté des ongles.',
        ar: 'حمام مهدئ، تقشير، إزالة الجلد الميت وتجميل أظافر القدمين.',
      },
      fullDesc: {
        fr: 'Un rituel bienfaisant dédié au confort et à l\'élégance des pieds : bain d\'eau tiède parfumé, élimination soignée des rugosités, gommage adoucissant, modelage relaxant et soin cuticules pour des pieds parfaitement doux et soignés.',
        ar: 'جلسة دلال متكاملة لصحة وجمال قدميكِ: نقع في الماء المعطر، تقشير عميق، ترطيب مكثف وعناية تامة بشكل ونظافة الأظافر.',
      },
      priceDisplay: {
        fr: '2 500 DA (à partir de)',
        ar: '2500 د.ج (ابتداءً من)',
      },
      isPriceMissing: false,
      highlights: [
        { fr: 'Élimination des callosités et peaux mortes', ar: 'إزالة فعالة للجلد الميت والتصلبات' },
        { fr: 'Gommage velouté et modelage nourrissant', ar: 'تقشير ناعم ومساج مرطب' },
        { fr: 'Mise en forme soignée des ongles', ar: 'تنسيق وتلميع الأظافر بعناية' },
      ],
    },
    {
      id: 'pack-ongles-mains-pieds',
      categoryId: 'onglerie',
      name: {
        fr: 'Pack Ongles Mains & Pieds',
        ar: 'باقة الأظافر لليدين والقدمين',
      },
      shortDesc: {
        fr: 'Formule combinée pour une manucure et pédicure harmonieuse et impeccable.',
        ar: 'باقة مجمعة لجمال وتناسق أظافر اليدين والقدمين.',
      },
      fullDesc: {
        fr: 'Prestation complète comprenant la préparation minutieuse des ongles des mains et des pieds, le soin des cuticules, le limage soigné et l\'application de votre pose ou vernis préféré pour un résultat élégant et longue tenue.',
        ar: 'خدمة راقية تشمل تنظيف الأظافر، العناية بالجلد المحيط، التشكيل المتناسق والتزيين الاحترافي ليدين وقدمين في قمة الأنوثة.',
      },
      priceDisplay: {
        fr: '5 000 DA (à partir de)',
        ar: '5000 د.ج (ابتداءً من)',
      },
      isPriceMissing: false,
      highlights: [
        { fr: 'Soin complet mains et pieds en une séance', ar: 'عناية متكاملة لليدين والقدمين معاً' },
        { fr: 'Finitions impeccables et brillance durable', ar: 'لمعان متألق وثبات يدوم طويلاً' },
      ],
    },
    {
      id: 'epilation-corps-complet',
      categoryId: 'epilation',
      name: {
        fr: 'Épilation Corps Complet',
        ar: 'إزالة شعر الجسم كاملاً',
      },
      shortDesc: {
        fr: 'Épilation intégrale professionnelle à la cire pour une peau soyeuse et nette.',
        ar: 'إزالة شعر الجسم كاملاً بدقة متناهية لنعومة فائقة تدوم أسابيع.',
      },
      fullDesc: {
        fr: 'Séance d\'épilation professionnelle réalisée avec une cire haute tolérance pour le respect des peaux sensibles : jambes complètes, bras, aisselles et zones souhaitées, suivie de l\'application d\'une huile apaisante.',
        ar: 'جلسة إزالة شعر متقنة باستخدام شمع فائق الجودة مخصص للبشرة الحساسة مع تطبيق زيت مهدئ لتقليل الاحمرار وتنعيم البشرة.',
      },
      priceDisplay: {
        fr: '5 000 DA (à partir de)',
        ar: '5000 د.ج (ابتداءً من)',
      },
      isPriceMissing: false,
      highlights: [
        { fr: 'Cire de qualité adaptée aux peaux sensibles', ar: 'شمع عالي الجودة للبشرة الرقيقة' },
        { fr: 'Application d\'une lotion apaisante post-soin', ar: 'لوشن مهدئ ومضاد للتهيج بعد الجلسة' },
      ],
    },
    {
      id: 'coiffure-brushing',
      categoryId: 'coiffure',
      name: {
        fr: 'Coiffure, Brushing & Coiffage Glamour',
        ar: 'تصفيف الشعر، سيشوار وتسريحات مناسبات',
      },
      shortDesc: {
        fr: 'Coupes personnalisées, brushings ultra-lisses ou wavy hollywoodien.',
        ar: 'قصات مميزة، سيشوار حريري وتسريحات ويفي ساحرة.',
      },
      fullDesc: {
        fr: 'Nos coiffeuses visagistes étudient votre style et la texture de votre cheveu pour créer la coiffure idéale : brushing volumateur, boucles wavy glamour, coiffure de fête ou restructuration de coupe.',
        ar: 'استشارة متخصصة مع خبيرات التصفيف لاختيار التسريحة أو القصة الأنسب لملامحكِ، سواء لمناسباتكِ الخاصة أو لإطلالة يومية جذابة.',
      },
      priceDisplay: {
        fr: '[PRIX]',
        ar: '[السعر: للتأكيد]',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Conseil visagiste personnalisé', ar: 'استشارة ملائمة لشكل الوجه' },
        { fr: 'Produits thermo-protecteurs de qualité', ar: 'منتجات لحماية الشعر من الحرارة' },
      ],
    },
    {
      id: 'soin-capillaire',
      categoryId: 'coiffure',
      name: {
        fr: 'Soin Capillaire Profond (Botox / Protéine / Kératine)',
        ar: 'علاج مغذٍ ومكثف للشعر (بوتوكس / كيراتين)',
      },
      shortDesc: {
        fr: 'Nutrition intense et réparation des longueurs abîmées ou dévitalisées.',
        ar: 'تغذية عميقة وترميم لألياف الشعر التالف والمجهد.',
      },
      fullDesc: {
        fr: 'Cure réparatrice sur mesure pour redonner souplesse, discipline et brillance miroir aux chevelures fatiguées par les colorations et agressions extérieures.',
        ar: 'بروتوكول علاجي غني بالبروتينات والزيوت المعالجة لاستعادة حيوية ولمعان الشعر الحريري والتخلص من التقصف.',
      },
      priceDisplay: {
        fr: '[PRIX]',
        ar: '[السعر: للتأكيد]',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Reconstruction de la fibre capillaire', ar: 'إعادة بناء ألياف الشعر بعمق' },
        { fr: 'Toucher soyeux et brillance éclatante', ar: 'ملمس حريري ولمعان طبيعي' },
      ],
    },
    {
      id: 'pose-ongles',
      categoryId: 'onglerie',
      name: {
        fr: 'Pose d\'Ongles Gel / Résine & Nail Art',
        ar: 'تركيب أظافر بالجل أو الراتنج وديزاين فني',
      },
      shortDesc: {
        fr: 'Rallongement, renforcement gel, vernis semi-permanent et designs tendances.',
        ar: 'تطويل الأظافر، تقوية بالجل، طلاء دائم وتصاميم فنية عصرية.',
      },
      fullDesc: {
        fr: 'Création d\'ongles sculptés sur mesure selon vos envies (forme amande, carré, ballerine), pose de vernis semi-permanent longue durée et détails artistiques subtils.',
        ar: 'تشكيل ورسم الأظافر بدقة فائقة حسب رغبتكِ بأحدث صيحات النيل آرت وألوان ثابتة ومقاومة للتقشر.',
      },
      priceDisplay: {
        fr: '[PRIX]',
        ar: '[السعر: للتأكيد]',
      },
      isPriceMissing: true,
    },
    {
      id: 'cils-a-cils',
      categoryId: 'esthetique',
      name: {
        fr: 'Extension de Cils à Cils & Volume Russe',
        ar: 'تركيب الرموش شعرة بشعرة وفوليوم روسي',
      },
      shortDesc: {
        fr: 'Intensifiez votre regard avec une pose naturelle ou glamour.',
        ar: 'تكثيف الرموش وتوسيع العيون بإطلالة طبيعية أو ساحرة.',
      },
      fullDesc: {
        fr: 'Application méticuleuse cil par cil d\'extensions ultra-légères en soie respectant la pousse de vos cils naturels, pour un regard magnétique du matin au soir.',
        ar: 'تركيب رموش فائقة الخفة على يد مختصة محترفة تمنحكِ نظرة عميقة وجذابة بدون الحاجة للمسكارا يومياً.',
      },
      priceDisplay: {
        fr: '[PRIX]',
        ar: '[السعر: للتأكيد]',
      },
      isPriceMissing: true,
    },
    {
      id: 'nettoyage-de-peau',
      categoryId: 'esthetique',
      name: {
        fr: 'Nettoyage de Peau en Profondeur',
        ar: 'تنظيف عميق للبشرة والمسام',
      },
      shortDesc: {
        fr: 'Bain de vapeur, gommage doux, extraction et masque purifiant.',
        ar: 'بخار مهدئ، تقشير لطيف، إزالة الرؤوس السوداء وقناع منقٍ.',
      },
      fullDesc: {
        fr: 'Le soin essentiel pour libérer la peau des toxines et du sébum : dilatation des pores sous vapeur douce, désincrustation méticuleuse et masque reminéralisant.',
        ar: 'العناية الأساسية لبشرة نظيفة ومتجددة: فتح المسام بالبخار، إزالة الشوائب بعناية ووضع ماسك مغذٍ يوازن الإفرازات.',
      },
      priceDisplay: {
        fr: '[PRIX]',
        ar: '[السعر: للتأكيد]',
      },
      isPriceMissing: true,
    },
    {
      id: 'maquillage-makeup-artist',
      categoryId: 'mariee',
      name: {
        fr: 'Maquillage Événementiel & Make-Up Artist',
        ar: 'مكياج سهرات ومناسبات (Make-Up Artist)',
      },
      shortDesc: {
        fr: 'Teint parfait, contouring subtil et mise en valeur du regard pour vos fêtes.',
        ar: 'تغطية متقنة للبشرة، كونتورينغ ناعم ومكياج عيون احترافي لمناسباتكِ.',
      },
      fullDesc: {
        fr: 'Mise en beauté professionnelle réalisée avec des cosmétiques de prestige longue tenue : préparation du teint, mise en valeur des traits et fixateur résistant pour briller jusqu\'au bout de la nuit.',
        ar: 'مكياج سينمائي واحترافي بأجود الماركات العالمية لضمان ثبات تام وتغطية خالية من العيوب طوال الحفل.',
      },
      priceDisplay: {
        fr: '[PRIX]',
        ar: '[السعر: للتأكيد]',
      },
      isPriceMissing: true,
    },
    {
      id: 'pack-mariee-bride-to-be',
      categoryId: 'mariee',
      name: {
        fr: 'Pack Mariée Signature ("Bride to Be")',
        ar: 'باقة العروس المتكاملة ("Bride to Be")',
      },
      shortDesc: {
        fr: 'Programme d\'excellence pour sublimer la future mariée lors de son grand jour.',
        ar: 'برنامج دلال وتحضير شامل للعروس لتتألق كالملكة في ليلة العمر.',
      },
      fullDesc: {
        fr: 'Un accompagnement privilégié pour la reine de la fête : soins du visage préparatoires, beauté des mains et des pieds, coiffure de mariée d\'exception, pose de voile et maquillage haute définition personnalisé.',
        ar: 'باقة مصممة خصيصاً للعروس تشمل العناية بالبشرة، تسريحة شعر ملكية، مكياج العروس الراقي، تجميل الأظافر وتنسيق الطرحة لإطلالة تخطف الأنظار.',
      },
      priceDisplay: {
        fr: '[PRIX] (Sur Devis)',
        ar: '[السعر: حسب البرنامج]',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Prise en charge personnalisée de la future mariée', ar: 'مرافقة خاصة ومتفانية للعروس' },
        { fr: 'Coiffure et maquillage mariée sur mesure', ar: 'تسريحة ومكياج مخصصان بالكامل' },
        { fr: 'Formules adaptées à vos créneaux et envies', ar: 'برامج مرنة حسب موعد زفافكِ' },
      ],
    },
  ] as ServiceItem[],

  galleryPage: {
    eyebrow: { fr: 'Portfolio & Créations', ar: 'معرض الإبداعات' },
    title: {
      fr: 'Galerie & Réalisations de l\'Institut',
      ar: 'معرض الأعمال وأجواء المعهد',
    },
    subtitle: {
      fr: 'Découvrez les créations de Souad Glam Beauty à Valmascort : coiffures glamour, teints lumineux, nail art et mises en beauté de mariées.',
      ar: 'اكتشفي إبداعات سعاد غلام بيوتي في فالمسكور: تسريحات راقية، بشرة نضرة، فن الأظافر وإطلالات العرائس الساحرة.',
    },
    filterAll: { fr: 'Tout', ar: 'الكل' },
    filterHammam: { fr: 'Soins Visage', ar: 'العناية بالبشرة' },
    filterCoiffure: { fr: 'Coiffure & Balayage', ar: 'الشعر والتصفيف' },
    filterMassage: { fr: 'Onglerie & Pieds', ar: 'الأظافر والقدمين' },
    filterAmbiance: { fr: 'Mariée & Glamour', ar: 'العروس والمكياج' },
    openImage: { fr: 'Agrandir l’image', ar: 'تكبير الصورة' },
    closeLightbox: { fr: 'Fermer', ar: 'إغلاق' },
    previousImage: { fr: 'Image précédente', ar: 'الصورة السابقة' },
    nextImage: { fr: 'Image suivante', ar: 'الصورة التالية' },
    galleryItems: {
      'gallery-balayage-sunlight': {
        title: { fr: 'Balayage & Reflets Lumineux', ar: 'بالياج وخصلات متدرجة' },
        description: { fr: 'Éclaircissement fondu naturel apportant lumière et relief.', ar: 'تدرج طبيعي متناسق يمنح الشعر لمعاناً ونضارة.' },
      },
      'gallery-hair-styling': {
        title: { fr: 'Brushing Wavy Glamour', ar: 'سيشوار ويفي هوليوودي' },
        description: { fr: 'Ondulations soyeuses et volume aérien pour vos cérémonies.', ar: 'تموجات حريرية وكثافة أنيقة للمناسبات.' },
      },
      'gallery-pedicure-care': {
        title: { fr: 'Soin des Pieds & Pédicure Soignée', ar: 'عناية فائقة بالأقدام' },
        description: { fr: 'Bain tiède et mise en beauté méticuleuse des ongles.', ar: 'حمام مهدئ وعناية تامة بأظافر القدمين.' },
      },
      'gallery-fragrance-tray': {
        title: { fr: 'Essences & Soins de l\'Institut', ar: 'زيوت وعطور العناية' },
        description: { fr: 'Sélection d\'arômes précieux pour accompagner chaque rituel.', ar: 'مجموعة من أندر الخلاصات لتغذية وتدليل البشرة.' },
      },
      'gallery-skin-hydrafacial': {
        title: { fr: 'Hydrafacial & Coup d\'Éclat', ar: 'جلسة هيدرا فيشل ونضارة' },
        description: { fr: 'Pores purifiés, peau repulpée et lissage immédiat.', ar: 'تنقية للمسام وترطيب عميق لبشرة مشرقة.' },
      },
      'gallery-bridal-atmosphere': {
        title: { fr: 'Mise en Beauté Future Mariée', ar: 'إطلالة عروس متألقة' },
        description: { fr: 'Coiffure et maquillage travaillés avec minutie pour le grand jour.', ar: 'تسريحة ومكياج فخم يبرز جمال العروس وسحرها.' },
      },
    },
  },

  aboutPage: {
    title: {
      fr: 'L\'Esprit Souad Glam Beauty — Valmascort',
      ar: 'هوية معهد سعاد غلام بيوتي — فالمسكور',
    },
    tagline: {
      fr: 'L\'art de sublimer chaque femme à travers des prestations expertes de coiffure, esthétique et mise en beauté mariée.',
      ar: 'فن إبراز جمال كل امرأة من خلال خدمات احترافية في التصفيف، العناية بالبشرة ومكياج العرائس.',
    },
    storyP1: {
      fr: 'Implanté à Valmascort [VILLE: à confirmer], l\'institut de beauté SOUAD GLAM BEAUTY a été conçu comme une adresse privilégiée dédiée au bien-être et au raffinement féminin. Dans un univers doux aux nuances blush, noir élégant et dorures subtiles, notre équipe vous accueille pour une expérience sur mesure.',
      ar: 'يقع معهد SOUAD GLAM BEAUTY في فالمسكور [المدينة: للتأكيد]، وصُمم ليكون وجهتكِ المفضلة للأناقة والجمال. في أجواء هادئة تجمع بين رقة الوردي، فخامة الأسود ولمسات الذهب الدافئة، نستقبلكِ لتقديم أفضل الخدمات المخصصة لكِ.',
    },
    storyP2: {
      fr: 'De la transformation capillaire (balayages lumineux, soins botox) aux protocoles de peau avancés comme l\'Hydrafacial, en passant par l\'onglerie fine et l\'accompagnement exclusif des futures mariées ("Bride to be"), chaque geste est exécuté avec passion et exigence.',
      ar: 'من العناية الاحترافية بالشعر (البالياج، علاجات الترميم) إلى أحدث تقنيات تنقية البشرة كالهيدرا فيشل، وصولاً إلى فن الأظافر وتجهيز العرائس المتكامل، نحرص على تقديم أعلى مستويات الإتقان.',
    },
    avisHeading: {
      fr: 'Retours & Témoignages de nos Clientes',
      ar: 'آراء ورسائل زبوناتنا العزيزات',
    },
    avisNotice: {
      fr: '[Retours authentiques consultables sur Instagram]',
      ar: '[المحادثات الأصلية متاحة على صفحة إنستغرام]',
    },
    avisDescription: {
      fr: 'Découvrez les messages chaleureux et avis spontanés partagés par nos clientes sur notre page Instagram @souad_glam_beauty_.',
      ar: 'اكتشفي الشهادات الحقيقية والمشاركات العفوية لزبوناتنا على حسابنا في إنستغرام @souad_glam_beauty_.',
    },
    avisHammam: {
      fr: 'Le soin Hydrafacial a redonné un éclat immédiat à ma peau, une douceur incomparable !',
      ar: 'جلسة الهيدرا فيشل منحت بشرتي نضارة فورية ونعومة فائقة، تجربة رائعة جداً!',
    },
    avisHair: {
      fr: 'Un travail remarquable pour ma coiffure et mon maquillage de fête, tenue parfaite toute la soirée !',
      ar: 'إتقان لا يُعلى عليه في تسريحة الشعر والمكياج، ثبات ممتاز طوال الحفل!',
    },
    avisStoryLabel: {
      fr: 'Instagram : Avis & Stories ❤️',
      ar: 'إنستغرام: آراء الزبونات ❤️',
    },
    instagramCallout: {
      fr: 'Voir les réalisations sur @souad_glam_beauty_',
      ar: 'تابعي إبداعاتنا على @souad_glam_beauty_',
    },
  },

  contactPage: {
    title: {
      fr: 'Coordonnées & Prise de Rendez-vous',
      ar: 'التواصل وحجز المواعيد',
    },
    subtitle: {
      fr: 'Pour toute demande d\'information, consultation mariée ou réservation de soin, contactez-nous par téléphone ou WhatsApp.',
      ar: 'لأي استفسار، استشارة عروس أو حجز موعد، يسعدنا تواصلكِ المباشر معنا هاتفياً أو عبر واتساب.',
    },
    phoneCardTitle: { fr: 'Téléphone & WhatsApp Direct', ar: 'الهاتف والواتساب المباشر' },
    addressCardTitle: { fr: 'Adresse de l\'Institut', ar: 'عنوان المعهد' },
    hoursCardTitle: { fr: 'Horaires d\'Ouverture', ar: 'أوقات العمل' },
    hoursNotice: {
      fr: '[HORAIRES]',
      ar: '[ساعات العمل: ستُحدد]',
    },
    hoursDescription: {
      fr: 'Contactez l\'institut au 05 58 54 14 75 pour connaître les créneaux disponibles de la semaine.',
      ar: 'يرجى الاتصال على الرقم 05 58 54 14 75 لمعرفة المواعيد المتاحة لهذا الأسبوع.',
    },
    openMapsBtn: { fr: 'Ouvrir la localisation Google Maps', ar: 'فتح الموقع على خرائط جوجل' },
    openInstaBtn: { fr: 'Instagram (@souad_glam_beauty_)', ar: 'إنستغرام (@souad_glam_beauty_)' },
    callAction: { fr: 'Appeler au 05 58 54 14 75', ar: 'اتصلي على 05 58 54 14 75' },
    mapAction: { fr: 'Itinéraire Google Maps', ar: 'الاتجاهات على خرائط جوجل' },
    formIntro: {
      fr: 'Sélectionnez votre prestation pour transmettre votre demande de rendez-vous directement à notre équipe.',
      ar: 'اختاري الخدمة المطلوبة لإرسال طلب موعدكِ مباشرة إلى فريق المعهد.',
    },
    notesPlaceholder: {
      fr: 'Ex: horaire souhaité, type de coiffure, événement particulier...',
      ar: 'مثال: التوقيت المفضل، نوع التسريحة، موعد المناسبة...',
    },

    form: {
      title: { fr: 'Demande de Rendez-vous à l\'Institut', ar: 'طلب موعد في المعهد' },
      nameLabel: { fr: 'Nom complet', ar: 'الاسم الكامل' },
      namePlaceholder: { fr: 'Ex: Amina K.', ar: 'مثال: أمينة ك.' },
      phoneLabel: { fr: 'Numéro de téléphone', ar: 'رقم الهاتف' },
      phonePlaceholder: { fr: '05.. .. .. ..', ar: '05.. .. .. ..' },
      serviceLabel: { fr: 'Prestation souhaitée', ar: 'الخدمة المطلوبة' },
      dateLabel: { fr: 'Date souhaitée', ar: 'التاريخ المفضل' },
      notesLabel: { fr: 'Précisions ou demandes particulières (optionnel)', ar: 'ملاحظات أو تفاصيل إضافية (اختياري)' },
      notesPlaceholder: { fr: 'Ex: longueur des cheveux, événement, préférences...', ar: 'مثال: طول الشعر، مناسبة قادمة، تفضيلات خاصة...' },
      submitBtn: { fr: 'Envoyer ma demande de rendez-vous', ar: 'تأكيد إرسال طلب الموعد' },
      confirmationTitle: { fr: 'Demande de Rendez-vous Enregistrée', ar: 'تم تسجيل طلب الموعد بنجاح' },
      confirmationBody: {
        fr: 'Merci ! Votre demande a été enregistrée. Pour une confirmation immédiate, vous pouvez également joindre Souad Glam Beauty au 05 58 54 14 75 par appel ou WhatsApp.',
        ar: 'شكراً لكِ! تم تسجيل طلبكِ بنجاح. لتأكيد موعدكِ فوراً، يمكنكِ أيضاً التواصل مع معهد سعاد غلام بيوتي عبر الاتصال أو واتساب على 05 58 54 14 75.',
      },
      closeBtn: { fr: 'Fermer', ar: 'إغلاق' },
    },
  },

  drawer: {
    selectForBooking: {
      fr: 'Choisir cette prestation pour mon RDV',
      ar: 'اختيار هذه الخدمة لحجز موعد',
    },
    close: {
      fr: 'Fermer',
      ar: 'إغلاق',
    },
    detailsTitle: {
      fr: 'Détails de la prestation',
      ar: 'تفاصيل الخدمة',
    },
    highlightsTitle: {
      fr: 'Ce que comprend ce soin',
      ar: 'ما تشمله الخدمة',
    },
    sensoryTitle: {
      fr: 'Cadre & Confort',
      ar: 'أجواء الراحة والترحيب',
    },
  },
};
