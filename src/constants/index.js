import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

/** @type {{ type: 'hash' | 'route', id?: string, path?: string, title: string }[]} */
export const navLinks = [
  { type: "hash", id: "about", title: "About" },
  { type: "hash", id: "work", title: "Experience" },
  { type: "hash", id: "projects", title: "Projects" },
  { type: "hash", id: "contact", title: "Contact" },
  { type: "route", path: "/blog", title: "Blog" },
];

export const contactEmail = "peter.dike@unilu.ch";

/** Profile / footer contact — used in About and can be reused elsewhere */
export const socialLinks = {
  email: `mailto:${contactEmail}`,
  github: "https://github.com/cpd9",
  linkedin: "https://www.linkedin.com/in/peterdike/",
};

const services = [
  {
    title: "Blockchain & Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "A.I. & Research",
    icon: creator,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences = [
  {
    title: "AI Researcher",
    company_name: "University of Lucerne",
    icon: "/experience/unilu.svg",
    iconBg: "#383E56",
    date: "Aug 2025 – Feb 2026",
    points: [
      "Cross-functional research on NLP models for leadership emergence: timelines, budget, and deliverables.",
      "Stakeholder coordination across theology and computer science.",
      "End-to-end project lifecycle through publication, including risk and scope management.",
      "ML pipelines for sentiment analysis and behavioural pattern recognition.",
    ],
  },
  {
    title: "Ecosystem Builder (Web3 events & community)",
    company_name: "Bitget · Remote",
    icon: "/experience/bitget.svg",
    iconBg: "#E6DEDD",
    date: "Apr 2025 – Nov 2025",
    points: [
      "Blockchain and DeFi events across Switzerland (Zug, Geneva, Montreux): logistics, budgets, cross-functional teams.",
      "Partnerships to grow Web3 adoption in the Swiss ecosystem.",
      "Stakeholder communications; projects delivered on time and in scope.",
      "Community programmes with 300+ attendees across multiple events.",
    ],
  },
  {
    title: "Founder & CEO",
    company_name: "Mercuoory Infinity",
    icon: "/experience/mercuoory.svg",
    iconBg: "#383E56",
    date: "Jan 2020 – Sep 2025",
    points: [
      "15+ client projects in AI and blockchain, end to end from planning to delivery.",
      "Agile teams: timelines, resources, and cross-functional collaboration.",
      "Reduced delivery cycles through prioritisation and risk management.",
      "Scaled operations with focused project selection and execution.",
    ],
  },
  {
    title: "Software Developer (Intern)",
    company_name: "Urbio · Switzerland",
    icon: "/experience/urbio.svg",
    iconBg: "#E6DEDD",
    date: "Feb 2025 – Jul 2025",
    points: [
      "Development workstreams for renewable energy modelling with analysts and stakeholders.",
      "Multi-physics models and parallelised algorithms; faster simulation runs.",
      "Improved prediction quality using municipal energy data.",
    ],
  },
  {
    title: "Intel oneAPI Ambassador",
    company_name: "Intel · Global",
    icon: "/experience/intel.svg",
    iconBg: "#383E56",
    date: "Mar 2023 – Aug 2025",
    points: [
      "10+ workshops on HPC and parallel computing across regions.",
      "Educational content with Intel technical teams and quantum-ready architectures.",
      "Event logistics, stakeholder updates, and post-event follow-up.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "ECOWAS · Nigeria",
    icon: "/experience/ecowas.svg",
    iconBg: "#E6DEDD",
    date: "Jan 2021 – Oct 2023",
    points: [
      "Full-stack delivery for a multi-platform documentation system.",
      "Cross-functional work to streamline microservices and reduce server overhead.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Peter combines strong research discipline with clear communication across disciplines. His work stood out for reliability and depth.",
    name: "PD Dr. Moscheh Mresse",
    designation: "PD Dr.",
    company: "University of Zurich & HSLU",
    image:
      "https://ui-avatars.com/api/?name=Moscheh+Mresse&background=1d1836&color=ffffff&size=128",
  },
  {
    testimonial:
      "A motivated engineer who connects technical execution with project goals. I am happy to provide a full reference on request.",
    name: "Dr. Patrick Renz",
    designation: "Professor",
    company: "University of Lucerne",
    image:
      "https://ui-avatars.com/api/?name=Patrick+Renz&background=915EFF&color=ffffff&size=128",
  },
];

const projects = [
  {
    name: "AI Data Analytics Board",
    description:
      "ZR Analytics–style AI dashboard for lab data — built at START Hack 2026 (conversational UI, 3D visuals, expert agents).",
    tags: [
      { name: "ai", color: "blue-text-gradient" },
      { name: "analytics", color: "green-text-gradient" },
      { name: "starthack", color: "pink-text-gradient" },
    ],
    image: "/projects/ai-analytics-cover.png",
    source_code_link: "https://github.com/cpd9/GUI_Starthack_2026",
    blogSlug: "ai-data-analytics-board",
  },
  {
    name: "Siemens Lifecycle Management",
    description:
      "Installed-base & project workspace for Siemens — replacing spreadsheet chaos with one lifecycle system for railway infrastructure and devices.",
    tags: [
      { name: "siemens", color: "blue-text-gradient" },
      { name: "lifecycle", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
    ],
    image: "/projects/siemens-cover.png",
    source_code_link: "https://github.com/cpd9/base-lifecycle",
    blogSlug: "siemens-lifecycle-management",
  },
  {
    name: "Agentic Portfolio Tracker",
    description:
      "HODL on Base — agentic assistant (Hodlini), portfolio sync across UI, and START Hack Campus demo winner.",
    tags: [
      { name: "agentic", color: "blue-text-gradient" },
      { name: "base", color: "green-text-gradient" },
      { name: "defi", color: "pink-text-gradient" },
    ],
    image: "/projects/hodl-cover.png",
    source_code_link: "https://github.com/cpd9/hodl-portfolio-tracker",
    blogSlug: "agentic-portfolio-tracker",
  },
  {
    name: "Quantum Neural Networks for Brain Image Analysis",
    description:
      "Intel Hackathon project: QNNs and OpenVINO™ for efficient brain image analysis — hybrid quantum–classical modelling.",
    tags: [
      { name: "openvino", color: "blue-text-gradient" },
      { name: "pytorch", color: "green-text-gradient" },
      { name: "quantum", color: "pink-text-gradient" },
    ],
    coverGradient: ["#0c1222", "#5b21b6"],
    coverLabel: "QNN",
    source_code_link:
      "https://github.com/cpd9/Quantum-Neural-Networks-QNNs-for-Brain-Image-Analysis",
    blogSlug: "quantum-openvino",
    pipelineImage: "/projects/intel-qnn-pipeline.png",
    pipelineCaption:
      "Pipeline: preprocessing → PyTorch → OpenVINO → quantum layers → validation (Intel hackathon build).",
  },
  {
    name: "MALA",
    description:
      "Multimodal AI & leadership analysis research codebase (private repository).",
    tags: [
      { name: "mala", color: "blue-text-gradient" },
      { name: "research", color: "green-text-gradient" },
      { name: "private", color: "pink-text-gradient" },
    ],
    coverGradient: ["#1e1b4b", "#4338ca"],
    coverLabel: "MALA",
    source_code_link: "",
    privateRepo: true,
    blogSlug: "multimodal-ai-leadership",
  },
];

export { services, technologies, experiences, testimonials, projects };
