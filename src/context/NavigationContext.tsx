import React, { createContext, useContext, useState, ReactNode } from 'react';

type PageId = 'home' | 'agency' | 'team' | 'website-creation' | 'application-creation' | 'ecommerce' | 'domain-name' | 'hosting' | 'maintenance' | 'seo' | 'contact-page' | 'visual-identity' | 'portfolio' | 'majorelle-blog' | 'smashy-burger-blog' | 'come-with-us' | 'pack-siteweb' | 'pack-seo' | 'expertises' | 'solutions';

interface NavigationContextType {
  currentPage: string;
  navigate: (pageId: string) => void;
  isReviewModalOpen: boolean;
  setReviewModalOpen: (open: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);

  const navigate = (pageId: string) => {
    const homeSections = ['expertises', 'solutions', 'contact'];
    if (homeSections.includes(pageId)) {
        setCurrentPage('home');
    } else {
        setCurrentPage(pageId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate, isReviewModalOpen, setReviewModalOpen }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};