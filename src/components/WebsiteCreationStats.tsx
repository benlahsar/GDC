"use client";
import React from "react";
import {
  CheckCircle2,
  Truck,
  Zap,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { useTranslations } from "next-intl";

const getStats = (t: any) => [
  {
    id: 1,
    icon: CheckCircle2,
    value: 200,
    prefix: "+",
    label: t("stats.sites.label"),
    sub: t("stats.sites.sub"),
  },
  {
    id: 2,
    icon: Truck,
    value: 30,
    label: t("stats.delivery.label"),
    sub: t("stats.delivery.sub"),
  },
  {
    id: 3,
    icon: Zap,
    value: 1,
    prefix: "<",
    suffix: "s",
    label: t("stats.speed.label"),
    sub: t("stats.speed.sub"),
  },
  {
    id: 4,
    icon: TrendingUp,
    value: 55,
    prefix: "+",
    suffix: "%",
    label: t("stats.seo.label"),
    sub: t("stats.seo.sub"),
  },
  {
    id: 5,
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: t("stats.security.label"),
    sub: t("stats.security.sub"),
  },
];

export const WebsiteCreationStats: React.FC = () => {
  const t = useTranslations("WebsiteCreationStats");
  const STATS = getStats(t);

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#F0F0F2] dark:bg-[#000000] transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">
      {/* Background FX */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-red/[0.03] blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
            <Sparkles size={14} className="text-brand-red animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
              {t("badge")}
            </span>
          </div>

          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter text-black dark:text-white leading-tight"
            dangerouslySetInnerHTML={{
              __html: t
                .raw("title")
                .replace(/{br}/g, "<br/>")
                .replace(
                  /{span}/g,
                  `<span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">${t(
                    "titleHighlight"
                  )}</span>`
                ),
            }}
          />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-[32px] bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-black/5 dark:border-white/10 flex flex-col items-center justify-center text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-red/10 transition-all duration-500 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-500 text-brand-red shadow-lg">
                <stat.icon size={32} strokeWidth={1.5} />
              </div>

              {/* Value */}
              <div className="flex items-baseline gap-1 mb-2">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="text-4xl lg:text-5xl font-black text-black dark:text-white tracking-tighter"
                />
              </div>

              {/* Label */}
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 group-hover:text-brand-red transition-colors">
                {stat.label}
              </h3>

              {/* Sub Label */}
              <p className="text-xs font-medium text-gray-400 dark:text-gray-500 opacity-80">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
