
import React, { CSSProperties } from 'react';
import { BentoCardProps } from '../lib/types';

interface ExtendedBentoCardProps extends BentoCardProps {
  delay?: number;
  style?: CSSProperties;
}

export const BentoCard: React.FC<ExtendedBentoCardProps> = ({ 
  children, 
  className = "", 
  noPadding = false,
  hoverEffect = true,
  delay = 0,
  style = {}
}) => {
  return (
    <div 
      className={`
        relative overflow-hidden 
        rounded-[32px]
        ${className}
      `}
      style={{ ...style }}
    >
      <div className={`relative z-10 h-full w-full flex flex-col ${noPadding ? '' : 'p-6 md:p-8'}`}>
        {children}
      </div>
    </div>
  );
};
