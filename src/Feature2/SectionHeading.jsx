import React from "react";
import './SectionHeading.css';

const SectionHeading = ({ title, highlightedText, description }) => {
  return (
    <header className="section-heading">
    <h1 className="section-heading-title">
      <span>{title}</span>
      <span className="highlighted-text">{highlightedText}</span>
    </h1>
    <p className="section-heading-description">
      {description}
    </p>
  </header>
  );
};

export default SectionHeading;
