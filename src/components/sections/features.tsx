"use client";

import { BarChart2, Settings, Zap } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const ICONS = [Zap, Settings, BarChart2] as const;

export function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {t.features.items.map((item, idx) => {
            const Icon = ICONS[idx] ?? Zap;
            return (
              <Reveal key={item.title} delay={idx * 0.08}>
                <div
                  className={[
                    "group h-full rounded-3xl p-6 sm:p-7",
                    "bg-[color:var(--color-card)]",
                    "shadow-[0_0_0_1px_rgba(201,168,76,0.10)]",
                    "transition-shadow duration-300",
                    "hover:shadow-[0_0_0_1px_rgba(201,168,76,0.22),0_0_40px_rgba(201,168,76,0.10)]",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-[color:var(--color-gold-soft)] p-3 shadow-[0_0_0_1px_rgba(201,168,76,0.18)] transition-shadow duration-300 group-hover:shadow-[0_0_0_1px_rgba(201,168,76,0.28),0_0_34px_rgba(201,168,76,0.10)]">
                      <Icon className="h-5 w-5 text-[color:var(--color-gold)]" />
                    </div>
                    <div>
                      <div className="text-[18px] font-bold tracking-tight text-[color:var(--color-foreground)]">
                        {item.title}
                      </div>
                      <p className="mt-2 text-[14px] leading-7 text-[color:var(--color-muted-2)]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

