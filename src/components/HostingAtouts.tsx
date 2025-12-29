
import React, { useRef, useState, useEffect } from 'react';
import { 
  Users, Key, Layers, Tag, Cpu, ShieldCheck, Heart, UserCheck, 
  Sparkles
} from 'lucide-react';

const ATOUTS_DATA = [
  { id: 1, text: "Suivi Personnalisé", icon: UserCheck },
  { id: 2, text: "Prix Compétitifs", icon: Tag },
  { id: 3, text: "Conformité et RGPD", icon: ShieldCheck },
  { id: 4, text: "Applications Évolutives", icon: Layers },
  { id: 5, text: "Projets Clés en Main", icon: Key },
  { id: 6, text: "Équipe Expérimentée", icon: Users },
  { id: 7, text: "Satisfaction Client", icon: Heart },
  { id: 8, text: "Technologies Modernes", icon: Cpu },
];

export const HostingAtouts: React.FC = () => {
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
      { threshold: 0.2 }
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
        className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#050505] text-black dark:text-white overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5"
    >
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] bg-brand-red/[0.02] rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        
        {/* --- HEADER --- */}
        <div className={`text-center mb-24 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm">
                <Sparkles size={14} className="text-brand-red animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-600 dark:text-gray-300">
                    Nos Points Forts
                </span>
             </div>
             
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black dark:text-white mb-6 leading-tight max-w-5xl mx-auto">
                Les Atouts de <span className="text-brand-red">Group Digital Concept</span> <br className="hidden md:block"/>
                en Hébergement Web
             </h2>
        </div>

        {/* --- ORBITAL TECH GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {ATOUTS_DATA.map((item, index) => (
                <div 
                    key={item.id}
                    className={`
                        group relative flex flex-col items-center justify-center
                        ${!isMobile ? 'transition-all duration-700 ease-out' : ''}
                        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                    `}
                    style={{ transitionDelay: !isMobile ? `${index * 100}ms` : '0ms' }}
                >
                    {/* 1. OUTER ORBIT TRACK */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full border transition-colors duration-500 ${!isMobile ? 'border-black/5 dark:border-white/5 group-hover:border-brand-red/20' : 'border-black/5 dark:border-white/5'}`}></div>

                    {/* 2. REVOLVING PLANET (DOT) - Disabled or slowed on mobile */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full ${!isMobile ? 'animate-[spin_10s_linear_infinite] group-hover:animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500' : 'hidden'}`}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand-red rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
                    </div>

                    {/* 3. CENTRAL CORE */}
                    <div className={`
                        relative z-10 w-32 h-32 rounded-full
                        bg-[#F0F0F2] dark:bg-[#0A0A0A]
                        border border-black/10 dark:border-white/10
                        flex items-center justify-center
                        shadow-[inset_0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_4px_20px_rgba(255,255,255,0.05)]
                        transition-all duration-500 ease-out
                        ${!isMobile ? 'group-hover:scale-110 group-hover:border-brand-red group-hover:shadow-[0_0_40px_rgba(220,38,38,0.2)]' : ''}
                    `}>
                        <item.icon 
                            size={36} 
                            className={`relative z-10 text-gray-400 ${!isMobile ? 'group-hover:text-brand-red transition-colors duration-300' : ''}`} 
                            strokeWidth={1.5}
                        />
                    </div>

                    {/* 4. LABEL */}
                    <div className="mt-8 text-center relative z-10">
                        <h3 className={`text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 ${!isMobile ? 'group-hover:text-black dark:group-hover:text-white transition-colors duration-300' : ''} max-w-[160px]`}>
                            {item.text}
                        </h3>
                    </div>

                </div>
            ))}
        </div>

      </div>
    </section>
  );
};
