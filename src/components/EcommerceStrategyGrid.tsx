
import React, { useRef, useState, useEffect } from 'react';
import { Search, PieChart, Users, CheckCircle, Target } from 'lucide-react';

const STRATEGIES = [
  {
    title: "Développement Technique et Optimisation SEO",
    description: "Notre approche combine architecture robuste et stratégies SEO avancées pour des résultats tangibles.",
    icon: Search,
    points: [
      "Développement sur Mesure : Plateformes e-commerce optimisées pour les moteurs de recherche.",
      "Design Responsive et Intuitif : Interfaces mobiles-first, navigation fluide.",
      "Intégration Sécurisée : Paiements cryptés (CMI, PayPal), gestion des stocks.",
      "Optimisation Technique : Balisage HTML sémantique, méta-descriptions."
    ]
  },
  {
    title: "Conception Centrée sur la Conversion",
    description: "Un site e-commerce réussi transforme les visiteurs en clients fidèles.",
    icon: PieChart,
    points: [
      "Expérience Utilisateur Premium : Parcours client simplifié.",
      "Identité Visuelle Impactante : Design aligné avec votre marque.",
      "Call-to-Action Stratégiques : Boutons incitatifs placés aux points clés.",
      "A/B Testing : Optimisation continue du tunnel de vente."
    ]
  },
  {
    title: "Analyse & Stratégie",
    description: "Avant de développer, nous analysons votre secteur et vos concurrents.",
    icon: Users,
    points: [
      "Audit Technique & Objectifs : Identification des opportunités SEO.",
      "Benchmark Concurrentiel : Étude des meilleures pratiques.",
      "Planification Agile : Calendrier de développement et livraisons.",
      "Personas d'Acheteurs : Adaptation du design au profil cible."
    ]
  },
  {
    title: "Optimisation & Performance",
    description: "Nous garantissons des sites e-commerce toujours compétitifs.",
    icon: CheckCircle,
    points: [
      "Analyse en Temps Réel : Suivi du trafic et du panier moyen.",
      "Maintenance Proactive : Mises à jour techniques et corrections.",
      "RGPD & Sécurité : Conformité légale et protection des données."
    ]
  }
];

export const EcommerceStrategyGrid: React.FC = () => {
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
    <section ref={sectionRef} className="relative w-full py-24 bg-[#F0F0F2] dark:bg-[#050505] transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">
      
        {/* Background Ambience */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-red/[0.03] rounded-full blur-[120px]"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
            
            {/* Header Content */}
            <div className={`text-center mb-20 ${!isMobile ? 'transition-all duration-1000' : ''} ${isVisible || isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
                    <Target size={14} className="text-brand-red animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
                        Stratégie Gagnante
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black dark:text-white mb-6 leading-tight max-w-5xl mx-auto">
                    Vous Voulez Conquérir le Marché en Ligne avec un <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">Site E-commerce Performant ?</span>
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {STRATEGIES.map((item, index) => (
                    <div 
                        key={index}
                        className={`
                            group relative p-8 md:p-10 rounded-[32px] 
                            bg-white dark:bg-[#0A0A0A]
                            border border-black/5 dark:border-white/10
                            transition-all duration-500 ease-out
                            overflow-hidden
                            ${!isMobile ? 'hover:border-brand-red/20 dark:hover:border-brand-red/20 shadow-lg hover:shadow-2xl hover:-translate-y-2' : 'shadow-md'}
                            ${isVisible || isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}
                        style={{ transitionDelay: !isMobile ? `${index * 150}ms` : '0ms' }}
                    >
                        {/* Corner Glow - Desktop only */}
                        {!isMobile && (
                          <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-red/5 rounded-full blur-[50px] group-hover:bg-brand-red/10 transition-all duration-500"></div>
                        )}

                        <div className="relative z-10">
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center mb-8 shadow-sm transition-all duration-500 text-brand-red ${!isMobile ? 'group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white' : ''}`}>
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>

                            <h3 className={`text-2xl font-black text-black dark:text-white mb-4 leading-tight transition-colors ${!isMobile ? 'group-hover:text-brand-red' : ''}`}>
                                {item.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 font-medium mb-8 leading-relaxed">
                                {item.description}
                            </p>

                            <ul className="space-y-4">
                                {item.points.map((point, i) => {
                                    const parts = point.split(' : ');
                                    const hasColon = parts.length > 1;
                                    
                                    return (
                                        <li key={i} className={`flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400 transition-colors ${!isMobile ? 'group-hover:text-black dark:group-hover:text-gray-200' : ''}`}>
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-red shrink-0"></div>
                                            <span className="leading-relaxed">
                                                {hasColon ? (
                                                    <>
                                                        <strong className="text-black dark:text-white">{parts[0]} : </strong>
                                                        {parts[1]}
                                                    </>
                                                ) : (
                                                    point
                                                )}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
  );
};
