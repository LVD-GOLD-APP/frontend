"use client"

import { Check } from "lucide-react"

const steps = [
  {
    id: 1,
    name: "Đặt Hàng",
    status: "current",
  },
  {
    id: 2,
    name: "Ưu Đãi Đặc Biệt",
    status: "upcoming",
  },
  {
    id: 3,
    name: "Hoàn Tất",
    status: "upcoming",
  },
]

export default function CheckoutSteps() {
  return (
    <nav aria-label="Progress">
      <ol className="flex items-center justify-center">
        {steps.map((step, stepIdx) => (
          <li key={step.id} className={`relative ${stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : ""}`}>
            {stepIdx !== steps.length - 1 && (
              <div className="absolute top-[17px] left-[36px] w-full h-0.5 bg-gray-200" aria-hidden="true" />
            )}
            <div className="relative flex flex-col items-center group">
              <span
                className={`w-9 h-9 flex items-center justify-center rounded-full ${
                  step.status === "current"
                    ? "bg-red-600 text-white"
                    : step.status === "complete"
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-500"
                }`}
              >
                {step.status === "complete" ? <Check className="w-5 h-5" /> : <span>{step.id}</span>}
              </span>
              <span
                className={`mt-2 text-sm font-medium ${step.status === "current" ? "text-red-600" : "text-gray-500"}`}
              >
                {step.name}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

