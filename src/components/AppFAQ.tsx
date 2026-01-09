"use client";
import React, { useState } from "react";
import { ArrowUpRight, HelpCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export const AppFAQ: React.FC = () => {
  const t = useTranslations("AppFAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-24 md:py-40 bg-white dark:bg-[#000000] text-black dark:text-white overflow-hidden transition-colors duration-500">
      {/* Noise Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Title Area - Sticky */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-40">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/5 dark:bg-brand-red/10 border border-brand-red/10 mb-6">
                <HelpCircle
                  size={14}
                  className="text-brand-red animate-pulse"
                />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
                  {t("badge")}
                </span>
              </div>
              <h2
                className="text-4xl md:text-6xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.9] uppercase mb-10 text-black dark:text-white"
                dangerouslySetInnerHTML={{
                  __html: t.raw("title").replace(/{br}/g, "<br/>"),
                }}
              />
              <div className="w-24 h-1.5 bg-brand-red rounded-full"></div>
            </div>
          </div>

          {/* Right Accordion Area */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-black/10 dark:divide-white/10 border-t border-b border-black/10 dark:border-white/10">
            {(t.raw("items") as any[]).map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="py-10 group cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex items-start justify-between gap-8">
                    <h3
                      className={`text-xl md:text-2xl lg:text-3xl font-black transition-colors duration-500 uppercase tracking-tight leading-tight ${
                        isOpen
                          ? "text-black dark:text-white"
                          : "text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`shrink-0 transition-all duration-500 transform ${
                        isOpen ? "rotate-0" : "-rotate-45"
                      }`}
                    >
                      <ArrowUpRight
                        className={`${
                          isOpen
                            ? "text-brand-red"
                            : "text-gray-300 dark:text-gray-600"
                        } w-8 h-8 md:w-10 md:h-10`}
                      />
                    </div>
                  </div>

                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-10"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-3xl"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
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
