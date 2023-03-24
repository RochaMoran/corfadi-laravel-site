import React from "react";

export default function Icon({ icon, title, description }) {
  return (
    <div className="specialize">
      <div className="icon-header">
        <img src={icon} alt={title} className="icon-img" />
      </div>
      <div className="icon-title">
        <h4>{title}</h4>
      </div>
      <div className="icon-body">
        <p>{description}</p>
      </div>
    </div>
  );
}
