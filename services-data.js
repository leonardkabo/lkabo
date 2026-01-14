// services-data.js - Version Optimisée & Professionnelle

/**
 * Structure de données optimisée pour les services
 * Avantages : Réutilisabilité, maintenance facile, typage clair
 */

// Configuration globale
const CONFIG = {
    currency: 'FCFA',
    defaultDuration: 'À convenir',
    vatRate: 0.18, // 18% TVA
    deliveryTime: {
        standard: '48-72h',
        express: '24h',
        premium: '12h'
    }
};

// Catégories de services pour un meilleur classement
const SERVICE_CATEGORIES = {
    MULTIMEDIA: {
        id: 'multimedia',
        name: 'Production Multimédia',
        color: 'blue',
        icon: 'fa-camera-retro',
        priority: 1
    },
    WEB_DEV: {
        id: 'web-dev',
        name: 'Développement Web',
        color: 'indigo',
        icon: 'fa-code',
        priority: 2
    },
    AUTOMATION: {
        id: 'automation',
        name: 'Automatisation & IA',
        color: 'green',
        icon: 'fa-robot',
        priority: 3
    },
    DESIGN: {
        id: 'design',
        name: 'Design Graphique',
        color: 'purple',
        icon: 'fa-palette',
        priority: 4
    },
    COMMUNICATION: {
        id: 'com-journalism',
        name: 'Communication',
        color: 'red',
        icon: 'fa-microphone',
        priority: 5
    }
};

// Fonctions utilitaires
const formatPrice = (amount, includeTax = false) => {
    const basePrice = typeof amount === 'number' ? amount : parseInt(amount.toString().replace(/[^0-9]/g, ''));
    const finalPrice = includeTax ? basePrice * (1 + CONFIG.vatRate) : basePrice;
    return `${finalPrice.toLocaleString()} ${CONFIG.currency}`;
};

const generateSlug = (text) => {
    return text.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
};

// Données des services optimisées
const servicesData = [
    {
        // Production Multimédia
        id: SERVICE_CATEGORIES.MULTIMEDIA.id,
        category: SERVICE_CATEGORIES.MULTIMEDIA,
        
        // Informations de base
        title: "Production Multimédia de Prestige",
        slug: generateSlug("Production Multimédia de Prestige"),
        tagline: "Capturer l'invisible, immortaliser l'instant",
        shortDesc: "Prises de vue professionnelle, photo et vidéo pour tous vos évènements marquants.",
        
        // Médias
        thumbnail: "Mariage.png",
        gallery: ["Mariage.png", "Automedication-Grossesse ok (2).png", "profile-placeholder.png"],
        videoPreview: null,
        
        // Tarification dynamique
        pricing: {
            basePrice: 50000,
            currency: CONFIG.currency,
            vatIncluded: false,
            packages: [
                {
                    name: "Baptême",
                    price: 50000,
                    duration: "1 journée",
                    features: [
                        "Cérémonie religieuse & laïque",
                        "Reportage réception & repas",
                        "Montage vidéo rythmé",
                        "Album photo souvenir"
                    ],
                    popular: false
                },
                {
                    name: "Mariage",
                    price: 65000,
                    duration: "2 journées",
                    features: [
                        "Préparatifs complets",
                        "Cérémonies (Civile/Religieuse)",
                        "Cocktail & Soirée dansante",
                        "Album Luxe & Montage 4K"
                    ],
                    popular: true,
                    badge: "MEILLEUR CHOIX"
                },
                {
                    name: "Anniversaire",
                    price: 50000,
                    duration: "1 journée",
                    features: [
                        "Shooting 'Guest Stars'",
                        "Vidéo 'Highlights' (1-3 min)",
                        "Livraison numérique HD",
                        "Options impressions directes"
                    ],
                    popular: false
                }
            ],
            addOns: [
                { name: "Toile de luxe (Poster)", price: 10000 },
                { name: "Carte d'invitation (Design)", price: 10000 },
                { name: "Shooting extérieur privé", price: 15000 }
            ]
        },
        
        // Détails du service
        description: {
            main: "L'image est le seul souvenir tangible de vos moments précieux. Chez Kaboom Studio, nous transformons vos émotions en chefs-d'œuvre visuels grâce à une expertise technique de pointe.",
            highlights: [
                "Matériel professionnel plein format (Full Frame)",
                "Livraison express 48-72h",
                "Équipe expérimentée et créative",
                "Post-production avancée incluse"
            ],
            process: [
                "1. Consultation préalable gratuite",
                "2. Planification détaillée du tournage",
                "3. Couverture complète de l'événement",
                "4. Sélection et retouche des meilleurs moments",
                "5. Livraison dans les délais convenus"
            ]
        },
        
        // Spécifications techniques
        specs: {
            equipment: ["Sony A7 IV", "Canon EOS R5", "Objectifs professionnels", "Drones DJI"],
            formats: ["4K UHD", "Full HD", "RAW", "JPEG haute qualité"],
            delivery: ["Gallery en ligne privée", "Clé USB premium", "Album photo physique"]
        },
        
        // SEO & Marketing
        seo: {
            title: "Production Multimédia | Photographe & Vidéaste Professionnel Bénin",
            description: "Photographe et vidéaste professionnel à Parakou. Mariage, baptême, anniversaire. Qualité cinématographique, livraison rapide.",
            keywords: ["photographe Parakou", "vidéaste Bénin", "mariage", "baptême", "4K"]
        },
        
        // Actions utilisateur
        cta: {
            primary: { text: "Réserver ma date", action: "booking", urgency: "high" },
            secondary: { text: "Voir portfolio", action: "gallery" },
            consultation: { text: "Devis personnalisé", action: "quote" }
        },
        
        // Support & garanties
        support: {
            guarantee: "Satisfaction garantie ou remboursé",
            revisions: 2,
            supportPeriod: "1 mois après livraison",
            responseTime: "Moins de 2h en journée"
        },
        
        // Statistiques & performance
        metrics: {
            completedProjects: 150,
            satisfactionRate: 98,
            averageRating: 4.9,
            deliveryOnTime: 100
        },
        
        // Dates importantes
        availability: {
            bookingWindow: "6 mois à l'avance",
            peakSeasons: ["Décembre-Janvier", "Juillet-Août"],
            rushFee: 0.25 // 25% supplémentaire
        }
    },
    
    // Développement Web
    {
        id: SERVICE_CATEGORIES.WEB_DEV.id,
        category: SERVICE_CATEGORIES.WEB_DEV,
        
        title: "Développement Web & Applications",
        slug: generateSlug("Développement Web Applications"),
        tagline: "Solutions robustes, évolutives et centrées utilisateur",
        shortDesc: "Conception de sites vitrines et applications web sur mesure haute performance.",
        
        thumbnail: "FORUM.png",
        gallery: ["FORUM.png", "site_ABLDjpg"],
        
        pricing: {
            basePrice: 150000,
            currency: CONFIG.currency,
            vatIncluded: false,
            packages: [
                {
                    name: "PACK VITRINE",
                    price: 150000,
                    duration: "1-2 semaines",
                    features: [
                        "Jusqu'à 5 pages",
                        "Design Mobile Responsive",
                        "Référencement SEO de base",
                        "Formulaire de contact"
                    ],
                    popular: false
                },
                {
                    name: "E-COMMERCE",
                    price: 350000,
                    duration: "3-4 semaines",
                    features: [
                        "Boutique illimitée",
                        "Paiement Mobile Money",
                        "Gestion des stocks",
                        "Formation à l'outil"
                    ],
                    popular: true,
                    badge: "TOP VENTE"
                },
                {
                    name: "SUR MESURE",
                    price: 0, // Devis personnalisé
                    duration: "À convenir",
                    features: [
                        "Applications métiers",
                        "Dashboards complexes",
                        "API & Intégrations",
                        "Support 24/7"
                    ],
                    popular: false,
                    customQuote: true
                }
            ]
        },
        
        description: {
            main: "Je conçois des plateformes qui ne se contentent pas d'être esthétiques : elles sont conçues pour convertir vos visiteurs en clients et automatiser vos flux de travail.",
            highlights: [
                "Stack moderne : Next.js, Tailwind, Node.js",
                "Optimisation SEO avancée",
                "Sécurité renforcée",
                "Performance maximale"
            ],
            technologies: [
                { name: "Next.js", level: "expert", category: "frontend" },
                { name: "React", level: "expert", category: "frontend" },
                { name: "Node.js", level: "expert", category: "backend" },
                { name: "MongoDB", level: "expert", category: "database" },
                { name: "Tailwind CSS", level: "expert", category: "styling" }
            ]
        },
        
        cta: {
            primary: { text: "Démarrer mon projet", action: "consultation" },
            secondary: { text: "Voir mes réalisations", action: "portfolio" }
        }
    },
    
    // Les autres services suivent le même pattern...
    // Automation & IA
    {
        id: SERVICE_CATEGORIES.AUTOMATION.id,
        category: SERVICE_CATEGORIES.AUTOMATION,
        
        title: "Automatisation & Intelligence Artificielle",
        slug: generateSlug("Automatisation Intelligence Artificielle"),
        tagline: "L'ère de l'efficacité",
        shortDesc: "Gagnez du temps avec des outils qui travaillent pour vous 24h/24.",
        
        thumbnail: null,
        icon: "fa-robot",
        
        pricing: {
            packages: [
                {
                    name: "AUDIT PRO",
                    price: 25000,
                    features: ["Analyse complète", "Recommandations d'outils", "Plan d'action"]
                },
                {
                    name: "ASSISTANT WHATSAPP",
                    price: 150000,
                    features: ["Réponses IA", "Liaison Google Sheets", "Capture prospects"]
                }
            ]
        },
        
        description: {
            main: "Déléguez les tâches répétitives à des agents intelligents. Je construis votre 'collaborateur digital' qui travaille sans relâche, 24h/24 et 7j/7.",
            tools: ["Make.com", "Zapier", "Airtable", "OpenAI", "Google Apps Script"]
        }
    }
];

// Fonctions utilitaires pour l'affichage
const getServiceById = (id) => servicesData.find(service => service.id === id);
const getServicesByCategory = (categoryId) => servicesData.filter(service => service.category.id === categoryId);
const getPopularServices = () => servicesData.filter(service => service.pricing?.packages?.some(pkg => pkg.popular));
const getServicesInPriceRange = (min, max) => servicesData.filter(service => {
    const prices = service.pricing?.packages?.map(pkg => pkg.price) || [];
    return prices.some(price => price >= min && price <= max);
});

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        servicesData,
        SERVICE_CATEGORIES,
        CONFIG,
        getServiceById,
        getServicesByCategory,
        getPopularServices,
        formatPrice
    };
}

// Pour usage dans le navigateur
window.servicesData = servicesData;
window.SERVICE_CATEGORIES = SERVICE_CATEGORIES;