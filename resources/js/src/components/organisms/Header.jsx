import { NavLink } from "react-router-dom";
import { NavBar } from "../moleculs";
import logo from "../../assets/logo.webp";
import WasaLogo from "../../assets/whatsapp_4.png";
import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="head-content">
        <NavLink className="header-logo" to="/">
          <img
            className="header-top__logo"
            src={logo}
            alt="logo"
            loading="lazy"
          />
        </NavLink>
        <a
          className={"btn main-btn btn-secondary"}
          href="mailto:facturacion@corfadi.com"
        >
          <span>Solicitar Presupuesto</span>
        </a>
      </div>
      <NavBar />
      <a
        href="https://wa.me/+50584259352?text=¡Estoy+interesado!"
        className="whatsapp-logo__container"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={WasaLogo} alt="wasaLogo" />
      </a>
    </header>
  );
}
