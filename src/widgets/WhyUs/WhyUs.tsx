import React from "react";
import style from "./WhyUs.module.scss";

interface Props {
  className?: string;
}

export const WhyUs: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={style.whyus}></div>
    </div>
  );
};
