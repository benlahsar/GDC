import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  Search,
  Zap,
  MousePointer2,
  Trophy,
  Globe,
  ShieldCheck,
  Activity,
  BarChart3,
} from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { useTranslations } from "next-intl";

export const SEOWhyChooseAgency: React.FC = () => {
  const t = useTranslations("seo");
  return (
    <section className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand-red/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        {/* Main Bento Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* --- LEFT CARD: HERO & PILIERS (Span 4) --- */}
          <div className="lg:col-span-4 bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-12 border border-black/5 dark:border-white/10 shadow-2xl flex flex-col group hover:border-brand-red/20 transition-all duration-500">
            <h2 className="text-2xl md:text-3xl font-black text-brand-red mb-8 leading-tight">
              {t("why_choose.title")}
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8">
              {t.rich("why_choose.description", {
                bold: (chunks) => (
                  <strong className="text-black dark:text-white">
                    {chunks}
                  </strong>
                ),
              })}
            </p>

            <div className="space-y-6 mb-12">
              <h3 className="text-xs font-black uppercase tracking-widest text-black dark:text-white flex items-center gap-2">
                <Target size={14} className="text-brand-red" />{" "}
                {t("why_choose.approach")}
              </h3>

              <div className="space-y-4">
                {Object.entries(t.raw("why_choose.pillars")).map(
                  ([key, pillar]: [string, any], i) => (
                    <div key={i} className="group/item">
                      <h4 className="text-sm font-black text-black dark:text-white mb-1 group-hover/item:text-brand-red transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Stats Area */}
            <div className="mt-auto space-y-8">
              <div className="flex items-center gap-6 group/stat">
                <div className="flex items-baseline">
                  <AnimatedCounter
                    value={44}
                    suffix="+"
                    className="text-6xl font-black text-brand-red tracking-tighter"
                  />
                </div>
                <div className="h-10 w-px bg-black/10 dark:bg-white/10"></div>
                <p className="text-xs font-black uppercase tracking-widest text-black dark:text-white leading-tight">
                  {t.rich("why_choose.stats.delivered", { br: () => <br /> })}
                </p>
              </div>

              <div className="flex items-center gap-6 group/stat">
                <div className="flex items-baseline">
                  <AnimatedCounter
                    value={1}
                    suffix="K+"
                    className="text-6xl font-black text-brand-red tracking-tighter"
                  />
                </div>
                <div className="h-10 w-px bg-black/10 dark:bg-white/10"></div>
                <p className="text-xs font-black uppercase tracking-widest text-black dark:text-white leading-tight">
                  {t.rich("why_choose.stats.optimized", { br: () => <br /> })}
                </p>
              </div>

              <a
                href="#contact"
                className="group/btn inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-red text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 hover:bg-red-600 transition-all shadow-xl shadow-red-600/20"
              >
                {t("why_choose.cta")}{" "}
                <ArrowRight
                  size={18}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* --- MIDDLE CARD: METHODOLOGY (Span 4) --- */}
          <div className="lg:col-span-4 bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-12 border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden group hover:border-brand-red/20 transition-all duration-500">
            <span className="absolute top-8 right-12 text-6xl font-black text-black/5 dark:text-white/5 select-none font-mono">
              01
            </span>

            <h3 className="text-xl md:text-2xl font-black text-black dark:text-white mb-10 pr-12 leading-tight">
              {t("why_choose.methodology.title")}
            </h3>

            <div className="space-y-10">
              {t
                .raw("why_choose.methodology.steps")
                .map((step: any, i: number) => (
                  <div
                    key={i}
                    className="relative pl-10 border-l-2 border-brand-red/20 group-hover:border-brand-red transition-colors duration-700"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-red shadow-[0_0_10px_rgba(255,0,0,0.5)]"></div>
                    <h4 className="text-base font-black text-black dark:text-white mb-2">
                      {i + 1}. {step.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
            </div>

            <div className="mt-12 pt-10 border-t border-black/5 dark:border-white/5">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 italic leading-relaxed">
                {t.rich("why_choose.methodology.result", {
                  bold: (chunks) => (
                    <strong className="text-black dark:text-white">
                      {chunks}
                    </strong>
                  ),
                })}
              </p>

              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-2">
                  {t("why_choose.methodology.engagements_title")}
                </p>
                {t
                  .raw("why_choose.methodology.engagements")
                  .map((e: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2
                        size={12}
                        className="text-brand-red shrink-0"
                      />
                      <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400">
                        {e}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT CARD: EXPERTISE (Span 4) --- */}
          <div className="lg:col-span-4 bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-12 border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden group hover:border-brand-red/20 transition-all duration-500">
            <span className="absolute top-8 right-12 text-6xl font-black text-black/5 dark:text-white/5 select-none font-mono">
              02
            </span>

            <h3 className="text-xl md:text-2xl font-black text-black dark:text-white mb-10 pr-12 leading-tight">
              {t("why_choose.expertise.title")}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-10">
              {t.rich("why_choose.expertise.description", {
                bold: (chunks) => (
                  <strong className="text-black dark:text-white">
                    {chunks}
                  </strong>
                ),
              })}
            </p>

            <div className="space-y-8">
              <div className="p-6 rounded-[30px] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 group-hover:bg-white dark:group-hover:bg-black transition-colors duration-500">
                <h4 className="text-base font-black text-black dark:text-white mb-3">
                  {t("why_choose.expertise.techTitle")}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t("why_choose.expertise.techDesc")}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-black text-black dark:text-white">
                  {t("why_choose.expertise.strategyTitle")}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {t("why_choose.expertise.strategyDesc")}
                </p>
                <ul className="space-y-3">
                  {t
                    .raw("why_choose.expertise.strategyItems")
                    .map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0"></div>
                        <span className="text-[11px] font-bold text-gray-600 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-black/5 dark:border-white/5">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-medium leading-relaxed">
                {t.rich("why_choose.expertise.resultPrefix", {
                  bold: (chunks) => (
                    <strong className="text-black dark:text-white italic">
                      {chunks}
                    </strong>
                  ),
                })}
              </p>

              <div className="grid grid-cols-1 gap-4 mb-10">
                {[
                  { icon: Trophy, text: t("why_choose.expertise.results.0") },
                  { icon: Zap, text: t("why_choose.expertise.results.1") },
                  { icon: Globe, text: t("why_choose.expertise.results.2") },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 group-hover:border-brand-red/20 transition-all duration-300"
                  >
                    <r.icon size={16} className="text-brand-red" />
                    <span className="text-[11px] font-black uppercase text-black dark:text-white">
                      {r.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-3">
                  {t("why_choose.methodology.engagements_title")}
                </p>
                {t
                  .raw("why_choose.methodology.engagements")
                  .map((q: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-[11px] font-bold text-gray-500 dark:text-gray-400"
                    >
                      <span className="text-brand-red">✓</span> {q}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
