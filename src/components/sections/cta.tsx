"use client";

import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { GoldButton } from "@/components/ui/gold-button";
import { Reveal } from "@/components/ui/reveal";
import { whatsappLink } from "@/lib/contact";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section id="cta" className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-[color:var(--color-card)] px-6 py-14 shadow-[0_0_0_1px_rgba(201,168,76,0.16)] sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_320px_at_50%_20%,rgba(201,168,76,0.18),transparent_60%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(var(--bg-rgb),0.0),rgba(var(--bg-rgb),0.35))]"
          />

          <Reveal className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-[30px] font-extrabold tracking-tight text-[color:var(--color-foreground)] sm:text-[40px]">
              {t.cta.headline}
            </h2>
            <div className="mt-10 flex justify-center">
              <GoldButton href={whatsappLink(t.footer.whatsapp)} target="_blank" rel="noreferrer">
                {t.cta.button}
              </GoldButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

