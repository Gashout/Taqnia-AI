"use client";

import { Building2, Car, Plus, Stethoscope } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const INDUSTRY_ICONS = [Stethoscope, Building2, Car, Plus] as const;

export function IndustriesSection() {
  const { t } = useLanguage();

  return (
    <section id="industries" className="py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[30px] font-extrabold tracking-tight text-[color:var(--color-foreground)] sm:text-[38px]">
            {t.industries.headline}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {t.industries.items.map((item, idx) => {
            const Icon = INDUSTRY_ICONS[idx] ?? Plus;
            return (
              <Reveal key={item.label} delay={idx * 0.06}>
                <div
                  className={[
                    "rounded-2xl px-4 py-5 sm:px-5",
                    "bg-[color:var(--color-card)]",
                    "shadow-[0_0_0_1px_rgba(201,168,76,0.08)]",
                    "transition-all duration-300",
                    "hover:shadow-[0_0_0_1px_rgba(201,168,76,0.18),0_0_36px_rgba(201,168,76,0.08)]",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Icon className="h-5 w-5 text-[color:var(--color-gold)]" />
                    <div className="text-[14px] font-semibold tracking-tight text-[color:var(--color-foreground)]/90">
                      {item.label}
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

