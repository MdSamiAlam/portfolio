import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, var(--color-electric-2), var(--color-indigo), var(--color-violet))",
      }}
    />
  );
}
