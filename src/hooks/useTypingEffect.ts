import { useEffect, useState } from "react";

interface UseTypingOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

/**
 * Cycles through `words`, typing and deleting each one.
 * Returns the current visible string; consumer renders it with a blinking caret.
 */
export function useTypingEffect({
  words,
  typingSpeed = 55,
  deletingSpeed = 30,
  pauseDuration = 1800,
}: UseTypingOptions) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("pausing"), pauseDuration);
      return () => clearTimeout(t);
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), 0);
      return () => clearTimeout(t);
    }

    // deleting
    if (text.length > 0) {
      const t = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
      return () => clearTimeout(t);
    }
    setWordIndex((i) => (i + 1) % words.length);
    setPhase("typing");
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}
