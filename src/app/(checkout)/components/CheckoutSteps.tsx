import { Check } from "lucide-react";

const steps = [
  { id: 1, title: "Đặt Hàng" },
  { id: 2, title: "Ưu Đãi Đặc Biệt" },
  { id: 3, title: "Hoàn Tất" },
];

export default function CheckoutSteps({ currentStep }: { currentStep: number }) {
  return (
    <div className="w-full py-4 overflow-x-auto">
      <div className="flex justify-center items-center gap-2 md:gap-6 px-2 whitespace-nowrap min-w-fit">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;
          const isUpcoming = step.id > currentStep;

          return (
            <div key={step.id} className="flex items-center min-w-0">
              <div className="flex flex-col items-center min-w-[36px]">
                <div
                  className={`
                    w-6 h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center text-xs md:text-sm
                    ${isCompleted ? "bg-black border-black text-white" : ""}
                    ${isActive ? "border-black text-black font-semibold" : ""}
                    ${isUpcoming ? "border-gray-300 text-gray-400" : ""}
                  `}
                >
                  {isCompleted ? <Check className="w-3 h-3 md:w-4 md:h-4" /> : step.id}
                </div>
                <span
                  className={`
                    text-[10px] md:text-xs mt-1 text-center leading-tight
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
                  className={`w-4 md:w-12 h-[2px] mx-1 md:mx-3 
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
