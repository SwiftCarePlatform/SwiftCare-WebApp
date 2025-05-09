import React from "react";
import ProgressSteps from "./ProgressSteps";
import EmailForm from "./Email";
import StepTwo from "./OTP/StepTwo";
import "./ForgotPassword.css";

function RightPanel({ currentStep, setCurrentStep }) {
  const handleStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <section className="right-panel">
      <ProgressSteps currentStep={currentStep} />
      {currentStep === 1 && <EmailForm onNext={handleStep} />}
      {currentStep === 2 && <StepTwo/>}
    </section>
  );
}

export default RightPanel;