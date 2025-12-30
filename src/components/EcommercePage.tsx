"use client";
import React, { useEffect, useRef, useState } from 'react';
import { 
  ShoppingBag, CreditCard, TrendingUp, ShieldCheck, 
  Smartphone, Zap, Globe, ArrowRight, Package, BarChart3,
  Search, PenTool, Lock, Headset, CheckCircle
} from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { EcommerceWhyChoose } from './EcommerceWhyChoose';
import { EcommerceAdvantages } from './EcommerceAdvantages';
import { EcommerceStrategyGrid } from './EcommerceStrategyGrid';
import { EcommerceProcessSection } from './EcommerceProcessSection';
import { EcommerceMethodology } from './EcommerceMethodology';
import { EcommerceTestimonials } from './EcommerceTestimonials';
import { EcommerceFAQ } from './EcommerceFAQ';
import { EcommerceContactForm } from './EcommerceContactForm';
import { EcommerceFinalCTA } from './EcommerceFinalCTA';

export const EcommercePage: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
        if (isMobile || !containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePos({ x, y });
    };
    
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#F0F0F2] dark:bg-[#050505] text-black dark:text-white pt-32 md:pt-48 overflow-hidden transition-colors duration-500 selection:bg-brand-red selection:text-white">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Moving Gradient Orbs - Only animated on Desktop */}
         <div 
            className={`absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-brand-red/[0.08] rounded-full blur-[120px] ${!isMobile ? 'transition-transform duration-100 ease-out will-change-transform' : 'opacity-40'}`}
            style={{ transform: !isMobile ? `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` : 'none' }}
         ></div>
         <div 
            className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/[0.05] rounded-full blur-[150px] ${!isMobile ? 'transition-transform duration-100 ease-out will-change-transform' : 'opacity-40'}`}
            style={{ transform: !isMobile ? `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)` : 'none' }}
         ></div>
         {/* Noise Texture */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1800px] relative z-10 pb-20">
        
        {/* --- HERO BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)] mb-12">
            
            {/* 1. HERO TEXT */}
            <div className={`
                col-span-1 md:col-span-2 lg:col-span-7 row-span-2
                bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-12 lg:p-16
                border border-black/5 dark:border-white/10
                flex flex-col justify-center
                relative overflow-hidden group
                shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]
                ${!isMobile ? 'opacity-0 animate-enter-left' : 'opacity-100'}
            `}>
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red mb-6">
                        <ShoppingBag size={14} className={!isMobile ? 'animate-bounce' : ''} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Conquérir le Marché en Ligne</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-[1.1] mb-6 text-black dark:text-white">
                        Group Digital Concept – <br/>
                        Votre Agence de Création de <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">Sites E-commerce</span> <br/>
                        à Marrakech
                    </h1>

                    <div className="space-y-6 text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-3xl mb-10">
                        <p>
                            Chez Group Digital Concept, agence experte en création de site e-Commerce à Marrakech, nous transformons vos ambitions commerciales en plateformes e-commerce hautement convertissantes, techniquement irréprochables, et parfaitement adaptées aux attentes du marché marocain.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a href="#contact" className="group px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                            Lancer ma boutique <ArrowRight size={16} className={!isMobile ? 'group-hover:translate-x-1 transition-transform' : ''} />
                        </a>
                    </div>
                </div>
            </div>

            {/* 2. THE VISUAL CARD */}
            <div className={`
                col-span-1 md:col-span-2 lg:col-span-5 row-span-2
                relative rounded-[40px] overflow-hidden
                bg-gradient-to-br from-[#111] via-[#050505] to-black
                border border-white/10
                flex items-center justify-center
                shadow-2xl
                group
                min-h-[500px]
                ${!isMobile ? 'opacity-0 animate-enter-right' : 'opacity-100'}
            `}>
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2670&auto=format&fit=crop" 
                        alt="E-commerce Concept" 
                        className={`w-full h-full object-cover opacity-80 ${!isMobile ? 'group-hover:scale-110 transition-transform duration-[2s] ease-out' : ''} mix-blend-normal`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col gap-4">
                    <div className={`flex items-center justify-between p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg ${!isMobile ? 'transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500' : ''}`}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                                <CreditCard size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase text-white/60">Paiements Sécurisés</p>
                                <p className="text-sm font-bold text-white">CMI, Stripe, PayPal</p>
                            </div>
                        </div>
                        <ShieldCheck size={18} className="text-emerald-400" />
                    </div>

                    <div className={`flex items-center justify-between p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg ${!isMobile ? 'transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100' : ''}`}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white">
                                <TrendingUp size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase text-white/60">Taux de conversion</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-lg font-bold text-white">+</span>
                                    <AnimatedCounter value={150} suffix="%" className="text-lg font-bold text-white" />
                                </div>
                            </div>
                        </div>
                        <BarChart3 size={18} className="text-brand-red" />
                    </div>
                </div>
            </div>

            {/* 3. FEATURE: SEO & PERF */}
            <div className={`col-span-1 md:col-span-1 lg:col-span-4 bg-[#F5F5F7] dark:bg-[#0A0A0A] rounded-[40px] p-8 border border-black/5 dark:border-white/10 flex flex-col justify-between group transition-all duration-300 ${!isMobile ? 'opacity-0 animate-fade-in-up delay-200 hover:-translate-y-2' : 'opacity-100'}`}>
                <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mb-6">
                    <Search size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-black mb-2 text-black dark:text-white">SEO & Performances</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        Sites optimisés pour Google Maroc. Chargement ultra-rapide.
                    </p>
                </div>
            </div>

            {/* 4. FEATURE: DESIGN */}
            <div className={`col-span-1 md:col-span-1 lg:col-span-4 bg-[#F5F5F7] dark:bg-[#0A0A0A] rounded-[40px] p-8 border border-black/5 dark:border-white/10 flex flex-col justify-between group transition-all duration-300 ${!isMobile ? 'opacity-0 animate-fade-in-up delay-300 hover:-translate-y-2' : 'opacity-100'}`}>
                <div className="w-14 h-14 rounded-2xl bg-blue-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                    <PenTool size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-black mb-2 text-black dark:text-white">Design Personnalisé</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        Identité visuelle unique qui reflète votre marque.
                    </p>
                </div>
            </div>

            {/* 5. FEATURE: SECURITY */}
            <div className={`col-span-1 md:col-span-2 lg:col-span-4 bg-[#F5F5F7] dark:bg-[#0A0A0A] rounded-[40px] p-8 border border-black/5 dark:border-white/10 flex flex-col justify-between group transition-all duration-300 ${!isMobile ? 'opacity-0 animate-fade-in-up delay-400 hover:-translate-y-2' : 'opacity-100'}`}>
                <div className="w-14 h-14 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-red/20">
                    <Lock size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-black mb-2 text-black dark:text-white">Sécurité Maximale</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        Protection des données clients et transactions sécurisées.
                    </p>
                </div>
            </div>

        </div>

        {/* --- STATS STRIP --- */}
        <div className={`bg-black dark:bg-white text-white dark:text-black rounded-[30px] p-8 md:p-12 mb-20 ${!isMobile ? 'animate-enter-bottom' : ''}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20 dark:divide-black/10">
                <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                    <div className="flex items-baseline gap-1">
                        <AnimatedCounter value={114} suffix="+" className="text-5xl md:text-6xl font-black" />
                    </div>
                    <span className="text-sm uppercase tracking-widest opacity-70 mt-2 font-bold">Projets de contenu digital livrés</span>
                </div>
                <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
                    <div className="flex items-baseline gap-1">
                        <AnimatedCounter value={94} suffix="%" className="text-5xl md:text-6xl font-black text-brand-red" />
                    </div>
                    <span className="text-sm uppercase tracking-widest opacity-70 mt-2 font-bold">Satisfaction Client</span>
                </div>
                <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
                    <div className="flex items-baseline gap-1">
                        <AnimatedCounter value={99} suffix="%" className="text-5xl md:text-6xl font-black" />
                    </div>
                    <span className="text-sm uppercase tracking-widest opacity-70 mt-2 font-bold">De disponibilité</span>
                </div>
            </div>
        </div>

        {/* --- ADDITIONAL FEATURES --- */}
        <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 mb-24 ${!isMobile ? 'opacity-0 animate-fade-in-up delay-500' : ''}`}>
            {[
                { icon: Search, label: "SEO & Performances" },
                { icon: PenTool, label: "Design Personnalisé" },
                { icon: Lock, label: "Sécurité Maximale" },
                { icon: Headset, label: "Support 24/7" },
                { icon: CheckCircle, label: "Résultats Garantis" }
            ].map((feat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-3 p-4 rounded-2xl bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/5 hover:border-brand-red/30 transition-all group">
                    <feat.icon className="text-gray-400 group-hover:text-brand-red transition-colors w-6 h-6" />
                    <span className="text-[10px] md:text-xs font-bold uppercase text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">{feat.label}</span>
                </div>
            ))}
        </div>

        {/* --- PLATFORM COMPARISON --- */}
        <div className="py-16 md:py-24 border-t border-black/5 dark:border-white/5">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-6">
                    Nos Technologies <span className="text-brand-red">E-Commerce</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        name: "Shopify",
                        desc: "Idéal pour un lancement rapide et une gestion simplifiée. Leader mondial du e-commerce.",
                        features: ["Hébergement inclus", "Thèmes Premium", "Apps Marketing"],
                        icon: "https://groupdigitalconcept.com/wp-content/uploads/2025/03/shfy-p-.svg"
                    },
                    {
                        name: "WooCommerce",
                        desc: "La flexibilité de WordPress. Parfait pour un contrôle total et un SEO avancé.",
                        features: ["100% Personnalisable", "SEO Friendly", "Pas de frais mensuels"],
                        icon: "https://groupdigitalconcept.com/wp-content/uploads/2025/03/WordPress_logo_2.svg"
                    },
                    {
                        name: "Sur Mesure (Dev)",
                        desc: "Pour les projets complexes nécessitant des fonctionnalités uniques et une haute performance.",
                        features: ["React / Next.js", "Architecture Headless", "Scalabilité infinie"],
                        icon: Globe
                    }
                ].map((platform, idx) => (
                    <div key={idx} className={`bg-white dark:bg-[#080808] p-8 rounded-[30px] border border-black/5 dark:border-white/5 transition-all duration-300 group ${!isMobile ? 'hover:border-brand-red/30 hover:shadow-2xl' : ''}`}>
                        <div className={`w-16 h-16 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center mb-6 ${!isMobile ? 'group-hover:scale-110 transition-transform' : ''}`}>
                            {typeof platform.icon === 'string' ? (
                                <img src={platform.icon} alt={platform.name} className="w-8 h-8" />
                            ) : (
                                <platform.icon size={32} className="text-brand-red" />
                            )}
                        </div>
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-3">{platform.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm leading-relaxed min-h-[60px]">{platform.desc}</p>
                        <ul className="space-y-3">
                            {platform.features.map((feat, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm font-bold text-black dark:text-white">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <EcommerceWhyChoose />
        <EcommerceAdvantages />
        <EcommerceStrategyGrid />
        <EcommerceProcessSection />
        <EcommerceMethodology />
        <EcommerceTestimonials />
        <EcommerceFAQ />
        <EcommerceContactForm />
        <EcommerceFinalCTA />

      </div>
    </section>
  );
};
