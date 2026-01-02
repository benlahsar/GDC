"use client";
import React, { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Initialize theme directly from localStorage to prevent flash of wrong theme on refresh
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      return stored === "light" ? "light" : "dark";
    }
    return "dark";
  });

  useEffect(() => {
    // Initial reveal
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Smooth asymptotic progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        const remaining = 100 - prev;
        return prev + remaining * 0.04;
      });
    }, 30);

    // Exit sequence
    const exitTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 1200);
      }, 400);
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        theme === "dark" ? "bg-[#000000]" : "bg-[#F4F4F5]"
      } ${
        isExiting
          ? "opacity-0 scale-[1.08] pointer-events-none"
          : "opacity-100 scale-100"
      } `}
      aria-hidden="true"
    >
      {/* Dynamic Brand Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full blur-[160px] animate-pulse-red ${
            theme === "dark" ? "bg-brand-red/[0.04]" : "bg-brand-red/[0.03]"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full blur-[140px] animate-pulse-cyan ${
            theme === "dark" ? "bg-cyan-500/[0.03]" : "bg-cyan-500/[0.02]"
          }`}
          style={{ animationDelay: "-3s" }}
        ></div>
        <div
          className={`absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay ${
            theme === "light" ? "invert brightness-150" : ""
          }`}
        ></div>
      </div>

      {/* Hero Logo with Chromatic Aura */}
      <div
        className={`relative z-10 transition-all duration-[1500ms] ease-out ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[0.8]"
        }`}
      >
        <div className="relative flex flex-col items-center">
          {/* Animated Aura cycling Red, Cyan, White */}
          <div
            className={`absolute inset-0 rounded-full blur-3xl animate-brand-aura ${
              theme === "dark" ? "opacity-40" : "opacity-25"
            }`}
          ></div>

          {/* Massive Logo Container */}
          <div className="relative w-48 h-48 md:w-72 md:h-72 flex items-center justify-center">
            {/* Subtle rotating ring */}
            <div
              className={`absolute inset-[-15%] rounded-full border border-t-brand-red/30 border-b-cyan-400/30 animate-spin-slow ${
                theme === "dark" ? "border-white/[0.05]" : "border-black/[0.05]"
              }`}
            ></div>

            <img
              src="https://groupdigitalconcept.com/wp-content/uploads/2024/04/Design-sans-titre-23.png"
              alt="GDC Logo"
              className={`w-full h-auto object-contain transition-all duration-700 animate-chromatic-drift ${
                theme === "dark"
                  ? "drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                  : "drop-shadow-[0_20px_45px_rgba(0,0,0,0.1)]"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Minimalist Architectural Loader (No numbers/text) */}
      <div
        className={`absolute bottom-24 w-64 md:w-80 h-[2px] transition-all duration-1000 delay-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${theme === "dark" ? "bg-white/[0.04]" : "bg-black/[0.04]"}`}
      >
        <div
          className="h-full relative transition-all duration-300 ease-out overflow-hidden"
          style={{ width: `${progress}%` }}
        >
          {/* Solid Multi-Color Segment Line (Red, Cyan, White) */}
          <div className="absolute inset-0 flex">
            <div className="h-full w-1/3 bg-brand-red"></div>
            <div className="h-full w-1/3 bg-cyan-400"></div>
            <div className="h-full w-1/3 bg-white"></div>
          </div>

          {/* Moving high-light streak */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
        </div>
      </div>

      {/* Minimal Signature Branding */}
      <div
        className={`absolute bottom-10 transition-all duration-1000 delay-1000 ${
          isLoaded ? "opacity-20" : "opacity-0"
        } ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        <span className="text-[10px] font-black uppercase tracking-[1.5em] ml-[1.5em]">
          GDC
        </span>
      </div>

      <style>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseRed {
          0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.3; transform: translate(-50%, -50%) scale(1.1); }
        }
        @keyframes pulseCyan {
          0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1.1); }
          50% { opacity: 0.25; transform: translate(-50%, -50%) scale(0.9); }
        }
        @keyframes brandAura {
          0% { background: #FF0000; filter: blur(40px); transform: scale(1); }
          33% { background: #00FFFF; filter: blur(60px); transform: scale(1.2); }
          66% { background: #FFFFFF; filter: blur(40px); transform: scale(1); }
          100% { background: #FF0000; filter: blur(40px); transform: scale(1); }
        }
        .animate-brand-aura {
          animation: brandAura 10s infinite ease-in-out;
        }
        @keyframes chromaticDrift {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(3px, -3px); }
          50% { transform: translate(-3px, 3px); }
          75% { transform: translate(-3px, -3px); }
        }
        .animate-chromatic-drift {
          animation: chromaticDrift 6s infinite linear;
        }
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </div>
  );
};
