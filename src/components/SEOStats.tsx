
import React from 'react';
import { CheckCircle, Clock, TrendingUp, BarChart3, ShieldCheck, Sparkles } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

const STATS = [
  { id: 1, val: 200, prefix: "+", label: "Sites Optimisés", icon: CheckCircle, color: "text-red-500", bg: "bg-red-500/10" },
  { id: 2, val: 3, suffix: " Mois", label: "Pour des résultats visibles", icon: Clock, color: "text-blue-500", bg: "bg-blue-500/10" },
  { id: 3, val: 3, prefix: "TOP ", label: "Positionnement moyen", icon: TrendingUp, color: "text-amber-500", bg: "bg-amber-500/10" },
  { id: 4, val: 60, prefix: "+", suffix: "%", label: "Trafic Organique", icon: BarChart3, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { id: 5, val: 100, suffix: "%", label: "Conformité Google", icon: ShieldCheck, color: "text-purple-500", bg: "bg-purple-500/10" }
];

export const SEOStats: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1600px] relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
                <Sparkles size={14} className="text-brand-red animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">Nos Performances</span>
             </div>
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-black dark:text-white">
                Les Chiffres qui <span className="text-brand-red">Parlent</span>
             </h2>
        </div>

        {/* Stats Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {STATS.map((stat, idx) => (
                <div 
                    key={stat.id}
                    className={`
                        group relative overflow-hidden rounded-[32px] p-8
                        bg-white/60 dark:bg-[#0A0A0A]/60 backdrop-blur-xl 
                        border border-black/5 dark:border-white/10
                        hover:border-brand-red/30 transition-all duration-500
                        flex flex-col items-center justify-center text-center
                        hover:-translate-y-2 hover:shadow-2xl
                        ${idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
                    `}
                >
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${stat.bg.replace('10', '20')}`}></div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${stat.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <stat.icon size={32} className={stat.color} strokeWidth={1.5} />
                    </div>

                    {/* Value */}
                    <div className="flex items-baseline gap-1 mb-2">
                        <AnimatedCounter 
                            value={stat.val} 
                            prefix={stat.prefix} 
                            suffix={stat.suffix} 
                            className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tighter"
                        />
                    </div>

                    {/* Label */}
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                        {stat.label}
                    </p>

                    {/* Decorative Bottom Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
