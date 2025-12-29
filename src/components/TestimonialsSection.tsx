"use client"
import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, TrendingUp, Building2, Globe, X, Send, User, Briefcase, MessageSquare, Loader2 } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useRouter } from 'next/navigation';

const TESTIMONIALS = [
  { id: 1, name: "Karim Bennani", role: "Directeur Marketing", company: "Atlas Group", content: "Une transformation radicale de notre présence digitale. Group Digital Concept a su capturer l'essence de notre marque et la propulser au niveau supérieur. Le ROI a dépassé toutes nos attentes.", metrics: "+210% de Leads", stars: 5, tag: "Stratégie 360" },
  { id: 2, name: "Sophie Martin", role: "CEO", company: "Luxe Interiors", content: "L'équipe a fait preuve d'une créativité exceptionnelle. Notre nouveau site e-commerce est non seulement magnifique, mais il convertit incroyablement bien. Un partenaire de confiance.", metrics: "x3 Taux de Conv.", stars: 5, tag: "E-Commerce" },
  { id: 3, name: "Youssef El Alami", role: "Fondateur", company: "TechMaroc", content: "Nous cherchions une agence capable de comprendre les défis d'une startup tech. Leur réactivité et leur expertise technique nous ont permis de lancer notre produit en un temps record.", metrics: "Lancement réussi", stars: 5, tag: "Développement" },
  { id: 4, name: "Sarah Dubois", role: "Directrice Com.", company: "Cosmétique Bio", content: "Les campagnes publicitaires gérées par l'agence ont un ciblage chirurgical. Nous avons considérablement réduit notre coût d'acquisition tout en augmentant nos volumes de vente.", metrics: "-40% CPA", stars: 5, tag: "Ads & Social" },
  { id: 5, name: "Hassan Tazi", role: "DG", company: "Immo Prestige", content: "Le rebranding complet de notre agence immobilière a été un franc succès. Nos clients nous perçoivent désormais comme le leader incontesté du marché du luxe à Marrakech.", metrics: "+150% Notoriété", stars: 5, tag: "Branding" },
  { id: 6, name: "Amine Kabbaj", role: "Chef de Projet", company: "Logistics Solutions", content: "Une application web robuste et intuitive. L'équipe technique de GDC maîtrise parfaitement les enjeux de performance et de sécurité. Une collaboration fluide et efficace.", metrics: "100% Uptime", stars: 5, tag: "App Web" },
  { id: 7, name: "Leila Chraibi", role: "Fondatrice", company: "Moda Style", content: "Grâce à leur stratégie SEO, nous sommes passés de la 5ème page à la 1ère position sur nos mots-clés stratégiques. Le trafic organique a explosé en moins de 6 mois.", metrics: "Top 1 Google", stars: 5, tag: "SEO" },
  { id: 8, name: "Omar Berrada", role: "Directeur des Ventes", company: "Auto Elite", content: "Leur approche data-driven fait toute la différence. Chaque dirham investi est suivi et optimisé. C'est la première fois que nous avons une telle clarté sur nos performances digitales.", metrics: "ROAS x8", stars: 5, tag: "Performance" },
  { id: 9, name: "Nadia Fassi", role: "Gérante", company: "Riad Excellence", content: "Notre taux de réservation directe a doublé grâce au nouveau site web et à la stratégie de contenu. Ils ont su raconter notre histoire avec élégance et modernité.", metrics: "+85% Réservations", stars: 5, tag: "Hôtellerie" }
];

const ReviewCard: React.FC<{ review: typeof TESTIMONIALS[0] }> = ({ review }) => (
  <div className="relative group p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-white/60 dark:bg-[#111]/60 border border-black/5 dark:border-white/5 backdrop-blur-md hover:bg-white/90 dark:hover:bg-[#181818] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl flex flex-col gap-6 mb-6 mx-2 cursor-default">
    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
      <Quote size={32} className="text-black dark:text-white" />
    </div>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-lg font-bold text-black dark:text-white border border-white/20 shadow-sm shrink-0">
        {review.name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-black dark:text-white text-sm md:text-base leading-tight">{review.name}</h4>
        <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-0.5">{review.role}</p>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex gap-1">
        {[...Array(review.stars)].map((_, i) => (
          <Star key={i} size={12} className="fill-brand-red text-brand-red md:w-[14px] md:h-[14px]" />
        ))}
      </div>
      <div className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[9px] md:text-[10px] font-bold uppercase text-gray-600 dark:text-gray-300 whitespace-nowrap">
        {review.tag}
      </div>
    </div>
    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">"{review.content}"</p>
    <div className="pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-300">
        <Building2 size={12} className="text-black dark:text-white" />
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black dark:text-white truncate max-w-[100px]">{review.company}</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shrink-0">
        <TrendingUp size={12} className="text-emerald-600 dark:text-emerald-400 group-hover:text-white" />
        <span className="text-[10px] md:text-xs font-bold text-emerald-700 dark:text-emerald-400 group-hover:text-white">{review.metrics}</span>
      </div>
    </div>
  </div>
);

export const TestimonialsSection: React.FC = () => {
  // const { setReviewModalOpen, isReviewModalOpen } = useNavigation();
  const router = useRouter()
  const [isReviewModalOpen, setReviewModalOpen] = useState(false)
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const col1 = [...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(0, 3)];
  const col2 = [...TESTIMONIALS.slice(3, 6), ...TESTIMONIALS.slice(3, 6)];
  const col3 = [...TESTIMONIALS.slice(6, 9), ...TESTIMONIALS.slice(6, 9)];

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => { setIsSuccess(false); setReviewModalOpen(false); }, 2500);
  };

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-transparent">
      {/* Modale d'avis */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-4 md:p-8 animate-enter-zoom">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl transition-opacity" onClick={() => setReviewModalOpen(false)} />
            <div className="relative w-full max-w-2xl bg-white dark:bg-[#0A0A0A] rounded-[40px] border border-black/5 dark:border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden">
                <button onClick={() => setReviewModalOpen(false)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all z-50"><X size={20}/></button>
                
                <div className="p-8 md:p-12">
                   {isSuccess ? (
                       <div className="py-20 text-center animate-fade-in-up">
                           <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6 text-emerald-500 shadow-lg shadow-emerald-500/20"><CheckCircle2 size={40} /></div>
                           <h3 className="text-3xl font-black text-black dark:text-white mb-2">Merci pour votre confiance !</h3>
                           <p className="text-gray-500 dark:text-gray-400">Votre témoignage a été envoyé à notre équipe pour validation.</p>
                       </div>
                   ) : (
                       <form onSubmit={handleReviewSubmit} className="space-y-8">
                           <div className="text-center mb-8">
                               <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white uppercase tracking-tighter">Votre Expérience <span className="text-brand-red italic">GDC</span></h3>
                               <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Partagez votre succès avec la communauté.</p>
                           </div>

                           <div className="flex flex-col items-center gap-4 mb-10">
                               <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Note Globale</span>
                               <div className="flex gap-2">
                                   {[1,2,3,4,5].map(i => (
                                       <button key={i} type="button" onClick={() => setRating(i)} className="transition-all hover:scale-125 active:scale-95">
                                           <Star size={32} className={`transition-colors ${i <= rating ? 'fill-brand-red text-brand-red drop-shadow-[0_0_10px_rgba(255,0,0,0.4)]' : 'text-gray-200 dark:text-gray-800'}`} />
                                       </button>
                                   ))}
                               </div>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <div className="relative group">
                                   <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-red transition-colors" size={18} />
                                   <input type="text" placeholder="Nom Complet" required className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-red transition-all" />
                               </div>
                               <div className="relative group">
                                   <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-red transition-colors" size={18} />
                                   <input type="text" placeholder="Poste / Entreprise" required className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-red transition-all" />
                               </div>
                           </div>

                           <div className="relative group">
                               <MessageSquare className="absolute left-4 top-5 text-gray-400 group-focus-within:text-brand-red transition-colors" size={18} />
                               <textarea placeholder="Votre message... décrivez l'impact de notre collaboration" required rows={4} className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-red transition-all resize-none" />
                           </div>

                           <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-[11px] tracking-[0.4em] rounded-2xl shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-4 group/btn disabled:opacity-50">
                               {isSubmitting ? <Loader2 className="animate-spin" /> : <>PUBLIER MON AVIS <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/></>}
                           </button>
                       </form>
                   )}
                </div>
            </div>
        </div>
      )}

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-gradient-to-b from-brand-red/[0.02] to-blue-500/[0.02] rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1600px] relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 border border-black/5 dark:border-white/10 shadow-sm backdrop-blur-md">
            <CheckCircle2 size={14} className="text-brand-red" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-800 dark:text-gray-200">Ils nous font confiance</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-black dark:text-white tracking-tighter mb-6">
             Des Succès <span className="text-brand-red">Inspirants</span> <br/> avec Notre Agence Web
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">Découvrez comment nous transformons les défis de nos clients en opportunités de croissance exponentielle.</p>
        </div>

        <div className="relative h-[600px] md:h-[800px] overflow-hidden rounded-[40px] border border-black/5 dark:border-white/5 bg-white/30 dark:bg-black/20 backdrop-blur-sm">
           <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F0F0F2] dark:from-[#000000] to-transparent z-20 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F0F0F2] dark:from-[#000000] to-transparent z-20 pointer-events-none"></div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full p-6 md:p-8 overflow-hidden">
              <div className="h-full relative overflow-hidden pause-on-hover mask-gradient">
                 <div className="animate-marquee-up flex flex-col gap-0 w-full">
                    {col1.map((review, idx) => ( <ReviewCard key={`col1-${idx}`} review={review} /> ))}
                 </div>
              </div>
              <div className="hidden md:block h-full relative overflow-hidden pause-on-hover">
                 <div className="animate-marquee-down flex flex-col gap-0 w-full">
                    {col2.map((review, idx) => ( <ReviewCard key={`col2-${idx}`} review={review} /> ))}
                 </div>
              </div>
              <div className="hidden lg:block h-full relative overflow-hidden pause-on-hover">
                 <div className="animate-marquee-up flex flex-col gap-0 w-full">
                    {col3.map((review, idx) => ( <ReviewCard key={`col3-${idx}`} review={review} /> ))}
                 </div>
              </div>
           </div>
           <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
              <button onClick={() => setReviewModalOpen(true)} className="pointer-events-auto inline-flex items-center gap-3 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-110 transition-all shadow-2xl">
                 <Globe size={16} /> Rejoignez l'élite
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};
