
import React, { useState, useRef, useEffect } from 'react';
import { Target, Search, Map, Activity, ArrowDownRight, Plus, Minus } from 'lucide-react';

const STEPS = [
  {
    id: "01",
    title: "Consultation Initiale",
    description: "Nous commençons par une écoute active pour saisir l'essence de votre marque.",
    icon: Target
  },
  {
    id: "02",
    title: "Audit et Analyse",
    description: "Nos experts réalisent un diagnostic complet de votre écosystème digital.",
    icon: Search
  },
  {
    id: "03",
    title: "Élaboration du Plan d'Action",
    description: "Sur la base de nos analyses, nous concevons une stratégie sur mesure.",
    icon: Map
  },
  {
    id: "04",
    title: "Exécution et Suivi",
    description: "Nous mettons en œuvre les solutions définies avec rigueur.",
    icon: Activity
  }
];

export const EcommerceMethodology: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#000000] text-black dark:text-white overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-500"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* LEFT: STICKY TITLE AREA */}
          <div className={`lg:col-span-5 ${!isMobile ? 'transition-all duration-1000' : ''} ${isVisible || isMobile ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="lg:sticky lg:top-32 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm">
                   <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
                   <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">Processus</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8 text-black dark:text-white">
                  Notre <br/>
                  Méthodologie <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
                    de Travail
                  </span>
                  <ArrowDownRight className={`inline-block ml-4 text-brand-red w-12 h-12 md:w-16 md:h-16 ${!isMobile ? 'animate-bounce' : ''}`} />
                </h2>
              </div>

              {/* Dynamic Step Indicator (Desktop Only) */}
              <div className="hidden lg:flex items-center gap-6 mt-20">
                 <span className="text-7xl font-black text-black/5 dark:text-white/5 font-mono">
                    {STEPS[activeStep].id}
                 </span>
                 <div className="h-[2px] flex-1 bg-black/5 dark:bg-white/10 relative overflow-hidden rounded-full">
                    <div 
                        key={activeStep} 
                        className="absolute inset-0 bg-brand-red w-full origin-left animate-[enterRight_0.5s_ease-out_forwards]"
                    ></div>
                 </div>
                 <div className="p-6 rounded-3xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-md shadow-2xl transition-all duration-500 transform hover:scale-105">
                    {React.createElement(STEPS[activeStep].icon, { size: 32, className: "text-brand-red" })}
                 </div>
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE ACCORDION */}
          <div className={`lg:col-span-7 flex flex-col justify-center ${!isMobile ? 'transition-all duration-1000 delay-200' : ''} ${isVisible || isMobile ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
             <div className="space-y-4">
                {STEPS.map((step, index) => {
                   const isActive = activeStep === index;
                   return (
                      <div 
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`
                            group relative overflow-hidden rounded-[32px] border transition-all duration-500 cursor-pointer
                            ${isActive 
                                ? 'bg-white dark:bg-[#0A0A0A] border-black/10 dark:border-brand-red/30 shadow-2xl dark:shadow-[0_0_40px_-10px_rgba(220,38,38,0.15)] scale-[1.01]' 
                                : 'bg-white/40 dark:bg-transparent border-black/5 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/5'
                            }
                        `}
                      >
                         {/* Shine Effect - Desktop only */}
                         {!isMobile && (
                           <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-0">
                              <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent skew-x-12"></div>
                           </div>
                         )}

                         {isActive && !isMobile && (
                           <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-transparent transition-opacity duration-500 opacity-100"></div>
                         )}

                         <div className="relative z-10 p-6 md:p-10">
                            <div className="flex items-center justify-between gap-4">
                               <div className="flex items-center gap-6 md:gap-8">
                                  <span className={`text-sm md:text-base font-mono font-bold tracking-widest transition-colors duration-300 ${isActive ? 'text-brand-red' : 'text-gray-400 dark:text-gray-600'}`}>
                                    {step.id}
                                  </span>
                                  <h3 className={`text-xl md:text-3xl font-black transition-colors duration-300 ${isActive ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                                    {step.title}
                                  </h3>
                               </div>
                               
                               <div className={`
                                  w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300
                                  ${isActive 
                                    ? 'bg-brand-red border-brand-red text-white rotate-180 shadow-lg' 
                                    : 'border-black/10 dark:border-white/10 text-gray-400 dark:text-gray-500'
                                  }
                               `}>
                                  {isActive ? <Minus size={18} /> : <Plus size={18} />}
                               </div>
                            </div>

                            <div 
                                className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                            >
                                <div className="overflow-hidden">
                                   <div className="pl-8 md:pl-14 border-l-2 border-brand-red/30">
                                       <p className="text-gray-600 dark:text-gray-400 text-base md:text-xl font-medium leading-relaxed max-w-2xl">
                                          {step.description}
                                       </p>
                                   </div>
                                </div>
                            </div>
                         </div>
                      </div>
                   );
                })}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
