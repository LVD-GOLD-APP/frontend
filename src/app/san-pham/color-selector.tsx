"use client"

import { useState } from "react"

const colors = [
  { id: 1, name: "Hồng", color: "#FF6B8E" },
  { id: 2, name: "Xanh dương", color: "#3B82F6" },
  { id: 3, name: "Tím", color: "#8B5CF6" },
]

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState(2) // Default to blue (Xanh dương)

  return (
    <div className="flex gap-2">
      {colors.map((color) => (
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

