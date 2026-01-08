import React from 'react';
/* Added ArrowRight to imports to fix missing component error */
import { Mail, Phone, Clock, Send, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const AppContactBanner: React.FC = () => {
   const t = useTranslations("AppContactBanner");
   return (
      <section className="relative w-full py-12 mb-12">
         <div className="max-w-[1700px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

               {/* LEFT: THE TERMINAL (Identity Card) */}
               <div className="lg:col-span-4 bg-[#0A0A0A] dark:bg-black rounded-[48px] p-10 md:p-14 border border-white/5 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
                  <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div>
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <Zap size={12} className="text-brand-red animate-pulse" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">{t("priority")}</span>
                     </div>

                     <h3
                        className="text-3xl md:text-5xl font-black mb-10 leading-[0.9] text-white tracking-tighter uppercase"
                        dangerouslySetInnerHTML={{ __html: t.raw("title").replace(/{br}/g, "<br/>") }}
                     />

                     <div className="space-y-8">
                        <div className="group/link cursor-pointer">
                           <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">{t("phone.label")}</p>
                           <a href="tel:+212666370306" className="flex items-center gap-4 text-2xl font-black text-white group-hover/link:text-brand-red transition-colors">
                              <Phone size={24} className="text-brand-red" /> +212 666 37 03 06
                           </a>
                        </div>
                        <div className="group/link cursor-pointer">
                           <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">{t("email.label")}</p>
                           <a href="mailto:groupdigitalconcept@gmail.com" className="flex items-center gap-4 text-sm font-bold text-gray-400 group-hover/link:text-white transition-colors">
                              <Mail size={18} className="text-brand-red" /> groupdigitalconcept@gmail.com
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="mt-16 pt-10 border-t border-white/5 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                     <span className="text-[9px] font-black uppercase tracking-[0.3em]">{t("hq")}</span>
                     <ShieldCheck size={20} className="text-brand-red" />
                  </div>
               </div>

               {/* CENTER: THE CONSOLE (Integrated Form) */}
               <div className="lg:col-span-5 bg-white dark:bg-[#0A0A0A] rounded-[48px] p-10 md:p-14 border border-black/5 dark:border-white/10 relative overflow-hidden group shadow-2xl backdrop-blur-3xl">
                  <div className="absolute top-0 right-0 p-12 text-black/[0.02] dark:text-white/[0.02] pointer-events-none group-hover:text-brand-red/[0.05] transition-colors duration-1000">
                     <Send size={200} />
                  </div>

                  <div className="relative z-10 h-full flex flex-col justify-center">
                     <div className="text-center mb-10">
                        <h3 className="text-xl md:text-2xl font-black text-black dark:text-white tracking-tighter uppercase mb-2">{t("form.title")}</h3>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{t("form.subtitle")}</p>
                     </div>

                     <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative group/input">
                           <input
                              type="text"
                              placeholder={t("form.name")}
                              className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-brand-red rounded-3xl px-8 py-5 text-sm font-bold text-black dark:text-white outline-none transition-all placeholder:text-gray-500 focus:shadow-[0_0_40px_rgba(220,38,38,0.1)]"
                           />
                        </div>
                        <div className="relative group/input">
                           <input
                              type="tel"
                              placeholder={t("form.phone")}
                              className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-brand-red rounded-3xl px-8 py-5 text-sm font-bold text-black dark:text-white outline-none transition-all placeholder:text-gray-500 focus:shadow-[0_0_40px_rgba(220,38,38,0.1)]"
                           />
                        </div>
                        <button className="group/btn w-full py-6 bg-brand-red hover:bg-red-600 text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-[2rem] shadow-2xl shadow-red-900/30 hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-4 overflow-hidden relative">
                           <span className="relative z-10">{t("form.submit")}</span>
                           <ArrowRight size={14} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                        </button>
                        <p className="text-[8px] font-black text-center text-gray-400 dark:text-gray-600 uppercase tracking-widest">{t("form.secure")}</p>
                     </form>
                  </div>
               </div>

               {/* RIGHT: THE SCHEDULER (Hours) */}
               <div className="lg:col-span-3 bg-white dark:bg-[#0A0A0A] rounded-[48px] p-10 border border-black/5 dark:border-white/10 flex flex-col items-center justify-center text-center shadow-xl backdrop-blur-xl group hover:border-brand-red/20 transition-all duration-500">
                  <div className="w-16 h-16 rounded-[2rem] bg-gray-50 dark:bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                     <Clock size={32} className="text-brand-red" />
                  </div>

                  <h3
                     className="text-xl font-black mb-8 text-black dark:text-white uppercase tracking-tighter"
                     dangerouslySetInnerHTML={{ __html: t.raw("uptime.title").replace(/{br}/g, "<br/>") }}
                  />

                  <div className="space-y-6">
                     <div className="flex flex-col items-center">
                        <div className="px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 mb-4">
                           <span className="text-[10px] font-black text-brand-red uppercase tracking-widest">{t("uptime.days")}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                           <span className="text-xl font-black text-black dark:text-white tracking-tighter">09:30 — 13:30</span>
                           <div className="h-[1px] w-8 bg-black/10 dark:bg-white/10"></div>
                           <span className="text-xl font-black text-black dark:text-white tracking-tighter">14:30 — 18:30</span>
                        </div>
                     </div>
                  </div>

                  <div className="mt-12 flex gap-1 items-center opacity-20 group-hover:opacity-100 transition-opacity">
                     {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-brand-red"></div>)}
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};
