import React from "react";
import styles from "./BounceCardsMobile.module.scss";

interface BounceCardsMobileProps {
  images: string[];
}

const BounceCardsMobile: React.FC<BounceCardsMobileProps> = ({ images }) => {
  return (
    <>
      <h2 className={styles.title}>Галерия</h2>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {images.map((src, idx) => (
            <div className={styles.card} key={idx}>
              <img src={src} alt={`card-${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BounceCardsMobile;
