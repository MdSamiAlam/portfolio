import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 22, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 250, damping: 22, mass: 0.4 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[70] h-1.5 w-1.5 rounded-full bg-electric-2"
        style={{ x, y, translateX: "-50%", translateY: "-50%", willChange: "transform" }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[70] h-8 w-8 rounded-full border border-electric-2/40"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%", willChange: "transform" }}
      />
    </>
  );
}
