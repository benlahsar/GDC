"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Palette,
  Sparkles,
  Target,
  ArrowRight,
  Zap,
  MapPin,
  Award,
  Eye,
  Rocket,
  CheckCircle2,
  Tag,
  Database,
  UserCheck,
  Key,
  Activity,
  TrendingUp,
  ShieldCheck,
  MousePointer2,
  Globe,
  Search,
  PieChart,
  Users,
  CheckCircle,
  Smartphone,
  Play,
  BarChart3,
  Star,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  ClipboardCheck,
  Quote,
  HelpCircle,
  Plus,
  Minus,
  User,
  Mail,
  Building2,
  Phone,
  Check,
  ArrowLeft,
  Send,
  MessageSquare,
  DollarSign,
  Loader2,
  ChevronDown,
  Lightbulb,
} from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { useTranslations } from "next-intl";

export const VisualIdentityPage: React.FC = () => {
  const t = useTranslations("VisualIdentityPage");

  const COUNTRY_CODES = [
    { code: "+212", country: "MA", label: t("countries.MA") },
    { code: "+33", country: "FR", label: t("countries.FR") },
    { code: "+1", country: "US", label: t("countries.US") },
    { code: "+44", country: "UK", label: t("countries.UK") },
  ];

  const EMPLOYEES = ["1-10", "11-50", "51-200", "+200"];

  const SERVICES = [
    {
      id: "identite",
      label: t("contact.form.services.0.label"),
      icon: Palette,
    },
    { id: "logo", label: t("contact.form.services.1.label"), icon: Sparkles },
    { id: "web", label: t("contact.form.services.2.label"), icon: Globe },
    { id: "social", label: t("contact.form.services.3.label"), icon: Search },
    { id: "ads", label: t("contact.form.services.4.label"), icon: Zap },
    { id: "other", label: t("contact.form.services.5.label"), icon: Plus },
  ];

  const BUDGETS = t.raw("contact.form.budgets") as string[];

  const METHODOLOGY_ICON_MAP: Record<string, any> = {
    "01": Users,
    "02": Search,
    "03": ClipboardCheck,
    "04": Activity,
  };

  const METHODOLOGY_ARROW_MAP: Record<string, any> = {
    "01": ArrowUpRight,
    "02": ArrowDownRight,
    "03": ArrowUpRight,
    "04": ArrowDownRight,
  };

  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    window.scrollTo(0, 0);
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

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const TESTIMONIALS_DATA = t.raw("testimonials.items") as any[];

  const METHODOLOGY_STEPS = (t.raw("methodology.steps") as any[]).map(
    (step) => ({
      ...step,
      icon: METHODOLOGY_ICON_MAP[step.id] || Users,
      arrow: METHODOLOGY_ARROW_MAP[step.id] || ArrowUpRight,
    })
  );

  return (
    <div className="relative w-full min-h-screen bg-[#F4F4F5] dark:bg-[#000000] transition-colors duration-500 overflow-x-hidden selection:bg-brand-red selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 md:pt-48 lg:pt-56 pb-20 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className={`absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-red/[0.05] rounded-full blur-[120px] ${
              isMobile ? "" : "animate-blob"
            }`}
          ></div>
          <div
            className={`absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[120px] ${
              isMobile ? "" : "animate-blob animation-delay-2000"
            }`}
          ></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-30"></div>
        </div>

        <div className="relative z-10 flex flex-col gap-12 lg:gap-16">
          <div className="relative rounded-[40px] md:rounded-[60px] bg-white/40 dark:bg-[#0A0A0A]/40 backdrop-blur-[40px] saturate-150 border border-white/60 dark:border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative bg-[#F8F8FA] dark:bg-[#050505] p-10 md:p-14 flex items-center justify-center min-h-[400px] md:min-h-[500px] border-b lg:border-b-0 lg:border-r border-black/5 dark:border-white/5">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative z-10 w-full max-w-sm group/mockup">
                  <div
                    className={`relative rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 ${
                      isMobile ? "" : "group-hover/mockup:scale-[1.02]"
                    } bg-white dark:bg-black p-1.5 border border-black/5 dark:border-white/10`}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2671&auto=format&fit=crop"
                      alt="Visual Identity Mockup"
                      className="w-full h-auto rounded-[1.8rem] opacity-90 dark:opacity-75"
                    />
                  </div>
                  <div
                    className={`absolute -top-6 -right-6 px-4 py-2 bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-2xl shadow-xl flex items-center gap-3 ${
                      isMobile ? "" : "animate-float"
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_8px_red]"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white">
                      {t("hero.precision")}
                    </span>
                  </div>
                  <div
                    className={`absolute -bottom-4 -left-6 px-4 py-2 bg-black/40 dark:bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl flex items-center gap-3 ${
                      isMobile ? "" : "animate-float"
                    }`}
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">
                      {t("hero.innovation")}
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 p-10 md:p-14 lg:p-20 flex flex-col justify-center">
                <div
                  className={`inline-flex items-center gap-2 text-brand-red mb-8 ${
                    isMobile ? "" : "opacity-0 animate-fade-in-up"
                  }`}
                >
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] bg-brand-red/10 px-3 py-1 rounded-full border border-brand-red/20">
                    {t("hero.badge")}
                  </span>
                  <div className="h-px w-8 bg-brand-red/30"></div>
                  <span className="text-[10px] md:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">
                    {t("hero.subtitle")}
                  </span>
                </div>
                <h1
                  className={`text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-black dark:text-white mb-10 uppercase ${
                    isMobile ? "" : "opacity-0 animate-fade-in-up"
                  }`}
                  style={{ animationDelay: "200ms" }}
                  dangerouslySetInnerHTML={{
                    __html: t.raw("hero.title").replace(/{br}/g, "<br/>"),
                  }}
                />
                <div
                  className={`space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mb-12 border-l-4 border-brand-red pl-8 ${
                    isMobile ? "" : "opacity-0 animate-fade-in-up"
                  }`}
                  style={{ animationDelay: "400ms" }}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t.raw("hero.description"),
                    }}
                  />
                </div>
                <div
                  className={`grid grid-cols-2 sm:grid-cols-5 gap-6 md:gap-8 pt-8 border-t border-black/5 dark:border-white/10 ${
                    isMobile ? "" : "opacity-0 animate-enter-bottom"
                  }`}
                  style={{ animationDelay: "600ms" }}
                >
                  {(t.raw("hero.features") as string[]).map((label, i) => {
                    const icons = [MapPin, Palette, Target, Globe, Award];
                    const Icon = icons[i] || MapPin;
                    return (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center gap-3 group/icon"
                      >
                        <div
                          className={`w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-black dark:text-white transition-all duration-300 border border-transparent ${
                            isMobile
                              ? ""
                              : "group-hover/icon:bg-brand-red group-hover/icon:text-white group-hover/icon:border-brand-red/20"
                          } shadow-sm`}
                        >
                          <Icon size={22} strokeWidth={1.5} />
                        </div>
                        <span
                          className={`text-[8px] md:text-[9px] font-black uppercase tracking-tight text-gray-500 leading-tight ${
                            isMobile
                              ? ""
                              : "group-hover/icon:text-black dark:group-hover/icon:text-white"
                          } transition-colors`}
                        >
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-8">
            {(t.raw("stats") as any[]).map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center md:items-start group/stat ${
                  isMobile ? "" : "opacity-0 animate-enter-bottom"
                }`}
                style={{ animationDelay: `${800 + i * 100}ms` }}
              >
                <div className="flex items-baseline gap-2">
                  {stat.valueText ? (
                    <span className="text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter">
                      {stat.valueText}
                    </span>
                  ) : (
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter"
                    />
                  )}
                </div>
                <p
                  className={`text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-gray-400 ${
                    isMobile ? "" : "group-hover/stat:text-brand-red"
                  } transition-colors`}
                  dangerouslySetInnerHTML={{
                    __html: stat.label.replace(/{br}/g, "<br/>"),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- METHODOLOGY --- */}
      <section className="relative py-24 md:py-32 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto overflow-hidden border-t border-black/5 dark:border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div
            className={`lg:col-span-5 lg:sticky lg:top-32 ${
              isMobile ? "" : "opacity-0 animate-enter-left"
            }`}
          >
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-black dark:text-white uppercase mb-8"
              dangerouslySetInnerHTML={{
                __html: t.raw("methodology.title").replace(/{br}/g, "<br/>"),
              }}
            />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6">
            {METHODOLOGY_STEPS.map((step, index) => (
              <div
                key={step.id}
                className={`group relative overflow-hidden rounded-[40px] p-8 md:p-12 bg-white/40 dark:bg-[#0A0A0A]/40 backdrop-blur-xl border border-black/5 dark:border-white/10 transition-all duration-500 ease-out ${
                  isMobile
                    ? ""
                    : "hover:shadow-2xl hover:-translate-y-1 hover:border-brand-red/30 opacity-0 animate-fade-in-up"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-6">
                      <span
                        className={`text-4xl font-black text-black/5 dark:text-white/5 font-mono ${
                          isMobile ? "" : "group-hover:text-brand-red/20"
                        } transition-colors`}
                      >
                        {step.id}
                      </span>
                      <h3
                        className={`text-2xl md:text-3xl font-black text-black dark:text-white ${
                          isMobile ? "" : "group-hover:text-brand-red"
                        } transition-colors`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className={`text-base md:text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl border-l-2 border-brand-red/20 pl-6 ${
                        isMobile ? "" : "group-hover:border-brand-red"
                      } transition-all duration-500`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="relative py-24 md:py-32 bg-transparent overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-500">
        <div
          className={`relative z-10 flex flex-col items-center text-center mb-16 ${
            isMobile ? "" : "opacity-0 animate-enter-bottom"
          }`}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black dark:text-white uppercase leading-[0.9] max-w-5xl">
            {t("testimonials.title")}
          </h2>
          <span className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-brand-red uppercase">
            {t("testimonials.subtitle")}
          </span>
        </div>
        <div className="relative w-full overflow-hidden py-12 group/marquee">
          <div
            className="flex animate-scroll hover:[animation-play-state:paused] gap-8 px-8 w-max"
            style={{
              animationDirection: "reverse",
              animationDuration: isMobile ? "30s" : "50s",
            }}
          >
            {[
              ...TESTIMONIALS_DATA,
              ...TESTIMONIALS_DATA,
              ...TESTIMONIALS_DATA,
            ].map((item, index) => (
              <div
                key={index}
                className={`w-[320px] md:w-[450px] shrink-0 group relative flex flex-col justify-between p-8 md:p-10 rounded-[40px] bg-white/70 dark:bg-[#0A0A0A]/80 backdrop-blur-2xl saturate-150 border border-black/5 dark:border-white/10 ${
                  isMobile ? "" : "hover:border-brand-red/30"
                } transition-all duration-500 shadow-xl ${
                  isMobile ? "" : "hover:shadow-2xl hover:-translate-y-1"
                }`}
              >
                <div className="relative z-10">
                  <div className="mb-6">
                    <h4 className="text-xl md:text-2xl font-black text-black dark:text-white leading-tight mb-1">
                      {item.name}
                    </h4>
                    <p className="text-[11px] font-black uppercase tracking-widest text-brand-red">
                      {item.role}
                    </p>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-8 text-justify">
                    "{item.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section
        id="faq-section"
        className="relative py-24 md:py-32 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto overflow-hidden border-t border-black/5 dark:border-white/5"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-red/[0.02] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/[0.02] rounded-full blur-[120px]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
                <HelpCircle
                  size={14}
                  className="text-brand-red animate-pulse"
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
                  {t("faq.badge")}
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-black dark:text-white uppercase"
                dangerouslySetInnerHTML={{
                  __html: t.raw("faq.title").replace(/{br}/g, "<br/>"),
                }}
              />
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-md">
                {t("faq.description")}
              </p>
              <div className="relative pt-10 hidden lg:block">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-[2px] bg-gradient-to-r from-brand-red to-transparent"></div>
                <Sparkles className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-red -ml-4 animate-pulse" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4">
            {(t.raw("faq.items") as any[]).map((faq, index) => (
              <div
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`group relative rounded-[24px] transition-all duration-500 cursor-pointer overflow-hidden ${
                  openIndex === index
                    ? "bg-white/80 dark:bg-[#0A0A0A]/90 backdrop-blur-2xl shadow-2xl scale-[1.01] z-10 border-brand-red/30"
                    : "bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 border-transparent"
                } border`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <h3
                      className={`text-lg md:text-xl font-bold leading-tight transition-colors duration-300 ${
                        openIndex === index
                          ? "text-brand-red"
                          : "text-black dark:text-white group-hover:text-black/80 dark:group-hover:text-white/80"
                      } ${faq.isHighlighted ? "text-brand-red" : ""}`}
                    >
                      {faq.question}
                    </h3>
                    <div
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${
                        openIndex === index
                          ? "bg-brand-red border-brand-red text-white rotate-0"
                          : "border-black/10 dark:border-white/10 text-gray-400 dark:text-gray-500 group-hover:border-black dark:group-hover:border-white"
                      }`}
                    >
                      {openIndex === index ? (
                        <ArrowUpRight size={16} />
                      ) : (
                        <ArrowRight size={16} className="rotate-45" />
                      )}
                    </div>
                  </div>
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      openIndex === index
                        ? "grid-rows-[1fr] opacity-100 mt-6"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="w-full h-[1px] bg-black/5 dark:bg-white/5 mb-6"></div>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed flex gap-3">
                        <span className="text-brand-red font-bold">→</span>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT FORM SECTION --- */}
      <section
        id="visual-identity-contact"
        className="relative py-24 md:py-32 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5"
      >
        {/* Background Decor */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-red/[0.04] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3`}
          ></div>
          <div
            className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/[0.02] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4`}
          ></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
          {/* LEFT CONTENT AREA */}
          <div className={`space-y-10 ${isMobile ? "" : "animate-enter-left"}`}>
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-brand-red to-transparent rounded-full"></div>
                  <Sparkles
                    className={`text-brand-red ml-[-8px] ${
                      isMobile ? "" : "animate-pulse"
                    }`}
                    size={24}
                  />
                </div>
                <div className="w-4 h-4 rounded-full border border-brand-red flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_8px_red]"></div>
                </div>
              </div>

              <h2
                className="text-4xl md:text-6xl lg:text-[5rem] font-black tracking-tighter leading-[0.95] text-black dark:text-white uppercase transition-colors duration-500"
                dangerouslySetInnerHTML={{
                  __html: t.raw("contact.title").replace(/{br}/g, "<br/>"),
                }}
              />
            </div>

            <div className="space-y-8 text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
              <p>{t("contact.p1")}</p>
              <p>{t("contact.p2")}</p>
            </div>

            <div className="pt-8 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full border-4 border-[#F4F4F5] dark:border-[#000] bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-xl"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Expert"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-14 h-14 rounded-full border-4 border-[#F4F4F5] dark:border-[#000] bg-brand-red flex items-center justify-center text-white text-xs font-black shadow-xl">
                  +50
                </div>
              </div>
              <div>
                <p className="text-sm font-black text-black dark:text-white uppercase tracking-widest">
                  {t("contact.satisfied_clients")}
                </p>
                <div className="flex gap-1 mt-1 text-brand-red">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div
            className={`relative group/card ${
              isMobile ? "" : "animate-enter-right delay-200"
            }`}
          >
            <div
              className={`absolute -inset-2 bg-gradient-to-br from-brand-red/10 to-blue-600/5 rounded-[45px] blur-3xl opacity-50 ${
                isMobile
                  ? ""
                  : "group-hover:opacity-80 transition-opacity duration-1000"
              }`}
            ></div>

            <div className="relative rounded-[40px] bg-white/70 dark:bg-[#080808]/90 backdrop-blur-3xl saturate-150 border border-white/60 dark:border-white/10 shadow-2xl overflow-hidden transition-all duration-500">
              <div className="p-8 md:p-12 pb-0">
                <div className="flex items-center justify-between relative px-2 mb-12">
                  <div className="absolute top-4 left-0 w-full h-[1px] bg-black/10 dark:bg-white/10 -z-0"></div>
                  <div
                    className={`absolute top-4 left-0 h-[1px] bg-brand-red transition-all duration-700 ease-in-out z-0`}
                    style={{ width: `${((step - 1) / 2) * 100}%` }}
                  ></div>

                  {(t.raw("contact.form.stepper") as any[]).map((s) => {
                    const isActive = step === s.id;
                    const isCompleted = step > s.id;
                    return (
                      <div
                        key={s.id}
                        className="relative z-10 flex flex-col items-center gap-4 bg-white dark:bg-[#080808] px-2 transition-colors duration-500"
                      >
                        <div
                          className={`
                                  w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-500
                                  ${
                                    isActive || isCompleted
                                      ? "bg-brand-red border-brand-red text-white scale-110 shadow-lg"
                                      : "bg-[#CFCFD1] dark:bg-[#333] border-transparent text-white"
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
                          className={`text-[11px] font-bold text-center whitespace-nowrap transition-colors ${
                            isActive
                              ? "text-black dark:text-white"
                              : "text-gray-400 dark:text-gray-500"
                          }`}
                        >
                          {s.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-8 md:p-12 pt-4">
                {isSuccess ? (
                  <div
                    className={`py-20 flex flex-col items-center text-center ${
                      isMobile ? "" : "animate-enter-zoom"
                    }`}
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                      <CheckCircle2 size={40} className="text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-black text-black dark:text-white mb-4">
                      {t("contact.form.success.title")}
                    </h3>
                    <p
                      className="text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: t
                          .raw("contact.form.success.text")
                          .replace(/{br}/g, "<br/>"),
                      }}
                    />
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setStep(1);
                      }}
                      className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-lg"
                    >
                      {t("contact.form.success.button")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="min-h-[380px] relative">
                      <div
                        className={`transition-all duration-500 ease-in-out flex flex-col gap-5 ${
                          step === 1
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10 absolute inset-0 pointer-events-none"
                        }`}
                      >
                        <div className="space-y-4">
                          <div className="relative">
                            <User
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              type="text"
                              placeholder={t("contact.form.fields.name")}
                              required
                              className="w-full bg-transparent border border-black/20 dark:border-white/10 rounded-xl pl-12 pr-5 py-4 text-black dark:text-white placeholder-gray-400 focus:border-brand-red focus:outline-none transition-all shadow-inner"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="relative">
                            <Mail
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              type="email"
                              placeholder={t("contact.form.fields.email")}
                              required
                              className="w-full bg-transparent border border-black/20 dark:border-white/10 rounded-xl pl-12 pr-5 py-4 text-black dark:text-white placeholder-gray-400 focus:border-brand-red focus:outline-none transition-all shadow-inner"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="relative">
                            <Building2
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <input
                              type="text"
                              placeholder={t("contact.form.fields.company")}
                              className="w-full bg-transparent border border-black/20 dark:border-white/10 rounded-xl pl-12 pr-5 py-4 text-black dark:text-white placeholder-gray-400 focus:border-brand-red focus:outline-none transition-all shadow-inner"
                              value={formData.company}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  company: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1 flex items-center gap-1">
                              {t("contact.form.fields.employees")}{" "}
                              <span className="text-brand-red">*</span>
                            </label>
                            <div className="relative">
                              <select
                                className="w-full bg-transparent border border-black/20 dark:border-white/10 rounded-xl px-5 py-4 text-black dark:text-white focus:border-brand-red focus:outline-none cursor-pointer appearance-none shadow-inner"
                                value={formData.employees}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    employees: e.target.value,
                                  })
                                }
                              >
                                {EMPLOYEES.map((opt) => (
                                  <option
                                    key={opt}
                                    value={opt}
                                    className="text-black"
                                  >
                                    {opt}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                                size={18}
                              />
                            </div>
                          </div>
                          <div
                            className="flex relative"
                            ref={countryRef}
                            onClick={() => setIsCountryOpen(!isCountryOpen)}
                          >
                            <div className="flex items-center gap-2 px-3 border border-black/20 dark:border-white/10 border-r-0 rounded-l-xl bg-gray-50 dark:bg-white/5 cursor-pointer">
                              <span className="text-base">
                                {selectedCountry.country === "MA"
                                  ? "🇲🇦"
                                  : selectedCountry.country === "FR"
                                  ? "🇫🇷"
                                  : selectedCountry.country === "US"
                                  ? "🇺🇸"
                                  : "🇬🇧"}
                              </span>
                              <ChevronDown
                                size={14}
                                className="text-gray-500"
                              />
                            </div>
                            <input
                              type="tel"
                              placeholder={t("contact.form.fields.phone")}
                              required
                              className="flex-1 bg-transparent border border-black/20 dark:border-white/10 rounded-r-xl px-5 py-4 text-black dark:text-white placeholder-gray-400 focus:border-brand-red focus:outline-none transition-all shadow-inner"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                            />
                            {isCountryOpen && (
                              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-xl shadow-2xl z-[100] overflow-hidden">
                                {COUNTRY_CODES.map((c) => (
                                  <div
                                    key={c.code}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedCountry(c);
                                      setIsCountryOpen(false);
                                    }}
                                    className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer flex items-center justify-between transition-colors"
                                  >
                                    <span className="text-sm font-bold">
                                      {c.label}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                      {c.code}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col gap-6 ${
                          step === 2
                            ? "opacity-100 translate-y-0 z-10"
                            : "opacity-0 translate-y-10 absolute inset-0 pointer-events-none"
                        }`}
                      >
                        <h3 className="text-xl font-bold uppercase tracking-tight">
                          {t("contact.form.fields.needs")}
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {SERVICES.map((s) => (
                            <div
                              key={s.id}
                              onClick={() => toggleService(s.id)}
                              className={`p-6 rounded-2xl border cursor-pointer transition-all flex flex-col items-center gap-3 ${
                                formData.services.includes(s.id)
                                  ? "bg-brand-red border-brand-red text-white"
                                  : "bg-[#CFCFD1] dark:bg-black border-black/10 dark:border-white/10 text-gray-500 hover:border-brand-red/30"
                              }`}
                            >
                              <s.icon size={24} />
                              <span className="font-bold text-xs uppercase text-center leading-tight">
                                {s.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div
                        className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col gap-6 ${
                          step === 3
                            ? "opacity-100 translate-y-0 z-10"
                            : "opacity-0 translate-y-10 absolute inset-0 pointer-events-none"
                        }`}
                      >
                        <div className="flex items-center gap-2 text-brand-red mb-2">
                          <MessageSquare size={20} />
                          <h3 className="text-xl font-bold uppercase tracking-tight">
                            {t("contact.form.fields.project")}
                          </h3>
                        </div>
                        <div className="space-y-4">
                          <textarea
                            className="w-full h-48 bg-transparent border border-black/20 dark:border-white/10 rounded-2xl p-6 text-black dark:text-white focus:border-emerald-500 focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all resize-none shadow-inner"
                            placeholder={t(
                              "contact.form.fields.placeholder_details"
                            )}
                            value={formData.details}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                details: e.target.value,
                              })
                            }
                          ></textarea>
                          <div className="relative">
                            <DollarSign
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                              size={18}
                            />
                            <select
                              value={formData.budget}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  budget: e.target.value,
                                })
                              }
                              className="w-full bg-transparent border border-black/20 dark:border-white/10 rounded-xl pl-12 pr-5 py-4 text-black dark:text-white appearance-none focus:border-brand-red focus:outline-none cursor-pointer shadow-inner"
                            >
                              <option value="">
                                {t("contact.form.fields.placeholder_budget")}
                              </option>
                              {BUDGETS.map((b) => (
                                <option
                                  key={b}
                                  value={b}
                                  className="text-black"
                                >
                                  {b}
                                </option>
                              ))}
                            </select>
                            <ChevronDown
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                              size={18}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-black/5 dark:border-white/10 flex justify-between items-center">
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={handleBack}
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                        >
                          <ArrowLeft size={16} />{" "}
                          {t("contact.form.buttons.back")}
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={step === 3 ? handleSubmit : handleNext}
                        disabled={isSubmitting}
                        className="group flex-1 ml-auto max-w-[200px] py-5 bg-[#EE4242] hover:bg-[#D43A3A] text-white rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-xl hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <Loader2 className="animate-spin" size={18} />
                        ) : (
                          <>
                            {step === 3
                              ? t("contact.form.buttons.confirm")
                              : t("contact.form.buttons.next")}
                            {step < 3 && (
                              <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition-transform"
                              />
                            )}
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

      {/* --- ARTISTIC FINAL CTA --- */}
      <section
        id="visual-identity-final-cta"
        className="relative py-24 md:py-32 bg-[#F0F0F2] dark:bg-[#000000] overflow-hidden flex flex-col items-center justify-center transition-colors duration-500"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
        <div className="relative w-full max-w-[1200px] h-[800px] md:h-[900px] flex justify-center items-end">
          <div
            className={`absolute top-0 w-full h-full z-10 pointer-events-none ${
              isMobile ? "opacity-50" : ""
            }`}
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 52% 100%, 48% 100%)" }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-b from-[#ec4899] via-[#a855f7] to-[#6366f1] ${
                isMobile ? "opacity-60" : "opacity-90 animate-pulse-slow"
              }`}
            ></div>
            {!isMobile && (
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                  backgroundSize: "100% 200%",
                  animation: "flowDown 3s linear infinite",
                }}
              ></div>
            )}
          </div>

          <div className="absolute top-[25%] md:top-[28%] z-20 flex flex-col items-center text-center px-4 w-full">
            <div
              className={`mb-8 relative group cursor-pointer ${
                isMobile ? "" : "animate-float"
              }`}
            >
              <div className="absolute inset-0 bg-yellow-400 blur-[50px] opacity-40 group-hover:opacity-80 transition-opacity duration-500 rounded-full"></div>
              <div className="relative w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center shadow-[0_0_30px_rgba(253,224,71,0.6)] group-hover:scale-110 transition-transform duration-300">
                <Lightbulb
                  size={48}
                  className="text-yellow-300 fill-yellow-300/50"
                  strokeWidth={1.5}
                />
              </div>
              <div
                className={`absolute -top-2 -right-2 text-yellow-200 ${
                  isMobile ? "" : "animate-pulse"
                }`}
              >
                <Zap size={24} fill="currentColor" />
              </div>
            </div>

            <h2
              className="text-4xl md:text-6xl lg:text-8xl font-black text-black dark:text-white mb-10 drop-shadow-xl tracking-tighter leading-[0.9]"
              dangerouslySetInnerHTML={{
                __html: t.raw("final_cta.title").replace(/{br}/g, "<br/>"),
              }}
            />

            <a
              href="#contact"
              className="group relative px-10 py-5 md:px-14 md:py-6 bg-[#1e1b4b] hover:bg-[#312e81] text-white rounded-full font-black uppercase tracking-widest text-sm md:text-base shadow-[0_0_40px_rgba(79,70,229,0.6)] hover:shadow-[0_0_60px_rgba(79,70,229,0.8)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 overflow-hidden"
            >
              <span className="relative z-10">{t("final_cta.button")}</span>
              <div
                className={`w-8 h-8 rounded-full bg-white/20 flex items-center justify-center relative z-10 group-hover:bg-white group-hover:text-[#1e1b4b] transition-colors`}
              >
                <ArrowRight
                  size={18}
                  className={`${
                    isMobile ? "" : "group-hover:-rotate-45"
                  } transition-transform duration-300`}
                />
              </div>
              {!isMobile && (
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine"></div>
              )}
            </a>
          </div>

          <div className="relative z-20 w-[260px] md:w-[380px] h-[160px] md:h-[220px] mb-[-20px] md:mb-[-40px]">
            <div className="w-full h-full bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-b-[80px] md:rounded-b-[120px] shadow-[0_0_80px_rgba(34,211,238,0.6)] relative overflow-hidden border-b-4 border-r-4 border-l-4 border-cyan-300/30">
              <div className="absolute top-0 left-0 w-full h-[30px] bg-cyan-300/50 blur-md"></div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white/10 rounded-full blur-sm border border-white/20 flex items-center justify-center">
                <div className="w-12 h-12 bg-cyan-100 rounded-full -translate-x-3 -translate-y-3 blur-[2px]"></div>
              </div>
            </div>
            <div className="absolute -top-10 left-0 w-full h-[70px] bg-gradient-to-r from-cyan-300 to-cyan-500 rounded-[50%] opacity-90 border-t border-white/40 shadow-inner"></div>
          </div>
        </div>

        <style>{`
                    @keyframes flowDown { 0% { background-position: 0% 0%; } 100% { background-position: 0% 100%; } }
                    @keyframes shine { 100% { left: 125%; } }
                    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
                    .animate-float { animation: float 4s ease-in-out infinite; }
                    @keyframes enterZoom { 0% { opacity: 0; transform: scale(0.85) translateY(20px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
                    .animate-enter-zoom { animation: enterZoom 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                `}</style>
      </section>
    </div>
  );
};
