"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ShieldCheck,
  Code2,
  Globe,
  CheckCircle2,
  Target,
  X,
  Maximize2,
  Minimize2,
  Cpu,
  Fingerprint,
  Activity,
  Server,
  Layers,
  Terminal,
  Play,
  RefreshCw,
  Power,
  Trophy,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Zap,
  MousePointer2,
  BarChart3,
  Star,
  Clock,
  Heart,
  ArrowUpRight,
  Smartphone,
  Layout,
  Database,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { AnimatedCounter } from "./AnimatedCounter";
import { AgencyMilestones } from "./AgencyMilestones";
import { AgencyEngagement } from "./AgencyEngagement";
import { AgencyMethodology } from "./AgencyMethodology";
import { AgencyServices } from "./AgencyServices";
import { FAQSection } from "./FAQSection";
import { AgencyProjectForm } from "./AgencyProjectForm";
import { AgencyFinalCTA } from "./AgencyFinalCTA";

// --- DATA: EXPANDED CODE CONTENT ---
const SECTIONS_DATA = [
  {
    id: "identity",
    titleKey: "identity",
    fileName: "GDC_Identity.sys",
    lang: "typescript",
    codeContent: `/*
 * 🌟 Qui sommes-nous
 * 🏢 Group Digital Concept - Marrakech, Maroc
 */

const QuiSommesNous = {
  Nom: "Group Digital Concept",
  Localisation: "Marrakech, Maroc",
  FondéeEn: 2020,
  Spécialités: [
    "Web Marketing", 
    "Gestion de Communauté", 
    "Développement Full-Stack",
    "Création de Sites Web",
    "SEO & Référencement"
  ],
  Objectif: "Accompagner les entreprises à développer leur présence digitale.",
  Valeurs: ["Innovation", "Excellence", "Confiance", "Engagement"],
  Statut: "Leader du marché"
};`,
  },
  {
    id: "vision",
    titleKey: "vision",
    fileName: "future_roadmap.ts",
    lang: "typescript",
    codeContent: `/*
 * 🌍 Notre Vision
 * 🚀 Ambition: Devenir le hub digital de référence
 */

const Vision = {
  Ambition: "Devenir le hub digital de référence au Maroc et en Afrique",
  Approche: "Allier créativité, innovation et stratégie.",
  ObjectifsClés: [
    "Solutions digitales innovantes",
    "Transformation numérique agile",
    "Expériences numériques mémorables"
  ]
};`,
  },
  {
    id: "mission",
    titleKey: "mission",
    fileName: "mission_control.json",
    lang: "json",
    codeContent: `/*
 * 🎯 Notre Mission
 * 💡 Objectif: Soutenir chaque client
 */

const Mission = {
  Accompagnement: "Soutenir les entreprises dans toutes les étapes.",
  Garanties: {
    QualityCheck: true,
    DeadlineEnforcement: "STRICT",
    ROIFocus: "HIGH_PRIORITY"
  }
};`,
  },
];

const TypewriterCode = ({
  code,
  isVisible,
}: {
  code: string;
  isVisible: boolean;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);

  const highlight = (text: string) => {
    return text
      .replace(/('.*?')/g, '<span class="text-[#ce9178]">$1</span>')
      .replace(/(".*?")/g, '<span class="text-[#ce9178]">$1</span>')
      .replace(
        /\b(const|let|var|function|async|await|return|if|while|class|import|export|from)\b/g,
        '<span class="text-[#c678dd] italic">$1</span>'
      )
      .replace(
        /\b(true|false|null)\b/g,
        '<span class="text-[#d19a66]">$1</span>'
      )
      .replace(/\b(\d+)\b/g, '<span class="text-[#d19a66]">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="text-[#6a9955] italic">$1</span>');
  };

  useEffect(() => {
    if (isVisible) {
      if (displayedText.length === code.length) return;
      const interval = setInterval(() => {
        if (indexRef.current < code.length) {
          setDisplayedText((prev) => prev + code.charAt(indexRef.current));
          indexRef.current++;
        } else {
          clearInterval(interval);
        }
      }, 15);
      return () => clearInterval(interval);
    }
  }, [isVisible, code, displayedText]);

  return (
    <pre className="font-mono text-xs md:text-sm leading-relaxed text-[#abb2bf] whitespace-pre-wrap">
      <code
        dangerouslySetInnerHTML={{
          __html:
            highlight(displayedText) +
            '<span class="animate-pulse border-l-2 border-brand-red ml-1">&nbsp;</span>',
        }}
      />
    </pre>
  );
};

export const AgencyPage: React.FC = () => {
  const t = useTranslations("AgencyPage");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [visibleSections, setVisibleSections] = useState<{
    [key: string]: boolean;
  }>({});
  const [minimizedWindows, setMinimizedWindows] = useState<{
    [key: string]: boolean;
  }>({});
  const [loadingWindows, setLoadingWindows] = useState<{
    [key: string]: boolean;
  }>({});

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      setMousePos({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section-id");
            if (id) {
              setVisibleSections((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: isMobile ? 0.1 : 0.3 }
    );

    document.querySelectorAll(".code-section-trigger").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      observerRef.current?.disconnect();
    };
  }, [isMobile]);

  const handleMinimize = (id: string) => {
    setMinimizedWindows((prev) => ({ ...prev, [id]: true }));
  };

  const handleRestore = (id: string) => {
    setLoadingWindows((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoadingWindows((prev) => ({ ...prev, [id]: false }));
      setMinimizedWindows((prev) => ({ ...prev, [id]: false }));
    }, 1500);
  };

  return (
    <div className="bg-[#F0F0F2] dark:bg-[#050505] min-h-screen transition-colors duration-500 overflow-x-hidden selection:bg-brand-red selection:text-white flex flex-col">
      {/* 1. ULTRA-MODERN BENTO HERO SECTION */}
      <section className="relative w-full pt-48 pb-24 md:pt-48 md:pb-32 px-4 md:px-8 overflow-hidden">
        {/* Global Ambient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className={`absolute top-0 left-1/4 w-[80vw] h-[80vw] bg-brand-red/[0.03] rounded-full blur-[150px] ${
              !isMobile ? "animate-pulse" : ""
            }`}
          ></div>
          <div
            className={`absolute bottom-0 right-1/4 w-[60vw] h-[60vw] bg-blue-600/[0.02] rounded-full blur-[150px] ${
              !isMobile ? "animate-blob" : ""
            }`}
          ></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1700px] mx-auto">
          {/* Bento Grid Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6 auto-rows-[minmax(180px,auto)]">
            {/* --- CARD 1: MAIN STATEMENT (The "Core") --- */}
            <div
              className={`
                col-span-1 md:col-span-2 lg:col-span-8 row-span-3
                bg-white/40 dark:bg-white/[0.03] backdrop-blur-[40px] saturate-150
                rounded-[48px] p-8 md:p-14 lg:p-20 
                border border-black/[0.05] dark:border-white/[0.08] 
                shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                relative overflow-hidden group 
                flex flex-col justify-center 
                ${!isMobile ? "opacity-0 animate-fade-in-up" : "opacity-100"}
              `}
            >
              {/* Subtle Noise Texture */}
              <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

              {/* Internal Glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/[0.04] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-10 backdrop-blur-md shadow-sm">
                  <Sparkles
                    size={14}
                    className={`text-brand-red ${
                      !isMobile ? "animate-pulse" : ""
                    }`}
                  />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-800 dark:text-gray-200">
                    {t("hero.badge")}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-8xl xl:text-9xl font-black text-black dark:text-white tracking-tighter leading-[0.82] uppercase mb-10">
                  {t("hero.title.prefix")} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600 italic pr-4">
                    {t("hero.title.highlight")}
                  </span>{" "}
                  <br />
                  {t("hero.title.suffix")}
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-3xl mb-12">
                  {t("hero.description")}
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
                  <a
                    href="#contact"
                    className="group relative overflow-hidden px-10 py-6 bg-black dark:bg-white text-white dark:text-black rounded-3xl font-black uppercase tracking-widest text-[11px] transition-all md:hover:scale-[1.03] shadow-2xl active:scale-95"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {t("hero.cta.start")}{" "}
                      <ArrowRight
                        size={16}
                        className="md:group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                    <div className="absolute inset-0 bg-brand-red translate-x-full md:group-hover:translate-x-0 transition-transform duration-500"></div>
                  </a>
                  <div className="flex items-center gap-4 px-8 py-5 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-md text-gray-500 dark:text-gray-400 text-[10px] font-black uppercase tracking-widest">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white dark:border-[#111] bg-gray-300 dark:bg-gray-800 overflow-hidden"
                        >
                          <img
                            src={`https://i.pravatar.cc/100?img=${i + 22}`}
                            alt="User"
                          />
                        </div>
                      ))}
                    </div>
                    <span>{t("hero.cta.projects")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* --- CARD 2: ICONIC VISUAL (Right Top - 4 cols, 2 rows) --- */}
            <div
              className={`
                col-span-1 md:col-span-1 lg:col-span-4 row-span-2
                bg-[#111] text-white
                rounded-[48px] p-10
                border border-white/5 shadow-2xl
                relative overflow-hidden group 
                flex flex-col justify-between 
                transition-transform duration-700
                ${
                  !isMobile
                    ? "opacity-0 animate-fade-in-up delay-100 md:hover:scale-[1.02]"
                    : "opacity-100"
                }
              `}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
                  alt="Global Tech"
                  className={`w-full h-full object-cover opacity-30 grayscale transition-transform duration-[3s] ${
                    !isMobile ? "group-hover:scale-110" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-transparent opacity-40"></div>
              </div>

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-md transition-all duration-500 shadow-xl ${
                    !isMobile
                      ? "group-hover:bg-brand-red group-hover:scale-110"
                      : ""
                  }`}
                >
                  <Globe size={32} strokeWidth={1} className="text-white" />
                </div>
                <h3 className="text-3xl font-black leading-[0.9] uppercase tracking-tighter mb-4">
                  {t("cards.vision.title")} <br />
                  <span className="text-brand-red">
                    {t("cards.vision.highlight")}
                  </span>
                </h3>
                <p className="text-gray-400 font-bold text-[11px] uppercase tracking-widest leading-relaxed">
                  {t.rich("cards.vision.description", {
                    br: () => <br />,
                  })}
                </p>
              </div>

              <div className="relative z-10 pt-10 border-t border-white/10 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-3xl font-black tracking-tighter">
                    100%
                  </span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-gray-500">
                    {t("cards.vision.compliance")}
                  </span>
                </div>
                <div
                  className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 ${
                    !isMobile
                      ? "group-hover:bg-white group-hover:text-black"
                      : ""
                  }`}
                >
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>

            {/* --- CARD 3: LIVE PERFORMANCE (Small Center Right - 4 cols, 1 row) --- */}
            <div
              className={`
                col-span-1 md:col-span-1 lg:col-span-4 row-span-1
                bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-2xl
                rounded-[48px] p-8 md:p-10
                border border-black/5 dark:border-white/10 shadow-xl
                flex items-center justify-between group
                transition-all
                ${
                  !isMobile
                    ? "opacity-0 animate-fade-in-up delay-200 md:hover:border-brand-red/30"
                    : "opacity-100"
                }
              `}
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-2 h-2 rounded-full bg-emerald-500 ${
                      !isMobile ? "animate-ping" : ""
                    }`}
                  ></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    {t("cards.performance.live_analytics")}
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <AnimatedCounter
                    value={98}
                    suffix="%"
                    className="text-5xl font-black text-black dark:text-white tracking-tighter"
                  />
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {t("cards.performance.seo_score")}
                </span>
              </div>
              <div
                className={`p-4 rounded-3xl bg-brand-red/5 border border-brand-red/10 text-brand-red transition-transform ${
                  !isMobile ? "group-hover:scale-110" : ""
                }`}
              >
                <TrendingUp size={28} />
              </div>
            </div>

            {/* --- CARD 4: TECH STACK MOCKUP (Bottom Left - 8 cols, 1 row) --- */}
            <div
              className={`
                col-span-1 md:col-span-2 lg:col-span-8 row-span-1
                bg-[#F8F8FA] dark:bg-[#0A0A0A] 
                rounded-[48px] p-8 md:p-10 
                border border-black/5 dark:border-white/10 
                relative overflow-hidden group 
                flex flex-col lg:flex-row items-center justify-between gap-10
                transition-all duration-700
                ${
                  !isMobile
                    ? "opacity-0 animate-fade-in-up delay-300 md:hover:shadow-2xl"
                    : "opacity-100"
                }
              `}
            >
              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 shadow-sm flex items-center justify-center text-brand-red border border-black/5 dark:border-white/10">
                    <Cpu size={20} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    {t("cards.tech_stack.badge")}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-black dark:text-white mb-2 leading-none uppercase tracking-tighter">
                  {t("cards.tech_stack.title.prefix")}{" "}
                  <span className="text-brand-red italic">
                    {t("cards.tech_stack.title.suffix")}
                  </span>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-bold text-[11px] uppercase tracking-widest">
                  {t("cards.tech_stack.description")}
                </p>
              </div>

              <div className="flex items-center gap-6 relative z-10 bg-white/50 dark:bg-white/5 backdrop-blur-xl p-4 rounded-3xl border border-black/5 dark:border-white/10">
                {[
                  {
                    icon: Smartphone,
                    label: t("cards.tech_stack.items.app"),
                    color: "text-blue-500",
                  },
                  {
                    icon: Layout,
                    label: t("cards.tech_stack.items.web"),
                    color: "text-purple-500",
                  },
                  {
                    icon: Database,
                    label: t("cards.tech_stack.items.data"),
                    color: "text-emerald-500",
                  },
                  {
                    icon: ShieldCheck,
                    label: t("cards.tech_stack.items.safe"),
                    color: "text-brand-red",
                  },
                ].map((stack, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 group/stack cursor-default"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl bg-white dark:bg-black flex items-center justify-center shadow-sm transition-all duration-300 ${
                        !isMobile
                          ? "group-hover/stack:scale-110 group-hover/stack:bg-brand-red group-hover/stack:text-white"
                          : ""
                      }`}
                    >
                      <stack.icon size={20} strokeWidth={1.5} />
                    </div>
                    <span
                      className={`text-[8px] font-black uppercase tracking-widest opacity-40 transition-opacity ${
                        !isMobile ? "group-hover/stack:opacity-100" : ""
                      }`}
                    >
                      {stack.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* --- CARD 5: CONTACT SHORTCUT (Bottom Right - 4 cols, 1 row) --- */}
            <div
              className={`
                col-span-1 md:col-span-1 lg:col-span-4 row-span-1
                bg-brand-red text-white
                rounded-[48px] p-10 
                relative overflow-hidden group 
                flex flex-col justify-center items-center text-center
                shadow-xl shadow-red-900/20
                transition-all duration-500
                cursor-pointer
                ${
                  !isMobile
                    ? "opacity-0 animate-fade-in-up delay-400 md:hover:bg-red-700"
                    : "opacity-100"
                }
              `}
              onClick={() => {
                window.location.href = "#contact";
              }}
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div
                  className={`w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl transition-transform duration-500 ${
                    !isMobile ? "group-hover:scale-110" : ""
                  }`}
                >
                  <Zap size={36} fill="white" className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter leading-none mb-1">
                    {t("cards.contact.title")}
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-80">
                    {t("cards.contact.subtitle")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPLIT SECTIONS (CODE vs PREVIEW) */}
      <div className="relative z-20 w-full py-10 md:py-20 space-y-40 container mx-auto px-4 md:px-8 max-w-[1700px]">
        {SECTIONS_DATA.map((item, index) => {
          const isVisible = visibleSections[item.id];
          const isMinimized = minimizedWindows[item.id];
          const isLoading = loadingWindows[item.id];

          return (
            <div
              key={item.id}
              data-section-id={item.id}
              className="code-section-trigger grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center"
            >
              <div
                className={`
                w-full transition-all duration-1000
                ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : `opacity-0 ${!isMobile ? "translate-y-20" : ""}`
                }
              `}
              >
                <div className="relative group/code-window">
                  <div
                    className={`
                        w-full rounded-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.4)] bg-[#1e1e1e] border border-gray-800
                        transition-all duration-700 
                        ${
                          isMinimized
                            ? "h-auto border-red-500/30 grayscale opacity-50"
                            : `min-h-[400px] ${
                                !isMobile ? "hover:border-gray-600" : ""
                              }`
                        }
                    `}
                  >
                    <div className="bg-[#2d2d2d] px-6 h-12 flex items-center justify-between border-b border-black/50 select-none">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleMinimize(item.id)}
                          className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:bg-[#d44a43] transition-colors flex items-center justify-center group/btn cursor-pointer"
                        >
                          <X
                            size={8}
                            className="opacity-0 group-hover/btn:opacity-100 text-black font-bold"
                          />
                        </button>
                        <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
                      </div>

                      <div className="text-[10px] md:text-xs text-gray-500 font-mono flex items-center gap-2">
                        <Terminal size={14} className="text-emerald-400" />{" "}
                        {item.fileName}
                      </div>
                      <div className="w-12"></div>
                    </div>

                    {isMinimized ? (
                      <div
                        className={`p-12 flex flex-col items-center justify-center bg-[#1e1e1e] transition-all ${
                          !isMobile ? "animate-enter-zoom" : ""
                        }`}
                      >
                        <p className="text-red-500 font-mono text-sm mb-6 uppercase tracking-widest">
                          <span className={!isMobile ? "animate-pulse" : ""}>
                            ●
                          </span>{" "}
                          {t("code_windows.system_override")}
                        </p>
                        <button
                          onClick={() => handleRestore(item.id)}
                          disabled={isLoading}
                          className="
                                        flex items-center gap-4 px-10 py-4 rounded-2xl
                                        bg-[#2d2d2d] border border-gray-700 hover:border-brand-red hover:bg-[#3d3d3d]
                                        text-gray-300 font-mono text-xs uppercase tracking-widest
                                        transition-all active:scale-95 shadow-xl
                                    "
                        >
                          {isLoading ? (
                            <RefreshCw
                              size={16}
                              className="animate-spin text-brand-red"
                            />
                          ) : (
                            <Power size={16} className="text-brand-red" />
                          )}
                          {isLoading
                            ? t("code_windows.recalibrating")
                            : t("code_windows.reboot")}
                        </button>
                      </div>
                    ) : (
                      <div className="p-8 md:p-12 overflow-x-auto relative">
                        <TypewriterCode
                          code={item.codeContent}
                          isVisible={isVisible}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`
                flex flex-col gap-8 
                ${
                  index % 2 === 1
                    ? "lg:order-1 lg:items-end"
                    : "lg:order-2 lg:items-start"
                }
                ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${
                        !isMobile
                          ? index % 2 === 1
                            ? "-translate-x-20"
                            : "translate-x-20"
                          : ""
                      }`
                }
                transition-all duration-1000 delay-300
              `}
              >
                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-lg">
                  <Layers
                    size={18}
                    className={`text-brand-red ${
                      !isMobile ? "animate-pulse" : ""
                    }`}
                  />
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-black dark:text-white">
                    {t(`sections.${item.titleKey}`)} Module
                  </span>
                </div>

                {item.id === "identity" && (
                  <div
                    className={`w-full max-w-lg bg-white dark:bg-[#0A0A0A] rounded-[48px] p-1.5 border border-black/5 dark:border-white/10 shadow-2xl group transition-all duration-700 ${
                      !isMobile ? "md:hover:scale-[1.02]" : ""
                    }`}
                  >
                    <div className="bg-gray-50/50 dark:bg-[#111] rounded-[44px] p-10 md:p-14 relative overflow-hidden h-full">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                      <div className="flex justify-between items-start mb-12">
                        <div
                          className={`w-20 h-20 rounded-[2.5rem] bg-black dark:bg-white flex items-center justify-center text-white dark:text-black shadow-2xl relative overflow-hidden transition-transform duration-700 ${
                            !isMobile ? "group-hover:rotate-12" : ""
                          }`}
                        >
                          <Fingerprint size={40} strokeWidth={1} />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-red/20 to-transparent"></div>
                        </div>
                        <div className="text-right">
                          <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-[0.3em] mb-2">
                            {t("modules.identity.protocol_code")}
                          </h4>
                          <p className="text-2xl font-black font-mono text-black dark:text-white tracking-tighter">
                            GDC_ELITE_v4
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6 mb-12 relative z-10">
                        <h2 className="text-5xl font-black text-black dark:text-white leading-[0.85] tracking-tighter uppercase">
                          {t("modules.identity.title.line1")} <br />
                          {t("modules.identity.title.line2")} <br />
                          <span className="text-brand-red">
                            {t("modules.identity.title.highlight")}
                          </span>
                        </h2>
                        <div className="flex flex-wrap gap-2.5">
                          <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-500 text-[9px] font-black uppercase tracking-widest rounded-lg border border-emerald-500/20 shadow-sm">
                            {t("modules.identity.tags.verified")}
                          </span>
                          <span className="px-4 py-1.5 bg-brand-red/10 text-brand-red text-[9px] font-black uppercase tracking-widest rounded-lg border border-brand-red/20 shadow-sm">
                            {t("modules.identity.tags.partner")}
                          </span>
                        </div>
                      </div>

                      <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-10 font-bold italic">
                        {t("modules.identity.quote")}
                      </p>

                      <div className="pt-10 border-t border-black/5 dark:border-white/10 flex justify-between items-center opacity-60">
                        <div className="flex items-center gap-3">
                          <Globe size={24} className="text-brand-red" />
                          <span className="font-black text-black dark:text-white text-xs uppercase tracking-widest">
                            {t("modules.identity.location")}
                          </span>
                        </div>
                        <Activity
                          size={24}
                          className={`text-blue-500 ${
                            !isMobile ? "animate-pulse" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {item.id === "vision" && (
                  <div
                    className={`w-full max-w-lg bg-white/40 dark:bg-[#0A0A0A]/40 backdrop-blur-3xl rounded-[48px] p-10 md:p-14 border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden group transition-all duration-700 ${
                      !isMobile ? "md:hover:-translate-y-4" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-10">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-brand-red text-white flex items-center justify-center shadow-[0_10px_30px_rgba(255,0,0,0.3)] ${
                            !isMobile ? "animate-float" : ""
                          }`}
                        >
                          <Cpu size={28} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">
                            {t("modules.vision.innovation_core")}
                          </span>
                          <span className="text-lg font-black text-black dark:text-white uppercase tracking-tighter">
                            {t("modules.vision.system_intelligence")}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white mb-10 leading-tight uppercase tracking-tighter">
                        {t.rich("modules.vision.title", {
                          br: () => <br className="hidden md:block" />,
                        })}
                      </h3>

                      <div className="space-y-8 mb-12">
                        {[
                          {
                            label: t("modules.vision.stats.ai"),
                            val: 88,
                            color: "bg-brand-red",
                          },
                          {
                            label: t("modules.vision.stats.global_impact"),
                            val: 95,
                            color: "bg-blue-600",
                          },
                        ].map((bar, bidx) => (
                          <div key={bidx} className="space-y-3">
                            <div className="flex justify-between items-end px-1">
                              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">
                                {bar.label}
                              </span>
                              <span className="text-xs font-black text-black dark:text-white">
                                {bar.val}%
                              </span>
                            </div>
                            <div className="h-2 w-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden p-[1px]">
                              <div
                                className={`h-full ${bar.color} rounded-full transition-all duration-[2000ms] ease-out shadow-[0_0_15px_rgba(0,0,0,0.1)]`}
                                style={{
                                  width: isVisible ? `${bar.val}%` : "0%",
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-6 rounded-3xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-between group/vision-btn cursor-pointer overflow-hidden relative transition-all active:scale-95 shadow-2xl">
                        <div className="relative z-10 flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center">
                            <Zap size={18} fill="currentColor" />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                            {t("modules.vision.cta")}
                          </span>
                        </div>
                        <ArrowRight
                          size={20}
                          className={`relative z-10 transition-transform duration-500 ${
                            !isMobile
                              ? "group-hover/vision-btn:translate-x-3"
                              : ""
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {item.id === "mission" && (
                  <div
                    className={`w-full max-w-lg bg-[#0A0A0A] text-white rounded-[48px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative group overflow-hidden transition-all duration-700 ${
                      !isMobile ? "md:hover:scale-[1.03]" : ""
                    }`}
                  >
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-red via-orange-500 to-yellow-500 shadow-[0_5px_20px_rgba(255,0,0,0.4)]"></div>

                    <div className="p-10 md:p-14 relative z-10">
                      <div className="flex justify-between items-center mb-12">
                        <h3 className="text-3xl font-black uppercase tracking-tighter italic">
                          {t("modules.mission.title")} <br />{" "}
                          <span className="text-brand-red">
                            {t("modules.mission.highlight")}
                          </span>
                        </h3>
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_15px_#ef4444]"></div>
                          <div
                            className={`w-3 h-3 rounded-full bg-yellow-500 ${
                              !isMobile ? "animate-pulse" : ""
                            }`}
                          ></div>
                          <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_#22c55e]"></div>
                        </div>
                      </div>

                      <p className="text-lg font-bold text-gray-400 mb-10 leading-relaxed text-justify italic">
                        {t("modules.mission.quote")}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-10">
                        {[
                          t("modules.mission.values.agility"),
                          t("modules.mission.values.security"),
                          t("modules.mission.values.audit"),
                          t("modules.mission.values.roi"),
                        ].map((val, i) => (
                          <div
                            key={i}
                            className={`p-5 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-xl flex flex-col items-center gap-3 transition-all duration-500 cursor-default shadow-lg ${
                              !isMobile
                                ? "md:hover:bg-brand-red md:hover:scale-105 group/box"
                                : ""
                            }`}
                          >
                            <CheckCircle2
                              size={24}
                              className={`text-brand-red transition-colors ${
                                !isMobile ? "group-hover/box:text-white" : ""
                              }`}
                            />
                            <span className="text-[9px] font-black uppercase tracking-widest text-center">
                              {val}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-5 p-6 rounded-3xl bg-white/5 border border-white/5 shadow-inner">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red ${
                            !isMobile ? "animate-pulse" : ""
                          }`}
                        >
                          <Server size={28} />
                        </div>
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                            {t("modules.mission.status.label")}
                          </span>
                          <span className="text-xl font-black block tracking-tighter">
                            {t("modules.mission.status.value")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Passing isMobile to children for centralized optimization */}
      <AgencyMethodology isMobile={isMobile} />
      <AgencyEngagement isMobile={isMobile} />
      <AgencyMilestones isMobile={isMobile} />
      <AgencyServices isMobile={isMobile} />
      <FAQSection isMobile={isMobile} />
      <AgencyProjectForm isMobile={isMobile} />
      <AgencyFinalCTA isMobile={isMobile} />
    </div>
  );
};
