import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";
import { education } from "@/data/resume";

export default function EducationTimeline() {
  return (
    <div className="relative">
      {/* connecting line */}
      <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-electric-2/60 via-indigo/40 to-transparent" />

      <ul className="flex flex-col gap-10">
        {education.map((entry, i) => (
          <motion.li
            key={entry.degree}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex gap-6 pl-0"
          >
            <div className="glass relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-electric-2">
              <FiBookOpen size={16} />
            </div>

            <div className="glass glow-border flex-1 rounded-card px-5 py-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-display text-base font-semibold text-ink">
                  {entry.institution}
                </h4>
                <span className="font-mono text-xs text-ink-faint">{entry.period}</span>
              </div>
              <p className="mt-1 text-sm text-ink-dim">{entry.degree}</p>
              {entry.detail && (
                <p className="mt-2 inline-block rounded-pill bg-white/5 px-3 py-1 text-xs text-electric-2">
                  {entry.detail}
                </p>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
