"use client"

import { Check } from "lucide-react"

interface CheckoutStepsProps {
  currentStep?: number
  isComplete?: boolean
}

export default function CheckoutSteps({ currentStep = 1, isComplete = false }: CheckoutStepsProps) {
  const steps = [
    {
      id: 1,
      name: "Đặt Hàng",
    },
    {
      id: 2,
      name: "Ưu Đãi Đặc Biệt",
    },
    {
      id: 3,
      name: "Hoàn Tất",
    },
  ]

  return (
    <nav aria-label="Progress">
      <ol className="flex items-center justify-center">
        {steps.map((step, stepIdx) => {
          let status = "upcoming"
          if (isComplete || step.id < currentStep) status = "complete"
          if (step.id === currentStep && !isComplete) status = "current"

          return (
            <li key={step.id} className={`relative ${stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : ""}`}>
              {stepIdx !== steps.length - 1 && (
                <div
                  className={`absolute top-[17px] left-[36px] w-full h-0.5 ${
                    status === "upcoming" ? "bg-gray-200" : "bg-gray-200"
                  }`}
                  aria-hidden="true"
                />
              )}
              <div className="relative flex flex-col items-center group">
                <span
                  className={`w-9 h-9 flex items-center justify-center rounded-full ${
                    status === "current"
                      ? "bg-red-600 text-white"
                      : status === "complete"
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {status === "complete" ? <Check className="w-5 h-5" /> : <span>{step.id}</span>}
                </span>
                <span className={`mt-2 text-sm font-medium ${status === "current" ? "text-red-600" : "text-gray-500"}`}>
                  {step.name}
                </span>
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

