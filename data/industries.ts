export interface Industry {
    id: string;
    name: string;
    description: string;
    iconName: string;
    imageUrl?: string;
    accentColor: string;
}

export const industries: Industry[] = [
    {
        id: "ind-quick-commerce",
        name: "Quick Commerce",
        description: "Faster last-mile delivery with secure mobile fulfillment operations.",
        iconName: "Truck",
        imageUrl: "/Quick%20commerce.png",
        accentColor: "#F26522",
    },
    {
        id: "ind-airlines",
        name: "Airlines",
        description: "Connected passenger journeys with reliable airport and fleet operations.",
        iconName: "Cloud",
        imageUrl: "/Airlines.png",
        accentColor: "#2563EB",
    },
    {
        id: "ind-police",
        name: "Police Modernization",
        description: "Digital policing with secured field devices and command visibility.",
        iconName: "Landmark",
        imageUrl: "/Police.png",
        accentColor: "#0F766E",
    },
    {
        id: "ind-excise",
        name: "Excise",
        description: "Compliance-led monitoring for transparent revenue and enforcement workflows.",
        iconName: "Factory",
        imageUrl: "/Excise.png",
        accentColor: "#B45309",
    },
    {
        id: "ind-women-child",
        name: "Women and Child Care",
        description: "Secure welfare systems enabling better care delivery and outcomes.",
        iconName: "HeartPulse",
        imageUrl: "/Women.png",
        accentColor: "#DB2777",
    },
    {
        id: "ind-industry-6",
        name: "Industry 6.0",
        description: "Human-centric automation powered by AI, IoT, and resilient systems.",
        iconName: "Factory",
        imageUrl: "/INDUSTRY%206.0.png",
        accentColor: "#7C3AED",
    },
    {
        id: "ind-banking",
        name: "Banking",
        description: "Protected transactions and fraud-aware operations for digital finance.",
        iconName: "Landmark",
        imageUrl: "/Banking.png",
        accentColor: "#047857",
    },
    {
        id: "ind-logistics",
        name: "Logistic and Transportation",
        description: "Unified visibility across fleets, hubs, and nationwide movement.",
        iconName: "Truck",
        imageUrl: "/Logistics.png",
        accentColor: "#DC2626",
    },
    {
        id: "ind-healthcare",
        name: "Healthcare",
        description: "Real-time patient monitoring and secure clinical workflows at the point of care.",
        iconName: "Stethoscope",
        imageUrl: "/Healthcare.png",
        accentColor: "#0891B2",
    },
    {
        id: "ind-railways",
        name: "Indian Railways",
        description: "Connected operations and field mobility for reliable rail network management.",
        iconName: "Train",
        imageUrl: "/Railways.png",
        accentColor: "#1D4ED8",
    },
];
