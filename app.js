// Audio Context Setup for sounds
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

async function playNotification() {
    try {
        const response = await fetch('notification.mp3');
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start(0);
    } catch (err) {
        console.error('Audio play failed:', err);
    }
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Contact & Devis Form Handling
const contactForm = document.getElementById('contact-form');
const devisForm = document.getElementById('devis-form');
const successModal = document.getElementById('success-modal');

function handleFormSubmit(form, successMsg) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Traitement...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerText = originalText;
            btn.disabled = false;
            
            form.reset();
            playNotification();
            
            // Customize modal message
            if (successMsg) {
                const modalText = successModal.querySelector('p');
                modalText.innerText = successMsg;
            }
            
            successModal.classList.remove('hidden');
        }, 1200);
    });
}

if (contactForm) handleFormSubmit(contactForm, "Votre message a été bien reçu. Je vous recontacterai très rapidement.");
if (devisForm) handleFormSubmit(devisForm, "Votre demande de devis a été envoyée ! Je vais étudier votre projet et vous répondre avec une proposition adaptée.");

function closeModal() {
    successModal.classList.add('hidden');
}

// Download Source Logic
const downloadSourceBtn = document.getElementById('download-source-btn');
const downloadModal = document.getElementById('download-modal');

if (downloadSourceBtn) {
    downloadSourceBtn.addEventListener('click', () => {
        downloadModal.classList.remove('hidden');
    });
}

function closeDownloadModal() {
    downloadModal.classList.add('hidden');
}

async function downloadFile(filename) {
    try {
        const response = await fetch(filename);
        const text = await response.text();
        const blob = new Blob([text], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    } catch (error) {
        console.error('Download failed for ' + filename, error);
        alert('Erreur lors du téléchargement de ' + filename + '. Assurez-vous d\'être sur le serveur de prévisualisation.');
    }
}

// Portfolio Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                item.classList.add('animate-fade-in');
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Scroll Reveal Effects (Simple implementation)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.style.opacity = 1;
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    observer.observe(section);
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});