// --- Menu Mobile Toggle ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

function toggleMenu() {
    mobileMenu.classList.add('hidden');
}

// --- Navigation Logic ---
function showSection(sectionId) {
    const main = document.getElementById('main-content');
    const detail = document.getElementById('detail-view');
    
    if (sectionId === 'main-content') {
        main.classList.remove('hidden');
        detail.classList.add('hidden');
        window.scrollTo(0, 0);
    } else if (sectionId === 'detail-view') {
        main.classList.add('hidden');
        detail.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
}

// --- Dynamic Services Injection ---
function renderServices() {
    const servicesList = document.getElementById('services-list');
    servicesList.innerHTML = servicesData.map(service => `
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <div class="w-14 h-14 bg-${service.color}-100 text-${service.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${service.color}-600 group-hover:text-white transition-all">
                <i class="fa-solid ${service.icon} text-2xl"></i>
            </div>
            <h3 class="font-bold text-xl mb-3">${service.title}</h3>
            <p class="text-gray-500 text-sm mb-6 line-clamp-2">${service.shortDesc}</p>
            <button onclick="openServiceDetail('${service.id}')" class="text-${service.color}-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Voir plus <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `).join('');
}

function openServiceDetail(serviceId) {
    const service = servicesData.find(s => s.id === serviceId);
    if (!service) return;

    const detailContent = document.getElementById('detail-content');
    detailContent.innerHTML = service.fullContent;
    
    showSection('detail-view');
}

// --- Form Handling & Email Simulation ---
// Using mailto link construction as a fallback for pure static sites or simulation for Websim
const devisForm = document.getElementById('devis-form');
const contactForm = document.getElementById('contact-form');
const targetEmail = "leonardkabo32@gmail.com";

devisForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(devisForm);
    const data = Object.fromEntries(formData);
    
    // In a real scenario, you'd use a mail service. Here we simulate and show success.
    console.log("Devis submitted:", data);
    
    // Simulate a mailto open if user wants real email trigger
    const subject = `Demande de Devis: ${data.project_type}`;
    const body = `Nom: ${data.name}%0AEmail: ${data.email}%0ABudget: ${data.budget}%0ADétails: ${data.details}`;
    window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    openSuccessModal();
    devisForm.reset();
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    console.log("Appointment submitted:", data);
    
    const subject = `Rendez-vous: ${data.name} ${data.surname}`;
    const body = `Client: ${data.name} ${data.surname}%0AEmail: ${data.email}%0AMessage: ${data.message}`;
    window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;

    openSuccessModal();
    contactForm.reset();
});

// --- Modal Logic ---
function openSuccessModal() {
    const modal = document.getElementById('success-modal');
    const content = document.getElementById('success-modal-content');
    modal.classList.remove('hidden');
    setTimeout(() => {
        content.classList.remove('scale-0');
        content.classList.add('scale-100');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('success-modal');
    const content = document.getElementById('success-modal-content');
    content.classList.remove('scale-100');
    content.classList.add('scale-0');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// --- Source Code Download Logic ---
const downloadBtn = document.getElementById('download-source-btn');
const downloadModal = document.getElementById('download-modal');

downloadBtn.addEventListener('click', () => {
    downloadModal.classList.remove('hidden');
});

function closeDownloadModal() {
    downloadModal.classList.add('hidden');
}

async function downloadFile(filename) {
    try {
        const response = await fetch(filename);
        const text = await response.text();
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    } catch (err) {
        alert("Erreur lors du téléchargement. Fichier introuvable localement.");
    }
}

// --- Initial Render ---
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    
    // Portfolio Filtering logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});