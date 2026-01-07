"use client";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import {
  Flag,
  Zap,
  MapPin,
  TrendingUp,
  Cpu,
  Globe,
  Hourglass,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const TimelineSection: React.FC = () => {
  const tTimeline = useTranslations("timeline");

  const TIMELINE_DATA = [
    {
      year: "2020",
      title: "La Fondation",
      subtitle: "Fondation",
      description:
        "Group Digital Concept a vu le jour avec une ambition claire : devenir une agence marketing digital de référence à Marrakech et dans tout le Maroc.",
      icon: Flag,
      align: "left",
    },
    {
      year: "2021",
      title: "Lancement Innovant",
      subtitle: "Innovation",
      description:
        "Nous avons élargi notre gamme de services (SEO, PPC, Social Ads) pour répondre aux besoins croissants des entreprises locales.",
      icon: Zap,
      align: "right",
    },
    {
      year: "2022",
      title: "Expansion Maroc",
      subtitle: "Expansion",
      description:
        "Notre agence s'est affirmée comme un acteur incontournable au Maroc, élargissant sa présence au-delà de Marrakech.",
      icon: MapPin,
      align: "left",
    },
    {
      year: "2023",
      title: "Succès & Croissance",
      subtitle: "Croissance",
      description:
        "Plus de 100 entreprises accompagnées avec des résultats impressionnants, renforçant notre position de partenaire de choix.",
      icon: TrendingUp,
      align: "right",
    },
    {
      year: "2024",
      title: "IA & Futur",
      subtitle: "Innovation",
      description:
        "Intégration de l'intelligence artificielle dans nos services pour des performances SEO et contenu démultipliées.",
      icon: Cpu,
      align: "left",
    },
    {
      year: "2025",
      title: "Digitalisation Elite",
      subtitle: "Élite",
      description:
        "GDC est reconnue comme une agence d'élite, transformant les ambitions de ses clients en succès durables.",
      icon: Globe,
      align: "right",
    },
    {
      year: "2026",
      title: "Nouveaux Horizons",
      subtitle: "Bientôt",
      description:
        "L'aventure continue. Nous préparons de nouvelles innovations pour révolutionner le paysage du marketing digital.",
      icon: Hourglass,
      align: "center",
      isFuture: true,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [svgPath, setSvgPath] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Zigzag calculations - Desktop only
  useLayoutEffect(() => {
    if (isMobile) return;
    const calculatePath = () => {
      if (!containerRef.current || itemsRef.current.length === 0) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const startX = containerRect.width / 2;
      const startY = 50;
      let pathD = `M ${startX} ${startY}`;
      let prevX = startX;
      let prevY = startY;

      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        const align = TIMELINE_DATA[index].align;
        let targetX = startX;
        if (align === "left") targetX = containerRect.width * 0.42;
        if (align === "right") targetX = containerRect.width * 0.58;
        if (align === "center") targetX = startX;
        const itemRect = item.getBoundingClientRect();
        const relativeY =
          itemRect.top - containerRect.top + itemRect.height / 2;
        const cp1y = prevY + (relativeY - prevY) * 0.5;
        const cp2y = prevY + (relativeY - prevY) * 0.5;
        pathD += ` C ${prevX} ${cp1y}, ${targetX} ${cp2y}, ${targetX} ${relativeY}`;
        prevX = targetX;
        prevY = relativeY;
      });
      pathD += ` L ${prevX} ${containerRect.height - 50}`;
      setSvgPath(pathD);
    };
    calculatePath();
    window.addEventListener("resize", calculatePath);
    setTimeout(calculatePath, 500);
    return () => window.removeEventListener("resize", calculatePath);
  }, [isMobile]);

  useEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength());
  }, [svgPath]);

  useEffect(() => {
    // Only add scroll listener for progress on desktop
    if (isMobile) return;
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrolled = windowHeight / 2 - top;
      const totalScrollable = height - windowHeight * 0.5;
      let percentage = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setScrollPercentage(percentage);
      setIsComplete(percentage > 0.96);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const TIMELINE_STEPS = [
    { year: "2020", key: "2020" },
    { year: "2021", key: "2021" },
    { year: "2022", key: "2022" },
    { year: "2023", key: "2023" },
    { year: "2024", key: "2024" },
    { year: "2025", key: "2025" },
    { year: "2026", key: "2026" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 md:py-32 bg-white dark:bg-black overflow-hidden transition-colors duration-500"
    >
      {/* SVG LAYER - Desktop Only - removed entirely from DOM on mobile to save CPU */}
      {!isMobile && (
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-visible">
          <defs>
            <linearGradient
              id="lineGradientRed"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FF0000" stopOpacity="0" />
              <stop offset="20%" stopColor="#FF0000" />
              <stop offset="100%" stopColor="#FF0000" />
            </linearGradient>
            <linearGradient
              id="lineGradientGreen"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="20%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <path
            d={svgPath}
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-gray-300 dark:text-white/10"
          />
          <path
            ref={pathRef}
            d={svgPath}
            stroke={
              isComplete ? "url(#lineGradientGreen)" : "url(#lineGradientRed)"
            }
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength - pathLength * scrollPercentage}
            style={{
              transition: "stroke-dashoffset 0.1s linear, stroke 0.5s ease",
            }}
          />
        </svg>
      )}

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-red/5 blur-[100px] rounded-full"></div>
          <span className="inline-block py-1 px-3 rounded-full bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 backdrop-blur-md">
            Notre Parcours
          </span>
          <h2 className="text-3xl md:text-7xl font-black text-black dark:text-white tracking-tight leading-tight max-w-4xl mx-auto uppercase">
            Explorez{" "}
            <span className="transition-colors duration-700 text-gray-400 dark:text-gray-600">
              l'Évolution
            </span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto pb-12 md:pb-32">
          <div className="space-y-12 md:space-y-24">
            {TIMELINE_DATA.map((item, index) => {
              const itemActivation = index / (TIMELINE_DATA.length - 1);
              const isActive = isMobile
                ? true
                : itemActivation <= scrollPercentage + 0.05;
              const isFuture = (item as any).isFuture;
              const activeColor = isFuture
                ? "border-emerald-500/50 shadow-lg"
                : "border-black/5 dark:border-white/10 shadow-md";

              return (
                <div
                  key={index}
                  ref={(el) => {
                    itemsRef.current[index] = el;
                  }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    item.align === "right" ? "md:flex-row-reverse" : ""
                  } ${item.align === "center" ? "justify-center" : ""}`}
                >
                  {/* Vertical line connector for mobile */}
                  {isMobile && index < TIMELINE_DATA.length - 1 && (
                    <div className="absolute left-[39px] top-10 bottom-0 w-[2px] bg-gray-200 dark:bg-white/5"></div>
                  )}

                  {/* Icon for mobile side-aligned */}
                  {isMobile && (
                    <div className="absolute left-0 top-0 w-20 h-20 flex items-center justify-center z-10">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isFuture
                            ? "bg-emerald-500 text-white"
                            : "bg-brand-red text-white"
                        }`}
                      >
                        <item.icon size={18} />
                      </div>
                    </div>
                  )}

                  <div
                    className={`hidden md:block w-[16%] ${
                      item.align === "center" ? "hidden" : ""
                    }`}
                  ></div>

                  <div
                    className={`w-full md:w-[42%] ${isMobile ? "pl-20" : ""}`}
                  >
                    <div
                      className={`
                      group relative p-6 md:p-8 rounded-[24px] border transition-all duration-700 backdrop-blur-xl
                      ${
                        isActive
                          ? `bg-white dark:bg-[#080808]/80 ${activeColor} opacity-100 scale-100`
                          : "shadow-none border-transparent opacity-40 grayscale scale-95"
                      }
                      ${
                        item.align === "center"
                          ? "text-center flex flex-col items-center md:mt-12"
                          : ""
                      }
                    `}
                    >
                      <div
                        className={`flex items-center w-full ${
                          item.align === "center"
                            ? "justify-center gap-4 mb-4"
                            : "justify-between mb-4"
                        }`}
                      >
                        <span
                          className={`text-2xl md:text-4xl font-black font-mono tracking-tighter ${
                            isActive
                              ? isFuture
                                ? "text-emerald-500"
                                : "text-black dark:text-white"
                              : "text-gray-300"
                          }`}
                        >
                          {item.year}
                        </span>
                        {!isMobile && (
                          <div
                            className={`p-2 rounded-full ${
                              isActive ? "bg-black/5 dark:bg-white/5" : ""
                            }`}
                          >
                            <item.icon
                              size={16}
                              className={`${
                                isActive
                                  ? isFuture
                                    ? "text-emerald-500"
                                    : "text-brand-red"
                                  : "text-gray-300"
                              }`}
                            />
                          </div>
                        )}
                      </div>

                      <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p
                        className={`text-[9px] font-bold uppercase tracking-widest mb-3 ${
                          isActive
                            ? isFuture
                              ? "text-emerald-600"
                              : "text-gray-500"
                            : "text-gray-300"
                        }`}
                      >
                        {item.subtitle}
                      </p>

                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
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
