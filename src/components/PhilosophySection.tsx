
import React from 'react';
import { Target, Shield, Rocket, Eye } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const PhilosophySection: React.FC = () => {
   const t = useTranslations("PhilosophySection");
   return (
      <section className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#000000] text-black dark:text-white transition-colors duration-500 border-t border-black/5 dark:border-white/5">

         <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">

            {/* Bento Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-min">

               {/* --- 1. MAIN TITLE CARD (Large, top left) --- */}
               <div className="col-span-1 md:col-span-2 lg:col-span-8 bg-white dark:bg-[#080808] rounded-[32px] p-8 md:p-12 border border-black/5 dark:border-white/10 flex flex-col justify-center shadow-sm">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black dark:bg-white text-white dark:text-black w-fit mb-6">
                     <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
                     <span className="text-[10px] font-bold uppercase tracking-widest">{t("badge")}</span>
                  </div>
                  <h2
                     className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-black dark:text-white"
                     dangerouslySetInnerHTML={{ __html: t.raw("mainTitle.text").replace(/{br}/g, "<br/>").replace(/{span}/g, `<span class="text-brand-red">${t("mainTitle.highlight")}</span>`) }}
                  />
                  <p
                     className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium max-w-3xl leading-relaxed"
                     dangerouslySetInnerHTML={{ __html: t.raw("mainDesc").replace(/<highlight>/g, '<span class="text-black dark:text-white font-bold">').replace(/<\/highlight>/g, "</span>") }}
                  />
               </div>

               {/* --- 2. VISION CARD (Highlight, top right) --- */}
               <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-[#0A0A0A] dark:bg-white text-white dark:text-black rounded-[32px] p-8 md:p-12 border border-black/5 dark:border-white/10 flex flex-col justify-between shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-brand-red flex items-center justify-center mb-6">
                     <Eye size={24} className="text-white" />
                  </div>
                  <div>
                     <h3 className="text-2xl font-black mb-4">{t("vision.title")}</h3>
                     <p className="text-base md:text-lg opacity-80 leading-relaxed font-medium">
                        {t("vision.desc")}
                     </p>
                  </div>
               </div>

               {/* --- 3. THREE PILLARS (Middle Row) --- */}

               {/* Pillar 1: Approche */}
               <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-white dark:bg-[#080808] rounded-[32px] p-8 border border-black/5 dark:border-white/10 hover:border-brand-red/30 transition-colors duration-300 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-white/5 text-brand-red">
                        <Target size={20} />
                     </div>
                     <h4 className="text-lg font-bold uppercase tracking-wide text-black dark:text-white">{t("pillars.approach.title")}</h4>
                  </div>
                  <ul className="space-y-4">
                     {t.raw("pillars.approach.items").map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0"></div>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Pillar 2: Engagements */}
               <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-white dark:bg-[#080808] rounded-[32px] p-8 border border-black/5 dark:border-white/10 hover:border-brand-red/30 transition-colors duration-300 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-white/5 text-brand-red">
                        <Shield size={20} />
                     </div>
                     <h4 className="text-lg font-bold uppercase tracking-wide text-black dark:text-white">{t("pillars.commitments.title")}</h4>
                  </div>
                  <ul className="space-y-4">
                     {t.raw("pillars.commitments.items").map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0"></div>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Pillar 3: Avantage */}
               <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-white dark:bg-[#080808] rounded-[32px] p-8 border border-black/5 dark:border-white/10 hover:border-brand-red/30 transition-colors duration-300 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-white/5 text-brand-red">
                        <Rocket size={20} />
                     </div>
                     <h4 className="text-lg font-bold uppercase tracking-wide text-black dark:text-white">{t("pillars.advantage.title")}</h4>
                  </div>
                  <ul className="space-y-4">
                     {t.raw("pillars.advantage.items").map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0"></div>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>

            </div>
         </div>
      </section>
   );
};
