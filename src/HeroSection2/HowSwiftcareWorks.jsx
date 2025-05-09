import React from "react";
import ProcessStep from "./ProcessStep";
import "./HowSwiftcareWorks.css"; 

const HowSwiftcareWorks = () => {
  const processSteps = [
    {
      title: "Create an account",
      description:
        "Sign up in minutes for free, personalized access.",
    },
    {
      title: "Choose a service ~ Medical & Grief",
      description:
        "Select medical care, grief counseling, or both.",
    },
    {
      title: "Connect Instantly/Schedule Support",
      description:
        "Book sessions or virtual meetings on your terms.",
    },
    {
      title: "Join a safe community",
      description:
        "Connect with others who understand, share and uplift.",
    },
  ];

  return (
    <section className="how-swiftcare-section">
      <div className="how-swiftcare-container">
        <div className="how-swiftcare-left">
          <h2 className="how-swiftcare-title">
            <span>How </span>
            <span className="highlight">Swiftcare</span>
            <span> works</span>
          </h2>
          <p className="how-swiftcare-description">
            Your path to healthcare and support without barriers starts here...
          </p>
          <button className="how-swiftcare-button">Book a call</button>
        </div>
        <div className="how-swiftcare-right">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowSwiftcareWorks;
