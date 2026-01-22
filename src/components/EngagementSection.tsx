import React from "react";
import {
  Headset,
  Star,
  Palette,
  MousePointer2,
  Smartphone,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const EngagementSection: React.FC = () => {
  const t = useTranslations("EngagementSection");

  // Localized support items
  const supportItems = t.raw("support.items");

  // Localized why items
  const whyItems = t.raw("why.items");

  // Localized features
  const featuresData = t.raw("features");

  const icons = [Palette, MousePointer2, Smartphone, Rocket];
  const styles = [
    {
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "hover:border-purple-500/30",
      gradient: "via-purple-500",
    },
    {
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/30",
      gradient: "via-blue-500",
    },
    {
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "hover:border-emerald-500/30",
      gradient: "via-emerald-500",
    },
    {
      color: "text-brand-red",
      bg: "bg-brand-red/10",
      border: "hover:border-brand-red/30",
      gradient: "via-red-500",
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#000000] text-black dark:text-white transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
        {/* --- HEADER --- */}
        <div className="mb-16 md:mb-24 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">
              {t("badge")}
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.1]"
            dangerouslySetInnerHTML={{
              __html: t
                .raw("title")
                .replace(/{br}/g, "<br/>")
                .replace(
                  /{span}/g,
                  `<span class="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-500">${t(
                    "titleHighlight",
                  )}</span>`,
                ),
            }}
          />
          <p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed border-l-2 border-brand-red pl-6"
            dangerouslySetInnerHTML={{
              __html: t
                .raw("description")
                .replace(
                  "<highlight>",
                  '<span class="text-black dark:text-white font-bold">',
                )
                .replace("</highlight>", "</span>"),
            }}
          />
        </div>

        {/* --- BENTO GRID PART 1 --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Left Card: Support Continu (Span 7) */}
          <div className="lg:col-span-7 row-span-2 group relative p-8 md:p-12 rounded-[40px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:border-brand-red/20 transition-all duration-500 flex flex-col">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-brand-red/5 to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="flex items-center gap-5 mb-10 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-brand-red/20">
                <Headset className="text-brand-red w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white leading-none mb-1">
                  {t("support.title")}
                </h3>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
                  {t("support.badge")}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
              {(supportItems as string[]).map((item, i) => (
                <div key={i} className="flex gap-3 group/item">
                  <div className="mt-1.5 w-5 h-5 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-brand-red transition-colors duration-300">
                    <CheckCircle2
                      size={12}
                      className="text-gray-400 dark:text-gray-500 group-hover/item:text-white transition-colors duration-300"
                    />
                  </div>
                  <span className="text-base font-medium text-gray-600 dark:text-gray-400 group-hover/item:text-black dark:group-hover/item:text-white transition-colors duration-300 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-black/5 dark:border-white/5 relative z-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-red hover:gap-4 transition-all duration-300"
              >
                {t("support.cta")} <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Why Choose Us */}
            <div className="flex-1 group relative p-8 md:p-10 rounded-[40px] bg-black dark:bg-[#111] text-white overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              {/* Noise & Gradient */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-black text-white">
                    {t("why.title")}
                  </h3>
                  <Star className="text-yellow-400 fill-yellow-400 animate-pulse-slow" />
                </div>
                <ul className="space-y-4 flex-1">
                  {(whyItems as string[]).map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-400 group-hover:text-white transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0"></div>
                      <span className="text-sm md:text-base font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Notre Différence - Highlight Card */}
            <div className="relative p-8 rounded-[40px] bg-brand-red text-white overflow-hidden shadow-lg shadow-red-600/20 group">
              {/* Abstract Shape */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-black/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10">
                <h4 className="text-lg font-black uppercase tracking-wider mb-3 opacity-90 text-white">
                  {t("difference.title")}
                </h4>
                <p className="text-white/90 leading-relaxed text-base md:text-lg font-medium">
                  {t("difference.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION TITLE MIDDLE --- */}
        <div className="py-12 md:py-20 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
            {t.raw("catchy.title").split("{br}")[0]}{" "}
            <br className="md:hidden" />
            <span className="text-brand-red relative inline-block">
              {t("catchy.titleHighlight")}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-red/30"></span>
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium max-w-2xl mx-auto text-lg">
            {t("catchy.desc")}
          </p>
        </div>

        {/* --- BENTO GRID PART 2 (Features) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(featuresData as any[]).map((item, i) => {
            const Icon = icons[i];
            const style = styles[i];
            return (
              <div
                key={i}
                className={`group relative p-8 rounded-[32px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 ${style.border} hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center overflow-hidden`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${style.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon
                    className={`w-8 h-8 ${style.color}`}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>

                {/* Bottom Bar Reveal */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent ${style.gradient} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
