"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Star, Sparkles, Quote } from "lucide-react";

export const AppTestimonials: React.FC = () => {
  const t = useTranslations("AppTestimonials");
  const testimonials = t.raw("items") as any[];

  return (
    <section className="relative w-full py-24 md:py-32 bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/[0.02] rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-20">
        <div className="text-center mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm">
            <Sparkles size={14} className="text-brand-red animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-800 dark:text-gray-200">
              {t("badge")}
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black dark:text-white uppercase mb-8 max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{
              __html: t.raw("title").replace(/{br}/g, "<br/>"),
            }}
          />
        </div>

        {/* Testimonials Wall (Horizontal Auto-Scroll) */}
        <div className="relative mt-20">
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-20 pointer-events-none transition-colors duration-500"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-20 pointer-events-none transition-colors duration-500"></div>

          <div className="flex animate-scroll hover:[animation-play-state:paused] gap-6 w-max">
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div
                key={idx}
                className="w-[350px] md:w-[420px] shrink-0 bg-white dark:bg-[#0A0A0A] rounded-[32px] p-8 md:p-10 border border-black/5 dark:border-white/5 shadow-2xl flex flex-col justify-between min-h-[300px] md:min-h-[340px] transition-all duration-500 hover:scale-[1.02] hover:border-brand-red/20"
              >
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 text-black/5 dark:text-white/5 w-12 h-12 rotate-180" />

                  <div className="mb-6 relative z-10">
                    <h4 className="text-xl md:text-2xl font-black text-black dark:text-white leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest mt-1">
                      {item.role}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed font-medium mb-8 relative z-10 line-clamp-5">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-brand-red text-brand-red"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer Navigation Dots (Visual Only to match screenshot) */}
        <div className="flex justify-center gap-3 mt-16">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === 1
                  ? "w-8 bg-brand-red"
                  : "w-2 bg-gray-300 dark:bg-white/10"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
