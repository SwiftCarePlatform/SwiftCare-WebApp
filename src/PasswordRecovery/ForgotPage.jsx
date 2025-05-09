import React, { useState } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import "./ForgotPassword.css";
import StepTwo from "./OTP/StepTwo";
import StepThree from "./NewPassword/StepThree";
import StepFour from "./SecurePassword/StepFour";

function ForgotPasswordPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className="forgot-password">
      {/* Conditionally render LeftPanel and StepTwo based on currentStep */}
      {currentStep === 1 && (
        <>
          <LeftPanel />
          <RightPanel
            currentStep={currentStep}
            setCurrentStep={setCurrentStep} // Pass the setter function to manage steps
          />
          
        </>
      )}

      {/* Only render StepTwo when the current step is 2 */}
      {currentStep === 2 && (
        <StepTwo
          currentStep={currentStep} // Pass currentStep here
          onNext={() => setCurrentStep(3)} // Optional: Add any functionality if needed after completing StepTwo
        />
      )}

      {currentStep === 3 && (
        <StepThree currentStep={currentStep} onNext={() => setCurrentStep(4)} />
      )}

      {/* step four */}
      {currentStep === 4 && <StepFour currentStep={currentStep} />}
    </main>
  );
}
export default ForgotPasswordPage;