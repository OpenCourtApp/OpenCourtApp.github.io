import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Solution } from "@/components/sections/solution";
import { Audience } from "@/components/sections/audience";
import { Features } from "@/components/sections/features";
import { FeatureDashboard } from "@/components/sections/feature-dashboard";
import { FeatureCalendar } from "@/components/sections/feature-calendar";
import { FeaturePermissions } from "@/components/sections/feature-permissions";
import { Security } from "@/components/sections/security";
import { Tech } from "@/components/sections/tech";
import { Team } from "@/components/sections/team";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProblemSolution />
        <Solution />
        <Audience />
        <Features />
        <FeatureDashboard />
        <FeatureCalendar />
        <FeaturePermissions />
        <Security />
        <Tech />
        <Team />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
