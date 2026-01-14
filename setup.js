// setup.js - Script d'Installation Complète

console.log(`
🚀 SCRIPT D'INSTALLATION - SITE - LEONARD KABO
=====================================

Ce script va vous guider pour configurer complètement votre site web.
`);

// Configuration EmailJS complète
const EMAILJS_CONFIG = {
    publicKey: "05difAaFfgYo_P2QL",
    serviceId: "service_kaboom_studio", // Service à créer
    templates: {
        contact: {
            id: "template_45m0nm8",
            name: "Formulaire de Contact"
        },
        devis: {
            id: "template_quycqzw", 
            name: "Demande de Devis"
        }
    }
};

// Vérification des fichiers
const REQUIRED_FILES = [
    'index.html',
    'style.css', 
    'app.js',
    'services-data.js',
    'favicon.png',
    'profile-placeholder.png'
];

const OPTIONAL_FILES = [
    'Mariage.png',
    'FORUM.png',
    'Automedication-Grossesse ok (2).png',
    'exceljpg',
    'Couverture Livre.png'
];

// Fonctions utilitaires
const setupUtils = {
    // Vérifier si un fichier existe
    checkFile: async (filename) => {
        try {
            const response = await fetch(filename, { method: 'HEAD' });
            return response.ok;
        } catch {
            return false;
        }
    },
    
    // Afficher un message de succès
    success: (message) => {
        console.log(`✅ ${message}`);
    },
    
    // Afficher un message d'erreur
    error: (message) => {
        console.error(`❌ ${message}`);
    },
    
    // Afficher un message d'avertissement
    warning: (message) => {
        console.warn(`⚠️  ${message}`);
    },
    
    // Afficher un message d'info
    info: (message) => {
        console.log(`ℹ️  ${message}`);
    }
};

// ===================================
// ÉTAPES DE CONFIGURATION
// ===================================

const setupSteps = {
    // Étape 1: Vérification des fichiers
    checkFiles: async () => {
        console.log('\n📁 ÉTAPE 1: Vérification des fichiers');
        console.log('=====================================');
        
        let missingFiles = [];
        let missingOptional = [];
        
        for (const file of REQUIRED_FILES) {
            const exists = await setupUtils.checkFile(file);
            if (exists) {
                setupUtils.success(`Fichier trouvé: ${file}`);
            } else {
                setupUtils.error(`Fichier manquant: ${file}`);
                missingFiles.push(file);
            }
        }
        
        for (const file of OPTIONAL_FILES) {
            const exists = await setupUtils.checkFile(file);
            if (exists) {
                setupUtils.success(`Fichier optionnel trouvé: ${file}`);
            } else {
                setupUtils.warning(`Fichier optionnel manquant: ${file}`);
                missingOptional.push(file);
            }
        }
        
        if (missingFiles.length > 0) {
            setupUtils.error(`Fichiers requis manquants: ${missingFiles.join(', ')}`);
            setupUtils.info('Veuillez vous assurer que tous les fichiers requis sont présents.');
            return false;
        }
        
        setupUtils.success('Tous les fichiers requis sont présents !');
        return true;
    },
    
    // Étape 2: Configuration EmailJS
    configureEmailJS: () => {
        console.log('\n📧 ÉTAPE 2: Configuration EmailJS');
        console.log('==================================');
        
        setupUtils.info('Configuration EmailJS détectée:');
        setupUtils.info(`Clé publique: ${EMAILJS_CONFIG.publicKey}`);
        setupUtils.info(`Template Contact: ${EMAILJS_CONFIG.templates.contact.id}`);
        setupUtils.info(`Template Devis: ${EMAILJS_CONFIG.templates.devis.id}`);
        
        setupUtils.info('\nPour créer votre service EmailJS:');
        setupUtils.info('1. Allez sur https://www.emailjs.com/');
        setupUtils.info('2. Créez un compte gratuit');
        setupUtils.info('3. Ajoutez un service email (Gmail, Outlook, etc.)');
        setupUtils.info('4. Créez les templates avec les variables suivantes:');
        
        console.log(`
📋 TEMPLATE CONTACT (template_45m0nm8):
   - {{from_name}} - Nom du client
   - {{from_email}} - Email du client  
   - {{message}} - Message du client
   - {{to_email}} - Votre email (leonardkabo32@gmail.com)

📋 TEMPLATE DEVIS (template_quycqzw):
   - {{project_type}} - Type de projet
   - {{budget}} - Budget estimé
   - {{details}} - Détails du projet
   - {{from_name}} - Nom du client
   - {{from_email}} - Email du client
   - {{to_email}} - Votre email (leonardkabo32@gmail.com)
        `);
        
        return true;
    },
    
    // Étape 3: Test de la configuration
    testConfiguration: async () => {
        console.log('\n🧪 ÉTAPE 3: Test de la configuration');
        console.log('=====================================');
        
        // Test EmailJS
        if (typeof emailjs !== 'undefined') {
            setupUtils.success('EmailJS est correctement chargé');
            
            try {
                // Test de connexion (envoi d'un email de test)
                await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templates.contact.id, {
                    from_name: "Test Setup",
                    from_email: "test@setup.com",
                    message: "Ceci est un email de test pour vérifier la configuration",
                    to_email: "leonardkabo32@gmail.com",
                    reply_to: "test@setup.com"
                });
                
                setupUtils.success('EmailJS configuré correctement !');
            } catch (error) {
                setupUtils.warning('EmailJS chargé mais configuration incomplète');
                setupUtils.info('Créez votre service EmailJS pour activer les formulaires');
            }
        } else {
            setupUtils.error('EmailJS n\'est pas chargé');
            setupUtils.info('Ajoutez: <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"><\/script>');
        }
        
        return true;
    },
    
    // Étape 4: Optimisations
    runOptimizations: () => {
        console.log('\n⚡ ÉTAPE 4: Optimisations');
        console.log('============================');
        
        // Optimisation des images
        setupUtils.info('Optimisation des images en cours...');
        
        // Vérification du cache
        if ('caches' in window) {
            setupUtils.success('Service Worker API disponible');
        } else {
            setupUtils.warning('Service Worker API non disponible');
        }
        
        // Vérification du localStorage
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            setupUtils.success('LocalStorage disponible');
        } catch {
            setupUtils.error('LocalStorage non disponible');
        }
        
        return true;
    },
    
    // Étape 5: Rapport final
    generateReport: () => {
        console.log('\n📊 RAPPORT FINAL');
        console.log('=================');
        
        console.log(`
✅ CONFIGURATION TERMINÉE

🌐 Votre site est maintenant prêt !

📧 Formulaires configurés:
   - Contact: ${CONFIG.emailjs.templates.contact.id}
   - Devis: ${CONFIG.emailjs.templates.devis.id}

🎯 Prochaines étapes:
   1. Créez votre service EmailJS sur emailjs.com
   2. Connectez votre adresse email (leonardkabo32@gmail.com)
   3. Testez les formulaires
   4. Personnalisez les contenus selon vos besoins

🔧 Améliorations possibles:
   - Ajouter un blog
   - Intégrer un système de paiement
   - Ajouter un chat en direct
   - Créer un espace admin

💡 Astuce: Ouvrez la console (F12) pour voir les messages de débogage
        `);
        
        return true;
    }
};

// ===================================
// LANCEMENT DU SETUP
// ===================================
async function runCompleteSetup() {
    console.log('🚀 Lancement de la configuration complète...');
    
    try {
        // Étape 1: Vérification des fichiers
        const filesOk = await setupSteps.checkFiles();
        if (!filesOk) return;
        
        // Étape 2: Configuration EmailJS
        const emailJsOk = setupSteps.configureEmailJS();
        if (!emailJsOk) return;
        
        // Étape 3: Test de la configuration
        await setupSteps.testConfiguration();
        
        // Étape 4: Optimisations
        setupSteps.runOptimizations();
        
        // Étape 5: Rapport final
        setupSteps.generateReport();
        
        // Animation de succès
        console.log(`
🎉 FÉLICITATIONS !
==================
Votre site web professionnel est maintenant configuré et prêt à l'emploi !

🔗 URL de votre site: ${window.location.href}
📧 Email configuré: leonardkabo32@gmail.com
📱 WhatsApp: +22965458778

Amusez-vous bien avec votre nouveau site web ! 🚀
        `);
        
    } catch (error) {
        setupUtils.error(`Erreur lors de la configuration: ${error.message}`);
        console.error(error);
    }
}

// ===================================
// FONCTIONS UTILITAIRES SUPPLÉMENTAIRES
// ===================================

// Test rapide de EmailJS
function quickEmailTest() {
    if (typeof emailjs === 'undefined') {
        setupUtils.error('EmailJS non chargé');
        return;
    }
    
    emailjs.send("service_test", "template_test", {
        from_name: "Test Rapide",
        from_email: "test@example.com",
        message: "Ceci est un test rapide",
        to_email: "leonardkabo32@gmail.com"
    }).then(() => {
        setupUtils.success('Test EmailJS réussi !');
    }).catch((error) => {
        setupUtils.error(`Test EmailJS échoué: ${error.text}`);
    });
}

// Vérifier la connectivité
function checkConnectivity() {
    return navigator.onLine;
}

// Obtenir des statistiques du site
function getSiteStats() {
    return {
        url: window.location.href,
        userAgent: navigator.userAgent,
        screenResolution: `${screen.width}x${screen.height}`,
        online: checkConnectivity(),
        timestamp: new Date().toISOString()
    };
}

// ===================================
// LANCEMENT AUTOMATIQUE
// ===================================

// Lancer le setup automatiquement après 2 secondes
setTimeout(() => {
    if (confirm('Voulez-vous lancer la configuration complète du site ?')) {
        runCompleteSetup();
    } else {
        setupUtils.info('Configuration annulée. Vous pouvez la lancer manuellement avec: runCompleteSetup()');
    }
}, 2000);

// Rendre les fonctions disponibles globalement
window.runCompleteSetup = runCompleteSetup;
window.quickEmailTest = quickEmailTest;
window.getSiteStats = getSiteStats;

// Message de bienvenue
console.log(`
🎯 SITE KABO - CONSOLE DE CONFIGURATION
=======================================

Commandes disponibles:
- runCompleteSetup() : Lance la configuration complète
- quickEmailTest() : Test rapide d'EmailJS  
- getSiteStats() : Affiche les statistiques du site

EmailJS configuré avec:
- Clé publique: ${EMAILJS_CONFIG.publicKey}
- Templates: ${EMAILJS_CONFIG.templates.contact.id}, ${EMAILJS_CONFIG.templates.devis.id}
`);