import React, { useRef, useState, useEffect } from "react";
import {
  Target,
  Eye,
  Zap,
  ShieldCheck,
  HeartHandshake,
  Rocket,
  CheckCircle2,
  ShoppingBag,
  CreditCard,
  BarChart3,
  Globe,
} from "lucide-react";

export const EcommerceWhyChoose: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden border-t border-black/5 dark:border-white/5"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-[120px] translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[120px] -translate-x-1/4"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
              Notre Valeur Ajoutée
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-black dark:text-white mb-6">
            Pourquoi Choisir <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
              Group Digital Concept ?
            </span>
          </h2>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto">
          {/* 1. HERO ILLUSTRATION */}
          <div className="col-span-1 lg:col-span-12 min-h-[400px] md:min-h-[500px] rounded-[40px] bg-[#F5F5F7] dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 relative overflow-hidden group flex items-center justify-center shadow-xl">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2670&auto=format&fit=crop"
                alt="E-commerce Illustration"
                className={`w-full h-full object-cover opacity-80 dark:opacity-60 ${
                  !isMobile
                    ? "transition-transform duration-[2s] ease-out group-hover:scale-105"
                    : ""
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F7] via-transparent to-transparent dark:from-[#0A0A0A] dark:via-transparent dark:to-transparent"></div>
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl px-8">
              {[
                {
                  icon: ShoppingBag,
                  label: "Boutique",
                  color: "text-blue-500",
                },
                {
                  icon: CreditCard,
                  label: "Paiements",
                  color: "text-emerald-500",
                },
                { icon: Rocket, label: "Livraison", color: "text-brand-red" },
                {
                  icon: BarChart3,
                  label: "Analytics",
                  color: "text-purple-500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-4 group/icon"
                >
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-[30px] bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-white/40 dark:border-white/10 flex items-center justify-center shadow-2xl transition-transform duration-500 ${
                      !isMobile
                        ? "group-hover/icon:-translate-y-4 group-hover/icon:scale-110"
                        : ""
                    }`}
                  >
                    <item.icon
                      size={40}
                      className={`${item.color} drop-shadow-lg`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="px-4 py-2 rounded-full bg-white/60 dark:bg-black/60 backdrop-blur-md text-xs font-black uppercase tracking-widest text-black dark:text-white shadow-lg border border-white/20 dark:border-white/10">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. MAIN CONTENT */}
          <div className="col-span-1 lg:col-span-7 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl rounded-[40px] p-8 md:p-12 border border-black/5 dark:border-white/10 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <p className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Chez{" "}
                <strong className="text-black dark:text-white">
                  Group Digital Concept
                </strong>
                , nous sommes des partenaires stratégiques dédiés à la réussite
                de votre projet e-commerce.
              </p>

              <div className="mb-10">
                <h3 className="text-2xl font-black text-black dark:text-white mb-6 flex items-center gap-3">
                  <Zap className="text-brand-red fill-brand-red" /> Ce Que Nous
                  Vous Offrons
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Expertise Technique & Marketing",
                      desc: "Équipe pluridisciplinaire maîtrisant Shopify, WooCommerce et PrestaShop.",
                    },
                    {
                      title: "Approche 100% Sur Mesure",
                      desc: "Analyse de votre secteur et de vos concurrents.",
                    },
                    {
                      title: "Performance & Sécurité",
                      desc: "Sites ultra-rapides et protégés contre les cybermenaces.",
                    },
                    {
                      title: "Support Continu",
                      desc: "Suivi réactif et maintenance proactive.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div
                        className={`mt-1 w-6 h-6 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center shrink-0 transition-colors duration-300 ${
                          !isMobile
                            ? "group-hover:bg-brand-red group-hover:text-white"
                            : ""
                        }`}
                      >
                        <CheckCircle2 size={14} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-black dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. RIGHT STACK */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-6">
            <div className="flex-1 rounded-[40px] p-8 md:p-10 bg-gradient-to-br from-black to-[#111] dark:from-[#111] dark:to-black text-white border border-white/10 relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px]"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-md">
                  <Eye size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-serif italic mb-4 text-white">
                  Vision
                </h3>
                <p className="text-white/80 leading-relaxed font-medium text-lg">
                  Devenir le{" "}
                  <span className="text-brand-red font-bold">
                    partenaire de référence
                  </span>{" "}
                  en e-commerce à Marrakech.
                </p>
              </div>
            </div>

            <div className="flex-1 rounded-[40px] p-8 md:p-10 bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 relative overflow-hidden group shadow-xl">
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center mb-6">
                  <Target size={28} className="text-black dark:text-white" />
                </div>
                <h3 className="text-3xl font-serif italic mb-6 text-black dark:text-white">
                  Mission
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-1 h-full min-h-[40px] bg-brand-red rounded-full"></div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      <strong className="text-black dark:text-white block mb-1">
                        Maximiser la visibilité
                      </strong>
                      Grâce au SEO et un design responsive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
