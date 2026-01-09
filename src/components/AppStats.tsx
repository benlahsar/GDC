"use client";

import React from "react";
import {
  Smartphone,
  Globe,
  Zap,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Truck,
} from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { useTranslations } from "next-intl";

export const AppStats: React.FC = () => {
  const t = useTranslations("AppStats");
  const icons = [CheckCircle2, Truck, Zap, TrendingUp, ShieldCheck];

  return (
    <section className="relative w-full py-16 md:py-24 bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1700px] relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-black dark:text-white tracking-tight leading-tight max-w-4xl mx-auto uppercase">
            {t("header.title")} <br />
            <span className="text-gray-500 dark:text-gray-400">
              {t("header.subtitle")}
            </span>
          </h2>
        </div>

        {/* Counter Grid */}
        <div className="relative p-1 rounded-[40px] md:rounded-[60px] border-2 border-brand-red overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 bg-white dark:bg-[#0A0A0A] divide-y lg:divide-y-0 lg:divide-x divide-brand-red/10">
            {(t.raw("items") as any[]).map((stat, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="group p-10 flex flex-col items-center justify-center text-center hover:bg-brand-red/[0.02] transition-colors duration-500"
                >
                  <div className="mb-6 text-brand-red group-hover:scale-110 transition-transform duration-500">
                    <Icon size={36} strokeWidth={1.5} />
                  </div>

                  <div className="flex items-baseline justify-center mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tighter"
                    />
                  </div>

                  <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                    {stat.label || stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
