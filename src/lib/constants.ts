import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', href: '#', id: 'home' },
  { label: 'Agence', href: '/agency', id: 'agency' },
  { label: 'Équipe', href: '/team', id: 'team' },
  { 
    label: 'Expertises', 
    href: '#expertises', 
    id: 'expertises',
    hasDropdown: true,
    dropdownItems: [
      { 
        label: 'Création De Site Web', 
        id: 'website-creation',
        href: '/website-creation',
        hasDropdown: true,
        dropdownItems: [
            { label: 'Sites E-Commerce', id: 'ecommerce', href: '/ecommerce' },
            { label: 'Noms de Domaine', id: 'domain-name', href: '/domain-name' },
            { label: 'Hébergement Web', id: 'hosting', href: '/hosting' },
            { label: 'Maintenance Web', id: 'maintenance', href: '/maintenance' }
        ]
      },
      { label: 'Référencement naturel', id: 'seo', href: '/seo' },
      { label: 'Sea & Smo', id: 'ads', href: '/sea-smo' },
      { label: 'création d\'application', id: 'application-creation', href: '/app-creation' },
      { label: 'Identité Visuelle', id: 'visual-identity', href: '/visual-identity' },
    ]
  },
  { 
    label: 'Solutions', 
    href: '#solutions', 
    id: 'solutions',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Pack SiteWeb', id: 'pack-siteweb', href: '/pack-siteweb' },
      { label: 'Pack SEO', id: 'pack-seo', href: '/pack-seo' }
    ]
  },
  { 
    label: 'Réalisations', 
    href: '#portfolio', 
    id: 'portfolio',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Majorelle Centre Affaires', id: 'proj-majorelle', href: 'https://majorelle-centreaffaires.com/' },
      { label: 'MM Réseaux Com', id: 'proj-mm', href: 'https://mm-reseauxcom.com/' },
      { label: 'Compagnons en Bâtiment', id: 'proj-batiment', href: 'https://group-descompagnonsenbatiment.com/' },
      { label: 'Location Centre d\'appel', id: 'proj-location', href: 'https://location-centredappel.com/' },
      { label: 'Group Plancy Call', id: 'proj-plancy', href: 'https://group-plancycall.com/' },
    ]
  },
  { label: 'Blog', href: '/blog', id: 'blog' },
  { label: 'À Propos', href: '/about', id: 'about' },
  { label: 'Contact', href: '/contact', id: 'contact-page' },
];

export const AGENCY_INFO = {
  subtitle: "Agence Marketing Digital Premium : La Clé Pour Développer Vos Revenus",
  titlePart1: "Experts en",
  titleHighlight1: "Digitalisation",
  titlePart2: "et Marketing",
  titleHighlight2: "Innovant",
  titlePart3: "",
  description: "Donnez Vie à Vos Ambitions Avec Une Agence Marketing Digital Visionnaire. Des Solutions Stratégiques Appuyées par des Résultats Concrets Pour Vous Accompagner dans le Monde Digital. Rejoignez Nos Clients Satisfaits et Faites Passer Votre Entreprise au Niveau Supérieur.",
  cta: "Lancer le projet",
  ctaTagline: "Dominez votre marché.",
  logoLight: "https://group-digitalconcept.com/wp-content/uploads/2026/01/Design-sans-titre-2026-01-05T145147.922.png",
  logoDark: "https://group-digitalconcept.com/wp-content/uploads/2025/12/Design-sans-titre-74.png",
  location: "Marrakech, Maroc",
  phone: "+212 5 24 00 00 00",
  name: "Group Digital Concept"
};

export const PARTNERS = [
  { 
    name: 'WordPress', 
    url: 'https://group-digitalconcept.com/wp-content/uploads/2025/03/WordPress_logo_2.svg',
    urlLight: 'https://group-digitalconcept.com/wp-content/uploads/2025/12/3e81d0ab-45b3-4b81-8ff5-becb4601d509.png'
  },
  { 
    name: 'Shopify', 
    url: 'https://group-digitalconcept.com/wp-content/uploads/2025/03/shfy-p-.svg',
    urlLight: 'https://group-digitalconcept.com/wp-content/uploads/2025/12/Shopify_logo_2018.svg'
  },
  { 
    name: 'PrestaShop', 
    url: 'https://group-digitalconcept.com/wp-content/uploads/2025/03/prestashop-logo.svg',
    urlLight: 'https://group-digitalconcept.com/wp-content/uploads/2025/12/fd743cf8-2ebb-4373-8149-b756dc763d79.png'
  },
  { 
    name: 'Meta', 
    url: 'https://group-digitalconcept.com/wp-content/uploads/2025/03/meta-p-.svg',
    urlLight: 'https://group-digitalconcept.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-09-at-16.45.32-6.jpeg'
  },
  { 
    name: 'Google', 
    url: 'https://group-digitalconcept.com/wp-content/uploads/2025/03/g-p-.svg',
    urlLight: 'https://group-digitalconcept.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-09-at-16.45.32-5-Modifie.png'
  },
  { 
    name: 'Google Cloud', 
    url: 'https://group-digitalconcept.com/wp-content/uploads/2025/03/gc-p-.svg',
    urlLight: 'https://group-digitalconcept.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-09-at-16.45.32-4.jpeg'
  },
  { 
    name: 'Elementor', 
    url: 'https://group-digitalconcept.com/wp-content/uploads/2025/03/Elementor-logo.svg',
    urlLight: 'https://group-digitalconcept.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-09-at-16.45.32-3-Modifie.png'
  },
  { 
    name: 'AWS', 
    url: 'https://group-digitalconcept.com/wp-content/uploads/2025/03/aws.svg',
    urlLight: 'https://group-digitalconcept.com/wp-content/uploads/2025/12/AWS.png'
  },
  { 
    name: 'GDC Premium', 
    url: 'https://group-digitalconcept.com/wp-content/uploads/2024/04/Design-sans-titre-23.png',
    urlLight: 'https://group-digitalconcept.com/wp-content/uploads/2025/12/c3eff455-d32a-4385-baa7-2d88301f4537.png'
  }
];

export const FORM_SERVICES = [
  "Stratégie & Consulting",
  "Branding & Identité",
  "Site Web Sur Mesure",
  "E-Commerce",
  "App Mobile / Web App",
  "UI/UX Design",
  "SEO & Référencement",
  "Publicité (Ads)",
  "Social Media",
  "Création de Contenu"
];

export const FORM_BUDGETS = [
  "< 20k MAD",
  "20k - 50k MAD",
  "50k - 100k MAD",
  "+ 100k MAD",
  "À définir"
];