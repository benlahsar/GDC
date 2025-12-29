
import React, { useRef, useState, useEffect } from 'react';
import { Zap, ShieldCheck, Server, Database, Headset, HeartHandshake, Target, Eye, ChevronRight, Check } from 'lucide-react';

const REASONS = [
  {
    id: "performance",
    title: "Performance et rapidité",
    desc: "Nos infrastructures de hébergement web à Marrakech sont optimisées pour assurer une performance maximale. Profitez de serveurs ultra-rapides avec un temps de réponse réduit afin d'optimiser l'expérience utilisateur et améliorer votre référencement sur Google.",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  },
  {
    id: "security",
    title: "Sécurité et protection des données",
    desc: "Nous mettons en place des protocoles de sécurité avancés, incluant des certificats SSL, des pare-feu et des protections anti-DDoS, garantissant ainsi une sécurité optimale pour votre site et vos données.",
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    id: "hosting",
    title: "Hébergement et services complémentaires",
    desc: "En complément de votre hébergement web à Marrakech, nous offrons des solutions adaptées à vos besoins : hébergement mutualisé, dédié, VPS, ainsi que des services comme l'enregistrement de domaine, les certificats de sécurité et l'optimisation des performances.",
    icon: Server,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    id: "backup",
    title: "Sauvegarde et fiabilité",
    desc: "Vos données sont précieuses. C'est pourquoi nous assurons des sauvegardes automatiques et régulières pour éviter toute perte accidentelle. Vous bénéficiez ainsi d'une infrastructure fiable garantissant l'accessibilité permanente de votre site.",
    icon: Database,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    id: "support",
    title: "Assistance technique et accompagnement",
    desc: "Notre équipe vous accompagne à chaque étape de votre hébergement web à Marrakech. Nous vous conseillons sur le choix de votre offre et nous assurons un suivi technique réactif pour vous garantir une assistance en cas de besoin.",
    icon: Headset,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  },
  {
    id: "engagement",
    title: "Notre Engagement",
    desc: "Notre engagement repose sur trois principes fondamentaux : performance, sécurité et accompagnement. Nous nous engageons à vous offrir un hébergement web à Marrakech fiable, rapide et adapté aux exigences des moteurs de recherche. Notre priorité est de garantir un service sécurisé avec des infrastructures performantes pour assurer la stabilité et l'évolution de votre site web.",
    icon: HeartHandshake,
    color: "text-brand-red",
    bg: "bg-brand-red/10"
  }
];

export const HostingWhyChoose: React.FC = () => {
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
    <section ref={sectionRef} className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#050505] text-black dark:text-white overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-500">
      
      {/* Background Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-red/[0.02] rounded-full blur-[120px] -translate-x-1/2"></div>
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/[0.02] rounded-full blur-[120px] translate-x-1/2"></div>
         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        
        {/* Header */}
        <div className={`mb-16 md:mb-24 ${!isMobile ? 'transition-all duration-1000' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
                <span className={`w-1.5 h-1.5 rounded-full bg-brand-red ${!isMobile ? 'animate-pulse' : ''}`}></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
                    Infrastructure & Sécurité
                </span>
             </div>
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black dark:text-white mb-6">
                Pourquoi Nous Choisir pour <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
                    l'Hébergement Web à Marrakech
                </span>
             </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* --- LEFT COLUMN: FEATURES LIST --- */}
            <div className={`lg:col-span-7 flex flex-col gap-4 ${!isMobile ? 'transition-all duration-1000 delay-200' : ''} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                {REASONS.map((item, index) => (
                    <div 
                        key={item.id}
                        className={`
                            group relative p-6 md:p-8 rounded-[24px] 
                            bg-white dark:bg-[#0A0A0A] 
                            border border-black/5 dark:border-white/5 
                            transition-all duration-300
                            overflow-hidden
                            ${!isMobile ? 'hover:border-black/10 dark:hover:border-white/20 hover:shadow-lg hover:bg-white dark:hover:bg-black' : ''}
                        `}
                    >
                        <div className="relative z-10 flex gap-5 items-start">
                            <div className={`
                                shrink-0 w-12 h-12 rounded-xl flex items-center justify-center 
                                ${item.bg} bg-opacity-10 
                                border border-black/5 dark:border-white/10 
                                ${item.color}
                                transition-all duration-300
                                ${!isMobile ? 'group-hover:scale-110 group-hover:bg-white dark:group-hover:bg-black group-hover:border-transparent group-hover:shadow-md' : ''}
                            `}>
                                <item.icon size={24} strokeWidth={1.5} />
                            </div>

                            <div className="flex-1">
                                <h3 className={`text-xl font-bold mb-2 text-black dark:text-white transition-colors flex items-center gap-2`}>
                                    {item.title}
                                    {!isMobile && <ChevronRight size={16} className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${item.color}`} />}
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- RIGHT COLUMN: VISION & MISSION --- */}
            <div className={`lg:col-span-5 flex flex-col gap-6 ${!isMobile ? 'transition-all duration-1000 delay-400' : ''} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                
                {/* 1. VISION CARD */}
                <div className="
                    relative p-8 md:p-10 rounded-[40px]
                    bg-[#111] dark:bg-[#111] text-white
                    border border-white/10
                    overflow-hidden group
                    shadow-2xl
                ">
                    <div className="relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                            <Eye size={28} className="text-brand-red" />
                        </div>
                        <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">Vision</h3>
                        <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed font-medium">
                            <p>Chez <strong className="text-white">Group Digital Concept</strong>, nous avons pour ambition de devenir le référent en hébergement web à Marrakech.</p>
                            <p>Nous proposons des solutions adaptées aux besoins des entreprises, leur permettant d'avoir un site internet fiable et performant.</p>
                        </div>
                    </div>
                </div>

                {/* 2. MISSION CARD */}
                <div className="
                    relative p-8 md:p-10 rounded-[40px]
                    bg-white text-black
                    border border-black/5
                    overflow-hidden group
                    shadow-xl
                ">
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center">
                                <Target size={28} className="text-black" />
                            </div>
                        </div>
                        <h3 className="text-3xl font-black text-black mb-6 uppercase tracking-tight">Mission</h3>
                        <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                            <p>Notre mission est de simplifier et sécuriser l'hébergement web à Marrakech en fournissant une expertise complète et un accompagnement personnalisé.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
      </div>
    </section>
  );
};
