import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { personal } from "@/data/resume";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="font-display text-sm tracking-[0.4em] text-ink-dim uppercase"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {personal.initials}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
