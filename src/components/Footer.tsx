"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from '@/i18n/navigation';
import Image from 'next/image';
import { 
  Instagram, Facebook, Linkedin, 
  MapPin, Phone, Mail, Globe, 
  ArrowUpRight, Heart, Sparkles, X,
  ChevronRight, Clock, ShieldCheck, Zap
} from 'lucide-react';
import { useLocale } from 'next-intl';

interface NavLink {
  label: string;
  id: string;
  href?: string;
}

interface NavGroup {
  num: string;
  title: string;
  links: NavLink[];
}

const SOCIAL_LINKS = [
  { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
  { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
];

const NAV_GROUPS: NavGroup[] = [
  {
    num: "01",
    title: "EXPERTISES",
    links: [
      { label: "Création de Sites", id: "website-creation", href: "/services/website-creation" },
      { label: "E-Commerce Pro", id: "ecommerce", href: "/services/ecommerce" },
      { label: "Apps Mobiles", id: "application-creation", href: "/services/apps" },
      { label: "Stratégie SEO", id: "seo", href: "/services/seo" },
      { label: "Identité Visuelle", id: "visual-identity", href: "/services/identity" },
    ]
  },
  {
    num: "02",
    title: "AGENCE",
    links: [
      { label: "Notre ADN", id: "agency", href: "/#agency" },
      { label: "Notre Équipe", id: "team", href: "/#team" },
      { label: "Réalisations", id: "portfolio", href: "/portfolio" },
      { label: "Packs Elite", id: "pack-siteweb", href: "/packs" },
      { label: "Contact Direct", id: "contact-page", href: "/contact" },
    ]
  }
];

const FOOTER_LINKS = ["Privacy", "Legal", "Terms", "Cookies"];
const COMPANY_NAME = "Group Digital Concept";
const COMPANY_EMAIL = "groupdigitalconcept@gmail.com";
const COMPANY_PHONE = "+212 666 37 03 06";
const COMPANY_LOCATION = "Plateau Bureau Al Amira III, Guéliz";
const LOGO_URL = "https://group-digitalconcept.com/wp-content/uploads/2024/04/Design-sans-titre-23.png";

export const Footer: React.FC = () => {
  const router = useRouter();
  const locale = useLocale();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [time, setTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  // Initialize client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const marrakechTime = time.toLocaleTimeString(locale, {
    timeZone: 'Africa/Casablanca',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const handleNavClick = (e: React.MouseEvent, href?: string) => {
    e.preventDefault();
    
    if (!href) return;

    // Handle anchor links
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      element?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Navigate using Next.js router
    router.push(href);
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (!isClient) {
    return null;
  }

  return (
    <footer className="relative w-full bg-white dark:bg-[#020202] pt-24 md:pt-40 transition-colors duration-1000 overflow-hidden">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[80vw] h-[60vw] bg-brand-red/[0.03] rounded-full blur-[150px]" />
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-blue-600/[0.02] rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* --- TYPOGRAPHIC HEADER --- */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1800px] mb-20 md:mb-32 relative z-10">
        <div className="flex flex-col items-center">
          <h2 className="text-[12vw] lg:text-[10rem] xl:text-[13rem] font-black text-black dark:text-white tracking-tighter leading-none uppercase select-none opacity-5 dark:opacity-10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            DIGITAL CONCEPT
          </h2>
          <div className="relative pt-12 md:pt-20">
            <div className="flex flex-col items-center gap-6">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-[2.5rem] bg-brand-red flex items-center justify-center shadow-2xl animate-float-custom">
                <Image 
                  src={LOGO_URL} 
                  alt={COMPANY_NAME} 
                  className="w-10 md:w-16 h-auto brightness-0 invert" 
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-2xl md:text-4xl font-black text-black dark:text-white tracking-tight text-center uppercase">
                L'Art de <span className="text-brand-red italic">Dominer</span> le Marché.
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* --- BENTO GRID SYSTEM --- */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1800px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6">
          
          {/* 1. NAVIGATION HUB (Col 5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {NAV_GROUPS.map((group, gIdx) => (
              <div 
                key={gIdx} 
                className="bg-gray-50 dark:bg-white/[0.02] rounded-[2.5rem] p-8 md:p-10 border border-black/5 dark:border-white/5 flex flex-col gap-8 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black font-mono text-brand-red">{group.num}</span>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
                    {group.title}
                  </h4>
                </div>
                <nav className="flex flex-col gap-4">
                  {group.links.map((link) => (
                    <button 
                      key={link.id} 
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-brand-red dark:hover:text-white transition-colors relative after:absolute after:w-full after:h-px after:-bottom-0.5 after:left-0 after:bg-brand-red after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-400 after:cubic-bezier(0.16, 1, 0.3, 1) hover:after:scale-x-100 hover:after:origin-bottom-left w-fit text-left"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* 2. CONTACT CONSOLE (Col 4) */}
          <div className="lg:col-span-4 bg-white dark:bg-white/[0.03] rounded-[2.5rem] p-8 md:p-10 border border-black/5 dark:border-white/10 shadow-xl flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/10 transition-colors" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <Zap size={20} fill="currentColor" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                  Le Hub
                </span>
              </div>
              
              <div className="space-y-8">
                <a 
                  href={`tel:${COMPANY_PHONE}`} 
                  className="block group/item"
                  aria-label={`Appeler ${COMPANY_PHONE}`}
                >
                  <p className="text-[8px] font-black uppercase tracking-widest text-gray-400 mb-1">
                    Support Ligne
                  </p>
                  <p className="text-xl md:text-2xl font-black text-black dark:text-white group-hover/item:text-brand-red transition-colors">
                    {COMPANY_PHONE}
                  </p>
                </a>
                <a 
                  href={`mailto:${COMPANY_EMAIL}`} 
                  className="block group/item"
                  aria-label={`Envoyer un email à ${COMPANY_EMAIL}`}
                >
                  <p className="text-[8px] font-black uppercase tracking-widest text-gray-400 mb-1">
                    Email Officiel
                  </p>
                  <p className="text-sm md:text-lg font-black text-black dark:text-white group-hover/item:text-brand-red transition-colors truncate">
                    {COMPANY_EMAIL}
                  </p>
                </a>
              </div>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
              <div className="flex gap-2">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={social.label}
                      onClick={() => handleSocialClick(social.url)}
                      className="w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:scale-110 transition-transform active:scale-90"
                      aria-label={`Visitez notre ${social.label}`}
                    >
                      <Icon size={18} />
                    </button>
                  );
                })}
              </div>
              <button 
                onClick={(e) => handleNavClick(e, '/contact')}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-red hover:gap-4 transition-all"
              >
                DISCUTER <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* 3. LOCATION & TIME (Col 3) */}
          <div className="lg:col-span-3 bg-black dark:bg-white text-white dark:text-black rounded-[2.5rem] p-8 md:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10">
                <div className="p-3 bg-white/10 dark:bg-black/5 rounded-2xl">
                  <Globe size={24} className="text-brand-red" />
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-black uppercase tracking-widest opacity-50 mb-1">
                    Marrakech Time
                  </p>
                  <p className="text-xl font-mono font-black">{marrakechTime}</p>
                </div>
              </div>

              <h4 className="text-2xl font-black uppercase tracking-tighter leading-none mb-6">
                Plateau Bureau <br /> Al Amira III, <br /> Guéliz.
              </h4>

              <button 
                onClick={() => setIsMapOpen(true)}
                className="flex items-center gap-3 px-6 py-3 bg-brand-red rounded-xl font-black uppercase text-[9px] tracking-widest hover:scale-105 transition-all shadow-xl shadow-red-900/30"
                aria-label="Voir la localisation sur la carte"
              >
                <MapPin size={12} /> VOIR SUR LA CARTE
              </button>
            </div>

            <div className="relative z-10 mt-12 opacity-30 group-hover:opacity-100 transition-opacity">
              <p className="text-[8px] font-black uppercase tracking-[0.5em]">
                GDC • MARRAKECH CORE
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* --- UTILITY FOOTER BAR --- */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1800px] mt-20 md:mt-32 pb-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-black/5 dark:border-white/10">
          
          <div className="flex items-center gap-6">
            <Image 
              src={LOGO_URL} 
              alt={COMPANY_NAME} 
              className="h-6 w-auto opacity-20 dark:opacity-40 grayscale" 
              width={24}
              height={24}
            />
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {FOOTER_LINKS.map(item => (
              <a 
                key={item} 
                href="#" 
                className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-brand-red transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
              Secure Protocol v.2.5
            </span>
          </div>
        </div>
      </div>

      {/* --- MAP MODAL --- */}
      {isMapOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-12 animate-enter-zoom">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-2xl" 
            onClick={() => setIsMapOpen(false)}
            role="presentation"
          />
          <div className="relative w-full max-w-6xl aspect-video bg-white dark:bg-[#0A0A0A] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
            <button 
              onClick={() => setIsMapOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-brand-red transition-all z-50 shadow-xl"
              aria-label="Fermer la carte"
            >
              <X size={24} strokeWidth={3} />
            </button>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d-8.014760703210465!3d31.63837909999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef883aca855d%3A0x91b51ca1f038c777!2sMajorelle%20centre%20d%20&#39;%20affaires!5e1!3m2!1sfr!2sma!4v1766573686751!5m2!1sfr!2sma"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              className="w-full h-full"
              title="Localisation GDC Agency Marrakech"
            />
          </div>
        </div>
      )}
    </footer>
  );
};
