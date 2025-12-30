
"use client"

import React, { useState, useEffect } from 'react';
import { 
  Trophy, Monitor, ShoppingBag, 
  Smartphone, Landmark,
  ArrowUpRight, Sparkles 
} from 'lucide-react';

const BENTO_ITEMS = [
  {
    title: "Référencement Naturel pour Sites Vitrines",
    desc: "Notre service de référencement naturel Marrakech donne à votre site vitrine la visibilité qu'il mérite. Spécialisés dans l'optimisation SEO pour les professionnels et artisans locaux, nous appliquons des stratégies sur mesure pour mettre en valeur votre activité tout en ciblant parfaitement votre audience marrakchie. Chaque projet inclut une optimisation technique et éditoriale complète pour un positionnement durable.",
    icon: Monitor,
    size: "lg:col-span-4",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    badge: "Visibilité",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Référencement E-Commerce Performant",
    desc: "Avec notre expertise en référencement naturel Marrakech, nous boostons vos boutiques en ligne pour dominer les résultats de recherche locaux. Nous optimisons vos fiches produits, la structure technique et le maillage interne pour améliorer votre taux de conversion. Une approche 100% adaptée au marché de Marrakech et à ses spécificités commerciales.",
    icon: ShoppingBag,
    size: "lg:col-span-8",
    color: "text-brand-red",
    bg: "bg-brand-red/10",
    badge: "Conversion",
    image: "https://groupdigitalconcept.com/wp-content/uploads/2025/12/Design-sans-titre-83.png"
  },
  {
    title: "SEO Premium pour Institutions",
    desc: "Notre service de référencement naturel Marrakech pour institutions combine stratégie de contenu premium et optimisation technique avancée. Nous travaillons sur l'image de marque, les recherches sectorielles et le multilinguisme pour positionner votre organisation comme référence dans son domaine à Marrakech.",
    icon: Landmark,
    size: "lg:col-span-7",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    badge: "Autorité",
    image: "https://groupdigitalconcept.com/wp-content/uploads/2025/12/Design-sans-titre-84.png"
  },
  {
    title: "SEO pour Applications Métiers",
    desc: "Le référencement naturel Marrakech que nous proposons inclut l'optimisation des plateformes métiers avec une approche sur-mesure. Nous améliorons l'indexation de vos outils professionnels (CRM, tableaux de bord) tout en tenant compte des particularités locales du marché marrakchi pour un trafic qualifié et constant.",
    icon: Smartphone,
    size: "lg:col-span-5",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    badge: "Performance",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop"
  }
];

export const SEOExcellenceSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden transition-colors duration-500">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-red/[0.03] rounded-full blur-[120px] -translate-y-1/2 ${!isMobile ? 'animate-pulse' : ''}`}></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-end mb-16 md:mb-24">
           <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
                <Trophy size={14} className="text-brand-red animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">Solutions d'Excellence</span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-black dark:text-white uppercase">
                Nous Créons <br/>
                <span className="text-gray-400 dark:text-gray-500 transition-all duration-700 hover:text-black dark:hover:text-white">des Solutions</span> <br/>
                <span className="text-brand-red relative">Digitales d'Excellence</span>
              </h2>
           </div>
           <div className="lg:w-1/3 pb-2">
              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed border-l-2 border-brand-red pl-6">
                Notre agence de stratégie SEO à Marrakech propose des services complets, spécialement conçus pour répondre aux besoins des entreprises locales et internationales.
              </p>
           </div>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {BENTO_ITEMS.map((item, idx) => (
                <div 
                  key={idx}
                  className={`
                    ${item.size} group relative min-h-[400px] md:min-h-[450px]
                    rounded-[40px] overflow-hidden flex flex-col justify-end
                    bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10
                    transition-all duration-700 ease-out
                    ${!isMobile ? 'hover:border-brand-red/30 hover:-translate-y-1 hover:shadow-2xl' : 'shadow-xl'}
                  `}
                  style={{ isolation: 'isolate', transform: 'translateZ(0)' }}
                >
                    {/* Background Visual */}
                    {item.image && (
                      <div className="absolute inset-0 z-0 overflow-hidden rounded-[40px]">
                        <img src={item.image} alt={item.title} className={`w-full h-full object-cover opacity-30 dark:opacity-40 transition-transform duration-1000 ${!isMobile ? 'group-hover:scale-110' : ''}`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-[#0A0A0A] dark:via-[#0A0A0A]/40 dark:to-transparent"></div>
                      </div>
                    )}

                    {/* Glassmorphism Inner Content */}
                    <div className="relative z-10 p-8 md:p-12 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-auto">
                            <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center transition-all duration-500 border border-white/10 shadow-inner ${!isMobile ? 'group-hover:scale-110' : ''}`}>
                                <item.icon size={28} className={item.color} strokeWidth={1.5} />
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-md border border-black/5 dark:border-white/10 text-[9px] font-black uppercase tracking-widest text-gray-800 dark:text-gray-200">{item.badge}</span>
                        </div>

                        <div className="mt-8 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                            <h3 className={`text-2xl md:text-3xl font-black text-black dark:text-white mb-4 transition-colors ${!isMobile ? 'group-hover:text-brand-red' : ''}`}>
                                {item.title}
                            </h3>
                            <p className="text-gray-800 dark:text-gray-300 text-sm md:text-base leading-relaxed font-semibold max-w-xl">
                                {item.desc}
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between group/btn cursor-pointer">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Performance Elite</span>
                            </div>
                            <div className={`w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center transition-all duration-300 shadow-sm ${!isMobile ? 'group-hover/btn:bg-brand-red group-hover/btn:text-white' : ''}`}>
                                <ArrowUpRight size={18} className={`transform transition-transform ${!isMobile ? 'group-hover/btn:rotate-45' : ''}`} />
                            </div>
                        </div>
                    </div>
                    
                    {/* Noise Overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
                </div>
            ))}

            {/* Special Interactive Card (Metrics) */}
            <div className="lg:col-span-12 p-8 md:p-12 rounded-[40px] bg-black dark:bg-white text-white dark:text-black flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10 flex-1">
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Prêt à Dominer votre Secteur ?</h3>
                    <p className="text-gray-400 dark:text-gray-500 text-lg font-medium">Nos stratégies SEO génèrent en moyenne <span className="text-white dark:text-black font-bold">+180% de trafic organique</span> après 6 mois d'accompagnement.</p>
                </div>

                <div className="relative z-10 flex flex-wrap gap-4 justify-center md:justify-end shrink-0">
                    <div className="px-6 py-4 rounded-2xl bg-white/10 dark:bg-black/5 border border-white/10 dark:border-black/10 backdrop-blur-md flex flex-col items-center">
                        <span className="text-2xl font-black text-brand-red">#1</span>
                        <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">Ranking</span>
                    </div>
                    <div className="px-6 py-4 rounded-2xl bg-white/10 dark:bg-black/5 border border-white/10 dark:border-black/10 backdrop-blur-md flex flex-col items-center">
                        <span className="text-2xl font-black">99.9%</span>
                        <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">Success</span>
                    </div>
                    <a href="#contact" className={`px-10 py-5 bg-brand-red text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-red-600/30 flex items-center gap-3 self-center ${!isMobile ? 'hover:scale-105' : ''}`}>
                        Démarrer <Sparkles size={16} />
                    </a>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};
