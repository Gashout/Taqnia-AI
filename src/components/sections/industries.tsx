"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Building2,
  Phone,
  ShoppingCart,
  Landmark,
  Shield,
  Code2,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { whatsappLink } from "@/lib/contact";

const ICON_MAP: Record<string, React.ElementType> = {
  stethoscope: Stethoscope,
  building2: Building2,
  phone: Phone,
  shoppingcart: ShoppingCart,
  landmark: Landmark,
  shield: Shield,
  code2: Code2,
};

export function IndustriesSection() {
  const { t, locale } = useLanguage();
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [openAccordion, setOpenAccordion] = React.useState<number | null>(0);
  const isRtl = locale === "ar";

  const active = t.industries.items[activeIdx];

  return (
    <section id="industries" className="py-20 sm:py-28">
      <Container>
        {/* Headline */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[30px] font-extrabold tracking-tight text-[color:var(--color-foreground)] sm:text-[38px]">
            {t.industries.headline}
          </h2>
          <p className="mt-3 text-[15px] text-[color:var(--color-muted)]">
            {locale === "ar"
              ? "اختر قطاعك واكتشف كيف يحل الذكاء الاصطناعي مشاكلك"
              : "Select your industry and discover how AI solves your challenges"}
          </p>
        </Reveal>

        {/* Desktop: Tab + Panel layout */}
        <div className="mt-12 hidden lg:flex gap-5" dir={isRtl ? "rtl" : "ltr"}>
          {/* Tab list */}
          <div className="flex flex-col gap-2 w-56 shrink-0">
            {t.industries.items.map((item, idx) => {
              const Icon = ICON_MAP[item.icon] ?? Code2;
              const isActive = idx === activeIdx;
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveIdx(idx)}
                  className={[
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-start transition-all duration-200",
                    isActive
                      ? "bg-[color:var(--color-gold-soft)] shadow-[0_0_0_1px_rgba(201,168,76,0.30)] text-[color:var(--color-foreground)]"
                      : "text-[color:var(--color-muted)] hover:bg-[color:var(--color-card-2)] hover:text-[color:var(--color-foreground)]",
                  ].join(" ")}
                >
                  <Icon
                    className={[
                      "h-4 w-4 shrink-0 transition-colors",
                      isActive
                        ? "text-[color:var(--color-gold)]"
                        : "text-[color:var(--color-muted-2)]",
                    ].join(" ")}
                  />
                  <span className="text-[13px] font-semibold leading-tight">
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="tab-dot"
                      className={[
                        "ms-auto h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]",
                      ].join(" ")}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <DetailPanel item={active} locale={locale} whatsapp={t.footer.whatsapp} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: Accordion layout */}
        <div className="mt-10 flex flex-col gap-3 lg:hidden">
          {t.industries.items.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] ?? Code2;
            const isOpen = openAccordion === idx;
            return (
              <div
                key={item.label}
                className={[
                  "rounded-2xl border transition-all duration-200",
                  isOpen
                    ? "border-[color:var(--color-gold-border)] bg-[color:var(--color-card)]"
                    : "border-transparent bg-[color:var(--color-card)]",
                ].join(" ")}
              >
                <button
                  onClick={() => setOpenAccordion(isOpen ? null : idx)}
                  className="flex w-full items-center gap-3 px-5 py-4"
                >
                  <Icon
                    className={[
                      "h-5 w-5 shrink-0",
                      isOpen
                        ? "text-[color:var(--color-gold)]"
                        : "text-[color:var(--color-muted-2)]",
                    ].join(" ")}
                  />
                  <span className="flex-1 text-start text-[14px] font-semibold text-[color:var(--color-foreground)]">
                    {item.label}
                  </span>
                  <ChevronDown
                    className={[
                      "h-4 w-4 text-[color:var(--color-muted-2)] transition-transform duration-200",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <DetailPanel item={item} locale={locale} whatsapp={t.footer.whatsapp} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

type Industry = {
  label: string;
  icon: string;
  problems: string[];
  solutions: string[];
  plans: Array<{
    name: string;
    price: string;
    period: string;
    features: string[];
    popular?: boolean;
  }>;
};

function DetailPanel({
  item,
  locale,
  whatsapp,
}: {
  item: Industry;
  locale: string;
  whatsapp: string;
}) {
  const isAr = locale === "ar";

  return (
    <div className="space-y-6">
      {/* Problems + Solutions */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Problems */}
        <div className="rounded-2xl bg-[color:var(--color-card)] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
          <div className="mb-3 flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-amber-400" />
            <span className="text-[13px] font-bold uppercase tracking-widest text-amber-400">
              {isAr ? "التحديات" : "Challenges"}
            </span>
          </div>
          <ul className="space-y-2">
            {item.problems.map((p) => (
              <li key={p} className="flex items-start gap-2 text-[13px] text-[color:var(--color-muted)]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/60" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div className="rounded-2xl bg-[color:var(--color-card)] p-5 shadow-[0_0_0_1px_rgba(201,168,76,0.10)]">
          <div className="mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[color:var(--color-gold)]" />
            <span className="text-[13px] font-bold uppercase tracking-widest text-[color:var(--color-gold)]">
              {isAr ? "الحلول" : "Solutions"}
            </span>
          </div>
          <ul className="space-y-2">
            {item.solutions.map((s) => (
              <li key={s} className="flex items-start gap-2 text-[13px] text-[color:var(--color-muted)]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-gold)]/60" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {item.plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} isAr={isAr} whatsapp={whatsapp} />
        ))}
      </div>
    </div>
  );
}

function PricingCard({
  plan,
  isAr,
  whatsapp,
}: {
  plan: { name: string; price: string; period: string; features: string[]; popular?: boolean };
  isAr: boolean;
  whatsapp: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={[
        "relative flex flex-col rounded-2xl p-5 transition-all duration-300",
        plan.popular
          ? "bg-[color:var(--color-gold-soft)] shadow-[0_0_0_1px_rgba(201,168,76,0.35),0_0_32px_rgba(201,168,76,0.10)]"
          : "bg-[color:var(--color-card)] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]",
      ].join(" ")}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-[color:var(--color-gold)] px-3 py-0.5 text-[11px] font-bold text-black">
            {isAr ? "الأكثر طلباً" : "Most Popular"}
          </span>
        </div>
      )}

      {/* Plan name */}
      <div className="text-[13px] font-semibold text-[color:var(--color-muted-2)]">
        {plan.name}
      </div>

      {/* Price */}
      <div className="mt-2 flex items-end gap-1">
        <span className={[
          "text-[28px] font-extrabold tracking-tight",
          plan.popular
            ? "text-[color:var(--color-gold)]"
            : "text-[color:var(--color-foreground)]",
        ].join(" ")}>
          {plan.price}
        </span>
        <span className="mb-1 text-[12px] text-[color:var(--color-muted-2)]">
          {plan.period}
        </span>
      </div>

      {/* Features */}
      <ul className="mt-4 flex-1 space-y-2">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-[12px] text-[color:var(--color-muted)]">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[color:var(--color-gold)]" />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={whatsappLink(whatsapp)}
        target="_blank"
        rel="noreferrer"
        className={[
          "mt-5 block w-full rounded-xl py-2.5 text-center text-[13px] font-semibold transition-all duration-200",
          plan.popular
            ? "bg-[color:var(--color-gold)] text-black hover:opacity-90"
            : "bg-[color:var(--color-card-2)] text-[color:var(--color-foreground)] hover:bg-[color:var(--color-gold-soft)] hover:text-[color:var(--color-gold)]",
        ].join(" ")}
      >
        {isAr ? "تواصل معنا" : "Get Started"}
      </a>
    </motion.div>
  );
}
