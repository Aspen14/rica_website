import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";

export default function Contact() {
  return (
    <div className="flex-1 bg-[#F8F7F5] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#456C1B] mb-6">Get in Touch</h1>
          <p className="text-lg text-[#515048] font-light max-w-2xl mx-auto">
            Whether you have a structure ready for deconstruction, need quality reclaimed lumber, or just want to learn more about our cooperative, we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-[#E5E4DF]"
          >
            <h2 className="text-2xl font-bold text-[#C97023] mb-8 flex items-center gap-3">
              <Phone className="w-6 h-6" /> Contact Info
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-[#515048] uppercase tracking-wider mb-3">Phone Directory</h3>
                <ul className="space-y-4 text-[#515048] font-light">
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span>Main Desk</span>
                    <a href="tel:5551002000" className="font-medium hover:text-[#C97023] transition-colors">(555) 100-2000</a>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span>Office</span>
                    <a href="tel:5551002001" className="font-medium hover:text-[#C97023] transition-colors">(555) 100-2001</a>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span>Mobile/Site</span>
                    <a href="tel:5551002002" className="font-medium hover:text-[#C97023] transition-colors">(555) 100-2002</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#515048] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </h3>
                <a href="mailto:info@ricarecycling.com" className="text-lg font-medium text-[#456C1B] hover:text-[#C97023] transition-colors">
                  info@ricarecycling.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-[#456C1B] text-white p-8 md:p-12 rounded-xl shadow-lg h-full flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <p className="font-light text-gray-200 mb-8 max-w-sm">
                Follow our daily work, see our latest reclaimed materials, and join the conversation about sustainable building.
              </p>
              
              <div className="flex gap-6">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white text-[#456C1B] p-4 rounded-full hover:bg-[#C97023] hover:text-white hover:scale-110 transition-all duration-300 shadow-md"
                  aria-label="Visit our Facebook page"
                >
                  <SiFacebook className="w-8 h-8" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white text-[#456C1B] p-4 rounded-full hover:bg-[#C97023] hover:text-white hover:scale-110 transition-all duration-300 shadow-md"
                  aria-label="Visit our Instagram page"
                >
                  <SiInstagram className="w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
