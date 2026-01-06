"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  TrendingUp,
  Zap,
  ArrowUpRight,
  BarChart3,
  Rocket,
  Briefcase,
  Heart,
  Clock,
  Sparkles,
  Loader2,
  Send,
  CheckCircle,
  Cpu,
  Globe,
} from "lucide-react";
import { BentoCard } from "./BentoCard";
import { AnimatedCounter } from "./AnimatedCounter";
import { GoogleGenAI } from "@google/genai";
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/navigation';

export const HeroBento: React.FC = () => {
  const locale = useLocale();
  const tHero = useTranslations('hero');
  const tAi = useTranslations('ai');
  const tStats = useTranslations('stats');
  const tInnovation = useTranslations('innovation');
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const CONTENT_DELAY_BASE = 300;
  const isRTL = locale === "ar";

  // AI Strategist State
  const [businessType, setBusinessType] = useState("");
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const generateAIStrategy = async () => {
    if (!businessType.trim()) return;
    setIsLoading(true);
    setAiResponse(null);

    try {
      const aiLanguageName: Record<string, string> = {
        fr: 'French',
        en: 'English',
        ar: 'Arabic',
        es: 'Spanish',
        de: 'German',
        it: 'Italian',
        pt: 'Portuguese',
        ru: 'Russian',
        nl: 'Dutch'
      };

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `${tAi('prompt')} "${businessType}". 
        Language: ${aiLanguageName[locale] || 'English'}.
        Professional and brief (max 60 words).`,
        config: {
          temperature: 0.7,
          topP: 0.95,
        },
      });
      setAiResponse(response.text || "Error. Try again.");
    } catch (error) {
      console.error("AI Error:", error);
      setAiResponse(tAi('error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen pt-32 md:pt-48 lg:pt-52 pb-10 flex flex-col justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      {/* --- Background with Floating Blur (Reduced for Mobile) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className={`absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-brand-red/[0.04] rounded-full blur-[120px] ${
            !isMobile ? "animate-blob" : ""
          }`}
        ></div>
        <div
          className={`absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-blue-900/[0.05] rounded-full blur-[120px] ${
            !isMobile ? "animate-blob animation-delay-2000" : ""
          }`}
        ></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 w-full h-full max-w-[1920px] mx-auto">
          {/* CARD 1: MAIN HERO */}
          <div
            className={`col-span-1 md:col-span-2 lg:col-span-8 row-span-2 relative group min-h-[550px] lg:min-h-[750px] rounded-[40px] overflow-hidden glass-card transition-all duration-700 ${
              !isMobile ? "opacity-0 animate-enter-zoom" : "opacity-100"
            }`}
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop"
                alt="Digital Leadership"
                className={`w-full h-full object-cover opacity-20 dark:opacity-30 transition-transform duration-[2s] ease-out mix-blend-overlay no-theme-change ${
                  !isMobile ? "group-hover:scale-105" : ""
                }`}
              />
            </div>

            <div
              className={`relative z-10 h-full p-6 md:p-14 lg:p-20 flex flex-col justify-center ${
                isRTL ? "items-end text-right" : "items-start text-left"
              }`}
            >
              <div
                className={`mb-6 md:mb-8 ${
                  !isMobile ? "opacity-0 animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${CONTENT_DELAY_BASE}ms` }}
              >
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.1] dark:bg-white/[0.05] border border-white/20 backdrop-blur-md shadow-[0_0_30px_-5px_rgba(255,0,0,0.2)]">
                  <span className="text-gray-800 dark:text-gray-200 font-bold tracking-[0.25em] text-[10px] sm:text-xs uppercase">
                    {tHero('subtitle')}
                  </span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-black tracking-tighter text-black dark:text-white mb-6 md:mb-8 max-w-5xl flex flex-col gap-2 leading-[0.85]">
                {/* Line 1 */}
                <div className="relative w-fit pr-5 pb-1">
                  <span
                    className={`${
                      isMobile
                        ? "inline"
                        : "invisible whitespace-nowrap select-none"
                    }`}
                    aria-hidden="true"
                  >
                    {tHero('line1')}
                  </span>
                  {!isMobile && (
                    <span
                      className={`absolute top-0 h-full overflow-hidden whitespace-nowrap border-r-4 border-transparent ${
                        isRTL ? "right-0" : "left-0"
                      }`}
                      style={{
                        width: "0%",
                        animation:
                          "type-reveal 0.4s steps(10) forwards 0.2s, cursor-typing 0.4s steps(1) 0.2s",
                      }}
                    >
                      {tHero('line1')}
                    </span>
                  )}
                </div>

                {/* Line 2 */}
                <div className="relative w-fit pr-5 pb-1">
                  <span
                    className={`${
                      isMobile
                        ? "inline text-brand-red"
                        : "invisible whitespace-nowrap select-none"
                    }`}
                    aria-hidden="true"
                  >
                    {tHero('line2')}
                  </span>
                  {!isMobile && (
                    <span
                      className={`absolute top-0 h-full overflow-hidden whitespace-nowrap border-r-4 border-transparent ${
                        isRTL ? "right-0" : "left-0"
                      }`}
                      style={{
                        width: "0%",
                        animation:
                          "type-reveal 0.6s steps(14) forwards 0.6s, cursor-typing 0.6s steps(1) 0.6s",
                      }}
                    >
                      <span className="relative text-brand-red">
                        {tHero('line2')}
                      </span>
                    </span>
                  )}
                </div>

                {/* Line 3 */}
                <div className="relative w-fit pr-5 pb-1">
                  <span
                    className={`${
                      isMobile
                        ? "inline"
                        : "invisible whitespace-nowrap select-none"
                    }`}
                    aria-hidden="true"
                  >
                    {tHero('line3')}
                  </span>
                  {!isMobile && (
                    <span
                      className={`absolute top-0 h-full overflow-hidden whitespace-nowrap border-r-4 border-transparent ${
                        isRTL ? "right-0" : "left-0"
                      }`}
                      style={{
                        width: "0%",
                        animation:
                          "type-reveal 0.5s steps(12) forwards 1.2s, cursor-typing 0.5s steps(1) 1.2s",
                      }}
                    >
                      {tHero('line3')}
                    </span>
                  )}
                </div>

                {/* Line 4 (Innovant) */}
                <div className="relative w-fit pr-5 pb-1">
                  <span
                    className={`${
                      isMobile
                        ? "inline text-brand-red"
                        : "invisible whitespace-nowrap select-none"
                    }`}
                    aria-hidden="true"
                  >
                    {tHero('line4')}
                  </span>
                  {!isMobile && (
                    <span
                      className={`absolute top-0 h-full overflow-hidden whitespace-nowrap border-r-4 border-transparent ${
                        isRTL ? "right-0" : "left-0"
                      }`}
                      style={{
                        width: "0%",
                        animation:
                          "type-reveal 0.4s steps(8) forwards 1.7s, cursor-typing 0.4s steps(1) 1.7s, cursor-blink 1s step-end infinite 2.1s",
                      }}
                    >
                      <span className="text-brand-red">{tHero('line4')}</span>
                    </span>
                  )}
                </div>
              </h1>

              <div
                className={`w-full h-[1px] bg-gradient-to-r from-black/20 dark:from-white/10 to-transparent mb-8 ${
                  !isMobile ? "opacity-0 animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${CONTENT_DELAY_BASE + 1400}ms` }}
              ></div>

              <p
                className={`text-lg sm:text-2xl md:text-3xl text-gray-800 dark:text-gray-400 max-w-3xl font-light leading-relaxed mb-10 ${
                  !isMobile ? "opacity-0 animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${CONTENT_DELAY_BASE + 1500}ms` }}
              >
                {tHero('description')}
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto ${
                  !isMobile ? "opacity-0 animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${CONTENT_DELAY_BASE + 1600}ms` }}
              >
                <button
                  onClick={() => router.push("/contact-page")}
                  className="btn-liquid px-10 py-5 rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-all bg-black dark:bg-white text-white dark:text-black"
                >
                  <span className="relative z-10">{tHero('cta')}</span>
                  <ArrowRight
                    className={`relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                      isRTL ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <button
                  onClick={() => router.push("/portfolio")}
                  className="group px-10 py-5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-2xl hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 text-xs md:text-sm uppercase tracking-[0.2em] backdrop-blur-md shadow-xl"
                >
                  <span>{tHero('portfolio')}</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-brand-red" />
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2: STATISTICS */}
          <BentoCard
            className={`col-span-1 md:col-span-1 lg:col-span-4 min-h-[280px] glass-card ${
              !isMobile ? "opacity-0 animate-enter-right" : "opacity-100"
            }`}
            style={{ animationDelay: "100ms" }}
            noPadding
          >
            <div className="relative z-10 h-full p-6 flex flex-col justify-between">
              <div
                className={`flex items-center justify-between mb-4 ${
                  isRTL ? "flex-row-reverse" : ""
                } ${!isMobile ? "opacity-0 animate-fade-in-up" : ""}`}
                style={{ animationDelay: `${CONTENT_DELAY_BASE + 200}ms` }}
              >
                <h3
                  className={`text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400 flex items-center gap-2 ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <BarChart3 className="text-brand-red" size={16} />{" "}
                  {tStats('performance')}
                </h3>
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    {!isMobile && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    )}
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-500 uppercase tracking-widest">
                    Live Hub
                  </span>
                </div>
              </div>

              <div
                className={`grid grid-cols-2 gap-3 h-full pb-2 ${
                  !isMobile ? "opacity-0 animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${CONTENT_DELAY_BASE + 300}ms` }}
              >
                <div
                  className={`group relative overflow-hidden rounded-[24px] bg-white/50 dark:bg-white/[0.03] border border-white/60 dark:border-white/5 p-4 flex flex-col justify-between transition-all duration-500 ${
                    !isMobile
                      ? "hover:scale-[1.05] hover:border-brand-red/30"
                      : ""
                  }`}
                >
                  <TrendingUp className="text-brand-red w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <div className="mt-2">
                    <AnimatedCounter
                      value={500}
                      prefix="+"
                      suffix="%"
                      delay={CONTENT_DELAY_BASE + 500}
                      className="block text-3xl font-black text-black dark:text-white tracking-tighter"
                    />
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 mt-1">
                      {tStats('growth')}
                    </p>
                  </div>
                </div>

                <div
                  className={`group relative overflow-hidden rounded-[24px] bg-white/50 dark:bg-white/[0.03] border border-white/60 dark:border-white/5 p-4 flex flex-col justify-between transition-all duration-500 ${
                    !isMobile
                      ? "hover:scale-[1.05] hover:border-blue-500/30"
                      : ""
                  }`}
                >
                  <Heart className="text-blue-500 w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <div className="mt-2">
                    <AnimatedCounter
                      value={98}
                      suffix="%"
                      delay={CONTENT_DELAY_BASE + 700}
                      className="block text-3xl font-black text-black dark:text-white tracking-tighter"
                    />
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 mt-1">
                      {tStats('satisfaction')}
                    </p>
                  </div>
                </div>

                <div
                  className={`group relative overflow-hidden rounded-[24px] bg-white/50 dark:bg-white/[0.03] border border-white/60 dark:border-white/5 p-4 flex flex-col justify-between transition-all duration-500 ${
                    !isMobile
                      ? "hover:scale-[1.05] hover:border-purple-500/30"
                      : ""
                  }`}
                >
                  <Briefcase className="text-purple-500 w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <div className="mt-2">
                    <AnimatedCounter
                      value={200}
                      suffix="+"
                      delay={CONTENT_DELAY_BASE + 900}
                      className="block text-3xl font-black text-black dark:text-white tracking-tighter"
                    />
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 mt-1">
                      {tStats('projects')}
                    </p>
                  </div>
                </div>

                <div
                  className={`group relative overflow-hidden rounded-[24px] bg-white/50 dark:bg-white/[0.03] border border-white/60 dark:border-white/5 p-4 flex flex-col justify-between transition-all duration-500 ${
                    !isMobile
                      ? "hover:scale-[1.05] hover:border-amber-500/30"
                      : ""
                  }`}
                >
                  <Clock className="text-amber-500 w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  <div className="mt-2">
                    <span className="block text-3xl font-black text-black dark:text-white tracking-tighter">
                      24/7
                    </span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-500 mt-1">
                      {tStats('support')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* CARD 3: AI STRATEGY LAB */}
          <BentoCard
            className={`col-span-1 md:col-span-1 lg:col-span-4 min-h-[300px] glass-card group/ai ${
              !isMobile ? "opacity-0 animate-enter-bottom" : "opacity-100"
            }`}
            style={{ animationDelay: "200ms" }}
            noPadding
          >
            <div className="relative z-10 h-full p-6 flex flex-col">
              <div
                className={`flex items-center justify-between mb-6 ${
                  isRTL ? "flex-row-reverse" : ""
                } ${!isMobile ? "opacity-0 animate-fade-in-up" : ""}`}
                style={{ animationDelay: `${CONTENT_DELAY_BASE + 400}ms` }}
              >
                <h3
                  className={`text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 dark:text-gray-400 flex items-center gap-2 ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <Cpu
                    className={`text-brand-red ${
                      !isMobile ? "group-hover/ai:animate-spin" : ""
                    }`}
                    size={16}
                  />{" "}
                  {tAi('title')}
                </h3>
                <Sparkles
                  size={14}
                  className={`text-brand-red ${
                    !isMobile ? "animate-pulse" : ""
                  }`}
                />
              </div>

              {!aiResponse ? (
                <div
                  className={`flex-1 flex flex-col gap-4 ${
                    isRTL ? "text-right" : ""
                  } ${!isMobile ? "opacity-0 animate-fade-in-up" : ""}`}
                  style={{ animationDelay: `${CONTENT_DELAY_BASE + 500}ms` }}
                >
                  <p className="text-xs font-bold text-black dark:text-white mb-2 leading-relaxed">
                    {tAi('hint')}
                  </p>
                  <div className="relative group/input">
                    <input
                      type="text"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && generateAIStrategy()
                      }
                      placeholder={tAi('placeholder')}
                      className={`w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-4 px-5 text-sm focus:outline-none focus:border-brand-red transition-all ${
                        isRTL ? "text-right" : ""
                      }`}
                    />
                    <button
                      onClick={generateAIStrategy}
                      disabled={isLoading || !businessType.trim()}
                      className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-brand-red text-white flex items-center justify-center hover:scale-110 disabled:opacity-50 transition-all shadow-lg ${
                        isRTL ? "left-2" : "right-2"
                      }`}
                    >
                      {isLoading ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        <Send size={18} className={isRTL ? "rotate-180" : ""} />
                      )}
                    </button>
                  </div>
                  <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mt-auto">
                    {tAi('status')}
                  </p>
                </div>
              ) : (
                <div
                  className={`flex-1 flex flex-col opacity-0 animate-enter-zoom ${
                    isRTL ? "text-right" : ""
                  }`}
                >
                  <div className="flex-1 bg-black/5 dark:bg-white/5 rounded-[24px] p-5 border border-black/5 dark:border-white/5 mb-4 relative overflow-hidden">
                    <div
                      className={`absolute top-0 p-3 ${
                        isRTL ? "left-0" : "right-0"
                      }`}
                    >
                      <CheckCircle size={14} className="text-brand-red" />
                    </div>
                    <p className="text-xs font-medium text-gray-800 dark:text-gray-300 leading-relaxed italic">
                      "{aiResponse}"
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setAiResponse(null);
                      setBusinessType("");
                    }}
                    className="w-full py-3 rounded-xl border border-brand-red/30 text-brand-red text-[10px] font-black uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all"
                  >
                    {tAi('newAnalysis')}
                  </button>
                </div>
              )}
            </div>
          </BentoCard>

          {/* CARD 4: INNOVATION LAB */}
          <BentoCard
            className={`col-span-1 md:col-span-2 lg:col-span-12 xl:col-span-12 min-h-[220px] glass-card group overflow-hidden ${
              !isMobile ? "opacity-0 animate-enter-bottom" : "opacity-100"
            }`}
            style={{ animationDelay: "300ms" }}
            noPadding
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />
              {!isMobile && (
                <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-brand-red/5 to-transparent"></div>
              )}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent"></div>
            </div>

            <div
              className={`relative z-10 h-full p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isRTL ? "text-right" : ""
              }`}
            >
              <div
                className={`lg:col-span-2 xl:col-span-1 flex justify-center lg:justify-start ${
                  !isMobile ? "opacity-0 animate-fade-in-up" : ""
                } ${isRTL ? "lg:order-2" : ""}`}
                style={{ animationDelay: `${CONTENT_DELAY_BASE + 600}ms` }}
              >
                <div className="relative">
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-[32px] bg-white dark:bg-white/5 border border-white/50 dark:border-white/10 backdrop-blur-md flex items-center justify-center relative z-10 shadow-2xl ${
                      !isMobile ? "animate-float" : ""
                    }`}
                  >
                    <Rocket className="text-black dark:text-white w-10 h-10" />
                  </div>
                  <div
                    className={`absolute -inset-4 bg-brand-red/20 blur-2xl rounded-full ${
                      !isMobile ? "animate-pulse-slow" : ""
                    }`}
                  ></div>
                  <div
                    className={`absolute -top-2 -right-2 p-2 bg-white dark:bg-black border border-brand-red/20 rounded-xl shadow-xl backdrop-blur-sm ${
                      !isMobile ? "animate-bounce" : ""
                    }`}
                  >
                    <Cpu size={14} className="text-brand-red" />
                  </div>
                  <div
                    className={`absolute -bottom-1 -left-2 p-2 bg-white dark:bg-black border border-blue-500/20 rounded-xl shadow-xl backdrop-blur-sm ${
                      !isMobile ? "animate-bounce animation-delay-2000" : ""
                    }`}
                  >
                    <Globe size={14} className="text-blue-500" />
                  </div>
                </div>
              </div>

              <div
                className={`lg:col-span-7 xl:col-span-8 text-center lg:text-left ${
                  !isMobile ? "opacity-0 animate-fade-in-up" : ""
                } ${isRTL ? "lg:order-1" : ""}`}
                style={{ animationDelay: `${CONTENT_DELAY_BASE + 700}ms` }}
              >
                <div
                  className={`flex flex-col items-center lg:items-start gap-4 ${
                    isRTL ? "lg:items-end" : ""
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest">
                    <Zap size={12} fill="currentColor" />{" "}
                    {tInnovation('tag')}
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black dark:text-white tracking-tight leading-none">
                    {tInnovation.rich('headline', {
                      success: (chunks) => (
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-white">
                          {chunks}
                        </span>
                      )
                    })}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-400 text-base md:text-lg font-medium leading-relaxed max-w-4xl">
                    {tInnovation('description')}
                  </p>
                </div>
              </div>

              <div
                className={`lg:col-span-3 xl:col-span-3 flex justify-center lg:justify-end ${
                  !isMobile ? "opacity-0 animate-fade-in-up" : ""
                } ${isRTL ? "lg:order-0" : ""}`}
                style={{ animationDelay: `${CONTENT_DELAY_BASE + 800}ms` }}
              >
                <button
                  onClick={() => router.push("/agency")}
                  className={`group relative overflow-hidden bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest py-5 px-10 rounded-2xl transition-all duration-500 whitespace-nowrap ${
                    !isMobile ? "hover:shadow-2xl hover:scale-110" : ""
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-4 text-xs md:text-sm">
                    {tInnovation('discoverCta')}{" "}
                    <ArrowRight
                      size={20}
                      className={`transition-transform ${
                        !isMobile ? "group-hover:translate-x-2" : ""
                      } ${isRTL ? "rotate-180" : ""}`}
                    />
                  </span>
                </button>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};
