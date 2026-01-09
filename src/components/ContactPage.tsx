"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  Building2,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Sparkles,
  MessageSquare,
  Copy,
  ArrowUpRight,
  Zap,
  Check,
  Loader2,
  Landmark,
  Flag,
} from "lucide-react";

// --- Constants ---
const SERVICES_KEYS = [
  "vitrine",
  "ecommerce",
  "appweb",
  "seo",
  "branding",
  "other",
];

const CONTACT_INFO = {
  address: "Résidence Plateau Bureau Al Amira III, Guéliz, Marrakech",
  phone: "+212 666 37 03 06",
  email: "Groupdigitalconcept@gmail.com",
};

const LOCATIONS = [
  {
    city: "Casablanca",
    labelKey: "headquarters",
    address: "10, Rue Zayd Ibnou Rifaii Maarif, 20160 Casablanca",
    icon: Building2,
    accent: "from-blue-600/20 to-indigo-600/20",
    markerColor: "bg-blue-500",
  },
  {
    city: "Marrakech",
    labelKey: "secondary",
    address:
      "Résidence Plateau Bureau Al Amira III, 4ème étage, Bureau N°35, Av. Yacoub El Mansour, Guéliz, Marrakech",
    icon: MapPin,
    accent: "from-brand-red/20 to-red-900/20",
    markerColor: "bg-brand-red",
    isFeatured: true,
  },
  {
    city: "Neuilly-sur-Seine",
    labelKey: "france",
    address: "20 bis, Rue Louis Philippe, 92200 Neuilly-sur-Seine, France",
    icon: Globe,
    accent: "from-emerald-600/20 to-teal-600/20",
    markerColor: "bg-emerald-500",
  },
];

// --- Components ---

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  isMobile?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hoverEffect = false,
  isMobile = false,
}) => (
  <div
    className={`
    relative overflow-hidden rounded-[30px] 
    bg-white/10 dark:bg-black/40 
    backdrop-blur-[40px] saturate-150
    border border-white/20 dark:border-white/10
    shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
    ${
      !isMobile && hoverEffect
        ? "hover:bg-white/15 dark:hover:bg-black/50 hover:border-white/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
        : ""
    }
    ${className}
  `}
  >
    {/* Noise Texture */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
    {/* Inner Highlight */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50"></div>

    <div className="relative z-10 h-full">{children}</div>
  </div>
);

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isMobile?: boolean;
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({
  children,
  className = "",
  onClick,
  isMobile = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    const rotX = yPct * -15;
    const rotY = xPct * 15;

    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className={`${
        !isMobile ? "[perspective:1000px]" : ""
      } group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        ref={cardRef}
        className={`relative w-full h-full transition-all duration-100 ease-out ${
          !isMobile ? "[transform-style:preserve-3d]" : ""
        }`}
        style={{
          transform:
            !isMobile && isHovered
              ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1)`
              : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        }}
      >
        {/* Card Base (Background & Border) */}
        <div
          className={`absolute inset-0 rounded-[30px] bg-white/10 dark:bg-black/40 backdrop-blur-[40px] saturate-150 border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] ${
            !isMobile ? "[transform-style:preserve-3d]" : ""
          } transition-colors duration-500 group-hover:bg-white/15 dark:group-hover:bg-black/50 ${
            !isMobile ? "group-hover:border-white/30" : ""
          }`}
        >
          {/* Noise */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay rounded-[30px]"></div>
          {/* Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50 rounded-t-[30px]"></div>
        </div>

        {/* Inner Content */}
        <div
          className={`relative z-10 h-full p-6 ${
            !isMobile ? "[transform-style:preserve-3d]" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

import { useTranslations } from "next-intl";

export const ContactPage: React.FC = () => {
  const t = useTranslations("contact");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    services: [] as string[],
    otherService: "",
    details: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  // Background Animation State - ONLY for Desktop
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return; // Prevent state updates on mobile during scroll
    setMousePos({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-[#F0F0F2] dark:bg-[#050505] text-black dark:text-white pt-48 md:pt-64 pb-20 px-4 md:px-8 transition-colors duration-500 overflow-hidden"
    >
      {/* --- DYNAMIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Moving Blobs - Interactive on Desktop, Static on Mobile */}
        <div
          className={`absolute top-0 left-0 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-brand-red/10 rounded-full blur-[120px] ${
            !isMobile
              ? "transition-transform duration-[2000ms] ease-out will-change-transform"
              : "opacity-40"
          }`}
          style={{
            transform: !isMobile
              ? `translate(${mousePos.x * -0.2}%, ${mousePos.y * -0.2}%)`
              : "translate(0,0)",
          }}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] bg-blue-600/10 rounded-full blur-[120px] ${
            !isMobile
              ? "transition-transform duration-[2000ms] ease-out will-change-transform"
              : "opacity-40"
          }`}
          style={{
            transform: !isMobile
              ? `translate(${mousePos.x * 0.2}%, ${mousePos.y * 0.2}%)`
              : "translate(0,0)",
          }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* --- PAGE HEADER --- */}
        <div
          className={`flex flex-col items-center text-center mb-16 ${
            !isMobile ? "opacity-0 animate-fade-in-up" : ""
          }`}
          style={{ animationDelay: "100ms" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
              {t("header.badge")}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-600 dark:from-white dark:to-gray-500">
            {t("header.titlePrefix")} <br className="md:hidden" />
            <span className="text-black dark:text-white">
              {t("header.titleSuffix")}
            </span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
            {t("header.description")}
          </p>
        </div>

        {/* --- MAIN BENTO LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-24">
          {/* LEFT: THE FORM CONSOLE (Col 7) */}
          <div
            className={`lg:col-span-7 ${
              !isMobile ? "opacity-0 animate-enter-left" : ""
            }`}
            style={{ animationDelay: "200ms" }}
          >
            <GlassCard
              isMobile={isMobile}
              className="p-6 md:p-8 flex flex-col gap-8"
            >
              {/* Stepper Header */}
              {!isSuccess && (
                <div className="px-2">
                  <div className="flex justify-between items-start relative">
                    <div className="absolute top-6 left-6 right-6 h-[2px] bg-gray-200 dark:bg-white/10 -z-0">
                      <div
                        className={`h-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                          step === 3 ? "bg-emerald-500" : "bg-brand-red"
                        }`}
                        style={{ width: `${((step - 1) / 2) * 100}%` }}
                      ></div>
                    </div>

                    {[
                      { num: 1, label: t("form.steps.identity"), icon: User },
                      { num: 2, label: t("form.steps.needs"), icon: Zap },
                      {
                        num: 3,
                        label: t("form.steps.message"),
                        icon: MessageSquare,
                      },
                    ].map((s) => {
                      const isActive = step >= s.num;
                      const isCurrent = step === s.num;
                      const isCompleted = step > s.num;

                      const activeColorClass =
                        step === 3
                          ? "bg-emerald-500 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                          : "bg-brand-red border-brand-red text-white shadow-[0_0_20px_rgba(255,0,0,0.4)]";

                      return (
                        <div
                          key={s.num}
                          className="relative z-10 flex flex-col items-center gap-3 group cursor-pointer"
                          onClick={() => {
                            if (step > s.num) setStep(s.num);
                          }}
                        >
                          <div
                            className={`
                                  w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-2
                                  ${
                                    isActive
                                      ? `${activeColorClass} scale-110`
                                      : "bg-white dark:bg-[#151515] border-gray-200 dark:border-white/10 text-gray-400 group-hover:border-brand-red/50 dark:group-hover:border-brand-red/50"
                                  }
                                  ${
                                    isCurrent && !isMobile
                                      ? `ring-4 ${
                                          step === 3
                                            ? "ring-emerald-500/10 dark:ring-emerald-500/20"
                                            : "ring-brand-red/10 dark:ring-brand-red/20"
                                        }`
                                      : ""
                                  }
                                `}
                          >
                            {isCompleted ? (
                              <Check size={18} strokeWidth={3} />
                            ) : (
                              <s.icon size={20} strokeWidth={2} />
                            )}
                          </div>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                              isActive
                                ? "text-black dark:text-white"
                                : "text-gray-400"
                            }`}
                          >
                            {s.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Form Content */}
              <div className="flex-grow relative">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center text-center animate-enter-zoom py-10">
                    <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                      <CheckCircle2 size={48} className="text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                      {t("form.success.title")}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xs mx-auto">
                      {t("form.success.message", { name: formData.name })}
                    </p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setStep(1);
                        setFormData({
                          ...formData,
                          name: "",
                          email: "",
                          details: "",
                          services: [],
                        });
                      }}
                      className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                    >
                      {t("form.success.button")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div>
                      {step === 1 && (
                        <div
                          className={`space-y-4 ${
                            !isMobile ? "animate-fade-in-up" : ""
                          }`}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="group space-y-1">
                              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 ml-3 group-focus-within:text-brand-red transition-colors">
                                {t("form.labels.name")}
                              </label>
                              <div className="relative">
                                <User
                                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-red transition-colors"
                                  size={18}
                                />
                                <input
                                  type="text"
                                  required
                                  autoFocus
                                  value={formData.name}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      name: e.target.value,
                                    })
                                  }
                                  className="w-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-3 pl-12 pr-4 text-black dark:text-white placeholder-gray-400 focus:border-brand-red focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all shadow-sm"
                                  placeholder={t("form.placeholders.name")}
                                />
                              </div>
                            </div>
                            <div className="group space-y-1">
                              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 ml-3 group-focus-within:text-brand-red transition-colors">
                                {t("form.labels.email")}
                              </label>
                              <div className="relative">
                                <Mail
                                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-red transition-colors"
                                  size={18}
                                />
                                <input
                                  type="email"
                                  required
                                  value={formData.email}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      email: e.target.value,
                                    })
                                  }
                                  className="w-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-3 pl-12 pr-4 text-black dark:text-white placeholder-gray-400 focus:border-brand-red focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all shadow-sm"
                                  placeholder={t("form.placeholders.email")}
                                />
                              </div>
                            </div>
                            <div className="group space-y-1">
                              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 ml-3 group-focus-within:text-brand-red transition-colors">
                                {t("form.labels.company")}
                              </label>
                              <div className="relative">
                                <Building2
                                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-red transition-colors"
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
                                  className="w-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-3 pl-12 pr-4 text-black dark:text-white placeholder-gray-400 focus:border-brand-red focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all shadow-sm"
                                  placeholder={t("form.placeholders.company")}
                                />
                              </div>
                            </div>
                            <div className="group space-y-1">
                              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 ml-3 group-focus-within:text-brand-red transition-colors">
                                {t("form.labels.phone")}
                              </label>
                              <div className="relative">
                                <Phone
                                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-red transition-colors"
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
                                  className="w-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl py-3 pl-12 pr-4 text-black dark:text-white placeholder-gray-400 focus:border-brand-red focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all shadow-sm"
                                  placeholder={t("form.placeholders.phone")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className={!isMobile ? "animate-fade-in-up" : ""}>
                          <label className="text-xs font-bold uppercase text-gray-500 mb-6 block ml-1">
                            {t("form.labels.needs")}
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {SERVICES_KEYS.map((srvKey) => {
                              const isSelected =
                                formData.services.includes(srvKey);
                              return (
                                <div
                                  key={srvKey}
                                  onClick={() => toggleService(srvKey)}
                                  className={`
                                               p-4 rounded-xl border cursor-pointer transition-all duration-300 flex items-center justify-between group
                                               ${
                                                 isSelected
                                                   ? "bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/20"
                                                   : "bg-white/50 dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10"
                                               }
                                               ${
                                                 !isMobile
                                                   ? "hover:scale-[1.02]"
                                                   : ""
                                               }
                                            `}
                                >
                                  <span className="font-bold text-xs md:text-sm">
                                    {t(`form.services.${srvKey}`)}
                                  </span>
                                  {isSelected ? (
                                    <CheckCircle2 size={16} />
                                  ) : (
                                    <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-white/20"></div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                          {formData.services.includes("other") && (
                            <div
                              className={`mt-4 ${
                                !isMobile ? "animate-fade-in-up" : ""
                              }`}
                            >
                              <input
                                type="text"
                                value={formData.otherService}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    otherService: e.target.value,
                                  })
                                }
                                className="w-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl py-3 px-4 text-black dark:text-white placeholder-gray-400 focus:border-brand-red focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all shadow-sm text-sm"
                                placeholder={t(
                                  "form.placeholders.otherService"
                                )}
                                autoFocus
                              />
                            </div>
                          )}
                        </div>
                      )}

                      {step === 3 && (
                        <div className={!isMobile ? "animate-fade-in-up" : ""}>
                          <label className="text-xs font-bold uppercase text-gray-500 mb-2 block ml-1">
                            {t("form.labels.message")}
                          </label>
                          <div className="relative">
                            <textarea
                              value={formData.details}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  details: e.target.value,
                                })
                              }
                              className="w-full h-32 bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-5 text-black dark:text-white focus:border-emerald-500 focus:bg-white dark:focus:bg-white/10 focus:outline-none resize-none text-base leading-relaxed transition-all placeholder-gray-400 shadow-sm focus:ring-1 focus:ring-emerald-500"
                              placeholder={t("form.placeholders.message")}
                              autoFocus
                            ></textarea>
                            <MessageSquare
                              className="absolute bottom-4 right-4 text-emerald-500 pointer-events-none opacity-50"
                              size={20}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/5">
                      <div>
                        {step > 1 && (
                          <button
                            type="button"
                            onClick={() => setStep(step - 1)}
                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                          >
                            <ArrowLeft size={14} /> {t("form.buttons.back")}
                          </button>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={
                          step === 3 ? handleSubmit : () => setStep(step + 1)
                        }
                        disabled={isSubmitting}
                        className={`
                                group flex items-center gap-3 px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-lg disabled:opacity-70
                                ${
                                  step === 3
                                    ? "bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-emerald-500/20"
                                    : "bg-black dark:bg-white text-white dark:text-black hover:shadow-brand-red/20"
                                }
                                ${!isMobile ? "hover:scale-105" : ""}
                             `}
                      >
                        {isSubmitting
                          ? t("form.buttons.sending")
                          : step === 3
                          ? t("form.buttons.send")
                          : t("form.buttons.next")}
                        {isSubmitting ? (
                          <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        ) : (
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </GlassCard>
          </div>

          {/* RIGHT: THE INFO STACK (Col 5) */}
          <div
            className={`lg:col-span-5 flex flex-col gap-5 ${
              !isMobile ? "opacity-0 animate-enter-right" : ""
            }`}
            style={{ animationDelay: "400ms" }}
          >
            <GlassCard
              isMobile={isMobile}
              className="h-[260px] group relative overflow-hidden"
              hoverEffect
            >
              <div
                className={`absolute inset-0 z-0 ${
                  !isMobile
                    ? "transition-transform duration-700 group-hover:scale-105"
                    : ""
                }`}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4179.698807969115!2d-8.014760703210465!3d31.63837909999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef883aca855d%3A0x91b51ca1f038c777!2sMajorelle%20centre%20d%20&#39;%20affaires!5e1!3m2!1sfr!2sma!4v1766573686751!5m2!1sfr!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className={`w-full h-full ${
                    !isMobile
                      ? "opacity-70 group-hover:opacity-100 transition-all duration-700"
                      : "opacity-100"
                  }`}
                ></iframe>
              </div>
              <div className="absolute top-4 left-4 z-20">
                <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[8px] font-black text-white uppercase tracking-widest">
                  Majorelle centre d ' affaires
                </div>
              </div>
            </GlassCard>

            <div className="grid grid-cols-1 gap-5">
              <ThreeDCard isMobile={isMobile} className="cursor-pointer">
                <div
                  className="flex flex-col gap-3"
                  style={{ transform: !isMobile ? "translateZ(20px)" : "none" }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    {t("info.directLine")}
                  </p>
                  <div
                    className={`w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red ${
                      !isMobile
                        ? "group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-lg"
                        : ""
                    }`}
                    style={{
                      transform: !isMobile ? "translateZ(30px)" : "none",
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-xl font-black text-black dark:text-white hover:text-brand-red transition-colors block"
                    style={{
                      transform: !isMobile ? "translateZ(10px)" : "none",
                    }}
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </ThreeDCard>

              <ThreeDCard
                isMobile={isMobile}
                className="cursor-pointer"
                onClick={handleCopyEmail}
              >
                <div
                  className="flex flex-col gap-3"
                  style={{ transform: !isMobile ? "translateZ(20px)" : "none" }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    {t("info.emailPro")}
                  </p>
                  <div
                    className={`w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 ${
                      !isMobile
                        ? "group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 cursor-copy shadow-lg"
                        : ""
                    }`}
                    style={{
                      transform: !isMobile ? "translateZ(30px)" : "none",
                    }}
                  >
                    {copied ? <CheckCircle2 size={20} /> : <Mail size={20} />}
                  </div>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm md:base font-bold text-black dark:text-white hover:text-blue-500 transition-colors break-all block leading-tight"
                    style={{
                      transform: !isMobile ? "translateZ(10px)" : "none",
                    }}
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </ThreeDCard>
            </div>

            <GlassCard
              isMobile={isMobile}
              className="p-5 flex justify-between items-center"
              hoverEffect
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                {t("info.followUs")}
              </span>
              <div className="flex gap-2">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`w-9 h-9 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-brand-red transition-all duration-300 ${
                      !isMobile
                        ? "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-110"
                        : ""
                    }`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* --- GLOBAL PRESENCE HUB --- */}
        <div
          className={`mt-24 ${!isMobile ? "opacity-0 animate-fade-in-up" : ""}`}
          style={{ animationDelay: "600ms" }}
        >
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
              <Globe size={14} className="text-brand-red animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
                {t("locations.badge")}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black dark:text-white uppercase mb-4">
              {t("locations.titlePrefix")}{" "}
              <span className="text-brand-red">
                {t("locations.titleSuffix")}
              </span>
            </h2>
            <div className="w-20 h-1 bg-brand-red rounded-full opacity-30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc, idx) => (
              <ThreeDCard isMobile={isMobile} key={idx} className="h-full">
                <div
                  className="flex flex-col h-full gap-8 p-4"
                  style={{ transform: !isMobile ? "translateZ(30px)" : "none" }}
                >
                  <div className="flex justify-between items-start">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl bg-gradient-to-br ${
                        loc.accent
                      } ${
                        !isMobile
                          ? "transform group-hover:rotate-12 transition-transform duration-500"
                          : ""
                      }`}
                    >
                      <loc.icon size={28} strokeWidth={1.5} />
                    </div>
                    {loc.isFeatured && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full">
                        <Sparkles
                          size={10}
                          className="text-brand-red animate-pulse"
                        />
                        <span className="text-[8px] font-black uppercase tracking-widest text-brand-red">
                          {t("locations.localExpert")}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-3xl font-black text-black dark:text-white uppercase tracking-tighter leading-none mb-2">
                        {loc.city}
                      </h3>
                      <p
                        className={`text-[10px] font-black uppercase tracking-[0.3em] ${
                          loc.isFeatured ? "text-brand-red" : "text-gray-500"
                        }`}
                      >
                        {t(`locations.labels.${loc.labelKey}`)}
                      </p>
                    </div>
                    <div className="h-px w-full bg-black/5 dark:bg-white/10"></div>
                    <p className="text-sm font-bold text-gray-600 dark:text-gray-400 leading-relaxed min-h-[60px]">
                      {loc.address}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/5">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${loc.markerColor} animate-pulse`}
                      ></div>
                      <span className="text-[9px] font-black uppercase text-gray-400">
                        {t("locations.operational")}
                      </span>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center ${
                        !isMobile
                          ? "group-hover:bg-brand-red group-hover:text-white group-hover:border-transparent transition-all"
                          : ""
                      }`}
                    >
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
            0% { top: -10%; }
            100% { top: 110%; }
        }
        .animate-scan {
            animation: scan 3s linear infinite;
        }
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};
