import { motion } from "framer-motion";
import { skills, type SkillCategory } from "@/data/resume";
import SkillBadge from "@/components/ui/SkillBadge";

const CATEGORIES: SkillCategory[] = [
  "Programming",
  "Machine Learning & AI",
  "Deep Learning",
  "Data Science & Analytics",
  "Web & Tools",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          className="font-mono text-xs tracking-[0.35em] text-ink-faint uppercase"
        >
          Skills
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          className="mt-4 max-w-xl text-3xl font-display font-semibold leading-tight text-ink md:text-4xl"
        >
          The <span className="text-gradient">toolkit</span> behind every project
        </motion.h2>

        <div className="mt-16 flex flex-col gap-14">
          {CATEGORIES.map((category, ci) => {
            const items = skills.filter((s) => s.category === category);
            if (items.length === 0) return null;

            return (
              <div key={category}>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-15% 0px" }}
                  variants={fadeUp}
                  transition={{ delay: ci * 0.05 }}
                  className="mb-5 flex items-center gap-3"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-electric-2" />
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink-dim">
                    {category}
                  </h3>
                  <span className="h-px flex-1 bg-border" />
                </motion.div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                  {items.map((skill, i) => (
                    <SkillBadge key={skill.name} name={skill.name} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
