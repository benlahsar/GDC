import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowDownRight, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export const SEOMethodology: React.FC = () => {
  const t = useTranslations("seo");
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  // Map steps with indices from translation array
  const STEPS = (t.raw("methodology.steps") as any[]).map((step, idx) => ({
    ...step,
    id: String(idx + 1).padStart(2, "0"),
  }));

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-48 bg-transparent overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-brand-red/[0.02] rounded-full blur-[120px] -translate-y-1/2 ${
            !isMobile ? "animate-pulse" : ""
          }`}
        ></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1700px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* LEFT: TITLE AREA */}
          <div
            className={`lg:col-span-5 ${
              !isMobile ? "opacity-0 animate-enter-left" : "opacity-100"
            }`}
          >
            <div className="lg:sticky lg:top-40">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1] text-black dark:text-white uppercase mb-8">
                {t.rich("methodology.title", {
                  travail: (chunks) => chunks,
                  br: () => <br className="hidden md:block" />,
                })}
                <span className="flex items-center gap-4">
                  {t("methodology.travail")}{" "}
                  <ArrowRight
                    className={`text-brand-red w-10 h-10 md:w-16 md:h-16 ${
                      !isMobile ? "animate-pulse" : ""
                    }`}
                  />
                </span>
              </h2>
              <div className="w-24 h-1.5 bg-brand-red rounded-full opacity-60"></div>

              <p className="mt-12 text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-md">
                {t("methodology.description")}
              </p>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE ACCORDION LIST */}
          <div
            className={`lg:col-span-7 flex flex-col divide-y divide-black/10 dark:divide-white/10 border-t border-black/10 dark:border-white/10 ${
              !isMobile
                ? "opacity-0 animate-enter-right delay-200"
                : "opacity-100"
            }`}
          >
            {STEPS.map((step, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`py-8 md:py-12 group cursor-pointer transition-all duration-500 ${
                    isOpen
                      ? "bg-white/5 dark:bg-white/[0.02] px-6 md:px-8 rounded-2xl border-x border-black/5 dark:border-white/5"
                      : !isMobile
                      ? "hover:pl-4"
                      : ""
                  }`}
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-baseline gap-6 md:gap-10">
                      <span
                        className={`text-xl md:text-2xl font-mono font-black transition-colors duration-300 ${
                          isOpen
                            ? "text-brand-red"
                            : "text-gray-400 dark:text-gray-600"
                        }`}
                      >
                        {step.id}.
                      </span>
                      <h3
                        className={`text-2xl md:text-4xl font-black transition-all duration-300 tracking-tight uppercase ${
                          isOpen
                            ? "text-black dark:text-white"
                            : `text-gray-500 dark:text-gray-500 ${
                                !isMobile
                                  ? "group-hover:text-black dark:group-hover:text-white"
                                  : ""
                              }`
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <div
                      className={`shrink-0 transition-all duration-500 transform ${
                        isOpen
                          ? "rotate-0 bg-brand-red text-white scale-110 shadow-lg shadow-red-600/30"
                          : `rotate-45 bg-black/5 dark:bg-white/5 text-gray-400 dark:text-gray-600 ${
                              !isMobile ? "group-hover:scale-110" : ""
                            }`
                      } w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center`}
                    >
                      {isOpen ? (
                        <ArrowUpRight size={24} />
                      ) : (
                        <ArrowDownRight size={24} />
                      )}
                    </div>
                  </div>

                  <div
                    className={`grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-8 md:mt-10"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-12 md:pl-16 border-l-2 border-brand-red/30">
                        <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-justify">
                          {t.rich(`methodology.steps.${index}.description`, {
                            bold: (chunks) => (
                              <span className="text-black dark:text-white font-black">
                                {chunks}
                              </span>
                            ),
                          })}
                        </p>

                        {isOpen && (
                          <div className="mt-8 flex items-center gap-3">
                            <div className="h-1 w-12 bg-brand-red rounded-full"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">
                              {t("methodology.protocol")}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
