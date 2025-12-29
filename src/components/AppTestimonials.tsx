import React from 'react';
import { Star, Sparkles, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Samir Aït Benhaddou",
    role: "CEO, LOCATION CENTRE D'APPEL",
    text: "Leur expertise en SEO et SEA a boosté notre visibilité sur Google. Nous recevons désormais plus de demandes qualifiées. Un vrai partenaire de croissance !",
    stars: 5
  },
  {
    name: "Oussama Jabrane",
    role: "CEO, GROUP PLANCYCALL",
    text: "Professionnels et réactifs, ils ont su comprendre nos besoins et mettre en place une stratégie digitale efficace. Notre présence en ligne est bien plus performante.",
    stars: 5
  },
  {
    name: "Nadia El Fakir",
    role: "RESPONSABLE MARKETING",
    text: "Une agence sérieuse et compétente. Leur équipe a conçu un site e-commerce fluide et sécurisé pour notre boutique en ligne. Très satisfaite du travail !",
    stars: 5
  },
  {
    name: "Amine Tazi",
    role: "DIRECTEUR COMMERCIAL",
    text: "Nous avons fait appel à eux pour gérer nos campagnes publicitaires en ligne. Leur approche ciblée a largement amélioré notre retour sur investissement.",
    stars: 5
  },
  {
    name: "Salma Bennani",
    role: "DESIGNER GRAPHIQUE",
    text: "Grâce à Group Digital Concept, nos réseaux sociaux sont plus dynamiques et professionnels. Ils savent créer du contenu engageant et adapté à notre audience.",
    stars: 5
  },
  {
    name: "Karim Belkadi",
    role: "CEO, COMPAGNONS BÂTIMENT",
    text: "Nous avons confié la refonte de notre site internet à Group Digital Concept et nous sommes ravis du résultat. Design moderne et site rapide.",
    stars: 5
  }
];

export const AppTestimonials: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/[0.02] rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm">
              <Sparkles size={14} className="text-brand-red animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-800 dark:text-gray-200">Reconnaissance</span>
           </div>
           <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black dark:text-white uppercase mb-8 max-w-4xl mx-auto">
            Les Témoignages de Nos Clients : <br className="hidden md:block" />
            <span className="text-gray-500 dark:text-gray-400">Des Succès Inspirants</span> avec Notre Agence Web
           </h2>
        </div>

        {/* Testimonials Wall (Horizontal Auto-Scroll) */}
        <div className="relative w-full overflow-hidden group">
            {/* Fade Overlays */}
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-20 pointer-events-none transition-colors duration-500"></div>
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-20 pointer-events-none transition-colors duration-500"></div>

            <div className="flex animate-scroll hover:[animation-play-state:paused] gap-6 w-max">
                {[...TESTIMONIALS, ...TESTIMONIALS].map((item, idx) => (
                    <div 
                        key={idx}
                        className="
                            w-[350px] md:w-[420px] shrink-0
                            bg-[#0A0A0A] rounded-[32px] p-8 md:p-10
                            border border-white/5 shadow-2xl
                            flex flex-col justify-between
                            min-h-[300px] md:min-h-[340px]
                            transition-all duration-500 hover:scale-[1.02] hover:border-brand-red/20
                        "
                    >
                        <div className="relative">
                            <Quote className="absolute -top-4 -left-4 text-white/5 w-12 h-12 rotate-180" />
                            
                            <div className="mb-6 relative z-10">
                                <h4 className="text-xl md:text-2xl font-black text-white leading-tight">
                                    {item.name}
                                </h4>
                                <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest mt-1">
                                    {item.role}
                                </p>
                            </div>

                            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium mb-8 relative z-10 line-clamp-5">
                                "{item.text}"
                            </p>
                        </div>

                        <div className="flex gap-1">
                            {[...Array(item.stars)].map((_, i) => (
                                <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Footer Navigation Dots (Visual Only to match screenshot) */}
        <div className="flex justify-center gap-3 mt-16">
            {[1,2,3,4,5].map(i => (
                <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === 1 ? 'w-8 bg-brand-red' : 'w-2 bg-gray-300 dark:bg-white/10'}`}></div>
            ))}
        </div>
      </div>
    </section>
  );
};