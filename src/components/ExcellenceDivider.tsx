
import React, { useState, useEffect } from 'react';
import { Trophy, PenTool, Cpu, Search, MessageCircle, Lock, CornerDownRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const getFeatures = (t: any) => [
   {
      id: "01",
      icon: Trophy,
      title: t("items.01.title"),
      desc: t("items.01.desc")
   },
   {
      id: "02",
      icon: PenTool,
      title: t("items.02.title"),
      desc: t("items.02.desc")
   },
   {
      id: "03",
      icon: Cpu,
      title: t("items.03.title"),
      desc: t("items.03.desc")
   },
   {
      id: "04",
      icon: Search,
      title: t("items.04.title"),
      desc: t("items.04.desc")
   },
   {
      id: "05",
      icon: MessageCircle,
      title: t("items.05.title"),
      desc: t("items.05.desc")
   },
   {
      id: "06",
      icon: Lock,
      title: t("items.06.title"),
      desc: t("items.06.desc")
   }
];

export const ExcellenceDivider: React.FC = () => {
   const t = useTranslations("ExcellenceDivider");
   const [isMobile, setIsMobile] = useState(false);
   const FEATURES = getFeatures(t);

   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
   }, []);

   return (
      <section className="relative w-full z-30 bg-[#F0F0F2] dark:bg-[#050505] transition-colors duration-500 py-24">

         {/* Tech decorative lines */}
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-brand-red shadow-[0_0_15px_rgba(255,0,0,0.6)]"></div>

         <div className="max-w-[1800px] mx-auto px-4 md:px-8">

            {/* Header - UPDATED based on user request */}
            <div className="flex flex-col items-center text-center mb-20 relative">
               <div className="w-[1px] h-16 bg-gradient-to-b from-brand-red to-transparent mb-6"></div>

               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black dark:text-white mb-6">
                  {t("title")} <span className="text-brand-red">{t("highlight")}</span>
               </h2>

               <p className="max-w-2xl text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                  {t("description")}
               </p>
            </div>

            {/* Precision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 overflow-hidden rounded-[40px] shadow-2xl">

               {FEATURES.map((item, index) => (
                  <div
                     key={index}
                     className="group relative bg-[#F0F0F2] dark:bg-[#050505] p-6 md:p-10 xl:p-12 flex flex-col gap-6 hover:bg-white dark:hover:bg-[#0A0A0A] transition-all duration-500"
                  >
                     {/* Hover Gradient Effect */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-[100px] -translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                     {/* Header with Icon and Title */}
                     <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                           <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-black dark:text-white group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                              <item.icon size={24} strokeWidth={1.5} />
                           </div>
                           <span className="text-[50px] md:text-[60px] leading-none font-black text-black/[0.03] dark:text-white/[0.03] group-hover:text-brand-red/[0.05] transition-colors duration-500 font-sans select-none">
                              {item.id}
                           </span>
                        </div>

                        <h3 className="text-lg md:text-xl font-bold text-black dark:text-white leading-tight group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                           {item.title}
                        </h3>

                        {/* Decorative Line */}
                        <div className="w-12 h-[2px] bg-black/10 dark:bg-white/10 mt-4 group-hover:w-full group-hover:bg-brand-red/50 transition-all duration-700"></div>
                     </div>

                     {/* Content */}
                     <div className="relative z-10 flex-grow">
                        <p className="text-sm md:text-base leading-relaxed text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-gray-300 transition-colors duration-300 text-justify">
                           {item.desc}
                        </p>
                     </div>

                     {/* Bottom Indicator */}
                     <div className="relative z-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <CornerDownRight size={12} />
                        {t("cta")}
                     </div>

                  </div>
               ))}

            </div>
         </div>
      </section>
   );
};
