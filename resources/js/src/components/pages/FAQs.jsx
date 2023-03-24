import { HeadPageTitle, Faq, Loading } from "../atoms";
import { Header } from "../organisms";
import React from "react";
import { useLoading } from "../../hooks";

export default function FAQs() {
  const { loading } = useLoading();
  return loading ? (
    <>
      <Header />
      <HeadPageTitle title="Preguntas frecuentes (FAQs)" />
      <div className="main main-container faqs-container">
        <section className="general-business__section">
          <div className="general-head__section">
            <h4>ASUNTOS GENERALES</h4>
            <div className="tricolor-line tricolor-line__providers-to__state"></div>
          </div>
          <div className="general-content__section">
            <p>
              No importa cuánta información publiqué, siempre quedarán algunas
              preguntas. Esperamos poder ayudarte. Sin embargo, antes de
              comunicarse con nosotros, consulte la siguiente lista de las
              preguntas más frecuentes. Esto nos dará más tiempo para responder
              detalles específicos y le ahorrará esperar nuestra respuesta.
            </p>
          </div>
        </section>
        <section>
          <div className="faqs-head__section">
            <h4>FAQS</h4>
          </div>
          <div className="faqs-content__section">
            <div className="faqs-content-left">
              <Faq
                question="¿Se cumple con todos los requisitos legales?"
                response="Contamos con autorización de Mina, DGI y alcaldía. Estamos inscritos como proveedores del estado."
              />
              <Faq
                question="¿Cuáles son los horarios laborales?"
                response="De lunes a viernes trabajamos de 6:40 am a 4:30 pm y el sábado 6:40 am a 12:30 pm"
              />
              <Faq
                question="¿Formas de pago?"
                list={["Transferencias", "Cheques", "Efectivo"]}
              />
            </div>
            <div className="faqs-content-right">
              <Faq
                question="¿Cumplen con las normas impuestas por el MTI?"
                response="Sí, todas las ASTM que exige la ley y lo comprobamos con certificado de calidad. También cumplimos con las normas de plan ambiental (minas, marena)"
              />
              <Faq
                question="¿Cuentan con transporte disponible?"
                response="Sí, contamos con una flota vehicular para realizar transporte al sitio que el cliente lo solicite."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  ) : (
    <Loading />
  );
}
