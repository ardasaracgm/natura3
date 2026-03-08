
import { useState } from "react";

const SITE = {
  projectName: "Natura Alacaatlı",
  tagline: "Bir Natura Rengi Klasiği!",
  heroPoster: "/images/hero.webp",
  heroVideo: "/video/hero-video.mp4",

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
    { title: "İç Mekan", image: "/images/ic-mekan/ic9.webp" }
  ]
};

export default function App() {
  const [slide, setSlide] = useState(0);
  const gallery = SITE.gallery;

  return (
    <div>

      <section className="hero">

        <div className="hero-bg">
          <video autoPlay muted loop playsInline poster={SITE.heroPoster}>
            <source src={SITE.heroVideo} type="video/mp4" />
          </video>
        </div>

        <div className="hero-content">
          <h1>{SITE.projectName}</h1>
          <p>{SITE.tagline}</p>
        </div>

      </section>

      <section className="gallery">

        <h2>Proje Galerisi</h2>

        <div className="gallery-main">
          <img src={gallery[slide].image} />
        </div>

        <div className="gallery-thumbs">

          {gallery.map((item, i) => (
            <img
              key={i}
              src={item.image}
              onClick={() => setSlide(i)}
              style={{ width: "120px", cursor: "pointer", margin: "5px" }}
            />
          ))}

        </div>

      </section>

    </div>
  );
}
