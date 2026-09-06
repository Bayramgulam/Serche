"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Sparrow } from "./brand";
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? {} : { y: [14, 0], opacity: [0.7, 1] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65 }}
    >
      {children}
    </motion.div>
  );
}
export function AnimatedSparrow() {
  const reduced = useReducedMotion();
  return (
    <div className="sparrow-line">
      <motion.span
        initial={false}
        animate={reduced ? {} : { x: [0, 18, 35], y: [0, -8, 0] }}
        transition={{ duration: 0.8 }}
      >
        <Sparrow />
      </motion.span>
    </div>
  );
}
