import React from "react";
import './BenefitCard.css'; 
const BenefitCard = ({icon, title, description }) => {
  return (
    <article className="benefit-card">
      <div className="icon-container">
        <div className="benefit-card-icon">
          <div className="icon-l">{icon}</div>
        </div>
      </div>
      <h3 className="benefit-card-title">{title}</h3>
      <p className="benefit-card-description">{description}</p>
    </article>
  );

};

export default BenefitCard;
