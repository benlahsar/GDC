"use client";
import React, { useEffect, useState } from "react";
import {
  Paintbrush,
  CheckCircle2,
  Crown,
  MessagesSquare,
  Lock,
  Check,
  ArrowRight,
  Laptop,
  Sparkles,
  Zap,
  Smartphone,
  Code2,
} from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { AppExpertSection } from "./AppExpertSection";
import { AppContactBanner } from "./AppContactBanner";
import { AppFeaturesGrid } from "./AppFeaturesGrid";
import { AppDeepExpertise } from "./AppDeepExpertise";
import { AppPlatformPartners } from "./AppPlatformPartners";
import { AppSolutionSection } from "./AppSolutionSection";
import { AppRegionalExpertise } from "./AppRegionalExpertise";
import { AppProjectPortfolio } from "./AppProjectPortfolio";
import { AppMethodology } from "./AppMethodology";
import { AppDetailedRegionalExpertise } from "./AppDetailedRegionalExpertise";
import { AppTestimonials } from "./AppTestimonials";
import { AppStats } from "./AppStats";
import { AppFAQ } from "./AppFAQ";
import { AppProjectForm } from "./AppProjectForm";
import { useTranslations } from "next-intl";

export const ApplicationCreationPage: React.FC = () => {
  const t = useTranslations("ApplicationCreationPage");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#F0F0F2] dark:bg-[#000000] text-black dark:text-white pt-48 md:pt-56 lg:pt-64 pb-0 px-0 md:px-0 lg:px-0 selection:bg-brand-red selection:text-white font-sans transition-colors duration-500 overflow-x-clip">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-[120px] ${
            !isMobile ? "animate-blob" : ""
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/[0.03] rounded-full blur-[120px] ${
            !isMobile ? "animate-blob animation-delay-2000" : ""
          }`}
        ></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        {/* --- MAIN BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto mb-12">
          {/* 1. MAIN WELCOME CARD */}
          <div
            className={`
                lg:col-span-8 row-span-2
                bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-12 lg:p-16
                border border-black/5 dark:border-white/10
                flex flex-col justify-center
                relative overflow-hidden group
                shadow-2xl dark:shadow-none
                ${!isMobile ? "opacity-0 animate-enter-left" : "opacity-100"}
            `}
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/10 transition-colors duration-700"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm">
                <Sparkles
                  size={14}
                  className={`text-brand-red ${
                    !isMobile ? "animate-pulse" : ""
                  }`}
                />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
                  {t("badge")}
                </span>
              </div>

              <h1
                className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-8 text-black dark:text-white"
                dangerouslySetInnerHTML={{
                  __html: t.raw("title").replace(/{br}/g, "<br/>"),
                }}
              />

              <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-3xl mb-12 border-l-2 border-brand-red pl-6">
                <p
                  dangerouslySetInnerHTML={{ __html: t.raw("description.p1") }}
                />
                <p
                  dangerouslySetInnerHTML={{ __html: t.raw("description.p2") }}
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className={`group px-10 py-5 bg-brand-red text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-[0_20px_40px_rgba(220,38,38,0.3)] flex items-center gap-3 ${
                    !isMobile ? "hover:scale-105" : ""
                  }`}
                >
                  {t("cta.start")}{" "}
                  <ArrowRight
                    size={18}
                    className={
                      !isMobile
                        ? "group-hover:translate-x-1 transition-transform"
                        : ""
                    }
                  />
                </a>
                <div className="flex items-center gap-4 px-6 py-5 rounded-2xl border border-black/5 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-md">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0A0A0A] bg-gray-200 dark:bg-gray-800 overflow-hidden"
                      >
                        <img
                          src={`https://i.pravatar.cc/100?img=${i + 45}`}
                          alt="expert"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                    {t("experts")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. IMAGE CARD */}
          <div
            className={`
                lg:col-span-4 row-span-2
                relative rounded-[40px] overflow-hidden
                bg-[#111] dark:bg-black
                flex items-center justify-center p-4
                shadow-2xl shadow-black/50
                group
                ${
                  !isMobile
                    ? "opacity-0 animate-enter-right delay-200"
                    : "opacity-100"
                }
                min-h-[400px]
            `}
          >
            <div className="absolute inset-0 z-0">
              <img
                src="https://group-digitalconcept.com/wp-content/uploads/2025/12/app.jpg"
                alt="Application Development Illustration"
                className={`w-full h-full object-cover opacity-90 ${
                  !isMobile
                    ? "group-hover:scale-110 transition-transform duration-[2s] ease-out"
                    : ""
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col gap-3">
              <div
                className={`px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3 ${
                  !isMobile
                    ? "transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    : ""
                }`}
              >
                <Code2 size={16} className="text-brand-red" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">
                  {t("imageCard.code")}
                </span>
              </div>
              <div
                className={`px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3 ${
                  !isMobile
                    ? "transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100"
                    : ""
                }`}
              >
                <Smartphone size={16} className="text-blue-400" />
                <span className="text-[10px] font-black text-white uppercase tracking-widest">
                  {t("imageCard.mobile")}
                </span>
              </div>
            </div>
          </div>

          {/* 3. PROCESS LIST */}
          <div
            className={`
                lg:col-span-4
                bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-10
                border border-black/5 dark:border-white/10
                group transition-all duration-500
                ${
                  !isMobile
                    ? "opacity-0 animate-fade-in-up delay-300 hover:-translate-y-1"
                    : "opacity-100"
                }
            `}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
                <Laptop size={22} />
              </div>
              <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-tight">
                {t("process.title")}
              </h3>
            </div>

            <ul className="space-y-4">
              {(t.raw("process.items") as string[]).map((item, i) => (
                <li key={i} className="flex items-center gap-4 group/item">
                  <div
                    className={`w-2 h-2 rounded-full bg-brand-red transition-transform ${
                      !isMobile ? "group-hover/item:scale-150" : ""
                    }`}
                  ></div>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. BENEFITS LIST */}
          <div
            className={`
                lg:col-span-8
                bg-[#F5F5F7] dark:bg-[#080808] rounded-[40px] p-8 md:p-12
                border border-black/5 dark:border-white/10
                group transition-all duration-500
                ${
                  !isMobile
                    ? "opacity-0 animate-fade-in-up delay-400 hover:-translate-y-1"
                    : "opacity-100"
                }
                relative overflow-hidden
            `}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full">
              <div className="flex-1">
                <h3 className="text-2xl font-black text-black dark:text-white mb-6">
                  {t("benefits.title")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(t.raw("benefits.items") as string[]).map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-2xl bg-white dark:bg-black/40 border border-black/5 dark:border-white/5 group/benefit"
                    >
                      <Check
                        className={`text-brand-red mt-1 shrink-0 transition-transform ${
                          !isMobile ? "group-hover/benefit:scale-110" : ""
                        }`}
                        size={16}
                        strokeWidth={3}
                      />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:w-1/3 flex flex-col items-center justify-center text-center p-6 bg-brand-red rounded-3xl text-white shadow-xl shadow-red-900/20">
                <Zap size={32} fill="white" className="mb-4" />
                <p className="text-xs font-black uppercase tracking-widest opacity-80 mb-2">
                  {t("stats.label")}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold">sous</span>
                  <AnimatedCounter value={30} className="text-5xl font-black" />
                  <span className="text-xs font-bold">{t("stats.sub")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5. ICONS STRIP & CTA */}
          <div
            className={`lg:col-span-12 mt-4 bg-white/50 dark:bg-[#0A0A0A]/50 backdrop-blur-xl rounded-[40px] border border-black/5 dark:border-white/10 p-8 md:p-12 mb-12 ${
              !isMobile
                ? "opacity-0 animate-enter-bottom delay-500"
                : "opacity-100"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 lg:gap-12 w-full lg:w-auto">
                {/* We map over the icons, but labels come from translation */}
                {(t.raw("icons.items") as any[]).map((item, idx) => {
                  const Icon = [
                    Paintbrush,
                    CheckCircle2,
                    Crown,
                    MessagesSquare,
                    Lock,
                  ][idx % 5];
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center gap-4 group cursor-default"
                    >
                      <div
                        className={`w-16 h-16 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center transition-all duration-300 shadow-lg ${
                          !isMobile
                            ? "group-hover:bg-brand-red group-hover:text-white group-hover:scale-110"
                            : ""
                        }`}
                      >
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-tight text-gray-800 dark:text-gray-200 opacity-60 transition-opacity">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">
                <p className="text-center lg:text-right text-sm font-bold text-gray-500 dark:text-gray-400 max-w-sm">
                  {t("icons.text")}
                </p>
                <a
                  href="#contact"
                  className={`px-12 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all shadow-2xl flex items-center gap-4 group/btn ${
                    !isMobile ? "hover:scale-105" : ""
                  }`}
                >
                  {t("cta.contact")}{" "}
                  <ArrowRight
                    size={20}
                    className={
                      !isMobile
                        ? "group-hover:btn:translate-x-1 transition-transform"
                        : ""
                    }
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <AppContactBanner />
        <AppExpertSection />
        <AppFeaturesGrid />
        <AppPlatformPartners />
        <AppDeepExpertise />
        <AppSolutionSection />
        <AppRegionalExpertise />
        <AppProjectPortfolio />
        <AppMethodology />
        <AppDetailedRegionalExpertise />
        <AppStats />
        <AppFAQ />
        <AppTestimonials />
        <AppProjectForm />
      </div>
    </section>
  );
};
