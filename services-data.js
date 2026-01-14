// services-data.js - Version Corrigée Sans Erreurs

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

// Catégories de services - VERSION CORRIGÉE
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
        id: 'automation',  // ← CORRIGÉ: manquait "id:"
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

// Données des services - VERSION SIMPLIFIÉE SANS ERREURS
const servicesData = [
    {
        // Production Multimédia
        id: SERVICE_CATEGORIES.MULTIMEDIA.id,
        category: SERVICE_CATEGORIES.MULTIMEDIA,
        
        title: "Production Multimédia de Prestige",
        slug: generateSlug("Production Multimédia de Prestige"),
        tagline: "Capturer l'invisible, immortaliser l'instant",
        shortDesc: "Prises de vue professionnelle, photo et vidéo pour tous vos évènements marquants.",
        
        // Médias
        thumbnail: "Mariage.png",
        gallery: ["Mariage.png", "Automedication-Grossesse ok (2).png", "profile-placeholder.png"],
        
        // Tarification
        pricing: {
            basePrice: 50000,
            currency: CONFIG.currency,
            vatIncluded: false,
            packages: [
                {
                    name: "Mariage",
                    price: 65000,
                    duration: "2 journées",
                    features: [
                        "Cérémonie complète",
                        "Album photo luxe", 
                        "Vidéo 4K montée",
                        "Livraison 48h"
                    ],
                    popular: true,
                    badge: "MEILLEUR CHOIX"
                },
                {
                    name: "Baptême",
                    price: 50000,
                    duration: "1 journée",
                    features: [
                        "Cérémonie religieuse",
                        "Photos retouchées",
                        "Montage vidéo",
                        "Livraison rapide"
                    ],
                    popular: false
                }
            ],
            addOns: [
                { name: "Toile de luxe", price: 10000 },
                { name: "Carte d'invitation", price: 10000 }
            ]
        },
        
        description: {
            main: "L'image est le seul souvenir tangible de vos moments précieux. Nous transformons vos émotions en chefs-d'œuvre visuels.",
            highlights: [
                "Matériel professionnel Full Frame",
                "Livraison express 48-72h",
                "Équipe expérimentée",
                "Post-production incluse"
            ]
        },
        
        metrics: {
            completedProjects: 150,
            satisfactionRate: 98,
            averageRating: 4.9,
            deliveryOnTime: 100
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
        
        pricing: {
            basePrice: 150000,
            currency: CONFIG.currency,
            vatIncluded: false,
            packages: [
                {
                    name: "Site Vitrine",
                    price: 150000,
                    duration: "1-2 semaines",
                    features: [
                        "Jusqu'à 5 pages",
                        "Design responsive",
                        "SEO optimisé",
                        "Formulaire contact"
                    ],
                    popular: false
                },
                {
                    name: "E-commerce",
                    price: 350000,
                    duration: "3-4 semaines",
                    features: [
                        "Boutique complète",
                        "Paiement Mobile Money",
                        "Gestion stocks",
                        "Formation incluse"
                    ],
                    popular: true,
                    badge: "TOP VENTE"
                }
            ]
        }
    },
    
    // Automatisation
    {
        id: SERVICE_CATEGORIES.AUTOMATION.id,
        category: SERVICE_CATEGORIES.AUTOMATION,
        
        title: "Automatisation & IA",
        slug: generateSlug("Automatisation IA"),
        tagline: "L'ère de l'efficacité",
        shortDesc: "Gagnez du temps avec des outils qui travaillent pour vous 24h/24.",
        
        icon: "fa-robot",
        
        pricing: {
            packages: [
                {
                    name: "Assistant WhatsApp",
                    price: 150000,
                    features: ["Réponses IA", "Liaison Google Sheets", "Capture prospects"]
                },
                {
                    name: "CRM Automatisé",
                    price: 250000,
                    features: ["Automatisation ventes", "Email & SMS", "Relances intelligentes"]
                }
            ]
        }
    },
    
    // Design Graphique
    {
        id: SERVICE_CATEGORIES.DESIGN.id,
        category: SERVICE_CATEGORIES.DESIGN,
        
        title: "Design Graphique",
        slug: generateSlug("Design Graphique"),
        tagline: "Visual Storytelling",
        shortDesc: "Identité visuelle, logos et supports marketing percutants.",
        
        thumbnail: "Automedication-Grossesse ok (2).png",
        
        pricing: {
            basePrice: 20000,
            packages: [
                {
                    name: "Logo & Branding",
                    price: 20000,
                    features: ["Logo professionnel", "Charte graphique", "Carte de visite"]
                },
                {
                    name: "Design Digital",
                    price: 5000,
                    features: ["Posts réseaux sociaux", "Bannières web", "Affiches"]
                }
            ]
        }
    },
    
    // Communication
    {
        id: SERVICE_CATEGORIES.COMMUNICATION.id,
        category: SERVICE_CATEGORIES.COMMUNICATION,
        
        title: "Com & Journalisme",
        slug: generateSlug("Com Journalisme"),
        tagline: "L'info, notre métier",
        shortDesc: "Rédaction web, animation radio et gestion de communication institutionnelle.",
        
        icon: "fa-microphone",
        
        pricing: {
            packages: [
                {
                    name: "Articles SEO",
                    price: 15000,
                    features: ["Article 1000 mots", "Optimisation SEO", "Recherche incluse"]
                },
                {
                    name: "Community Management",
                    price: 100000,
                    features: ["Gestion réseaux sociaux", "Stratégie contenu", "Rapports mensuels"]
                }
            ]
        }
    }
];

// Portfolio items
const portfolioItems = [
    {
        id: 1,
        title: "Plateforme Digitale HAI",
        category: "web",
        image: "FORUM.png",
        description: "Conception d'une plateforme de suivi pour l'ONG Health Access Initiative.",
        technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"]
    },
    {
        id: 2,
        title: "Identité Visuelle Pro",
        category: "design",
        image: "Automedication-Grossesse ok (2).png",
        description: "Charte graphique complète pour un programme de santé communautaire.",
        technologies: ["Photoshop", "Illustrator", "InDesign"]
    },
    {
        id: 3,
        title: "Reportage Mariage Prestige",
        category: "media",
        image: "Mariage.png",
        description: "Production de contenus audiovisuels pour événements.",
        technologies: ["Premiere Pro", "After Effects", "Photoshop"]
    }
];

// Fonctions utilitaires
const getServiceById = (id) => servicesData.find(service => service.id === id);
const getServicesByCategory = (categoryId) => servicesData.filter(service => service.category.id === categoryId);
const getPopularServices = () => servicesData.filter(service => service.pricing?.packages?.some(pkg => pkg.popular));

// Export pour Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        servicesData,
        portfolioItems,
        SERVICE_CATEGORIES,
        CONFIG,
        getServiceById,
        getServicesByCategory,
        getPopularServices,
        formatPrice
    };
}

// Pour navigateur
if (typeof window !== 'undefined') {
    window.servicesData = servicesData;
    window.portfolioItems = portfolioItems;
    window.SERVICE_CATEGORIES = SERVICE_CATEGORIES;
    window.CONFIG = CONFIG;
}