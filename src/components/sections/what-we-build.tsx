"use client";

import { BarChart3, Headset, Settings2, TrendingUp, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const ICONS = [Headset, TrendingUp, Settings2, BarChart3] as const;

export function WhatWeBuildSection() {
  const { t, locale } = useLanguage();
  const isAr = locale === "ar";

  return (
    <section id="build" className="py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[32px] font-black tracking-tight text-[color:var(--color-foreground)] sm:text-[42px]">
            {t.whatWeBuild.headline}
          </h2>
          <p className="mt-6 text-pretty text-[16px] leading-8 text-[color:var(--color-muted)] sm:text-[19px]">
            {t.whatWeBuild.body}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.whatWeBuild.items.map((item, idx) => {
            const Icon = ICONS[idx] ?? Settings2;
            return (
              <Reveal key={item.title} delay={idx * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-[color:var(--color-card)] p-8 shadow-[0_0_0_1px_rgba(201,168,76,0.12)] transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(201,168,76,0.3),0_0_40px_rgba(201,168,76,0.12)]">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(600px 300px at 50% 0%, rgba(201,168,76,0.08), transparent 70%)",
                    }}
                  />
                  
                  <div className="relative flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className="rounded-2xl bg-[color:var(--color-gold-soft)] p-4 shadow-[0_0_0_1px_rgba(201,168,76,0.2)] group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-[color:var(--color-gold)]" />
                      </div>
                      <div className="inline-flex items-center rounded-lg bg-green-500/10 px-2.5 py-1 text-[11px] font-bold text-green-500 uppercase tracking-tighter shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                        <CheckCircle2 className="mr-1.5 h-3 w-3" />
                        {isAr ? "جاهز للتشغيل" : "Ready to Deploy"}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[22px] font-bold tracking-tight text-[color:var(--color-foreground)]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-7 text-[color:var(--color-muted-2)]">
                        {item.body}
                      </p>
                    </div>

                    <div className="mt-auto pt-8 flex items-center gap-4 border-t border-[color:var(--color-hairline)] opacity-60">
                      <div className="text-[12px] font-medium text-[color:var(--color-gold)]">
                        {isAr ? "أتمتة كاملة" : "Full Automation"}
                      </div>
                      <div className="h-1 w-1 rounded-full bg-[color:var(--color-gold-soft)]" />
                      <div className="text-[12px] font-medium text-[color:var(--color-gold)]">
                        {isAr ? "دعم عربي" : "Arabic Support"}
                      </div>
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
