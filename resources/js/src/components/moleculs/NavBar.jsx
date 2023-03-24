import { NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";

export default function NavBar() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const { pathname } = useLocation();

  const classNavBarItem = {
    home:
      pathname === "/"
        ? "navbar-item__link navbar-item__active"
        : "navbar-item__link",
    about:
      pathname === "/about-me"
        ? "navbar-item__link navbar-item__active"
        : "navbar-item__link",
    faqs:
      pathname === "/faqs"
        ? "navbar-item__link navbar-item__active"
        : "navbar-item__link",
    servicesAndProducts:
      pathname === "/services-products"
        ? "navbar-item__link navbar-item__active"
        : "navbar-item__link",
    contactUs:
      pathname === "/contact-us"
        ? "navbar-item__link navbar-item__active"
        : "navbar-item__link",
    briefcase:
      pathname === "/briefcase"
        ? "navbar-item__link navbar-item__active"
        : "navbar-item__link",
  };

  return (
  
    <nav className="navbar">
      <ul
        className={
          menuIsActive ? "navbar-list navbar-list__active" : "navbar-list"
        }
      >
        <li>
          <NavLink className={classNavBarItem.home} to="/">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink className={classNavBarItem.about} to="/about-me">
            Acerca de
          </NavLink>
        </li>
        <li>
          <NavLink className={classNavBarItem.faqs} to="/faqs">
            FAQs
          </NavLink>
        </li>
        <li>
          <NavLink
            className={classNavBarItem.servicesAndProducts}
            to="/services-products"
          >
            Servicios y Productos
          </NavLink>
        </li>
        <li>
          <NavLink className={classNavBarItem.contactUs} to="/contact-us">
            Contáctanos
          </NavLink>
        </li>
        <li>
          <NavLink className={classNavBarItem.briefcase} to="/briefcase">
            Portafolio
          </NavLink>
        </li>
      </ul>
      <label className="navbar-label">
        <input
          onClick={(e) => setMenuIsActive(e.target.checked)}
          type="checkbox"
          className="navbar-checkbox"
        />
        <span className="line line-top"></span>
        <span className="line line-middle"></span>
        <span className="line line-bottom"></span>
      </label>
    </nav>
    
  );
}
