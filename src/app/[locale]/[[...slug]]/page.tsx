import React from 'react';
import { notFound } from 'next/navigation';

import HomePage from '../../page';
import AboutPage from '../../about/page';
import AgencyPage from '../../agency/page';
import AppCreationPage from '../../app-creation/page';
import BlogIndexPage from '../../blog/page';
import BlogMajorellePage from '../../blog/majorelle-centre-affaires/page';
import BlogSmashyBurgerPage from '../../blog/smashy-burger/page';
import ComeWithUsPage from '../../come-with-us/page';
import ContactPage from '../../contact/page';
import DomainNamePage from '../../domain-name/page';
import EcommercePage from '../../ecommerce/page';
import HostingPage from '../../hosting/page';
import MaintenancePage from '../../maintenance/page';
import PackSeoPage from '../../pack-seo/page';
import PackSitewebPage from '../../pack-siteweb/page';
import PortfolioPage from '../../portfolio/page';
import SeaSmoPage from '../../sea-smo/page';
import SeoPage from '../../seo/page';
import SmashyBgBlogPage from '../../smashy-bg-blog/page';
import TeamPage from '../../team/page';
import VisualIdentityPage from '../../visual-identity/page';
import WebsiteCreationPage from '../../website-creation/page';

const ROUTES: Record<string, React.ComponentType> = {
  '': HomePage,
  'about': AboutPage,
  'agency': AgencyPage,
  'app-creation': AppCreationPage,
  'blog': BlogIndexPage,
  'blog/majorelle-centre-affaires': BlogMajorellePage,
  'blog/smashy-burger': BlogSmashyBurgerPage,
  'come-with-us': ComeWithUsPage,
  'contact': ContactPage,
  'domain-name': DomainNamePage,
  'ecommerce': EcommercePage,
  'hosting': HostingPage,
  'maintenance': MaintenancePage,
  'pack-seo': PackSeoPage,
  'pack-siteweb': PackSitewebPage,
  'portfolio': PortfolioPage,
  'sea-smo': SeaSmoPage,
  'seo': SeoPage,
  'smashy-bg-blog': SmashyBgBlogPage,
  'team': TeamPage,
  'visual-identity': VisualIdentityPage,
  'website-creation': WebsiteCreationPage
};

export default function LocalizedPage({
  params
}: {
  params: { locale: string; slug?: string[] };
}) {
  const slug = params.slug ?? [];
  const path = slug.join('/');

  const Page = ROUTES[path];
  if (!Page) {
    notFound();
  }

  return <Page />;
}
