"use client";
import React, { useEffect, useState, useRef } from 'react';
import { 
  ArrowRight, Target, Sparkles, 
  Search, Instagram, Facebook, 
  Radar, Crosshair, Users, BarChart2,
  TrendingUp, MessageCircle, Heart, Share2, Quote, CheckCircle,
  Globe, Megaphone, Check, Zap, Layers, ShieldCheck, Rocket, Crown,
  Palette, BarChart3, Clock, Eye, MousePointer2,
  MessageSquareHeart, PenTool, Radio, Fingerprint,
  Terminal, Cpu, Hash, AlertCircle, ChevronRight, X,
  Smartphone, Mail, Camera, Send, Star, Verified,
  Shield, Activity, ZapOff, Fingerprint as FingerprintIcon,
  Monitor
} from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { SEOSMOFormSection } from '../components/SEOSMOFormSection';
import { SeaSmoFinalCTA } from '../components/SeaSmoFinalCTA';


const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const SOCIAL_SERVICES_DATA = [
  {
    title: "COMMUNITY MANAGEMENT",
    subtitle: "Dynamisez votre présence en ligne !",
    desc: "Avec nos community managers experts, nous élaborons une <strong class='text-black dark:text-white'>stratégie de communication</strong> percutante pour propulser votre entreprise sur les réseaux sociaux. Nous développons et animons votre communauté en ligne pour accroître votre visibilité et renforcer votre notoriété.",
    icon: MessageSquareHeart,
    iconColor: "text-pink-500"
  },
  {
    title: "IDENTITÉ VISUELLE",
    subtitle: "Osez l'engagement !",
    desc: "Nous concevons pour vous une ligne éditoriale captivante qui stimule l'intérêt de votre audience, renforce votre présence sur les réseaux sociaux, génère du trafic vers votre <strong class='text-black dark:text-white'>site web</strong> et consolide la confiance envers votre entreprise.",
    icon: Palette,
    iconColor: "text-purple-500"
  },
  {
    title: "SOCIAL MEDIA ADS",
    subtitle: "Ciblez et convertissez !",
    desc: "Nous créons et optimisons vos <strong class='text-black dark:text-white'>campagnes publicitaires</strong> sur les réseaux sociaux tels que Facebook Ads, Google Ads et LinkedIn Ads. Ensemble, nous ciblons votre audience idéale et concevons des annonces percutantes pour obtenir des résultats impressionnants.",
    icon: MousePointer2,
    iconColor: "text-blue-500"
  },
  {
    title: "MARKETING D'INFLUENCE",
    subtitle: "Profitez de la puissance des influenceurs !",
    desc: "Les influenceurs jouent un rôle majeur dans une <strong class='text-black dark:text-white'>stratégie de marketing digital réussie</strong>. Nous intégrons les meilleurs influenceurs de votre secteur à vos campagnes pour maximiser leur impact et élargir votre portée.",
    icon: Radio, 
    iconColor: "text-orange-500"
  },
  {
    title: "CRÉATION DE CONTENU",
    subtitle: "Captivez et fidélisez votre audience !",
    desc: "Nous vous accompagnons dans la création de contenu irrésistible qui séduit votre public et le transforme en clients fidèles. Notre équipe d'experts en marketing conçoit des contenus captivants, informatifs et engageants pour vous démarquer.",
    icon: PenTool,
    iconColor: "text-emerald-500"
  },
  {
    title: "POSITIONNEMENT ET BRANDING",
    subtitle: "Affirmez votre identité !",
    desc: "Notre agence vous guide vers un positionnement et une image de marque solides grâce à une gestion impeccable des réseaux sociaux. Nous créons et gérons vos comptes de médias sociaux pour vous connecter à votre public cible et booster votre visibilité en ligne.",
    icon: Fingerprint,
    iconColor: "text-brand-red"
  }
];

const FAQ_DATA = [
  {
    id: "01",
    question: "Quelle différence entre SEA et SEO ?",
    answer: "Le SEO (Search Engine Optimization) est un marathon : il construit votre visibilité organique sur le long terme. Le SEA (Search Engine Advertising) est un sprint : il garantit une visibilité immédiate via l'achat d'espaces publicitaires. Pour une domination totale, GDC combine les deux : l'immédiateté du SEA pour le cash-flow, et la pérennité du SEO pour la rentabilité.",
    tags: ["Acquisition", "Stratégie"]
  },
  {
    id: "02",
    question: "Quel budget pour démarrer ?",
    answer: "Il n'y a pas de 'ticket d'entrée' fixe, mais un seuil de rentabilité. Nous adaptons la stratégie à votre capacité d'investissement. Que ce soit 500€ ou 50 000€, chaque euro est tracké. Nous recommandons un budget test initial pour calibrer le CPA (Coût par Acquisition) avant de scaler.",
    tags: ["Budget", "ROI"]
  },
  {
    id: "03",
    question: "Pourquoi faire du SMO (Social Media) ?",
    answer: "Vos clients ne sont pas seulement sur Google, ils vivent sur les réseaux. Le SMO humanise votre marque, crée de la preuve sociale et fidélise. Une marque sans présence sociale est une marque muette. Nous transformons vos followers en ambassadeurs actifs.",
    tags: ["Notoriété", "Engagement"]
  },
  {
    id: "04",
    question: "Comment mesurez-vous le succès ?",
    answer: "Nous ne croyons pas aux 'vanity metrics' (likes, vues). Nous pilotons par la DATA : ROAS (Return On Ad Spend), CPA (Coût par Acquisition), et LTV (Lifetime Value). Vous aurez accès à un dashboard en temps réel. Si ça ne rapporte pas, on coupe. Si ça rapporte, on accélère.",
    tags: ["Data", "Performance"]
  },
  {
    id: "05",
    question: "Gérez-vous la création visuelle ?",
    answer: "Absolument. Une publicité moche ne convertit pas, même avec le meilleur ciblage. Notre studio créatif interne produit des visuels 'Stop-Scrolling' et des vidéos UGC (User Generated Content) conçus spécifiquement pour capter l'attention en moins de 3 secondes.",
    tags: ["Studio", "Creation"]
  }
];

const SmoothScrambleText = ({ text, isActive }: { text: string, isActive: boolean }) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  useEffect(() => {
    if (!isActive) {
      setDisplayText("");
      return;
    }

    let frame = 0;
    let animationId: number;

    const animate = () => {
        const revealCount = Math.floor(frame / 3);
        const revealed = text.substring(0, revealCount);
        let scramble = "";
        if (revealCount < text.length) {
            const scrambleLen = Math.min(3, text.length - revealCount);
            for(let j=0; j<scrambleLen; j++) {
                scramble += chars[Math.floor(Math.random() * chars.length)];
            }
        }
        setDisplayText(revealed + scramble);
        if (revealCount < text.length) {
            frame++;
            animationId = requestAnimationFrame(animate);
        } else {
            setDisplayText(text);
        }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [text, isActive]);

  return <span>{displayText}</span>;
};

export const SeaSmoPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F5] dark:bg-[#000000] text-black dark:text-white transition-colors duration-500 selection:bg-brand-red selection:text-white pb-0">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[100vw] h-[100vw] bg-brand-red/[0.02] rounded-full blur-[180px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-blue-600/[0.02] rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 md:pt-48 pb-20 px-4 md:px-8 max-w-[1800px] mx-auto min-h-[90vh] flex flex-col justify-center overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
             <div className={`order-2 lg:order-1 space-y-10 relative z-10 ${!isMobile ? 'opacity-0 animate-enter-left' : ''}`}>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md">
                   <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></div>
                   <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 dark:text-gray-300">Acquisition & Notoriété</span>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black dark:text-white leading-[0.85] tracking-tighter uppercase">
                   Ciblez. <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">Convertissez.</span> <br/>
                   Dominez.
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl border-l-4 border-brand-red pl-8">
                   Expertise SEA & SMO chirurgicale. Nous transformons vos budgets publicitaires en investissements rentables et votre audience en communauté engagée.
                </p>
                <div className="flex flex-wrap gap-8 pt-4 items-center">
                   <a href="#contact-signal" className="group relative px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-black uppercase tracking-widest text-xs overflow-hidden shadow-2xl hover:scale-105 transition-transform">
                      <span className="relative z-10 flex items-center gap-3">
                         Lancer la campagne <ArrowRight size={16} />
                      </span>
                      <div className="absolute inset-0 bg-brand-red translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                   </a>
                   <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                      <div className="flex -space-x-3">
                        {[1,2,3].map(i => (
                             <div key={i} className="w-8 h-8 rounded-full border-2 border-[#F4F4F5] dark:border-black bg-gray-200 dark:bg-gray-800 overflow-hidden">
                                 <img src={`https://i.pravatar.cc/100?img=${i+40}`} alt="user" className="w-full h-full object-cover" />
                             </div>
                         ))}
                      </div>
                      <span>+50 Clients Actifs</span>
                   </div>
                </div>
             </div>

             <div className={`order-1 lg:order-2 relative flex items-center justify-center h-[500px] md:h-[600px] ${!isMobile ? 'opacity-0 animate-enter-right delay-200' : ''}`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-red/10 to-transparent rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>
                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] animate-float">
                   <svg className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 500 500">
                      <circle cx="250" cy="250" r="249" fill="none" stroke="currentColor" strokeWidth="1" className="text-black/5 dark:text-white/5" />
                      <circle cx="250" cy="250" r="180" fill="none" stroke="currentColor" strokeWidth="1" className="text-black/10 dark:text-white/10 border-dashed" strokeDasharray="4 8" />
                      <circle cx="250" cy="250" r="110" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-red/20" />
                   </svg>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 z-20 group cursor-pointer">
                      <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-100 dark:from-[#1a0505] dark:to-black rounded-[2rem] border border-black/5 dark:border-white/10 flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.5)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden transition-transform duration-500 group-hover:scale-105">
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-white/60 dark:via-white/5 dark:to-white/10 opacity-60 rounded-[2rem]"></div>
                           <img 
                            src="https://groupdigitalconcept.com/wp-content/uploads/2024/04/Design-sans-titre-23.png" 
                            alt="GDC Logo" 
                            className="w-20 h-20 md:w-28 md:h-28 object-contain brightness-0 dark:invert drop-shadow-[0_5px_15px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] relative z-10"
                          />
                      </div>
                      <div className="absolute inset-0 border-2 border-brand-red rounded-[2rem] animate-ping opacity-20 pointer-events-none"></div>
                   </div>
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-[#111] rounded-2xl border border-black/5 dark:border-white/10 shadow-2xl flex items-center justify-center text-blue-500 transition-transform duration-300 group-hover:scale-110">
                          <Search size={24} />
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg whitespace-nowrap backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">Google Ads</div>
                   </div>
                   <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-30 group">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-bl from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full shadow-2xl flex items-center justify-center text-white border-4 border-[#F4F4F5] dark:border-[#000] transition-transform duration-300 group-hover:scale-110">
                          <Instagram size={32} />
                      </div>
                   </div>
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 group">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-black border border-white/20 rounded-2xl flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                          <TikTokIcon className="w-7 h-7" />
                      </div>
                   </div>
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-30 group">
                      <div className="w-14 h-14 bg-[#1877F2] rounded-full border-4 border-[#F4F4F5] dark:border-[#000] flex items-center justify-center text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                          <Facebook size={24} />
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </section>

      <div className="bg-[#F4F4F5] dark:bg-[#000000] py-16 border-y border-black/5 dark:border-white/10 relative overflow-hidden">
         <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-10"></div>
         <div className="container mx-auto px-4 max-w-[1700px] relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
               {[
                   { label: "Croissance Audience", value: 300, suffix: "%" },
                   { label: "Clients Satisfaits", value: 98, suffix: "%" },
                   { label: "Campagnes Gérées", value: 500, suffix: "+" },
                   { label: "ROI Moyen", value: 450, suffix: "%" }
               ].map((stat, i) => (
                   <div key={i} className="flex flex-col items-center justify-center text-center">
                       <div className="flex items-baseline gap-1 mb-2">
                           <AnimatedCounter value={stat.value} suffix={stat.suffix} className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter" />
                       </div>
                       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">{stat.label}</p>
                   </div>
               ))}
            </div>
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-32">
             <div className={`${!isMobile ? 'opacity-0 animate-enter-left delay-300' : 'opacity-100'} space-y-10`}>
                <div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 text-black dark:text-white leading-[0.9]">
                        Nous ne cherchons pas des likes.
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-brand-red leading-[0.9]">
                        Nous cherchons des clients.
                    </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed border-l-4 border-brand-red pl-8">
                    La visibilité ne suffit plus. Notre approche SEA & SMO est orientée 100% performance. Nous utilisons la data pour cibler précisément votre audience idéale au moment où elle est prête à acheter.
                </p>
                <div className="space-y-4">
                    {[
                        { title: "Ciblage Comportemental", icon: Crosshair },
                        { title: "Retargeting Dynamique", icon: Radar },
                        { title: "A/B Testing Continu", icon: BarChart2 }
                    ].map((pt, i) => (
                        <div key={i} className="group flex items-center gap-5 p-4 rounded-2xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 hover:border-brand-red/30 transition-all cursor-default">
                            <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center group-hover:scale-110 transition-transform">
                                <pt.icon size={20} />
                            </div>
                            <span className="text-sm md:text-base font-bold text-black dark:text-white uppercase tracking-wide">{pt.title}</span>
                        </div>
                    ))}
                </div>
             </div>

             <div className={`relative aspect-square md:aspect-[4/3] rounded-[40px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden group ${!isMobile ? 'opacity-0 animate-enter-right delay-400' : 'opacity-100'}`}>
                 <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full border border-brand-red/20 animate-[ping_3s_linear_infinite] w-96 h-96 -top-28 -left-28 opacity-20"></div>
                        <div className="w-40 h-40 bg-gradient-to-br from-brand-red to-red-900 rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(220,38,38,0.5)] z-10 relative">
                             <Target size={48} className="text-white animate-pulse" />
                        </div>
                    </div>
                 </div>
                 <div className="absolute bottom-10 left-10 right-10 z-20">
                    <div className="bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-black/5 dark:border-white/20 p-6 rounded-3xl flex items-center gap-5 shadow-2xl">
                         <div className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center shrink-0">
                             <span className="font-black text-white dark:text-black">GDC</span>
                         </div>
                         <div>
                             <p className="text-black dark:text-white font-bold text-sm leading-tight">"GDC a doublé notre taux de conversion en 3 mois."</p>
                             <p className="text-[9px] font-bold text-gray-500 dark:text-white/50 uppercase tracking-widest mt-1">Directeur Marketing • Immobilier</p>
                         </div>
                    </div>
                 </div>
             </div>
        </div>

        <section className="py-24 md:py-32 border-t border-black/5 dark:border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={`relative aspect-square md:aspect-[4/3] rounded-[40px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden group ${!isMobile ? 'opacity-0 animate-enter-left' : 'opacity-100'}`}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        <div className="w-[280px] bg-white dark:bg-[#151515] rounded-[2rem] shadow-2xl border border-black/5 dark:border-white/5 overflow-hidden transform transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-3">
                            <div className="p-4 flex items-center justify-between border-b border-black/5 dark:border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center font-bold text-white text-xs">S</div>
                                    <div className="flex flex-col"><span className="text-[10px] font-black uppercase text-black dark:text-white">Smashy Burger</span></div>
                                </div>
                                <div className="w-1 h-1 bg-black/20 dark:bg-white/20 rounded-full"></div>
                            </div>
                            <div className="aspect-square bg-gray-100 dark:bg-[#0A0A0A] relative flex items-center justify-center">
                                <TrendingUp size={32} className="text-brand-red animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${!isMobile ? 'opacity-0 animate-enter-right delay-200' : 'opacity-100'} space-y-8`}>
                    <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase tracking-tighter leading-[0.9]">
                        Smashy Burger : <br/><span className="text-[#D4AF37]">L'Art du Buzz</span> <br/>Culinaire.
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                        Comment transformer un restaurant de burgers en véritable marque lifestyle à Marrakech ? GDC a créé une communauté engagée impatiente de découvrir chaque nouveauté.
                    </p>
                </div>
            </div>
        </section>

        <section ref={servicesRef} className={`relative mt-20 py-24 mx-4 md:mx-8 rounded-[60px] bg-white/30 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="container mx-auto px-4 md:px-8 max-w-[1800px] relative z-10">
                <div className="text-center mb-16 md:mb-24">
                     <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-black dark:text-white tracking-tighter uppercase mb-4 leading-none">
                        Dominez les <span className="text-brand-red">Médias Sociaux</span>
                     </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {SOCIAL_SERVICES_DATA.map((service, index) => (
                        <div key={index} className="group relative p-8 md:p-10 rounded-[32px] bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 hover:border-brand-red/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full">
                           <div className="mb-6 flex justify-between items-start">
                               <div className={`w-14 h-14 rounded-2xl bg-gray-50 dark:bg-white/5 flex items-center justify-center ${service.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                                   <service.icon size={28} strokeWidth={1.5} />
                               </div>
                           </div>
                           <div>
                               <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-tight mb-2 leading-tight">{service.title}</h3>
                               <p className={`text-xs font-bold uppercase tracking-widest mb-6 ${service.iconColor}`}>{service.subtitle}</p>
                               <div className="h-px w-full bg-black/5 dark:bg-white/5 mb-6"></div>
                               <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: service.desc }} />
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className={`relative mt-32 py-24 px-4 md:px-12 lg:px-24 mx-4 md:mx-8 rounded-[40px] md:rounded-[60px] bg-[#F4F4F5] dark:bg-[#000000] text-black dark:text-white overflow-hidden border border-black/5 dark:border-white/5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="max-w-[1800px] mx-auto relative z-10">
                <div className="mb-20 text-center">
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6 text-black dark:text-white">Décodage <br/> <span className="text-brand-red italic">Stratégique.</span></h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-4 flex flex-col gap-3">
                        {FAQ_DATA.map((faq, index) => (
                            <button key={index} onClick={() => setActiveFaqIndex(index)} className={`group relative w-full text-left p-6 rounded-2xl border transition-all duration-500 overflow-hidden ${activeFaqIndex === index ? 'bg-black text-white dark:bg-white dark:text-black border-transparent shadow-2xl' : 'bg-white/40 dark:bg-white/5 text-gray-600 dark:text-gray-500 border-black/5 dark:border-white/5 hover:bg-white/60 dark:hover:bg-white/10'}`}>
                                <div className="flex items-center justify-between relative z-10">
                                    <div className="flex items-center gap-4">
                                        <span className={`font-mono text-xs font-bold transition-colors ${activeFaqIndex === index ? 'text-brand-red' : 'text-gray-400'}`}>{faq.id}</span>
                                        <span className={`text-sm md:text-base font-black uppercase tracking-tight transition-colors ${activeFaqIndex === index ? 'text-white dark:text-black' : 'text-gray-700 dark:text-gray-400'}`}>{faq.question}</span>
                                    </div>
                                    <ChevronRight size={16} className={`transition-transform duration-300 ${activeFaqIndex === index ? 'rotate-90 text-brand-red' : 'text-gray-400'}`} />
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="lg:col-span-8">
                        <div className="relative h-full min-h-[400px] rounded-[40px] bg-white dark:bg-[#0E0E0E] border border-black/5 dark:border-white/10 p-8 md:p-16 flex flex-col justify-center overflow-hidden shadow-2xl">
                            <div className="relative z-10">
                                <div className="text-xl md:text-3xl font-medium leading-relaxed text-gray-700 dark:text-gray-300 min-h-[120px] mb-12 font-mono">
                                   <SmoothScrambleText text={FAQ_DATA[activeFaqIndex].answer} isActive={true} />
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {FAQ_DATA[activeFaqIndex].tags.map((tag, i) => (
                                        <div key={i} className="px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center gap-2"><Hash size={12} className="text-gray-400" /><span className="text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-300">{tag}</span></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative py-24 md:py-40 px-4 md:px-8 lg:px-12 max-w-[1700px] mx-auto z-10 border-t border-black/5 dark:border-white/5">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 items-start">
                <div className={`lg:w-1/2 ${!isMobile ? 'animate-enter-left' : ''}`}>
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md mb-10 shadow-sm">
                        <Zap size={14} className="text-brand-red animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-800 dark:text-white/80">Stratégie 360 GDC</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-black dark:text-white uppercase mb-8">
                       Maximisez Votre <br/> <span className="text-brand-red italic underline decoration-black/5 dark:decoration-white/5 underline-offset-[20px]">Impact</span> <br/> Sur Le Web !
                    </h2>
                </div>
                <div className={`lg:w-1/2 space-y-10 lg:pt-20 ${!isMobile ? 'animate-enter-right' : ''}`}>
                    <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white uppercase tracking-tighter">
                       Nous sommes des experts en Gestion des Réseaux Sociaux, <span className="text-brand-red italic">mais pas que !</span>
                    </h3>
                    <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-justify border-l-2 border-brand-red pl-8">
                       Nous comprenons que la gestion des réseaux sociaux n’est qu’une partie de votre stratégie de marketing globale. C’est pourquoi nous vous invitons à explorer l’ensemble de nos solutions de marketing, conçues pour répondre à tous vos besoins et vous tracer le chemin vers la réussite.
                    </p>
                    <div className="flex items-center gap-6">
                        <button onClick={() => document.getElementById('contact-signal')?.scrollIntoView({behavior:'smooth'})} className="px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-black uppercase tracking-widest text-[11px] shadow-2xl hover:scale-105 transition-all flex items-center gap-4 group/btn">
                           Explorez nos offres <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
                <div className="lg:col-span-4 bg-white dark:bg-[#0A0A0A] rounded-[48px] p-10 border border-black/5 dark:border-white/10 shadow-xl group hover:border-brand-red/30 transition-all duration-500 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="w-16 h-16 rounded-[2rem] bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 mb-10 group-hover:scale-110 transition-transform duration-500 group-hover:bg-blue-600 group-hover:text-white">
                            <Search size={32} />
                        </div>
                        <h4 className="text-2xl font-black text-black dark:text-white uppercase tracking-tight mb-4">Publicité en ligne (SEA)</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10 flex-1">
                           Boostez votre stratégie de réseaux sociaux avec des campagnes publicitaires en ligne puissantes et ciblées. Nos experts SEA travailleront en parfaite synergie avec vos efforts sur les réseaux sociaux pour maximiser vos conversions.
                        </p>
                        <div className="flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-black uppercase tracking-widest">Performance Engine</span>
                            <Zap size={14} className="text-blue-600" />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 bg-black dark:bg-[#0A0A0A] rounded-[48px] p-10 border border-white/5 shadow-2xl group transition-all duration-500 overflow-hidden relative text-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent opacity-40"></div>
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="w-16 h-16 rounded-[2rem] bg-white/10 border border-white/20 flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform duration-500 group-hover:bg-brand-red group-hover:border-transparent">
                            <Camera size={32} />
                        </div>
                        <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Photographie professionnelle</h4>
                        <p className="text-gray-400 text-base leading-relaxed mb-10 flex-1">
                           Élevez votre présence sur les réseaux sociaux et sur le web avec des images professionnelles et captivantes. Nos photographes talentueux créeront des visuels irrésistibles qui enchanteront votre audience et renforceront l’engagement.
                        </p>
                        <div className="flex items-center justify-between pt-6 border-t border-white/10 opacity-40 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-black uppercase tracking-widest">Visual Excellence</span>
                            <Eye size={14} className="text-brand-red" />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 bg-white dark:bg-[#0A0A0A] rounded-[48px] p-10 border border-black/5 dark:border-white/10 shadow-xl group hover:border-brand-red/30 transition-all duration-500 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="w-16 h-16 rounded-[2rem] bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-10 group-hover:scale-110 transition-transform duration-500 group-hover:bg-brand-red group-hover:text-white">
                            <Mail size={32} />
                        </div>
                        <h4 className="text-2xl font-black text-black dark:text-white uppercase tracking-tight mb-4">Marketing par email</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-10 flex-1">
                           L’art de vendre avec les mots. Nos rédacteurs talentueux travaillent en collaboration avec vous pour créer des textes percutants, attrayants et incitatifs. Du contenu web aux articles de blog, en passant par les emails marketing.
                        </p>
                        <div className="flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-black uppercase tracking-widest">Conversion Content</span>
                            <MousePointer2 size={14} className="text-brand-red" />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-12 bg-[#F8F8FA] dark:bg-[#080808] rounded-[60px] p-8 md:p-14 border border-black/5 dark:border-white/10 shadow-inner relative overflow-hidden group">
                     <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                     <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                         <div className="max-w-xl text-center md:text-left">
                            <h3 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase tracking-tighter leading-none mb-6">
                               Architecture de <span className="text-brand-red">Succès</span> Intégrée.
                            </h3>
                            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
                               Chaque brique de notre écosystème est conçue pour amplifier les autres. Ne laissez pas votre potentiel digital être fragmenté.
                            </p>
                         </div>
                         <div className="relative w-64 h-64 flex items-center justify-center group/globe">
                            <div className="absolute inset-0 bg-brand-red/10 rounded-full blur-[60px] animate-pulse"></div>
                            <Globe size={180} strokeWidth={1} className="text-brand-red opacity-10 group-hover/globe:opacity-20 transition-opacity duration-1000 animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Rocket size={48} className="text-brand-red animate-float" />
                            </div>
                         </div>
                     </div>
                </div>
            </div>
        </section>

        <section className="relative py-24 md:py-40 px-4 md:px-8 lg:px-12 max-w-[1700px] mx-auto z-10 border-t border-black/5 dark:border-white/5">
             <div className="text-center mb-24 md:mb-36">
                <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-10 shadow-sm">
                    <Verified size={18} className="text-brand-red" />
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-800 dark:text-white/80">SMO • SUCCESS HUB</span>
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black text-black dark:text-white tracking-tighter leading-[0.8] uppercase italic">
                   Des Clients <br className="hidden md:block" />
                   <span className="text-brand-red not-italic drop-shadow-[0_10px_40px_rgba(255,0,0,0.2)]">Satisfaits</span> <br className="hidden md:block" />
                   De Notre Expertise.
                </h2>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                <div className="lg:col-span-8 bg-white dark:bg-[#080808] rounded-[60px] p-10 md:p-20 border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden group hover:border-brand-red/40 transition-all duration-700">
                     <div className="absolute top-0 right-0 p-12 text-black/[0.02] dark:text-white/[0.02] font-black text-[15rem] leading-none pointer-events-none select-none group-hover:text-brand-red/[0.04] transition-colors duration-700">65</div>
                     
                     <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-6 mb-16">
                            <div className="w-16 h-16 rounded-[2rem] bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-black text-2xl shadow-2xl group-hover:rotate-12 transition-transform duration-500">R</div>
                            <div>
                                <h4 className="text-3xl font-black text-black dark:text-white tracking-tighter uppercase leading-none">Riad Al-Ounass</h4>
                                <p className="text-[10px] font-bold text-brand-red uppercase tracking-[0.4em] mt-2">MARRAKECH • LUXURY DESTINATION</p>
                            </div>
                        </div>

                        <div className="relative mb-20 max-w-3xl">
                            <Quote className="absolute -top-12 -left-8 text-brand-red opacity-10 w-24 h-24 -rotate-12" />
                            <p className="text-2xl md:text-4xl lg:text-[2.8rem] text-black dark:text-white font-black leading-[1.05] tracking-tight relative z-10 italic">
                                "Depuis que GDC pilote notre écosystème social, nos réservations directes ont <span className="text-brand-red">explosé de 65%</span>. Ils ne publient pas du contenu, ils bâtissent un empire narratif."
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-black/5 dark:border-white/5">
                            <div className="space-y-2 group/metric">
                                <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.3em]">ROI Mensuel</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-black dark:text-white tracking-tighter group-hover/metric:text-brand-red transition-colors">+65%</span>
                                </div>
                            </div>
                            <div className="space-y-2 group/metric">
                                <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.3em]">Portée Organique</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-black dark:text-white tracking-tighter">120K</span>
                                </div>
                            </div>
                            <div className="space-y-2 group/metric">
                                <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.3em]">Expertise GDC</p>
                                <div className="flex gap-1">
                                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-brand-red text-brand-red" />)}
                                </div>
                            </div>
                        </div>
                     </div>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-8">
                    <div className="flex-1 bg-black text-white rounded-[60px] p-12 border border-white/5 shadow-2xl relative overflow-hidden group">
                         <div className="absolute inset-0 bg-grid-pattern opacity-[0.1] pointer-events-none"></div>
                         <div className="absolute bottom-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity duration-700">
                             <Activity size={180} strokeWidth={1} />
                         </div>
                         
                         <div className="relative z-10 flex flex-col justify-between h-full">
                            <div className="w-16 h-16 rounded-[2rem] bg-brand-red flex items-center justify-center text-white shadow-[0_0_40px_rgba(255,0,0,0.4)] mb-12">
                                <Zap size={32} fill="white" />
                            </div>
                            <div>
                                <h3 className="text-4xl font-black uppercase tracking-tighter leading-[0.9] mb-6">Performance <br/>Rétinienne.</h3>
                                <p className="text-sm text-gray-400 font-bold leading-relaxed tracking-wide">
                                    Chaque visuel est calibré chirurgicalement pour capturer l'attention en moins de <span className="text-white">1.5 seconde</span>.
                                </p>
                            </div>
                            <div className="mt-12 pt-10 border-t border-white/10">
                                <div className="flex flex-col">
                                    <span className="text-5xl font-black text-brand-red tracking-tighter">9.8%</span>
                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mt-2">AVG. ENGAGEMENT RATE</span>
                                </div>
                            </div>
                         </div>
                    </div>

                    <div className="p-10 rounded-[40px] bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 shadow-xl group cursor-default hover:-translate-y-2 transition-transform duration-500">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red transition-all group-hover:bg-brand-red group-hover:text-white group-hover:scale-110">
                                <FingerprintIcon size={28} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-1">SECURITY & DNA</p>
                                <p className="text-lg font-black text-black dark:text-white tracking-tight leading-none uppercase">Audience Qualifiée</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        {/* --- ADDED FORM SECTION --- */}
        <div id="contact-signal">
            <SEOSMOFormSection />
        </div>

        {/* --- ADDED FINAL CTA --- */}
        <SeaSmoFinalCTA />

      </div>

      <style>{`
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }
        .animate-pulse-slow {
            animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .spotlight-overlay {
           background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255, 0, 0, 0.05), transparent 80%);
        }
      `}</style>
    </div>
  );
};
