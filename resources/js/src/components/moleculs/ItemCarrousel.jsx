import { ButtonElement } from "../atoms";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ItemCarrousel({
  title,
  subtitle,
  img,
  video,
  active,
  activeVideo,
}) {
  const navigate = useNavigate();
  return (
    <div className="main-carrousel__item">
      <div className={active === true ? "carrousel-item__text" : "non-active"}>
        <span>{subtitle}</span>
        <h3>{title}</h3>
        <ButtonElement
          onClick={() => navigate("/about-me")}
          text={"VER MÁS"}
          className={"btn btn-secondary carrousel-btn"}
        />
      </div>
      <div
        className={
          active === true ? "carrousel__image-container" : "non-active"
        }
      ></div>
      <img
        className={active === true ? "carrousel-item__image" : "non-active"}
        src={img}
        alt="item-carrousel"
        loading="lazy"
      />
      <iframe
        className={
          activeVideo === true
            ? "carrousel-item__image carrousel-item__video"
            : "non-active"
        }
        width="100%"
        height="315"
        src={video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      {/* <video
        className={
          activeVideo === true ? "carrousel-item__image" : "non-active"
        }
        autoPlay
      >
        <source src={video} type="video/mp4" />
      </video> */}
    </div>
  );
}
