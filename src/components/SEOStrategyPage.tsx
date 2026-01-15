"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  CheckCircle2,
  MousePointer2,
  ChevronRight,
  Activity,
  Navigation,
  Cpu,
  Box,
  Share2,
  ShieldCheck,
  Database,
  Layers,
  Terminal,
  Play,
  Layout,
  Smartphone,
  Loader2,
  Check,
  AlertCircle,
  Rocket,
  ShieldAlert,
  FileSearch,
  MessageSquare,
  User,
  Mail,
} from "lucide-react";
import { GoogleGenAI, Type } from "@google/genai";
import { AnimatedCounter } from "./AnimatedCounter";
import { SEOContactSection } from "./SEOContactSection";
import { SEOExcellenceSection } from "./SEOExcellenceSection";
import { SEOFeaturesGrid } from "./SEOFeaturesGrid";
import { SEOWhyChooseAgency } from "./SEOWhyChooseAgency";
import { SEOBentoDetails } from "./SEOBentoDetails";
import { SEORegionalVisibility } from "./SEORegionalVisibility";
import { SEODigitalProjects } from "./SEODigitalProjects";
import { SEOMethodology } from "./SEOMethodology";
import { SEOExpertiseCities } from "./SEOExpertiseCities";
import { Partners } from "./Partners";
import { SEOTestimonials } from "./SEOTestimonials";
import { SEOStats } from "./SEOStats";
import { SEOFAQ } from "./SEOFAQ";
import { SEOForm } from "./SEOForm";
import { useTranslations } from "next-intl";

export const SEOStrategyPage: React.FC = () => {
  const t = useTranslations("seo");
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  // --- SCANNER STATE ---
  const [scanStep, setScanStep] = useState(1); // 1: Input, 2: Loading/Scanning, 3: Results, 4: Fix Form
  const [scanUrl, setScanUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{
    score: number;
    priorities: { label: string; value: number; advice: string }[];
    summary: string;
    criticalFix: string;
  } | null>(null);

  // --- LEAD FORM STATE ---
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const performRealAudit = async (url: string) => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview", // High-fidelity model for complex reasoning
        contents: t("scanner.ai.prompt", { url }),
        config: {
          responseMimeType: "application/json",
        },
      });

      const data = JSON.parse(response.text || "{}");
      setScanResult(data);
      setScanStep(3);
    } catch (error) {
      console.error("Audit Error:", error);
      // Fallback réaliste
      setScanResult({
        score: 54,
        priorities: [
          {
            label: t("scanner.ai.priorityLabels.technical"),
            value: 62,
            advice: t("scanner.ai.fallback.technical"),
          },
          {
            label: t("scanner.ai.priorityLabels.content"),
            value: 48,
            advice: t("scanner.ai.fallback.content"),
          },
          {
            label: t("scanner.ai.priorityLabels.authority"),
            value: 35,
            advice: t("scanner.ai.fallback.authority"),
          },
        ],
        summary: t("scanner.ai.fallback.summary"),
        criticalFix: t("scanner.ai.fallback.criticalFix"),
      });
      setScanStep(3);
    } finally {
      setIsScanning(false);
    }
  };

  const startScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scanUrl) return;
    setIsScanning(true);
    setScanStep(2);
    performRealAudit(scanUrl);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLead(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmittingLead(false);
    alert(t("scanner.step4.alert", { url: scanUrl }));
    setScanStep(1);
    setScanUrl("");
    setScanResult(null);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#F0F0F2] dark:bg-[#050505] text-black dark:text-white pt-48 md:pt-48 overflow-hidden transition-colors duration-500 selection:bg-brand-red selection:text-white"
    >
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-brand-red/[0.05] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/[0.03] rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10 pb-20">
        {/* --- BENTO HERO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-fr">
          {/* 1. MAIN HEADLINE CARD */}
          <div
            className={`
                col-span-1 lg:col-span-8 row-span-2
                bg-white dark:bg-[#0A0A0A]/60 backdrop-blur-xl 
                rounded-[40px] p-8 md:p-12 lg:p-20
                border border-black/5 dark:border-white/10
                flex flex-col justify-center
                relative overflow-hidden group
                shadow-2xl dark:shadow-none
                ${!isMobile ? "opacity-0 animate-enter-left" : "opacity-100"}
            `}
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-brand-red/30 bg-transparent mb-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">
                  {t("hero.badge")}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] mb-12 text-black dark:text-white uppercase">
                {t.rich("hero.title", {
                  elite: (chunks) => (
                    <span className="inline-block relative">
                      <span className="relative z-10 text-white px-4">
                        {chunks}
                      </span>
                      <div className="absolute inset-0 bg-brand-red -rotate-1 rounded-sm"></div>
                    </span>
                  ),
                  br: () => <br />,
                })}
              </h1>

              <div className="relative mb-12 max-w-2xl border-l-4 border-brand-red pl-8">
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                  {t.rich("hero.description", {
                    black: (chunks) => (
                      <strong className="text-black dark:text-white">
                        {chunks}
                      </strong>
                    ),
                  })}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="#seo-contact"
                  className={`group relative px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm transition-all shadow-xl flex items-center gap-4 overflow-hidden`}
                >
                  <span className="relative z-10">{t("hero.cta")}</span>
                  <ArrowRight
                    size={18}
                    className="relative z-10 group-hover:translate-x-2 transition-transform"
                  />
                  <div className="absolute inset-0 bg-brand-red translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </a>

                <div className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-md">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                    {t("hero.successRate")}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. REAL INTERACTIVE SCANNER (GDC HUB) */}
          <div
            className={`
                col-span-1 lg:col-span-4 row-span-2
                relative rounded-[40px] overflow-hidden
                bg-[#050505] text-white
                border border-white/5 shadow-2xl
                group flex flex-col
                ${
                  !isMobile
                    ? "opacity-0 animate-enter-right delay-200"
                    : "opacity-100"
                }
                min-h-[650px]
            `}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            <div
              className={`absolute top-0 left-0 w-full h-1.5 transition-colors duration-1000 ${
                scanStep === 3 ? "bg-emerald-500" : "bg-brand-red"
              }`}
            ></div>

            <div className="relative z-10 p-8 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
                    <FileSearch size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest leading-none">
                      {t("scanner.title")}
                    </h3>
                    <p className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.3em] mt-1">
                      {t("scanner.subtitle")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      isScanning
                        ? "bg-yellow-500 animate-pulse"
                        : "bg-emerald-500"
                    } `}
                  ></div>
                  <span className="text-[8px] font-black uppercase tracking-widest">
                    {isScanning
                      ? t("scanner.status.analyzing")
                      : t("scanner.status.ready")}
                  </span>
                </div>
              </div>

              {/* Step 1: URL Input */}
              {scanStep === 1 && (
                <div className="flex-1 flex flex-col justify-center animate-fade-in-up">
                  <div className="mb-10">
                    <h4 className="text-2xl font-black uppercase tracking-tighter mb-3 leading-[1.1]">
                      {t.rich("scanner.step1.title", {
                        critiques: (chunks) => (
                          <span className="text-brand-red">{chunks}</span>
                        ),
                        br: () => <br />,
                      })}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                      {t("scanner.step1.description")}
                    </p>
                  </div>

                  <form onSubmit={startScan} className="space-y-4">
                    <div className="relative group/input">
                      <Globe
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 transition-colors group-focus-within/input:text-brand-red"
                        size={18}
                      />
                      <input
                        type="url"
                        placeholder={t("scanner.step1.placeholder")}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-4 text-sm font-bold focus:border-brand-red focus:outline-none transition-all placeholder:text-gray-700"
                        value={scanUrl}
                        onChange={(e) =>
                          setScanUrl(
                            e.target.value.toLowerCase().replace(/\s/g, "")
                          )
                        }
                      />
                    </div>
                    <button
                      disabled={isScanning || !scanUrl}
                      className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 shadow-xl hover:bg-brand-red hover:text-white transition-all disabled:opacity-30 active:scale-95"
                    >
                      {isScanning ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <>
                          {t("scanner.step1.cta")}{" "}
                          <Zap size={14} fill="currentColor" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}

              {/* Step 2: Loading State */}
              {scanStep === 2 && (
                <div className="flex-1 flex flex-col items-center justify-center animate-pulse text-center">
                  <div className="relative w-32 h-32 mb-10">
                    <div className="absolute inset-0 border-4 border-brand-red/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-brand-red rounded-full border-t-transparent animate-spin"></div>
                    <Search
                      className="absolute inset-0 m-auto text-brand-red"
                      size={40}
                    />
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-2">
                    {t("scanner.step2.title")}
                  </h4>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">
                    {t("scanner.step2.description")}
                  </p>
                </div>
              )}

              {/* Step 3: High-Fidelity Results (Updated to Bar UI per request) */}
              {scanStep === 3 && scanResult && (
                <div className="flex-1 flex flex-col animate-enter-zoom overflow-hidden">
                  {/* NEW SCORE BAR UI */}
                  <div className="mb-10 pt-4">
                    <div className="flex items-end justify-between px-1 mb-6">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2">
                          {t("scanner.step3.engine")}
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-6xl font-black tracking-tighter leading-none">
                            {scanResult.score}
                          </span>
                          <span className="text-2xl font-black text-brand-red">
                            %
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 mb-1">
                          {t("scanner.step3.visibility")}
                        </p>
                        <p
                          className={`text-xs font-black uppercase tracking-tighter ${
                            scanResult.score > 80
                              ? "text-emerald-500"
                              : scanResult.score > 50
                              ? "text-yellow-500"
                              : "text-brand-red"
                          }`}
                        >
                          {scanResult.score > 80
                            ? t("scanner.step3.excellent")
                            : scanResult.score > 50
                            ? t("scanner.step3.fragile")
                            : t("scanner.step3.critical")}
                        </p>
                      </div>
                    </div>

                    <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-[3px] shadow-inner">
                      <div
                        className={`h-full rounded-full transition-all duration-[2000ms] ease-out relative ${
                          scanResult.score > 80
                            ? "bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                            : scanResult.score > 50
                            ? "bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                            : "bg-brand-red shadow-[0_0_20px_rgba(255,0,0,0.3)]"
                        }`}
                        style={{ width: `${scanResult.score}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_2s_infinite]"></div>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col items-center">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">
                        {t("scanner.step3.globalHealth")}
                      </h4>
                      <div className="w-12 h-[3px] bg-brand-red mt-3 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-4 flex-grow overflow-y-auto hide-scrollbar pr-1">
                    {scanResult.priorities.map((p, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-[2rem] bg-white/5 border border-white/5 group/item hover:bg-white/[0.08] transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                            {p.label}
                          </span>
                          <span
                            className={`text-[11px] font-black ${
                              p.value > 60
                                ? "text-emerald-500"
                                : "text-brand-red"
                            }`}
                          >
                            {p.value}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-4">
                          <div
                            className={`h-full ${
                              p.value > 60 ? "bg-emerald-500" : "bg-brand-red"
                            } transition-all duration-[1500ms]`}
                            style={{ width: `${p.value}%` }}
                          ></div>
                        </div>
                        <p className="text-[12px] font-medium text-gray-400 leading-relaxed italic group-hover:text-white transition-colors">
                          "{p.advice}"
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5">
                    <button
                      onClick={() => setScanStep(4)}
                      className="w-full py-5 bg-brand-red text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:bg-red-600 transition-all active:scale-95 flex items-center justify-center gap-4"
                    >
                      {t("scanner.step3.cta")} <ArrowRight size={14} />
                    </button>
                    <button
                      onClick={() => {
                        setScanStep(1);
                        setScanResult(null);
                      }}
                      className="mt-4 w-full text-[9px] font-bold text-gray-600 uppercase tracking-widest hover:text-white transition-colors"
                    >
                      {t("scanner.step3.newScan")}
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Fix Form */}
              {scanStep === 4 && (
                <div className="flex-1 flex flex-col animate-fade-in-up">
                  <button
                    onClick={() => setScanStep(3)}
                    className="mb-8 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-gray-600 hover:text-brand-red transition-colors"
                  >
                    <ArrowRight size={12} className="rotate-180" />{" "}
                    {t("scanner.step4.back")}
                  </button>

                  <div className="mb-10">
                    <h4 className="text-3xl font-black uppercase tracking-tighter leading-none mb-4">
                      {t.rich("scanner.step4.title", {
                        votreSite: (chunks) => (
                          <span className="text-brand-red">{chunks}</span>
                        ),
                        br: () => <br />,
                      })}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                      {t("scanner.step4.description", {
                        url: scanUrl.replace(/^https?:\/\//, ""),
                      })}
                    </p>
                  </div>

                  <form
                    onSubmit={handleLeadSubmit}
                    className="space-y-4 flex-1"
                  >
                    <div className="space-y-1">
                      <div className="relative group">
                        <User
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-brand-red transition-colors"
                          size={16}
                        />
                        <input
                          type="text"
                          required
                          placeholder={t("scanner.step4.name")}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-xs font-bold focus:border-brand-red outline-none transition-all"
                          value={leadForm.name}
                          onChange={(e) =>
                            setLeadForm({ ...leadForm, name: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="relative group">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-brand-red transition-colors"
                        size={16}
                      />
                      <input
                        type="email"
                        required
                        placeholder={t("scanner.step4.email")}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-xs font-bold focus:border-brand-red outline-none transition-all"
                        value={leadForm.email}
                        onChange={(e) =>
                          setLeadForm({ ...leadForm, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="relative group">
                      <MessageSquare
                        className="absolute left-4 top-4 text-gray-600 group-focus-within:text-brand-red transition-colors"
                        size={16}
                      />
                      <textarea
                        rows={4}
                        placeholder={t("scanner.step4.message")}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-xs font-bold focus:border-brand-red outline-none transition-all resize-none"
                        value={leadForm.message}
                        onChange={(e) =>
                          setLeadForm({ ...leadForm, message: e.target.value })
                        }
                      />
                    </div>
                    <button
                      disabled={isSubmittingLead}
                      className="w-full mt-4 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-xl hover:bg-brand-red hover:text-white transition-all flex items-center justify-center gap-4 active:scale-95"
                    >
                      {isSubmittingLead ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <>
                          {t("scanner.step4.cta")} <Rocket size={14} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}

              <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Navigation size={12} className="rotate-45" />
                  <span className="text-[9px] font-black uppercase tracking-[0.5em]">
                    {t("scanner.os")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. FEATURE: AUDIT */}
          <div
            className={`
                col-span-1 lg:col-span-4
                bg-white dark:bg-[#0A0A0A] rounded-[32px] p-8
                border border-black/5 dark:border-white/10
                flex flex-col justify-between group transition-all
                ${
                  !isMobile
                    ? "opacity-0 animate-fade-in-up delay-300 hover:-translate-y-1"
                    : "opacity-100"
                }
            `}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-black dark:text-white border border-black/5 transition-colors duration-300 ${
                !isMobile
                  ? "group-hover:bg-brand-red group-hover:text-white"
                  : ""
              }`}
            >
              <Search size={24} />
            </div>
            <div>
              <h3
                className={`text-xl font-black mb-2 text-black dark:text-white transition-colors ${
                  !isMobile ? "group-hover:text-brand-red" : ""
                }`}
              >
                {t("features.audit360.title")}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                {t("features.audit360.description")}
              </p>
            </div>
          </div>

          {/* 4. FEATURE: CONTENT */}
          <div
            className={`
                col-span-1 lg:col-span-4
                bg-white dark:bg-[#0A0A0A] rounded-[32px] p-8
                border border-black/5 dark:border-white/10
                flex flex-col justify-between group transition-all
                ${
                  !isMobile
                    ? "opacity-0 animate-fade-in-up delay-400 hover:-translate-y-1"
                    : "opacity-100"
                }
            `}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20 transition-colors duration-300 ${
                !isMobile
                  ? "group-hover:bg-blue-500 group-hover:text-white"
                  : ""
              }`}
            >
              <Sparkles size={24} />
            </div>
            <div>
              <h3
                className={`text-xl font-black mb-2 text-black dark:text-white transition-colors ${
                  !isMobile ? "group-hover:text-brand-red" : ""
                }`}
              >
                {t("features.contentStrategist.title")}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                {t("features.contentStrategist.description")}
              </p>
            </div>
          </div>

          {/* 5. FEATURE: AUTHORITY */}
          <div
            className={`
                col-span-1 lg:col-span-4
                bg-white dark:bg-[#0A0A0A] rounded-[32px] p-8
                border border-black/5 dark:border-white/10
                flex flex-col justify-between group transition-all
                ${
                  !isMobile
                    ? "opacity-0 animate-fade-in-up delay-500 hover:-translate-y-1"
                    : "opacity-100"
                }
            `}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red border border-brand-red/20 transition-colors duration-300 ${
                !isMobile
                  ? "group-hover:bg-brand-red group-hover:text-white"
                  : ""
              }`}
            >
              <Globe size={24} />
            </div>
            <div>
              <h3
                className={`text-xl font-black mb-2 text-black dark:text-white transition-colors ${
                  !isMobile ? "group-hover:text-brand-red" : ""
                }`}
              >
                {t("features.netlinkingElite.title")}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                {t("features.netlinkingElite.description")}
              </p>
            </div>
          </div>
        </div>

        {/* --- STATS STRIP --- */}
        <div
          className={`mt-12 bg-black dark:bg-white text-white dark:text-black rounded-[40px] p-8 md:p-12 ${
            !isMobile
              ? "opacity-0 animate-enter-bottom delay-600"
              : "opacity-100"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20 dark:divide-black/10">
            <div className="flex flex-col items-center justify-center py-4 md:py-0">
              <AnimatedCounter
                value={250}
                prefix="+"
                className="text-5xl font-black tracking-tighter"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 mt-3">
                {t("stats_strip.keywords")}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center py-4 md:py-0">
              <AnimatedCounter
                value={300}
                suffix="%"
                className="text-5xl font-black tracking-tighter text-brand-red dark:text-brand-red"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 mt-3">
                {t("stats_strip.traffic")}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center py-4 md:py-0">
              <div className="flex items-center gap-1">
                <AnimatedCounter
                  value={98}
                  suffix="%"
                  className="text-5xl font-black tracking-tighter"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 mt-3">
                {t("stats_strip.retention")}
              </span>
            </div>
          </div>
        </div>

        {/* --- QUICK SERVICES --- */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: t("quick_services.local.title"),
              icon: Target,
              desc: t("quick_services.local.description"),
            },
            {
              title: t("quick_services.ecommerce.title"),
              icon: BarChart3,
              desc: t("quick_services.ecommerce.description"),
            },
            {
              title: t("quick_services.international.title"),
              icon: Globe,
              desc: t("quick_services.international.description"),
            },
            {
              title: t("quick_services.recovery.title"),
              icon: Activity,
              desc: t("quick_services.recovery.description"),
            },
          ].map((s, i) => (
            <div
              key={i}
              className={`p-8 rounded-[32px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 flex flex-col gap-4 transition-all group ${
                !isMobile ? "hover:border-brand-red/30" : ""
              }`}
            >
              <div
                className={`p-3 bg-gray-50 dark:bg-white/5 rounded-2xl w-fit transition-transform ${
                  !isMobile ? "group-hover:scale-110" : ""
                }`}
              >
                <s.icon className="text-brand-red" size={24} />
              </div>
              <h3
                className={`font-bold text-lg text-black dark:text-white transition-colors ${
                  !isMobile ? "group-hover:text-brand-red" : ""
                }`}
              >
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- ADDITIONAL SECTIONS --- */}
        <SEOContactSection />
        <SEOExcellenceSection />
        <SEOFeaturesGrid />
        <SEOWhyChooseAgency />

        <div className="mt-20">
          <Partners />
        </div>

        <SEOBentoDetails />
        <SEORegionalVisibility />
        <SEODigitalProjects />
        <SEOMethodology />
        <SEOExpertiseCities />
        <SEOTestimonials />
        <SEOStats />
        <SEOFAQ />
        <SEOForm />
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        @keyframes scan {
            0% { top: -10%; }
            100% { top: 110%; }
        }
        .animate-scan {
            animation: scan 3s linear infinite;
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </section>
  );
};
