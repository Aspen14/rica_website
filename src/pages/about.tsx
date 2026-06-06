import React from "react";
import { motion } from "framer-motion";
import { Leaf, Users, Hammer } from "lucide-react";

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#515048]">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/images/about-hero.png" 
            alt="Rica founders with reclaimed lumber" 
            className="w-full h-full object-cover opacity-70"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1540981493580-8ea1113e9968?q=80&w=2000&auto=format&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#515048] to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            Building a sustainable future, <span className="text-[#C97023]">together.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-200 text-sm md:text-base font-light italic"
          >
            Photo of our founders — coming soon
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F7F5]">
        <motion.div 
          className="container mx-auto max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-[#456C1B] mb-8 relative inline-block">
            Our Story
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#C97023]"></span>
          </motion.h2>
          
          <div className="space-y-6 text-[#515048] text-lg leading-relaxed font-light">
            <motion.p variants={fadeInUp}>
              Rica Lumber and Deconstruction was born out of a shared belief that the materials making up our built environment deserve a second life, and the people doing the work deserve dignity, respect, and a stake in their labor. What started as a small crew of environmentally-conscious tradespeople has grown into a dedicated worker-owned cooperative committed to transforming how our community handles demolition.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Every year, millions of tons of usable lumber, fixtures, and architectural elements are sent to landfills simply because it's faster to destroy than to dismantle. We take the slower, more deliberate path. Through careful deconstruction, we salvage old-growth wood and heritage materials, making them available to local builders, artisans, and homeowners while drastically reducing the carbon footprint of property redevelopment.
            </motion.p>
            <motion.p variants={fadeInUp}>
              As a cooperative, we operate differently. Every worker at Rica has the opportunity to become an owner. This means the people pulling the nails, sorting the lumber, and driving the trucks have a voice in how the business is run and share in the profits they help create. We believe that environmental sustainability must go hand-in-hand with economic sustainability for our community.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E5E4DF]">
        <motion.div 
          className="container mx-auto max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-[#456C1B] mb-16 text-center">
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-[#F8F7F5] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C97023] transition-colors duration-300">
                <Leaf className="w-10 h-10 text-[#456C1B] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#515048] mb-4">Sustainability</h3>
              <p className="text-[#515048] font-light">
                We believe in keeping usable materials out of landfills. Every piece of lumber saved is a tree left standing and a resource returned to the community.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-[#F8F7F5] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C97023] transition-colors duration-300">
                <Users className="w-10 h-10 text-[#456C1B] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#515048] mb-4">Community</h3>
              <p className="text-[#515048] font-light">
                We are rooted in the place we work. By providing salvaged materials locally, we support the local economy, artists, and builders while preserving regional history.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-[#F8F7F5] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C97023] transition-colors duration-300">
                <Hammer className="w-10 h-10 text-[#456C1B] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#515048] mb-4">Dignity of Work</h3>
              <p className="text-[#515048] font-light">
                Through our cooperative model, we ensure fair wages, safe conditions, and democratic ownership for the workers whose sweat builds our success.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
