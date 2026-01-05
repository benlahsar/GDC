"use client";
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { Sparkles, MousePointer2, CheckCircle2 } from "lucide-react";

const ATOUTS = [
  { text: "Expertise Inégalée", highlight: true },
  { text: "Livraison Rapide", highlight: false },
  { text: "100% Sur-Mesure", highlight: false },
  { text: "Support 24/7", highlight: false },
  { text: "SEO Performant", highlight: false },
  { text: "Sécurité Max", highlight: false },
  { text: "Design Moderne", highlight: false },
  { text: "Mobile First", highlight: false },
  { text: "ROI Garanti", highlight: false },
];

export const AtoutsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const [items, setItems] = useState<any[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMobile || !isVisible || !containerRef.current || !canvasRef.current)
      return;

    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();
    const world = engine.world;
    engineRef.current = engine;
    engine.gravity.y = 1.2;

    const width = containerRef.current.clientWidth;
    const height = 600;

    const render = Render.create({
      element: containerRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: { width, height, background: "transparent", wireframes: false },
    });

    const ballBodies: Matter.Body[] = [];
    const ballRadius = 70;
    const wallThickness = 100;

    ATOUTS.forEach((atout, index) => {
      const x = Math.random() * (width - 100) + 50;
      const y = -Math.random() * 1000 - 100;
      const body = Bodies.circle(x, y, ballRadius, {
        restitution: 0.7,
        friction: 0.05,
        frictionAir: 0.005,
        density: 0.05,
        label: `ball-${index}`,
        render: { visible: false },
      });
      ballBodies.push(body);
    });

    Composite.add(world, ballBodies);

    const wallOptions = {
      isStatic: true,
      render: { visible: false },
      friction: 0.5,
      restitution: 0.5,
    };
    const ground = Bodies.rectangle(
      width / 2,
      height + wallThickness / 2,
      width,
      wallThickness,
      wallOptions
    );
    const leftWall = Bodies.rectangle(
      0 - wallThickness / 2,
      -2000,
      wallThickness,
      5000,
      wallOptions
    );
    const rightWall = Bodies.rectangle(
      width + wallThickness / 2,
      -2000,
      wallThickness,
      5000,
      wallOptions
    );
    Composite.add(world, [ground, leftWall, rightWall]);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.15, damping: 0.1, render: { visible: false } },
    });

    mouseConstraint.mouse.element.removeEventListener(
      "mousewheel",
      (mouseConstraint.mouse as any).mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      (mouseConstraint.mouse as any).mousewheel
    );
    Composite.add(world, mouseConstraint);

    setItems(
      ballBodies.map((b, i) => ({
        id: i,
        body: b,
        text: ATOUTS[i].text,
        highlight: ATOUTS[i].highlight,
        radius: ballRadius,
      }))
    );

    let animationFrameId: number;
    const domUpdateLoop = () => {
      ballBodies.forEach((body, index) => {
        const el = document.getElementById(`atout-ball-${index}`);
        if (el) {
          const { x, y } = body.position;
          el.style.transform = `translate3d(${x - ballRadius}px, ${
            y - ballRadius
          }px, 0)`;
        }
      });
      animationFrameId = requestAnimationFrame(domUpdateLoop);
    };

    const runner = Runner.create();
    Runner.run(runner, engine);
    runnerRef.current = runner;
    domUpdateLoop();

    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      render.canvas.width = newWidth;
      Matter.Body.setPosition(ground, {
        x: newWidth / 2,
        y: height + wallThickness / 2,
      });
      Matter.Body.setPosition(leftWall, { x: 0 - wallThickness / 2, y: -1000 });
      Matter.Body.setPosition(rightWall, {
        x: newWidth + wallThickness / 2,
        y: -1000,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engine);
    };
  }, [isVisible, isMobile]);

  return (
    <section className="relative w-full py-24 bg-[#F0F0F2] dark:bg-black text-black dark:text-white overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        <div className="text-center mb-16 relative z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
            <Sparkles size={14} className="text-brand-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
              Points Forts
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            Les Atouts de{" "}
            <span className="text-brand-red">Group Digital Concept</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-red mx-auto rounded-full"></div>
        </div>

        {!isMobile ? (
          <div
            ref={containerRef}
            className="relative w-full max-w-[1200px] h-[600px] rounded-[40px] border border-black/10 dark:border-white/10 bg-white/50 dark:bg-[#0A0A0A] shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] overflow-hidden select-none"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.1] dark:opacity-[0.15]">
              <img
                src="https://group-digitalconcept.com/wp-content/uploads/2024/04/Design-sans-titre-23.png"
                alt="Logo"
                className="w-[70%] max-w-[400px] h-auto object-contain"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
            <canvas
              ref={canvasRef}
              className="absolute inset-0 pointer-events-auto z-50 opacity-0 cursor-grab active:cursor-grabbing"
            />
            {items.map((item, index) => (
              <div
                key={index}
                id={`atout-ball-${index}`}
                className={`absolute top-0 left-0 rounded-full flex items-center justify-center p-2 text-center shadow-lg transition-colors duration-300 will-change-transform z-40 pointer-events-none ${
                  item.highlight
                    ? "bg-brand-red text-white border-2 border-brand-red shadow-[0_10px_20px_rgba(220,38,38,0.3)]"
                    : "bg-white dark:bg-[#1a1a1a] text-black dark:text-white border border-gray-100 dark:border-white/10"
                }`}
                style={{ width: item.radius * 2, height: item.radius * 2 }}
              >
                <span
                  className={`font-bold leading-tight px-1 select-none pointer-events-none ${
                    item.highlight ? "text-base" : "text-sm"
                  }`}
                >
                  {item.text}
                </span>
              </div>
            ))}
            <div className="absolute bottom-6 left-0 w-full text-center pointer-events-none z-10 flex items-center justify-center gap-2 text-gray-400 dark:text-gray-500 opacity-50">
              <MousePointer2 size={16} className="animate-bounce" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Attrapez les bulles
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {ATOUTS.map((atout, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border flex items-center justify-between gap-4 shadow-sm transition-all duration-300 ${
                    atout.highlight
                      ? "bg-brand-red text-white border-brand-red shadow-lg shadow-red-500/20"
                      : "bg-white dark:bg-[#111] text-black dark:text-white border-black/5 dark:border-white/10"
                  }`}
                >
                  <span className="font-bold text-sm uppercase tracking-wide">
                    {atout.text}
                  </span>
                  {atout.highlight ? (
                    <Sparkles size={18} className="text-white" />
                  ) : (
                    <CheckCircle2
                      size={18}
                      className="text-gray-300 dark:text-gray-600"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
