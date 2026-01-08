import React from 'react';
import { Rocket, Zap, Play, BarChart3, Star } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

export const PerformanceSection: React.FC = () => {
    const t = useTranslations("PerformanceSection");
    const locale = useLocale();

    // Localized optimisations
    const optimisations = t.raw("optimisations.items");

    // Localized SEO items
    const seoItems = t.raw("seo.items");

    return (
        <section className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#000000] text-black dark:text-white transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">

            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-red/[0.03] rounded-full blur-[120px] -translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-auto">

                    {/* --- CARD 1: HEADER (Full Width) --- */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-12 bg-white dark:bg-[#080808] rounded-[32px] p-8 md:p-12 border border-black/5 dark:border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">{t("badge")}</span>
                            </div>
                            <h2
                                className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1] text-black dark:text-white"
                                dangerouslySetInnerHTML={{
                                    __html: t.raw("title").replace("{br}", '<br class="hidden lg:block"/>').replace("{span}", `<span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">${t.raw("titleHighlight")}</span>`)
                                }}
                            />
                        </div>
                        <div className="hidden lg:flex w-20 h-20 rounded-2xl bg-black dark:bg-white text-white dark:text-black items-center justify-center shrink-0 rotate-3 hover:rotate-6 transition-transform duration-500">
                            <Rocket size={40} strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* --- CARD 2: OPTIMISATIONS (Left Column - Tall) --- */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-7 bg-white dark:bg-[#080808] rounded-[32px] p-8 md:p-12 border border-black/5 dark:border-white/10 flex flex-col shadow-sm group">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-black dark:text-white group-hover:bg-brand-red group-hover:text-white transition-colors duration-300">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white">{t("optimisations.title")}</h3>
                        </div>

                        <div className="space-y-6 md:space-y-8 flex-1">
                            {(optimisations as any[]).map((item, index) => (
                                <div key={index} className="flex gap-4 md:gap-5 items-start">
                                    <div className="mt-1.5 flex-shrink-0">
                                        <Play size={14} className="text-brand-red fill-brand-red rotate-0 group-hover:rotate-90 transition-transform duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold text-brand-red mb-1">
                                            {item.title} <span className="text-black dark:text-white font-medium">:</span>
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN STACK --- */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-5 flex flex-col gap-6">

                        {/* --- CARD 3: SEO STRATEGY (Top Right) --- */}
                        <div className="flex-1 rounded-[32px] p-8 md:p-10 bg-[#0A0A0A] dark:bg-[#111] border border-red-900/30 shadow-[0_10px_30px_-10px_rgba(220,38,38,0.15)] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2"></div>

                            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                                <BarChart3 className="text-brand-red" size={24} />
                                <h3 className="text-xl md:text-2xl font-black text-white">
                                    {t("seo.title")}
                                </h3>
                            </div>

                            <ul className="space-y-5 relative z-10">
                                {(seoItems as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Star size={16} className="text-brand-red fill-brand-red shrink-0 mt-1 animate-pulse-slow" />
                                        <span className="font-medium text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* --- CARD 4: QUOTE (Bottom Right) --- */}
                        <div className="rounded-[32px] p-8 md:p-10 bg-gradient-to-br from-brand-red/10 to-transparent border border-brand-red/20 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                            <p
                                className="relative z-10 text-lg font-medium text-center italic leading-relaxed text-black dark:text-white"
                                dangerouslySetInnerHTML={{
                                    __html: t.raw("quote").replace("{bold}", `<strong class="font-black">${locale === 'fr' ? 'domine votre marché' : (locale === 'es' ? 'domina su mercado' : 'dominates your market')}</strong>`).replace("{span}", `<span class="text-brand-red font-bold not-italic">${locale === 'fr' ? 'création site web Marrakech' : (locale === 'es' ? 'creación sitio web Marrakech' : 'website creation Marrakech')}</span>`)
                                }}
                            />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};
