import type { MotionProps } from "framer-motion";

/**
 * Reusable "pop" entrance — scale up from small with a springy bounce + fade,
 * triggered once when the element scrolls into view. Pass a delay to stagger.
 *
 *   <motion.h1 {...pop()}>…</motion.h1>
 *   <motion.div {...pop(i * 0.08)}>…</motion.div>
 */
export const pop = (delay = 0): MotionProps => ({
  initial: { opacity: 0, scale: 0.85, y: 16 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { type: "spring", stiffness: 250, damping: 18, delay },
});
