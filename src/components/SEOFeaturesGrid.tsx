"use client";

import React, { useState, useEffect } from "react";
import {
  Award,
  PenTool,
  CheckCircle2,
  Search,
  MessagesSquare,
  Lock,
  Check,
  Sparkles,
  ArrowUpRight,
  Zap,
  ArrowRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const SEOFeaturesGrid: React.FC = () => {
  const t = useTranslations("seo");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const FEATURES = [
    {
      title: t("features_grid.items.natural.title"),
      desc: t("features_grid.items.natural.description"),
      icon: Award,
      color: "text-brand-red",
      bg: "bg-brand-red/10",
      span: "lg:col-span-8",
      delay: 100,
    },
    {
      title: t("features_grid.items.custom.title"),
      desc: t("features_grid.items.custom.description"),
      icon: PenTool,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      span: "lg:col-span-4",
      delay: 200,
    },
    {
      title: t("features_grid.items.guarantee.title"),
      desc: t("features_grid.items.guarantee.description"),
      points: t.raw("features_grid.items.guarantee.points"),
      icon: CheckCircle2,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      span: "lg:col-span-4",
      delay: 300,
    },
    {
      title: t("features_grid.items.local.title"),
      desc: t("features_grid.items.local.description"),
      icon: Search,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      span: "lg:col-span-8",
      delay: 400,
    },
    {
      title: t("features_grid.items.support.title"),
      desc: t("features_grid.items.support.description"),
      icon: MessagesSquare,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      span: "lg:col-span-6",
      delay: 500,
    },
    {
      title: t("features_grid.items.security.title"),
      desc: t("features_grid.items.security.description"),
      points: t.raw("features_grid.items.security.points"),
      icon: Lock,
      color: "text-brand-red",
      bg: "bg-brand-red/10",
      span: "lg:col-span-6",
      delay: 600,
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-red/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
            <Sparkles size={14} className="text-brand-red animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
              {t("features_grid.badge")}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black dark:text-white mb-6 max-w-4xl mx-auto">
            {t.rich("features_grid.title", {
              seo: (chunks) => (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
                  {chunks}
                </span>
              ),
            })}
          </h2>
          <div className="w-24 h-1 bg-brand-red rounded-full opacity-40"></div>
        </div>

        {/* --- BENTO GLASS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {FEATURES.map((item, idx) => (
            <div
              key={idx}
              className={`${
                item.span
              } group relative rounded-[40px] overflow-hidden bg-white/40 dark:bg-white/[0.02] backdrop-blur-3xl saturate-150 border border-white/60 dark:border-white/10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col justify-between min-h-[300px] md:min-h-[350px] ${
                !isMobile
                  ? "hover:scale-[1.01] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_30px_70px_-20px_rgba(255,0,0,0.15)] hover:border-brand-red/30"
                  : "shadow-xl"
              } opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${item.delay}ms` }}
            >
              {/* Hover Glow Component */}
              {!isMobile && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              )}

              {/* Content Top */}
              <div className="relative z-10 p-8 md:p-12">
                <div className="flex justify-between items-start mb-10">
                  <div
                    className={`w-14 h-14 rounded-2xl ${
                      item.bg
                    } flex items-center justify-center ${
                      item.color
                    } border border-white/20 dark:border-white/5 shadow-inner transition-all duration-500 ${
                      !isMobile
                        ? "group-hover:scale-110 group-hover:rotate-6 group-hover:bg-brand-red group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-900/20"
                        : ""
                    }`}
                  >
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  {!isMobile && (
                    <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight
                        size={20}
                        className="text-black dark:text-white"
                      />
                    </div>
                  )}
                </div>

                <h3
                  className={`text-2xl md:text-3xl font-black text-black dark:text-white mb-6 leading-tight transition-colors duration-500 ${
                    !isMobile ? "group-hover:text-brand-red" : ""
                  }`}
                >
                  {item.title}
                </h3>

                <p className="text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl text-justify">
                  {item.desc}
                </p>

                {item.points && (
                  <ul className="mt-8 space-y-3">
                    {item.points.map((pt: string, pIdx: number) => (
                      <li key={pIdx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                          <Check
                            size={12}
                            className="text-brand-red"
                            strokeWidth={4}
                          />
                        </div>
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Accents */}
              <div className="relative z-10 px-8 pb-8 md:px-12 md:pb-12 mt-auto">
                <div className="h-[1px] w-full bg-black/5 dark:bg-white/5 mb-6"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Elite SEO v4.0
                    </span>
                  </div>
                  {item.span.includes("8") && !isMobile && (
                    <div className="flex gap-2">
                      <Zap
                        size={14}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                        Priorité Performance
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Shine Effect on Hover */}
              {!isMobile && (
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Global Action Banner */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 rounded-[50px] bg-black text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-none mb-4 italic uppercase">
              {t.rich("features_grid.banner.title", {
                aujourdhui: (chunks) => (
                  <span className="text-brand-red not-italic">{chunks}</span>
                ),
                br: () => <br />,
              })}
            </h3>
            <p className="text-gray-400 font-medium text-lg leading-relaxed">
              {t("features_grid.banner.description")}
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <a
              href="#contact"
              className="group/btn flex items-center justify-center gap-6 px-12 py-7 rounded-full bg-white text-black font-black uppercase text-xs tracking-[0.3em] hover:scale-105 hover:bg-brand-red hover:text-white transition-all shadow-xl"
            >
              {t("features_grid.banner.cta")}{" "}
              <ArrowRight
                size={20}
                className="group-hover/btn:translate-x-2 transition-transform duration-500"
              />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};
