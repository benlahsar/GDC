"use client";
import { useTranslations } from "next-intl";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Target,
  Zap,
  Search,
  Instagram,
  Facebook,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  Globe,
  Send,
  Loader2,
  CheckCircle2,
  Crosshair,
  Sparkles,
  MousePointer2,
  Radio,
  Smartphone,
  Rocket,
  Video,
  Camera,
  Layout,
  ChevronDown,
  ChevronRight,
  Database,
  UserCheck,
  ShieldAlert,
  Cpu,
  Activity,
  Users,
  Radar,
  BarChart2,
  TrendingUp,
  Fingerprint,
  Terminal,
  Share2,
  Play,
  ShoppingCart,
  Eye,
  Filter,
  MapPin,
  Palette,
  Check,
  DollarSign,
  User,
  Mail,
  Phone,
  Briefcase,
  ActivitySquare,
  Binary,
  Twitch,
  Ghost,
  MessageCircle,
  BarChart,
  Globe2,
  Network,
  Code,
  Settings2,
  FileText,
  PieChart,
  Award,
  Layers,
  Info,
} from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const TikTokIcon = ({
  size = 20,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const PinterestIcon = ({
  size = 20,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.017 0C5.396 0 0 5.397 0 12.017c0 5.078 3.158 9.412 7.614 11.173-.102-.952-.194-2.413.04-3.452.211-.938 1.36-5.764 1.36-5.764s-.347-.694-.347-1.72c0-1.611.934-2.813 2.096-2.813 0.988 0 1.465.741 1.465 1.63 0 0.993-.632 2.478-.958 3.854-.272 1.15.578 2.088 1.713 2.088 2.057 0 3.64-2.169 3.64-5.297 0-2.769-1.99-4.706-4.832-4.706-3.292 0-5.225 2.469-5.225 5.021 0 0.994.382 2.06.858 2.636.094.114.108.214.08.327-.088.366-.284 1.156-.322 1.312-.05.204-.166.247-.383.147-1.43-.665-2.323-2.756-2.323-4.434 0-3.613 2.625-6.93 7.567-6.93 3.972 0 7.058 2.83 7.058 6.615 0 3.946-2.487 7.124-5.94 7.124-1.16 0-2.25-.602-2.623-1.314l-.715 2.723c-.258.995-.957 2.242-1.424 3.003A12.012 12.012 0 0012.017 24c6.62 0 12.016-5.396 12.016-12.017C24.033 5.397 18.637 0 12.017 0z" />
  </svg>
);

const PLATFORMS_DATA = [
  { id: "google", icon: Search, group: "SEA" },
  { id: "meta", icon: Facebook, group: "SMO" },
  { id: "tiktok", icon: TikTokIcon, group: "SMO" },
  { id: "snap", icon: Ghost, group: "SMO" },
  { id: "linkedin", icon: Radio, group: "B2B" },
  { id: "pinterest", icon: PinterestIcon, group: "SMO" },
  { id: "twitch", icon: Twitch, group: "Video" },
  { id: "reddit", icon: MessageCircle, group: "Niche" },
];

const OBJECTIVES_DATA = [
  { id: "sales", icon: ShoppingCart },
  { id: "leads", icon: Target },
  { id: "traffic", icon: Globe2 },
  { id: "notoriety", icon: Award },
  { id: "retarget", icon: Radar },
  { id: "app", icon: Smartphone },
];

const TRACKING_TOOLS_DATA = [
  "Pixel Standard",
  "API Conversions (CAPI)",
  "GTM Server-Side",
  "GA4 Configuration",
  "Enhanced Conversions",
  "Offline Events",
];

const CREATIVE_DNA_DATA = [
  { id: "ugc", icon: Camera },
  { id: "motion", icon: Layers },
  { id: "static", icon: Palette },
  { id: "minimal", icon: Eye },
  { id: "disruptive", icon: Zap },
  { id: "expert", icon: UserCheck },
];

export const SEOSMOFormSection: React.FC = () => {
  const t = useTranslations("sea-smo.form_section");
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [formData, setFormData] = useState({
    platforms: [] as string[],
    objective: "",
    industry: "",
    tracking: [] as string[],
    creativeStyle: [] as string[],
    budget: "25k - 45k MAD",
    geoTarget: "Maroc National",
    website: "",
    phone: "",
    name: "",
    email: "",
    details: "",
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleArray = (
    key: "platforms" | "tracking" | "creativeStyle",
    val: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: prev[key].includes(val)
        ? prev[key].filter((v) => v !== val)
        : [...prev[key], val],
    }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 2500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section className="relative py-20 md:py-40 px-4 md:px-8 lg:px-12 bg-transparent transition-colors duration-1000 overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-32 items-start">
          {/* LEFT SIDE: COMMAND PANEL (Sticky on PC) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-lg">
                <Activity size={16} className="text-brand-red animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-800 dark:text-white/80">
                  {t("protocol_badge")}
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-black dark:text-white uppercase italic">
                {t.rich("title", {
                  br: () => <br />,
                  red: (chunks) => (
                    <span className="text-brand-red not-italic">{chunks}</span>
                  ),
                })}
              </h2>

              <div className="h-1 w-24 bg-brand-red rounded-full"></div>
            </div>

            {/* Progress Stepper - Enhanced */}
            <div className="space-y-10">
              {[
                { n: 1, l: t("steps.1.label"), d: t("steps.1.desc") },
                { n: 2, l: t("steps.2.label"), d: t("steps.2.desc") },
                { n: 3, l: t("steps.3.label"), d: t("steps.3.desc") },
                { n: 4, l: t("steps.4.label"), d: t("steps.4.desc") },
                { n: 5, l: t("steps.5.label"), d: t("steps.5.desc") },
              ].map((s) => (
                <div
                  key={s.n}
                  className={`flex items-center gap-6 group transition-all duration-700 ${
                    step < s.n ? "opacity-20 grayscale" : "opacity-100"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-[1.25rem] border-2 flex items-center justify-center transition-all duration-500 ${
                      step === s.n
                        ? "bg-brand-red border-brand-red text-white scale-125 shadow-[0_0_30px_rgba(255,0,0,0.3)]"
                        : step > s.n
                          ? "bg-black dark:bg-white text-white dark:text-black border-transparent"
                          : "border-black/10 dark:border-white/10 text-gray-400"
                    }`}
                  >
                    {step > s.n ? (
                      <Check size={20} strokeWidth={3} />
                    ) : (
                      <span className="font-black text-sm">{s.n}</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={`text-[10px] font-black uppercase tracking-[0.4em] ${
                        step === s.n ? "text-brand-red" : "text-gray-500"
                      }`}
                    >
                      {s.l}
                    </span>
                    <span className="text-sm font-bold text-black dark:text-white">
                      {s.d}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tactical Terminal Feed */}
            <div className="hidden lg:block p-8 rounded-[40px] bg-black/5 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 font-mono text-[9px] space-y-3 opacity-60">
              <p className="text-emerald-500 flex items-center gap-2">
                <Terminal size={12} /> {t("terminal.initializing")}
              </p>
              <p className="text-gray-400 flex items-center gap-2">
                <Database size={12} /> {t("terminal.fetching")}
              </p>
              <p className="text-brand-red flex items-center gap-2">
                <Network size={12} /> {t("terminal.module_active", { step })}
              </p>
              <div className="flex gap-1.5 mt-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full ${
                      i < step * 2.4
                        ? "bg-brand-red animate-pulse"
                        : "bg-gray-300 dark:bg-gray-800"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: INTERACTIVE CONSOLE */}
          <div className="lg:col-span-8 w-full">
            <div
              className={`relative w-full rounded-[60px] bg-white dark:bg-[#080808] border border-black/5 dark:border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-1000 ${
                isSuccess ? "border-emerald-500/30 shadow-emerald-500/10" : ""
              }`}
            >
              <div className="p-8 md:p-14 lg:p-24 relative z-10">
                {isSuccess ? (
                  <div className="py-20 flex flex-col items-center text-center animate-enter-zoom h-full justify-center">
                    <div className="w-28 h-28 rounded-[2.5rem] bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-12 text-emerald-500 shadow-2xl relative">
                      <div className="absolute inset-0 bg-emerald-500/20 blur-3xl animate-pulse"></div>
                      <Rocket
                        size={56}
                        className="animate-bounce relative z-10"
                      />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-black dark:text-white uppercase tracking-tighter mb-6">
                      {t.rich("success.title", {
                        br: () => <br />,
                        emerald: (chunks) => (
                          <span className="text-emerald-500 italic">
                            {chunks}
                          </span>
                        ),
                      })}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl mb-12 max-w-sm font-medium">
                      {t("success.message")}
                    </p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setStep(1);
                      }}
                      className="px-14 py-6 bg-black dark:bg-white text-white dark:text-black rounded-3xl font-black uppercase tracking-[0.5em] text-[11px] hover:scale-110 transition-all shadow-2xl active:scale-95"
                    >
                      {t("success.reset_btn")}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-16">
                    {/* STEP 1: SIGNAL & CANAUX */}
                    {step === 1 && (
                      <div className="space-y-12 animate-enter-right">
                        <div className="space-y-4">
                          <h4 className="text-[11px] font-black uppercase tracking-[0.7em] text-blue-500 flex items-center gap-3">
                            <Radar size={16} /> {t("step1.badge")}
                          </h4>
                          <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-black dark:text-white uppercase tracking-tighter leading-none">
                            {t.rich("step1.title", { br: () => <br /> })}
                          </h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {PLATFORMS_DATA.map((p) => {
                            const label = t(`step1.platforms.${p.id}`);
                            return (
                              <div
                                key={p.id}
                                onClick={() => toggleArray("platforms", label)}
                                className={`p-6 md:p-8 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 flex flex-col items-center text-center gap-4 ${
                                  formData.platforms.includes(label)
                                    ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-900/30 scale-105"
                                    : "bg-black/5 dark:bg-white/5 border-transparent text-gray-500 hover:bg-white dark:hover:bg-[#111] hover:border-black/10 dark:hover:border-white/10"
                                }`}
                              >
                                <div
                                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform ${
                                    formData.platforms.includes(label)
                                      ? "bg-white/20"
                                      : "bg-black/5 dark:bg-white/5"
                                  }`}
                                >
                                  <p.icon
                                    size={22}
                                    className={
                                      formData.platforms.includes(label)
                                        ? "text-white"
                                        : ""
                                    }
                                  />
                                </div>
                                <div className="space-y-1">
                                  <span className="text-[10px] font-black uppercase tracking-widest block">
                                    {label}
                                  </span>
                                  <span
                                    className={`text-[8px] font-bold uppercase opacity-40 ${
                                      formData.platforms.includes(label)
                                        ? "opacity-80"
                                        : ""
                                    }`}
                                  >
                                    {p.group}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="p-8 rounded-[2.5rem] bg-blue-500/5 border border-blue-500/10 flex items-center gap-6">
                          <Info className="text-blue-500 shrink-0" size={24} />
                          <p className="text-xs md:text-sm font-bold text-gray-600 dark:text-gray-400 leading-relaxed italic">
                            {t("step1.note")}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: OBJECTIFS & STRATÉGIE */}
                    {step === 2 && (
                      <div className="space-y-12 animate-enter-right">
                        <div className="space-y-4">
                          <h4 className="text-[11px] font-black uppercase tracking-[0.7em] text-brand-red flex items-center gap-3">
                            <Crosshair size={16} /> {t("step2.badge")}
                          </h4>
                          <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-black dark:text-white uppercase tracking-tighter leading-none">
                            {t.rich("step2.title", { br: () => <br /> })}
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {OBJECTIVES_DATA.map((obj) => {
                            const label = t(`step2.objectives.${obj.id}`);
                            return (
                              <div
                                key={obj.id}
                                onClick={() =>
                                  setFormData({ ...formData, objective: label })
                                }
                                className={`p-8 rounded-[3rem] border transition-all duration-500 cursor-pointer flex items-center justify-between group/obj ${
                                  formData.objective === label
                                    ? "bg-black dark:bg-white border-transparent text-white dark:text-black shadow-2xl scale-[1.03]"
                                    : "bg-white dark:bg-white/[0.02] border-black/5 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5"
                                }`}
                              >
                                <div className="flex items-center gap-6">
                                  <div
                                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                                      formData.objective === label
                                        ? "bg-brand-red text-white shadow-lg"
                                        : "bg-gray-100 dark:bg-white/5"
                                    }`}
                                  >
                                    <obj.icon size={24} />
                                  </div>
                                  <h5 className="font-black uppercase text-base tracking-tight">
                                    {label}
                                  </h5>
                                </div>
                                <div
                                  className={`w-4 h-4 rounded-full border-2 transition-all ${
                                    formData.objective === label
                                      ? "bg-brand-red border-brand-red scale-125 shadow-[0_0_10px_red]"
                                      : "border-gray-400"
                                  }`}
                                ></div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="space-y-4 group">
                          <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 ml-4 group-focus-within:text-brand-red transition-colors">
                            {t("step2.industry.label")}
                          </label>
                          <input
                            type="text"
                            required
                            placeholder={t("step2.industry.placeholder")}
                            className="w-full bg-black/5 dark:bg-white/5 border-2 border-transparent focus:border-brand-red/30 rounded-[2.5rem] py-6 px-8 text-lg font-black text-black dark:text-white outline-none transition-all placeholder:text-gray-400"
                            value={formData.industry}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                industry: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    )}

                    {/* STEP 3: TECH & DATA (NEW) */}
                    {step === 3 && (
                      <div className="space-y-12 animate-enter-right">
                        <div className="space-y-4">
                          <h4 className="text-[11px] font-black uppercase tracking-[0.7em] text-emerald-500 flex items-center gap-3">
                            <Binary size={16} /> {t("step3.badge")}
                          </h4>
                          <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-black dark:text-white uppercase tracking-tighter leading-none">
                            {t.rich("step3.title", { br: () => <br /> })}
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {TRACKING_TOOLS_DATA.map((tool) => (
                            <div
                              key={tool}
                              onClick={() => toggleArray("tracking", tool)}
                              className={`p-6 rounded-[2rem] border transition-all duration-500 cursor-pointer flex items-center justify-between group/tool ${
                                formData.tracking.includes(tool)
                                  ? "bg-emerald-500 border-emerald-500 text-white shadow-xl"
                                  : "bg-white dark:bg-white/[0.02] border-black/5 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-emerald-500/40"
                              }`}
                            >
                              <span className="text-xs font-black uppercase tracking-widest">
                                {tool}
                              </span>
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                                  formData.tracking.includes(tool)
                                    ? "bg-white border-white scale-110"
                                    : "border-gray-400"
                                }`}
                              >
                                {formData.tracking.includes(tool) && (
                                  <Check
                                    size={14}
                                    className="text-emerald-500"
                                    strokeWidth={4}
                                  />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="p-10 rounded-[3.5rem] bg-[#0A0A0A] text-white border border-white/10 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-500 shadow-2xl">
                              <Settings2
                                size={36}
                                className="animate-spin-slow"
                              />
                            </div>
                            <div className="space-y-2 text-center md:text-left">
                              <h5 className="text-xl font-black uppercase tracking-tighter">
                                {t("step3.server_side.title")}
                              </h5>
                              <p className="text-sm text-gray-400 font-medium leading-relaxed">
                                {t("step3.server_side.desc")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 4: CREATIVE DNA (NEW) */}
                    {step === 4 && (
                      <div className="space-y-12 animate-enter-right">
                        <div className="space-y-4">
                          <h4 className="text-[11px] font-black uppercase tracking-[0.7em] text-purple-600 flex items-center gap-3">
                            <Fingerprint size={16} /> {t("step4.badge")}
                          </h4>
                          <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-black dark:text-white uppercase tracking-tighter leading-none">
                            {t.rich("step4.title", { br: () => <br /> })}
                          </h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {CREATIVE_DNA_DATA.map((item) => {
                            const label = t(`step4.styles.${item.id}`);
                            return (
                              <div
                                key={item.id}
                                onClick={() =>
                                  toggleArray("creativeStyle", label)
                                }
                                className={`p-8 rounded-[3rem] border transition-all duration-700 cursor-pointer flex flex-col items-center text-center gap-6 ${
                                  formData.creativeStyle.includes(label)
                                    ? "bg-purple-600 border-purple-600 text-white shadow-2xl shadow-purple-900/40 scale-105"
                                    : "bg-white dark:bg-white/[0.02] border-black/5 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5"
                                }`}
                              >
                                <div
                                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                                    formData.creativeStyle.includes(label)
                                      ? "bg-white/20"
                                      : "bg-gray-100 dark:bg-white/5"
                                  }`}
                                >
                                  <item.icon size={28} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                                  {label}
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 ml-4">
                            {t("step4.creative.label")}
                          </label>
                          <textarea
                            placeholder={t("step4.creative.placeholder")}
                            className="w-full h-32 bg-black/5 dark:bg-white/5 border-2 border-transparent focus:border-purple-600/30 rounded-[2.5rem] p-8 text-sm md:text-base font-bold text-black dark:text-white outline-none transition-all resize-none placeholder:text-gray-400"
                            value={formData.details}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                details: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    )}

                    {/* STEP 5: DEPLOIEMENT & BUDGET */}
                    {step === 5 && (
                      <div className="space-y-12 animate-enter-right">
                        <div className="space-y-4">
                          <h4 className="text-[11px] font-black uppercase tracking-[0.7em] text-orange-500 flex items-center gap-3">
                            <ShieldCheck size={16} /> {t("step5.badge")}
                          </h4>
                          <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-black dark:text-white uppercase tracking-tighter leading-none">
                            {t.rich("step5.title", { br: () => <br /> })}
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3 group">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-4 group-focus-within:text-orange-500 transition-colors">
                              {t("step5.url_label")}
                            </label>
                            <div className="relative">
                              <Globe
                                className="absolute left-6 top-1/2 -translate-y-1/2 text-orange-500"
                                size={18}
                              />
                              <input
                                type="url"
                                required
                                placeholder="https://votre-business.ma"
                                value={formData.website}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    website: e.target.value,
                                  })
                                }
                                className="w-full bg-black/5 dark:bg-white/5 border-2 border-transparent focus:border-orange-500/30 rounded-[2rem] py-5 pl-16 pr-8 text-black dark:text-white font-bold outline-none transition-all"
                              />
                            </div>
                          </div>
                          <div className="space-y-3 group">
                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-4 group-focus-within:text-orange-500 transition-colors">
                              {t("step5.budget_label")}
                            </label>
                            <div className="relative">
                              <DollarSign
                                className="absolute left-6 top-1/2 -translate-y-1/2 text-orange-500"
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
                                className="w-full bg-black/5 dark:bg-white/5 border-2 border-transparent focus:border-orange-500/30 rounded-[2rem] py-5 pl-16 pr-8 text-black dark:text-white font-bold outline-none transition-all appearance-none cursor-pointer"
                              >
                                {[
                                  "< 15k MAD",
                                  "15k - 45k MAD",
                                  "45k - 100k MAD",
                                  "+ 100k MAD",
                                ].map((b) => (
                                  <option
                                    key={b}
                                    value={b}
                                    className="bg-white dark:bg-[#111] text-black dark:text-white"
                                  >
                                    {b}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                size={20}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="relative group/input">
                            <User
                              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-orange-500 transition-colors"
                              size={16}
                            />
                            <input
                              type="text"
                              required
                              placeholder={t("step5.name_placeholder")}
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              className="w-full bg-black/5 dark:bg-white/5 border-2 border-transparent focus:border-orange-500/30 rounded-2xl py-5 pl-14 pr-4 text-xs font-bold outline-none transition-all"
                            />
                          </div>
                          <div className="relative group/input">
                            <Mail
                              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-orange-500 transition-colors"
                              size={16}
                            />
                            <input
                              type="email"
                              required
                              placeholder={t("step5.email_placeholder")}
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                              className="w-full bg-black/5 dark:bg-white/5 border-2 border-transparent focus:border-orange-500/30 rounded-2xl py-5 pl-14 pr-4 text-xs font-bold outline-none transition-all"
                            />
                          </div>
                          <div className="relative group/input">
                            <Phone
                              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/input:text-orange-500 transition-colors"
                              size={16}
                            />
                            <input
                              type="tel"
                              required
                              placeholder={t("step5.phone_placeholder")}
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                              className="w-full bg-black/5 dark:bg-white/5 border-2 border-transparent focus:border-orange-500/30 rounded-2xl py-5 pl-14 pr-4 text-xs font-bold outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div className="p-8 rounded-[40px] bg-orange-500/5 border border-orange-500/10 flex items-center gap-6">
                          <ShieldCheck
                            className="text-orange-500 shrink-0"
                            size={32}
                            strokeWidth={1.5}
                          />
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-relaxed">
                            {t("step5.security_note")}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* NAVIGATION BUTTONS */}
                    <div className="pt-12 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                      {step > 1 ? (
                        <button
                          type="button"
                          onClick={handleBack}
                          className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 hover:text-black dark:hover:text-white transition-all group"
                        >
                          <ArrowLeft
                            size={16}
                            className="group-hover:-translate-x-2 transition-transform"
                          />{" "}
                          {t("back_btn")}
                        </button>
                      ) : (
                        <div />
                      )}

                      <button
                        type={step === 5 ? "submit" : "button"}
                        onClick={step < 5 ? handleNext : undefined}
                        disabled={isSubmitting}
                        className={`group relative px-10 py-5 md:px-16 md:py-7 rounded-[2.5rem] font-black uppercase tracking-[0.5em] text-[10px] transition-all overflow-hidden flex items-center gap-6 shadow-2xl active:scale-95 ${
                          step === 5
                            ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-500/40"
                            : "bg-brand-red text-white hover:bg-red-700 shadow-red-900/40"
                        }`}
                      >
                        <span className="relative z-10">
                          {isSubmitting
                            ? t("btn.sending")
                            : step === 5
                              ? t("btn.launch")
                              : t("btn.next")}
                        </span>
                        {isSubmitting ? (
                          <Loader2
                            size={18}
                            className="animate-spin relative z-10"
                          />
                        ) : (
                          <ArrowRight
                            size={18}
                            className="relative z-10 group-hover:translate-x-3 transition-transform"
                          />
                        )}
                        <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-1000 skew-x-12"></div>
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
        .animate-spin-slow {
            animation: spin 10s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
