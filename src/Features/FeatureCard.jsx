import React from "react";
import "./FeatureCard.css"; 


function FeatureCard({ icon, title, description }) {
  return (
    <article className="feature-card">
    <div className="feature-icon-wrapper">
      <div className="feature-icon-bg" />
      {icon && <div className="feature-icon">{icon}</div>}
    </div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </article>
  );
}

export default FeatureCard;
