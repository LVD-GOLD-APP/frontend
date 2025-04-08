"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Minus } from "lucide-react"

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1)

  const increment = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    }
  }

  return (
    <div className="flex items-center border border-gray-300 rounded-md">
      <Button
        variant="ghost"
        size="icon"
        onClick={decrement}
        className="h-10 w-10 rounded-none border-r border-gray-300"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        type="text"
        value={quantity}
        onChange={handleChange}
        className="h-10 w-12 border-0 text-center rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
        aria-label="Quantity"
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={increment}
        className="h-10 w-10 rounded-none border-l border-gray-300"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}

