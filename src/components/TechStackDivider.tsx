import React from "react";
import { useTranslations } from "next-intl";
import { PARTNERS } from "../lib/constants";

export const TechStackDivider: React.FC = () => {
  const t = useTranslations("TechStackDivider");
  // Quadruple the array for wider screens and smoother infinite scroll
  const loopPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="relative w-full py-16 md:py-24 bg-white dark:bg-black border-y border-black/5 dark:border-white/5 overflow-hidden z-30 mb-0 transition-colors duration-500">
      {/* Sleek Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* LEFT: Static Title */}
          <div className="shrink-0 relative flex items-center justify-center gap-4 md:justify-start">
            {/* Decorative Accent */}
            <div className="hidden md:block w-8 h-[2px] bg-brand-red"></div>

            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-black dark:text-white whitespace-nowrap">
              {t("title")}
            </h3>

            {/* Mobile Accent */}
            <div className="md:hidden w-8 h-[2px] bg-brand-red"></div>

            {/* Vertical Divider for Desktop */}
            <div className="hidden md:block w-[1px] h-8 bg-black/10 dark:bg-white/10 ml-8"></div>
          </div>

          {/* RIGHT: Infinite Marquee */}
          <div className="flex-1 w-full overflow-hidden relative">
            {/* Fade Masks for seamless look */}
            <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white dark:from-black to-transparent z-20 pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white dark:from-black to-transparent z-20 pointer-events-none"></div>

            <div className="flex animate-scroll whitespace-nowrap items-center w-max">
              {loopPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex items-center justify-center mx-8 md:mx-14 transition-all duration-500 cursor-pointer group"
                >
                  {/* Dark Mode Logo */}
                  <img
                    src={partner.url}
                    alt={partner.name}
                    className="h-8 md:h-10 w-auto object-contain hidden dark:block opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Light Mode Logo - Specific Assets */}
                  <img
                    src={(partner as any).urlLight}
                    alt={partner.name}
                    className="h-8 md:h-10 w-auto object-contain block dark:hidden opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
