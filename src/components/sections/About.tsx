import { motion } from "framer-motion";
import { personal, education } from "@/data/resume";
import StatCounter from "@/components/ui/StatCounter";
import OrbitVisual from "@/components/ui/OrbitVisual";
import EducationTimeline from "@/components/ui/EducationTimeline";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function About() {
  const currentEducation = education[0];

  return (
    <section id="about" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          className="font-mono text-xs tracking-[0.35em] text-ink-faint uppercase"
        >
          About
        </motion.p>

        <div className="mt-6 grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
          {/* left: storytelling + stats */}
          <div>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="text-3xl font-display font-semibold leading-tight text-ink md:text-4xl"
            >
              Turning data into{" "}
              <span className="text-gradient">systems that understand</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="mt-6 text-sm leading-relaxed text-ink-dim md:text-base"
            >
              {personal.objective}
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              transition={{ delay: 0.18 }}
              className="mt-4 text-sm leading-relaxed text-ink-dim md:text-base"
            >
              Currently pursuing a B.Tech in Computer Science at{" "}
              {currentEducation.institution} ({currentEducation.period}), with a running{" "}
              {currentEducation.detail?.toLowerCase()}. Every project below started the same
              way — a real dataset, a real question, and a working pipeline by the end.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              transition={{ delay: 0.26 }}
              className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4"
            >
              <StatCounter value={8.36} decimals={2} label="Current CGPA" />
              <StatCounter value={4} label="Shipped projects" />
              <StatCounter value={4} label="Certifications" />
              <StatCounter value={2028} label="Graduating" />
            </motion.div>
          </div>

          {/* right: orbit visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <OrbitVisual />
          </motion.div>
        </div>

        {/* education timeline */}
        <div className="mt-28">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15% 0px" }}
            variants={fadeUp}
            className="font-mono text-xs tracking-[0.35em] text-ink-faint uppercase"
          >
            Education
          </motion.p>
          <div className="mt-8 max-w-2xl">
            <EducationTimeline />
          </div>
        </div>
      </div>
    </section>
  );
}
