"use client";
import React, { useRef, useState, useEffect } from 'react';
import { Star, Quote, Sparkles, CheckCircle2, Building2, Globe, TrendingUp } from 'lucide-react';

// --- DATA ---
const TESTIMONIALS_ROW_1 = [
    {
        name: "Amine Tahiri",
        role: "Architecte d'Intérieur",
        company: "Atlas Design Studio",
        text: "Le portfolio qu'ils ont conçu pour mon cabinet est une œuvre d'art. Minimaliste, rapide et parfaitement référencé sur les mots-clés de l'architecture à Marrakech.",
        stars: 5,
        tag: "Portfolio & SEO"
    },
    {
        name: "Kenza Bennani",
        role: "Gérante",
        company: "Riad Al-Jasmine",
        text: "Un site de réservation direct qui nous a permis de réduire nos commissions OTA. L'équipe a su capter l'âme de notre Riad. Quelques ajustements mineurs au début, mais le résultat est là.",
        stars: 4,
        tag: "Hôtellerie"
    },
    {
        name: "Omar Kabbaj",
        role: "Directeur Export",
        company: "Agro-Atlas",
        text: "Notre vitrine B2B pour l'export est impeccable. Multilingue, fluide et sécurisée. Nos partenaires européens sont impressionnés par la qualité de notre présence digitale.",
        stars: 5,
        tag: "B2B & Export"
    },
    {
        name: "Noura Alami",
        role: "Fondatrice",
        company: "BioMaroc Cosmetics",
        text: "La boutique Shopify qu'ils ont développée est une machine de guerre. Design épuré, tunnel de vente optimisé. Nos ventes ont décollé dès la première semaine.",
        stars: 5,
        tag: "E-Commerce"
    },
    {
        name: "Tarik Jelloun",
        role: "Avocat Associé",
        company: "Cabinet Jelloun",
        text: "Sérieux et rigueur. Le site institutionnel de notre cabinet inspire confiance et professionnalisme. Le support technique est réactif, ce qui est crucial pour nous.",
        stars: 4,
        tag: "Corporate"
    }
];

const TESTIMONIALS_ROW_2 = [
    {
        name: "Salma Berrada",
        role: "Directrice Marketing",
        company: "Groupe Immo Horizon",
        text: "Une refonte totale de notre portail immobilier. La carte interactive et les visites virtuelles fonctionnent à merveille sur mobile. Une vraie valeur ajoutée pour nos clients.",
        stars: 5,
        tag: "Immobilier"
    },
    {
        name: "Youssef Chraibi",
        role: "CEO",
        company: "LogisTrans Maroc",
        text: "Efficacité opérationnelle. Le site vitrine présente clairement nos services logistiques. Le formulaire de devis dynamique nous apporte des leads qualifiés quotidiennement.",
        stars: 4,
        tag: "Logistique"
    },
    {
        name: "Hajar Sefrioui",
        role: "Créatrice de Mode",
        company: "Caftan Haute Couture",
        text: "Sublime. Ils ont traduit l'élégance de mes créations en code. Le site est rapide, visuel et l'expérience utilisateur est digne d'une maison de luxe.",
        stars: 5,
        tag: "Luxe & Mode"
    },
    {
        name: "Rachid El Fassi",
        role: "Restaurateur",
        company: "La Table de la Médina",
        text: "Depuis la mise en ligne du site avec le module de réservation, nous sommes complets tous les soirs. Le référencement local sur Marrakech a été parfaitement exécuté.",
        stars: 5,
        tag: "Restauration"
    }
];

// --- COMPONENTS ---

interface SpotlightCardProps {
    data: typeof TESTIMONIALS_ROW_1[0];
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ data }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    return (
        <div 
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
            className="
                relative w-[400px] md:w-[450px] shrink-0
                rounded-[24px] overflow-hidden
                bg-white dark:bg-[#0A0A0A] 
                border border-black/5 dark:border-white/5
                transition-all duration-500
                group hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-brand-red/10
                flex flex-col
            "
        >
            {/* Spotlight Gradient Effect - Light Mode (Dark Shadow) */}
            <div 
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:hidden"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 0, 0, 0.03), transparent 40%)`
                }}
            />

            {/* Spotlight Gradient Effect - Dark Mode (White/Red Glow) */}
            <div 
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden dark:block"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 0, 0, 0.15), transparent 40%)`
                }}
            />
            
            {/* Border Highlight - Dark Mode Only (Light mode doesn't need this strong highlight) */}
            <div 
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden dark:block"
                style={{
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.2), transparent 40%)`,
                    maskImage: 'linear-gradient(black, black), linear-gradient(black, black)',
                    maskClip: 'content-box, border-box',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    padding: '1px',
                    borderRadius: '24px'
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 p-8 h-full flex flex-col">
                
                {/* Header: Profile & Badge */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                         {/* Avatar Initials */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-black border border-black/5 dark:border-white/10 flex items-center justify-center shadow-inner">
                            <span className="text-sm font-bold text-black dark:text-white">{data.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                        </div>
                        <div>
                            <h4 className="text-black dark:text-white font-bold text-base leading-tight">{data.name}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wide mt-0.5">{data.role}</p>
                        </div>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center gap-2">
                        <CheckCircle2 size={12} className="text-brand-red" />
                        <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">{data.tag}</span>
                    </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star 
                            key={i} 
                            size={14} 
                            className={`${i < data.stars ? 'fill-brand-red text-brand-red drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]' : 'fill-none text-gray-300 dark:text-gray-800'}`} 
                        />
                    ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1">
                    <Quote className="absolute -top-2 -left-2 text-black/5 dark:text-white/5 w-10 h-10 rotate-180" />
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-light relative z-10 italic">
                        "{data.text}"
                    </p>
                </div>

                {/* Footer: Company */}
                <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Building2 size={14} className="text-gray-400 dark:text-gray-600" />
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{data.company}</span>
                    </div>
                    {/* Fake Logo Placeholder */}
                    <div className="opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-500">
                        <Globe size={16} className="text-brand-red" />
                    </div>
                </div>

            </div>
            
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
    );
};

export const WebsiteCreationTestimonials: React.FC = () => {
    return (
        <section className="relative w-full py-32 bg-[#F0F0F2] dark:bg-[#020202] text-black dark:text-white overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-500">
            
            {/* --- CINEMATIC BACKGROUND --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Deep Ambient Glows */}
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-red/[0.02] rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-blue-600/[0.02] rounded-full blur-[150px]"></div>
                
                {/* Tech Grid Overlay (Light Mode) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-100 dark:opacity-0 transition-opacity duration-500"></div>

                {/* Tech Grid Overlay (Dark Mode) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-0 dark:opacity-20 transition-opacity duration-500"></div>
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#F0F0F2_90%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#020202_90%)] transition-all duration-500"></div>
            </div>

            <div className="relative z-10">
                
                {/* --- HEADER --- */}
                <div className="container mx-auto px-4 mb-20 md:mb-28 text-center">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-8 shadow-sm">
                        <Sparkles size={14} className="text-brand-red animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-800 dark:text-white/80">
                            Satisfaction Client
                        </span>
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-black dark:text-white">
                        L'Excellence <br/>
                        <span className="text-black dark:text-brand-red dark:drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                            Certifiée.
                        </span>
                    </h2>
                    
                    <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                        Rejoignez les leaders de l'industrie qui ont choisi de propulser leur vision avec une <strong className="text-black dark:text-white font-bold">stratégie digitale d'élite</strong>.
                    </p>
                </div>

                {/* --- MARQUEE ROW 1 (Left) --- */}
                <div className="w-full relative flex overflow-x-hidden pb-8 group/marquee">
                    {/* Fade Edges */}
                    <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-[#F0F0F2] dark:from-[#020202] to-transparent z-20 pointer-events-none transition-colors duration-500"></div>
                    <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-[#F0F0F2] dark:from-[#020202] to-transparent z-20 pointer-events-none transition-colors duration-500"></div>

                    <div className="flex animate-scroll hover:[animation-play-state:paused] gap-8 pl-8">
                        {/* Triple Loop for seamless infinite scroll */}
                        {[...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1, ...TESTIMONIALS_ROW_1].map((data, idx) => (
                            <SpotlightCard key={`row1-${idx}`} data={data} />
                        ))}
                    </div>
                </div>

                {/* --- MARQUEE ROW 2 (Right - Reverse) --- */}
                <div className="w-full relative flex overflow-x-hidden pt-4 group/marquee">
                    <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-[#F0F0F2] dark:from-[#020202] to-transparent z-20 pointer-events-none transition-colors duration-500"></div>
                    <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-[#F0F0F2] dark:from-[#020202] to-transparent z-20 pointer-events-none transition-colors duration-500"></div>

                    {/* Using a custom animation class defined below or inline style for reverse */}
                    <div 
                        className="flex animate-scroll hover:[animation-play-state:paused] gap-8 pl-8"
                        style={{ 
                            animationDirection: 'reverse', 
                            animationDuration: '60s' // Slightly slower/faster variance
                        }}
                    >
                        {[...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2, ...TESTIMONIALS_ROW_2].map((data, idx) => (
                            <SpotlightCard key={`row2-${idx}`} data={data} />
                        ))}
                    </div>
                </div>

                {/* --- FOOTER CTA (Cleaned, no avatars) --- */}
                <div className="container mx-auto px-4 mt-24 flex flex-col items-center justify-center">
                    <a href="#contact" className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-black uppercase tracking-widest text-xs overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        <span className="relative z-10 flex items-center gap-2">
                            Lancer mon Projet <TrendingUp size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </div>

            </div>
        </section>
    );
};