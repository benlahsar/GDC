"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const REGIONAL_DETAILS = [
  {
    city: "Maroc",
    title: "Création d'Application Maroc",
    desc: "Notre agence pionnière en création d'application Maroc déploie des solutions mobiles stratégiques sur l'ensemble du territoire national. Forte de notre expérience multisectorielle, nous concevons des applications sur mesure qui répondent aux exigences techniques et culturelles spécifiques de chaque région, tout en intégrant les dernières innovations technologiques pour une performance optimale sur les stores nationaux et internationaux.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
  },
  {
    city: "Marrakech",
    title: "Création d'Application Marrakech",
    desc: "Spécialistes de la création d'application Marrakech, nous développons des solutions mobiles qui capturent l'essence même de la ville ocre. Nos applications pour artisans, riads et entreprises locales marient harmonieusement des interfaces inspirées du patrimoine marrakchi avec des fonctionnalités techniques avancées, incluant notamment la géolocalisation précise des établissements, la réservation en temps réel et des systèmes de paiement adaptés aux particularités du marché régional, le tout avec une optimisation ASO poussée pour maximiser la visibilité sur les stores.",
    image:
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=2669&auto=format&fit=crop",
  },
  {
    city: "Casablanca",
    title: "Création d'Application Casablanca",
    desc: "Notre expertise en création d'application Casablanca se traduit par des solutions corporate hautement performantes spécialement conçues pour la capitale économique. Nous intégrons des architectures techniques robustes capables de gérer des flux transactionnels importants, des systèmes de synchronisation en temps réel avec les ERP existants, et des tunnels de conversion ultra-optimisés qui transforment les visiteurs en clients fidèles, le tout sécurisé par des protocoles de chiffrement conformes aux standards internationaux.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    city: "Rabat",
    title: "Création d'Application Rabat",
    desc: "La création d'application Rabat que nous proposons répond aux exigences strictes des institutions et administrations publiques. Nos solutions intègrent des mécanismes de sécurité avancés certifiés par les autorités marocaines, des interfaces administratives multilingues (français, arabe, anglais) dotées de systèmes de gestion des accès hiérarchisés, le tout développé dans le respect absolu des normes gouvernementales en vigueur en matière de protection des données sensibles.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    city: "Tanger",
    title: "Création d'Application Tanger",
    desc: "Notre approche de création d'application Tanger se distingue par des plateformes cross-border innovantes. Nous développons des applications multilingues (français, espagnol, arabe) dotées de modules logistiques intelligents pour le suivi des marchandises, des interfaces adaptées aux échanges transcontinentaux et des systèmes de paiement multi-devises, spécialement conçus pour faciliter les transactions commerciales entre le Maroc et l'Europe.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    city: "Agadir",
    title: "Création d'Application Agadir",
    desc: "Experts en création d'application Agadir, nous concevons des solutions touristiques complexes qui transforment l'expérience visiteur. Nos applications intègrent des guides interactifs enrichis de réalité augmentée, des systèmes de réservation unifiés pour les activités et hébergements, ainsi qu'une géolocalisation précise des points d'intérêt, le tout optimisé pour répondre aux fluctuations saisonnières caractéristiques de la destination.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
];

export const AppDetailedRegionalExpertise: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#000000] transition-colors duration-500 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1000px] bg-brand-red/[0.01] blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm">
            <Sparkles size={14} className="text-brand-red animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-800 dark:text-gray-200">
              Expansion Nationale
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black dark:text-white uppercase">
            Notre Expertise en{" "}
            <span className="text-brand-red">Création d'Application</span> au
            Maroc
          </h2>
          <div className="w-24 h-1.5 bg-brand-red mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Vertical List of Horizontal Cards */}
        <div className="flex flex-col gap-10 md:gap-16">
          {REGIONAL_DETAILS.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col lg:flex-row items-stretch bg-white dark:bg-[#080808] rounded-[40px] md:rounded-[60px] border-2 border-brand-red shadow-2xl shadow-brand-red/5 overflow-hidden transition-all duration-700 hover:shadow-brand-red/10 hover:-translate-y-1 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Image Side (Left on Desktop) */}
              <div className="lg:w-[40%] xl:w-[35%] h-[300px] lg:h-auto relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Content Side (Right on Desktop) */}
              <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-brand-red mb-3 block">
                    Group Digital Concept
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-blue-600 dark:text-brand-red leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed text-justify mb-8">
                  {item.desc}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white shadow-lg group-hover:rotate-45 transition-transform duration-500">
                    <ArrowRight size={18} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-brand-red transition-colors">
                    Découvrir le projet
                  </span>
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent skew-x-12 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
