import React from "react";
import style from "./Blocks.module.scss";

interface Props {
  className?: string;
}

export const Blocks: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={style.blocks}></div>
    </div>
  );
};
