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
        "projects-main-title": "Örnek Projelerimiz",
        "p1-title": "Modern Konut Kompleksi",
        "p2-title": "Endüstriyel Yapı Tasarımı",
        "p3-title": "Şehir Planlama Projesi",
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
        "f-addr": "Merkez Mah. No:1, İstanbul",
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
        "p1-title": "Modern Residential Complex",
        "p2-title": "Industrial Structure Design",
        "p3-title": "Urban Planning Project",
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
        "f-addr": "Merkez Ave. No:1, Istanbul",
        "f-copy": "TEZEL CONSTRUCTION. All Rights Reserved."
    }
};

// Tarayıcıda kayıtlı dil varsa onu getir, yoksa varsayılan olarak "tr" ata
let currentLang = localStorage.getItem('selectedLang') || "tr";

// --- 2. ÇEVİRİ VE DİL DEĞİŞTİRME FONKSİYONU ---
function applyTranslations() {
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
        langBtn.querySelector('.current-lang').innerText = currentLang.toUpperCase();
    }
    
    // HTML ana etiketinin lang değerini senkronize et
    document.documentElement.lang = currentLang;

    // ID bazlı metinleri güncelle
    Object.keys(translations[currentLang]).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = translations[currentLang][id];
        }
    });

    // Dropdown Butonu Güncelleme
    const dropBtn = document.querySelector('.dropbtn');
    if (dropBtn) dropBtn.innerText = translations[currentLang]["nav-services-btn"];

    // Navigasyon Linklerini Güncelleme (Farklı sayfalardaki tam yol linkleri içerecek şekilde kapsayıcı yapıldı)
    const allLinks = document.querySelectorAll('nav a, .mobile-nav-panel a, .footer-nav a');
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            if (href.includes("#biz-kimiz")) link.innerText = translations[currentLang]["nav-who"];
            if (href.includes("#projeler")) link.innerText = translations[currentLang]["nav-projects"];
            if (href.includes("#iletisim")) link.innerText = translations[currentLang]["nav-contact"];
            if (href.includes("mimari.html")) link.innerText = translations[currentLang]["nav-arch"];
            if (href.includes("gayrimenkul.html")) link.innerText = translations[currentLang]["nav-real"];
            if (href.includes("muhendislik.html")) link.innerText = translations[currentLang]["nav-eng"];
        }
    });
}

// Dil Değiştirme Butonu Dinleyicisi
const langBtn = document.getElementById('lang-toggle-btn');
if (langBtn) {
    langBtn.addEventListener('click', () => {
        currentLang = (currentLang === "tr") ? "en" : "tr";
        localStorage.setItem('selectedLang', currentLang); // Seçimi tarayıcı hafızasına kaydet
        applyTranslations();
    });
}

// --- 3. MOBİL MENÜ ---
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
}

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
            tr: 'Bu proje, modern mimari anlayışıyla tasarlanmış olup toplam 3 bloktan oluşmaktadır. Projede tamamı 2+1 tipinde 72 daire yer almaktadır.2025 yılının Eylül ayında teslim edilen proje, planlı yerleşimi ve fonksiyonel daire yapısıyla konforlu bir yaşam sunmaktadır.Site içerisinde kapalı otopark, özenle düzenlenmiş peyzaj ve yeşil alanlar ile sakinlerine ferah ve kullanışlı bir yaşam alanı sağlanmıştır.Van’ın gelişen lokasyonlarından birinde yer alan proje, hem şehir hayatına yakınlığı hem de sunduğu düzenli ve sakin yaşam alanı ile öne çıkmaktadır.',
            en: 'This project, designed with a modern architectural approach, consists of a total of 3 blocks. The project includes 72 apartments, all of which are 2+1 type. Completed in September 2025, the project offers a comfortable living experience with its planned layout and functional apartment design. Within the site, there is a closed parking lot, meticulously landscaped green areas, providing residents with a spacious and functional living environment. Additionally, a 24/7 camera system creates a secure site environment. Located in one of Van’s developing locations, the project stands out for its proximity to city life and the organized and peaceful living space it offers.'
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
            tr: 'İstanbul’un en hareketli noktalarından biri olan Mecidiyeköy’de yükselen The Craton Hotel, modern mimarisi ve lüks detaylarıyla şehrin prestijli yapılarından biri olarak öne çıkıyor. Toplamda 127 odadan oluşan bu 5 yıldızlı konaklama projesinin işçilik süreçleri ve uygulama aşamaları tarafımızca titizlikle yürütülmüştür.Otel bünyesindeki alanların tüm ince işçilik dokunuşları, projenin yüksek kalite standartlarına uygun olarak tamamlanmıştır. Şehrin merkezinde, estetiği ve dayanıklılığı bir araya getiren bu proje, uygulama konusundaki uzmanlığımızın en güçlü örneklerinden biridir.',
            en: 'Rising in one of Istanbul’s busiest areas, Mecidiyeköy, The Craton Hotel stands out as one of the city’s prestigious structures with its modern architecture and luxurious details. Comprising a total of 127 rooms, this 5-star accommodation project was meticulously executed by us in terms of workmanship processes and implementation stages. All the fine craftsmanship touches in the areas within the hotel were completed in accordance with the project’s high-quality standards. Located in the heart of the city, this project, which combines aesthetics and durability, is one of the strongest examples of our expertise in implementation.'
        }
    },
    'p3': { 
        tr: 'Yaşam Kent Evleri', 
        en: 'Living City Residences', 
        img: 'img/terziog4.jpg',
        loc: { tr: 'Van/Terzıoglu', en: 'Van/Terzıoglu' },
        status: { tr: 'Tamamlandı', en: 'Completed' },
        year: '2023',
        desc: { 
            tr: 'Geleceğin yaşanabilir şehirlerini tasarlamak amacıyla hazırlanan bu master plan çalışması, çevre dostu ulaşım ağlarını kapsamaktadır.',
            en: 'This master plan study, prepared to design the livable cities of the future, covers eco-friendly transportation networks.'
        }
    }
};

function openProject(id) {
    const p = projectsData[id];
    if(!p) return;

    // Elemanları Seç
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalLoc = document.getElementById('modal-loc');
    const modalStatus = document.getElementById('modal-status');
    const modalYear = document.getElementById('modal-year');
    const modalDesc = document.getElementById('modal-desc');

    // Verileri Bas
    if (modalImg) modalImg.src = p.img;
    if (modalTitle) modalTitle.innerText = p[currentLang];
    if (modalLoc) modalLoc.innerText = p.loc[currentLang];
    if (modalStatus) modalStatus.innerText = p.status[currentLang];
    if (modalYear) modalYear.innerText = p.year;
    if (modalDesc) modalDesc.innerText = p.desc[currentLang];

    // Modalı Göster
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

// --- 6. SAYFA İLK YÜKLENDİĞİNDE HAFIZADAKİ DİLİ UYGULA ---
document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();
});