"use client";
import React from "react";
import {
  MapPin,
  Palmtree,
  Building2,
  Landmark,
  Globe,
  Sun,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const AppRegionalExpertise: React.FC = () => {
  const t = useTranslations("AppRegionalExpertise");
  const icons = [Globe, Palmtree, Building2, Landmark, Globe, Sun];
  const accents = [
    "from-brand-red/20 to-red-600/20",
    "from-orange-500/20 to-amber-500/20",
    "from-blue-600/20 to-indigo-600/20",
    "from-emerald-600/20 to-teal-600/20",
    "from-violet-600/20 to-purple-600/20",
    "from-yellow-500/20 to-orange-500/20",
  ];
  return (
    <section className="relative w-full py-24 bg-[#F0F0F2] dark:bg-[#000000] overflow-hidden transition-colors duration-500">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-brand-red/[0.02] blur-[150px] rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {(t.raw("items") as any[]).map((item, idx) => {
            const Icon = icons[idx % icons.length];
            const accent = accents[idx % accents.length];
            return (
              <div
                key={idx}
                className="group relative bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-[40px] p-8 flex flex-col justify-between min-h-[350px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Card Accent Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                ></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-black border border-black/5 dark:border-white/10 flex items-center justify-center text-brand-red shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight
                        size={14}
                        className="text-black dark:text-white"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-black dark:text-white leading-tight mb-4 group-hover:text-brand-red transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium line-clamp-6 group-hover:line-clamp-none transition-all duration-300">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex items-center gap-2">
                  <MapPin size={12} className="text-brand-red" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    {item.city}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
