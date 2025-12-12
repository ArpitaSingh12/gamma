export type Language = "en" | "sw" | "de" | "fr" | "ar" | "zh" | "ja";

interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    blog: string;
    partner: string;
    contact: string;
    requestQuote: string;
  };
  hero: {
    title: string;
    subtitle: string;
    viewProducts: string;
    partnerWithUs: string;
    yearsExpertise: string;
    combinedExpertise: string;
    countries: string;
    globalReach: string;
    supplyChain: string;
    chainManagement: string;
    logisticsTitle: string;
    logisticsSubtitle: string;
  };
  home: {
    productsTitle: string;
    productsSubtitle: string;
  };
  products: {
    cashew: string;
    cashewDesc: string;
    cashewHighlight: string;
    coffee: string;
    coffeeDesc: string;
    coffeeHighlight: string;
    cocoa: string;
    cocoaDesc: string;
    cocoaHighlight: string;
    pulses: string;
    pulsesDesc: string;
    pulsesHighlight: string;
    liquor: string;
    liquorDesc: string;
    liquorHighlight: string;
    imports: string;
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
    benefit4Title: string;
    benefit4Desc: string;
    benefit5Title: string;
    benefit5Desc: string;
    benefit6Title: string;
    benefit6Desc: string;
  };
  globalPresence: {
    title: string;
    subtitle: string;
    stat1Value: string;
    stat1Label: string;
    stat1Desc: string;
    stat2Value: string;
    stat2Label: string;
    stat2Desc: string;
    stat3Value: string;
    stat3Label: string;
    stat3Desc: string;
    stat4Value: string;
    stat4Label: string;
    stat4Desc: string;
    locationsTitle: string;
    location1: string;
    location1Role: string;
    location2: string;
    location2Role: string;
    location3: string;
    location3Role: string;
    location4: string;
    location4Role: string;
    location5: string;
    location5Role: string;
    location6: string;
    location6Role: string;
    location7: string;
    location7Role: string;
  };
  common: {
    learnMore: string;
    requestQuote: string;
    backToProducts: string;
    // WhatsApp button (optional)
    whatsappAriaLabel?: string;
    whatsappTooltip?: string;
    // Footer (optional)
    footerDescription?: string;
    footerProductsTitle?: string;
    footerCompanyTitle?: string;
    footerContactTitle?: string;
    footerCopyright?: string;
    // About page
    aboutIntro: string;
    aboutVisionTitle: string;
    aboutVisionBody: string;
    aboutMissionTitle: string;
    aboutMissionBody: string;
    aboutStoryTitle: string;
    aboutStoryP1: string;
    aboutStoryP2: string;
    aboutTrustedTitle: string;
    aboutTrustedBody: string;
    aboutGlobalTitle: string;
    aboutGlobalBody: string;
    aboutPromiseTitle: string;
    aboutPromiseBody: string;
    // Contact page
    contactSubtitle: string;
    contactFormTitle: string;
    contactNameLabel: string;
    contactEmailLabel: string;
    contactPhoneLabel: string;
    contactPhonePlaceholder: string;
    contactCompanyLabel: string;
    contactMessageLabel: string;
    contactSubmitSending: string;
    contactSubmitLabel: string;
    contactHeadOfficeTitle: string;
    contactHeadOfficeName: string;
    contactAddressLine1: string;
    contactAddressLine2: string;
    contactAddressPoBox: string;
    contactPhoneTitle: string;
    contactEmailTitle: string;
    contactMapTitle: string;
    contactMapCaption: string;
    contactToastSuccessTitle: string;
    contactToastSuccessDescription: string;
    contactToastErrorTitle: string;
    contactToastErrorGeneric: string;
    // Products page
    productsPageTitle: string;
    productsPageSubtitle: string;
    productsExportTitle: string;
    productsExportBadge: string;
    productsImportTitle: string;
    productsImportBadge: string;
    productsCtaTitle: string;
    productsCtaBody: string;
    productsCtaRequestQuote: string;
    productsCtaPartner: string;
    // Partner page
    partnerSubtitle: string;
    partnerWhyTitle: string;
    partnerBenefit1: string;
    partnerBenefit2: string;
    partnerBenefit3: string;
    partnerBenefit4: string;
    partnerBenefit5: string;
    partnerBenefit6: string;
    partnerProcessTitle: string;
    partnerProcessStep1Title: string;
    partnerProcessStep1Desc: string;
    partnerProcessStep2Title: string;
    partnerProcessStep2Desc: string;
    partnerProcessStep3Title: string;
    partnerProcessStep3Desc: string;
    partnerProcessStep4Title: string;
    partnerProcessStep4Desc: string;
    partnerProcessStep5Title: string;
    partnerProcessStep5Desc: string;
    partnerCtaTitle: string;
    partnerCtaBody: string;
    partnerCtaButton: string;
    // Call to action section on home page
    ctaTitle: string;
    ctaSubtitle: string;
    ctaPrimaryButton: string;
    ctaSecondaryButton: string;
    // Blog list page
    blogTitle: string;
    blogSubtitle: string;
    blogCategoryAll: string;
    blogCategoryIndustryInsights: string;
    blogCategoryProductSpotlight: string;
    blogCategoryTradeInsights: string;
    blogCategoryCompanyNews: string;
    blogCategoryExportGuide: string;
    blogCategoryEducational: string;
    blogReadMore: string;
    blogNoPosts: string;
    blogNewsletterPrompt: string;
    blogNewsletterButton: string;
    // Blog post page
    blogPostNotFoundTitle: string;
    blogPostBackToBlog: string;
    blogPostShare: string;
    blogPostRelatedArticles: string;
    blogPostContactUs: string;
    blogPostViewProducts: string;
    // Not found page (optional)
    notFoundTitle?: string;
    notFoundSubtitle?: string;
  };
  cashewPage?: {
    backToProducts: string;
    title: string;
    subtitle: string;
    rcnTitle: string;
    rcnBody: string;
    rcnSpecsTitle: string;
    rcnOutturn: string;
    rcnNutCount: string;
    rcnMoisture: string;
    rcnPackaging: string;
    rcnOrigin: string;
    rcnHsCode: string;
    rcnContainer: string;
    rcnMoq: string;
    kernelsTitle: string;
    kernelsBody: string;
    kernelsSpecsTitle: string;
    kernelsGrades: string;
    kernelsHsCode: string;
    kernelsMoisture: string;
    kernelsSeason: string;
    kernelsPackaging: string;
    kernelsAltPack: string;
    kernels20ft: string;
    kernels40ft: string;
    ctaTitle: string;
    ctaBody: string;
    ctaRequestQuote: string;
    ctaLearnMore: string;
  };
  coffeePage?: {
    title: string;
    subtitle: string;
    tagline: string;
    intro: string;
    specsTitle: string;
    specCropSeason: string;
    specCropSeasonValue: string;
    specPackaging: string;
    specPackagingValue: string;
    spec20ft: string;
    spec20ftValue: string;
    spec40ft: string;
    spec40ftValue: string;
    specOrigin: string;
    specOriginValue: string;
    gradesTitle: string;
    arabicaTitle: string;
    arabicaHsCode: string;
    arabicaGradeAAA: string;
    arabicaGradeAA: string;
    arabicaGradeA: string;
    robustaTitle: string;
    robustaHsCode: string;
    robustaFaq12: string;
    robustaFaq14: string;
    robustaFaq16: string;
    robustaFaq18: string;
    certTitle: string;
    certFairTrade: string;
    certEu: string;
    certEcoCert: string;
    certOrganic: string;
    certIso: string;
    ctaTitle: string;
    ctaBody: string;
    ctaWhy: string;
  };
  cocoaPage?: {
    title: string;
    subtitle: string;
    tagline?: string;
    intro: string;
    specsTitle: string;
    specCropSeason: string;
    specCropSeasonValue: string;
    specPackaging: string;
    specPackagingValue: string;
    spec20ft: string;
    spec20ftValue: string;
    spec40ft: string;
    spec40ftValue: string;
    specOrigin: string;
    specOriginValue: string;
    gradesTitle: string;
    gradePremium: string;
    gradeStandard: string;
    gradeFaq: string;
    hsCodeFermented: string;
    hsCodeSemiProcessed: string;
    certTitle: string;
    certFairTrade: string;
    certEu: string;
    certEcoCert?: string;
    certOrganic?: string;
    certIso?: string;
    ctaTitle: string;
    ctaBody: string;
  };
  pulsesPage?: {
    title: string;
    subtitle: string;
    pulsesTitle: string;
    pulsesBody: string;
    sesameTitle: string;
    sesameBody: string;
    ctaTitle: string;
    ctaBody: string;
    ctaBlogButton?: string;
    // Headings for UI sections on pulses page
    varietiesTitle?: string;
    specTitle?: string;
    // Variety badges
    varietyChickpeas?: string;
    varietyPigeonPeas?: string;
    varietyKidneyBeans?: string;
    varietyGreenMungBeans?: string;
    varietyWhiteSesame?: string;
    varietyBrownSesame?: string;
    sesameHsCode?: string;
    // Shared spec labels
    specMoistureLabel?: string;
    specPurityLabel?: string;
    specPackagingLabel?: string;
    specLoadingLabel?: string;
    specOriginLabel?: string;
    specSeasonLabel?: string;
    spec20ftLabel?: string;
    spec40ftLabel?: string;
    specProcessingLabel?: string;
    // Pulses spec values
    specPulsesMoistureValue?: string;
    specPulsesPurityValue?: string;
    specPulsesPackagingValue?: string;
    specPulsesLoadingValue?: string;
    specPulsesOriginValue?: string;
    specPulsesSeasonValue?: string;
    specPulses20ftValue?: string;
    specPulses40ftValue?: string;
    // Sesame spec values
    specSesamePurityValue?: string;
    specSesameMoistureValue?: string;
    specSesameProcessingValue?: string;
    specSesamePackagingValue?: string;
    specSesameSeasonValue?: string;
    specSesame20ftValue?: string;
    specSesame40ftValue?: string;
  };
  liquorPage?: {
    varietyPigeonPeas?: string;
    varietyKidneyBeans?: string;
    varietyGreenMung?: string;
    varietyWhiteSesame?: string;
    varietyBrownSesame?: string;
  };
  liquorPage?: {
    title: string;
    subtitle: string;
    intro: string;
    ctaTitle: string;
    ctaBody: string;
    ctaLearnMore?: string;
    // Section headings on liquor page
    productsTitle?: string;
    spiritsTitle?: string;
    sizesTitle?: string;
    gradesTitle?: string;
    specsTitle?: string;
    marketsTitle?: string;
    // Packaging & logistics specs
    specPackagingLabel?: string;
    specPackagingValue?: string;
    spec20ftLabel?: string;
    spec20ftValue?: string;
    specOriginLabel?: string;
    specOriginValue?: string;
    specQualityLabel?: string;
    specQualityValue?: string;
    specDistributionLabel?: string;
    specDistributionValue?: string;
    // Markets
    marketsIntro?: string;
    marketWholesale?: string;
    marketRetail?: string;
    marketHospitality?: string;
    // Individual spirit names
    spiritWhisky?: string;
    spiritRum?: string;
    spiritVodka?: string;
    spiritGin?: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      products: "Products",
      blog: "Blog",
      partner: "Partner With Us",
      contact: "Contact",
      requestQuote: "Request Quote",
    },
    hero: {
      title: "Connecting Continents through Trade",
      subtitle: "Premium agro-commodities from Tanzania to the world. Your trusted partner in sourcing excellence with 90+ years of combined expertise.",
      viewProducts: "View Our Products",
      partnerWithUs: "Partner With Us",
      yearsExpertise: "90+ Years",
      combinedExpertise: "Combined Expertise",
      countries: "5+ Countries",
      globalReach: "Global Reach",
      supplyChain: "360° Supply",
      chainManagement: "Chain Management",
      logisticsTitle: "On-time delivery",
      logisticsSubtitle: "Reliable logistics every step",
    },
    home: {
      productsTitle: "Our Product Portfolio",
      productsSubtitle: "Sourced from the finest regions of Tanzania, our products meet international standards and certifications",
    },
    products: {
      cashew: "Raw Cashew Nuts & Kernels",
      cashewDesc: "From Tanzania's finest farms to global processors – premium RCN and kernels with consistent quality you can trust.",
      cashewHighlight: "RCN Out Turn: 50-55Lbs | Nut count: 160 - 180 | Cashew Kernels: W180, W240, W320.",
      coffee: "Coffee",
      coffeeDesc: "From crop to container, premium Tanzanian Arabica coffee & Robusta coffee for roasters who demand authentic African excellence.",
      coffeeHighlight: "Arabica Coffee: AAA Grade, AA Grade, A Grade | Robusta Coffee: FAQ 12, FAQ 14, FAQ 16, FAQ 18",
      cocoa: "Tanzanian Cocoa",
      cocoaDesc: "High-grade Tanzanian cocoa beans sourced from volcanic soils, offering deep chocolatey aroma, natural fruit notes, and clean fermentation—ideal for chocolatiers and bulk buyers.",
      cocoaHighlight: "Crop Season: November – May | Packaging: 50 kg jute bags with inner PE liner | 20ft: 12 MT (approx. 240 bags) | 40ft: 24 MT (approx. 480 bags) | Origin: Mbeya • Morogoro • Kagera • Kigoma | Moisture: Max 7.5% | Fermentation: 70%–80% well-fermented | HS Code: 18010000",
      pulses: "Pulses & Seeds",
      pulsesDesc: "Chick peas, Pigeon peas, Green Mung and oilseeds like Sesame seeds sourced directly from Tanzania's agricultural heartlands.",
      pulsesHighlight: "Purity: 98%+ | Multiple Varieties",
      liquor: "Liquor",
      liquorDesc: "From distillery to distribution world-class liquor brands tailored for African markets.",
      liquorHighlight: "Bulk, Wholesale & Retail",
      imports: "Imports",
    },
    whyChooseUs: {
      title: "Why choose Gamma International!",
      subtitle: "A trusted bridge between African producers and global buyers",
      benefit1Title: "360° Sourcing & Logistics",
      benefit1Desc: "Complete supply chain management from Tanzania to Asia & Middle East",
      benefit2Title: "On-Ground Quality Control",
      benefit2Desc: "Rigorous inspection and quality assurance at every stage of production",
      benefit3Title: "Verified Supplier Network",
      benefit3Desc: "Long-term farming contracts with trusted producers across Tanzania",
      benefit4Title: "Export Documentation Support",
      benefit4Desc: "Dedicated team handling all compliance and certification requirements",
      benefit5Title: "Ethical Trade Practices",
      benefit5Desc: "Transparent policies that empower farmers and enrich buyers",
      benefit6Title: "Experienced Ground Team",
      benefit6Desc: "From bushes to port operations, our team ensures excellence",
    },
    globalPresence: {
      title: "Our Global Footprint",
      subtitle: "Operating seamlessly across continents with strategic presence in key economic hubs worldwide",
      stat1Value: "90+",
      stat1Label: "Years Combined Expertise",
      stat1Desc: "Multinational team with deep industry knowledge",
      stat2Value: "5+",
      stat2Label: "Countries Served",
      stat2Desc: "Export to Asia, Middle East, and beyond",
      stat3Value: "7",
      stat3Label: "Product Categories",
      stat3Desc: "Diverse portfolio of premium commodities",
      stat4Value: "360°",
      stat4Label: "Supply Chain",
      stat4Desc: "Farm to port operations fully managed",
      locationsTitle: "Our Locations",
      location1: "Dar Es Salaam, Tanzania",
      location1Role: "Registered Office & Operations",
      location2: "Dubai, UAE",
      location2Role: "Strategic Global Headquarters",
      location3: "Ghana",
      location3Role: "Regional Operations",
      location4: "India",
      location4Role: "Processing & Logistics Hub",
      location5: "Germany",
      location5Role: "European Operations",
      location6: "USA",
      location6Role: "North American Base",
      location7: "Mauritius",
      location7Role: "Liquor Production Facility",
    },
    common: {
      learnMore: "Learn More",
      requestQuote: "Request Quote",
      backToProducts: "Back to Products",
      // WhatsApp button
      whatsappAriaLabel: "Contact us on WhatsApp",
      whatsappTooltip: "Chat with us",
      // About page
      aboutIntro:
        "A dynamic export-import enterprise based in Dar Es Salaam, Tanzania, engaged in sourcing, processing, and trading of premium agro-commodities and industrial products across Africa and Asia.",
      aboutVisionTitle: "Our Vision",
      aboutVisionBody:
        "To become Africa's most trusted sourcing and export partner for agro and natural products.",
      aboutMissionTitle: "Our Mission",
      aboutMissionBody:
        "To connect Africa's agricultural strength to the world through integrity, innovation, and impactful partnerships.",
      aboutStoryTitle: "Our Story",
      aboutStoryP1:
        "With deep-rooted partnerships in Masasi, Mtwara, Newala, Dodoma, Iringa, and Arusha, we deliver consistent quality, transparent trade practices, and unmatched logistics efficiency. Our expertise bridges African producers with global buyers through strong sourcing networks, compliance-driven exports, and professional documentation support.",
      aboutStoryP2:
        "At Gamma, our goal is to empower Tanzanian farmers, enrich international buyers, and promote sustainable trade excellence under one trusted banner.",
      aboutTrustedTitle: "Trusted Expertise",
      aboutTrustedBody:
        "Specializing in agri-exports, liquor, and chemicals with a holistic 360° supply chain.",
      aboutGlobalTitle: "Global Reach",
      aboutGlobalBody: "Export to over 5 countries using FOB and CNF shipping methods.",
      aboutPromiseTitle: "Our Promise",
      aboutPromiseBody:
        "A legacy built on unwavering trust, delivering excellence through every shipment.",
      // Footer
      footerDescription:
        "Connecting continents through trade. Premium agro-commodity exports from Tanzania to the world.",
      footerProductsTitle: "Products",
      footerCompanyTitle: "Company",
      footerContactTitle: "Contact Us",
      footerCopyright: "All rights reserved.",
      // Contact page
      contactSubtitle:
        "Contact Us Today and Begin Your Journey with Tanzania's Reliable Export Partner",
      contactFormTitle: "Send Us a Message",
      contactNameLabel: "Name *",
      contactEmailLabel: "Email *",
      contactPhoneLabel: "Phone *",
      contactPhonePlaceholder: "Phone number",
      contactCompanyLabel: "Company",
      contactMessageLabel: "Message *",
      contactSubmitSending: "Sending...",
      contactSubmitLabel: "Send Message",
      contactHeadOfficeTitle: "Head Office",
      contactHeadOfficeName: "Gamma International Tanzania Ltd",
      contactAddressLine1: "24th Floor, Rita Towers",
      contactAddressLine2: "Dar Es Salaam, Tanzania",
      contactAddressPoBox: "PO Box 22469",
      contactPhoneTitle: "Phone",
      contactEmailTitle: "Email",
      contactMapTitle: "Our Location",
      contactMapCaption: "Rita Towers, City Center, Dar Es Salaam, Tanzania",
      contactToastSuccessTitle: "Message Sent!",
      contactToastSuccessDescription:
        "Thank you for your inquiry. We'll get back to you within 24 hours.",
      contactToastErrorTitle: "Error",
      contactToastErrorGeneric: "Failed to send message. Please try again.",
      // Products page
      productsPageTitle: "Our Products",
      productsPageSubtitle:
        "Explore our comprehensive range of premium agricultural exports and quality imports",
      productsExportTitle: "Agricultural Exports",
      productsExportBadge: "Tanzania",
      productsImportTitle: "Premium Imports",
      productsImportBadge: "International",
      productsCtaTitle: "Interested in Our Products?",
      productsCtaBody:
        "Contact us for competitive pricing, bulk orders, and custom solutions tailored to your business needs",
      productsCtaRequestQuote: "Request Quote",
      productsCtaPartner: "Partner With Us",
      // Partner page
      partnerSubtitle:
        "Gamma International Tanzania Ltd provides a seamless trade bridge between Africa's producers and global buyers through our strong sourcing and export network.",
      partnerWhyTitle: "Why Partner With Gamma?",
      partnerBenefit1:
        "360° sourcing & logistics from Tanzania to Asia & Middle East",
      partnerBenefit2:
        "On-ground quality control and inspection at every stage",
      partnerBenefit3:
        "Verified supplier base with long-term farming contracts",
      partnerBenefit4:
        "Dedicated export documentation and logistics team",
      partnerBenefit5:
        "Ethical & transparent trade policies that benefit all parties",
      partnerBenefit6:
        "Dedicated and highly experienced on-ground team from bushes to port operations",
      partnerProcessTitle: "Our Partnership Process",
      partnerProcessStep1Title: "Sourcing",
      partnerProcessStep1Desc:
        "Direct partnerships with verified farmers and producers across Tanzania",
      partnerProcessStep2Title: "Quality Control",
      partnerProcessStep2Desc:
        "Rigorous on-ground inspection and testing to ensure premium standards",
      partnerProcessStep3Title: "Documentation",
      partnerProcessStep3Desc:
        "Complete export documentation, certifications, and compliance support",
      partnerProcessStep4Title: "Logistics",
      partnerProcessStep4Desc:
        "Efficient container loading, shipping coordination, and timely delivery",
      partnerProcessStep5Title: "Delivery",
      partnerProcessStep5Desc:
        "Your products arrive on time, meeting all quality specifications",
      partnerCtaTitle:
        "Kickstart Your Partnership – We're Ready When You Are!",
      partnerCtaBody:
        "Let's discuss how we can build a mutually beneficial long-term trade partnership",
      partnerCtaButton: "Get In Touch",
      // Call to action section on home page
      ctaTitle:
        "Source Quality. Build Trust. Grow Together - Partner with Us Now!",
      ctaSubtitle:
        "Let's collaborate to build a long-term trade partnership that benefits both continents",
      ctaPrimaryButton: "Get In Touch",
      ctaSecondaryButton: "Explore Partnership Opportunities Now",
      // Blog list page
      blogTitle: "Industry Insights & Trade News",
      blogSubtitle:
        "Stay informed about Tanzania's agro-commodity exports, market trends, and best practices in international trade",
      blogCategoryAll: "All Posts",
      blogCategoryIndustryInsights: "Industry Insights",
      blogCategoryProductSpotlight: "Product Spotlight",
      blogCategoryTradeInsights: "Trade Insights",
      blogCategoryCompanyNews: "Company News",
      blogCategoryExportGuide: "Export Guide",
      blogCategoryEducational: "Educational",
      blogReadMore: "Read More",
      blogNoPosts: "No posts found in this category.",
      blogNewsletterPrompt:
        "Want to stay updated on the latest industry news?",
      blogNewsletterButton: "Subscribe to Our Newsletter",
      // Blog post page
      blogPostNotFoundTitle: "Post Not Found",
      blogPostBackToBlog: "Back to Blog",
      blogPostShare: "Share",
      blogPostRelatedArticles: "Related Articles",
      blogPostContactUs: "Get in Touch",
      blogPostViewProducts: "View Our Products",
      // Not found page
      notFoundTitle: "404 Page Not Found",
      notFoundSubtitle: "Did you forget to add the page to the router?",
    },
    cashewPage: {
      backToProducts: "Back to Products",
      title: "Raw Cashew Nuts & Cashew Kernels",
      subtitle: "From farm to processing - Tanzania's finest cashews for global markets",
      rcnTitle: "Raw Cashew Nuts (RCN)",
      rcnBody:
        "We source the finest Tanzanian Raw Cashew Nuts (RCN) known for their superior nut count, high kernel recovery, and consistent moisture levels — preferred by global processors in India and Vietnam.",
      rcnSpecsTitle: "Specifications",
      rcnOutturn: "Outturn",
      rcnNutCount: "Nut Count",
      rcnMoisture: "Moisture",
      rcnPackaging: "Packaging",
      rcnOrigin: "Origin",
      rcnHsCode: "HS Code",
      rcnContainer: "40ft HC Container",
      rcnMoq: "MOQ",
      kernelsTitle: "Cashew Nut Kernels",
      kernelsBody:
        "Our kernels are carefully processed and vacuum-packed to retain natural flavor, color, and crunch — ready for retail or industrial use worldwide.",
      kernelsSpecsTitle: "Specifications",
      kernelsGrades: "Grades",
      kernelsHsCode: "HS Code",
      kernelsMoisture: "Moisture",
      kernelsSeason: "Season",
      kernelsPackaging: "Packaging",
      kernelsAltPack: "Alternative Pack",
      kernels20ft: "20ft Container",
      kernels40ft: "40ft Container",
      ctaTitle:
        "Import the best Raw Cashew Nuts (RCN) & cashews nut kernels with confidence, reliability, and traceability!",
      ctaBody:
        "Contact us for pricing, availability, and custom packaging options for both raw cashew nuts and processed kernels",
      ctaRequestQuote: "Request Quote",
      ctaLearnMore: "Learn More About Our Cashews",
    },
    pulsesPage: {
      title: "Pulses & Seeds",
      subtitle:
        "Premium chickpeas, pigeon peas, green mung beans, and sesame seeds from Tanzania's fertile regions",
      pulsesTitle: "Pulses",
      pulsesBody:
        "Tanzania's fertile soil produces export-quality pulses rich in protein and taste. We supply cleaned and graded pulses ideal for food industries and bulk buyers globally.",
      sesameTitle: "Sesame Seeds",
      sesameBody:
        "Premium white and brown sesame seeds, machine-cleaned and Sortex processed for exceptional purity and quality. Sourced from Southern Tanzania's best growing regions.",
      ctaTitle:
        "Partner with Tanzania's most reliable pulses exporter for year-round shipments!",
      ctaBody:
        "Contact us for competitive pricing and bulk orders of premium pulses and sesame seeds from Tanzania",
      ctaBlogButton: "Learn more about our Pulses & Seeds",
      // Headings used on pulses page UI
      varietiesTitle: "Varieties Available",
      specTitle: "Specifications",
      // Variety badges
      varietyChickpeas: "Chickpeas",
      varietyPigeonPeas: "Pigeon Peas",
      varietyKidneyBeans: "Kidney Beans",
      varietyGreenMungBeans: "Green Mung Beans",
      varietyWhiteSesame: "White Sesame",
      varietyBrownSesame: "Brown Sesame",
      sesameHsCode: "HS Code: 12074090",
      // Shared spec labels
      specMoistureLabel: "Moisture",
      specPurityLabel: "Purity",
      specPackagingLabel: "Packaging",
      specLoadingLabel: "Loading",
      specOriginLabel: "Origin",
      specSeasonLabel: "Season",
      spec20ftLabel: "20ft Container",
      spec40ftLabel: "40ft Container",
      specProcessingLabel: "Processing",
      // Pulses spec values
      specPulsesMoistureValue: "10–14% for pulses",
      specPulsesPurityValue: "98%+ after machine cleaning",
      specPulsesPackagingValue: "25 kg or 50 kg PP bags",
      specPulsesLoadingValue: "On-floor container loading",
      specPulsesOriginValue: "Key growing regions across Tanzania",
      specPulsesSeasonValue: "Varies by crop; main exports after harvest",
      specPulses20ftValue: "~16–17 MT depending on crop",
      specPulses40ftValue: "Up to 25 MT for many products",
      // Sesame spec values
      specSesamePurityValue: "98%+ after machine cleaning (Sortex available)",
      specSesameMoistureValue: "Below 8%",
      specSesameProcessingValue: "Machine-cleaned with Sortex for premium lots",
      specSesamePackagingValue: "25 kg or 50 kg PP bags",
      specSesameSeasonValue: "Main exports after harvest season",
      specSesame20ftValue: "~16–17 MT depending on product",
      specSesame40ftValue: "Up to 25 MT for many items",
    },
    liquorPage: {
      title: "Liquor & Alcohol",
      subtitle: "High-grade liquor imports from India and Mauritius for East African markets",
      intro:
        "Gamma International Tanzania Ltd specializes in importing high-grade and premium liquor from trusted distilleries in India and Mauritius, catering to bulk, wholesale, and retail demands across East Africa. Our portfolio includes premium whisky, rum, vodka, and gin in multiple bottle sizes to meet diverse market needs.",
      ctaTitle: "Expand your portfolio with our premium imported spirits today!",
      ctaBody:
        "Contact us for bulk orders, competitive pricing, and reliable delivery across East Africa",
      ctaLearnMore: "Learn more about our Liquor",
      // Section headings on liquor page UI
      productsTitle: "Product Range",
      spiritsTitle: "Spirits Available",
      sizesTitle: "Bottle Sizes",
      gradesTitle: "Liquor Grades",
      specsTitle: "Packaging & Logistics",
      // Packaging & logistics specs
      specPackagingLabel: "Packaging",
      specPackagingValue: "Secure corrugated cartons, 12 bottles per carton",
      spec20ftLabel: "20ft Container",
      spec20ftValue: "~13,200 bottles (750ml) or mixed sizes",
      specOriginLabel: "Origin",
      specOriginValue: "India and Mauritius",
      specQualityLabel: "Quality",
      specQualityValue: "Premium grade from certified distilleries",
      specDistributionLabel: "Distribution",
      specDistributionValue: "Bulk, Wholesale & Retail",
      // Markets
      marketsTitle: "Market Coverage",
      marketsIntro:
        "We serve the East African market with reliable liquor imports, ensuring consistent supply for:",
      marketWholesale: "Wholesale Distributors",
      marketRetail: "Retail Chains",
      marketHospitality: "Hospitality Sector",
      // Individual spirit names & sizes
      spiritWhisky: "Whisky",
      spiritRum: "Rum",
      spiritVodka: "Vodka",
      spiritGin: "Gin",
      size200ml: "200ml",
      size375ml: "375ml",
      size750ml: "750ml",
      gradeWhiskyHs: "Whisky: HS Code 22089099",
      gradeRumHs: "Rum: HS Code 22084090",
      gradeLiquorHs: "Liquor: HS Code 22087019",
    },
    coffeePage: {
      title: "Coffee (Arabica & Robusta)",
      subtitle:
        "Premium Tanzanian Arabica & Robusta coffee for roasters and distributors worldwide",
      tagline:
        "From Kilimanjaro highlands to global roasters  authentic Tanzanian coffee in every cup.",
      intro:
        "We export Tanzanian Arabica and Robusta coffee with rich aroma, uniform beans, and international certifications. Ideal for roasters and distributors looking for consistent flavor profiles and reliable supply.",
      specsTitle: "Key Specifications",
      specCropSeason: "Crop Season",
      specCropSeasonValue: "May  October",
      specPackaging: "Packaging",
      specPackagingValue: "60 kg jute bags with PE liner",
      spec20ft: "20ft Container",
      spec20ftValue: "9.8 MT (164 bags)",
      spec40ft: "40ft Container",
      spec40ftValue: "19.2 MT (320 bags)",
      specOrigin: "Origin",
      specOriginValue: "Kilimanjaro, Mbeya & Bukoba regions",
      gradesTitle: "Coffee Grades & Certifications",
      arabicaTitle: "Arabica Coffee Grades",
      arabicaHsCode: "HS Code: 09011100",
      arabicaGradeAAA: "AAA Grade",
      arabicaGradeAA: "AA Grade",
      arabicaGradeA: "A Grade",
      robustaTitle: "Robusta Coffee Grades",
      robustaHsCode: "HS Code: 09011200",
      robustaFaq12: "Robusta FAQ 12",
      robustaFaq14: "Robusta FAQ 14",
      robustaFaq16: "Robusta FAQ 16",
      robustaFaq18: "Robusta FAQ 18",
      certTitle: "Certifications & Compliance",
      certFairTrade: "Fairtrade compliant sourcing",
      certEu: "EU export compliant",
      certEcoCert: "EcoCert certified partners (where applicable)",
      certOrganic: "Organic options available on request",
      certIso: "ISO-aligned processing standards",
      ctaTitle: "Import Tanzania's finest coffee with confidence",
      ctaBody:
        "Contact us for long-term supply contracts, private label solutions, and customized blends for your market.",
      ctaWhy: "Discover why roasters trust Tanzanian coffee",
    },
    cocoaPage: {
      title: "Tanzanian Cocoa",
      subtitle: "Authentic Tanzanian cocoa beans for premium chocolate makers and bulk buyers worldwide.",
      tagline: "From Tanzania’s fertile cacao valleys to premium chocolatiers — authentic cocoa in every batch.",
      intro: "We export high-grade Tanzanian cocoa beans sourced from rich volcanic soils and ideal humid climates. Our cocoa is known for its deep chocolatey aroma, natural fruit notes, and clean fermentation. All products are processed under strict international compliance, ensuring quality and consistency for chocolate makers and bulk buyers worldwide.",
      specsTitle: "Key Specifications",
      specCropSeason: "Crop Season",
      specCropSeasonValue: "November – May",
      specPackaging: "Packaging",
      specPackagingValue: "50 kg jute bags with inner PE liner",
      spec20ft: "20ft Container",
      spec20ftValue: "12 MT (approx. 240 bags)",
      spec40ft: "40ft Container",
      spec40ftValue: "24 MT (approx. 480 bags)",
      specOrigin: "Origin",
      specOriginValue: "Mbeya • Morogoro • Kagera • Kigoma",
      gradesTitle: "Cocoa Grades & Semi-Processed Products",
      gradePremium: "Premium Grade (Well-fermented)",
      gradeStandard: "Standard Grade (Average-fermented)",
      gradeFaq: "FAQ Grade (Fair average quality)",
      hsCodeFermented: "HS Code: 18010000",
      hsCodeSemiProcessed: "HS Code (semi-processed): 18040000 / 18050000 / 18031000",
      certTitle: "Certifications & Compliance",
      certFairTrade: "Fairtrade compliant sourcing",
      certEu: "EU & US FDA export compliant",
      certEcoCert: "EcoCert & Rainforest Alliance partners (where applicable)",
      certOrganic: "Organic certification available upon request",
      certIso: "ISO-aligned processing & traceability standards",
      ctaTitle: "Import Tanzania’s finest cocoa with confidence",
      ctaBody: "Suitable for chocolate manufacturers, artisanal chocolatiers, food processors, ingredient distributors, and specialty cocoa traders. Contact us for samples, pricing, and long-term supply agreements.",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über uns",
      products: "Produkte",
      blog: "Blog",
      partner: "Partner werden",
      contact: "Kontakt",
      requestQuote: "Angebot anfordern",
    },
    hero: {
      title: "Kontinente durch Handel verbinden",
      subtitle:
        "Premium-Agrarrohstoffe aus Tansania für die ganze Welt. Ihr verlässlicher Partner mit über 90 Jahren gebündelter Erfahrung.",
      viewProducts: "Unsere Produkte ansehen",
      partnerWithUs: "Mit uns zusammenarbeiten",
      yearsExpertise: "90+ Jahre",
      combinedExpertise: "Gebündelte Erfahrung",
      countries: "5+ Länder",
      globalReach: "Weltweite Präsenz",
      supplyChain: "360° Lieferkette",
      chainManagement: "Supply-Chain-Management",
      logisticsTitle: "Pünktliche Lieferung",
      logisticsSubtitle: "Zuverlässige Logistik in jedem Schritt",
    },
    home: {
      productsTitle: "Unser Produktportfolio",
      productsSubtitle:
        "Aus den besten Anbaugebieten Tansanias – unsere Produkte erfüllen internationale Standards und Zertifizierungen.",
    },
    products: {
      cashew: "Rohe Cashew-Nüsse & Kerne",
      cashewDesc:
        "Von Tansanias besten Farmen zu weltweiten Verarbeitern – Premium-RCN und Kerne mit gleichbleibender Qualität.",
      cashewHighlight:
        "RCN-Ausbeute: 50–55 lbs | Nussanzahl: 160–180 | Cashewkerne: W180, W240, W320",
      coffee: "Kaffee",
      coffeeDesc:
        "Premium Arabica- und Robusta-Kaffee aus Tansania für Röster, die authentische afrikanische Qualität suchen.",
      coffeeHighlight:
        "Arabica-Grade: AAA, AA, A | Robusta-Grade: FAQ 12, 14, 16, 18",
      pulses: "Hülsenfrüchte & Saaten",
      pulsesDesc:
        "Kichererbsen, Pigeon Peas, grüne Mungbohnen und Sesamsaat direkt aus Tansanias fruchtbaren Regionen.",
      pulsesHighlight: "Reinheit: 98 %+ | Mehrere Sorten",
      liquor: "Spirituosen",
      liquorDesc:
        "Premium-Spirituosen von der Destillerie bis zur Distribution – maßgeschneidert für afrikanische Märkte.",
      liquorHighlight: "Bulk, Großhandel & Einzelhandel",
      imports: "Importe",
    },
    whyChooseUs: {
      title: "Warum Gamma International?",
      subtitle:
        "Die verlässliche Brücke zwischen afrikanischen Produzenten und globalen Käufern",
      benefit1Title: "360° Beschaffung & Logistik",
      benefit1Desc:
        "Komplettes Supply-Chain-Management von Tansania nach Asien, Europa und in den Nahen Osten.",
      benefit2Title: "Qualitätskontrolle vor Ort",
      benefit2Desc:
        "Strenge Inspektionen und Qualitätssicherung in jeder Produktionsphase.",
      benefit3Title: "Geprüftes Lieferantennetzwerk",
      benefit3Desc:
        "Langfristige Verträge mit vertrauenswürdigen Produzenten in ganz Tansania.",
      benefit4Title: "Exportdokumentation & Support",
      benefit4Desc:
        "Ein spezialisiertes Team, das alle Anforderungen an Nachweise und Zertifikate übernimmt.",
      benefit5Title: "Ethischer Handel",
      benefit5Desc:
        "Transparente Prozesse, die sowohl Landwirte als auch Käufer stärken.",
      benefit6Title: "Erfahrenes Team vor Ort",
      benefit6Desc:
        "Vom Feld bis zum Hafen – unser Team sorgt für reibungslose Abläufe.",
    },
    globalPresence: {
      title: "Unsere globale Präsenz",
      subtitle:
        "Nahtlose Aktivitäten über Kontinente hinweg mit strategischer Präsenz in wichtigen Wirtschaftszentren weltweit.",
      stat1Value: "90+",
      stat1Label: "Jahre Erfahrung",
      stat1Desc: "Internationales Team mit tiefem Branchenwissen.",
      stat2Value: "5+",
      stat2Label: "Bediente Länder",
      stat2Desc: "Export nach Asien, Europa, Nahost und darüber hinaus.",
      stat3Value: "7",
      stat3Label: "Produktkategorien",
      stat3Desc: "Vielfältiges Portfolio hochwertiger Rohstoffe.",
      stat4Value: "360°",
      stat4Label: "Lieferkette",
      stat4Desc: "Vollständig gemanagte Prozesse vom Feld bis zum Hafen.",
      locationsTitle: "Unsere Standorte",
      location1: "Dar Es Salaam, Tansania",
      location1Role: "Registrierter Sitz & Operations",
      location2: "Dubai, VAE",
      location2Role: "Strategischer globaler Hauptsitz",
      location3: "Ghana",
      location3Role: "Regionale Aktivitäten",
      location4: "Indien",
      location4Role: "Verarbeitungs- & Logistikhub",
      location5: "Deutschland",
      location5Role: "Europa-Geschäft",
      location6: "USA",
      location6Role: "Nordamerika-Basis",
      location7: "Mauritius",
      location7Role: "Spirituosenproduktion",
    },
    common: {
      learnMore: "Mehr erfahren",
      requestQuote: "Angebot anfordern",
      backToProducts: "Zurück zu den Produkten",
      // WhatsApp button
      whatsappAriaLabel: "Kontaktieren Sie uns über WhatsApp",
      whatsappTooltip: "Mit uns chatten",
      // About page
      aboutIntro:
        "Ein dynamisches Export-Import-Unternehmen mit Sitz in Dar Es Salaam, Tansania, das sich auf Beschaffung, Verarbeitung und Handel von hochwertigen Agrarrohstoffen und Industrieprodukten in Afrika und Asien spezialisiert hat.",
      aboutVisionTitle: "Unsere Vision",
      aboutVisionBody:
        "Afrikas vertrauenswürdigster Partner für Beschaffung und Export von Agrar- und Naturprodukten zu werden.",
      aboutMissionTitle: "Unsere Mission",
      aboutMissionBody:
        "Die landwirtschaftliche Stärke Afrikas durch Integrität, Innovation und starke Partnerschaften mit der Welt zu verbinden.",
      aboutStoryTitle: "Unsere Geschichte",
      aboutStoryP1:
        "Mit tief verwurzelten Partnerschaften in Masasi, Mtwara, Newala, Dodoma, Iringa und Arusha liefern wir gleichbleibende Qualität, transparente Handelspraktiken und hocheffiziente Logistik. Unsere Expertise verbindet Produzenten in Afrika mit Käufern weltweit durch starke Beschaffungsnetze, regelkonformen Export und professionelle Dokumentation.",
      aboutStoryP2:
        "Unser Ziel bei Gamma ist es, tansanische Landwirte zu stärken, internationalen Käufern Mehrwert zu bieten und exzellenten, nachhaltigen Handel unter einer vertrauenswürdigen Marke zu fördern.",
      aboutTrustedTitle: "Vertrauenswürdige Expertise",
      aboutTrustedBody:
        "Spezialisiert auf Agrarexporte, Spirituosen und Chemikalien mit einer ganzheitlichen 360°-Lieferkette.",
      aboutGlobalTitle: "Globale Reichweite",
      aboutGlobalBody:
        "Export in über 5 Länder mit FOB- und CNF-Versandbedingungen.",
      aboutPromiseTitle: "Unser Versprechen",
      aboutPromiseBody:
        "Ein Vermächtnis auf Basis von Vertrauen – mit Exzellenz in jeder einzelnen Lieferung.",
      // Footer
      footerDescription:
        "Kontinente durch Handel verbinden. Premium-Agrarrohstoffe aus Tansania für Märkte weltweit.",
      footerProductsTitle: "Produkte",
      footerCompanyTitle: "Unternehmen",
      footerContactTitle: "Kontakt",
      footerCopyright: "Alle Rechte vorbehalten.",
      // Contact page
      contactSubtitle:
        "Kontaktieren Sie uns noch heute und starten Sie Ihre Zusammenarbeit mit einem zuverlässigen Exportpartner aus Tansania.",
      contactFormTitle: "Senden Sie uns eine Nachricht",
      contactNameLabel: "Name *",
      contactEmailLabel: "E-Mail *",
      contactPhoneLabel: "Telefon *",
      contactPhonePlaceholder: "Telefonnummer",
      contactCompanyLabel: "Unternehmen",
      contactMessageLabel: "Nachricht *",
      contactSubmitSending: "Wird gesendet...",
      contactSubmitLabel: "Nachricht senden",
      contactHeadOfficeTitle: "Hauptsitz",
      contactHeadOfficeName: "Gamma International Tanzania Ltd",
      contactAddressLine1: "24. Etage, Rita Towers",
      contactAddressLine2: "Dar Es Salaam, Tansania",
      contactAddressPoBox: "Postfach 22469",
      contactPhoneTitle: "Telefon",
      contactEmailTitle: "E-Mail",
      contactMapTitle: "Unser Standort",
      contactMapCaption: "Rita Towers, City Center, Dar Es Salaam, Tansania",
      contactToastSuccessTitle: "Nachricht gesendet!",
      contactToastSuccessDescription:
        "Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden.",
      contactToastErrorTitle: "Fehler",
      contactToastErrorGeneric: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      // Products page
      productsPageTitle: "Unsere Produkte",
      productsPageSubtitle:
        "Entdecken Sie unser umfassendes Sortiment an hochwertigen Agrar-Exporten und Qualitätsimporten.",
      productsExportTitle: "Agrar-Exporte",
      productsExportBadge: "Tansania",
      productsImportTitle: "Premium-Importe",
      productsImportBadge: "International",
      productsCtaTitle: "Interessiert an unseren Produkten?",
      productsCtaBody:
        "Kontaktieren Sie uns für wettbewerbsfähige Preise, Großbestellungen und maßgeschneiderte Lösungen für Ihr Unternehmen.",
      productsCtaRequestQuote: "Angebot anfordern",
      productsCtaPartner: "Partner werden",
      // Partner page
      partnerSubtitle:
        "Gamma International Tanzania Ltd bildet eine zuverlässige Handelsbrücke zwischen Produzenten in Afrika und Käufern weltweit durch ein starkes Beschaffungs- und Exportnetzwerk.",
      partnerWhyTitle: "Warum mit Gamma zusammenarbeiten?",
      partnerBenefit1:
        "360°-Beschaffung & Logistik von Tansania nach Asien und in den Nahen Osten.",
      partnerBenefit2:
        "Qualitätskontrolle direkt vor Ort in jeder Phase.",
      partnerBenefit3:
        "Geprüfte Lieferantenbasis mit langfristigen Anbauverträgen.",
      partnerBenefit4:
        "Eigenes Team für Exportdokumentation und Logistik.",
      partnerBenefit5:
        "Ethische und transparente Handelspraktiken, von denen alle profitieren.",
      partnerBenefit6:
        "Erfahrenes Team von der Ernte bis zu den Hafenoperationen.",
      partnerProcessTitle: "Unser Partnerschaftsprozess",
      partnerProcessStep1Title: "Beschaffung",
      partnerProcessStep1Desc:
        "Direkte Zusammenarbeit mit verifizierten Landwirten und Produzenten in ganz Tansania.",
      partnerProcessStep2Title: "Qualitätskontrolle",
      partnerProcessStep2Desc:
        "Strenge Inspektionen und Tests, um höchste Standards zu gewährleisten.",
      partnerProcessStep3Title: "Dokumentation",
      partnerProcessStep3Desc:
        "Vollständige Exportdokumente, Zertifikate und Compliance-Unterstützung.",
      partnerProcessStep4Title: "Logistik",
      partnerProcessStep4Desc:
        "Effizientes Container-Loading, Versandkoordination und pünktliche Lieferung.",
      partnerProcessStep5Title: "Lieferung",
      partnerProcessStep5Desc:
        "Ihre Ware trifft termingerecht und gemäß den vereinbarten Spezifikationen ein.",
      partnerCtaTitle:
        "Starten Sie Ihre Partnerschaft – wir sind bereit!",
      partnerCtaBody:
        "Lassen Sie uns besprechen, wie wir eine langfristige, für beide Seiten vorteilhafte Zusammenarbeit aufbauen können.",
      partnerCtaButton: "Kontakt aufnehmen",
      // Call to action section on home page
      ctaTitle:
        "Qualität beziehen. Vertrauen aufbauen. Gemeinsam wachsen – werden Sie unser Partner!",
      ctaSubtitle:
        "Lassen Sie uns gemeinsam eine langfristige Handelspartnerschaft aufbauen, von der beide Kontinente profitieren.",
      ctaPrimaryButton: "Kontakt aufnehmen",
      ctaSecondaryButton: "Partnerschaftsmöglichkeiten entdecken",
      // Blog list page
      blogTitle: "Branchenanalysen & Handelsnews",
      blogSubtitle:
        "Bleiben Sie informiert über Tansanias Agrar-Exporte, Markttrends und Best Practices im internationalen Handel.",
      blogCategoryAll: "Alle Beiträge",
      blogCategoryIndustryInsights: "Branchenanalysen",
      blogCategoryProductSpotlight: "Produkt im Fokus",
      blogCategoryTradeInsights: "Handelseinblicke",
      blogCategoryCompanyNews: "Unternehmensnews",
      blogCategoryExportGuide: "Exportleitfaden",
      blogCategoryEducational: "Wissen",
      blogReadMore: "Weiterlesen",
      blogNoPosts: "Keine Beiträge in dieser Kategorie gefunden.",
      blogNewsletterPrompt:
        "Möchten Sie über die neuesten Branchennachrichten informiert bleiben?",
      blogNewsletterButton: "Für unseren Newsletter anmelden",
      // Blog post page
      blogPostNotFoundTitle: "Beitrag nicht gefunden",
      blogPostBackToBlog: "Zurück zum Blog",
      blogPostShare: "Teilen",
      blogPostRelatedArticles: "Ähnliche Artikel",
      blogPostContactUs: "Kontakt aufnehmen",
      blogPostViewProducts: "Unsere Produkte ansehen",
      // Not found page
      notFoundTitle: "404 Seite nicht gefunden",
      notFoundSubtitle: "Haben Sie diese Seite im Router vergessen?",
    },
    cashewPage: {
      backToProducts: "Zurück zu den Produkten",
      title: "Rohe Cashew-Nüsse & Cashewkerne",
      subtitle:
        "Von der Farm bis zur Verarbeitung – Tansanias beste Cashews für internationale Märkte.",
      rcnTitle: "Rohe Cashew-Nüsse (RCN)",
      rcnBody:
        "Wir beschaffen die besten tansanischen Roh-Cashewnüsse (RCN) mit hervorragender Nussanzahl, hohem Kernertrag und konstantem Feuchtigkeitsgehalt – bevorzugt von Verarbeitern in Indien und Vietnam.",
      rcnSpecsTitle: "Spezifikationen",
      rcnOutturn: "Ausbeute",
      rcnNutCount: "Nussanzahl",
      rcnMoisture: "Feuchtigkeit",
      rcnPackaging: "Verpackung",
      rcnOrigin: "Ursprung",
      rcnHsCode: "HS-Code",
      rcnContainer: "40ft HC-Container",
      rcnMoq: "Mindestbestellmenge (MOQ)",
      kernelsTitle: "Cashewkerne",
      kernelsBody:
        "Unsere Kerne werden sorgfältig verarbeitet und vakuumverpackt, um natürlichen Geschmack, Farbe und Knusprigkeit zu erhalten – bereit für den Einzelhandel oder den industriellen Einsatz weltweit.",
      kernelsSpecsTitle: "Spezifikationen",
      kernelsGrades: "Qualitäten",
      kernelsHsCode: "HS-Code",
      kernelsMoisture: "Feuchtigkeit",
      kernelsSeason: "Saison",
      kernelsPackaging: "Verpackung",
      kernelsAltPack: "Alternative Verpackung",
      kernels20ft: "20ft-Container",
      kernels40ft: "40ft-Container",
      ctaTitle:
        "Importieren Sie die besten Roh-Cashewnüsse (RCN) & Cashewkerne – mit Sicherheit, Zuverlässigkeit und Rückverfolgbarkeit!",
      ctaBody:
        "Kontaktieren Sie uns für Preise, Verfügbarkeit und individuelle Verpackungslösungen für Rohware und verarbeitete Kerne.",
      ctaRequestQuote: "Angebot anfordern",
      ctaLearnMore: "Mehr über unsere Cashews erfahren",
    },
    pulsesPage: {
      title: "Hülsenfrüchte & Saaten",
      subtitle:
        "Premium-Kichererbsen, Pigeon Peas, grüne Mungbohnen und Sesamsaat aus Tansanias fruchtbaren Regionen.",
      pulsesTitle: "Hülsenfrüchte",
      pulsesBody:
        "Tansanias fruchtbare Böden liefern Export-Hülsenfrüchte mit hohem Proteingehalt und vollem Geschmack. Wir liefern gereinigte und sortierte Ware, ideal für die Lebensmittelindustrie und Großabnehmer.",
      sesameTitle: "Sesamsaat",
      sesameBody:
        "Premium weiße und braune Sesamsamen, maschinell gereinigt und mit Sortex auf höchste Reinheit und Qualität gebracht – aus den besten Anbaugebieten im Süden Tansanias.",
      ctaTitle:
        "Arbeiten Sie mit Tansanias verlässlichstem Exporteur für Hülsenfrüchte und Sesam – mit ganzjähriger Verfügbarkeit!",
      ctaBody:
        "Kontaktieren Sie uns für wettbewerbsfähige Preise und Großbestellungen von Premium-Hülsenfrüchten und Sesamsaat aus Tansania.",
      ctaBlogButton: "Mehr über unsere Hülsenfrüchte & Saaten erfahren",
      // Überschriften & Badges
      varietiesTitle: "Verfügbare Sorten",
      specTitle: "Spezifikationen",
      varietyChickpeas: "Kichererbsen",
      varietyPigeonPeas: "Pigeon Peas",
      varietyKidneyBeans: "Kidneybohnen",
      varietyGreenMungBeans: "Grüne Mungbohnen",
      varietyWhiteSesame: "Weißer Sesam",
      varietyBrownSesame: "Brauner Sesam",
      sesameHsCode: "HS-Code: 12074090",
      // Gemeinsame Spezifikations-Labels
      specMoistureLabel: "Feuchtigkeit",
      specPurityLabel: "Reinheit",
      specPackagingLabel: "Verpackung",
      specLoadingLabel: "Verladung",
      specOriginLabel: "Ursprung",
      specSeasonLabel: "Saison",
      spec20ftLabel: "20ft-Container",
      spec40ftLabel: "40ft-Container",
      specProcessingLabel: "Aufbereitung",
      // Werte für Hülsenfrüchte
      specPulsesMoistureValue: "10–14 % für Hülsenfrüchte",
      specPulsesPurityValue: "98 %+ nach maschineller Reinigung",
      specPulsesPackagingValue: "25-kg- oder 50-kg-PP-Säcke",
      specPulsesLoadingValue: "Verladung lose im Containerboden",
      specPulsesOriginValue: "Wichtige Anbaugebiete in ganz Tansania",
      specPulsesSeasonValue: "Je nach Kultur; Hauptexporte nach der Ernte",
      specPulses20ftValue: "ca. 16–17 MT je nach Produkt",
      specPulses40ftValue: "bis zu 25 MT für viele Produkte",
      // Werte für Sesam
      specSesamePurityValue: "98 %+ nach maschineller Reinigung (Sortex verfügbar)",
      specSesameMoistureValue: "Unter 8 %",
      specSesameProcessingValue: "Maschinell gereinigt, mit Sortex für Premium-Chargen",
      specSesamePackagingValue: "25-kg- oder 50-kg-PP-Säcke",
      specSesameSeasonValue: "Hauptexporte nach der Erntesaison",
      specSesame20ftValue: "ca. 16–17 MT je nach Produkt",
      specSesame40ftValue: "bis zu 25 MT für viele Produkte",
    },
    liquorPage: {
      title: "Spirituosen & Alkohol",
      subtitle:
        "Import von hochwertigen Spirituosen aus Indien und Mauritius für die Märkte in Ostafrika.",
      intro:
        "Gamma International Tanzania Ltd ist auf den Import hochwertiger Spirituosen von vertrauenswürdigen Destillerien in Indien und Mauritius spezialisiert und bedient Bulk-, Großhandels- und Einzelhandelskunden in Ostafrika. Unser Portfolio umfasst Whisky, Rum, Wodka und Gin in verschiedenen Flaschengrößen.",
      ctaTitle: "Erweitern Sie Ihr Sortiment mit unseren Premium-Importspirituosen!",
      ctaBody:
        "Kontaktieren Sie uns für Großbestellungen, attraktive Preise und zuverlässige Lieferung in ganz Ostafrika.",
      ctaLearnMore: "Mehr über unsere Spirituosen erfahren",
      // Abschnittsüberschriften
      productsTitle: "Produktsortiment",
      spiritsTitle: "Verfügbare Spirituosen",
      sizesTitle: "Flaschengrößen",
      gradesTitle: "Qualitäten & Zollcodes",
      specsTitle: "Verpackung & Logistik",
      // Verpackung & Logistik
      specPackagingLabel: "Verpackung",
      specPackagingValue: "Stabile Wellkartons, 12 Flaschen pro Karton",
      spec20ftLabel: "20ft-Container",
      spec20ftValue: "ca. 13.200 Flaschen (750 ml) oder gemischte Größen",
      specOriginLabel: "Ursprung",
      specOriginValue: "Indien und Mauritius",
      specQualityLabel: "Qualität",
      specQualityValue: "Premiumqualität aus zertifizierten Destillerien",
      specDistributionLabel: "Vertrieb",
      specDistributionValue: "Bulk, Großhandel & Einzelhandel",
      // Märkte
      marketsTitle: "Marktabdeckung",
      marketsIntro:
        "Wir beliefern den ostafrikanischen Markt mit zuverlässigen Spirituosenimporten und sichern kontinuierliche Versorgung für:",
      marketWholesale: "Großhändler",
      marketRetail: "Einzelhandelsketten",
      marketHospitality: "Hotel- und Gastronomiesektor",
      // Spirituosennamen & Größen
      spiritWhisky: "Whisky",
      spiritRum: "Rum",
      spiritVodka: "Wodka",
      spiritGin: "Gin",
      size200ml: "200 ml",
      size375ml: "375 ml",
      size750ml: "750 ml",
      gradeWhiskyHs: "Whisky: HS-Code 22089099",
      gradeRumHs: "Rum: HS-Code 22084090",
      gradeLiquorHs: "Spirituosen: HS-Code 22087019",
    },
    coffeePage: {
      title: "Kaffee (Arabica & Robusta)",
      subtitle:
        "Premium tansanischer Arabica- und Robusta-Kaffee für Röster und Händler weltweit.",
      tagline:
        "Von den Hängen des Kilimandscharo zu Röstereien weltweit – authentischer tansanischer Kaffee in jeder Tasse.",
      intro:
        "Wir exportieren tansanischen Arabica- und Robusta-Kaffee mit intensivem Aroma, gleichmäßiger Bohnenqualität und internationalen Zertifizierungen. Ideal für Spezialitätenröster und Volumenabnehmer, die konstante Geschmacksprofile und zuverlässige Lieferketten benötigen.",
      specsTitle: "Wichtige Spezifikationen",
      specCropSeason: "Erntesaison",
      specCropSeasonValue: "Mai – Oktober",
      specPackaging: "Verpackung",
      specPackagingValue: "60-kg-Jutesäcke mit PE-Innenhülle",
      spec20ft: "20ft-Container",
      spec20ftValue: "9,8 MT (164 Säcke)",
      spec40ft: "40ft-Container",
      spec40ftValue: "19,2 MT (320 Säcke)",
      specOrigin: "Ursprung",
      specOriginValue: "Regionen Kilimandscharo, Mbeya & Bukoba",
      gradesTitle: "Kaffeequalitäten & Zertifizierungen",
      arabicaTitle: "Arabica-Kaffeequalitäten",
      arabicaHsCode: "HS-Code: 09011100",
      arabicaGradeAAA: "Grad AAA",
      arabicaGradeAA: "Grad AA",
      arabicaGradeA: "Grad A",
      robustaTitle: "Robusta-Kaffeequalitäten",
      robustaHsCode: "HS-Code: 09011200",
      robustaFaq12: "Robusta FAQ 12",
      robustaFaq14: "Robusta FAQ 14",
      robustaFaq16: "Robusta FAQ 16",
      robustaFaq18: "Robusta FAQ 18",
      certTitle: "Zertifizierungen & Compliance",
      certFairTrade: "Fairtrade-konforme Beschaffung",
      certEu: "EU-exportkonform",
      certEcoCert: "EcoCert-konforme Partner (wo zutreffend)",
      certOrganic: "Bio-Optionen auf Anfrage verfügbar",
      certIso: "Verarbeitung nach ISO-orientierten Standards",
      ctaTitle: "Importieren Sie Tansanias besten Kaffee mit höchster Sicherheit",
      ctaBody:
        "Kontaktieren Sie uns für langfristige Lieferverträge, Eigenmarkenlösungen und maßgeschneiderte Mischungen für Ihren Markt.",
      ctaWhy: "Erfahren Sie, warum Röster auf tansanischen Kaffee setzen",
    },
  } as Translations,
  sw: {
    nav: {
      home: "Nyumbani",
      about: "Kuhusu Sisi",
      products: "Bidhaa",
      blog: "Blogu",
      partner: "Shirikiana Nasi",
      contact: "Wasiliana",
      requestQuote: "Omba Bei",
    },
    hero: {
      title: "Kuunganisha Bara kwa Biashara",
      subtitle: "Bidhaa bora za kilimo kutoka Tanzania kwa ulimwengu. Mshirika wako wa kuaminika katika uchaguzi bora na uzoefu wa miaka 90+.",
      viewProducts: "Angalia Bidhaa Zetu",
      partnerWithUs: "Shirikiana Nasi",
      yearsExpertise: "Miaka 90+",
      combinedExpertise: "Uzoefu Uliochanganywa",
      countries: "Nchi 5+",
      globalReach: "Ufikio wa Kimataifa",
      supplyChain: "Usambazaji 360°",
      chainManagement: "Usimamizi wa Mnyororo",
      logisticsTitle: "Uwasilishaji kwa wakati",
      logisticsSubtitle: "Usafirishaji wa kuaminika kila hatua",
    },
    home: {
      productsTitle: "Bidhaa Zetu Bora",
      productsSubtitle: "Zinazotoka maeneo bora ya Tanzania, bidhaa zetu zinakidhi viwango vya kimataifa na vyeti",
    },
    products: {
      cashew: "Korosho Ghafi na Kiini cha Korosho",
      cashewDesc: "Kutoka mashamba bora ya Tanzania hadi wasindikaji wa kimataifa – korosho ghafi na zilizochakatwa zenye ubora wa kuaminika.",
      cashewHighlight: "RCN Out Turn: 50-55Lbs | Idadi ya korosho: 160 - 180 | Korosho zilizochakatwa: W180, W240, W320.",
      coffee: "Kahawa",
      coffeeDesc: "Arabica na Robusta ya Tanzania yenye harufu nzuri na maharagwe sawa.",
      coffeeHighlight: "Daraja AAA, AA, A | FAQ 12-18",
      pulses: "Kunde na Mbegu",
      pulsesDesc: "Kunde, mbaazi, njegere za kijani, na mbegu bora za ufuta.",
      pulsesHighlight: "Usafi: 98%+ | Aina Nyingi",
      liquor: "Pombe Bora",
      liquorDesc: "Wiski, ramu, vodka na jini wa kiwango cha juu kutoka India na Mauritius.",
      liquorHighlight: "Wingi, Jumla na Rejareja",
      imports: "Malighafi",
    },
    whyChooseUs: {
      title: "Kwa Nini Uchague Gamma International",
      subtitle: "Daraja la kuaminika kati ya wazalishaji wa Afrika na wanunuzi wa kimataifa",
      benefit1Title: "Uchaguzi na Usafirishaji 360°",
      benefit1Desc: "Usimamizi kamili wa mnyororo wa usambazaji kutoka Tanzania hadi Asia, Ulaya na Mashariki ya Kati",
      benefit2Title: "Udhibiti wa Ubora Kwenye Ardhi",
      benefit2Desc: "Ukaguzi mkali na uhakikisho wa ubora katika kila hatua ya uzalishaji",
      benefit3Title: "Mtandao wa Wasambazaji Uliothibitishwa",
      benefit3Desc: "Mikataba ya muda mrefu ya kilimo na wazalishaji waaminifu kote Tanzania",
      benefit4Title: "Msaada wa Nyaraka za Usafirishaji",
      benefit4Desc: "Timu iliyojitolea kushughulikia mahitaji yote ya kufuata sheria na vyeti",
      benefit5Title: "Desturi za Biashara za Kimaadili",
      benefit5Desc: "Sera wazi zinazowapa nguvu wakulima na kuwafaidisha wanunuzi",
      benefit6Title: "Timu ya Uzoefu wa Ardhi",
      benefit6Desc: "Kutoka vichaka hadi shughuli za bandari, timu yetu inahakikisha ubora",
    },
    globalPresence: {
      title: "Uwepo Wetu wa Kimataifa",
      subtitle: "Kufanya kazi bila kikwazo katika mabara yenye uwepo wa kimkakati katika vitovu muhimu vya kiuchumi duniani kote",
      stat1Value: "90+",
      stat1Label: "Miaka ya Uzoefu Uliochanganywa",
      stat1Desc: "Timu ya kimataifa yenye maarifa ya kina ya tasnia",
      stat2Value: "5+",
      stat2Label: "Nchi Zinazohudumiwa",
      stat2Desc: "Usafirishaji hadi Asia, Ulaya, Mashariki ya Kati, na zaidi",
      stat3Value: "7",
      stat3Label: "Aina za Bidhaa",
      stat3Desc: "Mkusanyiko tofauti wa bidhaa bora",
      stat4Value: "360°",
      stat4Label: "Mnyororo wa Usambazaji",
      stat4Desc: "Shamba hadi shughuli za bandari zinasimamia kikamili",
      locationsTitle: "Maeneo Yetu",
      location1: "Dar Es Salaam, Tanzania",
      location1Role: "Ofisi Iliyosajiliwa na Shughuli",
      location2: "Dubai, UAE",
      location2Role: "Makao Makuu ya Kimkakati ya Kimataifa",
      location3: "Ghana",
      location3Role: "Shughuli za Kikanda",
      location4: "India",
      location4Role: "Kituo cha Usindikaji na Usafirishaji",
      location5: "Ujerumani",
      location5Role: "Shughuli za Ulaya",
      location6: "Marekani",
      location6Role: "Msingi wa Amerika Kaskazini",
      location7: "Mauritius",
      location7Role: "Kituo cha Uzalishaji wa Pombe",
    },
    common: {
      learnMore: "Jifunze Zaidi",
      requestQuote: "Omba Bei",
      backToProducts: "Rudi kwa Bidhaa",
      // About page (Swahili UI text, marketing copy can be refined later)
      aboutIntro:
        "Kampuni yenye kasi ya uuzaji na uagizaji mzigo yenye makao yake Dar Es Salaam, Tanzania, inayojihusisha na ununuzi, uchakataji na biashara ya bidhaa bora za kilimo na viwandani barani Afrika na Asia.",
      aboutVisionTitle: "Dira Yetu",
      aboutVisionBody:
        "Kuwa mshirika wa kuaminika zaidi barani Afrika katika usambazaji na usafirishaji wa bidhaa za kilimo na mazao ya asili.",
      aboutMissionTitle: "Dhamira Yetu",
      aboutMissionBody:
        "Kuunganisha nguvu ya kilimo ya Afrika na dunia kupitia uadilifu, ubunifu na ushirikiano wenye matokeo.",
      aboutStoryTitle: "Hadithi Yetu",
      aboutStoryP1:
        "Kupitia ushirikiano wa muda mrefu katika Masasi, Mtwara, Newala, Dodoma, Iringa na Arusha, tunawasilisha ubora wa kuaminika, biashara yenye uwazi na ufanisi bora wa usafirishaji.",
      aboutStoryP2:
        "Lengo letu ni kuwawezesha wakulima wa Tanzania, kuwainua wanunuzi wa kimataifa na kukuza biashara endelevu chini ya chapa moja inayoaminika.",
      aboutTrustedTitle: "Utaalamu Unaotegemewa",
      aboutTrustedBody:
        "Tuna utaalamu katika mauzo ya mazao ya kilimo, pombe na kemikali kwa mnyororo wa usambazaji wa 360°.",
      aboutGlobalTitle: "Ufikio wa Kimataifa",
      aboutGlobalBody: "Usafirishaji kwenda zaidi ya nchi 5 kwa kutumia njia za FOB na CNF.",
      aboutPromiseTitle: "Ahadi Yetu",
      aboutPromiseBody:
        "Urithi uliojengwa katika uaminifu usioyumba, tukitoa ubora katika kila shehena.",
      // Footer
      footerDescription:
        "Kuunganisha mabara kupitia biashara. Bidhaa bora za kilimo kutoka Tanzania kwenda duniani kote.",
      footerProductsTitle: "Bidhaa",
      footerCompanyTitle: "Kampuni",
      footerContactTitle: "Wasiliana Nasi",
      footerCopyright: "Haki zote zimehifadhiwa.",
      // Contact page
      contactSubtitle:
        "Wasiliana Nasi Leo uanze safari yako na mshirika wa kuaminika wa usafirishaji wa Tanzania",
      contactFormTitle: "Tutumie Ujumbe",
      contactNameLabel: "Jina *",
      contactEmailLabel: "Barua pepe *",
      contactPhoneLabel: "Simu *",
      contactPhonePlaceholder: "Namba ya simu",
      contactCompanyLabel: "Kampuni",
      contactMessageLabel: "Ujumbe *",
      contactSubmitSending: "Inatuma...",
      contactSubmitLabel: "Tuma Ujumbe",
      contactHeadOfficeTitle: "Ofisi Kuu",
      contactHeadOfficeName: "Gamma International Tanzania Ltd",
      contactAddressLine1: "Ghorofa ya 24, Rita Towers",
      contactAddressLine2: "Dar Es Salaam, Tanzania",
      contactAddressPoBox: "S. L. P 22469",
      contactPhoneTitle: "Simu",
      contactEmailTitle: "Barua pepe",
      contactMapTitle: "Eneo Letu",
      contactMapCaption: "Rita Towers, City Center, Dar Es Salaam, Tanzania",
      contactToastSuccessTitle: "Ujumbe Umetumwa!",
      contactToastSuccessDescription:
        "Asante kwa maombi yako. Tutakujibu ndani ya saa 24.",
      contactToastErrorTitle: "Hitilafu",
      contactToastErrorGeneric: "Imeshindikana kutuma ujumbe. Tafadhali jaribu tena.",
      // Products page
      productsPageTitle: "Bidhaa Zetu",
      productsPageSubtitle:
        "Gundua wigo mpana wa bidhaa bora za kilimo za kusafirisha nje na uagizaji wa ubora",
      productsExportTitle: "Bidhaa za Kilimo kwa Usafirishaji",
      productsExportBadge: "Tanzania",
      productsImportTitle: "Bidhaa za Kuagiza",
      productsImportBadge: "Kimataifa",
      productsCtaTitle: "Unavutiwa na Bidhaa Zetu?",
      productsCtaBody:
        "Wasiliana nasi kwa bei shindani, oda za wingi na suluhisho maalum kwa mahitaji ya biashara yako",
      productsCtaRequestQuote: "Omba Bei",
      productsCtaPartner: "Shirikiana Nasi",
      // Partner page
      partnerSubtitle:
        "Gamma International Tanzania Ltd hujenga daraja la biashara kati ya wazalishaji wa Afrika na wanunuzi wa kimataifa kupitia mtandao wetu imara wa usambazaji na usafirishaji.",
      partnerWhyTitle: "Kwa Nini Ushirikiane na Gamma?",
      partnerBenefit1:
        "Upatikanaji na usafirishaji wa 360° kutoka Tanzania hadi Asia na Mashariki ya Kati",
      partnerBenefit2:
        "Ukaguzi wa ubora moja kwa moja kwenye maeneo ya uzalishaji",
      partnerBenefit3:
        "Mtandao uliothibitishwa wa wasambazaji wenye mikataba ya muda mrefu",
      partnerBenefit4:
        "Timu maalum ya nyaraka za usafirishaji na vifaa",
      partnerBenefit5:
        "Biashara ya haki na yenye uwazi inayowanufaisha wahusika wote",
      partnerBenefit6:
        "Timu yenye uzoefu mkubwa kutoka shambani hadi bandari",
      partnerProcessTitle: "Mchakato Wetu wa Ushirikiano",
      partnerProcessStep1Title: "Upatikanaji",
      partnerProcessStep1Desc:
        "Ushirikiano wa moja kwa moja na wakulima na wazalishaji waliothibitishwa nchini Tanzania",
      partnerProcessStep2Title: "Udhibiti wa Ubora",
      partnerProcessStep2Desc:
        "Ukaguzi na vipimo vya kina ili kuhakikisha viwango vya juu",
      partnerProcessStep3Title: "Nyaraka",
      partnerProcessStep3Desc:
        "Nyaraka kamili za usafirishaji, vyeti na utiifu wa kanuni",
      partnerProcessStep4Title: "Usafirishaji",
      partnerProcessStep4Desc:
        "Upakiaji wa makontena, uratibu wa meli na uwasilishaji kwa wakati",
      partnerProcessStep5Title: "Uwasilishaji",
      partnerProcessStep5Desc:
        "Bidhaa zako zinawasili kwa wakati na kwa ubora uliokubaliwa",
      partnerCtaTitle:
        "Anza Ushirikiano Wako – Tuko Tayari Wakati Wowote!",
      partnerCtaBody:
        "Tujadili jinsi tunavyoweza kujenga ushirikiano wa muda mrefu wenye manufaa kwa pande zote",
      partnerCtaButton: "Wasiliana Nasi",
      // Call to action section on home page
      ctaTitle:
        "Pata Ubora. Jenga Uaminifu. Kua Pamoja - Shirikiana Nasi Sasa!",
      ctaSubtitle:
        "Tushirikiane kujenga ushirikiano wa biashara wa muda mrefu unaonufaisha bara zote",
      ctaPrimaryButton: "Wasiliana Nasi",
      ctaSecondaryButton: "Gundua Fursa za Ushirikiano Sasa",
      // Blog list page
      blogTitle: "Taarifa za Sekta na Habari za Biashara",
      blogSubtitle:
        "Endelea kufahamu kuhusu mauzo ya bidhaa za kilimo za Tanzania, mienendo ya soko na mbinu bora za biashara ya kimataifa",
      blogCategoryAll: "Machapisho Yote",
      blogCategoryIndustryInsights: "Mtazamo wa Sekta",
      blogCategoryProductSpotlight: "Bidhaa kwa Undani",
      blogCategoryTradeInsights: "Taarifa za Biashara",
      blogCategoryCompanyNews: "Habari za Kampuni",
      blogCategoryExportGuide: "Mwongozo wa Usafirishaji",
      blogCategoryEducational: "Elimu",
      blogReadMore: "Soma Zaidi",
      blogNoPosts: "Hakuna makala kwenye kitengo hiki kwa sasa.",
      blogNewsletterPrompt:
        "Ungependa kuendelea kupata taarifa mpya za sekta?",
      blogNewsletterButton: "Jiandikishe kwa Jarida Letu",
      // Blog post page
      blogPostNotFoundTitle: "Makala Haijapatikana",
      blogPostBackToBlog: "Rudi kwenye Blogu",
      blogPostShare: "Shiriki",
      blogPostRelatedArticles: "Makala Zinazohusiana",
      blogPostContactUs: "Wasiliana Nasi",
      blogPostViewProducts: "Tazama Bidhaa Zetu",
      // Not found page
      notFoundTitle: "Ukurasa Haujapatikana (404)",
      notFoundSubtitle: "Je, umesahau kuongeza ukurasa huu kwenye mfumo wa njia (router)?",
    },
    cashewPage: {
      backToProducts: "Rudi kwa Bidhaa",
      title: "Korosho Ghafi na Korosho Zilizokaangwa",
      subtitle:
        "Kutoka shamba hadi kiwandani – korosho bora za Tanzania kwa masoko ya kimataifa",
      rcnTitle: "Korosho Ghafi (RCN)",
      rcnBody:
        "Tunapata korosho ghafi bora za Tanzania zenye idadi nzuri ya kokwa, kiwango kikubwa cha kupata kiini na unyevu uliodhibitiwa – zinazopendwa na wasindikaji wa India na Vietnam.",
      rcnSpecsTitle: "Vipimo",
      rcnOutturn: "Outturn",
      rcnNutCount: "Idadi ya Korosho",
      rcnMoisture: "Unyevu",
      rcnPackaging: "Ufungaji",
      rcnOrigin: "Asili",
      rcnHsCode: "HS Code",
      rcnContainer: "Kontena la futi 40 HC",
      rcnMoq: "Kiwango cha chini cha kuagiza (MOQ)",
      kernelsTitle: "Kokwa za Korosho",
      kernelsBody:
        "Kokwa zetu huchakatwa kwa uangalifu na kufungwa kwa vakuu ili kuhifadhi ladha, rangi na ubichi wa asili – tayari kwa soko la rejareja au matumizi ya viwandani duniani.",
      kernelsSpecsTitle: "Vipimo",
      kernelsGrades: "Viwango (Grades)",
      kernelsHsCode: "HS Code",
      kernelsMoisture: "Unyevu",
      kernelsSeason: "Msimu",
      kernelsPackaging: "Ufungaji",
      kernelsAltPack: "Ufungaji Mbadala",
      kernels20ft: "Kontena la futi 20",
      kernels40ft: "Kontena la futi 40",
      ctaTitle:
        "Agiza korosho ghafi na kokwa za korosho bora kwa ujasiri, uaminifu na ufuatiliaji kamili!",
      ctaBody:
        "Wasiliana nasi kwa maelezo ya bei, upatikanaji na chaguo maalum la ufungaji kwa korosho ghafi na zilizochakatwa.",
      ctaRequestQuote: "Omba Bei",
      ctaLearnMore: "Jifunze Zaidi Kuhusu Korosho Zetu",
    },
    pulsesPage: {
      title: "Kunde na Mbegu",
      subtitle:
        "Kunde bora (njojo, mbaazi, njegere za kijani) na mbegu za ufuta kutoka maeneo yenye rutuba Tanzania",
      pulsesTitle: "Kunde",
      pulsesBody:
        "Udongo wenye rutuba wa Tanzania huzalisha kunde za kiwango cha juu zenye protini na ladha nzuri. Tunatoa bidhaa zilizochungwa na kupangwa kwa ajili ya viwanda vya chakula na wanunuzi wa mzigo duniani.",
      sesameTitle: "Mbegu za Ufuta",
      sesameBody:
        "Ufuta mweupe na wa kahawia wa ubora wa juu, uliosafishwa kwa mashine na Sortex kwa usafi na viwango bora. Unatoka katika maeneo makuu ya uzalishaji kusini mwa Tanzania.",
      ctaTitle:
        "Shirikiana na mtoa huduma anayeaminika wa kunde na ufuta kutoka Tanzania kwa usafirishaji wa mwaka mzima!",
      ctaBody:
        "Wasiliana nasi kwa bei shindani na oda za mzigo wa kunde na mbegu za ufuta kutoka Tanzania.",
      ctaBlogButton: "Jifunze zaidi kuhusu Kunde na Mbegu zetu",
      // Headings used on pulses page UI
      varietiesTitle: "Aina Zinazopatikana",
      specTitle: "Vipimo",
      varietyChickpeas: "Njojo (Chickpeas)",
      varietyPigeonPeas: "Mbaazi",
      varietyKidneyBeans: "Maharagwe ya figo",
      varietyGreenMung: "Njegere za kijani",
      varietyWhiteSesame: "Ufuta mweupe",
      varietyBrownSesame: "Ufuta wa kahawia",
    },
    liquorPage: {
      title: "Pombe na Vinywaji Vikali",
      subtitle:
        "Uagizaji wa pombe za kiwango cha juu kutoka India na Mauritius kwa soko la Afrika Mashariki",
      intro:
        "Gamma International Tanzania Ltd inajihusisha na uagizaji wa pombe za kiwango cha juu kutoka viwanda vinavyoaminika India na Mauritius, kwa mahitaji ya mzigo, jumla na rejareja katika Afrika Mashariki. Tunatoa whisky, rum, vodka na gin katika ukubwa tofauti wa chupa ili kukidhi mahitaji ya masoko mbalimbali.",
      ctaTitle: "Ongeza vinywaji bora kwenye orodha yako leo!",
      ctaBody:
        "Wasiliana nasi kwa oda za mzigo, bei shindani na usafirishaji wa kuaminika kote Afrika Mashariki.",
      ctaLearnMore: "Jifunze zaidi kuhusu Pombe zetu",
      // Section headings on liquor page UI
      productsTitle: "Aina ya Bidhaa",
      spiritsTitle: "Vinywaji Vinavyopatikana",
      sizesTitle: "Ukubwa wa Chupa",
      gradesTitle: "Viwango vya Pombe",
      specsTitle: "Ufungaji na Usafirishaji",
      // Packaging & logistics specs
      specPackagingLabel: "Ufungaji",
      specPackagingValue: "Maboksi imara, chupa 12 kwa boksi",
      spec20ftLabel: "Kontena la futi 20",
      spec20ftValue: "~Chupa 13,200 (750ml) au mchanganyiko wa ukubwa tofauti",
      specOriginLabel: "Asili",
      specOriginValue: "India na Mauritius",
      specQualityLabel: "Ubora",
      specQualityValue: "Daraja la juu kutoka viwanda vilivyothibitishwa",
      specDistributionLabel: "Usambazaji",
      specDistributionValue: "Mzigo, Jumla na Rejareja",
      // Markets
      marketsTitle: "Masoko Tunayohudumia",
      marketsIntro:
        "Tunauhudia soko la Afrika Mashariki kwa uingizaji wa pombe wa kuaminika, tukihakikisha upatikanaji endelevu kwa:",
      marketWholesale: "Wasambazaji wa jumla",
      marketRetail: "Minyororo ya rejareja",
      marketHospitality: "Sekta ya mahoteli na burudani",
      // Individual spirit names
      spiritWhisky: "Whisky",
      spiritRum: "Rum",
      spiritVodka: "Vodka",
      spiritGin: "Gin",
    },
    coffeePage: {
      title: "Kahawa (Arabica & Robusta)",
      subtitle:
        "Kahawa bora ya Tanzania ya Arabica na Robusta kwa waoka kahawa na wasambazaji duniani",
      tagline:
        "Kutoka vilima vya Kilimanjaro hadi kwa wanywaji kahawa duniani – kahawa halisi ya Tanzania katika kila kikombe.",
      intro:
        "Tanzania ina udongo wa volkano na maeneo ya juu yanayofaa kwa uzalishaji wa kahawa ya ubora wa juu. Tunapeleka kahawa ya Arabica yenye ladha ang'avu na Robusta yenye mwili mzito, ikifaa kwa espresso, kahawa ya kusaga na utengenezaji wa instant.",
      specsTitle: "Vipimo Muhimu",
      specCropSeason: "Msimu wa Mavuno",
      specCropSeasonValue: "Mei – Oktoba",
      specPackaging: "Ufungaji",
      specPackagingValue: "Mabegi ya jute ya kilo 60 yenye mfuko wa ndani wa PE",
      spec20ft: "Kontena la futi 20",
      spec20ftValue: "Tani 9.8 (mabegi 164)",
      spec40ft: "Kontena la futi 40",
      spec40ftValue: "Tani 19.2 (mabegi 320)",
      specOrigin: "Asili",
      specOriginValue: "Maeneo ya Kilimanjaro, Mbeya na Bukoba",
      gradesTitle: "Viwango vya Kahawa na Vyeti",
      arabicaTitle: "Viwango vya Kahawa ya Arabica",
      arabicaHsCode: "HS Code: 09011100",
      arabicaGradeAAA: "Daraja AAA",
      arabicaGradeAA: "Daraja AA",
      arabicaGradeA: "Daraja A",
      robustaTitle: "Viwango vya Kahawa ya Robusta",
      robustaHsCode: "HS Code: 09011200",
      robustaFaq12: "Robusta FAQ 12",
      robustaFaq14: "Robusta FAQ 14",
      robustaFaq16: "Robusta FAQ 16",
      robustaFaq18: "Robusta FAQ 18",
      certTitle: "Vyeti na Uzingatiaji",
      certFairTrade: "Upatikanaji unaozingatia Fairtrade",
      certEu: "Uzingatiaji wa viwango vya mauzo ya EU",
      certEcoCert: "Washirika wanaoendana na EcoCert (kwa baadhi ya shehena)",
      certOrganic: "Chaguo la kahawa ya Organic linapatikana kwa maombi",
      certIso: "Viwango vya uchakataji vinavyoendana na ISO",
      ctaTitle: "Agiza kahawa bora ya Tanzania kwa uaminifu",
      ctaBody:
        "Wasiliana nasi kwa mikataba ya muda mrefu ya usambazaji, bidhaa za lebo binafsi na mchanganyiko maalum kwa soko lako.",
      ctaWhy: "Gundua kwa nini waoka kahawa huamini kahawa ya Tanzania",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      products: "Produits",
      blog: "Blog",
      partner: "Partenariat",
      contact: "Contact",
      requestQuote: "Demander un Devis",
    },
    hero: {
      title: "Connecter les Continents par le Commerce",
      subtitle: "Produits agricoles premium de Tanzanie vers le monde. Votre partenaire de confiance en approvisionnement d'excellence avec plus de 90 ans d'expertise combinée.",
      viewProducts: "Voir Nos Produits",
      partnerWithUs: "Devenez Partenaire",
      yearsExpertise: "90+ Ans",
      combinedExpertise: "Expertise Combinée",
      countries: "5+ Pays",
      globalReach: "Portée Mondiale",
      supplyChain: "Chaîne 360°",
      chainManagement: "Gestion de la Chaîne",
      logisticsTitle: "Livraison à temps",
      logisticsSubtitle: "Logistique fiable à chaque étape",
    },
    home: {
      productsTitle: "Nos Produits Premium",
      productsSubtitle: "Provenant des meilleures régions de Tanzanie, nos produits répondent aux normes et certifications internationales",
    },
    products: {
      cashew: "Noix de Cajou Brutes et Amandes",
      cashewDesc: "Des meilleures fermes de Tanzanie aux transformateurs mondiaux – RCN et amandes premium avec une qualité constante sur laquelle vous pouvez compter.",
      cashewHighlight:
        "Rendement RCN: 50–55 lbs | Nombre de noix: 160–180 | Amandes de cajou: W180, W240, W320",
      coffee: "Café",
      coffeeDesc: "Arabica et Robusta tanzaniens avec un arôme riche et des grains uniformes.",
      coffeeHighlight: "Arabica: grades AAA, AA, A | Robusta: FAQ 12, 14, 16, 18",
      pulses: "Légumineuses et Graines",
      pulsesDesc: "Pois chiches, pois d'Angole, haricots mungo verts et graines de sésame premium.",
      pulsesHighlight: "Pureté: 98%+ | Variétés Multiples",
      liquor: "Alcools Premium",
      liquorDesc: "Whisky, rhum, vodka et gin de haute qualité d'Inde et de Maurice.",
      liquorHighlight: "En Gros et au Détail",
      imports: "Importations",
    },
    whyChooseUs: {
      title: "Pourquoi Choisir Gamma International",
      subtitle: "Un pont de confiance entre les producteurs africains et les acheteurs mondiaux",
      benefit1Title: "Approvisionnement et Logistique 360°",
      benefit1Desc: "Gestion complète de la chaîne d'approvisionnement de la Tanzanie vers l'Asie, l'Europe et le Moyen-Orient",
      benefit2Title: "Contrôle Qualité sur le Terrain",
      benefit2Desc: "Inspection rigoureuse et assurance qualité à chaque étape de la production",
      benefit3Title: "Réseau de Fournisseurs Vérifiés",
      benefit3Desc: "Contrats agricoles à long terme avec des producteurs de confiance à travers la Tanzanie",
      benefit4Title: "Support Documentation Export",
      benefit4Desc: "Équipe dédiée gérant toutes les exigences de conformité et de certification",
      benefit5Title: "Pratiques Commerciales Éthiques",
      benefit5Desc: "Politiques transparentes qui responsabilisent les agriculteurs et enrichissent les acheteurs",
      benefit6Title: "Équipe Terrain Expérimentée",
      benefit6Desc: "Des champs aux opérations portuaires, notre équipe assure l'excellence",
    },
    globalPresence: {
      title: "Notre Empreinte Mondiale",
      subtitle: "Opérant de manière transparente à travers les continents avec une présence stratégique dans les principaux centres économiques du monde",
      stat1Value: "90+",
      stat1Label: "Années d'Expertise Combinée",
      stat1Desc: "Équipe multinationale avec une connaissance approfondie de l'industrie",
      stat2Value: "5+",
      stat2Label: "Pays Servis",
      stat2Desc: "Export vers l'Asie, l'Europe, le Moyen-Orient et au-delà",
      stat3Value: "7",
      stat3Label: "Catégories de Produits",
      stat3Desc: "Portefeuille diversifié de produits premium",
      stat4Value: "360°",
      stat4Label: "Chaîne d'Approvisionnement",
      stat4Desc: "De la ferme au port, opérations entièrement gérées",
      locationsTitle: "Nos Emplacements",
      location1: "Dar Es Salaam, Tanzanie",
      location1Role: "Bureau Enregistré et Opérations",
      location2: "Dubaï, ÉAU",
      location2Role: "Siège Mondial Stratégique",
      location3: "Ghana",
      location3Role: "Opérations Régionales",
      location4: "Inde",
      location4Role: "Centre de Traitement et Logistique",
      location5: "Allemagne",
      location5Role: "Opérations Européennes",
      location6: "États-Unis",
      location6Role: "Base Nord-Américaine",
      location7: "Maurice",
      location7Role: "Installation de Production d'Alcools",
    },
    common: {
      learnMore: "En Savoir Plus",
      requestQuote: "Demander un Devis",
      backToProducts: "Retour aux Produits",
      // About page (French placeholders)
      aboutIntro:
        "Entreprise dynamique d'export-import basée à Dar Es Salaam, en Tanzanie, spécialisée dans l'approvisionnement, la transformation et le commerce de produits agroalimentaires et industriels de qualité.",
      aboutVisionTitle: "Notre Vision",
      aboutVisionBody:
        "Devenir le partenaire africain le plus fiable pour l'approvisionnement et l'exportation de produits agroalimentaires et naturels.",
      aboutMissionTitle: "Notre Mission",
      aboutMissionBody:
        "Relier la puissance agricole de l'Afrique au reste du monde grâce à l'intégrité, l'innovation et des partenariats durables.",
      aboutStoryTitle: "Notre Histoire",
      aboutStoryP1:
        "Grâce à des partenariats solides à Masasi, Mtwara, Newala, Dodoma, Iringa et Arusha, nous offrons une qualité constante, une transparence commerciale et une logistique performante.",
      aboutStoryP2:
        "Notre objectif est d'autonomiser les agriculteurs tanzaniens, de créer de la valeur pour les acheteurs internationaux et de promouvoir un commerce durable.",
      aboutTrustedTitle: "Expertise Fiable",
      aboutTrustedBody:
        "Spécialistes des exportations agricoles, des spiritueux et des produits chimiques avec une chaîne d'approvisionnement 360°.",
      aboutGlobalTitle: "Présence Mondiale",
      aboutGlobalBody:
        "Exportation vers plus de 5 pays avec des conditions FOB et CNF.",
      aboutPromiseTitle: "Notre Promesse",
      aboutPromiseBody:
        "Un héritage fondé sur la confiance, offrant l'excellence à chaque expédition.",
      // Footer
      footerDescription:
        "Relier les continents par le commerce. Exportation de produits agroalimentaires premium de la Tanzanie vers le monde.",
      footerProductsTitle: "Produits",
      footerCompanyTitle: "Entreprise",
      footerContactTitle: "Contactez-nous",
      footerCopyright: "Tous droits réservés.",
      // Contact page
      contactSubtitle:
        "Contactez-nous dès aujourd'hui et commencez votre partenariat avec un exportateur tanzanien fiable.",
      contactFormTitle: "Envoyez-nous un Message",
      contactNameLabel: "Nom *",
      contactEmailLabel: "E-mail *",
      contactPhoneLabel: "Téléphone *",
      contactPhonePlaceholder: "Numéro de téléphone",
      contactCompanyLabel: "Entreprise",
      contactMessageLabel: "Message *",
      contactSubmitSending: "Envoi en cours...",
      contactSubmitLabel: "Envoyer le Message",
      contactHeadOfficeTitle: "Siège Social",
      contactHeadOfficeName: "Gamma International Tanzania Ltd",
      contactAddressLine1: "24e étage, Rita Towers",
      contactAddressLine2: "Dar Es Salaam, Tanzanie",
      contactAddressPoBox: "BP 22469",
      contactPhoneTitle: "Téléphone",
      contactEmailTitle: "E-mail",
      contactMapTitle: "Notre Emplacement",
      contactMapCaption: "Rita Towers, City Center, Dar Es Salaam, Tanzanie",
      contactToastSuccessTitle: "Message Envoyé !",
      contactToastSuccessDescription:
        "Merci pour votre demande. Nous vous répondrons sous 24 heures.",
      contactToastErrorTitle: "Erreur",
      contactToastErrorGeneric: "Échec de l'envoi du message. Veuillez réessayer.",
      // Products page
      productsPageTitle: "Nos Produits",
      productsPageSubtitle:
        "Découvrez notre gamme complète d'exportations agricoles premium et d'importations de qualité.",
      productsExportTitle: "Exportations Agricoles",
      productsExportBadge: "Tanzanie",
      productsImportTitle: "Importations Premium",
      productsImportBadge: "International",
      productsCtaTitle: "Intéressé par nos Produits ?",
      productsCtaBody:
        "Contactez-nous pour des prix compétitifs, des commandes en gros et des solutions sur mesure.",
      productsCtaRequestQuote: "Demander un Devis",
      productsCtaPartner: "Devenez Partenaire",
      // Partner page
      partnerSubtitle:
        "Gamma International Tanzania Ltd offre un pont commercial fluide entre les producteurs africains et les acheteurs mondiaux grâce à un solide réseau d'approvisionnement et d'export.",
      partnerWhyTitle: "Pourquoi Travailler avec Gamma ?",
      partnerBenefit1:
        "Approvisionnement et logistique 360° de la Tanzanie vers l'Asie et le Moyen-Orient",
      partnerBenefit2:
        "Contrôle qualité sur le terrain à chaque étape",
      partnerBenefit3:
        "Base de fournisseurs vérifiés avec contrats à long terme",
      partnerBenefit4:
        "Équipe dédiée à la documentation d'export et à la logistique",
      partnerBenefit5:
        "Pratiques commerciales éthiques et transparentes",
      partnerBenefit6:
        "Équipe expérimentée du terrain jusqu'au port",
      partnerProcessTitle: "Notre Processus de Partenariat",
      partnerProcessStep1Title: "Approvisionnement",
      partnerProcessStep1Desc:
        "Partenariats directs avec des agriculteurs et producteurs vérifiés en Tanzanie.",
      partnerProcessStep2Title: "Contrôle Qualité",
      partnerProcessStep2Desc:
        "Inspections rigoureuses et tests pour garantir des standards élevés.",
      partnerProcessStep3Title: "Documentation",
      partnerProcessStep3Desc:
        "Documentation complète d'export, certifications et conformité.",
      partnerProcessStep4Title: "Logistique",
      partnerProcessStep4Desc:
        "Chargement des conteneurs, coordination maritime et livraisons à temps.",
      partnerProcessStep5Title: "Livraison",
      partnerProcessStep5Desc:
        "Vos produits arrivent à temps, selon les spécifications convenues.",
      partnerCtaTitle:
        "Lancez Votre Partenariat – Nous Sommes Prêts !",
      partnerCtaBody:
        "Discutons de la manière de construire un partenariat durable et gagnant-gagnant.",
      partnerCtaButton: "Contactez-nous",
      // Call to action section on home page
      ctaTitle:
        "Sourcez la Qualité. Bâtissez la Confiance. Croissons Ensemble – Devenez Notre Partenaire !",
      ctaSubtitle:
        "Collaborons pour bâtir un partenariat commercial de long terme bénéfique aux deux continents.",
      ctaPrimaryButton: "Contactez-nous",
      ctaSecondaryButton: "Découvrir les Opportunités de Partenariat",
      // Blog list page
      blogTitle: "Analyses Sectorielles & Actualités du Commerce",
      blogSubtitle:
        "Restez informé sur les exportations agroalimentaires de Tanzanie, les tendances du marché et les bonnes pratiques du commerce international.",
      blogCategoryAll: "Tous les Articles",
      blogCategoryIndustryInsights: "Analyses Sectorielles",
      blogCategoryProductSpotlight: "Focus Produit",
      blogCategoryTradeInsights: "Analyses du Commerce",
      blogCategoryCompanyNews: "Actualités de l'Entreprise",
      blogCategoryExportGuide: "Guide d'Export",
      blogCategoryEducational: "Éducatif",
      blogReadMore: "Lire la Suite",
      blogNoPosts: "Aucun article trouvé dans cette catégorie.",
      blogNewsletterPrompt:
        "Vous voulez rester informé des dernières actualités du secteur ?",
      blogNewsletterButton: "S'abonner à Notre Newsletter",
      // Blog post page
      blogPostNotFoundTitle: "Article Introuvable",
      blogPostBackToBlog: "Retour au Blog",
      blogPostShare: "Partager",
      blogPostRelatedArticles: "Articles Associés",
      blogPostContactUs: "Contactez-nous",
      blogPostViewProducts: "Voir Nos Produits",
      // Not found page
      notFoundTitle: "Page Introuvable (404)",
      notFoundSubtitle: "Avez-vous oublié d'ajouter cette page au routeur ?",
    },
    coffeePage: {
      title: "Café (Arabica & Robusta)",
      subtitle:
        "Cafés Arabica et Robusta tanzaniens premium pour torréfacteurs et distributeurs",
      tagline:
        "Des hauts plateaux du Kilimandjaro aux tasses du monde entier – un café tanzanien authentique à chaque gorgée.",
      intro:
        "La Tanzanie offre des sols volcaniques et des altitudes idéales pour produire des cafés Arabica et Robusta de caractère. Nous exportons des lots adaptés aux torréfacteurs de spécialité comme aux acheteurs de volume, avec une qualité régulière et une traçabilité claire.",
      specsTitle: "Caractéristiques clés",
      specCropSeason: "Saison de récolte",
      specCropSeasonValue: "Mai – Octobre",
      specPackaging: "Conditionnement",
      specPackagingValue: "Sacs de jute de 60 kg avec doublure PE",
      spec20ft: "Conteneur 20 pieds",
      spec20ftValue: "9,8 MT (164 sacs)",
      spec40ft: "Conteneur 40 pieds",
      spec40ftValue: "19,2 MT (320 sacs)",
      specOrigin: "Origine",
      specOriginValue: "Régions de Kilimandjaro, Mbeya et Bukoba",
      gradesTitle: "Grades & certifications café",
      arabicaTitle: "Grades de café Arabica",
      arabicaHsCode: "Code SH : 09011100",
      arabicaGradeAAA: "Grade AAA",
      arabicaGradeAA: "Grade AA",
      arabicaGradeA: "Grade A",
      robustaTitle: "Grades de café Robusta",
      robustaHsCode: "Code SH : 09011200",
      robustaFaq12: "Robusta FAQ 12",
      robustaFaq14: "Robusta FAQ 14",
      robustaFaq16: "Robusta FAQ 16",
      robustaFaq18: "Robusta FAQ 18",
      certTitle: "Certifications & conformité",
      certFairTrade: "Approvisionnement conforme Fairtrade",
      certEu: "Conforme aux normes d'exportation UE",
      certEcoCert: "Partenaires conformes EcoCert (le cas échéant)",
      certOrganic: "Options biologiques disponibles sur demande",
      certIso: "Standards de transformation alignés sur l'ISO",
      ctaTitle: "Importez les meilleurs cafés de Tanzanie en toute confiance",
      ctaBody:
        "Contactez-nous pour des contrats d'approvisionnement, des marques privées et des mélanges sur mesure adaptés à votre marché.",
      ctaWhy: "Découvrez pourquoi les torréfacteurs choisissent le café tanzanien",
    },
    cashewPage: {
      backToProducts: "Retour aux Produits",
      title: "Noix de cajou brutes & amandes de cajou",
      subtitle:
        "De la ferme au conditionnement – les meilleures noix de cajou de Tanzanie pour les marchés internationaux.",
      rcnTitle: "Noix de cajou brutes (RCN)",
      rcnBody:
        "Nous sélectionnons les meilleures noix de cajou brutes de Tanzanie (RCN), réputées pour leur excellent rendement, un nombre de noix élevé et une humidité contrôlée – appréciées des transformateurs en Inde et au Vietnam.",
      rcnSpecsTitle: "Spécifications",
      rcnOutturn: "Rendement",
      rcnNutCount: "Nombre de noix",
      rcnMoisture: "Humidité",
      rcnPackaging: "Conditionnement",
      rcnOrigin: "Origine",
      rcnHsCode: "Code SH",
      rcnContainer: "Conteneur 40ft HC",
      rcnMoq: "Quantité minimale (MOQ)",
      kernelsTitle: "Amandes de cajou",
      kernelsBody:
        "Nos amandes sont soigneusement transformées et mises sous vide afin de préserver leur goût, leur couleur et leur croquant naturels – prêtes pour la vente au détail ou l'utilisation industrielle.",
      kernelsSpecsTitle: "Spécifications",
      kernelsGrades: "Grades",
      kernelsHsCode: "Code SH",
      kernelsMoisture: "Humidité",
      kernelsSeason: "Saison",
      kernelsPackaging: "Conditionnement",
      kernelsAltPack: "Conditionnement alternatif",
      kernels20ft: "Conteneur 20 pieds",
      kernels40ft: "Conteneur 40 pieds",
      ctaTitle:
        "Importez les meilleures noix de cajou brutes (RCN) et amandes de cajou – avec fiabilité et traçabilité !",
      ctaBody:
        "Contactez-nous pour connaître les prix, la disponibilité et les options de conditionnement pour les noix brutes et transformées.",
      ctaRequestQuote: "Demander un Devis",
      ctaLearnMore: "En savoir plus sur nos noix de cajou",
    },
    pulsesPage: {
      title: "Légumineuses et Graines",
      subtitle:
        "Pois chiches, pois d'Angole, haricots mungo verts et graines de sésame premium en provenance des régions fertiles de Tanzanie",
      pulsesTitle: "Légumineuses",
      pulsesBody:
        "Les sols fertiles de Tanzanie produisent des légumineuses de qualité export, riches en protéines et en goût. Nous fournissons des légumineuses nettoyées et calibrées, idéales pour l'industrie agroalimentaire et les acheteurs en gros.",
      sesameTitle: "Graines de Sésame",
      sesameBody:
        "Graines de sésame blanches et brunes haut de gamme, nettoyées à la machine et triées au Sortex pour une pureté et une qualité exceptionnelles. Issues des meilleures régions de culture du sud de la Tanzanie.",
      ctaTitle:
        "Partenariat avec l'exportateur de légumineuses le plus fiable de Tanzanie pour des expéditions toute l'année !",
      ctaBody:
        "Contactez-nous pour des prix compétitifs et des commandes en gros de légumineuses et de graines de sésame premium en provenance de Tanzanie",
      ctaBlogButton: "En savoir plus sur nos Légumineuses & Graines",
      // Variétés & spécifications
      varietiesTitle: "Variétés disponibles",
      specTitle: "Spécifications",
      varietyChickpeas: "Pois chiches",
      varietyPigeonPeas: "Pois d'Angole",
      varietyKidneyBeans: "Haricots rouges",
      varietyGreenMungBeans: "Haricots mungo verts",
      varietyWhiteSesame: "Sésame blanc",
      varietyBrownSesame: "Sésame brun",
      sesameHsCode: "Code SH : 12074090",
      specMoistureLabel: "Humidité",
      specPurityLabel: "Pureté",
      specPackagingLabel: "Conditionnement",
      specLoadingLabel: "Chargement",
      specOriginLabel: "Origine",
      specSeasonLabel: "Saison",
      spec20ftLabel: "Conteneur 20 pieds",
      spec40ftLabel: "Conteneur 40 pieds",
      specProcessingLabel: "Transformation",
      specPulsesMoistureValue: "10–14 % pour les légumineuses",
      specPulsesPurityValue: "98 %+ après nettoyage mécanique",
      specPulsesPackagingValue: "Sacs PP de 25 kg ou 50 kg",
      specPulsesLoadingValue: "Chargement en vrac sur le plancher du conteneur",
      specPulsesOriginValue: "Principales régions de culture en Tanzanie",
      specPulsesSeasonValue: "Variable selon la culture ; principaux exports après récolte",
      specPulses20ftValue: "~16–17 MT selon le produit",
      specPulses40ftValue: "Jusqu'à 25 MT pour de nombreuses références",
      specSesamePurityValue: "98 %+ après nettoyage mécanique (Sortex disponible)",
      specSesameMoistureValue: "Inférieure à 8 %",
      specSesameProcessingValue: "Nettoyage mécanique avec tri Sortex pour les lots premium",
      specSesamePackagingValue: "Sacs PP de 25 kg ou 50 kg",
      specSesameSeasonValue: "Principaux exports après la saison de récolte",
      specSesame20ftValue: "~16–17 MT selon le produit",
      specSesame40ftValue: "Jusqu'à 25 MT pour de nombreuses références",
    },
    liquorPage: {
      title: "Spiritueux et Alcools",
      subtitle:
        "Importations de spiritueux de haute qualité en provenance d'Inde et de Maurice pour les marchés d'Afrique de l'Est",
      intro:
        "Gamma International Tanzania Ltd est spécialisée dans l'importation de spiritueux premium provenant de distilleries fiables en Inde et à Maurice, pour des besoins en vrac, en gros et au détail à travers l'Afrique de l'Est. Notre portefeuille comprend des whiskies, rhums, vodkas et gins de qualité, disponibles dans plusieurs formats pour répondre aux exigences de chaque marché.",
      ctaTitle:
        "Développez votre portefeuille avec nos spiritueux importés premium !",
      ctaBody:
        "Contactez-nous pour des commandes en gros, des prix compétitifs et des livraisons fiables dans toute l'Afrique de l'Est",
      ctaLearnMore: "En savoir plus sur nos spiritueux",
      // Sections produits & logistique
      productsTitle: "Gamme de produits",
      spiritsTitle: "Spiritueux disponibles",
      sizesTitle: "Tailles de bouteilles",
      gradesTitle: "Qualités & codes douaniers",
      specsTitle: "Conditionnement & logistique",
      specPackagingLabel: "Conditionnement",
      specPackagingValue: "Cartons ondulés sécurisés, 12 bouteilles par carton",
      spec20ftLabel: "Conteneur 20 pieds",
      spec20ftValue: "~13 200 bouteilles (750 ml) ou tailles mixtes",
      specOriginLabel: "Origine",
      specOriginValue: "Inde et Maurice",
      specQualityLabel: "Qualité",
      specQualityValue: "Qualité premium issue de distilleries certifiées",
      specDistributionLabel: "Distribution",
      specDistributionValue: "Vrac, gros & détail",
      marketsTitle: "Couverture du marché",
      marketsIntro:
        "Nous servons le marché d'Afrique de l'Est avec des importations de spiritueux fiables, en assurant un approvisionnement constant pour :",
      marketWholesale: "Distributeurs en gros",
      marketRetail: "Chaînes de détail",
      marketHospitality: "Secteur de l'hôtellerie & restauration",
      spiritWhisky: "Whisky",
      spiritRum: "Rhum",
      spiritVodka: "Vodka",
      spiritGin: "Gin",
      size200ml: "200 ml",
      size375ml: "375 ml",
      size750ml: "750 ml",
      gradeWhiskyHs: "Whisky : code SH 22089099",
      gradeRumHs: "Rhum : code SH 22084090",
      gradeLiquorHs: "Spiritueux : code SH 22087019",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      products: "المنتجات",
      blog: "المدونة",
      partner: "الشراكة معنا",
      contact: "اتصل بنا",
      requestQuote: "طلب عرض أسعار",
    },
    hero: {
      title: "ربط القارات من خلال التجارة",
      subtitle: "سلع زراعية متميزة من تنزانيا إلى العالم. شريكك الموثوق في التوريد المتميز مع أكثر من 90 عامًا من الخبرة المشتركة.",
      viewProducts: "عرض منتجاتنا",
      partnerWithUs: "كن شريكًا معنا",
      yearsExpertise: "90+ سنة",
      combinedExpertise: "خبرة مشتركة",
      countries: "5+ دولة",
      globalReach: "وصول عالمي",
      supplyChain: "توريد 360°",
      chainManagement: "إدارة السلسلة",
      logisticsTitle: "تسليم في الوقت المحدد",
      logisticsSubtitle: "خدمات لوجستية موثوقة في كل خطوة",
    },
    home: {
      productsTitle: "منتجاتنا المميزة",
      productsSubtitle: "من أفضل مناطق تنزانيا، منتجاتنا تلبي المعايير والشهادات الدولية",
    },
    products: {
      cashew: "الكاجو الخام وحبوب الكاجو",
      cashewDesc: "من أفضل مزارع تنزانيا إلى المعالِجين العالميين – RCN وحبوب كاجو مميزة بجودة ثابتة يمكنك الوثوق بها.",
      cashewHighlight: "عائد RCN: 50-55 رطل | عدد المكسرات: 160 - 180 | حبوب الكاجو: W180، W240، W320.",
      coffee: "القهوة",
      coffeeDesc: "أرابيكا وروبوستا التنزانية مع رائحة غنية وحبوب موحدة.",
      coffeeHighlight: "درجات AAA، AA، A | FAQ 12-18",
      pulses: "البقوليات والبذور",
      pulsesDesc: "الحمص، البازلاء الحمامية، الفاصوليا الخضراء، وبذور السمسم الممتازة.",
      pulsesHighlight: "النقاء: 98%+ | أصناف متعددة",
      liquor: "المشروبات الكحولية الفاخرة",
      liquorDesc: "ويسكي، روم، فودكا وجن عالية الجودة من الهند وموريشيوس.",
      liquorHighlight: "بالجملة والتجزئة",
      imports: "الواردات",
    },
    whyChooseUs: {
      title: "لماذا تختار جاما الدولية",
      subtitle: "جسر موثوق بين المنتجين الأفارقة والمشترين العالميين",
      benefit1Title: "التوريد والخدمات اللوجستية 360°",
      benefit1Desc: "إدارة كاملة لسلسلة التوريد من تنزانيا إلى آسيا وأوروبا والشرق الأوسط",
      benefit2Title: "مراقبة الجودة على الأرض",
      benefit2Desc: "فحص صارم وضمان الجودة في كل مرحلة من مراحل الإنتاج",
      benefit3Title: "شبكة موردين معتمدة",
      benefit3Desc: "عقود زراعية طويلة الأجل مع منتجين موثوقين في جميع أنحاء تنزانيا",
      benefit4Title: "دعم وثائق التصدير",
      benefit4Desc: "فريق متخصص يتعامل مع جميع متطلبات الامتثال والشهادات",
      benefit5Title: "ممارسات تجارية أخلاقية",
      benefit5Desc: "سياسات شفافة تمكّن المزارعين وتثري المشترين",
      benefit6Title: "فريق ميداني ذو خبرة",
      benefit6Desc: "من الحقول إلى عمليات الميناء، يضمن فريقنا التميز",
    },
    globalPresence: {
      title: "بصمتنا العالمية",
      subtitle: "العمل بسلاسة عبر القارات مع وجود استراتيجي في المراكز الاقتصادية الرئيسية في جميع أنحاء العالم",
      stat1Value: "90+",
      stat1Label: "سنوات من الخبرة المشتركة",
      stat1Desc: "فريق متعدد الجنسيات بمعرفة صناعية عميقة",
      stat2Value: "5+",
      stat2Label: "دول يتم خدمتها",
      stat2Desc: "التصدير إلى آسيا وأوروبا والشرق الأوسط وما وراءها",
      stat3Value: "7",
      stat3Label: "فئات المنتجات",
      stat3Desc: "محفظة متنوعة من السلع الممتازة",
      stat4Value: "360°",
      stat4Label: "سلسلة التوريد",
      stat4Desc: "من المزرعة إلى عمليات الميناء المدارة بالكامل",
      locationsTitle: "مواقعنا",
      location1: "دار السلام، تنزانيا",
      location1Role: "المكتب المسجل والعمليات",
      location2: "دبي، الإمارات",
      location2Role: "المقر العالمي الاستراتيجي",
      location3: "غانا",
      location3Role: "العمليات الإقليمية",
      location4: "الهند",
      location4Role: "مركز المعالجة والخدمات اللوجستية",
      location5: "ألمانيا",
      location5Role: "العمليات الأوروبية",
      location6: "الولايات المتحدة",
      location6Role: "قاعدة أمريكا الشمالية",
      location7: "موريشيوس",
      location7Role: "منشأة إنتاج المشروبات الكحولية",
    },
    common: {
      learnMore: "اعرف المزيد",
      requestQuote: "طلب عرض أسعار",
      backToProducts: "العودة إلى المنتجات",
      // About page (Arabic placeholders)
      aboutIntro:
        "شركة ديناميكية للتصدير والاستيراد مقرها دار السلام في تنزانيا، متخصصة في توريد ومعالجة وتجارة السلع الزراعية والمنتجات الصناعية عالية الجودة.",
      aboutVisionTitle: "رؤيتنا",
      aboutVisionBody:
        "أن نصبح الشريك الأكثر موثوقية في إفريقيا في مجال توريد وتصدير المنتجات الزراعية والطبيعية.",
      aboutMissionTitle: "مهمتنا",
      aboutMissionBody:
        "ربط قوة إفريقيا الزراعية بالعالم من خلال النزاهة والابتكار والشراكات المؤثرة.",
      aboutStoryTitle: "قصتنا",
      aboutStoryP1:
        "من خلال شراكات راسخة في ماساسي ومتوارة ونيوالا وDodoma وإرينغا وأروشا، نقدم جودة ثابتة وممارسات تجارية شفافة وكفاءة عالية في الخدمات اللوجستية.",
      aboutStoryP2:
        "هدفنا هو تمكين المزارعين في تنزانيا وإثراء المشترين الدوليين وتعزيز تجارة مستدامة تحت علامة موثوقة واحدة.",
      aboutTrustedTitle: "خبرة موثوقة",
      aboutTrustedBody:
        "متخصصون في تصدير المنتجات الزراعية والمشروبات الكحولية والمواد الكيميائية مع سلسلة توريد متكاملة 360°.",
      aboutGlobalTitle: "انتشار عالمي",
      aboutGlobalBody:
        "تصدير إلى أكثر من 5 دول باستخدام شروط FOB وCNF.",
      aboutPromiseTitle: "وعدنا",
      aboutPromiseBody:
        "إرث مبني على الثقة غير المتزعزعة، مع تقديم التميز في كل شحنة.",
      // Footer
      footerDescription:
        "ربط القارات من خلال التجارة. تصدير سلع زراعية متميزة من تنزانيا إلى العالم.",
      footerProductsTitle: "المنتجات",
      footerCompanyTitle: "الشركة",
      footerContactTitle: "تواصل معنا",
      footerCopyright: "جميع الحقوق محفوظة.",
      // Contact page
      contactSubtitle:
        "تواصل معنا اليوم وابدأ شراكتك مع شريك تصدير موثوق من تنزانيا",
      contactFormTitle: "أرسل لنا رسالة",
      contactNameLabel: "الاسم *",
      contactEmailLabel: "البريد الإلكتروني *",
      contactPhoneLabel: "الهاتف *",
      contactPhonePlaceholder: "رقم الهاتف",
      contactCompanyLabel: "الشركة",
      contactMessageLabel: "الرسالة *",
      contactSubmitSending: "جارٍ الإرسال...",
      contactSubmitLabel: "إرسال الرسالة",
      contactHeadOfficeTitle: "المكتب الرئيسي",
      contactHeadOfficeName: "Gamma International Tanzania Ltd",
      contactAddressLine1: "الطابق 24، برج ريتا",
      contactAddressLine2: "دار السلام، تنزانيا",
      contactAddressPoBox: "ص.ب 22469",
      contactPhoneTitle: "هاتف",
      contactEmailTitle: "بريد إلكتروني",
      contactMapTitle: "موقعنا",
      contactMapCaption: "Rita Towers, City Center, Dar Es Salaam, Tanzania",
      contactToastSuccessTitle: "تم إرسال الرسالة!",
      contactToastSuccessDescription:
        "شكرًا لتواصلك معنا. سنرد عليك خلال 24 ساعة.",
      contactToastErrorTitle: "خطأ",
      contactToastErrorGeneric: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      // Products page
      productsPageTitle: "منتجاتنا",
      productsPageSubtitle:
        "اكتشف مجموعتنا الكاملة من الصادرات الزراعية المتميزة والواردات عالية الجودة.",
      productsExportTitle: "الصادرات الزراعية",
      productsExportBadge: "تنزانيا",
      productsImportTitle: "الواردات المميزة",
      productsImportBadge: "دولي",
      productsCtaTitle: "مهتم بمنتجاتنا؟",
      productsCtaBody:
        "تواصل معنا للحصول على أسعار تنافسية وطلبات بالجملة وحلول مخصصة لاحتياجات عملك.",
      productsCtaRequestQuote: "طلب عرض أسعار",
      productsCtaPartner: "كن شريكًا معنا",
      // Partner page
      partnerSubtitle:
        "تقدم Gamma International Tanzania Ltd جسرًا تجاريًا سلسًا بين المنتجين الأفارقة والمشترين العالميين من خلال شبكة قوية من التوريد والتصدير.",
      partnerWhyTitle: "لماذا تتعاون مع Gamma؟",
      partnerBenefit1:
        "توفير ولوجستيات 360° من تنزانيا إلى آسيا والشرق الأوسط",
      partnerBenefit2:
        "مراقبة جودة ميدانية في كل مرحلة",
      partnerBenefit3:
        "شبكة موردين معتمدة مع عقود طويلة الأجل",
      partnerBenefit4:
        "فريق مخصص لوثائق التصدير واللوجستيات",
      partnerBenefit5:
        "ممارسات تجارية أخلاقية وشفافة",
      partnerBenefit6:
        "فريق ذو خبرة عالية من المزرعة إلى الميناء",
      partnerProcessTitle: "عملية الشراكة لدينا",
      partnerProcessStep1Title: "التوريد",
      partnerProcessStep1Desc:
        "شراكات مباشرة مع مزارعين ومنتجين معتمدين عبر تنزانيا.",
      partnerProcessStep2Title: "مراقبة الجودة",
      partnerProcessStep2Desc:
        "فحوصات واختبارات دقيقة لضمان أعلى المعايير.",
      partnerProcessStep3Title: "الوثائق",
      partnerProcessStep3Desc:
        "وثائق تصدير كاملة وشهادات ودعم الامتثال.",
      partnerProcessStep4Title: "اللوجستيات",
      partnerProcessStep4Desc:
        "تحميل الحاويات وتنسيق الشحن والتسليم في الوقت المحدد.",
      partnerProcessStep5Title: "التسليم",
      partnerProcessStep5Desc:
        "تصل منتجاتك في الوقت المحدد وبالمواصفات المتفق عليها.",
      partnerCtaTitle:
        "ابدأ شراكتك معنا – نحن جاهزون!",
      partnerCtaBody:
        "لنتحدث عن كيفية بناء شراكة طويلة الأمد مفيدة للطرفين.",
      partnerCtaButton: "تواصل معنا",
      // Call to action section on home page
      ctaTitle:
        "احصل على الجودة. ابنِ الثقة. ننمو معًا – كن شريكًا لنا الآن!",
      ctaSubtitle:
        "لنتعاون لبناء شراكة تجارية طويلة الأمد تعود بالنفع على القارات معًا.",
      ctaPrimaryButton: "تواصل معنا",
      ctaSecondaryButton: "استكشف فرص الشراكة الآن",
      // Blog list page
      blogTitle: "رؤى صناعية وأخبار التجارة",
      blogSubtitle:
        "ابقَ على اطلاع بصادرات السلع الزراعية في تنزانيا واتجاهات السوق وأفضل ممارسات التجارة الدولية.",
      blogCategoryAll: "كل المقالات",
      blogCategoryIndustryInsights: "رؤى صناعية",
      blogCategoryProductSpotlight: "تسليط الضوء على المنتجات",
      blogCategoryTradeInsights: "رؤى تجارية",
      blogCategoryCompanyNews: "أخبار الشركة",
      blogCategoryExportGuide: "دليل التصدير",
      blogCategoryEducational: "تعليمي",
      blogReadMore: "اقرأ المزيد",
      blogNoPosts: "لا توجد مقالات في هذه الفئة.",
      blogNewsletterPrompt:
        "هل تريد البقاء على اطلاع بأحدث أخبار القطاع؟",
      blogNewsletterButton: "اشترك في النشرة الإخبارية",
      // Blog post page
      blogPostNotFoundTitle: "المقال غير موجود",
      blogPostBackToBlog: "العودة إلى المدونة",
      blogPostShare: "مشاركة",
      blogPostRelatedArticles: "مقالات ذات صلة",
      blogPostContactUs: "تواصل معنا",
      blogPostViewProducts: "عرض منتجاتنا",
      // Not found page
      notFoundTitle: "الصفحة غير موجودة (404)",
      notFoundSubtitle: "هل نسيت إضافة هذه الصفحة إلى نظام التوجيه؟",
    },
    coffeePage: {
      title: "القهوة (عربيا وروبوستا)",
      subtitle:
        "قهوة تنزانية مميزة من نوعي Arabica وRobusta للمحمصين والموزعين",
      tagline:
        "من مرتفعات كليمنجارو إلى أكواب العالم – قهوة تنزانية أصلية في كل رشفة.",
      intro:
        "تنتج مزارع القهوة في تنزانيا حبوب Arabica ذات حموضة متوازنة ونكهات زهرية، وحبوب Robusta ذات جسم قوي مناسبة للإسبرسو والقهوة الفورية. نوفر درجات متعددة لتلبية احتياجات أسواق مختلفة.",
      specsTitle: "المواصفات الرئيسية",
      specCropSeason: "موسم الحصاد",
      specCropSeasonValue: "مايو – أكتوبر",
      specPackaging: "التعبئة",
      specPackagingValue: "أكياس خيش 60 كجم مع بطانة داخلية PE",
      spec20ft: "حاوية 20 قدم",
      spec20ftValue: "9.8 طن (164 كيسًا تقريبًا)",
      spec40ft: "حاوية 40 قدم",
      spec40ftValue: "19.2 طن (320 كيسًا تقريبًا)",
      specOrigin: "المنشأ",
      specOriginValue: "مناطق كليمنجارو، مبيا وبوكوبا في تنزانيا",
      gradesTitle: "درجات القهوة والشهادات",
      arabicaTitle: "درجات قهوة Arabica",
      arabicaHsCode: "رمز HS: 09011100",
      arabicaGradeAAA: "درجة AAA",
      arabicaGradeAA: "درجة AA",
      arabicaGradeA: "درجة A",
      robustaTitle: "درجات قهوة Robusta",
      robustaHsCode: "رمز HS: 09011200",
      robustaFaq12: "Robusta FAQ 12",
      robustaFaq14: "Robusta FAQ 14",
      robustaFaq16: "Robusta FAQ 16",
      robustaFaq18: "Robusta FAQ 18",
      certTitle: "الشهادات والامتثال",
      certFairTrade: "توريد متوافق مع Fairtrade",
      certEu: "متوافق مع معايير التصدير الأوروبية",
      certEcoCert: "شركاء معتمدون من EcoCert (عند توفرهم)",
      certOrganic: "خيارات القهوة العضوية متاحة عند الطلب",
      certIso: "معايير تصنيع متوافقة مع ISO",
      ctaTitle: "استورد أفضل قهوة من تنزانيا بثقة",
      ctaBody:
        "تواصل معنا لعقود توريد طويلة الأجل، وحلول العلامات الخاصة، وخامات مخصصة لأسواقك.",
      ctaWhy: "اكتشف لماذا يفضل المشترون القهوة التنزانية",
    },
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我们",
      products: "产品",
      blog: "博客",
      partner: "合作伙伴",
      contact: "联系我们",
      requestQuote: "询价",
    },
    hero: {
      title: "通过贸易连接大陆",
      subtitle: "从坦桑尼亚到世界的优质农产品。您值得信赖的采购卓越合作伙伴，拥有90多年的综合专业知识。",
      viewProducts: "查看我们的产品",
      partnerWithUs: "与我们合作",
      yearsExpertise: "90+年",
      combinedExpertise: "综合专业知识",
      countries: "5+国家",
      globalReach: "全球覆盖",
      supplyChain: "360°供应",
      chainManagement: "链管理",
      logisticsTitle: "准时交付",
      logisticsSubtitle: "可靠物流，贯穿每一步",
    },
    home: {
      productsTitle: "我们的优质产品",
      productsSubtitle: "来自坦桑尼亚最优质地区，我们的产品符合国际标准和认证",
    },
    products: {
      cashew: "生腰果和腰果仁",
      cashewDesc: "从坦桑尼亚优质农场到全球加工商——稳定可靠的优质 RCN 和腰果仁。",
      cashewHighlight: "RCN 出仁率：50–55 磅 | 坚果数量：160–180 | 腰果仁等级：W180、W240、W320。",
      coffee: "咖啡",
      coffeeDesc: "坦桑尼亚阿拉比卡和罗布斯塔，香气浓郁，咖啡豆均匀。",
      coffeeHighlight: "AAA、AA、A等级 | FAQ 12-18",
      pulses: "豆类和种子",
      pulsesDesc: "鹰嘴豆、鸽豆、绿豆和优质芝麻。",
      pulsesHighlight: "纯度：98%+ | 多种品种",
      liquor: "优质烈酒",
      liquorDesc: "来自印度和毛里求斯的高档威士忌、朗姆酒、伏特加和杜松子酒。",
      liquorHighlight: "散装、批发和零售",
      imports: "进口产品",
    },
    whyChooseUs: {
      title: "为什么选择Gamma国际",
      subtitle: "非洲生产商和全球买家之间值得信赖的桥梁",
      benefit1Title: "360°采购和物流",
      benefit1Desc: "从坦桑尼亚到亚洲、欧洲和中东的完整供应链管理",
      benefit2Title: "现场质量控制",
      benefit2Desc: "生产每个阶段的严格检查和质量保证",
      benefit3Title: "经过验证的供应商网络",
      benefit3Desc: "与坦桑尼亚各地值得信赖的生产商签订长期农业合同",
      benefit4Title: "出口文件支持",
      benefit4Desc: "专业团队处理所有合规和认证要求",
      benefit5Title: "道德贸易实践",
      benefit5Desc: "透明的政策赋予农民权力并使买家受益",
      benefit6Title: "经验丰富的地面团队",
      benefit6Desc: "从田间到港口运营，我们的团队确保卓越",
    },
    globalPresence: {
      title: "我们的全球足迹",
      subtitle: "在各大洲无缝运营，在全球关键经济中心拥有战略地位",
      stat1Value: "90+",
      stat1Label: "年综合专业知识",
      stat1Desc: "具有深厚行业知识的跨国团队",
      stat2Value: "5+",
      stat2Label: "服务国家",
      stat2Desc: "出口到亚洲、欧洲、中东等地区",
      stat3Value: "7",
      stat3Label: "产品类别",
      stat3Desc: "多样化的优质商品组合",
      stat4Value: "360°",
      stat4Label: "供应链",
      stat4Desc: "从农场到港口的全面管理",
      locationsTitle: "我们的地点",
      location1: "达累斯萨拉姆，坦桑尼亚",
      location1Role: "注册办公室和运营",
      location2: "迪拜，阿联酋",
      location2Role: "战略全球总部",
      location3: "加纳",
      location3Role: "区域运营",
      location4: "印度",
      location4Role: "加工和物流中心",
      location5: "德国",
      location5Role: "欧洲运营",
      location6: "美国",
      location6Role: "北美基地",
      location7: "毛里求斯",
      location7Role: "烈酒生产设施",
    },
    common: {
      learnMore: "了解更多",
      requestQuote: "询价",
      backToProducts: "返回产品",
      // About page (Chinese placeholders)
      aboutIntro:
        "一家位于坦桑尼亚达累斯萨拉姆的活力外贸公司，从事优质农产品和工业品的采购、加工与贸易。",
      aboutVisionTitle: "我们的愿景",
      aboutVisionBody:
        "成为非洲最值得信赖的农产品与天然产品供应和出口合作伙伴。",
      aboutMissionTitle: "我们的使命",
      aboutMissionBody:
        "以诚信、创新和共赢合作，将非洲农业优势连接到全球市场。",
      aboutStoryTitle: "我们的故事",
      aboutStoryP1:
        "通过在马萨西、姆特瓦拉、纽瓦拉、多多马、伊林加和阿鲁沙等地的深度合作，我们为客户提供稳定的品质、透明的贸易与高效的物流。",
      aboutStoryP2:
        "我们的目标是赋能坦桑尼亚农民，为全球买家创造价值，并推动可持续贸易的发展。",
      aboutTrustedTitle: "值得信赖的专业能力",
      aboutTrustedBody:
        "专注农产品出口、酒类及化工品，覆盖 360° 供应链管理。",
      aboutGlobalTitle: "全球布局",
      aboutGlobalBody:
        "通过 FOB 和 CNF 条款向 5+ 个国家出口产品。",
      aboutPromiseTitle: "我们的承诺",
      aboutPromiseBody:
        "以坚定不移的信任为基础，在每一票货物中交付卓越品质。",
      // Footer
      footerDescription:
        "通过贸易连接大陆。从坦桑尼亚向世界出口优质农产品。",
      footerProductsTitle: "产品",
      footerCompanyTitle: "公司",
      footerContactTitle: "联系我们",
      footerCopyright: "版权所有。",
      // Contact page
      contactSubtitle:
        "立即联系我们，与值得信赖的坦桑尼亚出口合作伙伴开启合作之旅。",
      contactFormTitle: "发送消息",
      contactNameLabel: "姓名 *",
      contactEmailLabel: "邮箱 *",
      contactPhoneLabel: "电话 *",
      contactPhonePlaceholder: "电话号码",
      contactCompanyLabel: "公司",
      contactMessageLabel: "留言 *",
      contactSubmitSending: "发送中...",
      contactSubmitLabel: "发送消息",
      contactHeadOfficeTitle: "总部",
      contactHeadOfficeName: "Gamma International Tanzania Ltd",
      contactAddressLine1: "Rita 大厦 24 楼",
      contactAddressLine2: "坦桑尼亚 达累斯萨拉姆",
      contactAddressPoBox: "邮政信箱 22469",
      contactPhoneTitle: "电话",
      contactEmailTitle: "邮箱",
      contactMapTitle: "公司位置",
      contactMapCaption: "Rita Towers, City Center, Dar Es Salaam, Tanzania",
      contactToastSuccessTitle: "消息已发送！",
      contactToastSuccessDescription:
        "感谢您的询问，我们将在 24 小时内回复您。",
      contactToastErrorTitle: "错误",
      contactToastErrorGeneric: "消息发送失败，请重试。",
      // Products page
      productsPageTitle: "我们的产品",
      productsPageSubtitle:
        "浏览我们全面的优质农产品出口与高品质进口产品组合。",
      productsExportTitle: "农业出口",
      productsExportBadge: "坦桑尼亚",
      productsImportTitle: "优质进口",
      productsImportBadge: "国际",
      productsCtaTitle: "对我们的产品感兴趣吗？",
      productsCtaBody:
        "欢迎联系我们获取有竞争力的价格、大宗订单方案以及定制化解决方案。",
      productsCtaRequestQuote: "询价",
      productsCtaPartner: "与我们合作",
      // Partner page
      partnerSubtitle:
        "Gamma International Tanzania Ltd 通过强大的采购与出口网络，为非洲生产商和全球买家搭建高效贸易桥梁。",
      partnerWhyTitle: "为什么选择与 Gamma 合作？",
      partnerBenefit1:
        "从坦桑尼亚到亚洲及中东的一体化 360° 采购与物流服务",
      partnerBenefit2:
        "全流程现场质量控制与检验",
      partnerBenefit3:
        "通过长期合同建立的可靠供应商网络",
      partnerBenefit4:
        "专职出口单证与物流团队",
      partnerBenefit5:
        "透明、合规并具道德标准的贸易实践",
      partnerBenefit6:
        "经验丰富的本地团队，从田间到港口全程跟进",
      partnerProcessTitle: "合作流程",
      partnerProcessStep1Title: "采购",
      partnerProcessStep1Desc:
        "与坦桑尼亚各地经过验证的农户和生产商直接合作。",
      partnerProcessStep2Title: "质量控制",
      partnerProcessStep2Desc:
        "严格的现场检验和测试，确保达到高标准。",
      partnerProcessStep3Title: "单证",
      partnerProcessStep3Desc:
        "完整的出口单证、认证及合规支持。",
      partnerProcessStep4Title: "物流",
      partnerProcessStep4Desc:
        "集装箱装货、航运协调与准时交付。",
      partnerProcessStep5Title: "交付",
      partnerProcessStep5Desc:
        "确保产品按时到达并符合约定规格。",
      partnerCtaTitle:
        "开启合作之旅——我们已做好准备！",
      partnerCtaBody:
        "欢迎与我们探讨如何建立长期互利的贸易伙伴关系。",
      partnerCtaButton: "联系我们",
      // Call to action section on home page
      ctaTitle:
        "获取品质。建立信任。共同成长——立即与我们合作！",
      ctaSubtitle:
        "携手打造长期互利的跨洲贸易合作关系。",
      ctaPrimaryButton: "联系我们",
      ctaSecondaryButton: "查看更多合作机会",
      // Blog list page
      blogTitle: "行业洞察与贸易资讯",
      blogSubtitle:
        "了解坦桑尼亚农产品出口、市场趋势以及国际贸易最佳实践。",
      blogCategoryAll: "全部文章",
      blogCategoryIndustryInsights: "行业洞察",
      blogCategoryProductSpotlight: "产品聚焦",
      blogCategoryTradeInsights: "贸易洞察",
      blogCategoryCompanyNews: "公司新闻",
      blogCategoryExportGuide: "出口指南",
      blogCategoryEducational: "教育内容",
      blogReadMore: "阅读全文",
      blogNoPosts: "该分类下暂无文章。",
      blogNewsletterPrompt:
        "想获取最新行业资讯？",
      blogNewsletterButton: "订阅我们的通讯",
      // Blog post page
      blogPostNotFoundTitle: "文章未找到",
      blogPostBackToBlog: "返回博客",
      blogPostShare: "分享",
      blogPostRelatedArticles: "相关文章",
      blogPostContactUs: "联系我们",
      blogPostViewProducts: "查看我们的产品",
      // Not found page
      notFoundTitle: "404 页面未找到",
      notFoundSubtitle: "是否忘记在路由中添加该页面？",
    },
    cashewPage: {
      backToProducts: "返回产品",
      title: "生腰果与腰果仁",
      subtitle: "从农场到加工——为全球市场提供坦桑尼亚优质腰果",
      rcnTitle: "生腰果（RCN）",
      rcnBody:
        "我们采购坦桑尼亚优质生腰果，具有出仁率高、颗粒均匀、含水率稳定等特点，是印度、越南等主要加工国长期信赖的原料。",
      rcnSpecsTitle: "规格参数",
      rcnOutturn: "出仁率",
      rcnNutCount: "坚果数量",
      rcnMoisture: "含水率",
      rcnPackaging: "包装",
      rcnOrigin: "产地",
      rcnHsCode: "HS 编码",
      rcnContainer: "40 英尺高柜装载量",
      rcnMoq: "最小起订量",
      kernelsTitle: "腰果仁",
      kernelsBody:
        "我们的腰果仁经过精细加工与真空包装，最大程度保留天然风味与口感，适合全球零售与工业客户。",
      kernelsSpecsTitle: "规格参数",
      kernelsGrades: "等级",
      kernelsHsCode: "HS 编码",
      kernelsMoisture: "含水率",
      kernelsSeason: "季节",
      kernelsPackaging: "包装",
      kernelsAltPack: "备用包装",
      kernels20ft: "20 尺集装箱",
      kernels40ft: "40 尺集装箱",
      ctaTitle:
        "以稳定可靠的供应链，放心进口坦桑尼亚生腰果与腰果仁！",
      ctaBody:
        "欢迎联系我们获取最新价格、供货周期以及包装方案等详细信息。",
      ctaRequestQuote: "立即询价",
      ctaLearnMore: "了解更多关于我们的腰果",
    },
    coffeePage: {
      title: "咖啡（阿拉比卡 & 罗布斯塔）",
      subtitle:
        "为全球烘焙商和经销商提供优质坦桑尼亚阿拉比卡与罗布斯塔咖啡",
      tagline:
        "从乞力马扎罗高原到世界各地杯中——一杯一世界的坦桑尼亚咖啡。",
      intro:
        "坦桑尼亚的火山土壤和适宜海拔孕育出高品质阿拉比卡与罗布斯塔咖啡。我们提供适合精品咖啡烘焙商和大宗买家的多种等级与稳定品质。",
      specsTitle: "主要参数",
      specCropSeason: "采摘季节",
      specCropSeasonValue: "5 月 – 10 月",
      specPackaging: "包装",
      specPackagingValue: "60 公斤黄麻袋，内衬 PE 袋",
      spec20ft: "20 尺集装箱",
      spec20ftValue: "约 9.8 吨（约 164 袋）",
      spec40ft: "40 尺集装箱",
      spec40ftValue: "约 19.2 吨（约 320 袋）",
      specOrigin: "产区",
      specOriginValue: "乞力马扎罗、姆贝亚、布科巴等坦桑尼亚核心产区",
      gradesTitle: "咖啡等级与认证",
      arabicaTitle: "阿拉比卡咖啡等级",
      arabicaHsCode: "HS 编码：09011100",
      arabicaGradeAAA: "AAA 等级",
      arabicaGradeAA: "AA 等级",
      arabicaGradeA: "A 等级",
      robustaTitle: "罗布斯塔咖啡等级",
      robustaHsCode: "HS 编码：09011200",
      robustaFaq12: "Robusta FAQ 12",
      robustaFaq14: "Robusta FAQ 14",
      robustaFaq16: "Robusta FAQ 16",
      robustaFaq18: "Robusta FAQ 18",
      certTitle: "认证与合规",
      certFairTrade: "符合 Fairtrade 公平贸易原则",
      certEu: "符合欧盟出口标准",
      certEcoCert: "与 EcoCert 认证伙伴合作（部分批次）",
      certOrganic: "可按需提供有机认证咖啡",
      certIso: "生产流程符合 ISO 标准",
      ctaTitle: "放心采购坦桑尼亚精品咖啡",
      ctaBody:
        "欢迎联系洽谈长期供货协议、自有品牌方案以及定制拼配。",
      ctaWhy: "了解全球买家选择坦桑尼亚咖啡的原因",
    },
  },
  // Japanese: UI labels; other content falls back to English via t()'s fallback logic.
  ja: {
    nav: {
      home: "ホーム",
      about: "会社概要",
      products: "製品",
      blog: "ブログ",
      partner: "パートナー",
      contact: "お問い合わせ",
      requestQuote: "見積もり依頼",
    },
    hero: {
      title: "貿易で大陸をつなぐ",
      subtitle:
        "タンザニアから世界へ、高品質な農産物をお届けします。90年以上の業界経験を持つ信頼できる調達パートナーです。",
      viewProducts: "製品を見る",
      partnerWithUs: "パートナーになる",
      yearsExpertise: "90年以上",
      combinedExpertise: "蓄積された経験",
      countries: "5カ国以上",
      globalReach: "グローバルな供給網",
      supplyChain: "360°サプライ",
      chainManagement: "チェーンマネジメント",
      logisticsTitle: "時間どおりの納品",
      logisticsSubtitle: "一貫した信頼性の高いロジスティクス",
    },
    home: {
      productsTitle: "当社の製品ポートフォリオ",
      productsSubtitle:
        "タンザニアの優れた産地から調達された製品は、国際基準と認証を満たしています。",
    },
    products: {
      cashew: "生カシューナッツ & カーネル",
      cashewDesc:
        "タンザニア有数の農園から世界の加工業者へ。安定した品質のプレミアムRCNとカーネルを供給します。",
      cashewHighlight:
        "RCNアウトターン: 50–55Lbs｜ナッツカウント: 160–180｜カーネル: W180・W240・W320",
      coffee: "コーヒー",
      coffeeDesc:
        "タンザニア産アラビカ＆ロブスタ。こだわりのロースター向けに、畑からコンテナまで一貫対応します。",
      coffeeHighlight:
        "アラビカ: AAA・AA・A 等級｜ロブスタ: FAQ 12・14・16・18",
      pulses: "豆類 & 種子",
      pulsesDesc:
        "ひよこ豆、ツルアズキ、緑豆、白ごま・黒ごまなど、タンザニア各地から直接調達。",
      pulsesHighlight: "純度: 98％以上｜複数バラエティ",
      liquor: "リカー（酒類）",
      liquorDesc:
        "インドとモーリシャスの蒸留所から、アフリカ市場向けに厳選したウイスキー・ラム・ウォッカ・ジン。",
      liquorHighlight: "バルク・卸・小売対応",
      imports: "輸入品",
    },
    whyChooseUs: {
      title: "Gamma International が選ばれる理由",
      subtitle: "アフリカ生産者と世界のバイヤーをつなぐ信頼の架け橋",
      benefit1Title: "360°ソーシング & ロジスティクス",
      benefit1Desc:
        "タンザニアからアジア・中東・ヨーロッパまで、サプライチェーン全体を一括管理",
      benefit2Title: "現地での品質管理",
      benefit2Desc: "生産のあらゆる工程で厳格な検品と品質保証を実施",
      benefit3Title: "認定サプライヤーネットワーク",
      benefit3Desc: "タンザニア各地の信頼できる生産者と長期契約",
      benefit4Title: "輸出書類・認証サポート",
      benefit4Desc: "コンプライアンスと証明書の取得を専任チームが支援",
      benefit5Title: "倫理的な貿易慣行",
      benefit5Desc: "生産者とバイヤー双方の価値を高める透明な取引方針",
      benefit6Title: "経験豊富な現地チーム",
      benefit6Desc: "農園から港湾オペレーションまで、現場を知るプロフェッショナルが対応",
    },
    globalPresence: {
      title: "グローバル拠点",
      subtitle:
        "世界の主要経済ハブに戦略的プレゼンスを持ち、大陸をまたいだオペレーションを展開しています。",
      stat1Value: "90+",
      stat1Label: "累計経験年数",
      stat1Desc: "多国籍チームによる深い業界知識",
      stat2Value: "5+",
      stat2Label: "輸出先の国数",
      stat2Desc: "アジア・中東・ヨーロッパなどへ輸出",
      stat3Value: "7",
      stat3Label: "製品カテゴリー",
      stat3Desc: "多様なプレミアム商品ポートフォリオ",
      stat4Value: "360°",
      stat4Label: "サプライチェーン",
      stat4Desc: "農園から港まで一貫管理",
      locationsTitle: "拠点一覧",
      location1: "タンザニア・ダルエスサラーム",
      location1Role: "登記オフィス & オペレーション拠点",
      location2: "アラブ首長国連邦・ドバイ",
      location2Role: "戦略的グローバル本社",
      location3: "ガーナ",
      location3Role: "地域オペレーション拠点",
      location4: "インド",
      location4Role: "加工 & ロジスティクスハブ",
      location5: "ドイツ",
      location5Role: "欧州オペレーション",
      location6: "アメリカ合衆国",
      location6Role: "北米拠点",
      location7: "モーリシャス",
      location7Role: "酒類生産施設",
    },
    common: {
      learnMore: "詳しく見る",
      requestQuote: "見積もり依頼",
      backToProducts: "製品一覧に戻る",
      // WhatsApp
      whatsappAriaLabel: "WhatsAppでお問い合わせ",
      whatsappTooltip: "チャットで相談",
      // About page
      aboutIntro:
        "Gamma International Tanzania Ltd は、タンザニア・ダルエスサラームを拠点とする輸出入企業として、高品質な農産物と工業製品の調達・加工・貿易を行っています。",
      aboutVisionTitle: "ビジョン",
      aboutVisionBody:
        "アフリカにおいて最も信頼される農産物・天然資源の調達および輸出パートナーになること。",
      aboutMissionTitle: "ミッション",
      aboutMissionBody:
        "アフリカの農業ポテンシャルを、誠実さとイノベーション、そして持続的なパートナーシップを通じて世界の市場と結びつけること。",
      aboutStoryTitle: "私たちの歩み",
      aboutStoryP1:
        "Masasi、Mtwara、Newala、Dodoma、Iringa、Arusha など、タンザニア各地のパートナーと共に、安定した品質・透明性の高い取引・優れたロジスティクスを実現してきました。",
      aboutStoryP2:
        "Gamma の目標は、タンザニアの農家をエンパワーし、世界のバイヤーに価値を提供し、持続可能な貿易を一つの信頼できるブランドの下で推進することです。",
      aboutTrustedTitle: "信頼される専門性",
      aboutTrustedBody:
        "農産物輸出・酒類・化学品まで、360°サプライチェーンで対応。",
      aboutGlobalTitle: "グローバル展開",
      aboutGlobalBody: "FOB・CNF条件で5カ国以上へ輸出実績。",
      aboutPromiseTitle: "私たちの約束",
      aboutPromiseBody:
        "揺るぎない信頼を基盤に、すべての出荷で高い品質をお届けします。",
      // Footer
      footerDescription:
        "大陸と大陸をつなぐ貿易ハブとして、タンザニアから世界へプレミアム農産物を供給します。",
      footerProductsTitle: "製品",
      footerCompanyTitle: "会社情報",
      footerContactTitle: "お問い合わせ",
      footerCopyright: "All rights reserved.",
      // Contact page
      contactSubtitle:
        "タンザニアの信頼できる輸出パートナーと共に、新たなビジネスを始めませんか。まずはお気軽にお問い合わせください。",
      contactFormTitle: "お問い合わせフォーム",
      contactNameLabel: "お名前 *",
      contactEmailLabel: "メールアドレス *",
      contactPhoneLabel: "電話番号 *",
      contactPhonePlaceholder: "電話番号",
      contactCompanyLabel: "会社名",
      contactMessageLabel: "お問い合わせ内容 *",
      contactSubmitSending: "送信中...",
      contactSubmitLabel: "送信する",
      contactHeadOfficeTitle: "本社所在地",
      contactHeadOfficeName: "Gamma International Tanzania Ltd",
      contactAddressLine1: "Rita Towers 24階",
      contactAddressLine2: "タンザニア・ダルエスサラーム",
      contactAddressPoBox: "P.O. Box 22469",
      contactPhoneTitle: "電話",
      contactEmailTitle: "メール",
      contactMapTitle: "所在地",
      contactMapCaption: "Rita Towers（ダルエスサラーム中心部）",
      contactToastSuccessTitle: "送信が完了しました",
      contactToastSuccessDescription:
        "お問い合わせありがとうございます。24時間以内に担当者よりご連絡いたします。",
      contactToastErrorTitle: "エラー",
      contactToastErrorGeneric: "送信に失敗しました。時間をおいて再度お試しください。",
      // Products page shell
      productsPageTitle: "取扱製品",
      productsPageSubtitle:
        "高品質な農産物の輸出と、選び抜かれた輸入品のラインナップをご覧ください。",
      productsExportTitle: "農産物輸出",
      productsExportBadge: "タンザニア",
      productsImportTitle: "プレミアム輸入品",
      productsImportBadge: "国際",
      productsCtaTitle: "当社製品にご興味はありますか？",
      productsCtaBody:
        "価格・ロット・カスタム仕様など、お客様のビジネスに合わせたご提案をいたします。",
      productsCtaRequestQuote: "見積もり依頼",
      productsCtaPartner: "パートナーシップについて相談",
      // Partner page
      partnerSubtitle:
        "Gamma International Tanzania Ltd は、アフリカの生産者と世界のバイヤーを結ぶシームレスな貿易の架け橋です。",
      partnerWhyTitle: "Gamma と提携する理由",
      partnerBenefit1:
        "タンザニアからアジア・中東へ至るまでの360°ソーシング & ロジスティクス",
      partnerBenefit2:
        "各工程での現地品質検査と検品体制",
      partnerBenefit3:
        "長期契約にもとづく信頼できるサプライヤーベース",
      partnerBenefit4:
        "輸出書類とロジスティクスを担当する専任チーム",
      partnerBenefit5:
        "すべての関係者に利益をもたらす倫理的で透明な取引",
      partnerBenefit6:
        "農園から港湾までを熟知した経験豊富な現地チーム",
      partnerProcessTitle: "パートナーシップの流れ",
      partnerProcessStep1Title: "ソーシング",
      partnerProcessStep1Desc:
        "タンザニア各地の認定農家・生産者との直接ネットワークを構築。",
      partnerProcessStep2Title: "品質管理",
      partnerProcessStep2Desc:
        "現地での検品・テストを通じて高い品質基準を維持。",
      partnerProcessStep3Title: "書類・認証",
      partnerProcessStep3Desc:
        "輸出書類、証明書、規制対応をワンストップでサポート。",
      partnerProcessStep4Title: "ロジスティクス",
      partnerProcessStep4Desc:
        "コンテナ積み込みから船積み調整、納期管理まで一括対応。",
      partnerProcessStep5Title: "納品",
      partnerProcessStep5Desc:
        "合意したスペックとスケジュールどおりに商品をお届けします。",
      partnerCtaTitle: "パートナーシップを今すぐスタートしませんか？",
      partnerCtaBody:
        "双方にとってメリットのある長期的なビジネスパートナーシップについて、ぜひご相談ください。",
      partnerCtaButton: "お問い合わせ",
      // Home CTA section
      ctaTitle: "高品質を調達し、信頼を築き、ともに成長しましょう",
      ctaSubtitle:
        "アフリカとアジア・中東をつなぐ長期的な貿易パートナーシップを一緒に構築します。",
      ctaPrimaryButton: "お問い合わせ",
      ctaSecondaryButton: "パートナーシップの詳細を見る",
      // Blog list page
      blogTitle: "業界インサイト & 貿易ニュース",
      blogSubtitle:
        "タンザニアの農産物輸出、市場トレンド、国際貿易のベストプラクティスに関する最新情報。",
      blogCategoryAll: "すべての記事",
      blogCategoryIndustryInsights: "業界インサイト",
      blogCategoryProductSpotlight: "製品紹介",
      blogCategoryTradeInsights: "貿易インサイト",
      blogCategoryCompanyNews: "会社ニュース",
      blogCategoryExportGuide: "輸出ガイド",
      blogCategoryEducational: "学び",
      blogReadMore: "続きを読む",
      blogNoPosts: "このカテゴリには記事がありません。",
      blogNewsletterPrompt: "最新の業界ニュースを受け取りたいですか？",
      blogNewsletterButton: "ニュースレターを購読する",
      // Blog post page
      blogPostNotFoundTitle: "記事が見つかりません",
      blogPostBackToBlog: "ブログ一覧に戻る",
      blogPostShare: "共有",
      blogPostRelatedArticles: "関連記事",
      blogPostContactUs: "お問い合わせ",
      blogPostViewProducts: "製品一覧を見る",
      // Not-found page
      notFoundTitle: "404 ページが見つかりません",
      notFoundSubtitle: "ルーターにこのページを追加し忘れていませんか？",
    },
    cashewPage: {
      backToProducts: "製品一覧に戻る",
      title: "生カシューナッツ & カシューナッツカーネル",
      subtitle: "農園から加工まで。タンザニア産最高品質のカシューナッツを世界市場へ。",
      rcnTitle: "生カシューナッツ (RCN)",
      rcnBody:
        "タンザニア産RCNは高いカーネル回収率と安定した水分値、優れたナッツカウントで知られ、インドやベトナムの加工業者に選ばれています。",
      rcnSpecsTitle: "仕様",
      rcnOutturn: "アウトターン",
      rcnNutCount: "ナッツカウント",
      rcnMoisture: "水分含有量",
      rcnPackaging: "梱包",
      rcnOrigin: "産地",
      rcnHsCode: "HSコード",
      rcnContainer: "40ft HC コンテナ",
      rcnMoq: "最小注文数量",
      kernelsTitle: "カシューナッツカーネル",
      kernelsBody:
        "カーネルは風味・色・食感を損なわないよう慎重に加工され、真空パックで世界中のリテール・業務用途向けに出荷されます。",
      kernelsSpecsTitle: "仕様",
      kernelsGrades: "グレード",
      kernelsHsCode: "HSコード",
      kernelsMoisture: "水分含有量",
      kernelsSeason: "シーズン",
      kernelsPackaging: "梱包",
      kernelsAltPack: "代替パック",
      kernels20ft: "20ft コンテナ",
      kernels40ft: "40ft コンテナ",
      ctaTitle:
        "高品質な生カシューナッツとカーネルを、トレーサビリティと信頼性とともにお届けします。",
      ctaBody:
        "価格・在庫・梱包仕様（真空パック等）についてはお気軽にお問い合わせください。",
      ctaRequestQuote: "カシューナッツの見積もり依頼",
      ctaLearnMore: "当社のカシューナッツについて詳しく見る",
    },
    coffeePage: {
      title: "コーヒー（アラビカ & ロブスタ）",
      subtitle: "世界のロースター・ディストリビューター向けタンザニア産プレミアムコーヒー",
      tagline:
        "キリマンジャロ高地から世界のカップへ。本物のタンザニアコーヒーを一杯ずつ。",
      intro:
        "タンザニア産アラビカは明るい酸味と豊かな香り、ロブスタは力強いボディとクレマが特徴です。安定した品質と国際認証を備え、スペシャルティにも量販にも対応します。",
      specsTitle: "主要仕様",
      specCropSeason: "収穫シーズン",
      specCropSeasonValue: "5月〜10月",
      specPackaging: "梱包",
      specPackagingValue: "PEライナー入り60kgジュート袋",
      spec20ft: "20ft コンテナ",
      spec20ftValue: "約9.8MT（164袋）",
      spec40ft: "40ft コンテナ",
      spec40ftValue: "約19.2MT（320袋）",
      specOrigin: "主な産地",
      specOriginValue: "キリマンジャロ、ムベヤ、ブコバ地域",
      gradesTitle: "グレード & 認証",
      arabicaTitle: "アラビカコーヒーのグレード",
      arabicaHsCode: "HSコード: 09011100",
      arabicaGradeAAA: "AAA グレード",
      arabicaGradeAA: "AA グレード",
      arabicaGradeA: "A グレード",
      robustaTitle: "ロブスタコーヒーのグレード",
      robustaHsCode: "HSコード: 09011200",
      robustaFaq12: "Robusta FAQ 12",
      robustaFaq14: "Robusta FAQ 14",
      robustaFaq16: "Robusta FAQ 16",
      robustaFaq18: "Robusta FAQ 18",
      certTitle: "認証・コンプライアンス",
      certFairTrade: "フェアトレード準拠の調達",
      certEu: "EU輸出基準に準拠",
      certEcoCert: "一部ロットでEcoCert認証パートナーと連携",
      certOrganic: "オーガニック対応もご相談可能",
      certIso: "ISOに準拠した加工プロセス",
      ctaTitle: "タンザニアコーヒーを安心して調達",
      ctaBody:
        "長期供給契約、PB（プライベートブランド）、ブレンド設計など、お客様の市場に合わせてご提案します。",
      ctaWhy: "世界のロースターがタンザニアコーヒーを選ぶ理由を見る",
    },
    pulsesPage: {
      title: "豆類 & 種子",
      subtitle:
        "タンザニアの肥沃な土壌で育った、ひよこ豆・ツルアズキ・緑豆・ごまなどのプレミアム豆類・油糧種子。",
      pulsesTitle: "豆類",
      pulsesBody:
        "タンザニア産の豆類は高たんぱくで風味豊か。機械選別とグレーディングを行い、食品メーカーや大口バイヤー向けに出荷します。",
      sesameTitle: "ごま（セサミシード）",
      sesameBody:
        "白ごま・茶ごまを機械洗浄およびソーテックス処理し、高い純度と安定した品質を実現。南部主要産地から直接調達します。",
      ctaTitle: "年間を通じて出荷可能な豆類輸出パートナー",
      ctaBody:
        "タンザニア産豆類・ごまのバルク注文や価格については、お気軽にお問い合わせください。",
      ctaBlogButton: "当社の豆類・種子ポートフォリオを見る",
      varietiesTitle: "取扱品種",
      specTitle: "仕様",
      // Variety badges
      varietyChickpeas: "ひよこ豆",
      varietyPigeonPeas: "ツルアズキ（ピジョンピー）",
      varietyKidneyBeans: "レッドキドニー豆",
      varietyGreenMungBeans: "緑豆（ムング豆）",
      varietyWhiteSesame: "白ごま",
      varietyBrownSesame: "茶ごま",
      sesameHsCode: "HSコード：12074090",
      // Shared spec labels
      specMoistureLabel: "水分",
      specPurityLabel: "純度",
      specPackagingLabel: "包装",
      specLoadingLabel: "積み込み",
      specOriginLabel: "産地",
      specSeasonLabel: "シーズン",
      spec20ftLabel: "20ftコンテナ",
      spec40ftLabel: "40ftコンテナ",
      specProcessingLabel: "処理",
      // Pulses spec values
      specPulsesMoistureValue: "豆類：水分10〜14％",
      specPulsesPurityValue: "機械選別後の純度98％以上",
      specPulsesPackagingValue: "25kg または 50kg PPバッグ",
      specPulsesLoadingValue: "床積みコンテナローディング",
      specPulsesOriginValue: "タンザニア各地の主要豆類産地",
      specPulsesSeasonValue: "作物ごとに異なるが、主に収穫後シーズンに輸出",
      specPulses20ftValue: "作物により約16〜17MT",
      specPulses40ftValue: "多くの品目で最大約25MT",
      // Sesame spec values
      specSesamePurityValue: "機械洗浄＋ソーテックス処理後の純度98％以上",
      specSesameMoistureValue: "水分8％未満",
      specSesameProcessingValue: "機械洗浄およびソーテックス選別",
      specSesamePackagingValue: "25kg または 50kg PPバッグ",
      specSesameSeasonValue: "主にごま収穫期後のメイン輸出シーズン",
      specSesame20ftValue: "製品により約16〜17MT",
      specSesame40ftValue: "多くの品目で最大約25MT",
    },
    liquorPage: {
      title: "リカー & アルコール飲料",
      subtitle: "インドとモーリシャスから輸入する高品質スピリッツを東アフリカ市場へ",
      intro:
        "Gamma International Tanzania Ltd は、信頼できる蒸留所からプレミアムウイスキー・ラム・ウォッカ・ジンを輸入し、バルク・卸・小売向けに供給しています。複数容量のボトルで市場ニーズに対応します。",
      ctaTitle: "プレミアム輸入スピリッツでポートフォリオを拡大",
      ctaBody:
        "大口注文、価格、東アフリカ域内への配送条件などについてご相談ください。",
      ctaLearnMore: "当社の酒類ラインナップを詳しく見る",
      productsTitle: "製品レンジ",
      spiritsTitle: "取扱スピリッツ",
      sizesTitle: "ボトルサイズ",
      gradesTitle: "酒類グレード",
      specsTitle: "梱包 & ロジスティクス",
      specPackagingLabel: "梱包",
      specPackagingValue: "12本入り強化カートンボックス",
      spec20ftLabel: "20ft コンテナ",
      spec20ftValue: "約13,200本（750mlの場合／混載可）",
      specOriginLabel: "原産国",
      specOriginValue: "インド・モーリシャス",
      specQualityLabel: "品質",
      specQualityValue: "認定蒸留所からのプレミアムグレード",
      specDistributionLabel: "販売形態",
      specDistributionValue: "バルク・卸売・小売",
      marketsTitle: "主要販売先",
      marketsIntro: "東アフリカ市場で安定供給を行い、以下のチャネルに対応しています。",
      marketWholesale: "卸売業者",
      marketRetail: "小売チェーン",
      marketHospitality: "ホテル・レストラン・バー",
      // Spirit names & sizes for badges
      spiritWhisky: "ウイスキー",
      spiritRum: "ラム",
      spiritVodka: "ウォッカ",
      spiritGin: "ジン",
      size200ml: "200mlボトル",
      size375ml: "375mlボトル",
      size750ml: "750mlボトル",
      gradeWhiskyHs: "ウイスキー：HSコード 22089099",
      gradeRumHs: "ラム：HSコード 22084090",
      gradeLiquorHs: "リキュール類：HSコード 22087019",
    },
  },
};
