"use client";

import React, { useRef, useState, useEffect } from "react";
import { Sparkles, ArrowRight, Target, Heart, Zap, Award } from "lucide-react";
import { useTranslations } from "next-intl";

export const AgencyEngagement: React.FC<{ isMobile?: boolean }> = ({
  isMobile,
}) => {
  const t = useTranslations("AgencyEngagement");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 bg-transparent transition-colors duration-500"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-200/50 dark:bg-[#0A0A0A] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute -bottom-[20%] left-0 w-[1000px] h-[1000px] bg-brand-red/[0.06] rounded-full blur-[150px] pointer-events-none z-0"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-[1600px]">
        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* --- CARD 1: EXCELLENCE (Left - Tall) --- */}
          <div
            className={`lg:col-span-7 flex flex-col justify-between bg-[#0A0A0A] text-white rounded-[40px] p-8 md:p-12 lg:p-14 relative overflow-hidden group shadow-2xl shadow-black/20 transition-all duration-1000 ease-out border border-white/5 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : `opacity-0 ${!isMobile ? "-translate-x-10" : ""}`
            }`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1a1a1a,transparent)] z-0"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] md:group-hover:bg-brand-red/10 transition-colors duration-700"></div>

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-8 backdrop-blur-md">
                <Award size={14} className="text-brand-red" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">
                  {t("badge")}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] mb-8">
                {t("title.line1")} <br />
                {t("title.line2")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 md:group-hover:from-brand-red md:group-hover:to-red-500 transition-all duration-500">
                  {t("title.highlight")}
                </span>
              </h2>

              <div className="space-y-6 text-gray-400 font-medium text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  {t.rich("description", {
                    strong: (children) => (
                      <strong className="text-white">{children}</strong>
                    ),
                  })}
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-12 flex items-center justify-between border-t border-white/10 pt-8">
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white">100%</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    {t("stats.engagement")}
                  </span>
                </div>
                <div className="w-[1px] h-10 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white">24/7</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    {t("stats.support")}
                  </span>
                </div>
              </div>
              <div
                className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${
                  !isMobile
                    ? "md:group-hover:bg-white md:group-hover:text-black"
                    : ""
                }`}
              >
                <Target size={20} />
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN STACK --- */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            <div
              className={`flex-1 bg-white dark:bg-[#111] rounded-[40px] p-8 md:p-10 relative overflow-hidden group shadow-xl transition-all duration-1000 delay-150 ease-out border border-black/5 dark:border-white/10 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : `opacity-0 ${!isMobile ? "translate-y-10" : ""}`
              }`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 md:group-hover:opacity-10 transition-opacity duration-500">
                <Heart size={120} className="text-black dark:text-white" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl text-black dark:text-white font-serif leading-tight">
                  {t.rich("cards.client_heart.title", {
                    i: (children) => <i className="font-serif">{children}</i>,
                    red: (children) => (
                      <span className="text-brand-red">{children}</span>
                    ),
                    br: () => <br />,
                  })}
                </h3>
              </div>
            </div>

            <div
              className={`flex-[1.5] bg-[#F5F5F7] dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-10 relative overflow-hidden group transition-all duration-1000 delay-300 ease-out border border-black/5 dark:border-white/10 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : `opacity-0 ${!isMobile ? "translate-y-10" : ""}`
              }`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between gap-6">
                <p className="text-gray-600 dark:text-gray-300 font-medium text-base leading-relaxed">
                  {t("cards.vision_mission.description")}
                </p>

                <div className="space-y-4">
                  <div className="h-[1px] w-full bg-black/10 dark:bg-white/10"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-black dark:text-white">
                      {t("cards.vision_mission.label")}
                    </span>
                    <a
                      href="#contact"
                      className="group/btn flex items-center gap-3 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-xs uppercase tracking-wider md:hover:scale-105 transition-all shadow-lg"
                    >
                      {t("cards.vision_mission.cta")}{" "}
                      <ArrowRight
                        size={14}
                        className="md:group-hover/btn:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
