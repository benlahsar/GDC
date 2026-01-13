import { NavItem } from './types';

export const getNavItems = (t: any): NavItem[] => [
  { label: t('nav.home'), href: '/', id: 'home' },
  { label: t('nav.agency'), href: '/agency', id: 'agency' },
  { label: t('nav.team'), href: '/team', id: 'team' },
  { 
    label: t('nav.expertise'), 
    href: '#expertises', 
    id: 'expertises',
    hasDropdown: true,
    dropdownItems: [
      { 
        label: t('header.navItems.websiteCreation'), 
        id: 'website-creation',
        href: '/website-creation',
        hasDropdown: true,
        dropdownItems: [
            { label: t('header.navItems.ecommerce'), id: 'ecommerce', href: '/ecommerce' },
            { label: t('header.navItems.domainName'), id: 'domain-name', href: '/domain-name' },
            { label: t('header.navItems.hosting'), id: 'hosting', href: '/hosting' },
            { label: t('header.navItems.maintenance'), id: 'maintenance', href: '/maintenance' }
        ]
      },
      { label: t('header.navItems.seo'), id: 'seo', href: '/seo' },
      { label: t('header.navItems.ads'), id: 'ads', href: '/sea-smo' },
      { label: t('header.navItems.appCreation'), id: 'application-creation', href: '/app-creation' },
      { label: t('header.navItems.visualIdentity'), id: 'visual-identity', href: '/visual-identity' },
    ]
  },
  { 
    label: t('nav.solutions'), 
    href: '#solutions', 
    id: 'solutions',
    hasDropdown: true,
    dropdownItems: [
      { label: t('header.navItems.packWebsite'), id: 'pack-siteweb', href: '/pack-siteweb' },
      { label: t('header.navItems.packSeo'), id: 'pack-seo', href: '/pack-seo' }
    ]
  },
  { 
    label: t('nav.portfolio'), 
    href: '/portfolio', 
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
  { label: t('nav.contact'), href: '/contact', id: 'contact-page' },
];
