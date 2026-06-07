import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, TreePine } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { cn } from "@/lib/utils";
import styles from "./Layout.module.scss";

type ModalKey = "privacy" | "terms" | "disclaimer" | null;

const MODAL_CONTENT: Record<NonNullable<ModalKey>, { title: string; body: React.ReactNode }> = {
  privacy: {
    title: "Privacy Policy",
    body: (
      <div className={styles.modalContent}>
        <p><strong>Effective Date:</strong> January 1, {new Date().getFullYear()}</p>
        <p>Rica Lumber and Deconstruction ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.</p>
        <h4 className={styles.modalContentHeading}>Information We Collect</h4>
        <p>We may collect personal information you voluntarily provide, such as your name, email address, or phone number when you contact us. We may also collect non-personal data such as browser type, IP address, and pages visited through standard server logs and analytics tools.</p>
        <h4 className={styles.modalContentHeading}>How We Use Your Information</h4>
        <p>We use the information we collect to respond to inquiries, improve our website, and communicate with you about our services. We do not sell, trade, or rent your personal information to third parties.</p>
        <h4 className={styles.modalContentHeading}>Data Security</h4>
        <p>We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
        <h4 className={styles.modalContentHeading}>Contact Us</h4>
        <p>If you have questions about this Privacy Policy, please contact us at info@ricarecycling.com.</p>
      </div>
    ),
  },
  terms: {
    title: "Terms of Service",
    body: (
      <div className={styles.modalContent}>
        <p><strong>Effective Date:</strong> January 1, {new Date().getFullYear()}</p>
        <p>By accessing or using the Rica Lumber and Deconstruction website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site.</p>
        <h4 className={styles.modalContentHeading}>Use of Site</h4>
        <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You may not use this site to transmit any harmful, offensive, or unlawful content.</p>
        <h4 className={styles.modalContentHeading}>Intellectual Property</h4>
        <p>All content on this website, including text, images, graphics, and logos, is the property of Rica Lumber and Deconstruction and is protected by applicable copyright and trademark laws. Unauthorized use is prohibited.</p>
        <h4 className={styles.modalContentHeading}>Limitation of Liability</h4>
        <p>Rica Lumber and Deconstruction shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this website or its content.</p>
        <h4 className={styles.modalContentHeading}>Changes to Terms</h4>
        <p>We reserve the right to update these Terms of Service at any time. Continued use of the site after changes constitutes your acceptance of the new terms.</p>
        <h4 className={styles.modalContentHeading}>Contact Us</h4>
        <p>Questions about these terms? Contact us at info@ricarecycling.com.</p>
      </div>
    ),
  },
  disclaimer: {
    title: "Disclaimer",
    body: (
      <div className={styles.modalContent}>
        <p><strong>General Information Only</strong></p>
        <p>The content on this website is provided for general informational purposes only. It does not constitute professional advice of any kind, including but not limited to legal, financial, environmental, or technical advice.</p>
        <h4 className={styles.modalContentHeading}>No Professional Relationship</h4>
        <p>Viewing or interacting with this website does not create a professional or contractual relationship between you and Rica Lumber and Deconstruction. Always consult a qualified professional before making decisions based on information found here.</p>
        <h4 className={styles.modalContentHeading}>Accuracy of Information</h4>
        <p>While we strive to keep the information on this website accurate and up to date, we make no warranties or representations of any kind about the completeness, accuracy, reliability, or availability of any information on this site.</p>
        <h4 className={styles.modalContentHeading}>External Links</h4>
        <p>This website may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
      </div>
    ),
  },
};

const LegalModal = ({ modalKey, onClose }: { modalKey: NonNullable<ModalKey>; onClose: () => void }) => {
  const { title, body } = MODAL_CONTENT[modalKey];
  return (
    <AnimatePresence>
      <motion.div
        className={styles.modalOverlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.modalBackdrop} onClick={onClose} />
        <motion.div
          className={styles.modalPanel}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
        >
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>{title}</h2>
            <button onClick={onClose} className={styles.modalCloseButton} aria-label="Close">
              <X className={styles.modalCloseIcon} />
            </button>
          </div>
          <div className={styles.modalBody}>{body}</div>
          <div className={styles.modalFooter}>
            <button onClick={onClose} className={styles.modalCloseAction}>
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [location] = useLocation();

  const links = [
    { name: "About", href: "/about" },
    { name: "Education", href: "/education" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerBar}>
          <div>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoIconGroup}>
                <span className={styles.logoBadge}>Rica</span>
                <img src="/src/assets/images/icon-cropped.svg" alt="Rica Logo" className={styles.logoIcon} />
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoName}>Rica</span>
                <span className={styles.logoDivider}>|</span>
                <span className={styles.logoTagline}>Lumber and Deconstruction</span>
              </div>
            </Link>
          </div>

          <nav className={styles.desktopNav}>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(styles.navLink, location === link.href && styles.navLinkActive)}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            className={styles.menuToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileMenu}
          >
            <nav className={styles.mobileNav}>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(styles.mobileNavLink, location === link.href && styles.mobileNavLinkActive)}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  const [activeModal, setActiveModal] = React.useState<ModalKey>(null);

  return (
    <>
      {activeModal && <LegalModal modalKey={activeModal} onClose={() => setActiveModal(null)} />}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <div className={styles.footerBrandHeader}>
                <TreePine className={styles.footerBrandIcon} />
                <span className={styles.footerBrandName}>Rica</span>
              </div>
              <p className={styles.footerBrandDescription}>
                An eco-focused deconstruction company recycling lumber and building materials through a worker-owned cooperative model.
              </p>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Contact Us</h3>
              <div className={styles.footerContactList}>
                <a href="mailto:info@ricarecycling.com" className={styles.footerEmailLink}>
                  info@ricarecycling.com
                </a>
                <span>Main: (555) 100-2000</span>
                <span>Office: (555) 100-2001</span>
                <span>Mobile: (555) 100-2002</span>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Follow Our Journey</h3>
              <p className={styles.footerBrandDescription}>
                Find us on social media for updates, project photos, and community news.
              </p>
              <div className={styles.footerSocialLinks}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.footerSocialLink}
                  aria-label="Facebook"
                >
                  <SiFacebook className={styles.footerSocialIcon} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.footerSocialLink}
                  aria-label="Instagram"
                >
                  <SiInstagram className={styles.footerSocialIcon} />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.footerCopyright}>
              &copy; {new Date().getFullYear()} Rica Lumber and Deconstruction. All rights reserved. A Worker-Owned Cooperative.
            </p>
            <div className={styles.footerLegalLinks}>
              <button
                onClick={() => setActiveModal("privacy")}
                className={styles.footerLegalLink}
                data-testid="link-privacy-policy"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveModal("terms")}
                className={styles.footerLegalLink}
                data-testid="link-terms-of-service"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setActiveModal("disclaimer")}
                className={styles.footerLegalLink}
                data-testid="link-disclaimer"
              >
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
