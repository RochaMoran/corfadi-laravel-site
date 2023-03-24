import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import React from "react";

export default function ItemTestifyCarrousel({ text, name, className }) {
  return (
    <>
      <div className={className}>
        <span className="quote-left">
          <FaQuoteLeft />
        </span>
        <p>{text}</p>
        <span className="quote-right">
          <FaQuoteRight />
        </span>
        <h4>{name}</h4>
      </div>
    </>
  );
}
