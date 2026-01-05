"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { flushSync } from 'react-dom';
import Image from 'next/image';
import {
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  Menu,
  X,
  Sun,
  Moon,
  MapPin,
  Phone,
  Zap,
  Eye,
  Sparkles,
  Target,
  Globe,
  Layout,
  Search,
  MousePointerClick,
  Smartphone,
  Palette,
  Code,
  Plus,
  Minus,
} from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { AGENCY_INFO, NAV_ITEMS } from '@/lib/constants';
import { NavItem } from '@/lib/types';

// Fix: Use NavItem everywhere, remove DropdownItem
type DropdownItem = NavItem;

const EXPERTISE_META: Record<string, { icon: any; desc: string; color: string; stats: string }> = {
  'website-creation': { icon: Layout, desc: 'E-commerce & Vitrines', color: 'blue', stats: '+200 Sites' },
  'seo': { icon: Search, desc: 'Domination Google', color: 'red', stats: 'Top 1 Rank' },
  'ads': { icon: MousePointerClick, desc: 'ROI Publicitaire', color: 'orange', stats: 'x4 Conversions' },
  'application-creation': { icon: Smartphone, desc: 'iOS & Android Native', color: 'purple', stats: 'Apps Fluides' },
  'visual-identity': { icon: Palette, desc: 'Logos & Branding', color: 'pink', stats: 'Identité Forte' },
  'maintenance': { icon: Code, desc: 'Support & Sécurité', color: 'emerald', stats: 'Uptime 99.9%' },
};

export const Header: React.FC = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const { t } = useTranslation();
  const headerRef = useRef<HTMLDivElement>(null);

  // Initialize client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const isDark = document.documentElement.classList.contains('dark');
    const nextTheme = isDark ? 'light' : 'dark';

    const applyTheme = () => {
      flushSync(() => {
        setTheme(nextTheme);
      });
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', nextTheme);
    };

    // Check for View Transitions API support
    if (!(document as any).startViewTransition) {
      applyTheme();
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.documentElement.classList.add('no-transitions');

    const transition = (document as any).startViewTransition(() => {
      applyTheme();
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        { clipPath },
        {
          duration: 500,
          easing: 'ease-out',
          pseudoElement: '::view-transition-new(root)',
        } as any
      );
    });

    transition.finished.finally(() => {
      document.documentElement.classList.remove('no-transitions');
    });
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();

    // Fix: Use id as required
    if ((item as any).isNotPage) {
      if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        setExpandedMobileItems((prev) =>
          prev.includes(item.id!) ? prev.filter((i) => i !== item.id) : [...prev, item.id!]
        );
      }
      return;
    }

    // Handle hash navigation for same-page sections
    if (item.href?.startsWith('/#')) {
      const hash = item.href.substring(1); // Remove the leading /
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (window.location.pathname !== '/') {
        // If not on home page, navigate to home with hash
        router.push(item.href);
      }
    } else if (item.href?.startsWith('#')) {
      const element = document.getElementById(item.href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate using Next.js router for different pages
      router.push(item.href);
    }

    setMobileMenuOpen(false);
    setHoveredItem(null);
  }, [router]);

  const handleSubItemClick = useCallback((e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();

    // Handle external links (portfolio projects)
    if (item.href?.startsWith('http')) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
      return;
    }

    // Navigate using Next.js router
    if (item.href) {
      router.push(item.href);
    }

    setHoveredItem(null);
    setActiveCategory(null);
    setActiveSubCategory(null);
    setMobileMenuOpen(false);
  }, [router]);

  // Fix: Remove hasMega, use hasDropdown for mega menu as well
  const translatedNav: NavItem[] = useMemo(
    () => [
      { label: t.nav.home || 'Accueil', id: 'home', href: '/' },
      { label: t.nav.agency || 'Agence', id: 'agency', href: '/agency' },
      { label: t.nav.team || 'Équipe', id: 'team', href: '/team' },
      { label: t.nav.expertise || 'Expertises', id: 'expertises', href: '#', hasDropdown: true, isNotPage: true },
      { label: t.nav.solutions || 'Solutions', id: 'solutions', href: '#', hasDropdown: true, isNotPage: true },
      { label: t.nav.portfolio || 'Portfolio', id: 'portfolio', href: '/portfolio', hasDropdown: true },
      { label: t.nav.contact || 'Contact', id: 'contact-page', href: '/contact' },
    ],
    [t]
  );

  const expertisesItem = useMemo(() => NAV_ITEMS.find((n) => n.id === 'expertises'), []);
  const activeCatData = useMemo(
    () => expertisesItem?.dropdownItems?.find((cat) => cat.id === activeCategory),
    [expertisesItem, activeCategory]
  );
  const activeSubCatData = useMemo(
    () => activeCatData?.dropdownItems?.find((sub) => sub.id === activeSubCategory),
    [activeCatData, activeSubCategory]
  );

  if (!isClient) {
    return null;
  }

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? 'py-3' : 'py-6 md:py-8'
      }`}
    >
      <div
        className={`mx-4 md:mx-10 lg:mx-auto relative max-w-[1600px] rounded-[2.5rem] px-6 py-4 md:px-10 md:py-5 flex items-center justify-between transition-all duration-700 backdrop-blur-[50px] bg-white dark:bg-[#0A0A0A] border border-black/[0.05] dark:border-white/[0.08] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]`}
      >
        {/* Logo */}
        <div className="flex items-center z-50">
          <button
            onClick={(e) => handleNavClick(e, { label: 'home', id: 'home', href: '/' })}
            className="block relative group transition-transform active:scale-95"
            aria-label="Accueil"
          >
            <Image
              src={AGENCY_INFO.logoLight}
              alt={`${AGENCY_INFO.subtitle} Logo`}
              className="h-10 md:h-14 w-auto object-contain block dark:hidden"
              width={120}
              height={120}
            />
            <Image
              src={AGENCY_INFO.logoDark}
              alt={`${AGENCY_INFO.subtitle} Logo Dark`}
              className="h-10 md:h-14 w-auto object-contain hidden dark:block"
              width={120}
              height={120}
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
          {translatedNav.map((item, index) => {
            const constantItem = NAV_ITEMS.find((n) => n.id === item.id);
            const isHoveredState = hoveredItem === item.label;

            return (
              <div
                key={`${item.id}-${index}`}
                className="relative group/nav"
                onMouseEnter={() => {
                  setHoveredItem(item.label);
                  if (item.id === 'expertises' && !activeCategory) {
                    setActiveCategory(constantItem?.dropdownItems?.[0]?.id || null);
                  }
                }}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-4 py-2.5 text-[10px] xl:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-1.5 rounded-full ${
                    (item as any).isNotPage ? 'cursor-default' : 'cursor-pointer'
                  } text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5`}
                  aria-label={item.label}
                >
                  <span>{item.label}</span>
                  {(item.hasDropdown || item.id === 'contact-page') && (
                    <ChevronDown
                      size={10}
                      className={`transition-transform duration-500 ${
                        isHoveredState ? 'rotate-180 text-brand-red' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Mega Menu for Expertises */}
                {item.id === 'expertises' && (
                  <MegaMenu
                    isVisible={isHoveredState}
                    constantItem={constantItem}
                    activeCategory={activeCategory}
                    activeCatData={activeCatData}
                    activeSubCategory={activeSubCategory}
                    activeSubCatData={activeSubCatData}
                    onCategoryChange={setActiveCategory}
                    onSubCategoryChange={setActiveSubCategory}
                    onSubItemClick={handleSubItemClick}
                  />
                )}

                {/* Regular Dropdown */}
                {item.hasDropdown && item.id !== 'expertises' && (
                  <RegularDropdown
                    isVisible={isHoveredState}
                    dropdownItems={constantItem?.dropdownItems || []}
                    onSubItemClick={handleSubItemClick}
                  />
                )}

                {/* Contact Dropdown */}
                {item.id === 'contact-page' && (
                  <ContactDropdown
                    isVisible={isHoveredState}
                    onNavClick={handleNavClick}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          <LanguageSwitcher />
          <div className="h-8 w-px bg-black/5 dark:bg-white/5 hidden sm:block" />
          <button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 active:scale-90 border border-transparent hover:border-black/5 dark:border-white/10"
            aria-label="Basculer le thème"
          >
            {theme === 'dark' ? (
              <Sun size={18} strokeWidth={2.5} />
            ) : (
              <Moon size={18} strokeWidth={2.5} />
            )}
          </button>
          <button
            className="lg:hidden w-11 h-11 rounded-2xl flex items-center justify-center bg-black/5 dark:bg-white/10 text-black dark:text-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menu mobile"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          theme={theme}
          translatedNav={translatedNav}
          expandedMobileItems={expandedMobileItems}
          onToggleExpand={(itemId) =>
            setExpandedMobileItems((prev) =>
              prev.includes(itemId) ? prev.filter((i) => i !== itemId) : [...prev, itemId]
            )
          }
          onNavClick={handleNavClick}
          onSubItemClick={handleSubItemClick}
        />
      )}
    </header>
  );
};

// Sub-component: MegaMenu
const MegaMenu: React.FC<{
  isVisible: boolean;
  constantItem: NavItem | undefined;
  activeCategory: string | null;
  activeCatData: NavItem | undefined;
  activeSubCategory: string | null;
  activeSubCatData: NavItem | undefined;
  onCategoryChange: (id: string | null) => void;
  onSubCategoryChange: (id: string | null) => void;
  onSubItemClick: (e: React.MouseEvent, item: NavItem) => void;
}> = ({
  isVisible,
  constantItem,
  activeCategory,
  activeCatData,
  activeSubCategory,
  activeSubCatData,
  onCategoryChange,
  onSubCategoryChange,
  onSubItemClick,
}) => {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[1150px] transition-all duration-500 transform origin-top ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto'
          : 'opacity-0 scale-95 -translate-y-4 invisible pointer-events-none'
      }`}
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="bg-white/95 dark:bg-[#0E0E0E]/95 backdrop-blur-3xl border border-black/10 dark:border-white/10 rounded-[4rem] p-6 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.5)] grid grid-cols-12 gap-6 overflow-hidden min-h-[600px]">
        {/* Left: Categories */}
        <div className="col-span-3 space-y-2 p-3 bg-gray-50 dark:bg-white/[0.02] rounded-[3rem] border border-black/5 dark:border-white/5 h-full overflow-y-auto scrollbar-brand">
          <div className="px-5 py-6 mb-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400">
                Services Hub
              </span>
            </div>
            <h3 className="text-3xl font-black text-black dark:text-white uppercase tracking-tighter leading-none">
              Nos <br />
              Métiers.
            </h3>
          </div>
          {constantItem?.dropdownItems?.map((sub: NavItem) => {
            const meta = EXPERTISE_META[sub.id || ''] || {
              icon: Globe,
              desc: 'Expertise Digitale',
              color: 'red',
              stats: 'Premium',
            };
            const isSelected = activeCategory === sub.id;
            const IconComponent = meta.icon;

            return (
              <button
                key={sub.id}
                onMouseEnter={() => {
                  onCategoryChange(sub.id || null);
                  onSubCategoryChange(null);
                }}
                onClick={(e) => onSubItemClick(e, sub)}
                className={`group/cat p-4 rounded-[2rem] border transition-all duration-500 cursor-pointer flex items-center justify-between w-full text-left ${
                  isSelected
                    ? 'bg-white dark:bg-[#1A1A1A] border-brand-red shadow-xl scale-[1.03]'
                    : 'bg-transparent border-transparent hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-700 flex-shrink-0 ${
                      isSelected
                        ? 'bg-brand-red text-white shadow-lg'
                        : 'bg-white dark:bg-white/5 text-gray-400 group-hover/cat:text-brand-red group-hover/cat:scale-110'
                    }`}
                  >
                    <IconComponent size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4
                      className={`text-[10px] font-black uppercase tracking-widest leading-none ${
                        isSelected ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {sub.label}
                    </h4>
                    <p className="text-[8px] font-bold mt-1.5 text-gray-400 uppercase tracking-tight">
                      {meta.stats}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Middle: Subcategories */}
        <div className="col-span-5 p-4 flex flex-col h-full">
          {activeCategory ? (
            <>
              <div className="px-2 py-4 mb-6">
                <h3 className="text-3xl font-black text-black dark:text-white uppercase tracking-tighter leading-none">
                  Architectures <br />
                  <span className="text-brand-red">{activeCatData?.label}</span>
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 flex-1 overflow-y-auto scrollbar-brand pr-2">
                {activeCatData?.dropdownItems?.map((sub: NavItem) => {
                  const isSubSelected = activeSubCategory === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onMouseEnter={() => onSubCategoryChange(sub.id || null)}
                      onClick={(e) => onSubItemClick(e, sub)}
                      className={`group/sub p-6 rounded-[2.5rem] border transition-all duration-500 cursor-pointer flex flex-col justify-between aspect-square text-left ${
                        isSubSelected
                          ? 'bg-black dark:bg-white border-transparent shadow-2xl scale-[1.02]'
                          : 'bg-gray-100 dark:bg-white/5 border-transparent hover:border-brand-red/30'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isSubSelected ? 'bg-brand-red text-white' : 'bg-white dark:bg-white/5 text-brand-red'
                        }`}
                      >
                        <ArrowUpRight size={14} className={isSubSelected ? 'rotate-45' : ''} />
                      </div>
                      <div>
                        <span
                          className={`text-[10px] font-black uppercase tracking-[0.2em] leading-tight block mb-2 ${
                            isSubSelected ? 'text-white/60 dark:text-black/40' : 'text-gray-400'
                          }`}
                        >
                          Solution
                        </span>
                        <span
                          className={`text-sm font-black uppercase tracking-tighter leading-none ${
                            isSubSelected ? 'text-white dark:text-black' : 'text-black dark:text-white'
                          }`}
                        >
                          {sub.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center opacity-5">
              <div className="text-center">
                <Target size={120} className="mx-auto mb-8" />
                <p className="text-2xl font-black uppercase tracking-[0.5em]">Init System</p>
              </div>
            </div>
          )}
        </div>

        {/* Right: Details */}
        <div className="col-span-4 p-1 rounded-[3.5rem] bg-[#0A0A0A] relative group/actions overflow-hidden border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-transparent opacity-40 group-hover/actions:opacity-60 transition-opacity duration-1000" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />

          <div className="relative z-10 p-10 h-full flex flex-col justify-between">
            {activeSubCategory && activeSubCatData ? (
              <div className="animate-enter-right">
                <div className="mb-12">
                  <div className="w-16 h-16 rounded-3xl bg-brand-red flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(255,0,0,0.4)] transform -rotate-6">
                    <Sparkles size={32} className="text-white" />
                  </div>
                  <h3 className="text-4xl font-black uppercase tracking-tighter leading-[0.8] text-white mb-6">
                    {activeSubCatData.label}
                  </h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-relaxed border-l-2 border-brand-red pl-4">
                    Protocole d'exécution haute performance disponible.
                  </p>
                </div>
                <div className="space-y-3">
                  {activeSubCatData.dropdownItems?.map((child: NavItem) => (
                    <button
                      key={child.id}
                      onClick={(e) => onSubItemClick(e, child)}
                      className="w-full p-6 rounded-3xl bg-white/5 border border-white/10 text-left group/item-btn hover:bg-brand-red hover:border-transparent transition-all flex items-center justify-between"
                    >
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-300 group-hover/item-btn:text-white">
                        {child.label}
                      </span>
                      <ChevronRight
                        size={16}
                        className="text-gray-500 group-hover/item-btn:text-white transition-transform group-hover/item-btn:translate-x-1"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-red/20 blur-3xl animate-pulse rounded-full" />
                  <div className="w-24 h-24 rounded-full border-2 border-white/10 flex items-center justify-center relative z-10 group/eye">
                    <Eye size={44} className="text-white/20 group-hover:text-brand-red transition-all duration-700" />
                  </div>
                </div>
                <p className="text-[11px] font-black uppercase tracking-[0.5em] text-white/40 leading-relaxed">
                  Survoler pour <br /> explorer le génome <br /> du succès
                </p>
              </div>
            )}

            <div className="mt-auto pt-10 border-t border-white/10 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-white tracking-tighter">ELITE PARTNER</span>
                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">
                  ISO-9001 Digital
                </span>
              </div>
              <Zap size={18} className="text-brand-red animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-component: RegularDropdown
const RegularDropdown: React.FC<{
  isVisible: boolean;
  dropdownItems: NavItem[];
  onSubItemClick: (e: React.MouseEvent, item: NavItem) => void;
}> = ({ isVisible, dropdownItems, onSubItemClick }) => {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-80 transition-all duration-500 transform origin-top ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto'
          : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
      }`}
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="bg-white/95 dark:bg-[#0E0E0E]/95 backdrop-blur-3xl border border-black/10 dark:border-white/10 rounded-[3rem] p-4 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)]">
        {dropdownItems?.map((subItem) => (
          <button
            key={subItem.id || subItem.label}
            onClick={(e) => onSubItemClick(e, subItem)}
            className="flex items-center justify-between w-full px-8 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 hover:bg-brand-red hover:text-white cursor-pointer transition-all duration-500 group/subitem"
          >
            {subItem.label}
            <ArrowUpRight
              size={14}
              className="opacity-0 group-hover/subitem:opacity-100 transform translate-x-2 group-hover/subitem:translate-x-0 transition-all"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

// Sub-component: ContactDropdown
const ContactDropdown: React.FC<{
  isVisible: boolean;
  onNavClick: (e: React.MouseEvent, item: NavItem) => void;
}> = ({ isVisible, onNavClick }) => {
  return (
    <div
      className={`absolute top-full right-0 pt-4 w-[680px] transition-all duration-500 transform origin-top-right ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto'
          : 'opacity-0 scale-95 -translate-y-4 invisible pointer-events-none'
      }`}
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="bg-white dark:bg-[#0E0E0E] border border-black/10 dark:border-white/10 rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden">
        <div className="grid grid-cols-2">
          <div className="relative h-[480px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4179.698807969115!2d-8.014760703210465!3d31.63837909999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef883aca855d%3A0x91b51ca1f038c777!2sMajorelle%20centre%20d%20&#39;%20affaires!5e1!3m2!1sfr!2sma!4v1766573686751!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full opacity-100"
              title="Localisation GDC Agency"
            />
          </div>
          <div className="p-12 flex flex-col justify-center bg-white dark:bg-[#0E0E0E]">
            <div className="space-y-12 mb-12">
              <div className="group/info flex gap-5 cursor-default">
                <div className="w-12 h-12 rounded-[1.25rem] bg-brand-red/10 flex items-center justify-center text-brand-red transition-all group-hover/info:bg-brand-red group-hover/info:text-white">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em] mb-1">
                    HQ Marrakech
                  </p>
                  <p className="text-xs font-bold text-black dark:text-white leading-relaxed">
                    {AGENCY_INFO.location}
                  </p>
                </div>
              </div>
              <div className="group/info flex gap-5 cursor-default">
                <div className="w-12 h-12 rounded-[1.25rem] bg-brand-red/10 flex items-center justify-center text-brand-red transition-all group-hover/info:bg-brand-red group-hover/info:text-white">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em] mb-1">
                    Direct Line
                  </p>
                  <p className="text-base font-black text-black dark:text-white tracking-tighter">
                    {AGENCY_INFO.phone}
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={(e) => onNavClick(e, { label: 'contact', id: 'contact-page', href: '/contact' })}
              className="group/btn relative w-full py-6 bg-black dark:bg:white text-white dark:text-black rounded-2xl flex items-center justify-center gap-4 font-black uppercase text-[10px] tracking-[0.3em] overflow-hidden transition-all hover:scale-[1.02] shadow-xl"
            >
              <span className="relative z-10">DÉMARRER UN PROJET</span>
              <ArrowUpRight size={14} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              <div className="absolute inset-0 bg-brand-red translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-component: MobileMenu
const MobileMenu: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
  translatedNav: NavItem[];
  expandedMobileItems: string[];
  onToggleExpand: (itemId: string) => void;
  onNavClick: (e: React.MouseEvent, item: NavItem) => void;
  onSubItemClick: (e: React.MouseEvent, item: NavItem) => void;
}> = ({
  isOpen,
  onClose,
  theme,
  translatedNav,
  expandedMobileItems,
  onToggleExpand,
  onNavClick,
  onSubItemClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-white dark:bg-[#020202] flex flex-col overflow-y-auto animate-enter-zoom transition-colors duration-500">
      <div className="flex items-center justify-between p-8 pt-12">
        <Image
          src={theme === 'dark' ? AGENCY_INFO.logoDark : AGENCY_INFO.logoLight}
          alt={`${AGENCY_INFO.name || 'GDC'} Logo`}
          className="h-10 w-auto"
          width={40}
          height={40}
        />
        <button
          className="w-14 h-14 rounded-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-xl flex items-center justify-center text-black dark:text-white"
          onClick={onClose}
          aria-label="Fermer le menu"
        >
          <X size={28} />
        </button>
      </div>
      <nav className="flex flex-col gap-2 p-8 mt-10">
        {translatedNav.map((item) => {
          const constantItem = NAV_ITEMS.find((n) => n.id === item.id);
          const isExpanded = expandedMobileItems.includes(item.id!);
          const hasChildren = constantItem?.dropdownItems && constantItem.dropdownItems.length > 0;

          return (
            <div key={item.id} className="flex flex-col">
              <div className="flex items-center w-full">
                <button
                  onClick={(e) => onNavClick(e, item)}
                  className="flex-1 py-6 text-4xl font-black uppercase tracking-tighter text-left text-black dark:text-white"
                >
                  {item.label}
                </button>
                {hasChildren && (
                  <button
                    onClick={() => onToggleExpand(item.id!)}
                    className={`w-16 h-16 rounded-3xl flex items-center justify-center transition-all ${
                      isExpanded
                        ? 'bg-brand-red text-white'
                        : 'bg-black/5 dark:bg-white/5'
                    }`}
                    aria-label={isExpanded ? 'Réduire' : 'Développer'}
                  >
                    {isExpanded ? <Minus size={24} /> : <Plus size={24} />}
                  </button>
                )}
              </div>
              {hasChildren && isExpanded && (
                <div className="flex flex-col gap-2 pl-6 py-4 border-l-2 border-brand-red/30">
                  {constantItem.dropdownItems?.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={(e) => onSubItemClick(e, sub)}
                      className="py-4 text-left text-lg font-black uppercase text-gray-500 dark:text-gray-400"
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};
