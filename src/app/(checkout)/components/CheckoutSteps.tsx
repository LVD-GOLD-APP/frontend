import { Check } from "lucide-react";

const steps = [
  { id: 1, title: "Đặt Hàng" },
  { id: 2, title: "Ưu Đãi Đặc Biệt" },
  { id: 3, title: "Hoàn Tất" },
];

export default function CheckoutSteps({ currentStep }: { currentStep: number }) {
  return (
    <div className="w-full flex justify-center py-6">
      <div className="flex items-center gap-6">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;
          const isUpcoming = step.id > currentStep;

          return (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm
                    ${isCompleted ? "bg-black border-black text-white" : ""}
                    ${isActive ? "border-black text-black font-semibold" : ""}
                    ${isUpcoming ? "border-gray-300 text-gray-400" : ""}
                  `}
                >
                  {isCompleted ? <Check className="w-4 h-4" /> : step.id}
                </div>
                <span
                  className={`
                    text-xs mt-1
                    ${isActive ? "text-black font-semibold" : ""}
                    ${isCompleted ? "text-black" : ""}
                    ${isUpcoming ? "text-gray-400" : ""}
                  `}
                >
                  {step.title}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`w-16 h-[2px] mx-3 
                    ${step.id < currentStep ? "bg-black" : "bg-gray-300"}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
