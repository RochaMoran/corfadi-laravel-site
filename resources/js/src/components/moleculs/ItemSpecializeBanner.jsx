import imag1 from "../../assets/calidad.webp";
import imag2 from "../../assets/digital.webp";
import imag3 from "../../assets/mapa.webp";
import imag4 from "../../assets/Photo (16).webp";
import IconSpecialize from "../atoms/IconSpecialize";
import React from "react";

export default function ItemSpecializeBanner() {
  return (
    <div className="main-specialize-banner__item">
      <div className="main-specialize-banner__container">
        <h2>NOS ESPECIALIZAMOS EN</h2>
        <div className="main-specialize-banner__icons">
          <IconSpecialize
            icon={imag1}
            title={"Calidad certificada"}
            description={
              "Proporcionando productos con gran calidad a la ciudadania nicaragüense."
            }
          />
          <IconSpecialize
            icon={imag2}
            title={"ubicación geografica"}
            description={
              "Posicionados en un lugar oportuno que permite hacer llegar nuestros productos a clientes de distintas partes del país."
            }
          />
          <IconSpecialize
            icon={imag3}
            title={"tecnología"}
            description={
              "Contamos con equipos tecnológicos que permiten llevar a cabo de la mejor manera posible los distintos procesos en la empresa."
            }
          />
        </div>
      </div>
      <div className="main-specialize-banner__image-container"></div>
      <img
        className="img-specialize-banner"
        src={imag4}
        alt="item-specialize-banner"
        loading="lazy"
      />
    </div>
  );
}
