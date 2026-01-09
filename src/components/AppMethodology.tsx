"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  PenTool,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const AppMethodology: React.FC = () => {
  const t = useTranslations("AppMethodology");
  const [activeStep, setActiveStep] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  const icons = [Search, PenTool, ShieldCheck, Rocket]; // Map icons to steps

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full py-24 md:py-40 bg-white dark:bg-[#000000] text-black dark:text-white overflow-hidden transition-colors duration-500">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-red/[0.05] rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 ${
            !isMobile ? "animate-pulse" : ""
          }`}
        ></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[120px] translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* LEFT: STATIC IMPACT TITLE */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <div className="lg:sticky lg:top-48">
              <h2
                className={`text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.9] text-black dark:text-white uppercase mb-12 group transition-all duration-500`}
                dangerouslySetInnerHTML={{
                  __html: t.raw("title").replace(/{br}/g, "<br/>"),
                }}
              ></h2>

              <div className="space-y-6 max-w-md">
                <div className="h-1 w-24 bg-brand-red rounded-full"></div>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                  {t("subtitle")}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE ACCORDION LIST */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-black/5 dark:divide-white/10 border-t border-black/5 dark:border-white/10">
            {[0, 1, 2, 3].map((index) => {
              // Iterate 4 times for 4 steps
              const isOpen = activeStep === index;
              const IconComponent = icons[index]; // Get the icon component from the array
              return (
                <div
                  key={index}
                  className={`py-10 md:py-14 transition-all duration-500 cursor-pointer group ${
                    isOpen
                      ? "bg-gray-50 dark:bg-white/[0.02] -mx-4 px-4 md:-mx-8 md:px-8 rounded-2xl"
                      : !isMobile
                      ? "hover:pl-4"
                      : ""
                  }`}
                  onClick={() => setActiveStep(isOpen ? null : index)}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-baseline gap-6 md:gap-12">
                      <span
                        className={`text-xl md:text-2xl font-mono font-black transition-colors duration-300 ${
                          isOpen
                            ? "text-brand-red"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      >
                        {t(`steps.${index}.id`)}.
                      </span>
                      <h3
                        className={`text-2xl md:text-4xl lg:text-5xl font-black transition-all duration-500 tracking-tight uppercase ${
                          isOpen
                            ? "text-black dark:text-white"
                            : `text-gray-300 dark:text-gray-500 ${
                                !isMobile
                                  ? "group-hover:text-black dark:group-hover:text-white"
                                  : ""
                              }`
                        }`}
                      >
                        {t(`steps.${index}.title`)}
                      </h3>
                    </div>

                    <div
                      className={`shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border transition-all duration-500 ${
                        isOpen
                          ? "bg-brand-red border-brand-red text-white rotate-45 shadow-[0_0_30px_rgba(220,38,38,0.3)]"
                          : `border-black/5 dark:border-white/10 text-gray-300 dark:text-gray-500 ${
                              !isMobile
                                ? "group-hover:border-black/20 dark:group-hover:border-white/30 group-hover:text-black dark:group-hover:text-white"
                                : ""
                            }`
                      }`}
                    >
                      <ArrowUpRight
                        size={isOpen ? 32 : 24}
                        strokeWidth={isOpen ? 3 : 2}
                      />
                    </div>
                  </div>

                  <div
                    className={`grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-10"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`pl-14 md:pl-[6.5rem] border-l-2 border-brand-red/30`}
                      >
                        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-3xl text-justify">
                          {t(`steps.${index}.description`)}
                        </p>

                        {isOpen && (
                          <div className="mt-8 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-black/[0.03] dark:bg-white/5 flex items-center justify-center text-brand-red border border-black/5 dark:border-white/10">
                              <IconComponent size={24} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red">
                              {t("badge")}
                            </span>
                          </div>
                        )}
                      </div>
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
