"use client";
import React, { useState } from "react";
import VerifyToken from "./section/VerifyToken";
import Finish from "./section/Finish";
import AddAdditional from "./section/AddAdditional";
import DeFiLaunchpad from "./section/DeFiLaunchpad";
import StepperContainer from "@/components/StepperContainer";
import GradientBorderContainer from "@/components/GradientBorderContainer";

const Page = () => {
  const [isValidate, setIsValidate] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const changeVal = () => {
    setIsValidate(1);
    console.log(isValidate);
  };

  const steps = [
    "Verify Token",
    "DeFi Launchpad Info",
    "Additional Info",
    "Finish Page",
  ];

  const handleStepValidation = (isValid: boolean) => {
    setIsFormValid(isValid);
  };
  return (
    <GradientBorderContainer heading="Create Dutch Auction Sale">
      <StepperContainer
        steps={steps}
        description={
          "ENTER THE LAUNCHPAD INFORMATION THAT YOU WANT TO RAISE, THAT SHOULD BE ENTER ALL DETAILS ABOUT YOUR AUCTION"
        }
      >
        <VerifyToken onStepValidation={handleStepValidation} />
        <DeFiLaunchpad
          chngeVal={changeVal}
          onStepValidation={handleStepValidation}
        />
        <AddAdditional onStepValidation={handleStepValidation} />
        <Finish />
      </StepperContainer>
      </GradientBorderContainer>
  );
};

export default Page;
