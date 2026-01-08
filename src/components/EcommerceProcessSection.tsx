import React, { useRef, useState, useEffect } from 'react';
import {
  Lightbulb, PenTool, Code2, Rocket, TrendingUp,
  ArrowRight, Layers
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export const EcommerceProcessSection: React.FC = () => {
  const t = useTranslations("EcommerceProcessSection");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const STEPS = [
    {
      id: 1,
      title: (t.raw("steps") as any[])[0].title,
      desc: (t.raw("steps") as any[])[0].desc,
      icon: Lightbulb,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
      colSpan: "lg:col-span-4"
    },
    {
      id: 2,
      title: (t.raw("steps") as any[])[1].title,
      desc: (t.raw("steps") as any[])[1].desc,
      icon: PenTool,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      colSpan: "lg:col-span-4"
    },
    {
      id: 3,
      title: (t.raw("steps") as any[])[2].title,
      desc: (t.raw("steps") as any[])[2].desc,
      icon: Code2,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      colSpan: "lg:col-span-4"
    }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#050505] overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5"
    >
      {/* --- Background Elements --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-blue-500/[0.03] to-purple-500/[0.03] rounded-full blur-[120px] rotate-12 ${isMobile ? 'opacity-20' : ''}`}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">

        {/* Header */}
        <div className={`text-center mb-16 md:mb-24 ${!isMobile ? 'transition-all duration-1000' : ''} transform ${isVisible || isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
            <Layers size={14} className="text-brand-red animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
              {t("badge")}
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black dark:text-white mb-6"
            dangerouslySetInnerHTML={{ __html: t.raw("title").replace(/{br}/g, "<br/>") }}
          />
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto">
          {STEPS.map((step, index) => (
            <div
              key={step.id}
              className={`
                        ${step.colSpan}
                        group relative p-8 rounded-[32px]
                        bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl
                        border border-black/5 dark:border-white/10
                        transition-all duration-500 ease-out
                        overflow-hidden
                        ${!isMobile ? 'hover:-translate-y-2 hover:shadow-2xl' : 'shadow-md'}
                        ${isVisible || isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    `}
              style={{ transitionDelay: !isMobile ? `${index * 100}ms` : '0ms' }}
            >
              {!isMobile && (
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${step.bg}`}></div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${step.bg} ${step.border} border shadow-sm ${!isMobile ? 'group-hover:scale-110 transition-transform duration-500' : ''}`}>
                    <step.icon size={28} className={step.color} strokeWidth={1.5} />
                  </div>
                  <span className="text-4xl font-black text-black/5 dark:text-white/5 font-sans">0{step.id}</span>
                </div>
                <h3 className={`text-xl font-bold text-black dark:text-white mb-3 ${!isMobile ? 'group-hover:translate-x-1 transition-transform' : ''}`}>{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{step.desc}</p>
              </div>
            </div>
          ))}

          {/* CARD 4: LAUNCH */}
          <div className={`col-span-1 lg:col-span-7 relative p-8 md:p-12 rounded-[40px] bg-[#111] dark:bg-[#000] text-white border border-white/10 overflow-hidden group shadow-2xl transition-all duration-700 ${isVisible || isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: !isMobile ? '300ms' : '0ms' }}>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 mb-6">
                  <Rocket size={14} className={!isMobile ? 'animate-bounce' : ''} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t("launch.badge")}</span>
                </div>
                <h3
                  className="text-3xl font-black mb-4 leading-tight"
                  dangerouslySetInnerHTML={{ __html: t.raw("launch.title").replace(/{br}/g, "<br/>") }}
                />
              </div>
              <div className={`w-full md:w-1/2 bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-md relative ${!isMobile ? 'group-hover:scale-105 transition-transform duration-500' : ''}`}>
                <div className="space-y-3">
                  <div className="h-2 bg-white/10 rounded-full w-3/4"></div>
                  <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 5: GROWTH */}
          <div className={`col-span-1 lg:col-span-5 relative p-8 md:p-12 rounded-[40px] bg-gradient-to-br from-brand-red to-red-800 text-white overflow-hidden group shadow-xl shadow-red-900/20 flex flex-col justify-center transition-all duration-700 ${isVisible || isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: !isMobile ? '400ms' : '0ms' }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/20 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-3xl font-black mb-4">{t("growth.title")}</h3>
              <a href="#contact" className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-white text-brand-red rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all shadow-lg">
                {t("growth.cta")} <ArrowRight size={14} className={!isMobile ? 'group-hover/btn:translate-x-1 transition-transform' : ''} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
