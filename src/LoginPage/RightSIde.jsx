import React from "react";
import ProgressiveSteps from "./ProgressiveSteps";
import EmailPage from "./EmailPage";
import SignupForm from "./Register/SignUp";
import "./Login.css";
import ConfirmationEmail from "./Register/ConfirmEmail";
import RegisterComplete from "./Register/RegisterComplete";

function RightSide({
  currentStep,
  setCurrentStep,
  isSignupMode,
  setIsSignupMode,
}) {
  const handleStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleSignupClick = (startStep) => {
    setIsSignupMode(true);
    setCurrentStep(startStep);
  };

  return (
    <section className="right-side">
      <ProgressiveSteps currentStep={currentStep} />

      {isSignupMode ? (
        <>
          {currentStep === 2 && <SignupForm onNext={handleStep} />}
          {currentStep === 3 && <ConfirmationEmail onNext={handleStep} />}
          {currentStep === 4 && (
            <RegisterComplete
              resetToLogin={() => {
                setIsSignupMode(false);
                setCurrentStep(1);
              }}
            />
          )}
        </>
      ) : (
        currentStep === 1 && <EmailPage onSignupClick={handleSignupClick} />
      )}
    </section>
  );
}
export default RightSide;
