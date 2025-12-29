import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUpRight, Code2, Smartphone, ShoppingBag, Globe } from 'lucide-react';

const CARDS = [
  {
    title: "Optimisation Mobile Marrakech",
    subtitle: "ASO & Performance",
    desc: "En tant qu'expert en création d'application Marrakech, nous transformons vos idées en solutions mobiles hautement performantes. Audit technique rigoureux et optimisation SEO spécifique aux stores pour maximiser votre visibilité sur le marché local. Nous intégrons des designs UX localisés et des fonctionnalités de paiement adaptées (CMI, Paypal Maroc).",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
    icon: Smartphone,
    size: "lg:col-span-4"
  },
  {
    title: "E-Commerce de Demain",
    subtitle: "Tunnels de Vente",
    desc: "Nos applications e-commerce sont conçues pour convertir. Nous développons des plateformes fluides avec tunnels de conversion optimisés, incluant des fonctionnalités comme le checkout en un clic et l'intégration des méthodes de paiement locales garantissant une expérience utilisateur sans friction.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop",
    icon: ShoppingBag,
    size: "lg:col-span-8"
  },
  {
    title: "Solutions Métiers Marrakech",
    subtitle: "Efficacité Interne",
    desc: "Spécialisés dans la création d'application Marrakech for les professionnels, nous concevons des outils métiers sur mesure : gestion de stock, CRM local, et suivi client. Nos applications répondent aux spécificités techniques et juridiques (RGPD Maroc) de votre entreprise locale.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    icon: Code2,
    size: "lg:col-span-7"
  },
  {
    title: "Intégration Technologique",
    subtitle: "Flutter & React Native",
    desc: "Technologies hybrides pour performances natives. Architecture scalable et temps de chargement ultra-rapides pour dominer les stores d'applications et assurer une rétention maximale des utilisateurs marrakchis.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    icon: Globe,
    size: "lg:col-span-5"
  }
];

export const AppExpertSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative w-full py-24 px-4 md:px-8 lg:px-12 bg-white dark:bg-[#050505] transition-all duration-700 rounded-t-[80px] -mt-16 z-20 shadow-[0_-40px_80px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1700px] mx-auto">
        
        {/* ENHANCED TYPOGRAPHIC AREA (Based on Screenshot) */}
        <div className={`relative mb-32 ${!isMobile ? 'opacity-0 animate-fade-in-up' : ''}`}>
          
          {/* Row 1: Sub-headlines */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
             <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black dark:text-white tracking-tighter uppercase whitespace-nowrap">
                Nous Sommes
             </h2>
             <div className="flex items-center gap-6 flex-1 hidden md:flex">
                <div className="h-[2px] flex-1 bg-black/10 dark:bg-white/10"></div>
                <Sparkles className="text-brand-red animate-pulse" size={32} />
                <div className="h-[2px] flex-1 bg-black/10 dark:bg-white/10"></div>
             </div>
             <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black dark:text-white tracking-tighter uppercase whitespace-nowrap">
                Votre Expert
             </h2>
          </div>

          {/* Main Massive Title with Floating Description Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
             <div className="lg:col-span-8 flex flex-col gap-2">
                <div className="relative w-fit">
                    <span className="relative z-10 text-6xl md:text-8xl lg:text-[10rem] font-black text-white px-6 py-2 leading-[0.85] uppercase">Création</span>
                    <div className="absolute inset-0 bg-brand-red -rotate-1 rounded-sm shadow-xl"></div>
                </div>
                <div className="relative w-fit">
                    <span className="relative z-10 text-6xl md:text-8xl lg:text-[10rem] font-black text-white px-6 py-2 leading-[0.85] uppercase">D'application</span>
                    <div className="absolute inset-0 bg-brand-red rotate-1 rounded-sm shadow-xl"></div>
                </div>
                <div className="relative w-fit">
                    <span className="relative z-10 text-6xl md:text-8xl lg:text-[10rem] font-black text-white px-6 py-2 leading-[0.85] uppercase">À Marrakech</span>
                    <div className="absolute inset-0 bg-brand-red -rotate-1 rounded-sm shadow-xl"></div>
                </div>
             </div>

             {/* Floating Expertise Card (Right) */}
             <div className="lg:col-span-4 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-30">
                <div className="p-10 rounded-[40px] bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-3xl border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden group">
                    {!isMobile && <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>}
                    
                    <div className="space-y-6 relative z-10">
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium text-justify">
                          Notre agence experte en <strong className="text-black dark:text-white font-black">création d'application Marrakech</strong> développe des solutions mobiles 
                          sur mesure. Nous concevons des applications natives et hybrides (iOS/Android) 
                          combinant design UX localisé, technologies performantes (Flutter, React Native) et optimisation ASO intégrée. 
                        </p>
                        
                        <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-1 bg-brand-red rounded-full"></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red">VISION EXCELLENCE GDC</span>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* BENTO GRID (Remaining section content) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {CARDS.map((card, idx) => (
            <div 
                key={idx} 
                className={`
                    ${card.size} group relative flex flex-col bg-white dark:bg-[#0A0A0A] rounded-[48px] overflow-hidden 
                    border border-black/5 dark:border-white/10 shadow-xl transition-all duration-700 
                    min-h-[400px] ${!isMobile ? 'opacity-0 animate-enter-bottom hover:-translate-y-2' : ''}
                `}
                style={{ animationDelay: !isMobile ? `${idx * 150}ms` : '0ms' }}
            >
              <div className="h-64 overflow-hidden relative">
                 <img src={card.image} alt={card.title} className={`w-full h-full object-cover ${!isMobile ? 'transition-transform duration-[2s] group-hover:scale-110' : ''}`} />
                 <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0A0A0A] via-white/50 dark:via-black/20 to-transparent"></div>
                 <div className={`absolute bottom-6 left-8 w-14 h-14 rounded-2xl bg-white dark:bg-black flex items-center justify-center shadow-2xl transition-colors duration-500 ${!isMobile ? 'group-hover:bg-brand-red group-hover:text-white' : ''}`}>
                    <card.icon size={28} strokeWidth={1.5} />
                 </div>
              </div>

              <div className="p-10 pt-4 flex flex-col flex-1 relative">
                 <div className="mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">{card.subtitle}</span>
                    <h3 className={`text-2xl md:text-3xl font-black text-black dark:text-white leading-tight mt-1 transition-colors ${!isMobile ? 'group-hover:text-brand-red' : ''}`}>{card.title}</h3>
                 </div>
                 
                 <p className={`text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium text-justify transition-all duration-700 ${!isMobile ? 'line-clamp-[6] group-hover:line-clamp-none' : ''}`}>
                    {card.desc}
                 </p>

                 <div className="mt-auto pt-8 flex justify-end">
                    <div className={`w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center transition-all duration-500 ${!isMobile ? 'group-hover:bg-black dark:group-hover:bg-white group-hover:border-transparent group-hover:rotate-45' : ''}`}>
                       <ArrowUpRight size={22} className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black" />
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};