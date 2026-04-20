"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function DeliverablesSection() {
  const { t } = useLanguage();

  return (
    <section id="deliverables" className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <Reveal>
            <h2 className="text-balance text-[30px] font-extrabold tracking-tight text-[color:var(--color-foreground)] sm:text-[38px]">
              {t.deliverables.headline}
            </h2>
            <p className="mt-6 text-pretty text-[15px] leading-8 text-[color:var(--color-muted)] sm:text-[17px]">
              {t.deliverables.body}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-[color:var(--color-card)] p-7 shadow-[0_0_0_1px_rgba(201,168,76,0.10)]">
              <ul className="space-y-4">
                {t.deliverables.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-xl bg-[color:var(--color-gold-soft)] shadow-[0_0_0_1px_rgba(201,168,76,0.16)]">
                      <Check className="h-4 w-4 text-[color:var(--color-gold)]" />
                    </span>
                    <span className="text-[14px] leading-7 text-[color:var(--color-muted)]">
                      {it}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

