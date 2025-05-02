import React from "react";
import { FiCircle, FiCheckCircle } from "react-icons/fi";
import "./Login.css";

const steps = [1, 2, 3, 4];

const ProgressiveSteps = ({ currentStep }) => {
  return (
    <div className="progressive-container">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="progressive-icon">
            {currentStep >= step ? (
              <FiCheckCircle className="progressive-active" />
            ) : (
              <FiCircle />
            )}
          </div>
          {index !== steps.length - 1 && <div className="progressive-line" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressiveSteps;