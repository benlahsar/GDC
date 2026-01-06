"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Globe } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const LANGUAGES = [
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'nl', name: 'Dutch', flag: '🇳🇱' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
];

export const LanguageSwitcher: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[3]; // Default to FR

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      {/* Trigger Button: Globe Icon + Short Code (Universal & Sleek) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 pl-3 pr-3 py-2 rounded-full
          bg-black/5 dark:bg-white/10 backdrop-blur-md
          border border-black/5 dark:border-white/10
          transition-all duration-300
          text-black dark:text-white group
          ${isOpen ? 'ring-2 ring-brand-red/20 border-brand-red/30 bg-white/20 dark:bg-white/20' : 'hover:bg-black/10 dark:hover:bg-white/20 hover:border-black/20 dark:hover:border-white/30'}
        `}
        aria-label="Switch Language"
      >
        <Globe size={16} strokeWidth={2} className="text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
        
        <div className="w-[1px] h-3 bg-black/10 dark:bg-white/20 mx-0.5"></div>

        <span className="text-[11px] font-black uppercase tracking-widest leading-none pt-0.5">
          {currentLang.code.toUpperCase()}
        </span>

        <ChevronDown 
          size={12} 
          className={`text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      <div className={`
        absolute top-full right-0 mt-2 w-44 
        bg-white/95 dark:bg-[#121212]/95 backdrop-blur-2xl
        border border-black/5 dark:border-white/10 
        rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]
        overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top-right
        ${isOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}
      `}>
        <div className="py-1.5 max-h-[300px] overflow-y-auto custom-scrollbar p-1">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as any);
                setIsOpen(false);
              }}
              className={`
                w-full flex items-center justify-between px-3 py-2.5 rounded-xl
                transition-all duration-200 group relative
                ${language === lang.code 
                   ? 'bg-brand-red/10 text-brand-red' 
                   : 'text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white'}
              `}
            >
              <div className="flex items-center gap-3">
                <span className="text-base leading-none filter drop-shadow-sm">{lang.flag}</span>
                <span className="text-[11px] font-bold uppercase tracking-wider pt-0.5">{lang.name}</span>
              </div>
              {language === lang.code && <Check size={14} strokeWidth={3} className="animate-in fade-in zoom-in" />}
            </button>
          ))}
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); }
      `}</style>
    </div>
  );
};