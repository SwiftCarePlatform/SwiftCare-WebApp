import React from "react";
import SupportCard from "./SupportCard";
import "./Health.css";
import communityImage from "../assets/community.jpg";
import Header from "../Header/Header";
import Section from "../Framer/FramerSection";
import HowSwiftcareWorks from "../HeroSection2/HowSwiftcareWorks";
import Faq from "../FaQuestion/FAQ";
import Footer from "../Footer/Footer";

function HealthSupport() {
  const supportDetails = [
    {
      title: "Join a support Group",
      description:
        "Connect with others in moderated weekly chat/audio sessions.",
      features: ["Facilitator", "Safe environment", "Mutual supports"],
    },
    {
      title: "Digital tribute",
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
          className="grief-section"
          style={{
            backgroundImage: `url(${communityImage})`,
          }}
        >
          <div className="grief-container">
            <h1 className="grief-heading">
              Grief is deeply personal, but you don't have to carry it alone.
              Join a safe, understanding space where you can connect with
              others, share your experience, and begin healing together.
            </h1>
            <div className="card-wrapper">
              {supportDetails.map((option, index) => (
                <SupportCard
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
  );
}

export default HealthSupport;
