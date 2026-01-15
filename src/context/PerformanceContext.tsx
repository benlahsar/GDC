"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type PerformanceMode = "lite" | "elite";

interface PerformanceContextType {
  mode: PerformanceMode | null;
  setMode: (mode: PerformanceMode) => void;
  isLite: boolean;
  isElite: boolean;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(
  undefined
);

interface PerformanceProviderProps {
  children: React.ReactNode;
  initialMode?: PerformanceMode | null;
}

export const PerformanceProvider: React.FC<PerformanceProviderProps> = ({
  children,
  initialMode = null,
}) => {
  const [mode, setModeState] = useState<PerformanceMode | null>(initialMode);

  // Sync with body class for CSS animations
  useEffect(() => {
    if (mode === "lite") {
      document.body.classList.add("perf-mode-lite");
      document.body.classList.remove("perf-mode-elite");
    } else if (mode === "elite") {
      document.body.classList.add("perf-mode-elite");
      document.body.classList.remove("perf-mode-lite");
    }
  }, [mode]);

  const setMode = (newMode: PerformanceMode) => {
    setModeState(newMode);

    // Set cookie that lasts for 1 year
    const d = new Date();
    d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = `NEXT_PERFORMANCE_MODE=${newMode};${expires};path=/;SameSite=Lax`;
  };

  const value = {
    mode,
    setMode,
    isLite: mode === "lite",
    isElite: mode === "elite",
  };

  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (context === undefined) {
    throw new Error("usePerformance must be used within a PerformanceProvider");
  }
  return context;
};
