import React from "react";

export default function Card({ img, title, description, list, ...rest }) {
  return (
    <div className="card-container" {...rest}>
      <div className="card-header">
        <img src={img} alt={title} className="card-img" />
      </div>
      <div className="card-title">
        <h4>{title}</h4>
      </div>
      <div className="card-body">
        <p>{description}</p>
        {list && (
          <ul className="card-body__list">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
