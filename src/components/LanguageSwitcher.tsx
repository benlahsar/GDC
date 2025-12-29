
import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { Language } from '../translations';

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
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[3];

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
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2 px-3 py-2 rounded-2xl
          bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10
          hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300
          text-black dark:text-white group
        "
        aria-label="Switch Language"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-[10px] font-black uppercase tracking-widest hidden sm:block">
          {currentLang.code}
        </span>
        <ChevronDown size={12} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu - Styled like the screenshot provided by user */}
      <div className={`
        absolute top-full right-0 mt-3 w-56 
        bg-white dark:bg-[#050505] backdrop-blur-3xl
        border border-black/10 dark:border-white/10 
        rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]
        overflow-hidden z-[200] transition-all duration-500 origin-top-right
        ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}
      `}>
        <div className="py-2">
          {LANGUAGES.map((lang, index) => (
            <React.Fragment key={lang.code}>
              <button
                onClick={() => {
                  setLanguage(lang.code as Language);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center justify-between px-6 py-4
                  transition-all duration-300 group
                  ${language === lang.code ? 'bg-brand-red/5' : 'hover:bg-black/5 dark:hover:bg-white/5'}
                `}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl grayscale group-hover:grayscale-0 transition-all duration-300">{lang.flag}</span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${language === lang.code ? 'text-brand-red' : 'text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white'}`}>
                    {lang.name}
                  </span>
                </div>
                {language === lang.code && <Check size={14} className="text-brand-red" />}
              </button>
              {index < LANGUAGES.length - 1 && (
                <div className="mx-6 h-[1px] bg-black/5 dark:bg-white/5"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
