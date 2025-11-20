import React from "react";
import styles from "./Mission.module.scss";

interface Props {
  className?: string;
}

export const Mission: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className={styles.mission}></div>
    </div>
  );
};
