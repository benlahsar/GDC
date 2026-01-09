"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Target,
  Activity,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const AppDeepExpertise: React.FC = () => {
  const t = useTranslations("AppDeepExpertise");
  return (
    <section className="relative w-full py-24 md:py-32 px-4 md:px-8 lg:px-12 overflow-hidden border-t border-black/5 dark:border-white/5 bg-[#F0F0F2] dark:bg-[#050505] transition-colors duration-500">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* LEFT COLUMN: WHY CHOOSE US (Content from image) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-brand-red tracking-tighter leading-none uppercase mb-10">
                {t("title")}
              </h2>
              <p
                className="text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-8 border-l-2 border-brand-red pl-6"
                dangerouslySetInnerHTML={{ __html: t.raw("intro") }}
              />
            </div>

            <div className="space-y-12">
              {(t.raw("items") as any[]).map((item, idx) => {
                const Icon = [ShieldCheck, Zap, Target][idx % 3];
                return (
                  <div key={idx} className="group">
                    <h3 className="text-xl font-black text-black dark:text-white mb-4 flex items-center gap-3">
                      <Icon className="text-brand-red shrink-0" size={24} />{" "}
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium pl-9 group-hover:text-black dark:group-hover:text-gray-200 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-4 px-10 py-5 bg-brand-red text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-2xl shadow-red-900/20"
              >
                {t("cta")} <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: PROCESS & GUARANTEES (Split Layout) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:pt-10">
            {/* BOX 01: NOTRE PROCESSUS */}
            <div className="p-10 rounded-[45px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 relative overflow-hidden group hover:border-brand-red/30 transition-all duration-500 shadow-lg dark:shadow-none">
              <span className="text-8xl font-black text-black/[0.03] dark:text-white/[0.03] absolute -top-4 -right-4 select-none group-hover:text-brand-red/5 transition-colors">
                01
              </span>

              <h3
                className="text-2xl font-black text-black dark:text-white mb-10 tracking-tight uppercase border-b border-brand-red/30 pb-5"
                dangerouslySetInnerHTML={{
                  __html: t.raw("process.title").replace(/{br}/g, "<br/>"),
                }}
              />

              <div className="space-y-8 relative z-10">
                {(t.raw("process.steps") as any[]).map((step, idx) => {
                  const Icon = [Activity, Zap, Target][idx % 3];
                  return (
                    <div key={idx} className="group/item">
                      <h4 className="text-brand-red font-black text-[11px] uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Icon size={14} /> {step.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* BOX 02: EXPERTISE TECHNIQUE */}
            <div className="p-10 rounded-[45px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 relative overflow-hidden group hover:border-brand-red/30 transition-all duration-500 shadow-lg dark:shadow-none">
              <span className="text-8xl font-black text-black/[0.03] dark:text-white/[0.03] absolute -top-4 -right-4 select-none group-hover:text-brand-red/5 transition-colors">
                02
              </span>

              <h3
                className="text-2xl font-black text-black dark:text-white mb-10 tracking-tight uppercase border-b border-brand-red/30 pb-5"
                dangerouslySetInnerHTML={{
                  __html: t.raw("expertise.title").replace(/{br}/g, "<br/>"),
                }}
              />

              <div className="space-y-6 relative z-10">
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-4">
                  {t("expertise.guaranteesTitle")}
                </p>
                <ul className="space-y-4">
                  {(t.raw("expertise.guarantees") as string[]).map(
                    (item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-xs font-bold text-gray-600 dark:text-gray-300"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-brand-red mt-0.5 shrink-0"
                        />{" "}
                        {item}
                      </li>
                    )
                  )}
                </ul>

                <div className="pt-8 mt-8 border-t border-black/5 dark:border-white/10">
                  <p className="text-[10px] font-black text-brand-red uppercase tracking-widest mb-6">
                    {t("expertise.objectivesTitle")}
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {(t.raw("expertise.objectives") as string[]).map(
                      (res, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 group-hover:bg-brand-red/5 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                          <span className="text-[11px] font-black text-black dark:text-white uppercase tracking-tight">
                            {res}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
