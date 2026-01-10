const servicesData = [
    {
        id: "multimedia",
        icon: "fa-camera-retro",
        title: "Production Multimédia",
        shortDesc: "Prises de vue professionnelle, photo et vidéo pour tous vos évènements marquants.",
        color: "blue",
        fullContent: `
            <div class="space-y-12 animate-fade-in">
                <header class="text-center md:text-left">
                    <div class="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">KABOOM STUDIO</div>
                    <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">Production Multimédia de Prestige</h2>
                    <p class="text-lg text-gray-600 leading-relaxed max-w-3xl">L'image est le seul souvenir tangible de vos moments précieux. Chez <strong>Kaboom Studio</strong>, nous transformons vos émotions en chefs-d'œuvre visuels grâce à une expertise technique de pointe.</p>
                </header>

                <div class="relative rounded-3xl overflow-hidden h-64 md:h-96 shadow-2xl">
                    <img src="Mariage.png" alt="Production Multimedia" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <p class="text-white font-medium italic">"Capturer l'invisible, immortaliser l'instant."</p>
                    </div>
                </div>

                <section>
                    <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span class="w-8 h-1 bg-blue-600 rounded-full"></span> Nos Forfaits Événementiels
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Baptême -->
                        <div class="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all border-t-8 border-t-blue-500">
                            <div class="text-blue-500 mb-4"><i class="fa-solid fa-child-reaching text-4xl"></i></div>
                            <h4 class="font-black text-2xl mb-2">BAPTÊMES</h4>
                            <div class="text-3xl font-bold text-gray-900 mb-6">50.000 <span class="text-sm font-normal text-gray-500">FCFA</span></div>
                            <ul class="space-y-4 mb-8">
                                <li class="flex items-start gap-3 text-sm text-gray-600"><i class="fa-solid fa-check-circle text-green-500 mt-1"></i> Cérémonie religieuse & laïque</li>
                                <li class="flex items-start gap-3 text-sm text-gray-600"><i class="fa-solid fa-check-circle text-green-500 mt-1"></i> Reportage réception & repas</li>
                                <li class="flex items-start gap-3 text-sm text-gray-600"><i class="fa-solid fa-check-circle text-green-500 mt-1"></i> Montage vidéo rythmé</li>
                                <li class="flex items-start gap-3 text-sm text-gray-600"><i class="fa-solid fa-check-circle text-green-500 mt-1"></i> Album photo souvenir</li>
                            </ul>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-blue-600 transition">Réserver</a>
                        </div>

                        <!-- Mariage -->
                        <div class="group bg-blue-600 p-8 rounded-[2rem] shadow-2xl transform md:-translate-y-4 border-t-8 border-t-white">
                            <div class="text-white/80 mb-4"><i class="fa-solid fa-rings-wedding text-4xl"></i></div>
                            <h4 class="font-black text-2xl mb-2 text-white">MARIAGES</h4>
                            <div class="text-3xl font-bold text-white mb-6">65.000 <span class="text-sm font-normal text-blue-200">FCFA</span></div>
                            <ul class="space-y-4 mb-8">
                                <li class="flex items-start gap-3 text-sm text-blue-50"><i class="fa-solid fa-star text-yellow-400 mt-1"></i> Préparatifs complets</li>
                                <li class="flex items-start gap-3 text-sm text-blue-50"><i class="fa-solid fa-star text-yellow-400 mt-1"></i> Cérémonies (Civile/Religieuse)</li>
                                <li class="flex items-start gap-3 text-sm text-blue-50"><i class="fa-solid fa-star text-yellow-400 mt-1"></i> Cocktail & Soirée dansante</li>
                                <li class="flex items-start gap-3 text-sm text-blue-50"><i class="fa-solid fa-star text-yellow-400 mt-1"></i> Album Luxe & Montage 4K</li>
                            </ul>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-white text-blue-600 rounded-xl font-bold hover:shadow-lg transition">Forfait Mariage</a>
                        </div>

                        <!-- Anniversaire -->
                        <div class="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all border-t-8 border-t-pink-500">
                            <div class="text-pink-500 mb-4"><i class="fa-solid fa-cake-candles text-4xl"></i></div>
                            <h4 class="font-black text-2xl mb-2">ANNIVERSAIRES</h4>
                            <div class="text-3xl font-bold text-gray-900 mb-6">50.000 <span class="text-sm font-normal text-gray-500">FCFA</span></div>
                            <ul class="space-y-4 mb-8">
                                <li class="flex items-start gap-3 text-sm text-gray-600"><i class="fa-solid fa-check-circle text-green-500 mt-1"></i> Shooting "Guest Stars"</li>
                                <li class="flex items-start gap-3 text-sm text-gray-600"><i class="fa-solid fa-check-circle text-green-500 mt-1"></i> Vidéo "Highlights" (1-3 min)</li>
                                <li class="flex items-start gap-3 text-sm text-gray-600"><i class="fa-solid fa-check-circle text-green-500 mt-1"></i> Livraison numérique HD</li>
                                <li class="flex items-start gap-3 text-sm text-gray-600"><i class="fa-solid fa-check-circle text-green-500 mt-1"></i> Options impressions directes</li>
                            </ul>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-pink-600 transition">Célébrer</a>
                        </div>
                    </div>
                </section>

                <div class="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100">
                    <div class="flex flex-col md:flex-row gap-12 items-center">
                        <div class="flex-1">
                            <h3 class="text-2xl font-bold mb-4">Pourquoi choisir Kaboom Studio ?</h3>
                            <div class="space-y-6">
                                <div class="flex gap-4">
                                    <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0"><i class="fa-solid fa-bolt"></i></div>
                                    <p class="text-gray-600 text-sm"><strong>Rapidité :</strong> Livraison de vos photos retouchées sous 48h à 72h.</p>
                                </div>
                                <div class="flex gap-4">
                                    <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0"><i class="fa-solid fa-medal"></i></div>
                                    <p class="text-gray-600 text-sm"><strong>Qualité :</strong> Matériel professionnel plein format (Full Frame) pour une netteté absolue.</p>
                                </div>
                                <div class="flex gap-4">
                                    <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0"><i class="fa-solid fa-smile"></i></div>
                                    <p class="text-gray-600 text-sm"><strong>Flexibilité :</strong> Nous couvrons tout type d'événements : séminaires, concerts, vernissages.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                            <h4 class="font-bold text-gray-900 mb-4">Services Additionnels</h4>
                            <div class="space-y-3">
                                <div class="flex justify-between items-center p-3 hover:bg-gray-50 rounded-xl">
                                    <span class="text-sm">Toile de luxe (Poster)</span>
                                    <span class="font-bold text-blue-600">+10.000 F</span>
                                </div>
                                <div class="flex justify-between items-center p-3 hover:bg-gray-50 rounded-xl">
                                    <span class="text-sm">Carte d'invitation (Design)</span>
                                    <span class="font-bold text-blue-600">+10.000 F</span>
                                </div>
                                <div class="flex justify-between items-center p-3 hover:bg-gray-50 rounded-xl">
                                    <span class="text-sm">Shooting extérieur privé</span>
                                    <span class="font-bold text-blue-600">+15.000 F</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "web-dev",
        icon: "fa-code",
        title: "Développement Web",
        shortDesc: "Conception de sites vitrines et applications web sur mesure haute performance.",
        color: "indigo",
        fullContent: `
            <div class="space-y-12 animate-fade-in">
                <header class="text-center md:text-left">
                    <div class="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Engineering & Design</div>
                    <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">Expertise Web & Logicielle</h2>
                    <p class="text-lg text-gray-600 leading-relaxed max-w-3xl">Je conçois des plateformes qui ne se contentent pas d'être esthétiques : elles sont conçues pour convertir vos visiteurs en clients et automatiser vos flux de travail.</p>
                </header>

                <div class="relative rounded-3xl overflow-hidden h-64 md:h-96 shadow-2xl">
                    <img src="FORUM.png" alt="Développement Web" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent flex items-end p-8">
                        <p class="text-white font-medium">Solutions robustes, évolutives et centrées utilisateur.</p>
                    </div>
                </div>

                <section>
                    <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span class="w-8 h-1 bg-indigo-600 rounded-full"></span> Forfaits Développement
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl border-t-8 border-t-indigo-400">
                            <h4 class="font-black text-xl mb-2">PACK VITRINE</h4>
                            <div class="text-3xl font-bold text-gray-900 mb-6">150.000 <span class="text-sm font-normal text-gray-500">FCFA</span></div>
                            <ul class="space-y-4 mb-8 text-sm text-gray-600">
                                <li><i class="fa-solid fa-check text-green-500 mr-2"></i> Jusqu'à 5 pages</li>
                                <li><i class="fa-solid fa-check text-green-500 mr-2"></i> Design Mobile Responsive</li>
                                <li><i class="fa-solid fa-check text-green-500 mr-2"></i> Référencement SEO de base</li>
                                <li><i class="fa-solid fa-check text-green-500 mr-2"></i> Formulaire de contact</li>
                            </ul>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-indigo-600 text-white rounded-xl font-bold">Commander</a>
                        </div>

                        <div class="bg-indigo-900 p-8 rounded-[2rem] shadow-2xl transform md:-translate-y-4 text-white">
                            <h4 class="font-black text-xl mb-2">E-COMMERCE</h4>
                            <div class="text-3xl font-bold mb-6">350.000 <span class="text-sm font-normal text-indigo-300">FCFA</span></div>
                            <ul class="space-y-4 mb-8 text-sm text-indigo-100">
                                <li><i class="fa-solid fa-star text-yellow-400 mr-2"></i> Boutique illimitée</li>
                                <li><i class="fa-solid fa-star text-yellow-400 mr-2"></i> Paiement Mobile Money</li>
                                <li><i class="fa-solid fa-star text-yellow-400 mr-2"></i> Gestion des stocks</li>
                                <li><i class="fa-solid fa-star text-yellow-400 mr-2"></i> Formation à l'outil</li>
                            </ul>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-white text-indigo-900 rounded-xl font-bold">Lancer ma boutique</a>
                        </div>

                        <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl border-t-8 border-t-purple-500">
                            <h4 class="font-black text-xl mb-2">SUR MESURE</h4>
                            <div class="text-3xl font-bold text-gray-900 mb-6">Devis <span class="text-sm font-normal text-gray-500">personnalisé</span></div>
                            <ul class="space-y-4 mb-8 text-sm text-gray-600">
                                <li><i class="fa-solid fa-check text-purple-500 mr-2"></i> Applications métiers</li>
                                <li><i class="fa-solid fa-check text-purple-500 mr-2"></i> Dashboards complexes</li>
                                <li><i class="fa-solid fa-check text-purple-500 mr-2"></i> API & Intégrations</li>
                                <li><i class="fa-solid fa-check text-purple-500 mr-2"></i> Support 24/7</li>
                            </ul>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-gray-900 text-white rounded-xl font-bold">Discuter du projet</a>
                        </div>
                    </div>
                </section>

                <div class="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
                    <h3 class="text-2xl font-bold mb-8">Ma Stack Technique</h3>
                    <div class="flex flex-wrap gap-6 justify-center">
                        <div class="flex flex-col items-center gap-2"><img src="https://skillicons.dev/icons?i=nextjs" class="h-12 w-12"><span class="text-xs font-bold">Next.js</span></div>
                        <div class="flex flex-col items-center gap-2"><img src="https://skillicons.dev/icons?i=tailwind" class="h-12 w-12"><span class="text-xs font-bold">Tailwind</span></div>
                        <div class="flex flex-col items-center gap-2"><img src="https://skillicons.dev/icons?i=nodejs" class="h-12 w-12"><span class="text-xs font-bold">Node.js</span></div>
                        <div class="flex flex-col items-center gap-2"><img src="https://skillicons.dev/icons?i=mongodb" class="h-12 w-12"><span class="text-xs font-bold">MongoDB</span></div>
                        <div class="flex flex-col items-center gap-2"><img src="https://skillicons.dev/icons?i=wordpress" class="h-12 w-12"><span class="text-xs font-bold">WordPress</span></div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "automation",
        icon: "fa-robot",
        title: "Automatisation & IA",
        shortDesc: "Gagnez du temps avec des outils qui travaillent pour vous 24h/24.",
        color: "green",
        fullContent: `
            <div class="space-y-12 animate-fade-in">
                <header class="text-center md:text-left">
                    <div class="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">AI First Solutions</div>
                    <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">L'Ère de l'Efficacité</h2>
                    <p class="text-lg text-gray-600 leading-relaxed max-w-3xl">Déléguez les tâches répétitives à des agents intelligents. Je construis votre "collaborateur digital" qui travaille sans relâche, 24h/24 et 7j/7.</p>
                </header>

                <div class="relative rounded-3xl overflow-hidden h-64 shadow-xl bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center p-8">
                     <i class="fa-solid fa-microchip text-[10rem] text-white/20 absolute -right-10"></i>
                     <div class="text-white text-center z-10">
                        <h3 class="text-3xl font-black mb-2 italic">"L'automatisation n'est plus une option, c'est un avantage compétitif."</h3>
                     </div>
                </div>

                <section>
                    <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span class="w-8 h-1 bg-green-600 rounded-full"></span> Solutions Smart Business
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl border-t-8 border-t-green-500">
                            <h4 class="font-black text-xl mb-2">AUDIT PRO</h4>
                            <div class="text-3xl font-bold text-gray-900 mb-6">25.000 <span class="text-sm font-normal text-gray-500">FCFA</span></div>
                            <p class="text-sm text-gray-500 mb-6">Analyse complète de vos processus et recommandations d'outils d'automatisation.</p>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-gray-900 text-white rounded-xl font-bold">Réserver l'Audit</a>
                        </div>

                        <div class="bg-green-600 p-8 rounded-[2rem] shadow-2xl transform md:-translate-y-4 text-white">
                            <h4 class="font-black text-xl mb-2">ASSISTANT WHATSAPP</h4>
                            <div class="text-3xl font-bold mb-6">150.000 <span class="text-sm font-normal text-green-200">FCFA</span></div>
                            <ul class="space-y-4 mb-8 text-sm">
                                <li><i class="fa-solid fa-robot mr-2"></i> Réponses intelligentes IA</li>
                                <li><i class="fa-solid fa-link mr-2"></i> Liaison Google Sheets</li>
                                <li><i class="fa-solid fa-user-check mr-2"></i> Capture de prospects</li>
                            </ul>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-white text-green-600 rounded-xl font-bold">Lancer mon ASSISTANT</a>
                        </div>

                        <div class="bg-blue-600 p-8 rounded-[2rem] shadow-2xl transform md:-translate-y-4 text-white">
                            <h4 class="font-black text-xl mb-2">ASSISTANT MESSENGER</h4>
                            <div class="text-3xl font-bold mb-6">100.000 <span class="text-sm font-normal text-green-200">FCFA</span></div>
                            <ul class="space-y-4 mb-8 text-sm">
                                <li><i class="fa-solid fa-robot mr-2"></i> Réponses intelligentes IA</li>
                                <li><i class="fa-solid fa-link mr-2"></i> Liaison Google Sheets</li>
                                <li><i class="fa-solid fa-user-check mr-2"></i> Capture de prospects</li>
                            </ul>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-white text-blue-600 rounded-xl font-bold">Lancer mon ASSISTANT</a>
                        </div>

                        <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl border-t-8 border-t-blue-500">
                            <h4 class="font-black text-xl mb-2">CRM AUTO</h4>
                            <div class="text-3xl font-bold text-gray-900 mb-6">250.000 <span class="text-sm font-normal text-gray-500">FCFA</span></div>
                            <p class="text-sm text-gray-500 mb-6">Automatisation des ventes et du service client (Email, SMS, Relances).</p>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-blue-600 text-white rounded-xl font-bold">Automatiser</a>
                        </div>
                    </div>
                </section>

                <div class="bg-gray-900 text-white p-12 rounded-[3.5rem] flex flex-col md:flex-row gap-8 items-center">
                    <div class="flex-1">
                        <h3 class="text-2xl font-bold mb-4">Maitrise des outils NO-CODE</h3>
                        <p class="text-gray-400 mb-6">J'utilise les meilleures technologies pour créer des systèmes fluides sans friction.</p>
                        <div class="flex gap-4">
                            <span class="px-3 py-1 bg-white/10 rounded-lg text-xs border border-white/20">MAKE.COM</span>
                            <span class="px-3 py-1 bg-white/10 rounded-lg text-xs border border-white/20">ZAPIER</span>
                            <span class="px-3 py-1 bg-white/10 rounded-lg text-xs border border-white/20">AIRTABLE</span>
                            <span class="px-3 py-1 bg-white/10 rounded-lg text-xs border border-white/20">OPENAI</span>
                        </div>
                    </div>
                    <div class="flex-shrink-0">
                         <i class="fa-solid fa-bolt-lightning text-6xl text-yellow-400 animate-pulse"></i>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "design",
        icon: "fa-palette",
        title: "Graphic Design",
        shortDesc: "Identité visuelle, logos et supports marketing percutants.",
        color: "purple",
        fullContent: `
            <div class="space-y-12 animate-fade-in">
                <header class="text-center md:text-left">
                    <div class="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Visual Storytelling</div>
                    <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">Design & Image de Marque</h2>
                    <p class="text-lg text-gray-600 leading-relaxed max-w-3xl">Votre identité visuelle est votre premier ambassadeur. Nous créons des visuels percutants qui captent l'attention et inspirent la confiance.</p>
                </header>

                <div class="relative rounded-3xl overflow-hidden h-64 md:h-80 shadow-2xl">
                    <img src="Automedication-Grossesse ok (2).png" alt="Graphic Design" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end p-8">
                        <p class="text-white font-medium italic">"L'esthétique au service de votre message."</p>
                    </div>
                </div>

                <section>
                    <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span class="w-8 h-1 bg-purple-600 rounded-full"></span> Forfaits Design
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl border-t-8 border-t-purple-400">
                            <h4 class="font-black text-xl mb-2">BRANDING PACK</h4>
                            <div class="text-3xl font-bold text-gray-900 mb-6">20.000 <span class="text-sm font-normal text-gray-500">FCFA</span></div>
                            <ul class="space-y-4 mb-8 text-sm text-gray-600">
                                <li><i class="fa-solid fa-check text-purple-500 mr-2"></i> Logo Professionnel</li>
                                <li><i class="fa-solid fa-check text-purple-500 mr-2"></i> Charte Graphique</li>
                                <li><i class="fa-solid fa-check text-purple-500 mr-2"></i> Carte de visite</li>
                            </ul>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-purple-600 text-white rounded-xl font-bold">Créer ma marque</a>
                        </div>

                        <div class="bg-purple-900 p-8 rounded-[2rem] shadow-2xl transform md:-translate-y-4 text-white">
                            <h4 class="font-black text-xl mb-2">SOCIAL MEDIA</h4>
                            <div class="text-3xl font-bold mb-6">5.000 <span class="text-sm font-normal text-purple-300">FCFA</span></div>
                            <p class="text-sm text-purple-100 mb-8 italic">Des visuels optimisés pour vos réseaux sociaux (Facebook, Insta, LinkedIn).</p>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-white text-purple-900 rounded-xl font-bold">Booster mes réseaux</a>
                        </div>

                        <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl border-t-8 border-t-orange-500">
                            <h4 class="font-black text-xl mb-2">ÉDITION / PRINT</h4>
                            <div class="text-3xl font-bold text-gray-900 mb-6">8.000 <span class="text-sm font-normal text-gray-500">FCFA /unité</span></div>
                            <ul class="space-y-4 mb-8 text-sm text-gray-600">
                                <li><i class="fa-solid fa-check text-orange-500 mr-2"></i> Affiches & Flyers</li>
                                <li><i class="fa-solid fa-check text-orange-500 mr-2"></i> Dépliants & Brochures</li>
                                <li><i class="fa-solid fa-check text-orange-500 mr-2"></i> Couvertures de livre</li>
                            </ul>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-gray-900 text-white rounded-xl font-bold">Commander un visuel</a>
                        </div>
                    </div>
                </section>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                    <div class="p-6 bg-white rounded-2xl border text-center hover:bg-purple-50 transition">
                         <i class="fa-solid fa-pen-nib text-3xl text-purple-600 mb-2"></i>
                         <p class="text-xs font-bold">LOGOTYPES</p>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border text-center hover:bg-purple-50 transition">
                         <i class="fa-solid fa-book-open text-3xl text-purple-600 mb-2"></i>
                         <p class="text-xs font-bold">ÉDITION</p>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border text-center hover:bg-purple-50 transition">
                         <i class="fa-solid fa-palette text-3xl text-purple-600 mb-2"></i>
                         <p class="text-xs font-bold">UI DESIGN</p>
                    </div>
                    <div class="p-6 bg-white rounded-2xl border text-center hover:bg-purple-50 transition">
                         <i class="fa-solid fa-bullhorn text-3xl text-purple-600 mb-2"></i>
                         <p class="text-xs font-bold">PUB</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "com-journalism",
        icon: "fa-microphone",
        title: "Com & Journalisme",
        shortDesc: "Rédaction web, animation radio et gestion de communication institutionnelle.",
        color: "red",
        fullContent: `
            <div class="space-y-12 animate-fade-in">
                <header class="text-center md:text-left">
                    <div class="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Média & Communication</div>
                    <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">Communication Stratégique</h2>
                    <p class="text-lg text-gray-600 leading-relaxed max-w-3xl">Journaliste de formation, je vous accompagne dans la structuration de vos messages pour toucher votre audience avec justesse et clarté.</p>
                </header>

                <div class="bg-red-600 p-10 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                    <i class="fa-solid fa-microphone absolute -right-4 -bottom-4 text-9xl opacity-20"></i>
                    <h3 class="text-2xl font-bold mb-4">L'info, notre métier</h3>
                    <p class="max-w-xl text-red-50 mb-6">Que ce soit pour du plaidoyer, du journalisme d'investigation ou de la communication d'entreprise, nous apportons une rigueur éditoriale sans faille.</p>
                </div>

                <section>
                    <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
                        <span class="w-8 h-1 bg-red-600 rounded-full"></span> Forfaits Rédaction & Media
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl border-t-8 border-t-red-400">
                            <h4 class="font-black text-xl mb-2">ARTICLE SEO</h4>
                            <div class="text-3xl font-bold text-gray-900 mb-6">15.000 <span class="text-sm font-normal text-gray-500">FCFA</span></div>
                            <p class="text-sm text-gray-600">Rédaction d'un article de blog ou publi-reportage optimisé de 1000 mots.</p>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-red-600 text-white rounded-xl font-bold mt-6">Commander l'article</a>
                        </div>

                        <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl border-t-8 border-t-gray-900">
                            <h4 class="font-black text-xl mb-2">MODÉRATION</h4>
                            <div class="text-3xl font-bold text-gray-900 mb-6">45.000 <span class="text-sm font-normal text-gray-500">FCFA</span></div>
                            <p class="text-sm text-gray-600">Animation de panels, conférences ou événements institutionnels (Journée complète).</p>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-gray-900 text-white rounded-xl font-bold mt-6">Réserver un modérateur</a>
                        </div>

                        <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl border-t-8 border-t-blue-600">
                            <h4 class="font-black text-xl mb-2">COMMUNITY MGMT</h4>
                            <div class="text-3xl font-bold text-gray-900 mb-6">100.000 <span class="text-sm font-normal text-gray-500">/mois</span></div>
                            <p class="text-sm text-gray-600">Gestion complète de votre image de marque sur Facebook, Twitter et Instagram.</p>
                            <a href="#contact" onclick="showSection('main-content')" class="block text-center py-3 bg-blue-600 text-white rounded-xl font-bold mt-6">Déléguer ma com'</a>
                        </div>
                    </div>
                </section>
            </div>
        `
    }
];