"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Search,
  Monitor,
  Smartphone,
  Palette,
  Globe,
  BarChart3,
  Zap,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  User,
  Mail,
  MessageSquare,
  Loader2,
  Maximize2,
  Eye,
  Layout,
  Code2,
  Box,
  Cpu,
  HardDrive,
  Check,
  Activity,
  ChevronLeft,
  ListChecks,
  DollarSign,
  Rocket,
  Award,
  Camera,
} from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const PROJECTS = [
  {
    id: "01",
    title: "Majorelle Centre",
    tagline: "L'excellence business à Marrakech",
    category: "Immobilier",
    services: ["Web", "SEO"],
    impact: "+150% Leads",
    logo: "https://group-digitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144006.802.png",
    url: "/blog/majorelle-centre-affaires",
    slug: "majorelle-blog",
    accent: "from-blue-600/20 to-indigo-900/20",
    size: "lg:col-span-4 lg:row-span-1",
    filter: "Web",
    year: "2024",
    tech: "React Engine",
  },
  {
    id: "02",
    title: "Smashy Burger",
    tagline: "Branding prestige culinaire",
    category: "Restauration",
    services: ["Identité", "Social"],
    impact: "Icône Luxe",
    logo: "https://group-digitalconcept.com/wp-content/uploads/2025/12/Generated-Image-December-22-2025-10_22AM.jpeg",
    url: "/blog/smashy-burger",
    slug: "smashy-burger-blog",
    accent: "from-amber-500/20 to-yellow-900/20",
    size: "lg:col-span-4 lg:row-span-1",
    filter: "Image de Marque",
    year: "2025",
    tech: "3D Design",
  },
  {
    id: "03",
    title: "Come With Us",
    tagline: "Expédition 8K Maroc",
    category: "Voyage",
    services: ["Contenu", "Vidéo"],
    impact: "Viral",
    logo: "https://group-digitalconcept.com/wp-content/uploads/2025/12/Design-sans-titre-97.png",
    url: "/come-with-us",
    slug: "come-with-us",
    accent: "from-brand-red/20 to-red-900/20",
    size: "lg:col-span-4 lg:row-span-1",
    filter: "Contenu",
    year: "2025",
    tech: "RAW 8K",
  },
  {
    id: "04",
    title: "Bâtiment Comp.",
    tagline: "Digitaliser l'art de bâtir",
    category: "Construction",
    services: ["Web", "SEO"],
    impact: "Top 3 Google",
    logo: "https://group-digitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144222.368.png",
    url: "https://group-descompagnonsenbatiment.com/",
    accent: "from-slate-600/20 to-slate-900/20",
    size: "lg:col-span-4 lg:row-span-1",
    filter: "Web",
    year: "2023",
    tech: "Full-Stack",
  },
  {
    id: "05",
    title: "Plancy Call",
    tagline: "Communication humaine",
    category: "Tech",
    services: ["SEO", "Leads"],
    impact: "+200% ROI",
    logo: "https://group-digitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144356.680.png",
    url: "https://group-plancycall.com/",
    accent: "from-red-500/20 to-rose-900/20",
    size: "lg:col-span-4 lg:row-span-1",
    filter: "SEO",
    year: "2024",
    tech: "Automation",
  },
  {
    id: "06",
    title: "M.M. Réseaux",
    tagline: "Connectivité infrastructure",
    category: "Telecom",
    services: ["Web", "Branding"],
    impact: "Leader",
    logo: "https://group-digitalconcept.com/wp-content/uploads/2025/03/Design-sans-titre-2025-03-18T144735.987.png",
    url: "https://mm-reseauxcom.com/",
    accent: "from-emerald-600/20 to-teal-900/20",
    size: "lg:col-span-4 lg:row-span-1",
    filter: "Web",
    year: "2024",
    tech: "Enterprise",
  },
];

const FORM_SERVICES = [
  { id: "web", label: "Web Design", icon: Monitor },
  { id: "seo", label: "SEO / SEA", icon: Search },
  { id: "brand", label: "Identity", icon: Palette },
  { id: "content", label: "Contenu", icon: Camera },
  { id: "app", label: "Mobile App", icon: Smartphone },
  { id: "other", label: "Autre", icon: Zap },
];

interface PortfolioPageProps {
  onNavigate?: (pageId: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: [] as string[],
    vision: "",
    budget: "Standard",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleProjectClick = (project: any) => {
    if (project.slug && onNavigate) {
      onNavigate(project.slug);
    } else if (project.url !== "#") {
      window.open(project.url, "_self", "noopener,noreferrer");
    }
  };

  const handleServiceToggle = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const handleNext = () => setFormStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setFormStep((prev) => Math.max(prev - 1, 1));

  const handleBriefSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setFormStep(1);
      setFormData({
        name: "",
        email: "",
        services: [],
        vision: "",
        budget: "Standard",
      });
    }, 4000);
  };

  const filteredProjects = PROJECTS.filter(
    (p) => activeFilter === "Tous" || p.filter === activeFilter
  );

  return (
    <div className="min-h-screen bg-[#F8F8FA] dark:bg-[#050505] pt-32 md:pt-48 lg:pt-56 pb-0 transition-colors duration-1000 relative overflow-x-hidden selection:bg-brand-red selection:text-white">
      {/* ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-[0.05] dark:opacity-[0.1]"></div>
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[600px] bg-brand-red/[0.03] blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1800px] relative z-10">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 lg:mb-40">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white dark:bg-white/5 backdrop-blur-2xl border border-black/5 dark:border-white/10 mb-12 shadow-xl">
              <Zap className="text-brand-red animate-pulse" size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-800 dark:text-gray-200">
                GDC SHOWCASE • ELITE
              </span>
            </div>

            <h1 className="text-[13vw] lg:text-[12rem] font-black text-black dark:text-white tracking-tighter leading-[0.8] uppercase mb-16 relative">
              ARCHIVE <br />
              <span className="text-brand-red italic text-[11vw] lg:text-[10rem]">
                D'IMPACT.
              </span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
              <div className="h-px flex-1 bg-black/10 dark:bg-white/10 hidden md:block"></div>
              <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-medium max-w-2xl uppercase tracking-tighter">
                Ingénierie Digitale{" "}
                <span className="text-black dark:text-white font-black">&</span>{" "}
                Esthétique Pure.
              </p>
              <div className="h-px flex-1 bg-black/10 dark:bg-white/10 hidden md:block"></div>
            </div>
          </div>

          {/* SLEEK MOBILE-OPTIMIZED FILTERS */}
          <div
            className={`mt-16 md:mt-24 w-full flex justify-center ${
              isMobile ? "" : "opacity-0 animate-enter-bottom delay-500"
            }`}
          >
            <div className="max-w-full overflow-x-auto hide-scrollbar p-1.5 md:p-2 rounded-[2.5rem] bg-white/70 dark:bg-black/40 backdrop-blur-3xl border border-black/5 dark:border-white/10 shadow-2xl flex items-center">
              <div className="flex items-center gap-1 px-1">
                {["Tous", "Web", "Image de Marque", "SEO", "Contenu"].map(
                  (f) => (
                    <button
                      key={f}
                      onClick={() => setActiveFilter(f)}
                      className={`
                                    whitespace-nowrap px-6 md:px-10 py-3 md:py-4 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500
                                    ${
                                      activeFilter === f
                                        ? "bg-black dark:bg-white text-white dark:text-black scale-105 shadow-xl"
                                        : "text-gray-500 hover:text-black dark:hover:text-white bg-transparent"
                                    }
                                `}
                    >
                      {f}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* COMPACT BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-fr">
          {filteredProjects.map((project, index) => (
            <ProjectBentoCard
              key={project.id}
              project={project}
              index={index}
              isMobile={isMobile}
              onClick={() => handleProjectClick(project)}
            />
          ))}

          {/* INTEGRATED STATS */}
          <div
            className={`lg:col-span-4 bg-[#0A0A0A] rounded-[48px] p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl border border-white/5 transition-all duration-700 ${
              isMobile ? "" : "opacity-0 animate-enter-bottom"
            }`}
            style={{ animationDelay: "600ms" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/[0.08] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-red">
                  <Cpu size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
                  Live Analytics
                </span>
              </div>
              <div className="space-y-6">
                <AnimatedCounter
                  value={200}
                  prefix="+"
                  className="text-7xl font-black text-white tracking-tighter leading-none"
                />
                <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
                  Solutions High-Perf
                </p>
              </div>
            </div>
            <div className="relative z-10 pt-10 border-t border-white/5 flex justify-between">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-brand-red">0.8s</span>
                <span className="text-[8px] font-black uppercase text-gray-500">
                  Avg. Load
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">98%</span>
                <span className="text-[8px] font-black uppercase text-gray-500">
                  ROI Score
                </span>
              </div>
            </div>
          </div>

          {/* 3-STEP BRIEF FORM */}
          <div
            className={`lg:col-span-8 bg-white dark:bg-[#0A0A0A] rounded-[48px] p-8 md:p-12 border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[550px] ${
              isMobile ? "" : "opacity-0 animate-enter-bottom"
            }`}
            style={{ animationDelay: "800ms" }}
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-12">
                <div className="flex flex-col">
                  <h3 className="text-3xl font-black text-black dark:text-white uppercase tracking-tighter leading-none mb-2">
                    Initialiser le Brief
                  </h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Step {formStep} of 3
                  </p>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`w-10 h-1.5 rounded-full transition-all duration-500 ${
                        formStep >= s
                          ? "bg-brand-red"
                          : "bg-black/5 dark:bg-white/10"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {isSuccess ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center animate-enter-zoom py-10">
                  <div className="w-20 h-20 rounded-[2rem] bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500 border border-emerald-500/20 shadow-2xl">
                    <Check size={32} strokeWidth={3} />
                  </div>
                  <p className="text-2xl font-black text-black dark:text-white uppercase tracking-tighter">
                    Protocole Activé.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Nous analysons vos données. Réponse sous 12h.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleBriefSubmit}
                  className="flex-1 flex flex-col gap-8"
                >
                  {formStep === 1 && (
                    <div className="space-y-10 animate-enter-right">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2 group">
                          <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-brand-red transition-colors">
                            Identité
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe / Brand"
                            className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 text-xl font-black outline-none focus:border-brand-red transition-all text-black dark:text-white"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2 group">
                          <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-brand-red transition-colors">
                            Contact Pro
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="email@direct.com"
                            className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 text-xl font-black outline-none focus:border-brand-red transition-all text-black dark:text-white"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formStep === 2 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-enter-right">
                      {FORM_SERVICES.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => handleServiceToggle(s.label)}
                          className={`p-6 rounded-[2rem] border transition-all duration-300 flex flex-col items-center gap-3 text-center ${
                            formData.services.includes(s.label)
                              ? "bg-brand-red border-brand-red text-white shadow-xl"
                              : "bg-black/5 dark:bg-white/5 border-transparent text-gray-500 hover:text-black dark:hover:text-white"
                          }`}
                        >
                          <s.icon size={20} strokeWidth={1.5} />
                          <span className="text-[9px] font-black uppercase tracking-widest">
                            {s.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}

                  {formStep === 3 && (
                    <div className="space-y-8 animate-enter-right flex-1">
                      <div className="space-y-2 group">
                        <label className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 group-focus-within:text-brand-red transition-colors">
                          Vision du Projet
                        </label>
                        <textarea
                          placeholder="Objectifs, inspirations..."
                          className="w-full h-32 bg-transparent border-b border-black/10 dark:border-white/10 py-4 text-xl font-black outline-none focus:border-brand-red transition-all text-black dark:text-white resize-none"
                          value={formData.vision}
                          onChange={(e) =>
                            setFormData({ ...formData, vision: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  )}

                  <div className="mt-auto pt-8 border-t border-black/5 dark:border-white/5 flex justify-between items-center">
                    {formStep > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black dark:hover:text-white"
                      >
                        <ChevronLeft size={16} /> Retour
                      </button>
                    ) : (
                      <div />
                    )}

                    {formStep < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={
                          formStep === 1 && (!formData.name || !formData.email)
                        }
                        className="px-10 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all disabled:opacity-30"
                      >
                        Suivant
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-12 py-5 rounded-full bg-brand-red text-white font-black uppercase text-[11px] tracking-widest hover:scale-105 transition-all shadow-xl shadow-red-900/40 flex items-center gap-4"
                      >
                        {isSubmitting ? (
                          <Loader2 size={16} className="animate-spin" />
                        ) : (
                          <>
                            Déployer <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* --- REIMAGINED FINAL CTA FOR MOBILE --- */}
        <section
          className={`mt-24 md:mt-64 relative rounded-[40px] md:rounded-[120px] p-10 md:p-32 bg-black dark:bg-white text-white dark:text-black overflow-hidden group shadow-[0_60px_150px_-30px_rgba(255,0,0,0.4)] transition-all duration-1000 ${
            isMobile ? "opacity-100" : "opacity-0 animate-enter-bottom"
          }`}
        >
          <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay"></div>

          {/* Immersive Mobile Glow */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-red rounded-full blur-[100px] md:blur-[300px] opacity-20 transition-all duration-[3s] group-hover:opacity-40 animate-pulse`}
          ></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 dark:border-black/10 bg-white/5 dark:bg-black/5 backdrop-blur-md mb-10 md:mb-16">
              <Sparkles size={14} className="text-brand-red" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]">
                START THE REVOLUTION
              </span>
            </div>

            <h2 className="text-[12vw] md:text-[14rem] font-black tracking-tighter leading-[0.85] uppercase italic mb-12 md:mb-20 flex flex-col items-center">
              <span className="opacity-20 select-none">VOTRE VISION.</span>
              <span className="text-brand-red not-italic mt-2">DÉPLOYÉE.</span>
            </h2>

            <div className="flex flex-col items-center gap-8 w-full max-w-sm">
              <p className="text-sm md:text-xl font-bold uppercase tracking-widest text-white/40 dark:text-black/40 px-4">
                Expertise chirurgicale • Impact monumental
              </p>

              <a
                href="#contact"
                className="group/cta relative w-full sm:w-auto inline-flex items-center justify-center gap-8 md:gap-12 px-8 py-7 md:px-14 md:py-10 bg-brand-red text-white rounded-full font-black uppercase tracking-[0.4em] text-xs md:text-base hover:scale-110 active:scale-95 transition-all shadow-[0_20px_60px_-10px_rgba(255,0,0,0.5)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover/cta:translate-x-0 transition-transform duration-700 skew-x-12"></div>
                <span className="relative z-10">Lancer le Projet</span>
                <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-brand-red flex items-center justify-center shadow-xl">
                  <ArrowRight
                    size={20}
                    className="group-hover/cta:translate-x-1 transition-transform"
                  />
                </div>
              </a>
            </div>

            <div className="mt-16 md:mt-24 flex items-center justify-center gap-6 md:gap-8 opacity-20 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0">
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                Digital Mastery
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                Global Impact
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                ROI Focused
              </span>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .animate-spin-slow { animation: spin 10s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .perspective-2000 { perspective: 2000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

// --- ELITE PROJECT BENTO CARD ---
const ProjectBentoCard: React.FC<{
  project: any;
  index: number;
  isMobile: boolean;
  onClick: () => void;
}> = ({ project, index, isMobile, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    setRotation({ x: yPct * -12, y: xPct * 12 });
  };

  return (
    <div
      ref={cardRef}
      className={`${
        project.size
      } group/card relative rounded-[40px] overflow-hidden 
                        bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 
                        shadow-xl transition-all duration-700 ease-out flex flex-col cursor-pointer
                        ${isMobile ? "" : "perspective-2000 hover:shadow-2xl"}`}
      style={{
        animationDelay: !isMobile ? `${index * 100}ms` : "0ms",
        transform:
          !isMobile && isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1)`
            : "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => {
        setRotation({ x: 0, y: 0 });
        setIsHovered(false);
      }}
      onClick={onClick}
    >
      <div
        className={`absolute inset-0 z-0 transition-all duration-1000 ${
          isMobile ? "opacity-100" : "opacity-0 group-hover/card:opacity-100"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}
        ></div>
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
      </div>

      <div className="relative z-10 p-6 md:p-8 flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <span className="text-[8px] font-black uppercase tracking-[0.4em] text-brand-red flex items-center gap-2">
            {project.year} • {project.filter}
          </span>
          <span className="text-lg font-mono font-black opacity-5 group-hover/card:text-brand-red group-hover/card:opacity-100 transition-all">
            {project.id}
          </span>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-lg transition-transform group-hover/card:rotate-12 group-hover/card:scale-110">
          <ArrowUpRight size={18} strokeWidth={3} />
        </div>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center p-8">
        <img
          src={project.logo}
          alt={project.title}
          className="max-w-[70%] max-h-[140px] object-contain transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
        />
      </div>

      <div className="relative z-10 p-8 pt-0 transition-all duration-500 transform translate-y-4 group-hover:card:translate-y-0 opacity-0 group-hover:card:opacity-100">
        <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-tighter mb-2">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.services.map((s: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 bg-black/5 dark:bg-white/5 text-[8px] font-black uppercase tracking-widest"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
