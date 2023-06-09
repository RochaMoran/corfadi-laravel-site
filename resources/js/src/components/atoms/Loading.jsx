import React from "react";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
        <p>Cargando...</p>
      </div>
    </div>
  );
}
