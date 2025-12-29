
import React, { useRef, useState, useEffect } from 'react';
import { Globe, Shield, Server, RefreshCw, Headset, Target, Eye, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const FEATURES = [
  {
    title: "Large choix d'extensions",
    desc: "Nous vous proposons une gamme complète d'extensions, du .ma au .com en passant par .net et bien d'autres, afin de vous permettre de choisir l'option la plus pertinente pour votre activité et votre cible lors de votre achat de noms de domaine à Marrakech.",
    icon: Globe,
    colSpan: "lg:col-span-4",
    delay: 100
  },
  {
    title: "Sécurisation et protection",
    desc: "Nous assurons un enregistrement sécurisé de votre nom de domaine avec des solutions de protection contre le vol, le cybersquatting et la divulgation de vos informations personnelles grâce à l'option WHOIS privée.",
    icon: Shield,
    colSpan: "lg:col-span-4",
    delay: 200
  },
  {
    title: "Hébergement et services",
    desc: "En complément, nous offrons des solutions d'hébergement web performantes, des certificats SSL pour sécuriser votre site, ainsi que des outils avancés de gestion DNS pour optimiser la fiabilité.",
    icon: Server,
    colSpan: "lg:col-span-4",
    delay: 300
  },
  {
    title: "Transfert et renouvellement simplifiés",
    desc: "Nous facilitons le transfert et le renouvellement de vos noms de domaine en garantissant une gestion fluide et sans interruption de service. Nous vous accompagnons dans chaque étape pour assurer la pérennité de votre identité digitale.",
    icon: RefreshCw,
    colSpan: "lg:col-span-6",
    delay: 400
  },
  {
    title: "Support technique et accompagnement",
    desc: "Notre équipe est disponible pour vous conseiller, vous assister dans la configuration de votre domaine et vous fournir un accompagnement personnalisé. Une stratégie pensée pour maximiser votre impact en ligne.",
    icon: Headset,
    colSpan: "lg:col-span-6",
    delay: 500
  }
];

export const DomainWhyChooseSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-[#F0F0F2] dark:bg-[#050505] text-black dark:text-white transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-red/[0.02] rounded-full blur-[120px] -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[120px] translate-y-1/2"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        
        {/* --- TITLE BLOCK --- */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
                    Notre Expertise
                </span>
             </div>
             
             <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-black dark:text-white mb-8">
                Pourquoi Nous <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">Choisir ?</span>
             </h2>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-min">
            
            {/* 1. INTRO CARD (Large Left) */}
            <div className={`
                lg:col-span-8
                bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-12
                border border-black/5 dark:border-white/10
                flex flex-col justify-center
                shadow-xl
                transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
                <h3 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3">
                    <Target className="text-brand-red" />
                    Choix Stratégique
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                    Chez <strong className="text-black dark:text-white">Group Digital Concept</strong>, nous ne nous contentons pas de vendre des noms de domaine. Nous vous accompagnons dans le choix stratégique d'une identité digitale forte et durable. Un nom de domaine est bien plus qu'une simple adresse web : c'est un élément clé de votre visibilité, de votre crédibilité et de votre référencement en ligne. C'est pourquoi nous mettons à votre disposition notre expertise pour garantir un achat de noms de domaine à Marrakech sécurisé, optimisé et adapté à vos objectifs professionnels.
                </p>
            </div>

            {/* 2. VISION CARD (Right Top) */}
            <div className={`
                lg:col-span-4
                bg-[#111] dark:bg-[#151515] text-white rounded-[40px] p-8 md:p-10
                border border-white/10
                relative overflow-hidden group
                flex flex-col justify-between
                transition-all duration-700 delay-100 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/20 rounded-full blur-[60px] group-hover:bg-brand-red/30 transition-colors"></div>
                <Eye size={32} className="text-brand-red mb-6" />
                <div>
                    <h3 className="text-xl font-black uppercase tracking-wide mb-4">Vision</h3>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed font-medium">
                        Devenir le partenaire de référence pour l'achat de noms de domaine à Marrakech. Nous croyons que chaque projet mérite un nom stratégique pour un succès durable.
                    </p>
                </div>
            </div>

            {/* 3. FEATURES ROW (The "Ce Que Nous Vous Offrons" Block) */}
            <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {FEATURES.map((feature, index) => (
                    <div 
                        key={index}
                        className={`
                            ${feature.colSpan}
                            bg-[#F5F5F7] dark:bg-[#0A0A0A] rounded-[32px] p-8
                            border border-black/5 dark:border-white/10
                            hover:border-brand-red/20 dark:hover:border-brand-red/20
                            hover:bg-white dark:hover:bg-[#111]
                            transition-all duration-500 group
                            flex flex-col
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}
                        style={{ transitionDelay: `${feature.delay}ms` }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center mb-6 text-black dark:text-white group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-sm border border-black/5 dark:border-white/5">
                            <feature.icon size={20} strokeWidth={2} />
                        </div>
                        <h4 className="text-lg font-bold text-black dark:text-white mb-3 group-hover:text-brand-red transition-colors">{feature.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* 4. MISSION (Left Bottom) */}
            <div className={`
                lg:col-span-6
                bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-12
                border border-black/5 dark:border-white/10
                flex flex-col justify-center
                shadow-lg
                transition-all duration-700 delay-500 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
                <div className="flex items-center gap-3 mb-6">
                    <Rocket size={24} className="text-blue-500" />
                    <h3 className="text-xl font-black uppercase tracking-wide text-black dark:text-white">Mission</h3>
                </div>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-6">
                    Simplifier et sécuriser l'achat de noms de domaine à Marrakech. Nous aidons nos clients à choisir, protéger et exploiter leur nom de domaine pour renforcer leur crédibilité. De la réservation à la gestion, nous garantissons un service fluide.
                </p>
                <div className="flex flex-wrap gap-2">
                    {['Simplifier', 'Sécuriser', 'Optimiser'].map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-[10px] font-bold uppercase text-gray-600 dark:text-gray-300 border border-black/5 dark:border-white/5">{tag}</span>
                    ))}
                </div>
            </div>

            {/* 5. ENGAGEMENT (Right Bottom) */}
            <div className={`
                lg:col-span-6
                bg-gradient-to-br from-brand-red to-red-800 text-white
                rounded-[40px] p-8 md:p-12
                relative overflow-hidden group
                flex flex-col justify-center
                shadow-xl shadow-red-900/20
                transition-all duration-700 delay-600 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-[80px] group-hover:bg-black/20 transition-colors"></div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle2 size={24} className="text-white" />
                        <h3 className="text-xl font-black uppercase tracking-wide">Notre Engagement</h3>
                    </div>
                    <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed mb-8">
                        Nous adoptons une approche transparente et axée sur la performance. Chaque achat de noms de domaine est optimisé pour être un véritable levier de croissance, en garantissant fiabilité, sécurité et visibilité optimale.
                    </p>
                    <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white text-brand-red px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all shadow-lg">
                        Démarrer Maintenant <ArrowRight size={14} />
                    </a>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
