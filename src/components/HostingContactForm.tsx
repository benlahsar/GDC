"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Server,
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
  Database,
  Cpu,
  Activity,
  MessageSquare,
  Loader2,
  Sparkles,
  Headset,
} from "lucide-react";

import { useTranslations } from "next-intl";

const COUNTRY_CODES = [
  { code: "+212", country: "MA", label: "Maroc" },
  { code: "+33", country: "FR", label: "France" },
  { code: "+1", country: "US", label: "USA" },
  { code: "+44", country: "UK", label: "UK" },
  { code: "+32", country: "BE", label: "Belgique" },
  { code: "+971", country: "AE", label: "UAE" },
];

interface HostingContactFormProps {
  selectedPlanId?: string;
}

export const HostingContactForm: React.FC<HostingContactFormProps> = ({
  selectedPlanId,
}) => {
  const t = useTranslations("HostingContactForm");

  const PLANS = [
    {
      id: "shared",
      label: t("form.plans.shared.label"),
      icon: Server,
      desc: t("form.plans.shared.desc"),
    },
    {
      id: "vps",
      label: t("form.plans.vps.label"),
      icon: Cpu,
      desc: t("form.plans.vps.desc"),
    },
    {
      id: "dedicated",
      label: t("form.plans.dedicated.label"),
      icon: Database,
      desc: t("form.plans.dedicated.desc"),
    },
    {
      id: "pro",
      label: t("form.plans.pro.label"),
      icon: ShieldCheck,
      desc: t("form.plans.pro.desc"),
    },
  ];
  const [step, setStep] = useState(1);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    plan: "shared",
    traffic: "Bas",
    details: "",
  });

  useEffect(() => {
    if (selectedPlanId) {
      setFormData((prev) => ({ ...prev, plan: selectedPlanId }));
    }
  }, [selectedPlanId]);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section
      id="hosting-contact"
      className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden"
    >
      {/* Background Ambience - Simplified for mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] transition-colors duration-1000 ${
            isMobile
              ? "opacity-20 bg-brand-red/5"
              : step === 3
              ? "bg-emerald-500/10"
              : "bg-brand-red/5"
          }`}
        ></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* --- LEFT SIDE --- */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 auto-rows-min">
            <div
              className={`col-span-2 p-8 md:p-10 rounded-[40px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 shadow-xl flex flex-col justify-center ${
                !isMobile ? "animate-enter-left" : ""
              }`}
            >
              <div className="inline-flex items-center gap-2 text-brand-red mb-6">
                <Sparkles
                  size={20}
                  className={!isMobile ? "animate-pulse" : ""}
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
                  {t("badge")}
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-6"
                dangerouslySetInnerHTML={{
                  __html: t.raw("title").replace(/{br}/g, "<br/>"),
                }}
              />
            </div>

            <div
              className={`p-6 rounded-[32px] bg-black dark:bg-white text-white dark:text-black flex flex-col justify-between aspect-square md:aspect-auto md:h-48 ${
                !isMobile ? "animate-enter-left delay-200" : ""
              }`}
            >
              <Zap className="text-brand-red" size={24} />
              <div>
                <span className="block text-2xl font-black">0.8s</span>
                <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">
                  {t("stats.responseTime")}
                </span>
              </div>
            </div>

            <div
              className={`p-6 rounded-[32px] bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 flex flex-col justify-between ${
                !isMobile ? "animate-enter-left delay-300" : ""
              }`}
            >
              <Activity className="text-emerald-500" size={24} />
              <div>
                <span className="block text-2xl font-black">99.9%</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">
                  {t("stats.uptime")}
                </span>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="lg:col-span-7">
            <div
              className={`relative w-full rounded-[40px] bg-white/70 dark:bg-[#080808]/80 backdrop-blur-3xl saturate-150 border border-white/60 dark:border-white/10 shadow-2xl overflow-hidden ${
                !isMobile ? "animate-enter-right" : ""
              }`}
            >
              <div
                className={`h-1.5 w-full bg-gradient-to-r transition-all duration-1000 ${
                  isMobile
                    ? "from-brand-red to-red-500"
                    : step === 3
                    ? "from-emerald-500 to-teal-400"
                    : "from-brand-red to-red-500"
                }`}
              />

              <div className="p-8 md:p-12">
                {isSuccess ? (
                  <div className="py-12 flex flex-col items-center text-center animate-enter-zoom">
                    <div className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20">
                      <CheckCircle2 size={48} className="text-emerald-500" />
                    </div>
                    <h3 className="text-3xl font-black text-black dark:text-white mb-4">
                      {t("success.title")}
                    </h3>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setStep(1);
                      }}
                      className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black uppercase tracking-widest text-xs"
                    >
                      {t("success.cta")}
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-12 relative px-2">
                      <div className="absolute top-4 left-0 w-full h-[1px] bg-black/5 dark:bg-white/5"></div>
                      {[1, 2, 3].map((num) => (
                        <div
                          key={num}
                          className="relative z-10 flex flex-col items-center gap-3 bg-transparent"
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 ${
                              step === num
                                ? "bg-brand-red border-brand-red text-white scale-125"
                                : step > num
                                ? "bg-black dark:bg-white border-black dark:border-white text-white dark:text-black"
                                : "bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 text-gray-400"
                            }`}
                          >
                            {step > num ? (
                              <Check size={14} strokeWidth={3} />
                            ) : (
                              num
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-8"
                    >
                      {step === 1 && (
                        <div
                          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
                            !isMobile ? "animate-fade-in-up" : ""
                          }`}
                        >
                          <input
                            type="text"
                            placeholder={t("form.placeholders.name")}
                            className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 px-6 text-black dark:text-white focus:border-brand-red focus:outline-none transition-all"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            required
                          />
                          <input
                            type="email"
                            placeholder={t("form.placeholders.email")}
                            className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 px-6 text-black dark:text-white focus:border-brand-red focus:outline-none transition-all"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      )}

                      {step === 2 && (
                        <div
                          className={`space-y-8 ${
                            !isMobile ? "animate-fade-in-up" : ""
                          }`}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {PLANS.map((plan) => (
                              <div
                                key={plan.id}
                                onClick={() =>
                                  setFormData({ ...formData, plan: plan.id })
                                }
                                className={`p-5 rounded-[24px] border cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                                  formData.plan === plan.id
                                    ? "bg-brand-red border-brand-red text-white"
                                    : "bg-white dark:bg-[#111] border-black/5 dark:border-white/10"
                                }`}
                              >
                                <plan.icon size={24} />
                                <div>
                                  <h4 className="font-bold text-sm">
                                    {plan.label}
                                  </h4>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div
                          className={`space-y-6 ${
                            !isMobile ? "animate-fade-in-up" : ""
                          }`}
                        >
                          <textarea
                            className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[24px] p-6 text-black dark:text-white focus:border-emerald-500 focus:outline-none transition-all resize-none h-48"
                            placeholder={t("form.placeholders.details")}
                            value={formData.details}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                details: e.target.value,
                              })
                            }
                          />
                        </div>
                      )}

                      <div className="mt-auto flex items-center justify-between pt-8 border-t border-black/5 dark:border-white/5">
                        <button
                          type="button"
                          onClick={handleBack}
                          className={`text-[10px] font-bold uppercase transition-all ${
                            step === 1 ? "opacity-0" : "text-gray-500"
                          }`}
                        >
                          {t("form.actions.back")}
                        </button>
                        <button
                          type="button"
                          onClick={step === 3 ? handleSubmit : handleNext}
                          className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] bg-black dark:bg-white text-white dark:text-black hover:scale-105 transition-all`}
                        >
                          {isSubmitting ? (
                            <Loader2 size={16} className="animate-spin" />
                          ) : step === 3 ? (
                            t("form.actions.confirm")
                          ) : (
                            t("form.actions.next")
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
