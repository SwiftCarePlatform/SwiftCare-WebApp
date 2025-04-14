import React from "react";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";
import ExploreButton from  "./ExploreButton";
import "./FeaturesSection.css";
import { FaChartLine, FaPhone, FaCreditCard, FaBrain, FaStar, FaUsers, FaLock } from 'react-icons/fa6';
import { IoVideocam } from "react-icons/io5";




// Feature data
const features = [
  {
    icon: <IoVideocam  className='feature-icon'/>,
    title: "Virtual Medical Consultation",
    description: "Convenient, remote access to medical professionals.",
  },
  {
    icon: <FaPhone className='feature-icon' />,
    title: "Emergency Helpline Integration",
    description: "Convenient, remote access to medical professionals.",
  },
  {
    icon: <FaBrain className="feature-icon"/>,
    title: "Mental Health Therapy Services",
    description: "Convenient, remote access to medical professionals.",
  },
  {
    icon: <FaUsers className="feature-icon"/>,
    title: "Peer group support",
    description: "Convenient, remote access to medical professionals.",
  },
  {
    icon: <FaChartLine className="feature-icon"/>,
    title: "Personalized dashboard",
    description: "Convenient, remote access to medical professionals.",
  },
  {
    icon: <FaCreditCard className="feature-icon"/>,
    title: "Payment and billing",
    description: "Convenient, remote access to medical professionals.",
  },
  {
    icon: <FaStar className="feature-icon"/>,
    title: "Feedback and rating system",
    description: "Convenient, remote access to medical professionals.",
  },
  {
    icon: <FaLock className="feature-icon"/>,
    title: "Secure Data storage and privacy",
    description: "Convenient, remote access to medical professionals.",
  },
];

function FeaturesSection() {
  return (
    <section className="features-section gradient">
      <div className="features-wrapper">
        <SectionHeader
          title="Our features/Services"
          description="Lorem ipsum dolor sit amet consectetur. Eu id vitae nibh sit ultricies blandit. In lorem molestie mi massa pretium."
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
