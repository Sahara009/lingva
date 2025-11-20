import React from "react";
import { MainSection } from "../../../widgets/MainSection/MainSection";
import { WhoUs } from "../../../widgets/WhoUs/WhoUs";
import { Blocks } from "../../../widgets/Blocks/Blocks";
import { Countries } from "../../../widgets/Countries/Countries";

interface Props {
  className?: string;
}

export const HomePage: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <MainSection />
      <WhoUs />
      <Blocks />
      {/* <MIssion /> */}
      <Countries />
    </div>
  );
};
