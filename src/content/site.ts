/* Shared copy: navigation, footer, homepage and the smaller pages. */
import { SOLUTIONS } from "./solutions";

export const BRAND = {
  message: "We build intelligent systems that help businesses acquire customers, serve customers and operate better.",
  positioning: "AI Systems, Automation & Intelligent Business Solutions",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions", children: SOLUTIONS.map((s) => ({ label: s.name, to: `/solutions/${s.slug}`, line: s.line })) },
  { label: "Industries", to: "/industries" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const FOOTER = {
  title: "Build Smarter. Operate Better. Scale Faster.",
  text: "KlanLabs builds AI-powered systems, intelligent agents and business automation solutions that help organisations simplify operations and unlock new opportunities.",
  explore: [
    { label: "Solutions", to: "/solutions" },
    { label: "Industries", to: "/industries" },
    { label: "Case Studies", to: "/case-studies" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
  ],
  cta: "Let's Build Something Intelligent.",
};

/* Shared CTA lines from the copy doc — used across pages by context. */
export const CTAS = {
  talk: "Let's Talk About Your Business",
  build: "Build Your AI Solution",
  find: "Find Your Automation Opportunities",
  specialist: "Talk to an AI Specialist",
  assessment: "Get Your AI Assessment",
  call: "Book a Discovery Call",
};

export const HOME = {
  hero: {
    title: "We build intelligent systems that help businesses",
    accent: "acquire, serve and operate better.",
    text: "AI automation, lead generation, custom AI agents and sales systems — designed around the way your business already works.",
  },
  about: {
    eyebrow: "About KlanLabs",
    title: "AI systems, automation and intelligent business solutions.",
    body: [
      "KlanLabs builds AI-powered systems, intelligent agents and business automation solutions that help organisations simplify operations and unlock new opportunities.",
      "We start with how your business actually runs — your tools, your team and your customers — and build systems that take repetitive work off their plate while keeping people in control.",
    ],
  },
  pillars: [
    { title: "Acquire customers", text: "Find the right prospects, personalise outreach and keep a steady pipeline of conversations.", to: "/solutions/ai-lead-generation" },
    { title: "Serve customers", text: "AI agents that answer calls, messages and enquiries the moment they arrive.", to: "/solutions/custom-ai-agents" },
    { title: "Operate better", text: "Connected tools, automated workflows and a CRM that moves every opportunity forward.", to: "/solutions/ai-automation" },
  ],
  voice: {
    eyebrow: "Voice agents",
    title: "Hear an AI receptionist answer in your customer's language.",
    text: "Our AI voice receptionists answer calls, respond to common questions, capture caller information and manage appointment requests. Pick a language to hear a sample greeting — it plays right in your browser.",
    line: "Hi, thanks for calling. I'm the virtual receptionist. I can answer your questions, take your details or book an appointment for you. How can I help today?",
  },
  faq: [
    { q: "What does KlanLabs do?", a: "We build AI automation, lead generation systems, custom AI agents and CRM & sales automation, and we run practical AI workshops so your team can use these systems well." },
    { q: "Do we need to change our existing software?", a: "Not necessarily. We aim to integrate with your existing applications wherever technically possible." },
    { q: "Will humans still be involved?", a: "Yes. We build approval steps, escalation rules and human oversight into the systems we design." },
    { q: "How long does a project take?", a: "It depends on the number of workflows, integrations and complexity involved. We define the scope and implementation timeline before development begins." },
    { q: "Where do we start?", a: "Book a discovery call. We'll look at how your business runs today and point out where automation or AI would make the biggest difference." },
  ],
};

export const INDUSTRIES = [
  { name: "Healthcare", text: "Patient enquiries, appointment scheduling and clinic information.", solutions: ["custom-ai-agents", "ai-automation", "crm-sales-automation"] },
  { name: "Real Estate", text: "Property enquiries, lead qualification and site visit scheduling.", solutions: ["custom-ai-agents", "crm-sales-automation", "ai-lead-generation"] },
  { name: "Ecommerce", text: "Product assistance, order enquiries, customer onboarding and support.", solutions: ["custom-ai-agents", "ai-automation"] },
  { name: "Education", text: "Admission enquiries, course information and student support.", solutions: ["custom-ai-agents", "crm-sales-automation", "ai-workshops"] },
  { name: "Financial Services", text: "Customer enquiries and document collection workflows.", solutions: ["custom-ai-agents", "ai-automation"] },
  { name: "Recruitment", text: "Candidate engagement, initial screening and client acquisition.", solutions: ["custom-ai-agents", "ai-lead-generation", "ai-automation"] },
  { name: "SaaS", text: "Product support, customer onboarding, account assistance and pipeline growth.", solutions: ["custom-ai-agents", "ai-lead-generation", "crm-sales-automation"] },
  { name: "Marketing Agencies", text: "Client acquisition, reporting and campaign workflows.", solutions: ["ai-lead-generation", "ai-automation"] },
  { name: "Professional Services", text: "Enquiry handling, follow-ups and administrative workflows.", solutions: ["ai-automation", "crm-sales-automation", "ai-workshops"] },
] as const;

export const SERVICES = [
  { title: "AI Assessment", text: "We map how your business runs today and identify where automation and AI would remove the most manual work.", cta: CTAS.assessment },
  { title: "Workflow & Integration Builds", text: "We design, build and connect the workflows, integrations and automation logic behind your operations.", cta: CTAS.find },
  { title: "Custom AI Agent Development", text: "Voice, WhatsApp, support, sales and internal agents built around a specific role, objective and set of permissions.", cta: CTAS.build },
  { title: "CRM & Sales Systems", text: "CRM setup, lead routing, follow-up automation, pipeline management and sales reporting.", cta: CTAS.talk },
  { title: "AI Workshops & Training", text: "Practical, hands-on sessions that help teams adopt AI in the work they already do.", cta: "Book an AI Workshop" },
  { title: "Ongoing Optimisation", text: "We monitor performance after launch and keep improving workflows and agents over time.", cta: CTAS.specialist },
];

export const PROCESS = [
  { title: "Discover", text: "Understand your existing processes and identify repetitive work." },
  { title: "Map", text: "Design workflows, integrations and automation logic." },
  { title: "Build", text: "Develop and connect the required systems." },
  { title: "Test", text: "Validate workflows, edge cases and error handling." },
  { title: "Deploy", text: "Launch the automation into your business." },
  { title: "Optimise", text: "Monitor performance and improve workflows over time." },
];

/* Workflow examples we build. These are illustrations of the work, not client results.
   Add real case studies to CASE_STUDIES only once results are verified. */
export const EXAMPLES = [
  { title: "Lead-to-CRM Automation", text: "A prospect fills out a form. Their information is captured, enriched, categorised and automatically added to your CRM. The right salesperson gets notified.", image: "/img/glass-soft.jpg", solution: "ai-automation" },
  { title: "AI Voice Receptionist", text: "Answers incoming calls, responds to common questions, captures caller information and manages appointment requests.", image: "/img/voice-wave.jpg", solution: "custom-ai-agents" },
  { title: "Automated Customer Onboarding", text: "A customer makes a purchase. Their account is created, welcome email is sent, onboarding documents are shared and the internal team is notified.", image: "/img/orb.jpg", solution: "ai-automation" },
  { title: "Invoice Processing", text: "An invoice arrives in your inbox. The system extracts relevant information, categorises the document and routes it for approval.", image: "/img/glass-ice.jpg", solution: "ai-automation" },
  { title: "Database Reactivation", text: "Reconnect with existing leads and dormant contacts through structured communication workflows.", image: "/img/wave-violet.jpg", solution: "crm-sales-automation" },
  { title: "Automated Business Reporting", text: "Your data is collected from different platforms, consolidated and converted into scheduled performance reports.", image: "/img/teal-swirl.jpg", solution: "ai-automation" },
];

export const CASE_STUDIES: { title: string; client: string; summary: string; image: string }[] = [];

export const ABOUT = {
  hero: { title: "We build the systems that do the", accent: "repetitive work.", text: BRAND.message },
  story: [
    "Most businesses don't lack tools. They lack tools that work together — so leads slip between platforms, follow-ups depend on someone remembering and reports take hours.",
    "KlanLabs exists to fix that. We design and build AI automation, lead generation systems, custom AI agents and CRM workflows around the way your business already operates, and we train your team to use them well.",
  ],
  principles: [
    { title: "Built around your business", text: "We start from your processes and existing tools rather than forcing every business into one standard product." },
    { title: "People stay in control", text: "Approvals, escalation rules and human oversight are part of the design, not an afterthought." },
    { title: "Plain language", text: "We explain what we build in terms non-technical owners can act on — no jargon, no black boxes." },
    { title: "Honest results", text: "We scope work clearly, set realistic expectations and never promise numbers we can't stand behind." },
  ],
};
