import { ItemCarrousel } from "../moleculs";
import { useCarrousel } from "../../hooks";
import img1 from "../../assets/Photo (15).webp";
import img2 from "../../assets/carrousel-1.jpeg";
import img3 from "../../assets/carrousel-2.jpeg";
import img4 from "../../assets/carrousel-3.jpeg";
import arrow from "../../assets/arrow.png";
// import video1 from "../../assets/videos/video muestra corfadi.mp4";
import React from "react";

const carrouselContent = [
  {
    id: 0,
    title: "OFRECIENDO Y BRINDANDO PRODUCTOS CON LA MEJOR CALIDAD DEL MERCADO.",
    subtitle: "PRODUCTOS DE CALIDAD",
    video:
      "https://www.youtube.com/embed/amVQh4jrQBE?controls=0&amp;start=2&autoplay=1",
    active: false,
    activeVideo: true,
  },
  {
    id: 1,
    title: "OFRECIENDO Y BRINDANDO PRODUCTOS CON LA MEJOR CALIDAD DEL MERCADO.",
    subtitle: "PRODUCTOS DE CALIDAD",
    image: img1,
    active: true,
    activeVideo: false,
  },
  {
    id: 2,
    title: "OFRECIENDO Y BRINDANDO PRODUCTOS CON LA MEJOR CALIDAD DEL MERCADO.",
    subtitle: "PRODUCTOS DE CALIDAD",
    image: img2,
    active: true,
    activeVideo: false,
  },
  {
    id: 3,
    title: "OFRECIENDO Y BRINDANDO PRODUCTOS CON LA MEJOR CALIDAD DEL MERCADO.",
    subtitle: "PRODUCTOS DE CALIDAD",
    image: img3,
    active: true,
    activeVideo: false,
  },
  {
    id: 4,
    title: "OFRECIENDO Y BRINDANDO PRODUCTOS CON LA MEJOR CALIDAD DEL MERCADO.",
    subtitle: "PRODUCTOS DE CALIDAD",
    image: img4,
    active: true,
    activeVideo: false,
  },
];

export default function Carrousel() {
  const { index, toggleNext, toggleBack, updateIndex } = useCarrousel(
    carrouselContent.length
  );

  return (
    // START CARROUSEL
    <article className="main-carrousel">
      <button className="main-carrousel__back" onClick={() => toggleBack()}>
        <img src={arrow} alt="previous" className="fas fa-chevron-left" />
      </button>
      <div
        className="main-carrousel__container"
        style={{
          transform: `translateX(${-index * 100}%)`,
          gridTemplateColumns: `repeat(${carrouselContent.length}, 100%)`,
        }}
      >
        {carrouselContent.map((item) => (
          <ItemCarrousel
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            img={item.image}
            video={item.video}
            active={item.active}
            activeVideo={item.activeVideo}
          />
        ))}
      </div>
      <div className="carrousel-circle">
        {carrouselContent.map((item, i) => (
          <div
            onClick={() => updateIndex(i)}
            key={item.id}
            className={
              index === i
                ? "carrousel-circle__item carrousel-circle__item-active"
                : "carrousel-circle__item"
            }
          />
        ))}
      </div>
      <button
        className="main-carrousel__next"
        id="button-next"
        onClick={() => toggleNext()}
      >
        <img src={arrow} alt="next" className="fas fa-chevron-right" />
      </button>
    </article>
  );
}
