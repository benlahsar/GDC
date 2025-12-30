
"use client"
import React from 'react';
import { Award, Target, Zap, Search, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

const FEATURES = [
  {
    title: "Expertise en Création d'Application Marrakech",
    desc: "En tant que spécialiste en création d'application Marrakech, nous proposons des solutions digitales premium, conçues selon les normes internationales. Nos applications respectent les dernières exigences de Google.",
    icon: Award
  },
  {
    title: "Stratégie de Développement Sur-Mesure",
    desc: "Nous concevons des applications performantes à Marrakech, combinant des technologies avancées et une approche ciblée pour convertir vos utilisateurs en clients fidèles. Notre méthodologie est adaptée à vos besoins.",
    icon: Target
  },
  {
    title: "Performance Technique Garantie",
    desc: "Nos solutions techniques incluent des temps de chargement ultra-rapides, une sécurité renforcée contre les cybermenaces et une compatibilité mobile parfaite. Chaque application est optimisée pour la fluidité.",
    icon: Zap
  },
  {
    title: "Référencement et Visibilité Locale",
    desc: "Nous intégrons une stratégie de référencement naturel (SEO) complexe pour positionner votre application en tête des résultats Google. Nous attirons un trafic qualifié et pertinent pour votre business.",
    icon: Search
  },
  {
    title: "Support Client Multilingue",
    desc: "Accompagnement dédié pour les entreprises à Marrakech, avec un support fluide en français, arabe et anglais. Idéal pour les secteurs du tourisme, de l'hôtellerie et du commerce local.",
    icon: MessageSquare
  },
  {
    title: "Sécurité et Maintenance Continue",
    desc: "Protection avancée pour votre application à Marrakech : audits techniques réguliers, protection contre les attaques et veille algorithmique pour anticiper les mises à jour des stores.",
    icon: ShieldCheck
  }
];

export const AppFeaturesGrid: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-4 md:px-8 lg:px-12 bg-[#F0F0F2] dark:bg-[#050505] transition-colors duration-500 border-t border-black/5 dark:border-white/5">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {FEATURES.map((feat, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 rounded-[35px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 hover:border-brand-red/30 transition-all duration-500 flex flex-col items-center text-center shadow-xl dark:shadow-none"
            >
              {/* Icon Container */}
              <div className="mb-6 w-14 h-14 rounded-2xl bg-brand-red/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-500 border border-brand-red/10">
                <feat.icon size={28} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-[13px] font-black text-black dark:text-white uppercase tracking-tight mb-4 group-hover:text-brand-red transition-colors leading-tight min-h-[40px] flex items-center">
                {feat.title}
              </h3>
              
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                {feat.desc}
              </p>
              
              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-red group-hover:w-full transition-all duration-700"></div>
              
              {/* Subtle Sparkle Decor */}
              <Sparkles className="absolute top-4 right-4 text-brand-red opacity-0 group-hover:opacity-30 transition-opacity" size={10} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
