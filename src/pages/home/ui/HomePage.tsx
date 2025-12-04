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
import BounceCards from "../../../widgets/BounceCards/BounceCards";
import BounceCardsMobile from "../../../widgets/BounceCards/BounceCardsMobile";

interface Props {
  className?: string;
}

const images = [
  "https://picsum.photos/400/400?grayscale",
  "https://picsum.photos/500/500?grayscale",
  "https://picsum.photos/600/600?grayscale",
  "https://picsum.photos/700/700?grayscale",
  "https://picsum.photos/300/300?grayscale",
];
const transformStyles = [
  "rotate(5deg) translate(-400px)",
  "rotate(0deg) translate(-210px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(200px)",
  "rotate(-5deg) translate(390px)",
];

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
      {isMobile ? (
        <BounceCardsMobile images={images} />
      ) : (
        <BounceCards
          className="custom-bounceCards"
          images={images}
          containerWidth={500}
          containerHeight={250}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={false}
        />
      )}

      <Questions />
      <Form />
    </div>
  );
};
