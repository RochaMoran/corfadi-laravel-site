import { ButtonElement } from "../atoms";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ItemBanner({ title, subtitle, img }) {
  const navigate = useNavigate();

  return (
    <div className="main-banner__item">
      <div className="banner-item__text">
        <span>{subtitle}</span>
        <h2>{title}</h2>
        <div className="banner-buttons__container">
          <ButtonElement
            onClick={() => navigate("/about-me")}
            text={"Acerca de"}
            className={"btn btn-secondary banner-btn"}
          />
          <ButtonElement
            onClick={() => navigate("/")}
            text={"Inicio"}
            className={"btn btn-three banner-btn"}
          />
        </div>
      </div>
      <img
        className="banner-item__image"
        src={img}
        alt="item-banner"
        loading="lazy"
      />
    </div>
  );
}
