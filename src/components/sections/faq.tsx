"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl bg-[color:var(--color-card)] shadow-[0_0_0_1px_rgba(201,168,76,0.08)]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start"
      >
        <div className="text-[14px] font-semibold leading-7 text-[color:var(--color-foreground)]/90">
          {q}
        </div>
        <ChevronDown
          className={[
            "h-5 w-5 shrink-0 text-[color:var(--color-gold)] transition-transform duration-300",
            open ? "rotate-180" : "rotate-0",
          ].join(" ")}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-[14px] leading-7 text-[color:var(--color-muted-2)]">
              {a}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = React.useState<number>(0);

  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[30px] font-extrabold tracking-tight text-[color:var(--color-foreground)] sm:text-[38px]">
            {t.faq.headline}
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {t.faq.items.map((it, idx) => (
            <Reveal key={it.q} delay={idx * 0.05}>
              <FaqItem
                q={it.q}
                a={it.a}
                open={openIndex === idx}
                onToggle={() => setOpenIndex((cur) => (cur === idx ? -1 : idx))}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

