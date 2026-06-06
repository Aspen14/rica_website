import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./about";
import styles from "./education.module.scss";

export default function Education() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className={styles.deconstructionSection}
        >
          <div className={styles.deconstructionIntro}>
            <div className={styles.sectionIntroText}>
              <motion.h2 variants={fadeInUp} className={styles.sectionTitleAccent}>
                What is Deconstruction?
              </motion.h2>
              <motion.p variants={fadeInUp}>
                Deconstruction is the thoughtful, methodical process of carefully dismantling buildings to salvage and reuse as many materials as possible, rather than demolishing them and sending everything to landfills. It's a building practice that sees structures not as disposable, but as repositories of value, history, and possibility.
              </motion.p>
            </div>
            <motion.div variants={fadeInUp} className={styles.imageWrapper}>
              <img
                src="/src/assets/images/lumber_co.jpg"
                alt="Reclaimed wood planks in a workshop"
                className={styles.sectionImage}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000&auto=format&fit=crop';
                }}
              />
            </motion.div>
          </div>

          <div className={styles.sectionTextFull}>
            <motion.h3 variants={fadeInUp} className={styles.sectionSubheading}>
              How Deconstruction Differs from Demolition
            </motion.h3>
            <motion.p variants={fadeInUp}>
              Demolition is typically a fast, brute-force process designed to clear space quickly. Heavy machinery tears down structures, crushing materials meaning they end up in landfills. While efficient for immediate clearance, it results in massive waste and lost resources.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Deconstruction, on the other hand, is a craft-driven process that values every component. Our skilled team carefully disassembles buildings piece by piece, preserving materials like lumber, windows, doors, fixtures, and architectural elements that can be given new life. It's slower and more labor-intensive, but the environmental and community benefits are profound. In addition, with effective technology-enabled processes and lack of machinery rental, the cost differences can be minimal.
            </motion.p>

            <motion.h3 variants={fadeInUp} className={styles.sectionSubheading}>
              The Rica Deconstruction Process
            </motion.h3>
            <motion.p variants={fadeInUp}>
              <strong>Assessment &amp; Planning</strong> - We evaluate the building leveraging technology to identify salvageable materials and create a strategic dismantling plan.
            </motion.p>
            <motion.p variants={fadeInUp}>
              <strong>Careful Dismantling</strong> - Using hand tools and efficient techniques, we systematically remove materials, preserving their integrity and character.
            </motion.p>
            <motion.p variants={fadeInUp}>
              <strong>Material Sorting &amp; Processing</strong> - Each salvageable piece is carefully sorted, and prepared for reuse or resale.
            </motion.p>
            <motion.p variants={fadeInUp}>
              <strong>Value Reclamation</strong> - We make quality lumber, architectural elements, and building components available for new projects, extending their life indefinitely. Buying reclaimed materials is also an important way to support our mission.
            </motion.p>

            <motion.h3 variants={fadeInUp} className={styles.sectionSubheading}>
              Why Choose Deconstruction?
            </motion.h3>
            <motion.p variants={fadeInUp}>
              <strong>Environmental Impact:</strong> Deconstruction diverts 80-90% of building materials from landfills, reducing waste and carbon emissions associated with new material production.
            </motion.p>
            <motion.p variants={fadeInUp}>
              <strong>Economic Benefits:</strong> Salvaged materials are often more affordable than new ones, making sustainable building more accessible. We also create dignified, shared-ownership jobs in the process.
            </motion.p>
            <motion.p variants={fadeInUp}>
              <strong>Historical Preservation:</strong> Many older buildings contain irreplaceable materials - old-growth lumber, unique hardware, and architectural details that simply can't be replicated today.
            </motion.p>
            <motion.p variants={fadeInUp}>
              <strong>Community Building:</strong> By reusing local materials, we strengthen community connections and reduce the cost and environmental impact of transporting new materials from distant sources.
            </motion.p>

            <motion.h3 variants={fadeInUp} className={styles.sectionSubheading}>
              The Circular Construction Economy
            </motion.h3>
            <motion.p variants={fadeInUp}>
              Deconstruction is a cornerstone of the circular construction economy - where materials move locally, workers share ownership, and communities build more equitable and beautiful places using what already exists. Instead of the "take-make-waste" linear model, we create a system where materials are valued, preserved, and reused for generations.
            </motion.p>
            <motion.p variants={fadeInUp}>
              At Rica Lumber and Deconstruction, we're not just taking buildings apart. We're revealing the value already embedded in our built environment and showing that sustainable construction can be both beautiful and practical.
            </motion.p>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className={styles.sectionGrid}
        >
          <motion.div variants={fadeInUp} className={styles.imageWrapperLeft}>
            <img
              src="/src/assets/images/education-2.png"
              alt="Worker cooperative members gathered"
              className={styles.sectionImage}
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop';
              }}
            />
          </motion.div>
          <div className={styles.sectionTextRight}>
            <motion.h2 variants={fadeInUp} className={styles.sectionTitlePrimary}>
              What is a Worker-Owned Cooperative?
            </motion.h2>
            <motion.p variants={fadeInUp}>
              A worker-owned cooperative is a business that is owned and democratically governed by its employees. Instead of external shareholders or a single owner extracting profits, the wealth generated by the company is shared equitably among the people doing the actual work.
            </motion.p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
