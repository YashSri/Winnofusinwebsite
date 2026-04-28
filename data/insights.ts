export type InsightType = "Research Paper" | "Blog Post" | "Case Study";

export interface InsightEntry {
  id: string;
  title: string;
  type: InsightType;
  publishDate: string;
  author: string;
  excerpt: string;
  tags: string[];
  readTimeMinutes: number;
  coverImageUrl: string;
  pdfDownloadUrl?: string;
  slug: string;
}

export const insights: InsightEntry[] = [
  {
    id: "res-001",
    title:
      "AI-Powered Threat Detection: Mitigating Zero-Day Vulnerabilities in Hybrid Architectures",
    type: "Research Paper",
    publishDate: "2026-02-18",
    author: "WinnoVation Security Research Team",
    excerpt:
      "An in-depth analysis of how proactive, AI-driven managed detection and response (MDR) frameworks outperform traditional endpoint security in identifying hidden zero-day threats.",
    tags: ["Cybersecurity", "Zero-Day Threats", "MDR", "AI"],
    readTimeMinutes: 15,
    coverImageUrl: "/images/insights/zero-day-research.jpg",
    pdfDownloadUrl: "/downloads/zero-day-mitigation-report.pdf",
    slug: "ai-powered-threat-detection-zero-day",
  },
  {
    id: "blog-001",
    title:
      "Securing Enterprise Mobility: Managing IoT and Barcode Printers at Scale",
    type: "Blog Post",
    publishDate: "2026-02-10",
    author: "Enterprise Mobility Team",
    excerpt:
      "Learn how unified mobile device management platforms prevent external threats while maintaining high visibility over heavy application deployments and industrial IoT devices.",
    tags: ["Enterprise Mobility", "IoT Security", "Device Management"],
    readTimeMinutes: 6,
    coverImageUrl: "/images/insights/mobility-management.jpg",
    slug: "securing-enterprise-mobility-iot",
  },
  {
    id: "case-001",
    title: "Transforming Workforce Productivity in the Hybrid Era",
    type: "Case Study",
    publishDate: "2026-01-25",
    author: "WinnoVation Analytics Team",
    excerpt:
      "A comprehensive case study demonstrating how automated time tracking and AI-powered behavior logs increased operational efficiency by 34% without compromising data privacy.",
    tags: ["Employee Productivity", "Compliance", "Hybrid Work"],
    readTimeMinutes: 8,
    coverImageUrl: "/images/insights/productivity-analytics.jpg",
    pdfDownloadUrl: "/downloads/hybrid-productivity-casestudy.pdf",
    slug: "transforming-workforce-productivity-hybrid",
  },
  {
    id: "blog-002",
    title: "Reducing IT Downtime with Unified Operations Platforms",
    type: "Blog Post",
    publishDate: "2026-01-12",
    author: "IT Infrastructure Team",
    excerpt:
      "Explore how centralizing visibility and leveraging automated incident detection can drastically reduce manual workloads and resolve compliance challenges in complex IT architectures.",
    tags: ["IT Operations", "Automation", "Compliance"],
    readTimeMinutes: 5,
    coverImageUrl: "/images/insights/unified-it-ops.jpg",
    slug: "reducing-it-downtime-unified-operations",
  },
];
