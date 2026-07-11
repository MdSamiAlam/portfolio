import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiCpu } from "react-icons/fi";

const ORBIT_ITEMS = ["Python", "TensorFlow", "CNN", "GenAI", "OpenCV", "NLP"];

export default function OrbitVisual() {
  const [radius, setRadius] = useState(96);

  useEffect(() => {
    const update = () => setRadius(window.innerWidth < 768 ? 96 : 128);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="relative mx-auto flex h-[280px] w-[280px] items-center justify-center md:h-[380px] md:w-[380px]">
      {/* faint orbit ring */}
      <div className="absolute h-[192px] w-[192px] rounded-full border border-dashed border-white/10 md:h-[300px] md:w-[300px]" />

      {/* slow rotating group carrying the badges — CSS animation, not JS-ticked */}
      <div className="animate-spin-slow absolute inset-0">
        {ORBIT_ITEMS.map((label, i) => {
          const angle = (i / ORBIT_ITEMS.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <motion.div
              key={label}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `translate(${x}px, ${y}px)` }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              {/* counter-rotate so the label text stays upright — also CSS */}
              <span className="glass-flat animate-spin-slow-reverse -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-pill px-3.5 py-1.5 text-xs font-medium text-ink-dim">
                {label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* central core */}
      <motion.div
        className="glass glow-border relative z-10 flex h-24 w-24 items-center justify-center rounded-full md:h-28 md:w-28"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      >
        <FiCpu size={30} className="text-electric-2" />
      </motion.div>
    </div>
  );
}
