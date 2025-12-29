
import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
  id?: string;
  hasDropdown?: boolean;
  dropdownItems?: NavItem[];
}

export interface BentoCardProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
  hoverEffect?: boolean;
}

export interface StatProps {
  value: string;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
}
