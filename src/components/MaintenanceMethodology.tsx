"use client"

import React, { useState, useEffect } from 'react';
import { ArrowRight, Target, Search, Map, Activity } from 'lucide-react';

const STEPS = [
  { id: "01", title: "Consultation Initiale", description: "Nous commençons chaque collaboration par une consultation approfondie. Nous discutons de vos besoins, de vos objectifs et de vos défis.", icon: Target },
  { id: "02", title: "Audit et Analyse", description: "Nos experts analysent techniquement votre site actuel pour identifier les failles de sécurité et les lenteurs.", icon: Search },
  { id: "03", title: "Élaboration du Plan d'Action", description: "Nous définissons un calendrier de maintenance et de mises à jour préventives.", icon: Map },
  { id: "04", title: "Exécution et Suivi", description: "Mise en œuvre des correctifs, surveillance 24/7 et rapports mensuels de performance.", icon: Activity }
];

export const MaintenanceMethodology: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F4F4F5] dark:bg-[#000000] text-black dark:text-white overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-8 flex items-center gap-4">
                  Notre <br/>
                  Méthodologie de <br/>
                  Travail <ArrowRight className="text-brand-red w-10 h-10 md:w-16 md:h-16" />
                </h2>
                <div className="w-20 h-1 bg-brand-red rounded-full opacity-50"></div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col divide-y divide-black/10 dark:divide-white/10 border-t border-black/10 dark:border-white/10">
            {STEPS.map((step, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={`py-8 group cursor-pointer transition-all duration-300 ${!isMobile ? 'hover:pl-4' : ''}`} onClick={() => setOpenIndex(isOpen ? null : index)}>
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <span className="text-sm font-mono font-bold text-gray-400 dark:text-gray-500">{step.id}.</span>
                      <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${isOpen ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white'}`}>
                        {step.title}
                      </h3>
                    </div>
                    <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                        {isOpen ? <ArrowRight className="text-brand-red rotate-90" /> : <ArrowRight className={`text-gray-400 dark:text-gray-600 ${!isMobile ? 'group-hover:text-black dark:group-hover:text-white' : ''} rotate-45`} />}
                    </div>
                  </div>
                  <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};