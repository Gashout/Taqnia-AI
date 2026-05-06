"use client";

import { Quote, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function TestimonialsSection() {
  const { t, locale } = useLanguage();
  const isAr = locale === "ar";

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[color:var(--color-background)]">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[32px] font-black tracking-tight text-[color:var(--color-foreground)] sm:text-[42px]">
            {t.testimonials.headline}
          </h2>
          <p className="mt-6 text-pretty text-[16px] leading-8 text-[color:var(--color-muted)] sm:text-[19px]">
            {t.testimonials.subheadline}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Quote Panel */}
          <Reveal delay={0.1}>
            <div className="relative rounded-[40px] bg-[color:var(--color-card)] p-10 shadow-[0_0_0_1px_rgba(201,168,76,0.12)]">
              <div className="absolute -top-6 left-10 rounded-2xl bg-[color:var(--color-gold)] p-4 shadow-lg shadow-gold/20">
                <Quote className="h-6 w-6 text-black" fill="currentColor" />
              </div>
              
              <blockquote className="mt-4">
                <p className="text-[18px] font-medium italic leading-9 text-[color:var(--color-foreground)]/90 sm:text-[20px]">
                  "{t.testimonials.quote}"
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[color:var(--color-gold-soft)] flex items-center justify-center border border-[color:var(--color-gold-border)]">
                    <span className="text-[18px] font-bold text-[color:var(--color-gold)]">
                      {t.testimonials.author[0]}
                    </span>
                  </div>
                  <div>
                    <div className="text-[16px] font-bold text-[color:var(--color-foreground)]">
                      {t.testimonials.author}
                    </div>
                    <div className="text-[13px] text-[color:var(--color-muted-2)]">
                      {t.testimonials.authorRole}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </Reveal>

          {/* Roadmap Panel */}
          <Reveal delay={0.2}>
            <div className="rounded-[40px] border border-[color:var(--color-hairline)] bg-[color:var(--color-card)] p-10">
              <h3 className="text-[18px] font-bold uppercase tracking-widest text-[color:var(--color-gold)] mb-8 flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                {t.testimonials.projectsTitle}
              </h3>
              
              <ul className="space-y-6">
                {t.testimonials.projects.map((project, idx) => (
                  <li key={project} className="group flex items-start gap-4">
                    <div className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${project.includes("قريباً") || project.includes("Soon") ? "bg-[color:var(--color-card-2)] border border-dashed border-[color:var(--color-hairline)]" : "bg-[color:var(--color-gold-soft)]"}`}>
                      <CheckCircle2 className={`h-3.5 w-3.5 ${project.includes("قريباً") || project.includes("Soon") ? "text-[color:var(--color-muted-2)]" : "text-[color:var(--color-gold)]"}`} />
                    </div>
                    <div>
                      <span className={`text-[15px] font-medium leading-7 ${project.includes("قريباً") || project.includes("Soon") ? "text-[color:var(--color-muted)] italic" : "text-[color:var(--color-foreground)]"}`}>
                        {project}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-4 rounded-2xl bg-[color:var(--color-gold-soft)]/30 border border-[color:var(--color-gold-border)]">
                <p className="text-[13px] text-center font-medium text-[color:var(--color-muted)]">
                  {isAr ? "شراكة طويلة الأمد لبناء المستقبل الرقمي" : "A long-term partnership building the digital future"}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
