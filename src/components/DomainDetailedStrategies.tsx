"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Lock,
  Server,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const DomainDetailedStrategies: React.FC = () => {
  const t = useTranslations("DomainDetailedStrategies");
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const STRATEGIES = [
    {
      id: "strategy",
      title: t("strategies.0.title"),
      subtitle: t("strategies.0.subtitle"),
      icon: Search,
      desc: t("strategies.0.desc"),
      points: [0, 1, 2, 3, 4].map((i) => ({
        label: t(`strategies.0.points.${i}.label`),
        text: t(`strategies.0.points.${i}.text`),
      })),
    },
    {
      id: "security",
      title: t("strategies.1.title"),
      subtitle: t("strategies.1.subtitle"),
      icon: Lock,
      desc: t("strategies.1.desc"),
      points: [0, 1, 2, 3, 4].map((i) => ({
        label: t(`strategies.1.points.${i}.label`),
        text: t(`strategies.1.points.${i}.text`),
      })),
    },
    {
      id: "management",
      title: t("strategies.2.title"),
      subtitle: t("strategies.2.subtitle"),
      icon: Server,
      desc: t("strategies.2.desc"),
      points: [0, 1, 2, 3, 4].map((i) => ({
        label: t(`strategies.2.points.${i}.label`),
        text: t(`strategies.2.points.${i}.text`),
      })),
    },
    {
      id: "performance",
      title: t("strategies.3.title"),
      subtitle: t("strategies.3.subtitle"),
      icon: TrendingUp,
      desc: t("strategies.3.desc"),
      points: [0, 1, 2, 3, 4].map((i) => ({
        label: t(`strategies.3.points.${i}.label`),
        text: t(`strategies.3.points.${i}.text`),
      })),
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setIsAnimating(true);
    setTimeout(
      () => {
        setActiveTab(index);
        setIsAnimating(false);
      },
      isMobile ? 100 : 300
    );
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#050505] overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/[0.02] rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/[0.02] rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
            <ShieldCheck size={14} className="text-brand-red animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
              {t("badge")}
            </span>
          </div>

          <h2
            className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-black dark:text-white mb-6 max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{
              __html: t.raw("title").replace(/{br}/g, "<br/>"),
            }}
          />
        </div>

        {/* --- INTERACTIVE TABS LAYOUT --- */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left: Navigation Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {STRATEGIES.map((strategy, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={strategy.id}
                  onClick={() => handleTabChange(index)}
                  className={`group relative p-6 rounded-[24px] text-left transition-all duration-500 border ${
                    isActive
                      ? `bg-white dark:bg-[#111] border-brand-red/20 shadow-xl ${
                          !isMobile ? "scale-[1.02]" : ""
                        }`
                      : `bg-transparent border-black/5 dark:border-white/5 ${
                          !isMobile
                            ? "hover:bg-white/40 dark:hover:bg-white/5"
                            : ""
                        }`
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                          isActive
                            ? "bg-brand-red text-white"
                            : `bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 ${
                                !isMobile
                                  ? "group-hover:bg-brand-red/10 group-hover:text-brand-red"
                                  : ""
                              }`
                        }`}
                      >
                        <strategy.icon size={22} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3
                          className={`text-base font-bold transition-colors ${
                            isActive
                              ? "text-black dark:text-white"
                              : `text-gray-600 dark:text-gray-400 ${
                                  !isMobile
                                    ? "group-hover:text-black dark:group-hover:text-white"
                                    : ""
                                }`
                          }`}
                        >
                          {strategy.title}
                        </h3>
                        <p
                          className={`text-[10px] uppercase tracking-wider font-bold mt-1 transition-colors ${
                            isActive
                              ? "text-brand-red"
                              : `text-gray-400 ${
                                  !isMobile ? "group-hover:text-gray-500" : ""
                                }`
                          }`}
                        >
                          {strategy.subtitle}
                        </p>
                      </div>
                    </div>
                    {!isMobile && (
                      <ArrowRight
                        size={18}
                        className={`transition-all duration-300 ${
                          isActive
                            ? "text-brand-red translate-x-0"
                            : "text-gray-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                        }`}
                      />
                    )}
                  </div>

                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-brand-red rounded-r-full"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Content Display */}
          <div className="lg:w-2/3 relative min-h-[500px]">
            <div
              ref={contentRef}
              className={`relative w-full h-full bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl rounded-[40px] border border-black/5 dark:border-white/10 p-8 md:p-12 shadow-2xl transition-all duration-300 ease-out ${
                isAnimating
                  ? "opacity-0 translate-y-4 scale-[0.98]"
                  : "opacity-100 translate-y-0 scale-100"
              }`}
            >
              {/* Background Pattern - Static on Mobile */}
              {!isMobile && (
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-brand-red/5 to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
              )}

              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-10">
                  <div className="inline-block p-3 rounded-2xl bg-brand-red/10 text-brand-red mb-6 border border-brand-red/20">
                    {React.createElement(STRATEGIES[activeTab].icon, {
                      size: 32,
                      strokeWidth: 1.5,
                    })}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-6 leading-tight">
                    {STRATEGIES[activeTab].title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                    {STRATEGIES[activeTab].desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 flex-1">
                  {STRATEGIES[activeTab].points.map((point, idx) => (
                    <div key={idx} className="group/item">
                      <div className="flex items-start gap-4">
                        <div
                          className={`mt-1 w-5 h-5 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shrink-0 ${
                            !isMobile ? "group-hover/item:scale-110" : ""
                          } transition-transform`}
                        >
                          <CheckCircle2 size={12} strokeWidth={3} />
                        </div>
                        <div>
                          <h4
                            className={`text-sm font-bold text-black dark:text-white mb-1 transition-colors ${
                              !isMobile ? "group-hover/item:text-brand-red" : ""
                            }`}
                          >
                            {point.label}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                            {point.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-black/5 dark:border-white/5 flex justify-end">
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-red transition-colors group ${
                      !isMobile ? "hover:text-red-600" : ""
                    }`}
                  >
                    {t("cta")}{" "}
                    <ArrowRight
                      size={16}
                      className={
                        !isMobile
                          ? "group-hover:translate-x-1 transition-transform"
                          : ""
                      }
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
