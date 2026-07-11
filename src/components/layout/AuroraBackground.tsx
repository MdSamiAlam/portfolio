import { motion } from "framer-motion";

/**
 * Aurora — three soft gradient blobs drifting behind a faint grid.
 * will-change: transform promotes each blob to its own GPU layer so the
 * compositor can move it without re-running the blur filter every frame —
 * without this the animation was a major source of scroll jank.
 */
export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
        }}
      />

      <motion.div
        className="absolute -top-32 left-[8%] h-64 w-64 rounded-full blur-[70px] md:-top-40 md:h-[32rem] md:w-[32rem] md:blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--color-indigo) 0%, transparent 70%)",
          willChange: "transform",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-6 right-[6%] h-56 w-56 rounded-full blur-[70px] md:top-10 md:h-[28rem] md:w-[28rem] md:blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--color-electric) 0%, transparent 70%)",
          willChange: "transform",
        }}
        animate={{ x: [0, -30, 20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8rem] left-[30%] h-60 w-60 rounded-full blur-[80px] md:bottom-[-14rem] md:h-[30rem] md:w-[30rem] md:blur-[110px]"
        style={{
          background: "radial-gradient(circle, var(--color-violet) 0%, transparent 70%)",
          willChange: "transform",
        }}
        animate={{ x: [0, 25, -25, 0], y: [0, -25, 15, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 40%, transparent 40%, var(--color-void) 95%)",
        }}
      />
    </div>
  );
}
