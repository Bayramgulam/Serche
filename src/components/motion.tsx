"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";
import { Sparrow } from "./brand";

const subscribe = () => () => undefined;
function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const mounted = useMounted();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={mounted && !reduced ? { y: [14, 0], opacity: [0.7, 1] } : {}}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65 }}
    >
      {children}
    </motion.div>
  );
}
export function AnimatedSparrow() {
  const reduced = useReducedMotion();
  const mounted = useMounted();
  return (
    <div className="sparrow-line">
      <motion.span
        initial={false}
        animate={mounted && !reduced ? { x: [0, 18, 35], y: [0, -8, 0] } : {}}
        transition={{ duration: 0.8 }}
      >
        <Sparrow />
      </motion.span>
    </div>
  );
}
