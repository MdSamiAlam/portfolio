import { motion } from "framer-motion";

export default function SkillBadge({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4), ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
      className="glass-flat glow-border rounded-card px-4 py-3 text-sm text-ink-dim transition-colors duration-300 hover:text-ink"
    >
      {name}
    </motion.div>
  );
}
