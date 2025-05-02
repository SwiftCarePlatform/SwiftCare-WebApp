import React,{useState} from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSIde";
import "./Login.css"






function LoginPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSignupMode, setIsSignupMode] = useState(false);
  

  

    


    return (
      <main className="Login-page-container">
      <LeftSide />
      <RightSide
        isSignupMode={isSignupMode}
        setIsSignupMode={setIsSignupMode}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </main>
    );

    
}

export default LoginPage