import React from "react";

export default function ButtonElement({ text, ...rest }) {
  return (
    <button className="btn" {...rest}>
      <span>{text}</span>
    </button>
  );
}
