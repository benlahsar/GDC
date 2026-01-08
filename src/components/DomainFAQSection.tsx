"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus, ArrowDownRight, Sparkles, HelpCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const DomainFAQSection: React.FC = () => {
  const t = useTranslations("DomainFAQSection");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const FAQS = Array.from({ length: 10 }).map((_, i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`)
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/[0.02] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/[0.02] rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* --- LEFT SIDE: STICKY TITLE --- */}
          <div className="lg:col-span-5">
            <div className={`lg:sticky lg:top-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

              <div className="mb-8">
                <Sparkles className="text-brand-red w-8 h-8 mb-6 animate-pulse" />
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1] text-black dark:text-white mb-6"
                  dangerouslySetInnerHTML={{ __html: t.raw("header.title").replace(/{br}/g, "<br/>") }}
                />
                <div className="w-20 h-1.5 bg-brand-red rounded-full"></div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-md hidden lg:block">
                {t("header.desc")}
              </p>

              <div className="mt-12 hidden lg:block">
                <div className="p-6 rounded-[24px] bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/10 transition-colors duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-black dark:text-white group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                        <HelpCircle size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-black dark:text-white">{t("header.supportTitle")}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t("header.supportDesc")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: ACCORDION LIST --- */}
          <div className={`lg:col-span-7 flex flex-col transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="divide-y divide-black/10 dark:divide-white/10 border-t border-b border-black/10 dark:border-white/10">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group cursor-pointer py-6 md:py-8"
                  >
                    <div className="flex items-start justify-between gap-6 select-none">
                      <h3 className={`
                                            text-lg md:text-xl font-bold leading-tight transition-colors duration-300
                                            ${isOpen
                          ? 'text-black dark:text-white'
                          : 'text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white'
                        }
                                        `}>
                        {faq.question}
                      </h3>
                      <div className={`
                                            shrink-0 transition-transform duration-500
                                            ${isOpen ? 'rotate-0' : '-rotate-90'}
                                        `}>
                        <ArrowDownRight
                          className={`w-6 h-6 md:w-8 md:h-8 ${isOpen ? 'text-brand-red' : 'text-gray-400 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white'}`}
                        />
                      </div>
                    </div>

                    <div
                      className={`
                                            grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                                            ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}
                                        `}
                    >
                      <div className="overflow-hidden">
                        <p className="text-base text-gray-600 dark:text-gray-300 font-medium leading-relaxed pl-0 md:pl-4 border-l-2 border-brand-red/0 md:border-brand-red md:ml-1">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
