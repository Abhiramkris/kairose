import { Transition } from "framer-motion";

/**
 * Apple Fluid Spring Physics
 * Based on Apple iOS / macOS system animation physics:
 * Snappy initial acceleration with a soft, cushioned settle.
 */
export const appleSpringTransition = (delay = 0): Transition => ({
  type: "spring",
  stiffness: 80,
  damping: 18,
  mass: 0.85,
  restDelta: 0.001,
  delay,
  // Smoothly interpolate blur and opacity with Apple ease curve
  filter: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
});

/**
 * Single-by-single Blur In variant configuration
 */
export const blurFadeInItem = (index = 0, baseDelay = 0, yOffset = 36) => ({
  initial: {
    opacity: 0,
    y: yOffset,
    filter: "blur(14px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  viewport: { once: true, margin: "-40px" },
  transition: appleSpringTransition(baseDelay + index * 0.12),
});

/**
 * Immediate Blur In variant for above-the-fold Hero items
 */
export const blurFadeInImmediate = (delay = 0, yOffset = 30) => ({
  initial: {
    opacity: 0,
    y: yOffset,
    filter: "blur(14px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  transition: appleSpringTransition(delay),
});
