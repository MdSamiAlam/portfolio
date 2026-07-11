import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import type { IconType } from "react-icons";
import type { Project } from "@/data/resume";

interface ProjectCardProps {
  project: Project;
  icon: IconType;
  index: number;
  onOpen: () => void;
}

export default function ProjectCard({ project, icon: Icon, index, onOpen }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rawRx = useMotionValue(0);
  const rawRy = useMotionValue(0);
  const rx = useSpring(rawRx, { stiffness: 200, damping: 18 });
  const ry = useSpring(rawRy, { stiffness: 200, damping: 18 });

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rawRx.set(py * -8);
    rawRy.set(px * 10);
  };

  const reset = () => {
    rawRx.set(0);
    rawRy.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", willChange: "transform" }}
        className="glass glow-border group flex h-full flex-col overflow-hidden rounded-card"
      >
        {/* cover */}
        <div
          className="relative flex h-40 items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--color-indigo) 35%, transparent), color-mix(in srgb, var(--color-electric) 25%, transparent))",
          }}
        >
          <Icon size={48} className="text-white/80 transition-transform duration-500 group-hover:scale-110" />
          {project.featured && (
            <span className="absolute left-3 top-3 rounded-pill bg-black/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-white/80 backdrop-blur">
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
          <p className="mt-1 text-xs text-ink-faint">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-pill bg-white/5 px-2.5 py-1 text-[11px] text-ink-dim"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="rounded-pill bg-white/5 px-2.5 py-1 text-[11px] text-ink-faint">
                +{project.stack.length - 4}
              </span>
            )}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={onOpen}
              className="flex items-center gap-1 text-xs font-medium text-electric-2 hover:underline"
            >
              View details <FiArrowUpRight size={13} />
            </button>

            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="text-ink-dim transition-colors hover:text-ink"
                >
                  <FiGithub size={17} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="text-ink-dim transition-colors hover:text-ink"
                >
                  <FiExternalLink size={17} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
