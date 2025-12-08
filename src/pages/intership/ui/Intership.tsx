import React from "react";
import style from "./Intership.module.scss";
import { HeroSection } from "../../../widgets/InterShipHero/IntershipHero";
import { HowItWorks } from "../../../widgets/HowItWorks/HowItWorks";
import { CountriesSection } from "../../../widgets/CountriesSection/CountriesSection";
import { BenefitsSection } from "../../../widgets/BenefitsSection/BenefitsSection";
import { IntershipReviews } from "../../../widgets/IntershipReviews/IntershipReviews";
import { FAQSection } from "../../../widgets/FAQSection/FAQSection";
import { CTAApplySection } from "../../../widgets/CTAApplySection/CTAApplySection";
import { CompareCountriesSection } from "../../../widgets/CompareCountriesSection/CompareCountriesSection";
import JourneyTimeline from "../../../widgets/JourneyTimeline/JourneyTimeline";

interface Props {
  className?: string;
}

export const Intership: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={style.intership}>
        <HeroSection />
        <HowItWorks />
        <CountriesSection />
        <BenefitsSection />
        <IntershipReviews />
        <FAQSection />
        <CTAApplySection />

        <CompareCountriesSection />
      </div>
    </div>
  );
};
