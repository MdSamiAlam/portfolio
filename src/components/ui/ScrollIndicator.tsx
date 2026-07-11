import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
    >
      <span className="font-mono text-[10px] tracking-[0.3em] text-ink-faint uppercase">
        Scroll
      </span>
      <div className="relative h-9 w-5 rounded-pill border border-ink-faint/40 flex justify-center pt-1.5">
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-electric-2"
          animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
