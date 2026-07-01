/**
 * =========================================================================
 * TEZEL İNŞAAT - MİMARİ SAYFASI TAM ENTEGRE TERCÜME & MODAL SİSTEMİ (2026)
 * =========================================================================
 */

// 1. STATİK SAYFA ÇEVİRİ VERİLERİ (Büyük harf standardına sabitlendi)
const translations = {
    TR: {
        nav_who: "Biz Kimiz",
        nav_projects: "Projeler",
        nav_fields: "Faaliyet Alanlarımız",
        nav_contact: "İletişim",
        arch_sub: "PROFESYONEL YAKLAŞIMIMIZ",
        arch_slogan: '"Mekana Ruh Katan, Geleceği Şekillendiren Çizgiler"',
        arch_desc1: "Tezel Mimarlık olarak biz, yapıyı sadece bir beton kütlesi değil; içinde hayatın aktığı bir organizma olarak görüyoruz.",
        arch_desc2: "Tasarımın gücünü mühendislik dehasıyla birleştiriyoruz. Bizim için mimarlık; bugünü tasarlarken yarını hayal etmektir.",
        services_title: "MİMARİ HİZMETLERİMİZ",
        portfolio_title: "MİMARİ PROJE PORTFÖYÜ",
        
        // Mimari Hizmet Kartları Başlık ve Açıklamaları
        s1_title: "Mimari Projelendirme",
        s1_desc: "Konsept tasarımdan ruhsatlandırma sürecine kadar, mevzuata hakim ve estetik odaklı proje geliştirme.",
        s2_title: "İç Mimari & Dekorasyon",
        s2_desc: "İç mekanlarda malzeme kalitesini ve ergonomiyi ön planda tutan, size özel lüks yaşam alanları.",
        s3_title: "3D Modelleme & Render",
        s3_desc: "Projenizi henüz inşa edilmeden önce fotogerçekçi teknolojilerle dijital ortamda deneyimleme şansı.",
        s4_title: "Uygulama & Kontrolörlük",
        s4_desc: "Çizilen her detayın sahada kusursuzca hayata geçirilmesi için titiz şantiye takibi og danışmanlık.",
        
        // Alt Alanlar
        footer_fast: "Hızlı Menü",
        footer_contact: "İletişim",
        footer_follow: "Bizi Takip Edin",
        footer_copy: "TEZEL İNŞAAT. Tüm Hakları Saklıdır.",
        examine_btn: "TASARIMI İNCELE"
    },
    EN: {
        nav_who: "About Us",
        nav_projects: "Projects",
        nav_fields: "Fields of Activity",
        nav_contact: "Contact",
        arch_sub: "OUR PROFESSIONAL APPROACH",
        arch_slogan: '"Lines That Shape The Future"',
        arch_desc1: "As Tezel Architecture, we see the building not just as a mass of concrete, but as an organism in which life flows.",
        arch_desc2: "We combine the power of design with engineering genius. For us, architecture is imagining tomorrow while designing today.",
        services_title: "OUR ARCHITECTURAL SERVICES",
        portfolio_title: "ARCHITECTURAL PROJECT PORTFOLIO",
        
        // Mimari Hizmet Kartları Başlık ve Açıklamaları
        s1_title: "Architectural Projecting",
        s1_desc: "Project development from conceptual design to licensing processes, fully compliant with legislation and focused on aesthetics.",
        s2_title: "Interior Architecture & Decoration",
        s2_desc: "Custom luxury living spaces that prioritize material quality and ergonomics in interior layouts.",
        s3_title: "3D Modeling & Rendering",
        s3_desc: "The opportunity to digitally experience your project with photorealistic technologies before it is built.",
        s4_title: "Application & Supervision",
        s4_desc: "Rigorous site monitoring and consultancy to ensure that every drawn detail is flawlessly executed in the field.",
        
        // Alt Alanlar
        footer_fast: "Quick Menu",
        footer_contact: "Contact Info",
        footer_follow: "Follow Us",
        footer_copy: "TEZEL CONSTRUCTION. All Rights Reserved.",
        examine_btn: "VIEW DESIGN"
    }
};

// 2. PROJE DETAYLARI VERİTABANI (M1 - M9)
const projectDescriptions = {
    'm1': { 
        tr: { 
            t: "2+1 Devam Projesi",
            d: "Hatuniye Mahallesi’nde yapımı devam eden 2+1 ikinci etap projemiz, 110 metrekarelik geniş yaşam alanları ve toplam 32 daireden oluşan seçkin yapısıyla modern yaşam standartlarını yeniden tanımlamaktadır. Kapalı otopark imkânı, ferah iç mekân planlaması ve ultra lüks malzeme tercihleriyle tasarlanan proje; estetik mimari anlayışı, yüksek kalite işçiliği ve yaşam konforunu ön planda tutan detaylarıyla öne çıkmaktadır. Her ayrıntısı titizlikle planlanan bu özel proje, ayrıcalıklı ve prestijli bir yaşam alanı sunmak üzere yükselmeye devam etmektedir" 
        }, 
        en: { 
            t: "2+1 Ongoing Project",
            d: "This is a unique project under construction in Hatuniye Neighborhood, featuring spacious 2+1 layouts and a premium structure with a total of 32 units. The project, designed with a closed parking facility, spacious interior planning, and ultra-luxury materials, stands out for its aesthetic architectural approach, high-quality craftsmanship, and focus on living comfort. Every detail of this exclusive project is meticulously planned to provide a distinctive and prestigious living environment." 
        } 
    },
    'm2': { 
        tr: { 
            t: "Tezel Kaplan Evleri", 
            d: "Toplam 72 bağımsız bölümden oluşan ultra lüks 2+1 projemiz, Van’ın en geniş yeşil yaşam alanlarından birine sahip seçkin yapısıyla modern yaşam standardslarını üst seviyeye taşımaktadır. Kapalı otopark imkânı, ferah mimari tasarımı ve yüksek kalite malzeme tercihleriyle şekillenen proje; doğayla iç içe, konforlu ve prestijli bir yaşam deneyimi sunmak üzere özenle hayata geçirilmiştir" 
        },
        en: { 
            t: "Tezel Kaplan Houses", 
            d: "Our ultra-luxury 2+1 project, consisting of a total of 72 independent units, is located in one of Van’s largest green living areas. With its exclusive structure, it elevates modern living standards to a new level. The project, characterized by a spacious architectural design and high-quality material choices, offers a unique living experience that seamlessly integrates with nature, providing comfort and prestige." 
        } 
    },
    'm3': { 
        tr: { 
            t: "Arya Apartmanı", 
            d: "Van’ın merkezinde konumlanan, toplam 24 bağımsız bölümden oluşan ultra lüks 1+1 projemiz; modern mimari anlayışı, seçkin tasarım detayları ve yüksek kalite standartlarıyla ayrıcalıklı bir yaşam sunmaktadır. Şehrin kalbindeki prestijli lokasyonu, işlevsel yaşam alanları ve konfor odaklı yaklaşımıyla proje, estetik ve merkezi yaşamı bir arada arayanlar için özel olarak tasarlanmıştır." 
        }, 
        en: { 
            t: "Arya Apartment", 
            d: "This is a unique project located in the center of Van, featuring modern 1+1 apartment concepts that bring together commercial spaces on the ground floor with living spaces, creating a harmonious blend of lifestyle and investment value. The project, characterized by aesthetic architectural lines, functional interior planning, and high-quality application details, offers a contemporary approach to living that prioritizes comfort, prestige, and usage efficiency." 
        } 
    },
    'm4': { 
        tr: { 
            t: "Atacan İnşaat", 
            d: "Yaşam kalitesini ve estetiği odağına alan 2+1 ve 3+1 konut alternatiflerimiz, modern şehir mimarisinin en fonksiyonel çözümlerini sunmaktadır. Çekirdek ailelerden geniş ailelere kadar her profile hitap eden daire tiplerimiz; optimum metrekare dağılımı, bağımsız ve ortak yaşam alanlarının dengeli kurgusu ve yüksek konfor standartları ile ayrıcalıklı bir yaşam deneyimi vadetmektedir." 
        }, 
        en: { 
            t: "Atacan Construction",
            d: "Our 2+1 and 3+1 housing alternatives, which focus on quality of life and aesthetics, offer the most functional solutions in modern urban architecture. Our apartment types, catering to a wide range of profiles from core families to larger ones, provide a unique living experience with optimal square footage distribution, a balanced combination of independent and shared living spaces, and high comfort standards." 
        } 
    },
    'm5': { 
        tr: { 
            t: "Çaldıran İnşaat", 
            d: "Sıcak bir aile ortamını lüks ve konforla buluşturan 2+1 ve 3+1 dairelerimiz, her metrekaresinde huzur bulacağınız yeni nesil bir yaşam alanı sunuyor. Geniş odaları, bağımsız ebeveyn alanları ve sevdiklerinizle keyifli vakit geçireceğiniz ferah salon tasarımlarıyla bu konseptler; estetiği ve fonksiyonelliği hayatınızın merkezine taşıyor." 
        }, 
        en: { 
            t: "Caldiran Construction",
            d: "Our 2+1 and 3+1 apartment types, which focus on creating a warm family atmosphere with luxury and comfort, offer a new generation of living spaces where you can find peace in every square meter. With their spacious rooms, independent parent areas, and airy living room designs, these concepts bring together aesthetics and functionality for a unique living experience." 
        } 
    },
    'm6': { 
        tr: { 
            t: "Edremit Projesi", 
            d: "Edremit’in merkezinde konumlanan bu özel proje, standart 1+1 yaşam alanlarının ötesine geçen geniş metrekare anlayışı ve ultra lüks detaylarıyla ayrıcalıklı bir yaşam deneyimi sunmaktadır. Modern mimari çizgilerle tasarlanan yapı; ferah iç mekân kurgusu, yüksek kalite malzeme tercihleri ve estetik dokunuşlarıyla konforu en üst seviyeye taşımaktadır. Merkezi lokasyon avantajını prestijli yaşam standartlarıyla buluşturan proje, seçkin ve çağdaş bir yaşam alanı arayanlar için benzersiz bir seçenek olarak öne çıkmaktadır" 
        },
        en: { 
            t: "Edremit Project", 
            d: "This exclusive project, located in the center of Edremit, offers a unique living experience beyond standard 1+1 living spaces, with its spacious layout and ultra-luxury details. The building, designed with modern architectural lines, provides a spacious interior design, high-quality material choices, and aesthetic touches that elevate comfort to the highest level. The project stands out as a unique option for those seeking a prestigious and contemporary living environment, combining the advantages of a central location with high-end living standards." 
        } 
    },
    'm7': { 
        tr: { 
            t: "Tezel Sıhke Evleri", 
            d: "Sıhke’de konumlanan bu özel projemiz, modern 1+1 daire konsepti ile zemin katta yer alan ticari alanları bir araya getirerek yaşam ve yatırım değerini aynı yapıda buluşturmaktadır. Estetik mimari çizgiler, işlevsel iç mekân planlaması og yüksek kalite uygulama detaylarıyla şekillenen proje; konfor, prestij ve kullanım verimliliğini ön planda tutan çağdaş bir yaşam anlayışı sunmaktadır." 
        }, 
        en: { 
            t: "Tezel Sihke Houses", 
            d: "Located in Sihke, this special project brings together a modern 1+1 apartment concept with commercial areas on the ground floor, combining lifestyle and investment value in the same structure. Shaped by aesthetic architectural lines, functional interior planning, and high-quality application details, the project offers a contemporary approach to living that prioritizes comfort, prestige, and efficiency." 
        }
    },
    'm8': { 
        tr: { 
            t: "Masal Evi", 
            d: "Geleceğimizin teminatı olan çocuklarımız için en güvenli ve en estetik ortamı oluşturma vizyonuyla yola çıktığımız Masal Evi Kreşi projesinde, tüm uygulama ve ince işçilik süreçlerini büyük bir titizlikle tamamlamış bulunmaktayız. Her detayında çocukların hayal dünyasına hitap eden renkli dokunuşların yanı sıra, yüksek güvenlik ve kalite standartlarını ön planda tutan bir işçilik sergiledik. Eğitim alanlarının işlevselliğini uzman uygulama tekniklerimizle birleştirerek, miniklerin konforla büyüyebileceği, modern ve ilham verici bir yapıyı hayata geçirmenin mutluluğunu yaşıyoruz." 
        }, 
        en: { 
            t: "Masal House Kindergarten", 
            d: "Our project, aimed at creating the safest and most aesthetic environment for our children, who are the guarantee of our future, has been completed with great meticulousness. In addition to the colorful designs that cater to children's imagination, we have showcased a high level of craftsmanship with a focus on security and quality standards. By combining the functionality of educational areas with our expert application techniques, we are experiencing the joy of bringing to life a modern and inspiring structure where little ones can grow comfortably." 
        } 
    },
    'm9': { 
        tr: { 
            t: "Kahraman Villa", 
            d: "Kahraman Villa projesi, modern mimari anlayışı ve yüksek kalite uygulamalarıyla öne çıkan bir yapıdır. Konfor, estetik ve işlevsellik arasında dengenin sağlanması hedeflenmiştir." 
        }, 
        en: { 
            t: "Kahraman Villa", 
            d: "Kahraman Villa project is a structure that stands out with its modern architectural approach and high-quality applications. The goal is to achieve a balance between comfort, aesthetics, and functionality." 
        } 
    }
};

let currentLang = (localStorage.getItem('selectedLang') || "TR").toUpperCase();
let currentImages = [];
let currentIndex = 0;
let activeProjectId = null;

// 3. DİLİ GÜNCELLEME FONKSİYONU
function updatePageLanguage() {
    const t = translations[currentLang];
    document.documentElement.lang = currentLang.toLowerCase();

    // Masaüstü dil seçici yazısını güncelle
    const currentLangSpan = document.querySelector('#lang-toggle-btn .current-lang');
    if (currentLangSpan) {
        currentLangSpan.innerText = currentLang;
    }

    // Mobil dil seçici yazısını güncelle (Yeni Eklendi)
    const mobileLangSpan = document.querySelector('#lang-toggle-btn-mobile .current-lang');
    if (mobileLangSpan) {
        mobileLangSpan.innerText = currentLang;
    }

    document.querySelectorAll('a[href="index.html#biz-kimiz"]').forEach(el => el.innerText = t.nav_who);
    document.querySelectorAll('a[href="index.html#projeler"]').forEach(el => el.innerText = t.nav_projects);
    document.querySelectorAll('a[href="#iletisim"]').forEach(el => el.innerText = t.nav_contact);
    if(document.querySelector('.dropbtn')) document.querySelector('.dropbtn').innerText = t.nav_fields;
    document.querySelectorAll('a[href="index.html#Faaliyet-Alanlarimiz"]').forEach(el => el.innerText = t.nav_fields);

    const serviceCards = document.querySelectorAll('.arch-services-grid .arch-service-card');
    serviceCards.forEach((card, index) => {
        const titleEl = card.querySelector('h3');
        const descEl = card.querySelector('p');
        if (titleEl && descEl) {
            titleEl.innerText = t[`s${index + 1}_title`] || "";
            descEl.innerText = t[`s${index + 1}_desc`] || "";
        }
    });

    if(document.querySelector('.arch-sub-title')) document.querySelector('.arch-sub-title').innerText = t.arch_sub;
    if(document.querySelector('.arch-slogan')) document.querySelector('.arch-slogan').innerText = t.arch_slogan;
    if(document.querySelector('.arch-description p:nth-child(1)')) document.querySelector('.arch-description p:nth-child(1)').innerText = t.arch_desc1;
    if(document.querySelector('.arch-description p:nth-child(2)')) document.querySelector('.arch-description p:nth-child(2)').innerText = t.arch_desc2;
    
    const titles = document.querySelectorAll('.group-title');
    if(titles.length >= 2) {
        titles[0].innerText = t.services_title;
        titles[1].innerText = t.portfolio_title;
    }

    document.querySelectorAll('.card-overlay span').forEach(el => el.innerText = t.examine_btn);

    const footerNavLinks = document.querySelectorAll('.footer-nav ul li a');
    footerNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html#biz-kimiz') link.innerText = t.nav_who;
        if (href === 'index.html#projeler') link.innerText = t.nav_projects;
    });
    
    if(footerNavLinks[2]) footerNavLinks[2].innerText = (currentLang === "TR") ? "Mimari" : "Architecture";
    if(footerNavLinks[3]) footerNavLinks[3].innerText = (currentLang === "TR") ? "Gayrimenkul" : "Real Estate";
    if(footerNavLinks[4]) footerNavLinks[4].innerText = (currentLang === "TR") ? "Mühendislik" : "Engineering";

    if(document.getElementById('footer-nav-title')) document.getElementById('footer-nav-title').innerText = t.footer_fast;
    if(document.getElementById('footer-contact-title')) document.getElementById('footer-contact-title').innerText = t.footer_contact;
    if(document.getElementById('footer-social-title')) document.getElementById('footer-social-title').innerText = t.footer_follow;
    if(document.getElementById('f-copy')) document.getElementById('f-copy').innerText = t.footer_copy;

    if (activeProjectId) {
        const info = projectDescriptions[activeProjectId];
        const langKey = currentLang.toLowerCase();
        const mTitle = document.getElementById('modal-title');
        const mDesc = document.getElementById('modal-desc');
        if (mTitle) mTitle.innerText = info ? info[langKey].t : "Project";
        if (mDesc) mDesc.innerText = info ? info[langKey].d : "";
    }
}

// Ortak Dil Değiştirme Tetikleyicisi
function toggleLanguage() {
    currentLang = (currentLang === "TR") ? "EN" : "TR";
    localStorage.setItem('selectedLang', currentLang);
    updatePageLanguage();
}

// 4. SAYFA YÜKLENDİĞİNDE ÇALIŞACAK AYARLAR
document.addEventListener('DOMContentLoaded', () => {
    
    // Sayfa dili ilk açılışta senkronize edilir
    updatePageLanguage();

    // Masaüstü Dil Butonu Dinleyicisi
    const langBtn = document.getElementById('lang-toggle-btn');
    if(langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }

    // Mobil Dil Butonu Dinleyicisi (Yeni Eklendi)
    const mobileLangBtn = document.getElementById('lang-toggle-btn-mobile');
    if(mobileLangBtn) {
        mobileLangBtn.addEventListener('click', toggleLanguage);
    }

    // --- MOBİL MENÜ ETKİLEŞİMİ (Güvenli Alan İçine Alındı) ---
    const menuBtn = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    if(menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            mobileNav.classList.toggle('active');
        });
    }

    // --- YENİ KONTROLLERLE SİNEMATİK LIGHTBOX HTML YAPISI ---
    const lightboxDiv = document.createElement('div');
    lightboxDiv.id = 'sinematikLightbox';
    lightboxDiv.style.cssText = 'display:none; position:fixed; z-index:4000; left:0; top:0; width:100%; height:100vh; background:rgba(0,0,0,0.95); backdrop-filter:blur(15px); align-items:center; justify-content:center;';
    
    lightboxDiv.innerHTML = `
        <div id="lightboxClose" style="position:absolute; top:30px; right:40px; color:#fff; font-size:50px; cursor:pointer; font-weight:300; transition:0.3s; z-index:4100;">&times;</div>
        
        <button id="lightboxPrev" style="position:absolute; left:30px; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.05); color:#fff; border:none; padding:25px 20px; font-size:30px; cursor:pointer; transition:0.3s; z-index:4100; border-radius:4px;">&#10094;</button>
        
        <img id="lightboxImg" src="" style="max-width:85%; max-height:85vh; object-fit:contain; border-radius:4px; box-shadow:0 10px 40px rgba(0,0,0,0.8);">
        
        <button id="lightboxNext" style="position:absolute; right:30px; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.05); color:#fff; border:none; padding:25px 20px; font-size:30px; cursor:pointer; transition:0.3s; z-index:4100; border-radius:4px;">&#10095;</button>
    `;
    document.body.appendChild(lightboxDiv);

    // Hover Efektleri (Oklar ve Kapatma Butonu Parlasın)
    const hoverStyle = (el, bg) => {
        el.addEventListener('mouseenter', () => el.style.background = bg);
        el.addEventListener('mouseleave', () => el.style.background = 'rgba(255,255,255,0.05)');
    };
    hoverStyle(lightboxDiv.querySelector('#lightboxPrev'), '#d4a373');
    hoverStyle(lightboxDiv.querySelector('#lightboxNext'), '#d4a373');
    
    lightboxDiv.querySelector('#lightboxClose').addEventListener('mouseenter', () => lightboxDiv.querySelector('#lightboxClose').style.color = '#d4a373');
    lightboxDiv.querySelector('#lightboxClose').style.transition = '0.3s';
    lightboxDiv.querySelector('#lightboxClose').addEventListener('mouseleave', () => lightboxDiv.querySelector('#lightboxClose').style.color = '#fff');

    // Kapatma Olayları (Boşluğa veya X'e basınca kapanır)
    lightboxDiv.addEventListener('click', (e) => {
        if(e.target === lightboxDiv || e.target.id === 'lightboxClose') {
            lightboxDiv.style.display = 'none';
        }
    });

    // Lightbox İçindeki Okların Tetikleyicileri
    lightboxDiv.querySelector('#lightboxPrev').addEventListener('click', (e) => {
        e.stopPropagation();
        changeLightboxSlide(-1);
    });

    lightboxDiv.querySelector('#lightboxNext').addEventListener('click', (e) => {
        e.stopPropagation();
        changeLightboxSlide(1);
    });

    // Klavye Ok Tuşları Desteği
    document.addEventListener('keydown', (e) => {
        if (lightboxDiv.style.display === 'flex') {
            if (e.key === 'ArrowLeft') changeLightboxSlide(-1);
            if (e.key === 'ArrowRight') changeLightboxSlide(1);
            if (e.key === 'Escape') lightboxDiv.style.display = 'none';
        }
    });
});

// 5. MODAL SİSTEMİ (Global Kapsam)
window.openModal = function(card) {
    const id = card.getAttribute('data-id');
    activeProjectId = id;
    currentIndex = 0;
    currentImages = [];

    for (let i = 1; i <= 4; i++) {
        const img = card.getAttribute(`data-img${i}`);
        if (img) currentImages.push(img);
    }

    const info = projectDescriptions[id];
    const langKey = currentLang.toLowerCase();
    
    const mTitle = document.getElementById('modal-title');
    const mDesc = document.getElementById('modal-desc');
    if (mTitle) mTitle.innerText = info ? info[langKey].t : "Project";
    if (mDesc) mDesc.innerText = info ? info[langKey].d : "";

    updateSliderImage();
    
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
};

function updateSliderImage() {
    const container = document.getElementById('slider-container');
    if (container && currentImages.length > 0) {
        container.innerHTML = `<img src="${currentImages[currentIndex]}" class="active-slide" style="cursor:zoom-in;" onclick="openLightbox('${currentImages[currentIndex]}')">`;
    }
}

// 6. SİNEMATİK LIGHTBOX TETİKLEYİCİLERİ
window.openLightbox = function(imgSrc) {
    const lightbox = document.getElementById('sinematikLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    if(lightbox && lightboxImg) {
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';
    }
};

// Lightbox İçindeki Resim Değiştirme Motoru (Arkadaki slayt ile tam senkronize)
window.changeLightboxSlide = function(dir) {
    if (currentImages.length <= 1) return;
    
    currentIndex += dir;
    if (currentIndex >= currentImages.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = currentImages.length - 1;
    
    // Arkadaki ana detay slider'ını günceller
    updateSliderImage();
    
    // Öndeki tam ekran resmi anlık değiştirir
    const lightboxImg = document.getElementById('lightboxImg');
    if (lightboxImg) {
        lightboxImg.src = currentImages[currentIndex];
    }
};

window.changeSlide = function(dir) {
    if (currentImages.length <= 1) return;
    currentIndex += dir;
    if (currentIndex >= currentImages.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = currentImages.length - 1;
    updateSliderImage();
};

window.closeModal = function() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
    activeProjectId = null;
};

window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        window.closeModal();
    }
};