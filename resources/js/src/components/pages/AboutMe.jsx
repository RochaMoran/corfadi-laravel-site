import { ButtonElement, Loading } from "../atoms";
import { HeadPageTitle } from "../atoms";
import { Header } from "../organisms";
import imgMision from "../../assets/mision.jpeg";
import imgVision from "../../assets/Photo (4).webp";
import imgFooter from "../../assets/Photo (16).webp";
import whoAreImg from "../../assets/about-who-are.webp";
import React from "react";
import { useLoading } from "../../hooks";
import { useNavigate } from "react-router-dom";

export default function AboutMe() {
  const { loading } = useLoading();
  const navigate = useNavigate();
  return loading ? (
    <>
      <Header />
      <HeadPageTitle title="Acerca de" />
      <section className="main">
        <article className="about-who__are">
          <div className="who-are__content">
            <h3>¿Quiénes somos?</h3>
            <p>
              Fundada en 2009, con accionistas totalmente nicaragüenses y con 12
              años de Experiencia, somos una empresa en el centro del país
              comprometidos a proveer agregados de construcción de alta calidad,
              tales como: Piedra triturada en diferentes medidas, arena
              triturada y lavada, material selecto, entre otros de la línea de
              agregados. También ofrecemos bloques de óptima calidad,
              manufacturado con tecnología de punta y certificado con los
              estándares nacionales y en las diferentes medidas que la industria
              de la construcción requiere.
            </p>
            <p>
              Nuestra fe nos inspira a ser una empresa responsable, dinámica,
              confiable y humana, que no sólo ayude a construir el legado para
              las futuras generaciones, sino también, dejar nuestra esencia y
              valores en cada entrega, cumpliendo en tiempo y forma con nuestros
              clientes y nuestros principios.
            </p>
          </div>
          <img src={whoAreImg} alt="testify" className="image-who__are" />
        </article>
        <article className="about-mision">
          <div className="about-description about-mision__item">
            <div className="about-title">
              <h2>MISIÓN</h2>
              <div className="tricolor-line tricolor-line__mision"></div>
            </div>
            <p>
              Contribuir y proveer a la indistria de construcción del Norte del
              país con agregados de construcción de calidad y accesibilidad a la
              economia Nicaragüense.
            </p>
          </div>
          <img
            src={imgMision}
            className="about-mision__image about-mision__item"
            alt="mision"
          />
        </article>
        <article className="about-mision about-vision">
          <img
            src={imgVision}
            className="about-mision__image about-mision__item"
            alt="vision"
          />
          <div className="about-description about-mision__item">
            <div className="about-title">
              <h2>VISIÓN</h2>
              <div className="tricolor-line tricolor-line__mision"></div>
            </div>
            <p>
              Caminar de la mano con el avance de la industria de la
              construcción de nuestro país, satisfaciendo sus demandas,
              aplicando y adaptando a las nuevas tecnologías y, juntos crecer
              para ser líderes en este ámbito, no solamente del Norte, sino de
              todo el país.
            </p>
          </div>
        </article>
        <article className="about-values">
          <div className="values-container">
            <div className="values-title">
              <h2>VALORES</h2>
            </div>
            <div className="values-body">
              <div className="values-description">
                <p>
                  El compromiso que asumimos en cada pedido de nuestros
                  clientes, nos lleva a implementar protocolos y estándares de
                  seguridad, para que nuestros trabajadores estén seguros
                  mientras realizan su jornada; además, debido a la ubicación
                  del plantel, nos aseguramos que cada uno de ellos vuelvan a
                  sus hogares sanos y seguros.
                </p>
                <p>
                  También ejercemos una operación amigable con el medio
                  ambiente, enfocado en la reforestación, así como en la buenas
                  relaciones laborales y prácticas, basadas en la integridad y
                  la honestidad.
                </p>
              </div>
            </div>
            <ButtonElement
              onClick={() => navigate("/briefcase")}
              text={"Portafolio"}
              className={"btn btn-secondary btn-about"}
            />
          </div>
        </article>
        <article className="about-image__footer">
          <img src={imgFooter} alt="about" />
        </article>
      </section>
    </>
  ) : (
    <Loading />
  );
}
