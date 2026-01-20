"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  Search,
  PenTool,
  Check,
  Sparkles,
  Zap,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { useTranslations } from "next-intl";

/* --- FIREWORK UTILS --- */
interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
}
const COLORS = ["#10B981", "#34D399", "#6EE7B7", "#FFFFFF", "#FFD700"];

const getSteps = (t: any) => [
  {
    id: 1,
    icon: Search,
    title: t("steps.step1.title"),
    desc: t("steps.step1.desc"),
  },
  {
    id: 2,
    icon: PenTool,
    title: t("steps.step2.title"),
    desc: t("steps.step2.desc"),
  },
  {
    id: 3,
    icon: Check,
    title: t("steps.step3.title"),
    desc: t("steps.step3.desc"),
  },
];

export const ProcessRoadmap: React.FC = () => {
  const t = useTranslations("ProcessRoadmap");
  const STEPS = getSteps(t);
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [fireworksActive, setFireworksActive] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- SCROLL LOGIC ---
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollDist = containerRect.height - viewportHeight;
      const scrolled = -containerRect.top;

      let p = scrolled / scrollDist;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);

      if (p > 0.85 && !fireworksActive) {
        setFireworksActive(true);
      }
      if (p < 0.7 && fireworksActive) {
        setFireworksActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fireworksActive, isMobile]);

  // --- FIREWORKS ANIMATION ---
  useEffect(() => {
    if (fireworksActive && !isMobile) {
      const step3 = document.getElementById("step-card-3");
      if (step3) {
        const rect = step3.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;

        const newParticles: Particle[] = [];
        for (let i = 0; i < 40; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 8 + 3;
          newParticles.push({
            id: Math.random(),
            x: originX,
            y: originY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            size: Math.random() * 4 + 2,
            life: 1.0 + Math.random() * 0.5,
          });
        }
        setParticles((prev) => [...prev, ...newParticles]);
      }
    }
  }, [fireworksActive, isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const animate = () => {
      setParticles((prev) => {
        if (prev.length === 0) return [];
        return prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.15,
            life: p.life - 0.02,
          }))
          .filter((p) => p.life > 0);
      });
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isMobile]);

  const lineWidth = `${progress * 100}%`;

  return (
    <div className="relative bg-white dark:bg-[#020202] transition-colors duration-500">
      {/* === MOBILE LAYOUT (Vertical Stack) === */}
      <div className="md:hidden py-16 px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-black text-black dark:text-white tracking-tight mb-4 leading-tight"
            dangerouslySetInnerHTML={{
              __html: t
                .raw("mobile.title")
                .replace(/{br}/g, "<br/>")
                .replace(
                  /{span}/g,
                  `<span class="text-brand-red">${t(
                    "mobile.titleHighlight"
                  )}</span>`
                ),
            }}
          />
          <p className="text-sm text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
            {t("mobile.description")}
          </p>
        </div>

        <div className="flex flex-col gap-8 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-black/5 dark:bg-white/5 -translate-x-1/2"></div>

          {STEPS.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center bg-gray-50 dark:bg-[#080808] p-6 rounded-2xl border border-black/5 dark:border-white/5 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 flex items-center justify-center mb-4 text-brand-red shadow-sm">
                <step.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {step.desc}
              </p>
              {index < STEPS.length - 1 && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-black border border-black/5 dark:border-white/10 flex items-center justify-center text-gray-300">
                  <ArrowDown size={14} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* === DESKTOP LAYOUT === */}
      <section
        ref={containerRef}
        className="hidden md:block relative h-[175vh]"
      >
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center items-center bg-white dark:bg-[#020202] transition-colors duration-500"
        >
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

          <div
            className="absolute top-8 md:top-12 left-0 right-0 text-center z-20 px-4 transition-opacity duration-500 flex flex-col items-center"
            style={{ opacity: Math.max(0, 1 - progress * 3) }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black dark:text-white tracking-tight mb-4 leading-tight">
              {t.raw("desktop.title").replace(/{span}/g, "")}{" "}
              <span className="text-brand-red">
                {t("desktop.titleHighlight")}
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-brand-red rounded-full mb-8"></div>
            <p
              className="max-w-4xl mx-auto text-base md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: t
                  .raw("desktop.description")
                  .replace(/{br}/g, "<br className='hidden md:block'/>")
                  .replace(
                    /<highlight>/g,
                    "<span class='text-brand-red font-bold'>"
                  )
                  .replace(/<\/highlight>/g, "</span>"),
              }}
            />
          </div>

          <div className="relative w-full max-w-[1200px] px-4 md:px-8 flex items-center justify-center z-10 mt-20 md:mt-0">
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex items-center pointer-events-none z-0 px-10 md:px-20">
              <div className="w-full h-[2px] bg-black/10 dark:bg-white/10"></div>
              <div
                className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 h-[2px] transition-all duration-100 ease-linear"
                style={{
                  width: `calc(${lineWidth} - 40px)`,
                  background:
                    "linear-gradient(90deg, #FF0000 0%, #FF0000 66%, #10B981 100%)",
                  boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)",
                }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white border border-black/10 dark:border-transparent rotate-45 shadow-[0_0_15px_rgba(255, 0, 0, 0.5)]"></div>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 relative z-10">
              {STEPS.map((step, index) => {
                let isActive = false;
                if (index === 0 && progress > 0.05) isActive = true;
                if (index === 1 && progress > 0.4) isActive = true;
                if (index === 2 && progress > 0.75) isActive = true;
                const isGreen = index === 2;
                const activeGlowClass = isGreen
                  ? "border-emerald-500/50 shadow-[0_0_50px_-10px_rgba(16,185,129,0.3)] bg-white dark:bg-black"
                  : "border-red-600/50 shadow-[0_0_50px_-10px_rgba(255,0,0,0.3)] bg-white dark:bg-black";
                const inactiveClass =
                  "border-black/5 dark:border-white/5 bg-gray-50 dark:bg-[#050505] opacity-50 grayscale";

                return (
                  <div
                    key={index}
                    id={`step-card-${step.id}`}
                    className={`relative group p-8 md:p-10 rounded-[24px] border flex flex-col items-center text-center transition-all duration-700 ${
                      isActive
                        ? `${activeGlowClass} scale-100 translate-y-0`
                        : `${inactiveClass} scale-95 translate-y-8`
                    }`}
                  >
                    <div
                      className={`w-20 h-20 rounded-full border-2 flex items-center justify-center mb-6 relative transition-all duration-500 ${
                        isActive
                          ? isGreen
                            ? "border-emerald-500 text-emerald-500 bg-emerald-500/10"
                            : "border-brand-red text-brand-red bg-brand-red/10"
                          : "border-black/10 dark:border-white/10 text-gray-400 dark:text-gray-500 bg-transparent"
                      }`}
                    >
                      <step.icon size={32} strokeWidth={1.5} />
                      {isActive && (
                        <div
                          className={`absolute inset-0 rounded-full animate-ping opacity-20 ${
                            isGreen ? "bg-emerald-500" : "bg-brand-red"
                          }`}
                        ></div>
                      )}
                    </div>
                    <h3
                      className={`text-xl font-bold mb-4 uppercase tracking-wide ${
                        isActive
                          ? "text-black dark:text-white"
                          : "text-gray-400 dark:text-gray-500"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <div
                      className={`w-12 h-[1px] mb-6 transition-colors duration-500 ${
                        isActive
                          ? isGreen
                            ? "bg-emerald-500"
                            : "bg-brand-red"
                          : "bg-black/10 dark:bg-white/10"
                      }`}
                    ></div>
                    <p
                      className={`text-sm leading-relaxed font-medium ${
                        isActive
                          ? "text-gray-600 dark:text-gray-400"
                          : "text-gray-400 dark:text-gray-600"
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
            {particles.map((p) => (
              <div
                key={p.id}
                style={{
                  position: "absolute",
                  left: p.x,
                  top: p.y,
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  borderRadius: "50%",
                  opacity: p.life,
                  transform: `translate(-50%, -50%) scale(${p.life})`,
                  boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24 pt-0 px-4 bg-white dark:bg-[#020202] transition-colors duration-500 -mt-0 md:-mt-52 z-20">
        <div className="max-w-5xl mx-auto rounded-[50px] p-12 md:p-16 text-center overflow-hidden border border-black/5 dark:border-white/10 bg-gray-50 dark:bg-gradient-to-br dark:from-[#111] dark:via-[#050505] dark:to-black relative group shadow-xl dark:shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-block mb-6 p-3 rounded-full bg-brand-red/10 border border-brand-red/20">
              <Sparkles className="text-brand-red w-6 h-6 animate-pulse" />
            </div>
            <h2
              className="text-3xl md:text-5xl font-black mb-8 leading-tight text-black dark:text-white"
              dangerouslySetInnerHTML={{
                __html: t
                  .raw("cta.title")
                  .replace(/{br}/g, "<br/>")
                  .replace(
                    /{span}/g,
                    `<span class="text-brand-red">${t(
                      "cta.titleHighlight"
                    )}</span>`
                  ),
              }}
            />
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 font-light">
              {t("cta.description")}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-4 px-10 py-5 bg-brand-red text-white rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 hover:bg-red-600 hover:shadow-[0_0_40px_rgba(255,0,0,0.4)] transition-all duration-300 group"
            >
              {t("cta.button")}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
