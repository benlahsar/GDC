import React, { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Phone,
  Building2,
  User,
  Mail,
  ArrowLeft,
  Layout,
  Search,
  Zap,
  Share2,
  Palette,
  Globe,
  MessageSquare,
  DollarSign,
  Send,
  Loader2,
  Sparkles,
} from "lucide-react";

const COUNTRY_CODES = [
  { code: "+212", country: "MA", label: "Maroc" },
  { code: "+33", country: "FR", label: "France" },
  { code: "+1", country: "US", label: "USA" },
  { code: "+44", country: "UK", label: "UK" },
];

const EMPLOYEES = ["1-10", "11-50", "51-200", "+200"];

const SERVICES = [
  { id: "web", label: "Site E-Commerce", icon: Layout },
  { id: "seo", label: "SEO / SEA", icon: Search },
  { id: "social", label: "Social Media", icon: Share2 },
  { id: "branding", label: "Branding", icon: Palette },
  { id: "app", label: "App Mobile", icon: Globe },
  { id: "dev", label: "Sur Mesure", icon: Zap },
];

const BUDGETS = ["< 20k MAD", "20-50k MAD", "50-100k MAD", "+100k MAD"];

export const EcommerceContactForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "1-10",
    phone: "",
    services: [] as string[],
    details: "",
    budget: "",
  });

  const countryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryRef.current &&
        !countryRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleService = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#050505] text-black dark:text-white overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 ${
            isMobile ? "opacity-20" : ""
          }`}
        ></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/[0.02] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: CONTENT */}
          <div className={`space-y-8 ${!isMobile ? "animate-enter-left" : ""}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-4 shadow-sm">
              <Sparkles size={14} className="text-brand-red animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
                Démarrer un projet
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-black dark:text-white">
              Agence Web & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
                Communication Digitale Innovante
              </span>
            </h2>
          </div>

          {/* RIGHT: FORM CARD */}
          <div
            className={`relative ${
              !isMobile ? "animate-enter-right delay-200" : ""
            }`}
          >
            {!isMobile && (
              <div className="absolute -inset-1 bg-gradient-to-br from-brand-red/10 to-blue-600/10 rounded-[35px] blur-xl opacity-50"></div>
            )}

            <div className="relative bg-white/80 dark:bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/60 dark:border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden transition-colors duration-500 min-h-[600px] flex flex-col">
              {/* Top Stepper */}
              <div className="flex items-center justify-between mb-12 relative px-4">
                <div className="absolute top-4 left-0 w-full h-[1px] bg-black/5 dark:bg-white/10 -z-0"></div>
                {[
                  { id: 1, label: "Informations" },
                  { id: 2, label: "Service" },
                  { id: 3, label: "Détails" },
                ].map((s) => {
                  const isActive = step === s.id;
                  const isCompleted = step > s.id;
                  return (
                    <div
                      key={s.id}
                      className="relative z-10 flex flex-col items-center gap-3 bg-transparent px-2"
                    >
                      <div
                        className={`
                           w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border-2
                           ${
                             isActive
                               ? "bg-brand-red border-brand-red text-white scale-110 shadow-lg"
                               : isCompleted
                               ? "bg-black dark:bg-white border-black dark:border-white text-white dark:text-black"
                               : "bg-white dark:bg-[#111] border-gray-200 dark:border-white/20 text-gray-400 dark:text-gray-600"
                           }
                        `}
                      >
                        {isCompleted ? (
                          <Check size={14} strokeWidth={3} />
                        ) : (
                          s.id
                        )}
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest ${
                          isActive
                            ? "text-black dark:text-white"
                            : "text-gray-400 dark:text-gray-600"
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Form Content */}
              {isSuccess ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center animate-enter-zoom">
                  <div className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center mb-8 text-emerald-500 border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                    <Send size={48} />
                  </div>
                  <h3 className="text-3xl font-black text-black dark:text-white mb-4">
                    Message Envoyé !
                  </h3>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setStep(1);
                    }}
                    className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-lg"
                  >
                    Nouveau Projet
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  <div className="flex-1 relative overflow-hidden">
                    {/* STEP 1 */}
                    <div
                      className={`transition-all duration-500 ease-in-out flex flex-col gap-5 ${
                        step === 1
                          ? "opacity-100 translate-x-0 z-10"
                          : "opacity-0 -translate-x-full absolute inset-0 pointer-events-none"
                      }`}
                    >
                      <div className="space-y-5">
                        <input
                          type="text"
                          placeholder="Nom Complet"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full bg-gray-50 dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white focus:border-brand-red focus:outline-none transition-all shadow-inner"
                          required
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-gray-50 dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white focus:border-brand-red focus:outline-none transition-all shadow-inner"
                          required
                        />
                      </div>
                    </div>

                    {/* STEP 2 */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col ${
                        step === 2
                          ? "opacity-100 translate-x-0 z-10"
                          : step < 2
                          ? "opacity-0 translate-x-full pointer-events-none"
                          : "opacity-0 -translate-x-full pointer-events-none"
                      }`}
                    >
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 block">
                        Service souhaité
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {SERVICES.map((srv) => {
                          const isSelected = formData.services.includes(srv.id);
                          return (
                            <div
                              key={srv.id}
                              onClick={() => toggleService(srv.id)}
                              className={`
                                   p-4 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center h-32 group
                                   ${
                                     isSelected
                                       ? "bg-brand-red border-brand-red text-white shadow-lg"
                                       : "bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 hover:border-brand-red/50"
                                   }
                                 `}
                            >
                              <srv.icon
                                size={24}
                                className={isSelected ? "text-white" : ""}
                              />
                              <span
                                className={`text-xs font-bold uppercase tracking-wider ${
                                  isSelected ? "text-white" : ""
                                }`}
                              >
                                {srv.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* STEP 3 */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col gap-6 ${
                        step === 3
                          ? "opacity-100 translate-x-0 z-10"
                          : "opacity-0 translate-x-full pointer-events-none"
                      }`}
                    >
                      <textarea
                        value={formData.details}
                        onChange={(e) =>
                          setFormData({ ...formData, details: e.target.value })
                        }
                        rows={4}
                        className="w-full bg-gray-50 dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white focus:border-brand-red focus:outline-none transition-all resize-none h-40 shadow-inner"
                        placeholder="Parlez-nous de votre boutique..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handleBack}
                      className={`text-gray-500 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${
                        step === 1
                          ? "opacity-0 pointer-events-none"
                          : "opacity-100"
                      }`}
                    >
                      <ArrowLeft size={16} /> Retour
                    </button>

                    <button
                      type="button"
                      onClick={step === 3 ? handleSubmit : handleNext}
                      disabled={isSubmitting}
                      className="bg-brand-red hover:bg-red-600 text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-lg flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <>
                          {step === 3 ? "Confirmer" : "Suivant"}
                          {step !== 3 && <ArrowRight size={16} />}
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
