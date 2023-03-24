import { Header, Banner } from "../organisms";
import { ItemSpecializa } from "../moleculs";
import React from "react";
import { useLoading } from "../../hooks";
import { Loading } from "../atoms";

export default function Briefcase() {
  const { loading } = useLoading();
  return loading ? (
    <>
      <Header />
      <Banner />
      <div className="main main-container briefcase-container">
        <section className="supplier__section providers-state">
          <div className="supplier-head__section">
            <h4>PROVEEDORES DEL ESTADO</h4>
            <div className="tricolor-line tricolor-line__providers-to__state"></div>
          </div>
          <div className="supplier-content__section">
            <p>
              Brindando una completa disposición de nuestros servicios y
              productos al estado, facilitándole de esta manera el acceso para
              la construcción y elaboración de distintos proyectos los cuales
              beneficien de forma directa a la ciudadania nicaragüense.
            </p>
          </div>
        </section>
        <section className="specialize__section">
          <ItemSpecializa />
        </section>
      </div>
    </>
  ) : (
    <Loading />
  );
}
