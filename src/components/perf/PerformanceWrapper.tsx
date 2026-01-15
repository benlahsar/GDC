"use client";

import React from "react";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

interface PerformanceWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  /**
   * If true, children are rendered ONLY in Elite mode.
   * If false (default), children are rendered in Lite mode but might be static.
   * This is useful for heavy components you want to completely hide in Lite mode.
   */
  eliteOnly?: boolean;
}

export const PerformanceWrapper: React.FC<PerformanceWrapperProps> = ({
  children,
  fallback = null,
  eliteOnly = false,
}) => {
  const { isElite, mode } = usePerformanceMode();

  // If we haven't determined mode yet (SSR or initial hydrate), default to Safe (render children)
  // OR if explicit eliteOnly is requested, wait for elite mode confirmation.
  if (eliteOnly && !isElite) {
    return <>{fallback}</>;
  }

  // Future extensibility: We can pass down props or context here to disable internal animations of children
  return <>{children}</>;
};
