// --- 1. TÜM SİTE DİL SÖZLÜĞÜ (TAM KAPSAM) ---
const translations = {
    "tr": {
        // Navigasyon & Menü
        "nav-who": "Biz Kimiz",
        "nav-projects": "Projeler",
        "nav-services-btn": "Faaliyet Alanlarımız", 
        "nav-arch": "Mimari",
        "nav-real": "Gayrimenkul",
        "nav-eng": "Mühendislik",
        "nav-contact": "İletişim",
        
        // Slogan & Biz Kimiz
        "slogan-text": "Mimari Estetiği, Mühendislik Gücüyle Birleştiriyoruz.",
        "about-title": "Biz Kimiz?",
        "about-desc": "Tezel İnşaat & Danışmanlık olarak, gayrimenkulden mimariye, mühendislikten müşavirliğe kadar geniş bir yelpazede yenilikçi çözümler sunuyoruz.",
        "stat-years": "Yıllık Tecrübe",
        "stat-projects": "Tamamlanan Proje",
        "stat-clients": "Mutlu Müşteri",
        
        // Projeler (Genel Başlıklar)
        "projects-main-title": " Projelerimiz",
        "p1-title": "",
        "p2-title": "",
        "p3-title": "",
        "view-text-1": "Detayları Gör",
        "view-text-2": "Detayları Gör",
        "view-text-3": "Detayları Gör",

        // MODAL ETİKETLERİ (Sabit Başlıklar)
        "label-status": "Durum:",
        "label-loc": "Lokasyon:",
        "label-year": "Yapım Yılı:",
        "label-desc-title": "Proje Hakkında",
        
        // CTA & Faaliyet Bölümü
        "cta-title": "Vizyonumuzu Daha Yakından Tanıyın",
        "cta-desc": "Hayata geçirdiğimiz tüm projeleri detaylıca incelemek için galerimizi ziyaret edin.",
        "cta-btn-text": "Tüm Projelerimizi Gör",
        "services-main-title": "Faaliyet Alanlarımız",
        "s1-title": "Mimari Tasarım",
        "s1-desc": "Estetik ve fonksiyonelliği birleştiren modern yaşam alanları tasarlıyoruz.",
        "s2-title": "Mühendislik & Statik",
        "s2-desc": "Güçlü altyapı ve güvenilir statik hesaplamalarla yapıları sağlama alıyoruz.",
        "s3-title": "Gayrimenkul Danışmanlığı",
        "s3-desc": "Doğru yatırım ve mülk yönetimi konularında profesyonel rehberlik sunuyoruz.",
        "s4-title": "Proje Yönetimi",
        "s4-desc": "Süreçlerin başından sonuna kadar verimlilik ve kalite kontrolü sağlıyoruz.",
        
        // Footer
        "footer-nav-title": "Hızlı Menü",
        "footer-contact-title": "İletişim",
        "footer-social-title": "Bizi Takip Edin",
        "f-addr": "Hafiziye, Sıhke Cd. Kapı No:143 Daire No:1, 65000 İpekyolu/Van",
        "f-copy": "TEZEL İNŞAAT. Tüm Hakları Saklıdır."
    },
    "en": {
        "nav-who": "Who We Are",
        "nav-projects": "Projects",
        "nav-services-btn": "Fields of Activity", 
        "nav-arch": "Architecture",
        "nav-real": "Real Estate",
        "nav-eng": "Engineering",
        "nav-contact": "Contact",
        
        "slogan-text": "Combining Architectural Aesthetics with Engineering Power.",
        "about-title": "Who Are We?",
        "about-desc": "As Tezel Construction & Consultancy, we offer innovative solutions in a wide range from real estate to architecture and engineering.",
        "stat-years": "Years of Experience",
        "stat-projects": "Completed Projects",
        "stat-clients": "Happy Clients",
        
        "projects-main-title": "Featured Projects",
        "p1-title": "",
        "p2-title": "",
        "p3-title": "",
        "view-text-1": "View Details",
        "view-text-2": "View Details",
        "view-text-3": "View Details",

        // MODAL LABELS (Fixed Titles)
        "label-status": "Status:",
        "label-loc": "Location:",
        "label-year": "Year:",
        "label-desc-title": "About Project",
        
        "cta-title": "Get to Know Our Vision",
        "cta-desc": "Visit our gallery page to examine all the projects we have implemented in detail.",
        "cta-btn-text": "See All Projects",
        "services-main-title": "Our Fields of Activity",
        "s1-title": "Architectural Design",
        "s1-desc": "We design modern living spaces that combine aesthetics and functionality.",
        "s2-title": "Engineering & Statics",
        "s2-desc": "We secure structures with reliable static calculations.",
        "s3-title": "Real Estate Consultancy",
        "s3-desc": "We offer professional guidance on property investment and management.",
        "s4-title": "Project Management",
        "s4-desc": "We ensure efficiency and quality control from start to finish.",
        
        "footer-nav-title": "Quick Menu",
        "footer-contact-title": "Contact",
        "footer-social-title": "Follow Us",
        "f-addr": "Hafiziye, Sıhke Cd. Kapı No:143 Daire No:1, 65000 İpekyolu/Van",
        "f-copy": "TEZEL CONSTRUCTION. All Rights Reserved."
    }
};

// Tarayıcıda kayıtlı dil varsa onu getir, yoksa varsayılan olarak "tr" ata
let currentLang = localStorage.getItem('selectedLang') || "tr";

// --- 2. ÇEVİRİ VE DİL DEĞİŞTİRME FONKSİYONU ---
function applyTranslations() {
    // Masaüstü butonunu güncelle
    const desktopBtn = document.getElementById('lang-toggle-btn');
    if (desktopBtn && desktopBtn.querySelector('.current-lang')) {
        desktopBtn.querySelector('.current-lang').innerText = currentLang.toUpperCase();
    }
    
    // Mobil butonunu güncelle
    const mobileBtn = document.getElementById('lang-toggle-btn-mobile');
    if (mobileBtn && mobileBtn.querySelector('.current-lang')) {
        mobileBtn.querySelector('.current-lang').innerText = currentLang.toUpperCase();
    }
    
    // HTML ana etiketinin lang değerini senkronize et
    document.documentElement.lang = currentLang;

    // ID bazlı metinleri güncelle
    if (translations[currentLang]) {
        Object.keys(translations[currentLang]).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.innerText = translations[currentLang][id];
            }
        });
    }

   // Dropdown Butonu Güncelleme (Hata Vermeyen Güvenli Hali)
const dropBtn = document.querySelector('.dropbtn');
if (dropBtn && translations[currentLang] && translations[currentLang]["nav-services-btn"]) {
    dropBtn.innerText = translations[currentLang]["nav-services-btn"];
}

    // Navigasyon Linklerini Güncelleme
    const allLinks = document.querySelectorAll('nav a, .mobile-nav-panel a, .footer-nav a');
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && translations[currentLang]) {
            if (href.includes("#biz-kimiz")) link.innerText = translations[currentLang]["nav-who"];
            if (href.includes("#projeler")) link.innerText = translations[currentLang]["nav-projects"];
            if (href.includes("#iletisim")) link.innerText = translations[currentLang]["nav-contact"];
            if (href.includes("mimari.html")) link.innerText = translations[currentLang]["nav-arch"];
            if (href.includes("gayrimenkul.html")) link.innerText = translations[currentLang]["nav-real"];
            if (href.includes("muhendislik.html")) link.innerText = translations[currentLang]["nav-eng"];
        }
    });
}

// Ortak Dil Değiştirme Tetikleyicisi
function toggleLanguage() {
    currentLang = (currentLang === "tr") ? "en" : "tr";
    localStorage.setItem('selectedLang', currentLang); // Seçimi tarayıcı hafızasına kaydet
    applyTranslations();
}

// --- 3. EVENT LISTENERS & INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menü Yönetimi
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    // Masaüstü Dil Butonu Dinleyicisi
    const desktopBtn = document.getElementById('lang-toggle-btn');
    if (desktopBtn) {
        desktopBtn.addEventListener('click', toggleLanguage);
    }

    // Mobil Dil Butonu Dinleyicisi
    const mobileBtn = document.getElementById('lang-toggle-btn-mobile');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleLanguage);
    }

    // Sayfa ilk yüklendiğinde hafızadaki dili uygula
    applyTranslations();
});

// --- 4. MODAL YÖNETİMİ & PROJE VERİLERİ ---
const projectModal = document.getElementById('projectModal');
const serviceModal = document.getElementById('serviceModal');

// PROJE VERİ TABANI
const projectsData = {
    'p1': { 
        tr: 'Tezel Kaplan Evleri', 
        en: 'Tezel Kaplan Residences', 
        img: 'img/2+1hatun4.jpg',
        loc: { tr: 'VAN / Ipekyolu', en: 'VAN / Ipekyolu' },
        status: { tr: 'Tamamlandı', en: 'Completed' },
        year: '2025/2026',
        desc: { 
            tr: 'Kaplanlar konut serisinin temellerini atan 1. Etap projemiz, 72 dairelik geniş ölçekli yapısıyla bölgedeki yaşam standartlarına yeni bir soluk getiriyor. Sağlam mühendislik altyapısı ve modern mimari çizgilerin birleştiği projemiz; geniş sosyal alanları, yüksek malzeme kalitesi og kusursuz işçiliğiyle dikkat çekiyor. Tezel güvencesiyle hayata geçirilen bu yapıda, estetik ve fonksiyonellik bir arada sunularak, sakinlerine huzurlu bir yaşam alanı tanımlanıyor',
            en: 'Our first phase project, which laid the foundations of the Kaplanlar residential series, brings a new breath to the living standards in the region with its large-scale structure of 72 apartments. Our project, which combines solid engineering infrastructure and modern architectural lines, stands out with its spacious social areas, high material quality, and flawless workmanship. In this structure brought to life under the assurance of Tezel, aesthetics and functionality are offered together, defining a peaceful living space for its residents.'
        }
    },
    'p2': { 
        tr: 'The Craton Otel ', 
        en: 'The Craton Hotel', 
        img: 'img/craton1.webp',
        loc: { tr: 'İstanbul/Şişli', en: 'İstanbul/Şişli' },
        status: { tr: 'tamamlandı', en: 'Completed' },
        year: '2019',
        desc: { 
            tr: 'İstanbul’un prestijli turizm duraklarından The Craton Otel’in tüm ince işçilik ve uygulama süreçlerini, başından sonuna kadar Tezel güvencesiyle bizzat gerçekleştirdik. Otelin her bir noktasındaki teknik detaylarda, malzeme seçiminde ve estetik dokunuşlarda sorumluluğu tamamen üstlendik. Profesyonel uygulama disiplinimizle, projenin başından teslim aşamasına kadar her detayda ustalığımızı konuşturarak otelin yüksek standartlı atmosferini gerçeğe dönüştürdük.',
            en: 'We personally executed all the fine workmanship and application processes of The Craton Hotel, one of Istanbul’s prestigious tourism destinations, under the assurance of Tezel. We took full responsibility for the technical details, material selection, and aesthetic touches in every corner of the hotel. With our professional application discipline, we showcased our craftsmanship in every detail from the beginning of the project to the delivery phase, transforming the hotel’s high-standard atmosphere into reality.'
        }
    },
    'p3': { 
        tr: 'Yaşam Kent Evleri', 
        en: 'Living City Residences', 
        img: 'img/terziog4.jpg',
        loc: { tr: 'Van/Terzıoglu', en: 'Van/Terzıoglu' },
        status: { tr: 'Tamamlandı', en: 'Completed' },
        year: '2020',
        desc: { 
            tr: 'Yaşam Kent Evleri, şehrin en değerli akslarından biri olan Terzioğlu Caddesi üzerinde konumlanan, modern şehir yaşamını konforla buluşturan özel bir konut projesidir. 2+1 and 3+1 daire seçenekleriyle farklı yaşam ihtiyaçlarına hitap eden proje, ferah peyzaj alanları, titizlikle tercih edilen yapı malzemeleri ve merkezi konumuyla öne çıkmaktadır. Günlük yaşamın tüm olanaklarına kolay erişim sunarken, sakinlerine huzurlu ve nitelikli bir yaşam deneyimi vadeder.',
            en: 'Yaşam Kent Residences is a special residential project located on Terzioğlu Street, one of the most valuable axes of the city, combining modern urban living with comfort. Catering to different lifestyle needs with 2+1 and 3+1 apartment options, the project stands out with its spacious landscaped areas, carefully selected building materials, and central location. While providing easy access to all daily life amenities, it promises residents a peaceful and quality living experience.'
        }
    }
};

function openProject(id) {
    const p = projectsData[id];
    if(!p) return;

    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalLoc = document.getElementById('modal-loc');
    const modalStatus = document.getElementById('modal-status');
    const modalYear = document.getElementById('modal-year');
    const modalDesc = document.getElementById('modal-desc');

    if (modalImg) modalImg.src = p.img;
    if (modalTitle) modalTitle.innerText = p[currentLang];
    if (modalLoc) modalLoc.innerText = p.loc[currentLang];
    if (modalStatus) modalStatus.innerText = p.status[currentLang];
    if (modalYear) modalYear.innerText = p.year;
    if (modalDesc) modalDesc.innerText = p.desc[currentLang];

    if (projectModal) projectModal.style.display = 'block';
}

function closeProject() { if (projectModal) projectModal.style.display = 'none'; }
function openServiceModal() { if(serviceModal) serviceModal.style.display = 'block'; }
function closeServiceModal() { if(serviceModal) serviceModal.style.display = 'none'; }

window.onclick = (e) => {
    if (e.target == projectModal) closeProject();
    if (e.target == serviceModal) closeServiceModal();
};

// --- 5. STICKY HEADER ---
window.onscroll = () => {
    const header = document.querySelector('.main-header');
    if (header) {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    }
};