import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, TreePine } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiFacebook, SiInstagram } from "react-icons/si";

type ModalKey = "privacy" | "terms" | "disclaimer" | null;

const MODAL_CONTENT: Record<NonNullable<ModalKey>, { title: string; body: React.ReactNode }> = {
  privacy: {
    title: "Privacy Policy",
    body: (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <p><strong>Effective Date:</strong> January 1, {new Date().getFullYear()}</p>
        <p>Rica Lumber and Deconstruction ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.</p>
        <h4 className="font-semibold text-[#456C1B]">Information We Collect</h4>
        <p>We may collect personal information you voluntarily provide, such as your name, email address, or phone number when you contact us. We may also collect non-personal data such as browser type, IP address, and pages visited through standard server logs and analytics tools.</p>
        <h4 className="font-semibold text-[#456C1B]">How We Use Your Information</h4>
        <p>We use the information we collect to respond to inquiries, improve our website, and communicate with you about our services. We do not sell, trade, or rent your personal information to third parties.</p>
        <h4 className="font-semibold text-[#456C1B]">Data Security</h4>
        <p>We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
        <h4 className="font-semibold text-[#456C1B]">Contact Us</h4>
        <p>If you have questions about this Privacy Policy, please contact us at info@ricarecycling.com.</p>
      </div>
    ),
  },
  terms: {
    title: "Terms of Service",
    body: (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <p><strong>Effective Date:</strong> January 1, {new Date().getFullYear()}</p>
        <p>By accessing or using the Rica Lumber and Deconstruction website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site.</p>
        <h4 className="font-semibold text-[#456C1B]">Use of Site</h4>
        <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You may not use this site to transmit any harmful, offensive, or unlawful content.</p>
        <h4 className="font-semibold text-[#456C1B]">Intellectual Property</h4>
        <p>All content on this website, including text, images, graphics, and logos, is the property of Rica Lumber and Deconstruction and is protected by applicable copyright and trademark laws. Unauthorized use is prohibited.</p>
        <h4 className="font-semibold text-[#456C1B]">Limitation of Liability</h4>
        <p>Rica Lumber and Deconstruction shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this website or its content.</p>
        <h4 className="font-semibold text-[#456C1B]">Changes to Terms</h4>
        <p>We reserve the right to update these Terms of Service at any time. Continued use of the site after changes constitutes your acceptance of the new terms.</p>
        <h4 className="font-semibold text-[#456C1B]">Contact Us</h4>
        <p>Questions about these terms? Contact us at info@ricarecycling.com.</p>
      </div>
    ),
  },
  disclaimer: {
    title: "Disclaimer",
    body: (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        <p><strong>General Information Only</strong></p>
        <p>The content on this website is provided for general informational purposes only. It does not constitute professional advice of any kind, including but not limited to legal, financial, environmental, or technical advice.</p>
        <h4 className="font-semibold text-[#456C1B]">No Professional Relationship</h4>
        <p>Viewing or interacting with this website does not create a professional or contractual relationship between you and Rica Lumber and Deconstruction. Always consult a qualified professional before making decisions based on information found here.</p>
        <h4 className="font-semibold text-[#456C1B]">Accuracy of Information</h4>
        <p>While we strive to keep the information on this website accurate and up to date, we make no warranties or representations of any kind about the completeness, accuracy, reliability, or availability of any information on this site.</p>
        <h4 className="font-semibold text-[#456C1B]">External Links</h4>
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
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative bg-white rounded-xl shadow-2xl w-full max-w-xl max-h-[80vh] flex flex-col"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-[#515048]">{title}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="overflow-y-auto px-6 py-5 flex-1">{body}</div>
          <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#456C1B] text-white text-sm font-medium hover:bg-[#3a5a16] transition-colors"
            >
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
    <header className="sticky top-0 z-50 w-full bg-[#515048] text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <div className="flex flex-col items-center">
                <TreePine className="h-8 w-8 text-[#456C1B]" />
                <span className="text-[10px] font-bold text-[#C97023] uppercase tracking-wider">Rica</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-xl tracking-tight">Rica</span>
                <span className="text-gray-300 mx-2">|</span>
                <span className="font-light text-gray-200">Recycling & Waste</span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium tracking-wide hover:text-[#C97023] transition-colors ${
                  location === link.href ? "text-[#C97023]" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button 
            className="md:hidden p-2 text-white hover:text-[#C97023] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#515048] border-t border-gray-600"
          >
            <nav className="flex flex-col px-4 py-6 gap-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium tracking-wide ${
                    location === link.href ? "text-[#C97023]" : "text-white"
                  }`}
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
      <footer className="bg-[#456C1B] text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <TreePine className="h-8 w-8 text-[#C97023]" />
                <span className="font-bold text-xl tracking-tight">Rica</span>
              </div>
              <p className="text-gray-200 font-light max-w-sm">
                An eco-focused deconstruction company recycling lumber and building materials through a worker-owned cooperative model.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg text-[#C97023]">Contact Us</h3>
              <div className="flex flex-col gap-2 font-light text-gray-200">
                <a href="mailto:info@ricarecycling.com" className="hover:text-white transition-colors">
                  info@ricarecycling.com
                </a>
                <span>Main: (555) 100-2000</span>
                <span>Office: (555) 100-2001</span>
                <span>Mobile: (555) 100-2002</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg text-[#C97023]">Follow Our Journey</h3>
              <p className="text-gray-200 font-light">
                Find us on social media for updates, project photos, and community news.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-[#C97023] hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-[#C97023] hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-gray-300 font-light">
              &copy; {new Date().getFullYear()} Rica Lumber and Deconstruction. All rights reserved. A Worker-Owned Cooperative.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2">
              <button
                onClick={() => setActiveModal("privacy")}
                className="text-xs text-gray-300 hover:text-white underline underline-offset-2 transition-colors"
                data-testid="link-privacy-policy"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveModal("terms")}
                className="text-xs text-gray-300 hover:text-white underline underline-offset-2 transition-colors"
                data-testid="link-terms-of-service"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setActiveModal("disclaimer")}
                className="text-xs text-gray-300 hover:text-white underline underline-offset-2 transition-colors"
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
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
};
