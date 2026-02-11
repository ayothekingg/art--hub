import { useState, useEffect } from "react";
import type { UseMenuAnimationProps, UseMenuAnimationReturn } from "../data/types/shared.model";

export const useMenuAnimation = ({
  menuOpen,
}: UseMenuAnimationProps): UseMenuAnimationReturn => {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setShouldRender(true);
      setIsClosing(false);
      setIsOpening(false);
      // Use requestAnimationFrame to ensure DOM is ready before animating
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsOpening(true);
        });
      });
    } else if (shouldRender) {
      setIsOpening(false);
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [menuOpen, shouldRender]);

  return { shouldRender, isOpening, isClosing };
};