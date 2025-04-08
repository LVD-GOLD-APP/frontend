"use client";
import { useState, useEffect, useRef } from "react";

export function useStickyCheckout() {
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const productInfoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (productInfoRef.current) {
        const rect = productInfoRef.current.getBoundingClientRect();
        const isBelowViewport = rect.bottom <= window.innerHeight;

        if (!hasScrolled && isBelowViewport) {
          setHasScrolled(true);
        }

        setIsStickyVisible(isBelowViewport && hasScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return { isStickyVisible, productInfoRef };
}
