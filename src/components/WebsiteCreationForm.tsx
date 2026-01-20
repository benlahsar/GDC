"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Check,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Send,
  User,
  Mail,
  Building2,
  Phone,
  Search,
  Globe,
  Layout,
  Target,
  DollarSign,
  FileText,
  Loader2,
} from "lucide-react";
import { useTranslations } from "next-intl";

// --- TYPES & CONSTANTS ---

const COUNTRY_CODES = [
  { code: "+212", country: "MA", label: "Maroc" },
  { code: "+33", country: "FR", label: "France" },
  { code: "+1", country: "US", label: "USA" },
  { code: "+44", country: "UK", label: "UK" },
  { code: "+32", country: "BE", label: "Belgique" },
  { code: "+41", country: "CH", label: "Suisse" },
  { code: "+34", country: "ES", label: "Espagne" },
  { code: "+971", country: "AE", label: "UAE" },
  { code: "+966", country: "SA", label: "Arabie Saoudite" },
  { code: "+1", country: "CA", label: "Canada" },
];

const EMPLOYEES_OPTIONS = ["1-10", "11-50", "51-200", "201-500", "+500"];

const getServices = (t: any) => [
  { id: "creation", label: t("form.services.items.creation"), icon: Layout },
  { id: "refonte", label: t("form.services.items.refonte"), icon: Globe },
  { id: "ecommerce", label: t("form.services.items.ecommerce"), icon: Search },
  { id: "seo", label: t("form.services.items.seo"), icon: Target },
  { id: "ads", label: t("form.services.items.ads"), icon: Zap },
  { id: "branding", label: t("form.services.items.branding"), icon: Sparkles },
];

// --- CONFETTI COMPONENT ---
interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vRotation: number;
  color: string;
  size: number;
  type: "circle" | "square";
  life: number;
}
const CONFETTI_COLORS = [
  "#FF0000",
  "#10B981",
  "#3B82F6",
  "#F59E0B",
  "#8B5CF6",
  "#FFFFFF",
];

const ConfettiExplosion = ({ active }: { active: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    if (active) {
      const newParticles: Particle[] = [];
      const originX = window.innerWidth / 2;
      const originY = window.innerHeight / 2;

      for (let i = 0; i < 150; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 15 + 5;
        newParticles.push({
          id: Math.random(),
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 5,
          rotation: Math.random() * 360,
          vRotation: (Math.random() - 0.5) * 10,
          color:
            CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
          size: Math.random() * 10 + 5,
          type: Math.random() > 0.5 ? "circle" : "square",
          life: 1.0,
        });
      }
      setParticles(newParticles);
    }
  }, [active]);

  useEffect(() => {
    const animate = () => {
      setParticles((prev) => {
        if (prev.length === 0) return [];
        return prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.3,
            rotation: p.rotation + p.vRotation,
            life: p.life - 0.005,
          }))
          .filter((p) => p.life > 0);
      });
      requestRef.current = requestAnimationFrame(animate);
    };
    if (particles.length > 0)
      requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [particles]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.type === "circle" ? "50%" : "2px",
            transform: `rotate(${p.rotation}deg)`,
            opacity: p.life,
          }}
        />
      ))}
    </div>
  );
};

// --- MAIN FORM COMPONENT ---

export const WebsiteCreationForm: React.FC = () => {
  const t = useTranslations("WebsiteCreationForm");
  const SERVICES = getServices(t);
  const BUDGETS = t.raw("form.budget.options") as string[];

  const [step, setStep] = useState(1);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "1-10",
    phone: "",
    service: [] as string[],
    otherServiceText: "",
    budget: "",
    details: "",
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleService = (serviceLabel: string) => {
    setFormData((prev) => {
      const includes = prev.service.includes(serviceLabel);
      return {
        ...prev,
        service: includes
          ? prev.service.filter((s) => s !== serviceLabel)
          : [...prev.service, serviceLabel],
      };
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowConfetti(true);
    setIsSuccess(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setStep(1);
    setFormData({
      name: "",
      email: "",
      company: "",
      employees: "1-10",
      phone: "",
      service: [],
      otherServiceText: "",
      budget: "",
      details: "",
    });
  };

  const activeColorClass = step === 3 ? "text-emerald-500" : "text-brand-red";

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#020202] text-black dark:text-white overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5">
      <ConfettiExplosion active={showConfetti} />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 transition-colors duration-1000 ${
            step === 3 ? "bg-emerald-500/[0.05]" : "bg-brand-red/[0.05]"
          }`}
        ></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div
              className="mb-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm group cursor-default">
                <Sparkles
                  size={14}
                  className={`group-hover:rotate-12 transition-transform ${activeColorClass}`}
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-800 dark:text-gray-300">
                  {t("badge")}
                </span>
              </div>
            </div>

            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1] mb-8 text-black dark:text-white opacity-0 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
              dangerouslySetInnerHTML={{
                __html: t
                  .raw("title")
                  .replace(/{br}/g, "<br/>")
                  .replace(
                    /{span}/g,
                    `<span class="text-transparent bg-clip-text bg-gradient-to-r transition-all duration-700 ${
                      step === 3
                        ? "from-emerald-500 to-teal-400"
                        : "from-brand-red to-red-500"
                    }">${t("titleHighlight")}</span>`
                  ),
              }}
            />

            <p
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              {t("description")}
            </p>

            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "500ms" }}
            >
              <div className="flex items-center gap-3 px-4 py-2 md:px-5 md:py-3 rounded-2xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/5 backdrop-blur-sm hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm">
                <ShieldCheck size={18} className="text-emerald-500" />
                <div className="flex flex-col">
                  <span className="text-[9px] md:text-[10px] font-bold uppercase text-gray-500">
                    {t("trust.secure.top")}
                  </span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {t("trust.secure.bottom")}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 md:px-5 md:py-3 rounded-2xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/5 backdrop-blur-sm hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm">
                <Zap size={18} className="text-yellow-500" />
                <div className="flex flex-col">
                  <span className="text-[9px] md:text-[10px] font-bold uppercase text-gray-500">
                    {t("trust.secure.top")}
                  </span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {t("trust.secure.bottom")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative w-full group perspective-1000">
              <div
                className={`absolute inset-0 blur-[80px] opacity-40 pointer-events-none transition-colors duration-1000 ${
                  step === 3 ? "bg-emerald-500/20" : "bg-brand-red/10"
                }`}
              ></div>

              <div
                className="relative w-full rounded-[32px] md:rounded-[40px] bg-white/80 dark:bg-[#080808]/90 border border-white/60 dark:border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden backdrop-blur-2xl animate-enter-right"
                style={{ animationDelay: "300ms" }}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r transition-all duration-1000 ${
                    step === 3
                      ? "from-emerald-500 to-emerald-300"
                      : "from-brand-red to-red-600"
                  }`}
                ></div>

                <div className="p-5 md:p-8 lg:p-12">
                  {!isSuccess ? (
                    <>
                      <div className="flex items-center justify-between mb-8 md:mb-12 relative px-2">
                        <div className="absolute top-3 md:top-4 left-0 w-full h-[2px] bg-black/5 dark:bg-white/5 -z-0"></div>
                        <div
                          className={`absolute top-3 md:top-4 left-0 h-[2px] transition-all duration-700 ease-out z-0 ${
                            step === 3 ? "bg-emerald-500" : "bg-brand-red"
                          }`}
                          style={{ width: `${((step - 1) / 2) * 100}%` }}
                        ></div>

                        {[1, 2, 3].map((num) => {
                          const isActive = step >= num;
                          const isCurrent = step === num;
                          const isStep3 = num === 3 || step === 3;

                          let dotClasses =
                            "bg-gray-100 dark:bg-[#0A0A0A] border-black/10 dark:border-white/10 text-gray-400 dark:text-gray-600";
                          if (isActive) {
                            if (isStep3)
                              dotClasses =
                                "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] border-transparent scale-110";
                            else
                              dotClasses =
                                "bg-brand-red text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] border-transparent scale-110";
                          }

                          return (
                            <div
                              key={num}
                              className="relative z-10 flex flex-col items-center gap-2 md:gap-3 group/step cursor-default"
                            >
                              <div
                                className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold text-[10px] md:text-xs transition-all duration-500 border-2 ${dotClasses}`}
                              >
                                {isActive && step > num ? (
                                  <Check
                                    size={12}
                                    strokeWidth={3}
                                    className="md:w-[14px] md:h-[14px]"
                                  />
                                ) : (
                                  num
                                )}
                              </div>
                              <span
                                className={`text-[8px] md:text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                                  isCurrent
                                    ? "text-black dark:text-white"
                                    : "text-gray-400 dark:text-gray-600"
                                }`}
                              >
                                {num === 1
                                  ? t("steps.step1")
                                  : num === 2
                                  ? t("steps.step2")
                                  : t("steps.step3")}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <form
                        onSubmit={(e) => e.preventDefault()}
                        className="min-h-[380px] md:min-h-[420px] flex flex-col relative"
                      >
                        <div
                          className={`transition-all duration-500 ease-out absolute inset-0 flex flex-col ${
                            step === 1
                              ? "opacity-100 translate-x-0 z-10 relative"
                              : "opacity-0 -translate-x-10 pointer-events-none absolute"
                          }`}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2 group">
                              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-gray-500 ml-1 group-focus-within:text-brand-red transition-colors">
                                {t("form.name.label")}
                              </label>
                              <div className="relative">
                                <User
                                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 group-focus-within:text-black dark:group-focus-within:text-white transition-colors"
                                  size={18}
                                />
                                <input
                                  type="text"
                                  value={formData.name}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      name: e.target.value,
                                    })
                                  }
                                  className="w-full bg-gray-50 dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-xl pl-12 pr-5 py-3 md:py-4 text-sm md:text-base text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:bg-white dark:focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-brand-red transition-all"
                                  placeholder={t("form.name.placeholder")}
                                />
                              </div>
                            </div>

                            <div className="space-y-2 group">
                              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-gray-500 ml-1 group-focus-within:text-brand-red transition-colors">
                                {t("form.email.label")}
                              </label>
                              <div className="relative">
                                <Mail
                                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 group-focus-within:text-black dark:group-focus-within:text-white transition-colors"
                                  size={18}
                                />
                                <input
                                  type="email"
                                  value={formData.email}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      email: e.target.value,
                                    })
                                  }
                                  className="w-full bg-gray-50 dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-xl pl-12 pr-5 py-3 md:py-4 text-sm md:text-base text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:bg-white dark:focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-brand-red transition-all"
                                  placeholder={t("form.email.placeholder")}
                                />
                              </div>
                            </div>

                            <div className="space-y-2 group">
                              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-gray-500 ml-1 group-focus-within:text-brand-red transition-colors">
                                {t("form.company.label")}
                              </label>
                              <div className="relative">
                                <Building2
                                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 group-focus-within:text-black dark:group-focus-within:text-white transition-colors"
                                  size={18}
                                />
                                <input
                                  type="text"
                                  value={formData.company}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      company: e.target.value,
                                    })
                                  }
                                  className="w-full bg-gray-50 dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-xl pl-12 pr-5 py-3 md:py-4 text-sm md:text-base text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:bg-white dark:focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-brand-red transition-all"
                                  placeholder={t("form.company.placeholder")}
                                />
                              </div>
                            </div>

                            <div className="space-y-2 group">
                              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-gray-500 ml-1 group-focus-within:text-brand-red transition-colors">
                                {t("form.size.label")}
                              </label>
                              <div className="relative">
                                <select
                                  value={formData.employees}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      employees: e.target.value,
                                    })
                                  }
                                  className="w-full bg-gray-50 dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-xl px-5 py-3 md:py-4 text-sm md:text-base text-black dark:text-white focus:border-brand-red focus:bg-white dark:focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-brand-red transition-all appearance-none cursor-pointer"
                                >
                                  {EMPLOYEES_OPTIONS.map((opt) => (
                                    <option key={opt} value={opt}>
                                      {t("form.size.option", { count: opt })}
                                    </option>
                                  ))}
                                </select>
                                <ChevronDown
                                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                                  size={16}
                                />
                              </div>
                            </div>

                            <div className="space-y-2 md:col-span-2 group z-20">
                              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-gray-500 ml-1 group-focus-within:text-brand-red transition-colors">
                                {t("form.phone.label")}
                              </label>
                              <div className="flex relative">
                                <div className="relative" ref={dropdownRef}>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setIsCountryOpen(!isCountryOpen)
                                    }
                                    className="h-full px-4 bg-gray-50 dark:bg-[#111] border border-black/10 dark:border-white/10 border-r-0 rounded-l-xl flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                                  >
                                    <span className="text-xs font-bold text-black dark:text-white">
                                      {selectedCountry.code}
                                    </span>
                                    <ChevronDown
                                      size={12}
                                      className="text-gray-500"
                                    />
                                  </button>

                                  {isCountryOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-56 max-h-56 overflow-y-auto bg-white dark:bg-[#1A1A1A] border border-black/5 dark:border-white/10 rounded-xl z-50 shadow-2xl">
                                      {COUNTRY_CODES.map((country) => (
                                        <div
                                          key={country.country}
                                          onClick={() => {
                                            setSelectedCountry(country);
                                            setIsCountryOpen(false);
                                          }}
                                          className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/10 cursor-pointer flex items-center justify-between border-b border-black/5 dark:border-white/5 last:border-0"
                                        >
                                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                            {country.label}
                                          </span>
                                          <span className="text-xs font-bold text-gray-500">
                                            {country.code}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>

                                <div className="relative flex-1">
                                  <Phone
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 group-focus-within:text-black dark:group-focus-within:text-white transition-colors"
                                    size={18}
                                  />
                                  <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        phone: e.target.value,
                                      })
                                    }
                                    className="w-full h-full bg-gray-50 dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-r-xl pl-12 pr-5 py-3 md:py-4 text-sm md:text-base text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:bg-white dark:focus:bg-white/5 focus:outline-none focus:ring-1 focus:ring-brand-red transition-all"
                                    placeholder={t("form.phone.placeholder")}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`transition-all duration-500 ease-out absolute inset-0 flex flex-col ${
                            step === 2
                              ? "opacity-100 translate-x-0 z-10 relative"
                              : "opacity-0 translate-x-10 pointer-events-none absolute"
                          }`}
                        >
                          <h3 className="text-lg md:text-xl font-bold text-black dark:text-white mb-6 flex items-center gap-2">
                            {t("form.services.title")}{" "}
                            <span className="text-brand-red">*</span>
                          </h3>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {SERVICES.map((item) => {
                              const isSelected = formData.service.includes(
                                item.label
                              );
                              return (
                                <div
                                  key={item.id}
                                  onClick={() => toggleService(item.label)}
                                  className={`p-4 md:p-5 rounded-xl border cursor-pointer transition-all duration-300 flex items-center justify-between group hover:-translate-y-1 ${
                                    isSelected
                                      ? "bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/20"
                                      : "bg-gray-50 dark:bg-[#111] border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-black/20 dark:hover:border-white/30 hover:bg-gray-100 dark:hover:bg-white/5"
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <item.icon
                                      size={20}
                                      className={
                                        isSelected
                                          ? "text-white"
                                          : "text-gray-400 dark:text-gray-500 group-hover:text-brand-red transition-colors"
                                      }
                                    />
                                    <span
                                      className={`text-xs md:text-sm font-bold tracking-wide ${
                                        isSelected
                                          ? "text-white"
                                          : "text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors"
                                      }`}
                                    >
                                      {item.label}
                                    </span>
                                  </div>
                                  {isSelected ? (
                                    <CheckCircle2
                                      size={18}
                                      className="text-white"
                                    />
                                  ) : (
                                    <div className="w-4 h-4 rounded-full border border-black/20 dark:border-white/20 group-hover:border-black/50 dark:group-hover:border-white/50"></div>
                                  )}
                                </div>
                              );
                            })}
                            <div
                              onClick={() =>
                                toggleService(t("form.services.other"))
                              }
                              className={`p-4 md:p-5 rounded-xl border cursor-pointer transition-all duration-300 flex items-center justify-between group hover:-translate-y-1 ${
                                formData.service.includes(
                                  t("form.services.other")
                                )
                                  ? "bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/20"
                                  : "bg-gray-50 dark:bg-[#111] border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-black/20 dark:hover:border-white/30 hover:bg-gray-100 dark:hover:bg-white/5"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <Sparkles
                                  size={20}
                                  className={
                                    formData.service.includes(
                                      t("form.services.other")
                                    )
                                      ? "text-white"
                                      : "text-gray-400 dark:text-gray-500 group-hover:text-brand-red transition-colors"
                                  }
                                />
                                <span
                                  className={`text-xs md:text-sm font-bold tracking-wide ${
                                    formData.service.includes(
                                      t("form.services.other")
                                    )
                                      ? "text-white"
                                      : "text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors"
                                  }`}
                                >
                                  {t("form.services.other")}
                                </span>
                              </div>
                              {formData.service.includes(
                                t("form.services.other")
                              ) ? (
                                <CheckCircle2
                                  size={18}
                                  className="text-white"
                                />
                              ) : (
                                <div className="w-4 h-4 rounded-full border border-black/20 dark:border-white/20 group-hover:border-black/50 dark:group-hover:border-white/50"></div>
                              )}
                            </div>

                            {formData.service.includes(
                              t("form.services.other")
                            ) && (
                              <div className="col-span-1 sm:col-span-2 mt-2 animate-fade-in-up">
                                <input
                                  type="text"
                                  value={formData.otherServiceText}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      otherServiceText: e.target.value,
                                    })
                                  }
                                  className="w-full bg-gray-50 dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red transition-all"
                                  placeholder={t(
                                    "form.services.otherPlaceholder"
                                  )}
                                  autoFocus
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        <div
                          className={`transition-all duration-500 ease-out absolute inset-0 flex flex-col ${
                            step === 3
                              ? "opacity-100 translate-x-0 z-10 relative"
                              : "opacity-0 translate-x-10 pointer-events-none absolute"
                          }`}
                        >
                          <div className="space-y-6 md:space-y-8">
                            <div className="space-y-4">
                              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-emerald-500 ml-1 flex items-center gap-2">
                                <DollarSign size={12} />{" "}
                                {t("form.budget.label")}
                              </label>
                              <div className="grid grid-cols-2 gap-3 md:gap-4">
                                {BUDGETS.map((budget) => {
                                  const isSelected = formData.budget === budget;
                                  return (
                                    <div
                                      key={budget}
                                      onClick={() =>
                                        setFormData({ ...formData, budget })
                                      }
                                      className={`relative p-4 md:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 text-center overflow-hidden group/budget hover:-translate-y-1 ${
                                        isSelected
                                          ? "bg-emerald-500/10 border-emerald-500 text-black dark:text-white shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                                          : "bg-gray-50 dark:bg-[#111] border-black/5 dark:border-white/5 text-gray-500 dark:text-gray-400 hover:border-emerald-500/50 hover:text-black dark:hover:text-white"
                                      }`}
                                    >
                                      {isSelected && (
                                        <div className="absolute inset-0 bg-emerald-500/5 opacity-100 transition-opacity"></div>
                                      )}
                                      <span
                                        className={`text-[10px] md:text-sm font-bold uppercase tracking-wider relative z-10 ${
                                          isSelected
                                            ? "text-emerald-600 dark:text-emerald-400"
                                            : ""
                                        }`}
                                      >
                                        {budget}
                                      </span>
                                      {isSelected && (
                                        <div className="absolute top-2 right-2 text-emerald-500 animate-in fade-in zoom-in duration-300">
                                          <CheckCircle2 size={14} />
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="space-y-4 h-full">
                              <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-emerald-500 ml-1 flex items-center gap-2">
                                <FileText size={12} /> {t("form.details.label")}
                              </label>
                              <div className="relative h-full">
                                <textarea
                                  rows={5}
                                  value={formData.details}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      details: e.target.value,
                                    })
                                  }
                                  className="w-full bg-gray-50 dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 md:px-6 md:py-5 text-sm md:text-base text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-emerald-500 focus:bg-white dark:focus:bg-emerald-500/5 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all resize-none font-medium h-32"
                                  placeholder={t("form.details.placeholder")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-auto pt-8 md:pt-10 flex gap-4">
                          {step > 1 && (
                            <button
                              type="button"
                              onClick={handleBack}
                              className="px-4 md:px-6 py-4 rounded-xl bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-300 font-bold uppercase tracking-wider text-xs border border-black/5 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all flex items-center gap-2 hover:-translate-x-1"
                            >
                              <ArrowLeft size={16} /> {t("form.actions.back")}
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={step === 3 ? handleSubmit : handleNext}
                            disabled={isSubmitting}
                            className={`flex-1 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-3 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${
                              step === 3
                                ? "bg-emerald-500 text-white hover:bg-emerald-400 hover:shadow-emerald-500/40"
                                : "bg-brand-red text-white hover:bg-red-600 hover:shadow-brand-red/40"
                            }`}
                          >
                            {isSubmitting ? (
                              <Loader2 size={18} className="animate-spin" />
                            ) : step === 3 ? (
                              <>
                                {t("form.actions.confirm")} <Send size={18} />
                              </>
                            ) : (
                              <>
                                {t("form.actions.next")}{" "}
                                <ArrowRight size={18} />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center min-h-[420px] text-center animate-fade-in-up">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                        <CheckCircle2
                          size={40}
                          className="text-emerald-500 drop-shadow-sm md:w-[48px] md:h-[48px]"
                        />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white mb-4 tracking-tight">
                        {t("success.title")}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                        {t("success.message", { name: formData.name })}
                        <br />
                        <span className="text-sm text-gray-400 mt-2 block">
                          {t("success.subMessage")}
                        </span>
                      </p>

                      <button
                        onClick={handleReset}
                        className="px-8 py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider text-sm hover:scale-105 hover:shadow-xl transition-all duration-300"
                      >
                        {t("success.button")}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
