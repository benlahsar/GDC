"use client";

import React from "react";
import { ArrowRight, MessageCircle, Sparkles, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export const AgencyFinalCTA: React.FC<{ isMobile?: boolean }> = ({
  isMobile,
}) => {
  const t = useTranslations("AgencyFinalCTA");

  return (
    <section className="relative w-full pt-32 md:pt-48 pb-0 overflow-hidden bg-white dark:bg-[#020202] transition-colors duration-1000">
      {/* --- CINEMATIC TRANSITION BACKGROUND --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Ambient Red Core */}
        <div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-brand-red/[0.04] rounded-full blur-[120px] transition-opacity duration-1000 ${
            !isMobile ? "animate-pulse" : ""
          }`}
        ></div>

        {/* Grid and Noise for texture consistency */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay"></div>

        {/* Bottom Fade to merge with Footer */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white dark:from-[#020202] to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-[1800px] text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-12 shadow-sm">
          <Zap size={16} className="text-brand-red animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-800 dark:text-gray-200">
            {t("badge")}
          </span>
        </div>

        {/* Massive Typographic Finale */}
        <div className="relative mb-20 md:mb-32">
          <h2 className="text-5xl md:text-8xl lg:text-[10rem] xl:text-[13rem] font-black text-black dark:text-white tracking-tighter leading-[0.8] uppercase flex flex-col items-center">
            <span className="block opacity-20 dark:opacity-10 select-none">
              {t("title.line1")}
            </span>
            <span className="block text-brand-red italic -mt-2 md:-mt-6 lg:-mt-10">
              {t("title.line2")}
            </span>
          </h2>

          {/* Floating Meta Info */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-between items-center pointer-events-none opacity-20 hidden lg:flex px-12">
            <span className="text-[10px] font-black uppercase tracking-[1em] rotate-90">
              {t("meta.protocol")}
            </span>
            <span className="text-[10px] font-black uppercase tracking-[1em] -rotate-90">
              {t("meta.standard")}
            </span>
          </div>
        </div>

        <p className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 mb-20 max-w-4xl mx-auto font-light leading-relaxed">
          {t.rich("description", {
            br: () => <br className="hidden md:block" />,
            highlight: (children) => (
              <span className="text-black dark:text-white font-black">
                {children}
              </span>
            ),
          })}
        </p>

        {/* The "Bridge" Button to the Footer/Contact */}
        <div className="pb-40">
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center p-1 rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red via-red-500 to-brand-red animate-spin-slow opacity-60 group-hover:opacity-100"></div>

            <div className="relative bg-white dark:bg-black px-12 py-7 md:px-20 md:py-10 rounded-full flex items-center gap-8 md:gap-12 transition-colors group-hover:bg-gray-50 dark:group-hover:bg-[#050505]">
              <div className="text-left">
                <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-1">
                  {t("cta_button.small_label")}
                </span>
                <span className="text-lg md:text-2xl font-black uppercase tracking-widest text-black dark:text-white">
                  {t("cta_button.main_label")}
                </span>
              </div>
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-brand-red flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform duration-500">
                <ArrowRight
                  size={32}
                  strokeWidth={2.5}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </div>
            </div>

            {!isMobile && (
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine pointer-events-none" />
            )}
          </a>
        </div>
      </div>

      <style>{`
          .animate-spin-slow {
            animation: spin 8s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes shine {
            100% { left: 125%; }
          }
        `}</style>
    </section>
  );
};
