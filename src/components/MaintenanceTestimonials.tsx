
import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  { name: "Oussama Jabrane", role: "CEO, GROUP PLANCYCALL", text: "Professionnels et réactifs, ils ont su comprendre nos besoins et mettre en place une stratégie digitale efficace. Notre présence en ligne est bien plus performante.", stars: 4 },
  { name: "Nadia El Fakir", role: "RESPONSABLE MARKETING", text: "Une agence sérieuse et compétente. Leur équipe a conçu un site e-commerce fluide et sécurisé pour notre boutique en ligne. Très satisfaite du travail !", stars: 5 },
  { name: "Amine Tazi", role: "DIRECTEUR COMMERCIAL", text: "Nous avons fait appel à eux pour gérer nos campagnes publicitaires en ligne. Leur approche ciblée a largement amélioré notre retour sur investissement.", stars: 5 },
  { name: "Salma Bennani", role: "DESIGNER GRAPHIQUE", text: "Grâce à Group Digital Concept, nos réseaux sociaux sont plus dynamiques et professionnels. Ils savent créer du contenu engageant.", stars: 5 },
  { name: "Anas Rachidi", role: "RESPONSABLE IT", text: "Un service technique au top ! Ils ont optimisé nos systèmes informatiques et mis en place des solutions de sauvegarde fiables.", stars: 5 }
];

export const MaintenanceTestimonials: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F4F4F5] dark:bg-[#000000] py-24 md:py-32 overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black dark:text-white tracking-tight leading-tight max-w-5xl mx-auto">
              Les Témoignages de Nos Clients : <br/>
              <span className="text-gray-500 dark:text-gray-400 opacity-60">Des Succès Inspirants avec Notre Agence Web</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="group bg-white dark:bg-[#0A0A0A] p-8 rounded-[32px] border border-black/5 dark:border-white/10 flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 shadow-xl dark:shadow-none min-h-[380px]">
              <div>
                 <div className="flex flex-col mb-6">
                    <h4 className="text-lg font-black text-black dark:text-white leading-tight mb-1">{review.name}</h4>
                    <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest">{review.role}</p>
                 </div>
                 <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium mb-8">{review.text}</p>
              </div>
              <div className="flex gap-1 pt-6 border-t border-black/5 dark:border-white/5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={`${i < review.stars ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300 dark:text-gray-800'}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
