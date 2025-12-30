"use client"
import React, { useEffect, useState } from 'react';
import { 
  Sparkles, Camera, Map, Globe, ArrowRight, Quote, 
  Maximize2, Zap, X, Landmark, Shield, Laptop, 
  Compass, MapPin, Activity, Play, TrendingUp,
  Palette, Boxes, MonitorPlay, Focus, Wind
} from 'lucide-react';

export const ComeWithUsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const MASTERPIECES = [
    {
        title: "Les Jardins de la Ménara",
        location: "Marrakech",
        image: "https://groupdigitalconcept.com/wp-content/uploads/2025/12/Design-sans-titre-89.png",
        icon: Camera,
        isPortrait: false,
        story: "Pour ce projet iconique, GDC a orchestré une séance à l'heure bleue. Nous avons aidé l'agence à capturer la symétrie parfaite entre l'eau et l'architecture.",
        tech: "Post-traitement intensif sous Adobe Lightroom pour une colorimétrie 'Royal Sand' exclusive, boostant l'engagement sur Instagram.",
        tools: ["Adobe Lightroom", "Optiques G-Master"]
    },
    {
        title: "Plage de Legzira",
        location: "Sidi Ifni",
        image: "https://groupdigitalconcept.com/wp-content/uploads/2025/12/Design-sans-titre-91.png",
        icon: Wind,
        isPortrait: false,
        story: "Capturer la force brutale de l'Atlantique. Notre équipe a fourni l'expertise drone et le filtrage ND pour des poses longues cinématographiques.",
        tech: "Correction colorimétrique avancée sous Adobe Premiere Pro pour les versions vidéos et Photoshop pour les visuels fixes.",
        tools: ["Adobe Photoshop", "DJI Mavic 3 Pro"]
    },
    {
        title: "Grottes d'Hercule",
        location: "Tanger",
        image: "https://groupdigitalconcept.com/wp-content/uploads/2025/12/Design-sans-titre-95.png",
        icon: Map,
        isPortrait: true,
        story: "Un défi de plage dynamique extrême. GDC a supervisé la capture HDR pour préserver les détails dans les ombres de la grotte et les hautes lumières de l'océan.",
        tech: "Utilisation de 3ds Max pour recréer virtuellement certains éclairages volumétriques et Photoshop pour le compositing final haute fidélité.",
        tools: ["3ds Max", "Adobe Photoshop HDR"]
    },
    {
        title: "Tour Hassan",
        location: "Rabat",
        image: "https://groupdigitalconcept.com/wp-content/uploads/2025/12/Design-sans-titre-98.png",
        icon: Landmark,
        isPortrait: false,
        story: "Sublimer la verticalité historique. Nous avons aidé Come With Us à isoler le monument des éléments urbains parasites pour un rendu purement artistique.",
        tech: "Redressement de perspective chirurgical via Adobe Suite et étalonnage 'Old Kingdom' pour une ambiance intemporelle.",
        tools: ["Adobe Photoshop", "Capture One"]
    },
    {
        title: "Mosquée Al-Qarawiyyin",
        location: "Fès",
        image: "https://groupdigitalconcept.com/wp-content/uploads/2025/12/Design-sans-titre-99.png",
        icon: Shield,
        isPortrait: false,
        story: "Le sommet de notre aide technique. Pour magnifier cette porte ancestrale, nous avons intégré numériquement le logo de l'agence de manière imperceptible.",
        tech: "Usage de Blender pour modéliser le logo en 3D et l'intégrer sur le bois de la porte avec une gestion physique des ombres et des textures.",
        tools: ["Blender (CGI)", "Substance Painter", "Adobe Suite"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] dark:bg-[#020202] text-black dark:text-white transition-colors duration-700 font-sans selection:bg-brand-red selection:text-white pb-0">
      
      {/* --- VISIONNEUSE HD --- */}
      {selectedImage && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-3xl animate-enter-zoom p-4 md:p-12">
            <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 hover:bg-brand-red text-white flex items-center justify-center transition-all z-[1001] shadow-2xl"
            >
                <X size={32} />
            </button>
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[32px]">
               <img src={selectedImage} className="max-w-full max-h-full object-contain shadow-2xl rounded-2xl animate-enter-zoom" alt="Vue HD" />
            </div>
        </div>
      )}

      {/* --- NEW SLEEK HERO BENTO SECTION --- */}
      <section className="relative pt-32 md:pt-48 pb-12 px-4 md:px-8 lg:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
            
            {/* 1. PRIMARY FEATURE CARD (Main Message) */}
            <div className="lg:col-span-8 lg:row-span-2 min-h-[480px] lg:min-h-[650px] relative group rounded-[40px] md:rounded-[56px] overflow-hidden bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 shadow-2xl transition-all duration-700 hover:shadow-brand-red/5">
                {/* Background Visual Layer */}
                <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2670&auto=format&fit=crop" 
                      alt="Expédition Maroc" 
                      className="w-full h-full object-cover opacity-60 dark:opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[3s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#0A0A0A] dark:via-[#0A0A0A]/40 dark:to-transparent"></div>
                </div>

                <div className="relative z-10 h-full p-8 md:p-14 lg:p-20 flex flex-col justify-end">
                    <div className="mb-8 flex items-center gap-3">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 backdrop-blur-md shadow-sm">
                            <Sparkles size={14} className="text-brand-red animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red">Studio GDC Elite</span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-black dark:text-white uppercase mb-8">
                        Redéfinir le <br/>
                        Voyage par <br/>
                        <span className="text-brand-red italic underline decoration-brand-red/20 underline-offset-[16px]">l'Image.</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mb-12 border-l-2 border-brand-red pl-6">
                        Collaboration stratégique GDC x <strong className="text-black dark:text-white underline decoration-brand-red decoration-2 underline-offset-4">Come With Us</strong>. Porter les récits d'expédition vers de nouveaux sommets digitaux.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="group/btn px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center gap-4 hover:scale-105 transition-all shadow-xl">
                            DÉCOUVRIR LE DNA <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Floating Meta Tag */}
                <div className="absolute top-10 right-10 hidden md:flex items-center gap-3 px-4 py-2 rounded-xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-white/20 text-[9px] font-black uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    Directorial Mode • RAW v4.0
                </div>
            </div>

            {/* 2. IDENTITY CARD (Partner Logo) - CONTAINER REMOVED AS REQUESTED, ROUNDED EDGES ON LOGO */}
            <div className="lg:col-span-4 min-h-[250px] md:min-h-0 flex flex-col items-center justify-center relative overflow-hidden group">
                <img 
                    src="https://groupdigitalconcept.com/wp-content/uploads/2025/12/Design-sans-titre-97.png" 
                    alt="Logo Come With Us" 
                    className="w-full max-w-[250px] h-auto object-contain relative z-10 transition-all duration-700 group-hover:scale-105 rounded-[40px] md:rounded-[56px]"
                />

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-max">
                    <span className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-500 dark:text-white/40 group-hover:text-brand-red transition-colors">Official Partner</span>
                </div>
            </div>

            {/* 3. STATUS WIDGET (Live Expedition) */}
            <div className="lg:col-span-4 min-h-[300px] md:min-h-0 rounded-[40px] md:rounded-[56px] p-8 md:p-10 bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-brand-red/30 transition-all duration-500">
                <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-brand-red group-hover:scale-110 transition-transform">
                        <Compass size={24} strokeWidth={1.5} />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                         <span className="relative flex h-2 w-2">
                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                             <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                         </span>
                         <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Opérationnel</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl md:text-2xl font-black text-black dark:text-white uppercase tracking-tight mb-2">Expédition <br/>Actuelle</h3>
                    <div className="flex items-center gap-2 text-gray-500 font-bold text-sm">
                        <MapPin size={14} className="text-brand-red" /> 
                        Sahara Occidental • Dakhla
                    </div>
                </div>

                <div className="pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                    <div className="flex -space-x-2">
                        {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-gray-200 overflow-hidden"><img src={`https://i.pravatar.cc/100?img=${i+30}`} alt="team" /></div>)}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-red group-hover:translate-x-2 transition-transform cursor-pointer flex items-center gap-2">
                        VOIR LE LIVE <Play size={12} fill="currentColor" />
                    </span>
                </div>
            </div>

            {/* 4. METRICS / STRIP (Full Width) */}
            <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[40px] md:rounded-[56px] overflow-hidden shadow-xl">
                 {[
                    { label: "Capture RAW 8K", value: "100%", icon: Activity },
                    { label: "Production Drone", value: "4K 120fps", icon: Zap },
                    { label: "Lieux Explorés", value: "24+", icon: Globe },
                    { label: "Engagement Social", value: "+300%", icon: TrendingUp }
                 ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-[#0A0A0A] p-6 md:p-8 flex flex-col items-center justify-center text-center group/stat hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
                        <stat.icon size={20} className="text-brand-red mb-4 opacity-50 group-hover/stat:opacity-100 group-hover/stat:scale-110 transition-all" />
                        <span className="text-2xl md:text-3xl font-black tracking-tighter text-black dark:text-white mb-1">{stat.value}</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">{stat.label}</span>
                    </div>
                 ))}
            </div>

        </div>
      </section>

      {/* --- DIVISEUR CINÉMATIQUE --- */}
      <div className="max-w-[1400px] mx-auto h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent my-20"></div>

      {/* --- SECTION DES CHEF-D'ŒUVRES --- */}
      <section className="relative py-24 px-4 md:px-8 lg:px-12 max-w-[1700px] mx-auto">
          
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm">
                <MonitorPlay size={14} className="text-brand-red" />
                <span className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white">ROADMAP VISUELLE • GDC STUDIO</span>
             </div>
             <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-none italic text-black dark:text-white">
               La <span className="text-brand-red not-italic">Collection.</span>
             </h2>
             <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed italic">
               "Chaque pixel capturé au Maroc raconte une étape de notre accompagnement stratégique pour l'agence Come With Us."
             </p>
          </div>

          <div className="space-y-48">
            {MASTERPIECES.map((item, idx) => (
                <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 relative`}>
                    
                    {/* Numéro flottant */}
                    <span className="absolute -top-12 lg:-top-24 left-0 lg:left-auto lg:right-0 text-[10rem] lg:text-[20rem] font-black text-black/[0.03] dark:text-white/[0.03] select-none pointer-events-none font-mono">
                        0{idx + 1}
                    </span>

                    {/* Image Container - Fixed Border Radius */}
                    <div className={`w-full ${item.isPortrait ? 'lg:w-[35%]' : 'lg:w-1/2'} relative group`}>
                        <div className={`relative w-full rounded-[60px] overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 ${item.isPortrait ? 'aspect-[3/4]' : 'aspect-video md:aspect-auto'}`}>
                            <div className="w-full h-full overflow-hidden rounded-[60px]">
                                <img 
                                    src={item.image} 
                                    className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110" 
                                    alt={item.title} 
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center rounded-[60px]">
                                <button 
                                    onClick={() => setSelectedImage(item.image)}
                                    className="px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-brand-red hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 shadow-2xl flex items-center gap-3"
                                >
                                    <Maximize2 size={18} /> Voir en HD
                                </button>
                            </div>
                        </div>

                        {/* Outils Badges */}
                        <div className="absolute top-10 left-10 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                             {item.tools.map((t, i) => (
                               <span key={i} className="px-4 py-1.5 rounded-xl bg-black/80 backdrop-blur-xl text-[9px] font-black text-white uppercase tracking-widest border border-white/10">{t}</span>
                             ))}
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="flex-1 space-y-10 relative z-10">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-[2.5rem] bg-brand-red text-white flex items-center justify-center shadow-xl shadow-red-900/20">
                                <item.icon size={36} strokeWidth={1.5} />
                            </div>
                            <div>
                                <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 mb-2 block">{item.location}</span>
                                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black dark:text-white leading-[0.9]">{item.title}</h3>
                            </div>
                        </div>

                        <div className="space-y-8">
                           <div className="p-8 md:p-12 rounded-[40px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 shadow-lg group/box hover:border-brand-red/30 transition-all">
                              <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-6 flex items-center gap-2">
                                 <Focus size={14} /> Notre Mission Sociale
                              </h4>
                              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed italic">
                                 "{item.story}"
                              </p>
                           </div>

                           <div className="p-8 md:p-12 rounded-[40px] bg-black text-white relative overflow-hidden group/box border border-white/5">
                              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
                              <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-red mb-6 flex items-center gap-2">
                                 <Laptop size={14} /> Expertise Technique GDC
                              </h4>
                              <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
                                  {item.tech}
                              </p>
                           </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-black/5 dark:border-white/5">
                           <div className="flex flex-col">
                              <span className="text-3xl font-black text-black dark:text-white uppercase tracking-tighter">RAW</span>
                              <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Format Maître</span>
                           </div>
                           <div className="w-px h-10 bg-black/10 dark:bg-white/10"></div>
                           <div className="flex flex-col">
                              <span className="text-3xl font-black text-black dark:text-white uppercase tracking-tighter">4K</span>
                              <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Rendu Ultra</span>
                           </div>
                           <div className="w-px h-10 bg-black/10 dark:bg-white/10"></div>
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                                 <Shield size={20} />
                              </div>
                              <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Propriété Intellectuelle</span>
                           </div>
                        </div>
                    </div>
                </div>
            ))}
          </div>
      </section>

      {/* --- SECTION 04: L'ARSENAL CRÉATIF --- */}
      <section className="relative py-24 md:py-48 px-4 md:px-8 bg-black text-white rounded-[80px] mx-4 my-24 overflow-hidden border border-white/10 shadow-2xl isolate">
         <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-black to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[60vw] bg-brand-red/[0.05] rounded-full blur-[180px] animate-pulse-slow"></div>
         </div>

         <div className="relative z-10 container mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-16 shadow-lg">
                <Laptop size={18} className="text-brand-red" />
                <span className="text-[12px] font-black uppercase tracking-[0.5em]">L'ARSENAL CRÉATIF GDC</span>
            </div>

            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-20 italic">
               Sculpter <br/> <span className="text-brand-red not-italic underline decoration-white/10 underline-offset-[20px]">L'Image Digitale.</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-6xl px-4">
                {[
                    { icon: Palette, title: "Adobe Suite", sub: "Lightroom & Photoshop" },
                    { icon: Laptop, title: "3ds Max", sub: "Lumières & Volume" },
                    { icon: Boxes, title: "Blender 3D", sub: "Intégration CGI" },
                    { icon: MonitorPlay, title: "DaVinci", sub: "Couleurs Cinéma" }
                ].map((t, i) => (
                    <div key={i} className="flex flex-col items-center gap-6 group cursor-default">
                        <div className="w-24 h-24 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-red group-hover:text-white transition-all duration-500 hover:scale-110">
                            <t.icon size={44} strokeWidth={1} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-xl font-black uppercase tracking-tight">{t.title}</h4>
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{t.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* --- SECTION 05: CTA FINAL CRÉATIF (UPDATED PER SCREENSHOTS) --- */}
      <section className="relative py-24 md:py-64 bg-white dark:bg-[#020202] flex flex-col items-center justify-center transition-colors duration-1000 min-h-[60vh]">
         <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]">
            <img 
               src="https://groupdigitalconcept.com/wp-content/uploads/2025/12/Design-sans-titre-93.png" 
               className="w-full h-full object-cover grayscale" 
               alt="Empreinte GDC" 
            />
         </div>
         
         <div className="relative z-10 w-full max-w-[1920px] px-4 flex flex-col items-center text-center">
            
            {/* GIANT TYPOGRAPHY RESPONSIVE FIX */}
            <div className="flex flex-col items-center justify-center w-full overflow-hidden mb-32">
                <h2 className="text-[18vw] sm:text-[15vw] lg:text-[14rem] font-black uppercase tracking-tighter leading-[0.8] outline-text-dynamic transition-all duration-1000">
                   C'est
                </h2>
                <h2 className="text-[12vw] sm:text-[14vw] lg:text-[14rem] font-black uppercase tracking-tighter leading-[0.8] text-brand-red">
                   Maintenant.
                </h2>
            </div>

            <div className="flex flex-col items-center gap-24 w-full">
                {/* Citations de motivation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto w-full px-4">
                    <div className="p-12 rounded-[50px] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5 flex flex-col items-center text-center shadow-lg">
                        <Quote className="text-brand-red mb-8" size={40} />
                        <p className="text-2xl md:text-3xl font-serif italic text-gray-600 dark:text-gray-300 leading-tight">
                            "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte."
                        </p>
                    </div>
                    <div className="p-12 rounded-[50px] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5 flex flex-col items-center text-center shadow-lg">
                        <Sparkles className="text-brand-red mb-8" size={40} />
                        <p className="text-2xl md:text-3xl font-serif italic text-gray-600 dark:text-gray-300 leading-tight">
                            "L'innovation est ce qui distingue un leader d'un suiveur. Ne vous arrêtez jamais d'explorer."
                        </p>
                    </div>
                </div>

                <div className="space-y-12">
                   <p className="text-xs md:text-sm font-black uppercase tracking-[0.8em] text-gray-400 dark:text-gray-500">Prêt à sublimer votre projet ? Contactez le studio GDC :</p>
                   <a href="mailto:groupdigitalconcept@gmail.com" className="group relative inline-flex items-center gap-6 md:gap-10 text-2xl sm:text-3xl md:text-6xl font-black hover:text-brand-red transition-all border-b-8 border-brand-red/20 pb-10">
                     <span className="relative z-10 uppercase tracking-tighter">STUDIO_GDC_MARRAKECH</span>
                     <ArrowRight size={40} className="text-brand-red group-hover:translate-x-10 transition-transform duration-700 md:w-[80px] md:h-[80px]" />
                   </a>
                </div>
            </div>
         </div>
      </section>

      <style>{`
        .outline-text-dynamic {
            -webkit-text-stroke: 1.5px rgba(0,0,0,0.9);
            color: transparent;
        }
        .dark .outline-text-dynamic {
            -webkit-text-stroke: 2px white;
            color: transparent;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-enter-zoom {
          animation: enterZoom 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes enterZoom {
          0% { opacity: 0; transform: scale(0.85) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};
