import React from "react";
import { CheckCircle } from "lucide-react";
import styles from "./StickyNoteCard.module.scss";

interface StickyNoteCardProps {
  title: string;
  items: string[];
}

export const StickyNoteCard: React.FC<StickyNoteCardProps> = ({
  title,
  items,
}) => {
  return (
    <div className={styles.stickyNote + " cardAnim"}>
      <div className={styles.pin} />
      <h3>{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <CheckCircle className={styles.icon} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
