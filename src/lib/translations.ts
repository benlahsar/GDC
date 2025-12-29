export type Language = 'fr' | 'en' | 'ar' | 'es' | 'de' | 'it' | 'pt' | 'ru' | 'nl';

export interface Translation {
  nav: {
    home: string;
    agency: string;
    team: string;
    expertise: string;
    solutions: string;
    portfolio: string;
    contact: string;
    project: string;
  };
  hero: {
    subtitle: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    description: string;
    cta: string;
    portfolio: string;
  };
  ai: {
    title: string;
    placeholder: string;
    button: string;
    status: string;
    newAnalysis: string;
    prompt: string;
    hint: string;
  };
  stats: {
    performance: string;
    growth: string;
    satisfaction: string;
    projects: string;
    support: string;
  }
}

export const TRANSLATIONS: Record<Language, Translation> = {
  fr: {
    nav: { home: "Accueil", agency: "Agence", team: "Équipe", expertise: "Expertises", solutions: "Solutions", portfolio: "Réalisations", contact: "Contact", project: "Projet" },
    hero: {
      subtitle: "Agence Marketing Digital Premium : La Clé Pour Développer Vos Revenus",
      line1: "Experts en",
      line2: "Digitalisation",
      line3: "et Marketing",
      line4: "Innovant",
      description: "Donnez Vie à Vos Ambitions Avec Une Agence Marketing Digital Visionnaire. Des Solutions Stratégiques Appuyées par des Résultats Concrets.",
      cta: "Lancer le projet",
      portfolio: "Nos Réalisations"
    },
    ai: { 
        title: "Stratège IA", 
        placeholder: "Ex: Riad à Marrakech, E-commerce...", 
        button: "Analyser", 
        status: "Propulsé par Gemini 3", 
        newAnalysis: "Nouvelle Analyse", 
        prompt: "Tu es un stratège senior chez GDC. Donne 3 conseils brefs pour:", 
        hint: "Besoin d'une stratégie ? Indiquez votre secteur d'activité." 
    },
    stats: { 
        performance: "Performance", 
        growth: "Croissance", 
        satisfaction: "Satisfaction", 
        projects: "Projets", 
        support: "Support" 
    }
  },
  en: {
    nav: { home: "Home", agency: "Agency", team: "Team", expertise: "Expertise", solutions: "Solutions", portfolio: "Portfolio", contact: "Contact", project: "Project" },
    hero: {
      subtitle: "Premium Digital Marketing Agency: The Key to Growing Your Revenue",
      line1: "Experts in",
      line2: "Digitalization",
      line3: "and Marketing",
      line4: "Innovative",
      description: "Bring Your Ambitions to Life with a Visionary Digital Marketing Agency. Strategic Solutions Backed by Concrete Results.",
      cta: "Start Project",
      portfolio: "Our Portfolio"
    },
    ai: { title: "AI Strategist", placeholder: "Ex: Riad in Marrakech, E-commerce...", button: "Analyze", status: "Powered by Gemini 3", newAnalysis: "New Analysis", prompt: "You are a senior strategist. Give 3 tips for:", hint: "Need a strategy? Tell us your sector." },
    stats: { performance: "Performance", growth: "Growth", satisfaction: "Satisfaction", projects: "Projects", support: "Support" }
  },
  ar: {
    nav: { home: "الرئيسية", agency: "الوكالة", team: "الفريق", expertise: "خبراتنا", solutions: "حلولنا", portfolio: "أعمالنا", contact: "اتصال", project: "مشروع" },
    hero: {
      subtitle: "وكالة تسويق رقمي متميزة: المفتاح لزيادة أرباحك",
      line1: "خبراء في",
      line2: "الرقمنة",
      line3: "والتسويق",
      line4: "المبتكر",
      description: "اجعل طموحاتك حقيقة مع وكالة تسويق رقمي رؤيوية. حلول استراتيجية مدعومة بنتائج ملموسة.",
      cta: "ابدأ المشروع",
      portfolio: "أعمالنا"
    },
    ai: { title: "خبير الذكاء الاصطناعي", placeholder: "مثال: رياض في مراكش، تجارة إلكترونية...", button: "تحليل", status: "مدعوم بـ Gemini 3", newAnalysis: "تحليل جديد", prompt: "أنت خبير استراتيجي. قدم 3 نصائح لـ:", hint: "هل تحتاج إلى استراتيجية؟" },
    stats: { performance: "الأداء", growth: "نمو", satisfaction: "رضا", projects: "مشاريع", support: "دعم" }
  },
  es: {
    nav: { home: "Inicio", agency: "Agencia", team: "Equipo", expertise: "Experiencia", solutions: "Soluciones", portfolio: "Portafolio", contact: "Contacto", project: "Proyecto" },
    hero: {
      subtitle: "Agencia de Marketing Digital Premium",
      line1: "Expertos en",
      line2: "Digitalización",
      line3: "y Marketing",
      line4: "Innovador",
      description: "Haga realidad sus ambiciones con una agencia visionaria.",
      cta: "Iniciar Proyecto",
      portfolio: "Portafolio"
    },
    ai: { title: "Estratega IA", placeholder: "Ej: Riad en Marrakech...", button: "Analizar", status: "Gemini 3", newAnalysis: "Nuevo", prompt: "Eres un estratega. 3 consejos para:", hint: "¿Necesitas una estrategia?" },
    stats: { performance: "Rendimiento", growth: "Crecimiento", satisfaction: "Satisfacción", projects: "Proyectos", support: "Soporte" }
  },
  de: {
    nav: { home: "Home", agency: "Agentur", team: "Team", expertise: "Expertise", solutions: "Lösungen", portfolio: "Portfolio", contact: "Kontakt", project: "Projekt" },
    hero: {
      subtitle: "Premium-Digital-Marketing-Agentur",
      line1: "Experten für",
      line2: "Digitalisierung",
      line3: "und Marketing",
      line4: "Innovativ",
      description: "Erwecken Sie Ihre Ambitionen zum Leben.",
      cta: "Projekt starten",
      portfolio: "Portfolio"
    },
    ai: { title: "KI-Stratege", placeholder: "Z.B.: Riad in Marrakesch...", button: "Analysieren", status: "Gemini 3", newAnalysis: "Neu", prompt: "Sie sind Stratege. 3 Tipps für:", hint: "Strategie benötigt?" },
    stats: { performance: "Leistung", growth: "Wachstum", satisfaction: "Zufriedenheit", projects: "Projekte", support: "Support" }
  },
  it: {
    nav: { home: "Home", agency: "Agenzia", team: "Team", expertise: "Competenze", solutions: "Soluzioni", portfolio: "Portfolio", contact: "Contatti", project: "Progetto" },
    hero: {
      subtitle: "Agenzia di Digital Marketing Premium",
      line1: "Esperti in",
      line2: "Digitalizzazione",
      line3: "e Marketing",
      line4: "Innovativo",
      description: "Dai vita alle tue ambizioni.",
      cta: "Inizia Progetto",
      portfolio: "Portfolio"
    },
    ai: { title: "Stratega IA", placeholder: "Es: Riad a Marrakech...", button: "Analizza", status: "Gemini 3", newAnalysis: "Nuovo", prompt: "Sei uno stratega. 3 consigli per:", hint: "Serve una strategia?" },
    stats: { performance: "Prestazioni", growth: "Crescita", satisfaction: "Soddisfazione", projects: "Progetti", support: "Supporto" }
  },
  pt: {
    nav: { home: "Início", agency: "Agência", team: "Equipe", expertise: "Experiência", solutions: "Soluções", portfolio: "Portfólio", contact: "Contato", project: "Projeto" },
    hero: {
      subtitle: "Agência de Marketing Digital Premium",
      line1: "Especialistas em",
      line2: "Digitalização",
      line3: "e Marketing",
      line4: "Inovador",
      description: "Dê vida às suas ambições.",
      cta: "Iniciar Projeto",
      portfolio: "Portfólio"
    },
    ai: { title: "Estrategista IA", placeholder: "Ex: Riad em Marraquexe...", button: "Analisar", status: "Gemini 3", newAnalysis: "Novo", prompt: "Você é um estrategista. 3 dicas para:", hint: "Precisa de estratégia?" },
    stats: { performance: "Desempenho", growth: "Crescimento", satisfaction: "Satisfação", projects: "Projetos", support: "Suporte" }
  },
  ru: {
    nav: { home: "Главная", agency: "Агентство", team: "Команда", expertise: "Экспертиза", solutions: "Решения", portfolio: "Портфолио", contact: "Контакты", project: "Проект" },
    hero: {
      subtitle: "Премиальное агентство цифрового маркетинга",
      line1: "Эксперты по",
      line2: "Диджитализации",
      line3: "и Маркетингу",
      line4: "Инновации",
      description: "Воплотите свои амбиции в жизнь.",
      cta: "Начать проект",
      portfolio: "Портфолио"
    },
    ai: { title: "ИИ-стратег", placeholder: "Напр.: Риад в Марракеше...", button: "Анализ", status: "Gemini 3", newAnalysis: "Новый", prompt: "Вы стратег. 3 совета для:", hint: "Нужна стратегия?" },
    stats: { performance: "Эффективность", growth: "Рост", satisfaction: "Довольство", projects: "Проекты", support: "Поддержка" }
  },
  nl: {
    nav: { home: "Home", agency: "Bureau", team: "Team", expertise: "Expertise", solutions: "Oplossingen", portfolio: "Portfolio", contact: "Contact", project: "Project" },
    hero: {
      subtitle: "Premium Digital Marketing Bureau",
      line1: "Experts in",
      line2: "Digitalisering",
      line3: "en Marketing",
      line4: "Innovatief",
      description: "Breng uw ambities tot leven.",
      cta: "Start Project",
      portfolio: "Portfolio"
    },
    ai: { title: "AI-Strateeg", placeholder: "Bijv: Riad in Marrakesh...", button: "Analyseren", status: "Gemini 3", newAnalysis: "Nieuw", prompt: "U bent een strateeg. 3 tips voor:", hint: "Strategie nodig?" },
    stats: { performance: "Prestaties", growth: "Groei", satisfaction: "Tevredenheid", projects: "Projecten", support: "Support" }
  }
};