"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Crown,
  Code2,
  Palette,
  Sparkles,
  Facebook,
  Linkedin,
  Github,
  Plus,
  ArrowRight,
  Zap,
  Target,
  ShieldCheck,
} from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { useTranslations } from "next-intl";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  category: "executive" | "dev" | "design";
  level: number;
  linkedin?: string;
}

const getTeamMembers = (t: any): TeamMember[] => [
  {
    name: "Drome Ludovic",
    role: t("roles.ceo"),
    image:
      "https://group-digitalconcept.com/wp-content/uploads/2025/12/creation-1766590955322-scaled.webp",
    category: "executive",
    level: 0,
  },
  {
    name: "Mouhsine Makram",
    role: t("roles.devLead"),
    image:
      "https://group-digitalconcept.com/wp-content/uploads/2025/12/creation-1766582125139-scaled.webp",
    category: "dev",
    level: 1,
  },
  {
    name: "Orsino ELGHOUM",
    role: t("roles.designLead"),
    image:
      "https://group-digitalconcept.com/wp-content/uploads/2025/12/creation-1766587028427-scaled.webp",
    category: "design",
    level: 1,
  },
  {
    name: "Nizar Benlahsar",
    role: t("roles.fullstack"),
    image:
      "https://group-digitalconcept.com/wp-content/uploads/2025/12/creation-1766581123204-scaled.webp",
    category: "dev",
    level: 2,
    linkedin: "https://www.linkedin.com/in/nizar-benlahsar-7181861a2/",
  },
  {
    name: "Marouane Ait Elouhab",
    role: t("roles.fullstack"),
    image:
      "https://group-digitalconcept.com/wp-content/uploads/2025/12/creation-1766580829355-scaled.webp",
    category: "dev",
    level: 2,
    linkedin: "https://www.linkedin.com/in/ait-elouhab-marouane",
  },
  {
    name: "Abd Allah Jben",
    role: t("roles.frontend"),
    image:
      "https://group-digitalconcept.com/wp-content/uploads/2025/12/creation-1766585274717-scaled.webp",
    category: "dev",
    level: 2,
  },
  {
    name: "Rahim El Habiri",
    role: t("roles.uiux"),
    image:
      "https://group-digitalconcept.com/wp-content/uploads/2025/12/creation-1766585583307-scaled.webp",
    category: "design",
    level: 2,
  },
  {
    name: "Ismail EL Qadiri",
    role: t("roles.brand"),
    image:
      "https://group-digitalconcept.com/wp-content/uploads/2025/12/creation-1766586638539-scaled.webp",
    category: "design",
    level: 2,
  },
];

const MemberCard: React.FC<{
  member: TeamMember;
  delay?: number;
  isMobile: boolean;
}> = ({ member, delay = 0, isMobile }) => {
  const t = useTranslations("TeamPage");
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleCardClick = () => {
    if (member.linkedin) {
      window.open(member.linkedin, "_blank");
    }
  };

  const Icon =
    member.category === "executive"
      ? Crown
      : member.category === "dev"
      ? Code2
      : Palette;
  const accentColor =
    member.category === "executive"
      ? "brand-red"
      : member.category === "dev"
      ? "blue-500"
      : "purple-500";
  const isResponsable = member.level === 1;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className={`group relative flex flex-col items-center animate-fade-in-up opacity-0 ${
        isMobile ? "" : "perspective-1000"
      } ${member.linkedin ? "cursor-pointer" : ""}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
        transform:
          !isMobile && isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
            : "none",
        transition: "transform 0.1s ease-out",
        willChange: "transform",
      }}
    >
      {/* GLOW BACKGROUND EFFECT */}
      {!isMobile && (
        <div
          className={`absolute inset-0 bg-${accentColor}/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10`}
        ></div>
      )}

      <div
        className={`
        relative w-[260px] h-[400px] md:w-[320px] md:h-[500px] rounded-[48px] overflow-hidden
        bg-white dark:bg-[#0A0A0A] border-2 border-black/5 dark:border-white/5
        shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        md:group-hover:-translate-y-6 md:group-hover:border-${accentColor}/40
        isolate
      `}
        style={{
          WebkitMaskImage: "-webkit-radial-gradient(white, black)", // Fix for border-radius flicker on transforms
          backfaceVisibility: "hidden",
          transform: "translateZ(0)", // Force hardware acceleration to keep radius intact
        }}
      >
        {/* INNER CONTENT CLIPPING */}
        <div className="absolute inset-0 z-0">
          {/* Ambient Background Fill */}
          <img
            src={member.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 scale-125 pointer-events-none"
          />

          {/* Portrait Image */}
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-contain px-2 md:grayscale md:brightness-95 md:group-hover:grayscale-0 md:group-hover:brightness-110 transition-all duration-1000 ease-out relative z-10"
          />

          {/* Top-down Specular Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/80 z-20"></div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 z-30">
            <div
              className={`p-3 md:p-4 rounded-[2rem] backdrop-blur-2xl bg-black/40 dark:bg-white/5 border border-white/20 text-white shadow-2xl transition-all duration-500 md:group-hover:bg-${accentColor} md:group-hover:scale-110 md:group-hover:rotate-12`}
            >
              <Icon size={isMobile ? 18 : 20} strokeWidth={2.5} />
            </div>
          </div>

          {/* Responsable Badge for Level 1 */}
          {isResponsable && (
            <div className="absolute top-6 right-6 md:top-8 md:right-8 z-30">
              <div className="px-3 py-1 rounded-full bg-brand-red text-white text-[8px] md:text-[9px] font-black uppercase tracking-widest shadow-xl border border-white/20 animate-pulse">
                {t("labels.responsable")}
              </div>
            </div>
          )}

          {/* Bottom Info Glass Console */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-4 md:p-6 rounded-[2.5rem] bg-white/10 dark:bg-black/40 backdrop-blur-3xl border border-white/20 shadow-2xl z-30 flex flex-col items-center text-center transition-all duration-500 md:group-hover:border-white/40">
            <div className="mb-2">
              <p
                className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-${accentColor} mb-1 flex items-center justify-center gap-2`}
              >
                {isResponsable ? (
                  <span className="text-brand-red border border-brand-red/30 px-2 py-0.5 rounded-md bg-brand-red/5">
                    {t("labels.responsable").toUpperCase()}
                  </span>
                ) : (
                  t(`labels.${member.category}`)
                )}
                <span className="opacity-40">
                  • {t("labels.level")} {member.level}
                </span>
              </p>
              <h3 className="text-lg md:text-2xl font-black text-white uppercase tracking-tighter leading-none mt-1">
                {member.name}
              </h3>
            </div>

            <div className="h-px w-8 bg-white/20 mb-2 md:mb-4 group-hover:w-16 transition-all duration-500"></div>

            <p className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-white/60">
              {member.role}
            </p>
          </div>
        </div>

        {/* Glossy Scanning Effect */}
        {!isMobile && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none z-40"></div>
        )}
      </div>
    </div>
  );
};

export const TeamPage: React.FC = () => {
  const t = useTranslations("TeamPage");
  const [isMobile, setIsMobile] = useState(false);

  const TEAM_MEMBERS = getTeamMembers(t);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const ceo = TEAM_MEMBERS.find((m) => m.category === "executive");
  const devLead = TEAM_MEMBERS.find(
    (m) => m.level === 1 && m.category === "dev"
  );
  const designLead = TEAM_MEMBERS.find(
    (m) => m.level === 1 && m.category === "design"
  );

  const devTeam = TEAM_MEMBERS.filter(
    (m) => m.level === 2 && m.category === "dev"
  );
  const designTeam = TEAM_MEMBERS.filter(
    (m) => m.level === 2 && m.category === "design"
  );

  return (
    <div className="min-h-screen bg-[#F8F8FA] dark:bg-[#050505] pt-48 md:pt-48 lg:pt-56 pb-0 transition-colors duration-1000 relative overflow-x-hidden selection:bg-brand-red selection:text-white">
      {/* --- CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] bg-brand-red/[0.04] rounded-full blur-[200px]"></div>
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-600/[0.03] rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        {/* --- HERO HEADER: TYPOGRAPHIC IMPACT --- */}
        <section className="pt-32 md:pt-64 pb-16 md:pb-40 text-center relative">
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-2xl mb-8 md:mb-10 shadow-xl animate-fade-in-up">
              <Zap size={16} className="text-brand-red animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-800 dark:text-gray-200">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-[9rem] lg:text-[13rem] font-black text-black dark:text-white tracking-tighter leading-[0.9] md:leading-[0.8] uppercase mb-8 md:mb-12 animate-fade-in-up">
              {t("hero.title.line1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-red-800 italic drop-shadow-2xl">
                {t("hero.title.highlight")}
              </span>
            </h1>

            <p
              className="text-lg md:text-3xl text-gray-500 dark:text-gray-400 font-light max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
              dangerouslySetInnerHTML={{
                __html: t
                  .raw("hero.description")
                  .replace(
                    "<highlight>",
                    '<strong class="text-black dark:text-white font-black">'
                  )
                  .replace("</highlight>", "</strong>"),
              }}
            />
          </div>
        </section>

        {/* --- THE ORGANIZATION TREE: MASTER DESIGN --- */}
        <div className="flex flex-col items-center">
          {/* LEVEL 0: THE VISIONARY BOSS */}
          <div className="relative mb-20 md:mb-40 group">
            {ceo && <MemberCard member={ceo} delay={100} isMobile={isMobile} />}

            {/* Trunk Line Down (Glowing Red) */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-[2px] md:w-[3px] h-12 md:h-32 bg-gradient-to-b from-brand-red via-brand-red/40 to-transparent shadow-[0_0_20px_rgba(255,0,0,0.4)]`}
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-brand-red rounded-full blur-[8px] animate-pulse"></div>
            </div>
          </div>

          {/* LEVEL 1 & 2 BRANCHES */}
          <div className="relative w-full max-w-[1700px]">
            {/* Main Horizontal Bridge Line (Technical Connectivity) */}
            <div className="hidden lg:block absolute top-0 left-[22%] right-[22%] h-[3px] bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent">
              {/* Visual Connector Pulse Nodes */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-black dark:bg-white rounded-full"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-black dark:bg-white rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 lg:gap-8">
              {/* BRANCH A: DEVELOPMENT (Left) */}
              <div className="flex flex-col items-center relative">
                <div className="hidden lg:block w-[3px] h-16 bg-gradient-to-b from-black/10 dark:from-white/10 to-transparent"></div>

                <div className="relative pt-6 mb-20 md:mb-32">
                  {devLead && (
                    <MemberCard
                      member={devLead}
                      delay={300}
                      isMobile={isMobile}
                    />
                  )}
                  {/* Trunk to Team (Blue Glow for Dev) */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-12 md:h-32 bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent`}
                  >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full blur-[6px] animate-pulse"></div>
                  </div>
                </div>

                {/* Level 2 Dev Team */}
                <div className="relative w-full px-4">
                  <div className="hidden lg:block absolute top-0 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 pt-12">
                    {devTeam.map((m, i) => (
                      <div
                        key={m.name}
                        className="relative flex flex-col items-center"
                      >
                        <div className="hidden lg:block absolute top-[-60px] left-1/2 -translate-x-1/2 w-[1px] h-16 bg-blue-500/10"></div>
                        <MemberCard
                          member={m}
                          delay={isMobile ? 0 : 500 + i * 150}
                          isMobile={isMobile}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* BRANCH B: DESIGN (Right) */}
              <div className="flex flex-col items-center relative mt-20 lg:mt-0">
                <div className="hidden lg:block w-[3px] h-16 bg-gradient-to-b from-black/10 dark:from-white/10 to-transparent"></div>

                <div className="relative pt-6 mb-20 md:mb-32">
                  {designLead && (
                    <MemberCard
                      member={designLead}
                      delay={300}
                      isMobile={isMobile}
                    />
                  )}
                  {/* Trunk to Team (Purple Glow for Design) */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-12 md:h-32 bg-gradient-to-b from-purple-500/60 via-purple-500/20 to-transparent`}
                  >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full blur-[6px] animate-pulse"></div>
                  </div>
                </div>

                {/* Level 2 Design Team */}
                <div className="relative w-full max-w-[900px] px-4">
                  <div className="hidden lg:block absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-12">
                    {designTeam.map((m, i) => (
                      <div
                        key={m.name}
                        className="relative flex flex-col items-center"
                      >
                        <div className="hidden lg:block absolute top-[-60px] left-1/2 -translate-x-1/2 w-[1px] h-16 bg-purple-500/10"></div>
                        <MemberCard
                          member={m}
                          delay={isMobile ? 0 : 500 + i * 150}
                          isMobile={isMobile}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- MISSION STATEMENT STRIP --- */}
        <section className="mt-24 md:mt-64 relative py-12 md:py-20 border-y border-black/5 dark:border-white/5 overflow-hidden group">
          <div
            className={`flex items-center whitespace-nowrap w-max ${
              isMobile
                ? "animate-[scroll_40s_linear_infinite]"
                : "animate-scroll"
            }`}
          >
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="text-2xl md:text-7xl font-black uppercase tracking-tighter mx-10 md:mx-20 opacity-20 transition-opacity md:group-hover:opacity-100"
              >
                {t("strip.future").split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-brand-red">
                  {t("strip.future").split(" ").pop()}
                </span>{" "}
                •{t("strip.code").split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-brand-red">
                  {t("strip.code").split(" ").pop()}
                </span>{" "}
                •{t("strip.design").split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-brand-red">
                  {t("strip.design").split(" ").pop()}
                </span>
              </span>
            ))}
          </div>
        </section>

        {/* --- RECRUITMENT SECTION: REIMAGINED --- */}
        <section className="mt-24 md:mt-64 relative rounded-[40px] md:rounded-[100px] p-8 md:p-32 bg-black dark:bg-white text-white dark:text-black overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-brand-red/20 rounded-full blur-[180px] animate-pulse-slow"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
            <div className="text-center lg:text-left max-w-3xl">
              <div className="flex items-center gap-4 mb-6 md:mb-10 justify-center lg:justify-start">
                <div className="w-10 h-1 md:w-12 md:h-1.5 bg-brand-red rounded-full"></div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-gray-400">
                  {t("recruitment.badge")}
                </span>
              </div>
              <h2 className="text-4xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-8 md:mb-10 leading-[0.9] italic">
                {t("recruitment.title.line1")} <br />{" "}
                <span className="text-brand-red not-italic underline decoration-white/10 underline-offset-[12px] md:underline-offset-[20px]">
                  {t("recruitment.title.highlight")}
                </span>
              </h2>
              <p className="text-lg md:text-3xl font-light opacity-80 leading-relaxed">
                {t("recruitment.description")}
              </p>

              <div className="mt-10 md:mt-16 grid grid-cols-2 gap-6 md:gap-8 max-w-md mx-auto lg:mx-0">
                <div className="flex flex-col gap-2">
                  <span className="text-3xl md:text-4xl font-black tracking-tighter text-brand-red">
                    04
                  </span>
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    {t("recruitment.stats.openPositions")}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-3xl md:text-4xl font-black tracking-tighter text-brand-red">
                    24h
                  </span>
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    {t("recruitment.stats.reviewDelay")}
                  </span>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="group/btn relative px-10 py-8 md:px-24 md:py-14 bg-white dark:bg-black text-black dark:text-white rounded-[30px] md:rounded-[60px] font-black uppercase text-[10px] md:text-[14px] tracking-[0.4em] transition-all hover:scale-110 active:scale-95 shadow-2xl overflow-hidden text-center flex flex-col items-center gap-4 md:gap-6"
            >
              <span className="relative z-10">{t("recruitment.cta")}</span>
              <ArrowRight
                size={32}
                className="relative z-10 transition-transform duration-500 group-hover/btn:translate-x-6 md:w-[40px] md:h-[40px]"
              />
              <div className="absolute inset-0 bg-brand-red translate-x-full md:group-hover/btn:translate-x-0 transition-transform duration-700"></div>
            </a>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes shine {
          100% { left: 125%; }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
