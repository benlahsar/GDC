"use client";
import React, { useState, useEffect } from 'react';
import { 
  Globe, Palmtree, ShoppingBag, Landmark, 
  Container, Sun, Zap, 
  MapPin, ArrowUpRight, CheckCircle2 
} from 'lucide-react';

const EXPERTISE_DATA = [
  {
    id: "maroc",
    city: "Agence Web Maroc",
    title: "Agence Web - Création Site web Maroc",
    subtitle: "Excellence Nationale",
    desc: "Notre agence maîtrise toutes les solutions de création site web, des CMS clé en main aux développements sur mesure. À Marrakech comme dans tout le Maroc, nous combinons la puissance de WordPress/Elementor pour les projets rapides avec du codage pur (HTML5, CSS3, JavaScript et PHP) pour les besoins complexes. Chaque projet intègre nativement : un référencement optimisé pour Google Maroc, des temps de chargement inférieurs à 1.5 secondes grâce à notre hébergement local Casablanca, et une sécurité renforcée (certificats SSL et protection anti-DDoS).",
    features: [
      "Référencement Google Maroc",
      "Hébergement local",
      "Sécurité SSL & Anti-DDoS",
      "Paiements CMI / Stripe"
    ],
    icon: Globe,
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2670&auto=format&fit=crop",
    colSpan: "lg:col-span-12",
    layout: "horizontal",
    height: "min-h-[500px]"
  },
  {
    id: "marrakech",
    city: "Marrakech",
    title: "Création Site web Marrakech : Solutions Premium",
    subtitle: "Luxe & Tourisme",
    desc: "À Marrakech, notre expertise se concentre sur des solutions hybrides uniques. Pour les riads et hôtels : nous concevons des sites WordPress avec Elementor Pro intégrant des systèmes de réservation (SynXis ou développements API sur mesure), des visites virtuelles 360° optimisées pour le mobile, et une synchronisation automatique avec Booking/Expedia. Particularité marrakchie : nos développeurs intègrent systématiquement des cartes interactives des souks.",
    features: ["Réservation SynXis/API", "Visites Virtuelles 360°"],
    icon: Palmtree,
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=2669&auto=format&fit=crop",
    colSpan: "lg:col-span-12",
    layout: "horizontal",
    height: "min-h-[450px]"
  },
  {
    id: "casablanca",
    city: "Casablanca",
    title: "Casablanca : Pôle E-Commerce & Business",
    subtitle: "Business & Marketplaces",
    desc: "Leader en création site web à Casablanca, nous bâtissons des marketplaces WooCommerce haute performance. Nos solutions incluent : gestion multi-entrepôts, intégration avec les ERP marocains (SAP, Odoo), et tunnels de paiement optimisés (CMI/PayZone). Infrastructure hébergée localement pour une latence <20ms.",
    features: ["Marketplace WooCommerce", "Intégration ERP (SAP)"],
    icon: ShoppingBag,
    image: "https://groupdigitalconcept.com/wp-content/uploads/2025/12/360_F_267201056_wcEH6uQ6xu5oNHtY9Hq3YOhDwe1zk1XX.jpg",
    colSpan: "lg:col-span-12",
    layout: "horizontal",
    height: "min-h-[450px]"
  },
  {
    id: "rabat",
    city: "Rabat",
    title: "Rabat : Sites Institutionnels & Gouvernementaux",
    subtitle: "Corporate & Sécurité",
    desc: "Notre approche à Rabat combine sécurité et modularité. Nous développons des portails certifiés W3C avec authentification biométrique et archivage automatique. Interface administrateur bilingue et système de cache intelligent pour supporter les pics de trafic gouvernementaux.",
    features: ["Certifié W3C / Biométrie", "Interface Arabe Dialectal"],
    icon: Landmark,
    image: "https://groupdigitalconcept.com/wp-content/uploads/2025/12/10.webp",
    colSpan: "lg:col-span-12",
    layout: "horizontal",
    height: "min-h-[450px]"
  },
  {
    id: "tanger",
    city: "Tanger",
    title: "Tanger : Plateformes Export & Logistique",
    subtitle: "Commerce International",
    desc: "Pour Tanger Med et les zones franches, nous concevons des plateformes multilingues (FR/AR/EN/ES) avec calculateurs de droits de douane en temps réel et modules de devises automatiques. Solutions hybrides WordPress/Node.js pour une flexibilité maximale.",
    features: ["Multilingue 4 Langues", "Calculateurs Douane"],
    icon: Container,
    image: "https://groupdigitalconcept.com/wp-content/uploads/2025/12/premium_photo-1705004597770-40e4db5df8a6.avif",
    colSpan: "lg:col-span-12",
    layout: "horizontal",
    height: "min-h-[450px]"
  },
  {
    id: "agadir",
    city: "Agadir",
    title: "Agadir : Expériences Touristiques & Sportives",
    subtitle: "Tourisme & Surf",
    desc: "À Agadir, nous misons sur l'immersion visuelle : Templates 4K, vidéo background, et cartes interactives des spots de surf/golf. Intégration API météo/marées et stratégie de contenu 'Guide du routard' pour maximiser le trafic organique.",
    features: ["Vidéo 4K / Spots Maps", "API Météo & Marées"],
    icon: Sun,
    image: "https://groupdigitalconcept.com/wp-content/uploads/2025/12/1.webp",
    colSpan: "lg:col-span-12",
    layout: "horizontal",
    height: "min-h-[450px]"
  }
];

export const CityExpertiseSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#000000] overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
          {!isMobile && <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>}
          <div className={`absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-red/[0.02] rounded-full blur-[120px] pointer-events-none`}></div>
          <div className={`absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-blue-500/[0.02] rounded-full blur-[120px] pointer-events-none`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
                <MapPin size={14} className={`text-brand-red ${!isMobile ? 'animate-bounce' : ''}`} />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
                    Territoire & Innovation
                </span>
             </div>
             
             <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tighter text-black dark:text-white">
                Expertise Web <br className="md:hidden"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">Sur Mesure</span>
             </h2>
             <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                De Marrakech à Tanger, nous déployons des stratégies digitales adaptées aux spécificités de chaque pôle économique.
             </p>
        </div>

        {/* Bento Grid - All Full Width for Consistency */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {EXPERTISE_DATA.map((item) => (
                <div 
                    key={item.id}
                    className={`
                        ${item.colSpan} ${item.height}
                        group relative rounded-[40px] overflow-hidden
                        border border-black/5 dark:border-white/10
                        bg-white dark:bg-[#050505]
                        transition-all duration-700 ease-out
                        ${!isMobile ? 'hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.05)] hover:-translate-y-1' : ''}
                        flex flex-col md:flex-row
                    `}
                    onMouseEnter={() => !isMobile && setHoveredCard(item.id)}
                    onMouseLeave={() => !isMobile && setHoveredCard(null)}
                >
                    {/* Background Image Container */}
                    <div className="relative overflow-hidden z-0 w-full md:w-1/2 h-[250px] md:h-full">
                        <img 
                            src={item.image} 
                            alt={item.city} 
                            className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-out ${!isMobile ? 'group-hover:scale-110' : ''} opacity-100`}
                        />
                        {/* Gradient Overlays for Seamless Blend */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 md:hidden"></div>
                        
                        {/* THE FIX: Standardized Horizontal Fade for Desktop */}
                        {!isMobile && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white dark:to-[#050505] hidden md:block w-full h-full"></div>}

                        {/* Floating City Badge on Image */}
                        <div className="absolute top-6 left-6 z-20">
                            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                                {item.city}
                            </span>
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="relative z-20 p-8 md:p-12 flex flex-col justify-between w-full md:w-1/2 bg-white dark:bg-[#050505]">
                        
                        {/* Top Content */}
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red ${!isMobile ? 'group-hover:bg-brand-red group-hover:text-white' : ''} transition-all duration-500`}>
                                    <item.icon size={26} strokeWidth={1.5} />
                                </div>
                                {!isMobile && (
                                    <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                        <ArrowUpRight size={18} className="text-black dark:text-white" />
                                    </div>
                                )}
                            </div>

                            <p className="text-brand-red font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Zap size={12} className={`${!isMobile ? 'fill-brand-red' : ''}`} /> {item.subtitle}
                            </p>
                            
                            <h3 className={`font-black text-black dark:text-white mb-4 leading-tight text-2xl md:text-3xl lg:text-4xl ${!isMobile ? 'group-hover:text-brand-red' : ''} transition-colors`}>
                                {item.title}
                            </h3>
                            
                            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8 font-medium whitespace-pre-line">
                                {item.desc}
                            </p>
                        </div>

                        {/* Bottom: Features */}
                        <div className="flex flex-wrap gap-2 mt-auto pt-8 border-t border-black/5 dark:border-white/5">
                            {item.features.map((feature, idx) => (
                                <div 
                                    key={idx} 
                                    className={`
                                        flex items-center gap-2 px-3 py-1.5 rounded-lg 
                                        bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/5
                                        text-[11px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide
                                        ${!isMobile ? 'group-hover:border-brand-red/30' : ''} transition-colors duration-500
                                    `}
                                >
                                    <CheckCircle2 size={14} className="text-brand-red" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hover Border */}
                    {!isMobile && <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-red/20 rounded-[40px] pointer-events-none transition-colors duration-500 z-30"></div>}
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};
