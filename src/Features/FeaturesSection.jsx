import React from "react";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";
import ExploreButton from  "./ExploreButton";
import "./FeaturesSection.css";
import {  FaPhone,  FaBrain,  FaUsers, FaLock } from 'react-icons/fa6';
import { IoVideocam } from "react-icons/io5";




// Feature data
const features = [
  {
    icon: <IoVideocam  className='feature-icon'/>,
    title: "Virtual Medical Consultation",
    description: "Expert care from the comfort of home.",
  },
  {
    icon: <FaPhone className='feature-icon' />,
    title: "Emergency Helpline Integration",
    description: "Immediate help, day or night.",
  },
  {
    icon: <FaBrain className="feature-icon"/>,
    title: "Mental Health Therapy Services",
    description: "Your journey to emotional wellness starts here.",
  },
  {
    icon: <FaUsers className="feature-icon"/>,
    title: "Peer group support",
    description: "Strength in shared stories.",
  },
  {
    icon: <FaLock className="feature-icon"/>,
    title: "Secure Data storage and privacy",
    description: "Your trust is our priority.",
  },
];

function FeaturesSection() {
  return (
    <section className="features-section gradient">
      <div className="features-wrapper">
        <SectionHeader
          title="Our features/Services"
        />

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <ExploreButton/>
      </div>
    </section>
  );
}

export default FeaturesSection;
