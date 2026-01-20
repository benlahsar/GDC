import React, { useRef, useState, useEffect } from "react";
import {
  Heart,
  Key,
  ShieldCheck,
  Database,
  Palette,
  Activity,
  Tag,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const EcommerceAdvantages: React.FC = () => {
  const t = useTranslations("EcommerceAdvantages");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const ADVANTAGES = [
    {
      title: (t.raw("items") as any[])[0].title,
      icon: Heart,
      color: "text-red-500",
      border: "group-hover:border-red-500/50",
    },
    {
      title: (t.raw("items") as any[])[1].title,
      icon: Key,
      color: "text-amber-500",
      border: "group-hover:border-amber-500/50",
    },
    {
      title: (t.raw("items") as any[])[2].title,
      icon: ShieldCheck,
      color: "text-emerald-500",
      border: "group-hover:border-emerald-500/50",
    },
    {
      title: (t.raw("items") as any[])[3].title,
      icon: Database,
      color: "text-blue-500",
      border: "group-hover:border-blue-500/50",
    },
    {
      title: (t.raw("items") as any[])[4].title,
      icon: Palette,
      color: "text-purple-500",
      border: "group-hover:border-purple-500/50",
    },
    {
      title: (t.raw("items") as any[])[5].title,
      icon: Activity,
      color: "text-cyan-500",
      border: "group-hover:border-cyan-500/50",
    },
    {
      title: (t.raw("items") as any[])[6].title,
      icon: Tag,
      color: "text-pink-500",
      border: "group-hover:border-pink-500/50",
    },
    {
      title: (t.raw("items") as any[])[7].title,
      icon: TrendingUp,
      color: "text-orange-500",
      border: "group-hover:border-orange-500/50",
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#020202] text-black dark:text-white transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/[0.02] rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 md:mb-20 ${
            !isMobile ? "transition-all duration-1000" : ""
          } ${
            isVisible || isMobile
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
            <Sparkles size={14} className="text-brand-red animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
              {t("badge")}
            </span>
          </div>

          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black dark:text-white mb-6"
            dangerouslySetInnerHTML={{
              __html: t.raw("title").replace(/{br}/g, "<br/>"),
            }}
          />
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((item, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-[32px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 transition-all duration-500 ease-out flex flex-col items-center justify-center text-center gap-6 overflow-hidden ${
                !isMobile
                  ? "hover:border-black/10 dark:hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl"
                  : "shadow-lg"
              } ${
                isVisible || isMobile
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: !isMobile ? `${index * 50}ms` : "0ms" }}
            >
              {!isMobile && (
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              )}

              <div
                className={`relative w-20 h-20 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center transition-all duration-500 ${
                  !isMobile
                    ? "group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-[#111] " +
                      item.border
                    : ""
                }`}
              >
                <item.icon
                  size={32}
                  className={`${
                    item.color
                  } transition-all duration-500 drop-shadow-sm ${
                    !isMobile ? "group-hover:scale-110" : ""
                  }`}
                  strokeWidth={1.5}
                />
                {!isMobile && (
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-current ${item.color}`}
                  ></div>
                )}
              </div>

              <h3 className="relative z-10 text-lg md:text-xl font-bold text-black dark:text-white leading-tight">
                {item.title}
              </h3>

              {!isMobile && (
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-t-full bg-current opacity-0 group-hover:opacity-100 transition-all duration-500 ${item.color}`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
