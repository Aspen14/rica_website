import React from "react";
import { motion } from "framer-motion";
import { Leaf, Users, Hammer, Scale, Eye, TrafficCone } from "lucide-react";
import styles from "./about.module.scss";
import lumber from "../assets/images/lumber.jpg";
import foundersImg from "../assets/images/founders.jpeg";

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
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img
            src={lumber}
            alt="Rica founders with reclaimed lumber"
            className={styles.heroImage}
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1540981493580-8ea1113e9968?q=80&w=2000&auto=format&fit=crop';
            }}
          />
          <div className={styles.heroGradient} />
        </div>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroTitle}
          >
            Building a sustainable future, <span className={styles.heroTitleAccent}>together.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.heroSubtitle}
          >
            Ways to join the worker-owned cooperative — coming soon!
          </motion.p>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.storyContainer}>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className={styles.aboutSection}
          >
            <motion.h2 variants={fadeInUp} className={styles.sectionTitleAccent}>
              About Us
            </motion.h2>
            <motion.p variants={fadeInUp}>
              Rica Lumber & Deconstruction grew from the vision that here in Northern Colorado, we could intentionally re-harvest value from existing buildings to construct a more equitable and beautiful future. We know that using reclaimed building materials makes buildings not just sustainable but also affordable.
            </motion.p>
            <br />
            <motion.p variants={fadeInUp}>
              At Rica, we’re a women- and queer-owned worker cooperative that puts environmental responsibility and social impact first. This cooperative approach means that our success isn’t just celebrated by owners - it’s shared by every team member who contributes to our mission.
            </motion.p>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className={styles.storyGrid}
          >
            <div className={styles.storyTextSpaced}>
              <motion.h2 variants={fadeInUp} className={styles.sectionTitleAccent}>
                Our Story
              </motion.h2>
              <motion.p variants={fadeInUp}>
                Jae and Evelyn hatched this idea after swapping stories about their passion for equity and the environment. Jae’s experience building a sustainable material transfer station in Costa Rica informed their interest in locally sourced materials. Evelyn’s experience in the chemicals in building materials showed her that things could be done so much better. Plus, they both had dogs that needed walking! When we’re not geeking out about sustainability you can usually find us outdoors: hiking, camping, sailing, and horseback riding.
              </motion.p>
            </div>
            <motion.div variants={fadeInUp} className={styles.storyImageWrapperFirst}>
              <img
                src={foundersImg}
                alt="Reclaimed wood planks in a workshop"
                className={styles.storyImage}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000&auto=format&fit=crop';
                }}
              />
            </motion.div>
          </motion.section>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <motion.div
          className={styles.valuesContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className={styles.valuesTitle}>
            Our Core Values
          </motion.h2>

          <div className={styles.valuesGrid}>
            <motion.div variants={fadeInUp} className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <Hammer className={styles.valueIcon} />
              </div>
              <h3 className={styles.valueHeading}>Craft</h3>
              <p className={styles.valueDescription}>
                We value skill, care, and attention in how materials are removed, handled, and prepared for reuse. Quality matters – both in the work itself and in the spaces those materials will shape next.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <Users className={styles.valueIcon} />
              </div>
              <h3 className={styles.valueHeading}>Community</h3>
              <p className={styles.valueDescription}>
                We believe materials, labor, and knowledge should circulate locally whenever possible. Our work is rooted in relationships – with contractors, homeowners, designers, and neighbors – and in contributing to the places where we live and work.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <Leaf className={styles.valueIcon} />
              </div>
              <h3 className={styles.valueHeading}>Sustainability</h3>
              <p className={styles.valueDescription}>
                Reuse is foundational to our approach, not secondary. By keeping materials in circulation, we reduce landfill waste, conserve embodied carbon, and support more responsible building practices.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <Scale className={styles.valueIcon} />
              </div>
              <h3 className={styles.valueHeading}>Equity</h3>
              <p className={styles.valueDescription}>
                As a women- and queer-owned worker cooperative, we are committed to shared ownership, fair compensation, and equitable opportunities. Every member shares responsibility, decision-making, and pride in the work.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <Eye className={styles.valueIcon} />
              </div>
              <h3 className={styles.valueHeading}>Transparency</h3>
              <p className={styles.valueDescription}>
                We strive for clarity and honesty in our partnerships, pricing, processes, and communication. Trust is essential to collaboration, and we work to earn it through openness and follow-through.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.valueCard}>
              <div className={styles.valueIconWrapper}>
                <TrafficCone className={styles.valueIcon} />
              </div>
              <h3 className={styles.valueHeading}>Safety and Accountability</h3>
              <p className={styles.valueDescription}>
                We prioritize worker safety and collective accountability at every stage of a project. Our cooperative structure supports consistent standards, mutual care, and responsibility to one another.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
