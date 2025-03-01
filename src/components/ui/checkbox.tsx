import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from 'lucide-react'

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          className={cn(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
            className
          )}
          ref={ref}
          {...props}
        />
        <Check className="absolute h-4 w-4 text-primary opacity-0 peer-checked:opacity-100 transition-opacity" />
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }