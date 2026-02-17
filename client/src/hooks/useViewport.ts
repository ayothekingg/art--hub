import { useState, useEffect } from "react";

const useViewport = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      // 768px is the standard md breakpoint in Tailwind
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkViewport();

    // Add event listener
    window.addEventListener("resize", checkViewport);

    // Cleanup
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return { isMobile };
};

export default useViewport;