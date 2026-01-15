import React, { useEffect } from "react";
import {
  Sparkles,
  MoveDown,
  ArrowUpRight,
  Quote,
  Heart,
  Eye,
  Play,
  Maximize2,
  Instagram,
  Share2,
  Camera,
  Video,
  Layers,
  Users,
  Zap,
  Activity,
  ArrowRight,
  Instagram as InstaIcon,
  Camera as CameraIcon,
  Cpu,
  HardDrive,
  Monitor,
  Film,
} from "lucide-react";

export const PhotosLifePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const MOODBOARD_IMAGES = [
    "https://images.unsplash.com/photo-1552168324-d612d779595c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492691523567-62b9292858a4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502982722669-bfd29bc14c92?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800&auto=format&fit=crop",
  ];

  const TECH_SPECS = [
    {
      title: "Capture Gear",
      items: ["Sony A7R V", "Prime Lenses 35/85mm", "DJI RS3 Pro"],
      icon: CameraIcon,
    },
    {
      title: "Storage",
      items: ["NAS 120TB", "Cloud Sync", "Zero-Loss Policy"],
      icon: HardDrive,
    },
    {
      title: "Post-Processing",
      items: ["Davinci Resolve", "Capture One", "GDC Luts v4"],
      icon: Monitor,
    },
    {
      title: "Social Output",
      items: ["4K vertical content", "Batch-Processed", "SEO Meta Data"],
      icon: Film,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2EDE4] dark:bg-[#080808] text-[#1A1A1A] dark:text-white transition-colors duration-700 font-sans selection:bg-brand-red selection:text-white pb-20">
      {/* --- CINEMATIC GLOBAL OVERLAYS --- */}
      <div className="fixed inset-0 pointer-events-none z-50 border-[15px] md:border-[25px] border-[#F2EDE4] dark:border-[#080808] hidden lg:block"></div>

      {/* --- SECTION 01: THE COVER --- */}
      <section className="relative min-h-screen pt-48 lg:pt-44 pb-20 px-4 md:px-12 lg:px-24 max-w-[1920px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-12 opacity-0 animate-fade-in-up">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
                GDC • STUDIO
              </span>
              <div className="h-px w-24 bg-gray-300 dark:bg-white/10"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
                PAGE 01
              </span>
            </div>

            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] uppercase mb-16 animate-fade-in-up">
              Photos
              <br />
              <span className="text-brand-red italic drop-shadow-[0_10px_40px_rgba(255,0,0,0.1)]">
                Life.
              </span>
            </h1>

            <div className="flex flex-col md:flex-row gap-12 items-start md:items-end">
              <p className="text-xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium leading-tight max-w-xl animate-fade-in-up delay-200">
                L'art de capturer l'âme de votre marque pour{" "}
                <span className="text-black dark:text-white font-black italic underline decoration-brand-red decoration-4">
                  sublimer
                </span>{" "}
                votre présence sociale.
              </p>
              <div className="animate-fade-in-up delay-300">
                <div className="w-16 h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center animate-bounce">
                  <MoveDown size={24} />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative group opacity-0 animate-enter-right delay-400 fill-mode-forwards">
            <div className="relative rounded-[60px] overflow-hidden aspect-[4/5] bg-white dark:bg-[#111] p-1.5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
                alt="Hero cover"
                className="w-full h-full object-cover rounded-[55px] transition-transform duration-[4s] group-hover:scale-110"
              />
              <div className="absolute top-10 right-10 text-right">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                  DIRECTORS NAME
                </span>
              </div>
              <div className="absolute bottom-10 left-10 right-10 p-8 rounded-[40px] bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red mb-3 block">
                  Featured Project
                </span>
                <h3 className="text-2xl font-black tracking-tight leading-none uppercase">
                  Visual Story <br /> Concept
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 02: #REACTION (FIXED TEXT & LAYOUT) --- */}
      <section className="relative py-24 md:py-32 px-4 md:px-12 lg:px-24">
        <div className="max-w-[1700px] mx-auto">
          <div className="group relative w-full h-[600px] md:h-[850px] rounded-[50px] md:rounded-[80px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1552168324-d612d779595c?q=80&w=2000&auto=format&fit=crop"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[3s] scale-105 group-hover:scale-100"
              alt="Reaction story"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-700"></div>

            <div className="absolute inset-0 p-8 md:p-20 flex flex-col justify-center items-center text-center text-white">
              <div className="max-w-4xl space-y-12 relative z-10">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-24 h-1.5 bg-white rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                </div>

                <p className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.15] max-w-4xl mx-auto drop-shadow-2xl tracking-tight">
                  After a restless night filled with lucid dreams about finding
                  the ideal tune, he finds a promotional flyer for{" "}
                  <span className="text-brand-red font-black underline decoration-white/20 underline-offset-[12px]">
                    GDC Studio
                  </span>{" "}
                  in a forgotten notebook. Intrigued, he explores our new AI
                  features that help match his visual style, reigniting his
                  passion for the project.
                </p>

                <div className="pt-10 flex flex-col items-center">
                  <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-6">
                    #Reaction
                  </h2>
                  <div className="max-w-md space-y-4">
                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] opacity-60">
                      WE WANT THE STORYLINE TO BE RELATABLE IN A PREMIUM WAY.{" "}
                      <br />
                      THIS HAPPENS TO BE SOLVED BY PHOTOSLIFE PLATFORM.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 right-12 flex items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">
                DIRECTOR NAME | GDC v3.0
              </span>
              <div className="h-px w-12 bg-white/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 03: TECHNICAL ECOSYSTEM (HOW WE WORK) --- */}
      <section className="relative py-24 md:py-32 px-4 md:px-12 lg:px-24 bg-white/20 dark:bg-black/20 border-y border-black/5 dark:border-white/5">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              The <br className="hidden md:block" />{" "}
              <span className="text-brand-red italic">Engine.</span>
            </h2>
            <div className="max-w-md text-right">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-4 block">
                PROCESSUS & INFRASTRUCTURE
              </span>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                Découvrez l'envers du décor. Notre écosystème technique garantit
                une qualité d'image sans précédent et une gestion de données
                sécurisée.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TECH_SPECS.map((spec, idx) => (
              <div
                key={idx}
                className="group relative p-10 rounded-[50px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-brand-red group-hover:text-white transition-all duration-500 mb-8">
                    <spec.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-6 group-hover:text-brand-red transition-colors">
                    {spec.title}
                  </h3>
                  <ul className="space-y-3">
                    {spec.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-xs font-bold text-gray-400 dark:text-gray-500"
                      >
                        <div className="w-1 h-1 rounded-full bg-brand-red"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 04: MOOD BOARD & TONE (FIXED LAYOUT & IMAGE) --- */}
      <section className="relative py-24 md:py-48 px-4 md:px-12 lg:px-24">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            {/* 3x3 GRID ON THE LEFT */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 gap-4 h-full">
                {MOODBOARD_IMAGES.map((src, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-2xl md:rounded-[40px] overflow-hidden group/thumb cursor-pointer border border-black/5 dark:border-white/5 relative"
                  >
                    <img
                      src={src}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-125 grayscale group-hover/thumb:grayscale-0"
                      alt={`mood-${i}`}
                    />
                    <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover/thumb:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-8 px-2">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
                  DREAM BOARD | PAGE 03
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full bg-brand-red"
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* EDITORIAL CONTENT CARD ON THE RIGHT */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-[#0A0A0A] rounded-[50px] p-10 md:p-14 border border-black/5 dark:border-white/10 shadow-2xl flex flex-col justify-center h-full relative overflow-hidden group">
                <div className="relative z-10 space-y-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-px flex-1 bg-black/10 dark:bg-white/10"></div>
                      <div className="w-3 h-3 bg-brand-red rounded-full shadow-[0_0_15px_red] animate-pulse"></div>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
                      Mood & <br />{" "}
                      <span className="text-brand-red italic underline decoration-black/10 decoration-8 underline-offset-[16px]">
                        Tone.
                      </span>
                    </h2>
                  </div>

                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-justify">
                    Nous traduisons l'invisible. Le ton est sophistiqué,
                    minimaliste et tourné vers l'émotion pure. Chaque cliché est
                    une pièce de puzzle stratégique dans votre écosystème
                    digital.
                  </p>

                  <div className="grid grid-cols-2 gap-8 pt-6">
                    <div className="space-y-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-red">
                        Palette Chromatique
                      </span>
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border-4 border-white dark:border-black shadow-lg"></div>
                        <div className="w-10 h-10 rounded-full bg-[#F2EDE4] border-4 border-white dark:border-black shadow-lg"></div>
                        <div className="w-10 h-10 rounded-full bg-brand-red border-4 border-white dark:border-black shadow-lg"></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                        Statut Studio
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-xl font-black uppercase">
                          Operationnel
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  src="https://groupdigitalconcept.com/wp-content/uploads/2024/04/Design-sans-titre-23.png"
                  className="absolute bottom-10 right-10 w-24 opacity-[0.05] grayscale pointer-events-none group-hover:opacity-10 transition-opacity"
                  alt="Watermark"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 05: FINAL IMPACT --- */}
      <section className="relative py-24 md:py-48 bg-[#1A1A1A] text-white text-center overflow-hidden rounded-t-[60px] md:rounded-t-[100px] border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-[0.03] grayscale"
            alt="footer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-8xl md:text-[12rem] lg:text-[16rem] font-black uppercase tracking-tighter leading-none mb-20 outline-text-white transition-all duration-700 hover:text-white">
            Thank <br /> <span className="text-brand-red">You.</span>
          </h2>

          <div className="flex flex-col items-center gap-12">
            <div className="space-y-4">
              <p className="text-sm md:text-base font-bold uppercase tracking-[0.6em] text-gray-500">
                For any questions or concerns please email:
              </p>
              <a
                href="mailto:groupdigitalconcept@gmail.com"
                className="text-2xl md:text-4xl font-black hover:text-brand-red transition-all border-b-2 border-brand-red/30 pb-4 flex items-center gap-4"
              >
                GDC_STUDIO_MRK{" "}
                <ArrowUpRight size={40} className="text-brand-red" />
              </a>
            </div>

            <div className="flex gap-8">
              <a
                href="#"
                className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-500 group shadow-lg"
              >
                <InstaIcon
                  size={28}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="#"
                className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-500 group shadow-lg"
              >
                <Share2
                  size={28}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .outline-text-white {
            -webkit-text-stroke: 2px white;
            color: transparent;
        }
      `}</style>
    </div>
  );
};
