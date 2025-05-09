import React from "react";
import { FiCircle, FiCheckCircle } from "react-icons/fi";
import "./ForgotPassword.css";

const steps = [1, 2, 3, 4];

const ProgressSteps = ({ currentStep }) => {
  return (
    <div className="progress-container">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="step-icon">
            {currentStep >= step ? (
              <FiCheckCircle className="progress-active" />
            ) : (
              <FiCircle />
            )}
          </div>
          {index !== steps.length - 1 && <div className="step-line" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressSteps;