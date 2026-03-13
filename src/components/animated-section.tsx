"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const springEase = [0.16, 1, 0.3, 1] as const;

export function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: springEase, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: springEase },
  },
};

export function StaggerContainer({
  children,
  className,
  inView,
}: {
  children: React.ReactNode;
  className?: string;
  inView?: boolean;
}) {
  const ref = useRef(null);
  const selfInView = useInView(ref, {
    once: true,
    margin: "0px 0px -80px 0px",
  });
  const reduced = useReducedMotion();
  const isVisible = inView ?? selfInView;

  return (
    <motion.div
      ref={ref}
      initial={reduced ? "visible" : "hidden"}
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={reduced ? undefined : itemVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
