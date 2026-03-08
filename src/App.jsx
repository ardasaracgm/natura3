
import { useMemo, useState } from "react";

const SITE = {
  projectName: "Natura Alacaatlı",
  tagline: "Ankara’da seçkin yaşamın yeni adresi",
  intro:
    "Modern mimari, güçlü lokasyon ve ferah yaşam anlayışıyla tasarlanan Natura Alacaatlı, Alacaatlı’nın prestijli atmosferinde ayrıcalıklı bir yaşam sunuyor.",
  statement:
    "Sadece bir konut projesi değil, yaşam standardını yükselten özel bir deneyim.",
  city: "Ankara",
  district: "Alacaatlı",
  phone: "+90 530 841 6578",
  phoneRaw: "905308416578",
  email: "info@mezonestate.com",
  mapEmbed: "https://www.google.com/maps?q=Alacaatlı%20Ankara&z=14&output=embed",
  heroPoster: "/images/hero.webp",
  heroVideo: "/video/hero-video.mp4",
  stats: [
    { value: "150", label: "Toplam konut" },
    { value: "2+1 – 5+1", label: "Daire tipleri" },
    { value: "Alacaatlı", label: "Prestijli lokasyon" },
    { value: "Modern Mimari", label: "Premium yaşam" }
  ],
  features: [
    {
      title: "Prestijli Lokasyon",
      text: "Ankara’nın gelişen ve değer kazanan bölgelerinden Alacaatlı’da konumlanır."
    },
    {
      title: "Modern Mimari",
      text: "Zarif mimari çizgiler ve estetik tasarım anlayışıyla güçlü bir proje kimliği sunar."
    },
    {
      title: "Geniş Daire Seçenekleri",
      text: "2+1, 3+1, 4+1 ve 5+1 seçenekleriyle farklı yaşam beklentilerine hitap eder."
    },
    {
      title: "Yatırım Değeri",
      text: "Konumu ve proje niteliği sayesinde yaşam ve yatırım açısından güçlü bir potansiyel taşır."
    }
  ],
  galleryTabs: {
    "Dış Mekan": [
      "/images/dis-mekan/dis1.webp",
      "/images/dis-mekan/dis2.webp",
      "/images/dis-mekan/dis3.webp",
      "/images/dis-mekan/dis4.webp"
    ],
    "İç Mekan": [
      "/images/ic-mekan/ic1.webp",
      "/images/ic-mekan/ic2.webp",
      "/images/ic-mekan/ic3.webp",
      "/images/ic-mekan/ic4.webp",
      "/images/ic-mekan/ic5.webp",
      "/images/ic-mekan/ic6.webp",
      "/images/ic-mekan/ic7.webp",
      "/images/ic-mekan/ic8.webp",
      "/images/ic-mekan/ic9.webp"
    ],
    "Kat Planları": [
      "/images/kat-planlari/daire-2-1.webp",
      "/images/kat-planlari/daire-3-1.webp",
      "/images/kat-planlari/daire-4-1.webp",
      "/images/kat-planlari/daire-5-1.webp"
    ]
  },
  apartmentTypes: [
    {
      id: 1,
      type: "2+1",
      title: "2+1 Daire",
      description:
        "Fonksiyonel yaşam alanları ve modern planlama ile konforlu ve dengeli bir yaşam sunar.",
      image: "/images/kat-planlari/daire-2-1.webp",
      plan: "2+1 Kat Planı"
    },
    {
      id: 2,
      type: "3+1",
      title: "3+1 Daire",
      description:
        "Geniş salonu ve ferah odaları ile aile yaşamına güçlü bir çözüm sunar.",
      image: "/images/kat-planlari/daire-3-1.webp",
      plan: "3+1 Kat Planı"
    },
    {
      id: 3,
      type: "4+1",
      title: "4+1 Daire",
      description:
        "Geniş metrekareli planı ile konfor ve prestiji bir arada yaşatır.",
      image: "/images/kat-planlari/daire-4-1.webp",
      plan: "4+1 Kat Planı"
    },
    {
      id: 4,
      type: "5+1",
      title: "5+1 Daire",
      description:
        "Yüksek konfor beklentisine cevap veren geniş ve seçkin yaşam alanları sunar.",
      image: "/images/kat-planlari/daire-5-1.webp",
      plan: "5+1 Kat Planı"
    }
  ]
};

function useGallery(tab) {
  return SITE.galleryTabs[tab] || [];
}

export default function App() {
  const [galleryTab, setGalleryTab] = useState("Dış Mekan");
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [planModal, setPlanModal] = useState({ open: false, title: "", image: "" });
  const [selectedType, setSelectedType] = useState("Tümü");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    apartmentType: "",
    message: "Natura Alacaatlı için fiyat listesi ve kat planı bilgisi almak istiyorum."
  });

  const gallery = useGallery(galleryTab);
  const whatsappHref = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(
    "Merhaba, Natura Alacaatlı projesi hakkında bilgi almak istiyorum."
  )}`;

  const visibleTypes = useMemo(() => {
    if (selectedType === "Tümü") return SITE.apartmentTypes;
    return SITE.apartmentTypes.filter((x) => x.type === selectedType);
  }, [selectedType]);

  const typeFilters = ["Tümü", "2+1", "3+1", "4+1", "5+1"];

  function changeTab(tab) {
    setGalleryTab(tab);
    setGalleryIndex(0);
  }

  function openPlan(title, image) {
    setPlanModal({ open: true, title, image });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const text = `
Yeni Talep

Proje: ${SITE.projectName}
Ad Soyad: ${form.name}
Telefon: ${form.phone}
E-posta: ${form.email || "-"}
Daire Tipi: ${form.apartmentType || "-"}

Mesaj:
${form.message}
    `.trim();

    window.open(
      `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  return (
    <div className="page">
      <a className="floating-wa" href={whatsappHref} target="_blank" rel="noreferrer">
        WhatsApp Bilgi Al
      </a>

      <section className="hero">
        <div className="hero-media">
          <video autoPlay muted loop playsInline poster={SITE.heroPoster}>
            <source src={SITE.heroVideo} type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </div>

        <div className="container hero-shell">
          <div className="topbar">
            <div className="brand-chip">{SITE.projectName}</div>
            <a className="top-link" href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp Bilgi Al
            </a>
          </div>

          <div className="hero-content">
            <div className="hero-left">
              <p className="eyebrow">Bir Natura Rengi Klasiği</p>
              <h1>{SITE.projectName}</h1>
              <h2 className="hero-subtitle">{SITE.tagline}</h2>
              <p className="hero-copy">{SITE.intro}</p>

              <div className="hero-actions">
                <a className="btn btn-light" href="#manifesto">Projeyi Keşfet</a>
                <a className="btn btn-outline" href="#kat-planlari">Kat Planlarını İncele</a>
              </div>

              <div className="hero-stats">
                {SITE.stats.map((item) => (
                  <div className="stat-item" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-form-card" id="iletisim">
              <div className="card-badge">Hızlı Bilgi Formu</div>
              <h3>Fiyat listesi ve kat planı için bizimle iletişime geçin</h3>
              <p>
                Satış danışmanımız sizin için en uygun daire tipine dair detayları paylaşsın.
              </p>

              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Ad Soyad"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  placeholder="Telefon"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="E-posta"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <select
                  value={form.apartmentType}
                  onChange={(e) => setForm({ ...form, apartmentType: e.target.value })}
                >
                  <option value="">Daire tipi seçin</option>
                  {SITE.apartmentTypes.map((item) => (
                    <option key={item.id} value={item.type}>
                      {item.type}
                    </option>
                  ))}
                </select>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <button className="btn btn-dark full">WhatsApp ile Hızlı Bilgi Al</button>
              </form>

              <div className="contact-mini">
                <span>Meltem Özbek Eser</span>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="container narrow">
          <h2>{SITE.statement}</h2>
          <p>
            Natura Alacaatlı; estetik mimari dili, konfor odaklı planlaması ve lokasyon gücüyle hem yaşam hem yatırım açısından özel bir değer sunar.
          </p>
        </div>
      </section>

      <section className="section" id="manifesto">
        <div className="container split-section">
          <div className="split-visual">
            <img src="/images/dis-mekan/dis1.webp" alt="Natura Alacaatlı dış görünüm" />
          </div>

          <div className="split-copy">
            <div className="section-label">Proje Manifestosu</div>
            <h2>Alacaatlı’da modern, dengeli ve prestijli yaşam</h2>
            <p>
              Ankara’nın hızla değer kazanan bölgelerinden biri olan Alacaatlı, hem yaşam kalitesi hem de yatırım potansiyeli açısından dikkat çeken bir lokasyondur. Natura Alacaatlı bu özel konumda modern mimari ve konforlu yaşam alanlarını bir araya getirir.
            </p>

            <div className="feature-grid">
              {SITE.features.map((item) => (
                <div className="feature-card" key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        <section className="section section-soft" id="galeri">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-label">Proje Galerisi</div>
              <h2>Natura Alacaatlı’dan seçili kareler</h2>
              <p>
                Mimari çizgiden iç mekan detaylarına kadar projeyi yakından inceleyin.
              </p>
            </div>
          </div>

          <div className="gallery-tabs">
            {Object.keys(SITE.galleryTabs).map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${galleryTab === tab ? "active" : ""}`}
                onClick={() => changeTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="gallery-shell">
            <div className="gallery-stage">
              <img src={gallery[galleryIndex]} alt={`${galleryTab} görseli`} />
            </div>

            <div className="gallery-thumbs">
              {gallery.map((img, i) => (
                <img
                  key={`${img}-${i}`}
                  src={img}
                  alt={`${galleryTab} küçük görsel`}
                  className={galleryIndex === i ? "active" : ""}
                  onClick={() => setGalleryIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="daire-tipleri">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-label">Daire Tipleri</div>
              <h2>Yaşam biçiminize uygun plan seçenekleri</h2>
              <p>Natura Alacaatlı, farklı yaşam ihtiyaçlarına hitap eden çeşitli daire tipleri ile tasarlanmıştır.</p>
            </div>

            <div className="type-filters">
              {typeFilters.map((type) => (
                <button
                  key={type}
                  className={`tab-btn ${selectedType === type ? "active" : ""}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="apartment-grid">
            {visibleTypes.map((item) => (
              <div className="apartment-card" key={item.id}>
                <div className="apartment-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="apartment-body">
                  <div className="tiny-label">{item.type}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="card-actions">
                    <button className="btn btn-dark" onClick={() => openPlan(item.plan, item.image)}>
                      Kat Planını Aç
                    </button>
                    <a className="btn btn-ghost" href={whatsappHref} target="_blank" rel="noreferrer">
                      Bilgi Al
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="kat-planlari">
        <div className="container split-section reverse">
          <div className="split-copy light-copy">
            <div className="section-label light">Kat Planları</div>
            <h2>Akılcı tasarlanmış kat planları</h2>
            <p>
              Natura Alacaatlı’da yer alan daire planları, ferah yaşam alanları ve dengeli oda dağılımları ile modern yaşam ihtiyaçları göz önünde bulundurularak tasarlanmıştır.
            </p>

            <div className="plan-list">
              {SITE.apartmentTypes.map((item) => (
                <button
                  key={item.id}
                  className="plan-row"
                  onClick={() => openPlan(item.plan, item.image)}
                >
                  <span>{item.plan}</span>
                  <strong>İncele</strong>
                </button>
              ))}
            </div>
          </div>

          <div className="split-visual plan-visual">
            <img src="/images/kat-planlari/daire-3-1.webp" alt="Kat planı önizleme" />
          </div>
        </div>
      </section>

      <section className="section" id="lokasyon">
        <div className="container split-section">
          <div className="split-copy">
            <div className="section-label">Lokasyon</div>
            <h2>Şehrin içinde, yoğunluğun dışında</h2>
            <p>
              Natura Alacaatlı, Ankara’nın değerli yaşam bölgelerinden biri olan Alacaatlı’da konumlanmaktadır. Şehrin önemli noktalarına kolay ulaşım sağlayan konumu sayesinde hem konforlu bir yaşam hem de güçlü bir yatırım avantajı sunar.
            </p>

            <div className="location-points">
              <div className="point-card">Prestijli çevre</div>
              <div className="point-card">Kolay ulaşım</div>
              <div className="point-card">Yaşam kalitesi</div>
              <div className="point-card">Güçlü yatırım değeri</div>
            </div>
          </div>

          <div className="map-card">
            <iframe title="Natura Alacaatlı harita" src={SITE.mapEmbed} />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container trust-shell">
          <div className="section-head">
            <div>
              <div className="section-label">Neden Natura Alacaatlı?</div>
              <h2>Seçkin yaşam, güçlü yatırım değeri</h2>
            </div>
          </div>

          <div className="trust-grid">
            <div className="trust-card">Seçkin bölge</div>
            <div className="trust-card">Modern mimari dil</div>
            <div className="trust-card">Geniş daire seçeneği</div>
            <div className="trust-card">Değer kazanan lokasyon</div>
          </div>
        </div>
      </section>

      <section className="section lead-section">
        <div className="container lead-shell">
          <div className="lead-info">
            <div className="section-label light">İletişim</div>
            <h2>Fiyat listesi, kat planı ve güncel bilgi için bizimle iletişime geçin</h2>
            <p>
              Natura Alacaatlı projesi hakkında güncel fiyat listesi, kat planları ve proje detaylarını öğrenmek için satış danışmanımızla iletişime geçebilirsiniz.
            </p>

            <div className="advisor-card">
              <strong>Meltem Özbek Eser</strong>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>

          <div className="lead-form-box">
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Ad Soyad"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                placeholder="Telefon"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <input
                type="email"
                placeholder="E-posta"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <select
                value={form.apartmentType}
                onChange={(e) => setForm({ ...form, apartmentType: e.target.value })}
              >
                <option value="">Daire tipi seçin</option>
                {SITE.apartmentTypes.map((item) => (
                  <option key={item.id} value={item.type}>
                    {item.type}
                  </option>
                ))}
              </select>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button className="btn btn-gold full">WhatsApp ile Hızlı Bilgi Al</button>
            </form>

            <div className="lead-secondary">
              <a className="btn btn-outline-light" href={whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="btn btn-outline-light" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
                Hemen Ara
              </a>
              <a className="btn btn-outline-light" href={`mailto:${SITE.email}`}>
                Mail Gönder
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-premium">
        <div className="container footer-shell">
          <div>
            <strong>{SITE.projectName}</strong>
            <span>Modern mimari, prestijli lokasyon ve konforlu yaşam alanlarıyla tasarlanmış özel bir konut projesi.</span>
          </div>
          <div className="footer-contact">
            <span>Meltem Özbek Eser</span>
            <span>{SITE.phone}</span>
            <span>{SITE.email}</span>
          </div>
        </div>
      </footer>

      {planModal.open && (
        <div className="modal" onClick={() => setPlanModal({ open: false, title: "", image: "" })}>
          <div className="modal-box premium-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top">
              <div>
                <div className="section-label">Kat Planı</div>
                <h3>{planModal.title}</h3>
              </div>
              <button className="close-btn" onClick={() => setPlanModal({ open: false, title: "", image: "" })}>
                Kapat
              </button>
            </div>
            <div className="plan-modal-image">
              <img src={planModal.image} alt={planModal.title} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
