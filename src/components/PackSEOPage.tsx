import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, ArrowRight, Zap, Target, Rocket, Search, Globe, Layout, Shield, Camera, MessageSquare, Briefcase, Award, Palette, CheckCircle2, ChevronRight, Check, BarChart3, Cpu, Lightbulb, MoveDown } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

const BENTO_SERVICES = [
  { label: "Analyse de Performance", span: "md:col-span-2 md:row-span-1", icon: Zap, color: "text-brand-red" },
  { label: "Sites E-commerce", span: "md:col-span-1 md:row-span-2", icon: Globe, color: "text-blue-500" },
  { label: "Sites Vitrine", span: "md:col-span-1 md:row-span-1", icon: Layout, color: "text-purple-500" },
  { label: "Création de Sites Web", span: "md:col-span-2 md:row-span-2", icon: Search, color: "text-brand-red" },
  { label: "Applications Mobiles", span: "md:col-span-1 md:row-span-1", icon: Shield, color: "text-emerald-500" },
  { label: "Photographie Professionnelle", span: "md:col-span-2 md:row-span-1", icon: Camera, color: "text-brand-red" },
  { label: "Vidéographie", span: "md:col-span-1 md:row-span-1", icon: Target, color: "text-orange-500" },
  { label: "Création de Contenu Visuel", span: "md:col-span-1 md:row-span-1", icon: Palette, color: "text-pink-500" },
  { label: "Publicité en ligne", span: "md:col-span-1 md:row-span-1", icon: Zap, color: "text-yellow-500" },
  { label: "Solutions ERP", span: "md:col-span-1 md:row-span-1", icon: Briefcase, color: "text-blue-600" },
  { label: "Audits Digitaux", span: "md:col-span-2 md:row-span-1", icon: Search, color: "text-brand-red" },
  { label: "Marketing Digital", span: "md:col-span-1 md:row-span-1", icon: Rocket, color: "text-brand-red" },
  { label: "Gestion de l'image de marque", span: "md:col-span-1 md:row-span-1", icon: Award, color: "text-purple-600" },
  { label: "Développement de Logiciels", span: "md:col-span-2 md:row-span-1", icon: Globe, color: "text-brand-red" },
  { label: "Suivi de Projets", span: "md:col-span-1 md:row-span-1", icon: Search, color: "text-gray-500" },
  { label: "SEO", span: "md:col-span-1 md:row-span-1", icon: Target, color: "text-brand-red" },
];

const VALUE_PILLARS = [
  {
    id: "01",
    title: "Sur Mesure",
    desc: "Nous offrons des solutions adaptées à vos besoins spécifiques, pour garantir des résultats optimaux."
  },
  {
    id: "02",
    title: "Innovantes",
    desc: "Nos services intègrent les dernières technologies et stratégies pour rester à la pointe de l'innovation."
  },
  {
    id: "03",
    title: "Efficaces",
    desc: "Nous assurons des solutions concrètes et performantes qui génèrent des résultats tangibles pour votre entreprise."
  }
];

const SEO_OPTIMIZATION_FEATURES = [
  "Analyse et optimisation de mots-clés",
  "Optimisation on-page",
  "Techniques SEO avancées",
  "Contenu web enrichi et ciblé",
  "SEO local",
  "Stratégies de backlinking",
  "Rapports détaillés d'analyse SEO"
];

const ADVANTAGES_FEATURES = [
  "Directeur artistique dédié à chaque projet",
  "Droits de propriété exclusifs",
  "Engagement de satisfaction totale",
  "Garantie de conception 100% unique",
  "Support disponible 24/7",
  "Service après-vente exemplaire"
];

const SEO_PACKS = [
  {
    name: "PACK STARTER",
    price: "58",
    features: [
      "Audit SEO : technique, concurrentiel et positionnement",
      "Soumission dans les moteurs de recherche principaux Google, Bing, Yahoo",
      "Ciblage des mots clés et optimisation des métas tags pour 1 page",
      "Création du sitemap pour Google",
      "Amélioration du positionnement sur vos mots clés",
      "Livraison du service dans les 24H",
      "Pas d'engagement",
      "Prestation effectuée 1 seule fois / mois"
    ],
    highlight: true 
  },
  {
    name: "PACK BRONZE",
    price: "87",
    features: [
      "Audit SEO : technique, concurrentiel et positionnement",
      "Soumission dans les moteurs de recherche principaux Google, Bing, Yahoo",
      "Ciblage des mots clés et optimisation des métas tags pour 2 pages",
      "Création du sitemap pour Google",
      "Amélioration du positionnement sur vos mots clés",
      "Livraison du service dans les 24H",
      "Pas d'engagement",
      "Prestation effectuée 1 seule fois / mois"
    ]
  },
  {
    name: "PACK SILVER",
    price: "137",
    features: [
      "Audit SEO : technique, concurrentiel et positionnement",
      "Soumission dans les moteurs de recherche principaux Google, Bing, Yahoo",
      "Contrôle des facteurs bloquants",
      "Ciblage des mots clés et optimisation des métas tags pour 3 pages",
      "Création du sitemap pour Google",
      "Amélioration du positionnement sur vos mots clés",
      "Création de 180 backlinks de qualité",
      "Livraison du service dans les 48H",
      "Pas d'engagement",
      "Prestation effectuée 1 seule fois / mois"
    ]
  },
  {
    name: "PACK GOLD",
    price: "196",
    features: [
      "Audit SEO : technique, concurrentiel et positionnement",
      "Soumission dans les moteurs de recherche principaux Google, Bing, Yahoo",
      "Contrôle des facteurs bloquants",
      "Ciblage des mots clés et optimisation des métas tags pour 5 pages",
      "Création du sitemap pour Google",
      "Amélioration du positionnement sur vos mots clés",
      "Création de 250 backlinks de qualité",
      "Livraison du service dans les 48H",
      "Pas d'engagement",
      "Prestation effectuée 1 seule fois / mois"
    ]
  },
  {
    name: "PACK PLATINIUM",
    price: "235",
    features: [
      "Audit SEO : technique, concurrentiel et positionnement",
      "Soumission dans les moteurs de recherche principaux Google, Bing, Yahoo",
      "Contrôle des facteurs bloquants",
      "Ciblage des mots clés et optimisation des métas tags pour 5 pages",
      "Création du sitemap pour Google",
      "Amélioration du positionnement sur vos mots clés",
      "Création de 330 backlinks de qualité",
      "Livraison du service dans les 72H",
      "Pas d'engagement",
      "Prestation effectuée 1 seule fois / mois"
    ]
  },
  {
    name: "PACK TITANIUM",
    price: "480",
    features: [
      "Audit SEO : technique, concurrentiel et positionnement",
      "Soumission dans les moteurs de recherche principaux Google, Bing, Yahoo",
      "Contrôle des facteurs bloquants",
      "Ciblage des mots clés et optimisation des métas tags pour 10 pages",
      "Création du sitemap pour Google",
      "Amélioration du positionnement sur vos mots clés",
      "Création de 530 backlinks de qualité",
      "Rédaction d'un article optimisé SEO de 300 mots",
      "Livraison du service dans les 96H",
      "Pas d'engagement",
      "Prestation effectuée 1 seule fois / mois"
    ]
  }
];

export const PackSEOPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    sectionRef.current.style.setProperty('--mouse-x', `${x}px`);
    sectionRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="bg-[#F4F4F5] dark:bg-[#020202] min-h-screen transition-colors duration-700 overflow-x-hidden font-sans relative selection:bg-brand-red selection:text-white pb-0">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-brand-red/[0.04] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-purple-600/[0.02] rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#F4F4F5_90%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#020202_90%)] transition-colors duration-700"></div>
      </div>

      {/* --- UNIFIED BENTO CONTAINER (Hero + Values) --- */}
      <div 
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="relative bg-white dark:bg-black transition-colors duration-700 overflow-hidden"
      >
        {/* Noise overlay for premium texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay pointer-events-none"></div>

        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex flex-col items-center pt-48 pb-20 px-4 md:px-8 z-10">
          <div className="max-w-[1700px] w-full mx-auto">
              <div className={`text-center mb-24 ${isMobile ? '' : 'opacity-0 animate-fade-in-up'}`}>
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black dark:text-white tracking-tighter leading-none uppercase">
                      Découvrez Nos <span className="text-brand-red italic">Pack SEO</span>
                  </h1>
              </div>

              {/* Bento Grid Layout */}
              <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6 auto-rows-fr ${isMobile ? '' : 'opacity-0 animate-fade-in-up delay-200'}`}>
                  {BENTO_SERVICES.map((item, i) => (
                      <div 
                          key={i}
                          className={`
                              ${item.span} 
                              rounded-[2.5rem] p-6 md:p-8
                              bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl 
                              border border-black/5 dark:border-white/10
                              flex flex-col items-center justify-center text-center
                              transition-all duration-700
                              group cursor-pointer min-h-[160px]
                              ${isMobile ? 'shadow-sm' : 'hover:scale-[1.02] hover:border-brand-red/40 hover:shadow-2xl hover:shadow-brand-red/5'}
                          `}
                      >
                          <div className="relative flex flex-col items-center gap-4">
                             <div className={`w-12 h-12 rounded-2xl bg-white/50 dark:bg-white/5 flex items-center justify-center border border-black/5 dark:border-white/5 transition-all duration-500 ${isMobile ? '' : 'group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white'}`}>
                                <item.icon size={24} className={`${item.color} ${isMobile ? '' : 'group-hover:text-white'} transition-colors`} />
                             </div>
                             <span className="text-xs md:text-sm font-black text-black dark:text-white uppercase leading-tight tracking-tight">
                                  {item.label}
                             </span>
                          </div>
                          {/* Interactive Dot */}
                          {!isMobile && <div className="absolute top-4 right-6 w-1.5 h-1.5 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>}
                      </div>
                  ))}
              </div>
          </div>
        </section>

        {/* --- VALUE PILLARS SECTION --- */}
        <section className="relative w-full z-20 py-32 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto border-t border-black/5 dark:border-white/5">
            {/* Dynamic Background Glows for this sub-area */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-red/[0.05] rounded-full blur-[120px] pointer-events-none transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/[0.05] rounded-full blur-[100px] pointer-events-none transition-colors"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                {VALUE_PILLARS.map((pillar, i) => (
                    <div key={i} className="group relative">
                        <div 
                          className={`
                              relative flex flex-col gap-6 p-10 md:p-14 
                              rounded-[48px] bg-white/70 dark:bg-white/[0.03] backdrop-blur-2xl 
                              border border-black/10 dark:border-white/10
                              transition-all duration-700 ease-out h-full
                              shadow-lg dark:shadow-none
                              ${isMobile ? 'opacity-100' : 'group-hover:border-brand-red/30 opacity-0 animate-fade-in-up'}
                          `}
                          style={!isMobile ? { animationDelay: `${400 + i * 200}ms` } : {}}
                        >
                            {/* Card Spotlight Effect */}
                            {!isMobile && <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[48px] spotlight-overlay"></div>}

                            <div className="relative z-20 flex justify-between items-start mb-4">
                                <span className={`text-6xl md:text-8xl font-black text-black/[0.05] dark:text-white/5 select-none font-mono tracking-tighter transition-colors duration-500 ${isMobile ? '' : 'group-hover:text-brand-red/10'}`}>
                                    {pillar.id}
                                </span>
                                <Sparkles className={`text-brand-red opacity-0 transition-opacity duration-500 ${isMobile ? '' : 'group-hover:opacity-40 animate-pulse'}`} size={24} />
                            </div>

                            <div className="space-y-6 relative z-20">
                                <h3 className={`text-4xl md:text-5xl font-black text-black dark:text-white tracking-tighter uppercase leading-none transition-colors duration-500 ${isMobile ? '' : 'group-hover:text-brand-red'}`}>
                                    {pillar.title}
                                </h3>
                                <div className={`w-12 h-1 bg-black/20 dark:bg-white/20 rounded-full transition-all duration-500 ${isMobile ? '' : 'group-hover:w-24 group-hover:bg-brand-red'}`}></div>
                                <p className={`text-lg md:text-xl font-medium leading-relaxed max-w-sm transition-colors duration-500 ${isMobile ? 'text-gray-600 dark:text-gray-400' : 'text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white/90'}`}>
                                    {pillar.desc}
                                </p>
                            </div>
                            
                            <div className={`mt-8 pt-8 border-t border-black/5 dark:border-white/5 flex items-center justify-between transition-opacity duration-500 ${isMobile ? 'opacity-100' : 'opacity-30 group-hover:opacity-100'}`}>
                              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black dark:text-white">GDC Excellence</span>
                              <div className="flex gap-1">
                                  {[1,2].map(d => <div key={d} className="w-1 h-1 rounded-full bg-brand-red"></div>)}
                              </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
      </div>

      {/* --- TYPOGRAPHIC DIVIDER MARQUEE --- */}
      <div className="relative w-full overflow-hidden py-10 md:py-20 bg-black border-y border-white/5 whitespace-nowrap z-20">
          <div className={`flex items-center w-max will-change-transform ${isMobile ? 'animate-[scroll_40s_linear_infinite]' : 'animate-scroll'}`}>
              {[...Array(6)].map((_, i) => (
                  <span key={i} className="text-5xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter mx-10 md:mx-20 flex items-center">
                      Group Digital Concept <span className="text-brand-red ml-4 md:ml-10">_</span>
                  </span>
              ))}
          </div>
      </div>

      {/* --- SEO PRICING SECTION --- */}
      <section className="relative py-32 md:py-48 px-4 md:px-8 lg:px-12 z-20">
          <div className="max-w-[1600px] mx-auto">
              {/* Header */}
              <div className={`text-center mb-24 ${isMobile ? '' : 'opacity-0 animate-fade-in-up'}`}>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black dark:text-white tracking-tighter leading-none uppercase mb-6">
                    Nos packs prédéfinis de <br className="hidden md:block" />
                    référencement naturel <span className="text-brand-red">SEO</span>
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-bold uppercase tracking-[0.2em] mb-4">
                    Optez pour notre agence de communication et améliorer le classement de votre 
                    <span className="text-brand-red block md:inline md:ml-3">site web</span>
                  </p>
              </div>

              {/* Grid of Packs */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {SEO_PACKS.map((pack, idx) => (
                      <div 
                        key={idx}
                        className={`
                            relative group p-8 md:p-10 rounded-[40px] overflow-hidden
                            border transition-all duration-700 h-full flex flex-col
                            ${pack.highlight 
                                ? 'bg-black text-white dark:bg-white dark:text-black border-transparent shadow-xl' 
                                : 'bg-white/60 dark:bg-white/5 backdrop-blur-xl border-black/5 dark:border-white/10 text-black dark:text-white shadow-xl'
                            }
                            ${isMobile ? 'opacity-100' : (pack.highlight ? 'shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_40px_100px_-20px_rgba(255,255,255,0.1)]' : 'hover:shadow-2xl opacity-0 animate-fade-in-up')}
                        `}
                        style={!isMobile ? { animationDelay: `${200 + idx * 100}ms` } : {}}
                      >
                          <div className={`absolute bottom-[-10%] right-[-10%] w-64 h-64 opacity-20 dark:opacity-40 pointer-events-none transition-transform duration-[3s] ${isMobile ? '' : 'group-hover:scale-110 group-hover:rotate-12'}`}>
                               <img 
                                 src="https://groupdigitalconcept.com/wp-content/uploads/2025/12/3d-purple-swirl.png" 
                                 alt="" 
                                 className="w-full h-full object-contain filter hue-rotate-[250deg]" 
                                 onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                               />
                               <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/40 to-transparent blur-3xl`}></div>
                          </div>

                          <div className="relative z-10 flex flex-col h-full">
                              <div className="mb-8">
                                  <div className={`inline-flex items-center px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-widest mb-6 ${pack.highlight ? 'bg-white/10 dark:bg-black/5 border-white/20 dark:border-black/10' : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10'}`}>
                                      {pack.name}
                                  </div>
                                  <div className="flex flex-col">
                                      <span className="text-sm font-bold opacity-70">à seulement</span>
                                      <div className="flex items-baseline gap-2">
                                          <span className="text-4xl font-black">€</span>
                                          <span className="text-7xl md:text-8xl font-black tracking-tighter">{pack.price}</span>
                                          <div className="flex flex-col text-[10px] font-black uppercase leading-tight opacity-80">
                                              <span>HT</span>
                                              <span>/par mois</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div className={`h-px w-full mb-10 ${pack.highlight ? 'bg-white/20 dark:bg-black/10' : 'bg-black/5 dark:bg-white/10'}`}></div>

                              <ul className="space-y-4 mb-12 flex-grow">
                                  {pack.features.map((feat, fIdx) => (
                                      <li key={fIdx} className="flex items-start gap-3 group/item">
                                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-all ${pack.highlight ? 'bg-brand-red shadow-[0_0_10px_red]' : `bg-brand-red ${isMobile ? '' : 'group-hover/item:scale-125'}`}`}></div>
                                          <span className={`text-xs md:text-sm font-bold leading-relaxed ${pack.highlight ? 'text-white/90 dark:text-black/90' : `text-gray-600 dark:text-gray-300 ${isMobile ? '' : 'group-hover/item:text-black dark:group-hover/item:text-white'}`}`}>
                                              {feat}
                                          </span>
                                      </li>
                                  ))}
                              </ul>

                              <button className={`w-full py-5 rounded-[2rem] font-black uppercase text-[11px] tracking-[0.3em] transition-all duration-500 shadow-lg ${pack.highlight ? 'bg-brand-red text-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white' : 'bg-black dark:bg-white text-white dark:text-black hover:bg-brand-red hover:text-white'}`}>
                                 Contactez-Nous !
                              </button>
                          </div>
                      </div>
                  ))}

                  <div className={`lg:col-span-3 flex justify-center mt-12 ${isMobile ? '' : 'opacity-0 animate-fade-in-up'}`} style={!isMobile ? { animationDelay: '800ms' } : {}}>
                    <div className="w-full max-w-2xl group relative p-10 md:p-12 rounded-[50px] bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/[0.03] rounded-full blur-[100px] -z-0"></div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-widest mb-6">
                                PACK ULTIME
                            </div>
                            <h3 className="text-5xl md:text-7xl font-black text-black dark:text-white uppercase tracking-tighter leading-none mb-4">
                                Sur Mesure
                            </h3>
                            <div className="flex items-center gap-6 mt-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                                    <span className="text-sm font-bold uppercase text-gray-500">Sur Mesure</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                                    <span className="text-sm font-bold uppercase text-gray-500">Plus de 10 Pages</span>
                                </div>
                            </div>
                        </div>
                        <a href="#contact" className={`shrink-0 group/btn relative p-1 rounded-full overflow-hidden transition-all ${isMobile ? '' : 'hover:scale-110'}`}>
                            <div className={`absolute inset-0 bg-gradient-to-r from-brand-red to-red-400 transition-transform duration-1000 ${isMobile ? '' : 'group-hover/btn:rotate-180'}`}></div>
                            <div className="relative bg-white dark:bg-black p-10 rounded-full flex flex-col items-center justify-center text-center">
                                <span className="text-[10px] font-black uppercase tracking-widest mb-2 text-gray-400">Demander</span>
                                <span className="text-sm font-black uppercase tracking-widest text-black dark:text-white">Un Devis</span>
                                <ChevronRight size={24} className={`text-brand-red mt-4 transition-transform ${isMobile ? '' : 'group-hover/btn:translate-x-2'}`} />
                            </div>
                        </a>
                    </div>
                  </div>
              </div>
          </div>
      </section>

      {/* --- COMPLETE SEO SOLUTION SECTION --- */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 lg:px-12 z-20 bg-transparent border-t border-black/5 dark:border-white/5">
          <div className="max-w-[1600px] mx-auto">
              <div className={`text-center mb-24 ${isMobile ? '' : 'opacity-0 animate-fade-in-up'}`}>
                  <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-black text-black dark:text-white tracking-tighter leading-[0.8] uppercase flex flex-col items-center">
                    <span className="text-gray-400 dark:text-gray-600">Solution complète d'</span>
                    <span className="text-brand-red drop-shadow-[0_0_40px_rgba(255,0,0,0.3)]">Optimisation SEO</span>
                  </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                  
                  {/* Left Column: Optimisation seo */}
                  <div className={`
                    relative p-10 md:p-14 rounded-[50px]
                    bg-white dark:bg-[#0A0A0A] backdrop-blur-[40px] 
                    border border-black/10 dark:border-white/10
                    transition-all duration-700 h-full flex flex-col justify-center
                    text-black dark:text-white
                    ${isMobile ? 'shadow-xl' : 'shadow-2xl hover:shadow-[0_0_60px_rgba(228,80,58,0.2)] opacity-0 animate-enter-left'}
                  `}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>
                      <h3 className="text-3xl md:text-4xl font-black uppercase mb-12 tracking-tight leading-none flex items-center gap-3">
                         Optimisation seo <Sparkles size={24} className="text-brand-red animate-pulse" />
                      </h3>
                      <ul className="space-y-6">
                        {SEO_OPTIMIZATION_FEATURES.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-5 group/item">
                                <div className="mt-1 w-5 h-5 rounded-full bg-brand-red flex items-center justify-center shrink-0 shadow-lg shadow-red-900/50">
                                   <Check size={12} className="text-white" strokeWidth={4} />
                                </div>
                                <span className={`text-base md:text-lg font-bold ${isMobile ? 'text-gray-700 dark:text-gray-300' : 'text-gray-600 dark:text-gray-300 group-hover/item:text-black dark:group-hover/item:text-white'} transition-colors`}>
                                    {item}
                                </span>
                            </li>
                        ))}
                      </ul>
                  </div>

                  {/* Center Column: Illustration */}
                  <div className={`relative flex flex-col items-center justify-center py-12 lg:py-0 h-full ${isMobile ? '' : 'opacity-0 animate-enter-zoom'}`}>
                      {!isMobile && <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_70%)] animate-pulse-slow"></div>}
                      
                      <div className={`relative w-full max-w-[500px] flex items-center justify-center ${isMobile ? '' : 'perspective-2000'}`}>
                          <div className={`relative z-10 w-full rounded-[60px] border-2 border-black/10 dark:border-white/10 bg-white/5 backdrop-blur-3xl p-4 shadow-2xl transition-all duration-1000`}>
                              <div className="relative overflow-hidden rounded-[50px] aspect-square bg-[#050505]">
                                  <img 
                                    src="https://groupdigitalconcept.com/wp-content/uploads/2025/12/Design-sans-titre-80.png" 
                                    alt="Sophisticated SEO Analysis" 
                                    className={`w-full h-full object-contain filter brightness-110 contrast-125 saturate-125 transition-transform ${isMobile ? '' : 'duration-[3s]'}`}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-40"></div>
                              </div>

                              <div className={`absolute -top-6 -right-6 p-5 bg-[#111] border border-white/20 rounded-3xl shadow-2xl backdrop-blur-xl ${isMobile ? '' : 'animate-float'}`}>
                                  <BarChart3 size={32} className="text-blue-500 mb-2" />
                                  <span className="text-[10px] font-black text-white uppercase tracking-widest">GDC ANALYTICS</span>
                              </div>
                              <div className={`absolute -bottom-6 -left-6 w-20 h-20 bg-brand-red rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,0,0,0.4)] ${isMobile ? '' : 'animate-float-reverse'}`}>
                                  <Rocket size={32} className="text-white" />
                                </div>
                          </div>
                      </div>
                  </div>

                  {/* Right Column: AVANTAGES */}
                  <div className={`
                    relative p-10 md:p-14 rounded-[50px]
                    bg-white dark:bg-[#0A0A0A] backdrop-blur-[40px] 
                    border border-black/10 dark:border-white/10
                    transition-all duration-700 h-full flex flex-col justify-center
                    text-black dark:text-white
                    ${isMobile ? 'shadow-xl' : 'shadow-2xl hover:shadow-[0_0_60px_rgba(147,51,234,0.2)] opacity-0 animate-enter-left'}
                  `}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl pointer-events-none"></div>
                      <h3 className="text-3xl md:text-4xl font-black uppercase mb-12 tracking-tight leading-none flex items-center gap-3">
                         Optimisation seo <Sparkles size={24} className="text-brand-red animate-pulse" />
                      </h3>
                      <ul className="space-y-6">
                        {ADVANTAGES_FEATURES.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-5 group/item">
                                <div className="mt-1 w-5 h-5 rounded-full bg-brand-red flex items-center justify-center shrink-0 shadow-lg shadow-red-900/50">
                                   <Check size={12} className="text-white" strokeWidth={4} />
                                </div>
                                <span className={`text-base md:text-lg font-bold ${isMobile ? 'text-gray-700 dark:text-gray-300' : 'text-gray-600 dark:text-gray-300 group-hover/item:text-black dark:group-hover/item:text-white'} transition-colors`}>
                                    {item}
                                </span>
                            </li>
                        ))}
                      </ul>
                  </div>

              </div>
          </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="relative py-48 px-4 md:px-8 bg-transparent overflow-hidden group transition-colors duration-700">
          <div className="max-w-[1700px] mx-auto relative z-10">
              <div className={`bg-black dark:bg-white text-white dark:text-black rounded-[60px] md:rounded-[100px] p-16 md:p-24 lg:p-32 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_50px_120px_-30px_rgba(255,0,0,0.4)] transition-all duration-700 ${isMobile ? '' : ''}`}>
                  <div className="absolute inset-0 bg-noise opacity-[0.05] dark:opacity-[0.02]"></div>
                  <div className={`absolute -top-40 -right-40 w-[1000px] h-[1000px] bg-brand-red rounded-full blur-[200px] opacity-10 transition-opacity duration-[2s] transform-gpu ${isMobile ? '' : 'group-hover:opacity-25'}`}></div>
                  
                  <div className="relative z-10 flex-1">
                      <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
                        Prêt à <br/><span className="text-brand-red italic drop-shadow-[0_0_50px_rgba(255,0,0,0.4)]">dominer</span> <br/> les résultats ?
                      </h2>
                      <p className="text-gray-400 dark:text-gray-500 font-black uppercase tracking-[0.8em] text-[10px] sm:text-xs">Excellence SEO Marrakech • v.9</p>
                  </div>

                  <div className="relative z-10 shrink-0">
                      <a href="#contact" className={`group/btn inline-flex items-center gap-10 px-14 py-10 bg-white dark:bg-black text-black dark:text-white rounded-full font-black uppercase tracking-[0.4em] text-[13px] transition-all shadow-2xl ${isMobile ? '' : 'hover:scale-110'}`}>
                        DÉMARRER <ArrowRight size={20} className={`transition-transform duration-700 w-8 h-8 ${isMobile ? '' : 'group-hover/btn:translate-x-4'}`} />
                      </a>
                  </div>
              </div>
          </div>
      </section>

      <style>{`
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .spotlight-overlay {
           background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255, 0, 0, 0.05), transparent 80%);
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .perspective-2000 {
            perspective: 2000px;
        }
      `}</style>
    </div>
  );
};
