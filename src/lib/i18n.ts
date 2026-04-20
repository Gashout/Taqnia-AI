export type Locale = "ar" | "en";

export type Copy = {
  nav: {
    logoSub: string;
    toggleAr: string;
    toggleEn: string;
    links: {
      what: string;
      build: string;
      how: string;
      serve: string;
      faq: string;
    };
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
    proof: Array<{ k: string; v: string }>;
  };
  whatWeDo: {
    headline: string;
    body: string;
  };
  whatWeBuild: {
    headline: string;
    body: string;
    items: Array<{ title: string; body: string }>;
  };
  features: {
    items: Array<{
      title: string;
      body: string;
    }>;
  };
  howItWorks: {
    headline: string;
    body: string;
    steps: Array<{ title: string; body: string }>;
  };
  deliverables: {
    headline: string;
    body: string;
    items: string[];
  };
  industries: {
    headline: string;
    items: Array<{ label: string }>;
  };
  faq: {
    headline: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: {
    headline: string;
    button: string;
  };
  footer: {
    madeIn: string;
    domain: string;
    whatsapp: string;
    email: string;
  };
};

export const COPY: Record<Locale, Copy> = {
  ar: {
    nav: {
      logoSub: "تقنية",
      toggleAr: "AR",
      toggleEn: "EN",
      links: {
        what: "عنّا",
        build: "ما نبنيه",
        how: "كيف نعمل",
        serve: "القطاعات",
        faq: "الأسئلة",
      },
    },
    hero: {
      headline: "وكلاء الذكاء الاصطناعي الذين لا يتوقفون أبداً",
      subheadline:
        "لا موظف. لا توقف. لا فرصة ضائعة. وكلاؤنا يعملون، يردّون، ينجزون — على مدار الساعة.",
      cta: "ابدأ الآن",
      proof: [
        { k: "24/7", v: "تشغيل دائم" },
        { k: "ثوانٍ", v: "ردود فورية" },
        { k: "مخصص", v: "مبني لعملك" },
      ],
    },
    whatWeDo: {
      headline: "ماذا نفعل؟",
      body: "نصمم ونطوّر وكلاء ذكاء اصطناعي مخصصين يتولّون المهام اليومية التي يقوم بها فريقك يدوياً. كل عمل مختلف. كل حل نبنيه مصمم خصيصاً لك.",
    },
    whatWeBuild: {
      headline: "ما الذي نبنيه لك؟",
      body: "وكلاء جاهزون للتشغيل داخل أعمالك — يتصلون بأنظمتك، ينفذون إجراءات واضحة، ويعطونك رؤية كاملة.",
      items: [
        {
          title: "وكيل خدمة العملاء",
          body: "يرد على الاستفسارات، يصنّف الطلبات، ويرفع الحالات المعقدة — مع نبرة تناسب علامتك.",
        },
        {
          title: "وكيل المبيعات والمتابعة",
          body: "يتابع العملاء المحتملين، يرسل عروضاً، ويجدول المواعيد بدون تأخير.",
        },
        {
          title: "وكيل العمليات",
          body: "يُتمّم الإجراءات المتكررة: إدخال بيانات، تحديث سجلات، وتنبيهات تلقائية.",
        },
        {
          title: "وكيل التقارير والإدارة",
          body: "لوحة مؤشرات وتقارير يومية تُظهر ما يحدث فوراً — مع توصيات قابلة للتنفيذ.",
        },
      ],
    },
    features: {
      items: [
        {
          title: "ردود فورية",
          body: "عملاؤك يحصلون على إجابات فورية في أي وقت من الليل أو النهار",
        },
        {
          title: "أتمتة كاملة",
          body: "عملياتك تسير بدون أي تدخل بشري",
        },
        {
          title: "تحكم كامل",
          body: "تبقى مسيطراً مع تقارير يومية وبيانات فورية",
        },
      ],
    },
    howItWorks: {
      headline: "كيف نعمل؟",
      body: "من التشخيص إلى الإطلاق خلال وقت قصير — مع جودة هندسية وتجربة عربية راقية.",
      steps: [
        {
          title: "تشخيص سريع",
          body: "نفهم عملياتك الحالية ونحدد أين تُهدر الوقت والفرص — ثم نختار أفضل حالات استخدام.",
        },
        {
          title: "بناء وربط",
          body: "نبني الوكيل ونربطه بأنظمتك وقنواتك (واتساب، موقعك، CRM) مع قواعد واضحة.",
        },
        {
          title: "إطلاق وتحسين",
          body: "نطلق تدريجياً، نراقب الجودة، ونحسّن الردود والأداء بناءً على بيانات حقيقية.",
        },
      ],
    },
    deliverables: {
      headline: "ماذا ستحصل عليه؟",
      body: "حزمة متكاملة، ليست مجرد نموذج محادثة.",
      items: [
        "وكيل مخصص مبني على احتياجاتك",
        "تكاملات مع الأنظمة والقنوات",
        "لوحة متابعة + تقارير يومية",
        "قواعد تصعيد للحالات الحساسة",
        "توثيق واضح ودعم بعد الإطلاق",
      ],
    },
    industries: {
      headline: "من نخدم؟",
      items: [{ label: "عيادات" }, { label: "عقارات" }, { label: "تأجير" }, { label: "وأكثر" }],
    },
    faq: {
      headline: "أسئلة شائعة",
      items: [
        {
          q: "هل الوكيل يتحدث العربية باللهجة المناسبة؟",
          a: "نضبط أسلوب اللغة ونبرة العلامة بعناية، مع قواعد لتجنب الردود غير المناسبة ورفع الحالات الحساسة للبشر.",
        },
        {
          q: "هل يمكن ربطه بواتساب وأنظمتنا؟",
          a: "نعم. نصمم التكامل حسب احتياجك: واتساب، نماذج الموقع، CRM، جداول، أو أي واجهات API متاحة لديك.",
        },
        {
          q: "كيف نضمن الجودة وعدم اختلاق معلومات؟",
          a: "نضع مصادر معرفة محددة، وقواعد تحقق، وحدود واضحة، مع سجل للمحادثات ومراقبة وتحسين مستمر.",
        },
        {
          q: "كم يستغرق الإطلاق؟",
          a: "يعتمد على التعقيد والتكاملات، لكن غالباً نبدأ بنسخة أولية بسرعة ثم نحسّن تدريجياً.",
        },
      ],
    },
    cta: {
      headline: "مستعد لترى ما يمكن للذكاء الاصطناعي أن يفعله لعملك؟",
      button: "احجز استشارة مجانية",
    },
    footer: {
      madeIn: "صُنع في المملكة العربية السعودية بكل حب",
      domain: "taqnia.sa",
      whatsapp: "+966511090850",
      email: "Helo@flowforgeai.tech",
    },
  },
  en: {
    nav: {
      logoSub: "Taqnia",
      toggleAr: "AR",
      toggleEn: "EN",
      links: {
        what: "Overview",
        build: "What we build",
        how: "How it works",
        serve: "Industries",
        faq: "FAQ",
      },
    },
    hero: {
      headline: "AI Agents That Never Stop Working",
      subheadline:
        "No employee. No downtime. No missed opportunity. Our agents work, respond, and execute — around the clock.",
      cta: "Get Started",
      proof: [
        { k: "24/7", v: "Always on" },
        { k: "Seconds", v: "Instant response" },
        { k: "Custom", v: "Built for you" },
      ],
    },
    whatWeDo: {
      headline: "What We Do",
      body: "We design and deploy custom AI agents that handle the daily tasks your team does manually. Every business is different. Every solution we build is built specifically for you.",
    },
    whatWeBuild: {
      headline: "What We Build For You",
      body: "Production-grade agents that plug into your business — integrated, governed, and measurable.",
      items: [
        {
          title: "Customer Support Agent",
          body: "Answers questions, categorizes requests, and escalates sensitive cases — in your brand voice.",
        },
        {
          title: "Sales & Follow-up Agent",
          body: "Follows up leads, shares offers, and books meetings without delays.",
        },
        {
          title: "Operations Agent",
          body: "Automates repetitive tasks: data entry, updates, routing, and notifications.",
        },
        {
          title: "Reporting Agent",
          body: "Dashboards and daily summaries so you stay in control with real-time visibility.",
        },
      ],
    },
    features: {
      items: [
        {
          title: "Instant Response",
          body: "Your customers get answered immediately. Day or night.",
        },
        {
          title: "Fully Automated",
          body: "Your workflows run without human involvement.",
        },
        {
          title: "Full Visibility",
          body: "Stay in control with daily reports and real time data.",
        },
      ],
    },
    howItWorks: {
      headline: "How It Works",
      body: "From discovery to launch with clear governance and measurable outcomes.",
      steps: [
        {
          title: "Fast discovery",
          body: "We map your workflow, find bottlenecks, and select the highest-impact use cases.",
        },
        {
          title: "Build & integrate",
          body: "We build the agent and connect it to your channels (WhatsApp, website, CRM) with clear rules.",
        },
        {
          title: "Launch & optimize",
          body: "We roll out safely, monitor quality, and iterate using real data and feedback.",
        },
      ],
    },
    deliverables: {
      headline: "What You Get",
      body: "A complete delivery — not just a chatbot.",
      items: [
        "A custom agent built for your business",
        "Integrations with your tools and channels",
        "Monitoring + daily reporting",
        "Escalation rules for sensitive cases",
        "Documentation and post-launch support",
      ],
    },
    industries: {
      headline: "Who We Serve",
      items: [
        { label: "Clinics" },
        { label: "Real Estate" },
        { label: "Rental" },
        { label: "And More" },
      ],
    },
    faq: {
      headline: "Frequently Asked Questions",
      items: [
        {
          q: "Can it handle Arabic properly?",
          a: "Yes. We tune tone, terminology, and escalation rules to fit your brand and your customers.",
        },
        {
          q: "Can you integrate with WhatsApp and our systems?",
          a: "Yes. We connect to WhatsApp, website forms, CRMs, and internal tools via available APIs and workflows.",
        },
        {
          q: "How do you prevent hallucinations?",
          a: "We use controlled knowledge sources, verification rules, safe boundaries, and continuous monitoring.",
        },
        {
          q: "How long does it take to launch?",
          a: "It depends on complexity and integrations. We typically ship an initial version quickly, then iterate.",
        },
      ],
    },
    cta: {
      headline: "Ready to see what AI can do for your business?",
      button: "Book a Free Discovery Call",
    },
    footer: {
      madeIn: "Made in Saudi Arabia with love",
      domain: "taqnia.sa",
      whatsapp: "+966511090850",
      email: "Helo@flowforgeai.tech",
    },
  },
};

