export interface SolutionProduct {
    name: string;
    description: string;
}

export interface SolutionCard {
    id: string;
    pillar: string;
    partnerName: string;
    problem: string;
    solution: string;
    products: SolutionProduct[];
    accentColor: string;
    pdfDownloadUrl?: string;
}

export const solutions: SolutionCard[] = [
    {
        id: "sol-mobility",
        pillar: "Enterprise Mobility",
        partnerName: "SOTI",
        problem:
            "Mobile device vulnerabilities, external threats, and lack of visibility over heavy application deployments across distributed operations.",
        solution:
            "Unified mobile device management with low-code app development and IoT device security for complete enterprise mobility control.",
        products: [
            {
                name: "SOTI MobiControl",
                description:
                    "Comprehensive device management for enterprise-wide visibility and control over mobile endpoints.",
            },
            {
                name: "SOTI Snap",
                description:
                    "Low-code application development platform for rapid deployment of enterprise mobile applications.",
            },
            {
                name: "SOTI Connect",
                description:
                    "IoT device security and management for industrial printers, scanners, and connected devices.",
            },
        ],
        accentColor: "#3B82F6",
        pdfDownloadUrl: "/downloads/enterprise-mobility-insights.pdf",
    },
    {
        id: "sol-cybersecurity",
        pillar: "Cybersecurity",
        partnerName: "Sophos & Fortra",
        problem:
            "Ransomware attacks, sophisticated phishing campaigns, and zero-day threats that evade traditional security measures.",
        solution:
            "AI-powered threat detection with 24/7 managed detection and response, providing multi-layered defense against advanced persistent threats.",
        products: [
            {
                name: "Sophos Intercept X",
                description:
                    "Next-generation endpoint protection with deep learning AI for predictive threat prevention.",
            },
            {
                name: "Sophos MDR",
                description:
                    "24/7 managed detection and response service with elite threat hunting and incident response.",
            },
            {
                name: "Digital Guardian",
                description:
                    "Enterprise data loss prevention with advanced classification and real-time policy enforcement.",
            },
        ],
        pdfDownloadUrl: "/downloads/cybersecurity-insights.pdf",
        accentColor: "#EF4444",
    },
    {
        id: "sol-productivity",
        pillar: "Employee Productivity",
        partnerName: "We360.ai",
        problem:
            "Inefficient time management, lack of hybrid work visibility, and inability to measure workforce productivity without compromising privacy.",
        solution:
            "AI-powered workforce analytics with automated time tracking and real-time activity monitoring for data-driven productivity insights.",
        products: [
            {
                name: "Automated Time Tracking",
                description:
                    "Intelligent time capture that eliminates manual logging and provides accurate project cost analysis.",
            },
            {
                name: "Real-Time Activity Tracking",
                description:
                    "Live monitoring dashboards with application and website usage analytics for workforce optimization.",
            },
            {
                name: "AI-Powered Dashboards",
                description:
                    "Predictive analytics and behavior pattern recognition for strategic workforce planning.",
            },
        ],
        pdfDownloadUrl: "/downloads/employee-productivity-insights.pdf",
        accentColor: "#10B981",
    },
    {
        id: "sol-it-ops",
        pillar: "Unified IT Operations",
        partnerName: "Motadata",
        problem:
            "IT architectural complexity, high downtime rates, manual incident management, and fragmented monitoring across hybrid infrastructures.",
        solution:
            "AI-powered unified monitoring platform that centralizes visibility, automates incident detection, and accelerates resolution workflows.",
        products: [
            {
                name: "AI-Powered Monitoring",
                description:
                    "Intelligent infrastructure monitoring with anomaly detection and automated alerting across multi-cloud environments.",
            },
            {
                name: "Faster Incident Resolution",
                description:
                    "Automated workflow orchestration with root cause analysis for reduced mean time to resolution.",
            },
        ],
        accentColor: "#8B5CF6",
        pdfDownloadUrl: "/downloads/unified-it-operations-insights.pdf",
    },
];
