import quantumOpenvino from "../content/blog/quantum-openvino.md?raw";
import aiDataAnalytics from "../content/blog/ai-data-analytics-board.md?raw";
import siemensLifecycle from "../content/blog/siemens-lifecycle-management.md?raw";
import agenticPortfolio from "../content/blog/agentic-portfolio-tracker.md?raw";
import multimodalLeadership from "../content/blog/multimodal-ai-leadership.md?raw";

export const blogPosts = [
  {
    slug: "ai-data-analytics-board",
    title: "AI Data Analytics Board — START Hack 2026",
    date: "2026-03-25",
    excerpt:
      "ZR Analytics–style AI dashboard: conversational lab analytics, 3D visuals, and START Hack build notes.",
    mediumUrl: null,
    body: aiDataAnalytics,
  },
  {
    slug: "siemens-lifecycle-management",
    title: "Siemens Lifecycle Management System",
    date: "2026-03-24",
    excerpt:
      "From spreadsheets to a unified installed-base and project workspace for railway infrastructure.",
    mediumUrl: null,
    body: siemensLifecycle,
  },
  {
    slug: "agentic-portfolio-tracker",
    title: "Agentic Portfolio Tracker (HODL)",
    date: "2025-10-24",
    excerpt:
      "Agentic crypto/stock tracker on Base — Hodlini assistant, event-bus sync, and campus demo win.",
    mediumUrl: null,
    body: agenticPortfolio,
  },
  {
    slug: "quantum-openvino",
    title:
      "Quantum AI in Action: Brain Image Analysis with Intel’s OpenVINO",
    date: "2024-10-28",
    excerpt:
      "Intel Student Ambassador Fall Hackathon — QNNs, OpenVINO, and a distributed team across Vienna and Chicago.",
    mediumUrl:
      "https://medium.com/@dikepeter9/quantum-ai-in-action-transforming-brain-image-analysis-through-intels-openvino-64c64c99056c",
    body: quantumOpenvino,
  },
  {
    slug: "multimodal-ai-leadership",
    title: "MALA — multimodal AI & leadership analysis",
    date: "2025-11-30",
    excerpt:
      "MALA: private research codebase — high-level summary; details available under NDA.",
    mediumUrl: null,
    body: multimodalLeadership,
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
