"use client";
import React, { useState } from "react";
import { X, Send, Sparkles, MessageCircle } from "lucide-react";

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "212666370306";
  const message = encodeURIComponent(
    "Bonjour Group Digital Concept, j'aimerais discuter d'un projet digital.",
  );

  const LiquidGlassIcon = () => (
    <div className="relative w-11 h-11 flex items-center justify-center transition-all duration-700 group-hover:scale-110">
      {/* Morphing Liquid Base */}
      <div
        className={`absolute inset-0 transition-all duration-700 bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/40 shadow-inner animate-liquid-morph group-hover:bg-white/30 group-hover:border-white/60`}
      ></div>

      {/* Specular highlight for glass effect */}
      <div className="absolute top-1.5 left-2.5 w-3.5 h-2 bg-white/40 rounded-full blur-[0.8px] rotate-[-15deg] pointer-events-none group-hover:bg-white/60"></div>

      {/* WhatsApp SVG */}
      <svg
        viewBox="0 0 24 24"
        width="26"
        height="26"
        fill="currentColor"
        className={`relative z-10 transition-all duration-700 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </div>
  );

  return (
    <div className="fixed bottom-24 right-6 md:bottom-32 md:right-10 z-[90] lg:z-[1000] font-sans pointer-events-none">
      {/* --- CHAT BUBBLE OVERLAY --- */}
      <div
        className={`absolute bottom-20 right-0 w-[280px] xs:w-[320px] sm:w-[350px] max-w-[calc(100vw-2.5rem)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right ${isOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-90 translate-y-10 pointer-events-none"}`}
      >
        <div className="overflow-hidden rounded-[3rem] border border-black/5 dark:border-white/10 bg-white dark:bg-[#121212] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)]">
          {/* Header */}
          <div className="bg-brand-red p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-inner overflow-hidden">
                    <img
                      src="https://group-digitalconcept.com/wp-content/uploads/2024/04/Design-sans-titre-23.png"
                      alt="GDC"
                      className="w-8 h-8 object-contain brightness-0 invert"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-brand-red rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-widest text-white leading-tight">
                    GDC Assist
                  </h4>
                  <p className="text-[9px] font-black opacity-80 uppercase tracking-tighter text-white">
                    Direct Connect
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
              >
                <X size={16} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 bg-gradient-to-b from-black/[0.02] to-transparent dark:from-white/[0.02]">
            <div className="p-5 rounded-[1.5rem] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm mb-6 relative">
              <div className="absolute -top-2 right-4 w-4 h-4 bg-gray-50 dark:bg-[#1c1c1c] rotate-45 border-l border-t border-black/5 dark:border-white/10"></div>
              <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 leading-relaxed">
                Bonjour ! 👋 <br /> Comment pouvons-nous transformer votre
                vision en succès aujourd'hui ?
              </p>
            </div>

            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[1.5rem] font-black uppercase text-[10px] tracking-[0.2em] transition-all shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)] active:scale-95"
            >
              <span className="flex items-center gap-3">
                <Send
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
                Chatter Maintenant
              </span>
              <Sparkles size={14} className="animate-pulse" />
            </a>
          </div>

          <div className="px-6 py-4 border-t border-black/5 dark:border-white/5 text-center bg-black/5">
            <p className="text-[8px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.4em]">
              Group Digital Concept • Marrakech
            </p>
          </div>
        </div>
      </div>

      {/* --- FLOATING BUTTON --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto relative group w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? "bg-black dark:bg-white rotate-90 scale-95 shadow-none border-transparent"
            : "bg-emerald-500 dark:bg-white/10 backdrop-blur-2xl hover:scale-110 shadow-[0_10px_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.8)] border-emerald-400/50 dark:border-white/10"
        } border`}
        aria-label="WhatsApp Contact"
      >
        {/* Shimmer Effect on Button */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-tr from-white/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        )}

        {/* Pulse Ring */}
        {!isOpen && (
          <div className="absolute -inset-2 border-2 border-emerald-500/20 rounded-[2rem] animate-pulse-slow"></div>
        )}

        {isOpen ? (
          <X className="text-white dark:text-black" size={24} strokeWidth={3} />
        ) : (
          <div className="relative">
            <LiquidGlassIcon />
            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 border-2 border-emerald-500 dark:border-black rounded-full shadow-sm animate-pulse"></div>
          </div>
        )}

        {/* Tooltip Label (Responsive Visibility) */}
        {!isOpen && (
          <div className="absolute right-full mr-6 px-4 py-3 bg-white/90 dark:bg-black/80 backdrop-blur-3xl border border-black/5 dark:border-white/10 rounded-2xl shadow-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 pointer-events-none hidden sm:block">
            <div className="flex items-center gap-3">
              <MessageCircle size={14} className="text-emerald-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black dark:text-white">
                Expertise WhatsApp
              </span>
            </div>
          </div>
        )}
      </button>

      <style>{`
        @keyframes liquid-morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg); }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(180deg); }
        }
        .animate-liquid-morph {
          animation: liquid-morph 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};
