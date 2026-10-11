export const siteConfig = {
  name: "CAELSTAR",
  shortName: "CAELSTAR",
  tagline: "Digital Growth. Intelligent Technology. Real Business Impact.",
  description:
    "CAELSTAR is a digital growth and technology agency helping businesses in India and beyond grow through performance marketing, e-commerce operations, custom digital products and intelligent automation.",
  location: "Lucknow, Uttar Pradesh, India",
  businessEmail: "your-business-email@example.com",
  phone: "+91 00000 00000",
  whatsapp: "+91 00000 00000",
  websiteUrl: "https://www.caelstar.in",
  socialLinks: {
    instagram: "#",
    linkedin: "#",
    x: "#",
    dribbble: "#",
  },
  businessHours: "Monday to Friday, 9:00 AM - 6:00 PM IST",
  emailNotificationRecipient: "your-business-email@example.com",
  analytics: {
    enabled: false,
    gaId: "",
    consentMode: true,
  },
  pricingVisible: true,
  baseUrl: "https://www.caelstar.in",
} as const

export const navigation = {
  main: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services/digital-marketing", label: "Digital Marketing" },
    { href: "/services/paid-advertising", label: "Paid Advertising" },
    { href: "/services/social-media-marketing", label: "Social Media Marketing" },
    { href: "/services/marketplace-management", label: "Marketplace Management" },
    { href: "/services/website-development", label: "Website Development" },
    { href: "/services/app-development", label: "App Development" },
    { href: "/services/ai-automation", label: "AI & Automation" },
    { href: "/services/branding-creative", label: "Branding & Creative" },
  ],
} as const

export type ServiceItem = (typeof serviceCatalog)[number]

export const serviceCatalog = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    eyebrow: "Strategy-led growth",
    shortDescription:
      "Search, paid media and conversion strategy designed to turn attention into qualified opportunities.",
    description:
      "CAELSTAR builds digital marketing systems that align brand positioning, campaign strategy, landing page conversion and ongoing optimization for sustainable growth.",
    deliverables: [
      "Audience and funnel strategy",
      "Campaign planning and channel mix",
      "Landing page and CRO support",
      "Analytics setup and reporting",
    ],
    problems: [
      "Your marketing spends without a clear funnel or measurable path to leads.",
      "Your team is juggling content, ads and analytics without enough strategic consistency.",
      "You need better visibility into which channels and messages are actually working.",
    ],
    benefits: [
      "Clear channel strategy based on goals and audience behavior.",
      "Improved lead quality through better targeting and messaging.",
      "A more manageable marketing system with performance reporting.",
    ],
    useCases: [
      "Service businesses looking for more qualified inbound leads.",
      "New brands needing a stronger digital acquisition strategy.",
      "Businesses that want to combine content, SEO and paid media more effectively.",
    ],
    faqs: [
      {
        question: "Is digital marketing right for a small business?",
        answer:
          "Yes. We tailor scope to the business stage, budget and goals, whether that means a focused campaign launch or a broader funnel setup.",
      },
      {
        question: "Do you handle analytics and reporting?",
        answer:
          "Yes. We set up reporting frameworks, review the key metrics and refine campaigns based on what the data shows.",
      },
    ],
    process: [
      "Audit current marketing performance and positioning",
      "Define channel strategy, messaging and conversion goals",
      "Launch campaigns and landing pages",
      "Measure performance and improve the funnel",
    ],
    related: ["paid-advertising", "website-development", "branding-creative"],
  },
  {
    slug: "paid-advertising",
    title: "Paid Advertising",
    eyebrow: "Fast visibility, measured growth",
    shortDescription:
      "Campaign setup, targeting, retargeting and reporting across Google, Meta and other high-intent channels.",
    description:
      "Paid advertising can be a powerful growth lever when strategy, audience targeting and measurement are aligned. We build practical campaigns and optimization systems around the channels that best fit your business.",
    deliverables: [
      "Campaign structure design",
      "Ad creative and message guidance",
      "Audience targeting and retargeting",
      "Tracking, reporting and optimization",
    ],
    problems: [
      "Ads are running, but there is no clear return on effort or spend.",
      "Campaigns lack proper structure, measurement or realistic budget planning.",
      "Your team needs a better mix of keywords, audiences and conversion tracking.",
    ],
    benefits: [
      "More disciplined ad management with clear goals and reporting.",
      "Better audience targeting and conversion tracking across the funnel.",
      "A clearer understanding of agency fees versus advertising spend.",
    ],
    useCases: [
      "Businesses launching a new service or product.",
      "Brands ready to scale promising channels with more efficient targeting.",
      "Organizations looking to improve retargeting and conversion depth.",
    ],
    faqs: [
      {
        question: "Are agency fees separate from ad spend?",
        answer:
          "Yes. Agency fees cover campaign management, strategy and optimization. Advertising spend is the budget used on the platform itself and is separate from the service fee.",
      },
      {
        question: "How long before we can judge performance?",
        answer:
          "Initial learning periods vary by channel and market, but we review performance against agreed metrics and timing windows rather than relying on unrealistic promises.",
      },
    ],
    process: [
      "Review goals, budget and funnel stage",
      "Define campaign structure and tracking setup",
      "Launch, test and optimize audiences",
      "Report on performance and next steps",
    ],
    related: ["digital-marketing", "social-media-marketing", "website-development"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    eyebrow: "Content that connects and converts",
    shortDescription:
      "Platform strategy, content planning, creative direction and managed execution for organic and paid social growth.",
    description:
      "Social media works best when it is consistent, relevant and connected to business goals. We help businesses turn their online presence into a more engaging, trustworthy and conversion-friendly brand experience.",
    deliverables: [
      "Content strategy and monthly planning",
      "Creative direction and asset planning",
      "Community management support",
      "Reels, campaign coordination and reporting",
    ],
    problems: [
      "Your brand is inconsistent across channels, making it harder to build trust.",
      "You post without a clear plan, leading to low engagement and low conversion intent.",
      "Your content needs stronger creative and more meaningful targeting.",
    ],
    benefits: [
      "More cohesive content that supports brand trust and awareness.",
      "Improved consistency across channels and campaign activity.",
      "A simpler system for planning and publishing valuable content.",
    ],
    useCases: [
      "Brands needing a stronger digital voice and more engaging content.",
      "D2C sellers needing product storytelling and community engagement.",
      "Businesses that want better content structure without adding internal workload.",
    ],
    faqs: [
      {
        question: "Do you create the content itself?",
        answer:
          "We can support creative planning, message direction and content structure. Asset production can be handled in-house or through collaborative workflows, depending on scope.",
      },
      {
        question: "Can this support paid advertising?",
        answer:
          "Yes. Social media content and paid campaigns often work best when designed together so creative, audience targeting and platform strategy stay aligned.",
      },
    ],
    process: [
      "Review current channels, audience and goals",
      "Design a content and engagement framework",
      "Create and schedule a consistent publishing rhythm",
      "Measure engagement, conversion intent and improve creative",
    ],
    related: ["digital-marketing", "branding-creative", "paid-advertising"],
  },
  {
    slug: "marketplace-management",
    title: "Marketplace Management",
    eyebrow: "Operational clarity on every listing",
    shortDescription:
      "Amazon, Flipkart and marketplace support for listing optimization, catalogue health, inventory coordination and advertising.",
    description:
      "Marketplace management helps sellers improve product visibility, maintain better catalog quality and operate more efficiently across high-volume sales channels. We work with marketplace teams to align product content, storefront health and advertising performance.",
    deliverables: [
      "Listing optimization and keyword support",
      "Product content and image guidance",
      "Catalogue and inventory coordination",
      "Marketplace ad setup and performance support",
    ],
    problems: [
      "Your store has inconsistent product content and weak listing visibility.",
      "Inventory and account coordination are slowing down operations.",
      "Marketplace ads need better structure and reporting.",
    ],
    benefits: [
      "Better listing quality and searchable product presentation.",
      "Improved operational coordination across catalog, inventory and promotions.",
      "A stronger foundation for marketplace growth and ad efficiency.",
    ],
    useCases: [
      "Amazon and Flipkart sellers wanting more consistent product performance.",
      "D2C and wholesale brands selling across e-commerce marketplaces.",
      "Teams that need help bridging listing quality, ad spend and inventory decisions.",
    ],
    faqs: [
      {
        question: "What needs to be agreed before the project starts?",
        answer:
          "Marketplace permissions, account access, advertising budgets, platform policies and seller responsibilities must all be agreed before work begins. This helps ensure the marketplace relationship and operational setup are clearly defined.",
      },
      {
        question: "Can you handle product listings and catalog optimization?",
        answer:
          "Yes. We can support listing structure, product content refinement, keyword alignment and performance reviews as part of the marketplace workflow.",
      },
    ],
    process: [
      "Review current marketplace setup and operational gaps",
      "Align listings, catalog and ad goals",
      "Implement listing improvements and campaign support",
      "Track performance and refine ongoing operations",
    ],
    related: ["paid-advertising", "website-development", "ai-automation"],
  },
  {
    slug: "website-development",
    title: "Website Development",
    eyebrow: "Web experiences that earn trust",
    shortDescription:
      "Conversion-focused websites, landing pages and business platforms built to perform on every screen.",
    description:
      "A website is more than a digital brochure. It should communicate value clearly, support conversions and provide a stable foundation for future growth. We design and build websites that are clear, responsive and ready for business use.",
    deliverables: [
      "UX and page structure planning",
      "Responsive design and front-end build",
      "CMS or content setup",
      "Testing, QA and handover guidance",
    ],
    problems: [
      "Your existing website feels outdated or does not reflect your current offer.",
      "Visitors leave without taking action because the content or experience is unclear.",
      "Your site does not scale to new services, campaigns or business goals.",
    ],
    benefits: [
      "A clearer online presence tailored to your business and audience.",
      "Improved user experience across mobile, tablet and desktop.",
      "A foundation that supports campaigns, service pages and future business tools.",
    ],
    useCases: [
      "Businesses launching a new service or repositioning the brand.",
      "Startups need a polished web presence and lead capture flow.",
      "Established organizations seeking a more credible and conversion-ready website.",
    ],
    faqs: [
      {
        question: "What is included in a website project?",
        answer:
          "Scope may include strategy, design, front-end and back-end implementation, copy support, content setup, integrations and testing. We define the exact milestones based on the project requirements.",
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer:
          "Yes. Maintenance, updates and support can be discussed based on the project and your team's operational needs after launch.",
      },
    ],
    process: [
      "Define goals, content and user journey",
      "Design the structure and key page flows",
      "Build and test the site across devices",
      "Launch with handover and support planning",
    ],
    related: ["digital-marketing", "app-development", "branding-creative"],
  },
  {
    slug: "app-development",
    title: "App Development",
    eyebrow: "Business software with purpose",
    shortDescription:
      "Custom web apps, admin panels, API integrations and software systems that support operations and growth.",
    description:
      "From internal tools to client-facing software, custom applications help teams work more efficiently, automate repetitive tasks and serve users with more flexibility. We plan around function, maintainability and real operational needs.",
    deliverables: [
      "Requirement mapping and scope planning",
      "UI flows and technical architecture",
      "Build and testing cycles",
      "Handover, documentation and optional support",
    ],
    problems: [
      "Manual processes are taking more time than they should.",
      "Your organization needs software that fits internal operations, not generic off-the-shelf tools.",
      "You need better integrations, data handling and user flows.",
    ],
    benefits: [
      "Better visibility into operations and decision-making.",
      "Improved efficiency through custom workflows and integrations.",
      "More adaptable software built around the business instead of forcing the business to adapt to the tool.",
    ],
    useCases: [
      "Operations teams needing internal dashboards or workflow tools.",
      "Businesses building digital products for customers or users.",
      "Organizations looking for API-driven systems connected to existing tools.",
    ],
    faqs: [
      {
        question: "How do you manage scope and delivery?",
        answer:
          "We define the product goals, milestones, testing plan and handover criteria early so the project can evolve without losing clarity around responsibilities and outcomes.",
      },
      {
        question: "Do you support post-launch improvements?",
        answer:
          "Yes. We can discuss maintenance, update schedules and enhancement roadmaps based on your operational priorities.",
      },
    ],
    process: [
      "Map business problems, objectives and technical constraints",
      "Define MVP scope, build plan and milestones",
      "Develop and test the application in iterations",
      "Handover documentation and support options",
    ],
    related: ["website-development", "ai-automation", "digital-marketing"],
  },
  {
    slug: "ai-automation",
    title: "AI & Business Automation",
    eyebrow: "Smarter systems, less manual work",
    shortDescription:
      "AI-powered workflows, lead follow-up automation, CRM orchestration and business process optimization.",
    description:
      "Automation works best when it is grounded in the actual process, data access and operational realities of the business. We design workflows that support teams, improve response times and reduce repetitive manual effort without taking humans out of the loop.",
    deliverables: [
      "Workflow analysis and automation design",
      "Agent or chatbot configuration",
      "CRM, email and platform integrations",
      "Monitoring, fallback logic and reporting",
    ],
    problems: [
      "Lead follow-ups are inconsistent or delayed.",
      "Your team is stuck doing repetitive work that could be automated or streamlined.",
      "You need better integration between systems used for sales, operations and support.",
    ],
    benefits: [
      "More consistent process execution and faster response handling.",
      "Reduced effort on repetitive tasks and improved team focus.",
      "More connected systems with clearer reporting and operational oversight.",
    ],
    useCases: [
      "Businesses looking to automate sales follow-up and lead routing.",
      "Teams needing help connecting data across CRM, comms and operations tools.",
      "Organizations wanting practical AI support for internal processes and customer journeys.",
    ],
    faqs: [
      {
        question: "Do you handle integrations and data access?",
        answer:
          "We assess the systems involved, the required integrations and the data permissions needed to implement a secure and maintainable workflow. Human oversight and operational checks remain important where appropriate.",
      },
      {
        question: "Is automation safe for sensitive workflows?",
        answer:
          "It depends on the system, the data involved, and the policies in place. We evaluate access, security boundaries and validation rules before recommending automation.",
      },
    ],
    process: [
      "Map the process, triggers and required data access",
      "Design workflow logic, fallback paths and oversight",
      "Configure and test the automation in a staged rollout",
      "Monitor results and refine logic over time",
    ],
    related: ["app-development", "digital-marketing", "marketplace-management"],
  },
  {
    slug: "branding-creative",
    title: "Branding & Creative",
    eyebrow: "Distinctive identity, sharper communication",
    shortDescription:
      "Brand systems, visual direction, campaign creatives and product graphics designed to improve clarity and recognition.",
    description:
      "Strong creative work helps businesses communicate more clearly, build trust and stand out across digital and physical touchpoints. We support positioning, identity and content direction in a way that fits the business goals.",
    deliverables: [
      "Brand direction and creative strategy",
      "Visual identity or refresh support",
      "Ad creatives and campaign assets",
      "Packaging and product listing graphics",
    ],
    problems: [
      "The brand feels inconsistent or dated across channels.",
      "Your message is not landing clearly with the audience you want to reach.",
      "Creative assets are not built to support campaigns or product positioning.",
    ],
    benefits: [
      "More strategic brand clarity and stronger positioning.",
      "Improved marketing consistency across channels and assets.",
      "Creative that better supports conversion-focused communications.",
    ],
    useCases: [
      "New ventures needing positioning and visual language.",
      "Businesses launching a refresh or product range.",
      "Teams needing campaign-ready content and consistent brand execution.",
    ],
    faqs: [
      {
        question: "Can you work with existing brand guidelines?",
        answer:
          "Yes. We can build on existing systems or create a focused refresh where needed, depending on the project and business stage.",
      },
      {
        question: "Do you only do digital creative?",
        answer:
          "No. We can support design systems, social content, paid ad creative, packaging concepts and sales asset creation depending on the brief.",
      },
    ],
    process: [
      "Review brand position, audience and asset needs",
      "Define creative direction and visual priorities",
      "Create and refine key assets for rollout",
      "Maintain consistency across launch and ongoing use",
    ],
    related: ["digital-marketing", "social-media-marketing", "website-development"],
  },
] as const

export const portfolioProjects = [
  {
    title: "Concept Project – Growth Launch",
    industry: "Professional Services",
    summary: "Strategic positioning and marketing funnel concept for a consulting brand entering a new service line.",
    outcome: "Concept project to demonstrate positioning, funnel logic and landing page direction.",
    tags: ["Digital Marketing", "Website", "Branding"],
  },
  {
    title: "Concept Project – D2C Store Expansion",
    industry: "E-commerce",
    summary: "Marketplace optimization and retail content concept for a direct-to-consumer growth push.",
    outcome: "Demo project focused on listing clarity, product storytelling and campaign structure.",
    tags: ["Marketplace", "Creative", "Performance"],
  },
  {
    title: "Concept Project – Service Automation",
    industry: "Operations",
    summary: "Workflow automation concept for a service business seeking faster lead capture and follow-up.",
    outcome: "Demo project outlining automation logic, CRM integration and reporting flows.",
    tags: ["Automation", "CRM", "Operations"],
  },
] as const

export const faqItems = [
  {
    question: "What services does CAELSTAR provide?",
    answer:
      "CAELSTAR supports digital marketing, paid advertising, social media marketing, marketplace management, website development, app development, AI automation and branding creative work.",
  },
  {
    question: "Does CAELSTAR work with businesses outside Lucknow?",
    answer:
      "Yes. While based in Lucknow, we work with businesses across India and international markets depending on project needs and communication requirements.",
  },
  {
    question: "Can I hire the agency for a single project?",
    answer:
      "Yes. We work on one-time projects, retainers and custom business solutions depending on the scope and delivery model.",
  },
  {
    question: "How is project pricing determined?",
    answer:
      "Pricing depends on project scope, complexity, timelines, integrations, assets and level of ongoing support needed. We usually define the approach after understanding the business challenge and goals.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It varies. A focused landing page may take a few weeks, while broader digital, app or automation work can take longer depending on milestones, testing and stakeholder feedback.",
  },
  {
    question: "Can CAELSTAR manage Amazon and Flipkart listings?",
    answer:
      "Yes, within agreed scope. Marketplace work depends on seller access, platform permissions, policy requirements, advertising budgets and account responsibilities being established before the work begins.",
  },
  {
    question: "Can you automate existing business processes?",
    answer:
      "Yes, where the workflow, data access and internal process are clear enough to design a secure and maintainable automation. We also review human oversight and fallback paths.",
  },
  {
    question: "Who owns the completed website or software?",
    answer:
      "Ownership is defined in the project agreement and depends on the scope, licensing and handover arrangements. We can clarify this as part of the project setup.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Use the enquiry form on the website, email the team, or contact us through the listed contact channels. We will review the requirement, discuss scope, and define the best next step.",
  },
] as const

export const processSteps = [
  {
    id: "01",
    title: "Discover",
    description: "Understand the business, goals, audience and existing challenges.",
  },
  {
    id: "02",
    title: "Strategize",
    description: "Define scope, deliverables, timelines and success metrics.",
  },
  {
    id: "03",
    title: "Build",
    description: "Execute the marketing, design, development or automation work.",
  },
  {
    id: "04",
    title: "Measure",
    description: "Review agreed performance indicators and delivery milestones.",
  },
  {
    id: "05",
    title: "Improve",
    description: "Use feedback and available data to refine the solution.",
  },
] as const

export const differentiators = [
  "Strategy before execution.",
  "Integrated marketing and technology.",
  "Solutions tailored to business needs.",
  "Transparent communication.",
  "Practical automation.",
  "Continuous improvement and reporting.",
] as const

export const audienceSegments = [
  "Startups and founders.",
  "Small and medium-sized businesses.",
  "E-commerce sellers and D2C brands.",
  "Professional service businesses.",
  "Established and growing organizations.",
] as const

export const engagementModels = [
  {
    title: "One-time projects",
    description: "Ideal for focused marketing, design, website or digital implementation work with clearly defined deliverables.",
  },
  {
    title: "Monthly service retainers",
    description: "For ongoing support, campaign management, optimization and operational communication across digital channels.",
  },
  {
    title: "Custom business solutions",
    description: "For tailored platforms, workflows, automation and digital systems built around your business model and growth goals.",
  },
] as const
