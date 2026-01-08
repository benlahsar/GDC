"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  Search,
  Zap,
  Globe,
  ShieldCheck,
  MapPin,
  MousePointer2,
  Smartphone,
  BarChart3,
  Palmtree,
  Building2,
  Landmark,
  Container,
  Sun,
  Globe2,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const SEORegionalVisibility: React.FC = () => {
  const t = useTranslations("seo");
  return (
    <section className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden transition-colors duration-500">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-red/[0.02] rounded-full blur-[150px]`}
        ></div>
        <div
          className={`absolute bottom-1/4 left-0 w-[800px] h-[800px] bg-blue-600/[0.02] rounded-full blur-[150px]`}
        ></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        {/* --- TOP SECTION: PHONE & LIST --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-10 opacity-0 animate-enter-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-black dark:text-white uppercase">
              {t.rich("regional.header.title", {
                visibilite: (chunks) => (
                  <span className="text-brand-red">{chunks}</span>
                ),
                br: () => <br />,
              })}
            </h2>

            <div className="space-y-8">
              {/* Item 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-brand-red flex items-center justify-center">
                    <div className="w-1 h-1 bg-brand-red rounded-full"></div>
                  </div>
                  <h3 className="text-sm md:text-base font-black text-black dark:text-white uppercase tracking-wider">
                    {t.rich("regional.solution.title", { br: () => " " })}
                  </h3>
                </div>
                <div className="pl-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full border border-brand-red"></div>
                    <p className="text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                      {t("regional.solution.title")}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium pl-5 border-l border-brand-red/20">
                    {t.rich("regional.solution.description", {
                      bold: (chunks) => (
                        <strong className="text-black dark:text-white">
                          {chunks}
                        </strong>
                      ),
                    })}
                  </p>
                </div>
              </div>

              {/* Nested List Steps */}
              {t
                .raw("regional.solution.steps")
                .map((step: any, idx: number) => (
                  <div key={idx} className="pl-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full border border-brand-red"></div>
                      <h4 className="text-xs md:text-sm font-black text-black dark:text-white uppercase tracking-wider">
                        {step.title}
                      </h4>
                    </div>
                    <ul className="pl-5 space-y-2 border-l border-brand-red/20">
                      {step.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full border border-brand-red"></div>
                          <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <p className="text-xs font-black uppercase tracking-widest text-black dark:text-white">
                {t("regional.footer.engagement")}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300">
                <span className="text-brand-red">✓</span>{" "}
                {t("regional.footer.results")}
              </div>
              <a
                href="#contact"
                className="px-10 py-4 bg-brand-red text-white rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-red-600/30"
              >
                {t("regional.footer.cta")}
              </a>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative opacity-0 animate-enter-right delay-300">
            {/* Vertical GDC Text */}
            <div className="absolute top-1/2 -left-8 md:-left-16 transform -translate-y-1/2 -rotate-90 origin-center z-20">
              <span className="text-7xl md:text-8xl font-black text-white mix-blend-difference opacity-80 tracking-tighter">
                GDC
              </span>
            </div>

            {/* The Phone */}
            <div className="relative w-[300px] md:w-[400px] h-[600px] md:h-[800px] rounded-[60px] border-[12px] border-gray-900 dark:border-[#1a1a1a] bg-black shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden group/phone">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-8 bg-gray-900 rounded-b-2xl z-30"></div>

              {/* Image Content */}
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                  alt="Equipe Collaboration"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover/phone:scale-110"
                />
                {/* Overlay Glass */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Floating Decor */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: CITY CARDS WITH IMAGES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 opacity-0 animate-enter-bottom delay-500">
          {(() => {
            const cityKeys = [
              "maroc",
              "marrakech",
              "casablanca",
              "rabat",
              "tanger",
              "agadir",
            ];
            const cityIcons = [
              Globe2,
              Palmtree,
              Building2,
              Landmark,
              Container,
              Sun,
            ];
            const cityGradients = [
              "from-brand-red to-red-600",
              "from-orange-500 to-amber-500",
              "from-blue-600 to-indigo-600",
              "from-emerald-600 to-teal-600",
              "from-violet-600 to-purple-600",
              "from-yellow-500 to-orange-500",
            ];
            const cityImages = [
              "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
              "https://group-digitalconcept.com/wp-content/uploads/2025/12/10.webp",
              "https://group-digitalconcept.com/wp-content/uploads/2025/12/premium_photo-1705004597770-40e4db5df8a6.avif",
              "https://group-digitalconcept.com/wp-content/uploads/2025/12/1.webp",
            ];

            return cityKeys.map((key, idx) => {
              const card = {
                city: t(`regional.cities.${key}.city`),
                desc: t(`regional.cities.${key}.description`),
                icon: cityIcons[idx],
                gradient: cityGradients[idx],
                image: cityImages[idx],
              };
              return (
                <div
                  key={idx}
                  className="group relative p-0 rounded-[35px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 hover:border-brand-red/30 transition-all duration-500 flex flex-col text-center shadow-lg hover:shadow-2xl overflow-hidden min-h-[320px]"
                >
                  {/* Background City Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={card.image}
                      alt={card.city}
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-[#0A0A0A] dark:via-[#0A0A0A]/40 dark:to-transparent"></div>
                  </div>

                  <div className="relative z-10 p-8 flex flex-col h-full">
                    {/* Icon Header */}
                    <div className="flex justify-center mb-6">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <card.icon size={22} strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="text-base font-black text-black dark:text-white mb-6 leading-tight group-hover:text-brand-red transition-colors">
                      {card.city}
                    </h3>

                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium mb-auto">
                      {card.desc}
                    </p>

                    <div className="mt-8 flex justify-center">
                      <div className="w-8 h-1 bg-brand-red/20 group-hover:w-16 group-hover:bg-brand-red transition-all duration-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Hover Shine */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
                </div>
              );
            });
          })()}
        </div>
      </div>
    </section>
  );
};
