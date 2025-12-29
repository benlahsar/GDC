
import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus, ArrowDownRight, Sparkles, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "Pourquoi acheter un nom de domaine à Marrakech ?",
    answer: "Un nom de domaine est essentiel pour établir votre présence en ligne et renforcer votre crédibilité. Il vous permet d'avoir une adresse web professionnelle et d'améliorer votre visibilité sur internet auprès de votre clientèle locale et internationale."
  },
  {
    question: "Comment choisir le bon nom de domaine pour mon entreprise ?",
    answer: "Optez pour un nom court, mémorable et facile à épeler. Il doit refléter votre activité et idéalement contenir des mots-clés pertinents pour votre SEO local à Marrakech. Nous vous conseillons d'éviter les traits d'union multiples."
  },
  {
    question: "Quelle est la différence entre un domaine .ma et un .com ?",
    answer: "Le .ma cible spécifiquement le marché marocain et améliore significativement votre référencement local au Maroc. Le .com est une extension internationale, idéale si vous visez une audience globale ou si vous souhaitez protéger votre marque à l'international."
  },
  {
    question: "Combien coûte un nom de domaine à Marrakech ?",
    answer: "Les prix varient selon l'extension (.ma, .com, .net, etc.) et la rareté du nom. Chez Group Digital Concept, nous proposons des tarifs compétitifs incluant la gestion DNS, la protection de vos données et un support technique réactif."
  },
  {
    question: "Comment sécuriser mon nom de domaine contre le cybersquatting ?",
    answer: "Nous recommandons d'enregistrer les variantes principales de votre nom de domaine (différentes extensions, fautes d'orthographe courantes) et d'activer le verrouillage de transfert. Notre service inclut une surveillance proactive."
  },
  {
    question: "Que se passe-t-il si mon nom de domaine est déjà pris ?",
    answer: "Si le domaine est déjà enregistré, nous pouvons vous aider à trouver des alternatives pertinentes ou engager une procédure de rachat s'il est à vendre. Nous proposons aussi un service de surveillance (backorder) pour être alerté s'il redevient disponible."
  },
  {
    question: "Comment transférer un nom de domaine vers un autre fournisseur ?",
    answer: "Le transfert nécessite le code EPP (Auth Code) que nous vous aidons à obtenir, et le déverrouillage du domaine chez l'ancien registrar. Notre équipe technique gère l'intégralité du processus pour garantir une transition sans interruption de service."
  },
  {
    question: "Dois-je renouveler mon nom de domaine chaque année ?",
    answer: "Oui, un nom de domaine se loue pour une période définie (généralement de 1 à 10 ans). Nous proposons le renouvellement automatique pour éviter toute perte accidentelle de votre adresse web et de votre trafic."
  },
  {
    question: "Puis-je acheter un nom de domaine sans créer de site web immédiatement ?",
    answer: "Absolument. Vous pouvez réserver votre nom de domaine pour protéger votre marque et l'utiliser plus tard. En attendant, nous pouvons configurer une page d'attente professionnelle ou rediriger le trafic vers vos réseaux sociaux."
  },
  {
    question: "Offrez-vous des services complémentaires avec l'achat de domaine ?",
    answer: "Oui, nous proposons une suite complète : hébergement web haute performance, création d'adresses emails professionnelles, certificats SSL pour la sécurité, et une gestion DNS avancée pour optimiser la rapidité de votre site."
  }
];

export const DomainFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section ref={sectionRef} className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">
        
        {/* Background Ambience */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/[0.02] rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/[0.02] rounded-full blur-[120px]"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                
                {/* --- LEFT SIDE: STICKY TITLE --- */}
                <div className="lg:col-span-5">
                    <div className={`lg:sticky lg:top-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        
                        <div className="mb-8">
                            <Sparkles className="text-brand-red w-8 h-8 mb-6 animate-pulse" />
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1] text-black dark:text-white mb-6">
                                Explorez les questions <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
                                    fréquemment posées
                                </span>
                            </h2>
                            <div className="w-20 h-1.5 bg-brand-red rounded-full"></div>
                        </div>

                        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-md hidden lg:block">
                            Vous avez des interrogations sur l'achat ou la gestion de votre nom de domaine ? Nos experts ont rassemblé ici les réponses essentielles pour vous guider.
                        </p>

                        <div className="mt-12 hidden lg:block">
                            <div className="p-6 rounded-[24px] bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/10 transition-colors duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-black dark:text-white group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                                            <HelpCircle size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-black dark:text-white">Besoin d'aide ?</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Contactez notre support.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT SIDE: ACCORDION LIST --- */}
                <div className={`lg:col-span-7 flex flex-col transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="divide-y divide-black/10 dark:divide-white/10 border-t border-b border-black/10 dark:border-white/10">
                        {FAQS.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div 
                                    key={index} 
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="group cursor-pointer py-6 md:py-8"
                                >
                                    <div className="flex items-start justify-between gap-6 select-none">
                                        <h3 className={`
                                            text-lg md:text-xl font-bold leading-tight transition-colors duration-300
                                            ${isOpen 
                                                ? 'text-black dark:text-white' 
                                                : 'text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white'
                                            }
                                        `}>
                                            {faq.question}
                                        </h3>
                                        <div className={`
                                            shrink-0 transition-transform duration-500
                                            ${isOpen ? 'rotate-0' : '-rotate-90'}
                                        `}>
                                            <ArrowDownRight 
                                                className={`w-6 h-6 md:w-8 md:h-8 ${isOpen ? 'text-brand-red' : 'text-gray-400 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white'}`} 
                                            />
                                        </div>
                                    </div>
                                    
                                    <div 
                                        className={`
                                            grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                                            ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}
                                        `}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="text-base text-gray-600 dark:text-gray-300 font-medium leading-relaxed pl-0 md:pl-4 border-l-2 border-brand-red/0 md:border-brand-red md:ml-1">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};
