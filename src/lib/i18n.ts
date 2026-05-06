export type Locale = "ar" | "en";

export type Copy = {
  nav: {
    logoSub: string;
    toggleAr: string;
    toggleEn: string;
    bookDemo: string;
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
    items: Array<{
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
    }>;
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
    phone: string;
    whatsapp: string;
    email: string;
    linkedin: string;
    labels: {
      contact: string;
      phone: string;
      email: string;
      linkedin: string;
    };
  };
  testimonials: {
    headline: string;
    subheadline: string;
    quote: string;
    author: string;
    authorRole: string;
    projectsTitle: string;
    projects: string[];
  };
};

export const COPY: Record<Locale, Copy> = {
  ar: {
    nav: {
      logoSub: "تقنية SA",
      toggleAr: "AR",
      toggleEn: "EN",
      bookDemo: "احجز تجربة",
      links: {
        what: "عنّا",
        build: "ما نبنيه",
        how: "كيف نعمل",
        serve: "القطاعات",
        faq: "الأسئلة",
      },
    },
    hero: {
      headline: "عملك يخسر كل يوم — والحل جاهز الآن",
      subheadline:
        "عملاء لا يجدون رداً. فرص تُفقد في صمت. فريقك غارق في مهام يجب أن تكون آلية. تقنية AI SA تبني الذراع التشغيلية الذكية لعملك — وكلاء يعملون، يتابعون، وينجزون على مدار الساعة.",
      cta: "احجز استشارة مجانية",
      proof: [
        { k: "24/7", v: "بدون توقف" },
        { k: "+60%", v: "تخفيض في التكاليف" },
        { k: "أيام", v: "لا أشهر" },
      ],
    },
    whatWeDo: {
      headline: "المشكلة التي نحلّها",
      body: "معظم الشركات تخسر عملاء لأن الرد يتأخر. تُضيّع وقتها في مهام متكررة يمكن أن تكون آلية. وتفقد صفقات لأن المتابعة لا تحدث في الوقت المناسب. نحن نغلق هذه الثغرات بوكلاء ذكاء اصطناعي مدمجين داخل عملياتك — لا أدوات منفصلة، لا تجارب عامة. كل شيء مبني لك خصيصاً.",
    },
    whatWeBuild: {
      headline: "ماذا نبني لك؟",
      body: "ليس مجرد روبوت محادثة — بل ذراع تشغيلية ذكية تعمل بدلاً من موظفين إضافيين وبكسر التكلفة.",
      items: [
        {
          title: "وكيل خدمة العملاء",
          body: "يرد فوراً على كل استفسار، يصنّف الطلبات، ويحل 80% من الحالات بدون تدخل بشري — ويرفع المعقد منها للفريق تلقائياً.",
        },
        {
          title: "وكيل المبيعات والمتابعة",
          body: "لا صفقة تُفقد بسبب تأخير. الوكيل يتابع العميل المحتمل، يرسل العروض، ويحجز الاجتماع — في الوقت الصحيح.",
        },
        {
          title: "وكيل العمليات",
          body: "كل ما يفعله فريقك يدوياً ويومياً: إدخال بيانات، تحديث سجلات، تنبيهات، إشعارات — يصبح آلياً بالكامل.",
        },
        {
          title: "وكيل التقارير والقرار",
          body: "لا تنتظر التقارير الأسبوعية. لوحة مؤشرات حية وتقارير يومية تُظهر ما يحدث فعلاً — مع توصيات قابلة للتنفيذ.",
        },
      ],
    },
    features: {
      items: [
        {
          title: "ردود خلال ثوانٍ، لا ساعات",
          body: "عميلك لا ينتظر. وكلاؤنا يردون فورياً في أي وقت — نهاراً أو ليلاً — قبل أن يفكر في المنافس.",
        },
        {
          title: "تشغيل آلي بالكامل",
          body: "المهام المتكررة تنتهي. عملياتك تسير وحدها بدقة عالية، وفريقك يركّز على ما يصنع فرقاً حقيقياً.",
        },
        {
          title: "رؤية كاملة وتحكم تام",
          body: "أنت دائماً في السيطرة. تقارير يومية، بيانات فورية، وتنبيهات عند الحاجة — بدون مفاجآت.",
        },
      ],
    },
    howItWorks: {
      headline: "كيف نعمل معك؟",
      body: "لا عقود طويلة. لا مشاريع معقدة. نصل لنتائج ملموسة بسرعة.",
      steps: [
        {
          title: "نشخّص ونحدد",
          body: "نجلس معك، نفهم عملياتك، ونكشف أين تُهدر وقتك ومالك وعملاءك — ثم نضع خطة واضحة لأكبر الفرص.",
        },
        {
          title: "نبني ونربط",
          body: "نبني الوكيل ونربطه مباشرة بأنظمتك وقنواتك — واتساب، موقعك، CRM، أو أي نظام تعتمد عليه.",
        },
        {
          title: "نطلق ونحسّن",
          body: "نطلق تدريجياً لضمان الجودة، ثم نحسّن الأداء بناءً على بيانات حقيقية ونتائج قابلة للقياس.",
        },
      ],
    },
    deliverables: {
      headline: "ماذا ستحصل عليه؟",
      body: "ليس نموذج محادثة — بل ذراع تشغيلية كاملة مدمجة في قلب عملك.",
      items: [
        "وكيل ذكاء اصطناعي مخصص مبني على عملياتك الفعلية",
        "تكاملات كاملة مع أنظمتك وقنوات تواصلك",
        "لوحة متابعة حية + تقارير يومية",
        "قواعد تصعيد ذكية للحالات الحساسة",
        "توثيق واضح ودعم مستمر بعد الإطلاق",
      ],
    },
    industries: {
      headline: "من نخدم؟",
      items: [
        {
          label: "العيادات والمستشفيات",
          icon: "stethoscope",
          problems: [
            "مرضى يتصلون خارج ساعات العمل ولا يجدون رداً",
            "حجوزات ضائعة بسبب عدم المتابعة وتأخر الرد",
            "فريق الاستقبال مثقل بالمهام المتكررة وأسئلة التأمين",
          ],
          solutions: [
            "حجز المواعيد 24/7 عبر واتساب وإنستغرام وفيسبوك (حتى في رمضان وأوقات الصلاة)",
            "تذكيرات تلقائية (48/24/2 ساعة) لتقليل حالات عدم الحضور بنسبة 80%",
            "توليد مراجعات جوجل بـ 5 نجوم تلقائياً من المرضى السعداء",
            "التحدث بطلاقة بالعربية والإنجليزية وأكثر من 40 لغة أخرى لخدمة كل مريض في المملكة",
            "وكيل مخصص يتعلم خدماتك، أسعارك، ومزودي التأمين لديك بالكامل",
          ],
          plans: [
            {
              name: "أساسي",
              price: "899",
              period: "ريال/شهر",
              features: [
                "تكامل واتساب للأعمال",
                "حجز آلي على مدار الساعة",
                "تدريب متقدم على ردود الذكاء الاصطناعي",
                "لوحة تحكم أساسية للمحادثات",
                "اللغة الإنجليزية + لغة إضافية واحدة",
              ],
            },
            {
              name: "احترافي",
              price: "1,799",
              period: "ريال/شهر",
              features: [
                "كل الأساسي +",
                "تكامل إنستغرام وفيسبوك",
                "تذكيرات تلقائية (48/24/2 ساعة)",
                "توليد مراجعات جوجل تلقائياً",
                "دعم أكثر من 40 لغة",
              ],
              popular: true,
            },
            {
              name: "متميز",
              price: "3,199",
              period: "ريال/شهر",
              features: [
                "كل الاحترافي +",
                "منطق جدولة متقدم مخصص",
                "تكامل مزودي التأمين",
                "لوحة تحكم متقدمة بالتحليلات",
                "دعم فني مخصص 24/7",
              ],
            },
          ],
        },
        {
          label: "العقارات",
          icon: "building2",
          problems: [
            "عملاء محتملون لا يجدون رداً سريعاً",
            "وقت ضائع في تأهيل العملاء يدوياً",
            "متابعة غير منتظمة تُفقد الصفقات",
          ],
          solutions: [
            "وكيل يرد على استفسارات العقارات فوراً",
            "تأهيل العملاء وتصنيفهم تلقائياً",
            "متابعة منتظمة وجدولة مواعيد المعاينة",
          ],
          plans: [
            {
              name: "أساسي",
              price: "999",
              period: "ريال/شهر",
              features: ["وكيل واتساب", "رد على الاستفسارات", "تقرير أسبوعي"],
            },
            {
              name: "احترافي",
              price: "1,999",
              period: "ريال/شهر",
              features: ["كل الأساسي +", "تأهيل العملاء", "جدولة المواعيد", "تقارير يومية"],
              popular: true,
            },
            {
              name: "متميز",
              price: "3,499",
              period: "ريال/شهر",
              features: ["كل الاحترافي +", "تكامل CRM", "وكلاء متعددة", "دعم مخصص"],
            },
          ],
        },
        {
          label: "مراكز الاتصال",
          icon: "phone",
          problems: [
            "حجم مكالمات مرتفع يُثقل الفريق",
            "أوقات انتظار طويلة تُحبط العملاء",
            "تكاليف تشغيلية عالية للموظفين",
          ],
          solutions: [
            "وكيل صوتي يرد على المكالمات تلقائياً",
            "تصنيف الطلبات وتوجيهها للقسم المناسب",
            "تخفيض تكاليف التشغيل بنسبة تصل لـ 60%",
          ],
          plans: [
            {
              name: "أساسي",
              price: "1,299",
              period: "ريال/شهر",
              features: ["ردود نصية تلقائية", "تصنيف الطلبات", "تقرير أسبوعي"],
            },
            {
              name: "احترافي",
              price: "2,499",
              period: "ريال/شهر",
              features: ["كل الأساسي +", "توجيه ذكي", "تكامل مع النظام", "تقارير يومية"],
              popular: true,
            },
            {
              name: "متميز",
              price: "4,299",
              period: "ريال/شهر",
              features: ["كل الاحترافي +", "وكلاء متعددة", "تحليلات متقدمة", "دعم مخصص"],
            },
          ],
        },
        {
          label: "التجارة الإلكترونية",
          icon: "shoppingcart",
          problems: [
            "استفسارات كثيرة عن الطلبات والشحن",
            "عربات مهجورة بدون متابعة",
            "دعم عملاء بطيء يُفقد المبيعات",
          ],
          solutions: [
            "وكيل يتابع الطلبات ويرد على الاستفسارات",
            "رسائل استرداد عربات مهجورة تلقائياً",
            "دعم عملاء فوري على مدار الساعة",
          ],
          plans: [
            {
              name: "أساسي",
              price: "899",
              period: "ريال/شهر",
              features: ["وكيل واتساب", "تتبع الطلبات", "تقرير أسبوعي"],
            },
            {
              name: "احترافي",
              price: "1,699",
              period: "ريال/شهر",
              features: ["كل الأساسي +", "استرداد العربات", "تكامل المتجر", "تقارير يومية"],
              popular: true,
            },
            {
              name: "متميز",
              price: "2,999",
              period: "ريال/شهر",
              features: ["كل الاحترافي +", "توصيات ذكية", "وكلاء متعددة", "دعم مخصص"],
            },
          ],
        },
        {
          label: "الجهات الحكومية",
          icon: "landmark",
          problems: [
            "حجم ضخم من استفسارات المواطنين",
            "إجراءات ورقية بطيئة وغير فعّالة",
            "صعوبة تتبع الطلبات وحالتها",
          ],
          solutions: [
            "وكيل يرد على استفسارات المواطنين فوراً",
            "أتمتة الإجراءات الروتينية والنماذج",
            "تتبع الطلبات وإشعار المواطنين تلقائياً",
          ],
          plans: [
            {
              name: "أساسي",
              price: "1,499",
              period: "ريال/شهر",
              features: ["وكيل استفسارات", "ردود تلقائية", "تقرير أسبوعي"],
            },
            {
              name: "احترافي",
              price: "2,999",
              period: "ريال/شهر",
              features: ["كل الأساسي +", "أتمتة النماذج", "تتبع الطلبات", "تقارير يومية"],
              popular: true,
            },
            {
              name: "متميز",
              price: "5,499",
              period: "ريال/شهر",
              features: ["كل الاحترافي +", "تكامل الأنظمة", "وكلاء متعددة", "دعم مخصص"],
            },
          ],
        },
        {
          label: "الامتثال والتأمين",
          icon: "shield",
          problems: [
            "متطلبات امتثال معقدة وكثيرة",
            "تقارير يدوية تستهلك وقتاً طويلاً",
            "مخاطر عدم الالتزام بالأنظمة",
          ],
          solutions: [
            "وكيل يتابع متطلبات الامتثال تلقائياً",
            "تقارير وتنبيهات فورية عند أي مخالفة",
            "توثيق رقمي كامل للإجراءات",
          ],
          plans: [
            {
              name: "أساسي",
              price: "1,199",
              period: "ريال/شهر",
              features: ["متابعة الامتثال", "تنبيهات تلقائية", "تقرير أسبوعي"],
            },
            {
              name: "احترافي",
              price: "2,299",
              period: "ريال/شهر",
              features: ["كل الأساسي +", "توثيق رقمي", "تكامل الأنظمة", "تقارير يومية"],
              popular: true,
            },
            {
              name: "متميز",
              price: "3,999",
              period: "ريال/شهر",
              features: ["كل الاحترافي +", "تحليلات المخاطر", "وكلاء متعددة", "دعم مخصص"],
            },
          ],
        },
        {
          label: "التقنية والبرمجيات",
          icon: "code2",
          problems: [
            "دعم تقني يستهلك وقت الفريق",
            "استفسارات متكررة تأخذ جهداً كبيراً",
            "صعوبة تتبع الأعطال وحلها بسرعة",
          ],
          solutions: [
            "وكيل دعم تقني يحل المشاكل الشائعة فوراً",
            "توجيه الحالات المعقدة للمختصين تلقائياً",
            "قاعدة معرفة ذكية تتعلم وتتحسن",
          ],
          plans: [
            {
              name: "أساسي",
              price: "899",
              period: "ريال/شهر",
              features: ["وكيل دعم تقني", "ردود تلقائية", "تقرير أسبوعي"],
            },
            {
              name: "احترافي",
              price: "1,599",
              period: "ريال/شهر",
              features: ["كل الأساسي +", "قاعدة المعرفة", "تكامل Slack/Jira", "تقارير يومية"],
              popular: true,
            },
            {
              name: "متميز",
              price: "2,799",
              period: "ريال/شهر",
              features: ["كل الاحترافي +", "تحليلات متقدمة", "وكلاء متعددة", "دعم مخصص"],
            },
          ],
        },
      ],
    },
    faq: {
      headline: "أسئلة تسمعها دائماً",
      items: [
        {
          q: "هل هذا مجرد روبوت محادثة؟",
          a: "لا. الفرق جوهري. روبوتات المحادثة ترد على أسئلة. وكلاؤنا يُنجزون مهام — يحجزون، يتابعون، يُصدرون تقارير، ويتخذون إجراءات داخل عملياتك. هذا هو الفرق بين أداة وذراع تشغيلية.",
        },
        {
          q: "هل سيفهم الوكيل طبيعة عملي بدقة؟",
          a: "بكل تأكيد. نحن لا نقدم حلولاً 'معلبة'، بل نقوم بتهيئة نماذجنا المتطورة لتعمل وفق منطق عملك الخاص وقواعدك التشغيلية. الوكيل يتعلم من بياناتك ومصادرك، مما يجعله يتحدث بلغة قطاعك ويفهم احتياجات عملائك بدقة احترافية وكأنه خبير يعمل معك منذ سنوات.",
        },
        {
          q: "هل يمكن ربطه بواتساب وأنظمتنا الحالية؟",
          a: "نعم بشكل كامل. نربطه بواتساب، موقعك، CRM، جداولك، أو أي نظام تعتمد عليه عبر واجهات API — دون الحاجة لتغيير أي شيء في بنيتك الحالية.",
        },
        {
          q: "كيف تضمنون دقة المعلومات وعدم الأخطاء؟",
          a: "نبني على مصادر معرفة محددة تحكمها أنت، مع قواعد تحقق صارمة وحدود واضحة. كل محادثة مسجلة ومراقبة — ونحسّن باستمرار بناءً على البيانات الحقيقية.",
        },
        {
          q: "كم يستغرق الإطلاق؟",
          a: "معظم مشاريعنا تصل لنسخة أولى شغّالة خلال أيام قليلة، وليس أشهراً. نبدأ بسرعة، نطلق بذكاء، ونحسّن بشكل مستمر.",
        },
      ],
    },
    cta: {
      headline: "كل يوم بدون ذكاء اصطناعي هو يوم تخسره لمنافس يستخدمه",
      button: "احجز استشارة مجانية الآن",
    },
    footer: {
      madeIn: "صُنع في المملكة العربية السعودية بكل حب",
      domain: "taqniaai.sa",
      phone: "+966511090850",
      whatsapp: "+966511090850",
      email: "info@taqnia.sa.com",
      linkedin: "https://linkedin.com/company/taqnia-ai",
      labels: {
        contact: "اتصل بنا",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        linkedin: "لينكد إن",
      },
    },
    testimonials: {
      headline: "قصة نجاح: تحول رقمي شامل",
      subheadline: "نفخر بشراكتنا الاستراتيجية مع أحد رواد القطاع العقاري في المملكة العربية السعودية",
      quote: "تقنية لم تكن مجرد مزود خدمة، بل شريكاً ذكياً أعاد صياغة كفاءتنا التشغيلية. من أتمتة المبيعات والربط مع الـ CRM إلى بناء أنظمة ذكاء اصطناعي للموارد البشرية، النتائج كانت تفوق التوقعات.",
      author: "ماجد",
      authorRole: "الرئيس التنفيذي، شركة عقارية رائدة - السعودية",
      projectsTitle: "خارطة التحول الرقمي:",
      projects: [
        "أتمتة المبيعات والربط المباشر مع نظام INJAZ CRM",
        "نظام توظيف ذكي (AI HR) لفرز وتقييم السير الذاتية آلياً",
        "نظام النشر الآلي للعقارات على المنصات العالمية (قريباً)",
        "تطوير نظام CRM مخصص وشامل للشركة (قريباً)",
      ],
    },
  },
  en: {
    nav: {
      logoSub: "Taqnia SA",
      toggleAr: "AR",
      toggleEn: "EN",
      bookDemo: "Book your Demo",
      links: {
        what: "Overview",
        build: "What we build",
        how: "How it works",
        serve: "Industries",
        faq: "FAQ",
      },
    },
    hero: {
      headline: "Your Business Is Losing Every Day — The Fix Is Ready",
      subheadline:
        "Customers going unanswered. Opportunities slipping away. Your team buried in tasks that should be automated. Taqnia AI SA builds the intelligent operational backbone your business needs — agents that work, follow up, and execute around the clock.",
      cta: "Book a Free Consultation",
      proof: [
        { k: "24/7", v: "Zero downtime" },
        { k: "+60%", v: "Cost reduction" },
        { k: "Days", v: "Not months" },
      ],
    },
    whatWeDo: {
      headline: "The Problem We Solve",
      body: "Most businesses lose customers because responses are too slow. They waste time on repetitive tasks that could be automated. They lose deals because follow-up doesn't happen at the right moment. We close these gaps with AI agents embedded directly into your operations — not separate tools, not generic chatbots. Everything built specifically for you.",
    },
    whatWeBuild: {
      headline: "What We Build For You",
      body: "Not a chatbot — a full intelligent operational layer that works like a dedicated team, at a fraction of the cost.",
      items: [
        {
          title: "Customer Support Agent",
          body: "Responds instantly to every inquiry, classifies requests, resolves 80% of cases without human involvement — and escalates the complex ones automatically.",
        },
        {
          title: "Sales & Follow-up Agent",
          body: "No deal lost to a delayed reply. The agent follows up with leads, sends proposals, and books meetings — at exactly the right moment.",
        },
        {
          title: "Operations Agent",
          body: "Everything your team does manually and daily — data entry, record updates, alerts, notifications — fully automated with precision.",
        },
        {
          title: "Reporting & Intelligence Agent",
          body: "Don't wait for weekly reports. A live dashboard and daily summaries show you exactly what's happening — with actionable recommendations.",
        },
      ],
    },
    features: {
      items: [
        {
          title: "Seconds, Not Hours",
          body: "Your customer doesn't wait. Our agents respond instantly — day or night — before they even think about your competitor.",
        },
        {
          title: "Fully Automated Operations",
          body: "Repetitive tasks are gone. Your workflows run with high precision on their own, freeing your team to focus on what creates real impact.",
        },
        {
          title: "Full Visibility, Total Control",
          body: "You're always in control. Daily reports, real-time data, and smart alerts when action is needed — no surprises.",
        },
      ],
    },
    howItWorks: {
      headline: "How We Work With You",
      body: "No long contracts. No complex projects. We deliver measurable results fast.",
      steps: [
        {
          title: "Diagnose & Define",
          body: "We sit with you, understand your operations, and identify exactly where you're losing time, money, and customers — then build a clear plan targeting the highest-impact opportunities.",
        },
        {
          title: "Build & Integrate",
          body: "We build the agent and connect it directly to your systems and channels — WhatsApp, your website, CRM, or any platform you rely on.",
        },
        {
          title: "Launch & Optimize",
          body: "We roll out gradually to ensure quality, then continuously improve performance using real data and measurable outcomes.",
        },
      ],
    },
    deliverables: {
      headline: "What You Get",
      body: "Not a chatbot template — a complete intelligent operational layer embedded in the heart of your business.",
      items: [
        "A custom AI agent built on your actual workflows",
        "Full integrations with your systems and communication channels",
        "Live monitoring dashboard + daily reporting",
        "Smart escalation rules for sensitive and complex cases",
        "Clear documentation and continuous post-launch support",
      ],
    },
    industries: {
      headline: "Who We Serve",
      items: [
        {
          label: "Healthcare & Clinics",
          icon: "stethoscope",
          problems: [
            "Patients calling outside business hours get no response",
            "Missed bookings due to lack of follow-up and delay",
            "Reception staff overwhelmed with insurance questions",
          ],
          solutions: [
            "24/7 Appointment booking via WhatsApp, Instagram, and Facebook (even in Ramadan)",
            "Automatic reminders (48/24/2h) reducing no-shows by 80%",
            "Automatic 5-star Google review generation from happy patients",
            "Fluent in Arabic, English, and +40 languages to serve every patient in the Kingdom",
            "Custom agent that learns your services, prices, and insurance providers",
          ],
          plans: [
            {
              name: "Basic",
              price: "899",
              period: "SAR/mo",
              features: [
                "WhatsApp Business Integration",
                "24/7 Automated Booking",
                "Advanced AI Training",
                "Basic Conversation Dashboard",
                "English + 1 Additional Language",
              ],
            },
            {
              name: "Pro",
              price: "1,799",
              period: "SAR/mo",
              features: [
                "All Basic +",
                "Instagram & Facebook Integration",
                "Auto-Reminders (48/24/2h)",
                "Auto-Google Review Generation",
                "Multilingual Support (+40 languages)",
              ],
              popular: true,
            },
            {
              name: "Premium",
              price: "3,199",
              period: "SAR/mo",
              features: [
                "All Pro +",
                "Advanced Custom Scheduling Logic",
                "Insurance Provider Integration",
                "Advanced Analytics Dashboard",
                "24/7 Dedicated Technical Support",
              ],
            },
          ],
        },
        {
          label: "Real Estate",
          icon: "building2",
          problems: [
            "Potential clients can't get quick responses",
            "Time wasted qualifying leads manually",
            "Inconsistent follow-up loses deals",
          ],
          solutions: [
            "Agent that instantly responds to property inquiries",
            "Automated lead qualification and scoring",
            "Consistent follow-up and viewing appointment scheduling",
          ],
          plans: [
            {
              name: "Basic",
              price: "999",
              period: "SAR/mo",
              features: ["WhatsApp agent", "Inquiry responses", "Weekly report"],
            },
            {
              name: "Pro",
              price: "1,999",
              period: "SAR/mo",
              features: ["All Basic +", "Lead qualification", "Appointment scheduling", "Daily reports"],
              popular: true,
            },
            {
              name: "Premium",
              price: "3,499",
              period: "SAR/mo",
              features: ["All Pro +", "CRM integration", "Multiple agents", "Dedicated support"],
            },
          ],
        },
        {
          label: "Call Centers",
          icon: "phone",
          problems: [
            "High call volume overwhelms the team",
            "Long waiting times frustrate customers",
            "High operational staffing costs",
          ],
          solutions: [
            "AI agent handles calls and messages automatically",
            "Smart routing to the right department",
            "Reduce operational costs by up to 60%",
          ],
          plans: [
            {
              name: "Basic",
              price: "1,299",
              period: "SAR/mo",
              features: ["Auto text responses", "Request classification", "Weekly report"],
            },
            {
              name: "Pro",
              price: "2,499",
              period: "SAR/mo",
              features: ["All Basic +", "Smart routing", "System integration", "Daily reports"],
              popular: true,
            },
            {
              name: "Premium",
              price: "4,299",
              period: "SAR/mo",
              features: ["All Pro +", "Multiple agents", "Advanced analytics", "Dedicated support"],
            },
          ],
        },
        {
          label: "E-Commerce",
          icon: "shoppingcart",
          problems: [
            "High volume of order and shipping inquiries",
            "Abandoned carts with no follow-up",
            "Slow support loses sales",
          ],
          solutions: [
            "Agent tracks orders and answers inquiries instantly",
            "Automated abandoned cart recovery messages",
            "24/7 instant customer support",
          ],
          plans: [
            {
              name: "Basic",
              price: "899",
              period: "SAR/mo",
              features: ["WhatsApp agent", "Order tracking", "Weekly report"],
            },
            {
              name: "Pro",
              price: "1,699",
              period: "SAR/mo",
              features: ["All Basic +", "Cart recovery", "Store integration", "Daily reports"],
              popular: true,
            },
            {
              name: "Premium",
              price: "2,999",
              period: "SAR/mo",
              features: ["All Pro +", "Smart recommendations", "Multiple agents", "Dedicated support"],
            },
          ],
        },
        {
          label: "Government",
          icon: "landmark",
          problems: [
            "Massive volume of citizen inquiries",
            "Slow paper-based processes",
            "Difficulty tracking request statuses",
          ],
          solutions: [
            "Agent instantly responds to citizen inquiries",
            "Automates routine processes and forms",
            "Tracks requests and notifies citizens automatically",
          ],
          plans: [
            {
              name: "Basic",
              price: "1,499",
              period: "SAR/mo",
              features: ["Inquiry agent", "Auto responses", "Weekly report"],
            },
            {
              name: "Pro",
              price: "2,999",
              period: "SAR/mo",
              features: ["All Basic +", "Form automation", "Request tracking", "Daily reports"],
              popular: true,
            },
            {
              name: "Premium",
              price: "5,499",
              period: "SAR/mo",
              features: ["All Pro +", "System integration", "Multiple agents", "Dedicated support"],
            },
          ],
        },
        {
          label: "Compliance & Insurance",
          icon: "shield",
          problems: [
            "Complex and numerous compliance requirements",
            "Manual reporting consumes significant time",
            "Risk of regulatory non-compliance",
          ],
          solutions: [
            "Agent monitors compliance requirements automatically",
            "Instant reports and alerts for any violations",
            "Full digital documentation of all processes",
          ],
          plans: [
            {
              name: "Basic",
              price: "1,199",
              period: "SAR/mo",
              features: ["Compliance monitoring", "Auto alerts", "Weekly report"],
            },
            {
              name: "Pro",
              price: "2,299",
              period: "SAR/mo",
              features: ["All Basic +", "Digital documentation", "System integration", "Daily reports"],
              popular: true,
            },
            {
              name: "Premium",
              price: "3,999",
              period: "SAR/mo",
              features: ["All Pro +", "Risk analytics", "Multiple agents", "Dedicated support"],
            },
          ],
        },
        {
          label: "Tech & Software",
          icon: "code2",
          problems: [
            "Technical support consumes team bandwidth",
            "Repetitive inquiries take significant effort",
            "Difficulty tracking and resolving issues quickly",
          ],
          solutions: [
            "AI support agent resolves common issues instantly",
            "Auto-routes complex cases to specialists",
            "Smart knowledge base that learns and improves",
          ],
          plans: [
            {
              name: "Basic",
              price: "899",
              period: "SAR/mo",
              features: ["Tech support agent", "Auto responses", "Weekly report"],
            },
            {
              name: "Pro",
              price: "1,599",
              period: "SAR/mo",
              features: ["All Basic +", "Knowledge base", "Slack/Jira integration", "Daily reports"],
              popular: true,
            },
            {
              name: "Premium",
              price: "2,799",
              period: "SAR/mo",
              features: ["All Pro +", "Advanced analytics", "Multiple agents", "Dedicated support"],
            },
          ],
        },
      ],
    },
    faq: {
      headline: "Questions We Hear All The Time",
      items: [
        {
          q: "Is this just a chatbot?",
          a: "No — and the difference is fundamental. Chatbots answer questions. Our agents execute tasks — they book appointments, follow up leads, generate reports, and take actions inside your operations. That's the difference between a tool and an operational backbone.",
        },
        {
          q: "Will the agent understand my business specifically?",
          a: "Absolutely. We don't believe in 'one-size-fits-all' AI. Our agents are engineered to integrate with your specific business logic and operational rules. By training on your unique data and knowledge base, the agent acts as a seasoned expert who understands your industry jargon and customer needs perfectly.",
        },
        {
          q: "Can you integrate with WhatsApp and our existing systems?",
          a: "Yes, fully. We integrate with WhatsApp, your website, CRM, scheduling tools, or any system you rely on via API — without requiring changes to your existing infrastructure.",
        },
        {
          q: "How do you guarantee accuracy and prevent errors?",
          a: "We build on controlled knowledge sources that you define, with strict verification rules and clear boundaries. Every conversation is logged and monitored — and we continuously improve based on real data.",
        },
        {
          q: "How long does it take to launch?",
          a: "Most of our projects reach a working first version within days, not months. We move fast, launch smart, and improve continuously.",
        },
      ],
    },
    cta: {
      headline: "Every Day Without AI Is a Day You're Losing to a Competitor Who Has It",
      button: "Book Your Free Consultation Now",
    },
    footer: {
      madeIn: "Made in Saudi Arabia with love",
      domain: "taqniaai.sa",
      phone: "+966511090850",
      whatsapp: "+966511090850",
      email: "info@taqnia.sa.com",
      linkedin: "https://linkedin.com/company/taqnia-ai",
      labels: {
        contact: "Contact",
        phone: "Phone",
        email: "Email",
        linkedin: "LinkedIn",
      },
    },
    testimonials: {
      headline: "Success Story: Total Digital Transformation",
      subheadline: "Strategic partnership with a leading Real Estate firm in Saudi Arabia",
      quote: "Taqnia wasn't just a service provider; they were a smart partner that redefined our operational efficiency. From sales automation and CRM integration to building AI systems for HR, the results exceeded our expectations.",
      author: "Majed",
      authorRole: "CEO, Leading Real Estate Company - Saudi Arabia",
      projectsTitle: "Transformation Roadmap:",
      projects: [
        "Sales Automation & Direct Integration with INJAZ CRM",
        "Intelligent HR System (AI HR) for Automated CV Screening",
        "Automated Property Posting to Global Platforms (Coming Soon)",
        "Custom End-to-End CRM Development (Coming Soon)",
      ],
    },
  },
};
