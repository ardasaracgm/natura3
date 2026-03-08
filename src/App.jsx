import { useMemo, useState } from "react";

const SITE = {
  projectName: "Natura Alacaatlı",
  tagline: "Bir Natura Rengi Klasiği!",
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
    { value: "2+1 - 5+1", label: "Daire seçenekleri" },
    { value: "01.02.2021", label: "Başlangıç tarihi" },
    { value: "30.11.2024", label: "Teslim tarihi" },
  ],

  features: [
    {
      title: "Prestijli Lokasyon",
      text: "Ankara Alacaatlı’da seçkin yaşam ve yüksek algı değeri.",
    },
    {
      title: "Modern Mimari",
      text: "Çağdaş çizgiler ve güçlü proje kimliği.",
    },
    {
      title: "Yeşil ile İç İçe",
      text: "Ferahlık hissi veren yaşam yaklaşımı.",
    },
    {
      title: "Yatırım Potansiyeli",
      text: "Bölge değeri ve proje niteliği ile dikkat çeken yapı.",
    },
    {
      title: "Geniş Daire Tipleri",
      text: "2+1, 3+1, 4+1 ve 5+1 daire seçenekleri.",
    },
    {
      title: "Hızlı İletişim",
      text: "WhatsApp, telefon ve form ile tek sayfada güçlü dönüşüm akışı.",
    },
  ],

  gallery: [
    { title: "Dış Mekan", image: "/images/dis-mekan/dis1.webp" },
    { title: "Dış Mekan", image: "/images/dis-mekan/dis2.webp" },
    { title: "Dış Mekan", image: "/images/dis-mekan/dis3.webp" },
    { title: "Dış Mekan", image: "/images/dis-mekan/dis4.webp" },

    { title: "İç Mekan", image: "/images/ic-mekan/ic1.webp" },
    { title: "İç Mekan", image: "/images/ic-mekan/ic2.webp" },
    { title: "İç Mekan", image: "/images/ic-mekan/ic3.webp" },
    { title: "İç Mekan", image: "/images/ic-mekan/ic4.webp" },
    { title: "İç Mekan", image: "/images/ic-mekan/ic5.webp" },
    { title: "İç Mekan", image: "/images/ic-mekan/ic6.webp" },
    { title: "İç Mekan", image: "/images/ic-mekan/ic7.webp" },
    { title: "İç Mekan", image: "/images/ic-mekan/ic8.webp" },
    { title: "İç Mekan", image: "/images/ic-mekan/ic9.webp" },
  ],

  apartmentTypes: [
    {
      id: 1,
      type: "2+1",
      title: "2+1 Daire",
      size: "Bilgi talep edin",
      status: "Müsaitlik Sorunuz",
      plan: "2+1 Kat Planı",
      image: "/images/kat-planlari/daire-2-1.webp",
    },
    {
      id: 2,
      type: "3+1",
      title: "3+1 Daire",
      size: "Bilgi talep edin",
      status: "Müsaitlik Sorunuz",
      plan: "3+1 Kat Planı",
      image: "/images/kat-planlari/daire-3-1.webp",
    },
    {
      id: 3,
      type: "4+1",
      title: "4+1 Daire",
      size: "Bilgi talep edin",
      status: "Müsaitlik Sorunuz",
      plan: "4+1 Kat Planı",
      image: "/images/kat-planlari/daire-4-1.webp",
    },
    {
      id: 4,
      type: "5+1",
      title: "5+1 Daire",
      size: "Bilgi talep edin",
      status: "Müsaitlik Sorunuz",
      plan: "5+1 Kat Planı",
      image: "/images/kat-planlari/daire-5-1.webp",
    },
  ],

  inventory: {
    "A Blok": {
      "1. Kat": [
        { no: "Daire 01", type: "2+1", status: "Boş", plan: "2+1 Kat Planı" },
        { no: "Daire 02", type: "3+1", status: "Rezerve", plan: "3+1 Kat Planı" },
        { no: "Daire 03", type: "4+1", status: "Satıldı", plan: "4+1 Kat Planı" },
        { no: "Daire 04", type: "5+1", status: "Boş", plan: "5+1 Kat Planı" },
      ],
      "2. Kat": [
        { no: "Daire 05", type: "2+1", status: "Boş", plan: "2+1 Kat Planı" },
        { no: "Daire 06", type: "3+1", status: "Boş", plan: "3+1 Kat Planı" },
        { no: "Daire 07", type: "4+1", status: "Rezerve", plan: "4+1 Kat Planı" },
        { no: "Daire 08", type: "5+1", status: "Satıldı", plan: "5+1 Kat Planı" },
      ],
    },
    "B Blok": {
      "1. Kat": [
        { no: "Daire 09", type: "2+1", status: "Boş", plan: "2+1 Kat Planı" },
        { no: "Daire 10", type: "3+1", status: "Boş", plan: "3+1 Kat Planı" },
        { no: "Daire 11", type: "4+1", status: "Satıldı", plan: "4+1 Kat Planı" },
        { no: "Daire 12", type: "5+1", status: "Rezerve", plan: "5+1 Kat Planı" },
      ],
      "2. Kat": [
        { no: "Daire 13", type: "2+1", status: "Boş", plan: "2+1 Kat Planı" },
        { no: "Daire 14", type: "3+1", status: "Rezerve", plan: "3+1 Kat Planı" },
        { no: "Daire 15", type: "4+1", status: "Boş", plan: "4+1 Kat Planı" },
        { no: "Daire 16", type: "5+1", status: "Satıldı", plan: "5+1 Kat Planı" },
      ],
    },
  },
};

function statusClass(status) {
  if (status === "Boş") return "is-empty";
  if (status === "Rezerve") return "is-reserved";
  if (status === "Satıldı") return "is-sold";
  return "";
}

export default function App() {
  const [slide, setSlide] = useState(0);
  const [selectedType, setSelectedType] = useState("Tümü");
  const [selectedBlock, setSelectedBlock] = useState("A Blok");
  const [selectedFloor, setSelectedFloor] = useState("1. Kat");
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [modal, setModal] = useState({
    open: false,
    title: "",
    type: "",
    plan: "",
  });
  const [message, setMessage] = useState("");
  const [ok, setOk] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    apartmentType: "",
    message:
      "Natura Alacaatlı için fiyat listesi ve kat planı bilgisi almak istiyorum.",
  });

  const gallery = SITE.gallery;
  const whatsappHref = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(
    "Merhaba, Natura Alacaatlı projesi hakkında bilgi almak istiyorum."
  )}`;
  const types = ["Tümü", "2+1", "3+1", "4+1", "5+1"];
  const floors = Object.keys(SITE.inventory[selectedBlock]);
  const currentUnits = SITE.inventory[selectedBlock][selectedFloor];

  const filteredTypes = useMemo(() => {
    if (selectedType === "Tümü") return SITE.apartmentTypes;
    return SITE.apartmentTypes.filter((item) => item.type === selectedType);
  }, [selectedType]);

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

    const url = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(text)}`;

    setOk(true);
    setMessage("WhatsApp açılıyor, hazır mesaj gönderime sunuldu.");
    window.open(url, "_blank");
  }

  function openPlan(title, type, plan) {
    setModal({ open: true, title, type, plan });
  }

  return (
    <div className="page">
      <a className="floating-wa" href={whatsappHref} target="_blank" rel="noreferrer">
        WhatsApp Bilgi Al
      </a>

      <section className="hero">
        <div className="hero-bg">
          <video autoPlay muted loop playsInline poster={SITE.heroPoster}>
            <source src={SITE.heroVideo} type="video/mp4" />
          </video>
          <div className="overlay" />
        </div>

        <div className="container hero-grid">
          <div>
            <div className="pill">{SITE.projectName}</div>
            <p className="eyebrow">{SITE.tagline}</p>
            <h1>{SITE.projectName}</h1>
            <p className="hero-text">
              Konumu ile benzersiz nitelikler taşıyan {SITE.projectName}, {SITE.city}’nın
              prestijli bölgesi {SITE.district}’da yepyeni bir yaşam vadediyor.
            </p>

            <div className="cta-row">
              <a className="btn btn-light" href="#form">Proje Detay</a>
              <a className="btn btn-outline" href="#daireler">Daireleri İncele</a>
              <a className="btn btn-outline" href="#stok">Daire Seçme Sistemi</a>
            </div>

            <div className="badge-row">
              <span className="badge">✨ Prestijli Lokasyon</span>
              <span className="badge">✨ Modern Mimari</span>
              <span className="badge">✨ Yeşil ile İç İçe</span>
              <span className="badge">✨ Yatırım Potansiyeli</span>
            </div>

            <div className="stat-grid">
              {SITE.stats.map((item) => (
                <div className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lead-card" id="form">
            <div className="lead-tag">Bilgi Formu</div>
            <h2>Fiyat listesi ve kat planı gönderelim</h2>
            <p>
              Formu doldurun; talebiniz WhatsApp üzerinden satış ekibine hazır mesaj
              olarak iletilsin.
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
                placeholder="E-posta"
                type="email"
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
              <button className="btn btn-dark full">WhatsApp’a Gönder</button>
            </form>

            {message && (
              <div className={`form-message ${ok ? "ok" : "error"}`}>{message}</div>
            )}

            <div className="mini-cta">
              <a className="btn btn-line" href={whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="btn btn-line" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
                Hemen Ara
              </a>
              <a className="btn btn-line" href={`mailto:${SITE.email}`}>
                E-posta
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-grid">
          {SITE.features.map((item) => (
            <div className="card soft" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-col">
          <div>
            <div className="section-tag">Proje Hakkında</div>
            <h2>Alacaatlı’da yeni bir yaşam vadeden özel proje</h2>
            <p className="muted">
              Natura Alacaatlı, konumu ile benzersiz nitelikler taşıyan ve bölgeye
              yepyeni bir soluk getirmeyi hedefleyen bir konut projesidir. Toplam 150
              adet konuttan oluşan projede 2+1, 3+1, 4+1 ve 5+1 seçenekleri sunulur.
            </p>
            <div className="check-grid">
              <div className="card">150 konut</div>
              <div className="card">2+1, 3+1, 4+1, 5+1 tipleri</div>
              <div className="card">Ankara / Alacaatlı konumu</div>
              <div className="card">Modern ve çağdaş yaşam yaklaşımı</div>
            </div>
          </div>
          <div className="stack">
            <div className="card image-card">
              <img src={SITE.gallery[0].image} alt={SITE.projectName} />
            </div>
            <div className="dark-panel">
              <div className="section-tag light">İletişim Bilgisi</div>
              <div className="contact-list">
                <div>{SITE.email}</div>
                <div>{SITE.phone}</div>
                <div>{SITE.district}, {SITE.city}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="daireler">
        <div className="container">
          <div className="title-row">
            <div>
              <div className="section-tag">Daire Tipleri</div>
              <h2>Seçilebilir planlar</h2>
            </div>
            <div className="filter-row">
              {types.map((type) => (
                <button
                  key={type}
                  className={`btn btn-line small ${selectedType === type ? "active" : ""}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="type-grid">
            {filteredTypes.map((item) => (
              <div className="card type-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="type-content">
                  <span className="type-status">{item.status}</span>
                  <h3>{item.title}</h3>
                  <div className="type-meta">
                    <div>Daire tipi: {item.type}</div>
                    <div>Alan: {item.size}</div>
                    <div>Plan: {item.plan}</div>
                  </div>
                  <div className="stack gap-sm">
                    <button
                      className="btn btn-dark"
                      onClick={() => openPlan(item.title, item.type, item.plan)}
                    >
                      Kat Planı Popup
                    </button>
                    <a className="btn btn-line" href={whatsappHref} target="_blank" rel="noreferrer">
                      WhatsApp Bilgi Al
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark" id="stok">
        <div className="container">
          <div className="section-tag light">Daire Seçme Sistemi</div>
          <h2 className="white">Blok, kat ve daire bazlı seçim</h2>

          <div className="inventory-grid">
            <div className="dark-soft">
              <div className="label">Blok seçimi</div>
              <div className="filter-row left">
                {Object.keys(SITE.inventory).map((block) => (
                  <button
                    key={block}
                    className={`btn ${selectedBlock === block ? "btn-light" : "btn-outline"} small`}
                    onClick={() => {
                      setSelectedBlock(block);
                      setSelectedFloor(Object.keys(SITE.inventory[block])[0]);
                      setSelectedUnit(null);
                    }}
                  >
                    {block}
                  </button>
                ))}
              </div>

              <div className="label mt">Kat seçimi</div>
              <div className="filter-row left">
                {floors.map((floor) => (
                  <button
                    key={floor}
                    className={`btn ${selectedFloor === floor ? "btn-light" : "btn-outline"} small`}
                    onClick={() => {
                      setSelectedFloor(floor);
                      setSelectedUnit(null);
                    }}
                  >
                    {floor}
                  </button>
                ))}
              </div>
            </div>

            <div className="card inventory-card">
              <div className="unit-grid">
                {currentUnits.map((unit) => (
                  <button
                    key={unit.no}
                    className={`unit-card ${statusClass(unit.status)} ${
                      selectedUnit?.no === unit.no ? "selected" : ""
                    }`}
                    onClick={() => setSelectedUnit(unit)}
                  >
                    <strong>{unit.no}</strong>
                    <span>{unit.type}</span>
                    <small>{unit.status}</small>
                  </button>
                ))}
              </div>

              <div className="panel-light">
                {selectedUnit ? (
                  <>
                    <div className="section-tag">Seçili Daire</div>
                    <h3>{selectedUnit.no}</h3>
                    <div className="type-meta">
                      <div>Tip: {selectedUnit.type}</div>
                      <div>Durum: {selectedUnit.status}</div>
                      <div>Plan: {selectedUnit.plan}</div>
                      <div>Blok/Kat: {selectedBlock} / {selectedFloor}</div>
                    </div>
                    <div className="mini-cta left">
                      <button
                        className="btn btn-dark"
                        onClick={() =>
                          openPlan(selectedUnit.no, selectedUnit.type, selectedUnit.plan)
                        }
                      >
                        Planı Gör
                      </button>
                      <a className="btn btn-line" href={whatsappHref} target="_blank" rel="noreferrer">
                        WhatsApp'a Gönder
                      </a>
                    </div>
                  </>
                ) : (
                  <p className="muted">Bir daire seçerek detayları görüntüleyin.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="title-row">
            <div>
              <div className="section-tag">Proje galerisi</div>
              <h2>Galeri</h2>
            </div>
            <div className="mini-cta left">
              <button
                className="btn btn-line small"
                onClick={() => setSlide((slide - 1 + gallery.length) % gallery.length)}
              >
                ←
              </button>
              <button
                className="btn btn-line small"
                onClick={() => setSlide((slide + 1) % gallery.length)}
              >
                →
              </button>
            </div>
          </div>

          <div className="gallery-grid">
            <div className="gallery-main">
              <img src={gallery[slide].image} alt={gallery[slide].title} />
            </div>
            <div className="thumb-list">
              {gallery.map((item, i) => (
                <button
                  key={`${item.title}-${i}`}
                  className={`thumb ${slide === i ? "active" : ""}`}
                  onClick={() => setSlide(i)}
                >
                  <img src={item.image} alt={item.title} />
                  <div>
                    <strong>{item.title}</strong>
                    <span>Projeden seçili görsel</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-col">
          <div className="card location-card">
            <div className="section-tag">Lokasyon</div>
            <h2>Alacaatlı’da güçlü konum avantajı</h2>
            <p className="muted">
              Proje Ankara’nın prestijli bölgesi Alacaatlı’da konumlanır ve seçkin bir
              yaşam anlatısı sunar.
            </p>
            <div className="map-frame">
              <iframe title="Natura Alacaatlı Harita" src={SITE.mapEmbed} />
            </div>
          </div>

          <div className="dark-panel">
            <div className="section-tag light">İletişim</div>
            <h2 className="white">Satış danışmanına hemen ulaşın</h2>
            <p className="muted white-soft">
              Güncel fiyat listesi, kampanya detayları ve müsaitlik için bizimle
              iletişime geçin.
            </p>
            <div className="contact-box">
              <h3>Meltem Özbek Eser</h3>
              <div className="contact-list">
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                <div>{SITE.district}, {SITE.city}</div>
              </div>
              <div className="mini-cta left">
                <a className="btn btn-light" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
                  Ara
                </a>
                <a className="btn btn-outline" href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <a className="btn btn-outline" href={`mailto:${SITE.email}`}>
                  Mail Gönder
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-row">
          <div>
            <strong>{SITE.projectName}</strong>
            <span>Proje satış landing page</span>
          </div>
          <div className="footer-contact">
            <span>Satış Danışmanı: Meltem Özbek Eser</span>
            <span>{SITE.phone}</span>
            <span>{SITE.email}</span>
          </div>
        </div>
      </footer>

      {modal.open && (
        <div
          className="modal"
          onClick={() => setModal({ open: false, title: "", type: "", plan: "" })}
        >
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="title-row">
              <div>
                <div className="section-tag">Kat Planı</div>
                <h2>{modal.title}</h2>
                <p className="muted">
                  Gerçek proje plan PDF veya JPG görselleri bu alana bağlanınca popup
                  doğrudan canlı çalışır.
                </p>
              </div>
              <button
                className="btn btn-line small"
                onClick={() =>
                  setModal({ open: false, title: "", type: "", plan: "" })
                }
              >
                Kapat
              </button>
            </div>

            <div className="modal-grid">
              <div className="plan-area">
                <div>
                  <div className="play">▶</div>
                  <strong>Kat planı alanı</strong>
                  <span>PDF veya JPG plan görselinizi ekleyin</span>
                </div>
              </div>
              <div className="panel-light">
                <div className="section-tag">Özet</div>
                <div className="type-meta">
                  <div>Daire tipi: {modal.type}</div>
                  <div>Plan: {modal.plan}</div>
                </div>
                <div className="stack gap-sm">
                  <a className="btn btn-dark" href={whatsappHref} target="_blank" rel="noreferrer">
                    WhatsApp ile Talep Et
                  </a>
                  <a className="btn btn-line" href={`mailto:${SITE.email}`}>
                    Mail ile İste
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
