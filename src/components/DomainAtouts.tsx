"use client"

import React, { useRef, useState, useEffect } from 'react';
import { 
  Users, Key, Layers, Tag, Cpu, ShieldCheck, Heart, UserCheck, 
  Sparkles
} from 'lucide-react';

const ATOUTS_DATA = [
  { id: 1, text: "Équipe Expérimentée", icon: Users },
  { id: 2, text: "Projets Clés en Main", icon: Key },
  { id: 3, text: "Applications Évolutives", icon: Layers },
  { id: 4, text: "Prix Compétitifs", icon: Tag },
  { id: 5, text: "Technologies Modernes", icon: Cpu },
  { id: 6, text: "Conformité et RGPD", icon: ShieldCheck },
  { id: 7, text: "Satisfaction Client", icon: Heart },
  { id: 8, text: "Suivi Personnalisé", icon: UserCheck },
];

export const DomainAtouts: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
        ref={sectionRef}
        className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#050505] text-black dark:text-white overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5"
    >
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 pointer-events-none">
          {/* Central Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] bg-brand-red/[0.03] rounded-full blur-[150px]"></div>
          
          {/* Subtle Grid - Adaptive for Light/Dark */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        
        {/* --- HEADER --- */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm">
                <Sparkles size={14} className="text-brand-red animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-600 dark:text-gray-300">
                    Nos Points Forts
                </span>
             </div>
             
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black dark:text-white mb-6 leading-tight max-w-5xl mx-auto">
                Les Atouts de <span className="text-brand-red">Group Digital Concept</span> <br className="hidden md:block"/>
                en achat de noms de domaine à Marrakech
             </h2>
             
             <div className="w-24 h-1.5 bg-brand-red rounded-full mx-auto shadow-[0_0_20px_rgba(220,38,38,0.5)]"></div>
        </div>

        {/* --- ORB GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {ATOUTS_DATA.map((item, index) => (
                <div 
                    key={item.id}
                    className={`
                        relative group flex flex-col items-center justify-center
                        transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                    `}
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                    {/* THE MORPHING BUBBLE */}
                    <div className="
                        relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56
                        flex items-center justify-center
                        transition-all duration-500 ease-out
                    ">
                        {/* 1. Base Circle (White/Glass) - Morphs to Rounded Square on Hover */}
                        <div className="
                            absolute inset-0 
                            bg-white text-black
                            rounded-full group-hover:rounded-[40px]
                            shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                            dark:shadow-[0_0_40px_rgba(255,255,255,0.1)]
                            group-hover:shadow-[0_20px_60px_rgba(220,38,38,0.4)]
                            transition-all duration-500 ease-out
                            group-hover:bg-gradient-to-br group-hover:from-brand-red group-hover:to-[#990000]
                            group-hover:scale-110
                            border-4 border-white dark:border-white/5
                        "></div>

                        {/* 2. Content Inside */}
                        <div className="relative z-10 flex flex-col items-center text-center px-4 transition-transform duration-500">
                            
                            {/* Icon (Hidden initially, reveals on hover) */}
                            <div className="
                                h-0 overflow-hidden opacity-0 
                                group-hover:h-auto group-hover:opacity-100 group-hover:mb-3 
                                transition-all duration-500 delay-75
                            ">
                                <item.icon size={32} className="text-white drop-shadow-md" strokeWidth={2} />
                            </div>

                            {/* Text */}
                            <span className="
                                text-sm md:text-base lg:text-lg font-bold uppercase tracking-tight leading-tight
                                text-black group-hover:text-white
                                transition-colors duration-300
                            ">
                                {item.text}
                            </span>

                            {/* Decorative Dot (Hides on hover) */}
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-red group-hover:bg-white transition-colors duration-300 group-hover:w-8 group-hover:h-1 group-hover:rounded-full group-hover:mt-3"></div>
                        </div>
                    </div>

                    {/* Reflection/Shadow beneath for 3D feel */}
                    <div className="
                        w-20 h-4 rounded-[100%] bg-black/10 dark:bg-black/50 blur-lg mt-4 
                        transition-all duration-500 
                        group-hover:w-32 group-hover:bg-brand-red/30 group-hover:blur-xl group-hover:translate-y-2
                    "></div>

                </div>
            ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mb-6 font-medium max-w-2xl mx-auto">
                Une approche globale qui garantit la sécurité, la performance et la pérennité de votre identité numérique.
            </p>
            <div className="flex justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-red">
                <span>• Expertise</span>
                <span>• Qualité</span>
                <span>• Résultat</span>
            </div>
        </div>

      </div>
    </section>
  );
};
