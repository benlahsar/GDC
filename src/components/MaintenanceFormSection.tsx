"use client"

import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, Check, ChevronDown, Phone, 
  Building2, User, Mail, ArrowLeft,
  Layout, Search, Zap, Share2, Palette, Globe,
  MessageSquare, DollarSign, Send, Loader2, Sparkles,
  ShieldCheck, Server
} from 'lucide-react';

const COUNTRY_CODES = [
  { code: '+212', country: 'MA', label: 'Maroc' },
  { code: '+33', country: 'FR', label: 'France' },
  { code: '+1', country: 'US', label: 'USA' },
  { code: '+44', country: 'UK', label: 'UK' },
  { code: '+32', country: 'BE', label: 'Belgique' },
  { code: '+41', country: 'CH', label: 'Suisse' },
  { code: '+34', country: 'ES', label: 'Espagne' },
  { code: '+971', country: 'AE', label: 'UAE' },
];

const EMPLOYEES = ["1-10", "11-50", "51-200", "+200"];

const SERVICES = [
  { id: 'web', label: 'Maintenance Web', icon: Layout },
  { id: 'seo', label: 'SEO Audit', icon: Search },
  { id: 'security', label: 'Sécurité', icon: ShieldCheck },
  { id: 'hosting', label: 'Hébergement', icon: Server },
  { id: 'app', label: 'Optimisation App', icon: Zap },
  { id: 'dev', label: 'Sur Mesure', icon: Globe },
];

export const MaintenanceFormSection: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '1-10',
    phone: '',
    services: [] as string[],
    details: ''
  });

  const countryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleClickOutside = (event: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleService = (id: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(id) 
        ? prev.services.filter(s => s !== id)
        : [...prev.services, id]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F4F4F5] dark:bg-[#000000] text-black dark:text-white overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 ${isMobile ? 'opacity-10' : ''}`}></div>
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/[0.02] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 ${isMobile ? 'opacity-10' : ''}`}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: CONTENT */}
          <div className={`lg:col-span-5 space-y-8 ${!isMobile ? 'animate-enter-left' : ''}`}>
            <div className="relative">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-black dark:text-white">
                Agence Web & <br/>
                Communication Digitale <br/>
                Innovante
                <span className={`inline-flex ml-2 w-3 h-3 bg-brand-red rounded-full ${!isMobile ? 'animate-pulse shadow-[0_0_15px_rgba(255,0,0,0.8)]' : ''}`}></span>
                </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg font-medium leading-relaxed max-w-xl">
              <p>
                Nous ne sommes pas juste une agence de marketing digital. Nous accompagnons les entreprises avec des solutions sur mesure pour booster leur présence en ligne et maximiser leur impact.
              </p>
              <p>
                Basés au Maroc, nous combinons expertise locale et tendances internationales pour offrir des stratégies performantes adaptées à chaque projet.
              </p>
            </div>

            <div className="pt-8 border-t border-black/5 dark:border-white/10 flex items-center gap-6">
                <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-white dark:border-[#000] bg-gray-200 dark:bg-[#111] overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i+15}`} alt="Expert" />
                        </div>
                    ))}
                </div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">+200 Projets Livrés</p>
            </div>
          </div>

          {/* RIGHT: FORM CARD */}
          <div className={`lg:col-span-7 relative ${!isMobile ? 'animate-enter-right delay-200' : ''}`}>
            {!isMobile && (
               <div className="absolute -inset-4 bg-brand-red/5 rounded-[45px] blur-3xl opacity-50"></div>
            )}
            
            <div className={`relative bg-white dark:bg-[#080808] border border-black/5 dark:border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl overflow-hidden transition-all duration-500`}>
              
              {/* Stepper */}
              {!isSuccess && (
                <div className="flex items-center justify-between mb-12 relative px-4">
                    <div className="absolute top-4 left-0 w-full h-[1px] bg-black/5 dark:bg-white/10 -z-0"></div>
                    {[
                    { id: 1, label: "Informations" },
                    { id: 2, label: "Service" },
                    { id: 3, label: "Détails" }
                    ].map((s) => {
                    const isActive = step === s.id;
                    const isCompleted = step > s.id;
                    return (
                        <div key={s.id} className="relative z-10 flex flex-col items-center gap-3 bg-white dark:bg-[#080808] px-2 transition-colors">
                            <div className={`
                            w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border-2
                            ${isActive || isCompleted ? 'bg-brand-red border-brand-red text-white scale-110 shadow-lg' : 'bg-gray-100 dark:bg-white/10 border-transparent text-gray-400 dark:text-gray-600'}
                            `}>
                            {isCompleted ? <Check size={14} /> : s.id}
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-widest text-center ${isActive ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-600'}`}>
                            {s.label}
                            </span>
                        </div>
                    )
                    })}
                </div>
              )}

              {isSuccess ? (
                <div className="py-20 text-center animate-enter-zoom">
                   <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-500">
                      <Send size={40} />
                   </div>
                   <h3 className="text-3xl font-black mb-2 text-black dark:text-white">Demande Envoyée !</h3>
                   <p className="text-gray-500 dark:text-gray-400 mb-8">Nous vous recontactons sous 24 heures.</p>
                   <button onClick={() => { setIsSuccess(false); setStep(1); }} className="px-10 py-4 bg-brand-red text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-lg">Nouveau Projet</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="min-h-[380px] relative overflow-hidden">
                    
                    {/* STEP 1 */}
                    <div className={`transition-all duration-500 ease-in-out flex flex-col gap-5 ${step === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full absolute inset-0 pointer-events-none'}`}>
                        <div className="space-y-4">
                            <input 
                                type="text" placeholder="Nom" required
                                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white focus:border-brand-red focus:outline-none transition-all shadow-inner"
                            />
                            <input 
                                type="email" placeholder="Email" required
                                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                                className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white focus:border-brand-red focus:outline-none transition-all shadow-inner"
                            />
                            <input 
                                type="text" placeholder="Entreprise"
                                value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                                className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white focus:border-brand-red focus:outline-none transition-all shadow-inner"
                            />
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Nombre d'employés <span className="text-brand-red">*</span></label>
                                <div className="relative">
                                    <select 
                                        value={formData.employees} onChange={e => setFormData({...formData, employees: e.target.value})}
                                        className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white appearance-none focus:border-brand-red focus:outline-none cursor-pointer shadow-inner"
                                    >
                                        {EMPLOYEES.map(opt => <option key={opt} value={opt} className="text-black">{opt}</option>)}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                </div>
                            </div>
                            <div className="flex relative" ref={countryRef}>
                                <button 
                                    type="button" onClick={() => setIsCountryOpen(!isCountryOpen)}
                                    className="px-4 border border-black/10 dark:border-white/10 border-r-0 rounded-l-xl bg-gray-100 dark:bg-white/5 flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors shadow-inner"
                                >
                                    <span className="text-sm font-bold">{selectedCountry.code}</span>
                                    <ChevronDown size={14} className="text-gray-500" />
                                </button>
                                {isCountryOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-48 max-h-48 overflow-y-auto bg-white dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 rounded-xl z-50 shadow-xl">
                                        {COUNTRY_CODES.map(c => (
                                            <div key={c.country} onClick={() => { setSelectedCountry(c); setIsCountryOpen(false); }} className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer text-sm flex justify-between">
                                                <span className="text-black dark:text-white">{c.label}</span>
                                                <span className="text-gray-500">{c.code}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <input 
                                    type="tel" placeholder="Téléphone" required
                                    value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                                    className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-r-xl px-5 py-4 text-black dark:text-white focus:border-brand-red focus:outline-none transition-all shadow-inner"
                                />
                            </div>
                        </div>
                    </div>

                    {/* STEP 2 */}
                    <div className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col gap-4 ${step === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                        <div className="grid grid-cols-2 gap-4">
                            {SERVICES.map((s) => {
                                const isSelected = formData.services.includes(s.id);
                                return (
                                    <div 
                                        key={s.id} onClick={() => toggleService(s.id)}
                                        className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-3 h-32 group ${isSelected ? 'bg-brand-red border-brand-red text-white shadow-lg' : 'bg-gray-50 dark:bg-white/5 border-black/5 dark:border-white/10 hover:border-brand-red/50 hover:bg-white dark:hover:bg-white/10 text-gray-500'}`}
                                    >
                                        <s.icon size={24} className={isSelected ? 'text-white' : `${!isMobile ? 'group-hover:text-black dark:group-hover:text-white' : ''} transition-colors`} />
                                        <span className={`text-[10px] font-bold uppercase tracking-wider text-center ${isSelected ? 'text-white' : ''}`}>{s.label}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* STEP 3 */}
                    <div className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col ${step === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                        <div className="space-y-4">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                <MessageSquare size={14} /> Description du projet
                            </label>
                            <textarea 
                                value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})}
                                rows={6}
                                className="w-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 text-black dark:text-white focus:border-brand-red focus:outline-none transition-all resize-none shadow-inner"
                                placeholder="Racontez-nous vos objectifs, délais..."
                            ></textarea>
                        </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="pt-8 border-t border-black/10 dark:border-white/10 flex justify-between items-center">
                    {step > 1 ? (
                        <button type="button" onClick={handleBack} className="text-gray-500 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                            <ArrowLeft size={16} /> Retour
                        </button>
                    ) : <div />}
                    
                    <button 
                        type="button" 
                        onClick={step === 3 ? handleSubmit : handleNext}
                        disabled={isSubmitting}
                        className={`bg-brand-red hover:bg-red-600 text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-lg shadow-red-900/20 flex items-center gap-3 ${!isMobile ? 'hover:scale-105' : 'active:scale-95'}`}
                    >
                        {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : (
                            <>
                                {step === 3 ? 'Confirmer' : 'Suivant'}
                                {step !== 3 && <ArrowRight size={16} className={!isMobile ? "group-hover:translate-x-1" : ""} />}
                            </>
                        )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};