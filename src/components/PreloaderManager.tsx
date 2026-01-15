"use client";

import { useState, useEffect } from "react";
import { Preloader } from "./Preloader";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

export const PreloaderManager = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isLite } = usePerformanceMode();

  // In Lite mode, we skip the preloader for instant access
  useEffect(() => {
    if (isLite) {
      setIsLoading(false);
    }
  }, [isLite]);

  if (isLite) return null;

  return (
    <>{isLoading && <Preloader onComplete={() => setIsLoading(false)} />}</>
  );
};
