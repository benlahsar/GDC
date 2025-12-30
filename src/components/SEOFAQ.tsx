"use client"

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowUpRight } from 'lucide-react';

const FAQS = [
  { question: "Qu'est-ce que le référencement naturel à Marrakech ?", answer: "Le référencement naturel Marrakech (SEO) désigne l'optimisation technique et éditoriale d'un site web pour améliorer son positionnement dans les résultats Google, ciblant spécifiquement les recherches locales à Marrakech et sa région." },
  { question: "Combien de temps faut-il pour voir des résultats en SEO à Marrakech ?", answer: "Les premiers résultats du SEO à Marrakech apparaissent généralement entre 3 et 6 mois. Cela dépend de la concurrence de vos mots-clés et de l'état technique de votre site au démarrage." },
  { question: "Quels sont les tarifs d'une agence SEO à Marrakech ?", answer: "Les tarifs varient selon la complexité et les objectifs. Nous proposons des forfaits mensuels adaptés aux PME, hôtels et e-commerces locaux à Marrakech." },
  { question: "Comment optimiser un site pour le marché marrakchi ?", answer: "L'optimisation pour Marrakech passe par un contenu bilingue (ou multilingue), une géolocalisation précise sur Google Maps et l'utilisation de mots-clés spécifiques à la ville." },
  { question: "Pourquoi choisir une agence locale à Marrakech ?", answer: "Une agence à Marrakech connaît les spécificités du marché local, les comportements des consommateurs et les opportunités saisonnières liées au tourisme." },
  { question: "Quelles différences entre SEO et publicité Google Ads ?", answer: "Le SEO est un investissement durable et organique (gratuit par clic), tandis que Google Ads offre une visibilité immédiate mais payante à chaque clic." }
];

export const SEOFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left: Sticky Title */}
            <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-40">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-black dark:text-white tracking-tighter leading-none mb-10">
                        Explorez les <br/>
                        questions <br/>
                        <span className="text-brand-red">fréquemment posées</span>
                    </h2>
                    <div className="flex items-center gap-4 p-6 rounded-[32px] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 w-fit">
                        <HelpCircle className="text-brand-red" size={24} />
                        <p className="text-sm font-bold text-gray-500">Besoin d'une analyse spécifique ?</p>
                        <a href="#contact" className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center hover:scale-110 transition-transform">
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right: Accordion */}
            <div className="lg:col-span-7 flex flex-col gap-4">
                {FAQS.map((faq, index) => (
                    <div 
                        key={index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className={`
                            group relative rounded-[32px] transition-all duration-500 cursor-pointer overflow-hidden
                            ${openIndex === index 
                                ? 'bg-white dark:bg-[#0A0A0A] shadow-2xl scale-[1.01] border-brand-red/30' 
                                : 'bg-transparent hover:bg-white/40 dark:hover:bg-white/5 border-transparent'
                            }
                            border
                        `}
                    >
                        <div className="p-6 md:p-8">
                            <div className="flex items-center justify-between gap-6">
                                <h3 className={`text-lg md:text-xl font-bold transition-colors ${openIndex === index ? 'text-black dark:text-white' : 'text-gray-500 group-hover:text-black dark:group-hover:text-white'}`}>
                                    {faq.question}
                                </h3>
                                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all ${openIndex === index ? 'bg-brand-red border-brand-red text-white rotate-180' : 'border-black/10 dark:border-white/10 text-gray-400'}`}>
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </div>
                            <div className={`grid transition-all duration-500 ease-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="w-full h-px bg-black/5 dark:bg-white/5 mb-6"></div>
                                    <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};
