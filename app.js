// app.js - Version Corrigée sans conflits

// ===================================
// CONFIGURATION UNIQUE
// ===================================
const APP_CONFIG = {
    emailjs: {
        publicKey: "05difAaFfgYo_P2QL",
        serviceId: "service_kaboom_studio",
        templates: {
            contact: "template_45m0nm8",
            devis: "template_quycqzw"
        }
    }
};

// ===================================
// INITIALISATION EMAILJS
// ===================================
if (typeof emailjs !== 'undefined') {
    emailjs.init(APP_CONFIG.emailjs.publicKey);
    console.log('✅ EmailJS initialisé');
}

// ===================================
// UTILITAIRES
// ===================================
const appUtils = {
    smoothScroll: (target) => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    
    validateEmail: (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    
    showToast: (message) => {
        alert(message); // Simple mais efficace
    }
};

// ===================================
// NAVIGATION
// ===================================
const appNavigation = {
    init: () => {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            });
            
            // Fermer en cliquant ailleurs
            document.addEventListener('click', (e) => {
                if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                }
            });
        }
        
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    appUtils.smoothScroll(target);
                    mobileMenu?.classList.add('hidden');
                }
            });
        });
    }
};

// ===================================
// SERVICES - VERSION CORRIGÉE
// ===================================
const appServices = {
    showServiceDetail: (serviceId) => {
        console.log('Service cliqué:', serviceId);
        
        const services = {
            'multimedia': {
                title: 'Production Multimédia',
                content: `
                    <div class="max-w-4xl mx-auto p-8">
                        <h1 class="text-4xl font-bold mb-6 text-center">Production Multimédia de Prestige</h1>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="bg-blue-50 p-6 rounded-xl">
                                <h3 class="text-2xl font-semibold mb-4 text-blue-600">📸 Nos Forfaits</h3>
                                <div class="space-y-4">
                                    <div class="bg-white p-4 rounded-lg shadow">
                                        <h4 class="font-bold text-lg">Mariage</h4>
                                        <p class="text-blue-600 font-bold text-2xl">65 000 FCFA</p>
                                        <ul class="text-sm mt-2 space-y-1 text-gray-600">
                                            <li>✅ Cérémonie complète</li>
                                            <li>✅ Album photo luxe</li>
                                            <li>✅ Vidéo 4K montée</li>
                                            <li>✅ Livraison 48h</li>
                                        </ul>
                                    </div>
                                    <div class="bg-white p-4 rounded-lg shadow">
                                        <h4 class="font-bold text-lg">Baptême</h4>
                                        <p class="text-blue-600 font-bold text-2xl">50 000 FCFA</p>
                                        <ul class="text-sm mt-2 space-y-1 text-gray-600">
                                            <li>✅ Cérémonie religieuse</li>
                                            <li>✅ Photos retouchées</li>
                                            <li>✅ Montage vidéo</li>
                                            <li>✅ Livraison rapide</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-semibold mb-4">🎯 Réservez Maintenant</h3>
                                <button onclick="appServices.scrollToContact()" class="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
                                    📅 Prendre Rendez-vous
                                </button>
                                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                                    <p class="text-sm text-gray-600">
                                        <i class="fas fa-phone mr-2"></i>+229 01 65 45 87 78<br>
                                        <i class="fas fa-whatsapp mr-2"></i>+229 65 45 87 78
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            'web-dev': {
                title: 'Développement Web',
                content: `
                    <div class="max-w-4xl mx-auto p-8">
                        <h1 class="text-4xl font-bold mb-6 text-center">Développement Web & Applications</h1>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="bg-indigo-50 p-6 rounded-xl">
                                <h3 class="text-2xl font-semibold mb-4 text-indigo-600">💻 Nos Solutions</h3>
                                <div class="space-y-4">
                                    <div class="bg-white p-4 rounded-lg shadow">
                                        <h4 class="font-bold text-lg">Site Vitrine</h4>
                                        <p class="text-indigo-600 font-bold text-2xl">150 000 FCFA</p>
                                        <ul class="text-sm mt-2 space-y-1 text-gray-600">
                                            <li>✅ Design moderne & responsive</li>
                                            <li>✅ 5 pages incluses</li>
                                            <li>✅ SEO optimisé</li>
                                            <li>✅ Formulaire de contact</li>
                                        </ul>
                                    </div>
                                    <div class="bg-white p-4 rounded-lg shadow">
                                        <h4 class="font-bold text-lg">E-commerce</h4>
                                        <p class="text-indigo-600 font-bold text-2xl">350 000 FCFA</p>
                                        <ul class="text-sm mt-2 space-y-1 text-gray-600">
                                            <li>✅ Boutique complète</li>
                                            <li>✅ Paiement Mobile Money</li>
                                            <li>✅ Gestion des stocks</li>
                                            <li>✅ Formation incluse</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-semibold mb-4">🚀 Lancez votre Projet</h3>
                                <button onclick="appServices.scrollToContact()" class="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition">
                                    💡 Demander un Devis
                                </button>
                                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                                    <p class="text-sm text-gray-600">
                                        Stack technique: Next.js, Tailwind, Node.js<br>
                                        Délais: 1-3 semaines selon projet
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            'automation': {
                title: 'Automatisation & IA',
                content: `
                    <div class="max-w-4xl mx-auto p-8">
                        <h1 class="text-4xl font-bold mb-6 text-center">Automatisation Intelligente</h1>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="bg-green-50 p-6 rounded-xl">
                                <h3 class="text-2xl font-semibold mb-4 text-green-600">🤖 Nos Solutions</h3>
                                <div class="space-y-4">
                                    <div class="bg-white p-4 rounded-lg shadow">
                                        <h4 class="font-bold text-lg">Assistant WhatsApp</h4>
                                        <p class="text-green-600 font-bold text-2xl">150 000 FCFA</p>
                                        <ul class="text-sm mt-2 space-y-1 text-gray-600">
                                            <li>✅ Réponses automatiques IA</li>
                                            <li>✅ Capture de prospects</li>
                                            <li>✅ Intégration Google Sheets</li>
                                            <li>✅ Support 24/7</li>
                                        </ul>
                                    </div>
                                    <div class="bg-white p-4 rounded-lg shadow">
                                        <h4 class="font-bold text-lg">CRM Automatisé</h4>
                                        <p class="text-green-600 font-bold text-2xl">250 000 FCFA</p>
                                        <ul class="text-sm mt-2 space-y-1 text-gray-600">
                                            <li>✅ Automatisation des ventes</li>
                                            <li>✅ Email & SMS automatiques</li>
                                            <li>✅ Relances intelligentes</li>
                                            <li>✅ Tableau de bord analytics</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-semibold mb-4">⚡ Automatisez vos Processus</h3>
                                <button onclick="appServices.scrollToContact()" class="bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition">
                                    🔧 Automatiser Maintenant
                                </button>
                                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                                    <p class="text-sm text-gray-600">
                                        Outils: Make.com, Zapier, OpenAI<br>
                                        Économie de temps: 70% garantie
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            'design': {
                title: 'Design & Image de Marque',
                content: `
                    <div class="max-w-4xl mx-auto p-8">
                        <h1 class="text-4xl font-bold mb-6 text-center">Design Graphique Professionnel</h1>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="bg-purple-50 p-6 rounded-xl">
                                <h3 class="text-2xl font-semibold mb-4 text-purple-600">🎨 Nos Créations</h3>
                                <div class="space-y-4">
                                    <div class="bg-white p-4 rounded-lg shadow">
                                        <h4 class="font-bold text-lg">Logo & Branding</h4>
                                        <p class="text-purple-600 font-bold text-2xl">20 000 FCFA</p>
                                        <ul class="text-sm mt-2 space-y-1 text-gray-600">
                                            <li>✅ Logo professionnel</li>
                                            <li>✅ Charte graphique complète</li>
                                            <li>✅ Carte de visite design</li>
                                            <li>✅ Fichiers sources inclus</li>
                                        </ul>
                                    </div>
                                    <div class="bg-white p-4 rounded-lg shadow">
                                        <h4 class="font-bold text-lg">Design Digital</h4>
                                        <p class="text-purple-600 font-bold text-2xl">5 000 FCFA</p>
                                        <ul class="text-sm mt-2 space-y-1 text-gray-600">
                                            <li>✅ Posts réseaux sociaux</li>
                                            <li>✅ Bannières web</li>
                                            <li>✅ Affiches publicitaires</li>
                                            <li>✅ Optimisé pour chaque plateforme</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-semibold mb-4">✨ Créez votre Identité</h3>
                                <button onclick="appServices.scrollToContact()" class="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-700 transition">
                                    🎨 Créer ma Marque
                                </button>
                                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                                    <p class="text-sm text-gray-600">
                                        Logiciels: Photoshop, Illustrator, InDesign<br>
                                        Révisions: 2 incluses
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            'com-journalism': {
                title: 'Communication & Journalisme',
                content: `
                    <div class="max-w-4xl mx-auto p-8">
                        <h1 class="text-4xl font-bold mb-6 text-center">Communication Stratégique</h1>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="bg-red-50 p-6 rounded-xl">
                                <h3 class="text-2xl font-semibold mb-4 text-red-600">📢 Nos Services</h3>
                                <div class="space-y-4">
                                    <div class="bg-white p-4 rounded-lg shadow">
                                        <h4 class="font-bold text-lg">Articles & Rédaction</h4>
                                        <p class="text-red-600 font-bold text-2xl">15 000 FCFA</p>
                                        <ul class="text-sm mt-2 space-y-1 text-gray-600">
                                            <li>✅ Articles SEO optimisés</li>
                                            <li>✅ Contenu web professionnel</li>
                                            <li>✅ Rédaction journalistique</li>
                                            <li>✅ 1000 mots inclus</li>
                                        </ul>
                                    </div>
                                    <div class="bg-white p-4 rounded-lg shadow">
                                        <h4 class="font-bold text-lg">Community Management</h4>
                                        <p class="text-red-600 font-bold text-2xl">100 000 FCFA/mois</p>
                                        <ul class="text-sm mt-2 space-y-1 text-gray-600">
                                            <li>✅ Gestion complète des réseaux</li>
                                            <li>✅ Stratégie de contenu</li>
                                            <li>✅ Modération et engagement</li>
                                            <li>✅ Rapports mensuels</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <h3 class="text-2xl font-semibold mb-4">📈 Boostez votre Communication</h3>
                                <button onclick="appServices.scrollToContact()" class="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition">
                                    📣 Lancer ma Communication
                                </button>
                                <div class="mt-6 p-4 bg-gray-50 rounded-lg">
                                    <p class="text-sm text-gray-600">
                                        Expertise: Journalisme, modération, animation<br>
                                        Plateformes: Facebook, Instagram, LinkedIn
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        };

        // Afficher le contenu
        const detailView = document.getElementById('detail-view');
        const mainContent = document.getElementById('main-content');
        const detailContent = document.getElementById('detail-content');
        
        if (detailContent && serviceContent[serviceId]) {
            detailContent.innerHTML = serviceContent[serviceId].content;
            mainContent.classList.add('hidden');
            detailView.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            console.error('Service non trouvé:', serviceId);
        }
    },
    
    scrollToContact: () => {
        showSection('main-content');
        setTimeout(() => {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                appUtils.smoothScroll(contactSection);
            }
        }, 300);
    }
};

// ===================================
// PORTFOLIO
// ===================================
const appPortfolio = {
    init: () => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                
                // Update active button
                filterButtons.forEach(b => {
                    b.classList.remove('active', 'bg-blue-600', 'text-white');
                    b.classList.add('bg-gray-100', 'text-gray-600');
                });
                btn.classList.remove('bg-gray-100', 'text-gray-600');
                btn.classList.add('active', 'bg-blue-600', 'text-white');
                
                // Filter items
                portfolioItems.forEach(item => {
                    const shouldShow = filter === 'all' || item.dataset.category === filter;
                    item.style.display = shouldShow ? 'block' : 'none';
                });
            });
        });
    }
};

// ===================================
// FORMULAIRES
// ===================================
const appForms = {
    init: () => {
        appForms.setupContactForm();
        appForms.setupDevisForm();
    },
    
    setupContactForm: () => {
        const form = document.getElementById('contact-form');
        if (!form) return;
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Validation
            if (!data.name || !data.surname || !data.email || !data.message) {
                appUtils.showToast('Veuillez remplir tous les champs');
                return;
            }
            
            if (!appUtils.validateEmail(data.email)) {
                appUtils.showToast('Email invalide');
                return;
            }
            
            try {
                await emailjs.send(
                    APP_CONFIG.emailjs.serviceId,
                    APP_CONFIG.emailjs.templates.contact,
                    {
                        from_name: `${data.name} ${data.surname}`,
                        from_email: data.email,
                        message: data.message,
                        to_email: "leonardkabo32@gmail.com",
                        reply_to: data.email
                    }
                );
                
                appUtils.showToast('Message envoyé avec succès !');
                form.reset();
                
            } catch (error) {
                console.error('Erreur:', error);
                appUtils.showToast('Erreur lors de l\'envoi. Veuillez réessayer.');
            }
        });
    },
    
    setupDevisForm: () => {
        const form = document.getElementById('devis-form');
        if (!form) return;
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Validation
            if (!data.project_type || !data.name || !data.email || !data.details) {
                appUtils.showToast('Veuillez remplir tous les champs obligatoires');
                return;
            }
            
            if (!appUtils.validateEmail(data.email)) {
                appUtils.showToast('Email invalide');
                return;
            }
            
            try {
                await emailjs.send(
                    APP_CONFIG.emailjs.serviceId,
                    APP_CONFIG.emailjs.templates.devis,
                    {
                        project_type: data.project_type,
                        budget: data.budget,
                        details: data.details,
                        from_name: data.name,
                        from_email: data.email,
                        to_email: "leonardkabo32@gmail.com",
                        reply_to: data.email
                    }
                );
                
                appUtils.showToast('Devis envoyé avec succès ! Nous vous répondrons sous 24h.');
                form.reset();
                
            } catch (error) {
                console.error('Erreur:', error);
                appUtils.showToast('Erreur lors de l\'envoi du devis.');
            }
        });
    }
};

// ===================================
// MODALS
// ===================================
function showSection(sectionId) {
    const mainContent = document.getElementById('main-content');
    const detailView = document.getElementById('detail-view');
    
    if (sectionId === 'main-content') {
        mainContent.classList.remove('hidden');
        detailView.classList.add('hidden');
    } else {
        mainContent.classList.add('hidden');
        detailView.classList.remove('hidden');
    }
}

function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const icon = document.querySelector('#mobile-menu-btn i');
    
    mobileMenu.classList.toggle('hidden');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
}

function closeModal() {
    const modal = document.getElementById('success-modal');
    modal?.classList.add('hidden');
}

function closeDownloadModal() {
    const modal = document.getElementById('download-modal');
    modal?.classList.add('hidden');
}

function downloadFile(filename) {
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    link.click();
    
    appUtils.showToast(`${filename} téléchargé avec succès !`);
}

// ===================================
// INITIALISATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initialisation du site KABO...');
    
    // Initialize all modules
    appNavigation.init();
    appServices.init();
    appPortfolio.init();
    appForms.init();
    
    // Download button
    const downloadBtn = document.getElementById('download-source-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const modal = document.getElementById('download-modal');
            modal?.classList.remove('hidden');
        });
    }
    
    console.log('✅ Site initialisé avec succès !');
});