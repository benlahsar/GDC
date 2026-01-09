"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Zap,
  Target,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  Smartphone,
  Code2,
  BarChart3,
  Globe,
  Lock,
  Headset,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const AppSolutionSection: React.FC = () => {
  const t = useTranslations("AppSolutionSection");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#050505] transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/[0.04] rounded-full blur-[120px] -translate-y-1/2 ${
            !isMobile ? "animate-pulse" : ""
          }`}
        ></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[120px] translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        {/* --- MAIN TITLE AREA --- */}
        <div className="mb-20 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm">
            <Sparkles
              size={14}
              className={`text-brand-red ${!isMobile ? "animate-pulse" : ""}`}
            />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-800 dark:text-gray-200">
              {t("vision")}
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-black dark:text-white uppercase max-w-5xl"
            dangerouslySetInnerHTML={{
              __html: t.raw("title").replace(/{br}/g, "<br/>"),
            }}
          />
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: TEXT CONTENT */}
          <div className="lg:col-span-7 space-y-12">
            <div className="flex gap-6 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 shrink-0 shadow-[0_0_10px_red]"></div>
              <p
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.raw("intro") }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(t.raw("solutions") as any[]).map((point, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-[40px] bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-black/5 dark:border-white/10 transition-all duration-500 shadow-lg ${
                    !isMobile
                      ? "hover:border-brand-red/20 hover:-translate-y-1 hover:shadow-2xl"
                      : ""
                  }`}
                >
                  <h3
                    className={`text-xl font-black text-black dark:text-white mb-4 transition-colors ${
                      !isMobile ? "group-hover:text-brand-red" : ""
                    }`}
                  >
                    {point.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium mb-4">
                    {point.desc}
                  </p>

                  {point.subPoints && (
                    <ul className="space-y-3">
                      {(point.subPoints as string[]).map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full border border-brand-red shrink-0"></div>
                          <span className="text-xs font-bold text-gray-500 dark:text-gray-500 leading-snug">
                            {sub}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="p-8 md:p-10 rounded-[40px] bg-black text-white relative overflow-hidden group">
              {!isMobile && (
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red/10 rounded-full blur-[60px]"></div>
              )}
              <h3 className="text-xl font-black uppercase tracking-widest mb-8 border-l-4 border-brand-red pl-6">
                {t("engagements.title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(t.raw("engagements.items") as any[]).map((item, i) => {
                  const Icon = [Smartphone, BarChart3, Headset][i % 3];
                  return (
                    <div key={i} className="flex flex-col gap-4">
                      <span className="text-brand-red font-black text-lg">
                        →
                      </span>
                      <p className="text-sm font-bold text-gray-300 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="text-center sm:text-left">
                <p className="text-lg font-black text-black dark:text-white mb-2 uppercase tracking-tighter">
                  {t("freeAudit")}
                </p>
                <a
                  href="tel:+212666370306"
                  className="flex items-center justify-center sm:justify-start gap-3 text-2xl font-black text-black dark:text-white hover:text-brand-red transition-colors"
                >
                  <Phone size={24} className="text-brand-red" /> +212 666 37 03
                  06
                </a>
              </div>
              <a
                href="#contact"
                className={`px-10 py-5 bg-brand-red text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-2xl shadow-red-900/30 flex items-center gap-3 ${
                  !isMobile ? "hover:scale-105" : ""
                }`}
              >
                {t("cta")}{" "}
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

          {/* RIGHT: PHONE MOCKUP */}
          <div
            className={`lg:col-span-5 flex justify-center relative ${
              !isMobile ? "perspective-2000" : ""
            }`}
          >
            <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 -rotate-90 origin-center z-20">
              <span className="text-7xl md:text-9xl font-black text-black dark:text-white mix-blend-difference opacity-80 tracking-tighter">
                GDC
              </span>
            </div>

            <div
              className={`
                    relative w-full max-w-[420px] h-[650px] md:h-[800px]
                    rounded-[60px] border-[12px] border-gray-900 dark:border-[#1a1a1a]
                    bg-black shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] 
                    overflow-hidden transition-all duration-700
                    ${
                      !isMobile
                        ? "hover:scale-[1.02] hover:-rotate-1 group/phone"
                        : ""
                    }
                `}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-8 bg-gray-900 rounded-b-2xl z-30"></div>

              <div className="relative h-full w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                  alt="Collaboration Marrakech"
                  className={`w-full h-full object-cover ${
                    !isMobile
                      ? "transition-transform duration-[3s] group-hover/phone:scale-110"
                      : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {!isMobile && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10%] w-full animate-scan pointer-events-none"></div>
                )}
              </div>
            </div>

            {!isMobile && (
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-red/10 rounded-full blur-[80px] pointer-events-none"></div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: -20%; }
          100% { top: 120%; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .perspective-2000 {
          perspective: 2000px;
        }
      `}</style>
    </section>
  );
};
