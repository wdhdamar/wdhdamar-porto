export const siteConfig = {
  name: "Widhi Damar Anandito",
  shortName: "Widhi Damar Anandito",
  initials: "WD",
  role: "Information Systems Graduate",
  tagline:
    "I turn real problems into working solutions across web development, data, and the systems that tie them together.",
  location: "Indonesia",
  email: "wdhdamar@gmail.com",
  availability: "Open to new opportunities",
  socials: {
    github: "https://github.com/wdhdamar",
    linkedin: "https://www.linkedin.com/in/widhi-damar-anandito/",
    email: "mailto:wdhdamar@gmail.com",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "5", label: "Projects built" },
  { value: "30+", label: "Team members led" },
  { value: "500+", label: "Webinar attendees reached" },
];

export const highlights = [
  "End-to-end builder — from database and API design to a clean, responsive UI.",
  "Data-literate — turning raw numbers into decision-ready insight with SQL, spreadsheets, and BI tools.",
  "Systems thinker — requirement analysis, UML, and testing to build the right thing, the right way.",
  "Proven leader — coordinated 30+ person teams and national events, delivering on time under pressure.",
];

export type ProjectType = "code" | "data" | "design";

/** Kinds of external links a project can expose. Each maps to an icon + label. */
export type ProjectLinkType =
  | "live"
  | "repo"
  | "dashboard"
  | "download"
  | "external";

export type ProjectLink = {
  type: ProjectLinkType;
  href: string;
  /** Optional label override; falls back to a sensible default per type. */
  label?: string;
};

export type ProjectOutcome = {
  value: string;
  label: string;
};

export type Project = {
  /** URL-safe id used for /projects/[slug]. */
  slug: string;
  title: string;
  /** Short one-liner shown on the card. */
  description: string;
  /** Longer intro shown at the top of the case study. */
  summary: string;
  tags: string[];
  year: string;
  category: string;
  type: ProjectType;
  featured?: boolean;
  /** External links (dashboard, repo, live demo, downloadable file, ...). */
  links?: ProjectLink[];
  /** Case-study meta. */
  role?: string;
  timeline?: string;
  client?: string;
  /** Case-study body. */
  problem?: string;
  approach?: string[];
  outcomes?: ProjectOutcome[];
  /**
   * Gallery items. Add `src` (a path under /public, e.g. "/projects/foo.png")
   * to show a real image; without `src` a captioned placeholder is rendered.
   */
  gallery?: {
    caption: string;
    aspect?: "wide" | "tall" | "square";
    src?: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "ai-laptop-service",
    title: "AI-Powered Laptop Service Management",
    description:
      "A full-stack Laravel platform that runs a laptop repair shop end to end — with an LLM assistant that turns plain-language complaints into structured diagnoses.",
    summary:
      "A web-based service management system for a laptop repair business, built with Laravel. It digitises the entire repair lifecycle — intake, diagnosis, repair tracking, and handover — and layers in a Groq-powered LLM that reads a customer's plain-language complaint and suggests a likely diagnosis and next steps.",
    tags: ["Laravel", "PHP", "MySQL", "Groq LLM", "REST API", "Blade"],
    year: "2025",
    category: "Web Application",
    type: "code",
    featured: true,
    links: [
      {
        type: "repo",
        href: "https://github.com/wdhdamar/AI-Powered-Laptop-Service-Management-System",
      },
    ],
    role: "Full-stack Developer",
    timeline: "Coursework project",
    problem:
      "Small repair shops usually track service tickets on paper or in a spreadsheet — so nothing is searchable, status updates get lost between the front desk and the technician, and every incoming complaint has to be manually interpreted before work can start. The goal was a single system that owns the whole workflow and takes some of the diagnostic guesswork off the technician's plate.",
    approach: [
      "Built the full service lifecycle in Laravel — customer intake, service tickets, status tracking, and role-based access for admin, technician, and front-desk staff.",
      "Integrated the Groq LLM API so a customer's free-text complaint is parsed into a structured, suggested diagnosis the technician can review and confirm.",
      "Modelled the database around customers, devices, and service records, and wired it to Blade views for a clean day-to-day operating interface.",
    ],
    outcomes: [
      { value: "AI-assisted", label: "Diagnosis from plain text" },
      { value: "Role-based", label: "Admin / technician / staff" },
      { value: "End-to-end", label: "Intake to handover" },
    ],
    gallery: [{ caption: "Service dashboard", aspect: "wide" }],
  },
  {
    slug: "kms-karate-coaches",
    title: "Knowledge Management System for Karate Coaches",
    description:
      "My undergraduate thesis — a Laravel platform that captures and shares coaching knowledge across a provincial karate association.",
    summary:
      "A Knowledge Management System built as my final-year thesis for the Goju-Ryu Karate-Do Association of Banten. It gives coaches one place to document, organise, and share training knowledge — techniques, curricula, and experience — so expertise is retained and passed on instead of living only in individual coaches' heads.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    year: "2025",
    category: "Web Application",
    type: "code",
    links: [
      { type: "repo", href: "https://github.com/wdhdamar/KMS-GojuAssBanten" },
    ],
    role: "Developer & Researcher (thesis)",
    timeline: "Final-year thesis",
    problem:
      "Coaching knowledge in the association was almost entirely tacit — held by senior coaches and shared informally. When a coach moved on, their knowledge left with them, and newer coaches had no central, reliable reference to learn from. The thesis set out to make that knowledge explicit, structured, and reusable.",
    approach: [
      "Applied a knowledge-management framework (SECI-style knowledge conversion) to model how coaching knowledge is captured, stored, and shared across the association.",
      "Built the platform in Laravel with role-based access, so coaches can contribute knowledge and members can browse a structured, searchable repository.",
      "Designed the data model around knowledge categories, articles, and contributors, backed by MySQL and a Bootstrap interface.",
    ],
    outcomes: [
      { value: "Thesis", label: "Undergraduate final project" },
      { value: "Centralised", label: "Shared knowledge base" },
      { value: "Role-based", label: "Coaches & members" },
    ],
    gallery: [{ caption: "Knowledge repository", aspect: "wide" }],
  },
  {
    slug: "data-analytics-dashboard",
    title: "Data & Analytics Dashboard",
    description:
      "An interactive Excel dashboard turning 2,000 raw retail transactions into a filterable, decision-ready view.",
    summary:
      "An interactive Excel dashboard built on 2,000 retail transactions across Indonesia (Jan–Dec 2025). Tracks monthly revenue trends, individual sales rep performance against target, and order/payment breakdowns.",
    tags: ["Excel", "Pivot Tables", "Pivot Charts"],
    year: "2026",
    category: "Data & Analytics",
    type: "data",
    role: "Data Analyst (self-initiated project)",
    timeline: "1 day",
    client: "	Personal project (synthetic dataset)",
    problem:
      "Retail teams often rely on static monthly export sheets to track performance — making it slow to compare category trends, monitor whether each sales rep is hitting target, or catch spikes in cancelled orders. This project simulates that reporting gap using a synthetic dataset of 2,000 transactions spanning 20 cities and 15 sales reps.",
    approach: [
      "Structured 2,000 raw transaction rows into an Excel Table via Power Query, then imported it into Excel's Data Model to build PivotTables across every dimension.",
      "Built 6 PivotTables and PivotCharts covering monthly revenue trend, sales rep performance, top-selling products, category revenue, payment method mix, and order status distribution.",
      "Connected Slicers (category, sales rep, order status) and a Timeline across every chart, so any stakeholder can filter the full dashboard without touching a single formula.",
    ],
    outcomes: [
      { value: "Rp 5.3B", label: "Revenue analyzed" },
      { value: "2000", label: "Transactions processed" },
      { value: "6", label: "Interactive Visuals" },
    ],
    gallery: [
      { caption: "Full dashboard — no filters applied", aspect: "wide", src: "/projects/dasbor-retail.jpg" },
      { caption: "Sliced by sales rep — Andi Pratama's numbers only", aspect: "wide", src: "/projects/sales-andi-pratama.png" },
      { caption: "Sliced by order status — cancelled orders only", aspect: "wide", src: "/projects/transaksi-dibatalkan.png" },
    ],
  },
  {
    slug: "spk-smart-method",
    title: "Decision Support System — SMART Method",
    description:
      "A Next.js decision-support app that ranks alternatives against weighted criteria using the SMART method, in real time.",
    summary:
      "A web-based Decision Support System that implements the SMART (Simple Multi-Attribute Rating Technique) method. Users define criteria with benefit/cost types and weights, enter alternatives, and get a normalised, ranked recommendation that updates live as inputs change.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    year: "2026",
    category: "Web Application",
    type: "code",
    links: [
      { type: "repo", href: "https://github.com/wdhdamar/SPK---Smart-Method-App" },
    ],
    role: "Developer",
    timeline: "Personal project",
    problem:
      "Choosing between options against several competing criteria is hard to do by hand — the weighting and normalisation math is fiddly and easy to get wrong. The goal was an app that makes the SMART decision method approachable: enter the criteria and options, and let the tool handle the calculation transparently.",
    approach: [
      "Implemented the full SMART pipeline in TypeScript — weight normalisation, min-max normalisation of benefit/cost criteria, and weighted scoring — in a dedicated utility module.",
      "Built focused React components for each step: criteria input, alternative input, and a results view that shows the computed ranking.",
      "Kept the calculation reactive, so the ranking recomputes instantly whenever weights or values change.",
    ],
    outcomes: [
      { value: "SMART", label: "Multi-criteria method" },
      { value: "Real-time", label: "Live ranking" },
      { value: "Benefit/Cost", label: "Criteria types" },
    ],
    gallery: [{ caption: "Criteria & ranking view", aspect: "wide" }],
  },
  {
    slug: "gis-pondok-aren",
    title: "Web GIS — Pondok Aren",
    description:
      "An interactive web map of the Pondok Aren district, with layered spatial data, multiple basemaps, and search built on Leaflet.",
    summary:
      "A Web-based Geographic Information System for the Pondok Aren district (South Tangerang), built with CodeIgniter and Leaflet.js. It overlays administrative boundaries, roads, rivers, and points of interest on switchable basemaps, with tools to search, locate, and toggle layers.",
    tags: ["CodeIgniter", "Leaflet.js", "PHP", "MySQL", "AdminLTE"],
    year: "2026",
    category: "Web GIS",
    type: "code",
    links: [
      {
        type: "repo",
        href: "https://github.com/wdhdamar/GIS-Webapp-Pondok-Aren",
      },
    ],
    role: "Developer",
    timeline: "Coursework project",
    problem:
      "Spatial information about a district — where the boundaries, roads, rivers, and key points sit — is usually scattered across static maps and documents. The aim was a single interactive map that brings those layers together and lets anyone explore them in the browser.",
    approach: [
      "Built an interactive map with Leaflet.js, layering administrative boundaries, roads, rivers, and halal points of interest as toggleable, grouped overlays.",
      "Wired in multiple basemaps (Google Satellite/Roads, Esri, OpenStreetMap) plus map controls — geocoder search, geolocation, and a minimap.",
      "Served it through a CodeIgniter backend with an AdminLTE-based interface for managing the underlying spatial data.",
    ],
    outcomes: [
      { value: "4+", label: "Spatial layers" },
      { value: "Multi-basemap", label: "Satellite / street / OSM" },
      { value: "Search + locate", label: "Map controls" },
    ],
    gallery: [{ caption: "Interactive district map", aspect: "wide" }],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectTypeLabels: Record<ProjectType, string> = {
  code: "Development",
  data: "Data & Analytics",
  design: "Design",
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Karate Extracurricular Coach",
    company: "SDIT Asy-Syukriyyah Tangerang",
    period: "Aug 2022 — Jun 2026",
    location: "Part-time",
    description:
      "Designed and led the school's karate program, coaching 40+ students each year in technique, discipline, and competition readiness.",
    achievements: [
      "Built each year's syllabus and training plan from scratch, tailored to grade levels 3–5.",
      "Scouted and mentored standout students, producing 3+ competition medalists every year.",
    ],
  },
  {
    role: "Editorial & Publishing Intern",
    company: "PPID UIN Syarif Hidayatullah Jakarta",
    period: "Apr 2025 — Aug 2025",
    location: "Internship",
    description:
      "Managed and published content on the institution's public-information website, supporting its public-transparency (monev) reporting.",
    achievements: [
      "Contributed to content management that helped UIN Jakarta earn an “Informative” rating in the public information disclosure assessment.",
      "Benchmarked the site against other universities and refined content layout for a cleaner user experience.",
    ],
  },
  {
    role: "Multimedia Intern",
    company: "Klinik Pratama Makmur Jaya",
    period: "Mar 2025 — Apr 2025",
    location: "Internship",
    description:
      "Planned and produced social media content for the clinic across Instagram and TikTok — from visuals to short-form video.",
    achievements: [
      "Grew the clinic's Instagram engagement by 300%+ through a focused content and visual strategy.",
      "Designed print promo materials — flyers, brochures, and banners — alongside the digital content.",
    ],
  },
  {
    role: "Editorial & Publishing Intern",
    company: "Public Information & PR Center, UIN Jakarta",
    period: "Dec 2024 — Mar 2025",
    location: "Internship",
    description:
      "Published the newsroom team's journalism, photography, and design work to the institution's website, keeping content timely and on-standard.",
    achievements: [
      "Restructured the site's photo galleries so event documentation was easier to browse and access.",
      "Coordinated with the editorial team to keep publishing and layout updates on schedule.",
    ],
  },
  {
    role: "Event Crew",
    company: "Pandawa Kreasi Nusantara",
    period: "Feb 2026",
    location: "Freelance",
    description:
      "Supported on-site event operations, making sure equipment and logistics were ready and running smoothly throughout.",
    achievements: [
      "Coordinated equipment distribution and handled last-minute requests to keep events on track.",
      "Managed setup and teardown of event equipment end to end.",
    ],
  },
];

export const organizationalExperience: ExperienceItem[] = [
  {
    role: "Head of Education & Research Division",
    company: "Information Systems Student Association, UIN Jakarta",
    period: "Jun 2024 — Apr 2025",
    location: "Division Head",
    description:
      "Led the Education & Research division — setting the agenda, delegating to staff, and steering programs through to completion.",
    achievements: [
      "Designed and delivered 5 division work programs, all reaching 100%+ of their targets.",
      "Guided staff through execution with regular coordination, consultation, and problem-solving.",
    ],
  },
  {
    role: "Education & Research Staff",
    company: "Information Systems Student Association, UIN Jakarta",
    period: "Aug 2023 — Apr 2024",
    location: "Staff",
    description:
      "Acted as the main point of contact for students entering academic competitions, coordinating funding, mentorship, and logistics.",
    achievements: [
      "Facilitated funding and mentorship for 13 student competition teams.",
      "Recruited 11 mentors via social media to support competition participants.",
    ],
  },
  {
    role: "Public Relations & Documentation",
    company: "Goju-Ryu Karate-Do Association Indonesia — Banten",
    period: "Jul 2018 — Jun 2023",
    location: "Member",
    description:
      "Handled communications and documentation for the provincial karate association, keeping members informed and activities well-archived.",
    achievements: [
      "Delivered 14+ strategic updates on championships and belt exams to members — all on time.",
      "Documented 10 organizational events to support the association's archive and publications.",
    ],
  },
];

export const leadershipExperience: ExperienceItem[] = [
  {
    role: "Project Leader",
    company: "Texplorum National Webinar 2025",
    period: "Jan 2025 — Feb 2025",
    location: "Team of 26 · 508 attendees",
    description:
      "Led end-to-end delivery of a national webinar — from committee structure and cross-division coordination to execution and evaluation.",
    achievements: [
      "Drew 508 attendees across Zoom and YouTube Live — 2.4× the initial 210 target.",
      "Resolved a last-minute speaker issue to keep the event on schedule, and secured coverage on UIN Jakarta's official media.",
    ],
  },
  {
    role: "Project Leader",
    company: "Enterprise App Project — Coursework",
    period: "Mar 2024 — Jul 2024",
    location: "Team of 30",
    description:
      "Led a 30-person team building an enterprise system, defining scope, timeline, and module ownership across the group.",
    achievements: [
      "Delivered every module on schedule while coordinating documentation and progress reporting to faculty.",
    ],
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    skills: [
      "PHP",
      "Laravel",
      "CodeIgniter",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },
  {
    category: "Frontend & UI",
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "Blade",
      "HTML & CSS",
      "Responsive Design",
    ],
  },
  {
    category: "Databases & Data",
    skills: [
      "MySQL",
      "SQL",
      "Excel (PivotTables & Power Query)",
      "Data Analysis",
    ],
  },
  {
    category: "AI & APIs",
    skills: ["LLM APIs (Groq)", "REST API", "API Integration"],
  },
  {
    category: "GIS & Tools",
    skills: ["Leaflet.js", "Web GIS", "Git & GitHub"],
  },
  {
    category: "Analysis & Leadership",
    skills: [
      "Requirement Analysis",
      "UML",
      "Software Testing",
      "Team Leadership",
    ],
  },
];
