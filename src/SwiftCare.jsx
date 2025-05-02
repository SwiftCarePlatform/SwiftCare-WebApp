import React from "react";
import Section from "./Framer/FramerSection";
import Header from "./Header/Header";
import "./index.css";
import HeroSection from "./HeroSection/Hero";
import HowSwiftcareWorks from "./HeroSection2/HowSwiftcareWorks";
import FeaturesSection from "./Features/FeaturesSection";
import WhySwiftCare from "./Feature2/WhySwiftCare";
import Footer from "./Footer/Footer";
import PartnersGrid from "./PartnersGrid/PartnersGrid";
import ScrollToTop from "./Scroll/ScrollToTop";
import Login from "./LoginPage/Login";
// import Login from "./LoginSection/Login";
// import Register from "./LoginSection/register";

import Faq from "./FaQuestion/FAQ";

const SwiftCare = () => {
  return (
    <>
      <Header />

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.1 }}
      >
        <HeroSection />
      </Section>

      <Section
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.2 }}
      >
        <HowSwiftcareWorks />
      </Section>

      <Section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.3 }}
      >
        <FeaturesSection />
      </Section>

      <Section
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.4 }}
      >
        <WhySwiftCare />
      </Section>

      <Section
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.5 }}
      >
        <Faq />
      </Section>

      <Section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.6 }}
      >
        <PartnersGrid />
      </Section>

      <Section
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.3,
          ease: [0.25, 0.8, 0.25, 1],
          delay: 0.7,
        }}
      >
        <Footer />
      </Section>

      <ScrollToTop />
    </>
  );
};

export default SwiftCare;
