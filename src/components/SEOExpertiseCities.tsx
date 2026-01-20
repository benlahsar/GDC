import React, { useState, useEffect } from "react";
import {
  Globe,
  Palmtree,
  ShoppingBag,
  Landmark,
  Container,
  Sun,
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  BarChart3,
  Search,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const SEOExpertiseCities: React.FC = () => {
  const t = useTranslations("seo");
  const [isMobile, setIsMobile] = useState(false);

  const CITY_EXPERTISE = [
    {
      id: "maroc",
      icon: Globe,
      image:
        "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2670&auto=format&fit=crop",
      color: "text-brand-red",
      bg: "bg-brand-red/5",
    },
    {
      id: "marrakech",
      icon: Palmtree,
      image:
        "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=2669&auto=format&fit=crop",
      color: "text-orange-500",
      bg: "bg-orange-500/5",
    },
    {
      id: "casablanca",
      icon: ShoppingBag,
      image:
        "https://group-digitalconcept.com/wp-content/uploads/2025/12/360_F_267201056_wcEH6uQ6xu5oNHtY9Hq3YOhDwe1zk1XX.jpg",
      color: "text-blue-500",
      bg: "bg-blue-500/5",
    },
    {
      id: "rabat",
      icon: Landmark,
      image:
        "https://group-digitalconcept.com/wp-content/uploads/2025/12/10.webp",
      color: "text-emerald-500",
      bg: "bg-emerald-500/5",
    },
    {
      id: "tanger",
      icon: Container,
      image:
        "https://group-digitalconcept.com/wp-content/uploads/2025/12/premium_photo-1705004597770-40e4db5df8a6.avif",
      color: "text-indigo-500",
      bg: "bg-indigo-500/5",
    },
    {
      id: "agadir",
      icon: Sun,
      image:
        "https://group-digitalconcept.com/wp-content/uploads/2025/12/1.webp",
      color: "text-amber-500",
      bg: "bg-amber-500/5",
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
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-red/[0.02] rounded-full blur-[150px] ${
            !isMobile ? "animate-pulse" : ""
          }`}
        ></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-24 ${
            !isMobile ? "opacity-0 animate-enter-bottom" : "opacity-100"
          }`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black dark:text-white uppercase mb-4">
            {t.rich("expertise_cities.title", {
              seo: (chunks) => <span className="text-brand-red">{chunks}</span>,
              br: () => <br className="hidden md:block" />,
            })}
          </h2>
          <div className="w-24 h-1.5 bg-brand-red mx-auto rounded-full"></div>
        </div>

        {/* Bento List of Horizontal Cards */}
        <div className="flex flex-col gap-10 md:gap-12">
          {CITY_EXPERTISE.map((item, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col md:flex-row items-stretch bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 rounded-[40px] md:rounded-[50px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 ${
                !isMobile ? "opacity-0 animate-enter-bottom" : "opacity-100"
              }`}
              style={{
                animationDelay: !isMobile ? `${idx * 150}ms` : "0ms",
                isolation: "isolate",
              }}
            >
              {/* Left: Image side */}
              <div className="w-full md:w-[42%] h-[300px] md:h-auto relative overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={t(`expertise_cities.items.${item.id}.title`)}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] opacity-100 ${
                    !isMobile ? "group-hover:scale-110" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white dark:to-[#0A0A0A] hidden md:block"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0A0A0A] via-transparent to-transparent md:hidden"></div>
              </div>

              {/* Right: Content side */}
              <div className="flex-1 p-8 md:p-12 lg:p-14 relative z-10 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl ${
                      item.bg
                    } flex items-center justify-center ${
                      item.color
                    } transition-transform duration-500 border border-brand-red/10 ${
                      !isMobile ? "group-hover:scale-110" : ""
                    }`}
                  >
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={12} className="text-brand-red" />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
                      {t("expertise_cities.badge")}
                    </span>
                  </div>
                </div>

                <h3
                  className={`text-xl md:text-2xl lg:text-3xl font-black text-black dark:text-white mb-6 leading-tight transition-colors`}
                >
                  {t(`expertise_cities.items.${item.id}.title`)}
                </h3>

                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-medium mb-10 text-justify">
                  {t(`expertise_cities.items.${item.id}.description`)}
                </p>

                <div className="mt-auto flex items-end justify-between">
                  <div className="flex items-center gap-8">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1">
                        {t("expertise_cities.labels.protocol")}
                      </span>
                      <span className="text-xs font-black text-black dark:text-white">
                        {t("expertise_cities.labels.protocolVal")}
                      </span>
                    </div>
                    <div className="h-8 w-px bg-black/5 dark:bg-white/10 hidden sm:block"></div>
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1">
                        {t("expertise_cities.labels.objective")}
                      </span>
                      <span className="text-xs font-black text-black dark:text-white">
                        {t("expertise_cities.labels.objectiveVal")}
                      </span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-red text-white flex items-center justify-center transition-all shadow-lg shadow-red-600/30 ${
                      !isMobile ? "hover:scale-110" : "active:scale-95"
                    }`}
                  >
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>

              {/* Hover Border Accent */}
              {!isMobile && (
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-red/10 rounded-[40px] md:rounded-[50px] pointer-events-none transition-colors duration-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
