import React from "react";
import "./Mental.css";
import communityImage from "../assets/community.jpg";
import Header from "../Header/Header";
import Section from "../Framer/FramerSection";
import HowSwiftcareWorks from "../HeroSection2/HowSwiftcareWorks";
import Faq from "../FaQuestion/FAQ";
import Footer from "../Footer/Footer";
import MentalCard from "./MentalServiceCard";

function MentalService() {
  const mentalDetails = [
    {
      title: "1-1 Grief counseling",
      description:
        "Connect with others in moderated weekly chat/audio sessions.",
      features: ["Facilitator", "Safe environment", "Mutual supports"],
    },
    {
      title: "Healing resources",
      description: "Upload pictures and videos of your loved ones and moments.",
      features: [
        "Upload Pictures",
        "Video supported platform",
        "Safe environment",
      ],
    },
  ];

  return (
    <>
      <Header />
      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.2 }}
      >
        <section
          className="mental-section"
          style={{
            backgroundImage: `url(${communityImage})`,
          }}
        >
          <div className="mental-container">
            <h1 className="mental-heading">
             Mental health
            </h1>
            <div className="mental-card-wrapper">
              {mentalDetails.map((option, index) => (
                <MentalCard
                 key={index}
                  title={option.title}
                  description={option.description}
                  features={option.features}
                />
              ))}
            </div>
          </div>
        </section>
      </Section>
      <Section
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.3 }}
      >
        <HowSwiftcareWorks />
      </Section>
      <Section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.4 }}
      >
        <Faq />
      </Section>
      <Section
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.5 }}
      >
        <Footer />
      </Section>
    </>
  )
    }

export default MentalService;
