"use client";

import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { RefreshCw, Timer, XCircle } from "lucide-react";

export function WhatWeDoSection() {
  const { t, locale } = useLanguage();
  const isAr = locale === "ar";

  const PAIN_POINTS = [
    {
      icon: Timer,
      title: isAr ? "تأخير في الرد" : "Delayed Response",
      body: isAr ? "العملاء لا ينتظرون. كل دقيقة تمر دون رد هي فرصة تذهب للمنافس." : "Customers don't wait. Every minute without a reply is a lost lead.",
    },
    {
      icon: XCircle,
      title: isAr ? "أخطاء بشرية" : "Human Errors",
      body: isAr ? "المهام اليدوية المتكررة تؤدي دائماً للأخطاء والنسيان وتكلفك الكثير." : "Manual repetitive tasks inevitably lead to mistakes and missed details.",
    },
    {
      icon: RefreshCw,
      title: isAr ? "غياب المتابعة" : "Zero Follow-up",
      body: isAr ? "أكثر من 70% من الصفقات تضيع بسبب عدم المتابعة في الوقت الصحيح." : "Over 70% of deals are lost due to lack of timely follow-up.",
    },
  ];

  return (
    <section id="what" className="py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[32px] font-black tracking-tight text-[color:var(--color-foreground)] sm:text-[42px]">
            {t.whatWeDo.headline}
          </h2>
          <p className="mt-6 text-pretty text-[16px] leading-8 text-[color:var(--color-muted)] sm:text-[19px]">
            {t.whatWeDo.body}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PAIN_POINTS.map((point, idx) => (
            <Reveal key={point.title} delay={idx * 0.1}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-[color:var(--color-hairline)] bg-[color:var(--color-card)] p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                  <point.icon className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-bold text-[color:var(--color-foreground)]">
                  {point.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[color:var(--color-muted-2)]">
                  {point.body}
                </p>
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] dark:opacity-[0.05]">
                  <point.icon className="h-24 w-24 translate-x-8 translate-y--8 rotate-12" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
