import { HeadPageTitle, Card, Loading } from "../atoms";
import { CardsData } from "../../data/CardsData";
import { Header } from "../organisms";
import React from "react";
import { useLoading } from "../../hooks";

export default function ServicesAndProducts() {
  const { loading } = useLoading();
  return loading ? (
    <>
      <Header />
      <HeadPageTitle title="Servicios y productos" />
      <section className="main">
        <div className="service-product__head">
          <span>Servicios y productos que proveemos</span>
          <h4>NUESTROS SERVICIOS Y PRODUCTOS</h4>
          <div className="tricolor-line mright"></div>
        </div>
        <div className="products-container">
          {CardsData.map(({ id, text, title, image, list }) => (
            <Card
              className="card-container card-products"
              key={id}
              description={text}
              title={title}
              img={image}
              list={list}
            />
          ))}
        </div>
      </section>
    </>
  ) : (
    <Loading />
  );
}
