
import React from 'react';
import { ChevronRight, Home, Zap } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

interface BreadcrumbNode {
  id: string;
  label: string;
  parentId?: string;
  isVirtual?: boolean; // If true, clicking it navigates to 'home' or specific section
}

const PAGE_HIERARCHY: Record<string, BreadcrumbNode> = {
  'agency': { id: 'agency', label: "L'Agence" },
  'team': { id: 'team', label: "Notre Équipe" },
  'portfolio': { id: 'portfolio', label: "Réalisations" },
  'website-creation': { id: 'website-creation', label: "Création Web", parentId: 'expertises' },
  'ecommerce': { id: 'ecommerce', label: "E-Commerce", parentId: 'website-creation' },
  'domain-name': { id: 'domain-name', label: "Noms de Domaine", parentId: 'website-creation' },
  'hosting': { id: 'hosting', label: "Hébergement", parentId: 'website-creation' },
  'maintenance': { id: 'maintenance', label: "Maintenance", parentId: 'website-creation' },
  'seo': { id: 'seo', label: "Référencement SEO", parentId: 'expertises' },
  'application-creation': { id: 'application-creation', label: "Applications", parentId: 'expertises' },
  'visual-identity': { id: 'visual-identity', label: "Identité Visuelle", parentId: 'expertises' },
  'pack-siteweb': { id: 'pack-siteweb', label: "Pack Site Web", parentId: 'solutions' },
  'pack-seo': { id: 'pack-seo', label: "Pack SEO", parentId: 'solutions' },
  'contact-page': { id: 'contact-page', label: "Contact" },
  'majorelle-blog': { id: 'majorelle-blog', label: "Majorelle Centre", parentId: 'portfolio' },
  'smashy-burger-blog': { id: 'smashy-burger-blog', label: "Smashy Burger", parentId: 'portfolio' },
  'come-with-us': { id: 'come-with-us', label: "Come With Us", parentId: 'portfolio' },
  // Virtual parents (labels used in breadcrumbs that link to home sections or are just text)
  'expertises': { id: 'expertises', label: "Expertises", isVirtual: true },
  'solutions': { id: 'solutions', label: "Solutions", isVirtual: true },
};

export const Breadcrumbs: React.FC = () => {
  const { currentPage, navigate } = useNavigation();

  if (currentPage === 'home') return null;

  const buildPath = (pageId: string): BreadcrumbNode[] => {
    const path: BreadcrumbNode[] = [];
    let currentId: string | undefined = pageId;

    while (currentId && PAGE_HIERARCHY[currentId]) {
      const node = PAGE_HIERARCHY[currentId];
      path.unshift(node);
      currentId = node.parentId;
    }

    return path;
  };

  const breadcrumbPath = buildPath(currentPage);

  return (
    <nav className="relative z-50 pt-32 md:pt-40 px-4 md:px-8 lg:px-12 max-w-[1700px] mx-auto animate-fade-in-up">
      <div className="inline-flex flex-wrap items-center gap-1.5 md:gap-2 p-1.5 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-sm">
        {/* Homepage link */}
        <button 
          onClick={() => navigate('home')}
          className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white group"
        >
          <Home size={14} className="group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Accueil</span>
        </button>
        
        {breadcrumbPath.map((node, index) => {
          const isLast = index === breadcrumbPath.length - 1;

          return (
            <React.Fragment key={node.id}>
              <ChevronRight size={12} className="text-gray-300 dark:text-gray-700 shrink-0" />
              
              {isLast ? (
                <div className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl bg-brand-red/10 border border-brand-red/20 shadow-[0_0_15px_rgba(255,0,0,0.1)]">
                  <Zap size={12} className="text-brand-red animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-red whitespace-nowrap">
                    {node.label}
                  </span>
                </div>
              ) : (
                <button 
                  onClick={() => navigate(node.id)}
                  className="px-3 md:px-4 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white whitespace-nowrap"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest">{node.label}</span>
                </button>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
