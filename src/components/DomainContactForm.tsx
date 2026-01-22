"use client";

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
import { useTranslations } from "next-intl";

const COUNTRY_CODES = [
  { code: "+212", country: "MA", label: "Maroc" },
  { code: "+33", country: "FR", label: "France" },
  { code: "+1", country: "US", label: "USA" },
  { code: "+44", country: "UK", label: "UK" },
  { code: "+32", country: "BE", label: "Belgique" },
  { code: "+41", country: "CH", label: "Suisse" },
  { code: "+34", country: "ES", label: "Espagne" },
  { code: "+971", country: "AE", label: "UAE" },
];

const EMPLOYEES = ["1-10", "11-50", "51-200", "+200"];

const BUDGETS = ["< 20k MAD", "20-50k MAD", "50-100k MAD", "+100k MAD"];

export const DomainContactForm: React.FC = () => {
  const t = useTranslations("DomainContactForm");
  const [step, setStep] = useState(1);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const SERVICES = [
    { id: "web", label: t("services.web"), icon: Layout },
    { id: "seo", label: t("services.seo"), icon: Search },
    { id: "social", label: t("services.social"), icon: Share2 },
    { id: "branding", label: t("services.branding"), icon: Palette },
    { id: "app", label: t("services.app"), icon: Globe },
    { id: "dev", label: t("services.dev"), icon: Zap },
  ];

  const stepsLabels = [
    { id: 1, label: t("steps.info") },
    { id: 2, label: t("steps.service") },
    { id: 3, label: t("steps.details") },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryRef.current &&
        !countryRef.current.contains(event.target as Node)
      ) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#050505] text-black dark:text-white overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/[0.02] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: CONTENT */}
          <div className="space-y-8 animate-enter-left">
            <div className="inline-flex items-center gap-2 text-brand-red mb-4">
              <Sparkles size={24} className="animate-pulse" />
            </div>

            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-black dark:text-white"
              dangerouslySetInnerHTML={{
                __html: t.raw("header.title").replace(/{br}/g, "<br/>"),
              }}
            />

            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg font-medium leading-relaxed max-w-xl">
              <p>{t("header.p1")}</p>
              <p>{t("header.p2")}</p>
            </div>
          </div>

          {/* RIGHT: FORM CARD */}
          <div className="relative animate-enter-right delay-200">
            {/* Glow behind card */}
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-red/10 to-blue-600/10 rounded-[35px] blur-xl opacity-50"></div>

            <div className="relative bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden transition-colors duration-500 min-h-[600px] flex flex-col">
              {/* Top Stepper */}
              <div className="flex items-center justify-between mb-12 relative px-4">
                <div className="absolute top-4 left-0 w-full h-[1px] bg-black/5 dark:bg-white/10 -z-0"></div>
                {stepsLabels.map((s) => {
                  const isActive = step === s.id;
                  const isCompleted = step > s.id;

                  return (
                    <div
                      key={s.id}
                      className="relative z-10 flex flex-col items-center gap-3 bg-white dark:bg-[#0A0A0A] px-2"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border-2 ${
                          isActive
                            ? "bg-brand-red border-brand-red text-white scale-110 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                            : isCompleted
                              ? "bg-black dark:bg-white border-black dark:border-white text-white dark:text-black"
                              : "bg-transparent border-gray-200 dark:border-white/20 text-gray-400 dark:text-gray-600"
                        }`}
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
                    {t("success.title")}
                  </h3>
                  <p
                    className="text-gray-600 dark:text-gray-400 mb-10 text-lg"
                    dangerouslySetInnerHTML={{
                      __html: t.raw("success.desc").replace(/{br}/g, "<br/>"),
                    }}
                  />
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setStep(1);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        employees: "1-10",
                        phone: "",
                        services: [],
                        details: "",
                        budget: "",
                      });
                    }}
                    className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                  >
                    {t("success.button")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  <div className="flex-1 relative overflow-hidden">
                    {/* STEP 1: INFORMATIONS */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col gap-5 ${
                        step === 1
                          ? "opacity-100 translate-x-0 z-10"
                          : "opacity-0 -translate-x-full pointer-events-none"
                      }`}
                    >
                      <div className="space-y-5">
                        <div className="relative group">
                          <User
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 group-focus-within:text-brand-red transition-colors"
                            size={18}
                          />
                          <input
                            type="text"
                            placeholder={t("form.namePlaceholder")}
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full bg-gray-50 dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-xl pl-12 pr-5 py-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:bg-white dark:focus:bg-white/5 focus:outline-none transition-all"
                            required
                          />
                        </div>

                        <div className="relative group">
                          <Mail
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 group-focus-within:text-brand-red transition-colors"
                            size={18}
                          />
                          <input
                            type="email"
                            placeholder={t("form.emailPlaceholder")}
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="w-full bg-gray-50 dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-xl pl-12 pr-5 py-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:bg-white dark:focus:bg-white/5 focus:outline-none transition-all"
                            required
                          />
                        </div>

                        <div className="relative group">
                          <Building2
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 group-focus-within:text-brand-red transition-colors"
                            size={18}
                          />
                          <input
                            type="text"
                            placeholder={t("form.companyPlaceholder")}
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                company: e.target.value,
                              })
                            }
                            className="w-full bg-gray-50 dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-xl pl-12 pr-5 py-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:bg-white dark:focus:bg-white/5 focus:outline-none transition-all"
                          />
                        </div>

                        <div className="relative group">
                          <label className="absolute left-4 top-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                            {t("form.employeesLabel")}
                          </label>
                          <select
                            value={formData.employees}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                employees: e.target.value,
                              })
                            }
                            className="w-full bg-gray-50 dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-xl px-4 pt-6 pb-2 text-black dark:text-white focus:border-brand-red focus:outline-none cursor-pointer appearance-none"
                          >
                            {EMPLOYEES.map((opt) => (
                              <option
                                key={opt}
                                value={opt}
                                className="bg-white dark:bg-[#111] text-black dark:text-white"
                              >
                                {opt}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            size={18}
                          />
                        </div>

                        <div className="flex relative" ref={countryRef}>
                          <button
                            type="button"
                            onClick={() => setIsCountryOpen(!isCountryOpen)}
                            className="flex items-center gap-2 px-4 border border-black/5 dark:border-white/10 border-r-0 bg-gray-50 dark:bg-[#111] rounded-l-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                          >
                            <span className="text-sm font-bold text-black dark:text-white">
                              {selectedCountry.code}
                            </span>
                            <ChevronDown size={14} className="text-gray-500" />
                          </button>

                          {isCountryOpen && (
                            <div className="absolute top-full left-0 mt-2 w-56 max-h-48 overflow-y-auto bg-white dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 rounded-xl z-50 shadow-xl">
                              {COUNTRY_CODES.map((c) => (
                                <div
                                  key={c.country}
                                  onClick={() => {
                                    setSelectedCountry(c);
                                    setIsCountryOpen(false);
                                  }}
                                  className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer text-sm flex justify-between"
                                >
                                  <span className="text-black dark:text-white">
                                    {c.label}
                                  </span>
                                  <span className="text-gray-500">
                                    {c.code}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          <input
                            type="tel"
                            placeholder={t("form.phonePlaceholder")}
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="w-full bg-gray-50 dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-r-xl px-5 py-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:outline-none transition-all"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* STEP 2: SERVICES */}
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
                        {t("form.serviceLabel")}
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {SERVICES.map((srv) => {
                          const isSelected = formData.services.includes(srv.id);
                          return (
                            <div
                              key={srv.id}
                              onClick={() => toggleService(srv.id)}
                              className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center h-32 group ${
                                isSelected
                                  ? "bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/20"
                                  : "bg-gray-50 dark:bg-[#111] border-black/5 dark:border-white/10 hover:border-brand-red/50 hover:bg-white dark:hover:bg-white/5 text-gray-500 dark:text-gray-400"
                              }`}
                            >
                              <srv.icon
                                size={24}
                                className={
                                  isSelected
                                    ? "text-white"
                                    : "group-hover:text-black dark:group-hover:text-white transition-colors"
                                }
                              />
                              <span
                                className={`text-xs font-bold uppercase tracking-wider ${
                                  isSelected
                                    ? "text-white"
                                    : "text-gray-600 dark:text-gray-300"
                                }`}
                              >
                                {srv.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* STEP 3: DETAILS */}
                    <div
                      className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col gap-6 ${
                        step === 3
                          ? "opacity-100 translate-x-0 z-10"
                          : "opacity-0 translate-x-full pointer-events-none"
                      }`}
                    >
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                          <MessageSquare size={14} />{" "}
                          {t("form.projectDescLabel")}
                        </label>
                        <textarea
                          value={formData.details}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              details: e.target.value,
                            })
                          }
                          rows={4}
                          className="w-full bg-gray-50 dark:bg-[#111] border border-black/5 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:border-brand-red focus:outline-none transition-all resize-none h-40"
                          placeholder={t("form.projectDescPlaceholder")}
                        ></textarea>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                          <DollarSign size={14} /> {t("form.budgetLabel")}
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {BUDGETS.map((b) => (
                            <div
                              key={b}
                              onClick={() =>
                                setFormData({ ...formData, budget: b })
                              }
                              className={`px-4 py-3 rounded-lg border text-xs font-bold text-center cursor-pointer transition-all ${
                                formData.budget === b
                                  ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                                  : "bg-transparent border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:border-black/30 dark:hover:border-white/30"
                              }`}
                            >
                              {b}
                            </div>
                          ))}
                        </div>
                      </div>
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
                      <ArrowLeft size={16} /> {t("form.back")}
                    </button>

                    <button
                      type="button"
                      onClick={step === 3 ? handleSubmit : handleNext}
                      disabled={isSubmitting}
                      className="bg-brand-red hover:bg-red-600 text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-lg shadow-red-900/20 hover:shadow-red-900/40 flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <>
                          {step === 3 ? t("form.confirm") : t("form.next")}
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
