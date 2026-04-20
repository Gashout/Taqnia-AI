"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type Props = HTMLMotionProps<"a">;

export function GoldButton({ children, className = "", ...props }: Props) {
  return (
    <motion.a
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.99 }}
      className={[
        "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-[15px] font-semibold",
        "bg-[color:var(--color-gold)] text-black",
        "transition-shadow duration-300",
        "shadow-[0_0_0_1px_rgba(201,168,76,0.30),0_18px_40px_rgba(201,168,76,0.18)]",
        "hover:shadow-[0_0_0_1px_rgba(201,168,76,0.40),0_22px_54px_rgba(201,168,76,0.22)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]/60 focus-visible:ring-offset-0",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </motion.a>
  );
}

