"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Monitor,
  Search,
  MousePointerClick,
  Share2,
  Palette,
  Code,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";

const SERVICES_CONFIG = [
  {
    id: "01",
    icon: Monitor,
  },
  {
    id: "02",
    icon: Search,
  },
  {
    id: "03",
    icon: MousePointerClick,
  },
  {
    id: "04",
    icon: Share2,
  },
  {
    id: "05",
    icon: Palette,
  },
  {
    id: "06",
    icon: Code,
  },
];

export const AgencyServices: React.FC<{ isMobile?: boolean }> = ({
  isMobile,
}) => {
  const t = useTranslations("AgencyServices");
  const servicesData = t.raw("items") as any;

  // Merge config with translations
  const SERVICES = SERVICES_CONFIG.map((config) => {
    const trans = servicesData[config.id];
    return {
      ...config,
      ...trans,
    };
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );

  const activeItem = SERVICES[activeIndex];

  useEffect(() => {
    setProgress(0);

    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    const updateFrequency = isMobile ? 500 : 100;
    const duration = isMobile ? 10000 : 20000;
    const step = 100 / (duration / updateFrequency);

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + step;
      });
    }, updateFrequency);

    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, duration);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
    };
  }, [activeIndex, isMobile]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(
      () => {
        setActiveIndex((prev) => (prev + 1) % SERVICES.length);
        setIsAnimating(false);
      },
      isMobile ? 300 : 500
    );
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(
      () => {
        setActiveIndex(
          (prev) => (prev - 1 + SERVICES.length) % SERVICES.length
        );
        setIsAnimating(false);
      },
      isMobile ? 300 : 500
    );
  };

  const handleSelect = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setTimeout(
      () => {
        setActiveIndex(index);
        setIsAnimating(false);
      },
      isMobile ? 300 : 500
    );
  };

  return (
    <section
      id="services-selector"
      className="relative w-full min-h-screen bg-[#F0F0F2] dark:bg-[#050505] text-black dark:text-white overflow-hidden flex flex-col justify-center py-12 lg:py-0 border-t border-black/5 dark:border-white/5"
    >
      <div className="absolute inset-0 z-0 flex pointer-events-none">
        <div className="w-full lg:w-1/2 h-full bg-[#F0F0F2] dark:bg-[#050505] relative">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        </div>

        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full hidden lg:block overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-[#1a0101]"
            style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
          ></div>
          <div
            className="absolute inset-0 w-full h-full bg-[#450a0a]"
            style={{
              clipPath: "polygon(13.2% 0, 100% 0, 100% 100%, 1.2% 100%)",
              background: "linear-gradient(135deg, #450a0a 0%, #2f0505 100%)",
            }}
          >
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-center gap-12 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col justify-center relative z-20 pt-10 lg:pt-0">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-brand-red font-black text-3xl">
                {activeItem.id}
              </span>
              <div className="flex-1 h-[2px] bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-red transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="text-xs font-bold text-gray-400">
                0{SERVICES.length}
              </span>
            </div>

            <div
              className={`transition-all duration-500 transform ${
                isAnimating
                  ? `opacity-0 ${!isMobile ? "-translate-x-10" : ""}`
                  : "opacity-100 translate-x-0"
              }`}
            >
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-black uppercase leading-[0.9] tracking-tighter text-black dark:text-white mb-4">
                {activeItem.name}
              </h1>
              <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-10 line-clamp-1 border-l-2 border-brand-red pl-4">
                {activeItem.fullName}
              </h2>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={handlePrev}
                className="w-14 h-14 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center transition-all duration-300 group"
              >
                <ChevronLeft
                  size={24}
                  className="md:group-hover:-translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={handleNext}
                className="w-20 h-20 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg transition-all duration-300 group"
              >
                <ChevronRight
                  size={32}
                  className="md:group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            <div className="flex gap-2 mt-12">
              {SERVICES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    activeIndex === idx
                      ? "w-10 bg-brand-red"
                      : "w-2 bg-gray-300 dark:bg-white/20 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative z-20 pl-0 lg:pl-16 xl:pl-24">
            <div
              className={`
                    grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5
                    transition-all duration-500 ease-out 
                    ${
                      isAnimating
                        ? `opacity-0 ${!isMobile ? "translate-x-20" : ""}`
                        : "opacity-100 translate-x-0"
                    }
                `}
            >
              <div className="md:col-span-2 p-6 md:p-8 rounded-[24px] bg-white/10 lg:backdrop-blur-md border border-white/20 text-white flex items-center justify-between shadow-xl">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-2">
                    {t("active_card.main_service")}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                    {activeItem.role}
                  </h3>
                </div>
                <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                  <activeItem.icon
                    className="text-white w-8 h-8"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <div className="md:row-span-2 p-6 md:p-8 rounded-[24px] bg-black/20 lg:backdrop-blur-md border border-white/10 text-white flex flex-col justify-center shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red mb-4 bg-white/10 w-fit px-3 py-1 rounded-full border border-white/5">
                  {t("active_card.about")}
                </span>
                <p className="text-lg font-medium leading-relaxed opacity-90">
                  "{activeItem.description}"
                </p>
              </div>

              <div className="p-6 rounded-[24px] bg-white/5 lg:backdrop-blur-md border border-white/10 md:hover:bg-white/10 transition-colors group shadow-lg">
                <div className="flex justify-between items-start mb-3">
                  <Zap size={18} className="text-brand-red mb-2" />
                  <span className="text-[9px] font-black uppercase tracking-widest opacity-50">
                    {activeItem.abilities[0].type}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  {activeItem.abilities[0].name}
                </h4>
                <p className="text-xs text-white/60 font-medium">
                  {activeItem.abilities[0].desc}
                </p>
              </div>

              <div className="p-6 rounded-[24px] bg-white/5 lg:backdrop-blur-md border border-white/10 md:hover:bg-white/10 transition-colors group shadow-lg">
                <div className="flex justify-between items-start mb-3">
                  <Zap size={18} className="text-brand-red mb-2" />
                  <span className="text-[9px] font-black uppercase tracking-widest opacity-50">
                    {activeItem.abilities[1].type}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  {activeItem.abilities[1].name}
                </h4>
                <p className="text-xs text-white/60 font-medium">
                  {activeItem.abilities[1].desc}
                </p>
              </div>

              <div className="md:col-span-2 p-6 rounded-[24px] bg-white/5 lg:backdrop-blur-md border border-white/10 flex items-center justify-between gap-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-brand-red rounded-full shadow-[0_0_10px_red]"></div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {activeItem.abilities[2].name}
                    </h4>
                    <p className="text-xs text-white/60 font-medium mt-0.5">
                      {activeItem.abilities[2].desc}
                    </p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="shrink-0 w-10 h-10 rounded-full bg-white text-brand-red flex items-center justify-center transition-transform shadow-md"
                >
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
