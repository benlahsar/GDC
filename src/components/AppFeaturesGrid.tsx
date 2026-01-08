
"use client"
import React from 'react';
import { Award, Target, Zap, Search, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

const ICONS = [Award, Target, Zap, Search, MessageSquare, ShieldCheck];

export const AppFeaturesGrid: React.FC = () => {
  const t = useTranslations("AppFeaturesGrid");

  return (
    <section className="relative w-full py-20 px-4 md:px-8 lg:px-12 bg-[#F0F0F2] dark:bg-[#050505] transition-colors duration-500 border-t border-black/5 dark:border-white/5">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {(t.raw("items") as any[]).map((feat, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-[35px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 hover:border-brand-red/30 transition-all duration-500 flex flex-col items-center text-center shadow-xl dark:shadow-none"
              >
                {/* Icon Container */}
                <div className="mb-6 w-14 h-14 rounded-2xl bg-brand-red/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-500 border border-brand-red/10">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-[13px] font-black text-black dark:text-white uppercase tracking-tight mb-4 group-hover:text-brand-red transition-colors leading-tight min-h-[40px] flex items-center">
                  {feat.title}
                </h3>

                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                  {feat.desc}
                </p>

                {/* Bottom Decorative Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-red group-hover:w-full transition-all duration-700"></div>

                {/* Subtle Sparkle Decor */}
                <Sparkles className="absolute top-4 right-4 text-brand-red opacity-0 group-hover:opacity-30 transition-opacity" size={10} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
