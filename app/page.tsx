import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { RouteMapSection } from '@/components/sections/route-map';
import { FleetSection } from '@/components/sections/fleet';
import { PricingSection } from '@/components/sections/pricing';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <RouteMapSection />
      <FleetSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}