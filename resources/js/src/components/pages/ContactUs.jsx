import { ButtonElement, HeadPageTitle, Loading } from "../atoms";
import { Header } from "../organisms";
import wIcon from "../../assets/src (4).png";
import socialImg from "../../assets/Photo (16).webp";
import React, { useState, useRef } from "react";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { ImFacebook } from "react-icons/im";
import { useLoading } from "../../hooks";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const { loading } = useLoading();
  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const [data, setData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });

  const form = useRef();

  const emailSend = (e) => {
    e.preventDefault();

    if (
      data.from_name === "" ||
      data.from_email === "" ||
      data.phone === "" ||
      data.message === ""
    ) {
      setResponse({
        type: "error",
        message:
          "Por favor completa todos los campos. Ningún campo puede quedar vacío.",
      });
      console.log("no");
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            result.text === "OK" &&
              setResponse({
                type: "success",
                message: "Mensaje enviado con exito.",
              });
          },
          (_error) => {
            setResponse({
              type: "error",
              message: "Ha ocurrido un error al enviar el mensaje.",
            });
          }
        );
    }

    setTimeout(() => {
      setResponse({ type: "", message: "" });
    }, 5000);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return loading ? (
    <>
      <Header />
      <HeadPageTitle title="Contáctanos" />
      <div className="main-container contactus-container">
        <section className="title-section">
          <div className="title-content__container">
            <div className="title-content__head">
              <h3>CONéCTATE CON NOSOTROS</h3>
              <div className="tricolor-line line-width"></div>
            </div>
            <div className="description-container__title">
              <p>
                ¡Queremos escuchar de ti! Complete nuestro formulario y nos
                pondremos en contacto con usted dentro de las 48 horas hábiles.
              </p>
            </div>
          </div>
        </section>
        <section className="form-section">
          <div className="form-section__container">
            <div className="form-section__header">
              <h3>Centro de ayuda</h3>
            </div>
            <div className="form-section__body">
              <div className="info-contact__container">
                <div className="info-contact__side">
                  <img src={wIcon} alt="woman" className="wIcon" />
                  <div className="info-container">
                    <div className="info-content">
                      <span>
                        <GoLocation />
                      </span>
                      <p>
                        CORFADI, Chagüitillo
                        <br />
                        Matagalpa, Nicaragua
                      </p>
                    </div>
                    <div className="info-content">
                      <span>
                        <BsFillTelephoneFill />
                      </span>
                      <p>(505) 27754808</p>
                    </div>
                    <div className="info-content">
                      <span>
                        <AiOutlineMail />
                      </span>
                      <p>facturacion@corfadi.com</p>
                    </div>
                  </div>
                </div>
                <div className="form-contact__side">
                  <div className="form-container">
                    <form
                      className="contact-form"
                      autoComplete="new-password"
                      ref={form}
                      onSubmit={emailSend}
                    >
                      <div className="input-container">
                        <input
                          type="text"
                          className="input"
                          name="from_name"
                          placeholder="Ingrese su nombre*"
                          autoComplete="off"
                          onChange={(e) => handleChange(e)}
                        />
                        <div className="icon-container">
                          <FaRegUser />
                        </div>
                      </div>
                      <div className="input-container">
                        <input
                          type="email"
                          className="input"
                          name="from_email"
                          placeholder="Ingrese su correo*"
                          autoComplete="off"
                          onChange={(e) => handleChange(e)}
                        />
                        <div className="icon-container">
                          <AiOutlineMail />
                        </div>
                      </div>
                      <div className="input-container">
                        <input
                          type="text"
                          className="input"
                          name="phone"
                          placeholder="Ingrese su telefono*"
                          autoComplete="off"
                          onChange={(e) => handleChange(e)}
                        />
                        <div className="icon-container">
                          <BsTelephone />
                        </div>
                      </div>
                      <div className="input-container">
                        <textarea
                          type="text"
                          className="input input-sms"
                          name="message"
                          placeholder="Ingrese su mensaje*"
                          autoComplete="off"
                          onChange={(e) => handleChange(e)}
                        ></textarea>
                        <div className="icon-container">
                          <AiOutlineMail />
                        </div>
                      </div>
                      <ButtonElement
                        className="btn btn-secondary wide-btn btn-send__message"
                        text={"Enviar mensaje"}
                      />
                    </form>
                    <div className="form-text__container">
                      <p>
                        Al enviar su direccion de correo electrónico, reconoce
                        que ha leído
                        <br />
                        la política de privacidad y que acepta nuestro
                        procesamiento de
                        <br />
                        acuerdo con la declaración de privacidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map-section">
          <article className="contact-us__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899555.6306247807!2d-86.09413885598958!3d12.993602898513569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f72310d1195d01b%3A0xba05c1baf8c48356!2sCORFADI%20(%20OFICINAS%20)!5e0!3m2!1ses!2sni!4v1661114425328!5m2!1ses!2sni"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              loading="lazy"
              title="no"
            />
          </article>
        </section>
        <section className="social-media__section">
          <div className="social-media__container">
            <h3>Síguenos en las redes sociales</h3>
            <div className="social-media__icon-container">
              <a
                href="https://www.facebook.com/profile.php?id=100085048399458"
                target="__blank"
                className="social-media__icon"
              >
                <ImFacebook />
              </a>
              <a
                href="https://www.instagram.com/corfadi1/"
                target="__blank"
                className="social-media__icon"
              >
                <AiOutlineInstagram />
              </a>
            </div>
            <div className="image-transparent"></div>
            <img src={socialImg} alt="bg" className="social-media__image-bg" />
          </div>
        </section>
        {response.type && (
          <p
            className={
              response.type === "success"
                ? "message message-success"
                : "message message-error"
            }
          >
            {response.message}
          </p>
        )}
      </div>
    </>
  ) : (
    <Loading />
  );
}
