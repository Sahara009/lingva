import React from "react";
import { MainSection } from "../../../widgets/MainSection/MainSection";

interface Props {
  className?: string;
}

export const HomePage: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <MainSection />
    </div>
  );
};
