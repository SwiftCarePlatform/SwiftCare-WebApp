import React from "react";
import "./ProcessStep.css"; 


const ProcessStep = ({ title, description }) => {
  return (
    <article className="process-step">
      <h3 className="process-step-title">{title}</h3>
      <p className="process-step-description">{description}</p>
    </article>
  );
};

export default ProcessStep;
