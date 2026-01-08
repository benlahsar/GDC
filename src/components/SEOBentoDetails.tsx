import {
  HeartHandshake,
  Target,
  Zap,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Rocket,
  BarChart3,
  Globe,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const SEOBentoDetails: React.FC = () => {
  const t = useTranslations("seo");
  return (
    <section className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-blue-600/[0.02] rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        {/* --- HEADER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div className="opacity-0 animate-enter-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-black dark:text-white uppercase mb-8">
              {t.rich("bento_details.title", {
                referencement: (chunks) => (
                  <span className="text-brand-red">{chunks}</span>
                ),
                br: () => <br />,
              })}
            </h2>
            <div className="w-24 h-1.5 bg-brand-red rounded-full"></div>
          </div>
          <div className="opacity-0 animate-enter-right delay-200">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-6">
              {t.rich("bento_details.description", {
                bold: (chunks) => (
                  <strong className="text-black dark:text-white">
                    {chunks}
                  </strong>
                ),
                site: (chunks) => (
                  <strong className="text-black dark:text-white">
                    {chunks}
                  </strong>
                ),
                experiences: (chunks) => (
                  <strong className="text-brand-red">{chunks}</strong>
                ),
              })}
            </p>
            <p className="text-base text-gray-500 dark:text-gray-500 leading-relaxed italic">
              {t.rich("bento_details.footer", {
                bold: (chunks) => (
                  <strong className="text-black dark:text-white">
                    {chunks}
                  </strong>
                ),
              })}
            </p>
          </div>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* 1. Notre Philosophie (Left Col - Large) */}
          <div className="lg:col-span-7 group relative overflow-hidden rounded-[40px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 shadow-2xl hover:border-brand-red/20 transition-all duration-500 opacity-0 animate-enter-left delay-300">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:scale-110 transition-transform duration-500">
                  <HeartHandshake size={28} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-red bg-brand-red/5 px-3 py-1 rounded-full border border-brand-red/10">
                  {t("bento_details.philosophy.badge")}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white mb-10 leading-tight">
                {t.rich("bento_details.philosophy.title", {
                  philosophie: (chunks) => (
                    <span className="text-brand-red">{chunks}</span>
                  ),
                  br: () => <br />,
                })}
              </h3>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2 border-b border-black/5 dark:border-white/5 pb-2">
                    {t("bento_details.philosophy.approachTitle")}
                  </h4>
                  <ul className="space-y-4">
                    {t
                      .raw("bento_details.philosophy.approach")
                      .map((item: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-400 group/item"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2 border-b border-black/5 dark:border-white/5 pb-2">
                    {t("bento_details.philosophy.engagementsTitle")}
                  </h4>
                  <ul className="space-y-4">
                    {t
                      .raw("bento_details.philosophy.engagements")
                      .map((item: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-400"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-brand-red shrink-0 mt-0.5"
                          />
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-black/5 dark:border-white/5">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-red mb-6">
                  {t("bento_details.philosophy.advantageTitle")}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {t
                    .raw("bento_details.philosophy.advantages")
                    .map((text: string, i: number) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 group-hover:bg-brand-red group-hover:text-white transition-all duration-500"
                      >
                        <p className="text-xs font-bold leading-relaxed">
                          {text}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. Votre Succès (Right Col - Tall) */}
          <div className="lg:col-span-5 group relative overflow-hidden rounded-[40px] bg-black text-white border border-white/10 shadow-2xl hover:border-brand-red/30 transition-all duration-500 opacity-0 animate-enter-right delay-400">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
            <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-brand-red transition-all duration-500">
                  <Target size={28} className="text-white" />
                </div>
                <Sparkles className="text-brand-red animate-pulse" />
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-8 text-brand-red">
                {t.rich("bento_details.success.title", { br: () => <br /> })}
              </h3>

              <p className="text-base font-medium text-gray-300 leading-relaxed mb-10">
                {t.rich("bento_details.success.description", {
                  bold: (chunks) => (
                    <strong className="text-white">{chunks}</strong>
                  ),
                })}
              </p>

              <div className="space-y-10 flex-1">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-6 border-l-2 border-brand-red pl-4">
                    {t("bento_details.success.trackingTitle")}
                  </h4>
                  <ul className="space-y-4">
                    {t
                      .raw("bento_details.success.tracking")
                      .map((item: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-sm font-bold text-gray-400 group-hover:text-white transition-colors"
                        >
                          <div className="w-1 h-1 rounded-full bg-brand-red"></div>
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-6 border-l-2 border-brand-red pl-4">
                    {t("bento_details.success.whyTitle")}
                  </h4>
                  <ul className="space-y-4">
                    {t
                      .raw("bento_details.success.why")
                      .map((item: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-sm font-bold text-gray-400 group-hover:text-white transition-colors"
                        >
                          <CheckCircle2 size={16} className="text-brand-red" />
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t.rich("bento_details.success.footer", {
                    bold: (chunks) => (
                      <strong className="text-white">{chunks}</strong>
                    ),
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* 3. Performance SEO (Left Col - Bottom) */}
          <div className="lg:col-span-6 group relative overflow-hidden rounded-[40px] bg-[#F5F5F7] dark:bg-[#080808] border border-black/5 dark:border-white/10 shadow-xl hover:shadow-2xl hover:border-brand-red/20 transition-all duration-500 opacity-0 animate-enter-bottom delay-500">
            <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:rotate-12 transition-transform">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-black dark:text-white">
                  {t.rich("bento_details.performance.title", {
                    excellence: (chunks) => (
                      <span className="text-brand-red">{chunks}</span>
                    ),
                    br: () => <br />,
                  })}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 border-b border-black/5 dark:border-white/10 pb-2">
                    {t("bento_details.performance.keysTitle")}
                  </h4>
                  <ul className="space-y-3">
                    {t
                      .raw("bento_details.performance.keys")
                      .map((item: any, i: number) => (
                        <li key={i} className="flex flex-col">
                          <span className="text-sm font-bold text-black dark:text-white">
                            • {item.t}
                          </span>
                          <span className="text-[10px] font-medium text-gray-500 uppercase ml-3 tracking-wider">
                            {item.s}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 border-b border-black/5 dark:border-white/10 pb-2">
                    {t("bento_details.performance.strategyTitle")}
                  </h4>
                  <ul className="space-y-3">
                    {t
                      .raw("bento_details.performance.strategy")
                      .map((item: string, i: number) => (
                        <li
                          key={i}
                          className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-brand-red mt-1">•</span> {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-gray-500">
                  {t("bento_details.performance.resultLabel")}
                </span>
                <div className="px-6 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-widest shadow-lg">
                  {t("bento_details.performance.resultValue")}
                </div>
              </div>
            </div>
          </div>

          {/* 4. Référencement Naturel (Right Col - Bottom) */}
          <div className="lg:col-span-6 group relative overflow-hidden rounded-[40px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 shadow-xl hover:shadow-2xl hover:border-brand-red/20 transition-all duration-500 opacity-0 animate-enter-bottom delay-600">
            <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-black dark:text-white">
                  {t.rich("bento_details.natural.title", {
                    performe: (chunks) => (
                      <span className="text-brand-red">{chunks}</span>
                    ),
                    br: () => <br />,
                  })}
                </h3>
              </div>

              <div className="space-y-8 flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: BarChart3 },
                    { icon: Globe },
                    { icon: ShieldCheck },
                    { icon: MapPin },
                  ].map((config, i) => {
                    const item = t.raw(`bento_details.natural.items.${i}`);
                    return (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 group-hover:bg-white dark:group-hover:bg-[#111] transition-all"
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <config.icon size={14} className="text-brand-red" />
                          <span className="text-sm font-bold text-black dark:text-white">
                            {item.t}
                          </span>
                        </div>
                        <span className="text-[9px] font-black uppercase text-gray-500 ml-6 tracking-widest">
                          {item.s}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-brand-red/5 border border-brand-red/20 p-5 rounded-3xl">
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-relaxed italic">
                    {t("bento_details.natural.quote")}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                  {t("bento_details.natural.badge")}
                </span>
                <a
                  href="#contact"
                  className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-red-500/30"
                >
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
