import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { Flag, Star, Globe, Zap, Trophy, Rocket, Layers } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

const MILESTONES = [
  {
    year: "2020",
    titleKey: "0",
    icon: Flag,
    gradient: "from-red-700 to-red-800",
    border: "border-red-700",
    shadow: "shadow-red-700/20",
  },
  {
    year: "2021",
    titleKey: "1",
    icon: Star,
    gradient: "from-red-700 to-red-800",
    border: "border-red-700",
    shadow: "shadow-red-700/20",
  },
  {
    year: "2022",
    titleKey: "2",
    icon: Globe,
    gradient: "from-red-700 to-red-800",
    border: "border-red-700",
    shadow: "shadow-red-700/20",
  },
  {
    year: "2023",
    titleKey: "3",
    icon: Zap,
    gradient: "from-red-700 to-red-800",
    border: "border-red-700",
    shadow: "shadow-red-700/20",
  },
  {
    year: "2024",
    titleKey: "4",
    icon: Trophy,
    gradient: "from-red-700 to-red-800",
    border: "border-red-700",
    shadow: "shadow-red-700/20",
  },
  {
    year: "2025",
    titleKey: "5",
    icon: Rocket,
    gradient: "from-red-700 to-red-800",
    border: "border-red-700",
    shadow: "shadow-red-700/20",
  },
];

export const AgencyMilestones: React.FC<{ isMobile?: boolean }> = ({
  isMobile: isMobileProp,
}) => {
  const t = useTranslations("AgencyMilestones");
  const items = t.raw("items") as any[]; // Access raw array for translations

  const containerRef = useRef<HTMLDivElement>(null);
  const [arcPath, setArcPath] = useState("");
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const [containerHeight, setContainerHeight] = useState(600);
  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  // Merged internal and prop-based mobile detection
  const [isMobileInternal, setIsMobileInternal] = useState(false);
  const isMobile = isMobileProp ?? isMobileInternal;
  const { isLite } = usePerformanceMode();

  // --- Calculate Parabolic Arc ---
  const calculateGeometry = () => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const startY = 300;
    const peakY = 80;

    // Parabola Equation: y = a(x - h)^2 + k
    const h = width / 2;
    const k = peakY;
    const a = (startY - k) / Math.pow(h, 2);

    let pathD = `M 0 ${startY}`;
    const steps = 100;
    for (let i = 1; i <= steps; i++) {
      const x = (width * i) / steps;
      const y = a * Math.pow(x - h, 2) + k;
      pathD += ` L ${x} ${y}`;
    }
    setArcPath(pathD);

    const padding = width * 0.1;
    const usableWidth = width - padding * 2;
    const spacing = usableWidth / (MILESTONES.length - 1);

    const newPositions = MILESTONES.map((_, i) => {
      const x = padding + spacing * i;
      const y = a * Math.pow(x - h, 2) + k;
      return { x, y };
    });

    setPositions(newPositions);
    setContainerHeight(startY + 350);
  };

  useLayoutEffect(() => {
    calculateGeometry();
    const handleResize = () => calculateGeometry();
    window.addEventListener("resize", handleResize);
    setTimeout(calculateGeometry, 500);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Measure path length for draw animation
  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [arcPath]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle local mobile detection as fallback
  useEffect(() => {
    const checkMobile = () => setIsMobileInternal(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full py-24 bg-transparent transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${
            isVisible || isLite
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
            <Layers size={14} className="text-brand-red animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter">
            {t("title.prefix")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
              {t("title.highlight")}
            </span>
          </h2>
        </div>

        {/* --- DESKTOP ARC ROADMAP --- */}
        <div
          ref={containerRef}
          className="hidden md:block relative w-full select-none"
          style={{ height: containerHeight }}
        >
          {/* 1. The SVG Arc Line */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible">
            <defs>
              <linearGradient
                id="arcGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#b91c1c" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#b91c1c" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* The Arc Path with Draw Animation */}
            <path
              ref={pathRef}
              d={arcPath}
              fill="none"
              stroke={isLite ? "#FF0000" : "url(#arcGradient)"}
              strokeWidth="4"
              strokeDasharray={pathLength}
              strokeDashoffset={isVisible || isLite ? 0 : pathLength}
              style={{
                filter: "drop-shadow(0px 0px 15px rgba(185,28,28,0.4))",
                transition: "stroke-dashoffset 2s ease-out",
              }}
            />
          </svg>

          {/* 2. Milestones */}
          {positions.map((pos, index) => {
            const item = MILESTONES[index];
            const translatedItem = items[index];
            // Stagger calculation
            const delay = index * 200;

            return (
              <div
                key={index}
                className={`absolute group transition-all duration-700 ease-out preserve-transform ${
                  isVisible || isLite
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-0 translate-y-10"
                }`}
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform:
                    isVisible || isLite
                      ? "translate(-50%, -50%)"
                      : "translate(-50%, 50px)",
                  transitionDelay: `${delay + 500}ms`,
                }}
              >
                {/* DIAMOND NODE ON THE LINE */}
                <div className="relative z-20 flex items-center justify-center">
                  {/* The Diamond */}
                  <div
                    className={`w-6 h-6 rotate-45 ${
                      isLite
                        ? "bg-brand-red"
                        : `bg-gradient-to-br ${item.gradient}`
                    } border-2 border-white dark:border-black shadow-lg z-20 transition-transform duration-300 group-hover:scale-150`}
                  ></div>
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 rotate-45 bg-inherit opacity-50 animate-ping rounded-sm`}
                  ></div>
                </div>

                {/* VERTICAL LINE CONNECTOR (Animates Height) */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-[2px] ${
                    isLite
                      ? "bg-brand-red"
                      : `bg-gradient-to-b ${item.gradient}`
                  } opacity-40 transition-all duration-700 h-16 top-3 group-hover:opacity-100 group-hover:h-24 preserve-transform`}
                  style={{ transitionDelay: `${delay + 700}ms` }} // Connector grows after point appears
                ></div>

                {/* THE CARD */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-64 top-20 transition-all duration-500 ease-out preserve-transform group-hover:-translate-y-4 group-hover:top-24`}
                >
                  <div
                    className={`relative flex overflow-hidden rounded-xl bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 shadow-xl ${item.shadow} group-hover:shadow-2xl group-hover:shadow-red-900/40 transition-all duration-300`}
                  >
                    {/* Left Colored Strip with Rotated Year */}
                    <div
                      className={`w-12 ${
                        isLite
                          ? "bg-brand-red"
                          : `bg-gradient-to-b ${item.gradient}`
                      } flex items-center justify-center py-4 relative overflow-hidden group-hover:w-14 transition-all duration-300`}
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-white font-black tracking-widest -rotate-90 whitespace-nowrap text-sm opacity-90">
                        {translatedItem.year}
                      </span>
                    </div>

                    {/* Content Body */}
                    <div className="flex-1 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 rounded-lg bg-gray-100 dark:bg-white/5 text-black dark:text-white">
                          <item.icon size={14} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                          {translatedItem.tag}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-black dark:text-white leading-tight mb-1">
                        {translatedItem.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                        {translatedItem.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- MOBILE VERTICAL TIMELINE --- */}
        <div className="md:hidden relative px-2">
          {/* Vertical Line */}
          <div
            className={`absolute left-6 top-0 bottom-0 w-[2px] ${
              isLite
                ? "bg-brand-red"
                : "bg-gradient-to-b from-red-700 to-red-800"
            } opacity-30`}
          ></div>

          <div className="space-y-8">
            {MILESTONES.map((item, index) => {
              const translatedItem = items[index];
              return (
                <div key={index} className="relative pl-16">
                  {/* Dot on Line */}
                  <div
                    className={`absolute left-[23px] top-6 -translate-x-1/2 w-4 h-4 rotate-45 ${
                      isLite
                        ? "bg-brand-red"
                        : `bg-gradient-to-br ${item.gradient}`
                    } border-2 border-white dark:border-black shadow-md z-10`}
                  ></div>

                  {/* Card */}
                  <div
                    className={`relative flex overflow-hidden rounded-xl bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 shadow-lg`}
                  >
                    <div
                      className={`w-10 ${
                        isLite
                          ? "bg-brand-red"
                          : `bg-gradient-to-b ${item.gradient}`
                      } flex items-center justify-center py-4`}
                    >
                      <span className="text-white font-bold text-xs -rotate-90 whitespace-nowrap">
                        {translatedItem.year}
                      </span>
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="text-lg font-bold text-black dark:text-white mb-1 flex items-center justify-between">
                        {translatedItem.title}
                        <item.icon size={16} className="text-gray-400" />
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {translatedItem.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
