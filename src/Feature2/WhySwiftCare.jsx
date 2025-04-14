import React from "react";
import SectionHeading from "./SectionHeading";
import SwiftCareLogo from "./SwiftCareLogo";
import BenefitCard from "./BenefitCard";
import './WhySwiftCare.css'
import { FaUserDoctor } from "react-icons/fa6";
<FaUserDoctor />

const WhySwiftCare = () => {

  const benefitCards = [
    {
      icon:<FaUserDoctor className="icon-l"/>,
      title: "Acccessibility",
      description: "Available wherever you are, because healing should never feel out of reach.",
    },

    {
      icon: <FaUserDoctor className="icon-l" />,
      title: "Reliability",
      description: "Secure, private and always there, so you can trust every step forward.",
    },
    {
      icon: <FaUserDoctor  className="icon-l"/>,
      title: "Convenience",
      description: "Designed for your life, so support fits seamlessly into your moments of need.",
    },
  ];

  return (
    <section className="custom-section">
    <div className="container">
      <SectionHeading
        title="Why"
        highlightedText="swiftcare"
        description="We don't just offer -we blend advanced technology with support, safeguarding memories and guiding healing so your journey through grief is met with compassion, resilience, and enduring connection."
      />

      <div className="logo-container">
        <SwiftCareLogo />
      </div>

      <div className="benefit-cards-container">
        {benefitCards.map((card, index) => (
          <BenefitCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  </section>
  );
};

export default WhySwiftCare;
