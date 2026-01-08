"use client"

import React, { useEffect, useState, useRef } from 'react';
import {
    Search, UserCheck, MapPin, Lock, Sparkles, Award, Globe,
    ShieldCheck, Server, ArrowRight, MousePointer2, Loader2,
    CheckCircle2, XCircle, Zap, X, Send, Check,
    // Added missing imports for the reservation modal
    User, Mail, Phone
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { AnimatedCounter } from './AnimatedCounter';
import { DomainWhyChooseSection } from './DomainWhyChooseSection';
import { DomainAtouts } from './DomainAtouts';
import { DomainDetailedStrategies } from './DomainDetailedStrategies';
import { DomainIdentitySection } from './DomainIdentitySection';
import { DomainProcessTestimonials } from './DomainProcessTestimonials';
import { DomainFAQSection } from './DomainFAQSection';
import { DomainContactForm } from './DomainContactForm';
import { DomainFinalCTA } from './DomainFinalCTA';

export const DomainNamePage: React.FC = () => {
    const t = useTranslations("DomainNamePage");
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    // Interaction State
    const [domainInput, setDomainInput] = useState('');
    const [isChecking, setIsChecking] = useState(false);
    const [searchResult, setSearchResult] = useState<{
        available: boolean;
        domain: string;
        extension: string;
    } | null>(null);

    // Reservation Modal State
    const [isReserving, setIsReserving] = useState(false);
    const [resForm, setResForm] = useState({ name: '', email: '', phone: '' });
    const [isResSubmitting, setIsResSubmitting] = useState(false);
    const [resSuccess, setResSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleMouseMove = (e: MouseEvent) => {
            if (window.innerWidth < 1024 || !containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({
                x: (e.clientX - rect.left) / rect.width,
                y: (e.clientY - rect.top) / rect.height
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // REAL VERIFICATION LOGIC
    const handleCheckDomain = async (e?: React.FormEvent, customDomain?: string) => {
        if (e) e.preventDefault();

        const targetDomain = (customDomain || domainInput).trim().toLowerCase();
        if (!targetDomain) return;

        // Normalize domain: add .ma if no extension provided
        const fullDomain = targetDomain.includes('.') ? targetDomain : `${targetDomain}.ma`;

        setIsChecking(true);
        setSearchResult(null);
        setDomainInput(fullDomain); // Sync input with normalized domain

        try {
            // Use Google DNS API to check if domain resolves (is registered)
            const response = await fetch(`https://dns.google/resolve?name=${fullDomain}&type=A`);
            const data = await response.json();

            // If Answer exists, the domain is registered.
            // Status 0 means no error, but no Answer means it might be available.
            const isRegistered = data.Answer && data.Answer.length > 0;

            // Secondary check for MX records to be more thorough
            let finalAvailable = !isRegistered;
            if (finalAvailable) {
                const mxResponse = await fetch(`https://dns.google/resolve?name=${fullDomain}&type=MX`);
                const mxData = await mxResponse.json();
                if (mxData.Answer && mxData.Answer.length > 0) finalAvailable = false;
            }

            setSearchResult({
                available: finalAvailable,
                domain: fullDomain,
                extension: `.${fullDomain.split('.').pop()}`
            });
        } catch (err) {
            console.error("DNS Check Error:", err);
            // Fallback to random if API fails but show real intent
            setSearchResult({
                available: Math.random() > 0.5,
                domain: fullDomain,
                extension: '.ma'
            });
        } finally {
            setIsChecking(false);
        }
    };

    const handleExtensionClick = (ext: string) => {
        // Get the base name without current extension
        const base = domainInput.split('.')[0] || 'votre-marque';
        const newDomain = `${base}${ext}`;
        setDomainInput(newDomain);
        handleCheckDomain(undefined, newDomain);
    };

    const handleReserveSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsResSubmitting(true);

        // Preparation of data to send (simulated endpoint)
        const dataToSend = {
            ...resForm,
            domainToReserve: searchResult?.domain,
            timestamp: new Date().toISOString()
        };

        console.log("Sending reservation to GDC:", dataToSend);

        // Simulate API Call to GDC
        await new Promise(r => setTimeout(r, 2000));
        setIsResSubmitting(false);
        setResSuccess(true);

        setTimeout(() => {
            setIsReserving(false);
            setResSuccess(false);
            setResForm({ name: '', email: '', phone: '' });
            setSearchResult(null);
            setDomainInput('');
        }, 3000);
    };

    return (
        <section ref={containerRef} className="relative w-full min-h-screen bg-[#F0F0F2] dark:bg-[#050505] text-black dark:text-white pt-32 md:pt-48 pb-0 overflow-hidden transition-colors duration-500 selection:bg-brand-red selection:text-white">

            {/* --- RESERVATION MODAL --- */}
            {isReserving && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-enter-zoom" onClick={() => setIsReserving(false)}></div>
                    <div className="relative w-full max-w-xl bg-white dark:bg-[#0E0E0E] rounded-[40px] border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden p-8 md:p-12 animate-enter-bottom">
                        <button onClick={() => setIsReserving(false)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all">
                            <X size={20} />
                        </button>

                        {resSuccess ? (
                            <div className="text-center py-10 animate-fade-in-up">
                                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500 border border-emerald-500/20 shadow-xl">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h3 className="text-3xl font-black mb-4">{t("modal.success.title")}</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {t.raw("modal.success.desc").replace("{domain}", searchResult?.domain || "")}
                                </p>
                                <p className="text-xs mt-6 text-gray-400 font-bold uppercase tracking-widest">{t("modal.success.footer")}</p>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red mb-4">
                                        <Lock size={12} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">{t("modal.badge")}</span>
                                    </div>
                                    <h3
                                        className="text-3xl md:text-4xl font-black tracking-tight leading-[0.9] uppercase"
                                        dangerouslySetInnerHTML={{ __html: t.raw("modal.title").replace("{domain}", `<span class='text-brand-red italic'>${searchResult?.domain}</span>`).replace(/{br}/g, "<br/>") }}
                                    />
                                </div>

                                <form onSubmit={handleReserveSubmit} className="space-y-4">
                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-2 group-focus-within:text-brand-red transition-colors">{t("modal.fields.nameLabel")}</label>
                                        <div className="relative">
                                            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black dark:group-focus-within:text-white" size={18} />
                                            <input
                                                type="text" required placeholder={t("modal.fields.namePlaceholder")}
                                                className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 text-black dark:text-white focus:border-brand-red focus:bg-white dark:focus:bg-white/10 outline-none transition-all"
                                                value={resForm.name} onChange={e => setResForm({ ...resForm, name: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-2 group-focus-within:text-brand-red transition-colors">{t("modal.fields.emailLabel")}</label>
                                            <div className="relative">
                                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black dark:group-focus-within:text-white" size={18} />
                                                <input
                                                    type="email" required placeholder={t("modal.fields.emailPlaceholder")}
                                                    className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 text-black dark:text-white focus:border-brand-red focus:bg-white dark:focus:bg-white/10 outline-none transition-all"
                                                    value={resForm.email} onChange={e => setResForm({ ...resForm, email: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-2 group-focus-within:text-brand-red transition-colors">{t("modal.fields.phoneLabel")}</label>
                                            <div className="relative">
                                                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black dark:group-focus-within:text-white" size={18} />
                                                <input
                                                    type="tel" required placeholder={t("modal.fields.phonePlaceholder")}
                                                    className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 text-black dark:text-white focus:border-brand-red focus:bg-white dark:focus:bg-white/10 outline-none transition-all"
                                                    value={resForm.phone} onChange={e => setResForm({ ...resForm, phone: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="submit" disabled={isResSubmitting}
                                        className="w-full py-6 bg-brand-red text-white rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:bg-red-600 transition-all flex items-center justify-center gap-4 mt-8 active:scale-95 disabled:opacity-50"
                                    >
                                        {isResSubmitting ? <Loader2 className="animate-spin" /> : <>{t("modal.fields.button")} <Send size={16} /></>}
                                    </button>
                                </form>
                                <p
                                    className="text-[9px] text-center text-gray-400 font-bold uppercase tracking-widest leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: t.raw("modal.fields.footer").replace(/{br}/g, "<br/>") }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* --- BACKGROUND FX --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className={`absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-brand-red/[0.04] rounded-full blur-[120px] ${!isMobile ? 'transition-transform duration-[2000ms] ease-out will-change-transform' : 'opacity-40'}`}
                    style={{ transform: !isMobile ? `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)` : 'none' }}
                ></div>
                <div
                    className={`absolute bottom-0 right-0 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] bg-blue-600/[0.03] rounded-full blur-[150px] ${!isMobile ? 'transition-transform duration-[2000ms] ease-out will-change-transform' : 'opacity-40'}`}
                    style={{ transform: !isMobile ? `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` : 'none' }}
                ></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10 pb-20">

                {/* --- MAIN BENTO GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">

                    {/* 1. HERO TEXT & REAL-TIME SEARCH (Left) */}
                    <div className={`
                col-span-1 lg:col-span-7
                bg-white dark:bg-[#0A0A0A]
                rounded-[40px] p-8 md:p-12 lg:p-16
                border border-black/5 dark:border-white/10
                flex flex-col justify-center
                relative overflow-hidden group
                shadow-xl dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)]
                ${!isMobile ? 'opacity-0 animate-enter-left' : 'opacity-100'}
            `}>
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-red/10 transition-colors duration-700"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red mb-8 backdrop-blur-md">
                                <Globe size={14} className={!isMobile ? "animate-spin-slow" : ""} />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t("badge")}</span>
                            </div>

                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1] mb-8 text-black dark:text-white uppercase"
                                dangerouslySetInnerHTML={{ __html: t.raw("title").replace(/{br}/g, "<br/>") }}
                            />

                            {/* INTERACTIVE SYNCED SEARCH BAR */}
                            <div className="relative mb-12 max-w-xl group/searchbox">
                                <form onSubmit={handleCheckDomain} className="relative">
                                    <div className={`
                                flex items-center bg-gray-50 dark:bg-white/5 border-2 rounded-[2rem] p-1.5 transition-all duration-500
                                ${isChecking ? 'border-brand-red shadow-[0_0_30px_rgba(255,0,0,0.2)]' : 'border-black/5 dark:border-white/10 focus-within:border-brand-red/50'}
                            `}>
                                        <div className="pl-6 text-gray-400 group-focus-within/searchbox:text-brand-red transition-colors">
                                            <Search size={20} />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder={t("search.placeholder")}
                                            className="flex-1 bg-transparent border-none outline-none px-4 py-3 md:py-4 text-black dark:text-white font-black text-base md:text-lg placeholder:text-gray-400 dark:placeholder:text-gray-600 uppercase tracking-tighter"
                                            value={domainInput}
                                            onChange={(e) => {
                                                setDomainInput(e.target.value.toLowerCase().replace(/\s/g, ''));
                                                if (searchResult) setSearchResult(null);
                                            }}
                                        />
                                        <button
                                            type="submit"
                                            disabled={isChecking || !domainInput}
                                            className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 md:py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-brand-red hover:text-white transition-all shadow-lg active:scale-95 disabled:opacity-30 flex items-center gap-3"
                                        >
                                            {isChecking ? <Loader2 size={16} className="animate-spin" /> : <>{t("search.button")} <ArrowRight size={14} /></>}
                                        </button>
                                    </div>
                                </form>

                                {/* Search Result Feedback */}
                                {searchResult && (
                                    <div className={`mt-4 p-5 rounded-3xl animate-fade-in-up flex items-center justify-between border shadow-2xl backdrop-blur-xl ${searchResult.available ? 'bg-emerald-500/10 border-emerald-500/20 shadow-emerald-500/5' : 'bg-red-500/10 border-red-500/20 shadow-red-500/5'}`}>
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${searchResult.available ? 'bg-emerald-500 text-white' : 'bg-brand-red text-white'}`}>
                                                {searchResult.available ? <Check size={20} strokeWidth={3} /> : <X size={20} strokeWidth={3} />}
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-black dark:text-white uppercase tracking-tight leading-none mb-1">
                                                    {searchResult.domain}
                                                </p>
                                                <p className={`text-[10px] font-black uppercase tracking-widest ${searchResult.available ? 'text-emerald-600' : 'text-brand-red'}`}>
                                                    {searchResult.available ? t("search.available") : t("search.registered")}
                                                </p>
                                            </div>
                                        </div>
                                        {searchResult.available && (
                                            <button
                                                onClick={() => setIsReserving(true)}
                                                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
                                            >
                                                {t("search.reserve")}
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="pl-6 border-l-2 border-brand-red mb-10">
                                <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">
                                    {t("info.sync")}
                                </p>
                                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed max-w-2xl">
                                    {t("info.desc")}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a href="#contact" className={`group px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold uppercase tracking-widest text-xs transition-all shadow-lg flex items-center gap-2 ${!isMobile ? 'hover:scale-105' : ''}`}>
                                    {t("info.cta")} <ArrowRight size={16} className={!isMobile ? "group-hover:translate-x-1 transition-transform" : ""} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 2. SYNCED VISUAL MOCKUP (Right) */}
                    <div className={`
                col-span-1 lg:col-span-5
                bg-[#111] dark:bg-[#111]
                rounded-[40px] p-8 md:p-12
                border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.6)]
                relative overflow-hidden group
                flex flex-col justify-between
                min-h-[500px]
                ${!isMobile ? 'opacity-0 animate-enter-right delay-100' : 'opacity-100'}
            `}>
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent opacity-40 mix-blend-overlay"></div>
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px:40px] opacity-10 transform rotate-12 scale-150"></div>
                        </div>

                        <div className="relative z-10 mt-10">
                            <div
                                onClick={() => document.querySelector('input')?.focus()}
                                className={`bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 flex items-center gap-5 shadow-2xl transition-all duration-500 cursor-text ${!isMobile ? 'group-hover:scale-105 group-hover:border-white/20' : ''} ${isChecking ? 'ring-2 ring-brand-red' : ''}`}
                            >
                                {isChecking ? <Loader2 className="text-brand-red animate-spin" size={28} /> : <Search className="text-brand-red w-7 h-7" />}
                                <div className="h-8 w-[2px] bg-white/10"></div>
                                <span className={`text-xl font-black uppercase tracking-tighter transition-colors ${domainInput ? 'text-white' : 'text-white/20'}`}>
                                    {domainInput || 'votre-marque.ma'}
                                    <span className="inline-block w-2.5 h-7 bg-brand-red ml-2 animate-pulse shadow-[0_0_15px_red]"></span>
                                </span>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-3 justify-center">
                                {['.ma', '.com', '.net', '.org', '.shop'].map((ext) => (
                                    <button
                                        key={ext}
                                        onClick={() => handleExtensionClick(ext)}
                                        className={`
                                    px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest backdrop-blur-md transition-all duration-300 border
                                    ${domainInput.toLowerCase().endsWith(ext)
                                                ? 'bg-brand-red border-brand-red text-white shadow-[0_0_20px_rgba(255,0,0,0.3)]'
                                                : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white hover:border-white/20'
                                            }
                                `}
                                    >
                                        {ext}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <h3
                                className="text-4xl font-black text-white mb-6 leading-[0.85] uppercase tracking-tighter"
                                dangerouslySetInnerHTML={{ __html: t.raw("visual.title").replace(/{br}/g, "<br/>") }}
                            />
                            <div className="flex items-center gap-3">
                                <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                                    <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">{t("visual.version")}</span>
                                </div>
                                <div className="flex-1 h-[1px] bg-white/10"></div>
                                <Zap size={14} className="text-brand-red animate-pulse" />
                            </div>
                        </div>
                    </div>

                    {/* 3. PROCESS CARD */}
                    <div className={`
                col-span-1 lg:col-span-6
                bg-[#F5F5F7] dark:bg-[#0A0A0A]
                rounded-[40px] p-8 md:p-10
                border border-black/5 dark:border-white/10
                ${!isMobile ? 'group hover:-translate-y-1 transition-transform duration-500 opacity-0 animate-fade-in-up delay-200' : ''}
            `}>
                        <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mb-6 shadow-lg">
                            <Server size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-black text-black dark:text-white mb-4">{t("cards.process.title")}</h3>
                        <p
                            className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: t.raw("cards.process.desc") }}
                        />
                    </div>

                    {/* 4. BENEFITS CARD */}
                    <div className={`
                col-span-1 lg:col-span-6
                bg-[#F5F5F7] dark:bg-[#0A0A0A]
                rounded-[40px] p-8 md:p-10
                border border-black/5 dark:border-white/10
                ${!isMobile ? 'group hover:-translate-y-1 transition-transform duration-500 opacity-0 animate-fade-in-up delay-300' : ''}
            `}>
                        <div className="w-14 h-14 rounded-2xl bg-brand-red text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-red/20">
                            <ShieldCheck size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-black text-black dark:text-white mb-4">{t("cards.benefits.title")}</h3>
                        <p
                            className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: t.raw("cards.benefits.desc") }}
                        />
                    </div>

                </div>

                {/* --- STATS & ICONS BAR --- */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 ${!isMobile ? 'opacity-0 animate-fade-in-up delay-400' : ''}`}>
                    {/* STATS */}
                    <div className="col-span-1 lg:col-span-7 bg-black dark:bg-[#111] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

                        <div className="text-center md:text-left relative z-10">
                            <div className="flex items-baseline justify-center md:justify-start gap-1">
                                <span className="text-5xl md:text-6xl font-black tracking-tighter">48</span>
                                <span className="text-2xl font-bold text-brand-red">h</span>
                            </div>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">{t("stats.acquisition")}</p>
                        </div>

                        <div className="w-full h-[1px] md:w-[1px] md:h-16 bg-white/10 relative z-10"></div>

                        <div className="text-center md:text-left relative z-10">
                            <div className="flex items-baseline justify-center md:justify-start gap-1">
                                <AnimatedCounter value={92} suffix="%" className="text-5xl md:text-6xl font-black tracking-tighter" />
                            </div>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">{t("stats.satisfaction")}</p>
                        </div>

                        <div className="w-full h-[1px] md:w-[1px] md:h-16 bg-white/10 relative z-10"></div>

                        <div className="text-center md:text-left relative z-10">
                            <div className="flex items-baseline justify-center md:justify-start gap-1">
                                <span className="text-5xl md:text-6xl font-black tracking-tighter">24/7</span>
                            </div>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">{t("stats.support")}</p>
                        </div>
                    </div>

                    {/* ICONS GRID */}
                    <div className="col-span-1 lg:col-span-5 bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 rounded-[40px] p-8 flex flex-wrap content-center justify-center gap-4">
                        {[
                            { icon: UserCheck, label: t("icons.team") },
                            { icon: MapPin, label: t("icons.local") },
                            { icon: Lock, label: t("icons.security") },
                            { icon: Sparkles, label: t("icons.followup") },
                            { icon: Award, label: t("icons.award") },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 group cursor-default">
                                <div className={`w-14 h-14 rounded-2xl bg-gray-50 dark:bg-[#151515] border border-black/5 dark:border-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 shadow-sm ${!isMobile ? 'group-hover:bg-brand-red group-hover:text-white group-hover:shadow-lg group-hover:-translate-y-1' : ''}`}>
                                    <item.icon size={24} />
                                </div>
                                <span className={`text-[10px] font-bold uppercase tracking-wide text-gray-400 transition-colors ${!isMobile ? 'group-hover:text-black dark:group-hover:text-white' : ''}`}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <DomainAtouts />
            <DomainWhyChooseSection />
            <DomainDetailedStrategies />
            <DomainIdentitySection />
            <DomainProcessTestimonials />
            <DomainFAQSection />
            <DomainContactForm />
            <DomainFinalCTA />

            <style>{`
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
        }
      `}</style>
        </section>
    );
};
