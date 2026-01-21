"use client";
import React, { useEffect, useState, useRef } from "react";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";
import Matter from "matter-js";
import {
  Sparkles,
  Palette,
  Zap,
  ArrowRight,
  Target,
  Fingerprint,
  Activity,
  ArrowUpRight,
  ShieldCheck,
  MousePointer2,
  Layers,
  Smartphone,
  Code2,
  Monitor,
  MoveDown,
  Star,
  X,
  Info,
  Shield,
  Eye,
  Cpu,
  Type,
} from "lucide-react";

// --- SUB-COMPONENTS ---

const ShockwaveButton = ({ onSmash }: { onSmash: () => void }) => {
  return (
    <button
      onClick={onSmash}
      className="group relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center transition-all duration-500 active:scale-90"
    >
      <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-[40px] opacity-20 group-hover:opacity-40 animate-pulse"></div>
      <div className="absolute inset-0 border-2 border-[#D4AF37]/30 rounded-full animate-[ping_3s_linear_infinite]"></div>
      <div className="relative w-full h-full bg-black dark:bg-white rounded-full border-4 border-[#D4AF37] flex flex-col items-center justify-center shadow-2xl group-hover:shadow-[#D4AF37]/50 transition-all overflow-hidden">
        <span className="text-[10px] md:text-xs font-black tracking-[0.5em] text-[#D4AF37] mb-1">
          PRESS TO
        </span>
        <span className="text-2xl md:text-4xl font-black text-white dark:text-black uppercase tracking-tighter">
          SMASH
        </span>
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      </div>
    </button>
  );
};

export const SmashyBurgerBlogPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [smashActive, setSmashActive] = useState(false);
  const [activeColor, setActiveColor] = useState("#D4AF37");
  const sandboxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isLite } = usePerformanceMode();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // --- MATTER.JS SANDBOX LOGIC ---
  useEffect(() => {
    if (isMobile || isLite || !sandboxRef.current || !canvasRef.current) return;

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;
    const engine = Engine.create();
    const world = engine.world;

    const width = sandboxRef.current.clientWidth;
    const height = 500;

    const render = Render.create({
      element: sandboxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width,
        height,
        background: "transparent",
        wireframes: false,
      },
    });

    // Create Boundaries
    const ground = Bodies.rectangle(width / 2, height + 50, width, 100, {
      isStatic: true,
    });
    const wallLeft = Bodies.rectangle(-50, height / 2, 100, height, {
      isStatic: true,
    });
    const wallRight = Bodies.rectangle(width + 50, height / 2, 100, height, {
      isStatic: true,
    });
    Composite.add(world, [ground, wallLeft, wallRight]);

    // Create Branding Elements (Tokens)
    const tokens = [];
    const colors = ["#D4AF37", "#FF0000", "#111111", "#FFFFFF"];
    for (let i = 0; i < 15; i++) {
      const radius = Math.random() * 20 + 30;
      const body = Bodies.circle(
        Math.random() * width,
        -Math.random() * 1000,
        radius,
        {
          restitution: 0.8,
          friction: 0.1,
          render: {
            fillStyle: colors[i % colors.length],
            strokeStyle: "#ffffff20",
            lineWidth: 2,
          },
        },
      );
      tokens.push(body);
    }
    Composite.add(world, tokens);

    // Mouse control
    const mouse = Mouse.create(render.canvas);
    // Allow page scrolling by removing Matter's wheel listeners
    render.canvas.removeEventListener("mousewheel", (mouse as any).mousewheel);
    render.canvas.removeEventListener(
      "DOMMouseScroll",
      (mouse as any).mousewheel,
    );

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Composite.add(world, mouseConstraint);

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, [isMobile, isLite]);

  const handleSmash = () => {
    setSmashActive(true);
    // Shockwave trigger
    if (window.navigator.vibrate) window.navigator.vibrate(100);
    setTimeout(() => setSmashActive(false), 800);
  };

  return (
    <div
      className={`min-h-screen bg-[#FDFDFD] dark:bg-[#020202] text-black dark:text-white transition-all duration-1000 relative overflow-x-hidden ${
        smashActive ? "animate-shake" : ""
      }`}
    >
      {/* --- CINEMATIC AMBIENCE --- */}
      {!isLite && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[100vw] h-[100vw] rounded-full blur-[180px] transition-colors duration-1000 opacity-[0.07]"
            style={{ backgroundColor: activeColor }}
          ></div>
          <div className="absolute bottom-0 left-0 w-[80vw] h-[80vw] bg-red-950/[0.04] rounded-full blur-[200px] animate-blob"></div>
          <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay"></div>
        </div>
      )}

      {/* --- SECTION 01: THE IMMERSIVE HERO --- */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 lg:px-24 pt-48 pb-32 z-10">
        <div className="max-w-[1920px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <div
                className={`inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-3xl border border-black/5 dark:border-white/10 mb-12 shadow-sm transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-800 dark:text-gray-200">
                  CASE STUDY • GDC_IDENTITY_V4
                </span>
              </div>

              <div className="relative group cursor-default">
                <h1
                  className={`text-7xl md:text-9xl lg:text-[14rem] font-black tracking-tighter leading-[0.75] uppercase mb-16 transition-all duration-1000 delay-100 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20"
                  }`}
                >
                  SMASHY <br />
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#f3d06b] to-[#D4AF37] transition-all duration-500 block group-hover:scale-[1.02] group-hover:skew-x-1"
                    style={{
                      textShadow: smashActive
                        ? "0 0 100px rgba(212,175,55,0.8)"
                        : "none",
                    }}
                  >
                    BGs.
                  </span>
                </h1>
                {/* Secondary Outline text for depth */}
                <span className="absolute -top-4 -left-4 text-black/[0.02] dark:text-white/[0.02] text-9xl md:text-[20rem] font-black pointer-events-none select-none uppercase tracking-tighter">
                  PRESTIGE
                </span>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
                <ShockwaveButton onSmash={handleSmash} />
                <div className="max-w-md space-y-6">
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium italic leading-tight border-l-4 border-[#D4AF37] pl-6">
                    "L'impact visuel doit être aussi puissant que le goût."
                  </p>
                  <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-relaxed">
                    GDC a architecturé une identité de marque monumentale,
                    brisant les codes de la restauration rapide pour le marché
                    du luxe à Marrakech.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="space-y-6">
                {[
                  { label: "BRAND PRESTIGE", val: "A+", sub: "Évaluation GDC" },
                  {
                    label: "UX FRICTION",
                    val: "0.01",
                    sub: "Score de fluidité",
                  },
                  {
                    label: "VISUAL IMPACT",
                    val: "HIGH",
                    sub: "Niveau rétinien",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`p-8 rounded-[40px] bg-white/40 dark:bg-white/[0.02] backdrop-blur-3xl border border-white/40 dark:border-white/10 transition-all duration-1000 hover:scale-105 hover:border-[#D4AF37]/50 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-20"
                    }`}
                    style={{ animationDelay: `${i * 200 + 600}ms` }}
                  >
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37] mb-2 block">
                      {stat.label}
                    </span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-5xl font-black tracking-tighter">
                        {stat.val}
                      </span>
                      <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">
                        {stat.sub}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 02: THE PHYSICS SANDBOX (Tactile Interaction) --- */}
      <section className="relative py-24 px-4 md:px-12 lg:px-24 overflow-hidden border-y border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-black/20">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 space-y-8">
              <div className="w-16 h-16 rounded-3xl bg-black dark:bg-white flex items-center justify-center text-white dark:text-black shadow-xl">
                <Cpu size={32} />
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Branding <br />{" "}
                <span className="text-[#D4AF37] italic">Moléculaire.</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                La marque n'est pas un bloc statique, c'est un ensemble d'atomes
                en interaction. Manipulez les éléments fondamentaux de
                l'identité Smashy BGs.
              </p>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
                <MousePointer2
                  size={16}
                  className="text-[#D4AF37] animate-bounce"
                />
                <span>Cliquez et lancez les atomes</span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div
                ref={sandboxRef}
                className="relative w-full h-[500px] rounded-[60px] border-2 border-dashed border-black/10 dark:border-white/10 bg-white dark:bg-[#050505] shadow-inner cursor-grab active:cursor-grabbing overflow-hidden group/sandbox"
              >
                {/* Giant Watermark Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05] group-hover/sandbox:opacity-[0.1] transition-opacity duration-1000">
                  <img
                    src="https://group-digitalconcept.com/wp-content/uploads/2024/04/Design-sans-titre-23.png"
                    className="w-[60%] max-w-[400px] grayscale brightness-0 dark:invert"
                    alt="watermark"
                  />
                </div>

                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 pointer-events-auto"
                />

                {/* UI Overlay in Sandbox */}
                <div className="absolute bottom-10 left-10 p-6 rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 text-white shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Physics Core v.4.2
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 03: THE BLUEPRINT (Technical Grid) --- */}
      <section className="relative py-24 md:py-48 px-4 md:px-12 lg:px-24 bg-white dark:bg-[#050505]">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-10 bg-[#D4AF37]/10 blur-[80px] rounded-full opacity-40"></div>
                <div className="relative aspect-square bg-[#0A0A0A] rounded-[60px] p-12 border border-white/10 flex flex-col items-center justify-center overflow-hidden">
                  {/* Blueprint Grid Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(#ffffff05_1px,transparent_1px),linear-gradient(90deg,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                  {/* Animated Blueprint Lines */}
                  <div className="relative w-full h-full flex items-center justify-center border border-white/10 rounded-full animate-spin-slow">
                    <div className="absolute top-0 left-1/2 w-px h-full bg-[#D4AF37]/20"></div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-[#D4AF37]/20"></div>
                    <div className="w-[75%] h-[75%] border border-[#D4AF37]/40 rounded-full"></div>
                    <div className="w-[50%] h-[50%] border border-[#D4AF37]/20 rounded-full"></div>
                    <div className="w-full h-full border border-white/5 rounded-full"></div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="https://group-digitalconcept.com/wp-content/uploads/2026/01/Design-sans-titre-2026-01-16T111855.892.png"
                      className="w-56 h-56 object-contain drop-shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-transform duration-700 group-hover:scale-110"
                      alt="logo construct"
                    />
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest">
                        Construct Module v1
                      </span>
                      <span className="text-xs font-mono text-white/40">
                        Math: Golden Ratio (φ)
                      </span>
                    </div>
                    <Layers size={20} className="text-white/20" />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                <Code2 size={16} className="text-[#D4AF37]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                  Architectural Grid
                </span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                L'Ingénierie du <br />{" "}
                <span className="text-brand-red">Sacré.</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl">
                Chaque courbe du logotype Smashy BGs a été calculée selon le
                nombre d'or. Nous avons créé une grammaire visuelle mathématique
                pour assurer une harmonie parfaite sur tous les supports.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-[40px] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5 transition-all hover:border-[#D4AF37]/50">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
                    Géométrie Variable
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-bold leading-relaxed">
                    Une structure adaptive qui conserve sa lisibilité sur un
                    favicon comme sur un panneau géant.
                  </p>
                </div>
                <div className="p-8 rounded-[40px] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5 transition-all hover:border-brand-red/50">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-red mb-4">
                    Sémantique Visuelle
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-bold leading-relaxed">
                    Fusionner la brutalité du "Smash" avec la finesse et
                    l'élégance du luxe marrakchi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 04: CHROMATIC SYNTHESIS LAB (Interactive Colors) --- */}
      <section className="relative py-24 md:py-48 px-4 md:px-12 lg:px-24 bg-[#0A0A0A] text-white rounded-[80px] mx-4 my-24 overflow-hidden shadow-2xl isolate">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[60vw] rounded-full blur-[180px] animate-pulse-slow transition-colors duration-1000 opacity-[0.1]"
          style={{ backgroundColor: activeColor }}
        ></div>

        <div className="max-w-[1700px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-12">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Palette size={16} className="text-[#D4AF37]" />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Genetic Synthesis
                </span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
                Synthèse <br />{" "}
                <span className="italic text-[#D4AF37]">Chromatique.</span>
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                Chaque teinte a été sélectionnée pour déclencher une réaction
                neurologique spécifique liée au désir culinaire et à la
                perception du luxe.
              </p>
              <div className="flex items-center gap-6 p-8 rounded-[40px] bg-white/5 border border-white/5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-black font-black text-xl shadow-xl transition-colors duration-500"
                  style={{ backgroundColor: activeColor }}
                >
                  {activeColor === "#D4AF37" ? "98%" : "85%"}
                </div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Impact sur la mémorisation visuelle de l'audience cible.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  color: "#D4AF37",
                  name: "Imperial Gold",
                  sub: "Authority & Success",
                  desc: "La couleur de l'ancrage. Elle positionne Smashy BGs comme le roi de la rue à Marrakech.",
                },
                {
                  color: "#FF0000",
                  name: "Royal Umami",
                  sub: "Gourmet Intensity",
                  desc: "Un rouge vibrant qui symbolise la passion du goût et l'intensité de la cuisson smashée.",
                },
                {
                  color: "#111111",
                  name: "Absolute Dark",
                  sub: "Clean Premium",
                  desc: "Garantit que le logo reste l'élément central et le plus contrasté de l'interface.",
                },
                {
                  color: "#FDFDFD",
                  name: "Strategic White",
                  sub: "Readability Core",
                  desc: "Utilisé pour les contrastes et les espaces de respiration dans l'écosystème digital.",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActiveColor(c.color)}
                  className={`group/color p-10 rounded-[50px] bg-white/5 border transition-all duration-500 cursor-pointer ${
                    activeColor === c.color
                      ? "border-white/30 bg-white/10 scale-[1.03]"
                      : "border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div
                    className="w-full aspect-video rounded-3xl mb-8 relative overflow-hidden shadow-2xl"
                    style={{ backgroundColor: c.color }}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/color:translate-y-0 transition-transform duration-500"></div>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-2 block">
                    {c.sub}
                  </span>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-4">
                    {c.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-bold leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 05: PHYSICAL IDENTITY (THE UNIFORM) --- */}
      <section className="relative py-24 md:py-48 px-4 md:px-12 lg:px-24">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-12">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-sm">
                <Star size={16} className="text-brand-red animate-spin-slow" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                  Physical Branding
                </span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                Le Branding <br />{" "}
                <span className="text-brand-red italic underline decoration-black/10 decoration-8 underline-offset-[16px]">
                  Habité.
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-justify">
                L'identité d'une marque ne s'arrête pas aux pixels. Elle prend
                vie à travers l'uniforme, devenant un porte-drapeau de
                l'excellence GDC. Chaque détail du textile a été pensé pour
                refléter la rigueur technique de la création Smashy BGs.
              </p>
              <div className="flex items-center gap-10">
                <div className="flex flex-col">
                  <span className="text-4xl font-black tracking-tighter">
                    Premium
                  </span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Textile Quality
                  </span>
                </div>
                <div className="w-[1px] h-12 bg-black/10 dark:bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black tracking-tighter">
                    Logo R
                  </span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Iconic Embroidery
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-10 bg-brand-red/5 blur-[100px] rounded-full opacity-50"></div>
              <div className="relative rounded-[60px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] group/img">
                <img
                  src="https://group-digitalconcept.com/wp-content/uploads/2025/12/Generated-Image-December-22-2025-10_32AM.jpeg"
                  className="w-full h-auto grayscale group-hover/img:grayscale-0 transition-all duration-[2s] group-hover/img:scale-105"
                  alt="Brand Uniform"
                />
                {/* Interactive Scan Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-red/10 to-transparent h-20 w-full animate-scan pointer-events-none opacity-0 group-hover/img:opacity-100"></div>

                <div className="absolute bottom-10 left-10 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <span className="text-[9px] font-black uppercase tracking-[0.5em] opacity-80">
                    Uniform Specification
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 06: DIGITAL ARCHITECTURE (UX Showcase) --- */}
      <section className="relative py-24 md:py-48 px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-[#050505] border-y border-black/5 dark:border-white/5">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col items-center text-center mb-32">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 mb-8">
              <Smartphone size={16} className="text-brand-red" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red">
                DIGITAL ARCHITECTURE
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              L'Expérience <br />{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-black dark:from-white dark:to-gray-500 underline decoration-brand-red decoration-4">
                Sans Friction.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* App Showcase (8 cols) */}
            <div className="lg:col-span-8 bg-white dark:bg-[#080808] rounded-[60px] p-8 md:p-20 border border-black/5 dark:border-white/10 relative overflow-hidden group shadow-xl transition-all hover:border-brand-red/30">
              <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-red flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                    <Zap size={32} fill="white" />
                  </div>
                  <h3 className="text-4xl font-black uppercase tracking-tighter">
                    Commande <br /> en 3 Clics.
                  </h3>
                  <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                    GDC a architecturé un parcours utilisateur fluide, réduisant
                    le temps de commande moyen à{" "}
                    <strong className="text-black dark:text-white">
                      45 secondes
                    </strong>
                    .
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Apple Pay", "CMI Integrated", "Real-time Tracking"].map(
                      (t, i) => (
                        <span
                          key={i}
                          className="px-5 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[9px] font-black uppercase tracking-widest"
                        >
                          {t}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div className="relative pointer-events-none">
                  <div className="absolute -inset-10 bg-brand-red/10 rounded-full blur-3xl animate-pulse"></div>
                  <img
                    src="https://group-digitalconcept.com/wp-content/uploads/2025/12/Design-sans-titre-82.png"
                    className="w-full h-auto relative z-10 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"
                    alt="app ui"
                  />
                </div>
              </div>
            </div>

            {/* Vertical Stack (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="flex-1 bg-brand-red rounded-[60px] p-12 text-white flex flex-col justify-between group overflow-hidden shadow-2xl relative cursor-help">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <Activity
                    size={40}
                    className="mb-8 group-hover:animate-pulse"
                  />
                  <h4 className="text-2xl font-black uppercase tracking-widest leading-none mb-4">
                    Haptic <br /> Feedback
                  </h4>
                  <p className="text-white/80 font-bold text-sm">
                    Qualité sensorielle digitale augmentée.
                  </p>
                </div>
                <div className="relative z-10 text-6xl font-black tracking-tighter italic opacity-20 group-hover:opacity-40 transition-opacity">
                  SMOOTH.
                </div>
              </div>

              <div className="flex-1 bg-black rounded-[60px] p-12 border border-white/5 flex flex-col justify-between group shadow-xl transition-all hover:bg-zinc-900 cursor-default">
                <div className="flex justify-between items-start">
                  <Shield size={32} className="text-[#D4AF37]" />
                  <div className="px-3 py-1 rounded-full border border-white/20 text-[8px] font-black uppercase tracking-[0.3em] text-white/40">
                    Secure_v4
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                    Transactions <br /> Blindées
                  </h4>
                  <p className="text-xs text-white/40 font-medium leading-relaxed">
                    Protocoles bancaires elite et protection des données CNDP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 07: CTA REVOLUTION --- */}
      <section className="relative py-48 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#D4AF37]/[0.03] rounded-full blur-[180px] animate-pulse-slow"></div>
        </div>

        <div className="relative mb-32 group cursor-default z-10">
          <h2 className="text-[12vw] lg:text-[18rem] font-black uppercase tracking-tighter leading-[0.7] outline-text transition-all duration-1000 group-hover:text-black dark:group-hover:text-white select-none">
            VOTRE
          </h2>
          <h2 className="text-[10vw] lg:text-[14rem] font-black uppercase tracking-tighter leading-[0.7] text-brand-red italic select-none">
            SUCCÈS.
          </h2>
        </div>

        <div className="flex flex-col items-center gap-16 relative z-10">
          <div className="max-w-2xl space-y-6">
            <p className="text-lg md:text-3xl font-bold uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400">
              Prêt à dominer l'industrie ?
            </p>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-black opacity-40">
              REJOIGNEZ LE CERCLE GDC ELITE • EXCELLENCE MARRAKECH
            </p>
          </div>

          <a
            href="#contact"
            className="group/cta relative inline-flex items-center justify-center p-1.5 rounded-full overflow-hidden transition-all hover:scale-110 active:scale-95 shadow-[0_40px_80px_-20px_rgba(255,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-brand-red to-[#D4AF37] animate-spin-slow opacity-80"></div>

            <div className="relative bg-white dark:bg-black px-12 py-8 md:px-20 md:py-12 rounded-full flex items-center gap-10 md:gap-16 transition-colors group-hover:bg-gray-50 dark:group-hover:bg-[#050505]">
              <div className="text-left">
                <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-1">
                  Démarrer Maintenant
                </span>
                <span className="text-xl md:text-4xl font-black uppercase tracking-widest text-black dark:text-white">
                  INITIALISER MON PROJET
                </span>
              </div>
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-brand-red flex items-center justify-center text-white shadow-xl group-hover:rotate-45 transition-transform duration-700">
                <ArrowRight
                  size={40}
                  strokeWidth={3}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </div>

              {/* Internal Glow on Hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full"></div>
            </div>

            {/* Shine Animation */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-shine pointer-events-none" />
          </a>
        </div>
      </section>

      <style>{`
        .outline-text {
            -webkit-text-stroke: 1.5px rgba(0,0,0,0.8);
            color: transparent;
        }
        .dark .outline-text {
            -webkit-text-stroke: 2px rgba(255,255,255,0.15);
        }
        @keyframes scan {
          0% { top: -20%; }
          100% { top: 120%; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes shake {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(2px, 2px) rotate(0.5deg); }
          50% { transform: translate(-2px, -2px) rotate(-0.5deg); }
          75% { transform: translate(2px, -2px) rotate(0.5deg); }
        }
        .animate-shake {
          animation: shake 0.2s linear infinite;
        }
        @keyframes shine {
          100% { left: 125%; }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};
