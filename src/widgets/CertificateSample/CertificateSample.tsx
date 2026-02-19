import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import styles from "./CertificateSample.module.scss";
import cert from "../../shared/assets/2026-02-17_15-08-20.png";
import certification1Pdf from "../../shared/assets/certification1.pdf";
import certification2Pdf from "../../shared/assets/certificationPdf2.pdf";

const certificates = [
  {
    id: 1,
    title: "Международный сертификат",
    description: "Официальное подтверждение уровня владения языком A1-C2",
    pdfUrl: certification1Pdf,
    src: cert,
  },
];

export const CertificateSample = () => {
  return (
    <section className={styles.samples}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Образец сертификата
      </motion.h2>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Ознакомьтесь с образцом сертификата, который вы можете получить после
        успешной сдачи экзамена
      </motion.p>

      <div className={styles.sampleGrid}>
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            className={styles.sampleCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className={styles.pdfPreview}>
              {/* <div className={styles.pdfIcon}>
                <FileText size={48} />
              </div>
              <span className={styles.pdfLabel}>PDF</span> */}
              <img className="certIamge" src={cert.src} alt="image" />
            </div>

            <div className={styles.certInfo}>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
            </div>

            <div className={styles.actions}>
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewBtn}
              >
                <ExternalLink size={18} />
                Просмотреть
              </a>
              <a
                href={cert.pdfUrl}
                download={`certificate-${cert.id}.pdf`}
                className={styles.downloadBtn}
              >
                <Download size={18} />
                Скачать
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
