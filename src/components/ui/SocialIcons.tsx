import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personal } from "@/data/resume";

const links = [
  { icon: FiGithub, href: personal.socials.github, label: "GitHub" },
  { icon: FiLinkedin, href: personal.socials.linkedin, label: "LinkedIn" },
  { icon: FiMail, href: `mailto:${personal.email}`, label: "Email" },
];

export default function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={className}>
      {links.map(({ icon: Icon, href, label }, i) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={label}
          className="glass flex h-11 w-11 items-center justify-center rounded-full text-ink-dim hover:text-ink"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
          whileHover={{ y: -4, borderColor: "var(--color-electric-2)" }}
        >
          <Icon size={18} />
        </motion.a>
      ))}
    </div>
  );
}
