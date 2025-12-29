
import React, { useEffect, useState, useRef } from 'react';
import { Zap } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [shutterOpen, setShutterOpen] = useState(false);
  const [loadingText, setLoadingText] = useState("INITIALISATION");
  
  // Ref for animation frame to ensure we can cancel it if needed
  const requestRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);

  // Configuration
  const DURATION = 2200; // 2.2 seconds total load time for premium feel

  useEffect(() => {
    const animate = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const timeFraction = (time - startTimeRef.current) / DURATION;
      
      // Easing function: EaseOutQuart (starts fast, slows down smoothly)
      // 1 - (1 - x)^4
      const progress = Math.min(1 - Math.pow(1 - timeFraction, 4), 1);
      
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      // Update French text based on progress
      if (currentCount < 30) setLoadingText("INITIALISATION DU SYSTÈME");
      else if (currentCount < 60) setLoadingText("CHARGEMENT DES RESSOURCES");
      else if (currentCount < 90) setLoadingText("OPTIMISATION DE L'INTERFACE");
      else setLoadingText("ACCÈS AUTORISÉ");

      if (timeFraction < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        // Animation Complete
        setCount(100);
        triggerExit();
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const triggerExit = () => {
    // Small delay at 100% to let the user see "100"
    setTimeout(() => {
        setIsExiting(true); // Trigger Zoom/Fade of content
        
        setTimeout(() => {
            setShutterOpen(true); // Open the curtains
            
            // Unmount component after curtains are fully open
            setTimeout(onComplete, 800); 
        }, 400); 
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden pointer-events-none cursor-wait">
        
        {/* --- TOP SHUTTER --- */}
        <div 
            className={`
                absolute top-0 left-0 w-full h-1/2 bg-[#020202] z-20 
                transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]
                will-change-transform
                ${shutterOpen ? '-translate-y-full' : 'translate-y-0'}
            `}
        >
             {/* Bottom border line of top shutter */}
             <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
        </div>

        {/* --- BOTTOM SHUTTER --- */}
        <div 
            className={`
                absolute bottom-0 left-0 w-full h-1/2 bg-[#020202] z-20
                transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]
                will-change-transform
                ${shutterOpen ? 'translate-y-full' : 'translate-y-0'}
            `}
        >
             {/* Top border line of bottom shutter */}
             <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
        </div>

        {/* --- CONTENT LAYER (Z-30 to sit on top of shutters) --- */}
        <div 
            className={`
                relative z-30 flex flex-col items-center justify-center w-full h-full
                transition-all duration-500 ease-in
                ${isExiting ? 'opacity-0 scale-110 blur-sm' : 'opacity-100 scale-100 blur-0'}
            `}
        >
            {/* Top Left Branding */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Agence GDC</span>
            </div>

            {/* Top Right Location */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Marrakech, MA</span>
            </div>

            {/* MAIN COUNTER */}
            <div className="relative">
                <h1 className="text-[20vw] md:text-[25vh] font-black text-white leading-none tracking-tighter tabular-nums select-none mix-blend-difference">
                    {count}
                </h1>
                <span className="absolute top-4 -right-6 md:top-10 md:-right-12 text-xl md:text-4xl font-black text-brand-red">%</span>
            </div>

            {/* LOADING TEXT & BAR */}
            <div className="absolute bottom-12 md:bottom-20 w-full px-8 md:px-20 flex flex-col gap-4">
                <div className="flex justify-between items-end">
                    <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em] animate-pulse">
                        {loadingText}
                    </span>
                    <span className="text-[10px] font-mono text-brand-red">
                        v4.0.1
                    </span>
                </div>
                
                {/* Progress Bar Container */}
                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-brand-red shadow-[0_0_20px_rgba(220,38,38,0.8)] transition-all duration-75 ease-linear"
                        style={{ width: `${count}%` }}
                    ></div>
                </div>
            </div>

            {/* Background Ambient Glow (Red) - Inside the content layer so it fades out */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-brand-red/[0.04] rounded-full blur-[120px] pointer-events-none"></div>
            
            {/* Grain Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none"></div>

        </div>

    </div>
  );
};
