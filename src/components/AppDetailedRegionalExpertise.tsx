"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export const AppDetailedRegionalExpertise: React.FC = () => {
  const t = useTranslations("AppDetailedRegionalExpertise");

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#000000] transition-colors duration-500 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/[0.02] rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
            <Sparkles size={14} className="text-brand-red animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-800 dark:text-gray-200">
              {t("badge")}
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black dark:text-white uppercase mb-8"
            dangerouslySetInnerHTML={{
              __html: t.raw("headerTitle").replace(/{br}/g, "<br/>"),
            }}
          />
          <div className="w-32 h-2 bg-brand-red mx-auto rounded-full shadow-[0_4px_20px_rgba(255,0,0,0.3)]"></div>
        </div>

        {/* Vertical List of Horizontal Cards */}
        <div className="flex flex-col gap-10 md:gap-16">
          {(t.raw("items") as any[]).map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col lg:flex-row items-stretch bg-white dark:bg-[#080808] rounded-[40px] md:rounded-[60px] border-2 border-brand-red shadow-2xl shadow-brand-red/5 overflow-hidden transition-all duration-700 hover:shadow-brand-red/10 hover:-translate-y-1"
            >
              {/* Image Side (Left on Desktop) */}
              <div className="lg:w-[40%] xl:w-[35%] h-[300px] lg:h-auto relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Content Side (Right on Desktop) */}
              <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-brand-red mb-3 block">
                    Group Digital Concept
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-blue-600 dark:text-brand-red leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed text-justify mb-8">
                  {item.desc}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white shadow-lg group-hover:rotate-45 transition-transform duration-500">
                    <ArrowRight size={18} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-brand-red transition-colors">
                    {t("cta")}
                  </span>
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent skew-x-12 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
