import React from "react";
import { MainSection } from "../../../widgets/MainSection/MainSection";
import { WhoUs } from "../../../widgets/WhoUs/WhoUs";
import { Questions } from "../../../widgets/Questions/Questions";
import { Values } from "../../../widgets/Values/Values";
import { Services } from "../../../widgets/Services/Services";
import { Form } from "../../../widgets/Form/Form";
import { Partnership } from "../../../widgets/Partnership/Partnership";
import { Tabs } from "../../../widgets/Tabs/Tabs";
import ForWhomSection from "../../../widgets/ForWhomSection/ForWhomSection";
import { JourneyMapSection } from "../../../widgets/JorneyMapSection/JorneyMapSection";
import { useIsMobile } from "../../../lib/useIsMobile";
import { JourneyMapMobile } from "../../../widgets/JorneyMapSection/JourneyMapMobile";
import { Cards } from "../../../widgets/CountriesCarouselSection/CountriesCarouselSection";
import { CardsMobile } from "../../../widgets/CountriesCarouselSection/CountriesMobile";
import { CertificationSection } from "../../../widgets/CertificationSection/CertificationSection";
import { PartnershipOptions } from "../../../widgets/PartnershipOptions/PartnershipOptions";

interface Props {
  className?: string;
}

export const HomePage: React.FC<Props> = ({ className }) => {
  const isMobile = useIsMobile(1000);
  return (
    <div className={className}>
      <MainSection />
      <WhoUs />
      {isMobile ? <JourneyMapMobile /> : <JourneyMapSection />}

      <Tabs />
      <ForWhomSection />

      {isMobile ? <CardsMobile /> : <Cards />}
      <Values />
      <Services />
      {/* <Mission /> */}
      <Partnership />
      <PartnershipOptions />

      <CertificationSection />
      <Questions />
      <Form />
    </div>
  );
};
