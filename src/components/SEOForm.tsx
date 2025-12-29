
import React, { useState } from 'react';
import { Send, User, Mail, Building2, Phone, ChevronRight, Check, CheckCircle2, Sparkles, Zap, ArrowRight, ArrowLeft, Loader2, ListChecks, DollarSign, FileText, MessageSquare } from 'lucide-react';

const SERVICES_LIST = [
  "Création de Site Web", "Site vitrine", "Site e-commerce", "Site sur mesure", "Refonte de site",
  "SEO (Référencement Naturel)", "Audit SEO", "Optimisation on-page", "Netlinking & backlinks", "Stratégie de contenu",
  "SEA (Référencement Payant – Google Ads)", "Publicité Google Ads", "Campagnes PPC", "Gestion et optimisation des annonces",
  "SMO (Social Media Optimization)", "Gestion des réseaux sociaux", "Création de contenu social", "Publicité sur Facebook, Instagram, LinkedIn",
  "Identité Visuelle & Branding", "Logo & charte graphique", "Design UX/UI", "Création de supports marketing",
  "Développement de Logiciels & Applications", "Logiciel de gestion commerciale", "Développement d’applications web et mobiles", "Solutions sur mesure",
  "Solutions Spécialisées", "Hotelio (Solution de gestion hôtelière)", "Point de Vente (Systèmes de caisse et gestion des ventes)"
];

const BUDGET_OPTIONS = [
  "< 40 000 MAD",
  "40 000 - 80 000 MAD",
  "80 000 - 150 000 MAD",
  "+ 150 000 MAD",
  "À définir"
];

export const SEOForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    company: '', 
    phone: '',
    services: [] as string[], 
    budget: '< 40 000 MAD', 
    subject: '',
    details: ''
  });

  const handleNext = () => step < 3 && setStep(step + 1);
  const handleBack = () => step > 1 && setStep(step - 1);
  
  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col gap-8">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-black dark:text-white">
                    Agence Web & <br/>
                    <span className="text-brand-red">Communication Digitale</span> <br/>
                    Innovante.
                </h2>
                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
                    <p>Nous ne sommes pas juste une agence de marketing digital. Nous accompagnons les entreprises avec des solutions sur mesure pour booster leur présence en ligne et maximiser leur impact.</p>
                    <p>Basés au Maroc, nous combinons expertise locale et tendances internationales pour offrir des stratégies performantes adaptées à chaque projet.</p>
                </div>
                <div className="flex items-center gap-6 mt-4">
                    <div className="flex -space-x-4">
                        {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-[#F0F0F2] dark:border-[#050505] bg-gray-300 dark:bg-gray-800 overflow-hidden"><img src={`https://i.pravatar.cc/100?img=${i+25}`} alt="Expert" /></div>)}
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-gray-500">+15 Experts Dédiés</span>
                </div>
            </div>

            {/* Right: Multi-Step Form Card */}
            <div className="relative group">
                <div className="absolute -inset-4 bg-brand-red/5 rounded-[45px] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl overflow-hidden backdrop-blur-3xl transition-colors">
                    
                    {/* Stepper */}
                    <div className="flex items-center justify-between mb-12 relative">
                        <div className="absolute top-4 left-0 w-full h-[1px] bg-black/5 dark:bg-white/5"></div>
                        <div className="absolute top-4 left-0 h-[1px] bg-brand-red transition-all duration-700" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
                        {[1,2,3].map(i => (
                            <div key={i} className="relative z-10 flex flex-col items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border-2 transition-all duration-500 ${step >= i ? 'bg-brand-red border-brand-red text-white shadow-lg shadow-red-600/30' : 'bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 text-gray-400'}`}>
                                    {step > i ? <Check size={14} strokeWidth={3} /> : i}
                                </div>
                            </div>
                        ))}
                    </div>

                    {isSuccess ? (
                        <div className="flex flex-col items-center text-center animate-enter-zoom py-10">
                            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.3)]"><CheckCircle2 className="text-emerald-500" size={40} /></div>
                            <h3 className="text-2xl font-black mb-2 text-black dark:text-white">Demande Reçue !</h3>
                            <p className="text-gray-500">Nos experts reviennent vers vous sous 24h.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="min-h-[420px]">
                                {step === 1 && (
                                    <div className="space-y-5 animate-fade-in-up">
                                        <div className="relative group/field">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/field:text-brand-red transition-colors" size={18} />
                                            <input type="text" placeholder="Nom" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-black dark:text-white focus:border-brand-red focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all" />
                                        </div>
                                        <div className="relative group/field">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/field:text-brand-red transition-colors" size={18} />
                                            <input type="email" placeholder="Email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-black dark:text-white focus:border-brand-red focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all" />
                                        </div>
                                        <div className="relative group/field">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/field:text-brand-red transition-colors" size={18} />
                                            <input type="tel" placeholder="Téléphone" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-black dark:text-white focus:border-brand-red focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all" />
                                        </div>
                                        <div className="relative group/field">
                                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/field:text-brand-red transition-colors" size={18} />
                                            <input type="text" placeholder="Entreprise" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-black dark:text-white focus:border-brand-red focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all" />
                                        </div>
                                    </div>
                                )}
                                {step === 2 && (
                                    <div className="space-y-6 animate-fade-in-up">
                                        <div className="flex items-center gap-2 mb-4">
                                            <ListChecks size={18} className="text-brand-red" />
                                            <label className="text-xs font-black uppercase tracking-widest text-gray-500">Services souhaités *</label>
                                        </div>
                                        
                                        <div className="max-h-[250px] overflow-y-auto pr-2 custom-scrollbar grid grid-cols-1 gap-2">
                                            {SERVICES_LIST.map((service) => (
                                                <div 
                                                    key={service} 
                                                    onClick={() => toggleService(service)}
                                                    className={`
                                                        flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border
                                                        ${formData.services.includes(service) 
                                                            ? 'bg-brand-red/10 border-brand-red/30 text-black dark:text-white' 
                                                            : 'bg-gray-50 dark:bg-white/5 border-transparent text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10'
                                                        }
                                                    `}
                                                >
                                                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${formData.services.includes(service) ? 'bg-brand-red border-brand-red text-white shadow-[0_0_8px_rgba(255,0,0,0.3)]' : 'border-gray-300 dark:border-white/10'}`}>
                                                        {formData.services.includes(service) && <Check size={12} strokeWidth={4} />}
                                                    </div>
                                                    <span className="text-xs font-bold">{service}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="space-y-3 pt-4 border-t border-black/5 dark:border-white/5">
                                            <div className="flex items-center gap-2">
                                                <DollarSign size={18} className="text-brand-red" />
                                                <label className="text-xs font-black uppercase tracking-widest text-gray-500">Budget estimé *</label>
                                            </div>
                                            <select 
                                                value={formData.budget}
                                                onChange={e => setFormData({...formData, budget: e.target.value})}
                                                className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 px-5 text-black dark:text-white font-bold focus:border-brand-red focus:outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                {BUDGET_OPTIONS.map(opt => <option key={opt} value={opt} className="text-black">{opt}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                )}
                                {step === 3 && (
                                    <div className="space-y-5 animate-fade-in-up">
                                        <div className="relative group/field">
                                            <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/field:text-brand-red transition-colors" size={18} />
                                            <input 
                                                type="text" 
                                                placeholder="Sujet" 
                                                required 
                                                value={formData.subject} 
                                                onChange={e => setFormData({...formData, subject: e.target.value})} 
                                                className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-black dark:text-white focus:border-brand-red focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all shadow-inner" 
                                            />
                                        </div>
                                        <div className="relative group/field">
                                            <MessageSquare className="absolute left-4 top-6 text-gray-400 group-focus-within/field:text-brand-red transition-colors" size={18} />
                                            <textarea 
                                                placeholder="Donner nous plus de détails sur votre projet" 
                                                required 
                                                rows={6}
                                                value={formData.details} 
                                                onChange={e => setFormData({...formData, details: e.target.value})} 
                                                className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-black dark:text-white focus:border-brand-red focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all resize-none shadow-inner"
                                            />
                                        </div>
                                        <div className="p-4 rounded-xl bg-brand-red/5 border border-brand-red/10">
                                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center italic">
                                                Analyse gratuite et réponse sous 24h garantie.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <div className="pt-6 border-t border-black/5 dark:border-white/5 flex justify-between items-center">
                                {step > 1 ? (
                                    <button 
                                        type="button" 
                                        onClick={handleBack}
                                        className="text-gray-500 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest"
                                    >
                                        <ArrowLeft size={16} /> Précédent
                                    </button>
                                ) : <div />}
                                
                                <button 
                                    type="button" 
                                    onClick={step === 3 ? handleSubmit : handleNext}
                                    disabled={isSubmitting}
                                    className="bg-brand-red text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-red-600 transition-all shadow-xl flex items-center gap-3 hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : step === 3 ? 'Envoyer' : 'Suivant'}
                                    {!isSubmitting && <ArrowRight size={18} />}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #FF0000; border-radius: 10px; }
      `}</style>
    </section>
  );
};
