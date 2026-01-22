import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Gallery.module.scss";

interface GalleryProps {
  images: string[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;

    const scrollAmount = trackRef.current.offsetWidth * 0.8;
    trackRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.gallery}>
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => scroll("left")}
        aria-label="Scroll left"
      >
        <ChevronLeft size={22} />
      </button>

      <div className={styles.track} ref={trackRef}>
        {images.map((src, index) => (
          <div className={styles.imageWrapper} key={index}>
            <img src={src} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => scroll("right")}
        aria-label="Scroll right"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
};
