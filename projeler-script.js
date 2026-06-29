/**
 * =========================================================================
 * TEZEL İNŞAAT - PROJELER SAYFASI TAM ENTEGRE TERCÜME & MODAL SİSTEMİ (2026)
 * =========================================================================
 */

// 1. DİL TERCÜME SÖZLÜĞÜ (Eksik olan dil paketleri eklendi)
const translations = {
    TR: {
        nav_who: "Biz Kimiz",
        nav_projects: "Projelerimiz",
        nav_contact: "İletişim",
        nav_fields: "Faaliyet Alanları",
        title_ongoing: "DEVAM EDEN PROJELERİMİZ",
        title_completed: "TAMAMLANAN PROJELERİMİZ",
        examine_btn: "DETAYLARI GÖR",
        status_ongoing: "DEVAM EDiyor",
        status_completed: "TAMAMLANDI",
        footer_fast: "Hızlı Menü",
        footer_contact: "İletişim Bilgileri",
        footer_follow: "Bizi Takip Edin",
        footer_copy: "© 2026 Tezel İnşaat. Tüm Hakları Saklıdır.",
        lbl_status: "Durum:",
        lbl_location: "Yer:",
        lbl_year: "Yıl:"
    },
    EN: {
        nav_who: "About Us",
        nav_projects: "Our Projects",
        nav_contact: "Contact",
        nav_fields: "Fields of Activity",
        title_ongoing: "ONGOING PROJECTS",
        title_completed: "COMPLETED PROJECTS",
        examine_btn: "VIEW DETAILS",
        status_ongoing: "ONGOING",
        status_completed: "COMPLETED",
        footer_fast: "Quick Menu",
        footer_contact: "Contact Info",
        footer_follow: "Follow Us",
        footer_copy: "© 2026 Tezel Construction. All Rights Reserved.",
        lbl_status: "Status:",
        lbl_location: "Location:",
        lbl_year: "Year:"
    }
};

// 2. MİMARİDEN ENTEGRE EDİLEN PROJE DETAYLARI VERİTABANI
const projectDescriptions = {
    'tezel-kaplan-evleri-2-etap': { 
        tr: { 
            t: "Tezel Kaplan Evleri 2. Etap",
            status: "Devam Ediyor",
            location: "Van / Hatuniye",
            d: "Hatuniye Mahallesi’nde yapımı devam eden 2+1 ikinci etap projemiz, 110 metrekarelik geniş yaşam alanları ve toplam 32 daireden oluşan seçkin yapısıyla modern yaşam standartlarını yeniden tanımlamaktadır. Kapalı otopark imkânı, ferah iç mekân planlaması ve ultra lüks malzeme tercihleriyle tasarlanan proje; estetik mimari anlayışı, yüksek kalite işçiliği ve yaşam konforunu ön planda tutan detaylarıyla öne çıkmaktadır." 
        }, 
        en: { 
            t: "Tezel Kaplan Houses Phase 2",
            status: "Ongoing",
            location: "Van / Hatuniye",
            d: "This is a unique project under construction in Hatuniye Neighborhood, featuring spacious 2+1 layouts and a premium structure with a total of 32 units." 
        } 
    },
    'edremit-projesi': {
        tr: {
            t: "Edremit Projesi",
            status: "Devam Ediyor",
            location: "Van / Edremit",
            d: "Edremit’in merkezinde konumlanan bu özel proje, standart 1+1 yaşam alanlarının ötesine geçen geniş metrekare anlayışı ve ultra lüks detaylarıyla ayrıcalıklı bir yaşam deneyimi sunmaktadır."
        },
        en: {
            t: "Edremit Project",
            status: "Ongoing",
            location: "Van / Edremit",
            d: "Located in the heart of Edremit, this special project offers a privileged living experience."
        }
    },
    'tezel-merkez-projesi': {
        tr: {
            t: "Tezel Merkez Projesi",
            status: "Devam Ediyor",
            location: "Van / İpekyolu",
            d: "Şehrin gelişim aksında yer alan projemiz, modern mimari hatları ve fonksiyonel çözümleri bir arada sunmaktadır."
        },
        en: {
            t: "TeCenter Project",
            status: "Ongoing",
            location: "Van / Ipekyolu",
            d: "Located on the developmental axis of the city, our project offers modern architectural lines."
        }
    },
    'tezel-kaplan-evleri-1-etap': { 
        tr: { 
            t: "Tezel Kaplan Evleri 1. Etap", 
            status: "Tamamlandı",
            location: "Van / İpekyolu",
            d: "Toplam 72 bağımsız bölümden oluşan ultra lüks 2+1 projemiz, Van’ın en geniş yeşil yaşam alanlarından birine sahip seçkin yapısıyla modern yaşam standartlarını üst seviyeye taşımaktadır." 
        },
        en: { 
            t: "Tezel Kaplan Houses Phase 1", 
            status: "Completed",
            location: "Van / Ipekyolu",
            d: "Our ultra-luxury 2+1 project, consisting of a total of 72 independent units, is located in one of Van’s largest green living areas." 
        } 
    },
    'yasamkent-evleri': { 
        tr: { 
            t: "Yaşamkent Evleri", 
            status: "Tamamlandı",
            location: "Van / Merkez",
            d: "Van’ın merkezinde konumlanan, toplam 24 bağımsız bölümden oluşan ultra lüks 1+1 projemiz; modern mimari anlayışı, seçkin tasarım detayları ve yüksek kalite standartlarıyla ayrıcalıklı bir yaşam sunmaktadır." 
        }, 
        en: { 
            t: "Yasamkent Houses", 
            status: "Completed",
            location: "Van / Central",
            d: "This is a unique project located in the center of Van, featuring modern 1+1 apartment concepts." 
        } 
    },
    'tezel-sihke-evleri': { 
        tr: { 
            t: "Tezel Sıhke Evleri", 
            status: "Tamamlandı",
            location: "Van / İpekyolu",
            d: "Sıhke’de konumlanan bu özel projemiz, modern 1+1, 2+1 and 3+1 daire konsepti ile zemin katta yer alan ticari alanları bir araya getirerek yaşam ve yatırım değerini aynı yapıda buluşturmaktadır." 
        }, 
        en: { 
            t: "Tezel Sihke Houses", 
            status: "Completed",
            location: "Van / Ipekyolu",
            d: "Located in Sihke, this special project brings together modern apartment concepts with commercial areas on the ground floor." 
        }
    },
    'the-merucure-otel': {
        tr: {
            t: "The Merucure Otel",
            status: "Tamamlandı",
            location: "Van / Edremit",
            d: "Tüm uygulama ve ince işçilik süreçlerini büyük bir titizlikle tamamladık, estetik ve lüksü bir araya getirdik."
        },
        en: {
            t: "The Merucure Hotel",
            status: "Completed",
            location: "Van / Edremit",
            d: "We completed all the application and fine workmanship processes with great care."
        }
    },
    'the-craton-otel': {
        tr: {
            t: "The Craton Otel",
            status: "Tamamlandı",
            location: "İstanbul / Şişli",
            d: "Şehrin ticari kalbinde hayata geçirilen modern ofis ve dükkan projesi."
        },
        en: {
            t: "The Craton Hotel",
            status: "Completed",
            location: "Istanbul / Sisli",
            d: "A modern office and shop project implemented in the commercial heart of the city."
        }
    },
    'tezel-family-residences': {
        tr: {
            t: "Tezel Family Residences",
            status: "Tamamlandı",
            location: "Van / İpekyolu",
            d: "Geniş aile yapısına uygun, ferah yeşil alanları ve oyun parklarıyla donatılmış, huzurlu bir aile yaşantısı sunan lüks konut projesi."
        },
        en: {
            t: "Tezel Family Residences",
            status: "Completed",
            location: "Van / Ipekyolu",
            d: "A luxury residential project designed to offer a peaceful family life."
        }
    },
    'ikinisan-apartmani': {
        tr: {
            t: "İki Nisan Apartmanı",
            status: "Tamamlandı",
            location: "Van / İpekyolu",
            d: "Deprem yönetmeliğine tam uyumlu, radye temel sistemiyle inşa edilmiş, modern cephe tasarımıyla bir güven abidesi."
        },
        en: {
            t: "Iki Nisan Apartment",
            status: "Completed",
            location: "Van / Ipekyolu",
            d: "Fully compliant with earthquake regulations, built with a raft foundation system."
        }
    },
    'masal-evi-kresi': { 
        tr: { 
            t: "Masal Evi Kreşi", 
            status: "Tamamlandı",
            location: "Van / Edremit",
            d: "Geleceğimizin teminatı olan çocuklarımız için en güvenli ve en estetik ortamı oluşturma vizyonuyla Masal Evi Kreşi projesini hayata geçirdik." 
        }, 
        en: { 
            t: "Masal House Kindergarten", 
            status: "Completed",
            location: "Van / Edremit",
            d: "Our project, aimed at creating the safest and most aesthetic environment for our children." 
        } 
    },
    'kahraman-villa': { 
        tr: { 
            t: "Kahraman Villa", 
            status: "Tamamlandı",
            location: "Van / Edremit",
            d: "Kahraman Villa projesi, Van Gölü manzarasına tam hakim, müstakil bahçeli ve akıllı ev otomasyon sistemlerine sahip lüks bir villa sitesidir." 
        }, 
        en: { 
            t: "Kahraman Villa", 
            status: "Completed",
            location: "Van / Edremit",
            d: "Kahraman Villa project is a structure that stands out with its modern architectural approach and magnifique view of Lake Van." 
        } 
    }
};

let currentLang = (localStorage.getItem('selectedLang') || "TR").toUpperCase();
let currentImages = [];
let currentIndex = 0;
let activeCardElement = null;

// 3. DİLİ GÜNCELLEME FONKSİYONU
function updatePageLanguage() {
    const t = translations[currentLang];
    if (!t) return;
    document.documentElement.lang = currentLang.toLowerCase();

    const currentLangSpan = document.querySelector('#lang-toggle-btn .current-lang');
    if (currentLangSpan) currentLangSpan.innerText = currentLang;
    
    const mobileLangSpan = document.querySelector('.mobile-current-lang');
    if (mobileLangSpan) mobileLangSpan.innerText = currentLang;

    // Menüler
    document.querySelectorAll('a[href="index.html#biz-kimiz"]').forEach(el => el.innerText = t.nav_who);
    document.querySelectorAll('a[href="projeler.html"]').forEach(el => el.innerText = t.nav_projects);
    document.querySelectorAll('a[href="index.html#iletisim"], a[href="#iletisim"]').forEach(el => el.innerText = t.nav_contact);
    if(document.querySelector('.dropbtn')) document.querySelector('.dropbtn').innerText = t.nav_fields;

    // Başlıklar
    const ongoingTitle = document.getElementById('title-ongoing');
    if(ongoingTitle) ongoingTitle.innerText = t.title_ongoing;
    const completedTitle = document.getElementById('title-completed');
    if(completedTitle) completedTitle.innerText = t.title_completed;

    document.querySelectorAll('.card-overlay span').forEach(el => el.innerText = t.examine_btn);

    // Kart durumları
    document.querySelectorAll('.project-card').forEach(card => {
        const statusTextEl = card.querySelector('.p-status');
        if (statusTextEl) {
            if (statusTextEl.classList.contains('txt-status-ongoing')) {
                statusTextEl.innerText = t.status_ongoing;
            } else if (statusTextEl.classList.contains('txt-status-completed')) {
                statusTextEl.innerText = t.status_completed;
            }
        }
    });

    if (activeCardElement) {
        repopulateModalData(activeCardElement);
    }
}

// 4. SAYFA YÜKLENDİĞİNDE ÇALIŞACAK AYARLAR
document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();

    const langBtn = document.getElementById('lang-toggle-btn');
    if(langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = (currentLang === "TR") ? "EN" : "TR";
            localStorage.setItem('selectedLang', currentLang);
            updatePageLanguage();
        });
    }

    const mobileLangBtn = document.getElementById('mobile-lang-toggle');
    if(mobileLangBtn) {
        mobileLangBtn.addEventListener('click', () => {
            currentLang = (currentLang === "TR") ? "EN" : "TR";
            localStorage.setItem('selectedLang', currentLang);
            updatePageLanguage();
        });
    }
});

function getProjectKey(title) {
    return title.toLowerCase()
        .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
        .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
}

// 5. KARTTAN BİLGİLERİ ALIP MODALA DOLDURAN FONKSİYON
function repopulateModalData(card) {
    const t = translations[currentLang];
    const langKey = currentLang.toLowerCase();
    
    const mTitle = document.getElementById('modal-title');
    const mDesc = document.getElementById('modal-desc');
    const mStatus = document.getElementById('modal-status');
    const mLocation = document.getElementById('modal-location');
    const mYear = document.getElementById('modal-year');

    const metaItems = document.querySelectorAll('.meta-item strong');
    if(metaItems.length >= 3) {
        metaItems[0].innerText = t.lbl_status;
        metaItems[1].innerText = t.lbl_location;
        metaItems[2].innerText = t.lbl_year;
    }

    const projectKey = card.getAttribute('data-slug') || getProjectKey(card.querySelector('.p-name').innerText);
    const dbProject = projectDescriptions[projectKey];

    if (dbProject && dbProject[langKey]) {
        if (mTitle) mTitle.innerText = dbProject[langKey].t;
        if (mDesc) mDesc.innerText = dbProject[langKey].d;
        if (mStatus) mStatus.innerText = dbProject[langKey].status || "";
        if (mLocation) mLocation.innerText = dbProject[langKey].location || "";
    } else {
        const cardTitle = card.querySelector('.p-name').innerText;
        if (mTitle) mTitle.innerText = cardTitle;
        const cardDescEl = card.querySelector('.p-desc');
        if (mDesc) {
            mDesc.innerText = cardDescEl ? cardDescEl.innerText : (currentLang === "TR" ? "Bu proje hakkında detaylı bilgi eklenecektir." : "Detailed info will be added.");
        }
    }
    if (mYear) mYear.innerText = card.getAttribute('data-year') || "2026";
}

// --- EKSİK OLAN SLAYT GÜNCELLEME FONKSİYONU EKLENDİ ---
function updateSliderImage() {
    const sliderContainer = document.getElementById('slider-container');
    if (!sliderContainer) return;

    sliderContainer.innerHTML = ""; // İçini temizle

    if (currentImages.length === 0) return;

    currentImages.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = "Proje Görseli";
        if (index === currentIndex) {
            img.classList.add('active', 'active-slide');
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
        sliderContainer.appendChild(img);
    });
}

// --- EKSİK OLAN MODAL KAPATMA FONKSİYONU EKLENDİ ---
window.closeModal = function() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = "auto"; // Kaydırmayı geri aç
    }
    activeCardElement = null;
};

// --- SLAYT OKLARININ FONKSİYONLARI EKLENDİ ---
function changeSlide(direction) {
    if (currentImages.length <= 1) return;
    
    currentIndex += direction;
    if (currentIndex >= currentImages.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = currentImages.length - 1;

    updateSliderImage();
}

// 6. MODAL SİSTEMİ TIKLAMA TETİKLEYİCİSİ
window.openModal = function(element) {
    if (!element) return;

    const card = element.closest('.project-card') || element;
    activeCardElement = card; 
    currentIndex = 0;
    currentImages = [];

    const attributes = card.attributes;
    for (let i = 0; i < attributes.length; i++) {
        if (attributes[i].name.startsWith("data-img") && attributes[i].value.trim() !== "") {
            currentImages.push(attributes[i].value);
        }
    }

    if (currentImages.length === 0) {
        const backupImg = card.querySelector('img');
        if (backupImg) currentImages.push(backupImg.getAttribute('src'));
    }

    repopulateModalData(card);
    updateSliderImage(); // Artık bu fonksiyon tanımlı olduğu için hata vermeyecek!
    
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.add('active'); 
        document.body.style.overflow = "hidden";
    }
};

// Ok butonları için event listener'lar dinamik bağlama
document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.querySelector('.slider-nav.next');
    if(nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); changeSlide(1); });

    const prevBtn = document.querySelector('.slider-nav.prev');
    if(prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); changeSlide(-1); });

    const closeBtn = document.querySelector('.close-btn, .close-modal');
    if(closeBtn) closeBtn.addEventListener('click', window.closeModal);
});

// 7. MOBİL MENÜ ETKİLEŞİMİ
const menuBtn = document.getElementById('menu-toggle');
if(menuBtn) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        const mobileNav = document.getElementById('mobile-nav');
        if (mobileNav) mobileNav.classList.toggle('active');
    });
}

// Dış boşluğa tıklayınca kapatma
window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        window.closeModal();
    }
});

// ESC tuşuyla kapatma
window.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        window.closeModal();
        if(document.getElementById('lightbox-system')) {
            document.getElementById('lightbox-system').classList.remove('active');
        }
    }
});

// =========================================================================
// TEZEL İNŞAAT - LIGHTBOX (TAM EKRAN) SİSTEMİ LOGİC KODLARI
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const sliderCont = document.getElementById('slider-container');
    if(sliderCont) {
        sliderCont.addEventListener('click', function(e) {
            if(e.target.tagName === 'IMG') {
                const currentSrc = e.target.src;
                const lightboxImg = document.getElementById('lightbox-img');
                const lightboxSys = document.getElementById('lightbox-system');
                if(lightboxImg && lightboxSys) {
                    lightboxImg.src = currentSrc;
                    lightboxSys.classList.add('active');
                }
            }
        });
    }
});

function closeLightbox(e) {
    const lightboxSys = document.getElementById('lightbox-system');
    if(!lightboxSys) return;
    if (!e.target.closest('#lightbox-img') && !e.target.closest('.lightbox-nav') || e.target.classList.contains('lightbox-close')) {
        lightboxSys.classList.remove('active');
    }
}

function changeLightboxImg(direction, e) {
    e.stopPropagation(); 
    changeSlide(direction);
    
    setTimeout(() => {
        const activeImg = document.querySelector('#slider-container img.active');
        const lightboxImg = document.getElementById('lightbox-img');
        if(activeImg && lightboxImg) {
            lightboxImg.src = activeImg.src;
        }
    }, 50);
}