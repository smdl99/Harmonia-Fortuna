import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      index: {
        subtitle: 'Alternative Asset Management',
        enter: 'Enter',
      },
      menu: {
        about: 'About',
        contact: 'Inquiries',
        philanthropy: 'Philanthropy',
        login: 'Login',
      },
      login: {
        title: 'Login',
        form: {
          username: {
            placeholder: 'Username',
          },
          password: {
            placeholder: 'Password',
          },
          submit: 'Login',
        },
      },
      about: {
        title: 'About',
        text: `Harmonia Fortuna is an innovative alternative asset management firm dedicated to harnessing unique investment opportunities across diverse sectors. With our headquarters in Switzerland, we are committed to excellence and transparency in all our activities.
<br />
<br />
Our Investment Philosophy
<br />
<br />
At Harmonia Fortuna, we excel in identifying investments that not only offer high returns but also contribute positively to society and the environment. Our focus is on building a portfolio of resilient assets that generate sustainable cash flows, employing rigorous analysis and strategic foresight. We pride ourselves on our ability to navigate complex investment landscapes, leveraging our comprehensive expertise in due diligence, risk management, and asset valuation.
<br />
<br />
Expertise and Capabilities
<br />
<br />
Our team consists of seasoned professionals with diverse backgrounds in finance, real estate, renewable energy, and technology. Together, we bring a wealth of experience in structuring and managing multifaceted projects that align with long-term growth and stability. We engage in strategic partnerships and collaborations with industry leaders, government entities, and non-profits to ensure our investments create enduring value.
<br />
<br />
Global Reach, Local Insight
<br />
<br />
While our focus is global, with an eye on emerging markets and developed regions alike, we strategically target areas characterized by strong economic fundamentals and geopolitical stability. Our investment strategy prioritizes jurisdictions that foster growth and innovation, enabling us to create tailored capital solutions that cater to our clients’ diverse needs.
<br />
<br />
Commitment to Sustainable Growth
<br />
<br />
Harmonia Fortuna is dedicated to the principles of responsible investing, ensuring that our investment decisions align with environmental sustainability and social responsibility. We believe that true financial success should also contribute to the betterment of society, and we strive to integrate ESG (Environmental, Social, and Governance) considerations into our investment framework.
<br />
<br />
Join us at Harmonia Fortuna as we pave the way for a brighter, more prosperous future through strategic investments that harmonize financial growth with social responsibility.`,
      },
      philanthropy: {
        title: 'Philanthropy',
        text: `At Harmonia Fortuna, our commitment to responsible stewardship extends beyond capital allocation. We recognize that long term prosperity is inseparable from social resilience, environmental sustainability, and equitable opportunity. Philanthropy is a natural extension of our philosophy.
<br />
<br />
We believe that enduring financial success must contribute meaningfully to the communities and ecosystems within which we operate.
<br />
<br />
Our Approach
<br />
<br />
Our philanthropic strategy is guided by the same principles that define our investment discipline: rigor, accountability, partnership, and long term impact.
<br />
<br />
Rather than pursuing short term visibility, we prioritize initiatives capable of generating measurable and sustainable outcomes. We seek to deploy resources thoughtfully, supporting programs that demonstrate structural relevance, operational integrity, and scalable potential.
<br />
<br />
Strategic Areas of Focus
<br />
<br />
Education and Human Capital Development
<br />
<br />
We support initiatives that expand access to high quality education, vocational training, and skills development particularly for underserved populations.
<br />
<br />
Environmental Stewardship
<br />
<br />
Our philanthropic efforts support conservation, renewable energy innovation, and initiatives designed to protect biodiversity and mitigate climate impact.
<br />
<br />
Social Equity and Community Stability
<br />
<br />
We contribute to programs that promote inclusion, social cohesion, and equitable access to opportunity.
<br />
<br />
Institutional Commitment
<br />
<br />
A defined allocation of our annual performance is dedicated to philanthropic initiatives aligned with our core principles.
<br />
<br />
Building a Sustainable Future
<br />
<br />
Through disciplined philanthropy, Harmonia Fortuna seeks to harmonize financial achievement with social contribution and strengthen communities for generations to come.`,
      },
      contact: {
        title: 'Business Inquiries',
        subtitle:
          'We serve a limited number of families through bespoke, long-term mandates. For confidential inquiries, please use the form below.',
        form: {
          fullName: {
            placeholder: 'Full Name',
          },
          email: {
            placeholder: 'E-Mail',
          },
          phone: {
            placeholder: 'Phone',
          },
          message: {
            placeholder: 'Message',
          },
          consent: {
            label: 'I agree to be contacted',
          },
          submit: 'Send Inquiry',
          error: 'All fields must be completed correctly.',
          coolDown: 'Please wait 60 seconds before sending again.',
          success: 'Inquiry sent successfully.',
        },
      },
      theme: {
        dark: 'Dark Mode',
        light: 'Light Mode',
      },
      footer: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      global: {
        home: 'Home',
        back: 'Back',
      },
    },
  },
  cn: {
    translation: {
      index: {
        subtitle: '另类 资产 管理',
        enter: '进入',
      },
      menu: {
        about: '关于',
        contact: '咨询',
        philanthropy: '慈善',
        login: '登录',
      },
      login: {
        title: '登录',
        form: {
          username: {
            placeholder: '用户名',
          },
          password: {
            placeholder: '密码',
          },
          submit: '登录',
        },
      },
      about: {
        title: '关于 Harmonia Fortuna',
        text: `关于 Harmonia Fortuna
<br />
<br />
Harmonia Fortuna 是一家创新型另类资产管理公司，致力于在多元化领域中发掘独特的投资机会。我们的总部位于 Switzerland，在所有业务活动中始终坚持卓越与透明。
<br />
<br />
我们的投资理念
<br />
<br />
在 Harmonia Fortuna，我们擅长识别不仅带来高回报，同时对社会和环境产生积极影响的投资机会。我们专注于构建具有韧性、能够产生可持续现金流的资产组合，并通过严谨分析与战略前瞻实现长期价值。我们以驾驭复杂投资环境的能力为荣，并依托在尽职调查、风险管理和资产估值方面的综合专业能力开展工作。
<br />
<br />
专业能力
<br />
<br />
我们的团队由在金融、房地产、可再生能源和科技领域拥有丰富经验的资深专业人士组成。我们在项目结构设计与管理方面积累了深厚经验，确保多元化项目与长期增长和稳定性保持一致。我们与行业领袖、政府机构及非营利组织建立战略合作关系，确保投资创造持久价值。
<br />
<br />
全球视野，本地洞察
<br />
<br />
我们立足全球，关注新兴市场与成熟市场，同时重点选择具备稳健经济基础与地缘政治稳定性的地区。我们的投资战略优先考虑鼓励增长与创新的司法辖区，为客户多样化需求提供定制化资本解决方案。
<br />
<br />
致力于可持续增长
<br />
<br />
Harmonia Fortuna 坚持负责任投资原则，确保投资决策符合环境可持续性与社会责任标准。我们相信真正的财务成功应当促进社会福祉，并致力于将 ESG（环境、社会与公司治理）因素纳入投资框架。
<br />
<br />
欢迎加入 Harmonia Fortuna，与我们一起通过战略投资，协调金融增长与社会责任，共同开创更加光明与繁荣的未来。`,
      },
      philanthropy: {
        title: '慈善事业',
        text: `在 Harmonia Fortuna，我们对负责任管理的承诺不仅限于资本配置。我们认识到，长期繁荣与社会韧性、环境可持续性以及公平机会密不可分。慈善事业是我们理念的自然延伸。
<br />
<br />
我们相信，持久的财务成功必须对我们所运营的社区与生态系统作出有意义的贡献。
<br />
<br />
我们的方式
<br />
<br />
我们的慈善战略遵循与我们投资纪律相同的原则：严谨、问责、合作以及长期影响。
<br />
<br />
我们并不追求短期可见度，而是优先支持能够产生可衡量且可持续成果的项目。我们致力于以审慎方式配置资源，支持那些在结构上具有相关性、在运营上具备诚信、并具有可扩展潜力的项目。
<br />
<br />
战略重点领域
<br />
<br />
教育与人力资本发展
<br />
<br />
我们支持扩大优质教育、职业培训以及技能发展的机会，尤其是为服务不足的人群提供支持。
<br />
<br />
环境保护
<br />
<br />
我们的慈善努力支持自然保护、可再生能源创新，以及旨在保护生物多样性和减缓气候影响的项目。
<br />
<br />
社会公平与社区稳定
<br />
<br />
我们支持促进包容、社会凝聚力以及公平获取机会的项目。
<br />
<br />
机构承诺
<br />
<br />
我们每年将部分业绩收益分配至与核心原则一致的慈善项目。
<br />
<br />
构建可持续未来
<br />
<br />
通过有纪律的慈善实践，Harmonia Fortuna 致力于实现财务成就与社会贡献的协调统一，并为子孙后代强化社区基础。`,
      },
      contact: {
        title: '商务咨询',
        subtitle:
          '我们仅为少数家族提供定制化的长期投资委托。若有保密咨询需求，请通过下方表格联系。',
        form: {
          fullName: {
            placeholder: 'Full Name',
          },
          email: {
            placeholder: 'E-Mail',
          },
          phone: {
            placeholder: 'Phone',
          },
          message: {
            placeholder: 'Message',
          },
          consent: {
            label: 'I agree to be contacted',
          },
          submit: 'Send Inquiry',
          error: 'All fields must be completed correctly.',
          coolDown: 'Please wait 60 seconds before sending again.',
          success: 'Inquiry sent successfully.',
        },
      },
      theme: {
        dark: '深色模式',
        light: '浅色模式',
      },
      footer: {
        privacy: '隐私政策',
        terms: '服务条款',
      },
      global: {
        home: '主页',
        back: '返回',
      },
    },
  },
  ru: {
    translation: {
      index: {
        subtitle: 'Альтернативное Управление Активами',
        enter: 'Войти',
      },
      menu: {
        about: 'О нас',
        contact: 'Связаться',
        philanthropy: 'Благотворительность',
        login: 'Войти',
      },
      login: {
        title: 'Вход',
        form: {
          username: {
            placeholder: 'Имя пользователя',
          },
          password: {
            placeholder: 'Пароль',
          },
          submit: 'Войти',
        },
      },
      about: {
        title: 'О Harmonia Fortuna',
        text: `О Harmonia Fortuna
<br />
<br />
Harmonia Fortuna — инновационная компания по управлению альтернативными активами, ориентированная на поиск уникальных инвестиционных возможностей в различных секторах. Наша штаб-квартира расположена в Switzerland, и мы придерживаемся принципов прозрачности и высокого качества во всех направлениях деятельности.
<br />
<br />
Наша инвестиционная философия
<br />
<br />
Мы выявляем инвестиции, способные не только приносить высокую доходность, но и оказывать положительное влияние на общество и окружающую среду. Мы формируем устойчивый портфель активов с долгосрочным денежным потоком, применяя строгий анализ и стратегическое планирование.
<br />
<br />
Экспертиза и возможности
<br />
<br />
Наша команда состоит из опытных специалистов в области финансов, недвижимости, возобновляемой энергетики и технологий. Мы выстраиваем стратегические партнёрства с лидерами отрасли и государственными структурами для создания долгосрочной ценности.
<br />
<br />
Глобальный охват, локальная экспертиза
<br />
<br />
Мы работаем глобально, уделяя внимание как развивающимся, так и развитым рынкам, выбирая юрисдикции с устойчивой экономикой и политической стабильностью.
<br />
<br />
Приверженность устойчивому развитию
<br />
<br />
Мы интегрируем ESG-принципы в инвестиционную стратегию и считаем, что финансовый успех должен способствовать развитию общества.
<br />
<br />
Присоединяйтесь к Harmonia Fortuna и создавайте устойчивое будущее вместе с нами.`,
      },
      philanthropy: {
        title: 'Филантропия',
        text: `В Harmonia Fortuna наша приверженность ответственному управлению выходит за рамки распределения капитала. Мы осознаём, что долгосрочное процветание неразрывно связано с социальной устойчивостью, экологической ответственностью и равными возможностями. Филантропия является естественным продолжением нашей философии.
<br />
<br />
Мы убеждены, что устойчивый финансовый успех должен вносить значимый вклад в сообщества и экосистемы, в которых мы осуществляем деятельность.
<br />
<br />
Наш подход
<br />
<br />
Наша филантропическая стратегия основана на тех же принципах, которые определяют нашу инвестиционную дисциплину: строгость, ответственность, партнёрство и долгосрочное воздействие.
<br />
<br />
Вместо стремления к краткосрочной публичности мы уделяем приоритет инициативам, способным обеспечивать измеримые и устойчивые результаты. Мы стремимся рационально распределять ресурсы, поддерживая программы, обладающие структурной значимостью, операционной добросовестностью и потенциалом масштабирования.
<br />
<br />
Стратегические направления
<br />
<br />
Образование и развитие человеческого капитала
<br />
<br />
Мы поддерживаем инициативы, расширяющие доступ к качественному образованию, профессиональной подготовке и развитию навыков, особенно для недостаточно обеспеченных слоёв населения.
<br />
<br />
Экологическая ответственность
<br />
<br />
Наша филантропическая деятельность направлена на поддержку охраны природы, инноваций в сфере возобновляемой энергетики и инициатив по защите биоразнообразия и снижению климатического воздействия.
<br />
<br />
Социальное равенство и устойчивость сообществ
<br />
<br />
Мы содействуем программам, способствующим инклюзии, социальной сплочённости и равному доступу к возможностям.
<br />
<br />
Институциональная приверженность
<br />
<br />
Определённая часть наших ежегодных результатов направляется на филантропические инициативы, соответствующие нашим основным принципам.
<br />
<br />
Формирование устойчивого будущего
<br />
<br />
Через дисциплинированную филантропию Harmonia Fortuna стремится объединить финансовые достижения с общественным вкладом и укрепить сообщества для будущих поколений.`,
      },
      contact: {
        title: 'Деловые запросы',
        subtitle:
          'Мы обслуживаем ограниченное число семей в рамках индивидуальных долгосрочных мандатов. Для конфиденциального запроса воспользуйтесь формой ниже.',
        form: {
          fullName: {
            placeholder: 'Full Name',
          },
          email: {
            placeholder: 'E-Mail',
          },
          phone: {
            placeholder: 'Phone',
          },
          message: {
            placeholder: 'Message',
          },
          consent: {
            label: 'I agree to be contacted',
          },
          submit: 'Send Inquiry',
          error: 'All fields must be completed correctly.',
          coolDown: 'Please wait 60 seconds before sending again.',
          success: 'Inquiry sent successfully.',
        },
      },
      theme: {
        dark: 'Тёмный режим',
        light: 'Светлый режим',
      },
      footer: {
        privacy: 'Конфиденциальность',
        terms: 'Условия',
      },
      global: {
        home: 'Главная',
        back: 'Назад',
      },
    },
  },
  ar: {
    translation: {
      index: {
        subtitle: 'إدارة الأصول البديلة',
        enter: 'الدخول',
        privacy: 'سياسة الخصوصية',
        terms: 'الشروط',
      },
      menu: {
        about: 'حول',
        contact: 'استفسارات',
        philanthropy: 'العمل الخيري',
        login: 'تسجيل الدخول',
      },
      login: {
        title: 'تسجيل الدخول',
        form: {
          username: {
            placeholder: 'اسم المستخدم',
          },
          password: {
            placeholder: 'كلمة المرور',
          },
          submit: 'تسجيل الدخول',
        },
      },
      about: {
        title: 'حول Harmonia Fortuna',
        text: `حول Harmonia Fortuna
<br />
<br />
تُعد Harmonia Fortuna شركة مبتكرة لإدارة الأصول البديلة، تركز على استكشاف فرص استثمارية فريدة عبر قطاعات متنوعة. يقع مقرنا الرئيسي في Switzerland ونلتزم بأعلى معايير الشفافية والتميز في جميع أنشطتنا.
<br />
<br />
فلسفتنا الاستثمارية
<br />
<br />
نتميز بتحديد الاستثمارات التي تحقق عوائد مرتفعة وتسهم إيجابياً في المجتمع والبيئة. نعمل على بناء محفظة أصول مرنة تولد تدفقات نقدية مستدامة من خلال تحليل دقيق ورؤية استراتيجية بعيدة المدى.
<br />
<br />
الخبرات والقدرات
<br />
<br />
يضم فريقنا محترفين ذوي خبرة في التمويل والعقارات والطاقة المتجددة والتكنولوجيا، ونعمل من خلال شراكات استراتيجية لضمان خلق قيمة طويلة الأمد.
<br />
<br />
انتشار عالمي ورؤية محلية
<br />
<br />
نركز على الأسواق الناشئة والمتقدمة ضمن بيئات اقتصادية مستقرة وجاذبة للنمو والابتكار.
<br />
<br />
الالتزام بالنمو المستدام
<br />
<br />
نؤمن بأن النجاح المالي الحقيقي يجب أن ينعكس إيجاباً على المجتمع، ولذلك ندمج معايير ESG ضمن إطارنا الاستثماري.
<br />
<br />
انضموا إلى Harmonia Fortuna لصناعة مستقبل أكثر ازدهاراً واستدامة.`,
      },
      philanthropy: {
        title: 'العمل الخيري',
        text: `في Harmonia Fortuna يمتد التزامنا بالإدارة المسؤولة إلى ما هو أبعد من تخصيص رأس المال. نحن ندرك أن الازدهار طويل الأجل يرتبط ارتباطاً وثيقاً بالمرونة الاجتماعية والاستدامة البيئية وتكافؤ الفرص. ويُعد العمل الخيري امتداداً طبيعياً لفلسفتنا المؤسسية.
<br />
<br />
نؤمن بأن النجاح المالي المستدام يجب أن يسهم بشكل فعّال في خدمة المجتمعات والأنظمة البيئية التي نعمل ضمنها.
<br />
<br />
نهجنا
<br />
<br />
تعتمد استراتيجيتنا الخيرية على المبادئ ذاتها التي تحكم انضباطنا الاستثماري: الصرامة، والمساءلة، والشراكة، والأثر طويل الأمد.
<br />
<br />
بدلاً من السعي إلى الظهور قصير الأجل، نعطي الأولوية للمبادرات القادرة على تحقيق نتائج قابلة للقياس ومستدامة. نسعى إلى توظيف الموارد بعناية، ودعم البرامج التي تتمتع بأهمية هيكلية، ونزاهة تشغيلية، وإمكانية التوسع.
<br />
<br />
مجالات التركيز الاستراتيجية
<br />
<br />
التعليم وتنمية رأس المال البشري
<br />
<br />
ندعم المبادرات التي توسّع نطاق الوصول إلى التعليم عالي الجودة، والتدريب المهني، وتنمية المهارات، لا سيما للفئات الأقل حظاً.
<br />
<br />
الإشراف البيئي
<br />
<br />
تدعم جهودنا الخيرية مشاريع الحفاظ على البيئة، وابتكارات الطاقة المتجددة، والمبادرات الهادفة إلى حماية التنوع البيولوجي والتخفيف من آثار المناخ.
<br />
<br />
العدالة الاجتماعية واستقرار المجتمعات
<br />
<br />
نساهم في البرامج التي تعزز الشمول، والتماسك الاجتماعي، والوصول العادل إلى الفرص.
<br />
<br />
الالتزام المؤسسي
<br />
<br />
يُخصص جزء محدد من أدائنا السنوي لدعم المبادرات الخيرية المتوافقة مع مبادئنا الأساسية.
<br />
<br />
بناء مستقبل مستدام
<br />
<br />
من خلال العمل الخيري المنضبط، تسعى Harmonia Fortuna إلى تحقيق التوازن بين الإنجاز المالي والمساهمة المجتمعية، وتعزيز المجتمعات للأجيال القادمة.`,
      },
      contact: {
        title: 'الاستفسارات التجارية',
        subtitle:
          'نخدم عدداً محدوداً من العائلات من خلال تفويضات استثمارية مخصصة وطويلة الأجل. للاستفسارات السرية، يرجى استخدام النموذج أدناه.',
        form: {
          fullName: {
            placeholder: 'Full Name',
          },
          email: {
            placeholder: 'E-Mail',
          },
          phone: {
            placeholder: 'Phone',
          },
          message: {
            placeholder: 'Message',
          },
          consent: {
            label: 'I agree to be contacted',
          },
          submit: 'Send Inquiry',
          error: 'All fields must be completed correctly.',
          coolDown: 'Please wait 60 seconds before sending again.',
          success: 'Inquiry sent successfully.',
        },
      },
      theme: {
        dark: 'الوضع الداكن',
        light: 'الوضع الفاتح',
      },
      global: {
        home: 'الرئيسية',
        back: 'رجوع',
      },
    },
  },
};

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'cn', 'ru', 'ar'],
    resources,
    interpolation: {
      escapeValue: false,
    },
    detection:
      typeof window !== 'undefined'
        ? {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
          }
        : undefined,
  });

export default i18n;
