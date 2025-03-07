"use client"

import { useState } from "react"

// Define the color interface
interface Color {
  id: number | string
  name: string
  color: string
}

// Define the props interface
interface ColorSelectorProps {
  colors?: Color[] | string[]
}

// Default colors as fallback
const defaultColors = [
  { id: 1, name: "Hồng", color: "#FF6B8E" },
  { id: 2, name: "Xanh dương", color: "#3B82F6" },
  { id: 3, name: "Tím", color: "#8B5CF6" },
]

export default function ColorSelector({ colors: propColors }: ColorSelectorProps) {
  const processedColors =
    propColors && propColors.length > 0
      ? propColors.map((color, index) => {
          if (typeof color === "string") {
            return {
              id: index + 1,
              name: color,
              color: color,
            }
          }
          return color as Color
        })
      : defaultColors

  const [selectedColor, setSelectedColor] = useState(processedColors[0]?.id || 1)

  return (
    <div className="flex gap-2">
      {processedColors.map((color) => (
        <button
          key={color.id}
          onClick={() => setSelectedColor(color.id)}
          className={`w-8 h-8 rounded-md ${selectedColor === color.id ? "ring-2 ring-offset-2 ring-black" : ""}`}
          style={{ backgroundColor: color.color }}
          aria-label={`Select ${color.name} color`}
          title={color.name}
        />
      ))}
    </div>
  )
}

