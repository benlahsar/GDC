
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Star, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';

const METHODOLOGY_STEPS = [
  {
    id: 1,
    title: "Consultation Initiale",
    content: "Nous commençons par une phase d'écoute active pour comprendre vos besoins, votre marché cible et vos objectifs spécifiques concernant votre nom de domaine et votre identité digitale."
  },
  {
    id: 2,
    title: "Audit et Analyse",
    content: "Analyse approfondie de la disponibilité, de la concurrence et des opportunités SEO pour sélectionner les extensions (.ma, .com) les plus performantes pour votre marque."
  },
  {
    id: 3,
    title: "Élaboration du Plan d'Action",
    content: "Définition d'une stratégie claire : réservation, protection de marque, configuration DNS et mise en place des redirections nécessaires."
  },
  {
    id: 4,
    title: "Exécution et Suivi",
    content: "Mise en œuvre technique immédiate, sécurisation SSL, et surveillance continue pour garantir la pérennité de votre actif numérique."
  }
];

const TESTIMONIALS = [
  {
    name: "Mehdi Berrada",
    role: "CEO, MM RÉSEAUX COM",
    text: "Une agence de communication digitale au Maroc qui maîtrise parfaitement son domaine. Leur équipe nous a accompagné sur le SEO et la publicité en ligne avec des résultats impressionnants."
  },
  {
    name: "Karim Belkadi",
    role: "CEO, GROUP DES COMPAGNONS EN BÂTIMENT",
    text: "Nous avons confié la refonte de notre site internet à Group Digital Concept et nous sommes ravis du résultat. Design moderne, site rapide et bien optimisé pour le référencement."
  },
  {
    name: "Samir Ait Benhaddou",
    role: "CEO, LOCATION CENTRE D'APPEL",
    text: "Leur expertise en SEO et SEA a boosté notre visibilité sur Google. Nous recevons désormais plus de demandes qualifiées. Un vrai partenaire de croissance !"
  },
  {
    name: "Oussama Jabrane",
    role: "CEO, GROUP PLANCYCALL",
    text: "Professionnels et réactifs, ils ont su comprendre nos besoins et mettre en place une stratégie digitale efficace. Notre présence en ligne est bien plus performante."
  },
  {
    name: "Nadia El Fakir",
    role: "RESPONSABLE MARKETING",
    text: "Une agence sérieuse et compétente. Leur équipe a conçu un site e-commerce fluide et sécurisé pour notre boutique en ligne. Très satisfaite du travail !"
  }
];

export const DomainProcessTestimonials: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-[#F0F0F2] dark:bg-black text-black dark:text-white overflow-hidden transition-colors duration-500">
      
      {/* --- PART 1: METHODOLOGY --- */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Title */}
            <div className={`lg:col-span-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="sticky top-32">
                    <div className="w-3 h-3 bg-brand-red rounded-full mb-6 animate-pulse"></div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8 text-black dark:text-white">
                        Notre Méthodologie <br/>
                        de Travail <ArrowRight className="inline-block ml-2 w-8 h-8 md:w-12 md:h-12 text-brand-red" />
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-medium leading-relaxed max-w-md">
                        Un processus structuré et transparent pour garantir le succès de votre projet, de l'idée à la concrétisation.
                    </p>
                </div>
            </div>

            {/* Right Interactive List */}
            <div className={`lg:col-span-7 flex flex-col gap-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                {METHODOLOGY_STEPS.map((step) => (
                    <div 
                        key={step.id}
                        className={`
                            border-b pb-6 cursor-pointer group transition-all duration-500
                            ${activeStep === step.id 
                                ? 'opacity-100 border-black/20 dark:border-white/20' 
                                : 'opacity-50 hover:opacity-100 border-black/5 dark:border-white/10'
                            }
                        `}
                        onMouseEnter={() => setActiveStep(step.id)}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className={`text-2xl md:text-3xl font-bold transition-colors ${activeStep === step.id ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white'}`}>
                                {step.id}. {step.title}
                            </h3>
                            <ChevronDown 
                                className={`transition-transform duration-500 ${activeStep === step.id ? 'rotate-180 text-brand-red' : 'text-gray-400 dark:text-gray-600'}`} 
                            />
                        </div>
                        
                        <div className={`
                            overflow-hidden transition-all duration-500 ease-in-out
                            ${activeStep === step.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                        `}>
                            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed pl-2 border-l-2 border-brand-red ml-1">
                                {step.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* --- PART 2: TESTIMONIALS --- */}
      <div className={`
          relative w-full 
          bg-white dark:bg-[#111] 
          text-black dark:text-white
          rounded-[40px] md:rounded-[60px] 
          py-20 md:py-24 
          overflow-hidden
          shadow-xl dark:shadow-none
          transition-transform duration-1000 delay-300
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}>
          {/* Decorative Sparkle */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10">
              <div className="w-1 h-16 bg-gradient-to-b from-transparent to-brand-red"></div>
              <div className="text-brand-red animate-pulse">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
              </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-black dark:text-white">
                  Les Témoignages de Nos Clients :
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-bold">
                  Des Succès Inspirants avec Notre Agence Web
              </p>
          </div>

          {/* Infinite Scroll Container */}
          <div className="relative w-full overflow-hidden group/scroll">
              <div className="flex animate-scroll hover:[animation-play-state:paused] w-max gap-6 px-6">
                  {[...TESTIMONIALS, ...TESTIMONIALS].map((review, index) => (
                      <div 
                          key={index}
                          className="
                              w-[350px] md:w-[400px] 
                              bg-[#F5F5F7] dark:bg-black 
                              text-black dark:text-white 
                              p-8 rounded-[24px] 
                              flex flex-col justify-between
                              border border-black/5 dark:border-white/10
                              hover:scale-[1.02] transition-transform duration-300
                              hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-brand-red/10
                          "
                      >
                          <div>
                              <div className="flex items-start justify-between mb-6">
                                  <div>
                                      <h4 className="text-lg font-bold text-black dark:text-white leading-tight">{review.name}</h4>
                                      <p className="text-[10px] font-bold text-brand-red uppercase tracking-wider mt-1">{review.role}</p>
                                  </div>
                                  <Quote className="text-gray-300 dark:text-gray-700 rotate-180" size={24} />
                              </div>
                              
                              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-medium">
                                  "{review.text}"
                              </p>
                          </div>

                          <div className="flex gap-1">
                              {[1,2,3,4,5].map(star => (
                                  <Star key={star} size={14} className="fill-orange-500 text-orange-500" />
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
              
              {/* Fade Edges */}
              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-[#111] to-transparent pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-[#111] to-transparent pointer-events-none"></div>
          </div>

      </div>

    </section>
  );
};
