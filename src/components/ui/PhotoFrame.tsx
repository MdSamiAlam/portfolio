import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";
import { personal } from "@/data/resume";

/**
 * Photo slot. No photo shipped in the resume, so this renders an empty,
 * clearly-a-placeholder frame instead of a monogram — drop a real photo
 * in and set `personal.photo` in src/data/resume.ts to fill it.
 */
export default function PhotoFrame() {
  return (
    <motion.div
      className="relative mx-auto h-40 w-40 md:h-48 md:w-48"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {/* rotating gradient ring — pure CSS animation, cheap to run */}
      <div
        className="animate-spin-fast absolute -inset-1.5 rounded-full opacity-80"
        style={{
          background:
            "conic-gradient(from 0deg, var(--color-electric-2), var(--color-indigo), var(--color-violet), var(--color-electric-2))",
        }}
      />
      <div className="absolute inset-[3px] rounded-full bg-void" />

      <div className="glass absolute inset-[6px] flex items-center justify-center overflow-hidden rounded-full">
        {personal.photo ? (
          <img
            src={personal.photo}
            alt={personal.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-ink-faint">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-ink-faint/40">
              <FiUser size={22} />
            </div>
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase">
              Add photo
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
