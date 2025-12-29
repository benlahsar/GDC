import React, { useState, useEffect } from 'react';
import { Palette, Zap, Search, BarChart3, Globe } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export const ExpertiseSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative w-full py-20 md:py-32 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
                <span className={`w-2 h-2 rounded-full bg-brand-red ${!isMobile ? 'animate-pulse' : ''}`}></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
                    Savoir-Faire
                </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-black dark:text-white mb-8 max-w-5xl">
                Expertise en <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">Création Site Web Marrakech</span>
            </h2>
            
            <p className="max-w-3xl text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                Notre agence spécialisée en <span className="text-black dark:text-white font-bold">création site web Marrakech</span> transforme votre vision digitale en réalité grâce à des solutions sur mesure qui allient design exceptionnel, performance technique et stratégie SEO avancée.
            </p>
        </div>

        {/* Bento Grid Layout - Flattened for responsive control */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
            
            {/* Feature 1: Design (Top Left) */}
            <div className={`md:col-span-1 lg:col-span-2 group relative p-6 md:p-6 lg:p-10 rounded-[32px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 overflow-hidden ${!isMobile ? 'hover:shadow-2xl' : ''} transition-all duration-500`}>
                {!isMobile && <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/10 transition-colors duration-500"></div>}
                
                <div className="relative z-10 flex flex-col lg:flex-row gap-6 md:gap-6 lg:gap-8 items-start lg:items-center">
                    <div className={`w-14 h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center shrink-0 ${!isMobile ? 'group-hover:scale-110' : ''} transition-transform duration-500`}>
                        <Palette size={28} className="text-brand-red lg:w-8 lg:h-8" />
                    </div>
                    <div>
                        <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-black dark:text-white mb-2 md:mb-0 lg:mb-3">Design Unique et Responsive</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                            Nous créons des designs modernes et intuitifs qui renforcent votre identité de marque. Chaque projet de <span className="font-semibold text-black dark:text-white">création site web Marrakech</span> est optimisé pour tous les appareils avec une expérience utilisateur exceptionnelle.
                        </p>
                    </div>
                </div>
            </div>

            {/* Feature 2: Performance */}
            <div className={`group relative p-6 md:p-6 lg:p-8 rounded-[32px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 overflow-hidden ${!isMobile ? 'hover:shadow-xl' : ''} transition-all duration-500 flex flex-col`}>
                    {!isMobile && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>}
                    
                    <div className={`w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 md:mb-6 ${!isMobile ? 'group-hover:scale-110' : ''} transition-transform duration-500`}>
                        <Zap size={24} className="text-blue-500 lg:w-7 lg:h-7" />
                    </div>
                    
                    <h3 className="text-lg md:text-lg lg:text-xl font-bold text-black dark:text-white mb-2 md:mb-0 lg:mb-3">Performance et Vitesse Optimales</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                    Nos solutions techniques garantissent des temps de chargement parmi les plus rapides du secteur. Nous optimisons chaque aspect de votre création site web Marrakech pour une performance maximale et une expérience utilisateur fluide.
                    </p>
            </div>

            {/* Feature 3: SEO */}
            <div className={`group relative p-6 md:p-6 lg:p-8 rounded-[32px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 overflow-hidden ${!isMobile ? 'hover:shadow-xl' : ''} transition-all duration-500 flex flex-col`}>
                    {!isMobile && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>}

                    <div className={`w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4 md:mb-6 ${!isMobile ? 'group-hover:scale-110' : ''} transition-transform duration-500`}>
                        <Search size={24} className="text-emerald-500 lg:w-7 lg:h-7" />
                    </div>
                    
                    <h3 className="text-lg md:text-lg lg:text-xl font-bold text-black dark:text-white mb-2 md:mb-0 lg:mb-3">SEO Sur Mesure pour Marrakech</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                    Notre stratégie de référencement naturel est spécifiquement adaptée au marché de Marrakech. Nous identifions les mots-clés stratégiques et optimisons votre création site web Marrakech pour maximiser votre visibilité locale.
                    </p>
            </div>

            {/* Stats / Impact (Right Column on Desktop, Bottom Right on Tablet) */}
            <div className={`lg:col-start-3 lg:row-start-1 lg:row-span-2 relative group rounded-[32px] bg-[#080808] border border-white/10 overflow-hidden flex flex-col justify-between p-6 md:p-6 lg:p-10 shadow-2xl`}>
                {/* Dark premium background effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-red/10 via-[#080808] to-[#080808]"></div>
                {!isMobile && <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[60px] translate-x-1/2 translate-y-1/2"></div>}
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6 lg:mb-8">
                        <div className="p-2 rounded-lg bg-white/10 border border-white/10">
                            <BarChart3 className="text-white w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <h3 className="text-lg lg:text-xl font-black text-white uppercase tracking-wide">Notre Impact <br/>en Chiffres</h3>
                    </div>

                    <div className="space-y-2 lg:space-y-8">
                        {/* Stat 1 */}
                        <div className={`relative pl-4 border-l-2 border-brand-red/30 ${!isMobile ? 'group-hover:border-brand-red' : ''} transition-colors duration-500`}>
                            <div className="flex items-baseline gap-1 mb-1">
                                <AnimatedCounter value={44} suffix="+" className="text-2xl md:text-3xl lg:text-4xl font-black text-white" />
                            </div>
                            <p className="text-gray-400 text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-wider leading-relaxed">Projets de création site web Marrakech livrés</p>
                        </div>

                        {/* Stat 2 */}
                        <div className={`relative pl-4 border-l-2 border-blue-500/30 ${!isMobile ? 'group-hover:border-blue-500' : ''} transition-colors duration-500`}>
                            <div className="flex items-baseline gap-1 mb-1">
                                <AnimatedCounter value={98} suffix="%" className="text-2xl md:text-3xl lg:text-4xl font-black text-white" />
                            </div>
                            <p className="text-gray-400 text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-wider leading-relaxed">De satisfaction client</p>
                        </div>

                        {/* Stat 3 */}
                        <div className={`relative pl-4 border-l-2 border-emerald-500/30 ${!isMobile ? 'group-hover:border-emerald-500' : ''} transition-colors duration-500`}>
                            <div className="flex items-baseline gap-1 mb-1">
                                <AnimatedCounter value={75} suffix="%" className="text-2xl md:text-3xl lg:text-4xl font-black text-white" />
                            </div>
                            <p className="text-gray-400 text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-wider leading-relaxed">D'amélioration référencement</p>
                        </div>

                        {/* Stat 4 */}
                        <div className={`relative pl-4 border-l-2 border-amber-500/30 ${!isMobile ? 'group-hover:border-amber-500' : ''} transition-colors duration-500`}>
                            <div className="flex items-baseline gap-1 mb-1">
                                <AnimatedCounter value={120} suffix="ms" className="text-2xl md:text-3xl lg:text-4xl font-black text-white" />
                            </div>
                            <p className="text-gray-400 text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-wider leading-relaxed">De temps de chargement moyen</p>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-6 md:mt-8 lg:mt-10 pt-4 lg:pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 text-white/60 text-xs md:text-sm font-medium">
                        <Globe size={14} />
                        <span>Données actualisées en temps réel</span>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
