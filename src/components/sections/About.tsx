import { motion } from "framer-motion";
import { personal, education } from "@/data/resume";
import StatCounter from "@/components/ui/StatCounter";
import EducationTimeline from "@/components/ui/EducationTimeline";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function About() {
  const currentEducation = education[0];

  return (
    <section id="about" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          className="font-mono text-xs tracking-[0.35em] text-ink-faint uppercase"
        >
          About
        </motion.p>

        <div className="mt-6 grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
          {/* left: storytelling + stats */}
          <div>
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="text-3xl font-display font-semibold leading-tight text-ink md:text-4xl"
            >
              Turning data into{" "}
              <span className="text-gradient">systems that understand</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="mt-6 text-sm leading-relaxed text-ink-dim md:text-base"
            >
              {personal.objective}
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              transition={{ delay: 0.18 }}
              className="mt-4 text-sm leading-relaxed text-ink-dim md:text-base"
            >
              Currently pursuing a B.Tech in Computer Science at{" "}
              {currentEducation.institution} ({currentEducation.period}), with a running{" "}
              {currentEducation.detail?.toLowerCase()}. Every project below started the same
              way — a real dataset, a real question, and a working pipeline by the end.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              transition={{ delay: 0.26 }}
              className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4"
            >
              <StatCounter value={8.36} decimals={2} label="Current CGPA" />
              <StatCounter value={4} label="Shipped projects" />
              <StatCounter value={4} label="Certifications" />
              <StatCounter value={2028} label="Graduating" />
            </motion.div>
          </div>

          {/* right: animated AI visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex min-h-[360px] items-center justify-center"
          >
            {/* soft background glow */}
            <div className="absolute h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute h-44 w-44 rounded-full bg-violet-500/10 blur-3xl" />

            {/* orbit ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-56 w-56 rounded-full border border-blue-400/15"
            />

            {/* orbit ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-44 w-64 rounded-[50%] border border-violet-400/15"
            />

            {/* neural network */}
            <div className="relative h-48 w-48">
              {/* connecting lines */}
              <svg
                viewBox="0 0 224 224"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="neural-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#38bdf8"
                      stopOpacity="0.7"
                    />
                    <stop
                      offset="100%"
                      stopColor="#8b5cf6"
                      stopOpacity="0.7"
                    />
                  </linearGradient>
                </defs>

                <line
                  x1="112"
                  y1="112"
                  x2="45"
                  y2="55"
                  stroke="url(#neural-gradient)"
                  strokeWidth="1"
                />

                <line
                  x1="112"
                  y1="112"
                  x2="178"
                  y2="55"
                  stroke="url(#neural-gradient)"
                  strokeWidth="1"
                />

                <line
                  x1="112"
                  y1="112"
                  x2="42"
                  y2="168"
                  stroke="url(#neural-gradient)"
                  strokeWidth="1"
                />

                <line
                  x1="112"
                  y1="112"
                  x2="182"
                  y2="168"
                  stroke="url(#neural-gradient)"
                  strokeWidth="1"
                />

                <line
                  x1="45"
                  y1="55"
                  x2="178"
                  y2="55"
                  stroke="url(#neural-gradient)"
                  strokeWidth="1"
                  opacity="0.35"
                />

                <line
                  x1="42"
                  y1="168"
                  x2="182"
                  y2="168"
                  stroke="url(#neural-gradient)"
                  strokeWidth="1"
                  opacity="0.35"
                />
              </svg>

              {/* center AI node */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    "0 0 20px rgba(56,189,248,0.25)",
                    "0 0 40px rgba(139,92,246,0.45)",
                    "0 0 20px rgba(56,189,248,0.25)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-sky-300">
                  AI
                </span>
              </motion.div>

              {/* neural nodes */}
              {[
                { left: "13%", top: "18%", delay: 0 },
                { left: "80%", top: "18%", delay: 0.4 },
                { left: "12%", top: "72%", delay: 0.8 },
                { left: "82%", top: "72%", delay: 1.2 },
              ].map((node, index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: node.delay,
                    ease: "easeInOut",
                  }}
                  className="absolute h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_16px_rgba(56,189,248,0.9)]"
                  style={{
                    left: node.left,
                    top: node.top,
                  }}
                />
              ))}
            </div>

            {/* Python card */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-2 top-8 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2.5 backdrop-blur-xl"
            >
              <p className="text-xs font-medium text-ink">Python</p>
              <p className="mt-1 text-[10px] text-ink-faint">
                Build · Analyze · Automate
              </p>
            </motion.div>

            {/* Machine Learning card */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-2 top-16 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2.5 backdrop-blur-xl"
            >
              <p className="text-xs font-medium text-ink">
                Machine Learning
              </p>
              <p className="mt-1 text-[10px] text-ink-faint">
                Learn · Predict · Improve
              </p>
            </motion.div>

            {/* Computer Vision card */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 left-2 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2.5 backdrop-blur-xl"
            >
              <p className="text-xs font-medium text-ink">
                Computer Vision
              </p>
              <p className="mt-1 text-[10px] text-ink-faint">
                Detect · Understand · Solve
              </p>
            </motion.div>

            {/* Data Visualization card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 right-2 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2.5 backdrop-blur-xl"
            >
              <p className="text-xs font-medium text-ink">
                Data Visualization
              </p>
              <p className="mt-1 text-[10px] text-ink-faint">
                Explore · Visualize · Communicate
              </p>
            </motion.div>

            {/* bottom caption */}
            <motion.div
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 font-mono text-[10px] tracking-[0.3em] text-violet-300"
            >
              DATA → INSIGHTS → IMPACT
            </motion.div>
          </motion.div>
        </div>

        {/* education timeline */}
        <div className="mt-28">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15% 0px" }}
            variants={fadeUp}
            className="font-mono text-xs tracking-[0.35em] text-ink-faint uppercase"
          >
            Education
          </motion.p>

          <div className="mt-8 max-w-2xl">
            <EducationTimeline />
          </div>
        </div>
      </div>
    </section>
  );
}
