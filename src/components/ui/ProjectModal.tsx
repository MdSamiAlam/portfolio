import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "@/data/resume";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            className="glass glow-border relative z-10 w-full max-w-lg rounded-card p-7"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 text-ink-faint transition-colors hover:text-ink"
            >
              <FiX size={20} />
            </button>

            <h3 className="pr-8 font-display text-2xl font-semibold text-ink">{project.title}</h3>
            <p className="mt-1 text-sm text-ink-faint">{project.tagline}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-pill bg-white/5 px-2.5 py-1 text-[11px] text-ink-dim">
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-5 flex flex-col gap-3">
              {project.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink-dim">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-electric-2" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="glass flex items-center gap-2 rounded-pill px-4 py-2 text-xs text-ink hover:border-electric-2/50"
                >
                  <FiGithub size={14} /> Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="glass flex items-center gap-2 rounded-pill px-4 py-2 text-xs text-ink hover:border-electric-2/50"
                >
                  <FiExternalLink size={14} /> Live demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
