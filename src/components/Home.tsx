
import React from 'react';
import { HeroBento } from './HeroBento';
import { ServicesSection } from './ServicesSection';
import { SolutionsSection } from './SolutionsSection';
import { TimelineSection } from './TimelineSection';
import { ContactSection } from './ContactSection';
import { Partners } from './Partners';
import { TeamExpertiseSection } from './TeamExpertiseSection';
import { TestimonialsSection } from './TestimonialsSection';
import { FinalCTA } from './FinalCTA';

export const Home: React.FC = () => {
  return (
    <>
        <HeroBento />
        <ServicesSection />
        <Partners />
        <TimelineSection />
        <SolutionsSection />
        <TestimonialsSection />
        <ContactSection />
        <TeamExpertiseSection />
        <FinalCTA />
    </>
  );
};
