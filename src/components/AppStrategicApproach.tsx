"use client"

import React from 'react';
import { Shield, Target, Zap, Rocket, CheckCircle2 } from 'lucide-react';

export const AppStrategicApproach: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#000000] transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        
        {/* --- HEADER BLOCK (Split Style) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 items-start">
           <div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-black dark:text-white uppercase">
                Vous Rêvez d'une <span className="text-brand-red">Application Mobile</span> Qui Dépasse Vos Attentes ? <br/>
                <span className="text-gray-400 dark:text-gray-600">Un Expert à Marrakech Sur Mesure.</span>
              </h2>
           </div>
           <div className="lg:pt-4">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-6">
                Chez <strong className="text-black dark:text-white">Group Digital Concept</strong>, nous ne faisons pas simplement du code — nous créons des stratégies gagnantes. Votre application mobile est votre outil de conversion le plus performant et votre meilleur atout pour dominer votre marché local et international.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed italic">
                Avec notre expertise, nous transformons vos ambitions en résultats concrets, alliant techniques avancées, analyse data et stratégie locale de pointe.
              </p>
           </div>
        </div>

        {/* --- THE 4 BOXES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Box 1: Philosophie */}
            <div className="p-8 md:p-12 rounded-[40px] bg-white dark:bg-[#080808] border border-black/5 dark:border-brand-red/20 shadow-xl flex flex-col group">
                <h3 className="text-xl md:text-2xl font-black text-brand-red uppercase mb-8 flex items-center gap-3">
                    <Shield size={22} /> Collaboration & Excellence : Notre Philosophie
                </h3>
                <div className="space-y-8 flex-1">
                    <div>
                        <h4 className="text-sm font-bold text-black dark:text-white mb-4 uppercase tracking-widest border-l-2 border-brand-red pl-4">Notre Approche</h4>
                        <ul className="space-y-3 pl-4">
                            <li className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">• Analyse approfondie de vos objectifs business</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">• Stratégie de développement adaptée à votre secteur</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">• Transparence totale à chaque étape</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-black dark:text-white mb-4 uppercase tracking-widest border-l-2 border-brand-red pl-4">Nos Engagements</h4>
                        <ul className="space-y-3 pl-4">
                            <li className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">• Premières maquettes fonctionnelles sous 3 semaines</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">• Reporting mensuel sur les performances</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">• Développement 100% conforme (Apple/Google)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Box 2: Excellence Digitale */}
            <div className="p-8 md:p-12 rounded-[40px] bg-white dark:bg-[#080808] border border-black/5 dark:border-brand-red/20 shadow-xl flex flex-col group">
                <h3 className="text-xl md:text-2xl font-black text-brand-red uppercase mb-8 flex items-center gap-3">
                    <Zap size={22} /> Performance Technique : L'Excellence Digitale
                </h3>
                <div className="space-y-8 flex-1">
                    <div>
                        <h4 className="text-sm font-bold text-black dark:text-white mb-4 uppercase tracking-widest border-l-2 border-brand-red pl-4">Optimisations Clés</h4>
                        <ul className="space-y-3 pl-4">
                            <li className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">• Vitesse ultrarapide et temps de chargement optimisés</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">• UX stratégique centrée sur les comportements locaux</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">• Compatibilité totale Mobile-First Design</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-black dark:text-white mb-4 uppercase tracking-widest border-l-2 border-brand-red pl-4">Stratégie Avancée</h4>
                        <ul className="space-y-3 pl-4">
                            <li className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">• Audit technique complet pré-développement</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">• Positionnement ASO (App Store Optimization)</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">• Intégration de solutions locales (CMI)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Box 3: Engagement */}
            <div className="p-8 md:p-12 rounded-[40px] bg-white dark:bg-[#080808] border border-black/5 dark:border-brand-red/20 shadow-xl flex flex-col group">
                <h3 className="text-xl md:text-2xl font-black text-brand-red uppercase mb-8 flex items-center gap-3">
                    <Target size={22} /> Votre Succès, Notre Engagement
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 font-medium mb-8">
                   Notre accompagnement va bien au-delà du simple développement. Nous devenons votre partenaire tech engagé.
                </p>
                <div className="space-y-6 flex-1">
                   <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <h4 className="text-xs font-black uppercase text-brand-red mb-3">Suivi Post-Lancement</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium italic">Optimisations mensuelles basées sur les analytics réels de vos utilisateurs.</p>
                   </div>
                   <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5">
                      <h4 className="text-xs font-black uppercase text-brand-red mb-3">Pourquoi Nous ?</h4>
                      <ul className="space-y-2">
                        <li className="text-xs font-bold text-gray-600 dark:text-gray-300 flex items-center gap-2"><CheckCircle2 size={12} className="text-brand-red" /> Un partenaire tech réactif et proactif</li>
                        <li className="text-xs font-bold text-gray-600 dark:text-gray-300 flex items-center gap-2"><CheckCircle2 size={12} className="text-brand-red" /> Maîtrise parfaite des spécificités locales</li>
                      </ul>
                   </div>
                </div>
            </div>

            {/* Box 4: Performe */}
            <div className="p-8 md:p-12 rounded-[40px] bg-white dark:bg-[#080808] border border-black/5 dark:border-brand-red/20 shadow-xl flex flex-col group">
                <h3 className="text-xl md:text-2xl font-black text-brand-red uppercase mb-8 flex items-center gap-3">
                    <Rocket size={22} /> Une Application Mobile Qui Performe
                </h3>
                <div className="space-y-5 flex-1">
                    {[
                        "Benchmark concurrentiel approfondi",
                        "Architecture technique scalable pour le futur",
                        "Reporting transparent sur les KPI clés (sessions)",
                        "Approche 100% locale (langues, design)",
                    ].map((t, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-black/5 dark:border-white/5 group-hover:bg-brand-red/5 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{t}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-10 pt-8 border-t border-black/5 dark:border-white/5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Group Digital Concept — Agence App Marrakech</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
