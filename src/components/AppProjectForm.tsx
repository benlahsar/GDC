import React, { useState } from 'react';
import { User, Mail, Building2, ChevronDown, Check, ArrowRight, ArrowLeft, Send, MessageSquare, ShieldCheck, DollarSign, Loader2, CheckCircle2, Phone, Sparkles } from 'lucide-react';

const COUNTRY_CODES = [
  { code: '+212', country: 'MA', label: 'Maroc' },
  { code: '+33', country: 'FR', label: 'France' },
  { code: '+1', country: 'US', label: 'USA' },
  { code: '+44', country: 'UK', label: 'UK' },
];

const EMPLOYEES = ["1-10", "11-50", "51-200", "+200"];

const SERVICES = [
  "Création de Site Web", "Site vitrine", "Site e-commerce", "Site sur mesure", "Refonte de site",
  "SEO (Référencement Naturel)", "Audit SEO", "Optimisation on-page", "Netlinking & backlinks", "Stratégie de contenu",
  "SEA (Référencement Payant – Google Ads)", "Publicité Google Ads", "Campagnes PPC", "Gestion et optimisation des annonces",
  "SMO (Social Media Optimization)", "Gestion des réseaux sociaux", "Création de contenu social", "Publicité sur Facebook, Instagram, LinkedIn",
  "Identité Visuelle & Branding", "Logo & charte graphique", "Design UX/UI", "Création de supports marketing",
  "Développement de Logiciels & Applications", "Logiciel de gestion commerciale", "Développement d’applications web et mobiles", "Solutions sur mesure",
  "Solutions Spécialisées", "Hotelio (Solution de gestion hôtelière)", "Point de Vente"
];

const BUDGETS = ["< 40 000 MAD", "40-80k MAD", "80-150k MAD", "+150k MAD", "À définir"];

export const AppProjectForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', employees: '1-10',
    services: [] as string[], budget: '< 40 000 MAD',
    subject: '', message: '', consent: false
  });

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const toggleService = (s: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(s) ? prev.services.filter(i => i !== s) : [...prev.services, s]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(r => setTimeout(r, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section className="relative w-full py-24 md:py-40 bg-[#F4F4F5] dark:bg-black overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/[0.02] rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left: Branding Content */}
          <div className="space-y-10">
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.95] text-black dark:text-white uppercase transition-colors duration-500">
              Agence Web & <br/>
              <span className="text-brand-red">Communication</span> <br/>
              Digitale <br/>
              Innovante
            </h2>
            <div className="space-y-6 max-w-xl">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed transition-colors duration-500">
                Nous ne sommes pas juste une agence de marketing digital. Nous accompagnons les entreprises avec des solutions sur mesure pour booster leur présence en ligne et maximiser leur impact.
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed transition-colors duration-500">
                Basés au Maroc, nous combinons expertise locale et tendances internationales pour offrir des stratégies performantes adaptées à chaque projet.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-black/10 dark:border-white/10">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-full border-2 border-white dark:border-black bg-gray-200 dark:bg-gray-800 overflow-hidden"><img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="expert" /></div>)}
               </div>
               <p className="text-xs font-black uppercase tracking-widest text-gray-500">Rejoignez nos clients satisfaits</p>
            </div>
          </div>

          {/* Right: The Form Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-red/5 rounded-[45px] blur-3xl opacity-50"></div>
            
            <div className="relative bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 rounded-[40px] shadow-2xl overflow-hidden transition-all duration-500">
              
              {/* Stepper */}
              <div className="flex items-center justify-between p-8 md:p-12 pb-0 relative">
                 <div className="absolute top-[4.5rem] left-12 right-12 h-px bg-black/5 dark:bg-white/5 z-0"></div>
                 {[
                   { id: 1, label: "Informations" },
                   { id: 2, label: "Service souhaité" },
                   { id: 3, label: "Détails" }
                 ].map((s) => {
                   const isActive = step >= s.id;
                   return (
                     <div key={s.id} className="relative z-10 flex flex-col items-center gap-3 bg-white dark:bg-[#0A0A0A] px-4 transition-colors duration-500">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 border-2 ${isActive ? 'bg-brand-red border-brand-red text-white shadow-[0_0_20px_rgba(255,0,0,0.4)]' : 'bg-transparent border-black/10 dark:border-white/10 text-gray-400 dark:text-gray-600'}`}>
                           {step > s.id ? <Check size={14} strokeWidth={4} /> : s.id}
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-widest text-center ${isActive ? 'text-black dark:text-white' : 'text-gray-400 dark:text-gray-600'}`}>
                           {s.label.split(' ')[0]} <br className="md:hidden"/> {s.label.split(' ')[1] || ''}
                        </span>
                     </div>
                   );
                 })}
              </div>

              {/* Form Content */}
              <div className="p-8 md:p-12">
                {isSuccess ? (
                  <div className="py-20 flex flex-col items-center text-center animate-enter-zoom">
                     <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-500/30">
                        <CheckCircle2 size={40} className="text-emerald-500" />
                     </div>
                     <h3 className="text-3xl font-black text-black dark:text-white mb-2">Message Envoyé !</h3>
                     <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xs mx-auto">Nos experts analysent votre demande et reviennent vers vous sous 24h.</p>
                     <button onClick={() => { setIsSuccess(false); setStep(1); }} className="px-8 py-3 bg-brand-red text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-lg">Nouveau projet</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="min-h-[420px]">
                      {step === 1 && (
                        <div className="space-y-5 animate-fade-in-up">
                           <div className="relative group">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 group-focus-within:text-brand-red transition-colors" size={18} />
                              <input type="text" placeholder="Nom" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-gray-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl py-4 pl-12 pr-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:outline-none transition-all" />
                           </div>
                           <div className="relative group">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 group-focus-within:text-brand-red transition-colors" size={18} />
                              <input type="email" placeholder="Email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl py-4 pl-12 pr-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:outline-none transition-all" />
                           </div>
                           <div className="relative group">
                              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 group-focus-within:text-brand-red transition-colors" size={18} />
                              <input type="text" placeholder="Entreprise" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-gray-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl py-4 pl-12 pr-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:outline-none transition-all" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1">Nombre d'employés <span className="text-brand-red">*</span></label>
                              <div className="relative">
                                <select value={formData.employees} onChange={e => setFormData({...formData, employees: e.target.value})} className="w-full bg-gray-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl py-4 px-4 text-black dark:text-white focus:border-brand-red focus:outline-none appearance-none cursor-pointer">
                                  {EMPLOYEES.map(e => <option key={e} value={e} className="bg-white dark:bg-black">{e}</option>)}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 pointer-events-none" size={18} />
                              </div>
                           </div>
                           <div className="flex gap-2">
                              <div className="flex items-center gap-2 px-3 border border-black/10 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/40">
                                <span className="text-sm font-bold text-gray-500">🇲🇦</span>
                                <ChevronDown size={12} className="text-gray-400 dark:text-gray-600" />
                              </div>
                              <div className="relative flex-1 group">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 group-focus-within:text-brand-red transition-colors" size={18} />
                                <input type="tel" placeholder="Téléphone" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-gray-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl py-4 pl-12 pr-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:outline-none transition-all" />
                              </div>
                           </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-6 animate-fade-in-up">
                           <div className="max-h-[300px] overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                              {SERVICES.map((s) => {
                                const isSelected = formData.services.includes(s);
                                return (
                                  <div key={s} onClick={() => toggleService(s)} className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${isSelected ? 'bg-brand-red/10 border-brand-red/30 text-brand-red dark:text-white' : 'bg-black/5 dark:bg-white/5 border-transparent text-gray-600 dark:text-gray-400 hover:bg-black/10 dark:hover:bg-white/10'}`}>
                                    <div className={`w-5 h-5 rounded border flex items-center justify-center ${isSelected ? 'bg-brand-red border-brand-red' : 'border-black/20 dark:border-white/20'}`}>
                                      {isSelected && <Check size={12} strokeWidth={4} className="text-white" />}
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wide">{s}</span>
                                  </div>
                                );
                              })}
                           </div>
                           <div className="space-y-3">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2"><DollarSign size={12}/> Budget <span className="text-brand-red">*</span></label>
                              <div className="relative">
                                <select value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})} className="w-full bg-gray-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl py-4 px-4 text-black dark:text-white focus:border-brand-red focus:outline-none appearance-none cursor-pointer">
                                  {BUDGETS.map(b => <option key={b} value={b} className="bg-white dark:bg-black">{b}</option>)}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 pointer-events-none" size={18} />
                              </div>
                           </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-5 animate-fade-in-up">
                           <input type="text" placeholder="Sujet" required value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full bg-gray-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl py-4 px-5 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:outline-none transition-all" />
                           <textarea placeholder="Donner nous plus de détails sur votre projet" required rows={6} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-gray-50 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl py-4 px-5 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:outline-none transition-all resize-none" />
                           <label className="flex items-start gap-4 cursor-pointer group">
                              <input type="checkbox" required className="hidden" checked={formData.consent} onChange={e => setFormData({...formData, consent: e.target.checked})} />
                              <div className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${formData.consent ? 'bg-brand-red border-brand-red' : 'border-black/20 dark:border-white/20 group-hover:border-black/40 dark:group-hover:border-white/40'}`}>
                                {formData.consent && <Check size={12} strokeWidth={4} className="text-white" />}
                              </div>
                              <span className="text-[10px] text-gray-500 font-medium leading-relaxed">
                                Je confirme que toutes les informations fournies sont exactes et complètes.
                              </span>
                           </label>
                           <div className="p-4 bg-gray-50 dark:bg-white rounded-xl border border-black/5 dark:border-white/10 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                 <div className="w-6 h-6 border-2 border-gray-200 dark:border-gray-800 rounded"></div>
                                 <span className="text-sm font-medium text-gray-700 dark:text-gray-400">I'm not a robot</span>
                              </div>
                              <div className="flex flex-col items-center">
                                 <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" className="w-6 h-6 grayscale opacity-50" alt="reCAPTCHA" />
                                 <span className="text-[8px] text-gray-400 mt-1">reCAPTCHA</span>
                              </div>
                           </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-8 mt-4 border-t border-black/5 dark:border-white/10">
                      {step > 1 ? (
                        <button type="button" onClick={handleBack} className="flex items-center gap-2 px-8 py-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all">
                           <ArrowLeft size={14} /> Précédent
                        </button>
                      ) : <div />}
                      
                      <button 
                        type={step === 3 ? "submit" : "button"}
                        onClick={step < 3 ? handleNext : undefined}
                        disabled={isSubmitting}
                        className="group flex items-center gap-3 px-10 py-4 bg-brand-red hover:bg-red-600 text-white rounded-xl font-black uppercase tracking-widest text-xs shadow-xl shadow-red-900/40 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                      >
                         {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : (step === 3 ? "Envoyer" : "Suivant")}
                         {!isSubmitting && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                      </button>
                    </div>
                  </form>
                )}
              </div>
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