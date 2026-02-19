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
import image1 from "../../../shared/assets/young-students-learning-together-group-study.jpg";
import image2 from "../../../shared/assets/students-working-study-group.jpg";
import image3 from "../../../shared/assets/group-teenagers-laughing-together.jpg";
import image4 from "../../../shared/assets/загруженное.png.jfif";
import image5 from "../../../shared/assets/Jordan and Petra Ultimate Adventure _ Explorer Chick.jfif";
import image6 from "../../../shared/assets/fogkf.jfif";

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
        <Gallery images={[image1, image4, image2, image6, image3, image5]} />

        {/* <CompareCountriesSection /> */}
        <CTAApplySection />
      </div>
    </div>
  );
};
