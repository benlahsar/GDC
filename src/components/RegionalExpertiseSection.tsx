
import React from 'react';
import { MapPin, Palmtree, Building2, Landmark, Globe2, Sun, ArrowUpRight } from 'lucide-react';

const REGIONS = [
  {
    city: "Maroc & Marrakech",
    subtitle: "Siège & Expertise Globale",
    desc: "Notre agence spécialisée en création site web Maroc et Marrakech conçoit des solutions digitales sur mesure. Nous développons des sites haut de gamme, optimisés pour le référencement naturel au Maroc.",
    icon: MapPin,
    gradient: "from-brand-red to-red-600"
  },
  {
    city: "Marrakech",
    subtitle: "Hôtellerie & Luxe",
    desc: "À Marrakech, notre expertise se concentre sur des designs uniques pour hôtels, riads et entreprises locales. Leaders en création site internet Marrakech avec des sites ultra-performants.",
    icon: Palmtree,
    gradient: "from-orange-500 to-amber-500"
  },
  {
    city: "Casablanca",
    subtitle: "Business & E-Commerce",
    desc: "Notre agence web à Casablanca offre des solutions e-commerce puissantes (Shopify, WooCommerce) avec des tunnels de conversion optimisés. Technologies de pointe (React, GSAP).",
    icon: Building2,
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    city: "Rabat",
    subtitle: "Institutionnel & Premium",
    desc: "À Rabat, nous créons des sites institutionnels premium, en cohérence avec notre savoir-faire en création site web Maroc. Rigueur, sécurité et élégance pour les organisations.",
    icon: Landmark,
    gradient: "from-emerald-600 to-teal-600"
  },
  {
    city: "Tanger",
    subtitle: "International & Multilingue",
    desc: "Notre agence à Tanger développe des plateformes multilingues, combinant expertise en création site web Maroc et approche internationale pour les zones franches et l'export.",
    icon: Globe2,
    gradient: "from-violet-600 to-purple-600"
  },
  {
    city: "Agadir",
    subtitle: "Tourisme & Loisirs",
    desc: "À Agadir, nous concevons des sites touristiques avec la même qualité que notre création site web Marrakech, adaptés au marché marocain et aux flux touristiques internationaux.",
    icon: Sun,
    gradient: "from-yellow-500 to-orange-500"
  }
];

export const RegionalExpertiseSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#000000] overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-brand-red/[0.05] to-transparent"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-blue-500/[0.02] rotate-45 blur-[120px]"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1800px] relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
                <Globe2 size={14} className="text-brand-red animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
                    Présence Nationale
                </span>
             </div>
             
             <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter text-black dark:text-white">
                Expertise Web <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">Partout au Maroc</span>
             </h2>
             <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                De Marrakech à Tanger, nous déployons des stratégies digitales adaptées aux spécificités de chaque marché local.
             </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 xl:gap-6">
            {REGIONS.map((region, index) => (
                <div 
                    key={index}
                    className="
                        group relative 
                        bg-white/60 dark:bg-[#0A0A0A]/60 
                        backdrop-blur-xl
                        border border-black/5 dark:border-white/10
                        rounded-[32px] p-5 md:p-6 xl:p-5 2xl:p-6
                        flex flex-col justify-between
                        min-h-[280px] md:min-h-[320px]
                        hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)]
                        transition-all duration-500 ease-out
                        overflow-hidden
                    "
                >
                    {/* Hover Gradient Top Line */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${region.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                    
                    {/* Background Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${region.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}></div>

                    {/* Top Content */}
                    <div className="relative z-10">
                        {/* Icon Box */}
                        <div className="mb-6 flex justify-between items-start">
                             <div className={`
                                w-12 h-12 rounded-2xl 
                                bg-gradient-to-br ${region.gradient} 
                                flex items-center justify-center 
                                text-white shadow-lg
                                transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500
                             `}>
                                <region.icon size={22} strokeWidth={1.5} />
                             </div>
                             
                             <div className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                <ArrowUpRight size={14} className="text-black dark:text-white" />
                             </div>
                        </div>

                        <h3 className="text-xl font-black text-black dark:text-white leading-tight mb-2">
                           Création Site Web <br/>
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black dark:from-gray-400 dark:to-white">
                             {region.city}
                           </span>
                        </h3>
                        
                        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-red mb-4">
                            {region.subtitle}
                        </p>
                    </div>

                    {/* Bottom Content (Description) */}
                    <div className="relative z-10 pt-4 border-t border-black/5 dark:border-white/5">
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                            {region.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};
