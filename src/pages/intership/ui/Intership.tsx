import React from "react";
import style from "./Intership.module.scss";
import { HowItWorks } from "../../../widgets/HowItWorks/HowItWorks";
import { CountriesSection } from "../../../widgets/CountriesSection/CountriesSection";
import { BenefitsSection } from "../../../widgets/BenefitsSection/BenefitsSection";
import { IntershipReviews } from "../../../widgets/IntershipReviews/IntershipReviews";
import { CTAApplySection } from "../../../widgets/CTAApplySection/CTAApplySection";
// import { CompareCountriesSection } from "../../../widgets/CompareCountriesSection/CompareCountriesSection";
import { LangLevel } from "../../../widgets/LangLevel/LangLevel";
import { Gallery } from "../../../shared/ui/Gallery/Gallery";

interface Props {
  className?: string;
}

export const Intership: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={style.intership}>
        <HowItWorks />
        <CountriesSection />
        <BenefitsSection />
        <IntershipReviews />
        <LangLevel />
        <Gallery
          images={[
            "https://picsum.photos/seed/1/800/600",
            "https://picsum.photos/seed/2/800/600",
            "https://picsum.photos/seed/3/800/600",
            "https://picsum.photos/seed/4/800/600",
            "https://picsum.photos/seed/5/800/600",
            "https://picsum.photos/seed/6/800/600",
          ]}
        />

        {/* <CompareCountriesSection /> */}
        <CTAApplySection />
      </div>
    </div>
  );
};
