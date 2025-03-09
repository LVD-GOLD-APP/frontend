import { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { VariantProduct } from "@/lib/services/types";

export default function ColorSelector({
  variants = [],
  onSelectColor,
}: {
  variants?: VariantProduct[];
  onSelectColor: (colorId: number | null) => void;
}) {
  const [selectedColor, setSelectedColor] = useState<number | null>(null);

  const handleSelect = (colorId: number) => {
    const newColor = selectedColor === colorId ? null : colorId; // Bỏ chọn nếu click lại
    setSelectedColor(newColor);
    onSelectColor(newColor);
  };

  return (
    <div className="flex gap-2">
      {variants.map((color) => (
        <Tooltip.Provider key={color.id}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                onClick={() => handleSelect(color.id)}
                className={`w-8 h-8 rounded-md border ${
                  selectedColor === color.id ? "ring-2 ring-offset-2 ring-black" : ""
                }`}
                style={{ backgroundColor: color.color }}
                aria-label={`Select ${color.title} color`}
              />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="top"
                align="center"
                className="bg-black text-white text-xs px-2 py-1 rounded shadow-md"
              >
                {color.title}
                <Tooltip.Arrow className="fill-black" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      ))}
    </div>
  );
}
