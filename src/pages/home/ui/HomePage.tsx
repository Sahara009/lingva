import React from "react";
import { MainSection } from "../../../widgets/MainSection/MainSection";
import { WhoUs } from "../../../widgets/WhoUs/WhoUs";
import { Questions } from "../../../widgets/Questions/Questions";
import { Values } from "../../../widgets/Values/Values";
import { Services } from "../../../widgets/Services/Services";
import FlowingMenu from "../../../widgets/FlowingMenu/FlowingMenu";
import styles from "./HomePage.module.scss";
import jordan from "../../../shared/assets/ahmad-qaisieh-mYEqvgcY1G4-unsplash.jpg";
import turkiye from "../../../shared/assets/amador-loureiro-QtMM_VGPlek-unsplash.jpg";
import oman from "../../../shared/assets/mostafa-meraji-29OZhYD3Nhc-unsplash.jpg";
import { Form } from "../../../widgets/Form/Form";
import { Blocks } from "../../../widgets/Blocks/Blocks";
import { Partnership } from "../../../widgets/Partnership/Partnership";
import { Tabs } from "../../../widgets/Tabs/Tabs";
import ForWhomSection from "../../../widgets/ForWhomSection/ForWhomSection";

interface Props {
  className?: string;
}

const demoItems = [
  {
    link: "#",
    text: "Иордании",
    image: jordan,
  },
  {
    link: "#",
    text: "Оман",
    image: oman,
  },
  {
    link: "#",
    text: "Турция",
    image: turkiye,
  },
];

export const HomePage: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <MainSection />
      <WhoUs />
      <Blocks />
      <Tabs />
      <ForWhomSection />
      <div className={styles.fullWidth} style={{ height: "100vh" }}>
        <FlowingMenu items={demoItems} />
      </div>
      <Values />
      <Services />
      {/* <Mission /> */}
      <Partnership />

      <Questions />
      <Form />
    </div>
  );
};
