
import React from 'react';
import { Cpu, Code2, Globe, Zap, ShieldCheck, Database, Layers, Smartphone } from 'lucide-react';

const TECH_CARDS = [
  {
    title: "Moteurs de Performance",
    desc: "Nous utilisons React Native et Flutter pour des performances quasi-natives avec un code source unique, réduisant les délais de 40%.",
    icon: Smartphone,
    size: "lg:col-span-8",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    title: "Cloud & Scalabilité",
    desc: "Infrastructures AWS et Google Cloud auto-scalables pour supporter des milliers d'utilisateurs simultanés.",
    icon: Database,
    size: "lg:col-span-4",
    tags: ["AWS", "Firebase"]
  },
  {
    title: "Clean Architecture",
    desc: "Code modulaire et maintenable suivant les principes SOLID pour une évolution sans limite de votre application.",
    icon: Layers,
    size: "lg:col-span-4",
    tags: ["SOLID", "Design Patterns"]
  },
  {
    title: "Sécurité de Niveau Bancaire",
    desc: "Chiffrement AES-256, authentification biométrique et conformité RGPD Maroc intégrée nativement.",
    icon: ShieldCheck,
    size: "lg:col-span-8",
    tags: ["AES-256", "FaceID", "OAuth 2.0"]
  }
];

export const AppTechEcosystem: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-4 md:px-8 lg:px-12 bg-transparent overflow-hidden">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 mb-6">
              <Cpu size={14} className="text-brand-red animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">Le Hub Technologique</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter leading-none uppercase">
              L'Écosystème <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-black dark:from-white dark:to-gray-500">Technique GDC</span>
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-medium max-w-sm text-right leading-relaxed">
            Nous n'utilisons que des technologies de pointe pour garantir que votre application reste compétitive pendant des années.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {TECH_CARDS.map((card, idx) => (
            <div 
              key={idx} 
              className={`${card.size} group relative p-8 md:p-10 rounded-[40px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 hover:border-brand-red/30 transition-all duration-500 shadow-xl dark:shadow-none overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                  <card.icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-black text-black dark:text-white mb-4 group-hover:text-brand-red transition-colors">{card.title}</h3>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-8 flex-1">
                  {card.desc}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-black/5 dark:border-white/5">
                  {card.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-black/5 dark:bg-white/5 text-[9px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 border border-black/5 dark:border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
