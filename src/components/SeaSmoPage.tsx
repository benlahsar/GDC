"use client"

import React, { useEffect, useState, useRef } from 'react';
import { 
  Target, MousePointer2, TrendingUp, Users, 
  ArrowRight, Sparkles, Zap, BarChart3, 
  Search, Globe, Smartphone, MessageSquare, 
  CheckCircle2, ShieldCheck, Activity, 
  DollarSign, Eye, Heart, Share2, 
  Megaphone, Fingerprint, Rocket, Award,
  Star, ChevronRight, ArrowUpRight, Play
} from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export const SeaSmoPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'sea' | 'smo'>('sea');
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const SEA_SERVICES = [
    {
      icon: Target,
      title: "Google Ads Performance",
      description: "Maximisez votre retour sur investissement avec des campagnes Google Ads ultra-ciblées",
      features: ["Ciblage démographique précis", "Optimisation des mots-clés", "A/B testing continu", "ROI tracking en temps réel"],
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Meta Ads (Facebook/Instagram)",
      description: "Atteignez votre audience idéale sur les réseaux sociaux les plus populaires",
      features: ["Publicités personnalisées", "Retargeting avancé", "Lookalike audiences", "Optimisation automatique"],
      color: "purple"
    },
    {
      icon: DollarSign,
      title: "LinkedIn Ads B2B",
      description: "Générez des leads qualifiés pour votre entreprise avec LinkedIn Ads",
      features: ["Ciblage professionnel", "Content marketing", "Lead generation forms", "Analytics détaillés"],
      color: "blue"
    }
  ];

  const SMO_SERVICES = [
    {
      icon: MessageSquare,
      title: "Stratégie de Contenu",
      description: "Créons du contenu engageant qui captive votre audience et renforce votre marque",
      features: ["Calendrier éditorial", "Content creation", "Storytelling de marque", "Tendances virales"],
      color: "pink"
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Gérons votre communauté avec expertise pour fidéliser vos clients",
      features: ["Modération active", "Engagement stratégique", "Crise management", "Brand advocacy"],
      color: "green"
    },
    {
      icon: Share2,
      title: "Influence Marketing",
      description: "Collaborez avec les influenceurs pertinents pour amplifier votre reach",
      features: ["Sélection d'influenceurs", "Campagnes collaboratives", "Tracking performance", "ROI measurement"],
      color: "orange"
    }
  ];

  const STATS = [
    { value: 350, label: "Campagnes Gérées", suffix: "+" },
    { value: 4.8, label: "ROI Moyen", suffix: "x" },
    { value: 92, label: "Taux de Satisfaction", suffix: "%" },
    { value: 24, label: "Pays Couverts", suffix: "" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 md:py-48 px-4 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20"></div>
        
        <div className="max-w-[1700px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
                <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">Sea & Smo Excellence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85]">
                Dominez <br/> 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Le Digital</span> <br/>
                Avec Puissance.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-2xl">
                Transformez votre présence en ligne avec nos stratégies SEA et SMO de pointe. 
                De la publicité ciblée à l'engagement viral, nous propulsons votre marque vers le sommet.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setActiveTab('sea')}
                  className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${
                    activeTab === 'sea' 
                      ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/30' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  SEA Ads
                </button>
                <button 
                  onClick={() => setActiveTab('smo')}
                  className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${
                    activeTab === 'smo' 
                      ? 'bg-purple-600 text-white shadow-xl shadow-purple-600/30' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  SMO Social
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-[60px] p-12 border border-blue-200 dark:border-blue-800">
                <div className="grid grid-cols-2 gap-8">
                  {STATS.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest mt-2">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="relative py-24 md:py-48 px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-[1700px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
              Nos Solutions <br/>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {activeTab === 'sea' ? 'SEA' : 'SMO'}
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {activeTab === 'sea' 
                ? "Des campagnes publicitaires qui convertissent et génèrent un ROI exceptionnel"
                : "Une stratégie social media qui engage et fidélise votre audience"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === 'sea' ? SEA_SERVICES : SMO_SERVICES).map((service, i) => (
              <div 
                key={i} 
                className="group bg-white dark:bg-gray-900 rounded-[40px] p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-black mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="relative py-24 md:py-48 px-4 md:px-12 lg:px-24">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
                Notre Processus <br/>
                <span className="text-blue-600">Garanti</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Audit & Stratégie", desc: "Analyse complète de vos besoins et objectifs" },
                  { step: "02", title: "Création & Lancement", desc: "Déploiement des campagnes optimisées" },
                  { step: "03", title: "Optimisation Continue", desc: "A/B testing et amélioration constante" },
                  { step: "04", title: "Reporting & ROI", desc: "Analyse des performances et ajustements" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-black flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-2">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-[60px] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                <div className="relative z-10">
                  <Rocket className="w-16 h-16 mb-8" />
                  <h3 className="text-3xl font-black mb-4">Prêt à Décoller ?</h3>
                  <p className="text-white/90 mb-8">
                    Transformez votre présence digitale dès aujourd'hui. Nos experts sont prêts à créer une stratégie sur mesure pour votre succès.
                  </p>
                  <button className="w-full bg-white text-blue-600 rounded-2xl px-8 py-4 font-black uppercase tracking-widest hover:bg-gray-100 transition-colors">
                    Démarrer Maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative py-24 md:py-48 px-4 md:px-12 lg:px-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-[1700px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
            Dominez Votre <br/> Marché Digital
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Rejoignez les centaines d'entreprises qui font confiance à GDC pour leur stratégie SEA & SMO
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-2xl">
              Commencer Gratuitement
            </button>
            <button className="border-2 border-white text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all">
              Voir Nos Projets
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
