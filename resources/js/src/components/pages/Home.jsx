import { ButtonElement, Card } from "../atoms";
import { Carrousel, Header } from "../organisms";
import { useLoading } from "../../hooks";
import CardImg1 from "../../assets/Photo (12).jpg";
import CardImg2 from "../../assets/Photo (14).jpg";
import CardImg4 from "../../assets/Photo (1).jpg";
import bloquesImg from "../../assets/bloques.jpeg";
import welcomeImg from "../../assets/welcome.jpeg";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../atoms/Loading";

export default function Home() {
  const { loading } = useLoading();
  const navigate = useNavigate();

  return loading ? (
    <>
      <Header />
      <div className="main-container home-container">
        <section className="carrousel-section">
          <Carrousel />
        </section>
        <section className="service-product__section">
          <div className="service-product__container">
            <div className="service-product__head">
              <span>Servicios y productos que proveemos</span>
              <h4>NUESTROS SERVICIOS Y PRODUCTOS</h4>
              <div className="tricolor-line mright"></div>
            </div>
            <div className="service-product__body">
              <div className="cards-container">
                <Card
                  description={
                    "Es un agregado fino, el cual resulta de la desintegración y abrasión de las rocas. Si se toma en cuenta su origen es posible clasificarla en silíceas y calizas."
                  }
                  title={"AGREGADOS TRITURADOS"}
                  img={CardImg1}
                />
                <Card
                  description={
                    "Elaborado con hormigones finos o morteros de cemento, utilizado en la construcción de muros y paredes."
                  }
                  title={"BLOQUES"}
                  img={bloquesImg}
                />
                <Card
                  description={
                    "Materia constituida por pequeños granos de mineral desprendidos de las rocas. Un producto limpio, compacto, durable y resistente."
                  }
                  title={"ARENA"}
                  img={CardImg2}
                />
                <Card
                  description={
                    "Entregas a domicilio de los productos que los clientes compran vía online o por medios telefónicos."
                  }
                  title={"DELIVERY"}
                  img={CardImg4}
                />
              </div>
            </div>
            <Link
              to="/services-products"
              className="btn btn-secondary btn-about"
            >
              <span>Ver más</span>
            </Link>
          </div>
        </section>
        <section className="about-section">
          <div className="about-container">
            <div className="about-title">
              <h2>¿QUIÉNES SOMOS?</h2>
            </div>
            <div className="about-body">
              <div className="about-description">
                <p>
                  Fundada en 2009, con accionistas totalmente nicaragüenses y
                  con 12 años de Experiencia, somos una empresa en el centro del
                  país comprometidos a proveer agregados de construcción de alta
                  calidad, tales como: Piedra triturada en diferentes medidas,
                  arena triturada y lavada, material selecto, entre otros de la
                  línea de agregados. También ofrecemos bloques de óptima
                  calidad, manufacturado con tecnología de punta y certificado
                  con los estándares nacionales y en las diferentes medidas que
                  la industria de la construcción requiere.
                </p>
              </div>
              <div className="about-image">
                <div className="image-container__about">
                  <img src={welcomeImg} alt="about" />
                </div>
              </div>
            </div>
            <ButtonElement
              onClick={() => navigate("/about-me")}
              text={"Acerca de"}
              className={"btn btn-secondary btn-about"}
            />
          </div>
        </section>
        {/* <section className="testify-section">
          <div className="testify-container">
            <div className="testify-text">
              <h3>TESTIMONIOS</h3>
              {testifies.map(({ id, text, name }) => (
                <ItemTestifyCarrousel
                  key={id}
                  text={text}
                  name={name}
                  className={autoIdx === id ? "slide-active" : "slide"}
                />
              ))}
            </div>
            <div className="testify-image__container"></div>
            <img src={TestifyImg} alt="testify" className="image-testify" />
          </div>
        </section> */}
      </div>
    </>
  ) : (
    <Loading />
  );
}
