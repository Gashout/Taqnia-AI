"use client";

import { motion } from "framer-motion";
import { BackgroundOrbs } from "@/components/background-orbs";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { GoldButton } from "@/components/ui/gold-button";
import { Reveal } from "@/components/ui/reveal";
import { whatsappLink } from "@/lib/contact";

export function HeroSection() {
  const { t, locale } = useLanguage();
  const isAr = locale === "ar";

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
            {/* Top Badge */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center rounded-full border border-[color:var(--color-gold-border)] bg-[color:var(--color-gold-soft)] px-3 py-1 text-[12px] font-medium tracking-wider text-[color:var(--color-gold)] uppercase">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-[color:var(--color-gold)] animate-pulse" />
                {isAr ? "الجيل القادم من الذكاء الاصطناعي" : "Next-Gen Operational AI"}
              </div>
            </div>

            <h1 className="text-balance text-[46px] font-black leading-[1.05] tracking-tight text-[color:var(--color-foreground)] sm:text-[68px]">
              {t.hero.headline}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-[17px] leading-8 text-[color:var(--color-muted)] sm:text-[20px]">
              {t.hero.subheadline}
            </p>
            <div className="mt-12 flex items-center justify-center">
              <GoldButton href={whatsappLink(t.footer.whatsapp)} target="_blank" rel="noreferrer" className="px-10 py-6 text-lg">
                {t.hero.cta}
              </GoldButton>
            </div>
          </motion.div>

          <Reveal delay={0.25} className="mx-auto mt-20 max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {t.hero.proof.map((item) => (
                <div
                  key={item.k}
                  className="group relative overflow-hidden rounded-2xl bg-[color:var(--color-card)] px-6 py-5 text-center shadow-[0_0_0_1px_rgba(201,168,76,0.12)] transition-all hover:shadow-[0_0_0_1px_rgba(201,168,76,0.25),0_0_24px_rgba(201,168,76,0.1)]"
                >
                  <div className="text-[20px] font-bold text-[color:var(--color-gold)]">
                    {item.k}
                  </div>
                  <div className="mt-1 text-[13px] font-medium text-[color:var(--color-muted)] uppercase tracking-wide">
                    {item.v}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-gold)]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
