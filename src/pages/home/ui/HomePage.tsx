import React from "react";
import { MainSection } from "../../../widgets/MainSection/MainSection";
import { WhoUs } from "../../../widgets/WhoUs/WhoUs";

interface Props {
  className?: string;
}

export const HomePage: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <MainSection />
      <WhoUs />
    </div>
  );
};
