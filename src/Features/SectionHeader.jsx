import React from "react";
import "./SectionHeader.css"; 

function SectionHeader({ title, description }) {
  return (
    <header className="section-header">
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </header>
  );
}

export default SectionHeader;
