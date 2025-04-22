import React from "react";
import Header from "../Header/Header";
import "./Consult.css";
import consultImage from "../assets/consultImage.png";
import HowSwiftcareWorks from "../HeroSection2/HowSwiftcareWorks";
import Faq from "../FaQuestion/FAQ";
import Footer from "../Footer/Footer";
import Section from "../Framer/FramerSection";

const ConsultPage = () => {
  return (
    <>
      <Header />
      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.1 }}
      >
      <section className="consult-section">
        <div className="consult-text">
          <h1>
            Healthcare at Home – Talk to <br /> Doctors Anytime
          </h1>
          <p>
            Experience seamless virtual consultations and immediate assistance
            at <br />
            your finger tips ensuring that your health is always priotized.
          </p>
          <button className="consult-button">Book virtual consultation</button>
        </div>
        <div className="consult-container">
          <img src={consultImage} alt="Consult Dcotor" className="consult-image" />
        </div>
      </section>
      </Section>
      <Section
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.2 }}
        >
      <HowSwiftcareWorks/>
      </Section>
      <Section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.3 }}
        >
      <Faq/>
      </Section>

      <Section
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.4 }}
        >
      <Footer/>
      </Section>
    </>
  );
};

export default ConsultPage;
