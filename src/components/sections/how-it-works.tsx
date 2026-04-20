"use client";

import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

function Step({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl bg-[color:var(--color-card)] p-7 shadow-[0_0_0_1px_rgba(201,168,76,0.08)]">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--color-gold-soft)] text-[13px] font-extrabold text-[color:var(--color-gold)] shadow-[0_0_0_1px_rgba(201,168,76,0.18)]">
          {n}
        </div>
        <div>
          <div className="text-[17px] font-bold tracking-tight text-[color:var(--color-foreground)]">
            {title}
          </div>
          <p className="mt-2 text-[14px] leading-7 text-[color:var(--color-muted-2)]">{body}</p>
        </div>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section id="how" className="py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[30px] font-extrabold tracking-tight text-[color:var(--color-foreground)] sm:text-[38px]">
            {t.howItWorks.headline}
          </h2>
          <p className="mt-6 text-pretty text-[15px] leading-8 text-[color:var(--color-muted)] sm:text-[17px]">
            {t.howItWorks.body}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {t.howItWorks.steps.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 0.08}>
              <Step n={`0${idx + 1}`} title={s.title} body={s.body} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

