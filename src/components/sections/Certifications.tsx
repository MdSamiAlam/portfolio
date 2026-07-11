import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { certifications } from "@/data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          className="font-mono text-xs tracking-[0.35em] text-ink-faint uppercase"
        >
          Certifications
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          className="mt-4 max-w-xl text-3xl font-display font-semibold leading-tight text-ink md:text-4xl"
        >
          Learning, made <span className="text-gradient">official</span>
        </motion.h2>

        <div className="relative mt-14">
          {/* connecting line, desktop only */}
          <div className="absolute left-5 top-2 bottom-2 hidden w-px bg-gradient-to-b from-electric-2/50 via-indigo/30 to-transparent md:block" />

          <ul className="flex flex-col gap-5">
            {certifications.map((cert, i) => (
              <motion.li
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="relative flex items-center gap-6 md:pl-0"
              >
                <div className="glass relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full text-electric-2 md:flex">
                  <FiAward size={16} />
                </div>

                <div className="glass glow-border flex w-full flex-wrap items-center justify-between gap-3 rounded-card px-6 py-5">
                  <div className="flex items-center gap-3">
                    <FiAward size={16} className="text-electric-2 md:hidden" />
                    <div>
                      <h4 className="font-display text-base font-semibold text-ink">{cert.name}</h4>
                      <p className="mt-0.5 text-sm text-ink-dim">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="rounded-pill bg-white/5 px-3 py-1 font-mono text-xs text-ink-faint">
                    {cert.year}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
