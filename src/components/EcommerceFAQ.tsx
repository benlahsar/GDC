import React, { useState, useEffect } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle, ArrowRight, ShoppingBag } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const EcommerceFAQ: React.FC = () => {
    const t = useTranslations("EcommerceFAQ");
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [isMobile, setIsMobile] = useState(false);

    const FAQS = [
        {
            question: (t.raw("items") as any[])[0].question,
            answer: (t.raw("items") as any[])[0].answer
        },
        {
            question: (t.raw("items") as any[])[1].question,
            answer: (t.raw("items") as any[])[1].answer
        },
        {
            question: (t.raw("items") as any[])[2].question,
            answer: (t.raw("items") as any[])[2].answer
        },
        {
            question: (t.raw("items") as any[])[3].question,
            answer: (t.raw("items") as any[])[3].answer
        },
        {
            question: (t.raw("items") as any[])[4].question,
            answer: (t.raw("items") as any[])[4].answer
        }
    ];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#050505] transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">

            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-brand-red/[0.03] rounded-full blur-[120px]"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* --- LEFT SIDE: STICKY INFO --- */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-32">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
                                <HelpCircle size={14} className="text-brand-red animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
                                    {t("badge")}
                                </span>
                            </div>

                            <h2
                                className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-black dark:text-white mb-6"
                                dangerouslySetInnerHTML={{ __html: t.raw("title").replace(/{br}/g, "<br/>") }}
                            />

                            <div className={`p-6 rounded-[24px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 shadow-xl relative overflow-hidden group ${!isMobile ? 'hover:-translate-y-1 transition-transform duration-300' : ''}`}>
                                {!isMobile && (
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/10 transition-colors duration-500"></div>
                                )}

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-black dark:text-white transition-all duration-300 shadow-sm ${!isMobile ? 'group-hover:bg-brand-red group-hover:text-white' : ''}`}>
                                            <MessageCircle size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-black dark:text-white">{t("specific.title")}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{t("specific.desc")}</p>
                                        </div>
                                    </div>
                                    <a href="#contact" className="flex items-center justify-between w-full px-6 py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-widest hover:shadow-lg transition-all group/btn">
                                        {t("specific.cta")} <ArrowRight size={16} className={!isMobile ? 'group-hover/btn:translate-x-1 transition-transform' : ''} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: ACCORDION LIST --- */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        {FAQS.map((faq, index) => (
                            <div
                                key={index}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`group relative rounded-[24px] transition-all duration-500 cursor-pointer overflow-hidden ${openIndex === index ? 'bg-white dark:bg-[#0A0A0A] shadow-2xl scale-[1.01] z-10 ring-1 ring-black/5 dark:ring-white/10' : 'bg-white/40 dark:bg-white/5 hover:bg-white dark:hover:bg-[#0A0A0A] border border-black/5 dark:border-white/5'}`}
                            >
                                <div className="p-6 md:p-8">
                                    <div className="flex items-start justify-between gap-6">
                                        <div className="flex gap-4">
                                            <div className={`mt-1 hidden md:flex shrink-0 w-6 h-6 rounded-full items-center justify-center border transition-colors ${openIndex === index ? 'border-brand-red bg-brand-red text-white' : 'border-black/10 dark:border-white/10 text-gray-400'}`}>
                                                <ShoppingBag size={12} />
                                            </div>
                                            <h3 className={`text-lg md:text-xl font-bold leading-tight transition-colors duration-300 ${openIndex === index ? 'text-brand-red' : 'text-black dark:text-white group-hover:text-black/80 dark:group-hover:text-white/80'}`}>
                                                {faq.question}
                                            </h3>
                                        </div>

                                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${openIndex === index ? 'bg-brand-red border-brand-red text-white rotate-180 shadow-lg' : 'border-black/10 dark:border-white/10 text-gray-400 dark:text-gray-500'}`}>
                                            {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                                        </div>
                                    </div>

                                    <div className={`grid transition-all duration-500 ease-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                        <div className="overflow-hidden">
                                            <div className="w-full h-[1px] bg-black/5 dark:bg-white/5 mb-6"></div>
                                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed"
                                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
