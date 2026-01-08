"use client";

import React, { useState, useRef } from "react";
import {
  Send,
  User,
  Mail,
  Globe,
  MessageSquare,
  Sparkles,
  Zap,
  ShieldCheck,
  ArrowRight,
  Loader2,
  CheckCircle2,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const SEOContactSection: React.FC = () => {
  const t = useTranslations("seo");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section
      id="seo-contact"
      className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden transition-colors duration-500 border-t border-black/5 dark:border-white/5"
    >
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
        {/* Header Block */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
            <Zap size={14} className="text-brand-red animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
              {t("contact.badge")}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-black dark:text-white mb-6">
            {t.rich("contact.title", {
              top1: () => (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">
                  {t("contact.top1")}
                </span>
              ),
            })}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
            {t("contact.description")}
          </p>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-min">
          {/* 1. CONTACT FORM CONSOLE (Large Left) */}
          <div className="lg:col-span-8 bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            {/* Glow behind form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-20 animate-enter-zoom h-full">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-black text-black dark:text-white mb-2">
                  {t("contact.success.title")}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xs mx-auto">
                  {t("contact.success.message", {
                    name: formData.name,
                    website: formData.website,
                  })}
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: "",
                      email: "",
                      website: "",
                      details: "",
                    });
                  }}
                  className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                >
                  {t("contact.success.cta")}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative z-10 flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1 group-focus-within:text-brand-red transition-colors">
                      {t("contact.form.nameLabel")}
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 group-focus-within:text-brand-red transition-colors"
                        size={18}
                      />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-4 pl-12 pr-5 text-black dark:text-white focus:border-brand-red focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all shadow-inner"
                        placeholder={t("contact.form.namePlaceholder")}
                      />
                    </div>
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1 group-focus-within:text-brand-red transition-colors">
                      {t("contact.form.emailLabel")}
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 group-focus-within:text-brand-red transition-colors"
                        size={18}
                      />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-4 pl-12 pr-5 text-black dark:text-white focus:border-brand-red focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all shadow-inner"
                        placeholder={t("contact.form.emailPlaceholder")}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1 group-focus-within:text-brand-red transition-colors">
                    {t("contact.form.websiteLabel")}
                  </label>
                  <div className="relative">
                    <Globe
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 group-focus-within:text-brand-red transition-colors"
                      size={18}
                    />
                    <input
                      type="url"
                      required
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-4 pl-12 pr-5 text-black dark:text-white focus:border-brand-red focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all shadow-inner"
                      placeholder={t("contact.form.websitePlaceholder")}
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-1 group-focus-within:text-brand-red transition-colors">
                    {t("contact.form.objectivesLabel")}
                  </label>
                  <div className="relative">
                    <textarea
                      required
                      rows={4}
                      value={formData.details}
                      onChange={(e) =>
                        setFormData({ ...formData, details: e.target.value })
                      }
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6 text-black dark:text-white focus:border-brand-red focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-all resize-none shadow-inner"
                      placeholder={t("contact.form.objectivesPlaceholder")}
                    />
                    <MessageSquare
                      className="absolute bottom-6 right-6 text-gray-400 opacity-30"
                      size={20}
                    />
                  </div>
                </div>

                <div className="mt-4 pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest max-w-[200px]">
                    <ShieldCheck
                      size={12}
                      className="inline mr-1 text-emerald-500"
                    />{" "}
                    {t("contact.form.rgpd")}
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group bg-brand-red text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-brand-red/20 hover:scale-105 hover:bg-red-600 transition-all flex items-center gap-3 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <>
                        {t("contact.form.cta")} <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* --- SIDE INFO STACK (Right - Col 4) --- */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* 2. STATS MINI BENTO */}
            <div className="p-8 rounded-[40px] bg-black dark:bg-white text-white dark:text-black flex flex-col justify-between h-48 shadow-xl group hover:-translate-y-1 transition-all">
              <TrendingUp size={24} className="text-brand-red" />
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">+</span>
                  <span className="text-4xl font-black">210</span>
                  <span className="text-xl font-bold text-brand-red">%</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
                  {t("contact.side.growth")}
                </p>
              </div>
            </div>

            {/* 3. EXPERTISE BENTO */}
            <div className="p-8 rounded-[40px] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 flex flex-col justify-between h-48 shadow-lg group hover:-translate-y-1 transition-all">
              <BarChart3 size={24} className="text-blue-500" />
              <div>
                <span className="block text-2xl font-black text-black dark:text-white">
                  {t("contact.side.dataTitle")}
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {t("contact.side.dataDesc")}
                </p>
              </div>
            </div>

            {/* 4. TEAM BENTO (Full Width of Column) */}
            <div className="flex-1 p-8 rounded-[40px] bg-brand-red text-white flex flex-col justify-between min-h-[160px] shadow-xl shadow-red-900/20 group hover:scale-[1.02] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-2xl font-black leading-tight relative z-10">
                {t.rich("contact.side.expertiseTitle", {
                  br: () => <br />,
                })}
              </h3>
              <div className="flex items-center justify-between relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                  {t("contact.side.support")}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight
                    size={18}
                    className="group-hover:rotate-[-45deg] transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Icons */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale group-hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <div className="flex items-center gap-2 font-black text-lg tracking-tighter">
            <Globe className="text-brand-red" size={20} />{" "}
            {t("contact.trust.ranking")}
          </div>
          <div className="flex items-center gap-2 font-black text-lg tracking-tighter">
            <ShieldCheck className="text-emerald-500" size={20} />{" "}
            {t("contact.trust.whitehat")}
          </div>
          <div className="flex items-center gap-2 font-black text-lg tracking-tighter">
            <Zap className="text-yellow-500" size={20} />{" "}
            {t("contact.trust.elite")}
          </div>
        </div>
      </div>
    </section>
  );
};
