
"use client"

import React, { useState, useEffect } from 'react';
import { 
  Target, Search, Map, Activity, 
  ArrowRight, Sparkles, Zap, 
  CheckCircle2, Fingerprint, Cpu, 
  Layers, Compass, MousePointer2 
} from 'lucide-react';

const STEPS = [
  {
    id: "01",
    title: "Consultation & Immersion",
    subtitle: "AUDIT DE L'ADN",
    description: "Nous commençons par une phase d'écoute active pour saisir l'essence de votre marque. Cette immersion nous permet de comprendre vos objectifs commerciaux et vos défis pour construire une relation de partenariat solide.",
    icon: Fingerprint,
    color: "from-brand-red to-red-900",
    accent: "text-brand-red",
    bg: "bg-brand-red/5",
    details: ["Analyse Visionnaire", "Benchmark Secteur", "Audit d'Identité"]
  },
  {
    id: "02",
    title: "Intelligence & Analyse",
    subtitle: "DÉCODAGE DATA",
    description: "Nos experts réalisent un diagnostic complet de votre écosystème. Nous analysons vos données et le positionnement concurrentiel pour identifier les leviers de croissance les plus performants.",
    icon: Cpu,
    color: "from-blue-600 to-indigo-900",
    accent: "text-blue-500",
    bg: "bg-blue-500/5",
    details: ["Data Mining", "Mapping Concurrentiel", "Optimisation Technique"]
  },
  {
    id: "03",
    title: "Stratégie & Roadmap",
    subtitle: "PLAN D'ACTION ELITE",
    description: "Sur la base de nos analyses, nous concevons une stratégie sur mesure. Nous définissons une feuille de route claire et établissons des KPIs précis pour mesurer chaque succès.",
    icon: Compass,
    color: "from-purple-600 to-pink-900",
    accent: "text-purple-500",
    bg: "bg-purple-500/5",
    details: ["Planification Agile", "Ciblage Chirurgical", "Feuille de Route"]
  },
  {
    id: "04",
    title: "Exécution & Impact",
    subtitle: "DÉPLOIEMENT PERFORMANCE",
    description: "Nous mettons en œuvre les solutions définies avec rigueur. Nos équipes suivent de près l'exécution et effectuent des ajustements en temps réel pour maximiser votre retour sur investissement.",
    icon: Activity,
    color: "from-emerald-600 to-teal-900",
    accent: "text-emerald-500",
    bg: "bg-emerald-500/5",
    details: ["Monitoring 24/7", "Optimisation ROI", "Rapports d'Impact"]
  }
];

export const AgencyMethodology: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  return (
    <section className="relative w-full py-24 md:py-40 bg-[#F8F8FA] dark:bg-[#020202] transition-colors duration-700 overflow-hidden border-y border-black/5 dark:border-white/5">
      
      {/* --- CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-red/[0.02] rounded-full blur-[150px] transition-opacity duration-1000 ${hoveredStep === '01' || hoveredStep === '04' ? 'opacity-100' : 'opacity-40'}`}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#F8F8FA_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#020202_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
           <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm">
              <Layers size={14} className="text-brand-red animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-800 dark:text-gray-200">PROCESSUS D'EXCELLENCE</span>
           </div>
           
           <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-black dark:text-white uppercase italic flex flex-wrap justify-center">
              Notre<span className="inline-block w-4 md:w-8 lg:w-12">&nbsp;</span><span className="text-brand-red not-italic">Protocole.</span>
           </h2>
           
           <div className="mt-12 flex flex-col items-center gap-6 max-w-2xl">
              <div className="h-px w-24 bg-brand-red"></div>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                Une ingénierie stratégique en quatre modules interdépendants pour une transformation digitale sans compromis.
              </p>
           </div>
        </div>

        {/* --- MODULAR BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {STEPS.map((step, idx) => (
                <div 
                    key={step.id}
                    className={`
                        group relative flex flex-col justify-between min-h-[450px] md:min-h-[550px]
                        rounded-[48px] p-8 md:p-10 lg:p-12
                        bg-white dark:bg-[#0A0A0A]
                        border border-black/[0.03] dark:border-white/[0.05]
                        transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                        shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]
                        ${!isMobile ? 'hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_40px_80px_-20px_rgba(255,0,0,0.15)] hover:border-brand-red/30' : ''}
                        overflow-hidden isolate
                    `}
                    onMouseEnter={() => !isMobile && setHoveredStep(step.id)}
                    onMouseLeave={() => !isMobile && setHoveredStep(null)}
                >
                    {/* Background Decor */}
                    <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`}></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>

                    {/* Step ID Number (Large Background) */}
                    <span className="absolute -top-6 -left-6 text-[10rem] md:text-[14rem] font-black text-black/[0.02] dark:text-white/[0.02] leading-none select-none transition-colors duration-700 group-hover:text-brand-red/[0.04]">
                        {step.id}
                    </span>

                    {/* Header Content */}
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-12">
                            <div className={`
                                w-16 h-16 rounded-3xl ${step.bg} border border-black/5 dark:border-white/10
                                flex items-center justify-center ${step.accent}
                                shadow-inner transition-all duration-700
                                group-hover:bg-brand-red group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-red-900/20
                            `}>
                                <step.icon size={32} strokeWidth={1.5} />
                            </div>
                            <div className="flex gap-1.5 pt-2">
                                {[1,2,3].map(i => <div key={i} className={`w-1 h-1 rounded-full ${i <= (idx+1) ? 'bg-brand-red' : 'bg-black/10 dark:bg-white/10'}`}></div>)}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red">{step.subtitle}</span>
                            <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white leading-[1.1] uppercase tracking-tighter">
                                {step.title}
                            </h3>
                            <div className="h-[2px] w-12 bg-black/10 dark:bg-white/10 group-hover:w-full group-hover:bg-brand-red/30 transition-all duration-700"></div>
                        </div>
                    </div>

                    {/* Description Area */}
                    <div className="relative z-10 mt-8">
                        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg font-medium leading-relaxed mb-8 text-justify transition-colors duration-500 group-hover:text-black dark:group-hover:text-white">
                            {step.description}
                        </p>
                        
                        {/* Features List */}
                        <div className="flex flex-wrap gap-2">
                            {step.details.map((detail, dIdx) => (
                                <div key={dIdx} className="px-4 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-brand-red"></div>
                                    <span className="text-[9px] font-black uppercase text-gray-500 dark:text-gray-400">{detail}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Status / Tech Label */}
                    <div className="relative z-10 mt-12 pt-8 border-t border-black/5 dark:border-white/10 flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-[9px] font-black uppercase tracking-widest">Active Process</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[9px] font-black uppercase tracking-[0.2em]">Module {step.id}</span>
                            {!isMobile && <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* --- CALL TO ACTION BAR --- */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 rounded-[48px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="w-20 h-20 rounded-[2rem] bg-black dark:bg-white flex items-center justify-center text-white dark:text-black shadow-xl group-hover:rotate-12 transition-transform duration-700">
                    <Zap size={36} fill="currentColor" />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white tracking-tighter uppercase leading-none mb-2">Prêt pour le Lancement ?</h3>
                    <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">Démarrons votre transformation digitale avec notre expertise certifiée.</p>
                </div>
            </div>

            <div className="relative z-10">
                <a 
                    href="#contact" 
                    className="group/btn relative px-12 py-6 overflow-hidden rounded-3xl bg-black dark:bg-white text-white dark:text-black font-black uppercase text-[11px] tracking-[0.4em] shadow-2xl flex items-center gap-6 transition-all hover:scale-105 active:scale-95"
                >
                    <span className="relative z-10">DÉPLOYER MON PROJET</span>
                    <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                    <div className="absolute inset-0 bg-brand-red translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700"></div>
                </a>
            </div>
        </div>

      </div>

      <style>{`
        @keyframes liquid-morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg); }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(180deg); }
        }
        .animate-liquid-morph { animation: liquid-morph 12s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </section>
  );
};
