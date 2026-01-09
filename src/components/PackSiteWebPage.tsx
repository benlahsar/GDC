"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Target,
  Rocket,
  Crown,
  Monitor,
  Globe,
  MousePointer2,
  Check,
  Star,
  CheckCircle2,
  Cpu,
  Layout,
  Smartphone,
  Search as SearchIcon,
  MoveDown,
  Navigation,
  Hexagon,
  Compass,
  CheckCircle,
  Palette,
  ShieldAlert,
  Box,
  Users,
  ChevronRight,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { AnimatedCounter } from "./AnimatedCounter";

export const PackSiteWebPage: React.FC = () => {
  const t = useTranslations("pack-siteweb");
  const valuesSectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const PRICING_PACKS = [
    {
      name: t("pricing.packs.starter.name"),
      price: t("pricing.packs.starter.price"),
      currency: t("pricing.packs.starter.currency"),
      tax: t("pricing.packs.starter.tax"),
      features: t.raw("pricing.packs.starter.features"),
      highlight: false,
      color: "from-blue-500/10 to-indigo-500/10",
      accent: "blue",
    },
    {
      name: t("pricing.packs.pro.name"),
      price: t("pricing.packs.pro.price"),
      currency: t("pricing.packs.pro.currency"),
      tax: t("pricing.packs.pro.tax"),
      features: t.raw("pricing.packs.pro.features"),
      highlight: true,
      color: "from-brand-red/20 to-red-900/20",
      accent: "red",
    },
    {
      name: t("pricing.packs.ultime.name"),
      price: t("pricing.packs.ultime.price"),
      currency: t("pricing.packs.ultime.currency"),
      tax: t("pricing.packs.ultime.tax"),
      features: t.raw("pricing.packs.ultime.features"),
      highlight: false,
      color: "from-purple-500/10 to-pink-600/10",
      accent: "purple",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !valuesSectionRef.current) return;
    const rect = valuesSectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    valuesSectionRef.current.style.setProperty("--mouse-x", `${x}px`);
    valuesSectionRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="bg-[#F4F4F5] dark:bg-[#020202] min-h-screen transition-colors duration-700 overflow-x-hidden relative selection:bg-brand-red selection:text-white pb-0">
      {/* --- CINEMATIC AMBIENCE --- */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ contain: "paint" }}
      >
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-brand-red/[0.04] rounded-full blur-[150px] transform-gpu"></div>
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-purple-600/[0.02] rounded-full blur-[150px] transform-gpu"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#F4F4F5_90%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#020202_90%)] transition-colors duration-700"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pt-48 md:pt-64 pb-20 px-4 md:px-8 z-10 overflow-hidden">
        <div className="text-center select-none">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-8 ${
              isMobile ? "" : "opacity-0 animate-fade-in-up"
            }`}
          >
            <Sparkles size={14} className="text-brand-red animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black dark:text-white">
              {t("hero.badge")}
            </span>
          </div>

          <p
            className={`text-gray-400 dark:text-gray-600 text-lg md:text-2xl font-black uppercase tracking-[0.8em] italic mb-10 ${
              isMobile ? "" : "opacity-0 animate-fade-in-up"
            }`}
            style={!isMobile ? { animationDelay: "100ms" } : {}}
          >
            {t("hero.vision")}
          </p>

          <h1
            className={`text-6xl md:text-9xl lg:text-[14rem] font-black text-black dark:text-white tracking-tighter leading-[0.8] uppercase mb-16 ${
              isMobile ? "" : "opacity-0 animate-fade-in-up"
            }`}
            style={!isMobile ? { animationDelay: "200ms" } : {}}
          >
            {t("hero.title_part1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-red-800 drop-shadow-xl">
              {t("hero.title_part2")}
            </span>
          </h1>

          <div
            className={`flex flex-col items-center gap-12 ${
              isMobile ? "" : "opacity-0 animate-fade-in-up"
            }`}
            style={!isMobile ? { animationDelay: "400ms" } : {}}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-brand-red"></div>
              <span className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-sm">
                {t("hero.subtitle")}
              </span>
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-brand-red"></div>
            </div>

            <div className="flex flex-col items-center gap-4 opacity-40">
              <div className="w-6 h-10 border-2 border-black/30 dark:border-white/30 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-black dark:bg-white rounded-full animate-bounce"></div>
              </div>
              <span className="text-[8px] font-black uppercase tracking-[0.5em] text-black dark:text-white">
                {t("hero.scroll")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section
        ref={valuesSectionRef}
        onMouseMove={handleMouseMove}
        className="relative py-32 px-4 md:px-8 lg:px-12 max-w-[1700px] mx-auto z-20 group/values-section bg-transparent"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {[
            {
              id: "01",
              title: t("values.v1.title"),
              desc: t("values.v1.desc"),
              icon: Hexagon,
              color: "from-orange-500/20 to-red-500/20",
            },
            {
              id: "02",
              title: t("values.v2.title"),
              desc: t("values.v2.desc"),
              icon: Zap,
              color: "from-purple-500/20 to-indigo-500/20",
            },
            {
              id: "03",
              title: t("values.v3.title"),
              desc: t("values.v3.desc"),
              icon: Rocket,
              color: "from-red-500/20 to-brand-red/20",
            },
          ].map((val, i) => (
            <div
              key={i}
              className={`group relative h-full ${
                isMobile ? "" : "perspective-1000"
              }`}
            >
              <div
                className={`
                  relative h-full w-full rounded-[48px] p-12 md:p-14 
                  bg-white/40 dark:bg-[#0A0A0A]/40 backdrop-blur-3xl saturate-150
                  border border-black/5 dark:border-white/10
                  transition-all duration-700 ease-out flex flex-col justify-between
                  shadow-xl dark:shadow-2xl 
                  ${
                    isMobile
                      ? "opacity-100"
                      : "opacity-0 animate-fade-in-up hover:border-brand-red/30 transform-gpu hover:scale-[1.02] hover:shadow-[0_40px_80px_-20px_rgba(255,0,0,0.15)]"
                  }
                `}
                style={
                  !isMobile ? { animationDelay: `${400 + i * 200}ms` } : {}
                }
              >
                {!isMobile && (
                  <>
                    <div
                      className={`absolute -inset-[1px] bg-gradient-to-br ${val.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[48px] blur-xl -z-10`}
                    ></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[48px] spotlight-overlay"></div>
                  </>
                )}

                <div className="relative z-20">
                  <div className="mb-12 flex justify-between items-start">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-black dark:text-white transition-all duration-500 ${
                        isMobile
                          ? ""
                          : "group-hover:bg-brand-red group-hover:text-white group-hover:scale-110 group-hover:rotate-6"
                      }`}
                    >
                      <val.icon size={28} strokeWidth={1.5} />
                    </div>
                    <span
                      className={`text-8xl font-black text-black/[0.05] dark:text-white/[0.05] select-none leading-none italic ${
                        !isMobile
                          ? "transition-colors duration-500 group-hover:text-brand-red/10"
                          : ""
                      }`}
                    >
                      {val.id}
                    </span>
                  </div>
                  <h3
                    className={`text-4xl md:text-5xl font-black text-black dark:text-white tracking-tighter uppercase mb-6 leading-none ${
                      !isMobile
                        ? "transition-colors duration-500 group-hover:text-brand-red"
                        : ""
                    }`}
                  >
                    {val.title}
                  </h3>
                  <div
                    className={`w-12 h-1 bg-brand-red rounded-full mb-8 ${
                      !isMobile
                        ? "group-hover:w-24 transition-all duration-500"
                        : ""
                    }`}
                  ></div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-medium leading-relaxed transition-colors duration-500 group-hover:text-black dark:group-hover:text-white/90">
                    {val.desc}
                  </p>
                </div>
                <div
                  className={`mt-12 pt-8 border-t border-black/5 dark:border-white/5 flex items-center justify-between transition-opacity duration-500 ${
                    isMobile
                      ? "opacity-100"
                      : "opacity-30 group-hover:opacity-100"
                  }`}
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-red">
                    {t("values.protocol")}
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className={`w-1 h-1 rounded-full ${
                          i % 2 === 0
                            ? "bg-black dark:bg-white"
                            : "bg-brand-red"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="relative py-32 px-4 md:px-8 lg:px-12 max-w-[1700px] mx-auto z-20 bg-transparent">
        <div
          className={`text-center mb-28 max-w-5xl mx-auto ${
            isMobile ? "" : "opacity-0 animate-fade-in-up"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red mb-12">
            <Crown size={16} className={!isMobile ? "animate-pulse" : ""} />
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">
              {t("pricing.badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black dark:text-white tracking-tighter leading-[1.0] mb-12 uppercase italic">
            {t.rich("pricing.title", {
              highlight: (chunks) => (
                <span className="text-brand-red not-italic">{chunks}</span>
              ),
            })}
          </h2>
          <div className="h-1.5 w-32 bg-brand-red mx-auto rounded-full shadow-[0_0_20px_red]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKS.map((pack, i) => (
            <div
              key={i}
              className={`
                  group relative flex flex-col 
                  rounded-[50px] p-10 md:p-14 
                  border transition-all duration-700
                  ${
                    pack.highlight
                      ? "bg-white dark:bg-[#0A0A0A] border-brand-red/40 shadow-2xl scale-[1.05] z-10"
                      : "bg-white/50 dark:bg-[#080808] border-black/5 dark:border-white/5 shadow-xl"
                  }
                  ${
                    !isMobile && !pack.highlight
                      ? "hover:border-black/10 dark:hover:border-white/10 hover:shadow-xl"
                      : ""
                  }
                  ${isMobile ? "" : "opacity-0 animate-fade-in-up"}
                `}
              style={!isMobile ? { animationDelay: `${200 + i * 150}ms` } : {}}
            >
              {!isMobile && (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pack.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}
                ></div>
              )}
              <div className="mb-10 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 text-[9px] font-black uppercase tracking-[0.3em] text-black dark:text-white">
                  {t("pricing.starting_at")}
                </div>
                <h3
                  className={`text-3xl font-black mt-6 uppercase tracking-tight ${
                    pack.highlight
                      ? "text-brand-red"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {pack.name}
                </h3>
              </div>
              <div className="mb-12 flex items-baseline gap-2 relative z-10">
                {pack.currency && (
                  <span className="text-3xl font-black text-black dark:text-white">
                    {pack.currency}
                  </span>
                )}
                <span className="text-7xl md:text-8xl font-black text-black dark:text-white tracking-tighter">
                  {pack.price}
                </span>
                {pack.tax && (
                  <span className="text-xs font-bold text-gray-500 uppercase ml-2 tracking-widest">
                    {pack.tax}
                  </span>
                )}
              </div>
              <div className="h-px w-full bg-black/5 dark:bg-white/10 mb-12 relative z-10"></div>
              <ul className="space-y-6 mb-16 flex-grow relative z-10">
                {pack.features.map((feat: string, fIdx: number) => (
                  <li key={fIdx} className="flex items-start gap-4 group/item">
                    <div
                      className={`mt-1.5 w-2 h-2 rounded-full transition-all duration-500 ${
                        pack.highlight
                          ? "bg-brand-red shadow-[0_0_10px_red]"
                          : isMobile
                          ? "bg-brand-red"
                          : "bg-gray-300 dark:bg-gray-700 group-hover/item:bg-brand-red"
                      }`}
                    ></div>
                    <span
                      className={`text-sm md:text-base font-bold text-gray-600 dark:text-gray-400 transition-colors ${
                        !isMobile
                          ? "group-hover/item:text-black dark:group-hover/item:text-white"
                          : ""
                      }`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-6 rounded-3xl font-black uppercase text-[12px] tracking-[0.4em] transition-all duration-500 shadow-xl overflow-hidden relative ${
                  pack.highlight
                    ? "bg-brand-red text-white"
                    : "bg-black dark:bg-white text-white dark:text-black"
                } ${
                  !isMobile
                    ? pack.highlight
                      ? "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                      : "hover:bg-brand-red hover:text-white"
                    : ""
                }`}
              >
                <span className="relative z-10">{t("pricing.cta")}</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- PREMIUM GRAPHICAL IMPACT SHOWCASE --- */}
      <section className="relative py-48 bg-transparent overflow-hidden transition-colors duration-700 border-t border-black/5 dark:border-white/5">
        {!isMobile && (
          <div
            className="absolute bottom-0 left-0 w-full h-[60%] overflow-hidden pointer-events-none z-0"
            style={{ contain: "paint" }}
          >
            <div className="absolute inset-0 [perspective:1200px] flex justify-center items-end">
              <div className="w-[200%] h-[150%] rotate-x-[75deg] opacity-20 dark:opacity-40 transition-opacity duration-1000 transform-gpu dot-pattern-floor"></div>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
          <div className="relative w-full overflow-hidden mb-32 whitespace-nowrap opacity-20 dark:opacity-40 transition-opacity border-y border-black/5 dark:border-white/5 py-10">
            <div
              className={`flex items-center w-max ${
                isMobile ? "" : "animate-scroll"
              }`}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="text-5xl md:text-8xl lg:text-[10rem] font-black text-black dark:text-white uppercase tracking-tighter mx-10"
                >
                  Group Digital Concept{" "}
                  <span className="text-brand-red">_</span>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-8">
            <div
              className={`
                    bg-white dark:bg-[#080808] rounded-[60px] p-10 md:p-14 
                    border border-black/5 dark:border-white/10 
                    shadow-2xl dark:shadow-[0_40px_100px_rgba(255,0,0,0.05)] 
                    relative group overflow-hidden h-full flex flex-col 
                    transition-all duration-700 
                    ${
                      !isMobile
                        ? "hover:-translate-y-4 hover:border-brand-red/20"
                        : ""
                    }
                `}
            >
              <div className="relative z-10">
                <div className="mb-10 w-16 h-16 rounded-[2rem] bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <Monitor size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-10 tracking-tighter leading-none uppercase">
                  {t.rich("showcase.custom_site.title")}
                </h3>
                <ul className="space-y-6">
                  {(t.raw("showcase.custom_site.features") as string[]).map(
                    (txt, i) => (
                      <li key={i} className="flex items-start gap-4 group/item">
                        <CheckCircle2
                          size={16}
                          className="text-brand-red mt-1 shrink-0"
                        />
                        <span
                          className={`text-sm md:text-base font-bold text-gray-600 dark:text-gray-400 transition-colors ${
                            !isMobile
                              ? "group-hover/item:text-black dark:group-hover/item:text-white"
                              : ""
                          }`}
                        >
                          {txt}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-12 py-10 lg:py-0 h-full">
              <div className="text-center group/hub-header">
                <h2 className="text-3xl md:text-4xl font-black text-black dark:text-white uppercase tracking-tighter leading-tight mb-4">
                  {t.rich("showcase.hub.title", {
                    highlight: (chunks) => (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400 dark:from-brand-red dark:to-red-300 font-black">
                        {chunks}
                      </span>
                    ),
                  })}
                </h2>
              </div>

              <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center group/hub cursor-pointer">
                <div className="absolute inset-0 bg-brand-red/5 dark:bg-brand-red/10 rounded-full blur-[100px] animate-pulse"></div>
                <div
                  className={`
                            relative z-10 w-full h-full 
                            bg-white dark:bg-[#0A0A0A] 
                            border border-black/10 dark:border-white/10 
                            rounded-[80px] p-10 
                            shadow-2xl shadow-black/20 
                            transition-all duration-1000
                            ${
                              isMobile
                                ? ""
                                : "group-hover/hub:rotate-12 group-hover/hub:scale-105"
                            }
                        `}
                >
                  <div className="w-full h-full bg-black/5 dark:bg-black/40 rounded-[60px] flex items-center justify-center border border-black/5 dark:border-white/5 relative overflow-hidden">
                    <span className="text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter z-10">
                      GDC
                    </span>
                  </div>
                </div>
                <Zap
                  className={`absolute top-1/2 -right-8 text-brand-red transform -translate-y-1/2 transition-transform duration-500 ${
                    !isMobile ? "group-hover/hub:translate-x-4" : ""
                  }`}
                  size={32}
                />
              </div>

              <div
                className={`
                        w-full bg-white dark:bg-[#080808] 
                        rounded-[60px] p-10 md:p-12 
                        border border-black/5 dark:border-white/10 
                        shadow-2xl dark:shadow-[0_40px_100px_rgba(255,0,0,0.05)] 
                        relative group overflow-hidden transition-all duration-700 
                        ${!isMobile ? "hover:scale-[1.02]" : ""}
                    `}
              >
                <h3 className="text-2xl font-black text-black dark:text-white mb-10 tracking-tight uppercase border-b border-black/5 dark:border-white/5 pb-4">
                  {t("showcase.benefits.title")}
                </h3>
                <ul className="space-y-5">
                  {(t.raw("showcase.benefits.items") as string[]).map(
                    (txt, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_8px_red]"></div>
                        <span
                          className={`text-xs md:text-sm font-bold text-gray-600 dark:text-gray-400 transition-colors ${
                            !isMobile
                              ? "group-hover:text-black dark:group-hover:text-white"
                              : ""
                          }`}
                        >
                          {txt}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div
              className={`
                    bg-white dark:bg-[#080808] rounded-[60px] p-10 md:p-14 
                    border border-black/5 dark:border-white/10 
                    shadow-2xl dark:shadow-[0_40px_100px_rgba(255,0,0,0.05)] 
                    relative group overflow-hidden h-full flex flex-col 
                    transition-all duration-700 
                    ${
                      !isMobile
                        ? "hover:-translate-y-4 hover:border-brand-red/20"
                        : ""
                    }
                `}
            >
              <div className="relative z-10">
                <div className="mb-10 w-16 h-16 rounded-[2rem] bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <Palette size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-10 tracking-tighter leading-none uppercase">
                  {t.rich("showcase.logo.title")}
                </h3>
                <ul className="space-y-6">
                  {(t.raw("showcase.logo.features") as string[]).map(
                    (txt, i) => (
                      <li key={i} className="flex items-start gap-4 group/item">
                        <CheckCircle2
                          size={16}
                          className="text-brand-red mt-1 shrink-0"
                        />
                        <span
                          className={`text-sm md:text-base font-bold text-gray-600 dark:text-gray-400 transition-colors ${
                            !isMobile
                              ? "group-hover/item:text-black dark:group-hover/item:text-white"
                              : ""
                          }`}
                        >
                          {txt}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="relative py-48 px-4 md:px-8 bg-transparent overflow-hidden group transition-colors duration-700">
        <div className="max-w-[1700px] mx-auto relative z-10">
          <div className="bg-black dark:bg-white text-white dark:text-black rounded-[60px] md:rounded-[100px] p-16 md:p-24 lg:p-32 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_50px_120px_-30px_rgba(255,0,0,0.4)]">
            <div className="absolute inset-0 bg-noise opacity-[0.05] dark:opacity-[0.02]"></div>
            <div
              className={`absolute -top-40 -right-40 w-[800px] h-[800px] bg-brand-red rounded-full blur-[150px] opacity-10 transition-opacity duration-[2s] ${
                !isMobile ? "group-hover:opacity-30" : ""
              }`}
            ></div>

            <div className="relative z-10 flex-1">
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
                {t.rich("cta.title", {
                  highlight: (chunks) => (
                    <span className="text-brand-red italic drop-shadow-[0_0_50px_rgba(255,0,0,0.4)]">
                      {chunks}
                    </span>
                  ),
                })}
              </h2>
              <p className="text-gray-400 dark:text-gray-500 font-black uppercase tracking-[0.6em] text-[10px] md:text-xs">
                {t("cta.subtitle")}
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <a
                href="#contact"
                className="group/btn inline-flex items-center gap-10 px-14 py-10 bg-white dark:bg-black text-black dark:text-white rounded-full font-black uppercase tracking-[0.4em] text-[13px] hover:scale-110 transition-all shadow-2xl"
              >
                {t("cta.button")}{" "}
                <ArrowRight className="group-hover/btn:translate-x-4 transition-transform duration-700 w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        .spotlight-overlay {
           background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255, 0, 0, 0.05), transparent 80%);
        }
        .dot-pattern-floor {
          background-image: radial-gradient(circle, #FF0000 1.5px, transparent 1.5px);
          background-size: 40px 40px;
          background-position: center;
        }
        .animate-spin-slow { animation: spin 12s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
