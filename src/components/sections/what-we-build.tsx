"use client";

import { BarChart3, Headset, Settings2, TrendingUp } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const ICONS = [Headset, TrendingUp, Settings2, BarChart3] as const;

export function WhatWeBuildSection() {
  const { t } = useLanguage();

  return (
    <section id="build" className="py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[30px] font-extrabold tracking-tight text-[color:var(--color-foreground)] sm:text-[38px]">
            {t.whatWeBuild.headline}
          </h2>
          <p className="mt-6 text-pretty text-[15px] leading-8 text-[color:var(--color-muted)] sm:text-[17px]">
            {t.whatWeBuild.body}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {t.whatWeBuild.items.map((item, idx) => {
            const Icon = ICONS[idx] ?? Settings2;
            return (
              <Reveal key={item.title} delay={idx * 0.06}>
                <div className="group relative overflow-hidden rounded-3xl bg-[color:var(--color-card)] p-7 shadow-[0_0_0_1px_rgba(201,168,76,0.10)] transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(201,168,76,0.20),0_0_44px_rgba(201,168,76,0.10)]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(520px 220px at 50% 0%, rgba(201,168,76,0.12), transparent 60%)",
                    }}
                  />
                  <div className="relative flex items-start gap-4">
                    <div className="rounded-2xl bg-[color:var(--color-gold-soft)] p-3 shadow-[0_0_0_1px_rgba(201,168,76,0.16)]">
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

