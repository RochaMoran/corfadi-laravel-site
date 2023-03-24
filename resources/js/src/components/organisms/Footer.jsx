import { AiOutlineInstagram } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { Link } from "react-router-dom";
import React from "react";

export default function Footer() {
  return (
    // START FOOTER
    <footer className="main-footer">
      <section className="main-footer__section main-footer__top">
        <article className="footer-center__items">
          <article className="footer-section__home">
            <ul className="footer-section__list">
              <li>
                <h6>Inicio</h6>
              </li>
              <li>
                <Link to="/about-me">
                  <span className="item-name">Acerca de</span>
                </Link>
              </li>
              <li>
                <Link to="/services-products">
                  <span className="item-name">Servicios</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs">
                  <span className="item-name">FAQs</span>
                </Link>
              </li>
            </ul>
          </article>
          <article className="footer-section__resources">
            <ul className="footer-section__list">
              <li>
                <h6>Recursos</h6>
              </li>
              <li>
                <Link to="/contact-us">
                  <span className="item-name">Contáctanos</span>
                </Link>
              </li>
              <li>
                <Link to="/about-me">
                  <span className="item-name">Acerca de</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs">
                  <span className="item-name">FAQs</span>
                </Link>
              </li>
            </ul>
          </article>
          <article className="footer-section__otherResources">
            <ul className="footer-section__list">
              <li>
                <h6>Contáctanos</h6>
              </li>
              <li>
                <span>
                  CORFADI, Chagüitillo, Matagalpa, <br /> Nicaragua
                </span>
              </li>
              <li>
                <span>Correo: facturacion@corfadi.com</span>
              </li>
              <li>
                <span>
                  Teléfonos:{" "}
                  <ul className="phones-footer">
                    <li>
                      <span>Claro:</span> 8425-9352
                    </li>
                    <li>
                      <span>Tigo:</span> 8153-0442
                    </li>
                  </ul>
                </span>
              </li>
            </ul>
          </article>
        </article>
        <article className="footer-section__social">
          <div className="footer-social__container">
            <a
              href="https://www.facebook.com/profile.php?id=100085048399458"
              className="footer-social__item"
              target="__blank"
            >
              <span className="icon-social icon-circle">
                <ImFacebook />
              </span>
            </a>
            <a
              href="https://www.instagram.com/corfadi1/"
              className="footer-social__item"
              target="__blank"
            >
              <span className="icon-social icon-circle">
                <AiOutlineInstagram />
              </span>
            </a>
            {/* <a href="/" className="footer-social__item">
              <span className="icon-social no-circle">
                <FaWhatsapp />
              </span>
            </a> */}
          </div>
          <div></div>
        </article>
      </section>
      <div className="main-footer__bottom">
        <p className="main-footer__paragraph main-footer__firstParagraph">
          {/* <a href="privacy.html">PRIVACIDAD | TERMINOS DE USO |</a>  */}
          Sitio desarrollado por{" "}
          <span className="footer-span__resalt">SoftLore</span>
        </p>
        <p className="main-footer__paragraph main-footer__lastParagraph">
          Copyrights © 2022 CORFADI. Todos los derechos reservados. <br />{" "}
          Ofrecemos bloques de optima calidad, manufacturacion con tecnologia de
          punta y certificado con los estandares nacionales y en las diferentes
          medidas que la industria de la construccion requiere.
        </p>
      </div>
    </footer>
    // END FOOTER
  );
}
