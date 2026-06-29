/**
 * =========================================================================
 * TEZEL İNŞAAT - MÜHENDİSLİK SAYFASI SCRIPTİ (TIKLANABİLİR GÖRSEL & ENTEGRE)
 * =========================================================================
 */

const translations = {
    TR: {
        nav_who: "Biz Kimiz",
        nav_projects: "Projeler",
        nav_fields: "Faaliyet Alanlarımız",
        nav_contact: "İletişim",
        eng_sub: "TEKNİK ÇÖZÜM ORTAĞINIZ",
        eng_title: "Mühendislikte Hassasiyet, Yapıda Güven",
        eng_desc: "Tezel Mühendislik olarak, modern mühendislik çözümlerini uluslararası standartlarla harmanlayarak yapılarınızın güvenliğini garanti altına alıyoruz.",
        s1_t: "Statik Proje", s1_d: "Betonarme ve çelik yapıların statik hesaplarını sıfır hata prensibiyle hazırlıyoruz.",
        s2_t: "Zemin Etüdü", s2_d: "Yapı zeminini bilimsel yöntemlerle analiz ederek en uygun temel sistemini kuruyoruz.",
        s3_t: "Teknik Uygulama", s3_d: "Şantiye aşamasında projenin standartlara uygunluğunu titizlikle denetliyoruz.",
        s4_t: "Deprem Analizi", s4_d: "Mevcut yapıların deprem riskini ölçüyor ve güçlendirme projeleri geliştiriyoruz.",
        proj_title: "REFERANS STATİK PROJELERİMİZ",
        p1_t: "Modern Konut Kompleksi", p1_d: "Deprem yönetmeliğine tam uyumlu taşıyıcı sistem projesi.",
        p1_tag1: "12.000 m²", p1_tag2: "Statik Analiz Tamamlandı",
        p2_t: "Endüstriyel Çelik Yapı", p2_d: "Geniş açıklıklı fabrika binası için çelik çözümü.",
        p2_tag1: "Ağır Sanayi", p2_tag2: "Çelik Konstrüksiyon",
        detail: "DETAYLARI İNCELE",
        footer_fast: "Hızlı Menü",
        footer_contact: "İletişim",
        footer_follow: "Bizi Takip Edin",
        footer_copy: "TEZEL İNŞAAT. Tüm Hakları Saklıdır."
    },
    EN: {
        nav_who: "About Us",
        nav_projects: "Projects",
        nav_fields: "Fields of Activity",
        nav_contact: "Contact",
        eng_sub: "YOUR TECHNICAL SOLUTION PARTNER",
        eng_title: "Precision in Engineering, Trust in Structure",
        eng_desc: "As Tezel Engineering, we guarantee the safety of your structures by blending modern engineering solutions with international standards.",
        s1_t: "Static Project", s1_d: "We prepare static calculations of reinforced concrete and steel structures with zero error principle.",
        s2_t: "Soil Survey", s2_d: "We establish the most suitable foundation system by analyzing the building ground with scientific methods.",
        s3_t: "Technical Application", s3_d: "We meticulously inspect the compliance of the project with standards during the construction phase.",
        s4_t: "Earthquake Analysis", s4_d: "We measure the earthquake risk of existing structures and develop strengthening projects.",
        proj_title: "REFERENCE STATIC PROJECTS",
        p1_t: "Modern Housing Complex", p1_d: "Carrier system project fully compliant with earthquake regulations.",
        p1_tag1: "12,000 sqm", p1_tag2: "Static Analysis Completed",
        p2_t: "Industrial Steel Structure", p2_d: "Steel construction solution designed for wide-span factory buildings.",
        p2_tag1: "Heavy Industry", p2_tag2: "Steel Construction",
        detail: "VIEW DETAILS",
        footer_fast: "Quick Menu",
        footer_contact: "Contact Info",
        footer_follow: "Follow Us",
        footer_copy: "TEZEL CONSTRUCTION. All Rights Reserved."
    }
};

// KRİTİK AYAR: Sayfa açıldığında hafızadaki dili kontrol et, yoksa varsayılanı TR yap
let currentLang = (localStorage.getItem('selectedLang') || "TR").toUpperCase();

function updatePageLanguage() {
    const t = translations[currentLang];
    document.documentElement.lang = currentLang.toLowerCase();

    // Dil seçici kutusunu senkronize et
    const currentLangSpan = document.querySelector('#lang-toggle-btn .current-lang');
    if (currentLangSpan) {
        currentLangSpan.innerText = currentLang;
    }

    // 1. Menü Linkleri (Üst Açılır Menü ve Mobil Dahil Gelişmiş Yakalayıcı)
    document.querySelectorAll('.nav-left a, .nav-right a, .mobile-nav-panel a, .footer-nav a, .dropdown-content a').forEach(link => {
        const href = link.getAttribute('href') || "";
        
        // Sayfa Link İçeriklerinin Çevirisi (Masaüstü ve Mobil Senkronizasyonu)
        if (href.includes("mimari.html")) link.innerText = (currentLang === "TR") ? "Mimari" : "Architecture";
        if (href.includes("gayrimenkul.html")) link.innerText = (currentLang === "TR") ? "Gayrimenkul" : "Real Estate";
        if (href.includes("muhendislik.html")) link.innerText = (currentLang === "TR") ? "Mühendislik" : "Engineering";
        
        // Çapa (Anchor) Linklerinin Çevirisi
        if (href.includes("#biz-kimiz")) link.innerText = t.nav_who;
        if (href.includes("#projeler")) link.innerText = t.nav_projects;
        if (href.includes("#iletisim") || link.id === "iletisim-link") link.innerText = t.nav_contact;
        if (href.includes("#Faaliyet-Alanlarimiz")) link.innerText = t.nav_fields;
    });

    // 2. Dropdown Butonu
    const dropBtn = document.querySelector('.dropbtn');
    if (dropBtn) dropBtn.innerText = t.nav_fields;

    // 3. Giriş Bölümü
    const label = document.querySelector('.eng-label'); if(label) label.innerText = t.eng_sub;
    const title = document.querySelector('.eng-title'); if(title) title.innerText = t.eng_title;
    const desc = document.querySelector('.eng-paragraph'); if(desc) desc.innerText = t.eng_desc;

    // 4. Hizmet Kartları
    const serviceCards = document.querySelectorAll('.eng-service-item');
    serviceCards.forEach((card, index) => {
        const h3 = card.querySelector('h3');
        const p = card.querySelector('p');
        if(h3) h3.innerText = t[`s${index + 1}_t`];
        if(p) p.innerText = t[`s${index + 1}_d`];
    });

    // 5. Statik Proje Kutuları (Tıklanabilir Overlay Dahil)
    const sectionTitle = document.querySelector('.eng-section-title'); if(sectionTitle) sectionTitle.innerText = t.proj_title;
    const projectBoxes = document.querySelectorAll('.eng-project-box');
    projectBoxes.forEach((box, index) => {
        const h4 = box.querySelector('h4');
        const p = box.querySelector('p');
        const tags = box.querySelectorAll('.eng-project-tags li');
        const overlaySpan = box.querySelector('.eng-project-overlay span');

        if(h4) h4.innerText = t[`p${index + 1}_t`];
        if(p) p.innerText = t[`p${index + 1}_d`];
        if(overlaySpan) overlaySpan.innerText = t.detail; 
        if(tags[0]) tags[0].innerHTML = `<i class="fas fa-check"></i> ${t[`p${index + 1}_tag1`]}`;
        if(tags[1]) tags[1].innerHTML = `<i class="fas fa-check"></i> ${t[`p${index + 1}_tag2`]}`;
    });

    // 6. Footer Alanları
    const footNav = document.getElementById('footer-nav-title'); if(footNav) footNav.innerText = t.footer_fast;
    const footContact = document.getElementById('footer-contact-title'); if(footContact) footContact.innerText = t.footer_contact;
    const footSocial = document.getElementById('footer-social-title'); if(footSocial) footSocial.innerText = t.footer_follow;
    const footCopy = document.getElementById('f-copy'); if(footCopy) footCopy.innerText = t.footer_copy;
}

// ETKİLEŞİMLER
document.addEventListener('DOMContentLoaded', () => {
    
    // Sayfa yüklenir yüklenmez hafızadaki dili tarayıp uygular
    updatePageLanguage();
    
    // DİL BUTONU
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
        langBtn.style.cursor = "pointer";
        langBtn.onclick = function() {
            currentLang = (currentLang === "TR") ? "EN" : "TR";
            localStorage.setItem('selectedLang', currentLang); // Seçilen yeni dili hafızaya kaydeder
            const span = this.querySelector('.current-lang');
            if(span) span.innerText = currentLang;
            updatePageLanguage();
        };
    }

    // MOBİL MENÜ & SCROLL
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    if (menuToggle && mobileNav) {
        menuToggle.onclick = function() {
            this.classList.toggle('open');
            mobileNav.classList.toggle('active');
        };
    }

    window.onscroll = function() {
        const header = document.querySelector('.main-header');
        if (header) {
            if (window.scrollY > 50) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        }
    };
});