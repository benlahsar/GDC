"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  MoveRight,
  Layers,
  Box,
  Zap,
  MousePointerClick,
  BarChart3,
  Palette,
  Layout,
} from "lucide-react";
import { useNavigation } from "../context/NavigationContext";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";


export const SolutionsSection: React.FC = () => {
  const tSolutions = useTranslations("solutionsSection");
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  const SOLUTIONS_DATA = [
    {
      id: "01",
      title: tSolutions("items.marketing.title"),
      icon: BarChart3,
      color: "text-orange-500",
      gradient: "from-orange-500/20 to-red-500/20",
      content: tSolutions("items.marketing.desc"),
    },
    {
      id: "02",
      title: tSolutions("items.website.title"),
      icon: Layout,
      color: "text-blue-500",
      gradient: "from-blue-500/20 to-indigo-500/20",
      content: tSolutions("items.website.desc"),
    },
    {
      id: "03",
      title: tSolutions("items.software.title"),
      icon: Box,
      color: "text-emerald-500",
      gradient: "from-emerald-500/20 to-teal-500/20",
      content: tSolutions("items.software.desc"),
    },
    {
      id: "04",
      title: tSolutions("items.content.title"),
      icon: Palette,
      color: "text-pink-500",
      gradient: "from-pink-500/20 to-rose-500/20",
      content: tSolutions("items.content.desc"),
    },
    {
      id: "05",
      title: tSolutions("items.consulting.title"),
      icon: Zap,
      color: "text-amber-500",
      gradient: "from-amber-500/20 to-orange-500/20",
      content: tSolutions("items.consulting.desc"),
    },
    {
      id: "06",
      title: tSolutions("items.ads.title"),
      icon: MousePointerClick,
      color: "text-violet-500",
      gradient: "from-violet-500/20 to-purple-500/20",
      content: tSolutions("items.ads.desc"),
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setOpacity(0);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isMobile || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  return (
    <section
      id="solutions"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOpacity(0)}
      className={`relative w-full py-16 md:py-32 overflow-hidden bg-white dark:bg-black transition-colors duration-500`}
    >
      {/* Spotlight Effect - PC Only */}
      {!isMobile && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-500 z-0"
          style={{
            opacity,
            background: `
                radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 50, 50, 0.08), transparent 40%),
                radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.1), transparent 40%)
            `,
          }}
        />
      )}

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4 md:mb-6 border border-black/5 dark:border-white/5 backdrop-blur-md">
            <Layers size={14} className="text-brand-red" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200">
              {tSolutions("tag")}
            </span>
          </div>

          <h2
            className="text-3xl md:text-8xl font-black tracking-tighter text-black dark:text-white mb-4 md:mb-6 uppercase leading-tight"
            dangerouslySetInnerHTML={{ __html: tSolutions.raw("title").replace("<highlight>", '<br /><span class="italic text-brand-red">').replace("</highlight>", '</span>') }}
          />
          <p className="max-w-xl mx-auto text-base md:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
            {tSolutions("subtitle")}
          </p>
        </div>

        {/* --- DYNAMIC LAYOUT: Sticky for PC, Simple List for Mobile --- */}
        <div
          className={`relative flex flex-col ${isMobile ? "gap-6" : "gap-16 pb-32"
            }`}
        >
          {SOLUTIONS_DATA.map((item, index) => (
            <div
              key={index}
              className={isMobile ? "w-full" : "sticky"}
              style={
                isMobile
                  ? {}
                  : { top: `calc(120px + ${index * 20}px)`, zIndex: index + 1 }
              }
            >
              <div
                className={`group relative w-full ${!isMobile ? "max-w-5xl mx-auto" : ""
                  } rounded-[24px] md:rounded-[60px] p-[1px] transition-transform duration-500`}
              >
                {/* Gradient glow - PC Only */}
                {!isMobile && (
                  <div
                    className={`absolute inset-0 rounded-[60px] bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700`}
                  ></div>
                )}

                <div
                  className={`
                    relative h-full w-full
                    rounded-[24px] md:rounded-[58px]
                    bg-white/10 dark:bg-black/20
                    ${isMobile
                      ? "backdrop-blur-xl saturate-100"
                      : "backdrop-blur-[40px] saturate-150"
                    }
                    border border-white/40 dark:border-white/10
                    shadow-xl p-6 md:p-14
                    overflow-hidden
                    ${!isMobile
                      ? "transition-all duration-500 hover:shadow-2xl"
                      : ""
                    }
                   `}
                >
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                    {/* Icon/ID Section */}
                    <div className="lg:col-span-4 flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-center h-full relative">
                      {/* Giant Background Number - PC Only */}
                      {!isMobile && (
                        <span
                          className="absolute -top-10 -left-6 lg:-top-10 lg:-left-10 text-[120px] lg:text-[180px] font-black leading-none text-transparent stroke-footer opacity-10 dark:opacity-5 pointer-events-none select-none transition-all duration-500 group-hover:scale-110 group-hover:opacity-20"
                          style={{ WebkitTextStroke: "2px currentColor" }}
                        >
                          {item.id}
                        </span>
                      )}

                      <div
                        className={`
                                relative w-14 h-14 md:w-24 md:h-24 rounded-full
                                bg-white/30 dark:bg-white/5
                                border border-white/50 dark:border-white/10
                                backdrop-blur-md flex items-center justify-center
                                shadow-lg transition-transform duration-500
                                ${!isMobile
                            ? "group-hover:rotate-12 group-hover:scale-110"
                            : ""
                          }
                            `}
                      >
                        <item.icon
                          size={isMobile ? 24 : 40}
                          className={`text-black dark:text-white transition-colors duration-300 ${!isMobile
                            ? item.color.replace("text-", "group-hover:text-")
                            : ""
                            }`}
                        />
                      </div>

                      <span className="text-xl md:text-4xl font-black text-black/10 dark:text-white/20 font-mono">
                        {item.id}
                      </span>
                    </div>

                    {/* Text Content Section */}
                    <div className="lg:col-span-8 flex flex-col gap-4 md:gap-6">
                      <h3 className="text-xl md:text-5xl font-bold text-black dark:text-white leading-tight">
                        {item.title}
                      </h3>
                      <div className="w-12 h-1 bg-brand-red rounded-full opacity-60"></div>
                      <p className="text-sm md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                        {item.content}
                      </p>
                      <div className="pt-2 md:pt-6">
                        <button
                          onClick={() => router.push("/contact-page")}
                          className="inline-flex items-center gap-3 group/btn"
                        >
                          <div
                            className={`
                                    w-8 h-8 md:w-10 md:h-10 rounded-full
                                    bg-black/5 dark:bg-white/10
                                    flex items-center justify-center
                                    transition-colors duration-300
                                    ${!isMobile
                                ? "group-hover/btn:bg-brand-red"
                                : ""
                              }
                                  `}
                          >
                            <MoveRight
                              size={16}
                              className={`text-black dark:text-white transition-colors ${!isMobile ? "group-hover/btn:text-white" : ""
                                }`}
                            />
                          </div>
                          <span
                            className={`text-[10px] md:text-sm font-bold uppercase tracking-widest text-black/60 dark:text-white/60 ${!isMobile
                              ? "group-hover/btn:text-brand-red transition-colors"
                              : ""
                              }`}
                          >
                            {tSolutions("cta")}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};
