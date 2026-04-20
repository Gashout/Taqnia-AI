"use client";

import { motion } from "framer-motion";
import { BackgroundOrbs } from "@/components/background-orbs";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { GoldButton } from "@/components/ui/gold-button";
import { Reveal } from "@/components/ui/reveal";
import { whatsappLink } from "@/lib/contact";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <BackgroundOrbs />
      <Container className="relative flex min-h-[100svh] items-center py-20">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-balance text-[42px] font-extrabold leading-[1.05] tracking-tight text-[color:var(--color-foreground)] sm:text-[56px]">
              {t.hero.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-[16px] leading-8 text-[color:var(--color-muted)] sm:text-[18px]">
              {t.hero.subheadline}
            </p>
            <div className="mt-10 flex items-center justify-center">
              <GoldButton href={whatsappLink(t.footer.whatsapp)} target="_blank" rel="noreferrer">
                {t.hero.cta}
              </GoldButton>
            </div>
          </motion.div>

          <Reveal delay={0.15} className="mx-auto mt-14 max-w-4xl">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {t.hero.proof.map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl bg-[color:var(--color-card)] px-5 py-4 text-center shadow-[0_0_0_1px_rgba(201,168,76,0.10)]"
                >
                  <div className="text-[15px] font-semibold text-[color:var(--color-foreground)]">
                    {item.k}
                  </div>
                  <div className="mt-1 text-[12px] text-[color:var(--color-muted-2)]">
                    {item.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

