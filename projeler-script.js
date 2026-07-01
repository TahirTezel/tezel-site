/**
 * =========================================================================
 * TEZEL İNŞAAT - PROJELER SAYFASI TAM ENTEGRE TERCÜME & MODAL SİSTEMİ (2026)
 * =========================================================================
 */

// 1. DİL TERCÜME SÖZLÜĞÜ
const translations = {
    TR: {
        nav_who: "Biz Kimiz",
        nav_projects: "Projelerimiz",
        nav_contact: "İletişim",
        nav_fields: "Faaliyet Alanları",
        title_ongoing: "DEVAM EDEN PROJELERİMİZ",
        title_completed: "TAMAMLANAN PROJELERİMİZ",
        examine_btn: "DETAYLARI GÖR",
        status_ongoing: "DEVAM EDİYOR",
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
            d: "Van’ın prestijli lokasyonunda konumlanan Kaplanlar 2. Etap, 32 daireden oluşan butik ve nitelikli bir yapı sunuyor. Depreme tam dayanıklı ileri mühendislik altyapısı ve modern mimari detaylarla inşa edilen projemiz; geniş iç mekanları og yüksek malzeme kalitesiyle öne çıkıyor. Tezel güvencesiyle hayata geçirilen bu proje, konforu ve estetiği bir araya getiren özel bir yaşam alanı tanımlıyor." 
        }, 
        en: { 
            t: "Tezel Kaplan Houses Phase 2",
            status: "Ongoing",
            location: "Van / Hatuniye",
            d: "Located in the prestigious location of Van, Kaplanlar Phase 2 offers a boutique and qualified structure consisting of 32 apartments. Built with earthquake-resistant advanced engineering infrastructure and modern architectural details, our project stands out with its spacious interiors and high material quality. This project, brought to life with Tezel's assurance, defines a special living space that combines comfort and aesthetics." 
        } 
    },
    'edremit-projesi': {
        tr: {
            t: "Edremit Projesi",
            status: "Devam Ediyor",
            location: "Van / Edremit",
            d: "Edremit'in en merkezi konumunda yükselen projemiz, 1+1 daire anlayışına ultra lüks ve ferah bir boyut getiriyor. Büyük cam cepheleri, yüksek tavan yapısı ve fonksiyonel iç mekanlarıyla her metrekaresi konfor odaklı tasarlandı. Tezel güvencesiyle; birinci sınıf malzeme kalitesi, kusursuz işçilik ve ileri düzey mühendislik altyapısını bir araya getiren bu özel yapı, Edremit'te seçkin bir yaşam alanı sunuyor."
        },
        en: {
            t: "Edremit Project",
            status: "Ongoing",
            location: "Van / Edremit",
            d: "Our project, rising in the most central location of Edremit, brings an ultra-luxurious and spacious dimension to the 1+1 apartment concept. Designed with comfort in mind, every square meter features large glass facades, high ceilings, and functional interiors. With Tezel's assurance, this special structure combines first-class material quality, flawless craftsmanship, and advanced engineering infrastructure, offering a distinguished living space in Edremit."
        }
    },
    'tezel-merkez-projesi': {
        tr: {
            t: "Tezel-Nurfa Terzioğlu Projesi",
            status: "Devam Ediyor",
            location: "Van / İpekyolu",
            d: "Van’ın gözde lokasyonlarından Terzioğlu’nda hayata geçirdiğimiz yeni projemiz; modern mimari ile konforlu yaşamı bir araya getiriyor. Estetik dış cephe tasarımı, yüksek malzeme kalitesi og işlevsel iç mekan çözümleriyle inşa edilen bu yapıda, her detay sakinlerimizin yaşam standardını yükseltmek için planlandı. Tezel güvencesiyle sağlam mühendislik ve kusursuz işçiliği buluşturan bu proje, Terzioğlu'nun merkezinde prestijli bir yaşam deneyimi sunuyor."
        },
        en: {
            t: "Tezel-Nurfa Terzioğlu Project",
            status: "Ongoing",
            location: "Van / Ipekyolu",
            d: "Our new project, located in the popular Terzioğlu area of Van, combines modern architecture with comfortable living. Built with aesthetic exterior design, high-quality materials, and functional interior solutions, every detail in this structure is planned to enhance the living standards of its residents. With Tezel's assurance, this project brings together solid engineering and flawless craftsmanship, offering a prestigious living experience in the heart of Terzioğlu."
        }
    },
    'tezel-kaplan-evleri-1-etap': { 
        tr: { 
            t: "Tezel Kaplan Evleri 1. Etap", 
            status: "Tamamlandı",
            location: "Van / İpekyolu",
            d: "Kaplanlar konut serisinin temellerini atan 1. Etap projemiz, 72 dairelik geniş ölçekli yapısıyla bölgedeki yaşam standartlarına yeni bir soluk getiriyor. Sağlam mühendislik altyapısı ve modern mimari çizgilerin birleştiği projemiz; geniş sosyal alanları, yüksek malzeme kalitesi ve kusursuz işçiliğiyle dikkat çekiyor. Tezel güvencesiyle hayata geçirilen bu yapıda, estetik ve fonksiyonellik bir arada sunularak, sakinlerine huzurlu bir yaşam alanı tanımlanıyor" 
        },
        en: { 
            t: "Tezel Kaplan Houses Phase 1", 
            status: "Completed",
            location: "Van / Ipekyolu",
            d: "Our Phase 1 project, which laid the foundations of the Kaplanlar residential series, brings a new breath to the living standards in the region with its large-scale structure of 72 apartments. Combining solid engineering infrastructure with modern architectural lines, our project stands out with its spacious social areas, high material quality, and flawless craftsmanship. Brought to life with Tezel's assurance, this structure offers a peaceful living space where aesthetics and functionality are presented together." 
        } 
    },
    'yasamkent-evleri': { 
        tr: { 
            t: "Yaşamkent Evleri", 
            status: "Tamamlandı",
            location: "Van / Merkez",
            d: "Yaşam Kent Evleri, şehrin en değerli akslarından biri olan Terzioğlu Caddesi üzerinde konumlanan, modern şehir yaşamını konforla buluşturan özel bir konut projesidir. 2+1 ve 3+1 daire seçenekleriyle farklı yaşam ihtiyaçlarına hitap eden proje, ferah peyzaj alanları, titizlikle tercih edilen yapı malzemeleri ve merkezi konumuyla öne çıkmaktadır. Günlük yaşamın tüm olanaklarına kolay erişim sunarken, sakinlerine huzurlu ve nitelikli bir yaşam deneyimi vadeder." 
        }, 
        en: { 
            t: "Yasamkent Houses", 
            status: "Completed",
            location: "Van / Central",
            d: "Yasamkent Houses is a special residential project located on Terzioğlu Street, one of the most valuable axes of the city, combining modern urban living with comfort. Catering to different lifestyle needs with 2+1 and 3+1 apartment options, the project stands out with its spacious landscaped areas, carefully selected building materials, and central location. It offers easy access to all daily life amenities while promising residents a peaceful and high-quality living experience." 
        } 
    },
    'tezel-sihke-evleri': { 
        tr: { 
            t: "Tezel Sıhke Evleri", 
            status: "Tamamlandı",
            location: "Van / İpekyolu",
            d: "Van'ın önemli ulaşım güzergâhlarından biri olan Sıhke Caddesi üzerinde, Boyalar Camii'nin karşısında ve Conforium Otel'in hemen yanında konumlanan Tezel Sıhke Evleri; toplam 44 adet 1+1 ve 2+1 daire ile zemin katta yer alan 5 cadde mağazasını bir araya getiren özel bir yaşam projesidir. Şehir merkezine yakın konumuyla günlük yaşamı kolaylaştıran proje, fonksiyonel daire planları, kaliteli yapı standartları ve cadde yaşamına entegre mimarisiyle hem yaşam hem de yatırım açısından güçlü bir alternatif sunmaktadır." 
        }, 
        en: { 
            t: "Tezel Sihke Houses", 
            status: "Completed",
            location: "Van / Ipekyolu",
            d: "Situated on Sıhke Avenue—one of Van’s key transportation routes—directly across from Boyalar Mosque and right next to the Conforium Hotel, Tezel Sıhke Evleri is a distinctive residential project comprising a total of 44 apartments (in 1+1 and 2+1 layouts) and five street-level retail units. Offering a location close to the city center that simplifies daily life, the project presents a compelling option for both living and investment, thanks to its functional apartment layouts, high construction standards, and architecture that integrates seamlessly with the streetscape." 
        }
    },
    'the-mercure-otel': {
        tr: {
            t: "The Mercure Otel",
            status: "Tamamlandı",
            location: "Van / Edremit",
            d: "İstanbul’un yoğun ve prestijli turizm ağında yer alan Mercure Otel projesinde, mekanın kalitesini belirleyen ince işçilik süreçlerini Tezel güvencesiyle hayata geçirdik. İç mekanın estetik dokusunu oluşturan her bir detayda; yüksek malzeme standardı ve profesyonel uygulama disiplinimizi birleştirdik. Tasarımın ruhunu yansıtan ve uzun ömürlü kullanım sunan detaylara odaklanarak, otelin konforlu atmosferine estetik bir imza attık."
        },
        en: {
            t: "The Mercure Hotel",
            status: "Completed",
            location: "Van / Edremit",
            d: "In the Mercure Hotel project, located in Istanbul's dense and prestigious tourism network, we implemented the fine craftsmanship processes that define the quality of the space with Tezel's assurance. In every detail that forms the aesthetic texture of the interior, we combined high material standards with professional application discipline. By focusing on details that reflect the spirit of design and offer long-lasting use, we added an aesthetic signature to the hotel's comfortable atmosphere."
        }
    },
    'the-craton-otel': {
        tr: {
            t: "The Craton Otel",
            status: "Tamamlandı",
            location: "İstanbul / Şişli",
            d: "İstanbul’un prestijli turizm duraklarından The Craton Otel’in tüm ince işçilik ve uygulama süreçlerini, başından sonuna kadar Tezel güvencesiyle bizzat gerçekleştirdik. Otelin her bir noktasındaki teknik detaylarda, malzeme seçiminde ve estetik dokunuşlarda sorumluluğu tamamen üstlendik. Profesyonel uygulama disiplinimizle, projenin başından teslim aşamasına kadar her detayda ustalığımızı konuşturarak otelin yüksek standartlı atmosferini gerçeğe dönüştürdük."
        },
        en: {
            t: "The Craton Hotel",
            status: "Completed",
            location: "Istanbul / Sisli",
            d: "We personally carried out all the fine craftsmanship and application processes of The Craton Hotel, one of Istanbul's prestigious tourism stops, with Tezel's assurance from start to finish. We took full responsibility for the technical details, material selection, and aesthetic touches at every point of the hotel. With our professional application discipline, we showcased our mastery in every detail from the beginning of the project to the delivery phase, transforming the hotel's high-standard atmosphere into reality."
        }
    },
    'tezel-family-residences': {
        tr: {
            t: "Tezel Family Residences",
            status: "Tamamlandı",
            location: "Van / İpekyolu",
            d: "Van şehir merkezinde, VATSO binasının arkasında ve Atatürk Lisesi'ne yürüme mesafesinde konumlanan Tezel Family Apartmanı, toplam 32 adet 1+1 daireden oluşan modern bir konut projesidir. Merkezi konumu sayesinde eğitim kurumları, alışveriş noktaları ve günlük yaşamın ihtiyaç duyulan tüm hizmetlerine kolay erişim imkânı sunan proje, kompakt ve fonksiyonel yaşam alanlarıyla şehir hayatının dinamizmini konforla buluşturmaktadır. Kaliteli yapı anlayışı ve özenli işçiliğiyle hem bireysel yaşam hem de yatırım amacıyla tercih edilebilecek nitelikli bir yaşam alanı sunmaktadır."
        },
        en: {
            t: "Tezel Family Residences",
            status: "Completed",
            location: "Van / Ipekyolu",
            d: "Located in the city center of Van, behind the VATSO building and within walking distance to Atatürk High School, Tezel Family Apartments is a modern residential project consisting of a total of 32 one-bedroom apartments. Thanks to its central location, the project offers easy access to educational institutions, shopping points, and all essential services for daily life. With compact and functional living spaces, it combines the dynamism of city life with comfort. With its quality construction approach and meticulous craftsmanship, it provides a qualified living space that can be preferred for both individual living and investment purposes."
        }
    },
    'ikinisan-apartmani': {
        tr: {
            t: "İki Nisan Apartmanı",
            status: "Tamamlandı",
            location: "Van / İpekyolu",
            d: "Van AVM'ye yakın konumda, caddeye sıfır olarak inşa edilen İkinisan Apartmanı, toplam 24 adet 3+1 daireden oluşan seçkin bir konut projesidir. Geniş ve kullanışlı daire planlarıyla aile yaşamına uygun bir anlayışla tasarlanan proje, ana ulaşım güzergâhlarına ve günlük ihtiyaç noktalarına kolay erişim avantajı sunmaktadır. Konfor, kalite ve işlevselliği bir araya getiren İkinisan Apartmanı, merkezi konumu ve özenli yapı anlayışıyla sakinlerine ayrıcalıklı bir yaşam deneyimi sunmaktadır."
        },
        en: {
            t: "Iki Nisan Apartment",
            status: "Completed",
            location: "Van / Ipekyolu",
            d: "Located close to Van AVM and built right on the street, Iki Nisan Apartment is an exclusive residential project consisting of a total of 24 three-bedroom apartments. Designed with spacious and functional apartment layouts suitable for family living, the project offers easy access to main transportation routes and daily necessities. Combining comfort, quality, and functionality, Iki Nisan Apartment provides its residents with a privileged living experience through its central location and meticulous construction approach."
        }
    },
    'masal-evi-kresi': { 
        tr: { 
            t: "Masal Evi Kreşi", 
            status: "Tamamlandı",
            location: "Van / Edremit",
            d: "Van Kale Yolu üzerinde yer alan Masal Evi Kreşi, mevcut yapının eğitim yapısı standartlarına uygun şekilde yeniden dönüştürüldüğü kapsamlı bir uygulama projesidir. Kullanım amacına uygun olmayan mevcut yapı; iç mekân düzenlemeleri, duvar revizyonları, altyapı çalışmaları ve dış cephe uygulamalarıyla tamamen yenilenerek modern bir kreş kimliği kazanmıştır. Projenin tüm ince yapı işçiliği ve uygulama süreçleri firmamız tarafından titizlikle yürütülmüş, güvenli, fonksiyonel ve estetik bir eğitim ortamı oluşturulmuştur." 
        }, 
        en: { 
            t: "Masal House Kindergarten", 
            status: "Completed",
            location: "Van / Edremit",
            d: "Masal Evi Kindergarten, located on Van Kale Road, is a comprehensive application project where the existing structure has been transformed to meet educational building standards. The existing structure, which was not suitable for its intended use, has been completely renewed through interior space arrangements, wall revisions, infrastructure works, and exterior applications, resulting in a modern kindergarten identity. All fine construction craftsmanship and application processes of the project were meticulously carried out by our company, creating a safe, functional, and aesthetic educational environment." 
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
            d: "Kahraman Villa project is a structure that stands out with its modern architectural approach and magnifique view of Lake Van, equipped with smart home systems." 
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

window.closeModal = function() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = "auto";
    }
    activeCardElement = null;
};

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
    updateSliderImage();
    
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.add('active'); 
        document.body.style.overflow = "hidden";
    }
};

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

window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        window.closeModal();
    }
});

window.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        window.closeModal();
        const lightboxSys = document.getElementById('lightbox-system');
        if(lightboxSys) {
            lightboxSys.classList.remove('active');
        }
    }
});

// =========================================================================
// LIGHTBOX (TAM EKRAN) SİSTEMİ LOGIC KODLARI (GLOBAL SCOPE ENTEGRASYONU)
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

// HTML inline click tetikleyicileri için global kapsama açıldı
window.closeLightbox = function(e) {
    const lightboxSys = document.getElementById('lightbox-system');
    if(!lightboxSys) return;
    if (!e.target.closest('#lightbox-img') && !e.target.closest('.lightbox-nav') || e.target.classList.contains('lightbox-close')) {
        lightboxSys.classList.remove('active');
    }
};

window.changeLightboxImg = function(direction, e) {
    e.stopPropagation(); 
    changeSlide(direction);
    
    // Doğrudan güncel dizi indeksinden çekilerek sıfır gecikmeyle senkronize edildi
    const lightboxImg = document.getElementById('lightbox-img');
    if(lightboxImg && currentImages[currentIndex]) {
        lightboxImg.src = currentImages[currentIndex];
    }
};