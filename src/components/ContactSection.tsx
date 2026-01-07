"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Loader2,
  Sparkles,
  Send,
  User,
  Mail,
  Phone,
  Zap,
  Calendar,
  MessageSquare,
  ChevronDown,
  Globe,
} from "lucide-react";
import { useTranslations } from "next-intl";

// --- Types ---
interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
}

// --- Constants ---
const COLORS = ["#FF0000", "#FF4D4D", "#FF9999", "#FFFFFF", "#FFD700"];
const getCountryCodes = (t: ReturnType<typeof useTranslations>) => [
  { code: "+212", country: "MA", label: t("form.options.countries.morocco") },
  { code: "+33", country: "FR", label: t("form.options.countries.france") },
  { code: "+1", country: "US", label: t("form.options.countries.usa") },
  { code: "+44", country: "UK", label: t("form.options.countries.uk") },
  { code: "+32", country: "BE", label: t("form.options.countries.belgium") },
  { code: "+41", country: "CH", label: t("form.options.countries.switzerland") },
  { code: "+34", country: "ES", label: t("form.options.countries.spain") }
];



const getTimelineOptions = (t: ReturnType<typeof useTranslations>) => [
  t("form.options.timelines.asap"),
  t("form.options.timelines.1month"),
  t("form.options.timelines.onetreemonths"),
  t("form.options.timelines.undefined"),
];

const getServiceOptions = (t: ReturnType<typeof useTranslations>) => [
  t("form.options.services.strategy"),
  t("form.options.services.branding"),
  t("form.options.services.website"),
  t("form.options.services.ecommerce"),
  t("form.options.services.mobile"),
  t("form.options.services.uiux"),
  t("form.options.services.seo"),
  t("form.options.services.ads"),
  t("form.options.services.social"),
  t("form.options.services.content"),
];

const getBudgetOptions = (t: ReturnType<typeof useTranslations>) => [
  t("form.options.budgets.lt20k"),
  t("form.options.budgets.20k50k"),
  t("form.options.budgets.50k100k"),
  t("form.options.budgets.gt100k"),
  t("form.options.budgets.tbd"),
];



// --- Components ---

const FireworkParticles = ({
  active,
  origin,
}: {
  active: boolean;
  origin: { x: number; y: number };
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const requestRef = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (active && origin.x !== 0 && !isMobile) {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 80; i++) {
        // Increased particle count
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 10 + 3; // Faster explosion
        newParticles.push({
          id: Math.random(),
          x: origin.x,
          y: origin.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          size: Math.random() * 4 + 2,
          life: 1.0,
        });
      }
      setParticles(newParticles);
    }
  }, [active, origin, isMobile]);

  useEffect(() => {
    const animate = () => {
      setParticles((prev) => {
        if (prev.length === 0) return [];
        return prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.25, // Slightly heavier gravity
            life: p.life - 0.015,
          }))
          .filter((p) => p.life > 0);
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    if (particles.length > 0) {
      requestRef.current = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(requestRef.current);
  }, [particles.length]);

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
            borderRadius: "50%",
            opacity: p.life,
            transform: `scale(${p.life})`,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
};

export const ContactSection: React.FC = () => {
  const tContact = useTranslations("contact");

  const COUNTRY_CODES = getCountryCodes(tContact);
  const TIMELINE_OPTIONS = getTimelineOptions(tContact);
  const SERVICE_OPTIONS = getServiceOptions(tContact);
  const BUDGET_OPTIONS = getBudgetOptions(tContact);

  const [countryCode, setCountryCode] = useState(COUNTRY_CODES[0]);


  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Firework State
  const [fireworkActive, setFireworkActive] = useState(false);
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Form State
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    services: [] as string[],
    otherService: "",
    budget: "",
    startDate: "",
    description: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone: string) => {
    // Basic check: only numbers, spaces, dashes. Min length 8.
    const cleanPhone = phone.replace(/[\s-]/g, "");
    const isNum = /^\d+$/.test(cleanPhone);
    return isNum && cleanPhone.length >= 8 && cleanPhone.length <= 15;
  };

  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = tContact("form.errors.name");

    if (!formData.email) {
      newErrors.email = tContact("form.errors.email");
    } else if (!validateEmail(formData.email)) {
      newErrors.email = tContact("form.errors.emailInvalid");
    }

    if (!formData.phone) {
      newErrors.phone = tContact("form.errors.phone");
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = tContact("form.errors.phoneInvalid");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: { [key: string]: string } = {};
    if (formData.services.length === 0 && !formData.otherService) {
      newErrors.services = tContact("form.errors.services");
    }
    if (!formData.budget) {
      newErrors.budget = tContact("form.errors.budget");
    }
    if (!formData.startDate) {
      newErrors.startDate = tContact("form.errors.deadline");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
        // Scroll slightly to focus on new content
        const formElement = document.getElementById("contact-form-container");
        if (formElement)
          formElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
    if (errors.services) setErrors({ ...errors, services: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    // Trigger Fireworks (PC Only)
    if (buttonRef.current && window.innerWidth >= 768) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPos({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
      setFireworkActive(true);
      setTimeout(() => setFireworkActive(false), 2500);
    }

    setIsSubmitting(true);

    const fullPhone = `${countryCode.code} ${formData.phone}`;

    // Prepare formatted services string for Formspree
    let serviceList = [...formData.services];
    if (formData.otherService)
      serviceList.push(`Autre: ${formData.otherService}`);
    const servicesString = serviceList.join(", ");

    // 1. Data object for Local Backend (DB)
    const dbData = {
      ...formData,
      fullPhone,
      // Backend expects 'services' array and 'otherService' separately to combine them itself if needed,
      // but consistent with current server.js, we send the raw data.
    };

    // 2. Data object for Formspree (Email)
    // We flatten it for better readability in the email
    const formspreeData = {
      name: formData.name,
      email: formData.email,
      phone: fullPhone,
      company: formData.project,
      services: servicesString,
      budget: formData.budget,
      timeline: formData.startDate,
      description: formData.description,
      _subject: `${tContact("success.title")} Web: ${formData.name} (${formData.project || tContact("form.options.services.other")})`,
    };

    try {
      // --- ACTION 1: SAVE TO DATABASE (Localhost) ---
      const dbRequest = fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dbData),
      })
        .then((res) => {
          if (!res.ok) console.warn("DB Save warning:", res.statusText);
          return res.json().catch(() => ({}));
        })
        .catch((err) => {
          console.error("Error saving to database:", err);
          // We don't throw here so we can still try sending the email
        });

      // --- ACTION 2: SEND EMAIL (Formspree) ---
      const emailRequest = fetch("https://formspree.io/f/meoyrlyn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formspreeData),
      }).then((res) => {
        if (!res.ok) throw new Error("Formspree error");
        return res.json();
      });

      // Wait for both to complete (or fail)
      await Promise.all([dbRequest, emailRequest]);

      // Success state
      await new Promise((resolve) => setTimeout(resolve, 500)); // smooth UX
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        tContact("form.errorMessage")
      );
      setIsSubmitting(false);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center gap-3 mb-8 md:mb-12 px-1">
      <div
        className={`h-1 flex-1 rounded-full transition-all duration-700 ease-out ${step >= 1
          ? "bg-black dark:bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          : "bg-gray-200 dark:bg-white/10"
          }`}
      ></div>
      <div
        className={`h-1 flex-1 rounded-full transition-all duration-700 ease-out ${step >= 2
          ? "bg-black dark:bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          : "bg-gray-200 dark:bg-white/10"
          }`}
      ></div>
      <div
        className={`h-1 flex-1 rounded-full transition-all duration-700 ease-out ${isSuccess
          ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
          : "bg-gray-200 dark:bg-white/10"
          }`}
      ></div>
    </div>
  );

  if (isSuccess) {
    return (
      <section
        id="contact"
        className="py-16 md:py-24 relative overflow-hidden flex items-center justify-center min-h-[500px] md:min-h-[600px] bg-white dark:bg-black"
      >
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="glass-card p-8 md:p-16 text-center rounded-[2rem] md:rounded-[3rem] animate-enter-zoom border border-white/40 dark:border-white/10 shadow-2xl relative overflow-hidden">
            {/* Minimal Success Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-emerald-500/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] animate-blob">
                <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white mb-4 md:mb-6 tracking-tight">
                {tContact("success.title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
                {tContact("success.message", { name: formData.name })}
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setStep(1);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    project: "",
                    services: [],
                    otherService: "",
                    budget: "",
                    startDate: "",
                    description: "",
                  });
                }}
                className="px-8 py-3 md:px-10 md:py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-xs md:text-sm uppercase tracking-widest rounded-xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                {tContact("success.newRequest")}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-16 md:py-32 relative overflow-hidden bg-white dark:bg-black"
    >
      {/* --- Particles Render --- */}
      <FireworkParticles active={fireworkActive} origin={buttonPos} />

      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Grid Accent */}
        <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.03]"></div>
        {/* Very faint localized glow for depth */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gray-200/20 dark:bg-white/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-24 items-start">
          {/* LEFT COLUMN: Text Info & Branding */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:sticky lg:top-32 mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card mb-6 md:mb-8 w-fit border border-black/5 dark:border-white/10 shadow-sm backdrop-blur-md">
              <Sparkles size={14} className="text-black dark:text-white" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
                {tContact("tag")}
              </span>
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-black dark:text-white leading-[0.95] mb-6 md:mb-8 tracking-tighter"
              dangerouslySetInnerHTML={{ __html: tContact.raw("title").replace("<highlight>", '<br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-black dark:from-gray-500 dark:to-white">').replace("</highlight>", '</span> <br />') }}
            />

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 md:mb-12 leading-relaxed max-w-md font-light">
              {tContact("subtitle")}
            </p>

            {/* Direct Contacts with Glass Effect */}
            <div className="flex flex-col gap-4 md:gap-5">
              <a
                href="mailto:mouhsinemakram@gmail.com"
                className="group flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
                  <Mail size={18} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-1">
                    {tContact("info.email")}
                  </p>
                  <p className="text-base md:text-lg font-bold text-black dark:text-white tracking-wide break-all">
                    mouhsinemakram@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+212600000000"
                className="group flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
                  <Phone size={18} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-1">
                    {tContact("info.phone")}
                  </p>
                  <p className="text-base md:text-lg font-bold text-black dark:text-white tracking-wide">
                    +212 6 00 00 00 00
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: The Ultra-Sleek Form */}
          <div
            className="lg:col-span-7 relative w-full"
            id="contact-form-container"
          >
            <div className="glass-card p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] relative border border-white/60 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-white/40 dark:bg-[#111]/40">
              {renderStepIndicator()}

              <form
                onSubmit={handleSubmit}
                className="relative min-h-[450px] md:min-h-[420px]"
              >
                {/* STEP 1: IDENTITY */}
                <div
                  className={`
                    absolute inset-0 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${step === 1
                      ? "opacity-100 translate-x-0 z-10 relative"
                      : "opacity-0 -translate-x-10 pointer-events-none absolute"
                    }
                `}
                >
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-xl md:text-3xl font-black text-black dark:text-white mb-2 flex items-center gap-3 tracking-tight">
                      <User
                        size={20}
                        className="md:w-6 md:h-6 text-black dark:text-white"
                      />{" "}
                      {tContact("form.step1.title")}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 font-medium">
                      {tContact("form.step1.subtitle")}
                    </p>
                  </div>

                  <div className="space-y-5 md:space-y-6 flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                      <div className="space-y-2 group">
                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 ml-3 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">
                          {tContact("form.step1.name")}
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                name: e.target.value,
                              });
                              if (errors.name)
                                setErrors({ ...errors, name: "" });
                            }}
                            className={`w-full bg-white/60 dark:bg-white/5 border ${errors.name
                              ? "border-red-500"
                              : "border-black/5 dark:border-white/10"
                              } rounded-2xl py-3 md:py-4 px-6 text-base text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all duration-300 font-medium`}
                            placeholder={tContact("form.step1.namePlaceholder")}
                          />
                          {errors.name && (
                            <p className="absolute -bottom-5 left-3 text-red-500 font-bold tracking-wide">
                              {errors.name}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2 group">
                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 ml-3 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">
                          {tContact("form.step1.email")}
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              });
                              if (errors.email)
                                setErrors({ ...errors, email: "" });
                            }}
                            className={`w-full bg-white/60 dark:bg-white/5 border ${errors.email
                              ? "border-red-500"
                              : "border-black/5 dark:border-white/10"
                              } rounded-2xl py-3 md:py-4 px-6 text-base text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all duration-300 font-medium`}
                            placeholder={tContact("form.step1.emailPlaceholder")}
                          />
                          {errors.email && (
                            <p className="absolute -bottom-5 left-3 text-red-500 font-bold tracking-wide">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* PHONE & COMPANY ROW */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                      {/* CUSTOM PHONE INPUT WITH COUNTRY SELECTOR */}
                      <div className="space-y-2 group relative z-50">
                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 ml-3 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">
                          {tContact("form.step1.phone")}
                        </label>
                        <div className="relative flex">
                          {/* Country Dropdown Trigger */}
                          <div className="relative" ref={countryDropdownRef}>
                            <button
                              type="button"
                              onClick={() =>
                                setIsCountryDropdownOpen(!isCountryDropdownOpen)
                              }
                              className={`
                                                flex items-center gap-2 h-full px-3 md:px-4 rounded-l-2xl border-y border-l bg-white/60 dark:bg-white/5
                                                ${errors.phone
                                  ? "border-red-500"
                                  : "border-black/5 dark:border-white/10"
                                }
                                                hover:bg-white/80 dark:hover:bg-white/10 transition-colors
                                            `}
                            >
                              <span className="text-sm font-bold text-black dark:text-white">
                                {countryCode.code}
                              </span>
                              <ChevronDown
                                size={12}
                                className={`text-gray-500 transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""
                                  }`}
                              />
                            </button>

                            {/* Dropdown Menu */}
                            <div
                              className={`
                                            absolute top-full left-0 mt-2 w-48 max-h-60 overflow-y-auto
                                            bg-white dark:bg-[#111] border border-black/5 dark:border-white/10
                                            rounded-xl shadow-xl z-[60]
                                            transition-all duration-200 origin-top-left
                                            ${isCountryDropdownOpen
                                  ? "opacity-100 scale-100"
                                  : "opacity-0 scale-95 pointer-events-none"
                                }
                                        `}
                            >
                              {COUNTRY_CODES.map((item) => (
                                <div
                                  key={item.country}
                                  onClick={() => {
                                    setCountryCode(item);
                                    setIsCountryDropdownOpen(false);
                                  }}
                                  className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between group/item"
                                >
                                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/item:text-black dark:group-hover/item:text-white">
                                    {item.label}
                                  </span>
                                  <span className="text-xs font-bold text-gray-400 group-hover/item:text-black dark:group-hover/item:text-white">
                                    {item.code}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Number Input */}
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => {
                              // Only allow numbers
                              const val = e.target.value.replace(/[^0-9]/g, "");
                              setFormData({ ...formData, phone: val });
                              if (errors.phone)
                                setErrors({ ...errors, phone: "" });
                            }}
                            className={`
                                            flex-1 bg-white/60 dark:bg-white/5 border-y border-r rounded-r-2xl py-3 md:py-4 px-6 text-base text-black dark:text-white placeholder-gray-400
                                            focus:outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all duration-300 font-medium
                                            ${errors.phone
                                ? "border-red-500"
                                : "border-black/5 dark:border-white/10 border-l-0"
                              }
                                        `}
                            placeholder={tContact("form.step1.phonePlaceholder")}
                          />
                          {errors.phone && (
                            <p className="absolute -bottom-5 left-3 text-red-500 font-bold tracking-wide">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2 group">
                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 ml-3 group-focus-within:text-black dark:group-focus-within:text-white transition-colors">
                          {tContact("form.step1.company")}
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={formData.project}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                project: e.target.value,
                              })
                            }
                            className="w-full bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-3 md:py-4 px-6 text-base text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all duration-300 font-medium"
                            placeholder={tContact("form.step1.companyPlaceholder")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 mt-auto flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="group bg-black dark:bg-white text-white dark:text-black px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black uppercase tracking-wider flex items-center gap-3 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-[1.02]"
                      >
                        <span className="relative z-10 text-xs md:text-sm">
                          {tContact("form.step1.next")}
                        </span>
                        <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* STEP 2: PROJECT DETAILS */}
                <div
                  className={`
                    absolute inset-0 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${step === 2
                      ? "opacity-100 translate-x-0 z-10 relative"
                      : "opacity-0 translate-x-10 pointer-events-none absolute"
                    }
                `}
                >
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-xl md:text-3xl font-black text-black dark:text-white mb-2 flex items-center gap-3 tracking-tight">
                      <Zap
                        size={20}
                        className="md:w-6 md:h-6 text-black dark:text-white"
                      />{" "}
                      {tContact("form.step2.title")}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      {tContact("form.step2.subtitle")}
                    </p>
                  </div>

                  <div className="space-y-6 md:space-y-8 flex-1">
                    {/* Services */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 ml-1">
                        {tContact("form.step2.services")}
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {SERVICE_OPTIONS.slice(0, 8).map((service) => (
                          <div
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`
                                    cursor-pointer p-3 sm:p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden
                                    ${formData.services.includes(service)
                                ? "bg-black dark:bg-white text-white dark:text-black border-transparent shadow-lg transform scale-[1.02]"
                                : "bg-white/60 dark:bg-white/5 border-black/5 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-gray-600 dark:text-gray-400"
                              }
                                    `}
                          >
                            <span className="font-bold text-[11px] sm:text-xs relative z-10">
                              {service}
                            </span>
                            {formData.services.includes(service) && (
                              <CheckCircle2
                                size={14}
                                className="text-white dark:text-black relative z-10"
                              />
                            )}
                          </div>
                        ))}
                        {/* Custom Input trigger */}
                        <div
                          onClick={() =>
                            setFormData({
                              ...formData,
                              otherService: formData.otherService
                                ? ""
                                : "Autre",
                            })
                          }
                          className={`
                                    cursor-pointer p-3 sm:p-4 rounded-xl border transition-all duration-300 flex items-center justify-center text-center
                                    ${formData.otherService !== ""
                              ? "bg-black dark:bg-white text-white dark:text-black border-transparent"
                              : "bg-white/60 dark:bg-white/5 border-dashed border-black/10 dark:border-white/20 hover:border-black/30 dark:hover:border-white/30 text-gray-500"
                            }
                                `}
                        >
                          <span className="font-bold text-[11px] sm:text-xs">
                            {tContact("form.options.services.other")}
                          </span>
                        </div>
                      </div>

                      {formData.otherService !== "" && (
                        <input
                          type="text"
                          value={
                            formData.otherService === "Autre"
                              ? ""
                              : formData.otherService
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              otherService: e.target.value,
                            })
                          }
                          placeholder={tContact("form.step2.otherPlaceholder")}
                          className="w-full mt-2 bg-transparent border-b-2 border-black dark:border-white py-2 px-1 text-black dark:text-white font-medium focus:outline-none"
                          autoFocus
                        />
                      )}
                      {errors.services && (
                        <p className="text-red-500 text-[10px] font-bold tracking-wide animate-pulse">
                          {errors.services}
                        </p>
                      )}
                    </div>

                    {/* Budget & Timeline Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      {/* Budget */}
                      <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 ml-1">
                          {tContact("form.step2.budget")}
                        </label>
                        <div className="flex flex-col gap-2">
                          {BUDGET_OPTIONS.slice(0, 4).map((budget) => (
                            <label
                              key={budget}
                              className="flex items-center gap-3 cursor-pointer group"
                            >
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${formData.budget === budget
                                  ? "border-black dark:border-white"
                                  : "border-gray-300 dark:border-white/20"
                                  }`}
                              >
                                {formData.budget === budget && (
                                  <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                                )}
                              </div>
                              <input
                                type="radio"
                                name="budget"
                                className="hidden"
                                onClick={() => {
                                  setFormData({ ...formData, budget });
                                  if (errors.budget)
                                    setErrors({ ...errors, budget: "" });
                                }}
                              />
                              <span
                                className={`text-xs md:text-sm font-medium transition-colors ${formData.budget === budget
                                  ? "text-black dark:text-white font-bold"
                                  : "text-gray-500"
                                  }`}
                              >
                                {budget}
                              </span>
                            </label>
                          ))}
                        </div>
                        {errors.budget && (
                          <p className="text-red-500 text-[10px] font-bold tracking-wide">
                            {errors.budget}
                          </p>
                        )}
                      </div>

                      {/* Timeline */}
                      <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 ml-1 flex items-center gap-2">
                          <Calendar size={12} /> {tContact("form.step2.deadline")}
                        </label>
                        <div className="grid grid-cols-1 gap-2">
                          {TIMELINE_OPTIONS.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, startDate: time });
                                if (errors.startDate)
                                  setErrors({ ...errors, startDate: "" });
                              }}
                              className={`
                                                px-4 py-3 rounded-xl text-xs md:text-sm font-bold border text-left transition-all duration-200
                                                ${formData.startDate === time
                                  ? "bg-black/5 dark:bg-white/10 border-black dark:border-white text-black dark:text-white shadow-inner"
                                  : "bg-white/60 dark:bg-white/5 border-black/5 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-white/80 dark:hover:bg-white/10"
                                }
                                            `}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                        {errors.startDate && (
                          <p className="text-red-500 text-[10px] font-bold tracking-wide">
                            {errors.startDate}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 ml-1 flex items-center gap-2">
                        <MessageSquare size={12} /> {tContact("form.step2.description")}
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        rows={3}
                        className="w-full bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-3 md:py-4 px-6 text-base text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all duration-300 font-medium resize-none"
                        placeholder={tContact("form.step2.descriptionPlaceholder")}
                      />
                    </div>

                    {/* Actions */}
                    <div className="pt-8 mt-auto flex items-center justify-between border-t border-black/5 dark:border-white/5">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-4 md:px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-[10px] md:text-xs text-gray-400 hover:text-black dark:hover:text-white flex items-center gap-2 transition-colors hover:bg-gray-100 dark:hover:bg-white/5"
                      >
                        <ArrowLeft size={14} /> {tContact("form.step2.back")}
                      </button>

                      <button
                        ref={buttonRef}
                        type="submit"
                        disabled={isSubmitting}
                        className="group bg-black dark:bg-white text-white dark:text-black px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black uppercase tracking-wider flex items-center gap-3 shadow-xl disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-2xl hover:-translate-y-1 transition-all"
                      >
                        <span className="relative z-10 text-xs md:text-sm">
                          {isSubmitting ? tContact("form.step2.sending") : tContact("form.step2.submit")}
                        </span>
                        {isSubmitting ? (
                          <Loader2 className="relative z-10 w-4 h-4 animate-spin" />
                        ) : (
                          <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
