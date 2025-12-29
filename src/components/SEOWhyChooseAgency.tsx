
import React from 'react';
import { 
  ArrowRight, CheckCircle2, Sparkles, Target, 
  Search, Zap, MousePointer2, Trophy, Globe,
  ShieldCheck, Activity, BarChart3
} from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export const SEOWhyChooseAgency: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden transition-colors duration-500">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand-red/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        
        {/* Main Bento Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* --- LEFT CARD: HERO & PILIERS (Span 4) --- */}
          <div className="lg:col-span-4 bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-12 border border-black/5 dark:border-white/10 shadow-2xl flex flex-col group hover:border-brand-red/20 transition-all duration-500">
            <h2 className="text-2xl md:text-3xl font-black text-brand-red mb-8 leading-tight">
              Pourquoi Choisir Notre Agence pour la Création de Site Internet à Marrakech ?
            </h2>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8">
              En tant que spécialistes du <strong className="text-black dark:text-white">référencement naturel Marrakech</strong>, nous optimisons votre visibilité en ligne grâce à des stratégies SEO sur mesure. Notre expertise en <strong className="text-black dark:text-white">référencement web</strong> combine techniques avancées et connaissance approfondie du marché marrakchi pour des résultats concrets. Que vous dirigiez un e-commerce, un hôtel, une PME ou une entreprise à Marrakech, nous développons des solutions adaptées à vos objectifs business.
            </p>

            <div className="space-y-6 mb-12">
               <h3 className="text-xs font-black uppercase tracking-widest text-black dark:text-white flex items-center gap-2">
                 <Target size={14} className="text-brand-red" /> Notre approche repose sur 3 piliers essentiels :
               </h3>
               
               <div className="space-y-4">
                  {[
                    { title: "Audit SEO Complet", desc: "Analyse approfondie de votre site et benchmark concurrentiel spécifique à Marrakech pour identifier toutes les opportunités d'optimisation." },
                    { title: "Optimisation Technique Pointue", desc: "Amélioration des performances (vitesse, mobile-first, sécurité) selon les dernières exigences des algorithmes Google." },
                    { title: "Stratégie de Contenu Localisée", desc: "Création de contenus optimisés ciblant précisément les intentions de recherche des internautes à Marrakech." }
                  ].map((piller, i) => (
                    <div key={i} className="group/item">
                       <h4 className="text-sm font-black text-black dark:text-white mb-1 group-hover/item:text-brand-red transition-colors">{piller.title}</h4>
                       <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{piller.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Stats Area */}
            <div className="mt-auto space-y-8">
               <div className="flex items-center gap-6 group/stat">
                  <div className="flex items-baseline">
                     <AnimatedCounter value={44} suffix="+" className="text-6xl font-black text-brand-red tracking-tighter" />
                  </div>
                  <div className="h-10 w-px bg-black/10 dark:bg-white/10"></div>
                  <p className="text-xs font-black uppercase tracking-widest text-black dark:text-white leading-tight">
                    projets livrés à <br/> Marrakech
                  </p>
               </div>

               <div className="flex items-center gap-6 group/stat">
                  <div className="flex items-baseline">
                     <AnimatedCounter value={1} suffix="K+" className="text-6xl font-black text-brand-red tracking-tighter" />
                  </div>
                  <div className="h-10 w-px bg-black/10 dark:bg-white/10"></div>
                  <p className="text-xs font-black uppercase tracking-widest text-black dark:text-white leading-tight">
                    sites optimisés <br/> dans le monde
                  </p>
               </div>

               <a href="#contact" className="group/btn inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-red text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 hover:bg-red-600 transition-all shadow-xl shadow-red-600/20">
                  Contactez-Nous ! <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
               </a>
            </div>
          </div>

          {/* --- MIDDLE CARD: METHODOLOGY (Span 4) --- */}
          <div className="lg:col-span-4 bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-12 border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden group hover:border-brand-red/20 transition-all duration-500">
            <span className="absolute top-8 right-12 text-6xl font-black text-black/5 dark:text-white/5 select-none font-mono">01</span>
            
            <h3 className="text-xl md:text-2xl font-black text-black dark:text-white mb-10 pr-12 leading-tight">
               Notre Méthodologie de Référencement Naturel à Marrakech
            </h3>

            <div className="space-y-10">
               {[
                 { id: "1", title: "Audit SEO Complet", desc: "Nous analysons en profondeur votre secteur d'activité, votre positionnement concurrentiel à Marrakech et le comportement de votre audience cible. Ce diagnostic stratégique nous permet d'établir un plan d'action SEO parfaitement aligné avec vos objectifs commerciaux." },
                 { id: "2", title: "Optimisation Technique Avancée", desc: "Notre équipe d'experts intervient sur tous les aspects techniques : amélioration des temps de chargement, optimisation mobile, architecture du site et balisage sémantique. Chaque modification est pensée pour renforcer votre positionnement naturel." },
                 { id: "3", title: "Stratégie de Contenu Performante", desc: "Nous développons des contenus optimisés ciblant précisément les intentions de recherche de votre audience à Marrakech. Notre approche combine pertinence sémantique, optimisation on-page et maillage interne stratégique." }
               ].map((step, i) => (
                  <div key={i} className="relative pl-10 border-l-2 border-brand-red/20 group-hover:border-brand-red transition-colors duration-700">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-red shadow-[0_0_10px_rgba(255,0,0,0.5)]"></div>
                     <h4 className="text-base font-black text-black dark:text-white mb-2">{step.id}. {step.title}</h4>
                     <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
               ))}
            </div>

            <div className="mt-12 pt-10 border-t border-black/5 dark:border-white/5">
               <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 italic leading-relaxed">
                  Le résultat ? Une <strong className="text-black dark:text-white">visibilité accrue</strong> sur les moteurs de recherche, un <strong className="text-black dark:text-white">trafic qualifié</strong> en constante progression et des <strong className="text-black dark:text-white">conversions optimisées</strong> pour transformer vos visiteurs en clients fidèles.
               </p>
               
               <div className="space-y-3">
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-2">Nos engagements :</p>
                  {[
                    "Techniques 100% conformes aux guidelines Google",
                    "Transparence totale avec rapports mensuels détaillés",
                    "Résultats mesurables et durables",
                    "Accompagnement personnalisé à chaque étape"
                  ].map((e, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <CheckCircle2 size={12} className="text-brand-red shrink-0" />
                       <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400">{e}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* --- RIGHT CARD: EXPERTISE (Span 4) --- */}
          <div className="lg:col-span-4 bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-12 border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden group hover:border-brand-red/20 transition-all duration-500">
            <span className="absolute top-8 right-12 text-6xl font-black text-black/5 dark:text-white/5 select-none font-mono">02</span>
            
            <h3 className="text-xl md:text-2xl font-black text-black dark:text-white mb-10 pr-12 leading-tight">
               Notre Expertise en Référencement Naturel à Marrakech
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-10">
              Notre approche SEO va bien au-delà des techniques basiques. En tant qu'agence spécialisée en <strong className="text-black dark:text-white">référencement naturel Marrakech</strong>, nous intégrons l'optimisation dès la conception de votre stratégie digitale.
            </p>

            <div className="space-y-8">
               <div className="p-6 rounded-[30px] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 group-hover:bg-white dark:group-hover:bg-black transition-colors duration-500">
                  <h4 className="text-base font-black text-black dark:text-white mb-3">Optimisation Technique Avancée</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                     Nous mettons en place une architecture technique parfaitement adaptée aux algorithmes des moteurs de recherche. Chaque élément est pensé pour votre secteur d'activité spécifique à Marrakech et les comportements de vos clients potentiels.
                  </p>
               </div>

               <div className="space-y-4">
                  <h4 className="text-base font-black text-black dark:text-white">Stratégie SEO Complète</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Nous déployons une méthodologie exhaustive comprenant :</p>
                  <ul className="space-y-3">
                     {[
                       "Analyse sémantique approfondie des mots-clés stratégiques",
                       "Optimisation on-page technique et éditoriale",
                       "Maillage interne intelligent boostant l'autorité",
                       "Respect strict des standards Google (Core Web Vitals, E-A-T)"
                     ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0"></div>
                           <span className="text-[11px] font-bold text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className="mt-12 pt-10 border-t border-black/5 dark:border-white/5">
               <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 font-medium leading-relaxed">
                  Le résultat ? Un <strong className="text-black dark:text-white italic">référencement naturel Marrakech</strong> performant qui vous permet de :
               </p>
               
               <div className="grid grid-cols-1 gap-4 mb-10">
                  {[
                    { icon: Trophy, text: "Atteindre les premières positions sur Google" },
                    { icon: Zap, text: "Générer un trafic qualifié et convertissant" },
                    { icon: Globe, text: "Bâtir une image de marque digitale forte et crédible" }
                  ].map((r, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 group-hover:border-brand-red/20 transition-all duration-300">
                       <r.icon size={16} className="text-brand-red" />
                       <span className="text-[11px] font-black uppercase text-black dark:text-white">{r.text}</span>
                    </div>
                  ))}
               </div>

               <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-3">Nos engagements qualité :</p>
                  {[
                    "Techniques 100% conformes aux guidelines Google",
                    "Transparence totale via des rapports détaillés",
                    "Résultats mesurables et durables",
                    "Accompagnement personnalisé à chaque étape"
                  ].map((q, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-gray-500 dark:text-gray-400">
                       <span className="text-brand-red">✓</span> {q}
                    </div>
                  ))}
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
