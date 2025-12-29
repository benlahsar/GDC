
import React, { useRef, useState, useEffect } from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Bousnitra Saida",
    role: "CEO, MAJORELLE CENTRE D'AFFAIRE",
    text: "Group Digital Concept a transformé notre présence digitale. Grâce à leur expertise, nous avons considérablement amélioré notre visibilité.",
    stars: 5
  },
  {
    name: "Mehdi Berrada",
    role: "CEO, MM RÉSEAUX COM",
    text: "Une agence de communication digitale au Maroc qui maîtrise parfaitement son domaine.",
    stars: 5
  },
  {
    name: "Karim Belkadi",
    role: "CEO, COMPAGNONS BÂTIMENT",
    text: "Nous avons confié la refonte de notre site internet à Group Digital Concept et nous sommes ravis du résultat.",
    stars: 5
  },
  {
    name: "Samir Aït Benhaddou",
    role: "CEO, LOCATION CENTRE D'APPEL",
    text: "Leur expertise en SEO et SEA a boosté notre visibilité sur Google. Un vrai partenaire !",
    stars: 5
  },
  {
    name: "Oussama Jabrane",
    role: "CEO, GROUP PLANCYCALL",
    text: "Professionnels et réactifs, ils ont su comprendre nos besoins. Notre présence en ligne est performante.",
    stars: 5
  },
  {
    name: "Sarah Lahlou",
    role: "Fondatrice, BIO MAROC",
    text: "Un site e-commerce magnifique qui convertit. L'interface est intuitive pour mes clients.",
    stars: 5
  },
  {
    name: "Youssef El Alami",
    role: "Directeur, TECH SOLUTIONS",
    text: "Excellent travail sur notre application web. L'équipe technique est très compétente.",
    stars: 5
  },
  {
    name: "Amina Tazi",
    role: "Gérante, RIAD LUXE",
    text: "Depuis la mise en ligne du nouveau site, nos réservations directes ont augmenté de 40%.",
    stars: 5
  },
  {
    name: "Hassan Chraibi",
    role: "Marketing, AUTO PRO",
    text: "Une stratégie de génération de leads redoutable. Je recommande vivement.",
    stars: 5
  }
];

export const EcommerceTestimonials: React.FC = () => {
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
      className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#000000] overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-red/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-20 ${!isMobile ? 'transition-all duration-1000' : ''} ${isVisible || isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
                <Sparkles size={14} className="text-brand-red animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
                    Avis Clients
                </span>
             </div>
             
             <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-black dark:text-white mb-6 max-w-5xl mx-auto leading-tight">
                Les Témoignages de Nos Clients : <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
                    Des Succès Inspirants
                </span>
             </h2>
        </div>

        {/* --- LADDER GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {TESTIMONIALS.map((testimonial, index) => {
                // Determine Ladder Offset - Only for Desktop
                let ladderClass = "";
                if (!isMobile) {
                  if (index % 3 === 1) ladderClass = "lg:mt-8"; 
                  if (index % 3 === 2) ladderClass = "lg:mt-16";
                }

                return (
                    <div 
                        key={index}
                        className={`
                            group relative p-6 rounded-[24px]
                            bg-white/70 dark:bg-[#0A0A0A]/80 
                            backdrop-blur-xl
                            border border-black/5 dark:border-white/10
                            transition-all duration-500 ease-out
                            overflow-hidden
                            flex flex-col justify-between
                            min-h-[240px]
                            ${ladderClass}
                            ${!isMobile ? 'hover:-translate-y-2 hover:shadow-2xl' : 'shadow-lg'}
                            ${isVisible || isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                        `}
                        style={{ transitionDelay: !isMobile ? `${index * 100}ms` : '0ms' }}
                    >
                        {!isMobile && (
                          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1s_ease-in-out] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20 pointer-events-none"></div>
                        )}
                        
                        <div className={`absolute top-4 right-4 opacity-5 transition-opacity duration-500 ${!isMobile ? 'group-hover:opacity-10' : ''}`}>
                            <Quote size={48} className="text-black dark:text-white rotate-12" />
                        </div>

                        <div className="flex gap-1 mb-4 relative z-10">
                            {[...Array(testimonial.stars)].map((_, i) => (
                                <Star key={i} size={12} className="fill-orange-500 text-orange-500" />
                            ))}
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 font-medium text-sm leading-relaxed mb-6 relative z-10">
                            "{testimonial.text}"
                        </p>

                        <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5 relative z-10 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-red to-red-800 flex items-center justify-center text-white font-bold text-xs shadow-md">
                                {testimonial.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-black dark:text-white text-xs uppercase tracking-wide">
                                    {testimonial.name}
                                </h4>
                                <p className="text-[9px] font-bold text-brand-red uppercase tracking-widest mt-0.5">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
      </div>

      <style>{`
        @keyframes shine {
            0% { transform: translateX(-100%) skewX(-15deg); }
            100% { transform: translateX(200%) skewX(-15deg); }
        }
      `}</style>
    </section>
  );
};
