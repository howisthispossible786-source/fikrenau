import React from "react";
import HeroSection from "../sections/HeroSection";
import ImpactStatsSection from "../sections/ImpactStatsSection";

import WhatWeDoSection from "../sections/WhatWeDoSection";

import WhyFikrSection from "../sections/WhyFikrSection";

import CtaSection from "../sections/CtaSection";
import FaqSection from "../sections/FaqSection";

export const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. IMPACT / STATISTICS SECTION */}
      <ImpactStatsSection />

      {/* 4. WHAT WE DO SECTION */}
      <WhatWeDoSection />

      {/* 7. WHY FIKR-E-NAU SECTION */}
      <WhyFikrSection />

      {/* 10. CALL TO ACTION SECTION */}
      <CtaSection />

      {/* 11. FAQ SECTION */}
      <FaqSection />
    </div>
  );
};

export default HomePage;
