import React, { useState, useEffect } from "react";
import { Sparkles, ArrowUpRight, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export const SEODigitalProjects: React.FC = () => {
  const t = useTranslations("seo");
  const [isMobile, setIsMobile] = useState(false);

  const PROJECTS_DATA = [
    {
      id: 1,
      key: "majorelle",
      logo: "https://group-digitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144006.802.png",
      accent: "from-blue-500/20 to-indigo-500/20",
    },
    {
      id: 2,
      key: "compagnons",
      logo: "https://group-digitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144222.368.png",
      accent: "from-orange-500/20 to-red-500/20",
    },
    {
      id: 3,
      key: "plancycall",
      logo: "https://group-digitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144356.680.png",
      accent: "from-brand-red/10 to-pink-600/10",
    },
    {
      id: 4,
      key: "mmreseaux",
      logo: "https://group-digitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144735.987.png",
      accent: "from-emerald-500/10 to-teal-500/10",
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden transition-colors duration-500">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 md:mb-24 ${
            !isMobile ? "opacity-0 animate-enter-bottom" : "opacity-100"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
            <Globe size={14} className="text-brand-red animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
              {t("digital_projects.badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black dark:text-white uppercase mb-4">
            {t.rich("digital_projects.title", {
              digitaux: (chunks) => (
                <span className="text-brand-red">{chunks}</span>
              ),
            })}
          </h2>
          <div className="w-24 h-1.5 bg-brand-red mx-auto rounded-full"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative flex flex-col items-center ${
                !isMobile ? "opacity-0 animate-enter-bottom" : "opacity-100"
              }`}
              style={!isMobile ? { animationDelay: `${idx * 150}ms` } : {}}
            >
              {/* Glass Card */}
              <div
                className={`
                        relative w-full aspect-[4/5] rounded-[40px] 
                        bg-white dark:bg-[#0A0A0A]
                        backdrop-blur-2xl
                        border border-black/5 dark:border-white/10
                        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                        overflow-hidden flex items-center justify-center p-12
                        ${
                          !isMobile
                            ? "hover:-translate-y-4 hover:border-brand-red/30 shadow-xl hover:shadow-2xl"
                            : "shadow-lg"
                        }
                    `}
                style={{ isolation: "isolate", transform: "translateZ(0)" }}
              >
                {/* Dynamic Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                ></div>

                {/* Shine Effect */}
                {!isMobile && (
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
                )}

                {/* Project Logo */}
                <div
                  className={`relative z-10 w-full h-full flex items-center justify-center ${
                    !isMobile ? "animate-float" : ""
                  }`}
                  style={!isMobile ? { animationDelay: `${idx * 500}ms` } : {}}
                >
                  <img
                    src={project.logo}
                    alt={t(`digital_projects.projects.${project.key}`)}
                    className={`w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-500 ${
                      !isMobile ? "group-hover:scale-110" : ""
                    }`}
                  />
                </div>

                {/* Floating Action Button */}
                <div
                  className={`absolute bottom-6 right-6 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center transition-all duration-500 delay-100 shadow-lg shadow-red-600/40 z-20 ${
                    !isMobile
                      ? "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                      : "opacity-100"
                  }`}
                >
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Title Below */}
              <div className="mt-8 text-center px-4">
                <h3
                  className={`text-base md:text-lg font-black text-black dark:text-white uppercase tracking-tight leading-tight transition-colors ${
                    !isMobile ? "group-hover:text-brand-red" : ""
                  }`}
                >
                  {t(`digital_projects.projects.${project.key}`)}
                </h3>
                {/* Subtle decorative dot */}
                <div
                  className={`w-1.5 h-1.5 rounded-full bg-brand-red/20 mx-auto mt-3 transition-all ${
                    !isMobile
                      ? "group-hover:bg-brand-red group-hover:scale-150"
                      : "bg-brand-red"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
