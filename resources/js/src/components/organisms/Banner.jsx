import { ItemBanner } from "../moleculs";
import imag1 from "../../assets/src (3).png";
import arrow_down from "../../assets/arrow_down.png";
import React from "react";

function scrollDown() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}

export default function Banner() {
  return (
    <article className="main-banner">
      <div className="main-banner__container">
        <ItemBanner
          key={1}
          title={"Agregados Triturados"}
          subtitle={"Especialista en"}
          img={imag1}
        />
      </div>
      <button
        className="main-banner__down"
        id="button-down"
        onClick={() => scrollDown()}
      >
        <img src={arrow_down} alt="down" className="fas fa-chevron-down" />
      </button>
    </article>
  );
}
