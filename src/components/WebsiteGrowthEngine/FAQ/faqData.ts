/**
 * Growth Engine FAQ content.
 *
 * Extracted verbatim from the flagship design so the copy stays a
 * single source of truth for both the rendered accordion and the
 * FAQPage structured data emitted alongside it.
 */
export interface FaqSpec { term: string; def: string; }
export interface FaqEntry { q: string; paras: string[]; spec?: FaqSpec[]; }

export const faqEntries: FaqEntry[] = [
  {
    q: "How much does a small business website cost?",
    paras: [
      "Our builds are a flat monthly plan with no setup fee and no contract, scoped to your business after the free audit. For context, a custom small business site bought outright typically runs $3,000 to $15,000 one time, plus $50 to $200 a month for hosting and maintenance. We fold the build, hosting, updates, and support into one predictable monthly number instead, so there is no large up-front bill and nothing extra to buy later.",
    ],
  },
  {
    q: "How long does it take to build a website?",
    paras: [
      "Most small business sites of five to fifteen pages take four to eight weeks from kickoff to launch. Your free audit comes back within 48 hours with a firm date for your specific scope rather than a generic estimate. The single biggest cause of delay across the industry is content that is not ready, so we write the copy for you instead of waiting on it.",
    ],
  },
  {
    q: "Do I own my website, domain, and content?",
    paras: [
      "Yes. You own the domain, the design, the copy, and the content outright, and it is registered in your name, not ours. If you ever leave, the site and everything in it goes with you. Ask any agency this before you sign, because some register the domain to themselves or build on a proprietary platform you cannot take with you.",
    ],
  },
  {
    q: "Is there a long-term contract or a setup fee?",
    paras: [
      "No contract and no setup fee. You are on a flexible month to month plan and can stop at any time. There is no minimum term, no cancellation penalty, and no fine print that renews on you.",
    ],
  },
  {
    q: "Is SEO included, and how long until I show up on Google?",
    paras: [
      "SEO is built into every page rather than sold as an add-on, and new sites typically start appearing in search results four to twelve weeks after launch. That covers site speed, mobile usability, clean page structure, title and meta setup, and your Google Business Profile. How fast you climb depends on how competitive your area and service are, which the audit tells you before you commit.",
    ],
  },
  {
    q: "Will my website get found by AI tools like ChatGPT and Google AI Overviews?",
    paras: [
      "Yes, that is built in. AI answer engines read structured, clearly written pages, so every build ships with schema markup, a clean heading structure, and direct answers to the questions your customers actually ask. Your site also gets a chat assistant that qualifies leads around the clock, long after your office has closed.",
    ],
  },
  {
    q: "What is actually included in the build?",
    paras: [
      "Every build includes a custom design, the technical foundation, and the conversion work, with no filler deliverables. Specifically:",
    ],
    spec: [
      { term: "Design", def: "A custom build around your business, not a template." },
      { term: "Technical", def: "Site speed, mobile usability, hosting, domain, migration, and search-ready structure." },
      { term: "Conversion", def: "Clear calls to action, forms, and booking flows built to turn visits into calls." },
      { term: "Ongoing", def: "Updates, monitoring, and support after launch, not just up to handoff." },
    ],
  },
  {
    q: "Will my website actually work well on phones?",
    paras: [
      "Yes. Every build is designed for phone screens first, then adapted up to tablet and desktop, not the other way around. That matters because most visitors to a local service business arrive on a phone, and a site that loads slowly or hides the call button loses them in seconds. One thumb-tap to call sits on every screen.",
    ],
  },
  {
    q: "How much of my time will this take?",
    paras: [
      "Under 30 minutes total for the initial input. After that we handle the design, copy, build, and technical work, and come back to you only for approvals. You do not need to write content, gather assets, or manage the project.",
    ],
  },
  {
    q: "What happens after launch, and who fixes things if they break?",
    paras: [
      "We do. Hosting, updates, security, and monitoring stay with us after launch, so nothing breaks silently while you are running the business. There are no plugin updates for you to do at midnight and no wondering whether the contact form still sends. If something goes wrong, it is our job to catch it and fix it.",
    ],
  },
  {
    q: "Do you work with my industry?",
    paras: [
      "Very likely. We build for law firms, medical and dental practices, restaurants, and local service businesses, and we have worked across legal, dining, healthcare, retail, and professional services. The playbook is the same across all of them: get found, look credible, and make the next step obvious.",
    ],
  },
];
