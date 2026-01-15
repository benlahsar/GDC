"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  BarChart3,
  ShieldCheck,
  Zap,
  ArrowRight,
  Settings,
  Sparkles,
  CheckCircle2,
  Headset,
  Shield,
  RefreshCw,
  Database,
  LifeBuoy,
  Target,
  Activity,
  Lock,
  Cloud,
  Search,
  Check,
  Layers,
  Smartphone,
  Layout,
  ShoppingBag,
  Loader2,
  Play,
  /* Fixed: added missing icon imports */
  Cpu,
  Quote,
} from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { AnimatedCounter } from "./AnimatedCounter";
import { MaintenanceMethodology } from "./MaintenanceMethodology";
import { MaintenanceTestimonials } from "./MaintenanceTestimonials";
import { MaintenanceFAQ } from "./MaintenanceFAQ";
import { MaintenanceFormSection } from "./MaintenanceFormSection";
import { MaintenanceFinalCTA } from "./MaintenanceFinalCTA";

// Icons will be used inside the component mapping
const ATOUT_ICONS = [Activity, Lock, Zap, Cloud, BarChart3, RefreshCw];

const PROFESSIONAL_SOLUTIONS = []; // Now handled via translations

import { useTranslations } from "next-intl";

export const MaintenancePage: React.FC = () => {
  const t = useTranslations("MaintenancePage");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  // Diagnostic State
  const [diagStep, setDiagStep] = useState(1);
  const [siteType, setSiteType] = useState("");
  const [coreIssue, setCoreIssue] = useState("");
  const [aiRecommendation, setAiRecommendation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024 || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    if (window.innerWidth >= 1024) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const generateRecommendation = async (type: string, issue: string) => {
    setIsLoading(true);
    setDiagStep(3);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `En tant qu'expert technique chez Group Digital Concept, agence de maintenance web à Marrakech, propose une recommandation de maintenance ultra-courte (max 40 mots) pour un site de type "${type}" dont le problème principal est "${issue}". Sois professionnel, rassurant et direct. Réponds en Français.`,
        config: { temperature: 0.7 },
      });
      setAiRecommendation(
        response.text ||
          "Erreur lors du diagnostic. Veuillez nous contacter directement."
      );
    } catch (error) {
      setAiRecommendation(
        "Une erreur réseau empêche le diagnostic IA. Notre équipe technique est disponible pour un audit manuel immédiat."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSiteSelect = (type: string) => {
    setSiteType(type);
    setDiagStep(2);
  };

  const handleIssueSelect = (issue: string) => {
    setCoreIssue(issue);
    generateRecommendation(siteType, issue);
  };

  const resetDiag = () => {
    setDiagStep(1);
    setSiteType("");
    setCoreIssue("");
    setAiRecommendation(null);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#F4F4F5] dark:bg-[#000000] text-black dark:text-white pt-48 md:pt-48 overflow-hidden transition-colors duration-500 selection:bg-brand-red selection:text-white"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-red/[0.04] rounded-full blur-[120px] ${
            isMobile ? "opacity-20" : ""
          }`}
        ></div>
        <div
          className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/[0.03] rounded-full blur-[150px] ${
            isMobile ? "opacity-20" : ""
          }`}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1800px] relative z-10 pb-20">
        {/* --- HERO BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)] mb-12">
          {/* 1. HERO TEXT */}
          <div
            className={`col-span-1 lg:col-span-8 row-span-2 bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-12 lg:p-16 border border-black/5 dark:border-white/10 flex flex-col justify-center relative overflow-hidden group shadow-xl ${
              !isMobile ? "opacity-0 animate-enter-left" : "opacity-100"
            }`}
          >
            {!isMobile && (
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/10 transition-colors duration-700"></div>
            )}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red mb-6">
                <Settings
                  size={14}
                  className={!isMobile ? "animate-spin-slow" : ""}
                />
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                  {t("hero.badge")}
                </span>
              </div>
              <h1
                className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] mb-8"
                dangerouslySetInnerHTML={{
                  __html: t.raw("hero.title").replace(/{br}/g, "<br/>"),
                }}
              />
              <div className="space-y-6 text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-4xl mb-12 border-l-2 border-brand-red pl-6">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t.raw("hero.description"),
                  }}
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className={`group px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-lg flex items-center gap-3 ${
                    !isMobile ? "hover:scale-105" : "active:scale-95"
                  }`}
                >
                  {t("hero.cta")}{" "}
                  <ArrowRight
                    size={18}
                    className={
                      !isMobile
                        ? "group-hover:translate-x-1 transition-transform"
                        : ""
                    }
                  />
                </a>
              </div>
            </div>
          </div>

          {/* 2. INTERACTIVE DIAGNOSTIC HUB (Updated per screenshot request) */}
          <div
            className={`col-span-1 lg:col-span-4 row-span-2 relative rounded-[40px] overflow-hidden bg-white dark:bg-[#050505] border border-black/5 dark:border-white/10 flex flex-col p-8 md:p-10 shadow-2xl group ${
              !isMobile
                ? "opacity-0 animate-enter-right delay-200"
                : "opacity-100"
            }`}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-red-900 shadow-[0_0_15px_red] transition-all duration-1000"></div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
                    <Activity
                      size={20}
                      className={!isMobile ? "animate-pulse" : ""}
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-black dark:text-white">
                      {t("diagnostic.header.title")}
                    </h3>
                    <p className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.3em] mt-1">
                      {t("diagnostic.header.subtitle")}
                    </p>
                  </div>
                </div>
                {diagStep > 1 && (
                  <button
                    onClick={resetDiag}
                    className="p-2 rounded-lg bg-black/5 dark:bg-white/5 text-gray-400 hover:text-brand-red transition-colors"
                  >
                    <RefreshCw size={14} />
                  </button>
                )}
              </div>

              {/* Step 1: Site Type */}
              {diagStep === 1 && (
                <div className="flex-1 flex flex-col animate-fade-in-up">
                  <h4
                    className="text-xl font-black uppercase tracking-tighter mb-6 text-black dark:text-white"
                    dangerouslySetInnerHTML={{
                      __html: t
                        .raw("diagnostic.step1.title")
                        .replace(/{br}/g, "<br/>"),
                    }}
                  />
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      {
                        id: "vitrine",
                        label: t("diagnostic.step1.options.vitrine.label"),
                        icon: Layout,
                        desc: t("diagnostic.step1.options.vitrine.desc"),
                      },
                      {
                        id: "ecommerce",
                        label: t("diagnostic.step1.options.ecommerce.label"),
                        icon: ShoppingBag,
                        desc: t("diagnostic.step1.options.ecommerce.desc"),
                      },
                      {
                        id: "app",
                        label: t("diagnostic.step1.options.app.label"),
                        icon: Smartphone,
                        desc: t("diagnostic.step1.options.app.desc"),
                      },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSiteSelect(item.label)}
                        className="group/btn p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-left transition-all hover:bg-brand-red hover:border-brand-red flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white dark:bg-black/40 flex items-center justify-center text-brand-red group-hover/btn:text-white transition-colors">
                            <item.icon size={20} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-black dark:text-white group-hover/btn:text-white">
                              {item.label}
                            </p>
                            <p className="text-[9px] text-gray-500 dark:text-gray-400 uppercase tracking-widest group-hover/btn:text-white/60">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        <ArrowRight
                          size={14}
                          className="text-gray-300 group-hover/btn:text-white transition-all transform group-hover/btn:translate-x-1"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Core Issue */}
              {diagStep === 2 && (
                <div className="flex-1 flex flex-col animate-enter-right">
                  <h4
                    className="text-xl font-black uppercase tracking-tighter mb-6 text-black dark:text-white"
                    dangerouslySetInnerHTML={{
                      __html: t
                        .raw("diagnostic.step2.title")
                        .replace(/{br}/g, "<br/>"),
                    }}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        id: "sec",
                        label: t("diagnostic.step2.options.sec"),
                        icon: Shield,
                        col: "text-emerald-500",
                      },
                      {
                        id: "perf",
                        label: t("diagnostic.step2.options.perf"),
                        icon: Zap,
                        col: "text-blue-500",
                      },
                      {
                        id: "update",
                        label: t("diagnostic.step2.options.update"),
                        icon: RefreshCw,
                        col: "text-purple-500",
                      },
                      {
                        id: "audit",
                        label: t("diagnostic.step2.options.audit"),
                        icon: Search,
                        col: "text-orange-500",
                      },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleIssueSelect(item.label)}
                        className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex flex-col items-center justify-center text-center gap-3 transition-all hover:border-brand-red/50 hover:bg-white dark:hover:bg-[#111] group/item"
                      >
                        <item.icon
                          size={24}
                          className={`${item.col} group-hover/item:scale-110 transition-transform`}
                        />
                        <span className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: AI Recommendation */}
              {diagStep === 3 && (
                <div className="flex-1 flex flex-col animate-enter-zoom">
                  {isLoading ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
                      <div className="relative">
                        <div className="w-20 h-20 border-4 border-brand-red/20 rounded-full animate-spin border-t-brand-red"></div>
                        <Cpu
                          className="absolute inset-0 m-auto text-brand-red animate-pulse"
                          size={24}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-black uppercase tracking-widest text-black dark:text-white">
                          {t("diagnostic.step3.loading.title")}
                        </p>
                        <p className="text-[9px] text-gray-500 uppercase tracking-[0.4em] mt-2">
                          {t("diagnostic.step3.loading.subtitle")}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col">
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 mb-4">
                          <CheckCircle2 size={12} />
                          <span className="text-[10px] font-black uppercase tracking-widest">
                            {t("diagnostic.step3.success.badge")}
                          </span>
                        </div>
                        <h4
                          className="text-2xl font-black uppercase tracking-tighter text-black dark:text-white leading-none"
                          dangerouslySetInnerHTML={{
                            __html: t
                              .raw("diagnostic.step3.success.title")
                              .replace(/{br}/g, "<br/>"),
                          }}
                        />
                      </div>

                      <div className="flex-1 bg-gray-50 dark:bg-white/5 rounded-3xl p-6 border border-black/5 dark:border-white/10 relative overflow-hidden group/box">
                        <Quote
                          size={40}
                          className="absolute -top-2 -right-2 text-brand-red opacity-[0.05] group-hover/box:opacity-10 transition-opacity"
                        />
                        <p className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 leading-relaxed italic relative z-10">
                          "{aiRecommendation}"
                        </p>
                      </div>

                      <div className="mt-8 space-y-3">
                        <button
                          onClick={() =>
                            document
                              .getElementById("maintenance-form")
                              ?.scrollIntoView({ behavior: "smooth" })
                          }
                          className="w-full py-4 bg-brand-red text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] shadow-xl hover:bg-red-600 transition-all flex items-center justify-center gap-3 active:scale-95"
                        >
                          {t("diagnostic.step3.success.cta")}{" "}
                          <ArrowRight size={14} />
                        </button>
                        <button
                          onClick={resetDiag}
                          className="w-full py-3 text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                        >
                          {t("diagnostic.step3.success.restart")}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-auto pt-8 border-t border-black/5 dark:border-white/5 flex items-center justify-center opacity-20">
                <div className="flex flex-col items-center gap-2">
                  <img
                    src="https://groupdigitalconcept.com/wp-content/uploads/2024/04/Design-sans-titre-23.png"
                    alt="GDC"
                    className="h-4 w-auto grayscale brightness-0 dark:invert"
                  />
                  <span className="text-[7px] font-black uppercase tracking-[1em]">
                    {t("diagnostic.footer")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* --- CORE PILLARS --- */}
          <div
            className={`col-span-1 lg:col-span-12 grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 ${
              !isMobile
                ? "opacity-0 animate-fade-in-up delay-400"
                : "opacity-100"
            }`}
          >
            {[
              { icon: TrendingUp, sub: "Référencement" },
              { icon: Zap, sub: "Performance" },
              { icon: ShieldCheck, sub: "Sécurité" },
              { icon: RefreshCw, sub: "Mises à Jour" },
              { icon: Headset, sub: "Support 24/7" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group flex flex-col items-center justify-center gap-4 p-6 rounded-[32px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 transition-all duration-500 shadow-sm ${
                  !isMobile
                    ? "hover:border-brand-red/30 hover:-translate-y-1 hover:shadow-xl"
                    : "active:bg-gray-100 dark:active:bg-[#111]"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-black dark:text-white transition-all duration-300 ${
                    !isMobile
                      ? "group-hover:bg-brand-red group-hover:text-white"
                      : ""
                  }`}
                >
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black dark:text-white leading-tight">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          {/* --- STATS SECTION --- */}
          <div
            className={`col-span-1 lg:col-span-12 mt-8 bg-white/50 dark:bg-[#080808]/50 backdrop-blur-xl rounded-[40px] border border-black/5 dark:border-white/5 p-8 md:p-12 ${
              !isMobile
                ? "opacity-0 animate-enter-bottom delay-500"
                : "opacity-100"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
              <div className="flex items-center justify-center md:justify-start gap-5 group">
                <AnimatedCounter
                  value={99}
                  suffix="%"
                  className="text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter"
                />
                <div className="flex flex-col border-l-2 border-brand-red pl-4">
                  <span className="text-[11px] font-black uppercase tracking-widest text-brand-red">
                    Disponibilité
                  </span>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                    Garantie
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-5 group">
                <AnimatedCounter
                  value={92}
                  suffix="%"
                  className="text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter"
                />
                <div className="flex flex-col border-l-2 border-blue-500 pl-4">
                  <span className="text-[11px] font-black uppercase tracking-widest text-blue-500">
                    Amélioration
                  </span>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                    Performances
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-5 group">
                <span className="text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter">
                  24/7
                </span>
                <div className="flex flex-col border-l-2 border-emerald-500 pl-4">
                  <span className="text-[11px] font-black uppercase tracking-widest text-emerald-500">
                    Support
                  </span>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                    Disponible
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* --- PERFORMANCE OPTIMALE --- */}
          <div
            className={`col-span-1 lg:col-span-12 mt-12 ${
              !isMobile
                ? "opacity-0 animate-enter-bottom delay-700"
                : "opacity-100"
            }`}
          >
            <div className="bg-white dark:bg-[#080808] rounded-[40px] p-8 md:p-14 lg:p-20 border border-black/5 dark:border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <h2
                      className="text-3xl md:text-5xl lg:text-6xl font-black text-black dark:text-white tracking-tight leading-[1.1] mb-8"
                      dangerouslySetInnerHTML={{
                        __html: t
                          .raw("performance.title")
                          .replace(/{br}/g, "<br/>"),
                      }}
                    />
                    <p className="text-xl md:text-2xl font-bold text-black dark:text-white mb-6">
                      {t("performance.subtitle")}
                    </p>
                    <div className="space-y-8 mb-12">
                      <div className="flex items-center gap-6">
                        <AnimatedCounter
                          value={44}
                          suffix="+"
                          className="text-5xl md:text-7xl font-black text-brand-red tracking-tighter"
                        />
                        <div className="h-12 w-[1px] bg-gray-200 dark:bg-white/10 hidden md:block"></div>
                        <div>
                          <p className="text-sm font-black uppercase tracking-widest text-black dark:text-white">
                            {t("performance.updates.label")}
                          </p>
                          <p className="text-xs font-bold text-gray-500 uppercase">
                            {t("performance.updates.sub")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className={`w-fit px-12 py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl flex items-center gap-4 ${
                      !isMobile ? "hover:scale-105" : "active:scale-95"
                    }`}
                  >
                    {t("performance.cta")} <ArrowRight size={18} />
                  </a>
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  {(t.raw("performance.items") as any[]).map((item, i) => (
                    <div key={i} className="group relative">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl font-black text-brand-red font-mono">
                          {item.num}
                        </span>
                        <div className="h-[2px] flex-1 bg-gray-100 dark:bg-white/5 relative overflow-hidden">
                          <div
                            className={`absolute inset-0 bg-brand-red transition-transform duration-700 origin-left ${
                              !isMobile
                                ? "scale-x-0 group-hover:scale-x-100"
                                : "scale-x-100"
                            }`}
                          ></div>
                        </div>
                      </div>
                      <h3
                        className={`text-2xl font-black text-black dark:text-white mb-4 transition-colors ${
                          !isMobile ? "group-hover:text-brand-red" : ""
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- LES ATOUTS --- */}
          <div
            className={`col-span-1 lg:col-span-12 mt-20 ${
              !isMobile
                ? "opacity-0 animate-enter-bottom delay-800"
                : "opacity-100"
            }`}
          >
            <div className="w-full bg-black dark:bg-[#0A0A0A] rounded-[40px] p-12 md:p-20 text-center mb-12 border border-white/5 relative overflow-hidden group">
              <h2
                className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight relative z-10"
                dangerouslySetInnerHTML={{
                  __html: t.raw("atouts.title").replace(/{br}/g, "<br/>"),
                }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(t.raw("atouts.items") as any[]).map((atout, index) => {
                const Icon = ATOUT_ICONS[index % ATOUT_ICONS.length];
                return (
                  <div
                    key={index}
                    className={`group relative p-8 md:p-10 rounded-[32px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 transition-all duration-500 shadow-lg ${
                      !isMobile
                        ? "hover:border-brand-red/30 hover:-translate-y-2 hover:shadow-2xl"
                        : "active:bg-gray-100 dark:active:bg-[#111]"
                    }`}
                  >
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-black dark:text-white transition-all duration-500 ${
                            !isMobile
                              ? "group-hover:bg-brand-red group-hover:text-white"
                              : ""
                          }`}
                        >
                          <Icon size={28} strokeWidth={1.5} />
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-black uppercase tracking-widest text-brand-red">
                            {atout.label}
                          </p>
                          <p className="text-3xl font-black text-black dark:text-white">
                            {atout.stat}
                          </p>
                        </div>
                      </div>
                      <h3
                        className={`text-2xl font-bold text-black dark:text-white mb-4 transition-colors ${
                          !isMobile ? "group-hover:text-brand-red" : ""
                        }`}
                      >
                        {atout.title}
                      </h3>
                      <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                        {atout.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- PROFESSIONNELLE À MARRAKECH --- */}
          <div
            className={`col-span-1 lg:col-span-12 mt-20 ${
              !isMobile
                ? "opacity-0 animate-enter-bottom delay-900"
                : "opacity-100"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white tracking-tight leading-[1.1]"
                dangerouslySetInnerHTML={{
                  __html: t.raw("professional.title").replace(/{br}/g, "<br/>"),
                }}
              />
              <p
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: t.raw("professional.intro"),
                }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(t.raw("professional.solutions") as any[]).map(
                (solution, idx) => {
                  // Define icons inside mapping since we need them
                  const SolutionIcon = [Search, Lock, Layers, Check][idx % 4];
                  return (
                    <div
                      key={idx}
                      className={`group relative p-8 md:p-12 rounded-[40px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 transition-all duration-500 shadow-xl ${
                        !isMobile
                          ? "hover:border-brand-red/20 hover:shadow-2xl"
                          : "active:bg-gray-100 dark:active:bg-[#111]"
                      }`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div
                          className={`w-20 h-20 rounded-full border-2 border-brand-red flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,0,0,0.2)] transition-transform ${
                            !isMobile ? "group-hover:scale-110" : ""
                          }`}
                        >
                          <SolutionIcon size={36} className="text-brand-red" />
                        </div>
                        <h3 className="text-3xl font-black text-brand-red mb-6 uppercase tracking-tight">
                          {solution.title}
                        </h3>
                        <p className="text-xl text-gray-600 dark:text-gray-400 font-bold mb-8 leading-relaxed italic">
                          {solution.intro}
                        </p>
                      </div>
                      <ul className="space-y-6">
                        {(solution.points as string[]).map((point, pIdx) => (
                          <li key={pIdx} className="flex gap-4">
                            <div className="mt-2 w-2 h-2 rounded-full bg-brand-red shrink-0"></div>
                            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
                              {point}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* --- FINAL SECTION: PHONE MOCKUP --- */}
          <div
            className={`col-span-1 lg:col-span-12 mt-32 mb-20 ${
              !isMobile ? "opacity-0 animate-enter-bottom" : "opacity-100"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-7 space-y-10">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-black text-black dark:text-white leading-tight tracking-tight"
                  dangerouslySetInnerHTML={{
                    __html: t.raw("mockup.title").replace(/{br}/g, "<br/>"),
                  }}
                />
                <div className="space-y-8">
                  <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white uppercase tracking-tight flex items-center gap-4">
                    <Target className="text-brand-red" /> {t("mockup.subtitle")}
                  </h3>
                  <ul className="space-y-6">
                    {(t.raw("mockup.list") as any[]).map((list, idx) => (
                      <li key={idx} className="flex gap-4 group/item">
                        <div
                          className={`mt-1.5 w-6 h-6 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center shrink-0 transition-all ${
                            !isMobile ? "group-hover/item:bg-brand-red" : ""
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-brand-red ${
                              !isMobile ? "group-hover/item:bg-white" : ""
                            }`}
                          ></div>
                        </div>
                        <div>
                          <h4
                            className={`text-lg font-bold text-black dark:text-white mb-1 transition-colors ${
                              !isMobile ? "group-hover/item:text-brand-red" : ""
                            }`}
                          >
                            {list.title} :
                          </h4>
                          <p className="text-gray-500 dark:text-gray-400 font-medium">
                            {list.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={`lg:col-span-5 flex justify-center relative ${
                  !isMobile ? "perspective-2000" : ""
                }`}
              >
                <div
                  className={`relative z-10 w-full max-w-[420px] transition-all duration-700 group/mockup ${
                    !isMobile ? "hover:scale-105" : ""
                  }`}
                >
                  <div className="relative overflow-hidden rounded-[3rem] border border-black/5 dark:border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">
                    <img
                      src="https://group-digitalconcept.com/wp-content/uploads/2025/12/Design-sans-titre-82.png"
                      alt="Phone Mockup"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MaintenanceMethodology />
      <MaintenanceTestimonials />
      <MaintenanceFAQ />
      <div id="maintenance-form">
        <MaintenanceFormSection />
      </div>
      <MaintenanceFinalCTA />

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .preserve-3d { transform-style: preserve-3d; }
        .perspective-2000 { perspective: 2000px; }
      `}</style>
    </section>
  );
};
