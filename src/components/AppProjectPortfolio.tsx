import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUpRight, Globe } from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Majorelle Centre D'affaire",
    logo: "https://groupdigitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144006.802.png",
    accent: "from-blue-500/10 to-indigo-500/10"
  },
  {
    id: 2,
    title: "Group Entreprise Des Compagnons En Bâtiments",
    logo: "https://groupdigitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144222.368.png",
    accent: "from-orange-500/10 to-red-500/10"
  },
  {
    id: 3,
    title: "Group Plancy Call",
    logo: "https://groupdigitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144356.680.png",
    accent: "from-brand-red/10 to-pink-600/10"
  },
  {
    id: 4,
    title: "M.M. Réseaux Com",
    logo: "https://groupdigitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144735.987.png",
    accent: "from-emerald-500/10 to-teal-500/10"
  }
];

export const AppProjectPortfolio: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#000000] overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/[0.02] rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 md:mb-24`}>
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
              <Globe size={14} className={`text-brand-red ${!isMobile ? 'animate-pulse' : ''}`} />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">Nos Réalisations</span>
           </div>
           <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black dark:text-white uppercase mb-8">
            Nos projets <span className="text-brand-red">digitaux :</span>
           </h2>
           <div className="w-24 h-1.5 bg-brand-red mx-auto rounded-full"></div>
        </div>

        {/* Portfolio Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROJECTS_DATA.map((project, idx) => (
                <div 
                  key={project.id}
                  className={`group relative flex flex-col items-center ${!isMobile ? 'opacity-0 animate-fade-in-up' : ''}`}
                  style={{ animationDelay: !isMobile ? `${idx * 150}ms` : '0ms' }}
                >
                    <div className={`
                        relative w-full aspect-[4/5] rounded-[48px] 
                        bg-white/80 dark:bg-[#0A0A0A]/80
                        backdrop-blur-3xl
                        border border-black/5 dark:border-white/10
                        shadow-xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                        flex items-center justify-center p-12
                        overflow-hidden
                        ${!isMobile ? 'group-hover:shadow-2xl hover:-translate-y-4 hover:border-brand-red/30' : ''}
                    `}>
                        {!isMobile && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className={`absolute inset-0 bg-gradient-to-tr ${project.accent} opacity-40 group-hover:opacity-80 transition-opacity`}></div>
                          </>
                        )}
                        
                        <div className={`relative z-10 w-full h-full flex items-center justify-center ${!isMobile ? 'animate-float' : ''}`} style={{ animationDelay: !isMobile ? `${idx * 500}ms` : '0ms' }}>
                            <img 
                                src={project.logo} 
                                alt={project.title} 
                                className={`w-full h-full object-contain filter drop-shadow-2xl ${!isMobile ? 'group-hover:scale-110 transition-transform duration-700' : ''}`}
                            />
                        </div>

                        <div className={`absolute bottom-6 right-6 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg shadow-red-900/30 ${!isMobile ? 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500' : 'opacity-100'}`}>
                            <ArrowUpRight size={20} />
                        </div>
                    </div>

                    <div className="mt-8 text-center px-4">
                        <h3 className={`text-sm md:text-base font-black text-black dark:text-white uppercase tracking-wider leading-tight transition-colors min-h-[40px] flex items-center justify-center ${!isMobile ? 'group-hover:text-brand-red' : ''}`}>
                            {project.title}
                        </h3>
                        <div className={`w-1.5 h-1.5 rounded-full bg-brand-red/20 mx-auto mt-4 transition-all duration-500 ${!isMobile ? 'group-hover:w-12 group-hover:h-1 group-hover:bg-brand-red' : 'bg-brand-red'}`}></div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
