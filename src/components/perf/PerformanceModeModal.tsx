"use client";

import React, { useEffect, useState } from "react";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";
import { Zap, Leaf } from "lucide-react";

export const PerformanceModeModal = () => {
  const { mode, setMode } = usePerformanceMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only show if mounted (client-side) and no mode is selected yet
  if (!mounted || mode !== null) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <div className="p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">
            Choose Your Experience
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg mx-auto">
            We've optimized our site for different devices. Select the mode that
            best fits your hardware.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Elite Mode Option */}
            <button
              onClick={() => setMode("elite")}
              className="group relative p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border-2 border-transparent hover:border-purple-500 transition-all duration-300 text-left"
            >
              <div className="absolute top-4 right-4">
                <div className="w-4 h-4 rounded-full border-2 border-zinc-300 dark:border-zinc-600 group-hover:border-purple-500 group-hover:bg-purple-500 transition-colors" />
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-purple-600 dark:text-purple-400">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">
                Elite Mode
              </h3>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Full Immersive Animations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Premium Visual Effects
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Best for High-End Devices
                </li>
              </ul>
            </button>

            {/* Lite Mode Option */}
            <button
              onClick={() => setMode("lite")}
              className="group relative p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border-2 border-transparent hover:border-emerald-500 transition-all duration-300 text-left"
            >
              <div className="absolute top-4 right-4">
                <div className="w-4 h-4 rounded-full border-2 border-zinc-300 dark:border-zinc-600 group-hover:border-emerald-500 group-hover:bg-emerald-500 transition-colors" />
              </div>
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-emerald-600 dark:text-emerald-400">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">
                Lite Mode
              </h3>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Zero Animation Delay
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Battery Saver Efficient
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Best for Laptops / Mobile
                </li>
              </ul>
            </button>
          </div>

          <p className="mt-8 text-xs text-zinc-500 dark:text-zinc-500">
            You can change this anytime in Settings. Your preference will be
            saved on this device.
          </p>
        </div>
      </div>
    </div>
  );
};
