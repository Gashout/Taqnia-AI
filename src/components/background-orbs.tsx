"use client";

import { motion } from "framer-motion";

export function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_20%,rgba(201,168,76,0.10),transparent_60%)]" />
      <motion.div
        className="absolute -top-20 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(201,168,76,0.18), rgba(201,168,76,0.00) 62%)",
        }}
        animate={{ x: ["-50%", "-46%", "-50%"], y: [0, 18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-32 right-[-120px] h-[440px] w-[440px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(201,168,76,0.12), rgba(201,168,76,0.00) 62%)",
        }}
        animate={{ x: [0, -26, 0], y: [0, -18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-200px] left-[-140px] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.10), rgba(201,168,76,0.00) 62%)",
        }}
        animate={{ x: [0, 32, 0], y: [0, 22, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(var(--bg-rgb),0.0),rgba(var(--bg-rgb),0.92)_65%,rgba(var(--bg-rgb),1))]" />
    </div>
  );
}

