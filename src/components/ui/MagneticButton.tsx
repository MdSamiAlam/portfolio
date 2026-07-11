import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  variant?: "solid" | "ghost";
  className?: string;
}

export default function MagneticButton({
  children,
  onClick,
  href,
  download,
  variant = "solid",
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 150, damping: 12, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 150, damping: 12, mass: 0.4 });

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    rawX.set(relX * 0.25);
    rawY.set(relY * 0.35);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300";

  const styles =
    variant === "solid"
      ? "bg-ink text-void hover:bg-white"
      : "glass text-ink hover:border-electric-2/50";

  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      // @ts-expect-error -- ref type differs between anchor/button, both are valid at runtime
      ref={ref}
      href={href}
      download={download}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x, y, willChange: "transform" }}
      className={cn(base, styles, className)}
    >
      {children}
    </Comp>
  );
}
