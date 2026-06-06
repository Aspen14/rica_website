import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.subtitle}>
            Whether you have a structure ready for deconstruction, need quality reclaimed lumber, or just want to learn more about our cooperative, we'd love to hear from you.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.contactCard}
          >
            <h2 className={styles.cardTitle}>
              <Phone className={styles.cardTitleIcon} /> Contact Info
            </h2>

            <div className={styles.contactSections}>
              <div>
                <h3 className={styles.sectionLabel}>Phone Directory</h3>
                <ul className={styles.phoneList}>
                  <li className={styles.phoneItem}>
                    <span>Main Desk</span>
                    <a href="tel:5551002000" className={styles.phoneLink}>(555) 100-2000</a>
                  </li>
                  <li className={styles.phoneItem}>
                    <span>Office</span>
                    <a href="tel:5551002001" className={styles.phoneLink}>(555) 100-2001</a>
                  </li>
                  <li className={styles.phoneItem}>
                    <span>Mobile/Site</span>
                    <a href="tel:5551002002" className={styles.phoneLink}>(555) 100-2002</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={styles.sectionLabelWithIcon}>
                  <Mail className={styles.sectionLabelIcon} /> Email
                </h3>
                <a href="mailto:info@ricarecycling.com" className={styles.emailLink}>
                  info@ricarecycling.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.socialColumn}
          >
            <div className={styles.socialCard}>
              <h2 className={styles.socialTitle}>Connect With Us</h2>
              <p className={styles.socialDescription}>
                Follow our daily work, see our latest reclaimed materials, and join the conversation about sustainable building.
              </p>

              <div className={styles.socialLinks}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                  aria-label="Visit our Facebook page"
                >
                  <SiFacebook className={styles.socialIcon} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                  aria-label="Visit our Instagram page"
                >
                  <SiInstagram className={styles.socialIcon} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
