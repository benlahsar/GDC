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
  Users,
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

const SERVICES_CONFIG = [
  { id: "web", icon: Layout },
  { id: "seo", icon: Search },
  { id: "social", icon: Share2 },
  { id: "branding", icon: Palette },
  { id: "app", icon: Globe },
  { id: "dev", icon: Zap },
];

const BUDGETS = ["< 20k MAD", "20-50k MAD", "50-100k MAD", "+100k MAD"];

export const AgencyProjectForm: React.FC<{ isMobile?: boolean }> = ({
  isMobile,
}) => {
  const t = useTranslations("AgencyProjectForm");
  // Reconstruct SERVICES with translations
  const servicesData = t.raw("services_options") as { [key: string]: string };
  const SERVICES = SERVICES_CONFIG.map((s) => ({
    ...s,
    label: servicesData[s.id],
  }));

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

    const fullPhone = `${selectedCountry.code} ${formData.phone}`;
    const enhancedDescription = `Employés: ${formData.employees}\n\n${formData.details}`;

    const requestData = {
      name: formData.name,
      email: formData.email,
      fullPhone: fullPhone,
      project: formData.company,
      services: formData.services,
      budget: formData.budget,
      startDate: "Non spécifié",
      description: enhancedDescription,
      employees: formData.employees, // Pass this along just in case
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(t("alerts.error"));
      setIsSubmitting(false);
    }
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-black dark:text-white">
              {t("title.line1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
                {t("title.highlight")}
              </span>
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg font-medium leading-relaxed max-w-xl">
              <p>{t("description.p1")}</p>
              <p>{t("description.p2")}</p>
            </div>

            <div className="pt-8 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white dark:border-black bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Expert"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-black dark:text-white">
                  {t("social_proof.text")}
                </p>
                <div className="flex gap-1 text-brand-red text-xs">★★★★★</div>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM CARD */}
          <div className="relative animate-enter-right delay-200">
            {/* Glow behind card */}
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-red/10 to-blue-600/10 rounded-[35px] blur-xl opacity-50"></div>

            <div className="relative bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden transition-colors duration-500">
              {/* Top Stepper */}
              <div className="flex items-center justify-between mb-10 relative">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/5 dark:bg-white/10 -z-0"></div>
                {[
                  { id: 1, label: t("steps.info") },
                  { id: 2, label: t("steps.service") },
                  { id: 3, label: t("steps.details") },
                ].map((s) => {
                  const isActive = step === s.id;
                  const isCompleted = step > s.id;

                  return (
                    <div
                      key={s.id}
                      className="relative z-10 flex flex-col items-center gap-2 bg-white dark:bg-[#0A0A0A] px-2 transition-colors duration-500"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          isActive || isCompleted
                            ? "bg-brand-red text-white scale-110 shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                            : "bg-gray-100 dark:bg-white/10 text-gray-400 dark:text-gray-500"
                        }`}
                      >
                        {isCompleted ? <Check size={14} /> : s.id}
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
                <div className="py-20 flex flex-col items-center text-center animate-enter-zoom">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500 border border-emerald-500/20">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                    {t("success.title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    {t("success.message")}
                  </p>
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
                    className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    {t("success.button")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="min-h-[380px]">
                    {/* STEP 1: INFORMATIONS */}
                    {step === 1 && (
                      <div className="space-y-5 animate-fade-in-up">
                        <div className="group space-y-2">
                          <div className="relative">
                            <input
                              type="text"
                              placeholder={t("placeholders.name")}
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              className="w-full bg-transparent border border-black/10 dark:border-white/20 rounded-xl px-5 py-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-brand-red focus:outline-none focus:bg-black/5 dark:focus:bg-white/5 transition-all"
                              required
                            />
                            <User
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600"
                              size={18}
                            />
                          </div>
                        </div>

                        <div className="group space-y-2">
                          <div className="relative">
                            <input
                              type="email"
                              placeholder={t("placeholders.email")}
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                              className="w-full bg-transparent border border-black/10 dark:border-white/20 rounded-xl px-5 py-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-brand-red focus:outline-none focus:bg-black/5 dark:focus:bg-white/5 transition-all"
                              required
                            />
                            <Mail
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600"
                              size={18}
                            />
                          </div>
                        </div>

                        <div className="group space-y-2">
                          <div className="relative">
                            <input
                              type="text"
                              placeholder={t("placeholders.company")}
                              value={formData.company}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  company: e.target.value,
                                })
                              }
                              className="w-full bg-transparent border border-black/10 dark:border-white/20 rounded-xl px-5 py-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-brand-red focus:outline-none focus:bg-black/5 dark:focus:bg-white/5 transition-all"
                            />
                            <Building2
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600"
                              size={18}
                            />
                          </div>
                        </div>

                        <div className="group space-y-2">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                            {t("labels.employees")}{" "}
                            <span className="text-brand-red">*</span>
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
                              className="w-full bg-transparent border border-black/10 dark:border-white/20 rounded-xl px-5 py-4 text-black dark:text-white appearance-none focus:border-brand-red focus:outline-none focus:bg-black/5 dark:focus:bg-white/5 transition-all cursor-pointer"
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
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 pointer-events-none"
                              size={18}
                            />
                          </div>
                        </div>

                        <div className="group space-y-2">
                          <div className="flex relative" ref={countryRef}>
                            <button
                              type="button"
                              onClick={() => setIsCountryOpen(!isCountryOpen)}
                              className="flex items-center gap-2 px-4 border border-black/10 dark:border-white/20 border-r-0 rounded-l-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                            >
                              <span className="text-sm font-bold text-black dark:text-white">
                                {selectedCountry.code}
                              </span>
                              <ChevronDown
                                size={12}
                                className="text-gray-500"
                              />
                            </button>

                            {isCountryOpen && (
                              <div className="absolute top-full left-0 mt-2 w-48 max-h-48 overflow-y-auto bg-white dark:bg-[#1A1A1A] border border-black/10 dark:border-white/10 rounded-xl z-50 shadow-xl">
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
                              placeholder={t("placeholders.phone")}
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                              className="w-full bg-transparent border border-black/10 dark:border-white/20 rounded-r-xl px-5 py-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-brand-red focus:outline-none focus:bg-black/5 dark:focus:bg-white/5 transition-all"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: SERVICES */}
                    {step === 2 && (
                      <div className="animate-fade-in-up">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 block">
                          {t("labels.service_needed")}
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {SERVICES.map((srv) => {
                            const isSelected = formData.services.includes(
                              srv.id,
                            );
                            return (
                              <div
                                key={srv.id}
                                onClick={() => toggleService(srv.id)}
                                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center h-32 group ${
                                  isSelected
                                    ? "bg-brand-red border-brand-red text-white"
                                    : "bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/20 hover:border-brand-red/50 hover:bg-black/10 dark:hover:bg-white/10"
                                }`}
                              >
                                <srv.icon
                                  size={24}
                                  className={
                                    isSelected
                                      ? "text-white"
                                      : "text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors"
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
                    )}

                    {/* STEP 3: DETAILS */}
                    {step === 3 && (
                      <div className="space-y-6 animate-fade-in-up">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                            <MessageSquare size={14} />{" "}
                            {t("labels.project_details")}
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
                            className="w-full bg-transparent border border-black/10 dark:border-white/20 rounded-xl px-5 py-4 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-brand-red focus:outline-none focus:bg-black/5 dark:focus:bg-white/5 transition-all resize-none"
                            placeholder={t("placeholders.details")}
                          ></textarea>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                            <DollarSign size={14} /> {t("labels.budget")}
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
                    )}
                  </div>

                  {/* Footer Actions */}
                  <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex justify-between items-center">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-gray-500 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                      >
                        <ArrowLeft size={16} /> {t("buttons.back")}
                      </button>
                    ) : (
                      <div></div>
                    )}

                    <button
                      type="button"
                      onClick={step === 3 ? handleSubmit : handleNext}
                      disabled={isSubmitting}
                      className="bg-brand-red hover:bg-red-600 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-lg shadow-red-900/20 hover:shadow-red-900/40 flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <>
                          {step === 3
                            ? t("buttons.confirm")
                            : t("buttons.next")}
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
