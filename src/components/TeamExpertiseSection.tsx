"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Trophy,
  Target,
  Star,
  MoveRight,
} from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { useNavigation } from "../context/NavigationContext";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export const TeamExpertiseSection: React.FC = () => {
  const tTeam = useTranslations("team");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  //   const { navigate } = useNavigation();
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-24 w-full bg-white dark:bg-black overflow-hidden"
    >
      {/* Blended Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-red/[0.03] rounded-full blur-[120px] -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[120px] translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Grid adapted for tablets (md) with 2 cols, desktop (lg) 12 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-fr">
          {/* =========================================================
                    CARD 1: TITLE (Top Left)
                    Dark Mode: Dark / Light Mode: White
                   ========================================================= */}
          <div
            className={`
                    md:col-span-2 lg:col-span-7 relative group overflow-hidden
                    rounded-[40px] p-10 md:p-14
                    flex flex-col justify-between min-h-[420px]
                    transition-all duration-700 ease-out
                    ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }
                    bg-white dark:bg-[#0A0A0A]
                    border border-black/5 dark:border-white/10
                    shadow-xl hover:shadow-2xl
                `}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-12 opacity-10 dark:opacity-20 transform group-hover:rotate-12 transition-transform duration-700">
              <Star
                size={180}
                strokeWidth={1}
                className="text-black dark:text-white"
              />
            </div>

            {/* Badge */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 dark:text-gray-300">
                  Notre ADN
                </span>
              </div>
            </div>

            {/* Title */}
            <h2 className="relative z-10 text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-black dark:text-white mt-auto">
              Équipe de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black dark:from-gray-400 dark:to-white">
                Professionnels
              </span>{" "}
              <br />
              Digitaux <br />
              Dévoués
            </h2>
          </div>

          {/* =========================================================
                    CARD 2: EXPERTISE (Top Right)
                    Always Red Gradient for Brand Identity
                   ========================================================= */}
          <div
            className={`
                    md:col-span-1 lg:col-span-5 relative group overflow-hidden
                    rounded-[40px] p-10 md:p-12
                    flex flex-col justify-between min-h-[420px]
                    transition-all duration-700 ease-out delay-100
                    ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }
                    bg-gradient-to-br from-[#2a0505] via-[#1a0000] to-black
                    border border-red-900/30
                    shadow-2xl shadow-red-900/20
                `}
          >
            <div className="flex justify-between items-start relative z-10">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-red-200/70 border-b border-red-500/30 pb-2">
                Expertise
              </span>
              <ArrowUpRight className="text-brand-red w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>

            <div className="relative z-10 mt-auto">
              <div className="flex items-baseline gap-2 mb-2">
                <AnimatedCounter
                  value={92}
                  suffix="%"
                  className="text-7xl md:text-8xl font-black text-white tracking-tighter"
                />
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full mb-6 overflow-hidden">
                <div className="h-full bg-brand-red w-[92%] shadow-[0_0_20px_rgba(255,0,0,0.5)]"></div>
              </div>
              <p className="text-gray-400 text-base font-medium leading-relaxed max-w-xs">
                Maîtrise technique et stratégique avancée pour des résultats
                supérieurs.
              </p>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-red/10 to-transparent pointer-events-none"></div>
          </div>

          {/* =========================================================
                    CARD 3: DESCRIPTION (Bottom Left) - THE "POP" CARD
                    Dark Mode: White Background
                    Light Mode: Black Background
                   ========================================================= */}
          <div
            className={`
                    md:col-span-1 lg:col-span-7 relative group overflow-hidden
                    rounded-[40px] p-10 md:p-14
                    flex flex-col justify-center gap-8 min-h-[380px]
                    transition-all duration-700 ease-out delay-200
                    ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }
                    bg-black dark:bg-white
                    text-white dark:text-black
                    shadow-2xl
                `}
          >
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                <span className="text-brand-red">Group Digital Concept</span>{" "}
                transforme vos ambitions en réalité digitale.
              </h3>
              <p className="text-gray-400 dark:text-gray-600 text-xl leading-relaxed mb-8 max-w-2xl">
                Nous accompagnons nos clients dans leur transformation numérique
                avec des solutions sur mesure et innovantes. Notre approche
                combine créativité, technologie et stratégie pour des résultats
                concrets.
              </p>

              <button
                onClick={() => router.push("/contact-page")}
                className="inline-flex items-center gap-4 group/btn"
              >
                <div className="w-14 h-14 rounded-full bg-white dark:bg-black text-black dark:text-white flex items-center justify-center transition-transform duration-300 group-hover/btn:scale-110">
                  <ArrowRight
                    size={24}
                    className="-rotate-45 group-hover/btn:rotate-0 transition-transform duration-300"
                  />
                </div>
                <span className="font-black uppercase tracking-widest text-sm">
                  Contactez-nous
                </span>
              </button>
            </div>

            {/* Subtle texture for quality feel */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
          </div>

          {/* =========================================================
                    CARD 4: SUCCESS (Bottom Right)
                    Dark Mode: Dark Grey
                    Light Mode: Light Grey
                   ========================================================= */}
          <div
            className={`
                    md:col-span-2 lg:col-span-5 relative group overflow-hidden
                    rounded-[40px] p-10 md:p-12
                    flex flex-col justify-between min-h-[380px]
                    transition-all duration-700 ease-out delay-300
                    ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }
                    bg-[#F5F5F7] dark:bg-[#121212]
                    border border-black/5 dark:border-white/5
                `}
          >
            <div className="flex justify-between items-start relative z-10">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 border-b border-gray-500/20 pb-2">
                Réussite
              </span>
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></div>
            </div>

            <div className="relative z-10 mt-auto">
              <AnimatedCounter
                value={89}
                suffix="%"
                className="text-7xl md:text-8xl font-black text-black dark:text-white tracking-tighter block mb-2"
              />
              <div className="h-1 w-full bg-gray-300 dark:bg-white/10 rounded-full mb-6 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 w-[89%] shadow-[0_0_15px_rgba(16,185,129,0.4)]"></div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-base font-medium leading-relaxed">
                Projets livrés avec un impact mesurable et une satisfaction
                client maximale.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <span className="text-xs font-bold uppercase">{tTeam("tag")}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
            {tTeam("title")}
          </h2>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">
                {tTeam("expertise.tag")}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {tTeam("expertise.desc")}
              </p>
            </div>

            <div>
              <h3
                className="text-3xl md:text-4xl font-bold leading-tight mb-4"
                dangerouslySetInnerHTML={{ __html: tTeam("vision.title") }}
              />
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                {tTeam("vision.desc")}
              </p>
              <button className="px-6 py-3 rounded-full bg-brand-red text-white font-semibold hover:bg-brand-red/90 transition-all">
                {tTeam("vision.cta")}
              </button>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">
                {tTeam("success.tag")}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {tTeam("success.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
