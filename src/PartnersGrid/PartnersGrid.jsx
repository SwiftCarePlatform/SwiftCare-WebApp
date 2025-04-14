import React from "react";
import "./PartnersGrid.css";

// First row logos
import wavelogo from "../assets/Waver.png";
import wavetext from "../assets/Waverio.png";
import ipsumLogo from "../assets/ipsumLogo.png";
import ipsum from "../assets/ipsum.png";
import AlterLogo from "../assets/alogo.png";
import Alterbone from "../assets/Alterbone.png";

// Second row logos
import TinyLogo from "../assets/TinyLogo.png";
import Tinygone from "../assets/Tinygone.png";
import PresoLogo from "../assets/PresoLogo.png";
import Preso from "../assets/Preso.png";
import RidoriaLogo from "../assets/RidoriaLogo.png";
import Ridoria from "../assets/Ridoria.png";

// Third row logos
import CarboniaLogo from "../assets/CarboniaLogo.png";
import carbonia from "../assets/carbonia.png";
import IncantoLogo from "../assets/IncantoLogo.png";
import Incanto from "../assets/Incanto.png";

function PartnersGrid() {
  return (
    <div className="partners-container">
      <div className="partners-header">
        <h1>Popular partners using swiftcare</h1>
      </div>
      
      <div className="partners-grid">
        {/* First row */}
        <div className="logo-pair">
          <img src={wavelogo} alt="Wave Logo" className="logo-img" />
          <img src={wavetext} alt="Waverio" className="text-img" />
        </div>
        
        <div className="logo-pair">
          <img src={ipsumLogo} alt="Ipsum Logo" className="logo-img" />
          <img src={ipsum} alt="LOGOIPSUM" className="text-img" />
        </div>
        
        <div className="logo-pair">
          <img src={AlterLogo} alt="Alter Logo" className="logo-img" />
          <img src={Alterbone} alt="Alterbone" className="text-img" />
        </div>
        
        {/* Second row */}
        <div className="logo-pair">
          <img src={TinyLogo} alt="Tiny Logo" className="logo-img" />
          <img src={Tinygone} alt="Tinygone" className="text-img" />
        </div>
        
        <div className="logo-pair">
          <img src={PresoLogo} alt="Preso Logo" className="logo-img" />
          <img src={Preso} alt="PRESO" className="text-img" />
        </div>
        
        <div className="logo-pair">
          <img src={RidoriaLogo} alt="Ridoria Logo" className="logo-img" />
          <img src={Ridoria} alt="Ridoria" className="text-img" />
        </div>
        
        {/* Third row */}
        <div className="logo-pair">
          <img src={CarboniaLogo} alt="Carbonia Logo" className="logo-img" />
          <img src={carbonia} alt="carbonia" className="text-img" />
        </div>
        
        <div className="logo-pair">
          <img src={IncantoLogo} alt="Incanto Logo" className="logo-img" />
          <img src={Incanto} alt="Incanto" className="text-img" />
        </div>
      </div>
    </div>
  );
}

export default PartnersGrid;