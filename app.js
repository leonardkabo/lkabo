// app.js - Version Corrigée sans erreurs

// ===================================
// CONFIGURATION EMAILJS
// ===================================
const CONFIG = {
    emailjs: {
        publicKey: "05difAaFfgYo_P2QL",
        serviceId: "service_kaboom_studio",
        templates: {
            contact: "template_45m0nm8",
            devis: "template_quycqzw"
        }
    },
    
    animation: {
        duration: 300,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    
    breakpoints: {
        mobile: 640,
        tablet: 768,
        desktop: 1024
    }
};

// ===================================
// INITIALISATION EMAILJS
// ===================================
if (typeof emailjs !== 'undefined') {
    emailjs.init(CONFIG.emailjs.publicKey);
    console.log('✅ EmailJS initialisé avec succès');
}

// ===================================
// UTILITAIRES
// ===================================
const utils = {
    // Animation d'entrée
    animateOnScroll: () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    },
    
    // Défilement fluide
    smoothScroll: (target) => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    
    // Validation email
    validateEmail: (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    
    // Loading states
    setLoadingState: (button, loading = true, text = 'Chargement...') => {
        if (loading) {
            button.dataset.originalText = button.textContent;
            button.textContent = text;
            button.disabled = true;
            button.classList.add('opacity-75', 'cursor-not-allowed');
        } else {
            button.textContent = button.dataset.originalText;
            button.disabled = false;
            button.classList.remove('opacity-75', 'cursor-not-allowed');
        }
    },
    
    // Toast notifications
    showToast: (message, type = 'success') => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    },
    
    // Format prix
    formatPrice: (amount) => {
        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'XOF'
        }).format(amount);
    }
};

// ===================================
// NAVIGATION
// ===================================
const navigation = {
    init: () => {
        // Mobile menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', navigation.toggleMobileMenu);
            
            // Close when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                }
            });
        }
        
        // Smooth scroll for nav links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    utils.smoothScroll(target);
                    mobileMenu?.classList.add('hidden');
                }
            });
        });
        
        // Active nav highlighting
        navigation.highlightActiveNav();
    },
    
    toggleMobileMenu: () => {
        const mobileMenu = document.getElementById('mobile-menu');
        const icon = document.querySelector('#mobile-menu-btn i');
        
        mobileMenu.classList.toggle('hidden');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    },
    
    highlightActiveNav: () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, { threshold: 0.5 });
        
        sections.forEach(section => observer.observe(section));
    }
};

// ===================================
// SERVICES - GESTION DES SERVICES CLIQUABLES
// ===================================
const services = {
    currentService: null,
    
    init: () => {
        services.loadServices();
        services.setupServiceHandlers();
    },
    
    loadServices: () => {
        const container = document.getElementById('services-list');
        if (!container) return;
        
        // Sort by priority
        const sortedServices = [...servicesData].sort((a, b) => 
            (a.category.priority || 0) - (b.category.priority || 0)
        );
        
        container.innerHTML = sortedServices.map(service => services.renderServiceCard(service)).join('');
        utils.animateOnScroll();
    },
    
    renderServiceCard: (service) => {
        const popularPackage = service.pricing?.packages?.find(pkg => pkg.popular);
        const basePrice = service.pricing?.basePrice || service.pricing?.packages?.[0]?.price || 0;
        
        return `
            <div class="service-card group animate-on-scroll ${service.category.id}" 
                 data-service-id="${service.id}"
                 onclick="services.showServiceDetail('${service.id}')">
                
                ${popularPackage ? `
                    <div class="pricing-badge">${popularPackage.badge}</div>
                ` : ''}
                
                <div class="service-icon-wrapper ${service.category.id}">
                    <i class="fa-solid ${service.category.icon} text-3xl"></i>
                </div>
                
                <h3 class="font-bold text-xl mb-3 text-gray-900">${service.title}</h3>
                <p class="text-gray-600 mb-4">${service.shortDesc}</p>
                
                <div class="flex items-center justify-between">
                    <span class="text-2xl font-bold text-${service.category.color}-600">
                        À partir de ${utils.formatPrice(basePrice)}
                    </span>
                    <i class="fa-solid fa-arrow-right text-gray-400 group-hover:text-${service.category.color}-600 transition"></i>
                </div>
                
                ${service.metrics ? `
                    <div class="mt-4 pt-4 border-t border-gray-100">
                        <div class="flex justify-between text-xs text-gray-500">
                            <span>${service.metrics.completedProjects}+ projets</span>
                            <span>${service.metrics.satisfactionRate}% satisfaction</span>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    },
    
    showServiceDetail: (serviceId) => {
        const service = servicesData.find(s => s.id === serviceId);
        if (!service) return;
        
        services.currentService = service;
        const detailView = document.getElementById('detail-view');
        const mainContent = document.getElementById('main-content');
        
        document.getElementById('detail-content').innerHTML = services.renderServiceDetail(service);
        
        mainContent.classList.add('hidden');
        detailView.classList.remove('hidden');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.pushState({ service: serviceId }, service.title, `#${service.slug}`);
    },
    
    renderServiceDetail: (service) => {
        const popularPackage = service.pricing?.packages?.find(pkg => pkg.popular);
        
        return `
            <div class="max-w-6xl mx-auto px-4">
                <div class="bg-gradient-to-br from-${service.category.color}-50 to-white p-8 rounded-3xl mb-8">
                    <div class="flex flex-col md:flex-row justify-between items-start gap-6">
                        <div class="flex-1">
                            <div class="inline-flex items-center gap-2 px-4 py-2 bg-${service.category.color}-100 text-${service.category.color}-700 rounded-full text-sm font-semibold mb-4">
                                <i class="fa-solid ${service.category.icon}"></i>
                                ${service.category.name}
                            </div>
                            <h1 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                                ${service.title}
                            </h1>
                            <p class="text-xl text-gray-600 mb-6">
                                ${service.tagline}
                            </p>
                            ${service.description?.highlights ? `
                                <div class="flex flex-wrap gap-3">
                                    ${service.description.highlights.map(highlight => `
                                        <span class="px-3 py-1 bg-white text-gray-700 rounded-full text-sm shadow-sm">
                                            ${highlight}
                                        </span>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                        
                        ${popularPackage ? `
                            <div class="bg-white p-6 rounded-2xl shadow-xl min-w-80">
                                <div class="text-center">
                                    <div class="text-3xl font-bold text-gray-900 mb-2">
                                        ${utils.formatPrice(popularPackage.price)}
                                    </div>
                                    <div class="text-gray-500 mb-1">${popularPackage.duration}</div>
                                    <div class="text-sm text-${service.category.color}-600 font-semibold mb-4">
                                        ${popularPackage.badge}
                                    </div>
                                    <button onclick="services.scrollToBooking()" 
                                            class="w-full bg-gradient-to-r from-${service.category.color}-500 to-${service.category.color}-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition">
                                        <i class="fa-solid fa-calendar-check mr-2"></i>
                                        Réserver maintenant
                                    </button>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
                
                ${service.pricing?.packages ? `
                    <div class="grid grid-cols-1 lg:grid-cols-${service.pricing.packages.length} gap-8 mb-12">
                        ${service.pricing.packages.map(pkg => services.renderPackageCard(pkg, service.category.color)).join('')}
                    </div>
                ` : ''}
                
                ${service.description?.main ? `
                    <div class="bg-white p-8 rounded-3xl shadow-lg mb-8">
                        <h2 class="text-2xl font-bold mb-4">Description du service</h2>
                        <p class="text-gray-600 text-lg leading-relaxed">
                            ${service.description.main}
                        </p>
                        
                        ${service.description?.process ? `
                            <div class="mt-6">
                                <h3 class="text-lg font-semibold mb-3">Notre processus</h3>
                                <div class="space-y-3">
                                    ${service.description.process.map((step, index) => `
                                        <div class="flex items-start gap-3">
                                            <div class="w-8 h-8 bg-${service.category.color}-100 text-${service.category.color}-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                                ${index + 1}
                                            </div>
                                            <p class="text-gray-600">${step}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}
                
                ${service.pricing?.addOns ? `
                    <div class="bg-gray-50 p-8 rounded-3xl mb-8">
                        <h3 class="text-2xl font-bold mb-6">Services additionnels</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            ${service.pricing.addOns.map(addon => `
                                <div class="bg-white p-4 rounded-xl flex justify-between items-center">
                                    <span class="text-gray-700">${addon.name}</span>
                                    <span class="font-bold text-${service.category.color}-600">
                                        +${utils.formatPrice(addon.price)}
                                    </span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${service.metrics ? `
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-3xl font-bold text-${service.category.color}-600 mb-2">
                                ${service.metrics.completedProjects}+
                            </div>
                            <div class="text-sm text-gray-500">Projets réalisés</div>
                        </div>
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-3xl font-bold text-green-600 mb-2">
                                ${service.metrics.satisfactionRate}%
                            </div>
                            <div class="text-sm text-gray-500">Satisfaction</div>
                        </div>
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-3xl font-bold text-yellow-600 mb-2">
                                ${service.metrics.averageRating}/5
                            </div>
                            <div class="text-sm text-gray-500">Note moyenne</div>
                        </div>
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-3xl font-bold text-purple-600 mb-2">
                                ${service.metrics.deliveryOnTime}%
                            </div>
                            <div class="text-sm text-gray-500">Livraison à temps</div>
                        </div>
                    </div>
                ` : ''}
                
                <div class="text-center">
                    <button onclick="services.scrollToBooking()" 
                            class="inline-flex items-center gap-3 bg-gradient-to-r from-${service.category.color}-500 to-${service.category.color}-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all hover:scale-105">
                        <i class="fa-solid fa-rocket"></i>
                        ${service.cta?.primary?.text || 'Commencer mon projet'}
                    </button>
                </div>
            </div>
        `;
    },
    
    renderPackageCard: (pkg, color) => {
        const isPopular = pkg.popular;
        
        return `
            <div class="pricing-card ${isPopular ? 'pricing-card-popular' : ''}" data-package="${pkg.name}">
                ${isPopular ? '<div class="pricing-badge">MEILLEUR CHOIX</div>' : ''}
                
                <h4 class="font-black text-xl mb-4 ${isPopular ? 'text-white' : 'text-gray-900'}">
                    ${pkg.name}
                </h4>
                
                <div class="text-4xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-gray-900'}">
                    ${utils.formatPrice(pkg.price)}
                    ${pkg.customQuote ? '<span class="text-lg font-normal">/devis</span>' : ''}
                </div>
                
                <div class="text-sm mb-6 ${isPopular ? 'text-white/80' : 'text-gray-500'}">
                    ${pkg.duration}
                </div>
                
                <ul class="space-y-3 mb-8">
                    ${pkg.features.map(feature => `
                        <li class="flex items-start gap-3 ${isPopular ? 'text-white/90' : 'text-gray-600'}">
                            <i class="fa-solid fa-check text-${isPopular ? 'yellow-400' : color + '-500'} mt-1"></i>
                            <span>${feature}</span>
                        </li>
                    `).join('')}
                </ul>
                
                <button onclick="services.selectPackage('${pkg.name}')" 
                        class="w-full py-3 rounded-xl font-bold transition
                               ${isPopular ? 
                                 'bg-white text-' + color + '-600 hover:bg-gray-100' : 
                                 'bg-' + color + '-600 text-white hover:bg-' + color + '-700'
                               }">
                    Choisir ce forfait
                </button>
            </div>
        `;
    },
    
    selectPackage: (packageName) => {
        if (!services.currentService) return;
        
        const pkg = services.currentService.pricing.packages.find(p => p.name === packageName);
        if (!pkg) return;
        
        sessionStorage.setItem('selectedPackage', JSON.stringify({
            service: services.currentService.id,
            package: packageName,
            price: pkg.price
        }));
        
        services.scrollToBooking();
        utils.showToast(`Forfait ${packageName} sélectionné !`, 'success');
    },
    
    scrollToBooking: () => {
        showSection('main-content');
        setTimeout(() => {
            const contactSection = document.querySelector('#devis');
            if (contactSection) {
                utils.smoothScroll(contactSection);
                
                const selectedPackage = sessionStorage.getItem('selectedPackage');
                if (selectedPackage) {
                    const pkg = JSON.parse(selectedPackage);
                    const projectTypeSelect = document.querySelector('select[name="project_type"]');
                    if (projectTypeSelect) {
                        projectTypeSelect.value = pkg.service;
                    }
                }
            }
        }, 300);
    },
    
    // Nouvelle fonction pour afficher tous les services
    showAllServices: () => {
        const servicesSection = document.querySelector('#services');
        if (servicesSection) {
            utils.smoothScroll(servicesSection);
        }
    },
    
    setupServiceHandlers: () => {
        window.addEventListener('popstate', (e) => {
            if (e.state?.service) {
                services.showServiceDetail(e.state.service);
            } else {
                showSection('main-content');
            }
        });
    }
};

// ===================================
// PORTFOLIO
// ===================================
const portfolio = {
    init: () => {
        portfolio.setupFilter();
        portfolio.loadPortfolio();
    },
    
    loadPortfolio: () => {
        const container = document.getElementById('portfolio-grid');
        if (!container) return;
        
        const items = portfolioItems.map(item => portfolio.renderPortfolioItem(item)).join('');
        container.innerHTML = items;
        utils.animateOnScroll();
    },
    
    renderPortfolioItem: (item) => {
        return `
            <div class="portfolio-item group animate-on-scroll" data-category="${item.category}">
                <div class="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                    <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition duration-500 group-hover:scale-110">
                    <div class="portfolio-overlay">
                        <div class="absolute bottom-4 left-4 right-4">
                            <span class="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                                ${portfolio.getCategoryLabel(item.category)}
                            </span>
                        </div>
                    </div>
                </div>
                <h3 class="font-bold text-lg mb-2">${item.title}</h3>
                <p class="text-gray-500 text-sm mb-3">${item.description}</p>
                ${item.technologies ? `
                    <div class="flex flex-wrap gap-1">
                        ${item.technologies.map(tech => `
                            <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                ${tech}
                            </span>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    },
    
    getCategoryLabel: (category) => {
        const labels = {
            'web': 'Développement Web',
            'design': 'Design Graphique',
            'media': 'Production Multimédia'
        };
        return labels[category] || category;
    },
    
    setupFilter: () => {
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
                    
                    if (shouldShow) {
                        item.style.display = 'block';
                        item.classList.add('animate-fade-in');
                    } else {
                        item.style.display = 'none';
                        item.classList.remove('animate-fade-in');
                    }
                });
            });
        });
        
        // Set initial active filter
        const activeFilter = document.querySelector('.filter-btn.active');
        if (activeFilter) {
            activeFilter.classList.remove('bg-gray-100', 'text-gray-600');
            activeFilter.classList.add('bg-blue-600', 'text-white');
        }
    }
};

// ===================================
// FORM HANDLING
// ===================================
const forms = {
    init: () => {
        forms.setupContactForm();
        forms.setupDevisForm();
    },
    
    setupContactForm: () => {
        const form = document.getElementById('contact-form');
        if (!form) return;
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Validation
            if (!forms.validateContactForm(data)) {
                return;
            }
            
            // Loading state
            utils.setLoadingState(submitBtn, true, 'Envoi en cours...');
            
            try {
                await emailjs.send(
                    CONFIG.emailjs.serviceId,
                    CONFIG.emailjs.templates.contact,
                    {
                        from_name: `${data.name} ${data.surname}`,
                        from_email: data.email,
                        message: data.message,
                        to_email: "leonardkabo32@gmail.com",
                        reply_to: data.email
                    }
                );
                
                utils.showToast('Message envoyé avec succès !', 'success');
                form.reset();
                closeModal();
                
            } catch (error) {
                console.error('Erreur envoi email:', error);
                utils.showToast('Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
            } finally {
                utils.setLoadingState(submitBtn, false);
            }
        });
    },
    
    setupDevisForm: () => {
        const form = document.getElementById('devis-form');
        if (!form) return;
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Validation
            if (!forms.validateDevisForm(data)) {
                return;
            }
            
            // Loading state
            utils.setLoadingState(submitBtn, true, 'Envoi du devis...');
            
            try {
                await emailjs.send(
                    CONFIG.emailjs.serviceId,
                    CONFIG.emailjs.templates.devis,
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
                
                utils.showToast('Devis envoyé avec succès ! Nous vous répondrons sous 24h.', 'success');
                form.reset();
                
            } catch (error) {
                console.error('Erreur envoi devis:', error);
                utils.showToast('Erreur lors de l\'envoi du devis.', 'error');
            } finally {
                utils.setLoadingState(submitBtn, false);
            }
        });
    },
    
    validateContactForm: (data) => {
        let isValid = true;
        
        // Name validation
        if (!data.name || data.name.length < 2) {
            utils.showToast('Le nom doit contenir au moins 2 caractères', 'error');
            isValid = false;
        }
        
        if (!data.surname || data.surname.length < 2) {
            utils.showToast('Le prénom doit contenir au moins 2 caractères', 'error');
            isValid = false;
        }
        
        // Email validation
        if (!utils.validateEmail(data.email)) {
            utils.showToast('Veuillez entrer une adresse email valide', 'error');
            isValid = false;
        }
        
        // Message validation
        if (!data.message || data.message.length < 10) {
            utils.showToast('Le message doit contenir au moins 10 caractères', 'error');
            isValid = false;
        }
        
        return isValid;
    },
    
    validateDevisForm: (data) => {
        let isValid = true;
        
        // Required fields
        if (!data.project_type) {
            utils.showToast('Veuillez sélectionner un type de projet', 'error');
            isValid = false;
        }
        
        if (!data.name || data.name.length < 2) {
            utils.showToast('Le nom est obligatoire', 'error');
            isValid = false;
        }
        
        if (!data.email || !utils.validateEmail(data.email)) {
            utils.showToast('Veuillez entrer une adresse email valide', 'error');
            isValid = false;
        }
        
        if (!data.details || data.details.length < 10) {
            utils.showToast('Veuillez décrire votre projet (min. 10 caractères)', 'error');
            isValid = false;
        }
        
        return isValid;
    }
};

// ===================================
// DOWNLOAD & MODALS
// ===================================
const downloads = {
    init: () => {
        const downloadBtn = document.getElementById('download-source-btn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', downloads.showDownloadModal);
        }
    },
    
    showDownloadModal: () => {
        const modal = document.getElementById('download-modal');
        modal.classList.remove('hidden');
    },
    
    downloadFile: (filename) => {
        const link = document.createElement('a');
        link.href = filename;
        link.download = filename;
        link.click();
        
        utils.showToast(`${filename} téléchargé avec succès !`, 'success');
    }
};

// ===================================
// INITIALISATION GLOBALE
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initialisation du site KABO...');
    
    // Initialize all modules
    navigation.init();
    services.init();
    portfolio.init();
    forms.init();
    downloads.init();
    utils.animateOnScroll();
    
    // Handle pre-selected packages
    const selectedPackage = sessionStorage.getItem('selectedPackage');
    if (selectedPackage) {
        const pkg = JSON.parse(selectedPackage);
        setTimeout(() => {
            const projectTypeSelect = document.querySelector('select[name="project_type"]');
            if (projectTypeSelect) {
                projectTypeSelect.value = pkg.service;
                utils.showToast(`Forfait ${pkg.package} sélectionné`, 'info');
            }
        }, 1000);
    }
    
    console.log('✅ Site initialisé avec succès !');
});

// ===================================
// FONCTIONS GLOBALES
// ===================================
function showSection(sectionId) {
    const mainContent = document.getElementById('main-content');
    const detailView = document.getElementById('detail-view');
    
    if (sectionId === 'main-content') {
        mainContent.classList.remove('hidden');
        detailView.classList.add('hidden');
        history.pushState({}, '', window.location.pathname);
    } else {
        mainContent.classList.add('hidden');
        detailView.classList.remove('hidden');
    }
}

function toggleMenu() {
    navigation.toggleMobileMenu();
}

function closeModal() {
    const modal = document.getElementById('success-modal');
    modal?.classList.add('hidden');
}

function closeDownloadModal() {
    const modal = document.getElementById('download-modal');
    modal?.classList.add('hidden');
}

// Toast styles
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    .toast {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 9999;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        min-width: 300px;
    }
    
    .toast.show {
        transform: translateX(0);
    }
    
    .toast-success {
        border-left: 4px solid #10b981;
    }
    
    .toast-error {
        border-left: 4px solid #ef4444;
    }
    
    .toast-info {
        border-left: 4px solid #3b82f6;
    }
    
    .toast-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .btn-loading {
        position: relative;
        color: transparent !important;
    }
    
    .btn-loading::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1.25rem;
        height: 1.25rem;
        margin: -0.625rem 0 0 -0.625rem;
        border: 2px solid #ffffff;
        border-top-color: transparent;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(toastStyles);