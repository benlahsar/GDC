import React from "react";
import {
  Star,
  Quote,
  CheckCircle2,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";

export const SEOTestimonials: React.FC = () => {
  const t = useTranslations("seo");

  // Tag keys associated with each testimonial item
  const tagKeys = ["strategy", "ecommerce", "ads", "social", "it"];

  const TEST_DATA = (t.raw("testimonials.items") as any[]).map((item, idx) => ({
    ...item,
    stars: 5,
    tag: t(`testimonials.tags.${tagKeys[idx]}`),
  }));
  return (
    <section className="relative w-full py-24 md:py-32 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
            <MessageSquare size={14} className="text-brand-red animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">
              {t("testimonials.badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-black dark:text-white mb-6">
            {t.rich("testimonials.title", {
              clients: (chunks) => (
                <span className="text-brand-red">{chunks}</span>
              ),
            })}{" "}
            <br />
            <span className="text-gray-400 dark:text-gray-600">
              {t("testimonials.subtitle")}
            </span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: Large Featured */}
          <div className="lg:col-span-8 group relative bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-[40px] p-8 md:p-12 shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <Quote size={120} className="text-black dark:text-white" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-brand-red text-brand-red"
                    />
                  ))}
                </div>
                <p className="text-xl md:text-3xl font-medium text-gray-700 dark:text-gray-200 leading-relaxed italic mb-8">
                  "{TEST_DATA[0].text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-600/30">
                  {TEST_DATA[0].name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-black text-black dark:text-white">
                    {TEST_DATA[0].name}
                  </h4>
                  <p className="text-xs font-bold text-brand-red uppercase tracking-widest">
                    {TEST_DATA[0].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Side Profile */}
          <div className="lg:col-span-4 bg-black dark:bg-white text-white dark:text-black rounded-[40px] p-8 border border-white/10 dark:border-black/10 flex flex-col justify-between shadow-2xl group hover:scale-[1.02] transition-transform duration-500">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 rounded-full bg-white/10 dark:bg-black/5 border border-white/20 dark:border-black/10 text-[10px] font-bold uppercase tracking-widest">
                {TEST_DATA[1].tag}
              </span>
              <Sparkles className="text-brand-red" size={20} />
            </div>
            <div>
              <p className="text-base font-medium leading-relaxed mb-6">
                "{TEST_DATA[1].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-black flex items-center justify-center text-black dark:text-white font-bold">
                  {TEST_DATA[1].name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold">{TEST_DATA[1].name}</h4>
                  <p className="text-[9px] opacity-60 uppercase font-black">
                    {TEST_DATA[1].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Smaller Bento Cards */}
          {TEST_DATA.slice(2).map((item, idx) => (
            <div
              key={idx}
              className="lg:col-span-4 group relative bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-[32px] p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Quote className="text-brand-red mb-4 opacity-40" size={24} />
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium mb-6">
                "{item.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-xs font-bold text-black dark:text-white">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-black dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
