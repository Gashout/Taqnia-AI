"use client";

import { Heart, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { whatsappLink, normalizeWhatsAppNumber } from "@/lib/contact";

export function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer className="pb-12 pt-10">
      <div className="h-px w-full bg-[linear-gradient(to_right,transparent,rgba(201,168,76,0.22),transparent)]" />
      <Container className="pt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start">
          <div>
            <div className="text-[15px] font-semibold tracking-tight text-[color:var(--color-foreground)]">
              Taqnia AI
            </div>
            <div className="mt-1 text-[12px] font-semibold tracking-wide text-[color:var(--color-gold)]">
              تقنية
            </div>
            <div className="mt-4 text-[13px] text-[color:var(--color-muted-2)]">
              {t.footer.domain}
            </div>
          </div>

          <div>
            <div className="text-[12px] font-semibold tracking-wide text-[color:var(--color-muted-2)]">
              {locale === "ar" ? "روابط" : "Links"}
            </div>
            <div className="mt-4 space-y-2">
              {[
                { href: "#what", label: t.nav.links.what },
                { href: "#build", label: t.nav.links.build },
                { href: "#how", label: t.nav.links.how },
                { href: "#industries", label: t.nav.links.serve },
                { href: "#faq", label: t.nav.links.faq },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-[13px] text-[color:var(--color-muted)] transition-colors hover:text-[color:var(--color-foreground)]"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[12px] font-semibold tracking-wide text-[color:var(--color-muted-2)]">
              Contact
            </div>
            <div className="mt-4 space-y-3">
              <a
                className="group flex items-center gap-3 rounded-2xl bg-[color:var(--color-card)] px-4 py-3 shadow-[0_0_0_1px_rgba(201,168,76,0.08)] transition-shadow hover:shadow-[0_0_0_1px_rgba(201,168,76,0.18),0_0_34px_rgba(201,168,76,0.08)]"
                href={whatsappLink(t.footer.whatsapp)}
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--color-gold-soft)] shadow-[0_0_0_1px_rgba(201,168,76,0.16)]">
                  <MessageCircle className="h-4 w-4 text-[color:var(--color-gold)]" />
                </span>
                <div className="leading-tight">
                  <div className="text-[13px] font-semibold text-[color:var(--color-foreground)]">
                    WhatsApp
                  </div>
                  <div className="mt-1 text-[12px] text-[color:var(--color-muted)]">
                    +{normalizeWhatsAppNumber(t.footer.whatsapp)}
                  </div>
                </div>
              </a>

              <a
                className="group flex items-center gap-3 rounded-2xl bg-[color:var(--color-card)] px-4 py-3 shadow-[0_0_0_1px_rgba(201,168,76,0.08)] transition-shadow hover:shadow-[0_0_0_1px_rgba(201,168,76,0.18),0_0_34px_rgba(201,168,76,0.08)]"
                href={`mailto:${t.footer.email}`}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--color-gold-soft)] shadow-[0_0_0_1px_rgba(201,168,76,0.16)]">
                  <Mail className="h-4 w-4 text-[color:var(--color-gold)]" />
                </span>
                <div className="leading-tight">
                  <div className="text-[13px] font-semibold text-[color:var(--color-foreground)]">
                    Email
                  </div>
                  <div className="mt-1 text-[12px] text-[color:var(--color-muted)]">
                    {t.footer.email}
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="hidden md:block" />
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-center text-[12px] text-[color:var(--color-muted-2)]">
          <span>{t.footer.madeIn}</span>
          <Heart className="h-4 w-4 text-[color:var(--color-gold)]" />
        </div>
      </Container>
    </footer>
  );
}

