import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { FiTrendingUp, FiDatabase, FiGlobe, FiLayers } from "react-icons/fi";
import { highlights } from "@/data/resume";

const ICONS = [FiTrendingUp, FiDatabase, FiGlobe, FiLayers];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

function AchievementNumber({
  value,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest.toLocaleString(undefined, {
          maximumFractionDigits: decimals,
          minimumFractionDigits: decimals,
        })}${suffix}`;
      }
    });
  }, [spring, decimals, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          className="font-mono text-xs tracking-[0.35em] text-ink-faint uppercase"
        >
          Achievements
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          className="mt-4 max-w-xl text-3xl font-display font-semibold leading-tight text-ink md:text-4xl"
        >
          Numbers behind the <span className="text-gradient">work</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="glass glow-border rounded-card p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-electric-2">
                  <Icon size={18} />
                </div>
                <div className="mt-5 font-display text-3xl font-semibold text-ink md:text-4xl">
                  <AchievementNumber value={h.value} decimals={h.decimals} suffix={h.suffix} />
                </div>
                <p className="mt-1 text-sm font-medium text-ink-dim">{h.label}</p>
                <p className="mt-1 text-xs text-ink-faint">{h.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
