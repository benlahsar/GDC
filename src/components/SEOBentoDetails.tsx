
import React from 'react';
import { 
  HeartHandshake, Target, Zap, TrendingUp, 
  CheckCircle2, Sparkles, MessageSquare, 
  ShieldCheck, Rocket, BarChart3, Globe, MapPin, ArrowRight
} from 'lucide-react';

export const SEOBentoDetails: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden transition-colors duration-500">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-blue-600/[0.02] rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        
        {/* --- HEADER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
           <div className="opacity-0 animate-enter-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] text-black dark:text-white uppercase mb-8">
                Vous Rêvez d'un <br/>
                <span className="text-brand-red">Référencement Naturel</span> <br/>
                Qui Dépasse Vos Attentes ?
              </h2>
              <div className="w-24 h-1.5 bg-brand-red rounded-full"></div>
           </div>
           <div className="opacity-0 animate-enter-right delay-200">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-6">
                Chez <strong className="text-black dark:text-white">Group Digital Concept</strong>, nous ne créons pas simplement des <strong className="text-black dark:text-white">sites web</strong> – nous concevons des <strong className="text-brand-red">expériences digitales uniques</strong>. Votre site est bien plus qu'une vitrine en ligne : c'est votre identité numérique, votre outil de conversion performant et votre avantage concurrentiel pour conquérir de nouveaux marchés.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-500 leading-relaxed italic">
                Avec notre expertise en <strong className="text-black dark:text-white">création de site web à Marrakech</strong>, nous transformons vos ambitions en une réalité digitale, alliant design sophistiqué, technologies performantes et stratégie SEO intégrée.
              </p>
           </div>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* 1. Notre Philosophie (Left Col - Large) */}
            <div className="lg:col-span-7 group relative overflow-hidden rounded-[40px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 shadow-2xl hover:border-brand-red/20 transition-all duration-500 opacity-0 animate-enter-left delay-300">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-10">
                        <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:scale-110 transition-transform duration-500">
                            <HeartHandshake size={28} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-red bg-brand-red/5 px-3 py-1 rounded-full border border-brand-red/10">Philosophie</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white mb-10 leading-tight">
                        Collaboration & Excellence : <br/><span className="text-brand-red">Notre Philosophie</span>
                    </h3>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2 border-b border-black/5 dark:border-white/5 pb-2">Notre Approche</h4>
                            <ul className="space-y-4">
                                {["Analyse approfondie de vos objectifs business", "Stratégie SEO adaptée à votre secteur d'activité", "Transparence totale à chaque étape"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-400 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2 border-b border-black/5 dark:border-white/5 pb-2">Nos Engagements</h4>
                            <ul className="space-y-4">
                                {["Résultats visibles sous 3 mois", "Communication claire et rapports mensuels", "Techniques 100% conformes aux guidelines Google"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                                        <CheckCircle2 size={16} className="text-brand-red shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-10 border-t border-black/5 dark:border-white/5">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-red mb-6">Votre Avantage</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Acquisition", text: "Votre meilleur canal d'acquisition client" },
                                { title: "Durable", text: "Un avantage concurrentiel durable" },
                                { title: "Visibilité", text: "La clé de votre visibilité digitale" }
                            ].map((item, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                                    <p className="text-xs font-bold leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Votre Succès (Right Col - Tall) */}
            <div className="lg:col-span-5 group relative overflow-hidden rounded-[40px] bg-black text-white border border-white/10 shadow-2xl hover:border-brand-red/30 transition-all duration-500 opacity-0 animate-enter-right delay-400">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
                <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-10">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-brand-red transition-all duration-500">
                            <Target size={28} className="text-white" />
                        </div>
                        <Sparkles className="text-brand-red animate-pulse" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black mb-8 text-brand-red">Votre Succès, <br/>Notre Engagement</h3>
                    
                    <p className="text-base font-medium text-gray-300 leading-relaxed mb-10">
                        Notre accompagnement va bien au-delà du simple positionnement. Nous bâtissons des <strong className="text-white">stratégies gagnantes</strong>.
                    </p>

                    <div className="space-y-10 flex-1">
                        <div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-6 border-l-2 border-brand-red pl-4">Suivi Continu</h4>
                            <ul className="space-y-4">
                                {["Optimisations mensuelles incluses", "Analyses techniques régulières", "Conseil stratégique adapté à votre marché"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-400 group-hover:text-white transition-colors">
                                        <div className="w-1 h-1 rounded-full bg-brand-red"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-6 border-l-2 border-brand-red pl-4">Pourquoi Nous Choisir ?</h4>
                            <ul className="space-y-4">
                                {["Un partenaire SEO engagé dans votre croissance", "Des résultats durables et mesurables", "Une connaissance pointue du marché marrakchi"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-400 group-hover:text-white transition-colors">
                                        <CheckCircle2 size={16} className="text-brand-red" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Chez <strong className="text-white">Group Digital Concept</strong>, votre visibilité est bien plus qu’un classement : c’est votre crédibilité numérique, votre canal de conversion performant et votre atout pour dominer votre marché.
                        </p>
                    </div>
                </div>
            </div>

            {/* 3. Performance SEO (Left Col - Bottom) */}
            <div className="lg:col-span-6 group relative overflow-hidden rounded-[40px] bg-[#F5F5F7] dark:bg-[#080808] border border-black/5 dark:border-white/10 shadow-xl hover:shadow-2xl hover:border-brand-red/20 transition-all duration-500 opacity-0 animate-enter-bottom delay-500">
                <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:rotate-12 transition-transform">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-black dark:text-white">Performance SEO & Résultats : <br/><span className="text-brand-red">L'Excellence Digitale</span></h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 border-b border-black/5 dark:border-white/10 pb-2">Optimisations Clés</h4>
                            <ul className="space-y-3">
                                {[
                                    { t: "Vitesse ultrarapide", s: "Core Web Vitals optimisés" },
                                    { t: "Contenu stratégique", s: "Ciblage sémantique précis" },
                                    { t: "Compatibilité totale", s: "Mobile-first indexing" }
                                ].map((item, i) => (
                                    <li key={i} className="flex flex-col">
                                        <span className="text-sm font-bold text-black dark:text-white">• {item.t}</span>
                                        <span className="text-[10px] font-medium text-gray-500 uppercase ml-3 tracking-wider">{item.s}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 border-b border-black/5 dark:border-white/10 pb-2">Stratégie Avancée</h4>
                            <ul className="space-y-3">
                                {["Audit technique complet dès le départ", "Positionnement sur vos mots-clés stratégiques", "Attraction de trafic qualifié et convertible"].map((item, i) => (
                                    <li key={i} className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                        <span className="text-brand-red mt-1">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                         <span className="text-xs font-black uppercase tracking-widest text-gray-500">Résultat :</span>
                         <div className="px-6 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-widest shadow-lg">
                            Domination Marché
                         </div>
                    </div>
                </div>
            </div>

            {/* 4. Référencement Naturel (Right Col - Bottom) */}
            <div className="lg:col-span-6 group relative overflow-hidden rounded-[40px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 shadow-xl hover:shadow-2xl hover:border-brand-red/20 transition-all duration-500 opacity-0 animate-enter-bottom delay-600">
                <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-black dark:text-white">Référencement Naturel à Marrakech <br/><span className="text-brand-red">Qui Performe</span></h3>
                    </div>

                    <div className="space-y-8 flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: BarChart3, t: "Analyse concurrentielle", s: "Benchmarking précis" },
                                { icon: Globe, t: "Netlinking qualitatif", s: "Autorité de domaine" },
                                { icon: ShieldCheck, t: "Reporting transparent", s: "Suivi des KPI" },
                                { icon: MapPin, t: "Approche locale", s: "Ciblage Marrakech" }
                            ].map((item, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 group-hover:bg-white dark:group-hover:bg-[#111] transition-all">
                                    <div className="flex items-center gap-3 mb-1">
                                        <item.icon size={14} className="text-brand-red" />
                                        <span className="text-sm font-bold text-black dark:text-white">{item.t}</span>
                                    </div>
                                    <span className="text-[9px] font-black uppercase text-gray-500 ml-6 tracking-widest">{item.s}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-brand-red/5 border border-brand-red/20 p-5 rounded-3xl">
                            <p className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-relaxed italic">
                                "Un référencement qui convertit immédiatement et performe durablement. Bâtissez une image de marque digitale forte et crédible."
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                         <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">GDC Elite Expertise</span>
                         <a href="#contact" className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-red-500/30">
                            <ArrowRight size={18} />
                         </a>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};
