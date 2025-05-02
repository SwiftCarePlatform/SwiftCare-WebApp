import React from "react";
import "./Mental.css";

function MentalCard({ title, description, features }) {
  return (
    <article className=" mental-card">
      <div className=" mental-card-content">
        <h2 className="mental-title">{title}</h2>
        <p className="mental-description">{description}</p>
        <ul className="mental-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="mental-button">Join Now</button>
      </div>
    </article>
  );
}

export default MentalCard;
