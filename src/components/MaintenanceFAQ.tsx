
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const FAQS = [
  { question: "Qu'est-ce que la maintenance web et pourquoi est-elle importante ?", answer: "La maintenance web garantit la sécurité, la performance et la mise à jour continue d'un site internet. Elle permet d'éviter les bugs, les failles de sécurité et les lenteurs." },
  { question: "Pourquoi choisir un service de maintenance web à Marrakech ?", answer: "Notre agence locale comprend les défis spécifiques du marché marocain et offre un support de proximité réactif." },
  { question: "Quels sont les types de maintenance web disponibles ?", answer: "Nous proposons la maintenance préventive, corrective et évolutive." },
  { question: "À quelle fréquence faut-il effectuer la maintenance web ?", answer: "Une maintenance de base doit être effectuée mensuellement, mais une surveillance de sécurité doit être active 24h/24." },
  { question: "Quels sont les risques d'un site sans maintenance ?", answer: "Piratage, perte de données, ralentissement du site, et baisse drastique dans les résultats Google." },
  { question: "La maintenance web inclut-elle la sauvegarde des données ?", answer: "Oui, nous effectuons des sauvegardes quotidiennes externalisées." },
  { question: "Combien coûte un service de maintenance web à Marrakech ?", answer: "Nos forfaits sont adaptés à la taille et à la complexité de votre site. Contactez-nous pour un devis." },
  { question: "Puis-je gérer moi-même la maintenance de mon site web ?", answer: "C'est possible techniquement mais risqué sans expertise approfondie." },
  { question: "Comment savoir si mon site a besoin de maintenance ?", answer: "Si votre site est lent, s'il contient des liens cassés ou si vous recevez des alertes de sécurité." },
  { question: "Quels types de sites nécessitent une maintenance web ?", answer: "Absolument tous : sites vitrines, e-commerce, blogs et plateformes applicatives." }
];

export const MaintenanceFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F4F4F5] dark:bg-[#000000] transition-colors duration-500 overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black dark:text-white tracking-tight leading-tight">
                    Explorez les questions <br/> fréquemment posées
                </h2>
                <div className="mt-8 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full border-2 border-brand-red flex items-center justify-center">
                        <div className="w-1 h-1 bg-brand-red rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Expertise Support GDC</span>
                </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col divide-y divide-black/10 dark:divide-white/10 border-t border-black/10 dark:border-white/10">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-6 group cursor-pointer" onClick={() => setOpenIndex(isOpen ? null : index)}>
                  <div className="flex items-start justify-between gap-6">
                    <h3 className={`text-lg md:text-xl font-bold leading-snug transition-colors duration-300 ${isOpen ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white'}`}>
                        {faq.question}
                    </h3>
                    <div className={`transition-transform duration-500 ${isOpen ? 'rotate-0' : '-rotate-45'}`}>
                        <ArrowUpRight className={`${isOpen ? 'text-brand-red' : 'text-gray-400 dark:text-gray-600'} w-6 h-6`} />
                    </div>
                  </div>
                  <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-2xl flex items-start gap-2">
                        <span className="text-brand-red">→</span> {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
