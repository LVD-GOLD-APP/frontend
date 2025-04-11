"use client";

import { useState } from "react";
import CheckoutStep1 from "../components/CheckoutStep1";
import CheckoutStep2 from "../components/CheckoutStep2";
import CheckoutStep3 from "../components/CheckoutStep3";
import CheckoutSteps from "../components/CheckoutSteps";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const goNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div>
      <div className="border-b-1 border-[#C4001F] mx-auto">
        <div className="px-2">
          <Link href={"/"}>
            <Image className="h-14 max-w-24 mx-auto block" src={Logo} alt="" />
          </Link>
        </div>
        <CheckoutSteps currentStep={currentStep} />
      </div>
      <div className="max-w-[1440px] mx-auto">
        {currentStep === 1 && <CheckoutStep1 onNextStep={goNextStep} />}
        {currentStep === 2 && <CheckoutStep2 onNextStep={goNextStep} />}
        {currentStep === 3 && <CheckoutStep3 />}
      </div>
    </div>
  );
}
