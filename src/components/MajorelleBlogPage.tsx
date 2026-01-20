"use client"
import React, { useEffect } from 'react';
import { 
  Building2, MapPin, Globe, CheckCircle2, 
  ArrowRight, Sparkles, Layout, Smartphone, 
  Zap, Search, MessageSquare, Target, Brain, 
  Briefcase, PhoneCall, Award, Landmark, ExternalLink,
  Code2, BarChart3, Rocket, MousePointer2, Monitor,
  TrendingUp
} from 'lucide-react';

export const MajorelleBlogPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0F0F2] dark:bg-[#020202] pt-48 pb-32 transition-colors duration-500 relative overflow-hidden">
      
      {/* --- Background Ambient Glows --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/[0.02] rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        
        {/* --- CASE STUDY HEADER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 w-fit border border-brand-red/20">
              <Sparkles size={16} className="text-brand-red animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black dark:text-white">Success Story GDC-001</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black dark:text-white tracking-tighter leading-[0.95] uppercase mb-10">
              Étude de Cas : <br/>
              <span className="text-brand-red">Majorelle</span> <br/>
              Centre d’Affaires.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed border-l-4 border-brand-red pl-8 mb-10">
              Comment notre agence a propulsé le centre d'affaires N°1 à Marrakech au sommet du digital grâce à une plateforme haute performance et une stratégie SEO agressive.
            </p>

            <div className="flex flex-wrap gap-4">
               <a href="https://majorelle-centreaffaires.com/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:scale-105 transition-transform shadow-xl">
                  Visiter le site live <ExternalLink size={14} />
               </a>
            </div>
          </div>

          {/* Hero Main Image (Screenshot 1 - Swapped URL) */}
          <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-brand-red/10 blur-3xl rounded-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-[48px] overflow-hidden bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 shadow-2xl p-2 transition-all duration-700 hover:scale-[1.02] hover:-rotate-1">
                 <img 
                   src="https://group-digitalconcept.com/wp-content/uploads/2025/12/Capture-decran-2025-12-22-111738.png" 
                   alt="Majorelle Website Preview" 
                   className="w-full h-auto rounded-[40px] shadow-inner"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/5 via-transparent to-transparent pointer-events-none"></div>
              </div>
              {/* Status Badge */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-red rounded-full flex flex-col items-center justify-center text-white p-4 text-center shadow-2xl animate-float border-4 border-[#F0F0F2] dark:border-[#020202]">
                 <span className="text-xl font-black">EN LIGNE</span>
                 <span className="text-[8px] font-bold uppercase tracking-widest leading-tight">PROJET <br/> CERTIFIÉ</span>
              </div>
          </div>
        </div>

        {/* --- BENTO CASE STUDY CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Section 1: Développement Web (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-12 border border-black/5 dark:border-white/10 shadow-xl group hover:border-brand-red/20 transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <Code2 size={120} className="text-brand-red" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                  <Layout size={28} />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black dark:text-white">
                  1. Développement Web Premium
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8">
                Pour Majorelle Centre d’Affaires, nous avons conçu un site web moderne sous WordPress/Elementor, alliant esthétique épurée et fluidité technique. L'objectif était de digitaliser l'offre de domiciliation et de location de bureaux with un tunnel de conversion optimisé.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {[
                  "Design UI/UX sophistiqué reflétant le prestige du centre.",
                  "Architecture Mobile-First pour une accessibilité totale.",
                  "Système de contact et de réservation intelligent intégré.",
                  "Hébergement haute performance pour un temps de réponse minimal."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5 group/tip hover:bg-white dark:hover:bg-white/10 transition-colors">
                    <CheckCircle2 size={20} className="text-brand-red shrink-0" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Detail Image Preview (Swapped URL) */}
              <div className="mt-auto p-1 rounded-3xl bg-gray-100 dark:bg-black/40 border border-black/5 dark:border-white/10 overflow-hidden">
                 <img 
                    src="https://group-digitalconcept.com/wp-content/uploads/2025/12/Capture-decran-2025-12-22-111836.png" 
                    alt="Section Details Preview" 
                    className="w-full h-auto rounded-2xl group-hover:scale-[1.02] transition-transform duration-700"
                 />
              </div>
            </div>
          </div>

          {/* Section 2: SEO Strategy (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex-1 bg-[#111] text-white rounded-[40px] p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-transparent opacity-40"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform">
                    <Search size={28} />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight mb-6">
                    2. SEO & Référencement Naturel
                </h2>
                
                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium mb-10">
                    La visibilité sur Google était le défi majeur. Nous avons déployé une stratégie SEO locale agressive pour dominer les recherches à Marrakech.
                </p>

                <ul className="space-y-6 flex-grow">
                    {[
                    "Audit sémantique et ciblage de mots-clés stratégiques.",
                    "Optimisation technique (Core Web Vitals) pour Google.",
                    "Stratégie de netlinking locale de haute qualité."
                    ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm font-black group/item">
                        <div className="w-8 h-8 rounded-full bg-brand-red/20 flex items-center justify-center group-hover/item:bg-brand-red transition-colors">
                        <ArrowRight size={14} className="text-white" />
                        </div>
                        {item}
                    </li>
                    ))}
                </ul>

                <div className="mt-10 p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red mb-1">Status Google</p>
                    <p className="text-2xl font-black">#1 sur Marrakech</p>
                </div>
                </div>
            </div>

            {/* Quote Card */}
            <div className="bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 border border-black/5 dark:border-white/10 shadow-xl group relative overflow-hidden">
                <div className="relative z-10">
                    <MessageSquare size={32} className="text-brand-red mb-6" />
                    <p className="text-lg font-serif italic text-black dark:text-white leading-relaxed mb-6">
                        "L'interface web réalisée par GDC a radicalement changé notre flux de réservations."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white font-black text-[10px]">M</div>
                        <div>
                            <p className="text-xs font-bold text-black dark:text-white">Direction Majorelle</p>
                            <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Client Partenaire</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Section 3: Impact (Full Width) */}
          <div className="lg:col-span-12 bg-white dark:bg-[#0A0A0A] rounded-[40px] p-8 md:p-14 border border-black/5 dark:border-white/10 shadow-xl overflow-hidden relative group">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/[0.02] rounded-full blur-[80px]"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="lg:w-1/2">
                   <div className="w-16 h-16 rounded-[2rem] bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-8 text-brand-red group-hover:rotate-12 transition-transform duration-500 shadow-sm border border-black/5 dark:border-white/10">
                      <BarChart3 size={32} />
                   </div>
                   <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white tracking-tighter leading-tight mb-8">
                     L'Impact : <br/>
                     <span className="text-brand-red">Résultats Mesurables</span>
                   </h2>
                   <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
                     Grâce à notre intervention, Majorelle Centre d'Affaires a vu son trafic organique exploser, générant un flux constant de leads qualifiés pour ses services de domiciliation et location.
                   </p>
                </div>

                <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { t: "+150% Trafic", d: "Croissance organique sur les 6 premiers mois.", icon: TrendingUp },
                    { t: "Top 3 Google", d: "Positionné sur 'Centre d'affaires Marrakech'.", icon: Search },
                    { t: "Conversion x2", d: "Grâce à une interface UX optimisée.", icon: Zap },
                    { t: "SEO Local Elite", d: "Domination totale zone Gueliz.", icon: MapPin }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-brand-red/5 hover:border-brand-red/20 transition-all duration-300">
                      <h4 className="font-black text-xl uppercase tracking-tighter mb-2 text-brand-red">{stat.t}</h4>
                      <p className="text-[10px] opacity-70 font-bold uppercase tracking-widest">{stat.d}</p>
                    </div>
                  ))}
                </div>
             </div>
          </div>

        </div>
      </div>

    </div>
  );
};
