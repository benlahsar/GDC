"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Server,
  Shield,
  Cpu,
  Zap,
  Activity,
  ArrowRight,
  Settings,
  Database,
  Globe,
  MousePointer2,
  Monitor,
  ShoppingBag,
  Building2,
  HardDrive,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { AnimatedCounter } from "./AnimatedCounter";
import { HostingWhyChoose } from "./HostingWhyChoose";
import { HostingAtouts } from "./HostingAtouts";
import { HostingSolutionsGrid } from "./HostingSolutionsGrid";
import { HostingContactForm } from "./HostingContactForm";

export const HostingPage: React.FC = () => {
  const t = useTranslations("HostingPage");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  // Configurator State
  const [config, setConfig] = useState({
    type: "vitrine",
    traffic: 5000,
    storage: "20GB",
  });

  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
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
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const getRecommendedPlan = () => {
    if (config.type === "ecommerce" || config.traffic > 50000)
      return {
        name: t("plans.dedicated"),
        icon: Database,
        color: "text-purple-500",
        id: "dedicated",
      };
    if (config.traffic > 10000 || config.storage === "100GB+")
      return {
        name: t("plans.vps"),
        icon: Cpu,
        color: "text-blue-500",
        id: "vps",
      };
    return {
      name: t("plans.shared"),
      icon: Server,
      color: "text-emerald-500",
      id: "shared",
    };
  };

  const plan = getRecommendedPlan();

  const handleProposeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedPlanId(plan.id);
    const target = document.getElementById("hosting-contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const FEATURES = [
    {
      icon: Zap,
      title: t("features.0.title"),
      color: "text-brand-red",
      desc: t("features.0.description"),
    },
    {
      icon: Shield,
      title: t("features.1.title"),
      color: "text-blue-500",
      desc: t("features.1.description"),
    },
    {
      icon: Cpu,
      title: t("features.2.title"),
      color: "text-purple-500",
      desc: t("features.2.description"),
    },
    {
      icon: Activity,
      title: t("features.3.title"),
      color: "text-emerald-500",
      desc: t("features.3.description"),
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#F0F0F2] dark:bg-[#050505] text-black dark:text-white pt-48 md:pt-48 overflow-hidden transition-colors duration-500 selection:bg-brand-red selection:text-white"
    >
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/[0.04] rounded-full blur-[120px] ${
            !isMobile
              ? "transition-transform duration-700 ease-out will-change-transform"
              : "opacity-40"
          }`}
          style={{
            transform: !isMobile
              ? `translate(${mousePos.x * -30}px, ${mousePos.y * 30}px)`
              : "none",
          }}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/[0.04] rounded-full blur-[150px] ${
            !isMobile
              ? "transition-transform duration-700 ease-out will-change-transform"
              : "opacity-40"
          }`}
          style={{
            transform: !isMobile
              ? `translate(${mousePos.x * 30}px, ${mousePos.y * -30}px)`
              : "none",
          }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1800px] relative z-10 pb-20">
        {/* --- HERO BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-12">
          {/* 1. HERO MAIN */}
          <div
            className={`col-span-1 md:col-span-2 lg:col-span-8 bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-12 lg:p-16 border border-black/5 dark:border-white/10 flex flex-col justify-center relative overflow-hidden group shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] ${
              !isMobile ? "opacity-0 animate-enter-left" : "opacity-100"
            }`}
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-brand-red/5 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red mb-8">
                <Server
                  size={14}
                  className={!isMobile ? "animate-pulse" : ""}
                />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  {t("badge")}
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1] mb-8 text-black dark:text-white"
                dangerouslySetInnerHTML={{
                  __html: t.raw("title").replace(/{br}/g, "<br/>"),
                }}
              />

              <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-3xl mb-12 border-l-2 border-brand-red pl-6">
                <p
                  dangerouslySetInnerHTML={{
                    __html: t
                      .raw("description")
                      .replace(
                        /<highlight>/g,
                        `<strong class="text-black dark:text-white">`
                      )
                      .replace(/<\/highlight>/g, "</strong>"),
                  }}
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById("hosting-contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className={`group px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold uppercase tracking-widest text-xs transition-all shadow-lg flex items-center gap-2 ${
                    !isMobile ? "hover:scale-105" : ""
                  }`}
                >
                  {t("cta")}{" "}
                  <ArrowRight
                    size={16}
                    className={
                      !isMobile
                        ? "group-hover:translate-x-1 transition-transform"
                        : ""
                    }
                  />
                </button>
              </div>
            </div>
          </div>

          {/* 2. INTERACTIVE CONFIGURATOR (Right - Replaced static server visual) */}
          <div
            className={`col-span-1 md:col-span-2 lg:col-span-4 bg-white dark:bg-[#0E0E0E] rounded-[40px] p-8 md:p-10 border border-black/10 dark:border-white/10 relative overflow-hidden group flex flex-col min-h-[600px] shadow-2xl ${
              !isMobile
                ? "opacity-0 animate-enter-right delay-100"
                : "opacity-100"
            }`}
          >
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/[0.03] to-transparent opacity-40"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8 border-b border-black/5 dark:border-white/5 pb-4">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-500">
                  {t("configurator.title")}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                    {t("configurator.badge")}
                  </span>
                </div>
              </div>

              <div className="space-y-10 flex-1">
                {/* SITE TYPE SELECTION */}
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-1">
                    {t("configurator.siteType")}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      {
                        id: "vitrine",
                        icon: Monitor,
                        label: t("configurator.types.vitrine"),
                      },
                      {
                        id: "ecommerce",
                        icon: ShoppingBag,
                        label: t("configurator.types.ecommerce"),
                      },
                      {
                        id: "corporate",
                        icon: Building2,
                        label: t("configurator.types.corporate"),
                      },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setConfig({ ...config, type: item.id })}
                        className={`flex flex-col items-center gap-3 p-3 rounded-2xl border transition-all duration-300 ${
                          config.type === item.id
                            ? "bg-brand-red border-brand-red text-white shadow-lg"
                            : "bg-gray-50 dark:bg-white/5 border-black/5 dark:border-white/10 text-gray-500 hover:border-brand-red/30"
                        }`}
                      >
                        <item.icon size={18} />
                        <span className="text-[9px] font-black uppercase">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* TRAFFIC SLIDER */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end px-1">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                      {t("configurator.estimatedTraffic")}
                    </label>
                    <span className="text-lg font-black text-brand-red tracking-tighter">
                      {config.traffic >= 100000
                        ? "+100K"
                        : `${config.traffic / 1000}K`}{" "}
                      <span className="text-[9px] text-gray-500 font-bold">
                        {t("configurator.month")}
                      </span>
                    </span>
                  </div>
                  <div className="relative group/slider">
                    <input
                      type="range"
                      min="1000"
                      max="100000"
                      step="1000"
                      value={config.traffic}
                      onChange={(e) =>
                        setConfig({
                          ...config,
                          traffic: parseInt(e.target.value),
                        })
                      }
                      className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-brand-red"
                    />
                  </div>
                </div>

                {/* STORAGE SELECTOR */}
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-1">
                    {t("configurator.ssdStorage")}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["5GB", "20GB", "50GB", "100GB+"].map((size) => (
                      <button
                        key={size}
                        onClick={() => setConfig({ ...config, storage: size })}
                        className={`py-3 rounded-xl border text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                          config.storage === size
                            ? "bg-black dark:bg-white text-white dark:text-black border-transparent shadow-md"
                            : "bg-gray-50 dark:bg-white/5 border-black/5 dark:border-white/10 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* RECOMMENDATION BOX */}
                <div className="mt-8 p-6 rounded-[2.5rem] bg-gray-50 dark:bg-[#151515] border border-black/5 dark:border-white/10 shadow-inner relative overflow-hidden group/rec">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover/rec:opacity-10 transition-opacity">
                    <Sparkles size={60} className="text-brand-red" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 block mb-3">
                    {t("configurator.recommendation")}
                  </span>
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-white dark:bg-black flex items-center justify-center shadow-lg border border-black/5 dark:border-white/10 ${plan.color}`}
                    >
                      <plan.icon size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-xl font-black text-black dark:text-white tracking-tighter uppercase leading-none">
                        {plan.name}
                      </p>
                      <p className="text-[9px] font-bold text-gray-500 uppercase mt-1">
                        {t("configurator.optimizedInfra")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleProposeClick}
                className="w-full mt-10 group/btn bg-brand-red hover:bg-red-600 text-white py-6 rounded-2xl flex items-center justify-center gap-4 font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl shadow-red-900/20 transition-all active:scale-95"
              >
                {t("configurator.getProposal")}{" "}
                <ArrowRight
                  size={16}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* 3. CORE FEATURES (Row 2) */}
          <div className="col-span-1 lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feat, i) => (
              <div
                key={i}
                className={`bg-[#F5F5F7] dark:bg-[#0A0A0A] p-8 rounded-[32px] border border-black/5 dark:border-white/10 transition-all duration-300 group ${
                  !isMobile
                    ? "hover:border-brand-red/30 hover:-translate-y-2"
                    : ""
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center mb-6 shadow-sm ${
                    !isMobile
                      ? "group-hover:scale-110 transition-transform"
                      : ""
                  }`}
                >
                  <feat.icon size={28} className={feat.color} />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- STATS BAR --- */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ${
            !isMobile ? "opacity-0 animate-fade-in-up delay-300" : "opacity-100"
          }`}
        >
          <div className="bg-black dark:bg-[#111] p-8 rounded-[32px] text-center text-white relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-center items-baseline gap-1 mb-2">
                <AnimatedCounter
                  value={99}
                  suffix="%"
                  className="text-5xl font-black tracking-tighter"
                />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                {t("stats.uptime")}
              </p>
            </div>
          </div>
          <div className="bg-brand-red p-8 rounded-[32px] text-center text-white relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-center items-baseline gap-1 mb-2">
                <AnimatedCounter
                  value={92}
                  suffix="%"
                  className="text-5xl font-black tracking-tighter"
                />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/80">
                {t("stats.satisfaction")}
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#0A0A0A] p-8 rounded-[32px] text-center text-black dark:text-white border border-black/5 dark:border-white/10 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-center items-baseline gap-1 mb-2">
                <span className="text-5xl font-black tracking-tighter">
                  24/7
                </span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                {t("stats.support")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <HostingWhyChoose />
      <HostingAtouts />
      <HostingSolutionsGrid />
      <HostingContactForm selectedPlanId={selectedPlanId} />

      <div className="container mx-auto px-4 md:px-8 max-w-[1800px] relative z-10 pb-20">
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <p
            className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8"
            dangerouslySetInnerHTML={{
              __html: t
                .raw("footerText")
                .replace(
                  /<highlight>/g,
                  `<strong class="text-black dark:text-white">`
                )
                .replace(/<\/highlight>/g, "</strong>"),
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }

        input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 24px;
            height: 24px;
            background: #FF0000;
            cursor: pointer;
            border-radius: 50%;
            border: 4px solid white;
            box-shadow: 0 0 15px rgba(255, 0, 0, 0.4);
        }
      `}</style>
    </section>
  );
};
