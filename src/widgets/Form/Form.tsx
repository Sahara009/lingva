import React from "react";
import style from "./Form.module.scss";

interface Props {
  className?: string;
}

export const Form: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={style.form}></div>
    </div>
  );
};
