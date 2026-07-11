import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { personal } from "@/data/resume";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import AuroraBackground from "@/components/layout/AuroraBackground";
import PhotoFrame from "@/components/ui/PhotoFrame";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import SocialIcons from "@/components/ui/SocialIcons";

const ROLES = [
  "Data Science",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "Computer Vision",
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function scrollToProjects() {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const typed = useTypingEffect({ words: ROLES });

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-28"
    >
      <AuroraBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <motion.div variants={item}>
          <PhotoFrame />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 font-mono text-xs tracking-[0.35em] text-ink-faint uppercase"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 text-4xl font-display font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          I'm <span className="text-gradient">{personal.name}</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-5 flex h-8 items-center font-mono text-lg text-ink-dim md:text-xl"
        >
          <span>{typed}</span>
          <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-electric-2" />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-sm text-ink-dim md:text-base"
        >
          {personal.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/resume.pdf" download variant="solid">
            <FiDownload size={16} />
            Download Resume
          </MagneticButton>
          <MagneticButton onClick={scrollToProjects} variant="ghost">
            View Projects
          </MagneticButton>
        </motion.div>

        <motion.div variants={item}>
          <SocialIcons className="mt-9 flex items-center justify-center gap-3" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-9 left-1/2 z-10 hidden -translate-x-1/2 [@media(min-height:700px)]:block">
        <ScrollIndicator />
      </div>

      <button
        onClick={scrollToProjects}
        aria-label="Scroll to projects"
        className="sr-only"
      >
        <FiArrowDown />
      </button>
    </section>
  );
}
