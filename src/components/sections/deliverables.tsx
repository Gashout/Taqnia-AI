"use client";

import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function DeliverablesSection() {
  const { t, locale } = useLanguage();
  const isAr = locale === "ar";

  return (
    <section id="deliverables" className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-balance text-[32px] font-black tracking-tight text-[color:var(--color-foreground)] sm:text-[42px]">
              {t.deliverables.headline}
            </h2>
            <p className="mt-6 text-pretty text-[16px] leading-8 text-[color:var(--color-muted)] sm:text-[19px]">
              {t.deliverables.body}
            </p>
            
            <div className="mt-10 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[24px] font-bold text-[color:var(--color-gold)]">100%</span>
                <span className="text-[12px] text-[color:var(--color-muted-2)] uppercase tracking-wider">{isAr ? "مخصص لك" : "Custom Built"}</span>
              </div>
              <div className="h-8 w-px bg-[color:var(--color-hairline)]" />
              <div className="flex flex-col">
                <span className="text-[24px] font-bold text-[color:var(--color-gold)]">24/7</span>
                <span className="text-[12px] text-[color:var(--color-muted-2)] uppercase tracking-wider">{isAr ? "دعم تقني" : "Technical Support"}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-[32px] border border-[color:var(--color-gold-border)] bg-[color:var(--color-card)] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
              <div className="absolute top-0 right-0 h-32 w-32 bg-[color:var(--color-gold)] opacity-[0.03] blur-3xl" />
              <ul className="space-y-6">
                {t.deliverables.items.map((it) => (
                  <li key={it} className="group flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-gold-soft)] group-hover:bg-[color:var(--color-gold)] transition-colors duration-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--color-gold)] group-hover:text-black transition-colors duration-300" />
                    </div>
                    <span className="text-[15px] font-medium leading-7 text-[color:var(--color-foreground)]/90">
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
