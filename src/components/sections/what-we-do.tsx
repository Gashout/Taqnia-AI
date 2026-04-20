"use client";

import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function WhatWeDoSection() {
  const { t } = useLanguage();

  return (
    <section id="what" className="py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[30px] font-extrabold tracking-tight text-[color:var(--color-foreground)] sm:text-[38px]">
            {t.whatWeDo.headline}
          </h2>
          <p className="mt-6 text-pretty text-[15px] leading-8 text-[color:var(--color-muted)] sm:text-[17px]">
            {t.whatWeDo.body}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

