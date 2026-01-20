"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Target,
  ShieldCheck,
  Settings,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Globe,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const DomainIdentitySection: React.FC = () => {
  const t = useTranslations("DomainIdentitySection");
  const [activeId, setActiveId] = useState<string>("strategy");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const LIST_ITEMS = [
    {
      id: "strategy",
      title: t("items.0.title"),
      text: t("items.0.text"),
      icon: Target,
      color: "text-blue-500",
      bgColor: "bg-blue-500",
      overlayGradient: "from-blue-600/90 to-blue-900/90",
    },
    {
      id: "security",
      title: t("items.1.title"),
      text: t("items.1.text"),
      icon: ShieldCheck,
      color: "text-red-500",
      bgColor: "bg-red-500",
      overlayGradient: "from-red-600/90 to-red-900/90",
    },
    {
      id: "management",
      title: t("items.2.title"),
      text: t("items.2.text"),
      icon: Settings,
      color: "text-purple-500",
      bgColor: "bg-purple-500",
      overlayGradient: "from-purple-600/90 to-purple-900/90",
    },
    {
      id: "seo",
      title: t("items.3.title"),
      text: t("items.3.text"),
      icon: TrendingUp,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500",
      overlayGradient: "from-emerald-600/90 to-emerald-900/90",
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const activeItem =
    LIST_ITEMS.find((item) => item.id === activeId) || LIST_ITEMS[0];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-black text-black dark:text-white overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/10"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/[0.05] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/[0.05] rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div
            className={`space-y-10 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Header Block */}
            <div>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-black dark:text-white"
                dangerouslySetInnerHTML={{
                  __html: t.raw("header.title").replace(/{br}/g, "<br/>"),
                }}
              />
            </div>

            {/* Interactive List */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-white border-l-4 border-brand-red pl-4">
                {t("header.subtitle")}
              </h3>

              <div className="flex flex-col gap-4">
                {LIST_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => !isMobile && setActiveId(item.id)}
                    onClick={() => isMobile && setActiveId(item.id)}
                    className={`group flex items-start gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      activeId === item.id
                        ? `bg-white dark:bg-white/10 border-brand-red/50 shadow-lg ${
                            !isMobile
                              ? "dark:shadow-[0_0_30px_-10px_rgba(255,0,0,0.3)]"
                              : ""
                          }`
                        : `bg-transparent border-transparent ${
                            !isMobile
                              ? "hover:bg-black/5 dark:hover:bg-white/5"
                              : ""
                          }`
                    }`}
                  >
                    <div
                      className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        activeId === item.id
                          ? item.bgColor + " text-white scale-110"
                          : `bg-black/5 dark:bg-white/5 text-gray-500 ${
                              !isMobile
                                ? "group-hover:bg-black/10 dark:group-hover:bg-white/10 group-hover:text-black dark:group-hover:text-white"
                                : ""
                            }`
                      }`}
                    >
                      {activeId === item.id ? (
                        <item.icon size={20} />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-current" />
                      )}
                    </div>

                    <div>
                      <h4
                        className={`text-lg font-bold mb-1 transition-colors ${
                          activeId === item.id
                            ? "text-black dark:text-white"
                            : `text-gray-600 dark:text-gray-400 ${
                                !isMobile
                                  ? "group-hover:text-black dark:group-hover:text-white"
                                  : ""
                              }`
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`text-sm leading-relaxed transition-colors ${
                          activeId === item.id
                            ? "text-gray-600 dark:text-gray-300"
                            : `text-gray-500 dark:text-gray-600 ${
                                !isMobile
                                  ? "group-hover:text-gray-600 dark:group-hover:text-gray-500"
                                  : ""
                              }`
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>

                    <ChevronRight
                      className={`ml-auto self-center transition-all duration-300 ${
                        activeId === item.id
                          ? "opacity-100 translate-x-0 text-brand-red"
                          : "opacity-0 -translate-x-4"
                      }`}
                      size={20}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: INTERACTIVE PHONE MOCKUP --- */}
          <div
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Floating GDC Badge - Static on mobile */}
            <div
              className={`absolute top-1/2 -left-4 md:-left-12 z-20 transform -translate-y-1/2 ${
                !isMobile ? "animate-blob" : ""
              }`}
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-2xl shadow-2xl rotate-[-5deg] hover:rotate-0 transition-transform cursor-default">
                <span className="text-2xl font-black text-black dark:text-white">
                  GDC
                </span>
                <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* The Phone - Simplified on mobile */}
            <div
              className={`relative w-[300px] md:w-[350px] h-[600px] md:h-[700px] rounded-[40px] md:rounded-[50px] border-[8px] md:border-[12px] border-gray-900 dark:border-[#1a1a1a] bg-black shadow-2xl overflow-hidden ${
                !isMobile
                  ? "transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700"
                  : ""
              }`}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1a1a1a] rounded-b-xl z-30"></div>

              {/* --- SCREEN CONTENT --- */}
              <div className="relative w-full h-full bg-gray-900 overflow-hidden">
                {/* Base Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop"
                    alt="Teamwork Hands"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      activeId
                        ? "scale-110 brightness-[0.4] blur-[2px]"
                        : "scale-100 brightness-75"
                    }`}
                  />
                </div>

                {/* Interactive Overlay Content */}
                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center mt-8">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Globe size={16} className="text-white" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                        {t("mobile.badge")}
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    {LIST_ITEMS.map((item) => (
                      <div
                        key={item.id}
                        className={`absolute left-0 right-0 bottom-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                          activeId === item.id
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-8 scale-90 pointer-events-none"
                        }`}
                      >
                        <div
                          className={`p-6 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl bg-gradient-to-br ${item.overlayGradient}`}
                        >
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 border border-white/30">
                            <item.icon size={24} className="text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">
                            {item.title}
                          </h4>
                          <p className="text-xs text-white/80 leading-relaxed line-clamp-3">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <div className="flex gap-2 justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <div className="w-2 h-2 rounded-full bg-white/30"></div>
                      <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    </div>
                  </div>
                </div>

                {/* Scanline Effect - Simplified for mobile */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10px] w-full ${
                    !isMobile ? "animate-scan" : "top-1/2"
                  } pointer-events-none`}
                ></div>
              </div>
            </div>

            {!isMobile && (
              <>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-red/20 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none"></div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
            0% { top: -10%; }
            100% { top: 110%; }
        }
        .animate-scan {
            animation: scan 3s linear infinite;
        }
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};
