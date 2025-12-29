
import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const animate = () => {
      // Smooth interpolation for the "weighted" feel of a premium cursor
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"], input, select, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', handleHover);
    
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', handleHover);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  return (
    <>
      <div 
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ willChange: 'transform' }}
      >
          <div className={`
            relative transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
            ${isHovering ? 'scale-125' : 'scale-100'}
            ${isClicking ? 'scale-90' : ''}
          `}
          style={{ transformOrigin: '0 0' }}
          >
            {/* The 3D Iridescent Arrow Cursor */}
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
              style={{ transform: 'rotate(-15deg)' }}
            >
              <defs>
                {/* Iridescent Gradient for the main body */}
                <linearGradient id="iridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" /> {/* Purple */}
                  <stop offset="30%" stopColor="#3b82f6" /> {/* Blue */}
                  <stop offset="60%" stopColor="#2dd4bf" /> {/* Teal */}
                  <stop offset="100%" stopColor="#6366f1" /> {/* Indigo */}
                </linearGradient>

                {/* Chrome/Rim Shine Gradient */}
                <linearGradient id="rimGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                  <stop offset="45%" stopColor="#fff" stopOpacity="0.2" />
                  <stop offset="55%" stopColor="#fff" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="1" />
                </linearGradient>

                {/* Glassy Highlight */}
                <linearGradient id="glassHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </linearGradient>

                {/* Filter for Gloss and Metallic Bloom */}
                <filter id="glossEffect" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.75" specularExponent="20" lightingColor="#white">
                    <fePointLight x="0" y="0" z="20" />
                  </feSpecularLighting>
                  <feComposite in2="SourceGraphic" operator="in" />
                </filter>
              </defs>

              {/* The "3D Thickness" / Side walls */}
              <path 
                d="M10 10 L45 80 L60 60 L90 70 L10 10" 
                fill="#1e1b4b" 
                className="opacity-40"
                transform="translate(4, 4)"
              />

              {/* Main Arrow Shape (Iridescent Body) */}
              <path 
                d="M10 10 L45 80 L60 60 L90 70 L10 10" 
                fill="url(#iridGradient)" 
                stroke="url(#rimGradient)"
                strokeWidth="4"
                strokeLinejoin="round"
                filter="url(#glossEffect)"
              />

              {/* Top Glass Surface Highlight */}
              <path 
                d="M15 15 L43 70 L55 55 L80 62 L15 15" 
                fill="url(#glassHighlight)" 
                className="opacity-30"
              />

              {/* Extra Sparkle on the Tip */}
              <circle cx="10" cy="10" r="2" fill="white" className="animate-pulse" />
            </svg>

            {/* Kinetic Trail Blur (Glow) */}
            <div className={`
              absolute top-0 left-0 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full 
              bg-brand-red/10 blur-3xl transition-opacity duration-500 pointer-events-none
              ${isHovering ? 'opacity-40' : 'opacity-0'}
            `} />
          </div>
      </div>
      <style>{`
        /* Hide default cursor globally */
        html, body, a, button, input, select, textarea, [role="button"] {
          cursor: none !important;
        }

        /* Support for desktop only - restore cursor on mobile if needed for UX */
        @media (max-width: 1024px) {
          html, body, a, button { cursor: auto !important; }
          .cursor-div { display: none; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
};
