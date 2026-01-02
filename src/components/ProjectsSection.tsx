"use client";
import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, X, ExternalLink, Globe, Sparkles } from 'lucide-react';

const PROJECTS = [
  { id: 1, title: "M.M. Réseaux Com", category: "Télécom & Infrastructure", logo: "https://groupdigitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144735.987.png", url: "https://mm-reseauxcom.com/", desc: "Solutions d'infrastructure réseau de pointe and installation de fibre optique.", tags: ["WordPress", "UI/UX", "SEO Local"], year: "2024" },
  { id: 2, title: "Group Plancy Call", category: "Relation Client", logo: "https://groupdigitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144356.680.png", url: "https://group-plancycall.com/", desc: "Centre d'appel nouvelle génération axé sur la qualité relationnelle.", tags: ["Branding", "Lead Gen", "Performance"], year: "2024" },
  { id: 3, title: "Compagnons Bâtiment", category: "Construction", logo: "https://groupdigitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144222.368.png", url: "https://group-descompagnonsenbatiment.com/", desc: "Entreprise générale de bâtiment. Une présence digitale robuste.", tags: ["Portfolio", "Architecture", "SEO"], year: "2023" },
  { id: 4, title: "Majorelle Centre", category: "Business Center", logo: "https://groupdigitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144006.802.png", url: "https://majorelle-centreaffaires.com/", desc: "Le centre d'affaires de référence à Marrakech.", tags: ["Réservation", "Corporate", "Marrakech"], year: "2023" }
];

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<typeof PROJECTS[0] | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSectionMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section ref={containerRef} onMouseMove={handleSectionMouseMove} className="relative w-full py-32 bg-[#F0F0F2] dark:bg-[#000000] overflow-hidden border-t border-black/5 dark:border-white/5">
        <div className="absolute inset-0 z-0 pointer-events-none">
            {!isMobile && (
              <div className="absolute inset-0 opacity-20 dark:opacity-10 transition-opacity duration-300"
                  style={{ background: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 0, 0, 0.15), transparent 40%), linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`, backgroundSize: '100% 100%, 40px 40px, 40px 40px' }} />
            )}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-red/[0.03] rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
            <div className="text-center mb-24 relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
                    <Sparkles size={14} className="text-brand-red" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">Portfolio Premium</span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black dark:text-white mb-6">Nos Réalisations <span className="text-brand-red">Digitales.</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} isMobile={isMobile} onClick={() => setActiveProject(project)} />
                ))}
            </div>
        </div>

        {activeProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                <div className="absolute inset-0 bg-white/80 dark:bg-black/90 backdrop-blur-xl" onClick={() => setActiveProject(null)}></div>
                <div className="relative w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] bg-[#F0F0F2] dark:bg-[#0A0A0A] rounded-[40px] overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 flex flex-col md:flex-row animate-enter-bottom">
                    <button onClick={() => setActiveProject(null)} className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors"><X size={24} /></button>
                    <div className="w-full md:w-1/2 bg-white dark:bg-black relative p-12 flex items-center justify-center overflow-hidden">
                        <img src={activeProject.logo} alt={activeProject.title} className="relative z-10 w-3/4 h-auto object-contain drop-shadow-2xl" />
                    </div>
                    <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                         <h3 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-8 leading-tight">{activeProject.title}</h3>
                         <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-10">{activeProject.desc}</p>
                         <a href={activeProject.url} target="_blank" rel="noopener noreferrer" className="group w-full py-5 bg-brand-red text-white rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-red-600 transition-all shadow-lg">Visiter le site <ExternalLink size={18} /></a>
                    </div>
                </div>
            </div>
        )}
    </section>
  );
};

const ProjectCard: React.FC<{ project: any, isMobile: boolean, onClick: () => void }> = ({ project, isMobile, onClick }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isMobile || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        setRotation({ x: (mouseY / rect.height - 0.5) * -25, y: (mouseX / rect.width - 0.5) * 25 });
    };

    return (
        <div className="group/card relative h-[450px] w-full perspective-2000 cursor-pointer" onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => { setRotation({ x: 0, y: 0 }); setIsHovered(false); }} onClick={onClick}>
            <div ref={cardRef} className={`relative w-full h-full rounded-[40px] bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl transition-all duration-300 ease-out overflow-hidden`} style={{ transform: !isMobile && isHovered ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.05, 1.05, 1)` : 'none', transformStyle: !isMobile ? 'preserve-3d' : 'flat' }}>
                {!isMobile && <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at center, rgba(255,0,0,0.15), transparent 70%)', transform: 'translateZ(-20px)' }}></div>}
                <div className={`absolute inset-0 rounded-[40px] border-2 border-transparent ${!isMobile ? 'group-hover/card:border-brand-red/30' : ''} transition-colors duration-500`}></div>
                <div className={`absolute inset-0 flex items-center justify-center p-8`} style={{ transform: !isMobile ? 'translateZ(40px)' : 'none' }}>
                    <img src={project.logo} alt={project.title} className={`w-full h-full object-contain drop-shadow-2xl transition-all duration-500 ${!isMobile ? 'group-hover/card:scale-110' : ''}`} />
                </div>
                <div className={`absolute bottom-6 right-6 ${!isMobile ? 'opacity-0 group-hover/card:opacity-100' : 'opacity-100'} transition-all duration-500`} style={{ transform: !isMobile ? 'translateZ(60px)' : 'none' }}>
                     <div className="w-14 h-14 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg"><ArrowUpRight size={24} /></div>
                </div>
            </div>
        </div>
    );
};