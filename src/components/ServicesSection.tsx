"use client"
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Share2, Layers, Target, Monitor, Sparkles } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useRouter } from 'next/navigation';

// Specific keywords requested for the marquee
const SCROLL_ITEMS = [
  { text: "Custom Development", style: "solid" },
  { text: "App Designs", style: "outline" },
  { text: "Website Creation", style: "solid" },
  { text: "High-Impact Ads", style: "outline" },
  { text: "Digital Strategy", style: "solid" },
  { text: "UI/UX Design", style: "outline" },
  { text: "E-Commerce", style: "solid" },
  { text: "Brand Identity", style: "outline" }
];

const SERVICES_DATA = [
  {
    id: "01",
    category: "Social Media",
    headline: "Boostez l'engagement de votre marque sur les réseaux sociaux",
    description: "Notre agence de marketing digital dynamise l'engagement sur les réseaux sociaux, créant des connexions authentiques avec votre audience. Notre approche ? Des contenus captivants et un ciblage précis pour stimuler l'interaction et la fidélisation.",
    icon: Share2,
    highlight: "Engagement & Fidélisation"
  },
  {
    id: "02",
    category: "Stratégie",
    headline: "Stratégie digitale éprouvée pour des résultats concrets",
    description: "Notre agence met en place des stratégies digitales sur mesure, conçues pour maximiser votre retour sur investissement. Grâce à notre expertise, chaque campagne est optimisée pour atteindre vos objectifs de croissance.",
    icon: Layers,
    highlight: "Croissance & Résultats"
  },
  {
    id: "03",
    category: "Publicité",
    headline: "Publicités payantes ciblées pour un ROI maximal",
    description: "Notre expertise en publicité payante permet de transformer chaque annonce en moteur de revenu. Nous optimisons les campagnes publicitaires pour garantir un ciblage précis, atteignant exactement vos prospects.",
    icon: Target,
    highlight: "Ciblage & Profits"
  },
  {
    id: "04",
    category: "Web Design",
    headline: "Création et optimisation de sites web performants",
    description: "Notre équipe crée des sites web performants, adaptés à vos besoins et à l’expérience utilisateur. Nous optimisons votre site pour améliorer sa visibilité, sa vitesse, et son taux de conversion globale.",
    icon: Monitor,
    highlight: "Performance & Ventes"
  }
];

export const ServicesSection: React.FC = () => {
  // const { navigate } = useNavigation();
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="agency" className="relative w-full bg-transparent transition-colors duration-500 overflow-hidden">
      
      {/* === PREMIUM VIEWFINDER MARQUEE DIVIDER === */}
      <div className="relative z-20 py-8 md:py-14 bg-white/90 dark:bg-[#080808]/90 backdrop-blur-xl border-y border-black/5 dark:border-white/5 group pause-on-hover">
          
          {/* Viewfinder Overlays (Desktop Only for better performance) */}
          {!isMobile && (
            <>
              <div className="absolute inset-y-0 left-0 w-32 z-30 bg-gradient-to-r from-white via-white/80 dark:from-[#050505] dark:via-[#050505]/80 to-transparent flex items-center justify-start pl-8 pointer-events-none">
                  <span className="text-brand-red font-mono text-sm font-bold tracking-widest opacity-80">[ + ]</span>
              </div>
              <div className="absolute inset-y-0 right-0 w-32 z-30 bg-gradient-to-l from-white via-white/80 dark:from-[#050505] dark:via-[#050505]/80 to-transparent flex items-center justify-end pr-8 pointer-events-none">
                  <span className="text-brand-red font-mono text-sm font-bold tracking-widest opacity-80">[ + ]</span>
              </div>
            </>
          )}

          {/* Tech lines top/bottom */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>

          {/* Scrolling Content - Slower on mobile if needed, but animate-scroll is usually fine */}
          <div className="flex animate-scroll whitespace-nowrap w-max items-center will-change-transform">
              {[...Array(4)].map((_, setIndex) => (
                  <div key={setIndex} className="flex items-center shrink-0">
                      {SCROLL_ITEMS.map((item, idx) => (
                          <div key={`${setIndex}-${idx}`} className="flex items-center px-8 md:px-20 relative">
                              {/* Content */}
                              <span className={`
                                text-2xl md:text-5xl font-black uppercase tracking-tight
                                transition-all duration-300
                                ${item.style === 'outline' 
                                  ? 'text-outline-strong hover:text-black dark:hover:text-white' 
                                  : 'text-black dark:text-white'
                                }
                              `}>
                                  {item.text}
                              </span>
                              
                              {/* Creative Diamond Separator */}
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 md:w-4 md:h-4 rotate-45 border-2 border-brand-red bg-transparent">
                                <div className="absolute inset-0 m-auto w-1 h-1 bg-brand-red rounded-full"></div>
                              </div>
                          </div>
                      ))}
                  </div>
              ))}
          </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 pt-20 pb-24">
         
         {/* Floating background blobs (Hidden on mobile) */}
         {!isMobile && (
            <>
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none"></div>
            </>
         )}

         {/* Title */}
         <div className="text-center mb-16 md:mb-24 relative">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-red/5 border border-brand-red/10 text-brand-red text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
               Notre Expertise
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-black dark:text-white tracking-tight mb-6">
               Découvrez comment nous accompagnons
               <span className="block mt-2">
                  votre <span className="relative inline-block">
                    <span className="relative z-10 text-brand-red">réussite digitale</span>
                    <span className="absolute bottom-2 left-0 w-full h-[6px] md:h-[10px] bg-brand-red/10 -skew-x-12"></span>
                  </span>
               </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
               Des solutions innovantes et sur-mesure pour propulser votre croissance.
            </p>
         </div>

         {/* 4 Cards Grid - Stable layout for mobile */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {SERVICES_DATA.map((service) => (
                <div 
                    key={service.id} 
                    className={`
                        group relative flex flex-col justify-between
                        rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8
                        bg-[#F5F5F7] dark:bg-[#0A0A0A] 
                        border border-black/5 dark:border-white/5
                        overflow-hidden
                        transition-all duration-500 h-full
                        ${!isMobile ? 'hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)]' : 'active:bg-gray-100 dark:active:bg-[#111]'}
                    `}
                >
                    {/* Background Accents (Hidden on mobile) */}
                    {!isMobile && (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-red/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                        </>
                    )}

                    {/* --- TOP SECTION: Icon & ID --- */}
                    <div className="relative z-10 flex justify-between items-start mb-6 md:mb-8">
                        {/* Icon Box */}
                        <div className={`
                            relative w-14 h-14 md:w-16 md:h-16 rounded-2xl 
                            bg-white dark:bg-[#151515] 
                            border border-black/5 dark:border-white/10
                            flex items-center justify-center
                            shadow-sm transition-all duration-500
                            ${!isMobile ? 'group-hover:shadow-lg group-hover:scale-110 group-hover:border-brand-red/20' : ''}
                        `}>
                            <service.icon 
                                size={24} 
                                className={`text-gray-700 dark:text-gray-300 transition-colors duration-300 ${!isMobile ? 'group-hover:text-brand-red' : ''}`} 
                            />
                        </div>

                        {/* ID Number */}
                        <span className="text-3xl md:text-4xl font-black text-black/5 dark:text-white/5 font-mono">
                            {service.id}
                        </span>
                    </div>

                    {/* --- MIDDLE SECTION: Content --- */}
                    <div className="relative z-10 flex-grow flex flex-col gap-4 md:gap-5">
                        {/* Category Tag */}
                        <div className="flex items-center gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                             <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">{service.category}</span>
                        </div>

                        {/* Headline */}
                        <h3 className={`text-xl md:text-2xl font-bold text-black dark:text-white leading-tight transition-transform duration-300 ${!isMobile ? 'group-hover:translate-x-1' : ''}`}>
                            {service.headline}
                        </h3>

                        {/* Description */}
                        <p className={`text-sm md:text-base leading-relaxed text-gray-500 dark:text-gray-400 transition-colors duration-300`}>
                            {service.description}
                        </p>
                    </div>

                    {/* --- BOTTOM SECTION: Action --- */}
                    <div 
                      onClick={() => router.push('/contact-page')}
                      className="relative z-10 mt-6 md:mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between group/btn cursor-pointer"
                    >
                         <div className="flex flex-col">
                             <span className="text-[9px] uppercase text-gray-400 font-semibold tracking-widest mb-1">Impact</span>
                             <span className="text-xs font-bold text-black dark:text-white">{service.highlight}</span>
                         </div>

                         {/* Arrow Button */}
                         <div className={`
                            w-10 h-10 rounded-full 
                            flex items-center justify-center 
                            transition-all duration-300
                            ${!isMobile ? 'bg-transparent group-hover:bg-brand-red group-hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]' : 'bg-black/5 dark:bg-white/5'}
                         `}>
                             <ArrowUpRight 
                                size={18} 
                                className={`text-black dark:text-white transition-all duration-300 ${!isMobile ? 'group-hover:text-white group-hover:rotate-45' : ''}`}
                             />
                         </div>
                    </div>
                    
                    {/* Decorative Bottom Bar (Hidden on mobile) */}
                    {!isMobile && <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>}
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};
