"use client"

import React, { useRef, useState, useEffect } from 'react';
import { Search, Lock, Server, TrendingUp, Check, Sparkles, ArrowRight } from 'lucide-react';

const SOLUTIONS = [
  {
    id: 1,
    title: "Analyse & Stratégie",
    icon: Search,
    desc: "Nous analysons vos besoins et votre infrastructure pour vous proposer un hébergement web à Marrakech performant et évolutif.",
    points: [
      "Audit de votre site web : Évaluation de votre plateforme pour un hébergement sur mesure.",
      "Optimisation des performances : Accélération des temps de chargement.",
      "Hébergement sécurisé : Serveurs haute performance pour garantir la stabilité.",
      "Conseils personnalisés : Nous vous aidons à choisir la meilleure solution."
    ]
  },
  {
    id: 2,
    title: "Sécurisation & Protection",
    icon: Lock,
    desc: "Nous plaçons la sécurité au cœur de nos solutions d'hébergement web à Marrakech pour protéger vos données et celles de vos clients.",
    points: [
      "Protection avancée : Sécurité renforcée contre les cybermenaces et DDoS.",
      "Certificats SSL inclus : Sécurisation de vos échanges et cryptage des données.",
      "Sauvegardes automatiques : Protection et récupération rapide de vos fichiers.",
      "Surveillance 24/7 : Intervention rapide en cas de panne ou intrusion."
    ]
  },
  {
    id: 3,
    title: "Gestion & Hébergement",
    icon: Server,
    desc: "Une solution complète pour assurer une présence en ligne performante et évolutive.",
    points: [
      "Stockage optimisé : Espace disque adapté à vos besoins spécifiques.",
      "Haute disponibilité : Serveurs fiables avec un temps de disponibilité maximal.",
      "Hébergement performant : Adapté aux sites vitrines, e-commerce et plateformes.",
      "Intégration e-mail pro : Adresse e-mail professionnelle incluse."
    ]
  },
  {
    id: 4,
    title: "Performance & Scalabilité",
    icon: TrendingUp,
    desc: "L'hébergement web est essentiel pour assurer la réactivité et la rapidité de votre site.",
    points: [
      "Vitesse et optimisation : Chargement rapide pour une meilleure expérience utilisateur.",
      "Infrastructure évolutive : Capacité d'adaptation selon les besoins de votre site.",
      "Protection avancée : Systèmes de sécurité renforcés contre les attaques.",
      "Compatibilité multi-plateformes : Support des CMS les plus populaires."
    ]
  }
];

export const HostingSolutionsGrid: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section 
        ref={sectionRef}
        className="relative w-full py-24 md:py-32 bg-white dark:bg-[#000000] text-black dark:text-white overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5"
    >
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
        
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm">
                <Sparkles size={14} className="text-brand-red animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
                    Solutions Performantes
                </span>
             </div>
             
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black dark:text-white mb-8 leading-tight max-w-5xl mx-auto">
                Vous Voulez un Hébergement Web <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
                    Performant pour Votre Entreprise ?
                </span>
             </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {SOLUTIONS.map((item, index) => (
                <div 
                    key={item.id}
                    className={`
                        group relative flex flex-col
                        p-8 md:p-10 rounded-[32px]
                        bg-[#F5F5F7] dark:bg-[#0A0A0A]
                        border border-black/5 dark:border-white/10
                        transition-all duration-500 ease-out
                        overflow-hidden
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        ${!isMobile ? 'hover:border-brand-red/20 dark:hover:border-brand-red/20 hover:shadow-2xl hover:-translate-y-2' : 'shadow-md'}
                    `}
                    style={{ transitionDelay: !isMobile ? `${index * 150}ms` : '0ms' }}
                >
                    <div className="relative z-10">
                        <div className="flex items-start justify-between mb-8">
                            <div className={`w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-brand-red shadow-lg ${!isMobile ? 'group-hover:scale-110 transition-transform duration-500' : ''}`}>
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>
                            <span className="text-4xl font-black text-black/5 dark:text-white/5 font-sans">0{item.id}</span>
                        </div>

                        <h3 className={`text-2xl font-black text-black dark:text-white mb-4 ${!isMobile ? 'group-hover:text-brand-red' : ''} transition-colors`}>
                            {item.title}
                        </h3>
                        
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8 border-l-2 border-brand-red/30 pl-4">
                            {item.desc}
                        </p>

                        <ul className="space-y-4 mt-auto">
                            {item.points.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center shrink-0 text-brand-red">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    <span className="leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>

        <div className={`mt-20 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a 
                href="#contact" 
                className="group relative px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl hover:shadow-2xl overflow-hidden"
            >
                <span className="relative z-10 flex items-center gap-3">
                    Demander un devis hébergement <ArrowRight size={16} />
                </span>
            </a>
        </div>

      </div>
    </section>
  );
};
