import React from "react";
import { motion } from "framer-motion";
import { Leaf, Users, Hammer, Scale, Eye, TrafficCone } from "lucide-react";

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
            Ways to join the worker-owned cooperative — coming soon!
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F7F5]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-24">

            {/* Section 1: About Us */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg items-center"
            >
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-[#456C1B] mb-8">
                  About Us
                </motion.h2>
                <motion.p variants={fadeInUp}>
                  Rica Lumber & Deconstruction grew from the vision that here in Northern Colorado, we could intentionally re-harvest value from existing buildings to construct a more equitable and beautiful future. We know that using reclaimed building materials makes buildings not just sustainable but also affordable.

                  At Rica, we’re a women- and queer-owned worker cooperative that puts environmental responsibility and social impact first. This cooperative approach means that our success isn’t just celebrated by owners - it’s shared by every team member who contributes to our mission.
                </motion.p>
            </motion.section>

            {/* Section 2: Our Story */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1 space-y-6 text-[#515048] font-light leading-relaxed">
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-[#C97023] mb-8">
                  Our Story
                </motion.h2>
                <motion.p variants={fadeInUp}>
                  Jae and Evelyn hatched this idea after swapping stories about their passion for equity and the environment. Jae’s experience building a sustainable material transfer station in Costa Rica informed their interest in locally sourced materials. Evelyn’s experience in the chemicals in building materials showed her that things could be done so much better. Plus, they both had dogs that needed walking! When we’re not geeking out about sustainability you can usually find us outdoors: hiking, camping, sailing, and horseback riding.
                </motion.p>
              </div>
              <motion.div variants={fadeInUp} className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/src/assets/images/founders.jpg"
                  alt="Reclaimed wood planks in a workshop"
                  className="w-full h-[400px] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000&auto=format&fit=crop';
                  }}
                />
              </motion.div>
            </motion.section>

          </div>

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
                <Hammer className="w-10 h-10 text-[#456C1B] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#515048] mb-4">Craft</h3>
              <p className="text-[#515048] font-light">
                We value skill, care, and attention in how materials are removed, handled, and prepared for reuse. Quality matters – both in the work itself and in the spaces those materials will shape next.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-[#F8F7F5] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C97023] transition-colors duration-300">
                <Users className="w-10 h-10 text-[#456C1B] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#515048] mb-4">Community</h3>
              <p className="text-[#515048] font-light">
                We believe materials, labor, and knowledge should circulate locally whenever possible. Our work is rooted in relationships – with contractors, homeowners, designers, and neighbors – and in contributing to the places where we live and work.              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-[#F8F7F5] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C97023] transition-colors duration-300">
                <Leaf className="w-10 h-10 text-[#456C1B] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#515048] mb-4">Sustainability</h3>
              <p className="text-[#515048] font-light">
                Reuse is foundational to our approach, not secondary. By keeping materials in circulation, we reduce landfill waste, conserve embodied carbon, and support more responsible building practices.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-[#F8F7F5] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C97023] transition-colors duration-300">
                <Scale className="w-10 h-10 text-[#456C1B] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#515048] mb-4">Equity</h3>
              <p className="text-[#515048] font-light">
                As a women- and queer-owned worker cooperative, we are committed to shared ownership, fair compensation, and equitable opportunities. Every member shares responsibility, decision-making, and pride in the work.              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-[#F8F7F5] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C97023] transition-colors duration-300">
                <Eye className="w-10 h-10 text-[#456C1B] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#515048] mb-4">Transparency</h3>
              <p className="text-[#515048] font-light">
                We strive for clarity and honesty in our partnerships, pricing, processes, and communication. Trust is essential to collaboration, and we work to earn it through openness and follow-through.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-[#F8F7F5] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C97023] transition-colors duration-300">
                <TrafficCone className="w-10 h-10 text-[#456C1B] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#515048] mb-4">Safety and Accountability</h3>
              <p className="text-[#515048] font-light">
                We prioritize worker safety and collective accountability at every stage of a project. Our cooperative structure supports consistent standards, mutual care, and responsibility to one another.              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div >
  );
}
