/**
 * =========================================================================
 * TEZEL İNŞAAT - GAYRİMENKUL SAYFASI TAM KONTROL SCRIPTİ (V.FİNAL - ENTEGRE)
 * =========================================================================
 */

// 1. TÜM KELİME VERİSİ (TR-EN)
const translations = {
    TR: {
        nav_who: "Biz Kimiz",
        nav_projects: "Projeler",
        nav_fields: "Faaliyet Alanlarımız",
        nav_contact: "İletişim",
        re_sub: "GÜVENLİ YATIRIM REHBERİ",
        re_slogan: '"Değer Katan Portföyler, Mutlu Yarınlar"',
        re_desc1: "Tezel Gayrimenkul olarak, doğru lokasyonda doğru yatırımın hayat değiştirdiğine inanıyoruz. Van ve çevresindeki derin saha tecrübemizi, güncel piyasa verileriyle birleştirerek gayrimenkul arayışınızı bir kazanç yolculuğuna dönüştürüyoruz.",
        re_desc2: "Sadece mülk satmıyor; hukuki süreçlerden ekspertiz desteğine kadar her adımda şeffaf ve güvenilir bir danışmanlık sunuyoruz. Aradığınız ister huzurlu bir yuva, ister yüksek getirili bir ticari alan olsun; doğru adrestesiniz.",
        services_title: "GAYRİMENKUL HİZMETLERİMİZ",
        shb_title: "Güncel İlanlarimizi Sahibinden.com üzerinden takip edebilirsiniz.",
        shb_desc: "Van ve çevresindeki tüm portföyümüz anlık olarak güncellenmektedir.",
        shb_btn: "Tüm İlanları Gör",
        footer_fast: "Hızlı Menü",
        footer_contact: "İletişim",
        footer_follow: "Bizi Takip Edin",
        footer_copy: "TEZEL İNŞAAT. Tüm Hakları Saklıdır.",
        s1_t: "Alım & Satım Danışmanlığı",
        s1_d: "Portföyümüzdeki en değerli konut ve ticari alanları en doğru fiyatla sizlerle buluşturuyoruz.",
        s2_t: "Arsa & Arazi Yatırımı",
        s2_d: "Gelecek vaat eden bölgelerde, imar durumuna uygun ve yüksek prim potansiyelli arsa çözümleri.",
        s3_t: "Gayrimenkul Ekspertiz",
        s3_d: "Mülkünüzün gerçek piyasa değerini profesyonel analizlerle belirliyor, zaman kaybını önlüyoruz.",
        s4_t: "Kiralama Hizmetleri",
        s4_d: "Mülk sahibi ve kiracı arasındaki köprüyü, hukuki zeminleri sağlamlaştırarak kuruyoruz."
    },
    EN: {
        nav_who: "About Us",
        nav_projects: "Projects",
        nav_fields: "Field of Activity",
        nav_contact: "Contact",
        re_sub: "SECURE INVESTMENT GUIDE",
        re_slogan: '"Value-Adding Portfolios, Happy Tomorrows"',
        re_desc1: "As Tezel Real Estate, we believe that the right investment in the right location changes lives. We transform your real estate search into a profitable journey by combining our deep field experience in Van and its surroundings with up-to-date market data.",
        re_desc2: "We don't just sell property; we offer transparent and reliable consultancy at every step, from legal processes to appraisal support. Whether you are looking for a peaceful home or a high-yield commercial area; you are at the right address.",
        services_title: "OUR REAL ESTATE SERVICES",
        shb_title: "You can follow our current listings on Sahibinden.com.",
        shb_desc: "Our entire portfolio in Van and its surroundings is updated instantly.",
        shb_btn: "View All Listings",
        footer_fast: "Quick Menu",
        footer_contact: "Contact Info",
        footer_follow: "Follow Us",
        footer_copy: "TEZEL CONSTRUCTION. All Rights Reserved.",
        s1_t: "Buy & Sell Consultancy",
        s1_d: "We bring you the most valuable residential and commercial areas in our portfolio at the right price.",
        s2_t: "Land & Plot Investment",
        s2_d: "Land solutions suitable for zoning status with high premium potential in promising regions.",
        s3_t: "Real Estate Appraisal",
        s3_d: "We determine the real market value of your property with professional analysis and prevent loss of time.",
        s4_t: "Leasing Services",
        s4_d: "We build the bridge between the property owner and the tenant by strengthening the legal grounds."
    }
};

// KRİTİK DÜZELTME: Sayfa açıldığında hafızadaki dili büyük harfe zorlayarak oku (tr/en uyuşmazlığını çözer)
let currentLang = (localStorage.getItem('selectedLang') || "TR").toUpperCase();

// 2. ANA ÇEVİRİ FONKSİYONU
function updatePageLanguage() {
    const t = translations[currentLang];
    document.documentElement.lang = currentLang.toLowerCase();

    // Dil seçici kutusunun üstündeki yazıyı (TR/EN) anlık güncelle
    const currentLangSpan = document.querySelector('#lang-toggle-btn .current-lang');
    if (currentLangSpan) {
        currentLangSpan.innerText = currentLang;
    }

    // --- HEADER & MENÜLER ---
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        const href = link.getAttribute('href') || "";
        
        if (href.includes("#biz-kimiz")) {
            link.innerText = t.nav_who;
        } else if (href.includes("#projeler")) {
            link.innerText = t.nav_projects;
        } else if (href.includes("#iletisim") || link.id === "iletisim-link") {
            link.innerText = t.nav_contact;
        } else if (href.includes("#Faaliyet-Alanlarimiz")) {
            link.innerText = t.nav_fields;
        }
    });

    // Dropdown ana butonu
    const dropBtn = document.querySelector('.dropbtn');
    if (dropBtn) dropBtn.innerText = t.nav_fields;

    // --- INTRO / VİZYON BÖLÜMÜ ---
    if (document.querySelector('.re-sub-title')) document.querySelector('.re-sub-title').innerText = t.re_sub;
    if (document.querySelector('.re-slogan')) document.querySelector('.re-slogan').innerText = t.re_slogan;
    
    const descParas = document.querySelectorAll('.re-description p');
    if (descParas[0]) descParas[0].innerText = t.re_desc1;
    if (descParas[1]) descParas[1].innerText = t.re_desc2;

    // --- HİZMET KARTLARI ---
    if (document.querySelector('.group-title')) document.querySelector('.group-title').innerText = t.services_title;
    const cards = document.querySelectorAll('.re-services-grid .re-service-card');
    if (cards.length >= 4) {
        if (cards[0].querySelector('h3')) cards[0].querySelector('h3').innerText = t.s1_t;
        if (cards[0].querySelector('p')) cards[0].querySelector('p').innerText = t.s1_d;
        
        if (cards[1].querySelector('h3')) cards[1].querySelector('h3').innerText = t.s2_t;
        if (cards[1].querySelector('p')) cards[1].querySelector('p').innerText = t.s2_d;
        
        if (cards[2].querySelector('h3')) cards[2].querySelector('h3').innerText = t.s3_t;
        if (cards[2].querySelector('p')) cards[2].querySelector('p').innerText = t.s3_d;
        
        if (cards[3].querySelector('h3')) cards[3].querySelector('h3').innerText = t.s4_t;
        if (cards[3].querySelector('p')) cards[3].querySelector('p').innerText = t.s4_d;
    }

    // --- SAHİBİNDEN KUTUSU ---
    if (document.querySelector('.shb-text h3')) document.querySelector('.shb-text h3').innerText = t.shb_title;
    if (document.querySelector('.shb-text p')) document.querySelector('.shb-text p').innerText = t.shb_desc;
    if (document.querySelector('.shb-btn')) {
        document.querySelector('.shb-btn').innerHTML = `${t.shb_btn} <i class="fas fa-external-link-alt"></i>`;
    }

    // --- FOOTER FAALİYET ALANLARI LİNKLERİ İÇİN EK ÇEVİRİ ---
    const footerNavLinks = document.querySelectorAll('.footer-nav ul li a');
    if (footerNavLinks.length >= 5) {
        footerNavLinks[2].innerText = (currentLang === "TR") ? "Mimari" : "Architecture";
        footerNavLinks[3].innerText = (currentLang === "TR") ? "Gayrimenkul" : "Real Estate";
        footerNavLinks[4].innerText = (currentLang === "TR") ? "Mühendislik" : "Engineering";
    }

    // Footer Başlıkları
    if (document.getElementById('footer-nav-title')) document.getElementById('footer-nav-title').innerText = t.footer_fast;
    if (document.getElementById('footer-contact-title')) document.getElementById('footer-contact-title').innerText = t.footer_contact;
    if (document.getElementById('footer-social-title')) document.getElementById('footer-social-title').innerText = t.footer_follow;
    if (document.getElementById('f-copy')) document.getElementById('f-copy').innerText = t.footer_copy;
}

// 3. SAYFA ETKİLEŞİMLERİ VE YÜKLENME DURUMU
document.addEventListener('DOMContentLoaded', () => {
    
    // DÜZELTME: Sayfa yüklenir yüklenmez hafızadaki dili derhal çalıştırır
    updatePageLanguage();

    // Dil Değiştirme Butonu Dinleyicisi
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = (currentLang === "TR") ? "EN" : "TR";
            localStorage.setItem('selectedLang', currentLang); // Yeni dili tarayıcıya kaydet
            updatePageLanguage(); // Sayfayı yenilemeden metinleri değiştir
        });
    }

    // Mobil Menü Hamburger Etkileşimi
    const menuBtn = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            mobileNav.classList.toggle('active');
        });
    }

    // Header Scroll Efekti
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (header) {
            if (window.scrollY > 50) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        }
    });
});