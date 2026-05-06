import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/sections/cta";
import { DeliverablesSection } from "@/components/sections/deliverables";
import { FaqSection } from "@/components/sections/faq";
import { FeaturesSection } from "@/components/sections/features";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { HeroSection } from "@/components/sections/hero";
import { IndustriesSection } from "@/components/sections/industries";
import { WhatWeBuildSection } from "@/components/sections/what-we-build";
import { WhatWeDoSection } from "@/components/sections/what-we-do";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  return (
    <div className="min-h-full bg-[color:var(--color-background)]">
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider />
        <WhatWeDoSection />
        <SectionDivider />
        <WhatWeBuildSection />
        <SectionDivider />
        <FeaturesSection />
        <SectionDivider />
        <HowItWorksSection />
        <SectionDivider />
        <DeliverablesSection />
        <SectionDivider />
        <IndustriesSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <FaqSection />
        <SectionDivider />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
