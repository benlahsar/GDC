
import React from 'react';
import { Palmtree, Landmark, ShoppingBag, Rocket, ArrowRight } from 'lucide-react';

const SPECIALIZATIONS = [
  {
    title: "Hôtellerie & Riads",
    subtitle: "Expérience Client Digitale",
    desc: "Systèmes de réservation directe, clés mobiles, et conciergerie intégrée pour les établissements de prestige à Marrakech.",
    icon: Palmtree,
    image: "https://images.unsplash.com/photo-1590073844006-3a44a7f39e83?q=80&w=2690&auto=format&fit=crop",
    color: "from-orange-500/20 to-brand-red/20"
  },
  {
    title: "Immobilier de Luxe",
    subtitle: "Ventes & Visites",
    desc: "Plateformes de gestion de mandats, visites virtuelles immersives et tunnels de capture de leads qualifiés.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop",
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "E-Commerce Local",
    subtitle: "D2C & Logistique",
    desc: "Applications de vente en ligne avec gestion de stock en temps réel et intégration des livreurs locaux.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2670&auto=format&fit=crop",
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

export const AppMarketSpecialization: React.FC = () => {
  return (
    <section className="relative w-full py-24 px-4 md:px-8 lg:px-12 bg-[#F0F0F2] dark:bg-[#050505] transition-colors duration-500">
      <div className="max-w-[1700px] mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 mb-6">
            <Rocket size={14} className="text-brand-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">Verticales Métiers</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter uppercase mb-6 leading-none">
            Expertise <span className="text-brand-red">Sectorielle</span> Marrakech
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-medium max-w-2xl mx-auto text-lg">
            Nous adaptons nos architectures mobiles aux besoins spécifiques des piliers économiques de la ville ocre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIALIZATIONS.map((spec, idx) => (
            <div key={idx} className="group relative h-[500px] rounded-[48px] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl transition-all duration-700 hover:-translate-y-2">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img src={spec.image} alt={spec.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500">
                  <spec.icon size={28} strokeWidth={1.5} />
                </div>
                
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red mb-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">{spec.subtitle}</span>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{spec.title}</h3>
                <p className="text-gray-300 text-sm font-medium leading-relaxed mb-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {spec.desc}
                </p>

                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  En savoir plus <ArrowRight size={16} className="text-brand-red" />
                </div>
              </div>

              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
