import { useState } from "react";
import { motion } from "framer-motion";
import { FiActivity, FiBarChart2, FiMessageCircle, FiHeart } from "react-icons/fi";
import { projects, type Project } from "@/data/resume";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";

const ICONS = [FiHeart, FiBarChart2, FiMessageCircle, FiActivity];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          className="font-mono text-xs tracking-[0.35em] text-ink-faint uppercase"
        >
          Projects
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          className="mt-4 max-w-xl text-3xl font-display font-semibold leading-tight text-ink md:text-4xl"
        >
          Things I've <span className="text-gradient">built and shipped</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              icon={ICONS[i % ICONS.length]}
              index={i}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
