/* Copy for the five Solutions pages, section by section, exactly as supplied in
   "KLANLABS — Solutions Website Copy & Content Architecture". Edit words here. */

export type Item = { title: string; text: string };
export type Block =
  | { type: "problem"; eyebrow: string; title: string; body: string[]; points: string[]; closing?: string }
  | { type: "solution"; eyebrow: string; title: string; body: string[]; image: string }
  | { type: "cards"; eyebrow: string; title: string; intro?: string; items: Item[]; note?: string }
  | { type: "scenarios"; eyebrow: string; title: string; items: Item[] }
  | { type: "steps"; eyebrow: string; title: string; items: Item[] }
  | { type: "chips"; eyebrow: string; title: string; intro?: string; items: string[]; note?: string }
  | { type: "groups"; eyebrow: string; title: string; intro?: string; groups: { label: string; items: string[] }[]; note?: string }
  | { type: "faq"; eyebrow: string; title: string; items: { q: string; a: string }[] };

export type Solution = {
  slug: string;
  name: string;
  line: string;
  image: string;
  seo: { title: string; description: string };
  hero: { eyebrow: string; title: string; accent: string; body: string[]; primary: string; secondary: string };
  /* the live workflow demo under the hero: each node lights up in turn */
  flow: { label: string; nodes: { title: string; text: string }[] };
  blocks: Block[];
  cta: { title: string; text: string; button: string };
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "ai-automation",
    name: "AI Automation",
    line: "Connect your tools, streamline workflows and eliminate manual tasks across your business.",
    image: "/img/glass-blue.jpg",
    seo: {
      title: "AI Automation Services for Businesses | KlanLabs",
      description:
        "Automate business workflows, connect applications and eliminate repetitive tasks with intelligent AI automation solutions from KlanLabs.",
    },
    hero: {
      eyebrow: "AI Automation",
      title: "Your Business Has Better Things to Do Than",
      accent: "Repetitive Work.",
      body: [
        "We design and implement intelligent automation systems that connect your tools, streamline workflows and eliminate manual tasks across your business.",
        "From everyday operations to complex business processes, we help your team spend less time managing work and more time moving business forward.",
      ],
      primary: "Automate Your Business",
      secondary: "Explore Automation Solutions",
    },
    flow: {
      label: "Lead-to-CRM automation",
      nodes: [
        { title: "Form submitted", text: "A prospect fills out a form" },
        { title: "Captured & enriched", text: "Details captured and categorised" },
        { title: "Added to CRM", text: "Record created automatically" },
        { title: "Salesperson notified", text: "The right person gets the lead" },
      ],
    },
    blocks: [
      {
        type: "problem",
        eyebrow: "The problem",
        title: "Too Much Work. Too Many Tools. Too Many Manual Processes.",
        body: [
          "Your team shouldn't have to spend hours moving data between platforms, following up with leads, updating spreadsheets or managing repetitive tasks.",
          "Yet that's exactly where valuable time goes in most businesses.",
        ],
        points: [
          "Leads get lost between platforms.",
          "Teams manually update multiple systems.",
          "Follow-ups depend on someone remembering.",
          "Reports take hours to prepare.",
          "Information gets scattered across different tools.",
          "Repetitive tasks slow down everyday operations.",
        ],
        closing: "The problem isn't a lack of tools. It's that your tools don't work together.",
      },
      {
        type: "solution",
        eyebrow: "What we build",
        title: "Connected Systems. Automated Workflows. Better Operations.",
        body: [
          "KlanLabs builds AI-powered automation systems that connect the applications your business already uses and make them work together.",
          "We identify repetitive processes, design intelligent workflows and implement automation that reduces manual intervention while keeping your team in control.",
        ],
        image: "/img/blocks.jpg",
      },
      {
        type: "cards",
        eyebrow: "What we automate",
        title: "What We Automate",
        items: [
          { title: "Workflow Automation", text: "Connect business applications and automate repetitive tasks across departments." },
          { title: "Lead & Customer Automation", text: "Automatically capture, organise, qualify and distribute incoming enquiries." },
          { title: "Communication Automation", text: "Automate emails, WhatsApp messages, notifications and customer follow-ups." },
          { title: "Data & Reporting Automation", text: "Move information between platforms, consolidate data and generate reports automatically." },
          { title: "Document & Process Automation", text: "Extract information, process documents and streamline administrative workflows." },
          { title: "AI-Powered Decision Workflows", text: "Use AI to classify information, analyse inputs and trigger appropriate business actions." },
        ],
      },
      {
        type: "scenarios",
        eyebrow: "Real-world examples",
        title: "Imagine If Your Business Ran Like This.",
        items: [
          { title: "Lead-to-CRM Automation", text: "A prospect fills out a form. Their information is captured, enriched, categorised and automatically added to your CRM. The right salesperson gets notified." },
          { title: "Automated Customer Onboarding", text: "A customer makes a purchase. Their account is created, welcome email is sent, onboarding documents are shared and the internal team is notified." },
          { title: "Invoice Processing", text: "An invoice arrives in your inbox. The system extracts relevant information, categorises the document and routes it for approval." },
          { title: "Automated Business Reporting", text: "Your data is collected from different platforms, consolidated and converted into scheduled performance reports." },
        ],
      },
      {
        type: "groups",
        eyebrow: "Tools & integrations",
        title: "Your Existing Tools. Working Better Together.",
        intro: "We build automation around the platforms your business already depends on. Examples include:",
        groups: [
          { label: "CRM", items: ["HubSpot", "Salesforce", "Zoho", "Pipedrive"] },
          { label: "Communication", items: ["Gmail", "Outlook", "Slack", "WhatsApp"] },
          { label: "Marketing", items: ["Meta", "Google Ads", "Mailchimp", "Klaviyo"] },
          { label: "Automation", items: ["n8n", "Make", "Zapier"] },
          { label: "Data", items: ["Google Sheets", "Airtable", "Databases"] },
          { label: "AI", items: ["OpenAI", "Other compatible AI models"] },
        ],
        note: "Integrations depend on platform APIs, permissions and technical compatibility.",
      },
      {
        type: "steps",
        eyebrow: "Our process",
        title: "From Manual Processes to Intelligent Workflows.",
        items: [
          { title: "Discover", text: "Understand your existing processes and identify repetitive work." },
          { title: "Map", text: "Design workflows, integrations and automation logic." },
          { title: "Build", text: "Develop and connect the required systems." },
          { title: "Test", text: "Validate workflows, edge cases and error handling." },
          { title: "Deploy", text: "Launch the automation into your business." },
          { title: "Optimise", text: "Monitor performance and improve workflows over time." },
        ],
      },
      {
        type: "chips",
        eyebrow: "Who is this for",
        title: "Who Is This For?",
        items: ["Ecommerce businesses", "SaaS companies", "Marketing agencies", "Healthcare providers", "Education companies", "Professional services", "Recruitment businesses", "Growing enterprises"],
      },
      {
        type: "faq",
        eyebrow: "FAQ",
        title: "Questions about AI automation",
        items: [
          { q: "What is AI automation?", a: "AI automation combines artificial intelligence with workflow automation to perform tasks, process information and trigger business actions with less manual intervention." },
          { q: "Do we need to change our existing software?", a: "Not necessarily. We aim to integrate with your existing applications wherever technically possible." },
          { q: "Can you automate multiple departments?", a: "Yes. We can design connected workflows across sales, marketing, operations, finance and customer support." },
          { q: "Can automation include human approvals?", a: "Yes. Workflows can include approval steps, escalation rules and human oversight." },
          { q: "How long does implementation take?", a: "It depends on the number of workflows, integrations and complexity involved. We define the scope and implementation timeline before development." },
        ],
      },
    ],
    cta: {
      title: "Stop Managing Processes. Start Automating Them.",
      text: "Your team has enough to do. Let intelligent systems handle the repetitive work.",
      button: "Let's Automate Your Business",
    },
  },
  {
    slug: "ai-lead-generation",
    name: "AI Lead Generation",
    line: "Identify potential customers, enrich prospect data, personalise outreach and build a stronger pipeline.",
    image: "/img/robot-net.jpg",
    seo: {
      title: "AI Lead Generation Services | KlanLabs",
      description:
        "Build intelligent lead generation systems with prospect sourcing, data enrichment, personalised outreach and automated qualification.",
    },
    hero: {
      eyebrow: "AI Lead Generation",
      title: "Find the Right Prospects. Start Better Conversations.",
      accent: "Build a Stronger Pipeline.",
      body: [
        "We build AI-powered lead generation systems that help businesses identify potential customers, enrich prospect data, personalise outreach and create consistent opportunities.",
        "From prospect discovery to qualified conversations, we automate the work behind your sales pipeline.",
      ],
      primary: "Build My Lead Generation System",
      secondary: "Explore Our Capabilities",
    },
    flow: {
      label: "Prospect to conversation",
      nodes: [
        { title: "Ideal customer", text: "Industries, sizes, decision-makers" },
        { title: "Prospects sourced", text: "Companies that match your criteria" },
        { title: "Data enriched", text: "Validated, useful records" },
        { title: "Personalised outreach", text: "Relevant messages, sent on time" },
        { title: "Qualified & routed", text: "Interested prospects reach sales" },
      ],
    },
    blocks: [
      {
        type: "problem",
        eyebrow: "The challenge",
        title: "Your Sales Team Shouldn't Spend All Day Looking for People to Sell To.",
        body: [
          "Finding the right prospects is only the beginning.",
          "Businesses spend countless hours researching companies, finding decision-makers, verifying contact information, writing personalised messages and managing follow-ups.",
          "And even after all that work, many prospects never respond.",
        ],
        points: [
          "Prospect research takes too much time.",
          "Contact databases contain outdated information.",
          "Outreach messages lack personalisation.",
          "Follow-ups are inconsistent.",
          "Sales teams struggle to identify high-intent prospects.",
          "Lead generation becomes difficult to scale.",
        ],
      },
      {
        type: "solution",
        eyebrow: "Our approach",
        title: "Build a Smarter Prospecting Engine.",
        body: [
          "KlanLabs develops intelligent lead generation infrastructure that automates prospect discovery, data enrichment and personalised outreach.",
          "We connect multiple data sources and communication platforms to create a repeatable prospecting workflow.",
          "Your team spends less time searching for leads and more time having meaningful sales conversations.",
        ],
        image: "/img/data-wave.jpg",
      },
      {
        type: "cards",
        eyebrow: "What we offer",
        title: "What We Offer",
        items: [
          { title: "AI Prospect Research", text: "Identify companies and potential customers based on your ideal customer profile." },
          { title: "Lead Sourcing", text: "Build targeted prospect lists using relevant business data sources." },
          { title: "Data Enrichment", text: "Enrich prospect records with available company information, job titles and verified contact details." },
          { title: "AI Personalisation", text: "Generate personalised outreach using relevant information about prospects and their businesses." },
          { title: "Automated Outreach", text: "Build email and other permitted outbound communication workflows." },
          { title: "Lead Qualification", text: "Evaluate prospect responses against your qualification criteria." },
          { title: "Automated Follow-ups", text: "Create structured follow-up sequences based on prospect behaviour." },
          { title: "Meeting Booking", text: "Route interested prospects towards your sales team and available calendars." },
        ],
      },
      {
        type: "steps",
        eyebrow: "How it works",
        title: "From Prospect Discovery to Sales Conversations.",
        items: [
          { title: "Define Your Ideal Customer", text: "Identify your target industries, company sizes, locations, decision-makers and buying signals." },
          { title: "Find Relevant Prospects", text: "Source companies and contacts that match your criteria." },
          { title: "Enrich the Data", text: "Collect and validate available information to create useful prospect records." },
          { title: "Personalise Outreach", text: "Use AI to create relevant messages based on prospect context." },
          { title: "Launch Campaigns", text: "Execute outreach sequences through your selected communication platforms." },
          { title: "Qualify & Route Responses", text: "Identify interested prospects and route them to the appropriate sales representative." },
        ],
      },
      {
        type: "chips",
        eyebrow: "Use cases",
        title: "Lead Generation Use Cases",
        items: ["B2B prospecting", "Agency client acquisition", "SaaS customer acquisition", "Enterprise account-based marketing", "Recruitment client acquisition", "Franchise and partnership outreach", "Local business prospecting", "Reactivation of existing databases"],
      },
      {
        type: "chips",
        eyebrow: "Your stack",
        title: "Built Around Your Existing Stack",
        intro: "We can integrate with platforms such as:",
        items: ["Apollo", "Clay", "LinkedIn", "HubSpot", "Salesforce", "Smartlead", "Instantly", "Google Sheets", "CRM platforms", "Email verification services"],
        note: "Availability and functionality depend on platform access, integrations and applicable usage policies.",
      },
      {
        type: "steps",
        eyebrow: "Our process",
        title: "Our Process",
        items: [
          { title: "Define", text: "Define your target audience." },
          { title: "Design", text: "Design your prospecting strategy." },
          { title: "Configure", text: "Configure data sourcing and enrichment." },
          { title: "Build", text: "Build personalisation and outreach workflows." },
          { title: "Route", text: "Configure qualification and routing." },
          { title: "Optimise", text: "Monitor campaign performance and optimise." },
        ],
      },
      {
        type: "faq",
        eyebrow: "FAQ",
        title: "Questions about AI lead generation",
        items: [
          { q: "Is this suitable for B2B businesses?", a: "Yes. It is particularly useful for businesses with clearly defined target companies and decision-makers." },
          { q: "Can you find decision-makers?", a: "We can build workflows that identify relevant decision-makers using available business data sources." },
          { q: "Can AI personalise every email?", a: "Yes. AI can generate contextual messages using prospect and company information, with quality controls before sending." },
          { q: "Does this guarantee leads or meetings?", a: "No system can guarantee a particular number of responses or meetings. Results depend on the market, targeting, offer, data quality and outreach execution." },
          { q: "Can you connect this to our CRM?", a: "Yes, where the CRM provides suitable integration capabilities." },
        ],
      },
    ],
    cta: {
      title: "Your Next Customer Is Out There. Let's Build a System to Find Them.",
      text: "Create a repeatable prospecting engine that helps your team spend more time selling.",
      button: "Build Your Lead Generation Engine",
    },
  },
  {
    slug: "custom-ai-agents",
    name: "Custom AI Agents",
    line: "AI agents that understand instructions, interact with customers, process information and perform business tasks.",
    image: "/img/hero-tall.jpg",
    seo: {
      title: "Custom AI Agent Development | KlanLabs",
      description: "Build custom AI agents for sales, customer support, research, business operations and customer engagement.",
    },
    hero: {
      eyebrow: "Custom AI Agents",
      title: "Give Your Business an",
      accent: "AI Workforce.",
      body: [
        "Build intelligent AI agents that understand instructions, interact with customers, process information and perform business tasks.",
        "From answering calls to managing customer conversations and supporting internal teams, we develop AI agents around the way your business actually works.",
      ],
      primary: "Build Your AI Agent",
      secondary: "Explore AI Agent Solutions",
    },
    flow: {
      label: "An AI receptionist at work",
      nodes: [
        { title: "Call comes in", text: "The agent answers immediately" },
        { title: "Understands the request", text: "Context-aware conversation" },
        { title: "Checks your systems", text: "Knowledge base and calendar" },
        { title: "Takes action", text: "Books, confirms or escalates" },
      ],
    },
    blocks: [
      {
        type: "problem",
        eyebrow: "The challenge",
        title: "Your Business Needs More Than Another Chatbot.",
        body: [
          "Traditional automation follows predefined rules. Traditional chatbots respond to limited questions.",
          "But businesses need systems that can understand context, work with information, use connected tools and handle multi-step tasks.",
          "That's where AI agents come in.",
        ],
        points: [
          "Customer enquiries need immediate attention.",
          "Sales teams spend time on repetitive conversations.",
          "Employees repeatedly search for internal information.",
          "Support teams handle the same questions every day.",
          "Research and administrative tasks consume valuable time.",
        ],
      },
      {
        type: "solution",
        eyebrow: "Intelligent AI systems",
        title: "AI Agents Built Around Real Business Work.",
        body: [
          "We design and deploy specialised AI agents that can understand requests, retrieve relevant information, interact with connected applications and perform defined actions.",
          "Each agent is designed around a specific role, business objective and set of permissions.",
        ],
        image: "/img/robot-red.jpg",
      },
      {
        type: "cards",
        eyebrow: "AI agents we build",
        title: "AI Agents We Build",
        items: [
          { title: "AI Voice Receptionist", text: "Answers incoming calls, responds to common questions, captures caller information and manages appointment requests." },
          { title: "AI Sales Agent", text: "Engages prospects, understands their requirements, answers questions and supports the sales qualification process." },
          { title: "AI Customer Support Agent", text: "Handles common customer enquiries, retrieves information and escalates complex issues to human teams." },
          { title: "AI WhatsApp Agent", text: "Manages customer conversations, answers questions, captures leads and supports transactions." },
          { title: "AI Appointment Agent", text: "Schedules meetings, checks availability, sends confirmations and manages rescheduling." },
          { title: "AI Research Agent", text: "Collects information from permitted sources, analyses findings and generates structured research reports." },
          { title: "AI Internal Assistant", text: "Helps employees retrieve company information, access SOPs and complete internal tasks." },
          { title: "AI Recruitment Agent", text: "Supports candidate screening, initial communication, eligibility checks and interview coordination." },
        ],
      },
      {
        type: "chips",
        eyebrow: "What makes an AI agent different",
        title: "From Answering Questions to Taking Action.",
        intro: "Our AI agents can be designed with capabilities such as:",
        items: ["Natural language understanding", "Context-aware conversations", "Knowledge base integration", "Application and API integrations", "Information retrieval", "Workflow execution", "Multi-step task handling", "Human escalation", "Permission-based actions", "Activity logs and monitoring"],
        note: "Capabilities depend on the individual agent architecture and connected systems.",
      },
      {
        type: "scenarios",
        eyebrow: "Industry applications",
        title: "Industry Applications",
        items: [
          { title: "Healthcare", text: "Patient enquiries, appointment scheduling and clinic information." },
          { title: "Real Estate", text: "Property enquiries, lead qualification and site visit scheduling." },
          { title: "Ecommerce", text: "Product assistance, order enquiries and customer support." },
          { title: "Education", text: "Admission enquiries, course information and student support." },
          { title: "Financial Services", text: "Customer enquiries and document collection workflows." },
          { title: "Recruitment", text: "Candidate engagement and initial screening." },
          { title: "SaaS", text: "Product support, customer onboarding and account assistance." },
        ],
      },
      {
        type: "steps",
        eyebrow: "How we build your AI agent",
        title: "How We Build Your AI Agent",
        items: [
          { title: "Understand the Role", text: "Define the responsibilities and objectives." },
          { title: "Design the Intelligence", text: "Configure instructions, knowledge and decision-making logic." },
          { title: "Connect Your Systems", text: "Integrate CRMs, communication channels and business applications." },
          { title: "Configure Guardrails", text: "Define permissions, escalation rules and boundaries." },
          { title: "Test Conversations", text: "Validate accuracy and different scenarios." },
          { title: "Deploy & Improve", text: "Launch the agent and continuously evaluate its performance." },
        ],
      },
      {
        type: "faq",
        eyebrow: "FAQ",
        title: "Questions about AI agents",
        items: [
          { q: "Can AI agents communicate through voice and text?", a: "Yes. Depending on the use case, agents can work through voice calls, WhatsApp, websites and other communication channels." },
          { q: "Can an AI agent access our internal data?", a: "Yes, with appropriate permissions and supported integrations." },
          { q: "Can AI agents perform actions?", a: "Yes. Agents can be configured to perform approved actions through connected tools and APIs." },
          { q: "Will humans still be involved?", a: "Yes. We can build human escalation and approval workflows for sensitive or complex tasks." },
          { q: "Can you build a completely custom AI agent?", a: "Yes. We design agents around specific business requirements rather than forcing every business into one standard chatbot." },
        ],
      },
    ],
    cta: {
      title: "Don't Just Add AI to Your Business. Give It a Job.",
      text: "Tell us what you want to automate and we'll help you design an AI agent around it.",
      button: "Build Your Custom AI Agent",
    },
  },
  {
    slug: "crm-sales-automation",
    name: "CRM & Sales Automation",
    line: "Manage leads, streamline sales processes and keep every opportunity moving.",
    image: "/img/dash.jpg",
    seo: {
      title: "CRM & Sales Automation Solutions | KlanLabs",
      description: "Automate CRM workflows, lead routing, sales follow-ups and pipeline management with intelligent sales automation.",
    },
    hero: {
      eyebrow: "CRM & Sales Automation",
      title: "More Conversations. Better Follow-ups.",
      accent: "Fewer Missed Opportunities.",
      body: [
        "We build intelligent CRM and sales automation systems that help businesses manage leads, streamline sales processes and keep opportunities moving.",
        "From the first enquiry to the final follow-up, we connect your sales activities into one organised system.",
      ],
      primary: "Optimise My Sales Process",
      secondary: "Explore Sales Solutions",
    },
    flow: {
      label: "The connected sales journey",
      nodes: [
        { title: "Capture", text: "Website, ads or WhatsApp enquiry" },
        { title: "Qualify", text: "Information collected and evaluated" },
        { title: "Assign", text: "Routed to the right rep" },
        { title: "Engage", text: "Reminders keep it moving" },
        { title: "Convert", text: "Full history, full visibility" },
      ],
    },
    blocks: [
      {
        type: "problem",
        eyebrow: "The sales gap",
        title: "Leads Are Coming In. But Are They Moving Forward?",
        body: [
          "Generating leads is only one part of growing a business.",
          "Without an organised sales process, potential customers fall through the cracks.",
        ],
        points: [
          "Leads remain untouched in the CRM.",
          "Sales representatives forget follow-ups.",
          "Prospects receive inconsistent communication.",
          "Sales pipelines contain outdated information.",
          "Managers lack visibility into sales activity.",
          "Reporting depends on manual updates.",
        ],
        closing: "A CRM should do more than store contact information. It should help your business move opportunities forward.",
      },
      {
        type: "solution",
        eyebrow: "What we build",
        title: "Turn Your CRM Into an Active Sales System.",
        body: [
          "KlanLabs builds intelligent CRM and sales automation infrastructure that connects lead capture, qualification, routing, follow-ups and reporting.",
          "We help businesses move from manually managing prospects to operating structured sales processes.",
        ],
        image: "/img/glass-dark.jpg",
      },
      {
        type: "cards",
        eyebrow: "Our capabilities",
        title: "Our Capabilities",
        items: [
          { title: "CRM Setup & Customisation", text: "Configure your CRM around your business processes, sales stages and reporting requirements." },
          { title: "Automated Lead Routing", text: "Distribute incoming enquiries based on territory, industry, availability or predefined rules." },
          { title: "Lead Qualification", text: "Automatically classify prospects using predefined criteria and available customer information." },
          { title: "Sales Follow-up Automation", text: "Trigger personalised follow-ups based on prospect actions, sales stages and response behaviour." },
          { title: "Pipeline Management", text: "Automate deal updates, task creation, reminders and sales-stage transitions." },
          { title: "Database Reactivation", text: "Reconnect with existing leads and dormant contacts through structured communication workflows." },
          { title: "Sales Reporting", text: "Create dashboards that track lead activity, pipeline movement, conversion rates and sales performance." },
          { title: "AI Sales Intelligence", text: "Analyse conversations and sales data to identify trends, opportunities and potential bottlenecks." },
        ],
      },
      {
        type: "steps",
        eyebrow: "The connected sales journey",
        title: "Every Lead Has a Next Step.",
        items: [
          { title: "Capture", text: "A prospect submits an enquiry through your website, advertisement, WhatsApp or other channel." },
          { title: "Qualify", text: "The system collects relevant information and evaluates the prospect." },
          { title: "Assign", text: "The lead is routed to the appropriate sales representative." },
          { title: "Engage", text: "Automated communication and reminders keep the conversation moving." },
          { title: "Convert", text: "Your sales team manages the opportunity with complete visibility into its history." },
          { title: "Analyse", text: "Performance data helps identify what's working and where improvements are needed." },
        ],
      },
      {
        type: "chips",
        eyebrow: "Who benefits",
        title: "Who Benefits?",
        items: ["B2B sales teams", "SaaS businesses", "Real estate companies", "Coaching and consulting businesses", "Education companies", "Financial services", "Healthcare providers", "Ecommerce businesses"],
      },
      {
        type: "chips",
        eyebrow: "CRM & technology integrations",
        title: "CRM & Technology Integrations",
        intro: "We work with platforms such as:",
        items: ["HubSpot", "Salesforce", "Zoho CRM", "Pipedrive", "GoHighLevel", "Freshsales", "Google Workspace", "WhatsApp Business Platform", "Email marketing platforms"],
      },
      {
        type: "steps",
        eyebrow: "Our implementation process",
        title: "Our Implementation Process",
        items: [
          { title: "Audit", text: "Audit your existing sales process." },
          { title: "Map", text: "Map your lead journey and sales stages." },
          { title: "Configure", text: "Configure your CRM and integrations." },
          { title: "Automate", text: "Build automation and communication workflows." },
          { title: "Report", text: "Create dashboards and reporting systems." },
          { title: "Launch", text: "Test, deploy and optimise." },
        ],
      },
      {
        type: "faq",
        eyebrow: "FAQ",
        title: "Questions about CRM & sales automation",
        items: [
          { q: "Do you work with our existing CRM?", a: "Yes. We can customise and automate supported CRM platforms." },
          { q: "Can you migrate our existing customer data?", a: "Yes. We can assist with structured data migration, subject to source and destination compatibility." },
          { q: "Can you automate WhatsApp follow-ups?", a: "Yes, through supported WhatsApp Business integrations and applicable messaging rules." },
          { q: "Can we track individual sales representatives?", a: "Yes. Dashboards can be configured to track activities, lead ownership, pipeline progress and performance." },
          { q: "Can you build a CRM from scratch?", a: "We can develop custom CRM functionality where existing platforms are not suitable, working with the appropriate technology stack." },
        ],
      },
    ],
    cta: {
      title: "Stop Losing Opportunities Between Follow-ups.",
      text: "Build a sales system that keeps your leads organised and your team moving.",
      button: "Build Your Sales Automation System",
    },
  },
  {
    slug: "ai-workshops",
    name: "AI Workshops & Training",
    line: "Practical AI workshops and hands-on training that help your team use AI in everyday work.",
    image: "/img/workshop.jpg",
    seo: {
      title: "Corporate AI Workshops & Training | KlanLabs",
      description: "Help your teams adopt AI through practical workshops, customised corporate training and hands-on implementation.",
    },
    hero: {
      eyebrow: "AI Workshops & Training",
      title: "Make AI Work for Your Team.",
      accent: "Not Just Sit in Their Browser.",
      body: [
        "Help your employees understand, adopt and implement AI in their everyday work.",
        "We deliver practical AI workshops and hands-on training that show teams how to use AI tools, automate repetitive tasks and improve business workflows.",
      ],
      primary: "Book an AI Workshop",
      secondary: "Explore Training Programs",
    },
    flow: {
      label: "From awareness to implementation",
      nodes: [
        { title: "Understand your team", text: "Roles, tools and needs" },
        { title: "Find opportunities", text: "AI mapped to each department" },
        { title: "Hands-on workshop", text: "Real tools, real exercises" },
        { title: "Applied at work", text: "Real business scenarios" },
      ],
    },
    blocks: [
      {
        type: "problem",
        eyebrow: "The adoption gap",
        title: "Your Team Has Access to AI. But Are They Actually Using It?",
        body: [
          "Most employees have heard about AI. Many have experimented with different tools.",
          "But using AI occasionally is very different from integrating it into everyday business operations.",
        ],
        points: [
          "Employees don't know which tools to use.",
          "Teams struggle to identify practical AI applications.",
          "AI usage remains limited to basic prompts.",
          "Departments work with disconnected tools.",
          "Businesses struggle to measure AI adoption.",
          "Employees lack structured training and guidance.",
        ],
        closing: "The opportunity isn't simply to introduce AI. It's to help your people use it effectively.",
      },
      {
        type: "solution",
        eyebrow: "Practical AI enablement",
        title: "Move From AI Awareness to Everyday Implementation.",
        body: [
          "KlanLabs helps organisations understand where AI fits into their workflows and how employees can use it to improve productivity.",
          "Our workshops combine practical demonstrations, real business use cases and hands-on exercises.",
          "We focus on helping teams apply AI to the work they already do.",
        ],
        image: "/img/team-meeting.jpg",
      },
      {
        type: "cards",
        eyebrow: "Our training programs",
        title: "Our Training Programs",
        items: [
          { title: "AI Fundamentals", text: "Understand generative AI, AI assistants, language models and their practical business applications." },
          { title: "AI for Productivity", text: "Learn how to use AI for research, writing, analysis, planning and everyday administrative work." },
          { title: "AI Automation", text: "Understand how to connect business applications and automate repetitive workflows." },
          { title: "AI for Sales & Marketing", text: "Explore AI-powered prospecting, personalisation, campaign analysis and sales workflows." },
          { title: "AI for Operations", text: "Learn how to use AI for reporting, document processing, internal knowledge and operational tasks." },
          { title: "Custom AI Agent Training", text: "Understand how AI agents work and how businesses can deploy them responsibly." },
        ],
      },
      {
        type: "scenarios",
        eyebrow: "Training formats",
        title: "Training Formats",
        items: [
          { title: "AI Awareness Sessions", text: "Introduce employees and leadership teams to AI opportunities and practical applications." },
          { title: "Department-Specific Workshops", text: "Train sales, marketing, finance, HR and operations teams around their individual workflows." },
          { title: "Hands-on Implementation Workshops", text: "Help employees build and test AI-powered workflows using relevant tools." },
          { title: "Leadership & Executive Sessions", text: "Help business leaders understand AI opportunities, adoption strategies and implementation priorities." },
          { title: "Ongoing AI Enablement", text: "Provide continuous guidance as teams introduce new AI workflows and tools." },
        ],
      },
      {
        type: "chips",
        eyebrow: "What your team will learn",
        title: "What Your Team Will Learn",
        items: ["Effective AI prompting techniques", "AI research and content workflows", "Document and data processing", "AI-assisted reporting", "Workflow automation", "AI agents and assistants", "Responsible AI usage", "Data privacy and security considerations", "Identifying automation opportunities"],
      },
      {
        type: "chips",
        eyebrow: "Who should attend",
        title: "Who Should Attend?",
        items: ["Founders and business owners", "CXOs and leadership teams", "Sales and marketing teams", "HR and recruitment teams", "Finance and operations teams", "Customer support teams", "Technology and product teams"],
      },
      {
        type: "steps",
        eyebrow: "Our training approach",
        title: "Our Training Approach",
        items: [
          { title: "Understand Your Team", text: "Identify roles, current tools and learning requirements." },
          { title: "Identify Opportunities", text: "Map practical AI applications within each department." },
          { title: "Design the Workshop", text: "Create relevant training materials and exercises." },
          { title: "Deliver Training", text: "Conduct interactive sessions and demonstrations." },
          { title: "Apply Learning", text: "Help participants work through real business scenarios." },
          { title: "Measure Adoption", text: "Identify opportunities for further implementation and improvement." },
        ],
      },
      {
        type: "faq",
        eyebrow: "FAQ",
        title: "Questions about AI workshops",
        items: [
          { q: "Are workshops suitable for non-technical employees?", a: "Yes. We can structure training for employees with no prior AI or technical experience." },
          { q: "Can workshops be customised for our organisation?", a: "Yes. We tailor content to your industry, departments and business requirements." },
          { q: "Do you offer online and in-person training?", a: "Training formats can be arranged based on location, availability and scope." },
          { q: "Can you train an entire department?", a: "Yes. We can organise role-specific sessions for individual departments or larger teams." },
          { q: "Do you provide implementation support after training?", a: "Yes. We can help teams move from learning to actual AI workflow implementation." },
        ],
      },
    ],
    cta: {
      title: "Your Team Doesn't Need More AI Tools. It Needs to Know How to Use Them.",
      text: "Give your employees the knowledge and confidence to work smarter with AI.",
      button: "Schedule an AI Workshop",
    },
  },
];

export const solutionBySlug = (slug: string) => SOLUTIONS.find((s) => s.slug === slug);
