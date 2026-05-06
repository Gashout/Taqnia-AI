"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { useTheme } from "@/components/theme-provider";
import { GoldButton } from "@/components/ui/gold-button";
import { whatsappLink } from "@/lib/contact";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className={[
        "hidden md:inline-flex",
        "h-9 items-center rounded-xl px-3 text-xs font-semibold tracking-wide",
        "text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)]",
        "transition-colors",
        "hover:bg-[color:var(--color-card-2)]",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function ToggleButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "h-9 rounded-xl px-3 text-xs font-semibold tracking-wide",
        "transition-colors",
        active
          ? "bg-[color:var(--color-gold)] text-black"
          : "bg-[color:var(--color-card)] text-[color:var(--color-muted)] hover:bg-[color:var(--color-card-2)] hover:text-[color:var(--color-foreground)]",
        "shadow-[0_0_0_1px_rgba(201,168,76,0.12)]",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={[
        "sticky top-0 z-50 w-full",
        "transition-all duration-300",
        scrolled
          ? "bg-[color:var(--color-background)]/75 backdrop-blur-xl shadow-[0_0_0_1px_rgba(201,168,76,0.12)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="leading-none">
            <div className="text-[15px] font-semibold tracking-tight text-[color:var(--color-foreground)]">
              Taqnia AI SA
            </div>
            <div className="mt-1 text-[12px] font-semibold tracking-wide text-[color:var(--color-gold)]">
              تقنية
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <NavLink href="#what">{t.nav.links.what}</NavLink>
          <NavLink href="#build">{t.nav.links.build}</NavLink>
          <NavLink href="#how">{t.nav.links.how}</NavLink>
          <NavLink href="#industries">{t.nav.links.serve}</NavLink>
          <NavLink href="#faq">{t.nav.links.faq}</NavLink>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className={[
              "inline-flex h-9 w-9 items-center justify-center rounded-xl",
              "bg-[color:var(--color-card)] text-[color:var(--color-muted)] hover:bg-[color:var(--color-card-2)] hover:text-[color:var(--color-foreground)]",
              "shadow-[0_0_0_1px_rgba(201,168,76,0.12)]",
              "transition-colors",
            ].join(" ")}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-[color:var(--color-gold)]" />
            ) : (
              <Moon className="h-4 w-4 text-[color:var(--color-gold)]" />
            )}
          </button>
          <ToggleButton active={locale === "ar"} onClick={() => setLocale("ar")}>
            AR
          </ToggleButton>
          <ToggleButton active={locale === "en"} onClick={() => setLocale("en")}>
            EN
          </ToggleButton>
          <div className="ml-2 hidden sm:block">
            <GoldButton
              href={whatsappLink(t.footer.whatsapp)}
              target="_blank"
              rel="noreferrer"
              className="h-9 px-4 py-0 text-[11px] font-bold rounded-xl tracking-tight"
            >
              {t.nav.bookDemo}
            </GoldButton>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-[linear-gradient(to_right,transparent,rgba(201,168,76,0.18),transparent)]" />
    </div>
  );
}
