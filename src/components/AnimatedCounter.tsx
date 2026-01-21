"use client";
import React, { useEffect, useState } from "react";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
}) => {
  const { isLite } = usePerformanceMode();
  const [count, setCount] = useState(isLite ? value : 0);

  useEffect(() => {
    if (isLite) {
      setCount(value);
      return;
    }
    let startTime: number | null = null;
    let animationFrameId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function: easeOutExpo for a premium "snap" finish
      // 1 - pow(2, -10 * x)
      const easeOutExpo = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };

      setCount(Math.floor(easeOutExpo(percentage) * value));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    // Start animation after the specified delay
    timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration, delay]);

  return (
    <span className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};
