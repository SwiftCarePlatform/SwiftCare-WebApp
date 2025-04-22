import React from "react";
import "./Health.css";

function SupportCard({ title, description, features }) {
  return (
    <article className="support-card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <ul className="card-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="join-button">Join Now</button>
      </div>
    </article>
  );
}

export default SupportCard;
