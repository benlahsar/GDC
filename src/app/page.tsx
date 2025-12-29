import { HeroBento } from "../components/HeroBento";
import { ServicesSection } from "../components/ServicesSection";
import { SolutionsSection } from "../components/SolutionsSection";
import { TimelineSection } from "../components/TimelineSection";
import { ContactSection } from "../components/ContactSection";
import { Partners } from "../components/Partners";
import { TeamExpertiseSection } from "../components/TeamExpertiseSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FinalCTA } from "../components/FinalCTA";

export default function Home() {
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
}
