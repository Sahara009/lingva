import React from "react";
import { MainSection } from "../../../widgets/MainSection/MainSection";
import { WhoUs } from "../../../widgets/WhoUs/WhoUs";
import { Blocks } from "../../../widgets/Blocks/Blocks";
import { Countries } from "../../../widgets/Countries/Countries";
import { Questions } from "../../../widgets/Questions/Questions";
import { Values } from "../../../widgets/Values/Values";
import { Services } from "../../../widgets/Services/Services";
import FlowingMenu from "../../../widgets/FlowingMenu/FlowingMenu";
import styles from "./HomePage.module.scss";

interface Props {
  className?: string;
}

const demoItems = [
  {
    link: "#",
    text: "Mojave",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "Sonoma",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Monterey",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Sequoia",
    image: "https://picsum.photos/600/400?random=4",
  },
];

export const HomePage: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <MainSection />
      <WhoUs />
      <Blocks />
      {/* <Countries /> */}
      <div className={styles.fullWidth} style={{ height: "100vh" }}>
        <FlowingMenu items={demoItems} />
      </div>
      <Questions />
      <Values />
      <Services />
    </div>
  );
};
