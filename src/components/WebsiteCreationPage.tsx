"use client";
import React, { useEffect, useState } from "react";
import {
  Palette,
  CheckCircle,
  Crown,
  MessageCircle,
  Lock,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Monitor,
  ShoppingBag,
  Building2,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { ExcellenceDivider } from "./ExcellenceDivider";
import { ExpertiseSection } from "./ExpertiseSection";
import { ProcessRoadmap } from "./ProcessRoadmap";
import { AtoutsSection } from "./AtoutsSection";
import { TechStackDivider } from "./TechStackDivider";
import { PhilosophySection } from "./PhilosophySection";
import { PerformanceSection } from "./PerformanceSection";
import { EngagementSection } from "./EngagementSection";
import { RegionalExpertiseSection } from "./RegionalExpertiseSection";
import { ProjectsSection } from "./ProjectsSection";
import { CityExpertiseSection } from "./CityExpertiseSection";
import { WebsiteCreationTestimonials } from "./WebsiteCreationTestimonials";
import { WebsiteCreationStats } from "./WebsiteCreationStats";
import { WebsiteCreationFAQ } from "./WebsiteCreationFAQ";
import { WebsiteCreationForm } from "./WebsiteCreationForm";

const getSolutions = (t: any) => [
  {
    title: t("solutions.items.vitrine.title"),
    desc: t("solutions.items.vitrine.desc"),
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2669&auto=format&fit=crop",
  },
  {
    title: t("solutions.items.ecommerce.title"),
    desc: t("solutions.items.ecommerce.desc"),
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop",
  },
  {
    title: t("solutions.items.institutional.title"),
    desc: t("solutions.items.institutional.desc"),
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: t("solutions.items.apps.title"),
    desc: t("solutions.items.apps.desc"),
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
];

export const WebsiteCreationPage: React.FC = () => {
  const t = useTranslations("WebsiteCreationPage");
  const [isMobile, setIsMobile] = useState(false);
  const SOLUTIONS = getSolutions(t);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#F0F0F2] dark:bg-[#000000] text-black dark:text-white pt-48 md:pt-56 lg:pt-64 pb-0 px-0 md:px-0 lg:px-0 selection:bg-brand-red selection:text-white font-sans transition-colors duration-500 overflow-x-clip">
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className={`absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-red/[0.04] rounded-full blur-[80px] md:blur-[120px] ${
            !isMobile ? "animate-blob" : ""
          }`}
        ></div>
        <div
          className={`absolute bottom-0 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/[0.03] rounded-full blur-[100px] md:blur-[150px] ${
            !isMobile ? "animate-blob animation-delay-2000" : ""
          }`}
        ></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10 px-4 md:px-8 lg:px-12 pb-12 md:pb-24">
        {/* --- HERO BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)] mb-16 md:mb-32">
          {/* 1. HERO IMAGE CARD */}
          <div
            className={`col-span-1 md:col-span-5 lg:col-span-4 md:row-span-2 relative group rounded-[32px] md:rounded-[40px] overflow-hidden bg-white dark:bg-[#0A0A0A]/50 backdrop-blur-xl border border-black/5 dark:border-white/10 min-h-[300px] md:min-h-full ${
              !isMobile ? "opacity-0 animate-enter-left" : "opacity-100"
            } hover:border-black/10 dark:hover:border-white/20 transition-all duration-500`}
            style={!isMobile ? { animationDelay: "100ms" } : {}}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop"
              alt="Création Site Web Marrakech"
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out ${
                !isMobile ? "group-hover:scale-110" : ""
              } opacity-90 dark:opacity-70 group-hover:opacity-100 dark:group-hover:opacity-90`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-0"></div>
            <div
              className={`absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20 ${
                !isMobile ? "translate-y-2 group-hover:translate-y-0" : ""
              } transition-transform duration-500`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 border border-brand-red/30 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  {t("hero.premium")}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white leading-none mb-1">
                {t("hero.expert")}
              </h3>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 leading-none">
                {t("hero.digital")}
              </h3>
            </div>
          </div>

          {/* 2. HEADLINE & INTRO */}
          <div
            className={`col-span-1 md:col-span-7 lg:col-span-8 p-6 md:p-12 rounded-[32px] md:rounded-[40px] bg-white dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-black/5 dark:border-white/10 relative overflow-hidden group ${
              !isMobile ? "opacity-0 animate-enter-right" : "opacity-100"
            } shadow-xl dark:shadow-none`}
            style={!isMobile ? { animationDelay: "200ms" } : {}}
          >
            {!isMobile && (
              <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-red/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/10 transition-colors duration-700"></div>
            )}
            <h1 className="relative z-10 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[1] mb-6 md:mb-8 text-black dark:text-white">
              {t("hero.title.line1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600 relative">
                {t("hero.title.highlight")}
                {!isMobile && (
                  <Sparkles className="absolute -top-4 -right-8 text-brand-red w-6 h-6 md:w-8 md:h-8 animate-pulse" />
                )}
              </span>{" "}
              <br />
              {t("hero.title.line2")}
            </h1>
            <div className="relative z-10 pl-4 md:pl-6 border-l-2 border-brand-red md:max-w-3xl">
              <p
                className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: t
                    .raw("hero.description")
                    .replace(
                      /<highlight>/g,
                      '<strong class="text-black dark:text-white font-bold">'
                    )
                    .replace(/<\/highlight>/g, "</strong>"),
                }}
              />
            </div>
            <div className="relative z-10 mt-8 md:mt-10">
              <a
                href="#contact"
                className={`inline-flex items-center gap-4 px-6 md:px-8 py-3 md:py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black uppercase tracking-wider text-xs md:text-sm ${
                  !isMobile
                    ? "hover:scale-105 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                    : ""
                } transition-all duration-300 group/btn`}
              >
                {t("hero.cta")}
                <ArrowRight
                  className={`w-5 h-5 ${
                    !isMobile ? "group-hover/btn:translate-x-1" : ""
                  } transition-transform`}
                />
              </a>
            </div>
          </div>

          {/* 3. DETAIL CARDS */}
          <div
            className={`col-span-1 md:col-span-6 lg:col-span-4 p-6 md:p-12 rounded-[32px] md:rounded-[40px] bg-white dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-black/5 dark:border-white/10 ${
              !isMobile
                ? "hover:bg-white/80 dark:hover:bg-[#0A0A0A]/80 opacity-0 animate-fade-in-up"
                : "opacity-100"
            } transition-all duration-500 group relative overflow-hidden flex flex-col justify-center`}
            style={!isMobile ? { animationDelay: "400ms" } : {}}
          >
            <div
              className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center mb-6 md:mb-8 ${
                !isMobile ? "group-hover:scale-110" : ""
              } transition-transform duration-500 border border-brand-red/20`}
            >
              <Palette className="w-6 h-6 md:w-7 md:h-7 text-brand-red" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-4">
              {t("cards.knowhow.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg leading-relaxed">
              {t("cards.knowhow.desc")}
            </p>
          </div>

          <div
            className={`col-span-1 md:col-span-6 lg:col-span-4 p-6 md:p-12 rounded-[32px] md:rounded-[40px] bg-white dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-black/5 dark:border-white/10 ${
              !isMobile
                ? "hover:bg-white/80 dark:hover:bg-[#0A0A0A]/80 opacity-0 animate-fade-in-up"
                : "opacity-100"
            } transition-all duration-500 group relative overflow-hidden flex flex-col justify-center`}
            style={!isMobile ? { animationDelay: "500ms" } : {}}
          >
            <div
              className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 md:mb-8 ${
                !isMobile ? "group-hover:scale-110" : ""
              } transition-transform duration-500 border border-blue-500/20`}
            >
              <Crown className="w-6 h-6 md:w-7 md:h-7 text-blue-500" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-4">
              {t("cards.support.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-lg leading-relaxed">
              {t("cards.support.desc")}
            </p>
          </div>

          {/* 4. ICONS STRIP */}
          <div className="col-span-1 md:col-span-12 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: Palette, label: t("icons.design") },
              { icon: CheckCircle, label: t("icons.seo") },
              { icon: Crown, label: t("icons.performance") },
              { icon: MessageCircle, label: t("icons.support") },
              { icon: Lock, label: t("icons.security") },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group flex flex-col items-center justify-center gap-3 md:gap-4 p-4 md:p-6 rounded-[30px] bg-white dark:bg-[#0A0A0A]/80 backdrop-blur-md border border-black/5 dark:border-white/5 ${
                  !isMobile
                    ? "hover:-translate-y-1 opacity-0 animate-fade-in-up"
                    : "opacity-100"
                } transition-all duration-500 hover:border-brand-red/20`}
                style={
                  !isMobile ? { animationDelay: `${600 + idx * 100}ms` } : {}
                }
              >
                <item.icon
                  className={`w-6 h-6 md:w-8 md:h-8 text-black dark:text-white ${
                    !isMobile ? "group-hover:text-brand-red" : ""
                  } transition-colors duration-300`}
                />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* 5. CONTACT & HOURS */}
          <div
            className={`col-span-1 md:col-span-12 lg:col-span-6 p-8 md:p-14 rounded-[32px] md:rounded-[40px] bg-black dark:bg-white text-white dark:text-black relative overflow-hidden flex flex-col justify-center ${
              !isMobile
                ? "shadow-xl opacity-0 animate-enter-bottom"
                : "opacity-100"
            } group`}
            style={!isMobile ? { animationDelay: "800ms" } : {}}
          >
            {!isMobile && (
              <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 dark:bg-gray-200 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-gray-700 dark:group-hover:bg-gray-300 transition-colors duration-500"></div>
            )}
            <h3 className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-black mb-4 tracking-tight leading-tight">
              {t("contact.title")} <br />
              <span className="text-brand-red">{t("contact.highlight")}</span>
            </h3>
            <div className="relative z-10 mt-6 md:mt-8 space-y-3 md:space-y-5">
              <a
                href="mailto:groupdigitalconcept@gmail.com"
                className={`flex items-center gap-3 md:gap-4 group/link cursor-pointer p-3 md:p-4 rounded-xl ${
                  !isMobile ? "hover:bg-white/10 dark:hover:bg-black/5" : ""
                } transition-colors`}
              >
                <Mail size={18} className="md:w-5 md:h-5" />{" "}
                <span
                  className={`font-bold text-sm md:text-base lg:text-lg ${
                    !isMobile ? "group-hover/link:text-brand-red" : ""
                  } transition-colors break-all`}
                >
                  groupdigitalconcept@gmail.com
                </span>
              </a>
              <a
                href="tel:+212666370306"
                className={`flex items-center gap-3 md:gap-4 group/link cursor-pointer p-3 md:p-4 rounded-xl ${
                  !isMobile ? "hover:bg-white/10 dark:hover:bg-black/5" : ""
                } transition-colors`}
              >
                <Phone size={18} className="md:w-5 md:h-5" />{" "}
                <span
                  className={`font-bold text-sm md:text-base lg:text-lg ${
                    !isMobile ? "group-hover/link:text-brand-red" : ""
                  } transition-colors`}
                >
                  +212 666 37 03 06
                </span>
              </a>
            </div>
          </div>

          <div
            className={`col-span-1 md:col-span-12 lg:col-span-6 p-8 md:p-14 rounded-[32px] md:rounded-[40px] bg-white dark:bg-[#0A0A0A]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start justify-between ${
              !isMobile ? "opacity-0 animate-enter-bottom" : "opacity-100"
            }`}
            style={!isMobile ? { animationDelay: "900ms" } : {}}
          >
            <div className="w-full lg:w-1/2 space-y-4">
              <h4 className="font-bold uppercase tracking-widest text-xs mb-2">
                {t("contact.form.quickContact")}
              </h4>
              <input
                type="text"
                placeholder={t("contact.form.name")}
                className="w-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-red focus:outline-none transition-all"
              />
              <input
                type="tel"
                placeholder={t("contact.form.phone")}
                className="w-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-red focus:outline-none transition-all"
              />
              <button className="w-full bg-brand-red text-white font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-red-600 hover:scale-[1.02] transition-all">
                {t("contact.form.submit")}
              </button>
            </div>
            <div className="w-full lg:w-1/2 pt-6 lg:pt-0 lg:pl-10 border-t lg:border-t-0 lg:border-l border-black/10 dark:border-white/10">
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
                <Clock size={18} className="text-brand-red" />{" "}
                {t("contact.hours.title")}
              </h4>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm font-medium">
                <p>
                  <span className="text-black dark:text-white font-bold block mb-1">
                    {t("contact.hours.days")}
                  </span>{" "}
                  {t("contact.hours.time1")}
                </p>
                <p>{t("contact.hours.time2")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- SEPARATOR --- */}
        <div className="py-10 md:py-24 flex flex-col items-center justify-center relative">
          <div
            className={`h-16 md:h-32 w-[1px] bg-gradient-to-b from-transparent via-brand-red to-transparent ${
              !isMobile ? "opacity-30" : "opacity-10"
            }`}
          ></div>
          <div className="w-3 h-3 rounded-full border border-brand-red/50 flex items-center justify-center mt-[-1px] relative z-10 bg-[#F0F0F2] dark:bg-[#000000]">
            <div
              className={`w-1 h-1 rounded-full bg-brand-red ${
                !isMobile ? "animate-pulse" : ""
              }`}
            ></div>
          </div>
        </div>

        {/* --- SOLUTIONS SECTION --- */}
        <div
          id="solutions-excellence"
          className="w-full relative z-20 pb-16 md:pb-32"
        >
          {/* Title Area */}
          <div
            className={`mb-10 md:mb-24 relative ${
              !isMobile ? "opacity-0 animate-enter-bottom" : "opacity-100"
            }`}
            style={!isMobile ? { animationDelay: "200ms" } : {}}
          >
            {!isMobile && (
              <h1 className="absolute -top-10 md:-top-16 -left-4 md:-left-20 text-[18vw] md:text-[12rem] lg:text-[15rem] font-black text-black/[0.03] dark:text-white/[0.03] pointer-events-none select-none overflow-hidden whitespace-nowrap z-0 leading-none">
                {t("solutions.backgroundText")}
              </h1>
            )}

            <div className="relative z-10 flex flex-col xl:flex-row gap-6 md:gap-12 items-end">
              <div className="flex-1 pl-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 md:mb-8 shadow-sm">
                  <Sparkles size={14} className="text-brand-red" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
                    {t("solutions.badge")}
                  </span>
                </div>
                <h2 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-black dark:text-white uppercase">
                  {t("solutions.title.line1")} <br />
                  <span
                    className={`text-gray-400 dark:text-gray-500 transition-all duration-700 ${
                      !isMobile ? "hover:text-black dark:hover:text-white" : ""
                    }`}
                  >
                    {t("solutions.title.line2")}
                  </span>{" "}
                  <br />
                  <span className="text-brand-red relative inline-block">
                    {t("solutions.title.highlight")}
                    {!isMobile && (
                      <svg
                        className="absolute -bottom-2 w-full h-3 text-brand-red opacity-60"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 5 Q 50 10 100 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    )}
                  </span>
                </h2>
              </div>
              <div className="xl:w-1/3 pb-4">
                <p
                  className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed border-l-2 border-brand-red pl-6"
                  dangerouslySetInnerHTML={{
                    __html: t
                      .raw("solutions.description")
                      .replace(
                        /<highlight>/g,
                        '<strong class="text-black dark:text-white font-bold">'
                      )
                      .replace(/<\/highlight>/g, "</strong>"),
                  }}
                />
              </div>
            </div>
          </div>

          {/* The Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
            {SOLUTIONS.map((item, index) => (
              <div
                key={index}
                className={`group relative rounded-[32px] md:rounded-[40px] overflow-hidden bg-black border border-black/5 dark:border-white/10 transition-all duration-700 ease-out ${
                  !isMobile
                    ? "hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fade-in-up"
                    : "opacity-100"
                } min-h-[400px] md:min-h-[500px] w-full`}
                style={
                  !isMobile ? { animationDelay: `${300 + index * 150}ms` } : {}
                }
              >
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transform transition-transform duration-[1.2s] ease-out ${
                      !isMobile ? "group-hover:scale-110" : ""
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 ${
                      !isMobile ? "group-hover:opacity-90" : ""
                    } transition-all duration-500`}
                  ></div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-10 flex flex-col justify-end h-full z-20">
                  <div className="mb-auto">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center ${
                        !isMobile
                          ? "group-hover:bg-brand-red group-hover:border-brand-red"
                          : ""
                      } transition-all duration-500`}
                    >
                      <item.icon
                        size={24}
                        className="text-white transition-colors"
                      />
                    </div>
                  </div>

                  <div
                    className={`transform ${
                      !isMobile ? "translate-y-4 group-hover:translate-y-0" : ""
                    } transition-transform duration-500`}
                  >
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <div
                      className={`w-12 h-1 bg-brand-red rounded-full mb-4 transform origin-left ${
                        !isMobile ? "scale-x-50 group-hover:scale-x-100" : ""
                      } transition-transform duration-500`}
                    ></div>
                    <p
                      className={`text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed font-medium ${
                        !isMobile
                          ? "line-clamp-3 group-hover:line-clamp-none"
                          : ""
                      } transition-all duration-500 mb-6`}
                    >
                      {item.desc}
                    </p>
                    <div
                      className={`flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white ${
                        !isMobile
                          ? "opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                          : "opacity-100"
                      } transition-all duration-500 delay-75`}
                    >
                      {t("solutions.discover")}{" "}
                      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
                {!isMobile && (
                  <div className="fixed inset-0 pointer-events-none z-50 border-[15px] md:border-[25px] border-[#F2EDE4] dark:border-[#080808] hidden lg:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <ExpertiseSection />
      </div>

      <ExcellenceDivider />
      <ProcessRoadmap />
      <AtoutsSection />
      <TechStackDivider />
      <PhilosophySection />
      <PerformanceSection />
      <EngagementSection />
      <RegionalExpertiseSection />
      <ProjectsSection />
      <CityExpertiseSection />
      <WebsiteCreationTestimonials />
      <WebsiteCreationStats />
      <WebsiteCreationFAQ />
      <WebsiteCreationForm />
    </section>
  );
};
